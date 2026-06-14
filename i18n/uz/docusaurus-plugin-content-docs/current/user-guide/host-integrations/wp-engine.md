---
title: WP Engine Integratsiyasi
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integratsiyasi

## Umumiy Ko'rinish
WP Engine bu WordPress saytlari uchun optimallashtirilgan ish faoliyati, xavfsizlik va kengaytirish imkoniyatini taqdim etadigan premium boshqariladigan WordPress hosting platformasidir. Bu integratsiya Ultimate Multisite va WP Engine o'rtasida domenlarni avtomatik sinxronlashni imkon beradi.

## Xususiyatlar
- Domenlarni avtomatik sinxronlash
- multisite o'rnatmalari uchun subdomen qo'llab-quvvatlash
- WP Engine mavjud tizimlari bilan silliq integratsiya

## Talablar
Integratsiya sizning WP Engine da joylashtirilganligingizni avtomatik aniqlaydi va ichki WP Engine API dan foydalanadi. Agar WP Engine plugin faol bo'lsa va to'g'ri sozlanib turgan bo'lsa, qo'shimcha konfiguratsiya talab qilinmaydi.

Biroq, integratsiyani qo'lda sozlash kerak bo'lsa, siz `wp-config.php` faylingizda quyidagi konstantlardan birini belgilashingiz mumkin:

```php
define('WPE_APIKEY', 'your_api_key'); // Afzal ko'riladigan usul
// Yoki
define('WPE_API', 'your_api_key'); // Alternativ usul
```

## Sozlash Ko'rsatmalari

### 1. WP Engine Pluginini tekshirish

Agar siz WP Engine da joylashtirilgan bo'lsangiz, WP Engine plugin o'rnatilgan va faollashgan bo'lishi kerak. Quyidagilarni tekshiring:

1. WP Engine plugin faolmi
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` fayli mavjudmi

### 2. Integratsiyani faollashtirish

1. WordPress admin panelida Ultimate Multisite > Settings ga o'ting
2. "Domain Mapping" (Domen xaritasi) yorlig'iga kiring
3. "Host Integrations" (Joylashtirish integratsiyalari) qismiga tushib boring
4. WP Engine integratsiyasini faollashtiring
5. "Save Changes" (O'zgartirishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi

### Domenlarni sinxronlash

Ultimate Multisite da domen xaritasi qilinganda:

1. Integratsiya WP Engine API dan foydalanib, domen nomini sizning WP Engine o'rnatmangizga qo'shadi
2. WP Engine domen konfiguratsiyasini va SSL sertifikatini berishni boshqaradi
3. Domen xaritasi olib tashlanganda, integratsiya domenni WP Engine dan olib tashlaydi

### Subdomenlarni qo'llab-quvvatlash

Поддомен мультисайтовых установок для:

1. Интеграция добавляет каждый поддомен в WP Engine при создании нового сайта.
2. WP Engine управляет настройкой поддомена.
3. При удалении сайта интеграция удалит поддомен из WP Engine.

## Важные замечания

### Дикие домены (Wildcard Domains)

Для установок мультисайтовых поддоменов рекомендуется связаться со службой поддержки WP Engine и запросить конфигурацию дикого домена (wildcard domain). Это позволит всем поддоменам работать автоматически, не прибегая к добавлению каждого из них по отдельности.

### SSL-сертификаты

WP Engine автоматически занимается выдачей и продлением SSL-сертификатов для всех доменов, добавленных через эту интеграцию. Дополнительная настройка не требуется.

## Устранение неполадок (Troubleshooting)

### Проблемы с подключением к API
- Проверьте, что плагин WP Engine активен и правильно настроен.
- Если вы вручную определяли API ключ, проверьте, что он верный.
- Свяжитесь со службой поддержки WP Engine, если у вас возникли проблемы с API.

### Домен не добавлен
- Проверьте логи Ultimate Multisite на наличие сообщений об ошибках.
- Убедитесь, что домен еще не добавлен в WP Engine.
- Убедитесь, что ваш план WP Engine поддерживает количество добавляемых вами доменов.

### Проблемы с поддоменами
- Если поддомены не работают, свяжитесь со службой поддержки WP Engine и запросите конфигурацию дикого домена (wildcard domain).
- Проверьте, правильно ли настроены ваши DNS-настройки для основного домена и поддоменов.
