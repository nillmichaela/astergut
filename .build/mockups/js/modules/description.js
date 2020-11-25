$(".description").each(function(){
    let randomId = getRandomInt(10000);

    $(this).attr('id', randomId);


    let elemId = $(this).attr('id');
    let elem = $('#'+elemId);

    let height = (100 + elem.height()) / 2;

    console.log("elem", height);

    elem.css("margin-top", "-"+height+"px");

});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}