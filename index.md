<!-- Copyright Robert L. Read, 2017

// This file is part of color-block-font.

//     Foobar is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     Foobar is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

//     You should have received a copy of the GNU General Public License
//     along with color-block-font.  If not, see <http://www.gnu.org/licenses/>.

-->

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

	This is the font at present:
	<p>
	  <div id="alphabet-text"> </div>
	<p>
	<p>
	  <div id="alphabet"> </div>
	<p>

	  Try it by enterring text here to render as a color blocks below:
	</p>
	<textarea rows="10" cols="80" id="textarea"></textarea>
	
	<input type="button" onclick="render()" value="Render!">

	<p></p>
	  <table>
	    <tr>
	      <td><section id="fontrender" class="text-block"> </section></td>
	      <td><div id="cfontrender" class="color-block"> </div></td>
	    </tr>
	  </table>
	  <h1> Motivation </h1>
	  <p>
	  Writing systems have been evolving since they were first created.
	  Modern technology has cheapened the production of color to the point that
	  we can legitimately experiment with a color-based system.

	  <ul>
	    <li>Is it possible that we could read better with a color-based system?
	      </li>
	    <li>Is it possible that we could pack more text into a given area
	      with a color-based system?
	      </li>
	    <li>Can we make something beautiful and pleasurable, even if it is
	      not technically superior to a glyph-based system?
	    </li>
	    	    <li>How easy it is it learn to read this system?</li>
	    </ul>

	  <p>
	    This project, like all Public Invention projects, is a free-libre
	    open source attempt to explore these questions, and invites your
	    participation. This is not a finished system; it is a barely started
	    system, even though it is built on my experience from a long time ago.
	  </p>
	<p>
	  My experience, which should not be thought of as authoritative, has
	  suggested to me some design decisions.  Punctuation, at least in
	  Roman-alphabet based writing systems, should remain glyphic (logographic?)
	  rather than color-based. Likewise it is very helpful to have capitalization,
	  which is represented in this system as a slightly higher block. The font
	  currently displayed uses the same colors (up and down) for vowels.
	  Beyond these observations, I make no assertion that I have any idea
	  what the color palette should be or who to map the colors into the
	  alphabet.
	  </p>
	  
<p>
	  </p>
<p>
	  </p>
	  <h1> Implementation </h1>
	  <p>
	  I first implemented the system you see here (the block-on-top-of-block
	  limited palette system) 25 years ago, when I was in graduate school, on
	  a workstation. It required a complete desktop graphics system; at that time
	  there was no hope of a browser-based system using Javascript and CSS.
	  </p>
	<p>
	  The current implementation, which you can see in your browser on this page,
	  using the CSS "before" and "after" features to define the color blocks.
	  I don't claim this is in the least big a good a way to do it, but
	  it should in theory work on any modern browser. 
	  </p>
	<h1> How You Can Help </h1>
	<p>
	  You can play with this idea, and maybe come up with something better.
	  Perhaps you could learn to read it.  Perhaps you can improve this
	  implementation. Perhaps you can build a browser plug-in that would
	  let any page be rendered this way. 
	</p>
	<p>
	  Finally, you can probably improve the styling of this page itself, of
	  present a better presentation of the idea.
	  </p>

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

  

