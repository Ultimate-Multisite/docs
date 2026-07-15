---
title: Migrazione da V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrazione da V1

## Ultimate Multisite è passato dalla sua famiglia originale di release 1.x alla famiglia di release 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versione 2.0 e successive è una riscrittura completa della codebase, il che significa che c'è pochissimo in comune tra la vecchia versione e quella nuova. Per questo motivo, quando esegui l'upgrade da 1.x a 2.x, i tuoi dati dovranno essere migrati in un formato che le nuove versioni possano comprendere.

Fortunatamente, Ultimate Multisite 2.0+ **include un migratore** integrato nel core, in grado di rilevare i dati della vecchia versione e convertirli nel nuovo formato. Questa migrazione avviene durante il **Setup Wizard** della versione 2.0+.

Questa lezione spiega come funziona il migratore, cosa fare in caso di errore e come risolvere i problemi che potrebbero presentarsi durante questo processo.

_**IMPORTANTE: Prima di iniziare l'upgrade dalla versione 1.x alla versione 2.0, assicurati di creare un backup del database del tuo sito**_

## Primi passi {#first-steps}

Il primo passo è scaricare il file .zip del plugin e installare la versione 2.0 sulla tua dashboard di amministrazione del network.

Dopo aver [installato e attivato la versione 2.0](../getting-started/installing-ultimate-multisite.md), il sistema rileverà automaticamente che il tuo Multisite è in esecuzione sulla versione legacy e vedrai questo messaggio nella parte superiore della pagina del plugin.

_**NOTA:** Se hai Ultimate Multisite 1.x installato sul tuo Multisite, avrai la possibilità di sostituire il plugin con la versione che hai appena scaricato. Procedi e fai clic su **Replace current with uploaded**._

<!-- Screenshot unavailable: Pagina del plugin che mostra l'opzione per sostituire v1 con la versione v2 caricata -->

La pagina successiva ti indicherà quali add-on legacy hai installato insieme alla versione 1.x. Conterrà istruzioni sul fatto che la versione che stai utilizzando sia compatibile con la versione 2.0 o se devi installare una versione aggiornata dell'add-on dopo la migrazione.

<!-- Screenshot unavailable: Messaggio nella parte superiore della pagina dei plugin sull'aggiornamento a v2.0, con elenco degli add-on che devono essere aggiornati -->

Quando sei pronto a procedere, puoi fare clic sul pulsante che dice **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Pulsante con la dicitura Visit the Installer to finish the upgrade -->

Verrai quindi portato alla pagina della procedura guidata di installazione con alcuni messaggi di benvenuto. Devi solo fare clic su **Get Started** per passare alla pagina successiva.

<!-- Screenshot unavailable: Pagina di benvenuto del Setup Wizard con pulsante Get Started -->

Dopo aver fatto clic su **Get Started** , verrai reindirizzato ai Pre-install Checks_._ Questo ti mostrerà le informazioni di sistema e l'installazione WordPress e ti dirà se soddisfa i **requisiti di Ultimate Multisite**.

<!-- Screenshot unavailable: Pagina Pre-install Checks che mostra la conferma dei requisiti di sistema -->

Il passaggio successivo consiste nell'inserire la tua chiave di licenza Ultimate Multisite e attivare il plugin. Questo garantirà che tutte le funzionalità, inclusi gli add-on, siano disponibili sul tuo sito.

<!-- Screenshot unavailable: Pagina di attivazione della licenza con campo per chiave di licenza e pulsante Agree and Activate -->

Dopo aver inserito la tua chiave, fai clic su **Agree & Activate**.

Dopo l'attivazione della licenza, puoi iniziare l'installazione vera e propria facendo clic su **Install** nella pagina successiva. Questo creerà automaticamente i file necessari e il database richiesto per il funzionamento della versione 2.0.

<!-- Screenshot unavailable: Pagina di installazione che mostra cosa verrà aggiornato con pulsante Install -->

## Ora, la migrazione {#now-the-migration}

Il migratore ha una funzionalità di sicurezza integrata con cui controllerà l'intero multisite per assicurarsi che tutti i tuoi dati Ultimate Multisite possano essere migrati senza problemi. Fai clic sul pulsante **Run Check** per avviare il processo.

<!-- Screenshot unavailable: Pagina di migrazione con pulsante Run Check per verificare che i dati possano essere convertiti -->

Dopo aver eseguito il controllo, hai due possibilità: il risultato può essere **con** un errore oppure **senza un errore**.

### Con errore {#with-error}

Se ricevi un messaggio di errore, dovrai contattare il nostro team di supporto affinché possa aiutarti a correggere l'errore. Assicurati di **fornire il log dell'errore** quando crei un ticket. Puoi scaricare il log oppure fare clic sul link che dice contatta il nostro team di supporto. Si aprirà il widget di aiuto sul lato destro della tua pagina con i campi precompilati per te, inclusi i log degli errori nella descrizione.

_**Poiché il sistema ha trovato un errore, non potrai procedere con la migrazione alla versione 2.0. Puoi quindi eseguire il rollback alla versione 1.x per riprendere l'esecuzione del tuo network finché l'errore non sarà corretto.**_

### Senza errore {#without-error}

Se il sistema non trova alcun errore, vedrai un messaggio di successo e un pulsante **Migrate** in basso che ti permetterà di procedere con la migrazione. In questa pagina ti verrà ricordato di creare un backup del tuo database prima di andare avanti, cosa che consigliamo vivamente. Premi **Migrate** se hai già un backup.

<!-- Screenshot unavailable: Pagina di migrazione che mostra messaggio di successo e raccomandazione di backup -->

<!-- Screenshot unavailable: Pulsante Migrate nell'angolo in basso a destra -->

E questo è tutto ciò che serve!

Puoi continuare a eseguire la configurazione guidata per aggiornare il tuo logo e altri elementi sul tuo network, oppure iniziare a navigare nel menu di Ultimate Multisite versione 2.0 e nella sua nuova interfaccia. Procedi e divertiti un po'.
