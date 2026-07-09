---
title: Modelli di sito
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modelli di sito (v2)

_**NOTA: Questo articolo si riferisce a Ultimate Multisite versione 2.x. Se stai usando la versione 1.x,**_ **consulta questo articolo** _**.**_

Il nostro obiettivo quando creiamo una rete premium con Ultimate Multisite è automatizzare il maggior numero possibile di processi, offrendo al contempo ai nostri clienti flessibilità e diverse opzioni tra cui scegliere quando creano i loro siti web. Un modo semplice per ottenere questo equilibrio è usare la funzionalità Modelli di sito di Ultimate Multisite.

## Che cos’è un modello di sito?

Come suggerisce il nome, un modello di sito è un sito boilerplate che può essere usato come base quando si creano nuovi siti nella tua rete.

Questo significa che puoi creare un sito di base, attivare diversi plugin, impostare un theme attivo e personalizzarlo in qualsiasi modo tu voglia. Poi, quando il tuo cliente crea un nuovo Account, invece di ottenere un sito WordPress predefinito senza contenuti significativi al suo interno, riceverà una copia del tuo sito di base con tutte le personalizzazioni e i contenuti già pronti.

Sembra fantastico, ma come faccio a creare un nuovo modello di sito? È il più semplice possibile.

## Creazione e modifica di un nuovo modello di sito

I modelli di sito sono semplicemente siti normali nella tua rete. Per creare un nuovo modello puoi semplicemente andare su **Amministrazione rete > Ultimate Multisite > Siti > Aggiungi sito.**

**![Pulsante Aggiungi sito nella pagina dell’elenco dei siti](/img/config/site-templates-list.png)**

Questo aprirà una finestra modale in cui verranno richiesti **Titolo del sito, Dominio/percorso del sito,** e **Tipo di sito**. Nel campo a discesa **Tipo di sito**, assicurati di selezionare **Modello di sito** *.*

_![Modale Aggiungi modello di sito con menu a discesa del tipo di sito](/img/config/site-templates-list.png)_

Puoi anche aggiungere una descrizione rivolta al cliente per spiegare cosa include il modello:

![Campo descrizione del modello di sito nella schermata di modifica del modello di sito](/img/config/site-template-edit-description.png)

In fondo al modulo noterai un interruttore **Copia sito**. Questo ti permetterà di creare un nuovo modello di sito basato su un modello di sito esistente come punto di partenza, per aiutarti a risparmiare tempo invece di creare un modello di sito da zero.

![Modale Aggiungi modello di sito con interruttore copia sito](/img/config/site-templates-list.png)

### Personalizzare i contenuti di un modello di sito

Per personalizzare il tuo modello di sito, accedi semplicemente al suo pannello Dashboard e apporta le modifiche di cui hai bisogno. Puoi creare nuovi articoli, pagine, attivare plugin e cambiare il theme attivo. Puoi persino andare nel Customizer e modificare ogni tipo di opzione di personalizzazione.

![Interfaccia di modifica del modello di sito](/img/config/site-template-edit.png)

Tutti questi dati verranno copiati quando un cliente crea un nuovo sito basato su quel modello di sito.

### Opzioni avanzate

Se hai familiarità con un po’ di codice personalizzato, puoi usare la nostra API di ricerca e sostituzione per sostituire automaticamente le informazioni sul nuovo sito dopo la sua creazione. Questo è utile per operazioni come sostituire i nomi delle aziende in una pagina Chi siamo, sostituire l’email di contatto nella pagina Contatti, ecc.

### Usare i modelli di sito

Ok, quindi hai creato un gruppo di modelli di sito diversi con design, theme e impostazioni differenti. Come puoi renderli utili ora nella tua rete?

In sostanza, ci sono due approcci che puoi usare ora (non simultaneamente):

  * Associare un modello di sito a ciascuno dei tuoi piani

**OPPURE**

  * Consentire ai tuoi clienti di scegliere autonomamente i modelli di sito durante la registrazione.

#### Modalità 1: Assegna modello di sito

In questa modalità, i tuoi clienti non potranno scegliere un modello quando creano un Account; sarai invece tu a definire quale modello deve essere usato su ciascuno dei tuoi piani.

Per farlo, dovrai andare su **Ultimate Multisite > Prodotti > Modifica**.

![Modifica prodotto per assegnare un modello di sito](/img/config/product-site-templates.png)

Questo ti porterà alla pagina **Modifica prodotto**. Nella sezione **Opzioni prodotto**, trova la scheda **Modello di sito** e seleziona l’opzione **Assegna modello di sito** dal campo a discesa. Verrà visualizzato l’elenco dei modelli di sito disponibili e potrai selezionare un solo modello di sito dedicato al prodotto.

![Scheda modello di sito del prodotto con opzione assegna modello di sito](/img/config/product-site-templates.png)

#### Modalità 2: Scegli modello di sito disponibile

In questa modalità, offrirai ai tuoi clienti una scelta durante il processo di registrazione. Potranno selezionare tra diversi modelli di sito che definisci nelle impostazioni del prodotto. Hai un’opzione per limitare i modelli di sito tra cui possono scegliere per il prodotto selezionato. Questo ti permetterà di avere diversi set di modelli di sito per ciascun prodotto, ideale per mettere in evidenza funzioni e caratteristiche diverse per un prodotto dal prezzo più alto.

Nella pagina **Modifica prodotto**. Nella sezione **Opzioni prodotto**, trova la scheda **Modello di sito** e seleziona l’opzione **Scegli modello di sito disponibile** dal campo a discesa. Verrà visualizzato l’elenco dei modelli di sito disponibili e potrai selezionare il modello di sito che desideri rendere disponibile. Puoi farlo scegliendone il comportamento: **Disponibile** se vuoi che il modello di sito sia incluso nell’elenco. _**Non disponibile**_ se vuoi che il modello di sito non venga mostrato come opzione. E **Preselezionato** se desideri che uno dei modelli di sito elencati sia selezionato come predefinito.

![Scegli modelli di sito disponibili con opzioni di comportamento](/img/config/product-site-templates.png)

### Modalità predefinita: selezione del modello di sito nel modulo di checkout

Se desideri che tutti i tuoi modelli di sito siano disponibili durante la registrazione, o magari preferisci non fare lavoro extra assegnando o specificando modelli di sito per ciascun prodotto che crei, puoi semplicemente impostare la selezione del modello di sito nel tuo **Modulo di checkout**. Per farlo, vai su **Ultimate Multisite > Moduli di checkout** e fai clic su **Modifica** sotto il modulo che desideri configurare.

Questo aprirà la pagina **Modifica modulo di checkout**. Trova il campo **Selezione modello** e fai clic su **Modifica** sotto di esso.

Apparirà una finestra modale. Nel campo **Template Sites** puoi selezionare ed elencare tutti i template di sito che desideri siano disponibili durante la registrazione. I template di sito che specifichi da qui saranno disponibili indipendentemente dal prodotto selezionato dall’utente.

![Campo di selezione del template nell’editor del modulo di checkout](/img/config/checkout-form-template-step.png)

Sul frontend, i clienti vedono il selettore di template durante il checkout e possono scegliere il design iniziale per il loro nuovo sito.

![Selettore di template frontend durante la registrazione](/img/config/frontend-template-chooser.png)

### Opzioni dei template di sito

Sono disponibili altre funzioni per i template di sito che puoi attivare o disattivare nelle impostazioni di Ultimate Multisite.

![Opzioni dei template di sito nelle impostazioni di Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Consenti il cambio di template

Abilitando questa opzione, i tuoi clienti potranno cambiare il template scelto durante il processo di registrazione dopo che Account e sito sono stati creati. Questo è utile dal punto di vista del cliente, poiché gli consente di selezionare nuovamente un template se in seguito scopre che la scelta originale non era la migliore per le sue esigenze specifiche.

#### Consenti agli utenti di usare il proprio sito come template

Poiché gli utenti dei sottositi hanno dedicato tempo a creare e progettare il proprio sito, potrebbero volerlo clonare e usarlo come uno dei template di sito disponibili quando creano un altro sottosito nella tua rete. Questa opzione consentirà loro di farlo.

#### Copia i media durante la duplicazione del template

Selezionando questa opzione, i media caricati sul sito template verranno copiati nel sito appena creato. Questa impostazione può essere sovrascritta su ciascuno dei piani.

#### **Impedisci ai motori di ricerca di indicizzare i template di sito**

I template di sito, come discusso in questo articolo, sono boilerplate ma fanno comunque parte della tua rete, il che significa che sono ancora disponibili per essere trovati dai motori di ricerca. Questa opzione ti consentirà di nascondere i template di sito in modo che i motori di ricerca possano indicizzarli.

## Precompilazione dei template di sito con ricerca e sostituzione automatica

Una delle funzionalità più potenti di Ultimate Multisite è la possibilità di aggiungere campi di testo, colore e selezione arbitrari al modulo di registrazione. Una volta acquisiti quei dati, possiamo usarli per precompilare il contenuto in determinate parti del template di sito selezionato. Poi, quando il nuovo sito viene pubblicato, Ultimate Multisite sostituirà i placeholder con le informazioni effettive inserite durante la registrazione.

Ad esempio, se desideri ottenere il nome dell’azienda dell’utente finale durante la registrazione e inserirlo automaticamente nella home page. Nella home page del tuo sito template devi aggiungere i placeholder, come nell’immagine qui sotto (i placeholder devono essere aggiunti racchiusi tra doppie parentesi graffe - {{placeholder_name}}).

![Homepage con testo placeholder tra parentesi graffe](/img/config/site-templates-list.png)

Quindi, puoi semplicemente aggiungere un campo di registrazione corrispondente nel tuo modulo di checkout per acquisire quei dati. Lo stesso editor del modulo di checkout usato per la selezione del template ti consente di posizionare campi personalizzati accanto al selettore di template:

![Selezione del template e campi di registrazione nell’editor del modulo di checkout](/img/config/checkout-form-template-step.png)

Il tuo cliente potrà quindi compilare quel campo durante la registrazione.

![Modulo di checkout frontend con selettore di template](/img/config/frontend-template-chooser.png)

Ultimate Multisite sostituirà quindi automaticamente i placeholder con i dati forniti dal cliente.

![Placeholder sostituiti con i dati del cliente sul sito](/img/config/site-templates-list.png)

### Risolvere il problema del "template pieno di placeholder"

Tutto questo è ottimo, ma ci imbattiamo in un problema poco gradevole: ora i nostri template di sito - che possono essere visitati dai nostri clienti - sono pieni di placeholder poco eleganti che non comunicano molto.

Per risolvere il problema, offriamo l’opzione di impostare valori fittizi per i placeholder, e usiamo quei valori per cercare e sostituire i loro contenuti sui siti template mentre i tuoi clienti li visitano.

Puoi accedere all’editor dei placeholder dei template andando su **Ultimate Multisite > Settings > Sites** e poi, nella barra laterale, facendo clic sul link **Edit Placeholders**.

![Impostazioni dei template di sito nella pagina delle impostazioni Sites](/img/config/settings-sites-templates-section.png)

Questo ti porterà all’editor dei contenuti dei placeholder, dove puoi aggiungere placeholder e i rispettivi contenuti.

![Punto di accesso all’editor dei contenuti dei placeholder dei template](/img/config/settings-sites-templates-section.png)
