var tl = gsap.timeline({

});

tl.from('.nav-whole', {opacity: 0,duration: 1, yPercent: -100})
.from('.bannerImg', {opacity: 0,duration: 1, yPercent: -100})
.from('#scrldwn01', {opacity: 0,duration: 1, y: -50})
.from('.scrl-stagger', 2, {opacity: 0, y: 50, ease: Expo.easeInOut, stagger: 0.5}, "-=1")

// .from('#scrldwn01', {opacity: 0,duration: 1, y: -50, stagger: 0.6})
// .from('#scrldwn01', {opacity: 0,duration: 1, y: -50, stagger: 0.6})
// .from('#scrldwn02', {opacity: 0,duration: 1, y: -50, stagger: 0.6})
