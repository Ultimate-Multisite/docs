---
title: Configurarea Plăților Manuale
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Configurarea plăților manuale (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Plățile manuale sunt o modalitate prin care poți oferi alte metode de plată în cazul în care **Stripe** sau **PayPal** nu sunt disponibile pentru utilizatorii tăi. Poate fi vorba de un transfer bancar sau orice altă metodă de plată disponibilă local pentru utilizatorii tăi.

## Cum activezi plățile manuale

Configurarea plăților manuale este foarte simplă. Trebuie doar să activezi opțiunea din secțiunea gateway-urilor de plată și să adaugi instrucțiuni detaliate despre cum ar trebui utilizatorul să efectueze plata.

Mai întâi, mergi la **Ultimate Multisite > Settings > Payments**. Sub **Payment Gateways**, activează opțiunea **Manual**. Vei observa că va apărea o casetă **Payment Instructions**.

Adaugă în această casetă informațiile de care clientul tău va avea nevoie pentru a efectua plata. Pot fi detaliile contului tău bancar și adresa ta de email, astfel încât clientul să îți poată trimite confirmarea plății, de exemplu.

![Comutator gateway plată manuală și caseta instrucțiuni de plată](/img/config/settings-payment-gateways.png)

După configurare, dă clic pe **Save Settings** și gata. Când utilizatorii se înregistrează în rețeaua ta, vor vedea un mesaj care îi informează că vor primi instrucțiunile tale pentru a finaliza achiziția.

![Mesaj plată manuală afișat în timpul înregistrării](/img/config/settings-payment-gateways.png)

De asemenea, vor primi un mesaj pe pagina ta **Thank You** cu instrucțiunile de plată.

![Pagina Thank You cu instrucțiunile de plată](/img/config/settings-payment-gateways.png)

## Confirmarea plăților manuale

Pentru a confirma o plată manuală, mergi la meniul **Payments** din bara din stânga. Acolo poți vedea toate plățile din rețeaua ta și detaliile acestora, inclusiv **statusul** lor. O plată manuală va avea întotdeauna statusul **Pending** până când îl modifici manual.

![Lista plăților cu plată manuală în așteptare](/img/admin/payments-list.png)

Intră în pagina plății dând clic pe **codul de referință**. Pe această pagină ai toate detaliile plății în așteptare, cum ar fi ID-ul de referință, produsele, marcajele temporale și altele.

![Pagina detalii plată cu cod de referință și produse](/img/admin/payments-list.png)

În coloana din dreapta, poți modifica statusul plății. Schimbându-l în **Completed** și **activând opțiunea Activate Membership**, vei activa site-ul clientului tău, iar abonamentul acestuia va deveni activ.

![Schimbarea statusului plății în Completed cu opțiunea Activate Membership](/img/admin/payments-list.png)
