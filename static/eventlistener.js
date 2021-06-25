document.addEventListener('DOMContentLoaded', () => {

    //Hamburger Menu
    const menuBtn = document.querySelector('.hamburger-container');
    let hamMenu = document.querySelector('.hamburger-menu-display');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            hamMenu.style.display = 'flex';
            hamMenu.style.animation = 'slidein 0.5s linear';
            hamMenu.style.left = '0px';
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            hamMenu.style.animation = 'slideout 0.5s linear';
            hamMenu.style.left = '-390px'
        }
    });
    
    // Dealing with the date and day displayed on navbar
    let day = document.querySelector('.day');
    let date = document.querySelector('.date');

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let currDate = new Date();
    let currDay = currDate.getDay();
    let currMonth = currDate.getMonth();

    day.innerHTML = days[currDay];

    let todayDate = currDate.getDate();
    let year = currDate.getFullYear();
    let month = months[currMonth];

    date.innerHTML = todayDate + " " + month + " " + year;

    let leftbtn = document.querySelector('#left-btn');
    let rightbtn = document.querySelector('#right-btn');

    leftbtn.addEventListener('click', () => {
        if (currDay - 1 === -1) {
            currDay = 6;
            day.innerHTML = days[currDay];
        } else {
            currDay = currDay - 1;
            day.innerHTML = days[currDay];
        }

        if (month === "April" || month === "June" || month === "September" || month === "November") {

            if (todayDate <= 1) {
                todayDate = 31;
                currMonth = currMonth - 1;
                month = months[currMonth];
                date.innerHTML = todayDate + " " + month + " " + year;
            } else {
                todayDate -= 1;
                date.innerHTML = todayDate + " " + month + " " + year;
            }
        } else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
            if (todayDate <= 1) {
                if (month === "August" || month === "January") {
                    todayDate = 31;
                } else {
                    todayDate = 30;
                }
                currMonth = currMonth - 1;
                month = months[currMonth];
                date.innerHTML = todayDate + " " + month + " " + year;
            } else {
                todayDate -= 1;
                date.innerHTML = todayDate + " " + month + " " + year;
            }
        }

    });

    rightbtn.addEventListener('click', () => {
        if (currDay + 1 === 7) {
            currDay = 0;
            day.innerHTML = days[currDay];
        } else {
            currDay = currDay + 1;
            day.innerHTML = days[currDay];
        }
        if (month === "April" || month === "June" || month === "September" || month === "November") {

            if (todayDate >= 30) {
                todayDate = 1;
                currMonth = currMonth + 1;
                month = months[currMonth];
                date.innerHTML = todayDate + " " + month + " " + year;
            } else {
                todayDate += 1;
                date.innerHTML = todayDate + " " + month + " " + year;
            }
        } else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
            if (todayDate >= 31) {
                todayDate = 1;
                currMonth = currMonth + 1;
                month = months[currMonth];
                date.innerHTML = todayDate + " " + month + " " + year;
            } else {
                todayDate += 1;
                date.innerHTML = todayDate + " " + month + " " + year;
            }
        }
    });

    // Format Selector Dropdown
    let formatSelector = document.querySelector('.format-dropdown-container');
    let formatDropdown = document.querySelector('.format-dropdown');
    let formatOptions = document.querySelectorAll('.format-dropdown div');
    let currFormat = document.querySelector('#current-format');
    let isOpen = false;

    formatSelector.addEventListener('click', () => {
        if (isOpen) {
            formatDropdown.style.display = 'none';
            isOpen = false;
        } else {
            formatDropdown.style.display = 'block';
            isOpen = true;
        }
    });

    formatOptions.forEach(item => {
        item.addEventListener('click', () => {
            let format = item.textContent;

            if (format === "Week") {
                formatSelector.style.width = '100px';
            } else if (format === "Month") {
                formatSelector.style.width = '110px';
            } else {
                formatSelector.style.width = '90px';
            }

            currFormat.innerHTML = format;
        })
    })

    // Displaying the Event Creator Box 
    let eventContainer = document.querySelector('.event-container');
    let timeInterval = document.querySelectorAll('.time-interval');
    let eventBox = document.querySelector('.event-creator');
    let closebtn = document.querySelector('#close-container');
    let eventBtn = document.querySelector('.create-event-btn');
    let formBtn = document.querySelector('#formbtn');

    timeInterval.forEach(item => {
        item.addEventListener('click', () => {
            eventBox.style.display = 'block';
            eventContainer.style.opacity = '0.5';
        });
    });

    eventBtn.addEventListener('click', () => {
        eventBox.style.display = 'block';
        eventContainer.style.opacity = '0.5';
    });

    closebtn.addEventListener('click', () => {
        eventBox.style.display = 'none';
        eventContainer.style.opacity = '1';
    });

});



