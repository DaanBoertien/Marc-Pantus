
gsap.registerPlugin(ScrollTrigger);


gsapSet('.fadeInTitle', 0)
gsapSet('.fadeIn', 50)
gsapSet('.fadeInAppear', 0)


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
animate(".fadeInAppear")


function animate(enterClass){
        return ScrollTrigger.batch(enterClass, {
            onEnter: batch => gsap.to(batch, {duration: 1, y: 0, autoAlpha: 1, stagger: 0.2, ease: Power2.inOut}),
    })
  
}


const landingImage = document.querySelector(".parallax-container");

if (document.querySelector(".parallax")) {
  gsap.to(".parallax", {
    yPercent: -250,
    ease: "Power3.out",
    scrollTrigger: {
      trigger: landingImage,
      start: "bottom bottom", 
      end: "bottom top",
      scrub: true
    }, 
  });
}