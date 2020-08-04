const section3__heading = document.getElementById('Section-3__Heading');
section3__heading.addEventListener('mouseover', () => {
    section3__heading.innerHTML = 'This Is Another Section';
    section3__heading.style.fonSize = '15px';
    section3__heading.style.color = 'orange';
});

section3__heading.addEventListener('mouseout', () => {
    section3__heading.innerHTML = 'THIS IS ANOTHER SECTION';
    section3__heading.style.fonSize = '25px';
    section3__heading.style.color = '#778899';
});

