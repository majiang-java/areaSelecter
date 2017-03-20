var $ = require('zepto.js');
var dialog = require('./js/dialog.js');
var viewport = require('./js/viewport.js');
var MobileSelectArea = require('./js/areaselecter-app.js');


var selectArea = new MobileSelectArea();
    selectArea.init({trigger:'.region',
        value:$('#hd_area').val(),
        data:'data/datac.js'
});


