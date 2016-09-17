$('document').ready(function(){
    /**
     * Google analytics
     */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-69792155-9', 'auto');
    ga('send', 'pageview');

    /**
     * Toggle tooltip function
     */
    $('[data-toggle="tooltip"]').tooltip();

    /**
     * Filter menu toggling function
     */
    $('.side_bar_header').on('click', function () {
        $(this).parent().children('.panel-body').slideToggle();
    });

    /**
     * Init collapse filter menu on small screens
     */
    $(function() {
        if ($(window).width() < 768) {
            $('.side_bar_header').parent().children('.panel-body').slideToggle();
        }
    });

    /**
     * Price range slider
     */
    $("#price_slider").slider({
        range: true,
        step: 5,
        min: $("#price_slider").data('price-filter-min'),
        max: $("#price_slider").data('price-filter-max'),
        values: [
            $("#price_slider_min").val(),
            $("#price_slider_max").val(),
        ],
        slide: function(event, ui) {
            $("#price_slider_min").val(ui.values[0]);
            $("#price_slider_max").val(ui.values[1]);
            $('#filter_price_field').text('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });

    /**
    * Init price range slider
    */
    $("#price_slider_min").val($("#price_slider").slider("values", 0));
    $("#price_slider_max").val($("#price_slider").slider("values", 1));
    $('#filter_price_field').text('$' + $('#price_slider').slider("values", 0) + ' - $' + $('#price_slider').slider("values", 1));

    /**
     * Star rating function
     */
    $('.article_rating').each(function(){
        var rating = $(this).data('rating');
        $(this).empty();

        // Add not rated icon
        if (rating === 'Not rated yet') {
            $(this).append('<span class="glyphicon glyphicon glyphicon-remove-sign glyphicon-star-grey" aria-hidden="true"></span>');
            return true;
        }


        rating = parseInt(rating);
        rating = Math.round(rating/20);

        // Add green stars
        for (var i = 0; i < rating; i++) {
            $(this).append('<span class="glyphicon glyphicon-star glyphicon-star-green" aria-hidden="true"></span>');
        }

        // Add grey stars
        for (var i = 0; i < 5 - rating; i++) {
            $(this).append('<span class="glyphicon glyphicon-star glyphicon-star-grey" aria-hidden="true"></span>');
        }

    });
});
