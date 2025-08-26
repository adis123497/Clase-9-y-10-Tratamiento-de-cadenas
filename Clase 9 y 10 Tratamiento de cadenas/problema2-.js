import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Escribe tu correo electronico: ",(correo)=>{
    let correoMin=correo.tolowercase();
    let esValido=correoMin.endsWith("@gmail.com");
    console.log(`correo normalizado: ${correoMin}`);
    console.log(`pertenece a @gmsil.com? ${esValido}?"Si"`)
})
