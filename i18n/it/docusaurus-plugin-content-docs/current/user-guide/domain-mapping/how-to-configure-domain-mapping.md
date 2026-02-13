---
title: Come configurare la mappatura del dominio
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# Come configurare l'assegnazione di dominio (v2)

_**NOTA IMPORTANTE: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite.**_

Una delle funzionalità più potenti di una rete premium è la possibilità di offrire ai nostri clienti la possibilità di associare un dominio di primo livello ai loro siti. Dopotutto, quale appare più professionale: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ecco perché Ultimate Multisite offre questa funzionalità integrata, senza la necessità di utilizzare plugin di terze parti.

## Che cos'è l'assegnazione di dominio?

Come suggerisce il nome, l'assegnazione di dominio è la funzionalità offerta da Ultimate Multisite che consente di ricevere una richiesta per un dominio personalizzato e di associare tale richiesta al sito corrispondente nella rete con quel dominio specifico.

### Come configurare l'assegnazione di dominio sulla tua rete Ultimate Multisite

L'assegnazione di dominio richiede alcune configurazioni da parte tua per funzionare. Fortunatamente, Ultimate Multisite automatizza il lavoro pesante per te, così puoi soddisfare facilmente i requisiti.

Durante l'installazione di Ultimate Multisite, l'installatore copierà e installerà automaticamente il file **sunrise.php** nella cartella designata. **L'installatore non ti permetterà di procedere finché questo passaggio non sarà completato**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/config/settings-domain-mapping.png)

Ciò significa che una volta che l'installatore di Ultimate Multisite ha completato la configurazione della tua rete, puoi iniziare a mappare il dominio personalizzato subito.

Nota che l'assegnazione di dominio in Ultimate Multisite non è obbligatoria. Hai la possibilità di utilizzare la funzione nativa di WordPress Multisite per l'assegnazione di dominio o qualsiasi altra soluzione di assegnazione di dominio.

Se hai bisogno di disabilitare l'assegnazione di dominio di Ultimate Multisite per dare spazio ad altre soluzioni di assegnazione di dominio, puoi disabilitare questa funzionalità in **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings with enable toggle](/img/config/settings-domain-mapping.png)

Sotto questa opzione, puoi anche vedere l'opzione **Force Admin Redirect**. Questa opzione ti consente di controllare se i tuoi clienti potranno accedere al loro pannello di amministrazione sia sul dominio personalizzato che sul sottodominio o solo su uno di essi.

Se selezioni **Force redirect to mapped domain**, i tuoi clienti potranno accedere al loro pannello di amministrazione solo sul dominio personalizzato.

L'opzione **Force redirect to** **network domain** farà esattamente il contrario: i tuoi clienti potranno accedere ai loro pannelli di amministrazione solo sul sottodominio, anche se provano a accedere sui loro domini personalizzati.

E l'opzione **Allow access to the admin by both mapped domain domain and network domain** consente loro di accedere ai loro pannelli di amministrazione sia sul sottodominio sia sul dominio personalizzato.

![Force Admin Redirect options for domain mapping](/img/config/settings-domain-mapping.png)

Ci sono due modi per mappare un dominio personalizzato. Il primo è mappare il nome di dominio dal pannello di amministrazione della rete come super amministratore e il secondo è tramite il pannello di amministrazione del sottosito nella pagina account.

Ma prima di iniziare a mappare il dominio personalizzato a uno dei sottositi nella tua rete, dovrai assicurarti che le **impostazioni DNS** del nome di dominio siano configurate correttamente.

### Assicurarsi che le impostazioni DNS del dominio siano configurate correttamente

Perché la mappatura funzioni, devi assicurarti che il dominio che intendi mappare punti all'indirizzo IP della tua Rete. Nota che hai bisogno dell'indirizzo IP della Rete - l'indirizzo IP del dominio dove è installato Ultimate Multisite - e non dell'indirizzo IP del dominio personalizzato che vuoi mappare. Per cercare l'indirizzo IP di un dominio specifico, ti suggeriamo di andare su [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), ad esempio.

Per mappare correttamente il dominio, devi aggiungere un **A RECORD** nella tua configurazione **DNS** puntando a quell'**IP address**. La gestione del DNS varia notevolmente tra diversi registri di dominio, ma ci sono molti tutorial online che trattano questo argomento se cerchi “_Creating A Record on XXXX_” dove XXXX è il tuo registrar di dominio (es.: “_Creating A Record on_ _GoDaddy_ ”).

Se ti trovi in difficoltà a far funzionare questa procedura, **contatta il supporto del tuo registrar di dominio** e ti aiuteranno in questa parte.

Se prevedi di consentire ai tuoi clienti di mappare i propri domini, dovranno fare il lavoro da soli. Indirizzali al sistema di supporto del loro registrar se non riescono a creare l'A Record.

### Mappare il nome di dominio personalizzato come Super Admin

Quando sei connesso come super amministratore sulla tua rete, puoi aggiungere e gestire facilmente i nomi di dominio personalizzati andando su **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Sulla pagina, puoi fare clic sul pulsante **Add Domain** in alto e si aprirà una finestra modale dove puoi impostare e compilare il **custom domain name**, **il sottosito** a cui vuoi applicare il nome di dominio personalizzato, e decidere se impostarlo come **primary domain** o meno (nota che puoi mappare **multiple domain names to one subsite**).

![Add Domain modal with domain name and site fields](/img/admin/domains-list.png)

Dopo aver inserito tutte le informazioni, puoi fare clic sul pulsante **Add Existing Domain** in basso.

Questo avvierà il processo di verifica e recupero delle informazioni DNS del dominio personalizzato. Vedrai anche un registro in fondo alla pagina per seguire il processo in corso. Il processo può richiedere alcuni minuti per completarsi.

Lo **Stage** o lo stato dovrebbe cambiare da **Checking DNS** a **Ready** se tutto è configurato correttamente.

![Domain stage changing from Checking DNS to Ready](/img/admin/domains-list.png)

![Domain with Ready status in domains list](/img/admin/domains-list.png)

Se fai clic sul nome di dominio, potrai vedere alcune opzioni al suo interno. Diamo un'occhiata rapida:

![Domain detail page with stage, site, active, and SSL options](/img/admin/domains-list.png)

**Stage:** È lo stadio in cui si trova il dominio. Quando aggiungi per la prima volta il dominio, probabilmente sarà nello stadio **Checking DNS**. Il processo controllerà le voci DNS e confermerà che siano corrette. Successivamente, il dominio passerà allo stadio **Checking SSL**. Ultimate Multisite controllerà se il dominio ha SSL o meno e classificherà il tuo dominio come **Ready** o **Ready (without SSL)**.

**Site:** Il sottodominio associato a questo dominio. Il dominio mappato mostrerà il contenuto di questo sito specifico.

**Active:** Puoi attivare o disattivare questa opzione per attivare o disattivare il dominio.

**Is Primary Domain?:** I tuoi clienti possono avere più di un dominio mappato per ogni sito. Usa questa opzione per selezionare se questo è il dominio principale per il sito specifico.

**Is Secure?:** Anche se Ultimate Multisite verifica se il dominio ha un certificato SSL o meno prima di abilitarlo, puoi selezionare manualmente se caricare il dominio con o senza certificato SSL. Nota che se il sito web non ha un certificato SSL e provi a forzare il caricamento con SSL, potresti ricevere errori.

### Mappare il nome di dominio personalizzato come utente del sottosito

Gli amministratori del sottosito possono anche mappare nomi di dominio personalizzati dal loro pannello di amministrazione del sottosito.

Innanzitutto, devi assicurarti di abilitare questa opzione nelle impostazioni **Domain mapping**. Vedi lo screenshot qui sotto.

![Domain mapping settings allowing subsite users to map domains](/img/config/settings-domain-mapping.png)

Puoi anche impostare o configurare questa opzione a livello di **Plan** o opzioni prodotto su **Ultimate Multisite > Products**.

![Product custom domains option in product settings](/img/config/settings-domain-mapping.png)

Quando una di queste opzioni è abilitata e un utente del sottosito è autorizzato a mappare nomi di dominio personalizzati, l'utente del sottosito dovrebbe vedere una metabox sotto la pagina **Account** chiamata **Domains**.

![Domains metabox on the subsite account page](/img/admin/domains-list.png)

L'utente può fare clic sul pulsante **Add Domain** e si aprirà una finestra modale con alcune istruzioni.

![Add Domain modal with DNS instructions for subsite users](/img/admin/domains-list.png)

L'utente può quindi fare clic su **Next Step** e procedere ad aggiungere il nome di dominio personalizzato. Può anche scegliere se questo sarà il dominio principale o meno.

![Add custom domain name field with primary domain option](/img/admin/domains-list.png)

![Click Add Domain to start DNS verification](/img/admin/domains-list.png)Click to **Add Domain** will start the process of verifying and fetching the DNS information of the custom domain.

Fare clic su **Add Domain** avvierà il processo di verifica e recupero delle informazioni DNS del dominio personalizzato.

### Informazioni sul Domain Syncing

Domain Syncing è un processo in cui Ultimate Multisite aggiunge il nome di dominio personalizzato al tuo account di hosting come dominio aggiuntivo **per far funzionare l'assegnazione di dominio**.

Il domain syncing avviene automaticamente se il tuo provider di hosting ha un'integrazione con la funzionalità di assegnazione di dominio di Ultimate Multisite. Attualmente, questi provider di hosting sono _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ e _Cpanel._

Dovrai attivare questa integrazione nelle impostazioni di Ultimate Multisite sotto la scheda **Integration**.

![Integration tab in Ultimate Multisite settings](/img/config/settings-domain-mapping.png)

![Hosting provider integration settings for domain syncing](/img/config/settings-domain-mapping.png)

_Nota che se il tuo provider di hosting non è uno di quelli menzionati sopra, **dovrai sincronizzare manualmente o aggiungere il nome di dominio** al tuo account di hosting._
