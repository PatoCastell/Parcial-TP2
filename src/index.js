const aRecibos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ]

//Recorrer e imprimir en terminal con el método foreach, mostrando cliente e importe 

//Crear un mensaje con timer de 7 seg al comienzo del código 
const textoConAtraso = (txt) => console.log(txt);
setTimeout(() => textoConAtraso("Pasaron 7 segundos"), 7000);

/* aRecibos.forEach(recibos=>{
    console.log("Cliente: "+recibos.cliente + " importe: "+ recibos.importe);
})

//Ordenar por importe utilizando sort, mostrar el resultado en terminal
aRecibos.sort((a,b)=>a.importe-b.importe);
console.log(aRecibos);

//Nuevo array con clientes que empizan con letra 'R', usando la función filter , mostrar el resultado en terminal 

const filtrados = aRecibos.filter(recibo => recibo.cliente.startsWith("R"))
console.log(filtrados);  

//Nuevo array con la misma estructura de aRecibos, pero aumentando un 30% el importe, , mostrar el resultado en terminal
const conAumento = aRecibos.map(recibo => {
    return {
        id: recibo.id, numero: recibo.numero, importe: (recibo.importe*1.30), cliente: recibo.cliente
    }
})
console.log(conAumento); */

//Crear un archivo en forma sincrónica, agregar al archivo anterior la frase "nuevo texto" 

import fs from 'fs'

fs.writeFileSync('./src/text.txt', 'esto es un texto jaj\n')
fs.appendFileSync('./src/text.txt', 'nuevo texto\n')
const archivo = fs.readFileSync('./src/text.txt','utf-8')
console.log(archivo);

