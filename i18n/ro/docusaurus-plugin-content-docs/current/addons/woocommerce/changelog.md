---
title: Jurnal de modificări pentru integrarea WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Jurnal de modificări pentru integrarea WooCommerce {#woocommerce-integration-changelog}

Versiunea 2.2.0 - Lansată pe 2026-07-01
* Nou: Sumele taxelor Ultimate Multisite apar acum ca linii de taxe WooCommerce separate la checkout, făcând totalurile taxelor mai clare înainte de plată.
* Nou: A fost adăugată o setare opțională „Suspend Memberships Immediately on Failed Renewals” și filtrul `wu_woo_suspend_on_payment_failure` pentru site-urile care doresc suspendarea la reînnoire eșuată în timpul ferestrei de reîncercare WooCommerce Subscriptions.
* Corectare: Au fost reconciliate statusurile WooCommerce Subscription care puteau rămâne nesincronizate cu abonamentele Ultimate Multisite după reînnoiri eșuate sau recuperate.
* Corectare: A fost adăugată moneda magazinului WooCommerce la lista de monede Ultimate Multisite atunci când lipsea.
* Corectare: Au fost păstrate detaliile de facturare ale clientului la redirecționarea abonaților către checkout WooCommerce.
* Îmbunătățit: A fost adăugată compatibilitatea cu Jetpack Autoloader 5.
* Îmbunătățit: A fost curățată generarea pachetului de lansare, astfel încât arhivele zip GitHub și marketplace să evite directoarele de staging imbricate și fișierele de dezvoltare.

Versiunea 2.0.6 - Lansată pe 2026-01-16
* Îmbunătățire: Include abonamentele de bază în add-on. Nu mai necesită extensia Woocommerce Subscriptinos.

Versiunea 2.0.5 - Lansată pe 2026-01-09
* Îmbunătățire: Încarcă traducerile din API-ul glotpress.
* Corectare: Eroare fatală în unele page buildere.
* corectare: Redirecționare infinită atunci când clientul este membru al site-ului principal.

Versiunea 2.0.4 - Lansată pe 2025-11-14
* Adăugat: Traduceri pentru mult mai multe limbi.
* Modificat: Redenumit în Ultimate Multisite: Woocommerce Integration.
* Adăugat: Compatibilitate cu Woocommerce 10.2.1.
* Adăugat: Compatibilitate cu Woocommerce Subscriptions 7.7.0.
* Corectare: Compatibilitate cu PHP 8.4
* Corectare: Redirecționare, dar atunci când nu există nicio pagină Account WC.

Versiunea 2.0.3 - Lansată pe 2025-08-13
* Modificat: Au fost activate actualizările automate cu noul marketplace.

Versiunea 2.0.2 - Lansată pe 2025-07-05
* Modificat: Redenumit în Multisite Ultimate: Woocommerce Integration.
* Adăugat: Compatibilitate cu Woocommerce 9.8.1.
* Adăugat: Compatibilitate cu Woocommerce Subscriptions 7.3.0.
* Corectare: Anularea unui abonament de către client.
* Corectare: Eroare fatală la utilizarea blocului de checkout.
* Îmbunătățire: Acum compatibil cu tabelele personalizate de comenzi de înaltă performanță Woocommerce.
* Corectare: Anularea la checkout WooCommerce încă poate actualiza un abonament.

Versiunea 2.0.1 - Lansată pe 2023-08-09

* Adăugat: Compatibilitate cu Woocommerce 7.9.0.
* Adăugat: Compatibilitate cu Woocommerce Subscriptions 5.3.0.
* Adăugat: Suport pentru actualizările abonamentelor.
* Adăugat: Notificări despre perioade de probă și taxe de configurare în Woocommerce.
* Adăugat: Identificarea produselor Ultimate Multisite Woocommerce cu o valoare meta.
* Adăugat: A fost introdusă o corectare unică pentru a marca toate produsele Woocommerce asociate cu Ultimate Multisite.
* Adăugat: Produsele create de Ultimate Multisite au fost eliminate din lista Woocommerce.
* Îmbunătățire: A fost creată o reducere Woocommerce nerecurentă pentru a fi aplicată coșului.
* Îmbunătățire: A fost restaurată reducerea recurentă pentru produsul Woocommerce.
* Îmbunătățire: A fost adăugată o etichetă de reducere recurentă la produsul Woocommerce.
* Îmbunătățire: A fost asigurat tipul produsului la checkout.
* Corectare: A fost menținut statusul abonamentului în timpul procesului de downgrade.
* Corectare: S-a verificat dacă există un abonament pentru a evita erorile în timpul procesului de anulare.
* Corectare: A fost adăugată data de început a abonamentului pentru utilizare în abonamentele Woocommerce.
* Intern: A fost implementat un nou proces de build PHP 8.1.

Versiunea 2.0.0 - Rescriere completă.

* Adăugat: Metodă de procesare a anulării pentru a elimina abonamentul woo la schimbarea gateway-ului sau anularea abonamentului;
* Adăugat: Handler pentru downgrade-ul și upgrade-ul abonamentelor;
* Îmbunătățire: Încarcă dependențele woocommerce în formularul de actualizare a clientului din subsite-uri pentru a permite actualizarea contului;
* Îmbunătățire: Încarcă corect coșul Woocommerce dacă nu există;
* Îmbunătățire: Asigură că suntem pe tabelele site-ului principal când se procesează un checkout;
* Îmbunătățire: Face comanda de reînnoire Ultimo bazată pe valoarea comenzii abonamentului Woocommerce și nu pe ultima plată;
* Corectare: Linkul butonului Mergi la abonamentul WU;
* Corectare: Setează comanda Ultimo ca plătită când reînnoirea abonamentelor Woocommerce a fost plătită;
* Build: Adaugă MPB ca builder;

Versiunea 2.0.0-beta-5 - Lansată pe 2022-01-21

* Intern: A fost adăugat generatorul de hook-uri și filtre;
* Intern: Au fost adăugate stub-uri Ultimate Multisite pentru confortul dezvoltatorului;
* Corectat: Previne crearea mai multor produse atunci când nu este necesar;

Versiunea 2.0.0-beta.4 - 2021-09-23

* Corectare: cere ca WooCommerce să fie activ la nivel de rețea în loc de doar pe site-ul principal;
* Îmbunătățire: a fost adăugat un filtru pentru a permite add-on-ului să fie folosit ca mu-plugin;

Versiunea 2.0.0-beta.3 - 2021-05-28

* Corectare: controlul accesului la Dashboard era prea agresiv;
* Îmbunătățire: Au fost adăugate linkuri de ajutor WooCommerce în meniul superior Ultimate Multisite;

Versiunea 2.0.0-beta.2 - 2021-05-04

* Îmbunătățire: creează plăți în așteptare în Ultimo la crearea comenzii de reînnoire WCS;
* Îmbunătățire: precompletează câmpurile de facturare cu datele clientului Ultimate Multisite;
* Îmbunătățire: adaugă înapoi câmpurile de facturare pentru gateway-uri;

Versiunea 2.0.0-beta.1 - 2021-05-04

* Lansare beta inițială

-- Versiuni vechi --

Versiunea 1.2.6 - 26/03/2020

* Corectat: Mică incompatibilitate cu versiunile mai noi de WooCommerce Subscriptions;

Versiunea 1.2.5 - 26/08/2019

* Corectat: Eroare la lansarea anterioară;

Versiunea 1.2.4 - 22/08/2019

* Îmbunătățit: A fost adăugată opțiunea de redirecționare imediată către ecranul de checkout WooCommerce după integrare;

Versiunea 1.2.3 - 26/05/2019

* Corectat: Emailul de plată pentru WooCommerce dispărea în unele cazuri limită;

Versiunea 1.2.2 - 27/02/2019

* Adăugat: Suport pentru taxe de configurare în integrarea WooCommerce Subscription;

Versiunea 1.2.1 - 17/11/2018

* Corectat: Probleme de compatibilitate cu Ultimate Multisite versiunea 1.9.0;

Versiunea 1.2.0 - 10/09/2018

* Îmbunătățit: URL nou pentru actualizări pentru add-on-uri;
* Adăugat: Suport beta pentru WooCommerce Subscription;

Versiunea 1.1.2 - 11/02/2018

* Corectat: Linkul către plată este generat dinamic pentru a răspunde modificărilor endpoint-urilor WooCommerce;
* Îmbunătățit: Acum forțăm statusul finalizat pentru comenzile noastre când este apelat payment_completed, pentru a ne asigura că hook-urile noastre de reînnoire rulează când trebuie;

Version 1.1.1 - 24/01/2018

* Remediat: Acum verifică și dacă WooCommerce este doar activat pe site-ul principal;
* Remediat: Au fost incluse supraîncărcări pentru a permite crearea comenzilor să includă taxele;

Version 1.1.0 - 04/11/2017

* Remediat: Acum eticheta butonului de integrare se modifică efectiv pentru a reflecta setările. Necesită Ultimate Multisite 1.5.0;
* Remediat: WooCommerce Integration funcționează acum chiar dacă WooCommerce nu este activ în rețea și este activat doar în site-ul principal;

1.0.0 - Lansare inițială
