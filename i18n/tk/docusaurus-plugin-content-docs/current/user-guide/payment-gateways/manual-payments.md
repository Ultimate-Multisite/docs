---
title: Manual tölegleri goýmak
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manual Ödemeleri Kurmak (v2)

_**ÖNEMLİ QAYDAMA: Bu makale Ultimate Multisite versiyon 2.x-iňizi aňladýar.**_

Manual ödemeler, **Stripe** ýa-da **PayPal** ulgamy sizi wezipeleri üçin bar bolsa hem, käbir hakda pul geçirmegi teklip etmek üçin bir usuldyr. Bu, wire (telgraf) ýa-da bank transferi ýa-da sizin ulgamanyz üçin lokal ýagdaýda bar bolan başga ödeme usulyny aňladýar.

## Manual Ödemeleri Näme wepa etmek

Manual ödemeleri sozlamak örän aňsatdyr. Siz onu ödeme portal laryny (payment gateways) aşakdan wekil etmeli we ulgamda pul geçirmegi nädip göndermeli, şol barada giňişli düşündirişleri bermeli.

Ilki bilen, **Ultimate Multisite > Settings > Payments**-e gitdiň. **Payment Gateways** aşagynda **Manual** düğünü ýapyp bilersiňiz (toggle on). Siz bir **Payment Instructions** saryny görseňiz.

Bu saryna adamyň ödeme etmegi üçin zerur boljak maglumatlary goýuň. Bu, bank hasabyňyz we e-poçt adresiniz bolup biler, şonuň bilen adam sizden ödeme kanadyny göndere biljekdir, mysal üçin.

![Payment Instructions tekst saryny manual ödeme portal düğümini görkezýär](/img/config/manual-gateway-expanded.png)

Bu aşakda manual ödeme portal dyramaty (settings interface) görkezilendir:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Soňra onu sozlap, diňe **Save Settings** düwümini basyň we işi bitirip bilersiňiz. Ulgamyza ýazylanda, ulgama öwüşi tamamlamak üçin sizden ödeme kanadyny aljakdygy barada habar beren mesaj görkeziljekdir.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

We olaryň **Thank You** sabynda hem ödeme kanadyny aljakdygy barada bir habar ýazyljakdyr.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manual ödemeleri tasdiqlamak

Manuel töhlemeňizi tassyklamak üçin, sol çyzykdaky **Payments** menüsine gidiň. Orada şeýleki ulgamyňizdeki ähli töhlämeleri we olaryň **statusyny** göräp bilersiňiz. Manuel töhleme her wagt onuň statusyny siz özüňiz üýtgetdiginiz çen çen **Pending** (Beklenipdirilen) bolup galýar.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** bilen basyp töhleme səhpaçasyna giriziň. Bu səhpa sizde beklenen töhlenin ähli maglumatlary bar, mysal üçin reference ID, önüm, wagty we başga zatlar.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sağ sütüde töhlemenizin statusyny üýtgetip bilersiňiz. Onu **Completed** (Tamamlandı) bilen üýtgetmek we **Activate Membership** opsiyasyny açyp-ýap (toggle etmek) siziň müşderiniň sahypasy işjeňleşdirilip, olaryň üyeliksi aktif bolmaga mümkinçilik berer.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
