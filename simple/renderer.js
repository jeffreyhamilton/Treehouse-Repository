var fs = require("fs");

function mergeValue(values, content) {
  for(var key in values){
    content = content.replace('{{' + key + '}}', values[key]);
  }
  return content;
}

function view(templateName, values, response){
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  fileContent = mergeValues(values, fileContents);

    response.write(fileContents);
  }) ;


}


module.exportrs.view = view;
