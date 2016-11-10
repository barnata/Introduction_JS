const APP= document.getElementById('app');

var img = createImage('js_img.jpg', {
    width: 1280,
    height : 900,
    type : "px",
    id : "img_start",
    class : "img-rounded"
});

var Child = createTextNode("This is a Test", APP);
var div = createDivNode(Child);

CreateElement('span',"Hello World",div);
createDivNode(APP);


APP.appendChild(img);