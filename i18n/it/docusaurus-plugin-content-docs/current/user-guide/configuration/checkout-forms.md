---
title: Moduli di checkout
sidebar_position: 19
_i18n_hash: 66bfff807dcb07f2c495741a4fa601b9
---
# Moduli di checkout

I Moduli di checkout sono un modo semplice e flessibile per sperimentare diversi approcci quando si cerca di convertire nuovi clienti.

Ultimate Multisite 2.0 offre un editor di Moduli di checkout che ti consente di creare quanti moduli desideri, con campi diversi, prodotti in offerta, ecc.

Per accedere a questa funzionalità, vai al menu Moduli di checkout, nella barra laterale sinistra.

![Checkout Forms list](/img/config/checkout-forms-list.png)

In questa pagina, puoi vedere tutti i moduli di checkout che hai.

Se vuoi crearne uno nuovo, basta fare clic su **Add Checkout Form** in alto nella pagina.

Puoi selezionare una di queste tre opzioni come punto di partenza: singolo passaggio, multi-passaggio o vuoto. Quindi, fai clic su **Go to the Editor**.

![Checkout Form editor](/img/config/checkout-form-editor.png)

In alternativa, puoi modificare o duplicare i moduli che hai già facendo clic sulle opzioni sotto il loro nome. Lì troverai anche le opzioni per copiare lo shortcode del modulo o per eliminarlo.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Modifica di un Modulo di checkout

Puoi creare moduli di checkout per diversi scopi. In questo esempio lavoreremo su un modulo di registrazione.

Dopo aver navigato all'editor del modulo di checkout, assegna al tuo modulo un nome (che sarà usato solo per riferimento interno) e un slug (usato per creare shortcode, ad esempio).

![Checkout Form editor](/img/config/checkout-form-editor.png)

I moduli sono composti da passaggi e campi. Puoi aggiungere un nuovo passaggio facendo clic su **Add New Checkout Step**.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Nella prima scheda della finestra modale, compila il contenuto del passaggio del tuo modulo. Assegna un ID, un nome e una descrizione. Questi elementi sono usati principalmente internamente.

![Checkout form step](/img/config/checkout-form-step.png)

Successivamente, imposta la visibilità del passaggio. Puoi scegliere tra **Always show**, **Only show for logged in users** o **Only show for guests**.

![Checkout form step](/img/config/checkout-form-step.png)

Infine, configura lo stile del passaggio. Questi sono campi opzionali.

![Checkout form step](/img/config/checkout-form-step.png)

Ora è il momento di aggiungere campi al nostro primo passaggio. Basta fare clic su **Add New Field** e selezionare il tipo di sezione che desideri.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Ogni campo ha diversi parametri da compilare. Per questa prima entrata, selezioneremo il campo **Username**.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Puoi aggiungere quanti passaggi e campi desideri. Per mostrare i tuoi prodotti affinché i clienti ne scelgano uno, usa il campo **Pricing Table**. Se vuoi permettere ai tuoi clienti di scegliere un modello, aggiungi il campo **Template Selection**. E così via.

_**Nota:** username, email, password, titolo del sito, URL del sito, riepilogo dell'ordine, pagamento e pulsante di invio sono campi obbligatori per creare un modulo di checkout._

Mentre lavori sul tuo modulo di checkout, puoi sempre usare il pulsante **Preview** per vedere come i tuoi clienti vedranno il modulo. Puoi anche alternare la visualizzazione come utente esistente o come visitatore

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Infine, nelle **Advanced Options** puoi configurare il messaggio per la pagina **Thank You**, aggiungere snippet per tracciare le conversioni, aggiungere CSS personalizzato al tuo modulo di checkout o limitarlo a determinati paesi.

![Advanced Options](/img/config/checkout-form-advanced.png)

Puoi anche abilitare o disabilitare manualmente il tuo modulo di checkout attivando questa opzione nella colonna di destra, o eliminare permanentemente il modulo.

![Active toggle](/img/config/checkout-form-active.png)

Non dimenticare di salvare il tuo modulo di checkout!

![Save button](/img/config/checkout-form-save.png)

Per ottenere lo shortcode del tuo modulo fai clic su **Generate Shortcode** e copia il risultato mostrato nella finestra modale.

![Save button with shortcode](/img/config/checkout-form-save.png)
