import fs from 'fs';

const dir = './upload';
const file = 'lakers.txt';
const path = `${dir}/${file}`;

if(!fs.existsSync(dir)){
    fs.mkdir(dir, (err) =>{
        if(err) throw err;
        console.log(`Diretório ${dir} criado com sucesso!`);
    });
} else {
    console.log(`Acessando o diretório ${dir}`);
}

let msg = "O segundo melhor time de basquete do mundo é o Lakers!!";
if(!fs.existsSync(path)){
    fs.writeFile(path, msg, (err) => {
        if(err) throw err;
        console.log(`File ${file} created!`);
    });
}