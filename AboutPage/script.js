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
tl3.to(".text-hover h1",{
    width: "100%"
})
tl3.to(".text-hover h2",{
    width: "100%",
    delay: -0.4,
})