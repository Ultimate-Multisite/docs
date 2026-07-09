---
title: Actualizarea unui plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Actualizarea unui plan (v2) {#upgrading-a-plan-v2}

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Clienții tăi își pot actualiza planurile în orice moment. Ei pot fie să facă upgrade la un alt plan, fie să achiziționeze orice servicii sau pachete suplimentare pe care le oferi în rețeaua ta.

În acest tutorial vom acoperi modul în care își pot actualiza planul și ce se întâmplă după procesul de upgrade.

Pentru a-și actualiza planul, clienții tăi ar trebui să își acceseze Dashboard și să meargă la pagina **Account**.

![Dashboard-ul subsite-ului clientului cu linkul de meniu Account vizibil](/img/account-page/account-menu.png)

Pe pagina Account, li se va afișa abonamentul curent și planul asociat cu acesta. Pentru a face upgrade la un alt plan, trebuie să dea clic pe **Schimbă** în colțul din dreapta sus al secțiunii **Abonamentul tău**.

![Pagina Account, cardul Abonamentul tău cu butonul Schimbă](/img/account-page/membership-change-button.png)

Vor fi redirecționați către un formular de checkout unde vor fi afișate toate planurile disponibile.

De asemenea, vor putea vedea **serviciile și pachetele disponibile pentru planul lor curent** , în cazul în care vor doar să achiziționeze un anumit serviciu sau pachet (cum ar fi vizite nelimitate sau spațiu pe disc în exemplul nostru de aici), și nu să facă upgrade planului.

![Selector de upgrade care afișează planurile și pachetele disponibile pentru client](/img/account-page/upgrade-picker.png)

După ce aleg produsul pe care vor să îl achiziționeze, vor vedea cât trebuie să plătească acum - excluzând orice credit existent - și cât li se va percepe la următoarea dată de facturare.

De obicei, dacă produsul este un alt plan și plata urmează să fie făcută între două taxări ale abonamentului, vor primi un credit pentru suma plătită pentru primul plan.

![Rezumatul plății pentru upgrade care arată creditul aplicat și suma următoarei facturări](/img/account-page/upgrade-summary.png)

Dacă selectează un plan sau pachet care nu va schimba nimic față de abonamentul curent, vor vedea un mesaj care explică acest lucru.

![Notificare când planul selectat nu modifică abonamentul](/img/account-page/upgrade-no-change.png)

După finalizarea checkout-ului, noul/noile produs(e) vor fi adăugate în contul clienților tăi și toate limitele sau funcționalitățile noului/noilor produs(e) vor fi adăugate instantaneu la acesta: vizite, spațiu pe disc, postări etc...

##

##

## Căi de upgrade și downgrade {#upgrade-and-downgrade-paths}

Pe fiecare dintre produsele tale, vei avea o filă **Up & Downgrades**. Prima opțiune din acea filă este un câmp numit **Plan Group**.

**Grupurile de planuri** sunt cele care îți permit să îi indici lui Ultimate Multisite că anumite planuri aparțin aceleiași „familii” și, prin urmare, ar trebui folosite pentru a construi opțiuni de căi de upgrade/downgrade.

![Fila Up and Downgrades pentru editarea produsului cu câmpul Plan Group](/img/config/product-upgrades-plan-group.png)

De exemplu, ai disponibil un **plan gratuit** , un **plan Basic** și un **plan Premium**. Vrei ca utilizatorii abonați la **planul gratuit** să poată face upgrade doar la **planul Premium** și nu vrei să vadă „Basic Plan” ca opțiune de upgrade. Tot ce trebuie să faci este să atribui același nume de grup de planuri atât pentru planurile Free, cât și Premium, așa cum se arată în capturile de ecran de mai jos.

![Pagina produsului Free Plan cu grupul de planuri High End atribuit](/img/config/product-upgrades-free.png)

![Pagina produsului Premium Plan cu grupul de planuri High End atribuit](/img/config/product-upgrades-premium.png)

Acest lucru ar trebui să îi spună lui Ultimate Multisite că există o „familie” de planuri în rețea numită **High End**. Când se oferă upgrade-uri sau downgrade-uri, doar planurile din aceeași familie vor fi prezentate ca opțiune pentru utilizator.
