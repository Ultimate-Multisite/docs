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

![](https://support.delta.nextpress.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2aff9b312e5b7ec95c9e2c5355480d4aa7258fd/Migration.png)

La pagina successiva ti mostrerà quali add-on legacy hai installato insieme alla versione 1.x. Contiene istruzioni su se la versione che stai usando è compatibile con la versione 2.0 o se devi installare una versione aggiornata dell'add-on dopo la migrazione.

![Message on the top of the plugins page: Thanks for updating to Ultimate Multisite version 2.0. There's a link below it that leads the user to the version upgrader. Then, there's a list of add-ons that need to be updated.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

Una volta pronto a procedere, puoi fare clic sul pulsante che dice **Visit the Installer to finish the upgrade**.

![Framed in red: button saying Visit the Installer to finish the upgrade](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

Ti porterà quindi alla pagina del wizard di installazione con alcuni messaggi di benvenuto. Devi solo fare clic su **Get Started** per passare alla pagina successiva.

![Setup Wizard's welcoming page. Framed in red at the bottom-right corner: Get Started button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

Dopo aver fatto clic su **Get Started**, ti reindirizzerà ai Pre-install Checks_._ Ti mostrerà le informazioni di sistema e l'installazione di WordPress e ti dirà se soddisfa i **requisiti di Ultimate Multisite**.

![Pre-install Checks page showing confirmation messages that the installation meets Ultimate Multisite's requirements. Framed on red, on the bottom-right corner: Go to the next step button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

Il passo successivo è inserire la tua chiave di licenza Ultimate Multisite e attivare il plugin. Ciò garantirà che tutte le funzionalità, inclusi gli add-on, siano disponibili sul tuo sito.

![License activation page listing what the support includes and what it doesn't. There's a box on the bottom to insert the plugin's license. Framed in red, on the bottom-right corner: Agree and activate button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

Dopo aver inserito la tua chiave, fai clic su **Agree & Activate**.

Dopo l'attivazione della licenza, puoi iniziare l'installazione effettiva facendo clic su **Install** nella pagina successiva. Questo creerà automaticamente i file e il database necessari affinché la versione 2.0 funzioni.

![Installation page showing what will be updated in order to Ultimate Multisite to function. Framed in red, on the bottom-right: Install button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## Ora, la migrazione

Il migratore ha una funzionalità di sicurezza integrata che verifica l'intera multisite per assicurarsi che tutti i tuoi dati Ultimate Multisite possano essere migrati senza problemi. Fai clic sul pulsante **Run Check** per avviare il processo.

![Migration page explaining it will run a check to see if all your data from v1 can be converted. Framed in red, on the bottom-right corner: Run check button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

Dopo aver eseguito il controllo, hai due possibilità: il risultato può essere **con** un errore o **senza** errore.

### Con Errore

Se ricevi un messaggio di errore, dovrai contattare il nostro team di supporto affinché ti assista nella correzione dell'errore. Assicurati di **fornire il log degli errori** quando crei un ticket. Puoi scaricare il log o fare clic sul link che dice contatta il nostro team di supporto. Si aprirà il widget di aiuto sul lato destro della tua pagina con i campi precompilati per te, inclusi i log degli errori nella descrizione.

_**Poiché il sistema ha rilevato un errore, non potrai procedere con la migrazione alla versione 2.0. Puoi quindi tornare alla versione 1.x per riprendere l'esecuzione della tua rete finché l'errore non viene risolto.**_

### Senza Errore

Se il sistema non rileva alcun errore, vedrai un messaggio di successo e un pulsante **Migrate** in fondo che ti permetterà di procedere con la migrazione. In questa pagina ti verrà ricordato di creare un backup del tuo database prima di procedere, cosa che consigliamo vivamente. Premi **Migrate** se hai già un backup.

![Migration page showing a success message and a recommendation to create a backup.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![Framed in red, on the bottom-right corner: Migrate button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

E questo è tutto ciò che serve!

Puoi continuare a eseguire la configurazione del Wizard per aggiornare il tuo logo e altre cose sulla tua rete o iniziare a navigare il menu di Ultimate Multisite versione 2.0 e la sua nuova interfaccia. Vai avanti e divertiti.
