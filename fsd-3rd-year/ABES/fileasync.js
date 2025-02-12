const fs = require("fs/promises");

const write = async() => {
    const newdata = "This is my new work"
    await fs.writeFile("./data 1.txt",newdata,"UTF-8");
       
    
}
write();
console.log("first");

