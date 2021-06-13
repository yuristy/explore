let controller = new ScrollMagic.Controller();
let timeline = gsap.timeline();

timeline
  .to('.rock', { duration: 3, y: -300 })
  .to('.woman', { duration: 3, y: -200 }, '-=10')
  .fromTo('.bg', { y: -50 }, { duration: 3, y: 0 }, '-=10')
  .to('.content', { duration: 3, top: '0%' }, '-=10')
  .fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo('.text', { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: '100%',
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller);
