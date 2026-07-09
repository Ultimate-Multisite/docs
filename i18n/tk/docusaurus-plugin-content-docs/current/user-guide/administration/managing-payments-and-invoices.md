---
title: Ödeme we faturasyny dolandyrmak
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ödemeler we Fatura İşlerini Yönetmek {#managing-payments-and-invoices}

## Ödeme Ayarları {#payment-settings}

Ödeme almaya başlamazdan önce, ödeme ile ilgili ayarları yapılandırmalısınız. **Ultimate Multisite → Settings** menüsüne gidin ve **Payment** sekmesine tıklayın.

![Payment settings tab](/img/admin/settings-payments-top.png)

İşte ödeme ayarları sayfasının tam görünümü:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Genel Ödeme Seçenekleri {#general-payment-options}

Genel ayarlarda şunları yapılandırabilirsiniz:

- **Currency** — İşlemler için kullanılan varsayılan para birimi
- **Currency Position** — Para birimi sembolünün nerede görüneceği (miktar öncesi/sonrası)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Ödeme Ağ Geçitleri {#payment-gateways}

Ultimate Multisite bir nekäden ödeme portalyny (payment gateway) diklatyp bilýär. Her birini Ödeme sozlamalary (Payment settings) tabidan işe basyp we özüne laýyk görnüşde dürýän bilersiňiz.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mölsähiýetli portalarda şu ödemä portalary bar:

- **Stripe** — Stripe arkaly kredit kart bilen tölemek
- **PayPal** — PayPal arkaly tölemek
- **Manual** — Onlaýn däl ýa-da özüňizden görkezilen töleg işlerini amala aşyrmak üçin

Her bir portal özi sozlamalary bölümine eýe bolup, API açarlaryny we beýleki sozlamalary girip bilersiňiz.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode (Test modu) {#sandbox-mode}

Öz ödeme integrasiýany gerçe tölegden önce synaplamak üçin **Sandbox Mode**ny işe basyp bilersiňiz. Sandbox modu işleýärken, hiç hili gerçe töleg edilmez.

## Ödemeleri görkezmek {#viewing-payments}

Ultimate Multisite-de käbir ulgama ýa-da ulgam üçin ähli işlemleri görmegi üçin **Payments** (Tozatlar) sagatyna geçiň we ulgamyň siziň ulgamanyz boýundaki ähli işlemleri görä bilersiňiz.

![Payments list](/img/admin/payments-list.png)

Sizi öňe çykarylan hasaplanmalara (completed, pending, failed, refunded) görä filtrlenebilir we belli bir işlem üçin gözlegip tapyp bilersiňiz.

Hasaplamaya basyp, onuň ähli maglumatlaryny görmegi bilerisiz; bu maglumatlar içinde zatlary (line items), bagly üje (membership), müşderi maglumatlary we ödeme portalynyň (payment gateway) maglumatlary bar bolup bilýär.

## Invoices (Hasaplamalar) {#invoices}

Ultimate Multisite hasaplanmalar üçin awtomatiki hasaplamalary döredip biler. Hasaplama şablonuny we sany formatyny Ödeme (Payment) sapatlaryndan özüňiz üýtgedip bilersiňiz.

Hasaplamalara goşmaça göräçilmek mümkin bolan zatlar:

Fakturalarda görkeziljek:
* Şirket ady we manzil
* Faktura nömreri formaty we ardışyklygy
* Faktura başlygındaky logo
* Şertler, notlar ýa-da hukuk maglumatlary üçin özünen footer tekst

Faktura şablonyny özelleşdirmek üçin **Ultimate Multisite → Settings → Payment** bölümini açyp, fakturayla baglanyşyklydyr we zatlary tapyň.
