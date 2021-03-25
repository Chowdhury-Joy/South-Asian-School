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

var tl2 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.cti',
                    toggleActions: "play pause resume reset"
          }
});
tl2.from('.cti-stagger', { xPercent: -100, opacity: 0, duration: 1.5, stagger: 0.5})

//!!Location

function playVideo(el) {
          let vid = document.getElementById(el);
          vid.play();
          console.log('playing video');
}

function pauseVideo(el) {
          let vid = document.getElementById(el);
          vid.pause();
          console.log('pausing video');
}

let tl3 = gsap.timeline()


ScrollTrigger.create({
          scrub: true,
          trigger: '.location',
          start: 'top 30%',
          end: '+=500',
          onToggle: self => self.isActive ? playVideo("locationVid") : pauseVideo("locationVid"),
          toggleActions: 'play pause reverse none'
})

