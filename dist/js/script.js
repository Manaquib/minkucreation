const lights=document.querySelector('.lights')
const partition=document.querySelector('.partition')
const camera=document.querySelector('.camera')
const action=document.querySelector('.action')
const landingAnim=document.querySelector('.anim')
const landing=document.querySelector('.landing')
const navbar=document.querySelector('.navbar')

setTimeout(() => {
    lights.style.display='flex'
    setTimeout(() => {
        camera.style.display='flex'
    }, 1500);
    setTimeout(() => {
        partition.style.display='flex'
        action.style.display='flex'
    }, 3000);
    setTimeout(() => {
        landingAnim.style.position='absolute'
        landingAnim.style.animation='top 2s ease'
        landing.style.display='flex'
    }, 5000);
    setTimeout(() => {
        landingAnim.style.display='none'
        navbar.style.display='flex'
        navbar.style.animation='bottom 1s ease'
    }, 7000);
}, 1000);
