console.log("hello")

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
    trigger: ".page-1",
    start:"50% 50%",
    end: "150% 50%",
    scrub: true,
    markers: true,
    pin: true,
}})

tl.to(".rotate", {
    rotate: -15,
    scale: 0.7,   
},'x')
tl.to("#row2", {
    marginTop: "-8%"
},'x')
tl.to("#row3", {
    marginTop: "-10%"
},'x')
tl.to("#row4", {
    marginTop: "-12%"
},'x')
tl.to("#row5", {
    marginTop: "-15%"
},'x')