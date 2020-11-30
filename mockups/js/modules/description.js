$(".description").each(function(){
    let randomId = getRandomInt(10000);

    $(this).attr('id', randomId);


    let elemId = $(this).attr('id');
    let elem = $('#'+elemId);

    let height = (100 + elem.height()) / 2;

    console.log("elem", height);

    elem.css("margin-top", "-"+height+"px");

});

$(".description-image").each(function(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let randomId = getRandomInt(10000);

    $(this).attr('id', randomId);

    let elemId = $(this).attr('id');
    let elem = $('#'+elemId);


    let height = (elem.height());
    if(vw >= 768 && vw < 1200) {
        height = height + 50;
    }
    console.log("elem", height);

    elem.css("bottom", "-"+height+"px");

});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}