// code for the fixed header 
window.onscroll = function() {
    var header = document.getElementById('mainHeader');
    var logo = header.querySelector('.logo');
    var page = document.getElementById('page');

    // setting the distance a user needs to scroll for the function to begin
    var sticky = header.offsetTop + 250;

    if (window.scrollY > sticky) {
        // adding styles when scroled down
        header.classList.add('fixed-header');
        logo.classList.add('hide-logo');
        page.classList.add('added-padded');
    } else {
        // removing styles when scrolling back to the top
        header.classList.remove('fixed-header');
        logo.classList.remove('hide-logo');
        page.classList.remove('added-padded');
    }
};


// Responsive navbar function 

// function for mobile navBar open/close
function openSesame() {
    const mobileNavButton = document.querySelector('.mobileNavBar_button');
    const mobileNavBar = document.querySelector('.mobileNavBar');

    mobileNavButton.addEventListener('click', function() {
        if(mobileNavBar.classList.contains('mobileNavBar-hidden')) {
            mobileNavBar.classList.remove('mobileNavBar-hidden');
            mobileNavBar.classList.add('mobileNavBar-visible');
        } else {
            mobileNavBar.classList.remove('mobileNavBar-visible');
            mobileNavBar.classList.add('mobileNavBar-hidden')
        }
    })
}
// wait for document to fully load
document.addEventListener('DOMContentLoaded', function() {
    openSesame();
}); 

// function openSesame() {
//     const mobileNavButton = document.getElementsByClassName('mobileNavBar_button')[0];
//     const mobileNavBar = document.querySelector('.mobileNavBar');

//     mobileNavButton.addEventListener('click', function() {
//         mobileNavBar.classList.add('mobileNavBar-visible');
//     });
// }