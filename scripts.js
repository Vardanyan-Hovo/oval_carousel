const slider = document.querySelector(".slider");
const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");
const Nextb = document.querySelector(".navbtn_next");
const Prevb = document.querySelector(".navbtn_prev");
const slideconteiner = document.querySelector(".slider_container");
let height_L = slideconteiner.getBoundingClientRect().height - slides[0].getBoundingClientRect().height - 20;
let width_L = slideconteiner.getBoundingClientRect().width * 1/3;

let activorder;
init();

function init(){
    //file:///D:/circlkarusel/circl.html
    for(let i = 0; i < slides.length; i++)
    {
        slides[i].dataset.order = i;
        slides[i].style.transform = `translate(${width_L}px, ${height_L}px)`;
     //   console.log( " 1i = " + i);
    }
    //slides[5].style.transform = "rotate(20deg)"
    relatively();
}
/*
x = a cos t
y = b sin t
0 <= t <= 2PI
*/
function relatively(){
    let t;
    if (slides.length != 1)
    activorder = Math.floor(slides.length / 2) + 1;
    else
    activorder = 0;
    const a = width_L;
    const b = height_L;
    if (slides.length % 2)
    t = Math.PI / (slides.length - 1);
    else
    t = Math.PI / slides.length;
    for(let i = activorder - 1; i >= 0; i--)
    {
        const leftslide = document.querySelector(`.slide[data-order="${i}"]`);
        let x = activorder + activorder - i - 1;
        console.log(" activorder = " + activorder + "  i == " + i);
        console.log(" x = " + x);
        if(x < slides.length && x >= activorder)
        {
            var rightslide = document.querySelector(`.slide[data-order ="${x}"]`);
            console.log("x = " + x + " i = " + i);
            rightslide.style.left = `${a * Math.cos(Math.PI - t * x)}px`;
            rightslide.style.top =`${b * Math.sin(Math.PI - t * x) - height_L}px`;
            rightslide.style.zIndex = i - 1;
            rightslide.style.transform = `2c`;
        }
        if(leftslide)
        {
            leftslide.style.left = `${a * Math.cos(Math.PI - t * i)}px`;
            leftslide.style.top =`${b * Math.sin(Math.PI - t * i) - height_L}px`;
            leftslide.style.zIndex = i;
        }
    }

    Nextb.addEventListener("click", function(){
        let i = 0;
        let n = slides.length - 1;
        let x = document.querySelector(`.slide[data-order ="${n}"]`).style.left;
        let y = document.querySelector(`.slide[data-order ="${n}"]`).style.top;
        let z = document.querySelector(`.slide[data-order ="${n}"]`).style.zIndex;
        while (n > 0)
        {
            document.querySelector(`.slide[data-order ="${n}"]`).style.left
            = document.querySelector(`.slide[data-order ="${n - 1}"]`).style.left;
            document.querySelector(`.slide[data-order ="${n}"]`).style.top
            = document.querySelector(`.slide[data-order ="${n - 1}"]`).style.top;
            document.querySelector(`.slide[data-order ="${n}"]`).style.zIndex
            = document.querySelector(`.slide[data-order ="${n - 1}"]`).style.zIndex;
            n--;
        }
        document.querySelector(`.slide[data-order ="${0}"]`).style.left
        = x;
        document.querySelector(`.slide[data-order ="${0}"]`).style.top  
        = y;
        document.querySelector(`.slide[data-order ="${0}"]`).style.zIndex
        = z;
    });
    Prevb.addEventListener("click", function(){
        let i = 0;
        let n = slides.length;
        let x = document.querySelector(`.slide[data-order ="${0}"]`).style.left;
        let y = document.querySelector(`.slide[data-order ="${0}"]`).style.top;
        let z = document.querySelector(`.slide[data-order ="${0}"]`).style.zIndex;
        while (n - 1 > i)
        {
            document.querySelector(`.slide[data-order ="${i}"]`).style.left
            = document.querySelector(`.slide[data-order ="${i + 1}"]`).style.left;
            document.querySelector(`.slide[data-order ="${i}"]`).style.top
            = document.querySelector(`.slide[data-order ="${i + 1}"]`).style.top;
            document.querySelector(`.slide[data-order ="${i}"]`).style.zIndex
            = document.querySelector(`.slide[data-order ="${i + 1}"]`).style.zIndex;
            i++;
        }
        document.querySelector(`.slide[data-order ="${n - 1}"]`).style.left
        = x;
        document.querySelector(`.slide[data-order ="${n - 1}"]`).style.top  
        = y;
        document.querySelector(`.slide[data-order ="${n - 1}"]`).style.zIndex
        = z;
    });
}