---
layout: default
title: Color Block Font
---
    

<link rel="stylesheet" href="./stylesheets/color-block.css">
<script src="./javascripts/colorize.js"></script>

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
      
$("#textarea").val(ozymandias);
render();

var alphabet = "AaBbCcDdEeFfHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
$("#alphabet-text").html(alphabet);
$("#alphabet").html(colorize(alphabet));
</script>

  

