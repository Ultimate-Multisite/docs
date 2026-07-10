---
title: Creare il tuo primo prodotto in abbonamento
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Creare il tuo primo prodotto in abbonamento (v2) {#creating-your-first-subscription-product-v2}

_**NOTA IMPORTANTE: Questo articolo è solo per gli utenti di Ultimate Multisite versione 2.x. Se stai usando la versione 1.x,**_ **_**consulta questo articolo**_**.

Per iniziare a gestire la tua rete e cominciare a vendere i tuoi servizi a potenziali utenti, devi avere diverse opzioni di abbonamento. Come crei questi prodotti? Quali sono i tipi di prodotti che puoi offrire? In questo articolo tratteremo tutto ciò che devi sapere sui prodotti.

## Tipo di prodotto {#product-type}

Con Ultimate Multisite puoi offrire due categorie di prodotti ai tuoi clienti: **piani** e **add-on** **(Order Bump)**. Gli add-on possono essere divisi in due tipi:**pacchetti** e **servizi**. Vedremo di seguito le loro differenze e particolarità.

  * **Piani** : il prodotto fondamentale di Ultimate Multisite. Il tuo cliente può avere una membership solo se è collegata a un piano. Un piano fornisce ai tuoi clienti uno o più siti (dipende dalle configurazioni del tuo piano) con le limitazioni che imposti nella pagina di modifica del prodotto.

  * **Pacchetti** : add-on che incidono direttamente sulle funzionalità dei piani Ultimate Multisite. Modificano le limitazioni o aggiungono nuove risorse, plugin o temi al piano originale acquistato dal tuo cliente. Ad esempio, un piano di base potrebbe consentire 1.000 visite al mese e puoi rendere disponibile un pacchetto che estende questo numero a 10.000.

  * **Servizi:** add-on che non modificano le funzionalità di Ultimate Multisite. Sono attività che realizzerai per il tuo cliente in aggiunta al piano che ha acquistato. Ad esempio, il tuo cliente potrebbe acquistare un piano che consente un singolo sito e pagare anche per un servizio extra che realizzerà il design di questo sito.

## Gestione dei prodotti {#managing-products}

Per molti la scheda **Prodotti** in Ultimate Multisite **(Ultimate Multisite > Products)** può essere equiparata ai piani in un ambiente di hosting tradizionale.

All'interno di Ultimate Multisite la scheda Products definisce la struttura e le limitazioni applicabili a uno specifico prodotto o servizio. Tali strutture si estendono alla descrizione del prodotto o servizio, al prezzo, alle tasse e alle autorizzazioni.

Questa sezione guiderà la tua comprensione di questo pilastro essenziale di Ultimate Multisite.

![Pagina elenco prodotti](/img/config/products-list.png)

## Aggiungere prodotti {#adding-products}

Che si tratti di un piano, pacchetto o servizio, il punto di ingresso per definire un nuovo elemento è tramite **Ultimate Multisite > Products > Add Product**.

![Pulsante Add Product](/img/config/product-add-button.png)

L'interfaccia contiene due sezioni predominanti. A sinistra ci sono diverse schede che aiutano nella definizione del prodotto e a destra ci sono alcune sezioni per definire il prezzo base del prodotto, il suo stato attivo e l'immagine del prodotto.

![Panoramica della pagina di modifica prodotto](/img/config/product-edit-full.png)

### Descrizione {#description}

Le informazioni di base del prodotto possono essere definite fornendo un nome e una descrizione del prodotto. Questi identificatori vengono visualizzati ovunque siano richieste le informazioni del prodotto, come la selezione di piani e prezzi, fatture, upgrade e simili.

![Sezione descrizione prodotto](/img/config/product-description.png)

### Tipo di prezzo {#pricing-type}

Sul lato destro dell'interfaccia è possibile definire il prezzo base.

![Sezione prezzo e salvataggio](/img/config/product-pricing-save.png)

Ultimate Multisite supporta tre diversi tipi di prezzo. L'opzione **a pagamento** richiede all'amministratore della rete informazioni relative al prezzo del prodotto e alla frequenza di fatturazione.

### Prezzo {#pricing}

Il componente del prezzo definisce il prezzo base del prodotto e l'intervallo di fatturazione.

![Sezione prezzo e salvataggio](/img/config/product-pricing-save.png)

quindi un prezzo di esempio di $29.99 con un'impostazione di 1 mese fatturerà $29.99 ogni mese. Allo stesso modo, un prezzo di $89.97 con un'impostazione di 3 mesi fatturerà quell'importo ogni trimestre.

### Cicli di fatturazione {#billing-cycles}

La sezione dei cicli di fatturazione specifica la frequenza dell'intervallo di fatturazione menzionato sopra ed è generalmente intesa alla luce di contratti o termini fissi.

![Sezione prezzo e salvataggio](/img/config/product-pricing-save.png)

Ad esempio, un prezzo del prodotto di $29.99 con un intervallo di 1 mese e 12 cicli di fatturazione fatturerebbe $29.99 al mese per il prodotto nei successivi 12 mesi. In altre parole, tale impostazione stabilirebbe un termine a prezzo fisso di $29.99 al mese per 12 mesi e poi cesserebbe la fatturazione.

### Periodo di prova {#trial-period}

Abilitare l'interruttore dell'offerta di prova consente all'amministratore della rete di definire un periodo di prova per il prodotto.

![Sezione prezzo e salvataggio](/img/config/product-pricing-save.png)

Durante il periodo di prova, i clienti sono liberi di utilizzare il prodotto e non verrà loro addebitato alcun importo finché il periodo di prova non sarà terminato.

### Costo di configurazione {#setup-fee}

Puoi anche applicare un costo di configurazione al tuo piano.

![Sezione prezzo e salvataggio](/img/config/product-pricing-save.png)

Questo significa che il tuo cliente pagherà un importo extra al primo addebito (in aggiunta al prezzo del piano) che corrisponde al costo definito in questa sezione.

### Attivo {#active}

L'interruttore attivo definisce effettivamente se il prodotto è disponibile per i clienti per nuove registrazioni.

![Interruttore attivo](/img/config/product-active.png)

Se ci sono clienti esistenti su questo piano, impostare l'interruttore sullo stato disabilitato rende effettivamente il piano riservato ai clienti esistenti, rimuovendolo dalle future registrazioni. **I clienti esistenti sul piano continueranno a essere fatturati** finché non verranno trasferiti a un nuovo piano o rimossi dal piano.

### Immagine del prodotto {#product-image}

Il pulsante **Upload Image** consente all'amministratore della rete di utilizzare la libreria multimediale per selezionare o caricare un'immagine del prodotto.

![Sezione immagine prodotto](/img/config/product-image.png)

### Eliminare {#delete}

Il pulsante **Delete Product** elimina il prodotto dal sistema. Appare una volta che il prodotto è pubblicato.

![Sezione elimina prodotto](/img/config/product-delete.png)

A differenza di altre eliminazioni, il prodotto non viene inserito in alcuno stato di cestino. Pertanto, una volta eliminato, l'azione è irreversibile.

### Opzioni del prodotto {#product-options}

Una volta definite le informazioni di base sul prodotto, le opzioni del prodotto aiutano l’amministratore della rete a definire ulteriormente gli attributi specifici del prodotto.

#### Generale {#general}

La scheda **Generale** definisce gli attributi generali del prodotto non applicabili a nessuna delle altre schede specifiche del prodotto.

![Scheda Generale](/img/config/product-general-tab.png)

L’autoesplicativo **slug del prodotto** definisce lo slug con cui il prodotto viene identificato negli URL e in altre aree di Ultimate Multisite.

Ultimate Multisite supporta diversi tipi di prodotto, ossia Piano, Pacchetto e Servizio. Le schede **Opzioni del prodotto** vengono adattate dinamicamente in base al tipo di prodotto specificato.

Il **Ruolo cliente** specifica il ruolo assegnato al cliente quando il sito viene creato. In genere, per la maggior parte degli amministratori di rete, sarà il valore predefinito di Ultimate Multisite o Amministratore. Il ruolo predefinito di Ultimate Multisite può essere impostato in **Ultimate Multisite > Impostazioni > Accesso e registrazione**.

![Impostazioni del ruolo cliente](/img/config/product-customer-role-settings.png)

#### Upgrade e downgrade {#up--downgrades}

Questa scheda specifica i percorsi di upgrade e downgrade disponibili per un cliente all’interno del suo livello specifico.

Per comprendere questo concetto, considera un esempio in cui un’installazione Ultimate Multisite di nicchia fornisce soluzioni di gestione dell’apprendimento ai propri clienti. Per ottenere questo risultato vengono definiti tre piani (Base, Plus e Premium) e vengono attivati plugin specifici per ciascun piano (vedi più avanti in questa sezione per le istruzioni su come attivare i plugin).

Se l’installazione Ultimate Multisite serve anche siti web aziendali o siti web eCommerce, quei piani potrebbero richiedere l’installazione e l’attivazione di plugin diversi.

In tal senso, sarebbe indesiderabile e problematico consentire ai clienti eLearning di passare a piani eCommerce, poiché tali piani, prezzi e limitazioni potrebbero non essere adeguati.

Pertanto, per limitare il percorso del cliente e prevenire incidenti, l’amministratore della rete può definire un gruppo di piani e, all’interno di quel gruppo, specificare i piani a cui il cliente può passare.

![Scheda Upgrade e downgrade](/img/config/product-upgrades.png)

Per definire un gruppo di piani, specifica i piani compatibili nell’elenco **gruppo di piani**. L’**ordine del prodotto** determina come i piani vengono ordinati e visualizzati dal più basso al più alto.

Ultimate Multisite include anche una funzionalità di **aumento dell’ordine** con cui prodotti e servizi aggiuntivi appropriati possono essere aggiunti ai piani. Questi vengono offerti al cliente come elementi aggiuntivi che possono essere aggiunti ai piani durante il pagamento o durante un upgrade.

#### Variazioni di prezzo {#price-variations}

Le variazioni di prezzo consentono all’amministratore della rete di specificare livelli di prezzo alternativi in base alla durata. Questa impostazione rende possibile offrire lo stesso prodotto con fatturazione mensile, trimestrale, annuale o con qualsiasi altro periodo di fatturazione. Ad esempio, puoi configurare un prodotto a $29.99/mese con un’opzione annuale scontata a $249.99/anno.

![Scheda Variazioni di prezzo](/img/config/product-price-variations-tab.png)

Per stabilire le variazioni di prezzo, imposta l’interruttore **Abilita variazioni di prezzo** su attivo e fai clic sul pulsante **Aggiungi nuova variazione di prezzo**.

![Variazioni di prezzo del prodotto](/img/config/product-price-variations.png)

Per inserire una variazione, imposta la durata, il periodo e il prezzo della variazione. È possibile inserire ulteriori variazioni facendo nuovamente clic sul pulsante.

Ad esempio, se il prezzo del tuo prodotto di base è $29.99 al mese, potresti aggiungere:

  * **3 mesi** a $79.99 (un piccolo sconto rispetto al mensile)
  * **1 anno** a $249.99 (uno sconto significativo per l’impegno annuale)

:::tip Visualizzazione di un interruttore del periodo di fatturazione sul frontend

Le sole variazioni di prezzo non aggiungono un interruttore o selettore al pagamento frontend. Per consentire ai clienti di passare da un periodo di fatturazione all’altro (ad es. Mensile / Annuale), devi aggiungere un campo **Selezione del periodo** al tuo modulo di pagamento. Vedi [Moduli di pagamento: aggiunta di un interruttore di selezione del periodo](checkout-forms#adding-a-period-selection-toggle) per istruzioni dettagliate.
:::

#### Imposte {#taxes}

La scheda **Imposte** si allinea con le impostazioni fiscali specificate in **Ultimate Multisite > Impostazioni > Imposte** e, più specificamente, con le aliquote fiscali definite. Per abilitare le imposte e definire le aliquote fiscali applicabili, consulta la documentazione in **Ultimate Multisite: Impostazioni**

![Scheda Imposte](/img/config/product-taxes.png)

In un esempio precedente, abbiamo definito un’aliquota fiscale locale del 7.25% applicabile ai clienti in California (Stati Uniti d’America).

Una volta definita l’aliquota fiscale in **Ultimate Multisite > Impostazioni > Gestisci aliquote fiscali**, questa è selezionabile a livello di prodotto.

![Scheda Imposte](/img/config/product-taxes.png)

Per indicare che un prodotto è un articolo tassabile, imposta l’interruttore **È tassabile** su attivo e seleziona l’aliquota fiscale applicabile dal menu a discesa Categoria fiscale.

#### Modelli di sito {#site-templates}

In sostanza, i modelli di sito sono siti web WordPress completi che vengono clonati nel sito di un cliente all’inizio della sua sottoscrizione.

![Scheda Modelli di sito](/img/config/product-site-templates.png)

L’amministratore della rete crea e configura il sito modello come un normale sito WordPress con temi, plugin e contenuti attivati e configurati. Il sito modello viene clonato alla lettera per il cliente.

Questa scheda consente all’amministratore della rete di specificare il comportamento dei modelli di sito al momento di una nuova sottoscrizione. Per utilizzare i modelli di sito per questo piano, imposta l’interruttore **Consenti modelli di sito** sullo stato attivo.

Quando **Consenti modelli di sito** è disabilitato, i clienti del piano non possono scegliere modelli anche se un modulo di pagamento, un link condivisibile o un parametro URL li renderebbe altrimenti disponibili. Ultimate Multisite ora applica questo limite tramite una catena di fallback tra i punti di ingresso disponibili: le impostazioni del piano vengono controllate per prime, poi le impostazioni dei modelli del modulo di pagamento, quindi i modelli preselezionati o forniti tramite URL. Questo mantiene coerenti i limiti del piano e impedisce che i modelli vengano visualizzati per prodotti che non dovrebbero offrirli.

La **modalità di selezione del modello del sito** definisce il comportamento dei modelli di sito durante la procedura di abbonamento.

L'impostazione **P** **redefinita** segue i passaggi del modulo di checkout. Se l'amministratore della rete ha definito un passaggio di selezione del modello nella procedura di checkout e il passaggio è stato definito con dei modelli, questa impostazione rispetterà le direttive stabilite nel passaggio di checkout.

Specificare **A** **ssegna modello di sito** forza la selezione del modello specificato. Di conseguenza, eventuali passaggi di selezione del modello nella procedura di checkout vengono rimossi.

Infine, **S** **cegli modelli di sito disponibili** sostituisce i modelli specificati nel passaggio di checkout con i modelli selezionati in questa impostazione. È anche possibile definire un modello preselezionato per aiutare il cliente nella scelta.

In definitiva, se l'amministratore della rete desidera che la selezione del modello avvenga nei passaggi di checkout, l'impostazione ' _predefinita_ ' sarà sufficiente. In alternativa, per rimuovere e bloccare la selezione del modello e delegare la selezione alle impostazioni del piano, le opzioni ' _assegna nuovo modello_ ' o ' _scegli modelli di sito disponibili_ ' possono essere desiderabili.

#### Siti {#sites}

La scheda **Siti** fa parte della funzionalità di limitazioni di Ultimate Multisite.

![Scheda Siti](/img/config/product-sites.png)

Questa impostazione specifica il numero massimo di siti che un cliente può creare sotto il proprio abbonamento.

Per abilitare la limitazione, imposta l'interruttore **limita siti** sullo stato attivo e specifica il numero massimo di siti nel campo **assegnazione siti**.

#### Visite {#visits}

La scheda **Visite** è un'ulteriore parte del sistema di limitazioni di Ultimate Multisite. Questa impostazione consente il conteggio e il successivo throttling dei visitatori unici del sito di un cliente.

![Scheda Visite](/img/config/product-visits.png)

Da una prospettiva di marketing, gli amministratori della rete possono utilizzare questa impostazione come mezzo per incoraggiare i clienti ad aggiornare il proprio piano una volta raggiunti i limiti. Questa impostazione può anche aiutare l'amministratore della rete a contenere e prevenire traffico eccessivo sui siti per preservare le risorse di sistema.

Per utilizzare questa funzionalità, imposta l'interruttore **limita visite uniche** sullo stato attivo e specifica il numero massimo di visitatori unici nel campo **quota visite uniche**.

Una volta raggiunto questo limite, Ultimate Multisite smetterà di servire il sito del cliente invece di visualizzare un messaggio per indicare che i limiti sono stati superati.

#### Utenti {#users}

Le limitazioni 'Utenti' di Ultimate Multisite consentono all'amministratore della rete di imporre limiti al numero di utenti che possono essere creati e assegnati ai ruoli.

![Scheda Utenti](/img/config/product-users.png)

Per abilitare la funzionalità di limitazioni, imposta l'interruttore **limita utenti** sullo stato attivo facendolo scorrere verso destra.

Successivamente, per ogni ruolo da limitare, imposta l'interruttore accanto ad esso su uno stato attivo e definisci il limite massimo superiore nel campo appropriato.

#### Tipi di contenuto {#post-types}

La scheda **Tipi di contenuto** consente all'amministratore della rete di imporre limiti granulari sull'ampia gamma di tipi di contenuto all'interno di WordPress.

![Scheda Tipi di contenuto](/img/config/product-post-types.png)

A causa della struttura di WordPress, articoli e tipi di contenuto sono una componente significativa della sua funzionalità principale e, pertanto, il sistema di limitazioni di Ultimate Multisite è progettato per aiutare l'amministratore della rete a stabilire e mantenere i limiti.

Per abilitare questo sottosistema di limiti, imposta l'interruttore **limita tipi di contenuto** sullo stato attivo facendolo scorrere verso destra.

Successivamente, per ogni tipo di contenuto da limitare, attivalo facendolo scorrere verso destra e specificando il limite massimo superiore nel campo appropriato.

#### Spazio su disco {#disk-space}

La scheda **Spazio su disco** consente agli amministratori della rete di limitare lo spazio consumato dai clienti.

![Scheda Spazio su disco](/img/config/product-disk-space.png)

Tipicamente, in un multisito WordPress, i file principali sono condivisi tra tutti i siti e vengono create directory individuali per file multimediali e caricamenti, alle quali si applicano queste impostazioni e limitazioni.

Per abilitare la limitazione dell'utilizzo del disco, imposta l'interruttore **limita dimensione disco per sito** sullo stato attivo facendolo scorrere verso destra.

Successivamente, specifica il limite massimo superiore in megabyte nel campo **spazio su disco consentit** o.

#### Dominio personalizzato {#custom-domain}

Attivando questa opzione puoi consentire domini personalizzati specificamente su questo piano.

![Scheda Domini personalizzati](/img/config/product-custom-domains.png)

#### Temi {#themes}

La scheda **Temi** all'interno delle opzioni del prodotto consente all'amministratore della rete di rendere disponibili i temi ai clienti per la selezione e, facoltativamente, di forzare lo stato del tema.

![Scheda Temi](/img/config/product-themes.png)

_**Nota: affinché i temi siano resi disponibili ai clienti, devono essere abilitati a livello di rete dall'amministratore della rete.**_

![Pagina dei temi di rete](/img/config/product-themes-network-enabled.png)

L'opzione **visibilità** definisce se questo tema è visibile o meno al cliente quando visualizza la scheda **Aspetto > Temi** all'interno del proprio sito. Impostare questa opzione su **Nascosto** rimuove il tema dalla vista e quindi limita la possibilità di selezionarlo e attivarlo.

![Scheda Temi](/img/config/product-themes.png)

La selezione **comportamento** consente all'amministratore della rete di definire lo stato del tema al momento della creazione del sito del cliente.

Nello stato **D** **isponibile** il tema viene reso disponibile al cliente per l'auto-attivazione. Al contrario, lo stato **Non disponibile** rimuove al cliente la possibilità di attivare il tema. Infine, l'opzione **Forza attivazione** forza la selezione e l'attivazione del tema, impostandolo quindi come predefinito al momento della creazione del sito.

#### Plugin {#plugins}

Analogamente alla scheda Temi, Ultimate Multisite consente all'amministratore della rete di definire la visibilità dei plugin per i clienti, così come il loro stato al momento della creazione di un nuovo sito.

![Scheda Plugin](/img/config/product-plugins.png)

Il menu a discesa **visibilità** consente al plugin di essere visibile o nascosto al cliente quando viene visualizzato sul suo sito tramite l'opzione di menu Plugin.

L'amministratore della rete può manipolare ulteriormente il comportamento dei plugin utilizzando le opzioni nel menu a discesa del comportamento.

![Scheda Plugin](/img/config/product-plugins.png)

La selezione **Default** rispetta lo stato del plugin definito nel template del sito selezionato dal cliente. Pertanto, i plugin attivati all'interno del template rimarranno attivati quando il template viene clonato nel sito del cliente.

**Force Activate** mette il plugin in uno stato attivo al momento della creazione del sito e, viceversa, **Force Inactivate** disattiva il plugin al momento della creazione del sito. In entrambe queste circostanze, lo stato del plugin può essere modificato manualmente dal cliente tramite il menu Plugins di WordPress.

L'impostazione **Force Activate & Lock** funziona in modo simile, ma impedisce che lo stato del plugin venga modificato dal cliente. Pertanto, un'impostazione Force Activate and Lock forzerà il plugin nel suo stato attivo e impedirà al cliente di disattivarlo. Allo stesso modo, l'impostazione **Force Inactivate & Lock** forzerà il plugin nel suo stato inattivo e impedirà all'utente di attivare il plugin.

L'amministratore della rete potrebbe voler considerare le impostazioni Force Activate & Lock e Force Inactivate & Lock insieme ai template di sito, poiché i plugin e gli stati dei plugin all'interno dei template potrebbero essere influenzati da queste impostazioni, se selezionate.

#### Limitazioni di reimpostazione {#reset-limitations}

La scheda **Reset Limitations** reimposta tutti i limiti personalizzati definiti sul prodotto. Per reimpostare le limitazioni, fai clic sul pulsante **reset limitations**.

![Scheda Limitazioni di reimpostazione](/img/config/product-reset-limitations.png)

Per confermare l'azione, sposta l'interruttore **confirm reset** nello stato attivo a destra e fai clic sul pulsante **reset limitations**.

![Scheda Limitazioni di reimpostazione](/img/config/product-reset-limitations.png)

## Modificare, duplicare o eliminare un prodotto {#edit-duplicate-or-delete-product}

I prodotti esistenti possono essere modificati, duplicati o eliminati accedendo a **Ultimate Multisite > Products** e passando il mouse sopra il nome del prodotto esistente.

![Azioni al passaggio del mouse sul prodotto](/img/config/product-hover-actions.png)
