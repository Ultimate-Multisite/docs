---
title: Personalizzazione del tuo modulo di registrazione
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# Personalizzare il tuo modulo di registrazione

Per rendere la tua rete unica rispetto a tutti gli altri SaaS costruiti sulla piattaforma WordPress, Ultimate Multisite ti consente di personalizzare le pagine di registrazione e accesso con la nostra funzionalità **Checkout Forms**.

Sebbene siano un modo semplice e flessibile per sperimentare diversi approcci quando si cerca di convertire nuovi clienti, vengono principalmente utilizzati per creare moduli di registrazione personalizzati. Questo articolo ti mostra come fare.

## Pagine di accesso e registrazione:

Dopo l'installazione di Ultimate Multisite, vengono create automaticamente pagine di accesso e registrazione personalizzate sul tuo sito principale. Puoi modificare queste pagine predefinite in qualsiasi momento accedendo alla pagina **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

Diamo un'occhiata a ciascuna delle opzioni che puoi personalizzare nella pagina **Login & Registration**:

  * **Enable registration:** Questa opzione abilita o disabilita la registrazione sulla tua rete. Se è disattivata, i tuoi clienti non potranno registrarsi e abbonarsi ai tuoi prodotti.

  * **Enable email verification:** Se questa opzione è attivata, i clienti che si abbonano a un piano gratuito o a un piano a pagamento con periodo di prova riceveranno un'email di verifica e dovranno cliccare sul link di verifica per creare i loro siti web.

  * **Default registration page:** Questa è la pagina predefinita per la registrazione. La pagina deve essere pubblicata sul tuo sito web e contenere un modulo di registrazione (noto anche come modulo di checkout) - dove i tuoi clienti si abboneranno ai tuoi prodotti. Puoi creare quante pagine di registrazione e moduli di checkout desideri, ricordati solo di inserire lo shortcode del modulo di checkout nella pagina di registrazione, altrimenti non apparirà.

  * **Use custom login page:** Questa opzione ti consente di utilizzare una pagina di accesso personalizzata, diversa dalla pagina predefinita wp-login.php. Se questa opzione è attivata, puoi selezionare quale pagina verrà utilizzata per l'accesso nella opzione **Default login page** (sotto).

  * **Obfuscate the original login url (wp-login.php)** : Se vuoi nascondere l'URL di accesso originale, puoi attivare questa opzione. È utile per prevenire attacchi di forza bruta. Se questa opzione è abilitata, Ultimate Multisite mostrerà un errore 404 quando un utente tenta di accedere al link wp-login.php originale.

  * **Force synchronous site publication:** Dopo che un cliente si è abbonato a un prodotto su una rete, il nuovo sito in attesa deve essere convertito in un sito di rete reale. Il processo di pubblicazione avviene tramite Job Queue, in modo asincrono. Abilita questa opzione per forzare la pubblicazione a verificarsi nella stessa richiesta del signup.

Ora vediamo altre opzioni ancora rilevanti per il processo di accesso e registrazione. Si trovano subito sotto **Other options** nella stessa pagina Login & registration:

  * **Default role:** Questo è il ruolo che i tuoi clienti avranno sul loro sito web dopo il processo di registrazione.

  * **Add users to the main site as well:** Abilitando questa opzione, l'utente verrà aggiunto anche al sito principale della tua rete dopo il processo di registrazione. Se abiliti questa opzione, comparirà anche un'opzione per impostare il **default role** di questi utenti sul tuo sito web subito sotto.

  * **Enable multiple accounts:** Consenti agli utenti di avere account in diversi siti della tua rete con lo stesso indirizzo email. Se questa opzione è disattivata, i tuoi clienti non potranno creare un account su altri siti in esecuzione sulla tua rete con lo stesso indirizzo email.

Ecco tutte le opzioni relative all'accesso e alla registrazione che puoi personalizzare! Non dimenticare di salvare le impostazioni dopo aver finito di modificarle.

## Utilizzare più moduli di registrazione:

Ultimate Multisite 2.0 offre un editor di moduli di checkout che ti consente di creare quanti moduli desideri, con campi diversi, prodotti in offerta, ecc.

Sia le pagine di accesso che di registrazione sono incorporate con shortcodes: **[wu_login_form]** nella pagina di accesso e **[wu_checkout]** per la pagina di registrazione. Puoi personalizzare ulteriormente la pagina di registrazione creando o costruendo moduli di checkout.

Per accedere a questa funzionalità, vai al menu **Checkout Forms**, nella barra laterale sinistra.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

In questa pagina puoi vedere tutti i moduli di checkout che hai.

Se vuoi crearne uno nuovo, clicca su **Add Checkout Form** in cima alla pagina.

Puoi selezionare una di queste tre opzioni come punto di partenza: single step, multi-step o blank. Poi clicca su **Go to the Editor**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

In alternativa, puoi modificare o duplicare i moduli che hai già cliccando sulle opzioni sotto il loro nome. Lì troverai anche le opzioni per copiare lo shortcode del modulo o per eliminarlo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

Se selezioni single step o multi-step, il modulo di checkout sarà già precompilato con i passaggi di base per funzionare. Poi, se vuoi, puoi aggiungere passaggi extra.

### Modificare un modulo di checkout:

Come abbiamo già detto, puoi creare moduli di checkout per diversi scopi. In questo esempio lavoreremo su un modulo di registrazione.

Dopo aver navigato all'editor del modulo di checkout, dai al tuo modulo un nome (che sarà usato solo per riferimento interno) e uno slug (usato per creare shortcakes, ad esempio).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

I moduli sono composti da passaggi e campi. Puoi aggiungere un nuovo passaggio cliccando su **Add New Checkout Step**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

Nella prima scheda della finestra modale, compila il contenuto del passaggio del tuo modulo. Dai un ID, un nome e una descrizione. Questi elementi sono usati principalmente internamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

Successivamente, imposta la visibilità del passaggio. Puoi scegliere tra **Always show**, **Only show for logged in users** o **Only show for guests**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

Infine, configura lo stile del passaggio. Questi sono campi opzionali.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

Ora è il momento di aggiungere campi al nostro primo passaggio. Clicca su **Add New Field** e seleziona il tipo di sezione che desideri.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

Ogni campo ha diversi parametri da compilare. Per questa prima entrata, selezioneremo il campo **Username**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

Puoi aggiungere quanti passaggi e campi ti servono. Per mostrare i tuoi prodotti affinché i clienti ne scelgano uno, usa il campo Pricing Table. Se vuoi permettere ai tuoi clienti di scegliere un template, aggiungi il campo Template Selection. E così via.

_**Nota:** Se crei un prodotto dopo aver creato il tuo modulo di checkout, dovrai aggiungere il prodotto nella sezione Pricing table. Se non lo aggiungi, il prodotto non apparirà ai tuoi clienti nella pagina di registrazione._

_**Nota 2:** username, email, password, site title, site URL, order summary, payment, e submit button sono campi obbligatori per creare un modulo di checkout._

Mentre lavori sul tuo modulo di checkout, puoi sempre usare il pulsante Anteprima per vedere come i tuoi clienti vedranno il modulo. Puoi anche alternare la visualizzazione come utente esistente o come visitatore.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

Infine, in **Advanced Options** puoi configurare il messaggio per la pagina **Thank You**, aggiungere snippet per tracciare le conversioni, aggiungere CSS personalizzato al tuo modulo di checkout o limitarlo a determinati paesi.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

Puoi anche abilitare o disabilitare manualmente il tuo modulo di checkout attivando questa opzione nella colonna destra, o eliminare permanentemente il modulo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

Non dimenticare di salvare il tuo modulo di checkout!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

Per ottenere lo shortcode del tuo modulo, clicca su **Generate Shortcode** e copia il risultato mostrato nella finestra modale.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

_**Nota:** Dovrai aggiungere questo shortcode alla tua pagina di registrazione per avere il modulo di checkout aggiunto a essa._

## Selezionare in anticipo prodotti e template tramite parametri URL:

Se vuoi creare tabelle di prezzo personalizzate per i tuoi prodotti e pre-selezionare sul modulo di checkout il prodotto o il template che il tuo cliente sceglie dalla tua tabella di prezzo o dalla pagina dei template, puoi usare i parametri URL per questo.

### **Per i piani:**

**Per i piani:** Vai su **Ultimate Multisite > Products > Select a plan**. Dovresti vedere il pulsante **Click to copy Shareable Link** in cima alla pagina. Questo è il link che puoi usare per pre-selezionare questo piano specifico sul tuo modulo di checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

Nota che questo link condivisibile è valido solo per **Plans**. Non puoi usare link condivisibili per pacchetti o servizi.

### **Per i template:**

**Per i template:** Se vuoi pre-selezionare i template di sito sul tuo modulo di checkout, puoi usare il parametro: **?template_id=X** nell'URL della tua pagina di registrazione. L'"X" deve essere sostituito dal **site template ID number**. Per ottenere questo numero, vai su **Ultimate Multisite > Sites**.

Clicca su **Manage** subito sotto il template di sito che vuoi usare. Vedrai il numero SITE ID. Usa semplicemente questo numero per pre-selezionare questo specifico template di sito sul tuo modulo di checkout. Nel nostro caso, il parametro URL sarebbe **?template_id=2**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

Supponiamo che il nostro sito di rete sia [**www.mynetwork.com**](http://www.mynetwork.com) e che la nostra pagina di registrazione con il modulo di checkout si trovi sulla pagina **/register**. L'intero URL con questo template di sito pre-selezionato apparirà come [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E se vuoi, puoi pre-selezionare sia prodotti che template sul tuo modulo di checkout. Tutto ciò che devi fare è copiare il link condivisibile del piano e incollare il parametro del template alla fine. Sarà come [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
