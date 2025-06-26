# Portfolio Osobiste - Michał Łukaszczyk

Witaj w repozytorium mojego osobistego portfolio! To w pełni responsywna, statyczna strona typu "single-page", stworzona przy użyciu czystego HTML, CSS i JavaScript, aby zaprezentować moje umiejętności i projekty. Strona jest hostowana na GitHub Pages.

### **[Zobacz wersję na żywo (Live Demo)](https://matiqn18.github.io/)**

---
![Podgląd Strony](https://github.com/user-attachments/assets/a4bdba7d-5670-4409-888d-ad77502291fb)


## Kluczowe Funkcje

To portfolio to nie tylko statyczna wizytówka. Zostało wzbogacone o szereg interaktywnych funkcji, aby pokazać moje umiejętności w praktyce:

* **Dynamiczne Ładowanie Treści:** Sekcja z projektami jest ładowana asynchronicznie z osobnego pliku HTML za pomocą `fetch()` API.
* **Wielojęzyczność:** Pełne wsparcie dla języka polskiego i angielskiego, z przełącznikiem zapamiętującym wybór użytkownika w `localStorage`.
* **Przełącznik Motywu:** Możliwość zmiany motywu z ciemnego (domyślny) na jasny, z ikonami i zapamiętywaniem stanu.
* **Filtrowanie Projektów:** Interaktywne filtry pozwalają na dynamiczne sortowanie projektów według użytych technologii. Filtry generują się automatycznie na podstawie danych z projektów.
* **Zaawansowane Okno Szczegółów Projektu (Modal):**
    * **Karuzela obrazków** z nawigacją (strzałki i kropki).
    * **Dynamiczne ukrywanie nawigacji** karuzeli, jeśli projekt ma tylko jedno zdjęcie.
    * **Inteligentne dopasowanie obrazków** (`object-fit: contain`), aby poprawnie wyświetlać zarówno pionowe, jak i poziome screenshoty.
    * Szczegółowe informacje o projekcie, takie jak **status** (np. "Ukończony"), **daty**, **licencja** oraz linki do **GitHub** i **pobierania**.
* **Responsywny Design (RWD):** Strona jest w pełni dostosowana do urządzeń mobilnych, tabletów i desktopów.
* **Czysta Architektura:** Kod został podzielony na logiczne pliki: `index.html` (struktura), `style.css` (wygląd) i `script.js` (logika).
* **Elementy UX:** Dodatkowe detale, takie jak sekcja "hobby", stopka z automatycznie aktualizującym się rokiem czy subtelne animacje, aby poprawić doświadczenie użytkownika.

## Użyte Technologie

Projekt został zbudowany od podstaw, aby pokazać biegłość w fundamentalnych technologiach webowych.

* **Front-End:**
    * ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
    * ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
    * ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) (ES6+)
* **Narzędzia:**
    * ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
    * **GitHub & GitHub Pages** (Hosting i kontrola wersji)
    * **Live Server** (Lokalne środowisko deweloperskie)

## Uruchomienie Lokalne

Aby uruchomić projekt na swoim komputerze:

1.  Sklonuj repozytorium:
    ```bash
    git clone [https://github.com/matiqn18/matiqn18.github.io.git](https://github.com/matiqn18/matiqn18.github.io.git)
    ```
2.  Przejdź do folderu projektu:
    ```bash
    cd matiqn18.github.io
    ```
3.  **Ważne:** Z powodu użycia `fetch()` API do ładowania projektów, strona musi być uruchomiona na serwerze lokalnym. Otwarcie pliku `index.html` bezpośrednio z dysku spowoduje błąd CORS w przeglądarce.

    **Rekomendowany sposób (Visual Studio Code):**
    * Zainstaluj rozszerzenie [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
    * Kliknij prawym przyciskiem myszy na plik `index.html` i wybierz "Open with Live Server" lub kliknij przycisk "Go Live" na dolnym pasku edytora.

## Struktura Plików

```
.
├── assets/
│   ├── selfie.jpg
│   └── ... (inne zasoby, np. screenshoty projektów)
├── index.html          # Główny plik, szkielet strony
├── projekty-fragment.html # Komponent z siatką projektów, ładowany dynamicznie
├── script.js           # Cała logika strony (przełączniki, modal, filtry, etc.)
├── style.css           # Wszystkie style dla strony
└── README.md           # Ten plik :)
```
---

## Kontakt

Michał Łukaszczyk - [LinkedIn](https://www.linkedin.com/in/michal-lukaszczyk-matian/)

Link do projektu: [https://github.com/matiqn18/matiqn18.github.io](https://github.com/matiqn18/matiqn18.github.io)
