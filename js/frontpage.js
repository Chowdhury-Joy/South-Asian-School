var tl = gsap.timeline({

});

//!!BANNER

// tl.from('.nav-center', 1, {delay: .2, opacity: 0, x: -20, ease: Expo.easeInOut})
// .from('.nav-right', 1, {delay: .1, opacity: 0, x: -20, ease: Expo.easeInOut})
// tl.from('.nav-whole', {opacity: 0,duration: 1, xPercent: -100, stagger: 0.5})
tl.from('.bannerImg', {opacity: 0,duration: 1, xPercent: -100})
.from('#scrldwn01', {opacity: 0,duration: 1, y: -50})
.from('.scrl-stagger', 2, {opacity: 0, y: 50, ease: Expo.easeInOut, stagger: 0.5},"<")

//!! CTI or EXPLORE

.to(".cti", {
          scrollTrigger: {
                    trigger: '.cti-all',
                    start: "top center",
                    
          },
          y: -50
})
