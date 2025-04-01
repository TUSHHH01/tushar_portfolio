


/* for mobile slide menu */
menuSlide = () => {
    const burgerMenu = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('burgerActive');
    })
}

roboSlide = () => {
    const robo = document.querySelector('.robo');
    robo.classList.add('roboActive');
}

textAppear = (cssClass) => {
    const element = document.querySelector(cssClass);
    element.classList.add('textAppear');
}

/* for mobile slide menu */
menuSlide();

/* home page animation */
setTimeout(function () {
    setTimeout(function () {
        setTimeout(function () {
            setTimeout(function () {
                setTimeout(function () {
                    setTimeout(function () {
                        roboSlide();
                    }, 500);
                    textAppear('.openingText');
                }, 500)
                textAppear('.currentEmployer');
                textAppear('.timeEmployed');
            }, 500)
            textAppear('.current');
        }, 500)
        textAppear('.name');
        textAppear('.title');
    }, 500);
    textAppear('.greeting');
}, 400);

/* toggle dark mode*/
toggleSwitch = () => {
    const toggleButton = document.querySelector('.toggleSwitch');
    const toggleBox = document.querySelector('.toggle');
    toggleButton.addEventListener('change', () => {
        if (toggleBox.checked === true) {
            addDarkMode();
        }
        else {
            removeDarkMode();
        }
    })
}

toggleSwitch();

setDefaultMode = () => {
    var prevMode = localStorage.getItem("sdeshkarMode");
    if (prevMode !== null) {
        if (prevMode === "dark") {
            addDarkMode();
        }
        else {
            removeDarkMode();
        }
    }
    else {
        localStorage.setItem("sdeshkarMode", "dark");
    }
}

addDarkMode = () => {
    document.querySelector('.toggle').checked = true;
    localStorage.setItem("sdeshkarMode", "dark");
    // inverts the robo colors
    const robo = document.querySelector('.robo');
    document.documentElement.classList.add('darkMode');
    robo.classList.add('roboDark');
    // changes the logo to the one that is adept for dark mode
    const logoImg = document.querySelector('.logo');
    const footerLogo = document.querySelector('.footerLogo');
    logoImg.children[0].src = "assets/navLogoDarkMode.svg";
    footerLogo.children[0].src = "assets/navLogoDarkMode.svg";
    // change navbar color
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = '#333'; // change this to the desired dark mode color
  }
  
  removeDarkMode = () => {
    document.querySelector('.toggle').checked = false;
    localStorage.setItem("sdeshkarMode", "light");
    // inverts the robo colors
    const robo = document.querySelector('.robo');
    document.documentElement.classList.remove('darkMode');
    robo.classList.remove('roboDark');
    // sets the default logo
    const logoImg = document.querySelector('.logo');
    const footerLogo = document.querySelector('.footerLogo');
    logoImg.children[0].src = "assets/navLogo.svg";
    footerLogo.children[0].src = "assets/navLogo.svg";
    // change navbar color
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = '#89d8f5'; // change this to the desired light mode color
  }

setDefaultMode();


/* go top button. Scroll to top smoothly, not supported in Safari */
goTop = () => {
    const goTopButton = document.querySelector('.goTop');
    goTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

goTop();