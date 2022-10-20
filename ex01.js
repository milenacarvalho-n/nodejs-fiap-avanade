
import fs from 'fs';
const dir = './upload';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log(`Criando diretório ${dir}`);
}
else{
    console.log(`Acessando o diretório ${dir} `);	
}

let msg = "O melhor time de basquete do mundo é o Bucks!!";
let file = "bucks.txt";
let path = `${dir}/${file}`;

if(!fs.existsSync(path)){
    fs.writeFileSync(path, msg);
    console.log(`File ${file} created!`);
}