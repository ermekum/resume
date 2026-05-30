# Resume Site

Премиальный статический сайт-резюме Ermek Umurzakov в концепции reliability as design.

## Файлы
- `index.html` - главная страница
- `styles.css` - визуальная система, адаптивность, print-стили
- `script.js` - год в футере
- `resume-ermek-umurzakov.pdf` - PDF-версия резюме для кнопки скачивания

## Как открыть
Откройте `index.html` в браузере. Сервер не требуется.

## Что есть на странице
- кнопка скачивания PDF
- кликабельные контакты: LinkedIn, Telegram, WhatsApp, email и телефон
- 7 секций: Hero, Reliability Snapshot, Quality System, Selected Impact, Case Files, Stack & Methods, Final CTA
- адаптивная верстка для desktop/mobile

## Загрузка на сервер по SCP

```bash
scp -r ./resume_site/* user@your-server:/var/www/resume/
```

Если каталог на сервере ещё не создан:

```bash
ssh user@your-server "mkdir -p /var/www/resume"
scp -r ./resume_site/* user@your-server:/var/www/resume/
```
