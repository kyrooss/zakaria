const navItems = document.querySelectorAll('a.navItem');
const navBtn = document.querySelector('nav button.navBtn');
const navBtnItems = document.querySelector('nav div.navBtnItems');
const navIcon = navBtn.querySelector('i');
const navItemIcon = document.querySelectorAll("div.navBtnItems a i");
let navData;

navItems.forEach((e) => {
    e.addEventListener('click', (event) => {
        removeActive();
        e.classList.add('active');
    })

    e.addEventListener('mouseenter', () => {
        navData = e.getAttribute('data-nav');
        navElement(navData);
    })
    
    e.addEventListener('mouseout', () => {
        removeNavElement();
    })
})

function removeActive(){
    navItems.forEach((e) => {
        e.classList.remove('active');
    })
}

navBtn.addEventListener('click', () => {
    if (navBtnItems.classList.contains('open')){
        iconClose();
        setTimeout(() => {
            navBtnItems.classList.remove('open');
        }, 450);
        navIcon.classList.replace('fa-xmark', 'fa-bars');
        navIcon.style = null;
    } else {
        navBtnItems.classList.add('open');
        navIcon.classList.replace('fa-bars', 'fa-xmark');
        navIcon.style.fontSize = '24px';
    }
})

function navElement(navNam){
    const div = document.createElement('div');
    div.id = 'textCont';
    const h2 = document.createElement('h2');
    h2.textContent = navNam;
    div.appendChild(h2);
    cursor.appendChild(div);
}

function removeNavElement(){
    const div = cursor.querySelectorAll('div');
    
    div.forEach((e) => {
        const h2 = e.querySelector('h2');
        h2.classList.add('trantop')

        setTimeout(() => {
            e.remove();
        }, 500)
    })
}

function iconClose(){
    const navLinkContent = document.querySelectorAll("div.navBtnItems a .animateText");

    navLinkContent.forEach((ele) => {
        ele.style.transform = 'translateY(50px)';
        ele.style.transitionDelay = '0s';
    })
    
    setTimeout(() => {
        navLinkContent.forEach((ele) => {
            ele.style.transform = null;
            ele.style.transitionDelay = null;
      });
    }, 400);
}

function maxWidth(){
    if (isTouch){
        navBtnItems.classList.add('width');
        navItems.forEach((a) => {
            let h2 = document.createElement('h2');
            h2.innerText = a.getAttribute("data-nav");
            h2.className = "animateText";

            a.querySelector('i').remove();

            a.appendChild(h2);
        })
    }
}

maxWidth();