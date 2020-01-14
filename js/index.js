// Your code goes here
//Mouse Over (2)
const funTop = document.querySelector(".intro").children[0];
funTop.addEventListener("mouseenter", (e)=>{
  e.target.style.transform ="scale(1.1)";
});
funTop.addEventListener("mouseleave", (e)=>{
    e.target.style.transform = "scale(1)";
});
//Click Events (2)
document.querySelectorAll("h2").forEach( E => {
    E.addEventListener("click", () => {
  E.style.color = 'rebeccapurple';
    });
});
document.querySelector(".intro").addEventListener("click", (e) => {
  e.target.style.background = 'pink'
});

//Double Click (1)
document.querySelectorAll('.content-section img').forEach( dbl =>{
    dbl.addEventListener("dblclick", () => {
  dbl.src= 'img/mantas-hesthaven-_g1WdcKcV3w-unsplash.jpg';
    });
});

//Resize (1)
const fontBig = document.querySelector(".content-destination");
window.addEventListener("resize", () => {
    fontBig.style.background = 'black';
    fontBig.style.color = "white";
});

//Scroll(1)
const bodyBlack = document.querySelector('.destination');
    window.addEventListener('scroll', () => {
        bodyBlack.style.backgroundColor="blue";
        bodyBlack.style.color = "white";
    });

//Keys(2)
document.addEventListener('keydown',  () => {
      funTop.style.transform = "scale(0.1)"; 
    })
    document.addEventListener('keyup',  () => {
        funTop.style.transform = "scale(1)"; 
      })
//Slect (1)
document.querySelector('body').addEventListener('select', (e)=>{
    e.target.style.color = 'red'
});

//Stop Default (1)
const stopDef = document.querySelector(".nav-link");
stopDef.addEventListener("click", (e) => {
  e.preventDefault();
})

//GreenSock
document.querySelectorAll(".btn").forEach(button =>{
    button.addEventListener("mouseenter", () => {
    gsap.to(".btn", {
        duration: 1,
        rotate: 360,
        yoyo: true,
        repeat: 1
    });
})
})