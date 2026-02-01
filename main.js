const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

const THEME_KEY = 'theme';

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
    themeToggle.setAttribute('aria-pressed', String(isDark));
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
}

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

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
});

initTheme();
