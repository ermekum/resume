# Resume Site

Лаконичный статический сайт-резюме Ermek Umurzakov.

## Файлы
- `index.html` - главная страница
- `styles.css` - визуальная система, адаптивность, print-стили
- `script.js` - переключение темы и год в футере
- `resume-ermek-umurzakov.pdf` - PDF-версия резюме для кнопки скачивания

## Как открыть
Откройте `index.html` в браузере. Сервер не требуется.

## Что есть на странице
- переключатель светлой и тёмной темы с сохранением выбора
- кнопка скачивания PDF
- кликабельные контакты: LinkedIn, Telegram, WhatsApp, email и телефон
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
