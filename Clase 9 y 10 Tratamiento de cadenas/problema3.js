import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe un codigo",(codigo)=>{
    let ultimos=codigo.slice(-4);
    console.log(`U;timos 4 caracteres:${ultimos}`);
    menubar();
    rl.question()
})
