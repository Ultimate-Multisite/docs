---
title: Үч-тәртип режим миграциясы
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Переход в режим сторонних возможностей {#third-party-mode-migration}

Superdav AI Agent v1.12.0 изменил то, как обрабатываются возможности сторонних сервисов. **Теперь сторонний режим по умолчанию установлен на "auto" (автоматический)**, что позволяет интегрировать нативную API Возможностей WordPress на WordPress 7.0+ без ручной настройки.

## Что изменилось? {#what-changed}

### До v1.12.0 {#before-v1120}

Сторонние возможности требовали ручной настройки:

- Вам нужно было явно включать "сторонний режим"
- Возможности загружались из пользовательского реестра
- Интеграция с API Возможностей WordPress была необязательной
- Режим "Legacy" (устаревший) был по умолчанию

### После v1.12.0 {#after-v1120}

Сторонние возможности работают автоматически:

- Сторонний режим по умолчанию установлен на "auto"
- Возможности интегрируются напрямую с API Возможностей WordPress
- Ручная настройка не требуется на WordPress 7.0+
- Режим "Legacy" все еще доступен для старых версий WordPress

## Кто затронут? {#who-is-affected}

### Новые установки (WordPress 7.0+) {#new-installations-wordpress-70}

**Никаких действий не требуется.** Сторонний режим автоматически устанавливается в "auto", и возможности работают сразу после установки.

### Существующие установки {#existing-installations}

**Ваши настройки сохраняются.** Если вы использовали:

- **Legacy mode (Устаревший режим)**: Вы остаетесь в этом режиме (никаких изменений)
- **Manual third-party mode (Ручной сторонний режим)**: Вы остаетесь в ручном режиме (никаких изменений)
- **Auto mode (Автоматический режим)**: Вы продолжаете использовать автоматический режим (никаких изменений)

### Версии WordPress до 7.0 {#wordpress-versions-before-70}

**Режим "Legacy" все еще доступен.** Если вы используете WordPress 6.x или более раннюю версию:

- Сторонний режим по умолчанию установлен на "legacy"
- Вы можете вручную включить сторонний режим, если хотите
- Обновитесь до WordPress 7.0+ для использования нативной API Возможностей

## Понимание режимов {#understanding-the-modes}

### Auto Mode (Новый режим по умолчанию) {#auto-mode-new-default}

**Автоматический режим (Auto mode)** использует нативную интеграцию с API Возможностей WordPress:

- Возможности регистрируются через хуки WordPress
- Полная совместимость с API Возможностей WordPress 7.0+
- Автоматическое обнаружение сторонних возможностей
- Ручная настройка не требуется

**Когда использовать**: WordPress 7.0+ с возможностями сторонних разработчиков

### Ручной режим (Manual Mode) {#manual-mode}

**Ручной режим** требует явной настройки:

- Вы указываете, какие сторонние возможности загружать
- Полезно для тестирования или выборочной загрузки возможностей
- Требует редактирования конфигурационных файлов
- Больше контроля, но больше настроек

**Когда использовать**: Для тестирования, выборочной загрузки возможностей или при необходимости кастомизации настроек.

### Устаревший режим (Legacy Mode) {#legacy-mode}

**Устаревший режим** использует старую систему сторонних возможностей:

- Пользовательский реестр возможностей (не WordPress Abilities API)
- Совместимость со старыми версиями WordPress
- Нет нативной интеграции с WordPress
- Устарел, но все еще поддерживается

**Когда использовать**: Для WordPress 6.x или более ранних версий, или когда вам нужна обратная совместимость со старым форматом.

## Проверка текущего режима {#checking-your-current-mode}

### Через админ-панель {#via-admin-panel}

1. Перейдите в **WordPress Admin** → **Superdav AI Agent** → **Settings** (Настройки)
2. Найдите настройку **Third-Party Mode** (Режим сторонних возможностей).
3. Вы увидите ваш текущий режим и опции для его изменения.

### Через код {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' или 'legacy'
```

## Изменение режима {#changing-your-mode}

### Переключение на Авторежим (Auto Mode) {#switch-to-auto-mode}

Если вы используете WordPress 7.0+ и хотите использовать авторежим:

1. Перейдите в **Superdav AI Agent** → **Settings** (Настройки).
2. Найдите **Third-Party Mode**.
3. Выберите **Auto (WordPress Abilities API)**.
4. Нажмите **Save** (Сохранить).

Superdav AI Agent автоматически обнаружит и зарегистрирует сторонние возможности.

### Переключение на Ручной Режим (Manual Mode) {#switch-to-manual-mode}

Если вы хотите вручную контролировать, какие возможности загружаются:

1. Перейдите в **Superdav AI Agent** → **Settings** (Настройки).
2. Найдите **Third-Party Mode**.
3. Выберите **Manual**.
4. Нажмите **Save** (Сохранить).
5. Отредактируйте ваш конфигурационный файл, чтобы указать, какие возможности нужно загрузить.

### Переключение на Устаревший Режим (Legacy Mode) {#switch-to-legacy-mode}

Если вам нужна обратная совместимость со старыми версиями:

1. **Superdav AI Agent**-e gidin → **Settings** (Ayarlar)
2. **Third-Party Mode**-u tapın
3. **Legacy**-ni seçin
4. **Save**'e tıklayın

## Auto Modunun Faydaları {#benefits-of-auto-mode}

### Otomatik Keşif {#automatic-discovery}

Yetenekler şunlardan otomatik olarak bulunur:

- Kurulmuş pluginler (eklentiler)
- Aktif tema
- Zorunlu pluginler
- Drop-in pluginleri

Manuel kayıt yapmanıza gerek yok.

### Yerel Entegrasyon {#native-integration}

Yetenekler WordPress Abilities API'si ile entegre olur:

- WordPress çekirdeğiyle uyumludur
- WordPress admin paneliyle çalışır
- Abilities API'sini kullanan diğer pluginlerle uyumludur
- WordPress geliştiğinde geleceğe dönüktür

### Basitleştirilmiş Yönetim {#simplified-management}

- Düzenlemeniz gereken yapılandırma dosyası yok
- Manuel yetenek kaydı gerekmiyor
- Ability Visibility kontrolleri otomatik çalışır
- Admin bildirimleri sınıflandırılmamış yetenekler hakkında sizi uyarır

### Daha İyi Performans {#better-performance}

- Yetenekler önbelleğe alınır (cached)
- İhtiyaç duyulduğunda tembel yüklenir (lazy-loaded)
- WordPress 7.0+ için optimize edilmiştir

## Taşıma Yolu (Migration Path) {#migration-path}

### Eğer WordPress 6.x kullanıyorsanız {#if-youre-on-wordpress-6x}

1. **WordPress'i 7.0+ sürümüne yükseltin** (hazır olduğunuzda)
2. **Superdav AI Agent'ı v1.12.0+'a güncelleyin**
3. **third-party mode'u Auto olarak değiştirin** (isteğe bağlı; legacy mod hala çalışır)
4. Doğru erişim kontrollerini sağlamak için **ability visibility** ayarlarını gözden geçirin

### Eğer WordPress 7.0+ kullanıyorsanız {#if-youre-on-wordpress-70}

1. **Superdav AI Agent'ı v1.12.0+'a güncelleyin**
2. **third-party mode'un Auto olarak ayarlandığını doğrulayın** (varsayılan olarak böyle olmalı)
3. Doğru erişim kontrollerini sağlamak için **ability visibility** ayarlarını gözden geçirin
4. Çalışıp çalışmadığını teyit etmek için **third-party abilities** test edin

## Sorun Giderme (Troubleshooting) {#troubleshooting}

### Auto modunda yetenekler yüklenmiyor {#abilities-arent-loading-in-auto-mode}

- WordPress'in 7.0+ sürümünde olduğunuzu doğrulayın
- third-party mode'un "Auto" olarak ayarlandığını kontrol edin
- Yeteneği sağlayan plugin'in aktif olup olmadığını kontrol edin
- Kayıt hataları için WordPress hata günlüklerini (error logs) kontrol edin

### Legacy modu korumak istiyorum {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode**'a gidin
- **Legacy**'yi seçin
- **Save**'e tıklayın
- Legacy mod çalışmaya devam edecektir

### Мои пользовательские способности не отображаются {#my-custom-abilities-arent-showing}

- Проверьте, зарегистрированы ли они через хуки WordPress
- Убедитесь, что они правильно реализуют Abilities API
- Просмотрите логи ошибок WordPress
- Используйте страницу администрирования **Ability Visibility**, чтобы увидеть все зарегистрированные способности

### Я получаю уведомления о «неклассифицированной способности» {#im-getting-unclassified-ability-notices}

- Это нормально для новых сторонних способностей
- Проверьте и классифицируйте их в уведомлении администратора
- Посмотрите **Ability Visibility** для получения подробной информации о классификации

## Обратная совместимость {#backward-compatibility}

### Существующие конфигурации {#existing-configurations}

Если у вас есть существующие конфигурации сторонних способностей:

- **Режим Legacy (Устаревший)**: Ваша конфигурация продолжает работать
- **Режим Manual (Ручной)**: Ваша конфигурация продолжает работать
- **Режим Auto (Автоматический)**: Ваша конфигурация игнорируется (автоматический режим берет управление)

Чтобы сохранить вашу пользовательскую конфигурацию, оставайтесь в режиме Manual или Legacy.

### Временная шкала вывода из эксплуатации (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Режимы Legacy и Manual по-прежнему полностью поддерживаются
- **v1.13.0+**: Режим Legacy может показывать уведомления о выходе из эксплуатации
- **v2.0.0**: Режим Legacy может быть удален (Определяется позже)

## Лучшие практики {#best-practices}

### Для новых установок {#for-new-installations}

- Используйте режим Auto (это настройка по умолчанию)
- Позвольте агенту Superdav AI автоматически обнаруживать способности
- Используйте Ability Visibility для контроля доступа

### Для существующих установок {#for-existing-installations}

- Обновитесь до WordPress 7.0+ при возможности
- Переключитесь на режим Auto для упрощенного управления
- Проверьте и классифицируйте способности, используя Ability Visibility

### Для пользовательских способностей {#for-custom-abilities}

- Регистрируйте способности через хуки WordPress (Abilities API)
- Избегайте создания собственных реестров способностей
- Тестируйте на WordPress 7.0+ с режимом Auto

## Следующие шаги {#next-steps}

1. **WordPress versiyanyňy kontrol ediň**: Avtomatik rejim (Auto mode) üçin 7.0+ versiyada bolýar, diňe onu barlap görüň.
2. **Üçünji tərəf rejimini görkeziň**: Settings-e girip şu wagt näme rejimde bolmagyny kontrol ediň.
3. **Gerek bolsa güncelleň**: Eger siz WordPress 7.0+ versiyada bolsa, Auto mode bilen işlemek üçin oja geçiň.
4. **Käbiletleri sınıflandır**: Sınıflandrylmagan ähtibarçlary (abilities) görkeziň we olary düzgün ýerlerine bölüň.
5. **Test ediň**: Üçünji tərəf ähtibarçlaryňyz düzgün işlediğinden anyklaň.

## Baglaný mowzuklar {#related-topics}

- **Ähtibarçlary görkezmek (Ability Visibility)**: Hangi ähtibarçlary nirede görkezmek isleýändigi barada kontrol ediň.
- **WordPress Abilities API**: WordPress-iň özüniň ähtibarçlaryny qeydirmek barada öwreniň.
- **Üçünji tərəf ähtibarçlyklaryny ösürmek (Third-Party Ability Development)**: Auto mode bilen işleýän ähtibarçlyklary döredip görkeziň.
