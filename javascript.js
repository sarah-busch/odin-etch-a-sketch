const container = document.getElementById('container');

function makeRows (rows, cols){
    for (i=0; i<(rows*cols); i++) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let div = document.createElement('div');
        div.classList.add('gridItem');
        container.appendChild(div);
    };
};

makeRows(16,16);


let gridItem = document.querySelectorAll('.gridItem');
for (let i=0; i<gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', function(e){
    gridItem[i].classList.add('hover');})
}

