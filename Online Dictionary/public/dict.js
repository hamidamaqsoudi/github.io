$(document).ready(() => {
    let word;

    $("#search").click(() => {
        word = $("#word").val();
        get(word);

    })

})

function get(word) {

    let wjason = { 'word': word };

    $.ajax("http://localhost:8080/search?word=" + word,
        {
            'headers': { 'Content-Type': 'application/json' },
            "type": "GET",
        })
        .done((r) => {
            $('#def').empty();
            for (let i = 0; i < r.length; i++) {
                $('#def').append('<li>' + r[i].definition + '</li>');
            }
        })
        .fail(r => console.log(r));

}