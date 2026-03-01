const themeBtn = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {

    document.documentElement.setAttribute('data-theme', 'light');
    themeBtn.textContent = '🌙';
}

else {

    themeBtn.textContent = '☀️'
}

themeBtn.addEventListener('click', () => {

    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀️';
    } 
    
    else {

        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙';
    }
});