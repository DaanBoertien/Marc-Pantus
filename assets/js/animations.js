
gsap.registerPlugin(ScrollTrigger);


gsapSet('.fadeInTitle', 0)
gsapSet('.fadeIn', 50)


function gsapSet(className, yCoord) {
  if(document.querySelector(className)){
    gsap.set(className, {
      y: yCoord,
      autoAlpha: 0
    })
    
  } else {
    return
  }
}

animate(".fadeIn")
animate(".fadeInTitle")
animate(".fadeInNavDesktop")


function animate(enterClass){
        return ScrollTrigger.batch(enterClass, {
            onEnter: batch => gsap.to(batch, {duration: 1, y: 0, autoAlpha: 1, stagger: 0.2, ease: Power2.inOut}),
    })
  
}