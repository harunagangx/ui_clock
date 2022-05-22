/*=============== CLOCK NEEDLE ===============*/
const hour = document.getElementById('clock-hour'),
      minute = document.getElementById('clock-minute'),
      second = document.getElementById('clock-second');
      
const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;

    
}

setInterval(clock, 1000);

/*=============== CLOCK DATE & TEXT ===============*/
const textHour = document.getElementById('text-hour'),
      textMinute = document.getElementById('text-minute'),
      textAMPM = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year');

      const clockText = () => {
        let date = new Date();
    
        let hh = date.getHours(),
            ampm, 
            mm = date.getMinutes(),
            ss = date.getSeconds(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
    
            console.log(day);
    
        if (hh >= 12)
        {
            hh = hh - 12;
            ampm = 'PM';
        }
        else {
            ampm = 'AM';
        }
    
        if (hh == 12) {hh = 12}
        
        if (hh < 10) { hh = `0${hh}`}
    
        if (mm < 10) { mm = `0${mm}`}
    
        // Show clock text
        textHour.innerHTML = `${hh}:`;
        textMinute.innerHTML = `${mm}`;
        textAMPM.innerHTML = `${ampm}`
    
        // show date text
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        dateDay.innerHTML = `${day},`;
        dateMonth.innerHTML = `${months[month]}`;
        dateYear.innerHTML = year;
    }      
    
    setInterval(clockText, 1000);


/*=============== CHANGE THEME ===============*/
const btnTheme = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => btnTheme.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

if (selectedTheme)
{
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    btnTheme.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    btnTheme.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon())
})


