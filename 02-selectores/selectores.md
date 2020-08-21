# Selectores

* $ es equivalente a poner jQuery
* jQuery(document).ready(()=>console.log("estamos listos"));
* lo que va dentro del paréntesis del $/jQuery es el selector

Suponemos el siguiente archivo HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Selectores</title>
    <style>
        .cebra{
            border: 5px dashed darkorchid;
        }
        .grande{
        font-size: 40px
        }
    </style>

</head>
<body>
<h1>Selectores</h1>
<p id = "naranja" class = "bordeRojo">Me han puesto el borde rojo con jQuery</p>
<p id = "amarillo" class = "bordeRojo">Me han puesto el borde rojo con jQuery</p>
<p id = "azul" class = "sinBorde">Dame click</p>
<p class = "sinBorde">Dame click</p>
<span class = "cebra">Dame doble click</span>
<p></p>
<span class = "cebra">Dame doble click</span>



<script src="jquery-3.5.1.js"></script>
<!--compruebo que se ha cargado correctamente jQuery en la consola de mi navegador con el siguiente script-->
<script src="selectores.js">

</script>
</body>
</html>
```

## Selectores de ID, Clases y Etiquetas:

* Metemos todo nuestro código jQuery dentro de: 
    * $(document).ready(function(){})
* comprobamos en la consola si el documento está listo
```jsx
$(document).ready(() => {
    console.log("estamos listos");
```

## 1. Selector ID

```jsx
    $("#naranja")//Selecciono etiqueta naranja
        .css("background", "orange") //aplico propiedades
        .css("color", "white");

    $("#amarillo")
        .css("background", "yellow")
        .css("color", "green");

    $("#azul")
        .css("background", "blue")
        .css("color", "red");
```
## 2. Selectores de clases

```jsx
    let miClase = $(".bordeRojo").css('padding',"5px");//selecciono la clase .bordeRojo y le aplico los estilos
    //miClase es un array que recoge los elementos que tienen la clase cebra y le añado unos estilos
    miClase
        .css("border","5px solid red"); //también puedo seguir aplicando estilos así

    $(".cebra").css("cursor","pointer");//añado propiedades a la clase cebra

    //Puedo aplicar eventos recogiendo una la clase
    $('.sinBorde')
        .click(function () {
            $(this).addClass("cebra");//estos estilos los coge porque están cargados en el index
            $(this)
                .css("background", "pink")
        });

    $('.sinBorde')
        .dblclick(function () {
        $(this)
            .css("background", "black")
            .css("border","5px solid blue")
            .css("color","white")
    });
```
## 3. Selectores de etiquetas
```jsx
    let span =$('span');

    span.dblclick(function() {
        $(this).removeClass("cebra")
        $(this).css("padding","5px")
    })

    //Hacemos que al hacer click sobre los parrafos se añada una clase que me los haga grandes
    let miParrafo = $('p').css("cursor","pointer");//Esto hace que me salga la mano cuándo me pongo encima

    //Hago que si hacemos un click se ponga la clase grande, pero que si ya la tiene la borre
    miParrafo.click(function (){

        if($(this).hasClass('grande')){
            $(this).removeClass('grande')
        } else {
            $(this).addClass('grande')
        }
    });

});
```


### Seleccionar varias etiquetas:
Creo una nueva clase en mi documento HTML:

```html
.margen-superior{
            display: block;
            margin-top: 45px;
        }
```

Quiero poner la nueva clase que he creado a los enlaces y a los párrafos:

```jsx
$('p, a').addClass('margen-superior');
```
## 4. Selectores de atributos

Me permite seleccionar las etiquetas de html que tengan ciertos atributos

Añadimos una lista con enlaces a mi HTML
```html
<ol>
    <li><a href="https://es.wikipedia.org/wiki/Jerez_de_la_Frontera" title="sur">Paraiso1</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Ar%C3%A9valo" title="norte">Paraiso2</a></li>
    <li><a href="https://www.buitrago.org/" title="norte">Paraiso3</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Zahara_de_los_Atunes" title="sur">Paraiso4</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Lovaina" title="norte">Paraiso5</a></li>

</ol>
```
Vamos a cambiar el color de fondo por su atributo

```jsx
 $('[title="sur"]').css('background','orange');
    $('[title="norte"]').css('background','lightblue');
```

## 5. .find()
Introducimos la clase highlight y el div con id caja en nuestro documento HTML

```html
    <style>
/*...*/
.highlight{
            border-bottom: 2px solid darkgoldenrod;
        }
    </style>
<!-- ... -->
<div id="caja">
    <p>Hello, I'm a box</p>
    <ul>
        <li>Elemento1</li>
        <li class="highlight">Elemento1</li>
    </ul>
    <span class="highlight">Soy un span como una casa</span>
</div>

```

* marcar la ruta de highlight puede ser complicado pero con find me encuentra los elementos
```jsx
    let busqueda = $("#caja").find('.highlight');
    
    console.log(busqueda)//Me saca el span y li dentro de caja
```


## 6. .parent()

* Lo utilizo para salir un nivel por encima a las etiquetas padre
* Me sirve para saltar de un elemento a otro


```jsx
    //Parent me sirve para subirme un nivel en las etiquetas
    console.log(busqueda.parent().find('sur'));//saca div #caja(está por encima de span) y ul(está por encima de li)

    //Utilizando eq me puedo mover por las etiquetas
    console.log(busqueda.eq(1).parent().find('sur'));//saca div #caja

    console.log(busqueda.eq(0).parent().find('sur'));//saca #ul
});
```