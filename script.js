// set properties in the large container
myBox = document.querySelector('#mainboard')
myBox.style['color'] = 'yellow';
myBox.setAttribute('style', 'display: flex; flex-direction: column;\
                             width: 960px; height: 960px;   ');

//define a functoin that will insert row container in a div (i.e. the large container)
function createRowContainer(div){
    let container = document.createElement('div')
    container.setAttribute('style', 'background-color: yellow; \
                                     flex: 1 1 auto; \
                                     display: flex; \
                                     flex-direction: row;');
    container.classList.add('container');

    div.appendChild(container);
    
}

// create a 4 containers in the main "myBox"
function createNContainers(div, n){
    for(let i=0; i <n; i++){
        createRowContainer(div);
    }
}

// function to create 4 boxes in a container
function createNBoxes(div, n) {
    for(let i=0; i <n; i++){
        let smallBox = document.createElement('div');
        smallBox.setAttribute('style', 'background-color: brown; \
                                        flex: 1 1 auto;');
        smallBox.classList.add('littleBox');
        div.appendChild(smallBox);
    }
}

function createNSquare(div, n){
    createNContainers(div, n);

    let containerArray = document.querySelectorAll(".container");

    for(let i = 0; i < containerArray.length; i++){
        let div = containerArray[i];
        createNBoxes(div, n);
    }
}

/****** this area does the mouse hovering color code ******/
function squareActive(e){
    console.log(this.classList);
    this.setAttribute('style','background-color: red;\
                                flex: 1 1 auto;');

    e.stopPropagation();
}

function squareInactive(e){
    console.log(this.classList);
    this.setAttribute('style','background-color: brown; \
                                color: green; \
                                flex: 1 1 auto;');
    e.stopPropagation();
}

function defineHover(){
    littleBoxArray = document.querySelectorAll('.littleBox');
    littleBoxArray.forEach(element => {
        element.addEventListener('mouseover', squareActive), {capture: false};
        element.addEventListener('mouseout', squareInactive), {capture: false};
        element.setAttribute('style','background-color: orange; \
                                color: green; \
                                flex: 1 1 auto');});

}

// button input 
function myprompt(){
    response = prompt('Input how many N squares you want on each side. This will create an N x N grid!');
    console.log(response);
    return response;
}

// remove children from containers
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeArrayChildren(containerArray){
    containerArray.forEach(container => {
        removeAllChildNodes(container);
    });
}

/// button functionality
btn = document.querySelector('#size-button');
btn.addEventListener('click',populateGrid);

function populateGrid(){
    console.log('activating populateGrid');
    n = myprompt(); // popup msg to define your n
    removeAllChildNodes(myBox);     // remove all containers and their children
    createNSquare(myBox, n); // create the n-square
    defineHover(); // hover properties 
}


/********* initial settings *********/
//create default 6x6 grid
createNSquare(myBox, 6);
defineHover();

