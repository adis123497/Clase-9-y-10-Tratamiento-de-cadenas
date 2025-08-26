import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Escribe un mensaje: ", (mensaje) => {
        let posicion = mensaje.toLowerCase().indexOf("error");
        if (posicion !== -1) {
            console.log(`La palabra "error" aparece en la posición: ${posicion}`);
        } else {
            console.log("No se encontró la palabra 'error'.");
        }
        menu();
        rl.close()
    });
