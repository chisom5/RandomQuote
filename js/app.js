// logic for the randomQuote
function randomQuote() {

    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(response) {
            // console.log(response);
            // show result
            $('#getQuote').html(response.quoteText);
            $('#author').html("&dash;" + response.quoteAuthor);

            // tweet quote
            $('#btnTweet').attr('href', "https://twitter.com/home/?status=" + response.quoteText + '--' + response.quoteAuthor + '#quotes' + '');

        },
        error: function(xhr, status, error) {
            console.log;
        }
    })

}

$(document).ready(function() {
    randomQuote();
})
$('#btnGetQuote').on('click', function() {
    randomQuote();
})