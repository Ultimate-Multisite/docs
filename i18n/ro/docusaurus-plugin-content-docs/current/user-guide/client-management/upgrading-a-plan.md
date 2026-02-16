---
title: Actualizarea unui Plan
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Actualizarea unui plan (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Clienții tăi pot să își actualizeze planurile oricând. Pot fie să treacă la un alt plan, fie să achiziționeze orice servicii sau pachete suplimentare pe care le oferi în rețeaua ta.

În acest tutorial vom explica cum pot clienții să își actualizeze planul și ce se întâmplă după procesul de actualizare.

Pentru a-și actualiza planul, clienții tăi trebuie să acceseze dashboard-ul lor și să meargă la pagina **Cont**.

![Dashboard-ul clientului cu link către pagina Cont](/img/admin/memberships-list.png)

Pe pagina Cont, li se va afișa abonamentul curent și planul asociat acestuia. Pentru a trece la un alt plan, trebuie să facă clic pe **Modifică** în colțul din dreapta sus al secțiunii **Abonamentul tău**.

![Secțiunea Abonamentul tău cu butonul Modifică](/img/admin/memberships-list.png)

Vor fi redirecționați către un formular de checkout unde vor fi afișate toate planurile disponibile.

De asemenea, vor putea vedea **serviciile și pachetele disponibile pentru planul lor curent**, în cazul în care doresc doar să achiziționeze un anumit serviciu sau pachet (cum ar fi vizite nelimitate sau spațiu pe disc în exemplul nostru de aici), și nu să actualizeze planul.

![Formular de checkout care afișează planurile și pachetele disponibile](/img/admin/memberships-list.png)

După ce aleg produsul pe care doresc să îl achiziționeze, vor vedea cât trebuie să plătească acum - fără a include creditul existent - și cât li se va percepe la următoarea dată de facturare.

De obicei, dacă produsul este un alt plan și plata urmează să fie efectuată între două facturări de abonament, vor primi un credit pentru suma plătită pe primul plan.

![Rezumatul plății pentru actualizare cu creditul și suma următoarei facturări](/img/admin/memberships-list.png)

Dacă selectează un plan sau pachet care nu va schimba nimic din abonamentul curent, vor vedea un mesaj care explică acest lucru.

![Mesaj când planul selectat nu modifică abonamentul](/img/admin/memberships-list.png)

După finalizarea checkout-ului, noul produs sau produse vor fi adăugate în contul clienților tăi, iar toate limitele sau funcționalitățile noilor produse vor fi activate instant: vizite, spațiu pe disc, postări etc.

## 

## 

## Opțiuni de actualizare și retrogradare

La fiecare dintre produsele tale, vei avea un tab **Actualizări și retrogradări**. Prima opțiune din acel tab este un câmp numit **Grup de planuri**.

**Grupurile de planuri** sunt ceea ce îți permite să îi comunici lui Ultimate Multisite că anumite planuri aparțin aceleiași „familii" și, prin urmare, ar trebui folosite pentru a construi opțiunile de actualizare/retrogradare.

![Tab-ul Actualizări și retrogradări cu câmpul Grup de planuri](/img/config/product-upgrades.png)

De exemplu, ai disponibile un **Plan gratuit**, un **Plan de bază** și un **Plan Premium**. Vrei ca utilizatorii abonați la **Planul gratuit** să poată actualiza doar la **Planul Premium** și nu vrei ca aceștia să vadă „Planul de bază" ca opțiune de actualizare. Tot ce trebuie să faci este să atribui același nume de grup de planuri atât pentru planul gratuit, cât și pentru cel premium, așa cum se arată în capturile de ecran de mai jos.

![Planul gratuit cu grupul de planuri High End atribuit](/img/config/product-upgrades.png)

![Planul Premium cu grupul de planuri High End atribuit](/img/config/product-upgrades.png)

Ce ar trebui să facă acest lucru este să îi comunice lui Ultimate Multisite că există o „familie" de planuri în rețea numită **High End**. Când se oferă opțiuni de actualizare sau retrogradare, doar planurile din aceeași familie vor fi prezentate ca opțiune pentru utilizator.
