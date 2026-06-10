
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