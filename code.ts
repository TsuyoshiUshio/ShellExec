/// <reference path="typings/globals/node/index.d.ts" />
"use strict"

import path = require('path');
import tl = require('vsts-task-lib/task');
import fs = require('fs');

import { ToolRunner } from 'vsts-task-lib/toolrunner';

async function run() {
    let bash = new ToolRunner(tl.which("bash", true));
    let multiline = tl.getInput('code', true);
    let filename = './.tempexecution.sh';
    fs.writeFileSync(filename, multiline);

    bash.arg(filename);

    try {
        bash.exec();
        tl.setResult(tl.TaskResult.Succeeded, "Code works.");
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err);
    }
}

run();

