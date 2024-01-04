import fs from 'fs';
// read theme color from _data/site.json
fs.readFile('data/theme.json', 'utf8', function(err, dataFile){
	if(err){
		console.log(err);
		return;
	}

	// parse file to JSON so that the variables can be accessed
	dataFile = JSON.parse(dataFile);

	var variablesFile = 'src/lib/styles/_variables.scss';
    if(fs.existsSync(variablesFile))
        fs.unlinkSync(variablesFile)
    fs.writeFileSync(variablesFile, "")

    var cssString = ""

    Object.entries(dataFile.colors).forEach(([colorName, values]) => {        
        cssString += `body.${colorName}{ \n`
        Object.entries(values).forEach(([k,v]) => {
            Object.entries(v).forEach(([variableName, variableValue]) => {
                cssString += `--${variableName} : ${variableValue};\n`
            })
        })
        cssString += `}\n`
    })

    fs.appendFileSync(variablesFile, cssString)	
});