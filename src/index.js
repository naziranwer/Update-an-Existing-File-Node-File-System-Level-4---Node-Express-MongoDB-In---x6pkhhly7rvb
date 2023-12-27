const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try{
     const existingContent= await fs.readFile(fileName,{encoding:'utf8'});

     const updatedContent=`${existingContent.trim(),fileContent}`;

     const updateFile=await fs.writeFile(fileName.updatedContent);

     return updateFile;
  }
  catch(e){
    console.error(e);
  }
  
};

module.exports = updateFile;
