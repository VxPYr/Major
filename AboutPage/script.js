const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page1",
    start:"50% 50%",
    end: "160% 50%",
    scrub: true,
    // markers: true,
    pin: true,
}})

tl.to(".rotate", {
    rotate: -15,
    scale: 0.8,   
},'x')
tl.to("#row2", {
    marginTop: "-1%"
},'x')
tl.to("#row3", {
    marginTop: "-2%"
},'x')
tl.to("#row4", {
    marginTop: "9%"
},'x')
tl.to("#row5", {
    marginTop: "-10%"
},'x')
tl.to(".overlay h1", {
    opacity: "1",
    delay: 0.2
},'x')
tl.to(".overlay", {
    backgroundColor: "#000000b4"
},'x')
tl.to(".scroll-bar", {
    width:  "100%",
},'x')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    start:"0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to(".curve-wrapper",{
    height: "0%",
    marginTop: 0
})

let tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".content2",
    start: "5% 60%",
    end: "60% 60%",
    // markers: true,
    scrub: 1
},});
tl3.to(".content2 .text-hover h1",{
    width: "100%"
})
tl3.to(".content2 .text-hover h2",{
    width: "100%",
    delay: -0.4,
})

let tl4 = gsap.timeline({scrollTrigger:{
    trigger: ".page4",
    start: "50% 50%",
    end: "200% 50%",
    pin:true,
    // markers: true,
    scrub: 1
},});
tl4.to("#c1",{
    marginTop: "-25%",
    opacity: "1"
}, 'a-1')
tl4.to("#c2",{
    opacity: "1"
}, 'a-2')
tl4.to("#c1",{
    marginTop: "-100%",
    opacity: "0"
}, 'a-2')
tl4.to("#c3",{
    opacity: "1"
}, 'a-3')
tl4.to("#c2",{
    opacity: "0"
}, 'a-3')
tl4.to("#c1",{
    marginTop: "-180%",
}, 'a-3')
tl4.to("#c4",{
    opacity: "1"
}, 'a-4')
tl4.to("#c3",{
    opacity: "0"
}, 'a-4')
tl4.to("#c2",{
    opacity: "0"
}, 'a-4')
tl4.to("#c1",{
    marginTop: "-260%",
}, 'a-4')
tl4.to("#c3",{
    opacity: "0"
}, 'a-4')
tl4.to(".star",{
    marginLeft: "100%",
    rotate: 360
})

let tl5 = gsap.timeline({scrollTrigger:{
    trigger: ".page5",
    start: "40% 70%",
    end: "80% 60%",
    // markers: true,
    scrub: 1
},});
tl5.to(".page5 .text-hover h1",{
    width: "100%"
})
tl5.to(".page5 .text-hover h2",{
    width: "100%",
    delay: -0.4,
})

let tl6 = gsap.timeline({scrollTrigger:{
    trigger: ".page6",
    start: "0% 70%",
    end: "50% 50%",
    // markers: true,
    scrub: 1
},});
tl6.to(".page6 .curve-wrapper6",{
    height: "0%"
})

let tl6_sec = gsap.timeline({scrollTrigger:{
    trigger: ".content6",
    start: "20% 70%",
    end: "50% 50%",
    // markers: true,
    scrub: 1
},});
tl6_sec.to(".page6 .text-hover h1",{
    width: "100%"
})
tl6_sec.to(".page6 .text-hover h2",{
    width: "100%",
    delay: -0.4,
})

let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-7",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        // markers: true,
        scrub: 1,
    },  
});
tl7.to("#demo",{
    bottom:"7%",
})
tl7.to(".our-work-txt-div",{
    height:"60vh",
}, 'height')
tl7.to(".our-work-txt",{
    height:"60vh",
}, 'height')
tl7.to("#our",{
    left:"0%",
}, 'height')
tl7.to("#work",{
    right:"0%",
}, 'height')
tl7.to(".scroll-img",{
    marginTop:"-300%",
})