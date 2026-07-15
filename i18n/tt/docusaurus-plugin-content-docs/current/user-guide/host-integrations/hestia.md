---
title: Hestia Панель Интеграция
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Интеграция

Bu kılavuzda Ultimate Multisite Hestia entegrasyonunu nasıl yapılandıracağınızı ve ağınızdaki haritalanmış alan adlarının otomatik olarak Hestia'da Web Domain Alias'ları (takma adlar) olarak eklenip çıkarılacağını anlatıyoruz.

- Hestia CLI referansı: v-add-web-domain-alias / v-delete-web-domain-alias
- Resmi REST API dokümantasyonu: https://hestiacp.com/docs/server-administration/rest-api.html

## Ne Yapar? {#what-it-does}
- Ultimate Multisite'ta bir alan adı haritalandığında, entegrasyon Hestia API'sini çağırarak şunları çalıştırır:
  - `v-add-web-domain-alias <KULLANICI> <ALAN_ADI> <ALIAS> [YENİLE]`
- Bir alan adı eşleşmesi kaldırıldığında, şun çalıştırılır:
  - `v-delete-web-domain-alias <KULLANICI> <ALAN_ADI> <ALIAS> [YENİLE]`
- Alan Eşleştirme ayarlarınızdaki "Otomatik www alt alan adı oluştur" (Auto-create www subdomain) seçeneğine bağlı olarak `www.` takma adını isteğe bağlı olarak ekler/kaldırır.

## Ön Koşullar {#prerequisites}
- Zaten WordPress kurulumunuza işaret eden mevcut bir Hestia Web Domain'i olmalı. Entegrasyon, bu temel alana takma adlar ekleyecektir.
- Hestia API erişimi etkin olmalı. Kimlik doğrulamayı ya şifre ya da bir API hash/token kullanarak yapabilirsiniz.

API erişimini ve kimlik doğrulama ayrıntılarını etkinleştirmek için Hestia'nın REST API dokümantasyonuna bakın:
https://hestiacp.com/docs/server-administration/rest-api.html

## Yapılandırma (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Aşağıdaki değerleri sağlayın:

- `WU_HESTIA_API_URL` (задан)
  - Базовый адрес API, обычно это `https://ваш-хост-hestia:8083/api/`.
- `WU_HESTIA_API_USER` (задан)
  - Пользователь Hestia, который используется для команд API (часто `admin`).
- `WU_HESTIA_API_PASSWORD` или `WU_HESTIA_API_HASH` (хотя бы один)
  - Выберите один метод аутентификации: пароль или API хеш/токен.
- `WU_HESTIA_ACCOUNT` (задан)
  - Аккаунт (владелец) Веб-домена в Hestia; это первый аргумент для CLI.
- `WU_HESTIA_WEB_DOMAIN` (задан)
  - Существующий Веб-домен Hestia, на котором работает ваш WordPress (алиасы будут привязаны сюда).
- `WU_HESTIA_RESTART` (необязательно; по умолчанию `yes`)
  - Нужно ли перезапускать/перезагружать службы после изменения алиасов.

Вы можете позволить мастеру подставить эти константы в файл `wp-config.php`, или определить их вручную.

## Проверка настройки {#verifying-setup}
- На шаге мастера «Тестирование» плагин вызывает `v-list-web-domains <WU_HESTIA_ACCOUNT> json` через API. Успешный ответ подтверждает подключение и аутентификацию.
- После привязки домена проверьте в Hestia: Web > базовый домен > Алиасы. Вы должны увидеть добавленный новый алиас.

## Заметки и советы {#notes--tips}
- Убедитесь, что `WU_HESTIA_WEB_DOMAIN` уже существует и принадлежит `WU_HESTIA_ACCOUNT`.
- Если требуется SSL, управляйте сертификатами в Hestia. Эта интеграция на данный момент работает только с алиасами.
- Плагин также может добавлять/удалять `www.<domain>` в зависимости от вашей настройки "www subdomain" при сопоставлении доменов (Domain Mapping).

## Пример вызова API (cURL) {#example-api-call-curl}
Ниже приведен концептуальный пример (настройте под свою среду). См. официальную документацию для точных параметров.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Удаление для удаления используется `cmd=v-delete-web-domain-alias` и те же аргументы.

## Устранение неполадок (Troubleshooting) {#troubleshooting}
- Ошибка HTTP от API: проверьте, доступен ли адрес `WU_HESTIA_API_URL` и содержит ли он `/api`.
- Ошибки аутентификации: подтвердите, что установлены переменные `WU_HESTIA_API_USER` и либо `WU_HESTIA_API_PASSWORD`, либо `WU_HESTIA_API_HASH`.
- «Отсутствует учетная запись/базовый домен» в логах: убедитесь, что `WU_HESTIA_ACCOUNT` и `WU_HESTIA_WEB_DOMAIN` установлены и действительны в Hestia.

## Ссылки (References) {#references}
- REST API Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Справочник Hestia CLI (Псевдонимы): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
