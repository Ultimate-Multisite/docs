---
title: Konfigurimi i pagesave manuale
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Konfigurimi i Pagime Manuale (v2)

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Pagimet manual janë një mënyrë për t'u ofruar metoda të pagimeshve të tjera nëse **Stripe** ose **PayPal** nuk janë të disponueshme për përdoruesit tuaj. Mund të jetë transferi i parave (wire) ose bankar, ose ndonjë metodë tjetër që është e disponueshme për përdoruesit tuaj lokal.

## Si të aktivizoni Pagimet Manuale

Konfigurimi i pagimes manuale është shumë i thjeshtë. Ju duhet thjesht ta keni aktivizuar nën Payment Gateways dhe të vendosni udhëzime të detajuara se si përdoruesi duhet të dërgojë pagesën.

Para se ndonjë gjë tjetër, shkoni te **Ultimate Multisite > Settings > Payments**. Poshtë **Payment Gateways**, aktivizoni (toggle on) opsionin **Manual**. Do të shihni se do të shfaqet një kuti **Payment Instructions** për ju.

Shtoni në këtë kuti informacionin që klienti ju nevojitet për të bërë pagesën. Mund të jetë detajet e llogarisë bankare dhe adresa juaj e emailit, që përmes së cilës klienti mund t'ju dërgojë konfirmimin e pagesës, për shembull.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Këtu është interfeça e konfigurimit të paguesit manual:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Pas konfiguruar, thjesht klikoni te **Save Settings** dhe keni përfunduar. Kur përdoruesit regjistrohen në rrjetin tuaj, ata do të shohin një mesazh që t'u informon se do të marrin udhëzimet tuaja për të përfunduar blerjen.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Dhe ata do të marrin gjithashtu një mesazh në faqen tuaj **Thank You** me udhëzimet tuaja për pagesën.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfirmimi i pagimeve manuale

Për të konfirmuar një pagesë manuale, shkoni në menynë **Payments** (Pagesa) në anën e majtë. Atje mund të shihni të gjitha pagesat në rrjetin tuaj dhe detajet e tyre, përfshirë **statusin**. Një pagesë manuale do të ketë gjithmonë statusin **Pending** (Nën proces).

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Hyjni faqen e pagesës duke klikuar në **reference code** (kodi referencë). Në këtë faqe keni të gjitha detajet e pagesës së nënvizur, si ID i referencës, produktet, kohdat dhe më shumë.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Nën kolonën e djathtë, mund të ndryshoni statusin e pagesës. Ndryshimi në **Completed** (Përfunduar) dhe ndryshimi i opsionit **Activate Membership** (Aktivo mëmimin) do të aktivizojnë faqen e klientit dhe mbeverja e tyre do të jetë aktive.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
