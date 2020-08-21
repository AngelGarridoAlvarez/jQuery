
## 1. Añadir textos, etiquetas y atributos

Suponemos el siguiente archivo html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Textos - Efectos - Animaciones</title>
    <style>
    </style>

    <script type="text/javascript" src="jquery-3.5.1.js"></script>
    <script type="text/javascript" src="textosEtiquetasAtributos.js"></script>
</head>
<body>
<h1>Textos - Efectos - Animaciones</h1>

<h3>Añadir nuevos enlaces</h3>
<input type="text" id="addLink" />
<button id ="addButton" disabled="disabled">Añadir enlace</button>
<!-- añado el atributo disabled para luego eliminarlo en js y probar la funcionalidad-->

<ul id="menu">
    <li><a href="https://www.jerez.es/"></a></li>
    <li><a href="https://www.arevalo.es/"></a></li>
    <li><a href="https://www.buitrago.org/"></a></li>
    <li><a href="https://www.zaharadelosatunes.info/"></a></li>
    <li><a href="https://www.visitleuven.be/es"></a></li>
</ul>

</body>
</html>
```

### 1.1 Iterar etiquetas html:

* Vamos a meter en texto que hay dentro de nuestro enlace HTML en la etiqueta para que se muestre por pantalla

* Para eso vamos a iterar las etiquetas 'a' que hay dentro de nuestro documento textosEtiquetasAtributos.html

```jsx
$(document).ready(function () {
    //alert('El archivo textosEtiquetasAtributos.js está funcionando correctamente con jQuery');

    console.log($('a').length)//me dice el número de elementos a que tengo
```

### .each(function)
* Iterate over a jQuery object, executing a function for each matched element.
```jsx
    function reloadLinks() {
        $('a').each(function (index) {
            console.log($(this));//veo lo que me recoge each con el this
            console.log($(this)[0].host);//selecciono solo los datos que quiero, esto lo he deducido mirando console.log($(this))

            $(this).text($(this)[0].host)
```

## 2. Añadir atributos con .attr() y eliminarlos con .removeAttr
```jsx
            console.log($(this).attr('href'));//aquí me enseña el atributo asociado al href

            let enlace = $(this).attr('href')[0].host; //así también puedo añadir el texto del enlace (aunque ahora mismo en mi código es redundante)
            $(this).text(enlace);
```

### Abrir en una ventana nueva con .attr()
```jsx

            $(this).attr('target', 'blank');
        });
    }

    reloadLinks();

    $('#addLink').attr('placeholder','introduce otro enlace');//así añadimos un mensaje en segundo plano dentro del input
```
### Eliminar atributos

* Creamos un input y un botón para añadir nuevos enlaces
* Primero tenemos que eliminar el atributo de deshabilita el botón en nuestro html

```jsx
    
    $('#addButton')
        .removeAttr('disabled')
        .click(function () {
```
## 3.Métodos append, prepend, html, before y after.

```jsx
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
```
