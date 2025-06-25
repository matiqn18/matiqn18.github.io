document.addEventListener('DOMContentLoaded', () => {

    // --- Zmienne globalne i przełączniki ---
    const themeToggle = document.getElementById('theme-toggle');
    const langPlBtn = document.getElementById('lang-pl');
    const langEnBtn = document.getElementById('lang-en');
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-button');
    let slideIndex = 1;

    // Zaktualizowana mapa ikonek, aby objąć wszystkie Pana technologie
    const techIconMap = {
        javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        godot: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
        python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        discordjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
        nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
        php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
        mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
        bash: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
        cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        codeigniter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
        docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        spring: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    };
    
    // --- Inicjalizacja motywu i języka ---
    function setupTheme() {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'light') { themeToggle.checked = true; }
        }
        themeToggle.addEventListener('change', function() {
            document.body.setAttribute('data-theme', this.checked ? 'light' : 'dark');
            localStorage.setItem('theme', this.checked ? 'light' : 'dark');
        });
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        document.querySelectorAll('[data-pl]').forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) el.innerText = text;
        });
        if (lang === 'pl') {
            langPlBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPlBtn.classList.remove('active');
        }
    };
    langPlBtn.addEventListener('click', () => setLanguage('pl'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    
    // --- Logika Modala i Karuzeli ---
    function attachModalListeners() {
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const carouselContainer = document.querySelector('.carousel-container');
        const dotsContainer = document.querySelector('.dots-container');
        const techIconsContainer = document.querySelector('.modal-tech-icons');
        const githubBtn = document.getElementById('github-btn');
        
        // NOWE ZMIENNE DLA NOWYCH ELEMENTÓW
        const downloadBtn = document.getElementById('download-btn');
        const statusBadge = document.getElementById('modal-status-badge');
        const dateCreatedSpan = document.getElementById('modal-date-created');
        const dateUpdatedSpan = document.getElementById('modal-date-updated');
        const licenseSpan = document.getElementById('modal-license');

        // Mapa licencji
        const licenseUrlMap = {
            'MIT': 'https://opensource.org/licenses/MIT',
            'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0.html',
            'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0'
        };

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const currentLang = localStorage.getItem('language') || 'pl';
                const dataset = card.dataset;
                const langKey = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);

                // Wypełnianie modala
                modalTitle.innerText = dataset[`title${langKey}`] || dataset.titlePl;
                modalDescription.innerText = dataset[`desc${langKey}`] || dataset.descPl;
                
                // NOWA LOGIKA DO OBSŁUGI DODATKOWYCH DANYCH
                const status = dataset[`status${langKey}`] || dataset.statusPl;
                statusBadge.innerText = status || '';
                statusBadge.style.display = status ? 'inline-block' : 'none';

                dateCreatedSpan.innerHTML = dataset.dateCreated ? `<b data-pl="Stworzono:" data-en="Created:">Stworzono:</b> ${dataset.dateCreated}` : '';
                dateUpdatedSpan.innerHTML = dataset.dateUpdated ? `<b data-pl="Aktualizacja:" data-en="Updated:">Aktualizacja:</b> ${dataset.dateUpdated}` : '';
                
                if (dataset.license) {
                    const licenseUrl = licenseUrlMap[dataset.license];
                    let licenseHTML = `<b data-pl="Licencja:" data-en="License:">Licencja:</b> `;
                    licenseHTML += licenseUrl ? `<a href="${licenseUrl}" target="_blank" rel="noopener noreferrer">${dataset.license}</a>` : dataset.license;
                    licenseSpan.innerHTML = licenseHTML;
                    licenseSpan.style.display = 'inline-flex';
                } else {
                    licenseSpan.style.display = 'none';
                }

                githubBtn.style.display = dataset.githubLink ? 'inline-flex' : 'none';
                githubBtn.href = dataset.githubLink || '#';
                
                downloadBtn.style.display = dataset.downloadLink ? 'inline-flex' : 'none';
                downloadBtn.href = dataset.downloadLink || '#';

                // Istniejąca logika karuzeli i ikonek
                const images = (dataset.images || '').split(',').filter(img => img);
                const technologies = (dataset.tech || '').split(',').filter(tech => tech);
                
                carouselContainer.querySelectorAll('.slide').forEach(s => s.remove());
                dotsContainer.innerHTML = '';
                techIconsContainer.innerHTML = '';

                images.forEach((imgSrc, i) => {
                    const slide = document.createElement('div');
                    slide.className = 'slide fade';
                    slide.innerHTML = `<img src="${imgSrc}" alt="${modalTitle.innerText} screenshot ${i+1}">`;
                    carouselContainer.insertBefore(slide, carouselContainer.querySelector('.prev'));
                    const dot = document.createElement('span');
                    dot.className = 'dot';
                    dot.onclick = () => currentSlide(i + 1);
                    dotsContainer.appendChild(dot);
                });
                
                technologies.forEach(tech => {
                    const techKey = tech.trim().toLowerCase();
                    if(techIconMap[techKey]) {
                        const icon = document.createElement('img');
                        icon.src = techIconMap[techKey];
                        icon.alt = tech.trim();
                        icon.title = tech.trim();
                        techIconsContainer.appendChild(icon);
                    }
                });

                slideIndex = 1;
                showSlides(slideIndex);
                modal.style.display = 'block';
                setLanguage(currentLang);
            });
        });

        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
        window.addEventListener('click', (event) => { if (event.target == modal) { modal.style.display = 'none'; } });

        document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
        document.querySelector('.next').addEventListener('click', () => plusSlides(1));
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Dodajemy nasłuchiwanie na kliknięcie przycisku
    menuToggle.addEventListener('click', () => {
        // Dodaje lub usuwa klasę 'active' z menu
        navLinks.classList.toggle('active');
    });

    // Opcjonalnie: zamykanie menu po kliknięciu w link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }
    function currentSlide(n) { 
        slideIndex = n
        showSlides(slideIndex); 
    }

    function showSlides(n) {
        let slides = modal.getElementsByClassName("slide");
        let dots = modal.getElementsByClassName("dot");
        if (slides.length === 0) return;
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (const element of slides) {
            element.style.display = "none";
        }
        for (const element of dots) {
            element.className = element.className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active";
    }

    // --- Logika Filtrowania ---
    function filterProjects(tech) {
        const projectCards = document.querySelectorAll('.project-card');
        const filterHexagons = document.querySelectorAll('.filter-hexagon');
        filterHexagons.forEach(hex => {
            hex.classList.toggle('active', hex.dataset.filter === tech);
        });
        projectCards.forEach(card => {
            const cardTechs = card.dataset.tech;
            const isVisible = tech === 'all' || cardTechs?.includes(tech);
            card.classList.toggle('hide', !isVisible);
        });
    }

    function generateFilters() {
        const allTechs = new Set();
        document.querySelectorAll('.project-card').forEach(card => {
            if (card.dataset.tech) {
                card.dataset.tech.split(',').forEach(tech => {
                    if (tech) allTechs.add(tech.trim());
                });
            }
        });
        const filterContainer = document.getElementById('filter-container');
        if (!filterContainer) return;
        filterContainer.innerHTML = '';
        const allButton = document.createElement('div');
        allButton.className = 'filter-hexagon active';
        allButton.dataset.filter = 'all';
        allButton.innerHTML = `<span data-pl="Wszystkie" data-en="All">Wszystkie</span>`;
        allButton.onclick = () => filterProjects('all');
        filterContainer.appendChild(allButton);
        allTechs.forEach(tech => {
            if (techIconMap[tech]) {
                const hexButton = document.createElement('div');
                hexButton.className = 'filter-hexagon';
                hexButton.dataset.filter = tech;
                hexButton.innerHTML = `<img src="${techIconMap[tech]}" alt="${tech}" title="${tech}">`;
                hexButton.onclick = () => filterProjects(tech);
                filterContainer.appendChild(hexButton);
            }
        });
    }

    // --- Główna funkcja wczytująca ---
    async function loadProjects() {
        try {
            const response = await fetch('projekty-fragment.html');
            if (!response.ok) throw new Error(`Błąd HTTP! status: ${response.status}`);
            
            const html = await response.text();
            const placeholder = document.getElementById('projekty-placeholder');
            placeholder.innerHTML = html;

            attachModalListeners();
            generateFilters();
            setLanguage(localStorage.getItem('language') || 'pl');

        } catch (error) {
            console.error('Nie udało się załadować pliku z projektami:', error);
            document.getElementById('projekty-placeholder').innerHTML = '<p style="text-align: center; color: var(--accent);">Wystąpił błąd podczas ładowania projektów.</p>';
        }
    }

    function setupFooter() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // --- Start aplikacji ---
    setupTheme();
    setLanguage(localStorage.getItem('language') || 'pl');
    loadProjects();
    setupFooter();
});