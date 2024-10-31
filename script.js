document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const div = document.createElement('div');
            container.appendChild(div);
        }
    }
    const cell = document.querySelectorAll('div');
    for(let i=1; i<=256; i++){
        cell[i].addEventListener('mouseover', () => {
            cell[i].style.backgroundColor = 'green';
        });
    };
});