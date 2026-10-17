# Kateryna Sitailo — UX/UI Portfolio

Статичний сайт-портфоліо: головна сторінка — анімована мапа Лондона з лініями метро, кожна лінія веде до розділу (About, Experience, Projects, Skills, Education, Contact). Без збірки, без фреймворків і без npm — чистий HTML + CSS + JavaScript.

## Структура

```
kateryna-portfolio/
├── index.html            ← єдина HTML-сторінка: мета-теги, OG, іконки, підключення CSS/JS
├── css/
│   └── styles.css        ← усі стилі (кольори ліній метро, сітки, анімації, адаптив)
├── js/
│   ├── images.js         ← АВТОГЕНЕРАЦІЯ: списки картинок і їх розміри (не редагувати руками)
│   ├── data.js           ← контент: проєкти, назви розділів, кольори, лінії та станції метро
│   ├── city-map.js       ← векторна карта Лондона для фону головної (згенеровані дані)
│   └── app.js            ← логіка: мапа метро, рендер сторінок, роутер (#/about …), перехід «поїзд», лайтбокс
├── images/
│   ├── og-image.jpg      ← превʼю для Telegram/LinkedIn/Facebook (1200×630)
│   └── projects/<id>/    ← cover.webp + 01.webp, 02.webp … для кожного проєкту
├── tools/
│   └── build-images.py   ← перегенерація js/images.js після зміни картинок
├── favicon.svg · favicon.ico · apple-touch-icon.png
├── robots.txt · sitemap.xml
└── README.md
```

## Запуск локально

- Найпростіше: двічі клікнути `index.html` — працює і через `file://`.
- Або з локальним сервером (ближче до бойових умов):
  ```bash
  cd kateryna-portfolio
  python3 -m http.server 8000
  # відкрити http://localhost:8000
  ```

## Як змінювати контент

| Що змінити | Де |
|---|---|
| Тексти розділів About, Experience, Skills, Education, Contact | `js/app.js` → функція `render()` (рядки з `k=="about"`, `k=="experience"` …) |
| Назви, описи, теги, посилання на Behance проєктів | `js/data.js` → масив `P` |
| Лінії метро, станції, кольори | `js/data.js` → масив `L`, обʼєкти `COL`, `NAME` |
| Стилі, кольори, відступи, адаптив | `css/styles.css` |
| Title, description, OG-теги | `index.html` → `<head>` |

### Додати або замінити слайди проєкту

1. Поклади картинки в `images/projects/<id>/`: обкладинка — `cover.webp`, слайди — `01.webp`, `02.webp` … (порядок = за іменем файлу). Підтримуються webp, jpg, png. Ширина слайдів 1600–1800 px, обкладинки ~1000 px; вага одного файлу бажано до 300 КБ.
2. Запусти з кореня проєкту: `pip install pillow` (один раз), потім `python3 tools/build-images.py` — він оновить `js/images.js`.

### Додати новий проєкт

1. Додай обʼєкт у масив `P` у `js/data.js` (`id`, `t` — назва, `s` — підзаголовок, `d` — опис, `tg` — теги, `l` — посилання на Behance, якщо є).
2. Створи папку `images/projects/<id>/` з `cover.webp` і слайдами, запусти `python3 tools/build-images.py`.
3. За бажання додай станцію на лінію Projects у масиві `L` (`js/data.js`).

## Перед деплоєм (обовʼязково)

- [x] Адреса сайту (`https://doroshchukekaterina-design.github.io`) вже підставлена в `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`), `robots.txt` і `sitemap.xml`.
  Швидкий пошук: `grep -rn "YOUR-DOMAIN" .`
- [ ] Перевірити, що `https://<домен>/images/og-image.jpg` відкривається.
- [ ] Підтвердити контактні дані (email, телефон) у `js/app.js`.
- [ ] За потреби вставити GA4 / Meta Pixel у `index.html` (коментарі `<!-- GA4 … -->` у `<head>`). Для відвідувачів з Британії/ЄС потрібен банер згоди на cookies.

## Деплой

Сайт статичний — підійде будь-який хостинг. Завантажуй **усю папку** (разом з `css/`, `js/`, `images/`).

- **GitHub Pages:** запушити файли в репозиторій → Settings → Pages → Branch `main` / root.
- **Netlify / Cloudflare Pages:** перетягнути папку в інтерфейс (Build command — порожньо, Publish directory — `/`).
- **Vercel:** імпортувати репозиторій, Framework Preset — «Other».

## Після деплою

1. **PageSpeed:** https://pagespeed.web.dev — вставити URL, перевірити Performance, Accessibility, Best Practices, SEO (мобільна і десктопна версії).
2. **OG-превʼю:** https://opengraph.xyz або https://developers.facebook.com/tools/debug — перевірити картинку й тексти; якщо не оновилось — «Scrape Again».

## Примітки

- Навігація працює через hash (`#/projects/fit`), тому окремі розділи не мають власних URL для пошукових систем. Основні мета-теги вже в `<head>`, а `<noscript>` показує контакти без JavaScript.
- Анімація відкриття (червона карта → сіра → лінії метро) програється один раз при заході на головну; при `prefers-reduced-motion` вона пропускається.
- Шрифти (Cabin) підключаються з Google Fonts; без інтернету використовуються запасні системні.
