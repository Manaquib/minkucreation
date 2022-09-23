const lights=document.querySelector('.lights')
const camera=document.querySelector('.camera')
const action=document.querySelector('.action')
const lightInfo=document.querySelector('.lightInfo')
const actionInfo=document.querySelector('.actionInfo')
const cameraInfo=document.querySelector('.cameraInfo')
const landingAnim=document.querySelector('.anim')
const landing=document.querySelector('.landing')
const navbar=document.querySelector('#navbar')
const navbarTrigger=document.querySelector('#navbar-trigger')
const navbarTarget=document.querySelector('#navbar-default')

// navbar toggle
const collapse = new Collapse(navbarTarget);
navbarTrigger.addEventListener('click', ()=>{
    collapse.expand();
})
navbarTarget.addEventListener('click', ()=>{
    collapse.collapse();
})

// landing animation
setTimeout(() => {
    lights.style.display='flex'
    setTimeout(() => {
        camera.style.display='flex'
        lightInfo.style.opacity="0"
    }, 1500);
    setTimeout(() => {
        action.style.display='flex'
        cameraInfo.style.opacity="0"
    }, 3000);
    setTimeout(() => {
        landingAnim.style.position='absolute'
        lightInfo.style.opacity="1"
        cameraInfo.style.opacity="1"
        lightInfo.style.marginTop="-10rem"
        actionInfo.style.marginTop="10rem"
        landing.style.display='flex'
    }, 5000);
    setTimeout(() => {
        landingAnim.style.animation='top 2s ease'
    }, 6500);
    setTimeout(() => {
        landingAnim.style.display='none'
        navbar.style.display='flex'
        navbar.style.animation='bottom 1s ease'
    }, 8500);
}, 1000);

// lightbox
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'disableScrolling': true,
    'fitImagesInViewport': true,
    'maxWidth': '20px',
    'maxHeight': '20px',
})

// clients carousel
const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')
    },
    {
        position: 4,
        el: document.getElementById('carousel-item-5')
    },
];

const carouselOptions = {
    activeItemPosition: 0,
    interval: 3000,
    
    indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
            {
                position: 0,
                el: document.getElementById('carousel-indicator-1')
            },
            {
                position: 1,
                el: document.getElementById('carousel-indicator-2')
            },
            {
                position: 2,
                el: document.getElementById('carousel-indicator-3')
            },
            {
                position: 3,
                el: document.getElementById('carousel-indicator-4')
            },
            {
                position: 4,
                el: document.getElementById('carousel-indicator-5')
            },
        ]
    },
};
const carousel = new Carousel(items, carouselOptions);
carousel.cycle()

// embed youtube vids
function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initYouTubeVideos);