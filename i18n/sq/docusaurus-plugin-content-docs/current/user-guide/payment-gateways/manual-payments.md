---
title: Konfigurimi i pagesave manuale
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Konfigurimi i pagesave manuale (v2)

_**SHËNIM I RËNDËSISHËM: Ky artikull i referohet Ultimate Multisite versionit 2.x.**_

Pagesat manuale janë një mënyrë që ju të ofroni metoda të tjera pagese nëse **Stripe** ose **PayPal** nuk janë të disponueshme për përdoruesit tuaj. Mund të jetë një transfertë bankare ose çdo metodë tjetër pagese e disponueshme lokalisht për përdoruesit tuaj.

## Si të aktivizoni pagesat manuale {#how-to-enable-manual-payments}

Konfigurimi i pagesës manuale është shumë i lehtë. Thjesht duhet ta aktivizoni te portat e pagesave dhe të vendosni udhëzime të detajuara se si përdoruesi duhet ta dërgojë pagesën.

Së pari, shkoni te **Ultimate Multisite > Cilësimet > Pagesat**. Poshtë **Portat e pagesave** , aktivizoni **Manuale**. Do të shihni se do të shfaqet një kuti **Udhëzimet e pagesës** për ju.

Shtoni në këtë kuti informacionin që klientit tuaj do t’i duhet për të bërë pagesën. Për shembull, mund të jenë të dhënat e llogarisë suaj bankare dhe email-i juaj, që klienti të mund t’ju dërgojë konfirmimin e pagesës.

![Aktivizuesi i portës së pagesës manuale me zonën e tekstit Udhëzimet e pagesës](/img/config/manual-gateway-expanded.png)

Ja ndërfaqja e cilësimeve të portës manuale:

![Cilësimet e portës manuale](/img/config/manual-gateway-settings.png)

Pasi ta keni konfiguruar, thjesht klikoni te **Ruaj cilësimet** dhe kaq. Kur përdoruesit regjistrohen në rrjetin tuaj, ata do të shohin një mesazh që u tregon se do të marrin udhëzimet tuaja për të përfunduar blerjen.

![Mesazh konfirmimi i regjistrimit që i tregon përdoruesit se do të marrë udhëzimet e pagesës](/img/frontend/registration-manual-notice.png)

Dhe ata gjithashtu do të marrin një mesazh në faqen tuaj **Faleminderit** me udhëzimet tuaja të pagesës.

<!-- Pamja e ekranit nuk është e disponueshme: Faqja Faleminderit që tregon udhëzimet e pagesës pas checkout -->

## Konfirmimi i pagesave manuale {#confirming-manual-payments}

Për të konfirmuar një pagesë manuale, shkoni te menuja **Pagesat** në shiritin e majtë. Aty mund të shihni të gjitha pagesat në rrjetin tuaj dhe detajet e tyre, duke përfshirë **statusin** e tyre. Një pagesë manuale do të ketë gjithmonë statusin **Në pritje** derisa ta ndryshoni manualisht.

![Lista e pagesave që tregon një pagesë manuale në pritje](/img/admin/payments-list.png)

Hyni në faqen e pagesës duke klikuar **kodin e referencës**. Në këtë faqe keni të gjitha detajet e pagesës në pritje, si ID-ja e referencës, produktet, shenjat kohore dhe më shumë.

![Faqja e detajeve të pagesës që tregon kodin e referencës, produktet dhe totalet](/img/admin/payment-edit.png)

Në kolonën e djathtë, mund të ndryshoni statusin e pagesës. Ndryshimi i tij në **E përfunduar** dhe **aktivizimi i opsionit Aktivizo anëtarësimin** do të aktivizojë faqen e klientit tuaj dhe anëtarësimi i tij do të jetë aktiv.

![Faqja e redaktimit të pagesës me Statusin të vendosur në E përfunduar dhe aktivizuesin Aktivizo anëtarësimin](/img/admin/payment-activate-membership.png)
