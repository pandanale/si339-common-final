/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-85px";
    }
    prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function() {
    let isBarbieModeOn = false; // Flag to track Barbie Mode state

    document.getElementById('theme-toggle-btn').addEventListener('click', function() {
        if (!isBarbieModeOn) {
            // Apply Barbie Mode styles
            document.body.style.fontFamily = 'cursive'; // Change the font
            document.body.style.backgroundColor = '#ff69b4'; // Change the background color
        
            // Change color of h2 and h3 headings
            const headings = document.querySelectorAll('h2, h3');
            headings.forEach(function(heading) {
                heading.style.color = '#ff69b4';
            });

            isBarbieModeOn = true; // Set flag to true
        } else {
            // Revert to original styles
            document.body.style.fontFamily = ''; // Revert font
            document.body.style.backgroundColor = ''; // Revert background color

            // Revert color of h2 and h3 headings
            const headings = document.querySelectorAll('h2, h3');
            headings.forEach(function(heading) {
                heading.style.color = ''; // This will revert to the stylesheet's color
            });

            isBarbieModeOn = false; // Set flag to false
        }
    });
});

