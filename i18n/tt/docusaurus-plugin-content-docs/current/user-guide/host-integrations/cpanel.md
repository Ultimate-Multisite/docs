---
title: cPanel Интеграция
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Интеграция

## Обзор {#overview}
cPanel - это один из самых популярных панелей управления веб-хостингом, которые используют многие хостинг-провайдеры, предоставляющие как общий, так и выделенный хостинг. Эта интеграция позволяет автоматически синхронизировать домены между Ultimate Multisite и cPanel, что дает вам возможность автоматически добавлять псевдонимы доменов (aliases) и поддомены в ваш аккаунт cPanel.

## Возможности {#features}
- Автоматическое создание дополнительных доменов (addon domain) в cPanel
- Автоматическое создание поддоменов в cPanel (для установок с поддоменными мультисайтами)
- Удаление домена при удалении настроек сопоставления (mappings)

## Требования {#requirements}
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Опционально, вы также можете определить:

```php
define('WU_CPANEL_PORT', 2083); // По умолчанию 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // По умолчанию /public_html
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите учетные данные cPanel {#1-get-your-cpanel-credentials}

1. Получите свое имя пользователя и пароль cPanel у вашего хостинг-провайдера.
2. Определите свой хост cPanel (обычно это `cpanel.yourdomain.com` или `yourdomain.com:2083`).

### 2. Добавьте константы в wp-config.php {#2-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Опционально, вы можете настроить порт и корневой каталог:

```php
define('WU_CPANEL_PORT', 2083); // Измените, если ваш cPanel использует другой порт
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Измените, если корень ваших документов отличается
```

### 3. Включите интеграцию {#3-enable-the-integration}

1. WordPress администратораnda, Ultimate Multisite > Settings'e gidin
2. "Domain Mapping" sekmesindäki tabda navigatsiya qiling
3. "Host Integrations" bo'limiga tushib boring
4. cPanel integratsiyasini faollashtiring
5. "Save Changes" (O'zgarishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi {#how-it-works}

### Addon Domainlar {#addon-domains}

Ultimate Multisite'da domain moslashtirilganda:

1. Integratsiya cPanel API-siga so'rov yuboradi va domenni addon domain sifatida qo'shadi
2. Domenga asosiy katalogga (root directory) ishora qilish uchun sozlama qilinadi
3. Domain moslashuvini olib tashlaganingizda, integratsiya addon domainni cPanel'dan olib tashlaydi

### Subdomainlar {#subdomains}

Subdomain multisite o'rnatmalari uchun, yangi sayt yaratilganda:

1. Integratsiya to'liq domenidan subdomain qismini ajratadi
2. Subdomainni qo'shish uchun cPanel API-siga so'rov yuboradi
3. Subdomain asosiy katalogga (root directory) ishora qilish uchun sozlanadi

## Muhim Eslatmalar {#important-notes}

- Integratsiya sizning cPanel hisobingiz bilan bog'lanish uchun cPanel API2 dan foydalanadi
- Sizning cPanel hisobingiz addon domainlar va subdomainlarni qo'shish huquqiga ega bo'lishi kerak
- Ba'zi hosting provayderlari siz yarata oladigan addon domainlar yoki subdomainlar sonini cheklashi mumkin
- Integratsiya DNS konfiguratsiyasini boshqarmaydi; dominalaringizni hali ham serverning IP manziliga ishora qilishingiz kerak

## Muammolarni Qayta Ko'rib Chiqish (Troubleshooting) {#troubleshooting}

### API Bog'lanish Muammolari {#api-connection-issues}

- cPanel foydalanuvchi nomi va parolingiz to'g'ri ekanligini tekshiring
- cPanel hostingizning to'g'ri va kirish mumkinligini tekshiring
- CPanel hisobingizda kerakli huquqlar mavjudligini ta'minlang
- Host uchun to'liq URL dan foydalanishni sinab ko'ring (masalan, `https://cpanel.yourdomain.com`)

### Domain Qo'shilmagan {#domain-not-added}

- Ultimate Multisite loglarida xatolik xabarlari bormi tekshiring
- Domenni cPanelga allaqachon qo'shilganligini tasdiqlang
- CPanel hisobingiz addon domainlar yoki subdomainlar uchun cheklanishiga yetmaganligini ta'minlang

### SSL Sertifikat Sorunları {#ssl-certificate-issues}
- Интеграция SSL sertifikası düzenleme işini yapmaz.
- Alan adlarınız için SSL sertifikaları almak amacıyla cPanel'in SSL/TLS araçlarını veya AutoSSL özelliğini kullanmanız gerekecektir.
- Alternatif olarak, cPanel'in AutoSSL özelliği ile Let's Encrypt gibi bir hizmeti kullanabilirsiniz.
