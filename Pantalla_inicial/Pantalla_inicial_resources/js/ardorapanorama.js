//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var incre=0; timerMove=0;$(document).ready(function () {$("body").css({backgroundColor: "#FFFFFF"});
$("#ardoraEnu").click(function(){ document.getElementById("audioEnu").play();isPlayEnu=true;});
initZoom();});
function initZoom() {$("#zoomer img").css({top:0,left:0});var maskWidth=$("#zoomer").width();var maskHeight=$("#zoomer").height();var imgPos=$("#zoomer img").offset();var imgWidth = $("#zoomer img").width();
var imgHeight=$("#zoomer img").height();var x1=(imgPos.left+maskWidth)-imgWidth;var y1=(imgPos.top+maskHeight)-imgHeight;var x2 = imgPos.left;var y2 = imgPos.top;
var regionPos=$("#zoomer img").offset();var thumbPos=$("#zoomer img").parent().offset();var areaPos={top: (regionPos.top - thumbPos.top) * (-1),left: (regionPos.left-thumbPos.left)*(-1)}
$("#zoomer img").draggable({containment: [x1, y1, x2, y2],drag: function () {$("#zoomer img").css({cursor: "move"});},stop: function(){$("#zoomer img").css({cursor: "default"});}});
}
function fileWindow(fileURL,eti){popup=window.open("text/html","_blank");with (popup.document){writeln("<html><head><title>"+eti+"</title><style>body{margin:0px;}</style>");
writeln("</head><body style='padding:10px;'>");writeln("<p>"+eti+"</p><br><iframe src='"+fileURL+"' width='100%' height='100%' frameborder='0' ></iframe>");
writeln("</body></html>");close();}popup.focus();}
function playIt(sound) {var file = document.getElementById(sound);file.load();file.play();}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
