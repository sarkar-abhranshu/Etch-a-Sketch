GRIDSIZE = 960;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const button = document.querySelector('.gridSize');
    const rainbowButton = document.querySelector('.rainbow');
    
    button.addEventListener('click', () => {
        let size = prompt("Enter a new grid size: ");
        if(size <= 0 || size > 100) {
            alert("Invalid :( Please input a number between 1 and 100");
            return;
        }
        grid(size);
    });

    function rainbow() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }



    function grid(size = 16) {
        container.innerHTML = '';
        let cellSize = GRIDSIZE / size + 'px';
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const div = document.createElement('div');
                div.style.flex = `0 0 calc(100% / ${size})`;
                div.style.height = cellSize;
                div.style.width = cellSize;
                container.appendChild(div);
            }
        }
    }

    container.addEventListener('mouseover', (event) => {
        if (event.target !== container) {
            event.target.style.backgroundColor = 'green';
        }
    });

    rainbowButton.addEventListener('click', () => {
        container.addEventListener('mouseover', (event) => {
            if (event.target !== container) {
                event.target.style.backgroundColor = rainbow();
            }
        });
    });

    grid();
});