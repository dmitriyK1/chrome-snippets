 document.body.addEventListener('click', function(e) {

    var body      = this,
        dataset   = body.dataset,
        isEnabled = dataset.hasOwnProperty('enabled');

    if ( isEnabled ) {
        delete dataset.enabled;
    } else {
        dataset.enabled = '';
    }

});
