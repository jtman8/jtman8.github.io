$(".button.loading").on('click', function(){
    $("#image-loading").addClass("image-rotate-horizontal");
});

$(".button.stop").on('click', function(){
    $("#image-loading").removeClass("image-rotate-horizontal");
});

$("text").lettering();