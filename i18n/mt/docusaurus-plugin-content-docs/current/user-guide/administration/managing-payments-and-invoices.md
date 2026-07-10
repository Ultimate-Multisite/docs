---
title: Id-Dimamjar tal-Pagamenti u l-Fatturi
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Aħjar tal-Pagamenti u L-Fatturi {#managing-payments-and-invoices}

## Iswitti tal-Iskartament ta Pagamenti {#payment-settings}

Qabel ma tibda tirri b'pagamenti, għandek li tsetConfiga l-istabbilimenti relatati mal-pagamenti. Naviga għal **Ultimate Multisite → Settings** u għippja fuq l-tab **Payment**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Hawn huwa l-vista kollha tal-paġna tal-istabbilimenti ta'pagamenti:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Opzjonijiet Generali ta'Pagament {#general-payment-options}

F'iżgogni generali tista' tgħallib:

- **Currency** — Il-currency (valuta) li tistabbil b'default għall-transazzjonijiet
- **Currency Position** — Għalfej l-simbol tal-currency juri (qabel/wqt il-ammont)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite tiffaqa b'molti payment gateways. Tista' tagħmel aktiva u tgħallib għal kull unit mill-tab tal-Payment settings.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Il-gateways li huma disponibbli inklużuna:

- **Stripe** — Pagamenti b'kart tal-kredit permezz ta' Stripe
- **PayPal** — Pagamenti PayPal
- **Manual** — għall-processing ta'pagamenti offline jew kustomi

Kulle gateway għandu sezzjoni konfigurazzjonali proprja li tiddir fejn tiġi l-API keys u oħra impostazioni.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Tista' tagħmel aktiva l-**Sandbox Mode** biex ti testi l-integrazzjoni tal-pagamenti tiegħek qabel ma tibda l-live. Meta sandbox mode huwa aktiva, la tiddirxxixxx xogħli reelli.

## Viewing Payments (Tista' tgħallib Pagamenti) {#viewing-payments}

Naviga għall-paġna **Payments** taħt Ultimate Multisite biex tara kull transazzjonijiet f'netwerk tiegħek.

![Payments list](/img/admin/payments-list.png)

Tista' tfiltri l-pagamenti b'status (completed, pending, failed, refunded) u tgħalli għall-transazzjonijiet speċifi.

קליקו על תשלום כדי לראות את הפרטים המלאים שלו כולל פריטי ההזמנה, החברות הקשורות, מידע על הלקוח ונתוני שער התשלום (payment gateway).

## חשבוניות (Invoices) {#invoices}

Ultimate Multisite יכול ליצור אוטומטית חשבוניות עבור תשלומים. תוכל להתאים את תבנית החשבונית ואת פורמט המספור מהגדרות התשלום (Payment settings).

אפשרויות להתאמה של תבנית החשבונית כוללות:

- **שם וכתובת החברה** המוצגים על החשבוניות
- **פורמט ומספר סדרה** של מספור החשבוניות
- **לוגו** המוצג בראש החשבונית
- **טקסט תחתון מותאם אישית (Custom footer text)** למונחים, הערות או מידע משפטי

כדי להתאים את תבנית החשבונית, עבור אל **Ultimate Multisite → Settings → Payment** וחפש את ההגדרות הקשורות לחשבוניות.
