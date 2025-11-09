const arrow = document.querySelector('.arrow');
const item = document.querySelector('.item');
const tilt = document.querySelector('.tilt');

function toggleItem() {
  arrow.classList.toggle('active');
  item.classList.toggle('active');
  tilt.classList.toggle('active');
}

function toggleViewer() {
  let viewer = document.querySelector('.viewer');
  viewer.classList.toggle('active');
}

// Mouseover effect to show the viewer
(function iife(d) {
  console.log('tilt effect loaded');

  const viewer = d.querySelectorAll('.viewer'),
    scene = d.querySelectorAll('.tilt');
  d.querySelector('body').classList.add('blur');
  scene.forEach((item, index) => {
    item.addEventListener('mousemove', (e) => {
      var halfViewer = viewer[index].offsetWidth / 2;
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left - halfViewer;
      var y = e.clientY - rect.top - halfViewer;
      viewer[index].style.transform = `translate(${x}px, ${y}px)`;
      viewer[index].style.backgroundPosition = -x + 'px' + ' ' + -y + 'px';
    });
  });
})(document);
