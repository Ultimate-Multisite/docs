---
title: Primirea plăților
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Primirea plăților (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Ultimate Multisite are un sistem integrat de abonamente și facturare. Pentru ca sistemul nostru de facturare să funcționeze, am integrat cele mai comune gateway-uri de plată folosite în comerțul electronic. Gateway-urile de plată implicite în Ultimate Multisite sunt _Stripe_ , _PayPal_ și Plată manuală. De asemenea, poți folosi _WooCommerce_ , _GoCardless_ și _Payfast_ pentru a primi plăți prin instalarea add-on-urilor lor respective.

## Setări de bază {#basic-settings}

Poți configura oricare dintre aceste gateway-uri de plată în setările de plată Ultimate Multisite. Le poți găsi accesând **meniul Ultimate Multisite > Setări > Plăți.**

![Pagina de setări Plăți în Ultimate Multisite, afișând panoul Plăți](/img/config/payments-settings-page.png)

Înainte să îți configurezi gateway-ul de plată, te rugăm să consulți setările de plată de bază pe care le poți configura:

**Forțează reînnoirea automată** **:** Aceasta va asigura că plata se va repeta automat la sfârșitul fiecărui ciclu de facturare, în funcție de frecvența de facturare selectată de utilizator.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 verifică dacă gateway-ul activ are o credențială de reînnoire reutilizabilă înainte de a salva un abonament recurent cu reînnoirea automată activată. O credențială de reînnoire poate fi un abonament de gateway, un acord de facturare, un token salvat în seif sau o metodă de plată reutilizabilă echivalentă. Dacă gateway-ul raportează că nu există nicio credențială utilizabilă, Ultimate Multisite salvează abonamentul, dar dezactivează reînnoirea automată și înregistrează starea de credențială lipsă, astfel încât un administrator sau un flux de suport să poată cere clientului să reautorizeze plata înainte de data reînnoirii.

Acest lucru împiedică un abonament să pară că se reînnoiește automat atunci când gateway-ul poate colecta doar plăți unice. Add-on-urile de gateway ar trebui să confirme că checkout-urile recurente stochează o credențială reutilizabilă, mai ales când gateway-ul acceptă atât capturarea unică, cât și moduri de plată cu seif/abonament.

**Permite perioade de încercare fără** **metodă de plată:** Cu această opțiune activată, clientul tău nu va trebui să adauge nicio informație financiară în timpul procesului de înregistrare. Aceasta va fi necesară doar după expirarea perioadei de încercare.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Trimite factura la confirmarea plății:** Aceasta îți oferă opțiunea de a trimite sau nu o factură după plată. Reține că utilizatorii vor avea acces la istoricul lor de plăți în dashboard-ul subsite-ului lor. Această opțiune nu se aplică Gateway-ului manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Schema de numerotare a facturilor:** Aici, poți selecta fie un cod de referință al plății, fie o schemă de numerotare secvențială. Dacă alegi să folosești un cod de referință al plății pentru facturile tale, nu trebuie să configurezi nimic. Dacă alegi să folosești o schemă de numerotare secvențială, va trebui să configurezi **următorul număr de factură** (Acest număr va fi folosit ca număr de factură pentru următoarea factură generată în sistem. Este incrementat cu unu de fiecare dată când este creată o factură nouă. Îl poți modifica și salva pentru a reseta numărul secvențial al facturii la o valoare specifică) și **prefixul numărului de factură.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Unde găsești gateway-urile: {#where-to-find-the-gateways}

Poți configura gateway-urile de plată pe aceeași pagină ( **Ultimate Multisite > Setări > Plăți**). Chiar sub **gateway-uri de plată active** , vei putea vedea: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ și _Manual_.

![Secțiunea Gateway-uri de plată active listând Stripe, Stripe Checkout, PayPal și Manual](/img/config/payments-active-gateways.png)

Avem un articol dedicat pentru fiecare gateway de plată, care te va ghida prin pașii de configurare și pe care îl poți găsi la linkurile de mai jos.

Poți vizualiza și edita detaliile plății:

![Interfață de editare a plății](/img/admin/payment-edit.png)

Iată o vizualizare completă a paginii de editare a plății:

![Interfață completă de editare a plății](/img/admin/payment-edit-full.png)

Iată, de asemenea, o vizualizare completă a setărilor gateway-urilor de plată:

![Pagina completă a setărilor gateway-urilor de plată](/img/config/settings-payments-gateways-full.png)

**Configurarea gateway-ului Stripe**

**Configurarea gateway-ului PayPal**** **

**Configurarea plăților manuale**

Acum, dacă vrei să folosești _WooCommerce_ , _GoCardless_ sau _Payfast_ ca gateway de plată, va trebui să **instalezi și să configurezi add-on-urile lor**.

### Cum să instalezi add-on-ul WooCommerce: {#how-to-install-the-woocommerce-add-on}

Înțelegem că _Stripe_ și _PayPal_ nu sunt disponibile în unele țări, ceea ce limitează sau împiedică utilizatorii Ultimate Multisite să folosească eficient pluginul nostru. Așa că am creat un add-on pentru a integra _WooCommerce,_ care este un plugin de comerț electronic foarte popular. Dezvoltatori din întreaga lume au creat add-on-uri pentru a integra diferite gateway-uri de plată cu acesta. Am profitat de acest lucru pentru a extinde gateway-urile de plată pe care le poți folosi cu sistemul de facturare Ultimate Multisite.

_**IMPORTANT:** Ultimate Multisite: WooCommerce Integration necesită ca WooCommerce să fie activat cel puțin pe site-ul tău principal._

Mai întâi, te rugăm să mergi la pagina de add-on-uri. O poți găsi accesând **Ultimate Multisite > Setări**. Ar trebui să vezi tabelul **Add-ons**. Fă clic pe **Verifică add-on-urile noastre**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

După ce faci clic pe **Verifică add-on-urile noastre** , vei fi redirecționat către pagina de add-on-uri. Aici poți găsi toate add-on-urile Ultimate Multisite. Fă clic pe add-on-ul **Ultimate Multisite: WooCommerce Integration**.

![Pagina de add-on-uri listând add-on-urile Ultimate Multisite, inclusiv WooCommerce Integration](/img/addons/addons-page.png)

Va apărea o fereastră cu detaliile add-on-ului. Doar faceți clic pe **Instalează acum**.

<!-- Captură de ecran indisponibilă: dialog cu detaliile add-on-ului Ultimate Multisite WooCommerce Integration, cu butonul Instalează acum -->

După finalizarea instalării, veți fi redirecționat către pagina de plugin-uri. Aici, doar faceți clic pe **Activează în rețea**, iar add-on-ul WooCommerce va fi activat în rețeaua dvs.

<!-- Captură de ecran indisponibilă: pagina de plugin-uri cu linkul Activează în rețea pentru add-on-ul WooCommerce Integration -->

După activarea acestuia, dacă încă nu aveți plugin-ul WooCommerce instalat și activat pe website-ul dvs., veți primi un memento.

<!-- Captură de ecran indisponibilă: notificare de administrare care îi reamintește administratorului să instaleze și să activeze plugin-ul WooCommerce -->

Pentru a citi mai multe despre add-on-ul WooCommerce Integration, **faceți clic aici**.

### Cum să instalați add-on-ul GoCardless: {#how-to-install-the-gocardless-add-on}

Pașii pentru instalarea add-on-ului _GoCardless_ sunt aproape aceiași ca pentru add-on-ul _WooCommerce_. Vă rugăm să mergeți la pagina de add-on-uri și să selectați add-on-ul **Ultimate Multisite: GoCardless Gateway**.

<!-- Captură de ecran indisponibilă: pagina de add-on-uri cu add-on-ul Ultimate Multisite GoCardless Gateway evidențiat -->

Fereastra add-on-ului va apărea. Faceți clic pe **Instalează acum**.

<!-- Captură de ecran indisponibilă: dialog cu detaliile add-on-ului Ultimate Multisite GoCardless Gateway, cu butonul Instalează acum -->

După finalizarea instalării, veți fi redirecționat către pagina de plugin-uri. Aici, doar faceți clic pe **Activează în rețea**, iar add-on-ul _GoCardless_ va fi activat în rețeaua dvs.

<!-- Captură de ecran indisponibilă: pagina de plugin-uri cu linkul Activează în rețea pentru add-on-ul GoCardless Gateway -->

Pentru a afla cum să începeți cu gateway-ul _GoCardless_, **citiți acest articol**.

### Cum să instalați add-on-ul Payfast: {#how-to-install-the-payfast-add-on}

Mergeți la pagina de add-on-uri și selectați add-on-ul **Ultimate Multisite: Payfast Gateway**.

<!-- Captură de ecran indisponibilă: pagina de add-on-uri cu add-on-ul Ultimate Multisite Payfast Gateway evidențiat -->

Fereastra add-on-ului va apărea. Faceți clic pe **Instalează acum.**

<!-- Captură de ecran indisponibilă: dialog cu detaliile add-on-ului Ultimate Multisite Payfast Gateway, cu butonul Instalează acum -->

După finalizarea instalării, veți fi redirecționat către pagina de plugin-uri. Aici, doar faceți clic pe **Activează în rețea**, iar add-on-ul _Payfast_ va fi activat în rețeaua dvs.

<!-- Captură de ecran indisponibilă: pagina de plugin-uri cu linkul Activează în rețea pentru add-on-ul Payfast Gateway -->
