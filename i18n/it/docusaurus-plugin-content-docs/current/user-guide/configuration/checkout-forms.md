---
title: Moduli di checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Moduli di checkout {#checkout-forms}

I moduli di checkout sono un modo semplice e flessibile per sperimentare approcci diversi quando si cerca di convertire nuovi clienti.

Ultimate Multisite 2.0 offre un editor di moduli di checkout che ti permette di creare tutti i moduli che vuoi, con campi diversi, prodotti in offerta, ecc.

Per accedere a questa funzionalità, vai al menu Checkout Forms, nella barra laterale sinistra.

![Elenco dei moduli di checkout](/img/config/checkout-forms-list.png)

In questa pagina, puoi vedere tutti i moduli di checkout che hai.

La tabella elenco include una colonna **Status** così puoi confermare se ogni modulo è attualmente disponibile per i clienti:

| Status | Significato |
|---|---|
| **Active** | Il modulo può essere utilizzato ovunque sia pubblicato il suo shortcode o la sua pagina di registrazione. |
| **Inactive** | Il modulo è salvato ma disabilitato. I clienti non possono completare il checkout con esso finché non lo abiliti di nuovo. |

Usa la colonna dello stato prima di modificare un flusso di registrazione pubblico, soprattutto quando mantieni moduli di checkout in bozza o stagionali insieme ai tuoi moduli attivi.

Se vuoi crearne uno nuovo, clicca semplicemente su Add Checkout Form nella parte superiore della pagina.

Puoi selezionare una di queste tre opzioni come punto di partenza: passaggio singolo, multi-step o vuoto. Poi, clicca su Go to the Editor.

Quando scegli **single step** o **multi-step** come punto di partenza, il modello del modulo ora include per impostazione predefinita un campo **Template Selection**. Questo campo consente ai tuoi clienti di scegliere un template del sito durante il processo di registrazione. Puoi lasciarlo al suo posto, rimuoverlo o riposizionarlo come qualsiasi altro campo nell'editor.

![editor del Checkout Form](/img/config/checkout-form-editor.png)

In alternativa, puoi modificare o duplicare i moduli che hai già cliccando sulle opzioni sotto il suo nome. Lì troverai anche le opzioni per copiare lo shortcode del modulo o per eliminare il modulo.

![azioni al passaggio del mouse sul modulo di checkout](/img/config/checkout-form-hover-actions.png)

#### Panoramica del Checkout Form Editor {#checkout-form-editor-overview}

L'editor del modulo di checkout offre un'interfaccia completa per creare i tuoi moduli di registrazione. Ecco una panoramica del layout dell'editor:

![panoramica dell'editor del Checkout Form](/img/config/checkout-form-editor-overview.png)

### Modificare un modulo di checkout {#editing-a-checkout-form}

Puoi creare moduli di checkout per scopi diversi. In questo esempio lavoreremo su un modulo di registrazione.

Dopo essere passato all'editor del modulo di checkout, assegna al modulo un nome (che verrà utilizzato solo come riferimento interno) e uno slug (usato per creare shortcode, ad esempio).

![editor del Checkout Form](/img/config/checkout-form-editor.png)

I moduli sono composti da passaggi e campi. Puoi aggiungere un nuovo passaggio cliccando su Add New Checkout Step.

![Aggiungi nuovo passaggio di checkout](/img/config/checkout-form-add-step.png)

Nella prima scheda della finestra modale, compila il contenuto dello step del tuo form. Assegnagli un ID, un nome e una descrizione. Questi elementi sono usati principalmente internamente.

![Scheda contenuto dello step del checkout form](/img/config/checkout-form-step-content.png)

Successivamente, imposta la visibilità dello step. Puoi scegliere tra "Always show", "Only show for logged in users" o "Only show for guests".

![Scheda visibilità dello step del checkout form](/img/config/checkout-form-step-visibility.png)

Infine, configura lo stile dello step. Questi campi sono facoltativi.

![Scheda stile dello step del checkout form](/img/config/checkout-form-step-style.png)

Ora è il momento di aggiungere campi al nostro primo step. Basta cliccare su Add New Field e selezionare il tipo di sezione che desideri.

![Step del checkout form con campi](/img/config/checkout-form-step-with-fields.png)

Ogni campo ha parametri diversi da compilare. Per questo primo inserimento, selezioneremo il campo "Username".

![Menu a discesa per la selezione del tipo di campo](/img/config/checkout-form-field-type-dropdown.png)

![Impostazioni del contenuto del campo Username](/img/config/checkout-form-username-content.png)

![Impostazioni di visibilità del campo Username](/img/config/checkout-form-username-visibility.png)

![Impostazioni di stile del campo Username](/img/config/checkout-form-username-style.png)

Puoi aggiungere tutti gli step e i campi di cui hai bisogno. Per mostrare i tuoi prodotti affinché i tuoi clienti ne scelgano uno, usa il campo Pricing Table. Se vuoi permettere ai tuoi clienti di scegliere un template, aggiungi il campo Template Selection. E così via.

![Finestra di dialogo Add New Field](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** username, email, password, titolo del sito, URL del sito, riepilogo dell'ordine, pagamento e pulsante di invio sono campi obbligatori per creare un modulo di checkout._

Mentre lavori sul tuo modulo di checkout, puoi sempre usare il pulsante Preview per vedere come i tuoi clienti vedranno il modulo. Puoi anche alternare tra la visualizzazione come utente esistente o come visitatore

![Pulsante di anteprima del modulo di checkout](/img/config/checkout-form-preview-button.png)

![Finestra modale di anteprima del modulo di checkout](/img/config/checkout-form-preview-modal.png)

Infine, in Advanced Options puoi configurare il messaggio per la pagina "Thank You", aggiungere snippet per tracciare le conversioni, aggiungere CSS personalizzato al tuo modulo di checkout o limitarlo a determinati paesi.

![Opzioni avanzate](/img/config/checkout-form-advanced.png)

Puoi anche abilitare o disabilitare manualmente il tuo modulo di checkout attivando o disattivando questa opzione nella colonna a destra, oppure eliminare definitivamente il modulo.

![Interruttore attivo](/img/config/checkout-form-active.png)

Per eliminare un modulo, fai clic sull'opzione di eliminazione nelle azioni del modulo:

![Opzione di eliminazione del modulo di checkout](/img/config/checkout-form-delete.png)

Non dimenticare di salvare il tuo modulo di checkout!

![Pulsante Salva](/img/config/checkout-form-save.png)

Per ottenere lo shortcode del tuo modulo, fai clic su Generate Shortcode e copia il risultato mostrato nella finestra modale.

![Pulsante Salva con shortcode](/img/config/checkout-form-save.png)

### Il campo Pricing Table {#the-pricing-table-field}

Il campo **Pricing Table** mostra i tuoi prodotti nel modulo di checkout così che i clienti possano scegliere un piano. Quando modifichi questo campo, puoi configurare diverse opzioni:

![Impostazioni del campo Pricing Table](/img/config/pricing-table-field-settings.png)

Ecco come appare la tabella prezzi nel modulo di registrazione frontend:

![Tabella prezzi checkout frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Prodotti**: Seleziona quali prodotti mostrare e l'ordine in cui appaiono.
  * **Force Different Durations**: Quando abilitato, tutti i prodotti vengono mostrati indipendentemente dal fatto che abbiano una variazione di prezzo corrispondente per il periodo di fatturazione attualmente selezionato. Quando disabilitato (predefinito), i prodotti senza una variazione per il periodo selezionato vengono nascosti.
    ![Opzione force durations della tabella prezzi](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Nasconde la tabella prezzi quando un piano è già stato selezionato tramite l'URL (ad es. `/register/premium`).
  * **Pricing Table Template**: Scegli il modello visivo per la tabella prezzi (Simple List, Legacy, ecc.).

Se aggiungi un prodotto alla Pricing Table prima che il modulo includa i campi necessari per completare il flusso di checkout di quel prodotto, l'editor ora mostra un avviso. Usa l'avviso per aggiungere il campo obbligatorio mancante prima di pubblicare o salvare modifiche per un modulo di registrazione live.

### Aggiunta di un selettore del periodo {#adding-a-period-selection-toggle}

If you have configured [Price Variations](creating-your-first-subscription-product#price-variations) on your products (e.g. monthly and annual pricing), you can add a **Period Selection** field to your checkout form. This field displays a toggle that allows customers to switch between billing periods, and the pricing table updates dynamically in real time.

#### Step 1: Set Up Price Variations on Your Products {#step-1-set-up-price-variations-on-your-products}

Before adding the Period Selection field, make sure your products have price variations configured. Go to **Ultimate Multisite > Products**, edit a product, and navigate to the **Price Variations** tab to add alternate billing periods (e.g. Annual at a discounted price).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Add the Period Selection Field to Your Checkout Form {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Go to **Ultimate Multisite > Checkout Forms** and edit your checkout form.

2. Scroll down to the step that contains your **Pricing Table** field and click **Add new Field**.

3. In the field type selection dialog, click **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configure the period options. Each option needs:
   * **Duration**: The number (e.g. `1`)
   * **Duration unit**: The period type (Days, Weeks, Months, or Years)
   * **Label**: The text customers will see (e.g. "Monthly", "Annual")

5. Fai clic su **+ Add Option** per aggiungere altre scelte di periodo. Queste opzioni devono corrispondere alle variazioni di prezzo che hai configurato sui tuoi prodotti.

![Impostazioni del field Period Selection](/img/config/period-selection-field-settings.png)

6. Scegli un **Period Selector Template** (Clean è l’impostazione predefinita, che visualizza un semplice selettore stilizzato pronto per CSS personalizzato).

7. Fai clic su **Save Field**.

#### Passaggio 3: Posizionare il field sopra la tabella dei prezzi {#step-3-position-the-field-above-the-pricing-table}

Per la migliore esperienza utente, assicurati che il field Period Selection appaia **prima** del field Pricing Table nel tuo passaggio di checkout. Puoi trascinare i field per riordinarli nell’editor del modulo di checkout. In questo modo, i clienti scelgono prima un periodo di fatturazione e poi vedono i prezzi per quel periodo.

![Editor del modulo di checkout che mostra l’ordine dei field](/img/config/checkout-form-editor-with-fields.png)

#### Come funziona sul frontend {#how-it-works-on-the-frontend}

Una volta configurato, i clienti che visitano la tua pagina di registrazione vedranno il selettore del periodo sopra la tabella dei prezzi. Quando fanno clic su un periodo di fatturazione diverso:

  * La tabella dei prezzi si aggiorna istantaneamente per mostrare i prezzi per il periodo selezionato (non è necessario ricaricare la pagina).
  * Se **Force Different Durations** è disabilitato nel field Pricing Table, i prodotti senza una variazione di prezzo per il periodo selezionato saranno nascosti.
  * Se **Force Different Durations** è abilitato, tutti i prodotti rimangono visibili anche se non hanno una variazione per il periodo selezionato (mostreranno il loro prezzo predefinito).

#### Preselezionare un periodo di fatturazione tramite URL {#pre-selecting-a-billing-period-via-url}

Puoi anche preselezionare un prodotto e un periodo di fatturazione tramite l'URL. Ultimate Multisite supporta questi schemi di URL:

  * `/register/premium` — Preseleziona solo il prodotto "Premium"
  * `/register/premium/12` — Preseleziona il prodotto e la durata di 12 mesi
  * `/register/premium/1/year` — Preseleziona il prodotto con una durata di 1 anno

### Il campo Selezione template {#the-template-selection-field}

Il campo **Selezione template** consente ai clienti di scegliere un template per il sito durante il checkout. Ora è incluso per impostazione predefinita nei template dei moduli di checkout **a passaggio singolo** e **multi-passaggio** aggiunti in Ultimate Multisite v2.6.1.

#### Aggiungere il campo manualmente {#adding-the-field-manually}

Se stai lavorando con un modulo creato prima della v2.6.1, o partito da un template vuoto:

1. Vai su **Ultimate Multisite > Moduli di checkout** e modifica il tuo modulo di checkout.
2. Nel passaggio in cui vengono raccolti i dettagli del sito, fai clic su **Aggiungi nuovo campo**.
3. Seleziona **Selezione template** dalla finestra di dialogo del tipo di campo.
4. Configura il campo:
   - **Etichetta** — Il titolo che i clienti vedono sopra la griglia dei template (ad es. "Scegli un template per il sito").
   - **Obbligatorio** — Se i clienti devono selezionare un template prima di procedere.

#### Come funziona {#how-it-works}

Quando un cliente sceglie un template durante il checkout, Ultimate Multisite lo utilizza durante il provisioning del suo nuovo sito. I template mostrati provengono dal tuo elenco **Template dei siti** (**Ultimate Multisite > Template dei siti**). Qui compaiono solo i template contrassegnati come disponibili per i clienti.

### Domini di base dei moduli di checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 tratta i domini configurati nei campi **Site URL** del modulo di checkout come domini base della rete. Usa le impostazioni dei domini disponibili del campo quando vuoi che i clienti creino siti sotto uno o più domini di registrazione condivisi, come `example.com` e `sites.example.com`.

I domini base condivisi del modulo di checkout non sono trattati come mappature di domini personalizzati per singolo sito. Quando un cliente crea un sito in sottodirectory su una di queste basi, Ultimate Multisite non crea un record di dominio mappato che renderebbe l'host condiviso appartenente solo a quel sito. L'host condiviso rimane disponibile per siti fratelli che usano la stessa base del modulo di checkout.

Mantieni i domini personalizzati per gli host mappati per cliente, come `customer-example.com`. Mantieni i domini base del modulo di checkout per gli host di registrazione condivisi che molti siti possono usare.

#### Rimozione del campo {#removing-the-field}

Se non offri template di siti, rimuovi il campo Template Selection dal tuo modulo. I clienti riceveranno quindi il template predefinito configurato in **Ultimate Multisite > Settings > Site Templates**.
