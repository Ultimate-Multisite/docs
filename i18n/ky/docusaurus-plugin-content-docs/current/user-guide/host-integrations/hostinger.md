---
title: Hostinger (hPanel) Интеграция
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Интеграция

## Обзор

Hostinger — это популярный хостинг-провайдер с современным панелью управления под названием hPanel. Интеграция Ultimate Multisite и Hostinger позволяет автоматически синхронизировать домены между Ultimate Multisite и hPanel от Hostinger, что дает вам возможность автоматически управлять сопоставлениями доменов и поддоменами прямо из вашей админ-панели WordPress.

## Возможности

- Автоматическое создание дополнительных доменов в hPanel
- Автоматическое создание поддоменов в hPanel (для установок с мультисайтом поддоменов)
- Удаление домена при удалении сопоставлений
- Бесшовная интеграция с API управления доменами hPanel

## Требования

Чтобы использовать интеграцию Hostinger, вам понадобится:

1. Аккаунт Hostinger с доступом к hPanel
2. Токен API от Hostinger
3. Следующие константы, определенные в вашем файле `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'ваш_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'ваш_hostinger_account_id');
```

Опционально вы также можете определить:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Стандартная конечная точка API
```

## Инструкции по настройке

### 1. Сгенерируйте ваш токен API Hostinger

1. Войдите в свой аккаунт Hostinger и перейдите в hPanel
2. Перейдите в **Настройки аккаунта** → **Токены API** (Account Settings → API Tokens)
3. Нажмите **Создать новый токен** (Create New Token)
4. Дайте вашему токену описательное имя (например, "Ultimate Multisite")
5. Выберите необходимые разрешения:
   - Управление доменами (Domain management)
   - Управление поддоменами (Subdomain management)
6. Скопируйте сгенерированный токен и сохраните его в надежном месте

### 2. Найдите свой ID аккаунта

1. В hPanel перейдите в **Настройки аккаунта** → **Информация об аккаунте** (Account Settings → Account Information)
2. Ваш ID аккаунта отображается на этой странице
3. Скопируйте и сохраните этот ID для следующего шага

### 3. Добавьте константы в wp-config.php

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'sizin_hostinger_api_tokenınız');
define('WU_HOSTINGER_ACCOUNT_ID', 'sizin_hostinger_hesap_idiniz');
```

Eğer Hostinger hesabınızda boshqa API uchstusi ishlatilsa, uni o'zgartirishingiz mumkin:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integratsiyani Faollashtirish

1. WordPress admin panelida **Ultimate Multisite > Settings** ga kiring
2. **Domain Mapping** (Domain Xaritasi) yorlig'iga o'ting
3. Pastga tushib **Host Integrations** (Host Integratsiyalari) bo'limini toping
4. **Hostinger (hPanel)** integratsiyasini faollashtiring
5. **Save Changes** (O'zgarishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi

### Addon Domainlar

Ultimate Multisite da domen xaritasi qilsangiz:

1. Integratsiya Hostinger API ga domenni addon domain sifatida qo'shish uchun so'rov yuboradi
2. Domen asosiy katalogingizga (root directory) ishora qilish uchun sozlanadi
3. Domen xaritasi o'chirilsa, integratsiya addon domainni hPanel dan avtomatik olib tashlaydi

### Subdomainlar

Subdomain multisite o'rnatmalar uchun yangi sayt yaratilganda:

1. Integratsiya to'liq domenidan subdomain qismini ajratadi
2. U subdomainni qo'shish uchun Hostinger API ga so'rov yuboradi
3. Subdomain asosiy katalogingizga ishora qilish uchun sozlanadi

## Muhim Eslatmalar

- Integratsiya hisobingiz bilan aloqa qilish uchun Hostingerning REST API dan foydalanadi
- Sizning API tokeningiz domen va subdomainlarni boshqarish uchun zarur ruxsatlarga ega bo'lishi kerak
- Integratsiya DNS konfiguratsiyasini hal qilmaydi; domenlar allaqachon sizning Hostinger hisobingizga ishora qilingan bo'lishi kerak
- API so'rovlari HTTPS orqali xavfsiz amalga oshiriladi
- API tokeningizni xavfsiz saqlang va uni hech qachon ommabop etmang

## Muammolarni Hal Qilish (Troubleshooting)

### API Bog'lanish Muammolari

API токенин туура экенин жана убактысы өтпө элек экенин текшериңиз

Эсеп ID'де сиздин маалыматыңыз туура экенин текшериңиз

API токениңиз домендү башкаруу үчүн зарыл укуктары бар экенин камсыз кылыңыз

Hostinger эсебиңиз активдүү жана жакшы абалда экенин текшериңиз

### Домен кошулбаган

- Ultimate Multisite логдорунда кандайдыр бир ката билдирүүлөрү бар экенин текшериңиз
- Домен сиздин Hostinger эсебиңизге дагы кошулбагандыりгине көңүл буруңуз
- Hostinger эсебиңизди домендер үчүн кошумча (addon domains) чектөөгө жетпегендигине кам көрүңүз
- Домен сиздин Hostinger именер серверлерине туура багытталганын ырастаңыз

### SSL сертификаты маселелери

- Интеграция SSL сертификатын берип берүү менен иштөбүз
- Hostinger адатта AutoSSL аркылуу акысыз SSL сертификаттарын берет
- Сиз SSL сертификаттарын hPanelдеги **SSL/TLS** бөлүмүнөн түз башкара аласыз
- Же болбосо, Hostinger'дин AutoSSL функциясын Let's Encrypt менен колдонуңуз

## Колдоо

Hostinger интеграциясы боюнча кошумча жардам үчүн төмөнкүлөргө кайрылыңыз:

- [Hostinger API Документациясы](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Документациясы](/docs)
- [Ultimate Multisite Колдоо](https://ultimatemultisite.com/support)
