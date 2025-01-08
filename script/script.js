console.log("Hello, World!");

const header = document.querySelector(".navbar")
console.log("Hello, World!");

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }

    console.log("Hello, World!");
}

console.log("Hello, World!");