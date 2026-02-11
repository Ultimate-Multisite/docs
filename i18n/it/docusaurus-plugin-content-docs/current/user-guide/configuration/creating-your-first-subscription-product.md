---
title: Creare il tuo primo prodotto in abbonamento
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# Creare il tuo primo prodotto di abbonamento (v2)

_**NOTA IMPORTANTE: Questo articolo è solo per gli utenti di Ultimate Multisite versione 2.x. Se stai usando la versione 1.x,**_ **_**vedi questo articolo**_**.

Per iniziare a far funzionare la tua rete e iniziare a vendere i tuoi servizi a potenziali utenti, devi avere diverse opzioni di abbonamento. Come crei questi prodotti? Quali sono i tipi di prodotti che puoi offrire? In questo articolo, copriremo tutto ciò che devi sapere sui prodotti.

## Tipo di prodotto

Con Ultimate Multisite puoi offrire due categorie di prodotti ai tuoi clienti: **piani** e **add-on** **(Order Bump)**. Gli add-on possono essere divisi in due tipi: **pacchetti** e **servizi**. Vedremo le loro differenze e particolarità qui sotto.

* **Piani** : il prodotto fondamentale di Ultimate Multisite. Il tuo cliente può avere un abbonamento solo se è collegato a un piano. Un piano fornisce ai tuoi clienti uno o più siti (dipende dalle configurazioni del tuo piano) con le limitazioni che imposti nella pagina di modifica del prodotto.

* **Pacchetti** : add-on che influenzano direttamente le funzionalità dei piani di Ultimate Multisite. Modificano le limitazioni o aggiungono nuove risorse, plugin o temi al piano originale acquistato dal cliente. Per esempio, un piano base potrebbe consentire 1.000 visite al mese e puoi rendere disponibile un pacchetto che estende questo numero a 10.000.

* **Servizi** : add-on che non alterano le funzionalità di Ultimate Multisite. Sono compiti che realizzerai per il tuo cliente in aggiunta al piano acquistato. Per esempio, il tuo cliente potrebbe acquistare un piano che consente un singolo sito e pagare anche per un servizio extra che realizzerà la progettazione di questo sito.

## Gestione dei prodotti

Per molti, la scheda **Prodotti** in Ultimate Multisite **(Ultimate Multisite > Prodotti)** può essere equiparata ai piani in un ambiente di hosting tradizionale.

All'interno di Ultimate Multisite la scheda Prodotti definisce la struttura e le limitazioni applicabili a un prodotto o servizio specifico. Queste strutture si estendono alla descrizione del prodotto o servizio, al prezzo, alle tasse e alle autorizzazioni.

Questa sezione guiderà la tua comprensione di questa pietra angolare essenziale di Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1YccQg0IBG.png)

## Aggiunta di prodotti

Che si tratti di un piano, pacchetto o servizio, il punto di ingresso per definire un nuovo elemento è tramite **Ultimate Multisite > Prodotti > Aggiungi prodotto**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0AmJMeqen.png)

L'interfaccia contiene due sezioni predominanti. Sul lato sinistro ci sono diverse schede che aiutano nella definizione del prodotto e sul lato destro ci sono alcune sezioni per definire il prezzo di base del prodotto, il suo stato attivo e l'immagine del prodotto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WRwYrlk0BS.png)

### Descrizione

Le informazioni di base del prodotto possono essere definite fornendo un nome e una descrizione del prodotto. Questi identificatori vengono visualizzati ovunque sia necessaria l'informazione sul prodotto, come la selezione del piano e del prezzo, le fatture, gli upgrade e così via.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U9YjF0dghJ.png)

### Tipo di prezzo

Sul lato destro dell'interfaccia, il prezzo di base può essere definito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oHwhlrBFC9.png)

Ultimate Multisite supporta tre diversi tipi di prezzo. L'opzione **paid** richiede all'amministratore di rete informazioni sul prezzo del prodotto e sulla frequenza di fatturazione.

### Prezzo

Il componente prezzo definisce il prezzo di base del prodotto e l'intervallo di fatturazione.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T03WJISsoh.png)

ad esempio, un prezzo di $29,99 con un'impostazione di 1 mese addebiterà $29,99 ogni mese. Allo stesso modo, un prezzo di $89,97 con un'impostazione di 3 mesi addebiterà quell'importo ogni trimestre.

### Cicli di fatturazione

La sezione Cicli di fatturazione specifica la frequenza dell'intervallo di fatturazione sopra menzionato ed è generalmente intesa alla luce di contratti o termini fissi.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hVVAoxC4Jt.png)

Per esempio, un prezzo di prodotto di $29,99 con un intervallo di 1 mese e 12 cicli di fatturazione addebiterà $29,99 al mese per il prodotto nei successivi 12 mesi. In altre parole, tale impostazione stabilirebbe un termine a prezzo fisso di $29,99 al mese per 12 mesi e poi cesserebbe l'addebito.

### Periodo di prova

Abilitare l'interruttore di offerta di prova consente all'amministratore di rete di definire un periodo di prova per il prodotto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzxhWHqJLC.png)

Durante il periodo di prova, i clienti possono utilizzare il prodotto liberamente e non verranno addebitati finché il periodo di prova non sarà esaurito.

### Tassa di configurazione

Puoi anche applicare una tassa di configurazione al tuo piano.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-8ZA2YvhWyK.png)

Ciò significa che il tuo cliente pagherà un importo extra al primo addebito (in aggiunta al piano di prezzo) che corrisponde alla tassa che hai definito in questa sezione.

### Attivo

L'interruttore attivo definisce in modo effettivo se il prodotto è disponibile ai clienti per nuovi iscritti.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-74ET2mPskK.png)

Se ci sono clienti esistenti su questo piano, impostare l'interruttore sullo stato disabilitato effettivamente annulla il piano rimuovendolo dai futuri iscritti. **I clienti esistenti sul piano continueranno ad essere fatturati** finché non verranno trasferiti a un nuovo piano o rimossi dal piano.

### Immagine del prodotto

Il pulsante **Upload Image** consente all'amministratore di rete di utilizzare la libreria multimediale per selezionare o caricare un'immagine del prodotto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9tHhGvokLA.png)

### Elimina

Il pulsante **Delete Product** elimina il prodotto dal sistema. Appare una volta che il prodotto è pubblicato.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rrmQohvw3S.png)

A differenza di altre eliminazioni, il prodotto non viene spostato in alcuno stato di cestino. Pertanto, una volta eliminato, l'azione è irreversibile.

### Opzioni del prodotto

Una volta definite le informazioni di base del prodotto, le opzioni del prodotto aiutano l'amministratore di rete a definire ulteriormente gli attributi specifici del prodotto.

#### Generale

La scheda **General** definisce gli attributi generali del prodotto non applicabili a nessuna delle altre schede specifiche del prodotto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-z32g4XQeyT.png)

Il **product slug** autoesplicativo definisce lo slug con cui il prodotto è identificato negli URL e in altre aree di Ultimate Multisite.

Ultimate Multisite supporta diversi tipi di prodotto, a saber Piano, Pacchetto e Servizio. Le schede **Product Options** sono dinamicamente regolate in base al tipo di prodotto specificato.

Il **Customer Role** specifica il ruolo che il cliente riceve quando il sito viene creato. Tipicamente, per la maggior parte degli amministratori di rete, questo sarà il ruolo predefinito di Ultimate Multisite o l'Amministratore. Il ruolo predefinito di Ultimate Multisite può essere impostato in **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ap5I4lXWwB.png)

#### Upgrade e downgrade

Questa scheda specifica i percorsi di upgrade e downgrade disponibili a un cliente all'interno del suo livello specifico.

Per comprendere questo concetto, considera un esempio in cui un'installazione di Ultimate Multisite di nicchia fornisce soluzioni di gestione dell'apprendimento ai suoi clienti. Per realizzare ciò, sono definiti tre piani (Basic, Plus e Premium) e specifici plugin vengono attivati per ciascun piano (vedi più avanti in questa sezione per le istruzioni su come attivare i plugin).

Se l'installazione di Ultimate Multisite fornisce anche servizi per siti web aziendali o eCommerce, quei piani potrebbero richiedere l'installazione e l'attivazione di plugin diversi.

In questo senso, sarebbe indesiderabile e problematico consentire ai clienti eLearning di passare a piani eCommerce poiché questi piani, prezzi e limitazioni potrebbero non essere adatti.

Pertanto, per limitare il percorso del cliente e prevenire incidenti, l'amministratore di rete può definire un gruppo di piani e, all'interno di quel gruppo, specificare i piani a cui il cliente può passare.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JnrZ4fWFEC.png)

Per definire un gruppo di piani, specifica i piani compatibili all'interno dell'elenco **plan group**. L'**product order** determina come i piani sono ordinati e visualizzati dal più basso al più alto.

Ultimate Multisite include anche una funzionalità **order bump** in cui prodotti add-on e servizi appropriati possono essere aggiunti ai piani. Questi vengono offerti al cliente come elementi aggiuntivi che possono essere aggiunti ai piani al momento del checkout o durante un upgrade.

#### Variazioni di prezzo

Le variazioni di prezzo consentono all'amministratore di rete di specificare livelli di prezzo alternativi a seconda della durata. Questa impostazione rende possibile stabilire livelli di prezzo di 3 mesi, 6 mesi o annuali o qualsiasi altra durata e frequenza determinata dal caso d'uso.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-d75YUO3opm.png)

Per stabilire variazioni di prezzo, imposta l'interruttore **enable price variations** su attivo e fai clic sul pulsante **Add new Price Variation**.

Per inserire una variazione, imposta la durata, il periodo e il prezzo della variazione. Variazioni aggiuntive possono essere inserite facendo clic nuovamente sul pulsante.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-x73uxkMU8o.png)

#### Tasse

La scheda **Taxes** si allinea con le impostazioni fiscali specificate in **Ultimate Multisite > Settings > Taxes** e, più specificamente, con le aliquote fiscali definite. Per abilitare le tasse e definire le aliquote fiscali applicabili, consulta la documentazione in **Ultimate Multisite: Settings**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xYLtpFySzL.png)

In un esempio precedente, abbiamo definito un'aliquota fiscale locale del 7,25% applicabile ai clienti in California (Stati Uniti d'America).

Una volta definita l'aliquota fiscale in **Ultimate Multisite > Settings > Manage Tax Rates**, è selezionabile a livello di prodotto.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Sh1BVGVj6i.png)

Per indicare che un prodotto è un articolo imponibile, imposta l'interruttore **Is Taxable** su attivo e seleziona l'aliquota fiscale applicabile dal menu a discesa Tax Category.

#### Modelli di sito

In sostanza, i modelli di sito sono siti WordPress completi che vengono clonato sul sito del cliente all'inizio della loro sottoscrizione.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-llMSMXCDt4.png)

L'amministratore di rete crea e configura il sito modello come un normale sito WordPress con temi, plugin e contenuti attivati e configurati. Il sito modello viene clonato letteralmente sul cliente.

Questa scheda consente all'amministratore di rete di specificare il comportamento dei modelli di sito in una nuova sottoscrizione. Per utilizzare i modelli di sito, imposta l'interruttore **allow site templates** sullo stato attivo.

La **site template selection mode** definisce il comportamento dei modelli di sito durante il processo di sottoscrizione.

L'impostazione **D** **efault** segue i passaggi nel modulo di checkout. Se l'amministratore di rete ha definito un passaggio di selezione del modello nel processo di checkout e il passaggio è stato definito con modelli, questa impostazione rispetterà le direttive stabilite nel passaggio di checkout.

Specificare **A** **ssign Site Template** forza la selezione del modello specificato. Di conseguenza, eventuali passaggi di selezione del modello nel processo di checkout vengono rimossi.

Infine, **C** **hoose Available Site Templates** sovrascrive i modelli specificati nel passaggio di checkout con i modelli selezionati in questa impostazione. Un modello pre-selezionato può anche essere definito per aiutare il cliente nella selezione.

In definitiva, se l'amministratore di rete desidera che la selezione del modello avvenga nei passaggi di checkout, l'impostazione di ‘_default_’ sarà sufficiente. In alternativa, per rimuovere e bloccare la selezione del modello e delegare la selezione alle impostazioni del piano, le opzioni ‘_assign new template_’ o ‘_choose available site templates_’ possono essere desiderabili.

#### Siti

La scheda **Sites** fa parte della funzionalità di limitazioni di Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-A8fzNucGyC.png)

Questa impostazione specifica il numero massimo di siti che un cliente può creare sotto la propria iscrizione.

Per abilitare la limitazione, imposta l'interruttore **limit sites** sullo stato attivo e specifica il numero massimo di siti nel campo **site allowance**.

#### Visite

La scheda **Visits** è un ulteriore componente del sistema di limitazioni di Ultimate Multisite. Questa impostazione consente la contabilizzazione e la successiva limitazione dei visitatori unici sul sito di un cliente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e7f5otg89m.png)

Da una prospettiva di marketing, gli amministratori di rete possono utilizzare questa impostazione come mezzo per incoraggiare i clienti a passare a un piano superiore una volta raggiunti i limiti. Questa impostazione può anche aiutare l'amministratore di rete a limitare e prevenire il traffico eccessivo sui siti per preservare le risorse di sistema.

Per utilizzare questa funzionalità, imposta l'interruttore **limit unique visits** sullo stato attivo e specifica il numero massimo di visitatori unici nel campo **unique visits quota**.

Una volta raggiunto questo limite, Ultimate Multisite smetterà di servire il sito del cliente invece di visualizzare un messaggio che indica che i limiti sono stati superati.

#### Utenti

Le limitazioni di ‘Users’ di Ultimate Multisite consentono all'amministratore di rete di imporre limiti sul numero di utenti che possono essere creati e assegnati a ruoli.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-maGYqW7WlP.png)

Per abilitare la funzionalità di limitazione, imposta l'interruttore **limit user** sullo stato attivo trascinandolo verso destra.

Successivamente, per ogni ruolo da limitare, imposta l'interruttore accanto a esso su stato attivo e definisci il limite massimo nel campo appropriato.

#### Tipi di post

La scheda **Post Types** consente all'amministratore di rete di imporre limiti granulari sull'ampia gamma di tipi di post all'interno di WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZELQvvqyvn.png)

A causa della struttura di WordPress, i post e i tipi di post sono componenti significativi della sua funzionalità di base, e quindi il sistema di limitazioni di Ultimate Multisite è progettato per aiutare l'amministratore di rete a stabilire e mantenere i limiti.

Per abilitare questo sottosistema di limitazioni, imposta l'interruttore **limit post types** sullo stato attivo trascinandolo verso destra.

Successivamente, per ogni tipo di post da limitare, attivalo trascinandolo verso destra e specificando il limite massimo nel campo appropriato.

#### Spazio su disco

La scheda **Disk Space** consente agli amministratori di rete di limitare lo spazio consumato dai clienti.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-EqlaLO0ebw.png)

Tipicamente, in un WordPress multisite, i file core sono condivisi tra tutti i siti e le directory individuali create per file multimediali e caricamenti a cui si applicano queste impostazioni e limitazioni.

Per abilitare la limitazione dell'uso del disco, imposta l'interruttore **limit disk size per site** sullo stato attivo trascinandolo verso destra.

Successivamente, specifica il limite massimo in megabyte nel campo **disk space allowanc** e.

#### Dominio personalizzato

Attivando questa opzione puoi consentire domini personalizzati su questo piano specificamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KEMuUG76Fg.png)

#### Temi

La scheda **Themes** all'interno delle opzioni del prodotto consente all'amministratore di rete di rendere disponibili ai clienti i temi per la selezione e di forzare opzionalmente lo stato del tema.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rkyVSGnDqo.png)

_**Nota: Per rendere disponibili ai clienti i temi, devono essere abilitati a livello di rete dall'amministratore di rete.**_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HAQShYB7Y1.png)

L'opzione **visibility** definisce se il tema è visibile al cliente quando visualizza la scheda **Appearance > Themes** all'interno del suo sito. Impostare questa opzione su **Hidden** rimuove il tema dalla visualizzazione e quindi limita la possibilità di selezionarlo e attivarlo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ivsGIABl55.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

La selezione **behavior** consente all'amministratore di rete di definire lo stato del tema al momento della creazione del sito del cliente.

Nello stato **A** **vailable** il tema è reso disponibile al cliente per l'auto-ativazione. Al contrario, lo stato **Not Available** rimuove dal cliente la possibilità di attivare il tema. Infine, l'opzione **Force Activate** forza la selezione e l'attivazione del tema, impostandolo come predefinito al momento della creazione del sito.

#### Plugin

Simile alla scheda Themes, Ultimate Multisite consente all'amministratore di rete di definire la visibilità dei plugin per i clienti, così come il loro stato al momento della creazione di un nuovo sito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ipzv31FIb6.png)

Il menu a discesa **visibility** consente al plugin di essere visibile o nascosto dal cliente quando visualizzato sul suo sito tramite l'opzione del menu Plugin.

L'amministratore di rete può ulteriormente manipolare il comportamento dei plugin utilizzando le opzioni nel menu a discesa behavior.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

La selezione **Default** rispetta lo stato del plugin definito nel modello di sito selezionato dal cliente. Di conseguenza, i plugin che sono attivati all'interno del modello rimarranno attivati quando il modello viene clonato sul sito del cliente.

L'opzione **Force Activate** mette il plugin in uno stato attivo al momento della creazione del sito e, al contrario, **Force Inactivate** disattiva il plugin al momento della creazione del sito. In entrambe le circostanze, lo stato del plugin può essere modificato manualmente dal cliente tramite il menu WordPress Plugins.

L'impostazione **Force Activate & Lock** funziona in modo simile ma impedisce che lo stato del plugin venga modificato dal cliente. Di conseguenza, un'impostazione di Force Activate and Lock forzerà il plugin nello stato attivo e impedirà al cliente di disattivarlo. Allo stesso modo, l'impostazione **Force Inactivate & Lock** forzerà il plugin nello stato inattivo e impedirà all'utente di attivarlo.

L'amministratore di rete potrebbe voler considerare le impostazioni Force Activate & Lock e Force Inactivate & Lock in combinazione con i modelli di sito, poiché i plugin e gli stati dei plugin all'interno dei modelli possono essere influenzati da queste impostazioni se selezionate.

#### Reset delle limitazioni

La scheda **Reset Limitations** reimposta tutti i limiti personalizzati definiti sul prodotto. Per reimpostare le limitazioni, fai clic sul pulsante **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UXNQerLby7.png)

Per confermare l'azione, fai scorrere l'interruttore **confirm reset** sullo stato attivo a destra e fai clic sul pulsante **reset limitations**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xKySIUIvrI.png)

#### Opzioni legacy

La scheda **Legacy Options** osserva alcune opzioni e comportamenti definiti in Ultimate Multisite 1.x.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Fn3BjwTH4r.png)

Queste opzioni sono offerte per la compatibilità e la facilità di transizione e saranno deprecate nelle versioni future.

## Modifica, Duplica o Elimina prodotto

I prodotti esistenti possono essere modificati, duplicati o eliminati navigando su **Ultimate Multisite > Prodotti** e passando il mouse sopra il nome del prodotto esistente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GcHtJl6WmV.png)

## 

###
