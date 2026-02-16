---
title: Переклад Ultimate Multisite
sidebar_position: 19
_i18n_hash: a433d81386db16579adeb9a60f6af240
---
# Переклад Ultimate Multisite

Ultimate Multisite розробляється англійською мовою, але плагін повністю підтримує переклад, і ми активно вітаємо внески від перекладачів.

## Переклади основного плагіна

Основний плагін Ultimate Multisite перекладається через офіційну **платформу перекладів WordPress.org**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

Це стандартна система перекладів спільноти WordPress. Коли переклади досягають достатнього порогу схвалення, вони автоматично розповсюджуються всім користувачам Ultimate Multisite через оновлення плагіна WordPress.

**Нам потрібна ваша допомога!** Якщо ви володієте будь-якою мовою, крім англійської, будь ласка, долучайтеся до перекладу. Навіть переклад кількох рядків — це вже допомога. Щоб почати:

1. Відвідайте [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. Оберіть свою мову
3. Натисніть "Contribute Translation"
4. Вам знадобиться безкоштовний обліковий запис на WordPress.org

Якщо ви хочете стати редактором перекладу для вашої мови (з можливістю схвалювати переклади), зверніться через [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions).

## Переклади addon-ів

Addon-плагіни перекладаються окремо на:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

Наразі переклади addon-ів згенеровані штучним інтелектом як відправна точка. Вони охоплюють усі підтримувані мови, але можуть містити незграбні формулювання або неточності. Ми вітаємо перекладачів-людей, які можуть переглянути та запропонувати покращення, щоб зробити переклади більш природними й точними.

## Локальні переклади

Якщо ви хочете створити переклади локально для власного проєкту, а не робити внесок у головний репозиторій, є два варіанти:

### Використання Poedit

Ви можете використовувати десктопний застосунок **[Poedit](https://poedit.net)** для перекладу файлу `.pot`:

1. Завантажте Poedit з [poedit.net](https://poedit.net)
2. Відкрийте файл `.pot` з `wp-content/plugins/ultimate-multisite/lang/`
3. Перекладіть рядки в інтерфейсі Poedit
4. Збережіть — Poedit згенерує файли `.po` та `.mo`
5. Розмістіть вихідні файли в папці `lang`

### Використання Loco Translate

Плагін WordPress **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** дозволяє перекладати безпосередньо з панелі адміністратора без жодних десктопних інструментів. Він самостійно створює та компілює файли перекладу.
