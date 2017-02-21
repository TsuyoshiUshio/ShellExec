Shell Exec extension
===

This is the VSTS task which enables us to execute shell commands
on the task.

![Shell Exec task](https://raw.githubusercontent.com/TsuyoshiUshio/ShellExec/master/docs/images/usage.png)

Usage
===

Just list your command on the "Code" text area. 
I tested with Linux Hoste Build (Preview).
This task simply creates `./.tempexecution.sh` by the Code then execute it.

Very simple solution.

Motivation
==

I don't want to add a file to execute something.
The pipeline is for someone's GitHub account, so I don't want to add anything.
I could folk it and add shell file, but I don't like the idea.

Using this command, you don't need to add a file for executing some commands.
Also, it is very useful to debug/test something. Although this is a simple task,
it is helpful. That is why I make this publish.





