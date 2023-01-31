
function login_aventurero() {
/*login para usuarios en base de datos, en este caso solo tenemos un usuario que puede ingresar*/
    console.log ("Bienvenido a Simulador de Dungeons & Dragons")

    for ( let login = 1 ; login <= 3 ; login = login + 1) {
        let usuario_registrado = "Baldur";
        let nombre_usuario = prompt ("Di tu nombre aventurero")
    
        if (nombre_usuario == "" ) {
            console.log ( "No he escuchado tu nombre, acaso eres timido?");
            continue
        }
    
        if (nombre_usuario != usuario_registrado && login < 3) {
            console.log ("No conozco tu nombre aventurero, intenta de nuevo. Nota del DM: la paciencia del guardian dura 3 turnos, ten cuidado", nombre_usuario);
            continue
        }
    
        if (nombre_usuario != usuario_registrado && login == 3) {
            console.log ("No puedes pasar, registrate en el gremio primero");
            break;
        }
    
            console.log ("Que tu viaje sea prospero e interesante", nombre_usuario); break; 
    
    }
}

login_aventurero();


function simulador_evento() {
/*SIMULADOR DE HISTORIA: En este caso el usuario debe tirar en su mesa 4 dados que le daran un
codigo de 4 digitos, ese codigo genera una conbinacion unica de distintos argumentos 
que dan por resultado una historia o un evento para una partida de Dungeons and Dragons
De momento, solo hay 4 codigos en nuestra base de datos por lo tanto son 4 resultado*/
    const NPC2 = "El Capitan Flint";
    const NPC3 = "el Rey Harlaus";
    const item3 = " La espada de Agrok";
    const item2 = "Sello Real";
    const monster1 = "Nigromante";
    const monster3 = "Orco Blanco";
    const monster4 = "Dragon Negro";
    const variante1 =  `Tu barco encalla en una isla desierta pero segun los mapas es la legendaria tierra de Ill. El lider de la  flota , ${NPC2} te envia en una expedicion en busca de ${item3}. Segun la leyenda, esta custodiada por un poderoso ${monster4}` ;
    const variante2 =  `Tu barco encalla en una isla desierta pero segun los mapas es la legendaria tierra de Ill. El lider de la  flota , ${NPC3} te envia en una expedicion en busca de ${item2}. Segun la leyenda, esta custodiada por un poderoso ${monster4}` ;
    const variante3 =  `Tu barco encalla en una isla desierta pero segun los mapas es la legendaria tierra de Ill. El lider de la  flota , ${NPC2} te envia en una expedicion en busca de ${item3}. Segun la leyenda, esta custodiada por un poderoso ${monster3}` ;
    const variante4 =  `Tu barco encalla en una isla desierta pero segun los mapas es la legendaria tierra de Ill. El lider de la  flota , ${NPC2} te envia en una expedicion en busca de ${item3}. Segun la leyenda, esta custodiada por un poderoso ${monster1}` ;
    
    let tirada_dados = prompt ("Tira cuatro de dados de seis caras (6) para conocer tu destino. O puedes retirarte escribiendo SALIR");

    do {

    
    
     if (tirada_dados == "SALIR") {
        console.log("Adios Viajero");
        break;
    }
       
        if(tirada_dados == 1234) {
            console.log(variante1);
             tirada_dados = prompt ("Tira cuatro de dados de seis caras (6) para conocer tu destino. O puedes retirarte escribiendo SALIR");
            continue;
        }

        if(tirada_dados == 1324) {
            console.log(variante2);
             tirada_dados = prompt ("Tira cuatro de dados de seis caras (6) para conocer tu destino. O puedes retirarte escribiendo SALIR");
            continue;
        }

        if(tirada_dados == 1233) {
            console.log(variante3);
             tirada_dados = prompt ("Tira cuatro de dados de seis caras (6) para conocer tu destino. O puedes retirarte escribiendo SALIR");
            continue;
        }
        if(tirada_dados == 1231) {
            console.log(variante4);
             tirada_dados = prompt ("Tira cuatro de dados de seis caras (6) para conocer tu destino. O puedes retirarte escribiendo SALIR");
            continue;
        } 
        else {
             tirada_dados = prompt ("Tira cuatro de dados de seis caras (6) para conocer tu destino. O puedes retirarte escribiendo SALIR");
            continue;
        }
    }

    while ( tirada_dados != "SALIR") 
}
simulador_evento("");

login_aventurero();
simulador_evento("");
