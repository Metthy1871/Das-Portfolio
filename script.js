const themeSwitch = document.getElementById('checkbox');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {

    document.documentElement.setAttribute('data-theme', 'light');
    themeSwitch.checked = true;
}

else {

    themeSwitch.checked = false;
}

themeSwitch.addEventListener('change', (e) => {
    
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } 
    
    else {

        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    }
});