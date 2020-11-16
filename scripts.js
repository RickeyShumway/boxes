$('body').append("<div id = contentContainer></div>");

for (i = 0; i < 16; i++) {
    let boxNumber = i;
    $('#contentContainer').append("<div class = box id = b" + i +"></div>");
};
$('body').on('click', '.box', function() {

    $(this).toggleClass('lightBox');
}

)
