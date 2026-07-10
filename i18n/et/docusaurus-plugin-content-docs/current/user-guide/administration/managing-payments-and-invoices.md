---
title: Makside ja faktuuride haldamine
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Makside maksude ja faktuuride haldamine {#managing-payments-and-invoices}

## Makse seadistused {#payment-settings}

Enne alustate makside vastaanGimiseks peab teada seadistuste konfiguratsioonidest. Minimeerige **Ultimate Multisite → Seaded** ja klõpsake **Makse** tabile.

![Payment settings tab](/img/admin/settings-payments-top.png)

Siin on täielik vaade makse seadistuste lehel:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Üldised maksukohad {#general-payment-options}

Üldise seadistustes saate konfigurida:

- **Valuta** — Poolasteks kasutatav poolaku valuta
- **Valuta asukoht** — Kui valuutoonik ilmub (summa enne/ pärast)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Makseportaalid {#payment-gateways}

Ultimate Multisite toetab mitmeid makseportaalideid. Saate aktiveerida ja konfigurida igaühtest sellest seadistuste tabist.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Käesolevaid portaalideid on:

- **Stripe** — Kreditikartomaks makse Stripe abil
- **PayPal** — PayPal makse
- **Manuaalne** — Offliline või eriti makside töötlemiseks

Iga portaalil on oma konfiguratsiooniseksjon, kus anda API-kaudid ja teised seadistused.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandboxi režiim {#sandbox-mode}

Saate aktiveerida **Sandboxi režiimi** testi makseintegreerimise enne elamisel. Kui sandboxi režiim on aktiivne, ei tehtakse tõelisi lahkumisi.

## Makside vaatamise {#viewing-payments}

Minimeerige Ultimate Multisite all olevat **Maksid** lehte, et näha kõik transaktsioonid kogu oma võrku üle.

![Payments list](/img/admin/payments-list.png)

Saate filtreerida makseid staatuse järgi (läbinähtud, ootamisel, ebaõnnestunud, tagastatud) ja otsida konkreetseid transaktsioone.

Klikkage maksuluse peale, et näha selle täieliku detailid, sealhulgas linjaid, seotud li membershipi, kliendi teavet ja maksuportaalide andmeid.

## Faktuurid {#invoices}

Ultimate Multisite suutab automaatselt faktuurid genereerida maksude kohta. Saate oma faktuuritest ja numbrilendimise vormist kasutustäitida Makse seadistustes.

Faktuuriti tekitamise võimalused hõlmavad:

- **Ettevõtte nimi ja aadress** faktuuril nähtavaks
- **Faktuurinumbri** formaat ja järjekord
- **Logo**, mis faktuuril pealkirjaga on
- **Kustom footer tekst** eildistamiseks, märkustega või õiguslikule teaveteks

Faktuuritest kasutuse jaoks saate minna **Ultimate Multisite → Settings → Payment** ja otsida faktuuriga seotud seadistusi.
