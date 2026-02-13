---
title: Migrazione da V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Migrazione da V1

## Ultimate Multisite è passata dalla sua famiglia originale di release 1.x a quella 2.x.

La versione 2.0 di Ultimate Multisite e successive è una riscrittura completa del codice, il che significa che c'è molto poco in comune tra la vecchia versione e la nuova. Per questo motivo, quando si passa da 1.x a 2.x, i tuoi dati dovranno essere migrati in un formato che le nuove versioni possono comprendere.

Fortunatamente, Ultimate Multisite 2.0+ **viene con un migratore** integrato nel core che è in grado di rilevare i dati dalla vecchia versione e convertirli nel nuovo formato. Questa migrazione avviene durante il **Setup Wizard** della versione 2.0+.

Questa lezione spiega come funziona il migratore, cosa fare in caso di fallimento e come risolvere eventuali problemi che potrebbero insorgere durante questo processo.

_**IMPORTANTE: Prima di iniziare l'aggiornamento dalla versione 1.x alla 2.0, assicurati di creare un backup del database del tuo sito**_

## Primi passi

Il primo passo è scaricare il file .zip del plugin e installare la versione 2.0 sul pannello di amministrazione della tua rete.

Dopo aver [installato e attivato la versione 2.0](../getting-started/installing-ultimate-multisite.md), il sistema rileverà automaticamente che la tua Multisite è in esecuzione sulla versione legacy e vedrai questo messaggio nella parte superiore della pagina del plugin.

_**NOTA:** Se hai installato Ultimate Multisite 1.x sulla tua Multisite, avrai l'opzione di sostituire il plugin con la versione appena scaricata. Vai avanti e fai clic su **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

La pagina successiva ti mostrerà quali add-on legacy hai installato insieme alla versione 1.x. Contiene istruzioni su se la versione che stai usando è compatibile con la versione 2.0 o se devi installare una versione aggiornata dell'add-on dopo la migrazione.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Una volta pronto a procedere, puoi fare clic sul pulsante che dice **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ti porterà quindi alla pagina del wizard di installazione con alcuni messaggi di benvenuto. Devi solo fare clic su **Get Started** per passare alla pagina successiva.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Dopo aver fatto clic su **Get Started**, ti reindirizzerà ai Pre-install Checks_._ Ti mostrerà le informazioni di sistema e l'installazione di WordPress e ti dirà se soddisfa i **requisiti di Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Il passo successivo è inserire la tua chiave di licenza Ultimate Multisite e attivare il plugin. Ciò garantirà che tutte le funzionalità, inclusi gli add-on, siano disponibili sul tuo sito.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Dopo aver inserito la tua chiave, fai clic su **Agree & Activate**.

Dopo l'attivazione della licenza, puoi iniziare l'installazione effettiva facendo clic su **Install** nella pagina successiva. Questo creerà automaticamente i file e il database necessari affinché la versione 2.0 funzioni.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Ora, la migrazione

Il migratore ha una funzionalità di sicurezza integrata che verifica l'intera multisite per assicurarsi che tutti i tuoi dati Ultimate Multisite possano essere migrati senza problemi. Fai clic sul pulsante **Run Check** per avviare il processo.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Dopo aver eseguito il controllo, hai due possibilità: il risultato può essere **con** un errore o **senza** errore.

### Con Errore

Se ricevi un messaggio di errore, dovrai contattare il nostro team di supporto affinché ti assista nella correzione dell'errore. Assicurati di **fornire il log degli errori** quando crei un ticket. Puoi scaricare il log o fare clic sul link che dice contatta il nostro team di supporto. Si aprirà il widget di aiuto sul lato destro della tua pagina con i campi precompilati per te, inclusi i log degli errori nella descrizione.

_**Poiché il sistema ha rilevato un errore, non potrai procedere con la migrazione alla versione 2.0. Puoi quindi tornare alla versione 1.x per riprendere l'esecuzione della tua rete finché l'errore non viene risolto.**_

### Senza Errore

Se il sistema non rileva alcun errore, vedrai un messaggio di successo e un pulsante **Migrate** in fondo che ti permetterà di procedere con la migrazione. In questa pagina ti verrà ricordato di creare un backup del tuo database prima di procedere, cosa che consigliamo vivamente. Premi **Migrate** se hai già un backup.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

E questo è tutto ciò che serve!

Puoi continuare a eseguire la configurazione del Wizard per aggiornare il tuo logo e altre cose sulla tua rete o iniziare a navigare il menu di Ultimate Multisite versione 2.0 e la sua nuova interfaccia. Vai avanti e divertiti.
