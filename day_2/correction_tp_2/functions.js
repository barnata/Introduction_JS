function CreateElement(TYPE, CONTENT, PARENT) {
    var elem_tag = document.createElement(TYPE);
    var elem_content = document.createTextNode(CONTENT);
    elem_tag.appendChild(elem_content);
    PARENT.appendChild(elem_tag);
    return elem_tag;
}

function WrapIntoNode(PARENT, CHILD_NODE) {
    return PARENT.appendChild(CHILD_NODE);
}

function createTextNode(CONTENT, PARENT) {
    return CreateElement('p',CONTENT,PARENT);
}

function createDivNode(PARENT_NODE) {
    let div = document.createElement('div');
    return WrapIntoNode(PARENT_NODE,div);
}

function createImage(SRC, ATTRIBUTES) {
    var img = document.createElement('img');
    img.setAttribute('src', SRC);
    if(typeof ATTRIBUTES != "undefined" && ATTRIBUTES != null) {
        if(typeof ATTRIBUTES.width != "undefined" || typeof ATTRIBUTES.height != "undefined") {
            if(typeof ATTRIBUTES.type != "undefined") {
                if(typeof ATTRIBUTES.width != "undefined")
                    img.setAttribute('width',ATTRIBUTES.width + ATTRIBUTES.type);
                if(typeof ATTRIBUTES.height != "undefined")
                    img.setAttribute('height',ATTRIBUTES.height + ATTRIBUTES.type);
                if(typeof ATTRIBUTES.id != "undefined")
                    img.setAttribute('id',ATTRIBUTES.id);
                if(typeof  ATTRIBUTES.class != "undefined")
                    img.setAttribute('class',ATTRIBUTES.class );
            } else {
                throw new Error("[ERROR] it miss the type attribute {px, %, vh, vw}");
            }
        }
    }
    return img;
}

function createForm(METHOD, ACTION, CHILD) {
    var form =  document.createElement('form');
    form.setAttribute('method',METHOD);
    form.setAttribute('action',ACTION);
    form.appendChild(CHILD);

    return form;
}