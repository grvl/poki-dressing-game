$(document).ready(function(){

function ImageSwitcher(choices, i) {
	i = 0;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
	
	var hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}
	}
	var show_next_image = function() {
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
	}
}

var hats = $(".hat");

var hat_picker = new ImageSwitcher(hats);
document.getElementById("hat_button").onclick = function() { hat_picker.Next(); };

var eyes = $(".eye");

var eye_picker = new ImageSwitcher(eyes);
document.getElementById("eye_button").onclick = function() { eye_picker.Next(); };
  
var accs = $(".acc");

var acc_picker = new ImageSwitcher(accs);
document.getElementById("acc_button").onclick = function() { acc_picker.Next(); };

var scarfs = $(".scarf");

var scarf_picker = new ImageSwitcher(scarfs);
document.getElementById("scarf_button").onclick = function() { scarf_picker.Next(); };
	
var coats = $(".coat");

var coat_picker = new ImageSwitcher(coats);
document.getElementById("coat_button").onclick = function() { coat_picker.Next(); };

var outfits = $(".outfit");

var outfit_picker = new ImageSwitcher(outfits);
document.getElementById("outfit_button").onclick = function() { outfit_picker.Next(); };

var shoes = $(".shoe");

var shoe_picker = new ImageSwitcher(shoes);
document.getElementById("shoe_button").onclick = function() { shoe_picker.Next(); };

});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });