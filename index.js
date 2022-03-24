//Initializing fabric canvas on window load event.
var canvas;
window.onload = function(){
    canvas = new fabric.Canvas(document.getElementById("canvas"));
}
//dragElement function called on ondrag event.
function dragElement(e) {
  e.dataTransfer.setData("id", e.target.id); //transfer the "data" i.e. id of the target dragged.
}
// allowDrop function called on ondragover event.
function allowDrop(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}
//dropElement function called on ondrop event.
function dropElement(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("id"); //receiving the "data" i.e. id of the target dropped.
  var imag = document.getElementById(data); //getting the target image info through its id. 
  var img = new fabric.Image(imag, { //initializing the fabric image.
    left: e.layerX - 80,  //positioning the target on exact position of mouse event drop through event.layerX,Y.
    top: e.layerY - 40,
  });
  img.scaleToWidth(imag.width); //scaling the image height and width with target height and width, scaleToWidth, scaleToHeight fabric predefined function. 
  img.scaleToHeight(imag.height);
  canvas.add(img); 
}