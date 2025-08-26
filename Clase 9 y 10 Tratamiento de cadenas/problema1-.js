import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("escribe tu nombre completo:",(nombre)=>{
    let nombreLimpio= nombre.trim();//elimina espacios inicio/fin
    let caracteres= nombreLimpio.replaceAll("","").length;
    console.log(`Nombre limpio: ""${nombreLimpio}`);
    console.log(`cantidad de caracteres sin espacios: ${caracteres}`)
    menu();
    rl.close()
})
