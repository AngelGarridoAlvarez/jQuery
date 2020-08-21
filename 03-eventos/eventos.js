$(document).ready(function (){
    //alert('eventos cargado');

    //## 1. Eventos MouseOver y MouseOut
    /*
    let caja = $("#caja");

    caja.mouseover(function (){
        $(this).css("background","red");
        $(this).css("transition","900ms all");
        $(this).css("cursor","pointer");
    });

    caja.mouseout(function (){
        $(this).css("background","green");
        $(this).css("transition","900ms all");
    });
     */

    //## 2. Hover

    let caja = $("#caja");

    function cambiaRojo(){
        $(this).css("background","red");
        $(this).css("transition","900ms all");
        $(this).css("cursor","pointer");
    }

    function cambiaVerde(){
        $(this).css("background","green");
        $(this).css("transition","900ms all");
        $(this).css("cursor","pointer");
    }

    caja.hover(cambiaRojo,cambiaVerde);

    //## 3. Click, Doble Click

    caja.click(function (){
        $(this).css("background","blue");
        $(this).css("color","white");
        $(this).css("transition","900ms all");
        $(this).css("cursor","pointer");
    })

    caja.dblclick(function (){
        $(this).css("background","purple");
        $(this).css("color","yellow");
        $(this).css("transition","900ms all");
        $(this).css("cursor","pointer");
    })

    //## 4. Focus - Blur

    let nombre = $("#nombre")//creando una variable evito acceder tantas veces al DOM y JS va más rápido

    //Focus: cuando selecciono el formulario se activan mis comportamientos
    nombre.focus(function (){
        $(this).css("border", "2px solid red");
        $(this).css("background", "orange");
        $(this).css("color", "yellow");

    });
    //Blur: cuando dejo de seleccionar el formulario se activan mis comportamientos
    nombre.blur(function (){
        $(this).css("border", "5px solid green");
        $(this).css("background", "lightblue");
        $(this).css("color", "violet");

        //Mostrar los datos que ponga en el formulario en el div #datos
        $("#datos")
            .text($(this).val())//con el método text me escribo los datos que he recogido con el método val
            .show()//Con el método show hago que aparezca el div al que le puse display none
    });

    //## 5. MouseDown y MouseUp
    //* Capturar cuando presiono el botón del ratón y cuando lo suelto
    //los vamos a aplicar sobre nuestro div #datos
    let datos = $("#datos");
    datos.mousedown(function (){
        $(this).css("border-color","yellow")
    });
    datos.mouseup(function (){
        $(this).css("border-color","grey")
    });

    //## 6. MouseMove
    //captura el evento de movimiento del ratón en un div
    $(document).mousemove(function (){
        $("#coordenadas")
            .text(
              `Eje X : ${event.clientX}; Eje Y : ${event.clientY}`
            );
        //Hago un div con forma redonda que me siga
        $("#followMe")
            .css("left",event.clientX)
            .css("top",event.clientY)
        //Hago desaparecer el cursor de mi ratón
        $('body').css("cursor","none");
    })


})