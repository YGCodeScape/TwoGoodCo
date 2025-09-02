// cursor script
function pageCursor() {
    document.addEventListener("mousemove", function(para) {
        gsap.to(".cursor", {
            left: para.x,
            top: para.y,
        })
    })
    document.querySelector(".page3").addEventListener
        ("mouseenter", function() {
          gsap.to(".cursor",{
            transform: "translate(-50%, -50%) scale(1)",
        })
    })
    document.querySelector(".page3").addEventListener
        ("mouseleave", function() {
          gsap.to(".cursor",{
            transform: "translate(-50%, -50%)",
            scale: 0,
        })
    })
}
pageCursor();

function videoConAnimation() {  // mouse animation for video container 
    var videoCon = document.querySelector(".video-container");
var palyBtn = document.querySelector(".play");

videoCon.addEventListener("mouseenter", function() {  // when mouse enter div show play div
   gsap.to(palyBtn, {
      opacity: 1,
      scale: 1
   }) 
})

videoCon.addEventListener("mouseleave", function() { // when mouse leave div hide play div
    gsap.to(palyBtn, {
       opacity: 0,
       scale: 0
    }) 
 })

 videoCon.addEventListener("mousemove", function(dets) {  // when mouse move on video div change paly divs position by values of x y which is taken by dets parameter
    gsap.to(palyBtn, {
        left : dets.x-50,
        top : dets.y-50,
    })
 })
}
videoConAnimation();

function page1Animation() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2
    })    
    gsap.from(".page1 .video-container", {
        scale: 0.8,
        opacity: 0,
        delay: 1,
        duration: 0.5
    })   
}
page1Animation();

// locomotive animation code code pen -------------------

function LocomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

LocomotiveAnimation();
//------------------------------------------

gsap.to(".logo-d svg", {  // aniamte logo
    transform: "translateY(-130%)",
    scrollTrigger: {
        trigger: ".page1",
        scroller:".main",
        duration: 0.2,
        // markers: true,
        start:"top 0",
        end : "top -5%",
        scrub: true,
    }
})

gsap.to(".nav-tag span", {  // animate nav tag
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: ".page1",
        scroller:".main",
        duration: 0.2,
        // markers: true,
        start:"top 0",
        end : "top -2%",
        scrub: true,
    }
})