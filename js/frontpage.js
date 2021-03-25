//!!Banner


var tl = gsap.timeline({

});

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



//!!Stories


var tl4 = gsap.timeline({
          scrollTrigger: {
                    trigger:'.stories',
                    toggleActions: "play pause resume reset",
                    
          }
});
tl4.from('.stories-main', { y: -50, opacity: 0, duration: .8})
tl4.from('.stories-v-all', { y: -10, opacity: 0, duration: .8}, "<.2")
tl4.from('.stories-gasp-left', { xPercent: -100, opacity: 0, duration: 1.5})
tl4.from('.stories-gasp-right', { xPercent: 100, opacity: 0, duration: 1.5}, "<")

