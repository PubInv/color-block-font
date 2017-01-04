function isLetter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}
function colorize_one(c) {
//    var cstr = ("" + c).toLowerCase();
    var cstr = ("" + c);
    var c = cstr[0];
    if (isLetter(cstr)) {
	var classname = "" + c + "x";
	return '<span  class="'+classname+'" style="display: inline-block; width: 0px;"><span>  </span></span>\n';
    } else if (c == ' ') {
	return '<span style="display: inline-block; width: 0px;">&nbsp;</span>\n';
    } else if (c == '\n') {
	return '<br>\n';	
    } else {
    	return '<span style="display: inline-block;  width: 0px;">'+cstr+'</span>\n';
    }
}
function colorize(text) {
    var returnHTML = '<div class="color-block">';
    for(var i = 0; i < text.length; i++ ) {
	returnHTML = returnHTML + colorize_one(text[i]);
    }
    returnHTML += '</div>';
    return returnHTML;
}

function render() {
    var text = $("#textarea").val();
    var htext = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
    $("#fontrender").html(htext);

    var ctext = colorize(text);
    $("#cfontrender").html(ctext);
}
var ozymandias = "I met a traveller from an antique land\n\
Who said: Two vast and trunkless legs of stone\n\
Stand in the desert. Near them, on the sand,\n\
Half sunk, a shattered visage lies, whose frown,\n\
And wrinkled lip, and sneer of cold command,\n\
Tell that its sculptor well those passions read\n\
Which yet survive, stamped on these lifeless things,\n\
The hand that mocked them and the heart that fed:\n\
\n\
And on the pedestal these words appear:\n\
'My name is Ozymandias, king of kings:\n\
Look on my works, ye Mighty, and despair!'\n\
Nothing beside remains. Round the decay\n\
Of that colossal wreck, boundless and bare\n\
The lone and level sands stretch far away.\n\n\
-- Percy Bysshe Shelley";

