---
title: Käsitsi maksete seadistamine
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Käsitsi maksete seadistamine (v2)

_**TÄHTIS MÄRKUS: see artikkel viitab Ultimate Multisite versioonile 2.x.**_

Käsitsi maksed on viis pakkuda teisi makseviise juhul, kui **Stripe** või **PayPal** ei ole teie kasutajatele saadaval. See võib olla pangaülekanne või mõni muu makseviis, mis on teie kasutajatele kohapeal saadaval.

## Kuidas lubada käsitsi makseid

Käsitsi makse seadistamine on väga lihtne. Peate selle lihtsalt makseväravate all lubama ja lisama üksikasjalikud juhised selle kohta, kuidas kasutaja peaks makse saatma.

Esmalt minge jaotisse **Ultimate Multisite > Seaded > Maksed**. Lülitage jaotise **Makseväravad** all **Käsitsi** sisse. Näete, et teile kuvatakse kast **Maksejuhised**.

Lisage sellesse kasti teave, mida teie klient makse tegemiseks vajab. See võib olla näiteks teie pangakonto andmed ja teie e-posti aadress, et klient saaks teile maksekinnituse saata.

![Käsitsi maksevärava lüliti koos maksejuhiste tekstialaga](/img/config/manual-gateway-expanded.png)

Siin on käsitsi maksevärava seadete liides:

![Käsitsi maksevärava seaded](/img/config/manual-gateway-settings.png)

Pärast seadistamist klõpsake lihtsalt **Salvesta seaded** ja ongi valmis. Kui kasutajad teie võrgustikku registreeruvad, näevad nad sõnumit, mis ütleb, et nad saavad teilt juhised ostu lõpuleviimiseks.

![Registreerimise kinnitussõnum, mis ütleb kasutajale, et ta saab maksejuhised](/img/frontend/registration-manual-notice.png)

Samuti saavad nad teie **Aitäh** lehel sõnumi koos teie maksejuhistega.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Käsitsi maksete kinnitamine

Käsitsi makse kinnitamiseks minge vasakul ribal menüüsse **Maksed**. Seal näete kõiki oma võrgustiku makseid ja nende üksikasju, sealhulgas nende **olekut**. Käsitsi maksel on alati olek **Ootel**, kuni te seda käsitsi muudate.

![Maksete loend, kus on näha ootel käsitsi makse](/img/admin/payments-list.png)

Avage makse leht, klõpsates **viitekoodil**. Sellel lehel on kõik ootel makse üksikasjad, näiteks viite ID, tooted, ajatemplid ja muu.

![Makse üksikasjade leht, kus on näha viitekood, tooted ja kogusummad](/img/admin/payment-edit.png)

Parempoolses veerus saate muuta makse olekut. Selle muutmine olekuks **Lõpetatud** ja valiku **Aktiveeri liikmesus** sisselülitamine lubab teie kliendi saidi ning tema liikmesus muutub aktiivseks.

![Makse muutmise leht, kus olekuks on määratud Lõpetatud ja lüliti Aktiveeri liikmesus on sisse lülitatud](/img/admin/payment-activate-membership.png)
