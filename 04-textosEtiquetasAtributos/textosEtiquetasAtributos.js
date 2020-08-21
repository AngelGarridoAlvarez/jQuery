$(document).ready(function () {
    //alert('El archivo textosEtiquetasAtributos.js está funcionando correctamente con jQuery');

    //## 1. Textos
    //### 1.1 Iterar etiquetas html:
    //* Vamos a meter en texto que hay dentro de nuestro enlace HTML en la etiqueta para que se muestre por pantalla
    //* Para eso vamos a iterar las etiquetas 'a' que hay dentro de nuestro documento efectosAnimaciones.html

    console.log($('a').length)//me dice el número de elementos a que tengo

    function reloadLinks() {
        $('a').each(function (index) {//Iterate over a jQuery object, executing a function for each matched element.
            console.log($(this));//veo lo que me recoge each con el this
            console.log($(this)[0].host);//selecciono solo los datos que quiero, esto lo he deducido mirando console.log($(this))

            $(this).text($(this)[0].host)

            //## 2. Añadir atributos con .attr() y eliminarlos con .removeAttr

            console.log($(this).attr('href'));//aquí me enseña el atributo asociado al href

            let enlace = $(this).attr('href')[0].host; //así también puedo añadir el texto del enlace (aunque ahora mismo en mi código es redundante)
            $(this).text(enlace);

            //### Abrir en una ventana nueva con .attr()
            $(this).attr('target', 'blank');
        });
    }

    reloadLinks();

    $('#addLink').attr('placeholder','introduce otro enlace');//así añadimos un mensaje en segundo plano dentro del input

    //### Eliminar atributos

    // * Creamos un input y un botón para añadir nuevos enlaces
    // * Primero tenemos que eliminar el atributo de deshabilita el botón en nuestro html
    $('#addButton')
        .removeAttr('disabled')
        .click(function () {

            //## 3.Métodos append, prepend, html, before y after.

            let valor = $('#addLink').val();//recogemos el valor del input tras pulsar el botón

            $("#addLink").val('introduce otro enlace');//así añadimos otro valor predefinido distinto al input cuándo hacemos click

            //$('ul').append(`<li><a href="${valor}">${valor}</a></li>`);

            //Método .html pero borra toda la lista anterior
            //$('#menu').html(`<li><a href="${valor}">${valor}</a></li>`)

            //Método .prepend lo añade al principio de la lista
            $('ul').prepend(`<li><a href="${valor}">${valor}</a></li>`);

            //Método .before lo mete antes del elemento <li>
            //$('ul').before(`<li><a href="${valor}">${valor}</a></li>`);

            //Método .after lo mete después del <li>
            //$('ul').after(`<li><a href="${valor}">${valor}</a></li>`);

        });
})