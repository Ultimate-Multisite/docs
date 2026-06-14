---
title: Ażżawwarja tal-pagamenti manuali
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Ażwara Pagamenti Manuali (v2)

_**NOTA IMPORTANTI: Artiklu huwa riferitu à Ultimate Multisite versjoni 2.x.**_

Il-pagamenti manuali huma mod kif tista tapprovi metodi oħra ta pagament jekk **Stripe** jew **PayPal** ma jkunu disponibbli għall-utenti tiegħek. Jiddu l-wire transfer (trasferament wire) jew bank transfer jew metafora oħra ta pagament li hija disponibbli lil utenti tiegħek lokalment.

## Come tivveglah il-Pagamenti Manuali

Il-istabbiliment tal-pagamenti manuali huwa semplicissimo. Tajjeb ir-enjabli aktiva fl-payment gateways u tgħallis istruzzjonijiet dettaljati kif jista' jgħatti l-utenti biex jgħattu il-pagament.

Firma, tieni għal **Ultimate Multisite > Settings > Payments**. Taħt **Payment Gateways**, attiva **Manual**. Taraw li tiddir ispesa box ta **Payment Instructions** (Istruzzjonijiet tal-Pagament).

Aggiungi l-informazzjoni li l-klijenti tiegħek għandhom biex jagħmlu il-pagament f'dan box. Jiddu d-detalji tal-kont bank tiegħek u l-email tiegħek biex l-klijent jista' jgħatti konfirmazzjoni tal-pagament, biex iżum xi ħaġa.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Hawn hija l-interfaccia ta setting manual gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Wara ma settal, ir-enjabli tikkliċċja fuq **Save Settings** u jkun sal-meqsad. Meta l-utenti jirregistru fil-network tiegħek, jidawhom messaggio li jgħandu biex jiffilquk il-istruzzjonijiet tiegħek biex jgfru l-komproċ.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

U jidawhom jiffilquk messaggio fuq l-pagina **Thank You** tiegħek dwar il-istruzzjonijiet tal-pagament tiegħek.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfirmazzjoni tal-pagamenti manuali

כדי לאשר תשלום ידני, עבור לתפריט **Payments** (תשלומים) בשורת הצד שמאל. שם תוכל לראות את כל התשלומים ברשת שלך ופרטי שלהם, כולל ה**סטטוס**. תשלום ידני יהיה תמיד בסטטוס **Pending** (ממתין) עד שתשנה אותו בעצמך.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

הזן את דף התשלום על ידי לחיצה על **reference code** (קוד הפניה). בדף זה יהיו לך את כל הפרטים של התשלום הממתין, כמו reference ID (מזהה הפניה), מוצרים, חותמות זמן ועוד.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

בעמודה הימנית, תוכל לשנות את הסטטוס של התשלום. שינוי ל**Completed** (הושלם) והפעלת האפשרות **Activate Membership** (הפעל חברות) יאפשרו את אתר הלקוח ואת החברות שלו תהיי פעילים.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
