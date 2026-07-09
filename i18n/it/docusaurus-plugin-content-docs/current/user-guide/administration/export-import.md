---
title: Esporta e Importa
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Esporta e Importa {#export--import}

Ultimate Multisite 2.9.0 aggiunge uno strumento **Esporta e Importa** per siti singoli sotto **Strumenti > Esporta e Importa**. Usalo quando devi impacchettare un sito WordPress in un file ZIP, ripristinare quel ZIP o spostare un sito tra installazioni compatibili di Ultimate Multisite e WordPress per siti singoli.

## Permessi richiesti {#required-permissions}

Devi accedere come amministratore che può visualizzare il menu **Strumenti** di WordPress sul sito che stai esportando o importando. Su una rete multisito, usa un account amministratore di rete quando esporti o importi sottositi dagli strumenti Ultimate Multisite a livello di rete.

I download ZIP di esportazione vengono forniti tramite un endpoint di download autenticato, quindi mantieni attiva la sessione di amministratore fino al completamento del download e non condividere mai pubblicamente gli URL di download generati.

## Esportare un sito in un ZIP {#exporting-a-site-to-a-zip}

1. Nell'area amministrativa di WordPress del sito che vuoi copiare, vai su **Strumenti > Esporta e Importa**.
2. Apri l'area di esportazione e scegli il sito che vuoi impacchettare.
3. Se le opzioni sono disponibili, seleziona i contenuti opzionali da includere, come caricamenti (uploads), plugin e temi.
4. Avvia l'esportazione e attendi che il processo sia completato. I siti di grandi dimensioni potrebbero aver bisogno di finire in background prima che il ZIP sia pronto.
5. Scarica il ZIP completato dall'elenco delle esportazioni.

Conserva il ZIP in una posizione sicura. Potrebbe contenere contenuti del sito, impostazioni, file multimediali e asset di codice selezionati.

## Cosa include l'esportazione {#what-the-export-includes}

Un ZIP di esportazione può includere:

- I contenuti del database e la configurazione del sito selezionato.
- I file multimediali caricati, se sono inclusi i caricamenti (uploads).
- I plugin e i temi, se queste opzioni sono selezionate.
- I metadati di importazione utilizzati dallo strumento Esporta e Importa per ricostruire il sito sull'installazione di destinazione.

La dimensione esatta del ZIP dipende dalla quantità di contenuti multimediali, dai plugin e temi selezionati e dalla dimensione delle tabelle del database del sito.

## Importare un sito da un ZIP {#importing-a-site-from-a-zip}

1. Vai su **Strumenti > Esporta e Importa** sul sito WordPress di destinazione.
2. Apri l'area di importazione e carica il ZIP creato dallo strumento Esporta e Importa.
3. Inserisci un URL di sostituzione se il sito deve utilizzare un nuovo indirizzo, oppure lascia il campo vuoto per mantenere l'URL originale.
4. Scegli se eliminare il ZIP caricato dopo che l'importazione è terminata.
5. Clicca su **Avvia Importazione**.
6. Monitora l'importazione in sospeso fino al suo completamento. Usa **Annulla Importazione** solo se devi interrompere il processo prima del termine.
7. Controlla il sito importato prima di consentire traffico normale o accesso ai clienti.

Su un'installazione WordPress per siti singoli, importare un ZIP sostituisce il sito corrente con il sito importato. Crea un backup completo del sito di destinazione prima di iniziare e evita di avviare più importazioni per lo stesso sito contemporaneamente.

## Limitazioni e note di compatibilità {#limitations-and-compatibility-notes}

- Directory di caricamenti o librerie multimediali molto grandi possono generare file ZIP voluminosi. Conferma i limiti di upload PHP, i limiti di esecuzione, lo spazio su disco, la memoria e le impostazioni di timeout del server prima di esportare o importare siti di grandi dimensioni.
- Librerie multimediali molto grandi potrebbero dover essere spostate durante una finestra di manutenzione a basso traffico.
- L'installazione WordPress di destinazione dovrebbe eseguire versioni compatibili di WordPress, PHP, Ultimate Multisite, plugin e tema.
- Un'importazione per sito singolo sostituisce il sito di destinazione. Non è uno strumento di fusione (merge).
- Gli spostamenti da multisito a sito singolo e da sito singolo a multisito sono supportati solo quando l'ambiente di destinazione può eseguire i plugin, i temi, gli URL e i componenti Ultimate Multisite richiesti del sito esportato.
- Mantieni il ZIP privato. Potrebbe contenere contenuti del database, file caricati e dettagli di configurazione del sito esportato.

Per i flussi di lavoro di esportazione a livello di rete più vecchi, vedi [Site Export](/user-guide/administration/site-export).
