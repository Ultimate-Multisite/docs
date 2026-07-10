---
title: Registro delle modifiche dell'integrazione WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Registro delle modifiche dell’integrazione WooCommerce {#woocommerce-integration-changelog}

Versione 2.2.0 - Rilasciata il 2026-07-01
* Nuovo: gli importi delle imposte di Ultimate Multisite ora appaiono come righe di commissione WooCommerce separate al checkout, rendendo i totali delle imposte più chiari prima del pagamento.
* Nuovo: aggiunta un’impostazione opzionale "Suspend Memberships Immediately on Failed Renewals" e il filtro `wu_woo_suspend_on_payment_failure` per i siti che vogliono sospendere in caso di rinnovo non riuscito durante la finestra di nuovo tentativo di WooCommerce Subscriptions.
* Correzione: riconciliati gli stati di WooCommerce Subscription che potevano rimanere non sincronizzati con gli abbonamenti Ultimate Multisite dopo rinnovi non riusciti o recuperati.
* Correzione: aggiunta la valuta del negozio WooCommerce all’elenco delle valute di Ultimate Multisite quando mancava.
* Correzione: conservati i dettagli di fatturazione del cliente durante il reindirizzamento degli abbonati al checkout WooCommerce.
* Migliorato: aggiunta compatibilità con Jetpack Autoloader 5.
* Migliorato: ripulita la generazione del pacchetto di rilascio in modo che gli zip di GitHub e del marketplace evitino directory di staging annidate e file di sviluppo.

Versione 2.0.6 - Rilasciata il 2026-01-16
* Miglioramento: include gli abbonamenti core nell’addon. Non richiede più l’estensione WooCommerce Subscriptinos.

Versione 2.0.5 - Rilasciata il 2026-01-09
* Miglioramento: carica le traduzioni dall’API glotpress.
* Correzione: errore fatale in alcuni page builder.
* correzione: reindirizzamento infinito quando il cliente è membro del sito principale.

Versione 2.0.4 - Rilasciata il 2025-11-14
* Aggiunto: traduzioni per molte altre lingue.
* Modificato: rinominato in Ultimate Multisite: Woocommerce Integration.
* Aggiunto: compatibilità con WooCommerce 10.2.1.
* Aggiunto: compatibilità con WooCommerce Subscriptions 7.7.0.
* Correzione: compatibilità con PHP 8.4
* Correzione: reindirizzamento quando non esiste alcuna pagina Account WC.

Versione 2.0.3 - Rilasciata il 2025-08-13
* Modificato: abilitati gli aggiornamenti automatici con il nuovo marketplace.

Versione 2.0.2 - Rilasciata il 2025-07-05
* Modificato: rinominato in Multisite Ultimate: Woocommerce Integration.
* Aggiunto: compatibilità con WooCommerce 9.8.1.
* Aggiunto: compatibilità con WooCommerce Subscriptions 7.3.0.
* Correzione: annullamento di un abbonamento da parte del cliente.
* Correzione: errore fatale durante l’uso del blocco di checkout.
* Miglioramento: ora compatibile con le tabelle degli ordini personalizzate ad alte prestazioni di WooCommerce.
* Correzione: l’annullamento al checkout WooCommerce poteva comunque aggiornare un abbonamento.

Versione 2.0.1 - Rilasciata il 2023-08-09

* Aggiunto: compatibilità con WooCommerce 7.9.0.
* Aggiunto: compatibilità con WooCommerce Subscriptions 5.3.0.
* Aggiunto: supporto per gli aggiornamenti degli abbonamenti.
* Aggiunto: avvisi su prove e costi di configurazione in WooCommerce.
* Aggiunto: identificazione dei prodotti Ultimate Multisite WooCommerce con un valore meta.
* Aggiunto: inserita una correzione una tantum per contrassegnare tutti i prodotti WooCommerce correlati a Ultimate Multisite.
* Aggiunto: rimossi i prodotti creati da Ultimate Multisite dall’elenco WooCommerce.
* Miglioramento: creato uno sconto WooCommerce non ricorrente da applicare al carrello.
* Miglioramento: ripristinato lo sconto ricorrente sul prodotto WooCommerce.
* Miglioramento: aggiunta un’etichetta di sconto ricorrente al prodotto WooCommerce.
* Miglioramento: garantito il tipo di prodotto al checkout.
* Correzione: mantenuto lo stato dell’abbonamento durante il processo di downgrade.
* Correzione: verificata l’esistenza di un abbonamento per evitare errori durante il processo di annullamento.
* Correzione: aggiunta la data di inizio dell’abbonamento da usare in WooCommerce Subscriptions.
* Interno: implementato un nuovo processo di build PHP 8.1.

Versione 2.0.0 - Riscrittura completa.

* Aggiunto: metodo di elaborazione dell’annullamento per rimuovere l’abbonamento woo quando si cambia gateway o si annulla l’abbonamento;
* Aggiunto: gestore per eseguire downgrade e upgrade degli abbonamenti;
* Miglioramento: carica le dipendenze WooCommerce nel modulo di aggiornamento cliente nei sottositi per consentire l’aggiornamento dell’account;
* Miglioramento: carica correttamente il carrello WooCommerce se non esiste;
* Miglioramento: assicura che siamo sulle tabelle del sito principale quando si elabora un checkout;
* Miglioramento: crea l’ordine di rinnovo Ultimo in base al valore dell’ordine di abbonamento WooCommerce e non dall’ultimo pagamento;
* Correzione: link del pulsante WU Membership;
* Correzione: imposta l’ordine Ultimo come pagato quando il rinnovo di WooCommerce Subscriptions è stato pagato;
* Build: aggiunge MPB come builder;

Versione 2.0.0-beta-5 - Rilasciata il 2022-01-21

* Interno: aggiunto generatore di hook e filtri;
* Interno: aggiunti stub Ultimate Multisite per migliorare la qualità della vita degli sviluppatori;
* Corretto: impedita la creazione di più prodotti quando non necessario;

Versione 2.0.0-beta.4 - 2021-09-23

* Correzione: richiede che WooCommerce sia attivo a livello di rete invece che solo sul sito principale;
* Miglioramento: aggiunto filtro per consentire l’uso dell’add-on come mu-plugin;

Versione 2.0.0-beta.3 - 2021-05-28

* Correzione: il controllo di accesso alla dashboard era troppo aggressivo;
* Miglioramento: aggiunti link di aiuto WooCommerce al menu superiore di Ultimate Multisite;

Versione 2.0.0-beta.2 - 2021-05-04

* Miglioramento: crea pagamenti in sospeso su Ultimo alla creazione dell’ordine di rinnovo WCS;
* Miglioramento: precompila i campi di fatturazione con i dati cliente di Ultimate Multisite;
* Miglioramento: aggiunge nuovamente i campi di fatturazione per i gateway;

Versione 2.0.0-beta.1 - 2021-05-04

* Rilascio beta iniziale

-- Versioni legacy --

Versione 1.2.6 - 26/03/2020

* Corretto: piccola incompatibilità con le versioni più recenti di WooCommerce Subscriptions;

Versione 1.2.5 - 26/08/2019

* Corretto: errore nella release precedente;

Versione 1.2.4 - 22/08/2019

* Migliorato: aggiunta opzione per reindirizzare immediatamente alla schermata di checkout WooCommerce dopo l’integrazione;

Versione 1.2.3 - 26/05/2019

* Corretto: l’email di pagamento per WooCommerce scompariva in alcuni casi limite;

Versione 1.2.2 - 27/02/2019

* Aggiunto: supporto ai costi di configurazione nell’integrazione WooCommerce Subscription;

Versione 1.2.1 - 17/11/2018

* Corretto: problemi di compatibilità con Ultimate Multisite versione 1.9.0;

Versione 1.2.0 - 10/09/2018

* Migliorato: nuovo URL degli aggiornamenti per gli add-on;
* Aggiunto: supporto beta a WooCommerce Subscription;

Versione 1.1.2 - 11/02/2018

* Corretto: link per pagare generato dinamicamente per rispondere alle modifiche agli endpoint WooCommerce;
* Migliorato: ora forziamo lo stato completato per i nostri ordini quando viene chiamato payment_completed per assicurarci che i nostri hook di rinnovo vengano eseguiti quando dovrebbero;

Versione 1.1.1 - 24/01/2018

* Corretto: ora verifica anche se WooCommerce è appena attivato sul sito principale;
* Corretto: inclusi gli override per consentire alla creazione degli ordini di includere le imposte;

Versione 1.1.0 - 04/11/2017

* Corretto: ora l'etichetta del pulsante di integrazione cambia effettivamente per riflettere le impostazioni. Richiede Ultimate Multisite 1.5.0;
* Corretto: WooCommerce Integration ora funziona anche se WooCommerce non è attivo sulla rete ed è attivato solo nel sito principale;

1.0.0 - Rilascio iniziale
