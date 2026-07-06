function openTab(tabs) {
    var i;
    var x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabs).style.display = "block";
}

function syobonRandomize() {
    const bg = document.getElementById("syobon")
    const rand = Math.floor(Math.random() * 3991)

    bg.style.backgroundPositionX = rand.toString().concat('px');
}

//you are the shortest js ever