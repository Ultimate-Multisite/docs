---
title: Registro delle modifiche dell'integrazione WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Changelog di integrazione WooCommerce

Versione 2.0.6 - Rilasciata il 2026-01-16
* Miglioramento: Includere le sottoscrizioni core nell'addon. Non è più necessario l'estensione Woocommerce Subscriptinos.
* Miglioramento: Caricare le traduzioni dall'API glotpress.
* Correzione: Errore fatale in alcuni page builders.
* Correzione: Redirect infinito quando il cliente è membro del sito principale.

Versione 2.0.5 - Rilasciata il 2026-01-09
* Aggiunto: Traduzioni per molte più lingue.
* Modificato: Rinominato in Ultimate Multisite: Woocommerce Integration.
* Aggiunto: Compatibilità con Woocommerce 10.2.1.
* Aggiunto: Compatibilità con Woocommerce Subscriptions 7.7.0.
* Correzione: Compatibilità con PHP 8.4
* Correzione: Redirect ma quando non esiste la pagina account WC.

Versione 2.0.4 - Rilasciata il 2025-11-14
* Aggiunto: Traduzioni per molte più lingue.
* Modificato: Rinominato in Ultimate Multisite: Woocommerce Integration.
* Aggiunto: Compatibilità con Woocommerce 10.2.1.
* Aggiunto: Compatibilità con Woocommerce Subscriptions 7.7.0.
* Correzione: Compatibilità con PHP 8.4
* Correzione: Redirect ma quando non esiste la pagina account WC.

Versione 2.0.3 - Rilasciata il 2025-08-13
* Modificato: Abilitati aggiornamenti automatici con il nuovo marketplace.

Versione 2.0.2 - Rilasciata il 2025-07-05
* Modificato: Rinominato in Multisite Ultimate: Woocommerce Integration.
* Aggiunto: Compatibilità con Woocommerce 9.8.1.
* Aggiunto: Compatibilità con Woocommerce Subscriptions 7.3.0.
* Correzione: Cancellazione di una sottoscrizione da parte del cliente.
* Correzione: Errore fatale quando si utilizza il blocco checkout.
* Miglioramento: Ora compatibile con le tabelle personalizzate ad alte prestazioni di Woocommerce.
* Correzione: La cancellazione al checkout di WooCommerce può ancora aggiornare un abbonamento.

Versione 2.0.1 - Rilasciata il 2023-08-09
* Aggiunto: Compatibilità con Woocommerce 7.9.0.
* Aggiunto: Compatibilità con Woocommerce Subscriptions 5.3.0.
* Aggiunto: Supporto per gli aggiornamenti di membership.
* Aggiunto: Avvisi su prove e costi di configurazione in Woocommerce.
* Aggiunto: Identificazione dei prodotti Woocommerce Ultimate Multisite con un valore meta.
* Aggiunto: Inserito un fix una tantum per contrassegnare tutti i prodotti Woocommerce correlati a Ultimate Multisite.
* Aggiunto: Rimosso i prodotti creati da Ultimate Multisite dalla lista Woocommerce.
* Miglioramento: Creato uno sconto Woocommerce non ricorrente da applicare al carrello.
* Miglioramento: Ripristinato lo sconto ricorrente al prodotto Woocommerce.
* Miglioramento: Aggiunta una etichetta di sconto ricorrente al prodotto Woocommerce.
* Miglioramento: Garantito il tipo di prodotto al checkout.
* Correzione: Mantenuto lo stato di membership durante il processo di downgrade.
* Correzione: Verificato se una sottoscrizione esiste per evitare errori durante il processo di cancellazione.
* Correzione: Aggiunta la data di inizio sottoscrizione da utilizzare nelle sottoscrizioni Woocommerce.
* Interno: Implementato un nuovo processo di build PHP 8.1.

Versione 2.0.0 - Riscrittura completa.
* Aggiunto: Metodo di cancellazione del processo per rimuovere la sottoscrizione woo quando si cambia il gateway o si annulla la membership;
* Aggiunto: Gestore per downgrade e upgrade delle membership;
* Miglioramento: Caricare le dipendenze woocommerce sul modulo di aggiornamento cliente nei subsiti per consentire l'aggiornamento dell'account;
* Miglioramento: Caricare correttamente il carrello Woocommerce se non esiste;
* Miglioramento: Garantire di essere sulle tabelle del sito principale quando si processa un checkout;
* Miglioramento: Rendere l'ordine di rinnovo Ultimo basato sul valore dell'ordine di sottoscrizione Woocommerce e non dall'ultimo pagamento;
* Correzione: Vai al link del pulsante WU Membership;
* Correzione: Impostare l'ordine Ultimo come pagato quando il rinnovo delle sottoscrizioni Woocommerce è pagato;
* Build: Aggiungi MPB come builder;

Versione 2.0.0-beta-5 - Rilasciata il 2022-01-21
* Interno: Aggiunto generatore di hook e filtri;
* Interno: Aggiunti stubs Ultimate Multisite per la qualità della vita dello sviluppatore;
* Corretto: Prevenire la creazione di più prodotti quando non necessario;

Versione 2.0.0-beta.4 - 2021-09-23
* Correzione: richiedere che WooCommerce sia attivo in rete invece che solo sul sito principale;
* Miglioramento: aggiunto filtro per consentire all'addon di essere usato come mu-plugin;

Versione 2.0.0-beta.3 - 2021-05-28
* Correzione: il controllo di accesso alla dashboard era troppo aggressivo;
* Miglioramento: Aggiunti link di aiuto WooCommerce al top-menu di Ultimate Multisite;

Versione 2.0.0-beta.2 - 2021-05-04
* Miglioramento: crea pagamenti in sospeso su Ultimo al momento della creazione dell'ordine di rinnovo WCS;
* Miglioramento: precompila i campi di fatturazione con i dati del cliente Ultimate Multisite;
* Miglioramento: aggiunge nuovamente i campi di fatturazione per i gateway;

Versione 2.0.0-beta.1 - 2021-05-04
* Rilascio beta iniziale

-- Versioni Legacy --

Versione 1.2.6 - 26/03/2020
* Corretto: Piccola incompatibilità con le versioni più recenti di WooCommerce Subscriptions;

Versione 1.2.5 - 26/08/2019
* Corretto: Errore nella release precedente;

Versione 1.2.4 - 22/08/2019
* Migliorato: Aggiunta opzione per reindirizzare allo schermo di checkout WooCommerce subito dopo l'integrazione;

Versione 1.2.3 - 26/05/2019
* Corretto: Email di pagamento per WooCommerce scomparsa in alcuni casi limite;

Versione 1.2.2 - 27/02/2019
* Aggiunto: Supporto per i costi di configurazione nell'integrazione WooCommerce Subscription;

Versione 1.2.1 - 17/11/2018
* Corretto: Problemi di compatibilità con Ultimate Multisite versione 1.9.0;

Versione 1.2.0 - 10/09/2018
* Migliorato: Nuovo URL di aggiornamenti per gli addon;
* Aggiunto: Supporto beta per WooCommerce Subscription;

Versione 1.1.2 - 11/02/2018
* Corretto: Link a Pay generato dinamicamente per rispondere ai cambiamenti degli endpoint WooCommerce;
* Migliorato: Ora forziamo lo stato completato per i nostri ordini quando payment_completed è chiamato per assicurarci che i nostri hook di rinnovo vengano eseguiti quando dovrebbero;

Versione 1.1.1 - 24/01/2018
* Corretto: Ora controlla anche se WooCommerce è solo attivato sul sito principale;
* Corretto: Includi sovraccarichi per consentire la creazione di ordini con tasse;

Versione 1.1.0 - 04/11/2017
* Corretto: Ora l'etichetta del pulsante di integrazione cambia effettivamente per riflettere le impostazioni. Richiede Ultimate Multisite 1.5.0;
* Corretto: WooCommerce Integration ora funziona anche se WooCommerce non è attivo in rete e attivato solo nel sito principale;

1.0.0 - Rilascio Iniziale
