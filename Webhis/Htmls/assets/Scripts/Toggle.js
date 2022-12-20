x = 2;

function toggleNav() {
    var sidenav = document.getElementById("mySidenav"),
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === "250px" ? '0' :  '250px';
    
    if(x % 2 == 0) {
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
        x = x + 1;
    }

    else {
        document.body.style.backgroundColor = "white";
        x = x + 1;
    }
}