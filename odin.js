const container = document.getElementById('container');
const resetBtn = document.getElementById('reset-btn');

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#333';
        });
        
        container.appendChild(square);
    }
}

// Button click event
resetBtn.addEventListener('click', function() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    
    // Convert to number and validate
    newSize = parseInt(newSize);
    
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
});

createGrid(16);