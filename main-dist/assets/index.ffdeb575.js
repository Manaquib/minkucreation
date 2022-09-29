(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=document.querySelector(".lights"),g=document.querySelector(".camera"),b=document.querySelector(".action"),c=document.querySelector(".lightInfo"),h=document.querySelector(".actionInfo"),a=document.querySelector(".cameraInfo"),s=document.querySelector(".anim"),v=document.querySelector(".landing"),u=document.querySelector("#navbar"),E=document.querySelector("#navbar-trigger"),d=document.querySelector("#navbar-default"),I=Array.from(document.querySelectorAll(".cursor"));let m=0,y=0;document.addEventListener("mousemove",n=>{m=n.clientX,y=n.clientY});I.forEach((n,o)=>{let i=0,r=0,e=.2-o*.01;const t=function(){i+=(m-i)*e,r+=(y-r)*e,n.style.left=`${i}px`,n.style.top=`${r}px`,requestAnimationFrame(t)};t()});const p=new Collapse(d);E.addEventListener("click",()=>{p.expand()});d.addEventListener("click",()=>{p.collapse()});setTimeout(()=>{f.style.display="flex",setTimeout(()=>{g.style.display="flex",c.style.opacity="0"},1500),setTimeout(()=>{b.style.display="flex",a.style.opacity="0"},3e3),setTimeout(()=>{s.style.position="absolute",c.style.opacity="1",a.style.opacity="1",c.style.marginTop="-10rem",h.style.marginTop="10rem",v.style.display="flex"},5e3),setTimeout(()=>{s.style.animation="top 2s ease"},6500),setTimeout(()=>{s.style.display="none",u.style.display="flex",u.style.animation="bottom 1s ease"},8500)},1e3);const q=[{position:0,el:document.getElementById("carousel-item-1")},{position:1,el:document.getElementById("carousel-item-2")},{position:2,el:document.getElementById("carousel-item-3")},{position:3,el:document.getElementById("carousel-item-4")},{position:4,el:document.getElementById("carousel-item-5")}],S={activeItemPosition:0,interval:3e3,indicators:{activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",items:[{position:0,el:document.getElementById("carousel-indicator-1")},{position:1,el:document.getElementById("carousel-indicator-2")},{position:2,el:document.getElementById("carousel-indicator-3")},{position:3,el:document.getElementById("carousel-indicator-4")},{position:4,el:document.getElementById("carousel-indicator-5")}]}},A=new Carousel(q,S);A.cycle();function w(n){var o=document.createElement("iframe");o.setAttribute("src","https://www.youtube.com/embed/"+n.dataset.id+"?autoplay=1&rel=0"),o.setAttribute("frameborder","0"),o.setAttribute("allowfullscreen","1"),o.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),n.parentNode.replaceChild(o,n)}function T(){for(var n=document.getElementsByClassName("youtube-player"),o=0;o<n.length;o++){var i=n[o].dataset.id,r=document.createElement("div");r.setAttribute("data-id",i);var e=document.createElement("img");e.src="//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",i),r.appendChild(e);var t=document.createElement("div");t.setAttribute("class","play"),t.setAttribute("class","cursor-none"),r.appendChild(t),r.onclick=function(){w(this)},n[o].appendChild(r)}}document.addEventListener("DOMContentLoaded",T);

class ArrowPointer {
    constructor() {
      this.root = document.body
      this.cursor = document.querySelector(".curzr")
  
      this.position = {
        distanceX: 0, 
        distanceY: 0,
        distance: 0,
        pointerX: 0,
        pointerY: 0,
      },
      this.previousPointerX = 0
      this.previousPointerY = 0
      this.angle = 0
      this.previousAngle = 0
      this.angleDisplace = 0
      this.degrees = 57.296
      this.cursorSize = 20
  
      this.cursorStyle = {
        boxSizing: 'border-box',
        position: 'fixed',
        top: '0px',
        left: `${ -this.cursorSize / 2 }px`,
        zIndex: '2147483647',
        width: `${ this.cursorSize }px`,
        height: `${ this.cursorSize }px`,
        transition: '250ms, transform 100ms',
        userSelect: 'none',
        pointerEvents: 'none'
      }
  
      this.init(this.cursor, this.cursorStyle)
    }
  
    init(el, style) {
      Object.assign(el.style, style)
      this.cursor.removeAttribute("hidden")
      
    }
  
    move(event) {
      this.previousPointerX = this.position.pointerX
      this.previousPointerY = this.position.pointerY
      this.position.pointerX = event.pageX + this.root.getBoundingClientRect().x
      this.position.pointerY = event.pageY + this.root.getBoundingClientRect().y
      this.position.distanceX = this.previousPointerX - this.position.pointerX
      this.position.distanceY = this.previousPointerY - this.position.pointerY
      this.distance = Math.sqrt(this.position.distanceY ** 2 + this.position.distanceX ** 2)
    
      this.cursor.style.transform = `translate3d(${this.position.pointerX}px, ${this.position.pointerY}px, 0)`
  
      if (this.distance > 1) {
        this.rotate(this.position)
      } else {
        this.cursor.style.transform += ` rotate(${this.angleDisplace}deg)`
      }
    }
  
    rotate(position) {
      let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * this.degrees
      let modAngle
      const style = this.cursor.style
      this.previousAngle = this.angle
  
      if (position.distanceX <= 0 && position.distanceY >= 0) {
        this.angle = 90 - unsortedAngle + 0
      } else if (position.distanceX < 0 && position.distanceY < 0) {
        this.angle = unsortedAngle + 90
      } else if (position.distanceX >= 0 && position.distanceY <= 0) {
        this.angle = 90 - unsortedAngle + 180
      } else if (position.distanceX > 0 && position.distanceY > 0) {
        this.angle = unsortedAngle + 270
      }
  
      if (isNaN(this.angle)) {
        this.angle = this.previousAngle
      } else {
        if (this.angle - this.previousAngle <= -270) {
          this.angleDisplace += 360 + this.angle - this.previousAngle
        } else if (this.angle - this.previousAngle >= 270) {
          this.angleDisplace += this.angle - this.previousAngle - 360
        } else {
          this.angleDisplace += this.angle - this.previousAngle
        }
      }
      style.transform += ` rotate(${this.angleDisplace}deg)`
  
      setTimeout(() => {
        modAngle = this.angleDisplace >= 0 ? this.angleDisplace % 360 : 360 + this.angleDisplace % 360
        if (modAngle >= 45 && modAngle < 135) {
          style.left = `${ -this.cursorSize }px`
          style.top = `${ -this.cursorSize / 2 }px`
        } else if (modAngle >= 135 && modAngle < 225) {
          style.left = `${ -this.cursorSize / 2 }px`
          style.top = `${ -this.cursorSize }px`
        } else if (modAngle >= 225 && modAngle < 315) {
          style.left = '0px'
          style.top = `${ -this.cursorSize / 2 }px`
        } else {
          style.left = `${ -this.cursorSize / 2 }px`
          style.top = '0px'
        }
      }, 0)
    }
  
    remove() {
      this.cursor.remove()
    }
  }
  
  (() => {
    const cursor = new ArrowPointer()
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {    
      document.onmousemove = function (event) {
        cursor.move(event)
      }
    } else {
      cursor.remove()
    }
  })()

// send email 
document.querySelector("#submitBtn").addEventListener('click', ()=>{
    const userName=document.querySelector("#name")
    const userEmail=document.querySelector("#email")
    const userMessage=document.querySelector("#message")
    const params={
        name: userName.value,
        email: userEmail.value,
        message: userMessage.value,
    }
    const serviceID="service_dqh9z8a"
    const templateID="template_gby6y9l"
    userName.value=""
    userEmail.value=""
    userMessage.value=""
    emailjs.send(serviceID, templateID, params).then(res=>{
        console.log(res)
        alert("Thank you for contacting with us!")
    }).catch(err=>console.log(err))
})
