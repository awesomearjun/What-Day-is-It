let gol;
let dateAppend = document.querySelector('#date');
let date = new Date().getDay();
switch(date) {
    case 0:
        gol = document.createTextNode('Sunday');
        dateAppend.appendChild(gol);
        break
    case 1:
        gol = document.createTextNode('Monday');
        dateAppend.appendChild(gol);
        break
    case 2:
        gol = document.createTextNode('Tuesday');
        dateAppend.appendChild(gol);
        break
    case 3:
        gol = document.createTextNode('Wednesday');
        dateAppend.appendChild(gol);
        break
    case 4:
        gol = document.createTextNode('Thursday');
        dateAppend.appendChild(gol);
        break
    case 5:
        gol = document.createTextNode('Friday');
        dateAppend.appendChild(gol);
        break
    case 6:
        gol = document.createTextNode('Saturday');
        dateAppend.appendChild(gol);
        break
}