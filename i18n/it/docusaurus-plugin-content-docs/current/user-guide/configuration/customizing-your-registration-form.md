---
title: Personalizzare il modulo di registrazione
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalizzare il tuo modulo di registrazione

Per rendere la tua rete unica rispetto a tutti gli altri SaaS costruiti sulla piattaforma WordPress, Ultimate Multisite ti permette di personalizzare le pagine di registrazione e login con la nostra funzionalità **Checkout Forms**.

Sebbene siano un modo semplice e flessibile per sperimentare approcci diversi quando cerchi di convertire nuovi clienti, sono usati soprattutto per creare moduli di registrazione personalizzati. Questo articolo ha lo scopo di mostrarti come puoi farlo.

## Pagine di login e registrazione: {#login-and-registration-pages}

Al momento dell'installazione di Ultimate Multisite, vengono create automaticamente pagine di login e registrazione personalizzate sul tuo sito principale. Puoi cambiare queste pagine predefinite in qualsiasi momento andando alla pagina **Ultimate Multisite > Settings > Login & Registration**.

![Pagina delle impostazioni di login e registrazione](/img/config/settings-general.png)

Ecco una vista completa della pagina delle impostazioni di login e registrazione:

![Pagina completa delle impostazioni di login e registrazione](/img/config/settings-login-registration-full.png)

Diamo un'occhiata a ciascuna delle opzioni che puoi personalizzare nella pagina **Login & Registration**:

  * **Abilita registrazione:** Questa opzione abiliterà o disabiliterà la registrazione sulla tua rete. Se è disattivata, i tuoi clienti non potranno registrarsi e abbonarsi ai tuoi prodotti.

  * **Abilita verifica email:** Se questa opzione è attivata, i clienti che si abbonano a un piano gratuito o a un piano a pagamento con un periodo di prova riceveranno un'email di verifica e dovranno fare clic sul link di verifica affinché i loro siti web vengano creati.

  * **Pagina di registrazione predefinita:** Questa è la pagina predefinita per la registrazione. Questa pagina deve essere pubblicata sul tuo sito web e avere un modulo di registrazione (noto anche come checkout form), dove i tuoi clienti si abboneranno ai tuoi prodotti. Puoi creare tutte le pagine di registrazione e i checkout forms che vuoi; ricordati solo di inserire lo shortcode del checkout form nella pagina di registrazione, altrimenti non apparirà.

  * **Usa pagina di login personalizzata:** Questa opzione ti permette di usare una pagina di login personalizzata, diversa dalla pagina predefinita wp-login.php. Se questa opzione è attivata, puoi selezionare quale pagina verrà usata per il login nell'opzione **Pagina di login predefinita** (subito sotto).

  * **Offusca l'URL di login originale (wp-login.php)** : Se vuoi nascondere l'URL di login originale, puoi attivare questa opzione. È utile per prevenire attacchi brute-force. Se questa opzione è abilitata, Ultimate Multisite mostrerà un errore 404 quando un utente prova ad accedere al link wp-login.php originale

  * **Forza pubblicazione sincrona del sito:** Dopo che un cliente si abbona a un prodotto su una rete, il nuovo sito in sospeso deve essere convertito in un vero sito della rete. Il processo di pubblicazione avviene tramite Job Queue, in modo asincrono. Abilita questa opzione per forzare la pubblicazione nella stessa richiesta della registrazione.

Ora vediamo altre opzioni che sono comunque rilevanti per il processo di login e registrazione. Si trovano subito sotto **Other options** nella stessa pagina Login & registration:

  * **Ruolo predefinito:** Questo è il ruolo che i tuoi clienti avranno sul loro sito web dopo il processo di registrazione.

  * **Abilita Jumper:** Abilita la scorciatoia Jumper nell'area di amministrazione. Jumper permette agli amministratori di passare rapidamente alle schermate di Ultimate Multisite, agli oggetti della rete e ad altre destinazioni supportate senza navigare attraverso ogni menu. Disattivalo se preferisci nascondere quello strumento di navigazione rapida dall'interfaccia di amministrazione.

  * **Aggiungi gli utenti anche al sito principale:** Abilitando questa opzione, l'utente verrà aggiunto anche al sito principale della tua rete dopo il processo di registrazione. Se abiliti questa opzione, apparirà subito sotto anche un'opzione per impostare il **ruolo predefinito** di questi utenti sul tuo sito web.

  * **Abilita account multipli:** Consente agli utenti di avere account su diversi siti della tua rete con lo stesso indirizzo email. Se questa opzione è disattivata, i tuoi clienti non potranno creare un account su altri siti web eseguiti sulla tua rete con lo stesso indirizzo email.

E queste sono tutte le opzioni relative a login e registrazione che puoi personalizzare! Non dimenticare di salvare le impostazioni dopo aver finito di modificarle.

## Usare più moduli di registrazione: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 offre un editor di checkout form che ti permette di creare tutti i moduli che vuoi, con campi diversi, prodotti in offerta, ecc.

Sia le pagine di login sia quelle di registrazione sono incorporate con shortcode: **[wu_login_form]** nella pagina di login e**[wu_checkout]** per la pagina di registrazione. Puoi personalizzare ulteriormente la pagina di registrazione costruendo o creando checkout forms.

Per accedere a questa funzionalità, vai al menu **Checkout Forms**, nella barra laterale sinistra.

![Menu Checkout Forms nella barra laterale](/img/config/checkout-forms-list.png)

In questa pagina puoi vedere tutti i checkout forms che hai.

Se vuoi crearne uno nuovo, fai semplicemente clic su **Add Checkout Form** nella parte superiore della pagina.

Puoi selezionare una di queste tre opzioni come punto di partenza: singolo passaggio, multi-step o vuoto. Poi fai clic su **Go to the Editor**.

![Aggiungi Checkout Form con opzioni singolo passaggio, multi-step o vuoto](/img/config/checkout-forms-list.png)

In alternativa, puoi modificare o duplicare i moduli che hai già facendo clic sulle opzioni sotto il loro nome. Lì troverai anche le opzioni per copiare lo shortcode del modulo o per eliminare il modulo.

![Azioni al passaggio del mouse sul checkout form con modifica, duplicazione ed eliminazione](/img/config/checkout-form-hover-actions.png)

Se selezioni singolo passaggio o multi-step, il checkout form sarà già precompilato con i passaggi di base necessari per funzionare. Poi, se vuoi, puoi aggiungervi passaggi extra.

### Modificare un Checkout Form: {#editing-a-checkout-form}

Come abbiamo menzionato prima, puoi creare checkout forms per scopi diversi. In questo esempio lavoreremo su un modulo di registrazione.

Dopo essere passato all'editor del checkout form, assegna al tuo modulo un nome (che verrà usato solo come riferimento interno) e uno slug (usato per creare shortcode, per esempio).

![Editor del modulo di pagamento con campi nome e slug](/img/config/checkout-form-name-slug.png)

I moduli sono composti da passaggi e campi. Puoi aggiungere un nuovo passaggio facendo clic su **Aggiungi nuovo passaggio di pagamento**.

![Pulsante Aggiungi nuovo passaggio di pagamento](/img/config/checkout-form-add-step.png)

Nella prima scheda della finestra modale, compila il contenuto del passaggio del tuo modulo. Assegnagli un ID, un nome e una descrizione. Questi elementi sono usati principalmente internamente.

![Scheda del contenuto del passaggio di pagamento con ID, nome e descrizione](/img/config/checkout-form-step-content.png)

Successivamente, imposta la visibilità del passaggio. Puoi scegliere tra **Mostra sempre** , **Mostra solo agli utenti che hanno effettuato l’accesso** o **Mostra solo agli ospiti**.

![Opzioni di visibilità del passaggio di pagamento](/img/config/checkout-form-step-visibility.png)

Infine, configura lo stile del passaggio. Questi sono campi facoltativi.

![Configurazione dello stile del passaggio di pagamento](/img/config/checkout-form-step-style.png)

Ora è il momento di aggiungere campi al nostro primo passaggio. Fai semplicemente clic su **Aggiungi nuovo campo** e seleziona il tipo di sezione che desideri.

![Pulsante Aggiungi nuovo campo](/img/config/checkout-form-add-field-button.png)![Menu a discesa per la selezione del tipo di campo](/img/config/checkout-form-field-type-dropdown.png)

Ogni campo ha parametri diversi da compilare. Per questa prima voce, selezioneremo il campo **Nome utente**.

![Configurazione del campo Nome utente](/img/config/checkout-form-username-content.png)![Parametri del campo Nome utente](/img/config/checkout-form-username-visibility.png)![Impostazioni aggiuntive del campo Nome utente](/img/config/checkout-form-username-style.png)

Puoi aggiungere tutti i passaggi e i campi di cui hai bisogno. Per mostrare i tuoi prodotti ai clienti in modo che ne scelgano uno, usa il campo Tabella prezzi. Se vuoi permettere ai tuoi clienti di scegliere un modello, aggiungi il campo Selezione modello. E così via.

![Editor del modulo di pagamento con campo di selezione modello](/img/config/checkout-form-with-template-field.png)

_**Nota:** Se crei un prodotto dopo aver creato il tuo modulo di pagamento, dovrai aggiungere il prodotto nella sezione Tabella prezzi. Se non lo aggiungi, il prodotto non apparirà ai tuoi clienti nella pagina di registrazione._

_**Nota 2:** nome utente, email, password, titolo del sito, URL del sito, riepilogo dell’ordine, pagamento e pulsante di invio sono campi obbligatori per creare un modulo di pagamento._

Mentre lavori al tuo modulo di pagamento, puoi sempre usare il pulsante Anteprima per vedere come i tuoi clienti vedranno il modulo. Puoi anche alternare tra la visualizzazione come utente esistente o come visitatore.

![Pulsante Anteprima nell’editor del modulo di pagamento](/img/config/checkout-form-preview-button.png)![Anteprima del modulo di pagamento come visitatore o utente esistente](/img/config/checkout-form-preview-modal.png)

Infine, in **Opzioni avanzate** puoi configurare il messaggio per la pagina **Grazie**, aggiungere snippet per monitorare le conversioni, aggiungere CSS personalizzato al tuo modulo di pagamento o limitarlo a determinati Paesi.

![Opzioni avanzate con pagina Grazie, monitoraggio delle conversioni e CSS personalizzato](/img/config/checkout-form-advanced.png)

Puoi anche abilitare o disabilitare manualmente il tuo modulo di pagamento attivando questa opzione nella colonna di destra, oppure eliminare definitivamente il modulo.

![Interruttore attivo e opzione di eliminazione per il modulo di pagamento](/img/config/checkout-form-active.png)

Non dimenticare di salvare il tuo modulo di pagamento!

![Pulsante Salva modulo di pagamento](/img/config/checkout-form-save.png)

Per ottenere lo shortcode del tuo modulo, fai clic su **Genera Shortcode** e copia il risultato mostrato nella finestra modale.

![Finestra modale Genera Shortcode con shortcode da copiare](/img/config/checkout-form-editor.png)

_**Nota:** Dovrai aggiungere questo shortcode alla tua pagina di registrazione affinché questo modulo di pagamento venga aggiunto ad essa._

## Preselezione di prodotti e modelli tramite parametri URL: {#pre-selecting-products-and-templates-via-url-parameters}

Se vuoi creare tabelle prezzi personalizzate per i tuoi prodotti e preselezionare nel modulo di pagamento il prodotto o il modello che il tuo cliente sceglie dalla tua tabella prezzi o dalla pagina dei modelli, puoi usare i parametri URL per farlo.

### **Per i piani:** {#for-plans}

Vai su **Ultimate Multisite > Prodotti > Seleziona un piano**. Dovresti vedere il pulsante **Fai clic per copiare il link condivisibile** nella parte superiore della pagina. Questo è il link che puoi usare per preselezionare questo piano specifico nel tuo modulo di pagamento.

![Pagina del prodotto con pulsante del link condivisibile](/img/config/products-list.png)

Tieni presente che questo link condivisibile è valido solo per i **Piani**. Non puoi usare link condivisibili per pacchetti o servizi.

### Per i modelli: {#for-templates}

Se vuoi preselezionare modelli di sito nel tuo modulo di pagamento, puoi usare il parametro: **?template_id=X** nell’URL della tua pagina di registrazione. La "X" deve essere sostituita dal **numero ID del modello di sito**. Per ottenere questo numero, vai su **Ultimate Multisite > Siti**.

Fai clic su **Gestisci** proprio sotto il modello di sito che vuoi usare. Vedrai il numero SITE ID. Usa semplicemente questo numero per questo specifico modello di sito da preselezionare nel tuo modulo di pagamento. Nel nostro caso qui, il parametro URL sarebbe **?template_id=2**.

![Elenco dei siti che mostra l’ID del modello di sito](/img/config/site-templates-list.png)

Supponiamo che il sito web della nostra rete sia [**www.mynetwork.com**](http://www.mynetwork.com) e che la nostra pagina di registrazione con il nostro modulo di pagamento si trovi nella pagina **/register**. L’URL completo con questo modello di sito preselezionato sarà simile a [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E, se vuoi, puoi preselezionare sia prodotti sia modelli nel tuo modulo di pagamento. Tutto ciò che devi fare è copiare il link condivisibile del piano e incollare il parametro del modello alla fine. Apparirà così: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
