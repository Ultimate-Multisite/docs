---
title: Crearea Codurilor de Reducere
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Crearea codurilor de reducere (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Cu Ultimate Multisite poți crea coduri de reducere pentru a oferi clienților tăi discount-uri la abonamentele lor. Și crearea acestora este simplă!

## Crearea și editarea codurilor de reducere

Pentru a crea sau edita un cod de reducere, mergi la **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Acolo vei vedea o listă cu codurile de reducere pe care le-ai creat deja.

Poți da click pe **Add Discount** **Code** pentru a crea un cupon nou sau poți edita cele existente trecând cu mouse-ul peste ele și dând click pe **Edit**.

![Lista codurilor de reducere cu acțiuni la hover](/img/config/discount-codes-list.png)

![Butonul Add Discount Code](/img/config/discount-codes-list.png)

Vei fi redirecționat către pagina unde vei crea sau edita codul tău de cupon. În acest exemplu vom crea unul nou.

![Pagina de editare a codului de reducere](/img/config/discount-codes-list.png)

Hai să vedem ce setări sunt disponibile aici:

**Enter Discount Code:** Acesta este doar numele codului tău de reducere. Nu este codul pe care clienții tăi vor trebui să îl folosească în formularul de checkout.

**Description:** Aici poți descrie pe scurt pentru ce este acest cupon.

![Câmpurile pentru numele și descrierea codului de reducere](/img/config/discount-codes-list.png)

**Coupon code:** Aici definești codul pe care clienții tăi vor trebui să îl introducă în timpul checkout-ului.

![Câmpul pentru codul cuponului](/img/config/discount-codes-list.png)

**Discount:** Aici poți seta fie un **procentaj**, fie o **sumă fixă** de bani pentru codul tău de reducere.

![Setarea procentajului sau sumei fixe pentru discount](/img/config/discount-codes-list.png)

**Apply to renewals:** Dacă această opțiune este dezactivată, codul de reducere se va aplica doar la **prima plată**. Toate celelalte plăți nu vor avea nicio reducere. Dacă această opțiune este activată, codul de reducere va fi valabil pentru toate plățile viitoare.

**Setup fee discount:** Dacă această opțiune este dezactivată, codul de cupon **nu va oferi nicio reducere pentru taxa de configurare** a comenzii. Dacă această opțiune este activată, poți seta discount-ul (procentaj sau sumă fixă) pe care acest cod de cupon îl va aplica la taxa de configurare a planurilor tale.

![Opțiunile Apply to renewals și setup fee discount](/img/config/discount-codes-list.png)

**Active:** Activează sau dezactivează manual acest cod de cupon.

![Toggle-ul Active pentru codul de reducere](/img/config/discount-codes-list.png)

În secțiunea **Advanced Optio** **ns** avem următoarele setări:

**Limit uses:**

  * **Uses:** Aici poți vedea de câte ori a fost folosit codul de reducere.

  * **Max uses:** Aceasta va limita numărul de ori în care utilizatorii pot folosi acest cod de reducere. De exemplu, dacă pui 10 aici, cuponul va putea fi folosit doar de 10 ori. După această limită, codul de cupon nu mai poate fi utilizat.

![Setarea Limit uses cu câmpurile uses și max uses](/img/config/discount-codes-list.png)**Start & expiration dates:** Aici vei avea opțiunea de a adăuga o dată de început și/sau o dată de expirare pentru cuponul tău.

![Câmpurile pentru data de început și expirare](/img/config/discount-codes-list.png)

**Limit products:** Dacă activezi **Select products**, toate produsele tale vor fi afișate. Vei avea opțiunea de a selecta manual (prin activare sau dezactivare) care produs poate accepta acest cod de cupon. Produsele care sunt dezactivate aici nu vor arăta nicio modificare dacă clienții tăi încearcă să folosească acest cod de cupon pentru ele.

![Toggle-urile pentru selecția Limit products](/img/config/discount-codes-list.png)

După ce ai configurat toate aceste opțiuni, dă click pe **Save Discount Code** pentru a salva cuponul tău și gata!

![Butonul Save Discount Code](/img/config/discount-codes-list.png)

Cuponul este acum în lista ta și, de acolo, poți da click pentru a-l **edita sau șterge**.

![Codul de reducere în listă cu opțiunile de editare și ștergere](/img/config/discount-codes-list.png)

### 

### Utilizarea parametrilor URL:

Dacă vrei să personalizezi tabelele de prețuri sau să construiești o pagină frumoasă pentru coduri de cupon pe site-ul tău și vrei să aplici automat un cod de reducere la formularul de checkout, poți face acest lucru prin parametri URL.

Mai întâi, trebuie să obții link-ul partajabil pentru planul tău. Pentru aceasta, mergi la **Ultimate Multisite > Products** și selectează un plan.

Dă click pe butonul **Click to Copy Shareable Link**. Acesta îți va oferi link-ul partajabil către acest plan specific. În cazul nostru, link-ul partajabil obținut a fost [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Pagina produsului cu butonul pentru link partajabil](/img/config/products-list.png)

Pentru a aplica codul tău de reducere la acest plan specific, adaugă pur și simplu parametrul **?discount_code=XXX** la URL. Unde **XXX** este codul cuponului.

În exemplul nostru de aici, vom aplica codul de cupon **50OFF** la acest produs specific.

URL-ul pentru acest plan specific și cu codul de reducere 50OFF aplicat va arăta astfel: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
