// intro
const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to(".text", { y: "0%", durations: 1, stagger: 1 })
tl.to(".intro", { y:"-100%", durations: 1, delay: 1 }, "-=0.48")
tl.fromTo(".main-title", { opacity: 0 }, { opacity: 1, durations: 1 })
tl.fromTo(".sub-title", { opacity: 0 }, { opacity: 1, durations: 0.5 })
tl.fromTo(".nav-phone", { opacity: 0 }, { opacity: 1, durations: 0.5 })
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, durations: 0.5 })

// smooth slide navbar
document.querySelectorAll('a[href^="#"]').forEach(achor => {
    achor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth", 
        });
    });
});

// phone navbar
const check = document.querySelector(".check");
const swab = document.querySelector(".swab");
const Plogo = document.querySelector(".Plogo")
const close = document.querySelector(".close")
const Pburger = document.querySelectorAll(".phone-burger")

check.addEventListener("click", function(){
    swab.classList.toggle("click");
})

close.addEventListener("click", function(){
    swab.classList.remove("click")
})

Plogo.addEventListener("click", function(){
    swab.classList.remove("click")
})

check.addEventListener("click", function(){
    for (let i = 0; i < Pburger.length; i++){
        Pburger[i].classList.toggle("burger-Active");
    }
})

// services animations
gsap.registerPlugin(Flip);
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        // get state
        const state = Flip.getState(cards);

        // add active class
        const cardActive = card.classList.contains("active");
        cards.forEach((othercard, otheridx) => {
            othercard.classList.remove("active");
            othercard.classList.remove("is-inactive");
            if(!cardActive && index !== otheridx){
                othercard.classList.add("is-inactive");
            }
        });

        if(!cardActive) card.classList.add("active");
        Flip.from(state, {
            duration: 1,
            ease: "expo.out",
            absolute: true,
        })
    })
})


// slide show
const list1 = document.querySelector(".list1")
const list2 = document.querySelector(".list2")
const list3 = document.querySelector(".list3")
const list4 = document.querySelector(".list4")

const slide1 = document.querySelector(".slide1")
const slide2 = document.querySelector(".slide2")
const slide3 = document.querySelector(".slide3")
const slide4 = document.querySelector(".slide4")

const pre = document.querySelector(".pre")

list1.addEventListener("click", function(){
  slide1.classList.add("active-slide")

  slide2.classList.remove("active-slide")
  slide3.classList.remove("active-slide")
  slide4.classList.remove("active-slide")

  pre.classList.add("hide-pre")

  list1.classList.add("list-active")

  list2.classList.remove("list-active")
  list3.classList.remove("list-active")
  list4.classList.remove("list-active")
})

list2.addEventListener("click", function(){
  slide2.classList.add("active-slide")

  slide1.classList.remove("active-slide")
  slide3.classList.remove("active-slide")
  slide4.classList.remove("active-slide")

  pre.classList.add("hide-pre")

  list2.classList.add("list-active")

  list1.classList.remove("list-active")
  list3.classList.remove("list-active")
  list4.classList.remove("list-active")
})

list3.addEventListener("click", function(){
  slide3.classList.add("active-slide")

  slide2.classList.remove("active-slide")
  slide1.classList.remove("active-slide")
  slide4.classList.remove("active-slide")

  pre.classList.add("hide-pre")

  list3.classList.add("list-active")

  list2.classList.remove("list-active")
  list1.classList.remove("list-active")
  list4.classList.remove("list-active")
})

list4.addEventListener("click", function(){
  slide4.classList.add("active-slide")

  slide2.classList.remove("active-slide")
  slide1.classList.remove("active-slide")
  slide3.classList.remove("active-slide")

  pre.classList.add("hide-pre")

  list4.classList.add("list-active")

  list2.classList.remove("list-active")
  list3.classList.remove("list-active")
  list1.classList.remove("list-active")
})

// // animations service
const Plan = document.querySelector(".Planning");
const TPlan = document.querySelector(".TPlan");
const DPlan = document.querySelector(".DPlan");

const Accom = document.querySelector(".Accom");
const TAccom = document.querySelector(".TAccom");
const DAccom = document.querySelector(".DAccom");

const Local = document.querySelector(".Local");
const TLocal = document.querySelector(".TLocal");
const DLocal = document.querySelector(".DLocal");

const Travel = document.querySelector(".Travel");
const TTravel = document.querySelector(".TTravel");
const DTravel = document.querySelector(".DTravel");

Plan.addEventListener("click", function(){
    console.log("hello wolrd")
    TPlan.classList.toggle("open1");
    DPlan.classList.toggle("open");

    TAccom.classList.remove("open1");
    DAccom.classList.remove("open");

    TLocal.classList.remove("open1");
    DLocal.classList.remove("open");

    TTravel.classList.remove("open1");
    DTravel.classList.remove("open");
})

Accom.addEventListener("click", function(){
    console.log("hello wolrd")
    TAccom.classList.toggle("open1");
    DAccom.classList.toggle("open");
    
    TPlan.classList.remove("open1");
    DPlan.classList.remove("open");

    TLocal.classList.remove("open1");
    DLocal.classList.remove("open");
    
    TTravel.classList.remove("open1");
    DTravel.classList.remove("open");
})

Local.addEventListener("click", function(){
    console.log("hello wolrd")
    TLocal.classList.toggle("open1");
    DLocal.classList.toggle("open");
    
    TAccom.classList.remove("open1");
    DAccom.classList.remove("open");
    
    TPlan.classList.remove("open1");
    DPlan.classList.remove("open");

    TTravel.classList.remove("open1");
    DTravel.classList.remove("open");
})

Travel.addEventListener("click", function(){
    console.log("hello wolrd")
    TTravel.classList.toggle("open1");
    DTravel.classList.toggle("open");
    
    TLocal.classList.remove("open1");
    DLocal.classList.remove("open");
    
    TAccom.classList.remove("open1");
    DAccom.classList.remove("open");
    
    TPlan.classList.remove("open1");
    DPlan.classList.remove("open");
})

