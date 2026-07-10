---
title: Сайтин Құраушы Режимінен Ажырату Хабарламасы
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Сайт Билдер Режима Удаление Уведомление {#site-builder-mode-removal-notice}

**Режим Site Builder удален в Superdav AI Agent v1.12.0.** Если вы использовали режим Site Builder, вам следует переключиться на **Setup Assistant agent** для создания тем и настройки сайта.

## Что произошло? {#what-happened}

### Режим Site Builder (Устаревший) {#site-builder-mode-legacy}

Site Builder mode был интерфейсом на основе мастера для:

- Создания сайтов из шаблонов
- Настройки базовых параметров
- Выбора темы
- Настройки начального контента

### Что его заменило? {#what-replaced-it}

**Setup Assistant agent** теперь обрабатывает всю функциональность Site Builder с:

- Более гибкой настройкой под руководством агента
- Лучшими возможностями для настройки тем
- Интеграцией с onboarding Theme Builder
- Постоянной памятью site_brief для будущих сессий

## Если Вы использовали режим Site Builder {#if-you-were-using-site-builder-mode}

### Ваши сайты в безопасности {#your-sites-are-safe}

- Существующие сайты, созданные с помощью Site Builder mode, продолжают работать
- Нет потери данных или сбоев в работе сайта
- Вы можете продолжать нормально управлять своими сайтами

### Перейдите на Setup Assistant agent {#migrate-to-setup-assistant-agent}

Для новой настройки сайта или изменений темы используйте Setup Assistant agent:

```
"Help me set up a new site"
```

или

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent предоставляет ту же функциональность, но с большей гибкостью.

## Сравнение: Site Builder против Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Характеристика | Site Builder (Удален) | Setup Assistant (Новый) |
|---------|----------------------|----------------------|
| Метод настройки | Форма мастера | Диалог с агентом |
| Выбор темы | Предварительно определенные шаблоны | Пользовательская генерация |
| Настройка | Ограниченные опции | Полная система дизайна |
| Site brief | Не сохраняется | Постоянная память |
| Будущие сессии | Повторная настройка | Использование сохраненного site_brief |
| Гибкость | Фиксированный рабочий процесс | Адаптивный диалог |

## Миграция на Setup Assistant agent {#migrating-to-setup-assistant-agent}

### Для новых сайтов {#for-new-sites}

Site Builder modum yerine:

1. İstek: "Yeni bir site kurmama yardım et"
2. Kurulum Asistan ajanı size şunlar konusunda rehberlik edecek:
   - Site amacı ve hedefleri
   - Hedef kitle
   - Marka kimliği
   - Tema oluşturma
   - İlk yapılandırma

### Mevcut Siteler İçin {#for-existing-sites}

Eğer Site Builder modundan bir siteniz varsa:

1. Onu olduğu gibi kullanmaya devam edebilirsiniz
2. Temayı güncellemek için şunu isteyin: "Sitemi yeniden tasarla"
3. Kurulum Asistan ajanı size yeni bir tema oluşturmanıza yardımcı olacak
4. Sitenizdeki veriler değişmeyecek

### Tema Değişiklikleri İçin {#for-theme-changes}

Site Builder modunun tema seçiminin yerine:

1. İstek: "Temamı değiştir"
2. Kurulum Asistan ajanı şunları yapacak:
   - Tasarım tercihlerinizi soracak
   - Özel bir tema oluşturacak
   - Onu sitenizde etkinleştirecek

## Temel Farklar {#key-differences}

### Site Builder Modu {#site-builder-mode}

```
1. Bir şablon seçin
2. Bir tema seçin
3. Temel ayarları yapılandırın
4. Bitti
```

### Kurulum Asistan Ajanı {#setup-assistant-agent}

```
1. Sitenizin amacını anlatın
2. Hedef kitlenizi tanımlayın
3. Tasarım tercihlerinizi seçin
4. Ajan özel tema oluşturur
5. Ajan temayı etkinleştirir
6. Gelecekteki oturumlar için site özeti saklanır
```

## Kurulum Asistan Ajanının Avantajları {#benefits-of-setup-assistant-agent}

### Daha Esnek {#more-flexible}

- Sitenizi doğal dilde tarif edin
- Özel öneriler alın
- Belirli ihtiyaçlarınıza uyum sağlayın

### Daha İyi Özelleştirme {#better-customization}

- Özel tema oluşturma
- Tasarım sistemi kararları
- Kalıcı tasarım belirteçleri (design tokens)

### Kalıcı Bellek {#persistent-memory}

- Sitenizdeki `site_brief` saklanır
- Gelecekteki ajanlar sitenizi anlar
- Kurulum bilgilerini tekrar sormaya gerek kalmaz

### Entegre İş Akışı {#integrated-workflow}

- Tema Oluşturucu başlangıç (onboarding)
- Tasarım Sistemi Estetiği becerisi
- Görünürlük kontrolleri yeteneği
- Tüm işler sorunsuz bir şekilde birlikte çalışır

## Sorun Giderme {#troubleshooting}

### Site Builder modunu bulamıyorum {#i-cant-find-site-builder-mode}

Site Builder modu kaldırılmıştır. Bunun yerine Kurulum Asistan ajanını kullanın:

"Мне помочь настроить новый сайт"

### Я хочу воссоздать сайт из Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Вы можете сделать это с помощью агента Setup Assistant:

1. Запрос: "Помоги мне настроить новый сайт"
2. Опишите цель и дизайн вашего оригинального сайта
3. Агент сгенерирует похожую тему
4. Ваше site_brief будет сохранен для будущих ссылок

### Мой существующий сайт из Site Builder не работает {#my-existing-site-builder-site-isnt-working}

Существующие сайты, созданные в режиме Site Builder, продолжают работать. Если у вас возникли проблемы:

1. Проверьте, что ваша тема все еще активна
2. Убедитесь, что ваши плагины включены
3. Проверьте логи ошибок WordPress
4. Свяжитесь с поддержкой, если проблемы сохраняются

### Могу ли я все еще использовать мои старые шаблоны Site Builder? {#can-i-still-use-my-old-site-builder-templates}

Шаблоны Site Builder больше недоступны. Однако:

- Ваши существующие сайты продолжают работать
- Вы можете воссоздать похожие сайты с помощью агента Setup Assistant
- Агент Setup Assistant предоставляет больше возможностей для настройки

## Следующие шаги {#next-steps}

1. **Для новых сайтов**: Используйте агент Setup Assistant
2. **Для существующих сайтов**: Продолжайте использовать их в том виде, в каком они есть
3. **Для изменений темы**: Попросите помощи у агента Setup Assistant
4. **Для доработки дизайна**: Используйте навык Design System Aesthetics

## Связанные темы {#related-topics}

- **Theme Builder Onboarding (Введение в Theme Builder)**: Управляемая настройка для пользовательских тем
- **Setup Assistant Agent (Агент Setup Assistant)**: Настройка сайта под руководством агента
- **Site Specification Skill (Навык Спецификации Сайта)**: Определите цели и аудиторию вашего сайта
- **Design System Aesthetics Skill (Навык Эстетики Дизайн Системы)**: Уточните визуальную идентичность вашего сайта
