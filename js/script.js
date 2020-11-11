//Variables for setup

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('.hero__content');
const social = intro.querySelector('.social');
                         // END
const section  = document.querySelector('section');
const end = section.querySelector('h2');

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration:17000,
    triggerElement:intro,
    triggerHook:0
})
.setPin(intro)
.addTo(controller);

const animation = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity:0});
const animation2 = TweenMax.fromTo(social,3, {opacity: 1}, {opacity:0})

let scene2 = new ScrollMagic.Scene({
    duration:500,
    triggerElement:intro,
    triggerHook:0
})
.setTween(animation)
.addTo(controller);
let scene3 = new ScrollMagic.Scene({
    duration:500,
    triggerElement:intro,
    triggerHook:0
})
.setTween(animation2)
.addTo(controller)
//vicdeo animation 
let accelamount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelamount;
    video.currentTime = delay;
}, 33.33);


TweenMax.from(".logo",1,{
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.staggerFrom(".menu ul li",1,{
    opacity:0,
    x:-20,
    ease:Power3.easeInOut
},0.08)

TweenMax.from(".nav__search_block",1,{
    delay:.5,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.from(".login",1,{
    delay:.6,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})

TweenMax.from(".cart",1,{
    delay:.7,
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
})
TweenMax.from(".h1_title", 1,{
    delay:1,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})
TweenMax.from(".hero__photo_item",1,{
    delay:2,
    opacity:0,
    x:-800,
    ease: Expo.easeInOut
});

TweenMax.from(".tween", 1,{
    delay:1.3,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from(".connect", 1,{
    delay:1,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from(".btn", 1,{
    delay:1.4,
    opacity:0,
    y:20,
    ease:Expo.easeInOut,
})

TweenMax.from(".social-icon li", 1,{
    delay:1.4,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

TweenMax.from(".find", 1,{
    delay:1.4,
    opacity:0,
    ease:Expo.easeInOut
})