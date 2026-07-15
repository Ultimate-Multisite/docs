---
title: RunCloud Интеграция
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Интеграция

## Обзор {#overview}
RunCloud - это облачная платформа для управления серверами, которая позволяет вам легко развертывать и управлять веб-приложениями на ваших собственных облачных серверах. Эта интеграция обеспечивает автоматическую синхронизацию доменов и управление SSL-сертификатами между Ultimate Multisite и RunCloud.

## Возможности {#features}
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами
- Удаление домена при удалении сопоставлений (mappings)

## Требования {#requirements}
Следующие константы нужно определить в вашем файле `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'ваш_api_ключ');
define('WU_RUNCLOUD_API_SECRET', 'ваш_api_секрет');
define('WU_RUNCLOUD_SERVER_ID', 'ваш_server_id');
define('WU_RUNCLOUD_APP_ID', 'ваш_app_id');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите учетные данные API RunCloud {#1-get-your-runcloud-api-credentials}

1. Войдите в свою панель управления RunCloud.
2. Перейдите в раздел "User Profile" (нажмите на свою аватарку в правом верхнем углу).
3. Выберите "API" из меню.
4. Нажмите "Generate API Key", если у вас его еще нет.
5. Скопируйте свой API Key и API Secret.

### 2. Получите ID вашего сервера и приложения {#2-get-your-server-and-app-ids}

1. В панели управления RunCloud перейдите в раздел "Servers".
2. Выберите сервер, где размещен ваш WordPress multisite.
3. Server ID виден в URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Перейдите в "Web Applications" и выберите ваше приложение WordPress.
5. App ID виден в URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'ваш_api_ключ');
define('WU_RUNCLOUD_API_SECRET', 'ваш_api_секрет');
define('WU_RUNCLOUD_SERVER_ID', 'ваш_server_id');
define('WU_RUNCLOUD_APP_ID', 'ваш_app_id');
```

### 4. Включите интеграцию {#4-enable-the-integration}

1. WordPress администратораnda, Ultimate Multisite > Settings'e gidin
2. "Domain Mapping" sekmesindäki menüye keçin
3. "Host Integrations" bo'lakka aşağı kayting
4. RunCloud integratsiyasini yoqing (Enable)
5. "Save Changes" (O'zgartirishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi {#how-it-works}

Ultimate Multisite'da domen xaritasi qilindiqtida:

1. Integratsiya domainni ilovangizga qo'shish uchun RunCloud API-siga so'rov yuboradi
2. Agar domen muvaffaqiyatli qo'shilsa, integratsiya SSL sertifikatlarini qayta joylashtiradi (redeploy)
3. Domen xaritasi olib tashlanganda, integratsiya domainni RunCloud dan olib tashlaydi

Subdomainlar uchun o'rnatishlarda, tarmohingizga yangi saytlar qo'shilganda integratsiya avtomatik ravishda RunCloud-da subdomainlarni yaratishni boshqaradi.

## Muammolarni Qayta Ko'rib Chiqish (Troubleshooting) {#troubleshooting}

### API Bog'lanish Muammolari {#api-connection-issues}
- API kredensialaringizning to'g'ri ekanligini tekshiring
- Server va ilova IDlaringizning to'g'ri ekanligini tekshiring
- RunCloud hisobingizda kerakli ruxsatnomalar mavjudligiga ishonch hosil qiling

### SSL Sertifikati Muammolari {#ssl-certificate-issues}
- RunCloud SSL sertifikatlarini chiqarish biroz vaqt olishi mumkin
- Domenlaringizning server IP manziliga to'g'ri yo'naltirilganligini tekshiring
- Ilova uchun RunCloud SSL sozlamalarini tekshiring

### Domen Qo'shilmagan {#domain-not-added}
- Ultimate Multisite loglarida xatolik xabarlari bormi, tekshiring
- Domen hali RunCloudga qo'shilmaganligini tasdiqlang
- RunCloud rejangiz ko'p domenlarni qo'llab-quvvatlayotganidan ishonch hosil qiling
