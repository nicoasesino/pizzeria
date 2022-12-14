
let programa = -1

let napolitana = {
    nombre: "Napolitana",ingredientes: "mozzarella",salsa: "tomates",aceituna: "aceituna",tomate:"ensalada",
}
let pollo = {
    nombre: "Pollo",ingredientes: "mozzarella",salsa: "barbicue",proteina:"pollo",tomate:"ensalada",
}
let vegetariana = {
    nombre: "Vegetariana",ingredientes: "mozzarella",salsa: "tomates",tomate:"ensalada",vegetales:"pimenton"
}

let clientes = {
    nombre: "",
    apellido: "",
    correo: "",
    direccion: "",
    telefono: "", 
}
do {
    programa = Number(prompt("Bienvenidos a la pizzeria Ratatouille \nPor favor seleccionar lo que necesita \n 0 - Salir \n 1 - Pedir Pizza"))
    if (programa === 1){
        clientes.nombre = prompt("Por favor ingresar su nombre")
        clientes.apellido = prompt("Por favor ingresar su apellido")
        clientes.correo = prompt("Por favor ingresar su correo Electronico")
        clientes.telefono = prompt("Por favor ingresar su telefono")
        clientes.direccion = prompt("Por favor ingresar su direccion 'Ejemplo: Calle 12, Quilicura'")
        if (clientes.nombre === " ") {
            alert("Por favor ingresar los datos requeridos")
        }else {
            pedirPizza = Number(prompt("Elija su pizza\n1 - " + napolitana.nombre +"\n2 - " + pollo.nombre +"\n3 - " + vegetariana.nombre))
            if (pedirPizza == 1){
                medioDePago = Number(prompt("Usted a elegido su pizza "+ napolitana.nombre + "\nA continuacion por favor elegir su medio de pago\n1 - Efectivo\n2 - Tarjeta de Credito\n3 - Tarjeta de Debito\n4 - Transferencia Bancaria"))
                if (medioDePago === 1 || medioDePago === 2 || medioDePago === 3 || medioDePago === 4) {
                    alert("Muchas gracias por elegirnos, su pedido esta siendo procesado, todo esto sera enviado a su correo electronico ingresado " + clientes.correo)
                }else{
                    alert("Usted no ha seleccionado su medio de pago, por favor intentar nuevamente")
                }
            }else if (pedirPizza == 2){
                medioDePago = Number(prompt("Usted a elegido su pizza "+ pollo.nombre + "\nA continuacion por favor elegir su medio de pago\n1 - Efectivo\n2 - Tarjeta de Credito\n3 - Tarjeta de Debito\n4 - Transferencia Bancaria"))
                if (medioDePago === 1 || medioDePago === 2 || medioDePago === 3 || medioDePago === 4) {
                    alert("Muchas gracias por elegirnos, su pedido esta siendo procesado, todo esto sera enviado a su correo electronico ingresado " + clientes.correo)
                }else{
                    alert("Usted no ha seleccionado su medio de pago, por favor intentar nuevamente")
                }
            }else if (pedirPizza == 3){
                medioDePago = Number(prompt("Usted a elegido su pizza "+ vegetariana.nombre + "\nA continuacion por favor elegir su medio de pago\n1 - Efectivo\n2 - Tarjeta de Credito\n3 - Tarjeta de Debito\n4 - Transferencia Bancaria"))
                if (medioDePago === 1 || medioDePago === 2 || medioDePago === 3 || medioDePago === 4) {
                    alert("Muchas gracias por elegirnos, su pedido esta siendo procesado, todo esto sera enviado a su correo electronico ingresado " + clientes.correo)
                }else{
                    alert("Usted no ha seleccionado su medio de pago, por favor intentar nuevamente")
                }
            }else {
                alert("Usted no ha seleccionado su pizza")
            }
        }       
        
    }else {
        alert("Usted no ha seleccionado ninguna opcion")
    }

} while (programa != 0);
