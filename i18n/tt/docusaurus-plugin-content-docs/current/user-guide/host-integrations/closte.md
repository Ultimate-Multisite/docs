---
title: Клост интеграция
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Интеграция

## Обзор {#overview}
Closte - это хостинг-платформа для WordPress, построенная на инфраструктуре Google Cloud. Эта интеграция позволяет автоматически синхронизировать домены и управлять SSL-сертификатами между Ultimate Multisite и Closte.

## Возможности {#features}
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами
- Поддержка поддоменных (wildcard) доменов
- Не требуется никаких настроек, если вы используете Closte

## Требования {#requirements}
Если вы используете Closte, вам нужно определить следующую константу в вашем файле `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Эта константа обычно уже определена, если вы хостите на Closte.

## Инструкции по настройке {#setup-instructions}

### 1. Проверьте ваш API-ключ Closte {#1-verify-your-closte-api-key}

Если вы хостите на Closte, константа `CLOSTE_CLIENT_API_KEY` должна быть уже определена в вашем файле `wp-config.php`. Вы можете проверить это, посмотрев ваш файл `wp-config.php`.

### 2. Включите интеграцию {#2-enable-the-integration}

1. В админке WordPress перейдите в Ultimate Multisite > Settings (Настройки)
2. Перейдите на вкладку "Domain Mapping" (Сопоставление доменов)
3. Прокрутите вниз до раздела "Host Integrations" (Интеграции хостинга)
4. Включите интеграцию Closte
5. Нажмите "Save Changes" (Сохранить изменения)

## Как это работает {#how-it-works}

Когда домен сопоставляется в Ultimate Multisite:

1. Интеграция отправляет запрос к API Closte, чтобы добавить домен в ваше приложение
2. Closte автоматически занимается предоставлением SSL-сертификатов
3. Когда сопоставление домена удаляется, интеграция удалит этот домен из Closte

Интеграция также работает с настройкой интервала проверки DNS в Ultimate Multisite, что позволяет вам настроить, как часто система проверяет распространение DNS и выдачу SSL-сертификатов.

## Создание записи домена {#domain-record-creation}

Bu интеграция sayesinde сайт oluşturulduğunda veya kopyalandığında alan adı kaydı otomatik olarak oluşturulur. Bu durum özellikle Closte entegrasyonu için önemlidir, çünkü alan adı kaydının oluşturulması Closte API'sini tetikler ve bu da alan adını ve SSL sertifikasını oluşturmasını sağlar.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- Closte API anahtarınızın doğru olduğundan emin olun
- Closte hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- Closte'un SSL sertifikalarını düzenlemesi biraz zaman alabilir (genellikle 5-10 dakika)
- Alan adlarınızın Closte sunucunuzun IP adresine doğru şekilde yönlendirildiğini doğrulayın
- Alan adınız için DNS kayıtlarını kontrol ederek doğru yapılandırıldıklarından emin olun

### Alan Adı Eklenmedi {#domain-not-added}
- Ultimate Multisite loglarında herhangi bir hata mesajı olup olmadığını kontrol edin
- Alan adının Closte'a zaten eklenip eklenmediğini doğrulayın
- Alan adınızın DNS kayıtlarının doğru yapılandırıldığından emin olun

### DNS Kontrol Aralığı {#dns-check-interval}
- SSL sertifikalarının düzenlenmesi çok uzun sürüyorsa, Alan Eşleme (Domain Mapping) ayarlarındaki DNS kontrol aralığını ayarlayabilirsiniz.
- Varsayılan aralık 300 saniyedir (5 dakika), ancak testler sırasında daha hızlı kontrol için bunu 10 saniyeye kadar düşürebilirsiniz
