 document.body.addEventListener('click', function(e) {

    var body      = this,
        // isEnabled = body.hasAttribute('data-enabled');
        isEnabled = body.hasAttribute('enabled');

    if ( isEnabled ) {
        // body.removeAttribute('data-enabled');
        body.removeAttribute('enabled');
    } else {
        // body.setAttribute('data-enabled', '');
        body.setAttribute('enabled', '');
    }

})
