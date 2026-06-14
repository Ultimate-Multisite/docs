---
title: Cloudflare-ийн нийлүүлэлт
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare-ийн нийлүүлэлт

## Ерөнхий ойлголт
Cloudflare бол вебсайтнуудыг хамгаалж, хурдасгах гол контент хүргэх сүлжээ (CDN) болон аюулгүй байдлын үйлчилгээ юм. Энэхүү нийлүүлэлт нь Ultimate Multisite болон Cloudflare хоорондын домен удирдлагыг автоматжуулдаг бөгөөд ялангуяа дэддомын олон сайт (subdomain multisite) суулгалтад тохиромжтой.

## Онцлог
- Cloudflare-д автоматаар дэддомыг үүсгэх
- Прокси хийх дэддомын дэмжлэг
- DNS бүртгэлийн удирдлага
- Ultimate Multisite администратор дээр илүү сайтар харагдах DNS бүртгэлийн мэдээлэл

## Шаардлага
Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор тодорхойлох шаардлагатай:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Тохируулах заавар

### 1. Cloudflare API Key-г авах

1. Таны Cloudflare dashboard руу нэвтэрнэ үү.
2. "My Profile"-д (хамгийн дээд баруун талд байгаа email дээр дарна) орно.
3. Мөрөөс "API Tokens"-ыг сонгоно.
4. Дараах эрхийг бүхий шинэ API token үүсгэнэ:
   - Zone.Zone: Унших (Read)
   - Zone.DNS: Редакторуулж болно (Edit)
5. Таны API token-ыг хуулна уу.

### 2. Өөрийн Zone ID-г авах

1. Cloudflare dashboard дээр, ашиглах доменээ сонгоно.
2. Zone ID нь "Overview" таб дээр, "API"-ийн доторх баруун талын чиглэлд харагдана.
3. Zone ID-г хуулна уу.

### 3. wp-config.php-д тогтмол утгуудыг нэмэх

Дараах тогтмол утгуудыг `wp-config.php` файл дотор нэмнэ үү:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Нyiлүүлэлтийг идэвхжүүлэх

1. Таны WordPress admin-д, Ultimate Multisite > Settings руу орно.
2. "Domain Mapping" таб руу шилжинэ.
3. "Host Integrations"-д доош урагшираад явна.
4. Cloudflare нийлүүлэлтийг идэвхжүүлэх.
5. "Save Changes"-д дарна.

## Хэрхэн ажилладаг вэ

### Дэддомын удирдлага

Дэддомын олон сайт суулгалтад шинэ сайт үүсэх үед:

1. Интеграци нь домен дээрх поддоменд (subdomain) хувьд CNAME реккорды нэмэх хүсэлтийг Cloudflare API-д илгээдэг.
2. Поддоменд анхны тохиргооноор Cloudflare-ээр дамжуулан прокси хийгддэг (фильтрүүдээр өөрчилж болно).
3. Сайт устгахад интеграци нь тухайн поддоменыг Cloudflare-ээс хасна.

### DNS Реккордын Үзэгдэл

Интеграци нь Ultimate Multisite администратор дээрх DNS реккордын үзүүлэхийг дараах байдлаар сайжруулдаг:

1. Cloudflare-ээс шууд DNS реккорды авч ирнэ.
2. Рекорд прокси хийгдэж байгаа эсэхийг харуулна.
3. DNS реккордтой холбоотой нэмэлт мэдээллийг харуулдаг.

## Cloudflare Custom Hostnames (Cloudflare-ийн Тохируулсан Нэр)

**Cloudflare Custom Hostnames** (өмнө нь "Cloudflare for SaaS" гэж дууддаг байв) бол таны үйлчлүүлэгчдэд SSL-тэй хамт өөрийн домен дээр ашиглах боломжийг олгодог Cloudflare-ийн функц юм. Энэ нь Cloudflare-ийг ашигладаг домен-хамааралтай (domain-mapped) multisite байрлалуудад хамгийн тохиромжтой арга бөгөөд учир нь Cloudflare тус бүрийн тохируулсан домен дээрх SSL сертификатын олголт, шинэчлэлийг автоматаар удирдан чиглүүлдэг.

### Стандарт Cloudflare интеграциас ялгаа

| | Стандарт интеграци | Cloudflare Custom Hostnames |
|---|---|---|
| **Зорилго** | Поддоменүүд дээр DNS реккорды автоматаар үүсгэх | Cloudflare-ийн удирддаг SSL-тэй тохируулсан (mapped) домен ашиглах боломжийг олгох |
| **Хамгийн сайн хэрэглээ** | Поддомен дээрх multisite | Домен-хамааралтай (domain-mapped) multisite |
| **SSL** | Тусдаа зохион байгуулалт хийгддэг | Cloudflare-ээр автоматаар удирдан чиглэгддэг |

### Cloudflare Custom Hostnames-ийг тохируулах

1. Танайхны Cloudflare dashboard-д орсон таны үндсэн домен (main domain)-ын zone-ийг нээてください.
2. **SSL/TLS > Custom Hostnames** руу осоорой.
3. Серверinizin IP эсвэл hostname руу чиглэсэн fallback origin-ийг нэмнэ.
4. Ultimate Multisite-д тохирсон бүх үйлчлүүлэгчийн домен (customer domain) тус бүрийн хувьд Cloudflare-д Custom Hostname entry нэмнэ. Энэ алхмыг Cloudflare API ашиглан автоматаар хийж болно.
5. Үйлчлүүлэгчийн DNS таны сүлжээ рүү чиглэсэн үед Cloudflare нь тухайн custom hostname-д TLS сертификатуудыг автоматаар гаргаж, шинэчилдэг.

Бүх API-ийн дурсгалыг [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) -д үзнэ үү.

:::note Терминологийн шинэчлэл
Ultimate Multisite v2.6.1-ээс хойш энэ функц нь бүх плагины тохиргоо болон тэмдэглэгээнд **Cloudflare Custom Hostnames** гэж нэрлэдэг. Өмнөх хувилбаруудад үндсэн Cloudflare бүтээгдэхүүний нэр болох "Cloudflare for SaaS" гэж дурдсан байв.
:::

## Чухал анхаарах зүйлс

Cloudflare-ийн сүүлийн шинэчлэлүүдийн дагуу, одоо бүх үйлчлүүлэгчид wildcard proxying ашиглах боломжтой болсон. Энэ нь subdomain multisite-ийн хувьд стандарт Cloudflare DNS integration-ийг өмнө байсан шиг их анхаарах шаардлагагүй гэсэн үг, учир нь та Cloudflare-д wildcard DNS record-ыг хялбархан тохируулах боломжтой.

## Асуудал шийдэх (Troubleshooting)

### API холболтын асуудал
- Таны API token зөв байгаа эсвэл шаардлагатай эрхүүдтэй байгааг шалгана.
- Таны Zone ID зөв байгааг шалгана.
- Таны Cloudflare аккаунтад шаардлагатай эрхүүд байгаа эсэхийг баталгаажуулаарай.

### Subdomain нэмэгдээгүй
- Ultimate Multisite-ийн logs-оос ямар нэгэн алдааны мессеж байгаа эсэхийг шалгана.
- Subdomain Cloudflare-д аль хэдийн нэмэгдсэн эсэхийг баталгаажуулна уу.
- Таны Cloudflare plan таны үүсгэж буй DNS record-ын тоог дэмждэг эсэхийг шалгана.

### Проксийн асуудлууд
- Хэрэв та дорны доменүүдийг прокси хийхийг хүсэхгүй бол `wu_cloudflare_should_proxy` фильтрээ ашиглаж болно.
- Зарим функцууд прокси хийгдэх үед зөв ажиллахгүй байж болно (жишээлбэл, зарим WordPress администрацийн функцууд).
- Административ хуудаснуудыг кешээс давсан байхаар Cloudflare-ийн Page Rules-ыг ашиглахыг бодож үзээрэй.
