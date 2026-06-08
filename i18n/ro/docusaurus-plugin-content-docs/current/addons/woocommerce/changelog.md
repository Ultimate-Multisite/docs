---
title: Istoric de modificări al Integrarei WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Jurnal de modificări pentru integrarea cu WooCommerce

Versiunea 2.0.6 - Lansată pe 2026-01-16
* Îmbunătățire: Include abonamentele de bază în addon. Nu mai necesită extensia Woocommerce Subscriptions.

Versiunea 2.0.5 - Lansată pe 2026-01-09
* Îmbunătățire: Încarcă traducerea din API-ul glotpress.
* Corecție: A apărut o eroare fatală în unele page builders.
* Corecție: Redirecționare infinită atunci când clientul este membru al site-ului principal.

Versiunea 2.0.4 - Lansată pe 2025-11-14
* Adăugat: Traduceri pentru multe limbi în plus.
* Modificat: Repornifat în Ultimate Multisite: Woocommerce Integration.
* Adăugat: Compatibilitate cu Woocommerce 10.2.1.
* Adăugat: Compatibilitate cu Woocommerce Subscriptions 7.7.0.
* Corecție: Compatibilitate cu PHP 8.4
* Corecție: Redirecționare, dar doar când nu există pagina de cont WC.

Versiunea 2.0.3 - Lansată pe 2025-08-13
* Modificat: Permite actualizările automate cu noul marketplace.

Versiunea 2.0.2 - Lansată pe 2025-07-05
* Modificat: Repornifat în Multisite Ultimate: Woocommerce Integration.
* Adăugat: Compatibilitate cu Woocommerce 9.8.1.
* Adăugat: Compatibilitate cu Woocommerce Subscriptions 7.3.0.
* Corecție: Anularea unei abonări de către client.
* Corecție: Eroare fatală la utilizarea blocului de checkout.
* Îmbunătățire: Acum este compatibil cu tabelele personalizate de comenzi de înaltă performanță ale WooCommerce.
* Corecție: Anularea la checkout-ul WooCommerce poate încă să actualizeze o membresie.

Versiunea 2.0.1 - Lansată pe 2023-08-09

* Adăugat: Compatibilitate cu Woocommerce 7.9.0.
* Adăugat: Compatibilitate cu Woocommerce Subscriptions 5.3.0.
* Adăugat: Suport pentru actualizările de membrii.
* Adăugat: Notificări despre perioadele de probă și taxele de setup în Woocommerce.
* Adăugat: Identificarea produselor Ultimate Multisite WooCommerce folosind o valoare meta.
* Adăugat: Am inserat o corecție unică pentru a marca toate produsele WooCommerce legate de Ultimate Multisite.
* Adăugat: Am eliminat produsele create de Ultimate Multisite din lista WooCommerce.
* Îmbunătățire: Am creat o reducere WooCommerce non-recurentă pentru a fi aplicată în coș.
* Îmbunătățire: Am restaurat reducerea recurentă pe produsul WooCommerce.
* Îmbunătățire: Am adăugat o etichetă de reducere recurentă pe produsul WooCommerce.
* Îmbunătățire: Am asigurat tipul de produs la checkout.
* Corecție: Am menținut statusul de membru în timpul procesului de degradare.
* Corecție: Am verificat dacă există o abonare pentru a evita erorile în timpul procesului de anulare.
* Corecție: Am adăugat data de începere a abonării pentru utilizare în abonamentele WooCommerce.
* Intern: Am implementat un nou proces de build PHP 8.1.

Versiunea 2.0.0 - Reescrătare completă.

* Adăugat: Metoda de procesare a anulării pentru a elimina abonarea woo atunci când se schimbă gateway-ul sau se anulează membrii;
* Adăugat: Handler pentru degradarea și actualizarea membrilor;
* Îmbunătățire: Încarcă dependențele WooCommerce pe formularul de actualizare al clientului în subsites pentru a permite actualizarea contului;
* Îmbunătățire: Corectă încărcarea coșului WooCommerce dacă nu există;
* Îmbunătățire: Asigură că suntem pe tabelele site-ului principal atunci când procesăm un checkout;
* Îmbunătățire: Face ca comanda de reînnoire Ultimo să se bazeze pe valoarea abonamentului WooCommerce și nu pe ultima plată;
* Corecție: Navighează la link-ul butonului WU Membership;
* Corecție: Setază comanda Ultimo ca fiind plătită când reînnoirea abonamentului WooCommerce a fost plătită;
* Build: Adăugare MPB ca builder;

Versiunea 2.0.0-beta-5 - Lansată pe 2022-01-21

* Intern: Adăugat generator de hooks și filtre;
* Intern: Adăugat stub-uri Ultimate Multisite pentru calitatea vieții dezvoltatorului;
* Corectat: Previne crearea de produse multiple când nu este necesar;

Versiunea 2.0.0-beta.4 - 2021-09-23

* Corecție: Necesită ca WooCommerce să fie activ la nivel de rețea, nu doar pe site-ul principal;
* Îmbunătățire: Adăugat un filtru care permite ca addon-ul să fie folosit ca mu-plugin;

Versiunea 2.0.0-beta.3 - 2021-05-28

* Corecție: Controlul accesului la dashboard era prea agresiv;
* Îmbunătățire: Adăugat link-uri de ajutor WooCommerce în meniul superior Ultimate Multisite;

Versiunea 2.0.0-beta.2 - 2021-05-04

* Îmbunătățire: Creează plăți în așteptare pe Ultimo la crearea comenzii de reînnoire WCS;
* Îmbunătățire: Umple câmpurile de facturare cu datele clientului Ultimate Multisite;
* Îmbunătățire: Adaugă câmpurile de facturare pentru gateway-uri;

Versiunea 2.0.0-beta.1 - 2021-05-04

* Lansare beta inițială

-- Versiuni Legacy --

Versiunea 1.2.6 - 26/03/2020

* Corectat: Mică incompatibilitate cu versiunile mai noi de WooCommerce Subscriptions;

Versiunea 1.2.5 - 26/08/2019

* Corectat: Eroare din lansarea anterioară;

Versiunea 1.2.4 - 22/08/2019

* Îmbunătățit: Adăugat un buton de redirecționare către ecranul de checkout WooCommerce imediat după integrare;

Versiunea 1.2.3 - 26/05/2019

* Corectat: Email-ul de plată pentru WooCommerce a dispărut în unele cazuri de margine;

Versiunea 1.2.2 - 27/02/2019

* Adăugat: Suport pentru taxele de setup în integrarea WooCommerce Subscription;

Versiunea 1.2.1 - 17/11/2018

* Corectat: Probleme de compatibilitate cu versiunea 1.9.0 a Ultimate Multisite;

Versiunea 1.2.0 - 10/09/2018

* Îmbunătățit: URL-ul de actualizare pentru addon-uri;
* Adăugat: Suport beta pentru WooCommerce Subscription;

Versiunea 1.1.2 - 11/02/2018

* Corectat: Link-ul către Pay este generat dinamic pentru a răspunde schimbărilor de endpoint-uri WooCommerce;
* Îmbunătățit: Acum forțăm statusul "completed" pentru comenzile noastre când se apelează `payment_completed` pentru a ne asigura că hook-urile de reînnoire rulează când ar trebui;

Versiunea 1.1.1 - 24/01/2018

* Corectat: Acum verifică și dacă WooCommerce a fost doar activat pe site-ul principal;
* Corectat: Inclus over-loadings pentru a permite crearea comenzilor să includă accizele;

Versiunea 1.1.0 - 04/11/2017

* Corectat: Acum eticheta butonului de integrare se schimbă efectiv pentru a reflecta setările. Necesită Ultimate Multisite 1.5.0;
* Corectat: Integrarea WooCommerce funcționează acum chiar dacă WooCommerce nu este activ la nivel de rețea și este activat doar pe site-ul principal;

1.0.0 - Lansare inițială
