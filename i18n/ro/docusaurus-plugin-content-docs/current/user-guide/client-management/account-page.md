---
title: Pagina Account a clientului
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pagina Account a clientului tău (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Când clienții se abonează la un plan în rețeaua ta, primesc acces la un site web și la Dashboard-ul acestuia, cu informații importante despre plățile, abonamentele, domeniile, limitările planului etc...

În acest tutorial, te vom ghida prin pagina de Account a clientului și vei vedea ce pot vedea și face clienții tăi în interiorul acesteia.

## Pagina Account {#the-account-page}

Pagina de Account este accesibilă făcând clic pe **Account** în Dashboard-ul clientului tău.

![Meniul Account în Dashboard-ul clientului](/img/account-page/account-menu.png)

Pe rețelele tenant suverane, Ultimate Multisite v2.13.0 păstrează această experiență de gestionare a clienților pe site-ul principal. Dacă un client deschide acțiuni de account, checkout, facturare, factură, gestionare a site-ului, schimbare de șablon sau mapare de domeniu dintr-un tenant suveran, acțiunea indică înapoi către panoul de client al site-ului principal, astfel încât înregistrările de facturare și de membership ale rețelei să rămână autoritare.

Când clientul ajunge dintr-un tenant suveran, panoul de client al site-ului principal poate include un link de întoarcere către site-ul tenant. Linkul de întoarcere este afișat doar când Ultimate Multisite poate valida ținta de întoarcere ca fiind unul dintre site-urile clientului, ceea ce previne redirecționările arbitrare, păstrând în același timp fluxul de lucru al tenantului.

![Prezentare generală a paginii Account a clientului](/img/account-page/overview.png)

După ce un client face clic pe aceasta, va vedea o prezentare generală a membership-ului, adresei de facturare, facturilor, domeniilor, limitărilor site-ului și va putea, de asemenea, să schimbe ****Șablonul site-ului** (dacă acest lucru este permis în rețeaua ta)**.

De asemenea, poate schimba membership-ul la un alt plan sau poate achiziționa un alt pachet sau serviciu pe care îl oferi. Să analizăm fiecare secțiune separat.

### Prezentarea generală a membership-ului tău: {#your-membership-overview}

Primul bloc chiar sub numele site-ului web al clienților tăi afișează o prezentare generală a planului lor curent și a serviciilor/pachetelor care au fost achiziționate împreună cu acesta. Blocul afișează și numărul membership-ului, suma inițială plătită pentru acesta, cât costă planul și orice serviciu/pachet și de câte ori au fost facturați pentru acest membership. De asemenea, pot vedea dacă membership-ul este **Activ** , **Expirat** sau **Anulat**.

![Prezentare generală a membership-ului care arată planul, suma și detaliile de facturare](/img/account-page/membership-card.png)

Chiar sub acest bloc, clienții tăi pot vedea blocurile **Despre acest site** și **Limitele site-ului**. Aceste blocuri le arată toate limitările care vin cu planul lor: spațiu pe disc, articole, pagini, vizite etc... Aceste limite pot fi configurate pe fiecare pagină de plan din **Ultimate Multisite > Products**.

![Blocurile Despre acest site și Limitele site-ului care arată limitările planului](/img/account-page/site-limits.png)

În partea dreaptă a **Membership-ului tău** , clienții pot face clic pe **Schimbă**. Aceasta le va afișa toate planurile și pachetele/serviciile disponibile. Dacă aleg un alt plan, limitările pentru acel plan vor intra în vigoare în locul limitărilor curente ale membership-ului - indiferent dacă fac downgrade sau upgrade.

Acum, dacă clienții tăi aleg să achiziționeze pachete sau servicii pentru acest membership curent - precum mai mult spațiu pe disc sau mai multe vizite - membership-ul curent nu va fi schimbat, ci doar noile pachete vor fi adăugate la acesta.

Reține că codurile de cupon nu pot fi adăugate pe această pagină de schimbare a membership-ului. Dacă clientul a folosit un cod de cupon la prima achiziție de membership, codul se va aplica și acestui nou membership.

### Actualizarea adresei de facturare: {#updating-the-billing-address}

Pe pagina de Account, clienții tăi își pot actualiza și adresa de facturare. Trebuie doar să facă clic pe **Actualizează** lângă _Adresa de facturare_.

![Secțiunea Adresa de facturare cu butonul Actualizează](/img/account-page/billing-address.png)

O fereastră nouă va apărea pentru clientul tău. Tot ce trebuie să facă este să completeze noua adresă și să facă clic pe _Salvează modificările_.

![Formular de actualizare a adresei de facturare](/img/account-page/billing-address-form.png)

### Schimbarea șablonului site-ului: {#changing-the-site-template}

Pentru a le permite clienților tăi să schimbe șabloanele site-urilor lor, trebuie să mergi la **Ultimate Multisite > Settings > Sites** și să activezi opțiunea **Allow Template Switching**.

De asemenea, în **Ultimate Multisite > Products**, selectează planurile tale și mergi la fila **Site Templates**. Asigură-te că opțiunea **Allow Site Templates** este activată și că la **Site Template Selection Mode** , opțiunea **Choose Available Site Templates** este selectată.

![Fila de șabloane ale site-ului pentru produs cu modul de selecție a șabloanelor](/img/config/product-site-templates.png)

Vei putea vedea toate șabloanele de site disponibile pe site-ul tău web. Alege pe care dorești să le faci disponibile și pe care dorești să nu le faci disponibile clienților tăi abonați la acest plan. Reține că aceste opțiuni afectează și formularul de checkout, astfel că orice șablon ales ca **Indisponibil** nu va apărea pe pagina de înregistrare pentru acest plan.

Acum clienții tăi pot face clic pe **Schimbă șablonul site-ului** în pagina lor de Account.

![Butonul Schimbă șablonul site-ului pe pagina Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 afișează un panou reproiectat pentru schimbarea șablonului. Panoul începe cu un **card al șablonului curent**, astfel încât clienții să poată vedea ce șablon este activ înainte de a alege un înlocuitor.

O grilă persistentă de șabloane de site disponibile rămâne vizibilă în timp ce clienții își revizuiesc opțiunile. Acest lucru îi ajută să compare șabloanele permise pentru planul lor fără a pierde din vedere selecția curentă.

![Lista șabloanelor de site disponibile pentru plan](/img/config/site-templates-list.png)

După ce îl selectează pe cel la care doresc să treacă, li se va cere să confirme schimbarea.

![Dialog de confirmare pentru schimbarea șablonului site-ului](/img/account-page/template-switch-confirm.png)

După activarea confirmării și clic pe **Procesează schimbarea** , noul șablon de site va fi folosit pe site-ul web al clientului tău.

Clienții pot folosi și **Reset current template** din acest panou atunci când trebuie să reseteze site-ul înapoi la șablonul atribuit în prezent. La fel ca trecerea la un alt șablon, resetarea unui șablon poate suprascrie conținutul site-ului, așa că clienții ar trebui să confirme doar atunci când înțeleg acțiunea de resetare.

### Adăugarea domeniilor personalizate: {#adding-custom-domains}

Clienții tăi vor avea, de asemenea, opțiunea de a adăuga un domeniu personalizat pentru acest plan pe pagina lor Account. Pentru a le permite clienților tăi să folosească domenii personalizate, mergi la **Ultimate Multisite > Settings >** **Domain Mapping**.

Activează opțiunea **Enable Domain Mapping**. Acest lucru le va permite clienților tăi să folosească domenii personalizate la nivel de rețea.

Nu uita să verifici și dacă maparea domeniilor este activată la nivel de produs - deoarece poți limita un produs astfel încât să nu le permită clienților tăi să folosească domenii personalizate.

Mergi la **Ultimate Multisite > Products**. Selectează planul dorit și mergi la tabul **Custom Domains**. Activează opțiunea **Allow Custom Domains**.

![Tabul Custom Domains cu comutatorul Allow Custom Domains](/img/config/product-custom-domains.png)

Acest lucru le va permite tuturor clienților abonați la acest plan specific să folosească domenii personalizate. Acum, pe pagina Account, clienții tăi pot adăuga un domeniu personalizat făcând clic pe **Add Domain**.

![Butonul Add Domain pe pagina Account](/img/account-page/add-domain-button.png)

Prima fereastră care se deschide le va afișa clienților tăi un mesaj care îi instruiește cum să își actualizeze înregistrările DNS pentru ca acest domeniu personalizat să funcționeze în rețeaua ta.

![Instrucțiuni DNS afișate la adăugarea unui domeniu personalizat](/img/account-page/add-domain-dns.png)

Acest mesaj poate fi editat (de tine) în **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Setarea Add New Domain Instructions în Domain Mapping](/img/config/settings-domain-mapping.png)

Iată o vedere completă a paginii de setări pentru maparea domeniilor:

![Pagina completă de setări pentru maparea domeniilor](/img/config/settings-domain-mapping-full.png)

După ce fac clic pe **Next Step** , clienții tăi pot adăuga numele domeniului lor personalizat și pot alege dacă acest domeniu personalizat va fi cel principal. Reține că clienții tăi pot folosi mai mult de un domeniu personalizat pentru site-urile lor, așa că pot alege care va fi cel principal.

![Introducerea numelui domeniului personalizat cu opțiunea de domeniu principal](/img/account-page/add-domain-primary.png)

După ce fac clic pe **Add Domain** , domeniul va fi adăugat în contul clientului tău. Tot ce trebuie să facă acum este să schimbe înregistrările DNS ale acestui domeniu personalizat la registratorul lor de domeniu.

### Schimbarea parolei: {#changing-password}

În interiorul dashboardului contului, clienții tăi își pot schimba și parola făcând clic pe **Change Password**.

![Butonul Change Password pe pagina contului](/img/account-page/change-password-button.png)

Aceasta va afișa o fereastră nouă în care clienții tăi vor trebui să completeze parola lor actuală și apoi să completeze noua parolă pe care doresc să o folosească.

![Formular de schimbare a parolei cu câmpuri pentru parola actuală și parola nouă](/img/account-page/change-password-form.png)

### Zona de pericol: {#danger-zone}

Avem, de asemenea, două opțiuni care sunt afișate în partea **Danger Zone**: **Delete Site** și **Delete Account**. Ambele sunt în partea Danger Zone deoarece aceste două acțiuni sunt ireversibile. Dacă clienții tăi își șterg site-ul sau contul, nu le pot recupera.

![Danger Zone cu opțiunile Delete Site și Delete Account](/img/account-page/danger-zone.png)

Dacă clienții tăi fac clic pe oricare dintre aceste două opțiuni, li se va afișa o fereastră în care vor trebui să activeze opțiunea de a elimina site-ul sau contul și vor fi avertizați că această acțiune nu poate fi anulată.

![Dialog de confirmare Delete Site](/img/account-page/delete-site-confirm.png)

![Dialog de confirmare Delete Account](/img/account-page/delete-account-confirm.png)

Dacă își șterg site-ul, contul și abonamentul lor vor rămâne neatinse. Vor pierde doar tot conținutul de pe site-ul lor. Dacă își șterg contul, toate site-urile, abonamentele și informațiile referitoare la acest cont vor fi pierdute.
