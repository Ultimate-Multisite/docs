---
title: Төлқинлар ва ҳисоб-китобларни бошқариш
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ödeme ve Fatura Yönetimi

## Ödeme Ayarları

Ödeme almaya başlamadan önce, ödeme ile ilgili ayarları yapılandırmanız gerekecek. **Ultimate Multisite → Settings** kısmına gidin ve **Payment** sekmesine tıklayın.

![Payment settings tab](/img/admin/settings-payments-top.png)

İşte ödeme ayarları sayfasının tam görünümü:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Genel Ödeme Seçenekleri

Genel ayarlarda şunları yapılandırabilirsiniz:

- **Currency (Para Birimi)** — İşlemler için kullanılan varsayılan para birimi
- **Currency Position (Para Birimi Konumu)** — Para biriminin nerede görüneceği (miktar öncesi/sonrası)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Ödeme Ağ Geçitleri

Ultimate Multisite birdençe ödeme ağ geçitlerini (payment gateways) destekler. Her birini Ödeme ayarları sekmesinden açabilir ve yapılandırabilirsiniz.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mevcut olan ağ geçitleri şunlardır:

- **Stripe** — Stripe üzerinden kredi kartı ödemeleri
- **PayPal** — PayPal ödemeleri
- **Manual** — Çevrimdışı veya özel ödeme işlemleri için

Her ağ geçidinin kendi yapılandırma bölümü vardır; buraya API anahtarlarını ve diğer ayarları girersiniz.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Modu (Sandbox Mode)

Canlıya geçmeden önce ödeme entegrasyonunuzu test etmek için **Sandbox Modunu** etkinleştirebilirsiniz. Sandbox modu aktifken gerçek ücret alınmaz.

## Ödemeleri Görüntüleme

Ultimate Multisite-ta networkdagi barcha operatsiyalar haqida ko'rish uchun **Payments** sahifasiga o'ting.

![Payments list](/img/admin/payments-list.png)

Siz to'lovlarni holat bo'yicha (tugallangan, kutishda, muvaffaqiyatsiz, qaytarilgan) filtrlashingiz va aniq operatsiyalarni qidirishingiz mumkin.

To'lov ustiga bosib, uning barcha tafsilotlarini ko'rishingiz mumkin, shu jumladan mahsulotlar ro'yxati (line items), bog'liq a'zolik, mijoz ma'lumotlari va to'lov eshigining (payment gateway) ma'lumotlari.

## Fakturalar (Invoices)

Ultimate Multisite-da operatsiyalar uchun fakturalarni avtomatik yaratish mumkin. Siz faktura shablonini va raqam berish formatini To'lov sozlamalaridan o'zgartirishingiz mumkin.

Faktura sozlash variantlari quyidagilardan iborat:

فواتيردا кўрсатиладиган:
* **Компания номи ва манзил**
* **Фойдаланувчилар (Invoice) рақамининг формати ва кетма-кетлиги**
* **Фойдаланувчилар (Invoice) саҳифасининг устидаги логотипи**
* **Шартномалар, эслатмалар ёки ҳуқуқий маълумотлар учун махсус пайти (footer) матни**

Фойдаланувчилар (Invoice) шаклини ўзгартириш учун **Ultimate Multisite → Settings → Payment** бўлимга киринг ва фойдаланувчилар билан боғлиқ солиштирилган параметрларни қидириб кўринг.
