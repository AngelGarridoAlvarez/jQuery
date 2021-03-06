# Efectos - Animaciones

Suponemos el siguiente código html 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Efectos - Animaciones</title>
    <style>
        .caja{
            width: 500px;
            height: 200px;
            border: 5px dashed black;
            background: #ccc;
            text-align: center;
            line-height: 200px;
            color: black;
            font-size: 19px;
            font-family: "DejaVu Sans Mono";
            margin-top: 15px;
        }

        hr{
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>

    <script type="text/javascript" src="jquery-3.5.1.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script type="text/javascript" src="efectosAnimaciones.js"></script>
</head>
<body>

<h1>Efectos - Animaciones</h1>
<button id="mostrar">
    Mostrar
</button>
<button id="ocultar">
    Ocultar
</button>

<div id="caja" class="caja">
    1. Métodos .hide y .show
</div>

<hr>

<button id="mostrar2">
    Mostrar
</button>
<button id="ocultar2">
    Ocultar
</button>

<div id="caja2" class="caja">
    2. Métodos .fadeIn y .fadeOut
</div>

<hr>

<button id="toggle">
    Toggle
</button>


<div id="caja3" class="caja">
    2. toggle
</div>

<hr>

<button id="animar">
    Animar
</button>

<button id="animar2">
    Animar2
</button>

<div id="caja4" class="caja">
    Animar
</div>

</body>
</html>
```

## 1. efecto ampliar, reducir

* .hide() 
* .show()

```jsx
$(document).ready(function (){
    console.log('jQuery cargado correctamente');//compruebo que carga correctamente

    let caja = $('#caja');

    caja.hide()//ocultamos la caja desde el principio
    $('#ocultar').hide()//ocultamos el botón ocultar

    $('#mostrar').click(function (){
        caja.show('slow');//normal, fast, slow hacen un efecto degradado
        $(this).hide();
        $('#ocultar').show();
    })

    $('#ocultar').click(function (){
        caja.hide('normal');//normal, fast, slow hacen un efecto degradado
        $(this).hide();
        $('#mostrar').show();
    })
```
## 2. Desvanecer - deslizar

* .fadeIn(velocidad) aparecer
* .fadeOut(velocidad) desvanecer
* .fadeTo(velocidad, opacidad): ponerse en opacidad X
* .slideUp(velocidad): desaparecer deslizándose arriba
* .slideDown(velocidad) aparecer deslizándose abajo

```jsx
    let caja2 = $('#caja2');

    caja2.hide()//ocultamos la caja desde el principio
    $('#ocultar2').hide()//ocultamos el botón ocultar

    $('#mostrar2').click(function (){
        caja2.fadeTo('slow',0.3);//fadeTo(velocidad,opacidad)
        $(this).hide();
        $('#ocultar2').show();
    })

    $('#ocultar2').click(function (){
        caja2.slideUp('slow');//fadeIn-fadeOut (velocidad)
        $(this).hide();
        $('#mostrar2').show();
    })
```
## 3. Métodos para un único botón: 

* toggle(velocidad)
* fadeToggle(velocidad)
* slideToggle(velocidad)
```jsx
    let caja3 = $('#caja3');

    caja3.hide()//ocultamos la caja desde el principio

    $('#toggle').click(function (){
        caja3.slideToggle('slow');//toggle(velocidad)/fadeToggle /slideToggle/slideUp/slideDown
    })
```
## 4. Animaciones
 ### 4.1 .animate()
 * las instrucciones del .animate las pasamos en formato json
 * para poder incluir color en nuestras animaciones hemos tenido que incluir la librería jQueriUI en nuestro head - html:
 * <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

```jsx
    let caja4 = $('#caja4');
    let counter = 0

    $('#animar').click(function () {
        counter += 1;
        console.log(counter);
        if (counter % 2 !== 0) {
            caja4.animate({
                marginLeft: 500,
                fontSize: 100,
            }, "fast")
                .animate({
                    borderRadius: 50,
                    marginTop: 50,
                    backgroundColor: 'blue',
                    color: 'white'
                });
        } else {
            caja4
                .animate({
                    marginLeft: 0,
                    fontSize: 20
                }, "slow")
                .animate({
                    backgroundColor: 'red',
                    color: 'yellow',
                    borderRadius: 0,
                    marginTop: 0,
                });

        }
    })
```
### 4.2. Callback en animaciones

* Las animaciones tienen la posibilidad de añadir un callback.
* El callback se ejecutara después de la animación.

```jsx
        $('#animar2').click(function(){
            $('#caja4')
                .animate({
                marginTop: '100'
                },'slow', () => alert('toma callback'));
        });
})
```