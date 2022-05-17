let circle = document.getElementById('circle');
circle.append
let topp = 0;
let left = 0;
window.addEventListener('keydown', function (e) {
    if (e.keyCode == 39) {
        left += 5;
        circle.style.left = left + 'px';
        if (left > window.screen.width + 70) {
            left = -70;
            circle.style.left = left + 'px';

        }
    }
    if (e.keyCode == 37) {
        left -= 5;
        circle.style.left = left + 'px';
        if (left < -70) {
            left = window.screen.width;
            circle.style.left = left;

        }
    }
   
    if (e.keyCode == 38) {
        topp -= 5;
        circle.style.top = topp + 'px';
        if (topp < -70) {
            topp = window.screen.height;
            circle.style.top = topp;
        }
    }
    if (e.keyCode == 40) {
        topp += 5;
        circle.style.top = topp + 'px';
        if (topp > window.screen.height + 70) {
            topp = -70;
            circle.style.top = topp + 'px';

        }
    }
    if(e.key=="Enter"){
        var leftMini =circle.style.left.slice(0,circle.style.left.length-2)
        let topMini = circle.style.top.slice(0,circle.style.top.length-2)
        const newDiv= document.createElement("div");
        var mainbox= document.querySelector('body');
        newDiv.classList.add("smallbox");
        newDiv.style.left=Number(leftMini) + 35 + "px";
        newDiv.style.top=Number(topMini) + 35 +"px";
        circle.style.width=circle.style.width.slice(0,circle.style.width.length-2)-10 + "px";
        circle.style.height=circle.style.height.slice(0,circle.style.height.length-2)-10 + "px";
        console.log(circle.style.width)
        mainbox.append(newDiv)
    }
})