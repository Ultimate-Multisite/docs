---
title: Configurarea plăților manuale
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Configurarea plăților manuale (v2) {#setting-up-manual-payments-v2}

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Plățile manuale sunt o modalitate prin care le puteți oferi utilizatorilor alte metode de plată dacă **Stripe** sau **PayPal** nu sunt disponibile pentru utilizatorii dvs. Poate fi un transfer bancar sau orice altă metodă de plată disponibilă local pentru utilizatorii dvs.

## Cum se activează plățile manuale {#how-to-enable-manual-payments}

Configurarea plății manuale este foarte ușoară. Trebuie doar să o activați în cadrul gateway-urilor de plată și să introduceți instrucțiuni detaliate despre cum ar trebui utilizatorul să trimită plata.

Mai întâi, mergeți la **Ultimate Multisite > Settings > Payments**. Sub **Payment Gateways**, activați **Manual**. Veți vedea că va apărea o casetă **Payment Instructions** pentru dvs.

Adăugați în această casetă informațiile de care clientul dvs. va avea nevoie pentru a efectua plata. Pot fi detaliile contului dvs. bancar și emailul dvs., astfel încât clientul să vă poată trimite confirmarea plății, de exemplu.

![Comutator pentru gateway de plată manuală cu zonă de text Payment Instructions](/img/config/manual-gateway-expanded.png)

Iată interfața setărilor pentru gateway-ul manual:

![Setări pentru gateway manual](/img/config/manual-gateway-settings.png)

După configurare, dați clic pe **Save Settings** și este gata. Când utilizatorii se înregistrează în rețeaua dvs., vor vedea un mesaj care le spune că vor primi instrucțiunile dvs. pentru a finaliza achiziția.

![Mesaj de confirmare a înregistrării care îi spune utilizatorului că va primi instrucțiuni de plată](/img/frontend/registration-manual-notice.png)

Și vor primi, de asemenea, un mesaj pe pagina dvs. **Thank You** cu instrucțiunile dvs. de plată.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Confirmarea plăților manuale {#confirming-manual-payments}

Pentru a confirma o plată manuală, mergeți la meniul **Payments** din bara din stânga. Acolo puteți vedea toate plățile din rețeaua dvs. și detaliile acestora, inclusiv **statusul** lor. O plată manuală va avea întotdeauna statusul **Pending** până când îl modificați manual.

![Listă de plăți care afișează o plată manuală în așteptare](/img/admin/payments-list.png)

Intrați pe pagina plății dând clic pe **codul de referință**. Pe această pagină aveți toate detaliile plății în așteptare, cum ar fi ID-ul de referință, produsele, marcajele temporale și altele.

![Pagină cu detaliile plății care afișează codul de referință, produsele și totalurile](/img/admin/payment-edit.png)

În coloana din dreapta, puteți modifica statusul plății. Schimbarea acestuia în **Completed** și **activarea opțiunii Activate Membership** vor activa site-ul clientului dvs., iar abonamentul acestuia va fi activ.

![Pagină de editare a plății cu Status setat la Completed și comutatorul Activate Membership](/img/admin/payment-activate-membership.png)
