---
title: Integration Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Ổng-tso (Overview) {#overview}
Cloudflare нь сайтнуудыг хамгаалж, хурдасгах гол контент хүргэх сүлжээ (CDN) болон аюулгүй байдлын үйлчилгээ юм. Энэхүү integration нь Ultimate Multisite болон Cloudflare хоорондын домен удирдлагыг автоматаар хийж өгнө, ялангуяа subdomain-тай multisite суулгалт хийхэд ашигтай байдаг.

## Онцлог (Features) {#features}
- Cloudflare дээр subdomain-ыг автоматаар үүсгэх
- Proxy-д тулгуурласан subdomain-ыг дэмжих
- DNS record-удыг удирдах
- Ultimate Multisite admin дээр DNS record-удыг илүү сайн харуулах

## Шаардлага (Requirements) {#requirements}
Таны `wp-config.php` файл дотор дараах тогтмол утгуудыг тодорхойлох шаардлагатай:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Тохируулах зааврууд (Setup Instructions) {#setup-instructions}

### 1. Таны Cloudflare API Key-г авах {#1-get-your-cloudflare-api-key}

1. Таны Cloudflare dashboard руу нэвтэрнэ үү
2. "My Profile"-д орно (хамгийн дээд баруун талд байгаа email дээр дарна)
3. Менюгаас "API Tokens"-ыг сонгоно
4. Дараах эрхүүдтэй шинэ API token үүсгэнэ:
   - Zone.Zone: Read (Унших)
   - Zone.DNS: Edit (Засах)
5. Таны API token-ийг хуулна

### 2. Таны Zone ID-г авах {#2-get-your-zone-id}

1. Cloudflare dashboard дээр, та ашиглах доменыг сонгоно
2. Zone ID нь "Overview" таб дээр, "API"-ийн дотор баруун талын хажууд харагдана
3. Zone ID-г хуулна

### 3. wp-config.php руу тогтмол утгуудыг нэмэх {#3-add-constants-to-wp-configphp}

Дараах тогтмол утгуудыг `wp-config.php` файл дотор нэмнэ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Integration-ийг идэвхжүүлэх {#4-enable-the-integration}

1. Таны WordPress admin дээр, Ultimate Multisite > Settings руу орно
2. "Domain Mapping" таб руу явна
3. "Host Integrations"-д доошоо уншиж байна
4. Cloudflare integration-ийг идэвхжүүлнэ
5. "Save Changes"-д дарна

## Энэ хэрхэн ажилладаг вэ (How It Works) {#how-it-works}

### Subdomain Удирдах (Subdomain Management) {#subdomain-management}

Хэрэв subdomain multisite суулгалт хийсний дараа шинэ сайт үүсгэхэд:

1. Integration нь subdomain-д CNAME record нэмэх хүсэлтийг Cloudflare API руу илгээдэг.
2. Subdomain-ийг анхны тохиргооноор Cloudflare-ээр дамжуулдаг (энэ нь filters-ээр өөрчилж болно).
3. Сайт устгахад, integration нь тухайн subdomain-ыг Cloudflare-ээс арилгана.

### DNS Record харуулах {#dns-record-display}

Integration нь Ultimate Multisite admin дээрх DNS record-ийн ха tsar-ийг дараах байдлаар сайжруулдаг:

1. Cloudflare-ээс шууд DNS record-уудыг авч ирнэ.
2. Record-ууд прокси хийгдэж байгаа эсэхийг харуулна.
3. DNS record-той холбоотой нэмэлт мэдээллийг харуулдаг.

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (өмнө нь "Cloudflare for SaaS" гэж дууддаг байсан) бол таны хэрэглэгчдэд SSL-тэй хамт өөрийн домен дээр ашиглах боломжийг олгодог Cloudflare-ийн функц юм. Энэ нь Cloudflare-ыг ашигладаг домен-map хийсэн multisite installation-уудад зөвлөгөө өгдөг арга бөгөөд учир нь Cloudflare нь тус бүрийн custom domain-ын SSL сертификатыг автоматаар удирдаж, шинэчилдэг.

### Стандарт Cloudflare integration-тэй ялгаатай байдал {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Зорилго** | Subdomain-д DNS record-уудыг автоматаар үүсгэх | Cloudflare-ээр удирддаг SSL-тэй custom (mapped) domain-уудыг ашиглах боломж олгох |
| **Хамгийн тохиромжтой** | Subdomain multisite | Domain-map хийсэн multisite |
| **SSL** | Тусдаа зохион байгуулалттай | Cloudflare-ээр автоматаар удирддаг |

### Cloudflare Custom Hostnames-ийг тохируулах {#setting-up-cloudflare-custom-hostnames}

1. 뫼 Cloudflare dashboard-t, 뗍 domain-t chuu.
2. **SSL/TLS > Custom Hostnames**-t thau.
3. Server IP loss or hostname t hauv origin-t lauv.
4. Ultimate Multisite-t saiv customer domain t hauv Cloudflare-t, Custom Hostname entry hauv Cloudflare-t hauv. API chuu hauv this step t automation t hauv.
5. Customer DNS t thau your network t, Cloudflare t TLS certificate chuu custom hostname t hauv automatic-t issue lauv renewal lauv.

API reference chuu [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) hauv.

:::note Terminology update
Ultimate Multisite v2.6.1 t hauv, this feature t saiv **Cloudflare Custom Hostnames** lauv all plugin setting lauv label lauv. Earlier version chuu "Cloudflare for SaaS" lauv, which is underlying Cloudflare product name lauv.
:::

## Important Notes {#important-notes}

Cloudflare t recent update lauv, wildcard proxying t hauv all customer lauv available lauv. This means standard Cloudflare DNS integration t saiv less critical for subdomain multisite installation than before, because you can simply set up a wildcard DNS record in Cloudflare.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Your API token chuu correct lauv and necessary permission chuu hauv check lauv.
- Your Zone ID chuu correct lauv check lauv.
- Your Cloudflare account t necessary permission chuu hauv ensure lauv.

### Subdomain Not Added {#subdomain-not-added}
- Ultimate Multisite logs chuu error message chuu hauv check lauv.
- Your subdomain t already Cloudflare t add chuu lauv verify lauv.
- Your Cloudflare plan t you create DNS record number t support chuu hauv ensure lauv.

### Խնդիրներ՝ Պրոքսիայի հետ {#proxying-issues}

- Եթե չցանկանում, որ ենթադիր անունները (subdomains) պրոքսվեն, կարող ես օգտագործել `wu_cloudflare_should_proxy` filter-ը։
- Ոմանք հնարավոր է, որ որոշ ֆունկցիաներ ճիշտ չաշխատեն, երբ դրանք պրոքսվում են (օրինակ՝ WordPress-ի որոշ ადմին ֆունկցիաներ)։
- Հետևիր Cloudflare-ի Page Rules-ը օգտագործելու համար՝ ადմին էջերի համար քեշի (cache) շրջանառությանը բաց թողնելու համար։
