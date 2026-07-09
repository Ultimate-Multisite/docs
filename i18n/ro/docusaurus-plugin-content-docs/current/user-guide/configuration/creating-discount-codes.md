---
title: Crearea codurilor de reducere
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Crearea codurilor de reducere (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Cu Ultimate Multisite poți crea coduri de reducere pentru a le oferi clienților tăi reduceri la abonamentele lor. Iar crearea lor este ușoară!

## Crearea și editarea codurilor de reducere

Pentru a crea sau edita un cod de reducere, mergi la **Ultimate Multisite > Discount Codes**.

![Lista codurilor de reducere — stare goală înainte să existe coduri](/img/config/discount-codes-empty.png)

Acolo vei avea o listă a codurilor de reducere pe care le-ai creat deja.

Poți face clic pe **Add Discount** **Code** pentru a crea un cupon nou sau le poți edita pe cele existente trecând cu cursorul peste ele și făcând clic pe **Edit**.

![Lista codurilor de reducere cu acțiuni la trecerea cursorului, afișând linkurile Edit și Delete](/img/config/discount-codes-list-hover.png)

![Butonul Add Discount Code în antetul paginii](/img/config/discount-codes-add-button.png)

Vei fi redirecționat către pagina unde vei crea sau edita codul cuponului. În acest exemplu vom crea unul nou.

![Pagina de editare a codului de reducere cu toate secțiunile vizibile](/img/config/discount-code-edit.png)

Să aruncăm o privire la setările disponibile aici:

**Enter Discount Code:** Acesta este doar numele codului tău de reducere. Acesta nu este codul pe care clienții tăi vor trebui să îl folosească în formularul de checkout.

**Description:** Aici poți descrie pe scurt pentru ce este acest cupon.

![Câmpurile pentru numele și descrierea codului de reducere din partea de sus a paginii de editare](/img/config/discount-code-description.png)

De asemenea, poți vedea codul de reducere ca activ sau inactiv:

![Starea activă a codului de reducere](/img/config/discount-code-active.png)

**Coupon code:** Aici definești codul pe care clienții tăi vor trebui să îl introducă în timpul checkout.

![Câmpul codului de cupon în care clienții introduc codul la checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Aici poți seta fie un **procent**, fie o **sumă fixă** de bani pentru codul tău de reducere.

![Setarea sumei reducerii cu meniu derulant pentru procent sau sumă fixă](/img/config/discount-code-amount.png)

**Apply to renewals:** Dacă această opțiune este dezactivată, acest cod de reducere va fi aplicat doar la **prima plată**. Toate celelalte plăți nu vor avea reducere. Dacă această opțiune este activată, codul de reducere va fi valabil pentru toate plățile viitoare.

**Setup fee discount:** Dacă această opțiune este dezactivată, codul de cupon **nu va oferi nicio reducere pentru taxa de configurare** a comenzii. Dacă această opțiune este activată, poți seta reducerea (procent sau sumă fixă) pe care acest cod de cupon o va aplica taxei de configurare a planurilor tale.

![Opțiunile de comutare Apply to renewals și setup fee discount](/img/config/discount-code-renewals.png)

**Active:** Activează sau dezactivează manual acest cod de cupon.

![Comutator Active pentru activarea sau dezactivarea manuală a codului de reducere](/img/config/discount-code-active.png)

Sub **Advanced Options**, avem următoarele setări:

![Opțiuni avansate ale codului de reducere](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Aici poți vedea de câte ori a fost folosit codul de reducere.

  * **Max uses:** Aceasta va limita numărul de ori în care utilizatorii pot folosi acest cod de reducere. De exemplu, dacă introduci 10 aici, cuponul ar putea fi folosit doar de 10 ori. După această limită, codul de cupon nu mai poate fi folosit.

![Setarea Limit uses cu numărul curent de utilizări și câmpul max uses](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Aici vei avea opțiunea de a adăuga o dată de început și/sau o dată de expirare pentru cuponul tău.

![Câmpuri pentru data de început și data de expirare pentru programarea codului de reducere](/img/config/discount-code-dates.png)

**Limit products:** Dacă activezi **Select products**, toate produsele tale îți vor fi afișate. Vei avea opțiunea de a selecta manual (activând sau dezactivând) ce produs poate accepta acest cod de cupon. Produsele care sunt dezactivate aici nu vor afișa nicio modificare dacă clienții tăi încearcă să folosească acest cod de cupon pentru ele.

![Secțiunea Limit products cu comutatoare pentru fiecare produs](/img/config/discount-code-limit-products.png)

După configurarea tuturor acestor opțiuni, fă clic pe **Save Discount Code** pentru a salva cuponul și gata!

![Butonul Save Discount Code din partea de jos a paginii de editare](/img/config/discount-code-save.png)

Cuponul este acum în lista ta și, de acolo, poți face clic pentru a-l **edita sau șterge**.

![Rândul codului de reducere din listă cu acțiunile Edit și Delete la trecerea cursorului](/img/config/discount-codes-list-hover.png)

###

### Utilizarea parametrilor URL:

Dacă vrei să îți personalizezi tabelele de prețuri sau să construiești o pagină frumoasă cu coduri de cupon pentru site-ul tău web și vrei să aplici automat un cod de reducere formularului tău de checkout, poți face acest lucru prin parametri URL.

Mai întâi, trebuie să obții linkul partajabil pentru planul tău. Pentru a face acest lucru, mergi la **Ultimate Multisite > Products** și selectează un plan.

Fă clic pe butonul **Click to Copy Shareable Link**. Acesta îți va oferi linkul partajabil către acest plan specific. În cazul nostru, linkul partajabil oferit a fost [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Pagina produsului cu butonul de link partajabil](/img/config/products-list.png)

Pentru a aplica codul tău de reducere acestui plan specific, adaugă pur și simplu parametrul **?discount_code=XXX** la URL. Unde **XXX** este codul cuponului.

În exemplul nostru de aici, vom aplica codul de cupon **50OFF** acestui produs specific.

URL-ul pentru acest plan specific și cu codul de reducere 50OFF aplicat va arăta astfel: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
