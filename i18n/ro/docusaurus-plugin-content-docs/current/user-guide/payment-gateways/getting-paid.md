---
title: Primirea plăților
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Primirea plăților (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Ultimate Multisite are un sistem integrat de membership și facturare. Pentru ca sistemul nostru de facturare să funcționeze, am integrat cele mai comune gateway-uri de plată folosite în e-commerce. Gateway-urile de plată implicite în Ultimate Multisite sunt _Stripe_, _PayPal_ și Plata manuală. Poți folosi și _WooCommerce_, _GoCardless_ și _Payfast_ pentru a primi plăți, instalând add-on-urile corespunzătoare.

## Setări de bază

Poți configura oricare dintre aceste gateway-uri de plată în setările de plată ale Ultimate Multisite. Le găsești accesând **meniul Ultimate Multisite > Settings > Payments.**

![Pagina de setări pentru plăți în Ultimate Multisite](/img/config/settings-payment-gateways.png)

Înainte de a configura gateway-ul de plată, te rugăm să arunci o privire asupra setărilor de bază pe care le poți configura:

**Force auto-renew:** Această opțiune se asigură că plata se va reînnoi automat la sfârșitul fiecărui ciclu de facturare, în funcție de frecvența de facturare selectată de utilizator.

![Setarea toggle pentru reînnoirea automată forțată](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** Cu această opțiune activată, clientul tău nu va trebui să adauge nicio informație financiară în timpul procesului de înregistrare. Aceasta va fi necesară doar după expirarea perioadei de probă.

![Toggle pentru permiterea perioadei de probă fără metodă de plată](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Această opțiune îți permite să alegi dacă dorești sau nu să trimiți o factură după efectuarea plății. Reține că utilizatorii vor avea acces la istoricul plăților din dashboard-ul subsite-ului lor. Această opțiune nu se aplică pentru Gateway-ul manual.

![Toggle pentru trimiterea facturii la confirmarea plății](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Aici poți selecta fie un cod de referință pentru plată, fie o schemă de numerotare secvențială. Dacă alegi să folosești un cod de referință pentru facturile tale, nu trebuie să configurezi nimic. Dacă alegi să folosești o schemă de numerotare secvențială, va trebui să configurezi **următorul număr de factură** (Acest număr va fi folosit ca număr de factură pentru următoarea factură generată în sistem. Este incrementat cu unu de fiecare dată când se creează o factură nouă. Îl poți modifica și salva pentru a reseta numărul secvențial al facturii la o valoare specifică) și **prefixul numărului de factură.**

![Selectarea schemei de numerotare a facturilor](/img/config/settings-payment-gateways.png)

![Setări pentru numărul secvențial și prefixul facturii](/img/config/settings-payment-gateways.png)

## Unde găsești gateway-urile:

Poți configura gateway-urile de plată pe aceeași pagină (**Ultimate Multisite > Settings > Payments**). Chiar sub **active payment gateways**, vei putea vedea: _Stripe_, _Stripe Checkout_, _PayPal_ și _Manual_.

![Lista gateway-urilor de plată active](/img/config/settings-payment-gateways.png)

Avem un articol dedicat pentru fiecare gateway de plată care te va ghida prin pașii de configurare, pe care îl poți găsi la linkurile de mai jos.

**Configurarea gateway-ului Stripe**

**Configurarea gateway-ului PayPal**

**Configurarea plăților manuale**

Acum, dacă dorești să folosești _WooCommerce_, _GoCardless_ sau _Payfast_ ca gateway de plată, va trebui să **instalezi și să configurezi add-on-urile lor**.

### Cum instalezi add-on-ul WooCommerce:

Înțelegem că _Stripe_ și _PayPal_ nu sunt disponibile în unele țări, ceea ce limitează sau împiedică utilizatorii Ultimate Multisite să folosească eficient plugin-ul nostru. Așa că am creat un add-on pentru a integra _WooCommerce_, care este un plugin de e-commerce foarte popular. Dezvoltatorii din întreaga lume au creat add-on-uri pentru a integra diferite gateway-uri de plată cu acesta. Am profitat de acest lucru pentru a extinde gateway-urile de plată pe care le poți folosi cu sistemul de facturare Ultimate Multisite.

_**IMPORTANT:** Ultimate Multisite: WooCommerce Integration necesită ca WooCommerce să fie activat cel puțin pe site-ul tău principal._

Mai întâi, te rugăm să accesezi pagina de add-on-uri. O găsești accesând **Ultimate Multisite > Settings**. Ar trebui să vezi tabelul **Add-ons**. Click pe **Check our Add-ons**.

![Pagina de setări cu secțiunea add-on-uri](/img/config/settings-general.png)

După ce dai click pe **Check our Add-ons**, vei fi redirecționat către pagina de add-on-uri. Aici poți găsi toate add-on-urile Ultimate Multisite. Click pe add-on-ul **Ultimate Multisite: WooCommerce Integration**.

![Pagina de add-on-uri care listează add-on-urile disponibile](/img/config/settings-general.png)

Va apărea o fereastră cu detaliile add-on-ului. Pur și simplu click pe **Install Now**.

![Dialogul de instalare pentru add-on-ul WooCommerce](/img/config/settings-general.png)

După finalizarea instalării, vei fi redirecționat către pagina de plugin-uri. Aici, pur și simplu click pe **Network Activate** și add-on-ul WooCommerce va fi activat în rețeaua ta.

![Activarea în rețea a add-on-ului WooCommerce](/img/config/settings-general.png)

După activare, dacă încă nu ai plugin-ul WooCommerce instalat și activat pe site-ul tău, vei primi o notificare.

![Notificare de reminder pentru activarea WooCommerce](/img/config/settings-general.png)

Pentru a citi mai multe despre add-on-ul WooCommerce Integration, **click aici**.

### Cum instalezi add-on-ul GoCardless:

Pașii pentru a instala add-on-ul _GoCardless_ sunt aproape identici cu cei pentru add-on-ul _WooCommerce_. Te rugăm să accesezi pagina de add-on-uri și să selectezi add-on-ul **Ultimate Multisite: GoCardless Gateway**.

![Pagina de add-on-uri care listează add-on-urile disponibile](/img/config/settings-general.png)

Va apărea fereastra add-on-ului. Click pe **Install Now**.

![Dialogul de instalare pentru add-on-ul GoCardless](/img/config/settings-general.png)

După finalizarea instalării, vei fi redirecționat către pagina de plugin-uri. Aici, pur și simplu click pe **Network Activate** și add-on-ul _GoCardless_ va fi activat în rețeaua ta.

![Activarea în rețea a add-on-ului GoCardless](/img/config/settings-general.png)

Pentru a afla cum să începi cu gateway-ul _GoCardless_, **citește acest articol**.

### Cum instalezi add-on-ul Payfast:

Accesează pagina de add-on-uri și selectează add-on-ul **Ultimate Multisite: Payfast Gateway**.

![Pagina de add-on-uri care listează add-on-urile disponibile](/img/config/settings-general.png)

Va apărea fereastra add-on-ului. Click pe **Install Now.**

![Dialogul de instalare pentru add-on-ul Payfast](/img/config/settings-general.png)

După finalizarea instalării, vei fi redirecționat către pagina de plugin-uri. Aici, pur și simplu click pe **Network Activate** și add-on-ul _Payfast_ va fi activat în rețeaua ta.

![Activarea în rețea a add-on-ului Payfast](/img/config/settings-general.png)
