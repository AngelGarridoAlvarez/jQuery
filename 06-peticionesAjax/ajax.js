/*
# Peticiones Ajax con jQuery
    * Ajax permite hacer peticiones asíncronas a un servidor y recoger los resultados sin necesidad de que la página actualice.
    * Actualiza un trozo de la pantalla cargando una información
    * Usaremos [reqres.in](reqres.in)
 */

$(document).ready(function () {
    console.log('jQuery está funcionando correctamente');
    //## 1. .load()
    // * Permite hacer una petición ajax por get e incrustar el resultado en una etiqueta html
    // * También permite recoger JSON y hacer cualquier tipo de funcionalidad para mostrar ese JSON como nos interese
    // * En aplicaciones monolíticas (front y back mezclados) es muy común

    $('#datos')
        .load('https://reqres.in/api/users?page2');//Me carga esa dirección en #datos

    //## 2. $.get() - recoger datos de un servidor remoto

    $.get('https://reqres.in/api/unknown', {page: 2}, response => {
        console.log(response) //me devuelve un objeto y viendo sus elementos puedo seguir filtrando
        console.log(response.data[0].name)//sand dollar (es un elemento concreto del objeto)

        response.data.forEach((element, index) => $('#datos2').append(`<p>Nombre: ${element.name} // año: ${element.year},</p>`));
    })

    //## 3 $.post() - enviar datos a un servidor remoto
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

//### Recogemos los datos de un formulario para hacer un método post():

    $('form').submit(() => {
        let usuario2 = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val(),
        };
        console.log(usuario2)
/*
        $.post($(this).attr('action'), usuario, response => {
            console.log(response);

            //Cuando se ejecuta la función el método done nos permite realizar otra acción seguida
        }).done(alert(`usuario ${$('input[name="name"]').val()} creado correctamente`));
*/

//## 3. Realizar peticiones AJAX con $.ajax()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr('action'),
            data: usuario2,

            beforeSend: () => console.log('enviando usuario'),

            success: response => console.log(response + 'success'),

            error: () => console.log('ha ocurrido un error'),

            timeout: 2 * 1000,
        }).done(alert(`usuario ${$('input[name="name"]').val()} creado correctamente`));;

    })

})