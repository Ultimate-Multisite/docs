---
title: Come configurare la mappatura dei domini
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Come configurare la mappatura dei domini (v2)

_**NOTA IMPORTANTE: questo articolo si riferisce a Ultimate Multisite versione 2.x.**_

Una delle funzionalità più potenti di una rete premium è la possibilità di offrire ai nostri clienti l'opportunità di collegare un dominio di primo livello ai loro siti. Dopotutto, cosa appare più professionale: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ecco perché Ultimate Multisite offre questa funzionalità integrata, senza la necessità di usare plugin di terze parti.

## Cos'è la mappatura dei domini?

Come suggerisce il nome, la mappatura dei domini è la capacità offerta da Ultimate Multisite di ricevere una richiesta per un dominio personalizzato e mappare tale richiesta al sito corrispondente nella rete a cui è collegato quel particolare dominio.

### Come configurare la mappatura dei domini sulla tua rete Ultimate Multisite

La mappatura dei domini richiede una certa configurazione da parte tua per funzionare. Per fortuna, Ultimate Multisite automatizza il lavoro difficile per te, così puoi soddisfare facilmente i requisiti.

Durante l'installazione di Ultimate Multisite, la procedura guidata copierà e installerà automaticamente **sunrise.php** nella cartella designata. **La procedura guidata non ti consentirà di procedere finché questo passaggio non sarà completato**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Questo significa che, una volta che la procedura guidata di installazione di Ultimate Multisite ha completato la configurazione della tua rete, puoi iniziare subito a mappare il dominio personalizzato.

Tieni presente che la mappatura dei domini in Ultimate Multisite non è obbligatoria. Hai la possibilità di usare la funzione nativa di mappatura dei domini di WordPress Multisite o qualsiasi altra soluzione di mappatura dei domini.

Se dovessi avere bisogno di disabilitare la mappatura dei domini di Ultimate Multisite per lasciare spazio ad altre soluzioni di mappatura dei domini, puoi disabilitare questa funzionalità in **Ultimate Multisite > Impostazioni > Mappatura domini**.

![Pagina delle impostazioni di Mappatura domini che mostra il reindirizzamento amministratore, il messaggio di mappatura e le opzioni DNS](/img/config/domain-mapping-settings.png)

Subito sotto questa opzione, puoi vedere anche l'opzione **Forza reindirizzamento amministratore**. Questa opzione ti permette di controllare se i tuoi clienti potranno accedere alla loro Dashboard di amministrazione sia sul loro dominio personalizzato sia sul sottodominio, oppure solo su uno dei due.

Se selezioni **Forza reindirizzamento al dominio mappato** , i tuoi clienti potranno accedere alla loro Dashboard di amministrazione solo sui loro domini personalizzati.

L'opzione **Forza reindirizzamento a** **dominio di rete** farà esattamente l'opposto: i tuoi clienti potranno accedere alle loro Dashboard solo sul loro sottodominio, anche se provano ad accedere dai loro domini personalizzati.

E l'opzione **Consenti accesso all'amministrazione sia dal dominio mappato sia dal dominio di rete** consente loro di accedere alle loro Dashboard di amministrazione sia dal sottodominio sia dal dominio personalizzato.

![Menu a discesa Reindirizzamento amministratore espanso che mostra le tre opzioni di reindirizzamento](/img/config/domain-mapping-redirect-options.png)

Ci sono due modi per mappare un dominio personalizzato. Il primo consiste nel mappare il nome di dominio dalla Dashboard di amministrazione della tua rete come super admin e il secondo tramite la Dashboard di amministrazione del sottosito nella pagina Account.

Ma prima di iniziare a mappare il dominio personalizzato a uno dei sottositi nella tua rete, dovrai assicurarti che le **impostazioni DNS** del nome di dominio siano configurate correttamente.

###

### Assicurarsi che le impostazioni DNS del dominio siano configurate correttamente

Affinché una mappatura funzioni, devi assicurarti che il dominio che intendi mappare punti all'indirizzo IP della tua rete. Tieni presente che ti serve l'indirizzo IP della rete - l'indirizzo IP del dominio in cui è installato Ultimate Multisite - non l'indirizzo IP del dominio personalizzato che vuoi mappare. Per cercare l'indirizzo IP di un dominio specifico, suggeriamo di andare su [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), per esempio.

Per mappare correttamente il dominio, devi aggiungere un **A RECORD** nella tua configurazione **DNS** che punti a quell'**indirizzo IP**. La gestione DNS varia molto tra i diversi registrar di domini, ma online ci sono molti tutorial che trattano l'argomento se cerchi " _Creare un A Record su XXXX_ " dove XXXX è il tuo registrar di domini (es.: " _Creare un A Record su_ _GoDaddy_ ").

Se hai difficoltà a farlo funzionare, **contatta il supporto del tuo registrar di domini** e potranno aiutarti con questa parte.

Se prevedi di consentire ai tuoi clienti di mappare i propri domini, dovranno occuparsi loro stessi di questa parte. Indirizzali verso il sistema di supporto del loro registrar se non riescono a creare l'A Record.

### Mappare un nome di dominio personalizzato come Super Admin

Quando hai effettuato l'accesso come super admin sulla tua rete, puoi aggiungere e gestire facilmente nomi di dominio personalizzati andando in **Ultimate Multisite > Domini**.

![Pagina dell'elenco dei domini in Ultimate Multisite](/img/admin/domains-list.png)

In questa pagina, puoi fare clic sul pulsante **Aggiungi dominio** in alto e questo aprirà una finestra modale in cui puoi impostare e compilare il **nome di dominio personalizzato** , **il sottosito** a cui desideri applicare il nome di dominio personalizzato, e decidere se vuoi impostarlo o meno come **nome di dominio primario** (tieni presente che puoi mappare **più nomi di dominio a un sottosito**).

![Modale Aggiungi dominio con nome di dominio, selettore del sito e interruttore del dominio primario](/img/admin/domain-add-modal.png)

Dopo aver inserito tutte le informazioni, puoi quindi fare clic sul pulsante **Aggiungi dominio esistente** in basso.

Questo avvierà il processo di verifica e recupero delle informazioni DNS del dominio personalizzato. Vedrai anche un registro in fondo alla pagina per seguire il processo in corso. Questo processo potrebbe richiedere alcuni minuti per essere completato.

Ultimate Multisite v2.13.0 crea anche automaticamente il record di dominio interno quando viene creato un nuovo sito su un host che deve essere trattato come un dominio per-sito. Se l'host è il dominio principale della rete, oppure uno dei domini base condivisi del modulo di checkout configurati su un campo **Site URL**, il record automatico di dominio mappato viene saltato, così quel dominio base condiviso resta disponibile per ogni sito che lo utilizza.

Quando un cliente registra un nuovo dominio tramite Domain Seller v1.3.0 o successiva, Ultimate Multisite mappa automaticamente il dominio registrato sul sito di rete del cliente per impostazione predefinita. Gli amministratori non devono più aggiungere un record di dominio mappato separato dopo una registrazione riuscita, a meno che non vogliano modificare opzioni come il flag del dominio principale, lo stato di attivazione o la gestione SSL.

Lo **Stage** o lo stato dovrebbe cambiare da **Checking DNS** a **Ready** se tutto è configurato correttamente.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Se fai clic sul nome di dominio, potrai vedere alcune opzioni al suo interno. Diamo loro una rapida occhiata:

![Pagina di dettaglio del dominio con interruttori per stage, sito, attivo, primario e SSL](/img/admin/domain-edit.png)

**Stage:** Questo è lo stage in cui si trova il dominio. Quando aggiungi il dominio per la prima volta, probabilmente sarà nello stage **Checking DNS**. Il processo controllerà le voci DNS e confermerà che siano corrette. Poi, il dominio verrà portato allo stage **Checking SSL**. Ultimate Multisite verificherà se il dominio ha SSL o meno e classificherà il tuo dominio come **Ready** o **Ready (without SSL)**.

**Sito:** Il sottodominio associato a questo dominio. Il dominio mappato mostrerà il contenuto di questo sito specifico.

**Attivo:** Puoi attivare o disattivare questa opzione per attivare o disattivare il dominio.

**È il dominio principale?:** I tuoi clienti possono avere più di un dominio mappato per ogni sito. Usa questa opzione per selezionare se questo è il dominio principale per il sito specifico.

**È sicuro?:** Anche se Ultimate Multisite controlla se il dominio ha un certificato SSL o meno prima di abilitarlo, puoi selezionare manualmente se caricare il dominio con o senza un certificato SSL. Nota che se il sito web non ha un certificato SSL e provi a forzarne il caricamento con SSL, potrebbe generare errori.

### Mappare un nome di dominio personalizzato come utente del sottosito

Gli amministratori dei sottositi possono anche mappare nomi di dominio personalizzati dalla dashboard di amministrazione del loro sottosito.

Per prima cosa, devi assicurarti di abilitare questa opzione nelle impostazioni di **Domain mapping**. Vedi lo screenshot qui sotto.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Puoi anche impostare o configurare questa opzione a livello di **Plan** o nelle opzioni del prodotto in **Ultimate Multisite > Products**.

![Sezione Domini personalizzati nella pagina di modifica del prodotto](/img/config/product-custom-domains.png)

Quando una qualsiasi di queste opzioni è abilitata e un utente del sottosito è autorizzato a mappare nomi di dominio personalizzati, l'utente del sottosito dovrebbe vedere una metabox nella pagina **Account** chiamata **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

L'utente può fare clic sul pulsante **Add Domain** e verrà visualizzata una finestra modale con alcune istruzioni.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

L'utente può quindi fare clic su **Next Step** e procedere ad aggiungere il nome di dominio personalizzato. Può anche scegliere se questo sarà il dominio principale o meno.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Fare clic su **Add Domain** avvierà il processo di verifica e recupero delle informazioni DNS del dominio personalizzato.

### Informazioni sulla sincronizzazione dei domini

La sincronizzazione dei domini è un processo in cui Ultimate Multisite aggiunge il nome di dominio personalizzato al tuo account di hosting come dominio aggiuntivo **affinché il domain mapping funzioni**.

La sincronizzazione dei domini avviene automaticamente se il tuo provider di hosting ha un'integrazione con la funzionalità di domain mapping di Ultimate Multisite. Attualmente, questi provider di hosting sono _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ e _Cpanel._

Quando un'integrazione con il provider di hosting è attiva, Ultimate Multisite può anche accodare l'attività lato provider di creazione DNS o sottodominio per i siti appena creati. Se nessuna integrazione è in ascolto per quell'attività, il processo in background viene saltato per evitare voci di coda senza effetto. I controlli DNS e SSL per i domini mappati continuano a essere eseguiti tramite il normale processo degli stage di dominio.

Dovrai attivare questa integrazione nelle impostazioni di Ultimate Multisite sotto la scheda **Integration**.

![Scheda Integrations nelle impostazioni di Ultimate Multisite che mostra i provider di hosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Nota che se il tuo provider di hosting non è uno dei provider menzionati sopra,**dovrai sincronizzare o aggiungere manualmente il nome di dominio** al tuo account di hosting._
