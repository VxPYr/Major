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