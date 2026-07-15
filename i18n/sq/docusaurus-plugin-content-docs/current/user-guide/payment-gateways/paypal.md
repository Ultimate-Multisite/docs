---
title: Konfigurimi i PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Konfigurimi i Gateway-të PayPal (v2)

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Mund të aktivizoni deri në katër metoda pagese në faqen tuaj e cilësimeve të pagesave: Stripe, Stripe Checkout, PayPal dhe Manual. Në këtë artikull, do të shihni se si të integroni me **PayPal**.

Ashtu si Stripe, PayPal përdoret gjerësisht për pagesa online, veçanërisht në faqe interneti WordPress. Ky artikull do t'ju udhëheq se si të përdorni PayPal si metodë pagese e disponueshme në rrjetin tuaj.

Shënim: Keni nevojë të keni një **konton Biznes PayPal** për të marrë kredencialet API që janë të nevojshme për këtë integrim.

## Aktivizimi i PayPal-it në rrjetin tuaj {#enabling-paypal-on-your-network}

Për të aktivizuar PayPal si metodë pagese e disponueshme në rrjetin tuaj, shkoni te **Ultimate Multisite > Settings > Payments** dhe klikoni kutinë pranë PayPal.

![Aktivizimi i PayPal-it në gateway-të e pagesave aktive](/img/config/settings-payment-gateways.png)

## Përdorimi i wizard-it të udhëhequr {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 shton një wizard (udhëzues) të udhëhequr për konfigurimin e PayPal-it në cilësimet e gateway-të së pagesave. Pasi ta aktivizoni PayPal-in, përdorni wizard-in te **Ultimate Multisite > Settings > Payments** për të zgjedhur se si dëshironi të lidhni gateway-n dhe për të konfirmuar cilat kredenciale janë ende të nevojshme para se të ruani.

Wizard-i mbështet dy rrugë konfigurimi:

* **Hyrja manual credential entry**: Përdorni këtë rrugë kur tashmë keni kredencialet PayPal API, kur opsioni OAuth nuk është i disponues për llogarinë tuaj, ose kur preferoni të kopjoni kredencialet nga vetë PayPal. Vendosni Username API, Password API dhe Signature API në fushat e PayPal, pastaj ruani cilësimet e pagesave.
* **OAuth connection gate**: Përdorni këtë rrugë vetëm kur opsioni OAuth është i disponues dhe i aktivizuar për instalimin tuaj. Wizard-i tregon rrjedhjen OAuth pas një feature flag, kështu që rrjetet pa flagun vazhdojnë të përdorin fushat e hyrjes manuale të kredencialit.

Nëse nuk e shihni opsionin OAuth në wizard, plotësoni procesin e hyrjes manuale të kredencialit më poshtë. Gateway-ja punon me të njëjtat kredencialet PayPal Business API siç ishin në versionet e mëparshme Ultimate Multisite 2.x.

## Marrja e kredencialitëve PayPal API {#getting-the-paypal-api-credentials}

Pasi PayPal të aktivizohet si gateway i pagesave, do të duhet të plotësoni fushat për **Username** API të PayPal, **Password** API të PayPal dhe **Signature** API të PayPal.

Kjo mund ta merrni duke hyrë në llogarinë tuaj [Live](https://www.paypal.com/home) ose [Sandbox](https://www.sandbox.paypal.com/home).

(Kujtoni që mund të përdorni **mode sandbox** për të testuar pagesat dhe për të parë nëse gateway-ja është e konfiguruar siç duhet. Thjesht aktivizoni seksionin që korrespondon.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Për kërkimin e Signature API ose kredencialitëve të sertifikatit për llogarinë tuaj PayPal:

  1. Shkoni te [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) tuaja.

  2. Në seksionin **API access**, klikoni **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Në seksionin **NVP/SOAP API integration (Classic)**, klikoni në **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Nëse keni gjeneruar tashmë një API Signature ose Sertifikat, do të keni redirektuar në një faqe ku mund të gjeni kredencialet tuaja.

     * _**Shënim:** Nëse ju kërkohet të verifikoni llogarinë tuaj PayPal, atëherë ndiqni udhëzimet që shfaqen në ekran._

  4. Zgjidhni **një** nga opsionet e mëposhtme dhe pastaj klikoni në **Agree and Submit**.

     * **Request API Signature** – Zgjidhni për autentikim me API Signature.

     * **Request API Certificate** – Zgjidhni për autentikim me API Certificate.

  5. PayPal gjeneron kredencialet tuaja të API si më poshtë:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** përfshijnë një Username API, Password API dhe Signature, që nuk vjetsohet. Këto vlera mbeten të fshehta për siguri shtesë. Klikoni në **Show/Hide** për t'i aktivizuar ose i deaktivizuar. Kur keni përfunduar, klikoni në **Done**.

     * **API Certificate credentials** përfshijnë një Username API, Password API dhe Sertifikat, që vjetsohet automatikisht pas tre vjetësh. Klikoni në **Download Certificate** për të ruajtur API Certificate-in në desktop-in tuaj.

Kështu është kjo, integrimi juaj i pagesave PayPal është përfunduar!

Nëse keni ndonjë pyetje rreth cilësimeve PayPal, mund të referoheni në [Help Center](https://www.paypal.com/br/smarthelp/home) të PayPal-it.
