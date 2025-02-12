const fs = require("fs/promises");

const read = async() => {
   
    const data = await fs.readFile("http-plain.js","UTF-8");
    console.log(data);
       
    
}
read();


