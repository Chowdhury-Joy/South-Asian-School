//!!Banner.....................


var tl = gsap.timeline({
scrollTrigger: {
          trigger: '.banner',
          toggleActions: "play pause resume reset",
}
});

tl.from('.bannerImg', {opacity: 0,duration: 1, xPercent: -100})
.from('#scrldwn01', {opacity: 0,duration: 1, y: -50})
.from('.scrl-stagger', 2, {opacity: 0, y: 50, ease: Expo.easeInOut, stagger: 0.5},"<")



//!! CTI or EXPLORE.....................

var tl2 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.cti',
                    toggleActions: "play pause resume reset",
                    
          }
});
tl2.from('.cti-stagger', { xPercent: -100, opacity: 0, duration: 1.5, stagger: 0.5})




//!!Location...................

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



//!!Stories....................


var tl4 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.stories',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl4.from('.stories-main', { y: -50, opacity: 0, duration: .8})
tl4.from('.stories-v-all', { y: -10, opacity: 0, duration: .8}, "<.2")
tl4.from('.stories-gasp-left', { xPercent: -100, opacity: 0, duration: 2, ease: "back.out(2.5)"})
tl4.from('.stories-gasp-right', { xPercent: 100, opacity: 0, duration: 2, ease: "back.out(2.5)"}, "<")


//!!learning..................


var tl5 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.learning',
                    toggleActions: "play pause resume reset",
                    start: "top center"
          }
});
tl5.from('.learning-left', { xPercent: -100, opacity: 0, duration: 1.95})
tl5.from('.learning-right', { xPercent: 100, opacity: 0, duration: 2.1}, "<")
tl5.from('.learningTxt', { y: 40, opacity: 0, duration: 2})
tl5.from('.TBTT', { y: 40, opacity: 0, duration: 2},"<")



//!!Living......................


var tl6 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.living',
                    toggleActions: "play pause resume reset",
                    start: "top center"
          }
});
tl6.from('.living-left', { xPercent: -100, opacity: 0, duration: 1.95})
tl6.from('.living-right', { xPercent: 100, opacity: 0, duration: 1.95}, "<")
tl6.from('.liv-ri-top-all', { y: 100, opacity: 0, duration: 1.95})
tl6.from('.liv-ri-bot-all', { y: 100, opacity: 0, duration: 1.95}, "<")


//!! Admission.....................

var tl7 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.admission',
                    toggleActions: "play pause resume reset",
                    start: "top 80%"
          }
});
tl7.from('.admission-trigger', { xPercent: -100, opacity: 0, duration: 1.5, stagger: 0.5})
tl7.from('.admission-btn', { yPercent: 50, opacity: 0, duration: 1.5, stagger: 0.5})



//!! Apply.....................

var tl8 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.apply',
                    toggleActions: "play pause resume reset"
          }
});
tl8.from('.apply-left', { xPercent: -100, opacity: 0, duration: 1.5, stagger: 0.5})
tl8.from('.apply-right', { xPercent: 100, opacity: 0, duration: 1.5, stagger: 0.5}, "<")