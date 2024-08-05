const coloredSquare = document.getElementById('coloredSquare');

coloredSquare.addEventListener('mouseover', () =>{
    coloredSquare.style.backgroundColor = 'blue';
})

coloredSquare.addEventListener('mousedown', () =>{
    coloredSquare.style.backgroundColor = 'red';
})

coloredSquare.addEventListener('mouseup', () =>{
    coloredSquare.style.backgroundColor = 'yellow';
})

coloredSquare.addEventListener('dblclick', () =>{
    coloredSquare.style.backgroundColor = 'green';
})

coloredSquare.addEventListener('wheel', () =>{
    coloredSquare.style.backgroundColor = 'orange';
})

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'b':
            coloredSquare.style.backgroundColor = 'blue';
            break;
        case 'r':
            coloredSquare.style.backgroundColor = 'red';
            break;
        case 'y':
            coloredSquare.style.backgroundColor = 'yellow';
            break;
        case 'g':
            coloredSquare.style.backgroundColor = 'green';
            break;
        case 'o':
            coloredSquare.style.backgroundColor = 'orange';
            break;
    }
});