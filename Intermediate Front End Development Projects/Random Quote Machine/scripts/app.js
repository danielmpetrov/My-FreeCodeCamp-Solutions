const requester = (function() {
    'use strict';
    let getQuote = ($app) => {
        $app.html('').addClass('loader');

        $.ajax({
            headers: {
                "X-Mashape-Key": "pwEeeQzbMPmshLqTXXehKUkewynMp1bMDgejsnatZKb5uvbets",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
            success: function(data) {
                data = JSON.parse(data);
                let html =
                `<p id="quote-content" class="animate-bottom">${data.quote}</p>
                <p id="quote-author" class="animate-bottom">- ${data.author}</p>`;
                $app.removeClass('loader').html(html);
            }
        });
    };

    return {
        getQuote: getQuote
    };
})();

$(document).ready(function() {
    'use strict';
    let $app = $('#app');
    requester.getQuote($app);

    $('#btn-get-quote').on('click', function() {
        requester.getQuote($app);
    });
});