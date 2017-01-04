---
layout: default
title: Color Block Font
---
    

<link rel="stylesheet" href="./stylesheets/color-block.css">

<style>
 .text-block {
    font-family: "Courier";
font-size: 22px;
text-align: left;
}
</style>
     
  <div id="content-wrapper">
    <div class="inner clearfix">
      <section id="main-content">
	<section id="textsection" style="{border: red;}">
	</section>

	<h1> Experimenting with a Colored Writing System </h1>    

	<p>
	  <div id="alphabet-text"> </div>
	<p>
	<p>
	  <div id="alphabet"> </div>
	<p>

	  Enter text here to render:
	</p>
	<textarea rows="10" cols="80" id="textarea"></textarea>
	
	<input type="button" onclick="render()" value="Render!">

	<p>
	  <table>
	    <tr>
	      <td><section id="fontrender" class="text-block"> </section></td>
	      <td><div id="cfontrender" class="color-block"> </div></td>
	    </tr>
	  </table>

<h3>
  <a id="authors-and-contributors" class="anchor" href="#authors-and-contributors" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Authors and Contributors</h3>

<p><a href="https://github.com/PubInv/color-block-font">Color Block Font</a> is written and maintained by

  <a href="mailto:read.robert@gmail.com">Robert L. Read</a> at <a href="https://github.com/PubInv">PubInv</a>.</p>

<p> This is a newly created work, please send comments, ideas, or suggestions to Rob or open an issue.</p>

<p>Check out our parent project, <a href="https://pubinv.github.io/PubInv">Public Invention</a>.</p>

    <script>
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

$("#textarea").val(ozymandias);
render();

var alphabet = "AaBbCcDdEeFfHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
$("#alphabet-text").html(alphabet);
$("#alphabet").html(colorize(alphabet));
		       </script>
    <style>
/*
.inner {
width: 1500px;
}
#content-wrapper {
width: 90%;
}
#main-content {
width: 90%;
}


/*
.container {
 max-width: 2000px;
}

   */   
      </style>
      <!--- My color palette will be : Red Green Yellow Cyan Black
a: r r
b: g y
c: m g
d: r m
e: g g
f: r g
g: g m
h: c y
i: y y
j: y m
k: y c
l: c r
m: g r
n: r y
o: c c
p: c g
q: m c
r: r m
s: g c
t: m y
u: m m
v: r c
w: y r
x: y g
y: c m
z: m r
--->

  

