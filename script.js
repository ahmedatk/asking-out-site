document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Automatically navigate to page 2 after typing animation
    setTimeout(() => {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    }, 2500); // Duration of typing animation

    yesButton.addEventListener('click', () => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
    });

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
