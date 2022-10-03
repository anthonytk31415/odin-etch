// set properties in the large container
myBox = document.querySelector('#mainboard')
myBox.style['color'] = 'yellow';
myBox.setAttribute('style', 'display: flex; flex-direction: column;')


function squareActive(e){
    console.log(this.classList);
    this.setAttribute('style','background-color: red;')
//    e.stopPropagation();
}


function squareInactive(e){
    console.log(this.classList);
    this.setAttribute('style','background-color: green;')
//    e.stopPropagation();
}

littleBoxArray = document.querySelectorAll('#secondary-board');

littleBoxArray.forEach(littleBox => {
    littleBox.textContent='hello'
    littleBox.addEventListener('mouseover', squareActive), {capture: false};
    littleBox.addEventListener('mouseout', squareInactive), {capture: false};
});




