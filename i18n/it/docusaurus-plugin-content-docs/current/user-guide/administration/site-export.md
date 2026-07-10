---
title: Esportazione del sito
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Esportazione del Sito {#site-export}

La pagina di amministrazione **Esportazione del Sito** (Site Export) permette agli amministratori di rete di impacchettare un singolo sito, o l'intera rete, in un archivio scaricabile per scopi di migrazione, backup o passaggio di consegne.

## Esportare un singolo sito {#exporting-one-site}

Vai su **Ultimate Multisite > Site Export** e scegli **Genera nuova Esportazione del Sito** (Generate new Site Export). Seleziona il sottosito che desideri esportare, quindi scegli se l'archivio deve includere i file di upload, i plugin e i temi.

Quando l'esportazione è completata, scarica il file ZIP dalla lista **Esportazioni Esistenti** (Existing Exports). Gli ZIP di esportazione ora includono un `index.php` auto-avviante e un `readme.txt`, in modo che l'archivio possa essere caricato su un nuovo host e avviato senza dover prima installare un plugin importatore separato.

## Esportare l'intera rete {#exporting-the-whole-network}

Utilizza **Esportazione di Rete** (Network Export) sulla pagina Site Export quando hai bisogno di un unico archivio contenente tutti i sottositi della rete. Questo è utile prima delle migrazioni di hosting, degli esercizi di ripristino da disastro o dei ricostruzioni di staging, dove ogni sottosito deve viaggiare insieme.

Poiché un'esportazione di rete può essere molto più grande di un'esportazione di singolo sito, eseguila durante un periodo di basso traffico e conferma che lo spazio di archiviazione di destinazione abbia abbastanza spazio libero per gli upload, i plugin, i temi e i file ZIP generati.

### Bundle di Importazione di Rete {#network-import-bundles}

A partire da Ultimate Multisite 2.12.0, Site Exporter può generare **bundle di importazione di rete** (network import bundles): archivi specializzati progettati per un ripristino di rete semplificato. Un bundle di importazione di rete contiene tutti i file e i metadati necessari per ripristinare più siti su una nuova installazione di rete.

#### Generare un Bundle di Importazione di Rete {#generating-a-network-import-bundle}

1. Vai su **Ultimate Multisite > Site Export**
2. Clicca su **Genera nuova Esportazione di Rete** (Generate new Network Export)
3. Seleziona **Bundle di Importazione di Rete** (Network Import Bundle) come tipo di esportazione
4. Scegli se includere upload, plugin e temi
5. Clicca su **Genera** (Generate)
6. Scarica il bundle ZIP dalla lista **Esportazioni Esistenti** (Existing Exports)

#### Ripristinare da un Bundle di Importazione di Rete {#restoring-from-a-network-import-bundle}

Per ripristinare i siti da un bundle di importazione di rete:

1. Installa Ultimate Multisite sul tuo host di destinazione
2. Completa la procedura guidata di configurazione multisite
3. Vai su **Ultimate Multisite > Site Export** sulla nuova rete
4. Clicca su **Importa Bundle di Rete** (Import Network Bundle)
5. Carica il file ZIP del bundle di importazione di rete
6. Segui le istruzioni di importazione sullo schermo
7. Il processo di importazione ripristinerà tutti i siti, i loro contenuti e le loro configurazioni

I bundle di importazione di rete preservano:
- Contenuti dei siti (articoli, pagine, tipi di contenuto personalizzati)
- Impostazioni e opzioni del sito
- Ruoli e permessi utente
- Plugin e temi (se inclusi nel bundle)
- Upload multimediali (se inclusi nel bundle)
- Tabelle e dati personalizzati del database

## Installare un ZIP di esportazione auto-avviante {#installing-a-self-booting-export-zip}

Per ripristinare un ZIP auto-avviante su un host nuovo:

1. Carica i contenuti dello ZIP esportato nella root web di destinazione.
2. Apri l'`index.php` caricato in un browser.
3. Segui le istruzioni di installazione sullo schermo fornite dal pacchetto di esportazione bundle.
4. Rivedi il `readme.txt` bundle per eventuali note specifiche sull'esportazione prima di rimuovere i file temporanei.

Per dettagli sull'installazione e l'importazione specifici per i plugin aggiuntivi, consulta la [documentazione del plugin Site Exporter](/addons/site-exporter).

Per lo strumento per singolo sito aggiunto in Ultimate Multisite 2.9.0, consulta [Export & Import](/user-guide/administration/export-import).
