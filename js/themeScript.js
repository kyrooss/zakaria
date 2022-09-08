const themeBtn = document.querySelector('div.navItems .theme');

window.addEventListener('load', () => {
    if (localStorage.theme == 'light' || localStorage.theme == undefined){
        themeChanger('fa-sun', 'fa-moon', 'light');
    } else if (localStorage.theme == 'dark'){
        themeChanger('fa-moon', 'fa-sun', 'dark');
    }
})

themeBtn.addEventListener('click', () => {
    
    if (document.documentElement.getAttribute('theme') == 'light'){
        themeChanger('fa-moon', 'fa-sun', 'dark');
        localStorage.theme = 'dark';
    } else {
        themeChanger('fa-sun', 'fa-moon', 'light');
        localStorage.theme = 'light';
    }
})

function themeChanger(toReplace, replace, theme){
    const themeIcon = themeBtn.querySelector('i');
    themeIcon.classList.replace(toReplace, replace);
    document.documentElement.setAttribute('theme', theme);
}