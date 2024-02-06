function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function createButtonDel(callBack) {
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('X'));
    buttonDel.classList.add('del');
    buttonDel.onclick = ({target}) => {
        target.parentElement.remove();
        if(typeof callBack === 'function'){
            callBack();
        }
    }
    return buttonDel;
}

function isAllInputsFilled() {
    const inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().length === 0) {
            const atrName = inputs[i].id;
            alert(`The field "${atrName}" is required`);
            return false;
        }
    }
    return true;
}