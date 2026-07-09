---
title: Changelog di Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Registro modifiche Domain Seller

Versione 1.3.0 - Rilasciata il 2026-06-02
- Nuovo: Aggiunto un avviso nell'amministrazione di rete quando il saldo del rivenditore HostAfrica diventa troppo basso
- Nuovo: Aggiunta la mappatura automatica dei domini appena registrati al sito di rete
- Correzione: Applicati i requisiti dei campi del registrante solo durante la registrazione di un nuovo dominio
- Correzione: Resi ignorabili gli avvisi di monitoraggio del saldo
- Correzione: Garantito che i dettagli di fatturazione del registrante WooCommerce vengano preservati
- Correzione: Applicati i requisiti di contatto del registrante durante la registrazione
- Correzione: Impedita la creazione di prodotti di registrazione domini con markup dello 0%
- Correzione: Preservate le selezioni dei domini e i prezzi durante il flusso della sessione di checkout
- Correzione: Migliorata la visualizzazione della valuta dei prezzi dei domini HostAfrica
- Correzione: Migliorato il comportamento form-action del checkout per prevenire discrepanze nelle query-var di WP-core
- Migliorato: Collegata la documentazione di configurazione del rivenditore HostAfrica nella guida alla configurazione

Versione 1.2.0 - Rilasciata il 2026-05-25
- Nuovo: Aggiunto HostAfrica come integrazione per la vendita di domini con supporto per checkout, procedura guidata di configurazione, ricerca, TLD/prezzi, registrazione, rinnovo, trasferimento, nameserver, DNS, codice EPP, blocco registrar e protezione ID
- Nuovo: Aggiunto Openprovider come integrazione per la vendita di domini con supporto per prezzi reseller, registrazione, rinnovo, trasferimento, nameserver, DNS, codice EPP, blocco registrar, privacy WHOIS e sincronizzazione TLD
- Nuovo: Aggiunto Hostinger come integrazione per la vendita di domini usando il token API Hostinger condiviso dall’integrazione core per verifiche di disponibilità, registrazione, aggiornamenti nameserver, blocco registrar e privacy WHOIS
- Migliorato: Aggiunti docblock per azioni e filtri del ciclo di vita del dominio per indicazioni di integrazione per sviluppatori
- Migliorato: Aggiornati i metadati di compatibilità del plugin a WordPress 7.0 nel readme dell’addon
- Migliorato: Aggiornati i template di pianificazione usati per il coordinamento delle prossime release

Versione 1.1.0 - Rilasciata il 2026-05-08
- Nuovo: Creazione di record DNS (add_dns_record) implementata per i registrar ResellerClub, Enom e OpenSRS
- Correzione: Il parser dei record DNS predefiniti ora tollera i token {DOMAIN} e {SITE_URL}
- Correzione: Slug dei campi di checkout per la selezione del dominio dotati di namespace per evitare collisioni con site_url

Versione 1.0.8 - Rilasciata il 2026-05-07
- Correzione: I prezzi dei domini ResellerClub ora recuperano i costi live dall’endpoint API corretto

Versione 1.0.7 - Rilasciata il 2026-05-06
* Correzione: ResellerClub test_connection invia il parametro tlds richiesto (#224)

Versione 1.0.6 - Rilasciata il 2026-05-05
* Correzione: la registrazione dei domini ResellerClub ora funziona correttamente con una gestione migliorata delle risposte API e un instradamento dei provider guidato dal registro
* Correzione: miglioramenti UX alla pagina admin Register Domain
* Rimosso: integrazione del registrar CyberPanel

Versione 1.0.5 - Rilasciata il 2026-04-02
* Nuovo: integrazione del registrar GoDaddy per la registrazione e la gestione dei domini
* Nuovo: integrazione del registrar NameSilo
* Nuovo: integrazione del registrar ResellerClub
* Nuovo: verifica automatica del dominio di invio SES all'acquisto e alla mappatura del dominio
* Correzione: protezione delle costanti del plugin dalla ridefinizione nell'ambiente di test
* Correzione: i flag MySQL vengono suddivisi correttamente per parola in install-wp-tests.sh

Versione 1.0.4 - Rilasciata il 2026-03-14
* **Correzione:** alcune risorse css mancanti
* **Correzione:** errore relativo a tld non disponibili

Versione 1.0.3 - Rilasciata il 2026-03-09
* **Correzione:** errori delle proprietà reattive Vue (domain_option, selected_domain, domain_provider) quando si usa il template di signup legacy con lo shortcode di checkout
* **Correzione:** disallineamento del campo di input del sottodominio e testo sovradimensionato nel campo di checkout per la selezione del dominio
* **Correzione:** nasconde il blocco di anteprima "Your URL will be" quando è presente il campo di selezione del dominio

Versione 1.0.2 - Rilasciata il 2026-03-01
* **Migliorato:** Rimosse le impostazioni di markup globali dalla pagina delle impostazioni — il prezzo ora è esclusivamente per prodotto
* **Migliorato:** Aggiunto il link "Manage Domain Products" nella pagina delle impostazioni per una navigazione rapida
* **Migliorato:** Descrizioni dei campi e tooltip più chiari per le impostazioni dei prodotti dominio (catch-all vs specifiche per TLD, tipi di markup, prezzo introduttivo)
* **Migliorato:** Descrizioni migliori in tutta la pagina delle impostazioni (ricerca TLD, rinnovi, DNS, notifiche)

Versione 1.0.1 - Rilasciata il 2026-02-27

* **Nuovo:** strumento di importazione TLD per la gestione in blocco dei prezzi
* **Nuovo:** supporto per prezzi introduttivi per i prodotti dominio
* **Nuovo:** suite di test E2E con Cypress
* **Nuovo:** template email per le notifiche del ciclo di vita del dominio
* **Nuovo:** campi indirizzo del registrante nella modale di registrazione dominio admin, precompilati dalle impostazioni
* **Nuovo:** interfaccia di gestione DNS cliente con supporto per aggiunta, modifica ed eliminazione dei record
* **Nuovo:** opzione di checkout "Bring your own domain" con mappatura automatica del dominio
* **Nuovo:** generazione automatica dell’URL del sito dal nome di dominio durante il checkout
* **Nuovo:** configurazione di nameserver predefiniti e record DNS nelle impostazioni
* **Nuovo:** dettagli di registrazione del dominio e gestione DNS nella pagina principale di modifica dominio
* **Nuovo:** la procedura guidata di configurazione crea automaticamente un prodotto dominio predefinito con impostazioni predefinite sensate
* **Nuovo:** sincronizzazione TLD automatica giornaliera via cron su tutti i provider configurati
* **Nuovo:** protezione privacy WHOIS con configurazione per prodotto (sempre attiva, scelta del cliente o disabilitata)
* **Nuovo:** checkbox per la privacy WHOIS al checkout con visualizzazione del prezzo e supporto alla modalità scura
* **Nuovo:** pagina admin Register Domain per la registrazione manuale dei domini
* **Nuovo:** aggiornamenti automatici del plugin tramite il server di aggiornamento Ultimate Multisite
* **Nuovo:** scheda filtro per tipo di prodotto dominio nella tabella elenco prodotti con stile badge viola
* **Nuovo:** campi contatto del registrante (nome, indirizzo, città, stato, codice postale, paese, telefono) nel modulo di checkout dominio

* **Nuovo:** Validazione dei campi del registrante prima di chiamare l'API del registrar, con messaggi di errore chiari
* **Nuovo:** Canali di log specifici per provider per gli eventi di registrazione dei domini (es. domain-seller-namecheap.log)
* **Nuovo:** Campi di contatto del registrante nel modulo principale di registrazione/signup e checkout (mostrati durante la registrazione di un dominio)
* **Migliorato:** Sostituito il campo di checkout Ricerca dominio con un campo unificato Selezione dominio che supporta le schede sottodominio, registrazione e dominio esistente
* **Migliorato:** Le impostazioni del prodotto dominio vengono renderizzate inline nella pagina di modifica del prodotto tramite il sistema di widget core
* **Migliorato:** Le informazioni sul dominio del cliente si agganciano al widget core di mappatura domini invece che a un metabox autonomo
* **Migliorato:** Wizard di importazione TLD semplificato con sincronizzazione con un clic da tutti i provider
* **Migliorato:** La disponibilità dei domini Namecheap usa una chiamata API batch per una ricerca più rapida
* **Migliorato:** L'API dei prezzi Namecheap usa parametri e parsing della risposta corretti
* **Migliorato:** Archiviazione TLD centralizzata in un'unica opzione di network
* **Migliorato:** Logging delle attività dei domini per modifiche DNS, trasferimenti e applicazione della configurazione
* **Migliorato:** Sincronizzazione TLD completa per OpenSRS usando la lista master IANA con validazione batch
* **Migliorato:** Sincronizzazione TLD completa per Namecheap con richieste API paginate
* **Migliorato:** Sostituite le classi provider legacy con il pattern Integration Registry
* **Migliorato:** Pannello impostazioni con configurazione DNS e trasferimenti
* **Migliorato:** Numeri di telefono formattati automaticamente nel formato registrar +CC.NNN

* **Migliorato:** La validazione del campo telefono rimuove i caratteri di formattazione prima dell’invio
* **Migliorato:** Il requisito di versione è stato aggiornato a Ultimate Multisite 2.4.12 con un avviso più chiaro
* **Migliorato:** Il workflow CI usa il checkout corretto sia per l’addon sia per il plugin core
* **Migliorato:** prepare_registrant_info() legge dai meta utente salvati al checkout con fallback all’indirizzo di fatturazione
* **Corretto:** AJAX di ricerca dominio non funzionante per utenti non connessi durante il checkout
* **Corretto:** AJAX dei prezzi dei domini non funzionante per utenti non connessi durante il checkout
* **Corretto:** Errore fatale di ridichiarazione della classe Spyc durante l’esecuzione di comandi WP-CLI
* **Corretto:** Timeout dell’API sandbox di Namecheap troppo breve
* **Corretto:** Testo del pulsante Select nella ricerca dominio non visibile su sfondo verde
* **Corretto:** Registrazione del dominio non riuscita con errore "RegistrantFirstName is Missing" a causa di informazioni di contatto mancanti
* **Corretto:** Record del dominio creato con blog_id=0 quando il sito non esisteva ancora al momento del checkout
* **Corretto:** Impostazione dei TLD predefiniti restituita come stringa invece che come array analizzato
* **Rimosso:** Pagina admin autonoma Domain Management — ora gestita tramite le pagine core dei domini

Versione 1.0.0 - Rilasciata il 2025-09-28

**Riscrittura principale per Ultimate Multisite v2**

* **Nuovo:** Riscrittura completa con architettura moderna PHP 7.4+
* **Nuovo:** Integrazione fluida con il sistema di checkout Ultimate Multisite v2
* **Nuovo:** Gestione dei prodotti dominio con opzioni di prezzo flessibili
* **Nuovo:** Architettura di supporto per più provider di domini
* **Nuovo:** Integrazione di rinnovo automatico e subscription
* **Nuovo:** Interfaccia di gestione dei domini per i clienti
* **Nuovo:** Monitoraggio e log dei domini per gli admin
* **Nuovo:** Supporto coupon per i prodotti dominio
* **Nuovo:** Gestione completa delle impostazioni
* **Nuovo:** Codebase estendibile e orientata agli sviluppatori
* **Migliorato:** Provider OpenSRS aggiornato con supporto completo delle funzionalità
* **Migliorato:** UI moderna coerente con Ultimate Multisite v2
* **Risolto:** Tutto il codice v1 deprecato aggiornato agli standard v2
* **Rimosso:** Compatibilità legacy v1 (breaking change)

### Versioni precedenti (v1 Legacy)

### Versione 0.0.3 - 20/08/2019

* Risolto: Incompatibilità con Groundhogg CRM
* Nota: Questa è stata l’ultima release compatibile con v1

### Versione 0.0.2 - 07/12/2018

* Risolto: Rimosso il campo License Key
* Risolto: Schede del plan mancanti quando il plugin della funzionalità è attivo
* Migliorato: Aggiunto un pulsante salta nel campo di registrazione

### Versione 0.0.1 - Release iniziale

* Integrazione OpenSRS di base per WP Ultimo v1
* Ricerca e registrazione di domini semplici
* Permessi dominio basati sul plan
