const APP= document.getElementById('app');

var img = createImage('js_img.jpg', {
    width: 380,
    height : 160,
    type : "px",
    id : "img_start",
    class : "img-rounded"
});

var Child = createTextNode("This is a Test", APP);
var div = createDivNode(Child);

CreateElement('span',"Hello World",div);
createDivNode(APP);

var input = document.createElement('imput');
var t_input = createTextNode("Name : ", input);

createForm('post',"app.js", t_input);

APP.appendChild(img);