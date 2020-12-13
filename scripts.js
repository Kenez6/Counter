
$('#button1').on('click', () => {
    var myString = $("h2").text();
    var number = parseInt(myString, 10)
    var newnumber = number + 1;
    /*$('p').append('<h3>' + newnumber + '</h3>')*/
    $( "h2" ).replaceWith( "<h2>" +newnumber+ "</h2>" );
});

$('#button2').on('click', () => {
    var myString = $("h2").text();
    var number = parseInt(myString, 10)
    var newnumber = number - 1;
    $( "h2" ).replaceWith( "<h2>" +newnumber+ "</h2>" );
}
);