$(document).ready(()=>{
    console.log("jQueri cargado correctamente");

    //2. Mover por la página
    $('.elemento').draggable();

    //3. Redimensionar
    $('.elemento').resizable();

    //4. Seleccionar
    $('.lista-seleccionable').selectable()

    //5. ordenar
    $('.lista-sortable').sortable({
        update: function (event, ui){
            console.log('ha cambiado la lista')
            //Aquí podría utilizar un bucle para ver las posiciones elegidas
        }
    })

    //6. Drop + draggable

    $("#elementoMovido").draggable();
    $("#area").droppable({
        drop: function (){
            console.log('has soltado algo dentro del área')
        }
    });

    //Efectos

    // ### FADE
    $("#mostrar").click(function (){
        $(".caja-efectos").fadeToggle() //este es un método nativo de jQuery, no es necesario jQueriUI
    });

    // ### EXPLODE
    $("#mostrar2").click(function (){
        $(".caja-efectos2").toggle("explode", "slow") //este NO es un método nativo de jQuery, tenemos que usar el método intermedio effect/ o toggle
    });

    // ### Blind
    $("#mostrar3").click(function (){
        $(".caja-efectos3").effect("blind", 4*1000)
    });

    // ### Blind
    $("#mostrar4").click(function (){
        $(".caja-efectos4").toggle("slide", "slow")
    });

    // ### Drop
    $("#mostrar5").click(function (){
        $(".caja-efectos5").toggle("drop", "normal")
    });

    // ### Fold
    $("#mostrar6").click(function (){
        $(".caja-efectos6").toggle("fold", "fast")
    });

    // ### Puff
    $("#mostrar7").click(function (){
        $(".caja-efectos7").toggle("puff", "slow")
    });

    // ### Scale
    $("#mostrar8").click(function (){
        $(".caja-efectos8").toggle("scale")
    });

    // ### Shake
    $("#mostrar9").click(function (){
        $(".caja-efectos9").toggle("shake")
    });

    // ## WIDGETS

    // ### Tooltips
    $(document).tooltip();

    // ### Dialog
    $('#lanzarPopup').click(()=>{
        $("#popup").dialog();
    });

    // ### Datepicker
    $('#calendario').datepicker();


    // ### Pestañas
    $('#pestanas').tabs();


})