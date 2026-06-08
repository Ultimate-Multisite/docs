---
title: Ödənişlərin və Fakturaların İdarə Edilməsi
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ödənişləri və Fakturaları İdarə Etmək

## Ödəniş Ayarları

Ödəniş qəbul etməyə başlamazdan əvvəl, ödənişlərlə bağlı ayarları qurmalısınız. **Ultimate Multisite → Settings** səhifəsinə keçin və **Payment** (Ödəniş) tabına klikləyin.

![Payment settings tab](/img/admin/settings-payments-top.png)

Bu, ödəniş ayarları səhifəsinin tam görünüşüdür:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Ümumi Ödəniş Seçimləri

Ümumi ayarlar hissəsində aşağıdakıları qurmaq mümkündür:

- **Currency** (Valyuta) — Əməliyyatlar üçün istifadə edilən standart valyuta
- **Currency Position** (Valyuta Yerləşməsi) — Valyuta simvolunun harada görünəcəyi (mövdu/miktarın önündə/arxasında)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Ödəniş Şəbəkələri (Payment Gateways)

Ultimate Multisite bir neçə ödəniş şəbəkəsini dəstəkləyir. Hər birini Ödəniş ayarları tabından aktiv edə və qurula bilərsiniz.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mövcud şəbəkələr bunlardır:

- **Stripe** — Stripe vasitəsilə kredit kartı ödənişləri
- **PayPal** — PayPal ödənişləri
- **Manual** (Əl ilə) — Offline və ya xüsusi ödəniş emalı üçün

Hər bir şəbəkənin öz konfiqurasiya bölməsi var ki, oraya API açarları və digər ayarları daxil edirsiniz.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Rejimi

Canlı istifadəyə keçməzdən əvvəl ödəniş inteqrasiyanızı test etmək üçün **Sandbox Mode** (Test Rejimi) aktiv edə bilərsiniz. Sandbox rejimi aktiv olduqda, heç bir real ödəniş cəbri edilməyəcək.

## Ödənişləri Görüntülmə

Bütün şəbəkənizdəki əməliyyatları görmək üçün Ultimate Multisite altındakı **Payments** (Ödənişlər) səhifəsinə keçin.

![Payments list](/img/admin/payments-list.png)

Ödənişləri statusuna (tamamlanmış, gözləyir, uğursuz, geri qaytarılmış) görə filtrləyə və müəyyən əməliyyatları axtara bilərsiniz.

Ətraflı məlumatları, o cümlədən xətt elementlərini, bağlı olan üzvlük məlumatını, müştəri məlumatlarını və ödəniş şəbəkəsi məlumatlarını görmək üçün bir ödənişə klikləyin.

## Fakturalar (Invoices)

Ultimate Multisite ödənişlər üçün avtomatik olaraq fakturalar yarada bilər. Faktura şablonunu və nömrələndirmə formatını Ödəniş ayarlarından özünüz dəyişə bilərsiniz.

Faktura fərdiləşdirmə seçimləri bunlardır:

- Fakturalarda göstəriləcək **Şirkət adı və ünvanı**
- **Faktura nömrələndirmə** formatı və ardıcıllığı
- Faktura başlıq hissəsində göstəriləcək **Loqo**
- Şərtlər, qeydlər və ya hüquqi məlumatlar üçün **Xüsusi alt hissə mətni**

Faktura şablonunu fərdiləşdirmək üçün **Ultimate Multisite → Settings → Payment** səhifəsinə gedin və faktura ilə bağlı ayarları axtarın.
