---
title: Fluksi i Regjistrimit
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Fluksi i Regjistrimi (v2) {#the-registration-flow-v2}

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Përdoruesit mund të regjistrohen në mënyra të ndryshme në rrjetin tuaj. Mund të përdorin formularin tuaj të regjistrimit ose një link të ndarshëm për një plan të përzgjedhur mprehtë. Këtu do t'ju tregojmë si klientët tuaj mund të regjistrohen në rrjetin tuaj duke përdorur rrugët e disponueshme dhe çfarë ndodh pas që ata regjistrohen në rrjetin tuaj.

## Përdorimi i Formularit të Regjistrimit: {#using-the-registration-form}

Ky është procesi standard i regjistrimit. Ju krijoni një faqe regjistrimi me një **checkout form** dhe kjo do të jetë vendi ku klientët tuaj do të shkojnë për të regjistruar në rrjetin tuaj dhe për të abonuar në një plan. Mund të keni disa faqe regjistrimi, secila me një formular regjistrimi të ndryshëm nëse dëshironi.

Faqja e paracaktuar për regjistrim është [_**yourdomain.com/register**_](http://yourdomain.com/register), por mund ta ndryshoni këtë çdo kohë në **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Pas kur përdoruesi arrin te faqja juaj e regjistrimit (zakonisht duke klikuar në një butonin **Sign in** ose **Buy now**), ata do të shohin formularin tuaj të regjistrimit aty.

![Formulari i regjistrimit i shfaqur në faqen e regjistrimit](/img/frontend/registration-form.png)

Këtu është një shembull i formularit të checkout siç duket në frontend:

![Formulari i checkout për regjistrim frontend](/img/config/checkout-frontend-registration.png)

Të gjitha që duhet të bëjnë është të plotësoni të gjitha fushat e detyrueshme - email, emri i përdoruesit, fjalëkalimi, etj... - dhe të paguani për planin ose të konfirmoni adresën tuaj emailje nëse po regjistroheni për një plan falas ose një plan të pagesës me periudhë provimi pa informacionin e pagesës.

Në faqen "Faleminderit", ata do të shohin një mesazh që t'i thotë nëse duhet të konfirmojnë adresën tuaj emailje apo nëse faqa juaj është tashmë aktiv dhe mund ta fillojnë të përdorin atë.

![Paguese falënderimi pas regjistrimit](/img/frontend/registration-thank-you.png)

Nëse kërkohet konfirmimi i adresës së emailit, ata do të duhet të shkojnë në kuti të posta të tyre dhe të klikojnë te linku i verifikimit. Faqet e tyre nuk do të aktivizohen nëse adresa e emailit nuk vërtitet.

Nëse janë regjistruar me një plan të paguar ose konfirmimi i emailit nuk është i detyrueshëm në rrjetin tuaj, faqa e tyre do të aktivizohet menjëherë pas pagesës dhe do t'i tregohet një link për të hyrë në dashboard-in e tyre.

![Faqja e vendosur me link për të hyrë në dashboard](/img/frontend/site-activated.png)

## Përdorimi i një Linku të Ndarshëm: {#using-a-shareable-link}

Procesi i regjistrimit duke përdorur një link të ndarshëm është themelor si forma e regjistrimit, vetëm diferenca është se duke përdorur një link të ndarshëm, klientët tuaj mund të kenë një produkt ose një model faqeje të vendosur paraprakisht në formën e pagesës (referoni seksionin Pre-selecting products and templates via URL parameters) ose ndoshta një kod kupon shtuar (referoni seksionin Using URL Parameters).

Procesi i regjistrimit do të jetë i njëjtë: ata do duhet të plotësojnë emrin, emrin e përdoruesit, adresën e emailit, emrin dhe titullin e faqes së tyre, etj... por plani ose modeli i faqeje do të jetë tashmë i vendosur paraprakisht për ta.

### Regjistrimi me Pagesa Manuale: {#registering-using-manual-payments}

Nëse nuk dëshironi të përdorni PayPal, Stripe ose ndonjë portal pagesash tjetër të ofruar nga Ultimate Multisite ose integrimet e tij shtesë, mund të përdorni pagesa manuale për klientët tuaj. Kështu, mund të gjeneroni një fakturë për ta që të paguajnë në procesuesin tuaj të preferuar të pagesave pasi të regjistrohen në rrjetin tuaj.

Procesi i regjistrimit do të jetë pikërisht i njëjtë si më lart, por në faqen e regjistrimit klientët tuaj do të shohin një mesazh që tregon se do të marrin një email me udhisa më të detajuara për të përfunduar pagesën.

![Mesazh i pagesës manuale të pagesës gjatë regjistrimit](/img/frontend/registration-manual-notice.png)

Dhe pas përfundimit të regjistrimit, ata do të shohin udhëzimet e pagesës që keni vendosur (dhe do t'i marrin edhe në email).

![Udhëzimet e pagesës të shfaqen pas regjistrimit](/img/frontend/registration-payment-instructions.png)

Udhëzimet e pagesës mund të ndryshohen në **Ultimate Multisite > Settings > Payments** duke aktivizuar opsionin **Manual**:

![Tenderi i pagesës manual me fushën e udhëzimeve të pagesës](/img/config/manual-gateway-settings.png)

Pas kur klientët përfundojnë pagesën manuale dhe ju dërmojnë konfirmimin, ju duhet të **konfirmojini manualisht pagesën** për të aktivizuar anëtarin e klientit dhe faquinë (website).

Për të bërë këtë, shkoni te **Ultimate Multisite > Payments** dhe gjeni pagesën e klientit. Ajo do të vazhdojë të tregojë statusin **Pending** (Nën proces).

![Lista e pagesave me pagesë manuale në pritje](/img/admin/payments-list.png)

Klikoni mbi numrin e pagesës dhe do të jeni në gjendje të ndryshoni statusin në **Completed** (Përfunduar).

![Faza e detajeve të pagesës](/img/admin/payment-edit.png)

![Ndryshimi i statusit të pagesës në Completed](/img/admin/payment-status-completed.png)

Pas ndryshimit të statusit në **Completed**, do të shihni mesazhin **Activate membership** (Aktivizo anëtarin). Aktivizoni këtë opsion duke e vendosur **on** (në), për të aktivizuar anëtarin dhe faquinë që lidhen me këtë klient. Pastaj, klikoni për të **Save Payment** (Ruaj pagesën).

![Tenderi i aktivizimit të anëtarit dhe butoni Save Payment](/img/admin/payment-activate-membership.png)

Klienti juaj do të jetë në gjendje të aksesojë dashboard-in dhe të gjitha funksionet që kanë abonuar.
