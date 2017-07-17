
//To delete an item from the list
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut("slow", function(){
        $(this).remove();
    })
});


//To indicate that the item has been complete or to redo something that has been completed
$("ul").on("click", "li", function() { //Apply it on ul instead of li because it is the parent element so it works on dynamic lis
    $(this).toggleClass("completion"); //If grey then normal, if normal then grey
});


//When user wants to create a new task
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        var task = $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='fa fa-check' aria-hidden='true'></i></span>" + task + "</li>")

    }
});