---
title: Manuaal maksude seadistamine
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manua maksude seadistamine (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Manua maksud on viis, kuidas teil pakutada muud maksutrimiseid, kui **Stripe** või **PayPal** ei ole kiselule kasutajatele saadaval. See võib olla väärtpind või pankade üle transfer või misige muu maksutrimisevihed, mis on teie kiselule lokalalt saadaval.

## Manua maksude aktiveerimine

Manua maksude seadistamine on väga lihtne. Peidi peate seda aktiveerima maksukeskuste all ja sisendama üksikasjalik juhised selle kohta, kuidas kasutaja maksu teeb.

Enneige **Ultimate Multisite > Settings > Payments** menüüle. **Payment Gateways** all lülitage sisse **Manual**. Näete, et ilmub teie esile **Payment Instructions** lahendusaukustik.

Lisa selle lahendusaukustikku teavet, mida kiselule tuleb maksu tegemiseks. See võib olla teie pankade konto detailid ja e-posti aadress, nii et kiselule saab teile maksukinnituse kinnituse esitada, näiteks.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Siin on manua maksude seadistamise liides:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Seadistamist pärast seda, klõpsake lihtsalt **Save Settings** ja see on valmis. Kui kasutajad registreeruvad teie võrku, näevad nad sõnumi, mis ütleb, et nad saavad teie juhised ostu lõpetamiseks.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ja nad saavad ka saada sõnumi oma **Thank You** lehelile maksukinnituse juhistega.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manua maksude kinnitamine

Manua maksutuse kinnitamiseks külastage vasakust olevat **Payments** menüü. Seal näete oma võrku kõik maksud ja nende üksikasjad, sealhulgas nende **status**. Manua maksul on alati **Pending** status, kuni te seda manuaalselt muutmate.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Sisestage maksupagina klõpsates **viidilükkja** (reference code). Sellel lehel on kõik andmed teie pending makse kohta, nagu viide ID, tooted, ajakohad ja veel palju muud.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ogi paremas kolonnis saate maksude statusi muuta. Selle muutmine **Completed**iks ja **Activate Membership** valikku lülitamise abil aktiveerib teie klienta veebile ja nende liiklus aktiivseks.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
