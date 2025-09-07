const body = document.querySelector("body");
const menuIcon = document.querySelector(".menu-i");
const closeIcon = document.querySelector(".close");
const fullScreenNav = document.querySelector(".full-screen-nav");
const navIDiv = document.querySelector(".nav-icon-d");
const firstI = document.querySelector(".first-icons");
const navLinks = document.querySelectorAll(".nav-tag a");
const logoS = document.querySelector(".logo-d svg");
const FNavTag = document.querySelectorAll(".coll2 span");

// GSAP Timeline (paused, reversed by default)
let tlMenu = gsap.timeline({ paused: true, reversed: true });

// Build animation sequence
tlMenu
  .to(navIDiv, {
     backgroundColor : "transparent",
     duration: 0.1
  })
  .to(fullScreenNav, {
    y: "0%",
    duration: 0.3,
    ease: "power4.out"
  })

  .to(menuIcon, {
      transform: "translateX(-100%)",
      duration: 0.1,
  }, "<")
  .to(closeIcon, {
     transform: "translateX(-80%)",
     duration: 0.1,
  }, "<")
  .to(navLinks, {
    y: 0,
    color: "white",
    duration: 0.2,
    ease: "power3.out"
  }, "-=0.2")
;


// Toggle function
function toggleMenu() {
  if (tlMenu.reversed()) {
    tlMenu.play();

    gsap.from(FNavTag, {
      y: 40,
      duration: 0.3,
      opacity: 0,
      stagger: 0.2
    })
    
    logoS.style.color = "white";
    navIDiv.style.color = "white";

    
  } else {
    tlMenu.reverse();
    logoS.style.color = "black";
    navIDiv.style.color = "black";
    navIDiv.style.color = "black";
  }
}

// Event listeners
menuIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);


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


function page1Animation() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2
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
