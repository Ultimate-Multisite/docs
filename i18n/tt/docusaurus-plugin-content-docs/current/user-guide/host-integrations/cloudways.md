---
title: Облак интеграциясы
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Интеграция

## Обзор
Cloudways - это управляемая платформа для хостинга в облаке, которая позволяет вам размещать сайты на WordPress на разных облачных провайдерах, таких как DigitalOcean, AWS, Google Cloud и других. Эта интеграция обеспечивает автоматическую синхронизацию доменов и управление SSL-сертификатами между Ultimate Multisite и Cloudways.

## Возможности
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами
- Поддержка дополнительных доменов
- Валидация DNS для SSL-сертификатов

## Требования
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'ваш_email_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'ваш_api_ключ');
define('WU_CLOUDWAYS_SERVER_ID', 'ваш_server_id');
define('WU_CLOUDWAYS_APP_ID', 'ваш_app_id');
```

Опционально вы также можете определить:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'список_доменов,разделенный_запятыми');
```

## Инструкции по настройке

### 1. Получите учетные данные API Cloudways

1. Войдите в свою панель управления Cloudways
2. Перейдите в "Account" (Учетная запись) > "API Keys" (API-ключи)
3. Сгенерируйте API-ключ, если у вас его еще нет
4. Скопируйте свой email и API-ключ

### 2. Получите ID вашего сервера и приложения

1. В панели управления Cloudways перейдите в "Servers" (Серверы)
2. Выберите сервер, где размещен ваш мультисайт WordPress
3. Server ID виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Перейдите в "Applications" (Приложения) и выберите ваше приложение WordPress
5. App ID виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Добавьте константы в wp-config.php

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Если у вас есть дополнительные **внешние** домены (за пределами вашей сети мультисайта), которые всегда должны оставаться в списке псевдонимов Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Не включайте свои собственные сетевые поддомены со звездочкой
Не добавляйте `*.your-network.com` (или любой другой шаблон поддомена вашей сети) в
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Посмотрите [Важно — ловушка с SSL-сертификатами со звездочкой](#important--wildcard-ssl-pitfall) ниже, почему это мешает выдаче SSL-сертификатов для каждого арендатора.
:::

### 4. Включите интеграцию

1. В админке WordPress перейдите в Ultimate Multisite > Settings (Настройки)
2. Перейдите на вкладку "Domain Mapping" (Сопоставление доменов)
3. Прокрутите вниз до "Host Integrations" (Интеграции хостов)
4. Включите интеграцию Cloudways
5. Нажмите "Save Changes" (Сохранить изменения)

## Как это работает

### Синхронизация доменов

Когда домен сопоставляется в Ultimate Multisite:

1. Интеграция получает все текущие сопоставленные домены
2. Она добавляет новый домен в список (вместе с версией www, если применимо)
3. Она отправляет полный список в Cloudways через API
4. Cloudways обновляет псевдонимы доменов для вашего приложения

Обратите внимание: API Cloudways требует отправлять полный список доменов каждый раз, а не просто добавлять или удалять отдельные домены.

### Управление SSL-сертификатами

После синхронизации доменов:

1. Интеграция проверяет, какие домены имеют действительные DNS-записи, указывающие на ваш сервер
2. Она отправляет запрос в Cloudways для установки SSL-сертификатов Let's Encrypt для этих доменов
3. Cloudways занимается выдачей и установкой SSL-сертификатов

Интеграция всегда запрашивает **стандартные** (не подзаменяемые) сертификаты Let's Encrypt из Cloudways. Если в `WU_CLOUDWAYS_EXTRA_DOMAINS` указан шаблон с диким символом (`*.`), то ведущий `*.` отбрасывается перед запросом SSL — сам дикий символ никогда не устанавливается этой интеграцией. Чтобы использовать сертификат с диким символом на Cloudways, вам придется установить его вручную, но это блокирует выдачу Let's Encrypt для доменов каждого конкретного домена, которые сопоставлены (см. подводный камень ниже).

## Дополнительные домены

Константа `WU_CLOUDWAYS_EXTRA_DOMAINS` позволяет указать дополнительные **внешние** домены, которые всегда должны оставаться в списке псевдонимов приложения Cloudways. Используйте ее для:

- Внешних доменов, которыми не управляет Ultimate Multisite (например, отдельный маркетинговый сайт, использующий то же приложение Cloudways).
- Доменов пассивного хостинга или стейджинга, которые вы хотите оставить в списке псевдонимов приложения.

**Не используйте** эту константу для поддоменных диких символов вашей собственной сети (например, `*.your-network.com`). Посмотрите подводный камень с сертификатами SSL с диким символом ниже.

## Важно — Подводный камень с SSL с диким символом

Частая ошибка при следовании настройкам по умолчанию в Cloudways заключается в добавлении такого шаблона, как `*.your-network.com`, в `WU_CLOUDWAYS_EXTRA_DOMAINS`, или ручной установке сертификата SSL с диким символом Cloudways для этого шаблона.

**Если вы это сделаете, Cloudways откажется выдавать сертификаты Let's Encrypt для доменов каждого арендатора (per-tenant custom domains), которые сопоставляет Ultimate Multisite.** Cloudways заменяет активный SSL-сертификат на приложении каждый раз, и уже существующий сертификат с диким символом на приложении блокирует выдачу Let's Encrypt для домена, на которую полагается интеграция.

### Рекомендуемая настройка SSL в Cloudways для сети Ultimate Multisite

1. Cloudways uygulamasının **SSL Sertifikası** sekmesinde, sadece `your-network.com` ve `www.your-network.com` adreslerini kapsayan bir **standart Let's Encrypt sertifikası** kurun — joker karakter (wildcard) kullanmayın.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` alanına `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni) eklemeyin. Bu sabiti sadece **harici** alan adları için saklayın.
3. Alt alan adlarının çözümlenmesi için yalnızca **DNS** düzeyinde per-tenant joker karakteri oluşturun (`*.your-network.com` için `A` kaydı, Cloudways sunucu IP'nize işaret etsin). Bireysel eşlenmiş özel alan adları için SSL, entegrasyon aracılığıyla Let's Encrypt tarafından otomatik olarak verilir.

Eğer kiracıların özel alan adları SSL olmadan takılı kalırsa, Cloudways SSL sekmesini kontrol edin. Orada bir joker karakter sertifikası aktifse, onu kaldırın, ana ağ alanı için standart bir Let's Encrypt sertifikası yeniden düzenleyin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki herhangi bir joker karakter girişini silin. Ardından alan eşleştirmesini tekrar tetikleyin (veya bir sonrakine kadar bekleyin) ve entegrasyon tekrar alan bazında sertifika vermeye başlayacaktır.

## Sorun Giderme

### API Bağlantı Sorunları
- E-posta adresinizin ve API anahtarınızın doğru olduğundan emin olun.
- Sunucu ve uygulama kimliklerinizin doğru olup olmadığını kontrol edin.
- Cloudways hesabınızın gerekli izinlere sahip olduğundan emin olun.

### SSL Sertifikat Sorunları
- Cloudways, SSL sertifikaları vermeden önce alan adlarının sunucunuza doğru geçerli DNS kayıtlarına sahip olmasını şart koşar.
- Entegrasyon, SSL sertifikalarını istemeden önce DNS kayıtlarını kontrol eder.
- Eğer SSL sertifikaları verilmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru işaret ettiğinden emin olun.
- **SSL'siz takılı kalan per-tenant özel alan adları var mı?** Cloudways uygulamasının SSL Certificate sekmesini kontrol edin. Eğer joker karakterli bir sertifika (manuel olarak yüklenmiş veya `*.your-network.com`'u kapsayan) aktifse, Cloudways tek tek eşlenmiş özel alan adları için Let's Encrypt sertifikaları vermeyecektir. Ana ağ alan adını (`your-network.com`, `www.your-network.com`) kapsayan standart bir Let's Encrypt sertifikasıyla değiştirin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki herhangi bir joker karakter girişini kaldırın. Ardından alan adı eşleştirmesini yeniden tetikleyin (veya bir sonrakini bekleyin) ve entegrasyon alan adı bazında sertifika isteyecektir.

### Alan Adı Eklenmedi
- Herhangi bir hata mesajı olup olmadığını Ultimate Multisite loglarında kontrol edin.
- Alan adının Cloudways'e zaten eklenip eklenmediğini doğrulayın.
- Eklenecek alan adlarının sayısını Cloudways planınızın desteklediğinden emin olun.
