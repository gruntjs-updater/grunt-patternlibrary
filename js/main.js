(function() {
    var patterns;
    var iframe = document.querySelector('.ptrnlib-content');
    var getPatternJSON = $.getJSON('patterns.json');
    var currViewType, currPattern;
    var ptrnlibHandle = $('.ptrnlib-handle');
    var ptrnlibHeader = $('.ptrnlib-header');
    var ptrnlibToggle = $('.ptrnlib-toggle');
    var ptrnlibDetails = $('.ptrnlib-pattern__details');

    getPatternJSON.then(function(data) {
        patterns = data;
    });

    function updateNav() {
        document.querySelector('.ptrnlib-nav').value = window.location.pathname;
    }

    $('.ptrnlib-nav').on('change', function() {
        window.location.href = this.value;
    });

    function bindToggle( trigger, target, activeClass ){
        trigger.on('click', function(){
            target[ target.hasClass( activeClass ) ? 'removeClass' : 'addClass' ]( activeClass );
            return false;
        });
    }

    bindToggle( ptrnlibToggle, ptrnlibHeader, 'is-expanded' );
    bindToggle( ptrnlibHandle, ptrnlibHeader, 'is-active' );

    updateNav();

    $('#ptrnlib-filter').on('keyup', function(){
        if($('#ptrnlib-filter').val() !== ''){
            $('.ptrnlib-overview-item').hide().filter('[data-slug*=' + $('#ptrnlib-filter').val().toLowerCase() + ']').show();
        } else {
            $('.ptrnlib-overview-item').show();
        }
    });

})();
