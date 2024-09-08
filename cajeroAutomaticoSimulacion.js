let cuentas = [
    { nombre: "Mali", saldo: 200, password: 1993 },
    { nombre: "Gera", saldo: 290, password: 2056 },
    { nombre: "Maui", saldo: 67, password: 2001 }
];

function seleccionarCuenta() {
    let seleccion = parseInt(prompt("Selecciona el número de la cuenta: \n1.- Mali \n2.- Gera \n3.- Maui"));
    let cuentaSeleccionada = cuentas[seleccion - 1]; // Selecciona la cuenta correspondiente
    
    if (cuentaSeleccionada) {
        let intentos = 0;
        while (intentos < 3) { // Permite 3 intentos de contraseña
            let password = parseInt(prompt(`Ingresa el password de la cuenta de ${cuentaSeleccionada.nombre}`));
            if (password === cuentaSeleccionada.password) {
                mostrarOpciones(cuentaSeleccionada);
                return;
            } else {
                alert("Contraseña incorrecta, intenta de nuevo.");
                intentos++;
            }
        }
        alert("Has excedido los intentos permitidos.");
    } else {
        alert("Selección inválida.");
    }
}

function mostrarOpciones(cuenta) {
    let opcion = parseInt(prompt(`¿Qué deseas hacer? \n1.- Consultar saldo \n2.- Ingresar monto \n3.- Retirar monto`));

    switch (opcion) {
        case 1:
            alert(`Tu saldo actual es de: ${cuenta.saldo} MXN`);
            break;
        case 2:
            ingresarMonto(cuenta);
            break;
        case 3:
            retirarMonto(cuenta);
            break;
        default:
            alert("Opción no válida.");
            break;
    }
}

function ingresarMonto(cuenta) {
    let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
    if (cuenta.saldo + monto <= 990) {
        cuenta.saldo += monto;
        alert(`Has ingresado: ${monto} MXN. Tu nuevo saldo es: ${cuenta.saldo} MXN`);
    } else {
        alert("No puedes tener más de 990 MXN en tu cuenta.");
    }
}

function retirarMonto(cuenta) {
    let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (cuenta.saldo - monto >= 10) {
        cuenta.saldo -= monto;
        alert(`Has retirado: ${monto} MXN. Tu nuevo saldo es: ${cuenta.saldo} MXN`);
    } else {
        alert("No puedes tener menos de 10 MXN en tu cuenta.");
    }
}

seleccionarCuenta(); // Inicia la interacción con el cajero
