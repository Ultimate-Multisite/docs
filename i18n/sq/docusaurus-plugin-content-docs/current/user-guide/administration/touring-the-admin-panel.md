---
title: Përdorimi i Paneli Administrativ
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Përmbledhja e Panelit Admin {#touring-the-admin-panel}

Ultimate Multisite synon të jetë sa më i thjeshtë dhe i kuptueshëm si mund të jetë, por me një mjet kaq fuqishëm ai mund të ndihmojë në këtë. Le të shkojmë përmes faqeve admin për t'ju ndihmuar të qenit gati.

## Dashboard {#dashboard}

**Dashboard** i Ultimate Multisite tregon raporte bazë dhe analitika duke përfshirë të ardhurat, aktivitetet e saj në site, rritjen e anëtarëve, numrat e vizitorëve dhe të dhënat gjeografike.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Këtu është një pamje e plotë e dashboard-it:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Dhe pjesa e poshtme e dashboard-it:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Këtu është gjithashtu një pamje e plotë e dashboard-it të rrjetit:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Formularët e Checkout-ut (Checkout Forms) {#checkout-forms}

**Formularët e Checkout-ut** ju japin fleksibilitetin për të krijuar faqe regjistrimi tuaja personalizuara. Ju mund të personalizoni fushat, të vendosni klasa dhe skripte të personalizuara dhe të kufizoni aksesin bazuar në vendndodhjen e klientit ose vendin gjeografik.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Produkte (Products) {#products}

Seksioni **Produkte** është ku krijoni plane, paketa dhe shërbime të ndryshme për rrjetin tuaj. Përcaktoni çmimet, frekuencat e faturimit dhe kufizimet/quota-t në nivelin e produktit.

![Products list](/img/admin/products-list.png)

## Anëtarët (Memberships) {#memberships}

Faqja **Anëtarësh** tregon të gjitha abonimet në rrjetin tuaj. Përgjigjuni dhe redaktoni detajet e abonimit duke përfshirë plane, produkte, shumat e faturimit dhe frekuencat, historikun e pagesave dhe kohdat (timestamps).

![Memberships list](/img/admin/memberships-list.png)

## Pagesa (Payments) {#payments}

Paguna **Payments** (Pages të Pagimeve) ju ofron një pamje të shpejtë të historikut të pagesave në të gjinian e rrjetit tuaj, me informacion detajuar mbi transaksione, duke përfshirë produkte dhe sasia specifike.

![Payments list](/img/admin/payments-list.png)

## Customers (Klientët) {#customers}

Paguna **Customers** tregon të gjithë anëtarët e regjistruar në rrjetin tuaj me informacion bazë të përdoruesit, duke përfshirë emrin, adresën e emailit, logimin më të fundit dhe një link "ndrysho te" (switch to) për hyrje në subsite-in e tyre.

![Customers list](/img/admin/customers-list.png)

## Sites (Sitet) {#sites}

Paguna **Sites** liston të gjitha subsitet në rrjetin tuaj, duke përfshirë shabllonet e saj dhe sitet që janë në pronësinë e klientit. Menaxhoni lehtë domenët e mapi, kufizimet & quota-të, pluginet dhe temat, si dhe thujnet (thumbnails) e sitëve.

![Sites list](/img/admin/sites-list.png)

## Domains (Domene) {#domains}

Paguna **Domains** është e dedikuar domenave të personalizuara që janë të mapi me subsite. Si super admin, mund t'i shtoni ose i maponi emrat e domeneve të personalizuara dhe të shihni regjistrimet DNS dhe logjet.

![Domains list](/img/admin/domains-list.png)

## Discount Codes (Kodi Uljes) {#discount-codes}

**Discount Codes** ju lejojnë të krijoni kode kuponi për t'u ofruar ulje ndaj përdoruesve tuaj finalë. Specifikoni vlerën e uljes dhe synoni përdorues ose grupe specifike.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Broadcasts (Transmetimet) {#broadcasts}

**Broadcasts** është një mjet për të shpërndarë njoftime apo dërguar mesazhe private në përdoruesit e subsitet tuaj. Synoni grupe specifike të përdoruesve bazuar në planin ose produktin ku janë të abonuar.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Settings (Konfigurimet) {#settings}

Paguna **Settings** është kjo ku konfiguroni Ultimate Multisite — opsionet e regjistrimit, pagesat, API dhe webhooks, mapi domene dhe integrime të tjera.

Lista të konfigurimeve AI connector, liston grupet e furnizuesve OAuth që mbështeten aktualisht: Anthropic Max, OpenAI ChatGPT/Codex dhe Google AI Pro. Çdo kartë e furnizuesit lejon super administratorët të lidhin llogaritjet, të freskojnë llogaritjet e ruajtura, të fshajnë llogaritjet me email dhe të përdorin fallback manual OAuth kur mjedisi i izoluar (sandboxed environment) bllokon redirekcione në shfletues. Opsionet e konfigurimit Cursor Pro janë hequr nga paneli administrator.

Llogaritjet ChatGPT/Codex mbështesin përdorimin e mjeteve të mbështetur nga connector, ku operacioni lejon mjete, kështu që workflow-të administrative që varen nga operacionet e mbështetura nga connector mund të përdorin sjelljen e mjetit Codex pasi llogaria OpenAI është lidhur.

![Settings page](/img/admin/settings-general.png)

Këtu keni një pamje të plotë të faqes së cilave të përgjithshme:

![Settings general full page](/img/admin/settings-general-full.png)

Dhe faqen e konfigurimit të email-eve:

![Settings emails full page](/img/admin/settings-emails-full.png)

Dhe faqen e konfigurimit të pagesave:

![Settings payments full page](/img/admin/settings-payments-full.png)

Dhe seksionin e poshtëm të konfigurimit të pagesave:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Dhe faqen e konfigurimit të vendeve (sites):

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events (Ngjarje) {#events}

Faqja **Events** mban një regjistrim të të gjitha ngjarjeve dhe logjeve në rrjetin tuaj. Ajo ndjek aktivitete si ndryshimet e planit, regjistrimet dhe lëvizjet e tjera — shumë për monitorimin e multisite-t tuaj.

![Events list](/img/admin/events-list.png)

## Webhooks {#webhooks}

**Webhooks** ju lejojnë të dërgoni të dhëna në një aplikacion tjetër. I dobishëm për dërgimin e të dhënave nga Ultimate Multisite në platforma si Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
