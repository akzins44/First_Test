const recommendationContainer = document.getElementById('recommendation-container');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

const THEME_KEY = 'theme';
const strawberryVarieties = [
    {
        name: '설향',
        tone: '부드럽고 달콤한 대표 품종',
        description: '대중성이 높고 부드러운 과육이 특징이라 생과 판매와 디저트용 모두에 잘 어울립니다.',
        image: 'assets/strawberry-seolhyang.svg',
        alt: '설향 딸기 일러스트 이미지'
    },
    {
        name: '금실',
        tone: '밝고 산뜻한 인상의 프리미엄 품종',
        description: '깔끔한 단맛과 선명한 외관이 강점이라 고급 패키지와 시즌 프로모션에 잘 맞습니다.',
        image: 'assets/strawberry-geumsil.svg',
        alt: '금실 딸기 일러스트 이미지'
    },
    {
        name: '킹스베리',
        tone: '큰 과형으로 시선을 끄는 품종',
        description: '크기와 존재감이 뛰어나 선물 세트, 호텔 디저트, 프리미엄 매대 연출에 유리합니다.',
        image: 'assets/strawberry-kingsberry.svg',
        alt: '킹스베리 딸기 일러스트 이미지'
    },
    {
        name: '죽향',
        tone: '향 중심 소비자에게 어울리는 품종',
        description: '풍부한 향과 깊은 풍미가 매력적이라 향미를 강조하는 브랜드 스토리텔링에 적합합니다.',
        image: 'assets/strawberry-jukhyang.svg',
        alt: '죽향 딸기 일러스트 이미지'
    }
];

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    if (themeToggle) {
        themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
        themeToggle.setAttribute('aria-pressed', String(isDark));
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
}

function renderVarietyCard(variety) {
    recommendationContainer.innerHTML = '';

    const card = document.createElement('article');
    card.className = 'variety-card';

    const image = document.createElement('img');
    image.className = 'variety-image';
    image.src = variety.image;
    image.alt = variety.alt;
    image.loading = 'lazy';

    const title = document.createElement('h3');
    title.textContent = variety.name;

    const tone = document.createElement('p');
    tone.className = 'variety-tone';
    tone.textContent = variety.tone;

    const description = document.createElement('p');
    description.className = 'variety-desc';
    description.textContent = variety.description;

    card.append(image, title, tone, description);
    recommendationContainer.appendChild(card);
}

if (generateBtn && recommendationContainer) {
    generateBtn.addEventListener('click', () => {
        const variety = strawberryVarieties[Math.floor(Math.random() * strawberryVarieties.length)];
        renderVarietyCard(variety);
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, nextTheme);
        applyTheme(nextTheme);
    });
}

initTheme();
