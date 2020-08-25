
# Peticiones Ajax con jQuery
* Ajax permite hacer peticiones asíncronas a un servidor y recoger los resultados sin necesidad de que la página actualice.
* Actualiza un trozo de la pantalla cargando una información
* Usaremos [reqres.in](https://reqres.in/)

Suponemos el siguiente código html 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ajax</title>
    <style>
        .datos{
            border: 2px solid green;
            width: 250px;
            height: 250px;
            overflow: scroll;
        }

        hr{
           margin-bottom: 30px;
            margin-top: 30px;
        }
    </style>

    <script type="text/javascript" src="jquery-3.5.1.js"></script>
    <script type="text/javascript" src="ajax.js"></script>
</head>
<body>
<h1>AJAX - Peticiones asíncronas en jQuery</h1>

<div id="datos" class="datos"></div>
<hr>
<div id="datos2" class="datos"></div>
<hr>
<form action="https://reqres.in/api/users" method="post">
    Nombre:<input type="text" name="name"/>
    Web:<input type="text" name="web"/>
    <input type ="submit" value="registrar" />


</form>
</body>
</html>
```
## 1. .load()
* Permite hacer una petición ajax por get e incrustar el resultado en una etiqueta html
* También permite recoger JSON y hacer cualquier tipo de funcionalidad para mostrar ese JSON como nos interese
* En aplicaciones monolíticas (front y back mezclados) es muy común

```jsx
$(document).ready(function () {
    console.log('jQuery está funcionando correctamente');
   
    $('#datos')
        .load('https://reqres.in/api/users?page2');//Me carga esa dirección en #datos
```

## 2. $.get() - recoger datos de un servidor remoto

```jsx
    $.get('https://reqres.in/api/unknown', {page: 2}, response => {
        console.log(response) //me devuelve un objeto y viendo sus elementos puedo seguir filtrando
        console.log(response.data[0].name)//sand dollar (es un elemento concreto del objeto)

        response.data.forEach((element, index) => $('#datos2').append(`<p>Nombre: ${element.name} // año: ${element.year},</p>`));
    })
```

## 3 $.post() - enviar datos a un servidor remoto

```jsx
    let usuario = {
        name: "Ángel Garrido",
        web: "https://es.wikipedia.org/wiki/Jerez_de_la_Frontera"
    }

    $.post('https://reqres.in/api/users', usuario, response => console.log(response));
    //Me devuelve un JSON con el usuario creado
    /*
        {name: "Ángel Garrido", web: "https://es.wikipedia.org/wiki/Jerez_de_la_Frontera", id: "577", createdAt: "2020-08-21T13:51:00.562Z"}
        createdAt: "2020-08-21T13:51:00.562Z"
        id: "577"
        name: "Ángel Garrido"
        web: "https://es.wikipedia.org/wiki/Jerez_de_la_Frontera"
     */
```
### Recogemos los datos de un formulario para hacer un método post():

```jsx
    $('form').submit(() => {
        let usuario2 = {
            name: $('input[name="name"]').val(),//val me recoger el valor del campo input del formulario que indico
            web: $('input[name="web"]').val(),
        };
        console.log(usuario2)

        $.post($(this).attr('action'), usuario, response => {
            console.log(response);

            //Cuando se ejecuta la función el método done nos permite realizar otra acción seguida
        }).done(alert(`usuario ${$('input[name="name"]').val()} creado correctamente`));
```

## 4. Realizar peticiones AJAX con $.ajax()

```jsx
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr('action'),//con attr estamos pasando el atributo action
            data: usuario2,

            beforeSend: () => console.log('enviando usuario'),

            success: response => console.log(response + 'success'),

            error: () => console.log('ha ocurrido un error'),

            timeout: 2 * 1000,
        }).done(alert(`usuario ${$('input[name="name"]').val()} creado correctamente`));;

    })

})
```
