var tl=gsap.timeline()
tl.from("img",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.3
})

tl.from("h2",{
    opacity:0,
    y:20,
    duration:0.5,
    scale:0.5
})