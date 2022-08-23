// const bar = document.querySelector("#mobile-menu");
// const links = document.querySelector("#nav-links");

// bar.onclick = function(){
//     links.classList.toggle("active");
//     bar.classList.toggle("is-active");
// }




const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-links');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// document.onclick = function(e){
//     if(e.target.id !== "dhoinsha" && e.target.id !== "mobile-menu"){
//         links.classList.remove("active");
//         bar.classList.remove("is-active");
//     }
// }


const hideMenu = (e) =>{
   if(e.target.id !== "dhoinsha" && e.target.id !== "mobile-menu" && e.target.id !== "bar"){
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
   }
}

document.addEventListener("click", hideMenu);


var preLoader = document.querySelector("#pre-loader");

window.addEventListener("load", function(){
  preLoader.style.display ="none";
})


var elem = document.querySelector('.hero-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  freeScroll: false,
  wrapAround: true,
  selectedAttraction: 0.2,
  friction: 0.8,
  groupCell: true,
  lazyLoad: true,
autoPlay: 6000,
pauseAutoPlayOnHover: true

});



// gsap

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content-magic",{
  scrollTrigger: {
    trigger: ".hero-content-magic",
  },
  x: -70,
  duration: 2,
}
);

gsap.from(".hero-magic-btn",{
  scrollTrigger: {
    trigger: ".hero-magic-btn",
  },
  x: 70,
  duration: 2,
}
)

gsap.from(".magic-h1",{
  scrollTrigger: {
    trigger: ".magic-h1",
  },
  y: -70,
  duration: 2,
}
)
gsap.from(".magic-cetagory-1",{
  scrollTrigger: {
    trigger: ".magic-cetagory-1",
   
    scrub: true,
  },
  x: -70,
  duration: 1.5,
}
)
gsap.from(".magic-cetagory-2",{
  scrollTrigger: {
    trigger: ".magic-cetagory-2",
   
    scrub: true,
  },
  y: -50,
  duration: 1.5,
}
)
gsap.from(".magic-cetagory-3",{
  scrollTrigger: {
    trigger: ".magic-cetagory-3",
   
    scrub: true,
  },
  x: 70,
  duration: 1.5,
}
)

gsap.from(".magic-topic",{
  scrollTrigger: {
    trigger: ".magic-topic",
     },
  y: 70,
  duration: 1.5,
}
)

gsap.from(".magic-sign",{
  scrollTrigger: {
    trigger: ".magic-sign",
     },
  x: -70,
  duration: 1.5,
}
)

gsap.from(".magic-sign-2",{
  scrollTrigger: {
    trigger: ".magic-sign-2",
     },
  y: 70,
  duration: 1.5,
}
)


