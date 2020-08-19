//$ es equivalente a poner jQuery
//jQuery(document).ready(()=>console.log("estamos listos"));
//lo que va dentro del paréntesis del $/jQuery es el selector

$(document).ready(() => {
    console.log("estamos listos");//Primero comprobamos en la consola si el documento está listo

    //Selector ID
    $("#naranja")
        .css("background", "orange")
        .css("color", "white");

    $("#amarillo")
        .css("background", "yellow")
        .css("color", "green");

    $("#azul")
        .css("background", "blue")
        .css("color", "red");

    //Selectores de clases

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

    //Selectores de etiquetas
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

    //Selector por atributo:

    //tenemos una lista con atributos "title"

    $('[title="sur"]').css('background','orange');
    $('[title="norte"]').css('background','lightblue');



    // Quiero poner la nueva clase que he creado a los enlaces y a los párrafos:

    $('p, a').addClass('margen-superior');

    //Find y Parent
    //marcar la ruta de highlight puede ser complicado pero con find me encuentra los elementos
    let busqueda = $("#caja").find('.highlight');//

    console.log(busqueda)//Me saca el span y li dentro de caja

    //Recordemos nuestra estructura HTML:
/*
<div id="caja">
    <p>Hello, I'm a box</p>
    <ul>
        <li>Elemento1</li>
        <li class="highlight">Elemento1</li>
    </ul>
    <span class="highlight">Soy un span como una casa</span>
</div>
 */
    //Parent me sirve para subirme un nivel en las etiquetas
    console.log(busqueda.parent().find('sur'));//saca div #caja(está por encima de span) y ul(está por encima de li)

    //Utilizando eq me puedo mover por las etiquetas
    console.log(busqueda.eq(1).parent().find('sur'));//saca div #caja

    console.log(busqueda.eq(0).parent().find('sur'));//saca #ul


});
