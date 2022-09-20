const lights=document.querySelector('.lights')
const camera=document.querySelector('.camera')
const action=document.querySelector('.action')
const lightInfo=document.querySelector('.lightInfo')
const actionInfo=document.querySelector('.actionInfo')
const cameraInfo=document.querySelector('.cameraInfo')
const landingAnim=document.querySelector('.anim')
const landing=document.querySelector('.landing')
const navbar=document.querySelector('.navbar')

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
