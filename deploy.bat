call tsc -p .

copy code.js tasks\general

IF EXIST tasks\general\node_modules ( 
RD /s /q tasks\general\node_modules 
)

xcopy /Y /I /S node_modules tasks\\general\\node_modules