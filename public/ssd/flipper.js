//set first panel 
let panelNumber = 1;

//set file path chunks
const start = `/ssd/img/${folder}/panel`
const end = '.png'

//set imgs for forward/back
const fw = document.getElementById('forward');
const bk = document.getElementById('back');

//reload panel
function setPanel() {
    const png = document.getElementById('panel');
    png.src = start.concat(panelNumber.toString(),end); 
}

//panel forward
function forward() {
    panelNumber += 1;
    bk.src = '/ssd/img/back.png'

        if (panelNumber >= maxPanel)  {
            panelNumber = maxPanel
            fw.src = '/ssd/img/nomore.png'
        }
        else {
            fw.src = '/ssd/img/next.png'
        }
    setPanel();
}

//panel back
function back() {
    panelNumber -= 1;
    fw.src = '/ssd/img/next.png'
        if (panelNumber <= 1)  {
            panelNumber = 1
            bk.src = '/ssd/img/noless.png'
        }
        else {
            bk.src = '/ssd/img/back.png'
        }
    setPanel();
}