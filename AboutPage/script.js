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
    pin: true
}})

tl.to(".rotate", {
    rotate: -15,
    scale: 0.8,   
},'x')
tl.to("#row2", {
    marginTop: "-28%"
},x)
tl.to("#row3", {
    marginTop: "-32%"
},x)
.to("#row4", {
    marginTop: "-37%"
},x)
.to("#row5", {
    marginTop: "-40%"
},x)