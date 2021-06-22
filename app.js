

let genero=0;

do {

    genero=prompt("Coloque numero de opcion para seleccionar el genero de pelicula que desee:\n 1- Comedia \n 2- Terror \n 3- Accion \n 4-Salir");

    switch (genero){
        case `1`: 
            peliculasComedia = prompt (`Coloque el numero de la pelicula de quieres ver: \n 
            1- Cuerpo de élite. \n 
            2- El bebé jefazo. \n 
            3- Infiltrados en la universidad.\n 
            4- Ahora los padres son ellos.\n  `);

            if (peliculasComedia == 1) {
                alert(`Usted Selecciono la pelicula Cuerpo de Elite, En breve se reproducira`);

                }else if (peliculasComedia==2) {
                    alert (`Usted Selecciono la pelicula El bebé jefazo , En breve se reproducira`);

                }else if (peliculasComedia==3) {
                    alert (`Usted Selecciono la pelicula Infiltrados en la universidad , En breve se reproducira`);

                }else if (peliculasComedia==4) {
                    alert(`Usted Selecciono la pelicula Ahora los padres son ellos , En breve se reproducira`)

            }else {

                    alert(`Seleccionaste una opcion incorrecta`)
            }

        case `2`:
            peliculasTerror = prompt (`Coloque el numero de la pelicula de quieres ver: \n 
            1- El laberinto del fauno. \n 
            2- El orfanato \n 
            3- El Resplandor.\n 
            4- La piel que habito.\n  `);

            if (peliculasTerror == 1) {
                alert(`Usted Selecciono la pelicula El laberinto del fauno, En breve se reproducira`);

                }else if (peliculasTerror==2) {
                alert (`Usted Selecciono la pelicula El orfanato, En breve se reproducira`);

                }else if (peliculasTerror==3) {
                alert (`Usted Selecciono la pelicula El Resplandor, En breve se reproducira`);

                }else if (peliculasTerror==4) {
                alert(`Usted Selecciono la pelicula La piel que habito, En breve se reproducira`)

            }else {

                alert(`Seleccionaste una opcion incorrecta`)

            }

        case `3` : 

                peliculasAccion = prompt (`Coloque el numero de la pelicula de quieres ver: \n 
                1- Sicario: Día del soldado. \n 
                2- El ejército de los muertos\n 
                3- Misión de rescate.\n 
                4- Escuadrón suicida.\n  `);

                if (peliculasAccion == 1) {
                    alert(`Usted Selecciono la pelicula Sicario: Día del soldado, En breve se reproducira`);

                    }else if (peliculasAccion==2) {
                    alert (`Usted Selecciono la pelicula El ejército de los muertos, En breve se reproducira`);

                    }else if (peliculasAccion==3) {
                    alert (`Usted Selecciono la pelicula Misión de rescate, En breve se reproducira`);

                    }else if (peliculasAccion==4) {
                    alert(`Usted Selecciono la pelicula Escuadrón suicida, En breve se reproducira`)

                }else {

                    alert(`Seleccionaste una opcion incorrecta`)

                }
    }

    
} while (genero != 4);


alert (`Salio del programa`)


