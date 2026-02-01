const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateNumbers();
    numbersContainer.innerHTML = '';
    for (const number of lottoNumbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;

        // Optional: Color-code the numbers
        if (number <= 10) {
            numberDiv.style.backgroundColor = '#f9e' 
        } else if (number <= 20) {
            numberDiv.style.backgroundColor = '#f9c'
        } else if (number <= 30) {
            numberDiv.style.backgroundColor = '#f99'
        } else if (number <= 40) {
            numberDiv.style.backgroundColor = '#f69'
        } else {
            numberDiv.style.backgroundColor = '#f39'
        }

        numbersContainer.appendChild(numberDiv);
    }
});
