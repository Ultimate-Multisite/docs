---
title: Modelli di sito
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Modelli di sito (v2)

_**NOTA: Questo articolo si riferisce alla versione 2.x di Ultimate Multisite. Se stai usando la versione 1.x,**_ **vedi questo articolo** _**.**_

Il nostro obiettivo quando creiamo una rete premium con Ultimate Multisite è automatizzare il più possibile i processi, offrendo ai nostri clienti flessibilità e diverse opzioni da scegliere durante la creazione dei loro siti web. Un modo semplice per raggiungere questo equilibrio è sfruttare la funzionalità Modelli di sito di Ultimate Multisite.

## Che cos'è un Modello di sito?

Come suggerisce il nome, un Modello di sito è un sito di base che può essere utilizzato come fondamento per creare nuovi siti nella tua rete.

Ciò significa che puoi creare un sito di base, attivare diversi plugin, impostare un tema attivo e personalizzarlo in qualsiasi modo desideri. Poi, quando il tuo cliente crea un nuovo account, invece di ricevere un sito WordPress predefinito senza contenuti significativi, otterrà una copia del tuo sito di base con tutte le personalizzazioni e i contenuti già presenti.

Sembra fantastico, ma come posso creare un nuovo modello di sito? È semplice come può essere.

## Creare e modificare un nuovo Modello di sito

I Modelli di sito sono semplici siti normali nella tua rete. Per creare un nuovo modello, puoi semplicemente andare su **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![aggiungi modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-D1F8SOUTYU.png)**

Questo aprirà una finestra modale che chiederà il **Titolo del sito, Dominio/percorso del sito,** e **Tipo di sito**. Nel campo a discesa **Tipo di sito** assicurati di selezionare **Modello di sito** *.*

_![Modalità aggiungi modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-gGWUnGCS36.png)_

In fondo al modulo, noterai un interruttore **Copia sito**. Questo ti permetterà di creare un nuovo modello di sito basato su un modello di sito esistente come punto di partenza, per aiutarti a risparmiare tempo invece di creare un modello di sito da zero.

![Modalità aggiungi modello di sito 2](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DVSq5dgWfa.png)

### Personalizzare i contenuti di un Modello di sito

Per personalizzare il tuo modello di sito, basta navigare al pannello del suo cruscotto e apportare le modifiche necessarie. Puoi creare nuovi articoli, pagine, attivare plugin e cambiare il tema attivo. Puoi anche andare al Customizer e modificare tutti i tipi di opzioni di personalizzazione.

Tutti questi dati verranno copiati quando un cliente crea un nuovo sito basato su quel Modello di sito.

### Opzioni avanzate

Se hai familiarità con la programmazione personalizzata, puoi utilizzare la nostra API di ricerca e sostituzione per sostituire automaticamente le informazioni sul nuovo sito dopo la sua creazione. È utile per cose come sostituire i nomi delle aziende su una pagina Informazioni, sostituire l'email di contatto sulla pagina Contatti, ecc.

### Utilizzare i Modelli di sito

Ok, hai creato un sacco di Modelli di sito diversi con design, temi e impostazioni differenti. Come li rendi utili nella tua rete ora?

In pratica, ci sono due approcci che puoi utilizzare ora (non contemporaneamente):

  * Attaccare un Modello di sito a ciascuno dei tuoi Piani

**O**

  * Consentire ai tuoi clienti di scegliere i modelli di sito da soli durante la registrazione.

#### Modalità 1: Assegnare Modello di sito

In questa modalità, i tuoi clienti non potranno scegliere un modello quando creano un account, ma piuttosto definirai quale modello dovrebbe essere utilizzato per ciascuno dei tuoi Piani.

Per fare ciò, dovrai andare su **Ultimate Multisite > Products > Edit**.

![Assegna modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-t7UjzQEG5g.png)

Questo ti porterà alla pagina **Edit Produc** t. Nella sezione **Product Options**, trova la scheda **Site template** e seleziona l'opzione **Assegna Sito** **Modello** dal campo a discesa. Questo mostrerà l'elenco dei modelli di sito disponibili e ti permetterà di selezionare solo un modello di sito dedicato al prodotto.

![Assegna modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HTcetltjLR.png)

#### Modalità 2: Scegli Modello di sito disponibile

In questa modalità, offrirai ai tuoi clienti una scelta durante il processo di registrazione. Potranno selezionare tra diversi modelli di sito che definisci nelle impostazioni del prodotto. Hai l'opzione di limitare i modelli di sito che possono scegliere sotto il prodotto selezionato. Ciò ti permetterà di avere set diversi di modelli di sito sotto ogni prodotto, ideale per evidenziare funzioni e caratteristiche diverse per un prodotto a prezzo più alto.

Nella pagina **Modifica Prodotto**. Nella sezione **Product Options**, trova la scheda **Site template** e seleziona l'opzione **Choose Available Site Template** dal campo a discesa. Questo mostrerà l'elenco dei modelli di sito disponibili e ti permetterà di selezionare il modello di sito che desideri sia disponibile. Puoi fare questo scegliendo il suo comportamento: **Disponibile** se vuoi che il modello di sito sia incluso nell'elenco. _**Non disponibile**_ se vuoi che il modello di sito non venga mostrato come opzione. E **Pre-selezionato** se desideri che uno dei modelli di sito elencati sia pre-selezionato.

![Assegna modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dY8gSreOfG.png)

### Modalità predefinita: Selezione del modello di sito nel modulo di pagamento

Se desideri che tutti i tuoi modelli di sito siano disponibili durante la registrazione, o magari non preferisci fare il lavoro extra di assegnare o specificare modelli di sito sotto ogni prodotto che crei, puoi semplicemente impostare la selezione del modello di sito sotto il tuo **Modulo di pagamento**. Per fare ciò, devi andare su **Ultimate Multisite > Moduli di pagamento**. Poi fai clic su **Edit** sotto il modulo che desideri configurare.

![Assegna modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FaXifuzMu3.png)

Questo aprirà la pagina **Modifica Modulo di pagamento**. Trova il campo **Selezione Modello** e fai clic su **Edit** sotto di esso.

![Assegna modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZDAp4vdnve.png)

Si aprirà una finestra modale. Nel campo **Siti Modello** puoi selezionare e elencare tutti i modelli di sito che desideri siano disponibili durante la registrazione. I modelli di sito che specifichi da qui saranno disponibili indipendentemente dal prodotto selezionato dall'utente.

![Assegna modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pCSfzJkf4d.png)

### Opzioni del Modello di sito

Ci sono altre funzioni dei modelli di sito disponibili che puoi attivare o disattivare nelle impostazioni di Ultimate Multisite.

![Opzione modello di sito](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wrwT3rqFEf.png)

#### Consentire il cambio di modello

Abilitare questa opzione consentirà ai tuoi clienti di cambiare il modello scelto durante il processo di registrazione dopo che l'account e il sito sono stati creati. È utile dal punto di vista del cliente poiché consente loro di ri-selezionare un modello se successivamente scoprono che la loro scelta originale non era la migliore per le loro esigenze specifiche.

#### Consentire agli utenti di usare il loro sito come modelli

Poiché gli utenti di sottosito hanno impiegato tempo per costruire e progettare il proprio sito, potrebbero volerlo clonare e usarlo come uno dei modelli di sito disponibili quando creano un altro sottosito nella tua rete. Questa opzione consentirà loro di farlo.

#### Copia media sulla duplicazione del modello

Selezionando questa opzione, verrà copiata la media caricata sul sito modello al nuovo sito creato. Può essere sovrascritto su ciascuno dei piani.

#### **Prevenire l'indicizzazione dei Modelli di sito da parte dei motori di ricerca**

I modelli di sito, come discusso in questo articolo, sono di base ma fanno ancora parte della tua rete, il che significa che sono ancora disponibili per i motori di ricerca. Questa opzione ti permetterà di nascondere i modelli di sito in modo che i motori di ricerca possano indicizzarli.

## Pre-popolare i Modelli di sito con ricerca e sostituzione automatica

Una delle funzionalità più potenti di Ultimate Multisite è la capacità di aggiungere testo arbitrario, colore e campi selezionabili al modulo di registrazione. Una volta che abbiamo acquisito quei dati, possiamo usarli per pre-popolare il contenuto in determinate parti del modello di sito selezionato. Poi, quando il nuovo sito viene pubblicato, Ultimate Multisite sostituirà i segnaposto con le informazioni effettive inserite durante la registrazione.

Per esempio, se desideri ottenere il nome dell'azienda dell'utente finale durante la registrazione e inserire automaticamente il nome dell'azienda nella pagina principale. Nella pagina principale del tuo sito modello devi aggiungere i segnaposto, come nell'immagine sotto (i segnaposto devono essere racchiusi tra parentesi graffe doppie - {{placeholder_name}}).

![segnaposto pagina principale](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yEOlZVv2Gr.png)

Poi, puoi semplicemente aggiungere un campo di registrazione corrispondente sul tuo modulo di pagamento per acquisire quei dati:

![modulo di pagamento](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9adTd73gNT.png)

Il tuo cliente potrà quindi compilare quel campo durante la registrazione.

![campo di registrazione](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jHQ9ZOGWlh.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-preview)

Ultimate Multisite sostituirà quindi i segnaposto con i dati forniti dal cliente automaticamente.

![sostituisci segnaposto](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-chL5wf7wmY.png)

### Risolvere il problema del "modello pieno di segnaposto"

Tutto questo è fantastico, ma ci troviamo ad affrontare un brutto problema: ora i nostri modelli di sito - che possono essere visitati dai nostri clienti - sono pieni di brutti segnaposto che non dicono molto.

Per risolvere questo, offriamo l'opzione di impostare valori fittizi per i segnaposto, e usiamo quei valori per cercare e sostituire i loro contenuti sui siti modello mentre i tuoi clienti li visitano.

Puoi accedere all'editor dei segnaposto del modello andando su **Ultimate Multisite > Settings > Sites**, e poi, nella barra laterale, facendo clic sul link **Edit Placeholders**.

![impostazioni segnaposto](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztZnAexNEZ.png)

Questo ti porterà all'editor dei contenuti dei segnaposto, dove puoi aggiungere segnaposto e i rispettivi contenuti.

![segnaposto modello](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-95QJa1MRGz.png)
