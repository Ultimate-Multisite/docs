---
title: Pagina Contului Clientului
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Pagina de cont a clientului tău (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Când clienții se abonează la un plan în rețeaua ta, primesc acces la un site web și la dashboard-ul acestuia, care conține informații importante despre plățile lor, abonamente, domenii, limitările planului etc...

În acest tutorial, te vom ghida prin pagina de cont a clientului și vei vedea ce pot vizualiza și face clienții tăi în cadrul acesteia.

## Pagina de cont

Pagina de cont este accesibilă dând clic pe **Account** din dashboard-ul clientului tău.

![Meniul Account în dashboard-ul clientului](/img/admin/dashboard.png)

![Prezentare generală a paginii de cont a clientului](/img/admin/dashboard.png)

După ce un client dă clic pe aceasta, va vedea o prezentare generală a abonamentului său, adresa de facturare, facturile, domeniile, limitările site-ului și va putea, de asemenea, să schimbe **Site Template** (dacă acest lucru este permis în rețeaua ta).

De asemenea, pot schimba abonamentul la un alt plan sau pot achiziționa un alt pachet sau serviciu pe care îl oferi. Să analizăm fiecare secțiune separat.

### Prezentarea generală a abonamentului:

Primul bloc, chiar sub numele site-ului clientului tău, arată o prezentare generală a planului actual și a serviciilor/pachetelor achiziționate împreună cu acesta. Blocul afișează, de asemenea, numărul abonamentului, suma inițială plătită pentru acesta, cât costă planul și orice serviciu/pachet, precum și de câte ori au fost facturați pentru acest abonament. Pot vedea, de asemenea, dacă abonamentul este **Active**, **Expired** sau **Canceled**.

![Prezentarea generală a abonamentului care arată planul, suma și detaliile de facturare](/img/admin/memberships-list.png)

Chiar sub acest bloc, clienții tăi pot vedea blocurile **About This Site** și **Site Limits**. Aceste blocuri le arată toate limitările care vin cu planul lor: spațiu pe disc, articole, pagini, vizite etc... Aceste limite pot fi configurate pe pagina fiecărui plan din **Ultimate Multisite > Products**.

![Blocurile About This Site și Site Limits care arată limitările planului](/img/admin/dashboard.png)

În partea dreaptă a **Your Membership**, clienții pot da clic pe **Change**. Aceasta le va arăta toate planurile și pachetele/serviciile disponibile. Dacă aleg un alt plan, limitările noului plan vor înlocui limitările actuale ale abonamentului - indiferent dacă fac downgrade sau upgrade.

Acum, dacă clienții tăi aleg să achiziționeze pachete sau servicii pentru acest abonament curent - cum ar fi mai mult spațiu pe disc sau vizite - abonamentul curent nu va fi schimbat, ci doar noile pachete vor fi adăugate la acesta.

Reține că codurile de cupon nu pot fi adăugate pe această pagină de schimbare a abonamentului. Dacă clientul a folosit un cod de cupon la prima achiziție a abonamentului, codul se va aplica și la acest nou abonament.

### Actualizarea adresei de facturare:

Pe pagina de cont, clienții tăi pot actualiza, de asemenea, adresa de facturare. Trebuie doar să dea clic pe **Update** lângă _Billing Address_.

![Secțiunea Billing Address cu butonul Update](/img/admin/customers-list.png)

Va apărea o nouă fereastră pentru clientul tău. Tot ce trebuie să facă este să completeze noua adresă și să dea clic pe _Save Changes_.

![Formular de actualizare a adresei de facturare](/img/admin/customers-list.png)

### Schimbarea template-ului site-ului:

Pentru a permite clienților tăi să își schimbe template-urile site-ului, trebuie să mergi la **Ultimate Multisite > Settings > Sites** și să activezi opțiunea **Allow Template Switching**.

De asemenea, în **Ultimate Multisite > Products**, selectează planurile tale și mergi la tab-ul **Site Templates**. Asigură-te că opțiunea **Allow Site Templates** este activată și la **Site Template Selection Mode** este selectată opțiunea **Choose Available Site Templates**.

![Tab-ul Site Templates al produsului cu modul de selecție a template-ului](/img/config/product-site-templates.png)

Vei putea vedea toate template-urile de site disponibile pe site-ul tău. Alege care vrei să fie disponibile și care vrei să nu fie disponibile pentru clienții tăi abonați la acest plan. Reține că aceste opțiuni afectează și formularul de checkout, așa că orice template ales ca **Not Available** nu va apărea pe pagina de înregistrare pentru acest plan.

Acum clienții tăi pot da clic pe **Change Site Template** în pagina lor de cont.

![Butonul Change Site Template pe pagina de cont](/img/admin/dashboard.png)  
O listă cu toate template-urile de site disponibile pentru acest plan va apărea clientului tău.

![Lista template-urilor de site disponibile pentru plan](/img/config/site-templates-list.png)

După ce selectează cel la care vor să schimbe, li se va cere să confirme schimbarea.

![Dialog de confirmare a schimbării template-ului de site](/img/admin/dashboard.png)

După activarea confirmării și clic pe **Process Switch**, noul template de site va fi folosit pe site-ul clientului tău.

### Adăugarea domeniilor personalizate:

Clienții tăi vor avea, de asemenea, opțiunea de a adăuga un domeniu personalizat pentru acest plan pe pagina lor de cont. Pentru a permite clienților tăi să folosească domenii personalizate, mergi la **Ultimate Multisite > Settings >** **Domain Mapping**.

Activează opțiunea **Enable Domain Mapping**. Aceasta va permite clienților tăi să folosească domenii personalizate la nivel de rețea.

Nu uita să verifici, de asemenea, dacă maparea domeniilor este activată la nivel de produs - pentru că poți limita un produs să nu permită clienților tăi să folosească domenii personalizate.

Mergi la **Ultimate Multisite > Products**. Selectează planul dorit și mergi la tab-ul **Custom Domains**. Activează opțiunea **Allow Custom Domains**.

![Tab-ul Custom Domains cu butonul Allow Custom Domains](/img/config/product-custom-domains.png)

Aceasta va permite tuturor clienților abonați la acest plan specific să folosească domenii personalizate. Acum, pe pagina de cont, clienții tăi pot adăuga un domeniu personalizat dând clic pe **Add Domain**.

![Butonul Add Domain pe pagina de cont](/img/admin/domains-list.png)

Prima fereastră care se deschide va arăta clienților tăi un mesaj cu instrucțiuni despre cum să își actualizeze înregistrările DNS pentru ca acest domeniu personalizat să funcționeze în rețeaua ta.

![Instrucțiuni DNS afișate la adăugarea unui domeniu personalizat](/img/admin/domains-list.png)

Acest mesaj poate fi editat (de către tine) în **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Setarea Add New Domain Instructions în Domain Mapping](/img/config/settings-domain-mapping.png)

După ce dau clic pe **Next Step**, clienții tăi pot adăuga numele domeniului personalizat și pot alege dacă acest domeniu personalizat va fi cel principal. Reține că clienții tăi pot folosi mai mult de un domeniu personalizat pentru site-urile lor, așa că pot alege care va fi cel principal.

![Introducerea numelui domeniului personalizat cu opțiunea de domeniu principal](/img/admin/domains-list.png)

După ce dau clic pe **Add Domain**, domeniul va fi adăugat la contul clientului tău. Tot ce trebuie să facă acum este să schimbe înregistrările DNS ale acestui domeniu personalizat la registratorul lor de domenii.

### Schimbarea parolei:

În dashboard-ul contului, clienții tăi pot, de asemenea, să își schimbe parola dând clic pe **Change Password**.

![Butonul Change Password pe pagina de cont](/img/admin/dashboard.png)

Aceasta va afișa o nouă fereastră unde clienții tăi vor trebui să completeze parola actuală și apoi să completeze noua parolă pe care vor să o folosească.

![Formular de schimbare a parolei cu câmpurile pentru parola actuală și cea nouă](/img/admin/dashboard.png)

### Zona periculoasă:

Avem, de asemenea, două opțiuni care sunt afișate în partea **Danger Zone**: **Delete Site** și **Delete Account**. Ambele sunt în Zona periculoasă pentru că aceste două acțiuni sunt ireversibile. Dacă clienții tăi își șterg site-ul sau contul, nu le pot recupera înapoi.

![Danger Zone cu opțiunile Delete Site și Delete Account](/img/admin/dashboard.png)

Dacă clienții tăi dau clic pe oricare dintre aceste două opțiuni, li se va afișa o fereastră unde vor trebui să activeze opțiunea pentru a elimina site-ul sau contul și vor fi avertizați că această acțiune nu poate fi anulată.

![Dialog de confirmare Delete Site](/img/admin/dashboard.png)

![Dialog de confirmare Delete Account](/img/admin/dashboard.png)

Dacă își șterg site-ul, contul și abonamentul lor vor rămâne neatinse. Vor pierde doar tot conținutul de pe site-ul lor. Dacă își șterg contul, toate site-urile, abonamentele și informațiile referitoare la acest cont vor fi pierdute.
