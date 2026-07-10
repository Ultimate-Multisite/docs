---
title: Registro modifiche IVA
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Changelog VAT {#vat-changelog}

Versione 1.0.7 - Rilasciata il 2026-02-03

* Correzione: i numeri VAT tedeschi (DE) non superavano la validazione a causa di errori MS_MAX_CONCURRENT_REQ del servizio VIES SOAP. Passaggio dalla API SOAP legacy alla API REST ufficiale EU VIES per una validazione più affidabile.
* Correzione: i numeri VAT ora vengono accettati quando il servizio VIES è temporaneamente non disponibile, invece di essere rifiutati erroneamente. Viene creata una voce di log per una revisione successiva.
* Correzione: il campo VAT/Tax ID ora è visibile per tutti i paesi, non solo per i membri dell'UE. I tax ID non UE (ad es. i numeri CHE svizzeri) vengono memorizzati per la visualizzazione in fattura senza validazione VIES.
* Correzione: la ricerca del prefisso VAT per Grecia (GR), Monaco (MC) e Isola di Man (IM) era interrotta a causa di una logica di ricerca nell'array errata.
* Miglioramento: rimossa la dipendenza di sviluppo wp-cli-bundle non necessaria, che poteva causare errori fatali se usata insieme all'addon Site Exporter.
* Miglioramento: aggiunta una suite completa di unit test (53 test).

Versione 1.0.6 - Rilasciata il 2026-01-25

* Correzione: le transazioni B2B nazionali ora applicano correttamente l'IVA. Secondo le regole IVA dell'UE, l'inversione contabile si applica solo alle transazioni B2B transfrontaliere, non quando il paese del cliente corrisponde al paese dell'azienda.

Versione 1.0.5 - Rilasciata il 2026-01-22

* Correzione: addon non caricato o non funzionante correttamente.
* Modifica: cambiata la fonte dei dati delle aliquote VAT da euvatrates.com al repository ibericode/vat-rates per dati più affidabili e mantenuti attivamente.
* Correzione: corretto un errore di battitura nel valore dell'opzione super_reduced_rates.
* Miglioramento: aggiunti controlli null per la gestione del codice paese per prevenire errori.
* Modifica: rimossi i file di traduzione inclusi a favore degli aggiornamenti automatici tramite Traduttore.

Versione: 1.0.3 - Rilasciata il 2025-09-28

* Rinominato il prefisso in ultimate-multisite; aggiornato il text domain; incremento di versione.

Versione 1.0.0-beta.4 - 2021-09-24

* Aggiunto: filtro wp_ultimo_skip_network_active_check per configurazioni basate su mu-plugins;

Versione 1.0.0 - 05/08/2021 - Rilascio iniziale
