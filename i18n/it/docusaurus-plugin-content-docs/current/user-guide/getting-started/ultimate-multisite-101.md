---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite è un plugin WordPress Multisite che ti consente di offrire un WaaS o Websites as a Service ai clienti. Prima di immergerci e imparare come Ultimate Multisite può aiutare la tua azienda e i tuoi clienti, è necessario acquisire alcune conoscenze di base.

## Il WordPress Multisite

La maggior parte di noi è familiare con l'installazione standard di WordPress. La crei tramite il pannello di controllo del tuo provider di hosting o, per i coraggiosi, configuri un nuovo server web e un database, scarichi i file core e inizi il processo di installazione.

Questo funziona per milioni di siti WordPress in tutto il mondo, ma dalla prospettiva di un'agenzia o di un provider di hosting, parliamo un attimo di volumi.

Sebbene sia comodo creare un sito WordPress o addirittura centinaia tramite un pannello di controllo automatizzato, i problemi iniziano a manifestarsi quando si passa alla gestione di questi siti. Se lasciati non gestiti, diventano obiettivi principali per i malware. Gestirli richiede sforzo e risorse, e sebbene esistano strumenti e plugin esterni per semplificare la gestione e l'amministrazione dei siti WordPress, il fatto che i clienti mantengano l'accesso amministrativo significa che questi sforzi possono essere facilmente superati.

Nel suo core, WordPress offre una funzionalità semplicemente intitolata ‘Multisite’ che risale al 2010, con il lancio di WordPress 3.0. Da allora ha ricevuto numerose revisioni volte a introdurre nuove funzionalità e a rafforzare la sicurezza.

In sostanza, un WordPress multisite può essere pensato così: una università mantiene un'unica installazione di WordPress, ma ogni facoltà gestisce il proprio sito WordPress.

Per analizzare questa affermazione, diamo un'occhiata a qualche terminologia di base presente non solo nella documentazione di Ultimate Multisite ma anche nella comunità WordPress.

### La Rete

In termini di WordPress, una rete multisite è dove un numero di sottositi può essere gestito da un unico cruscotto. Sebbene la creazione di una rete multisite differisca tra i provider di hosting, il risultato finale è solitamente qualche direttiva aggiuntiva nel file wp-config.php per far sapere a WordPress che opera in questo specifico modo.

Ci sono diverse differenze distinte tra una rete multisite e un'installazione WordPress stand-alone che discuteremo brevemente.

#### Sottodominio vs. Sottocartella

Una delle decisioni più immediate che dovrai prendere è se l'installazione multisite opererà con _sottocartelle_ o _sottodomini_. Ultimate Multisite funziona altrettanto bene con entrambe le scelte, ma ci sono alcune differenze architettoniche tra le due configurazioni.

In configurazione _sottocartella_, i siti della rete ereditano un percorso basato sul nome di dominio principale. Per esempio, un sito della rete etichettato ‘site1’ avrà il suo URL completo come https://domain.com/site1. In configurazione _sottodominio_, il sito della rete avrà il proprio _sottodominio_ derivato dal nome di dominio principale. Pertanto un sito etichettato ‘site1’ avrà il suo URL completo come https://site1.domain.com/.

Sebbene entrambe le opzioni siano scelte perfettamente valide, l'uso di _sottodomini_ offre numerosi vantaggi ma richiede anche più riflessione e pianificazione nella sua architettura.

In termini di DNS, l'uso di _sottocartelle_ presenta una sfida relativamente semplice. Poiché i siti della rete sono semplicemente figli del percorso principale, è necessario esistere solo un singolo record di nome di dominio per il dominio principale. Per i _sottodomini_ la sfida è un po' più complessa, richiedendo un record CNAME separato per ogni sito della rete o un record wildcard (*) nei record DNS.

Un'ulteriore area di considerazione riguarda l'SSL e l'emissione e l'uso dei certificati SSL. In configurazione _sottocartella_, un singolo certificato di dominio può essere utilizzato poiché i siti della rete sono semplicemente percorsi del nome di dominio principale. Pertanto un certificato per domain.com fornirà adeguatamente l'SSL per https://domain.com/site1, https://domain.com/site2 e così via.

In configurazione _sottodominio_, l'uso di un certificato SSL wildcard è una delle opzioni più comuni. Questo tipo di certificato SSL fornisce crittografia per un dominio e i suoi _sottodomini_. Pertanto un certificato SSL wildcard fornirà crittografia per https://site1.domain.com, https://site2.domain.com e https://domain.com stesso.

Sebbene esistano altre opzioni, queste sono spesso limitate in ambito e applicazione e richiedono configurazioni e considerazioni aggiuntive per quanto riguarda la fattibilità.

#### Plugin e Temi

Ciò che WordPress dà, prende anche, almeno dalla prospettiva del cliente. In un'installazione WordPress stand-alone, se l'amministratore del sito installa un plugin dannoso o non mantiene l'installazione aggiornata, l'unico vittima e vittima di questo atto è se stesso. Tuttavia, un amministratore del sito che installa un plugin dannoso su un'installazione multisite crea una vittima di ogni sito installato nella rete.

Per questo motivo, quando configurato come multisite, WordPress rimuove la capacità dagli amministratori del sito di installare plugin e temi e sposta questa capacità a un nuovo amministratore di rete o ruolo di ‘super admin’. Questo ruolo privilegiato può quindi decidere se consentire agli amministratori dei siti della rete di vedere o accedere al menu plugin nel loro cruscotto e, se sì, se tali permessi si estendono a _attivare_ o _disattivare_ plugin.

In questo senso l'amministratore di rete è responsabile dell'installazione di plugin e temi nella rete e delega i permessi per utilizzare questi plugin e temi ai siti della rete. Gli amministratori del sito non possono installare plugin e temi o accedere a plugin e temi non assegnati al loro sito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zg50L2qdJEphzPcgwlo_pqNiYDknE6wiJo4zQUlhQwBCtDeAef2_aTzBBMx76YvTweROsbUH4uvosFRitBj8kgatWzCi_C822oJPWr5bKpwLuoBvTIZ5M9O1nFxOepiav1FkRHNv)

Ripetendo la dichiarazione sopra, sebbene gli account utente sembrino essere correlati al sito, in realtà sono assegnati alla rete e quindi devono essere unici in tutta la rete. Potrebbero esserci casi in cui i nomi utente non sono disponibili per la registrazione a causa di questo motivo.

Sebbene non sia un concetto estraneo nei sistemi aziendali, questa singola fonte di registrazione e autenticazione degli utenti è spesso un concetto difficile da comprendere per chi è familiare con le installazioni WordPress stand-alone dove l'amministrazione degli utenti è più semplice.

#### Media

Quando i siti della rete condividono un unico database in un WordPress Multisite, mantengono percorsi separati sul filesystem per i file multimediali.

La posizione standard di WordPress (wp-content/uploads) rimane; tuttavia, il suo percorso è modificato per riflettere l'ID unico del sito della rete. Di conseguenza, i file multimediali per un sito della rete appaiono come wp-contents/uploads/site/[id].

#### Permalink

Abbiamo menzionato prima che ci sono vantaggi distinti del _sottodominio_ rispetto alla configurazione _sottocartella_ e qui sono: percorsi.

In una configurazione _sottocartella_, il sito principale (il primo sito creato quando la rete è stabilita) e i sottositi della rete devono condividere lo stesso percorso che parte dal nome di dominio. Ciò può portare a un gran numero di conflitti.

Per i post, viene aggiunto un percorso obbligatorio /blog/ al sito principale per evitare conflitti con i siti della rete. Ciò significa che i permalink belli come ‘Post name’ verranno presentati come domain.name/blog/post-name/

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-QUlDfXAzHqImjngoE7UsJHa6DOl6XbQWV17LYthxpxDBy-k453GE5TlJVBA6-sOootX3Fsi34sHv5nSgi1kZmlUD1iMneztCc_HQvZmXpbZEdX2a1il8GJQqxUT8aVPgW5ikR5uG)

In una configurazione _sottodominio_, questa azione non è necessaria perché ogni sito della rete beneficia di una completa separazione del dominio e quindi non deve fare affidamento su un singolo percorso. Mantengono invece i propri percorsi distinti basati sul loro _sottodominio_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-2wgqTosYo3GAa3jwaBlPADbFiMbZ-kKUTuQtk0gv5pvkj81UfxnxSyA8R-jD1EZmRMBLjJFoWZJOirTSe8K9OQKeoSYeDj602XBHRrZeRFABE1sw-JERzJzEzMd7FmvrM9G1L9MP)

#### Pagine statiche

In configurazione _sottocartella_ il potenziale di conflitti di denominazione si estende alle pagine statiche poiché il sito principale e i siti della rete condividono lo stesso percorso.

Per evitare ciò, WordPress fornisce un modo per inserire in blacklist alcuni nomi di siti in modo che non entrino in conflitto con i nomi del primo sito. Tipicamente l'amministratore di rete inserirebbe i percorsi radice delle pagine del sito principale.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-sqwI-k_-3krK0_ortenskDcdGrKpgOD6itvwDc2KEuGk1gZO-rqo_OF9yTqclSmQdrOBwsGPiiOc1oF6c0GMyNELJ-7gbyQNE81juSM3IvgTdWqhZ_UEVt06xJRu8Z8oyAKfLLz-)

In configurazione _sottodominio_, la possibilità di conflitti di denominazione è mitigata dal _sottodominio_ poiché è unico per il sito della rete e non è in alcun modo correlato al sito principale.

### Registrazione

All'interno delle impostazioni di rete di WordPress Multisite sono disponibili diverse nuove opzioni di registrazione utente, consentendo ai nuovi e ai vecchi utenti di creare siti.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-nbH9Ka0YhI7nvo3nnKvOr_FoI_FpdAy5hz-f199CW-PV1D-tNKGawhIK_YwlUvM19TjLnhVb6Ro6J0ZpI6s2TRUaHgyGPc4qQI06eQ2O2jeMb_SaktkKwPUw3BSyaNegZYSjXMVX)

A differenza delle installazioni WordPress stand-alone, i siti della rete non mantengono le opzioni familiari per consentire le registrazioni utente o assegnare tali registrazioni a ruoli.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-7I21vdReE43e0Utj_KWdnuWA08ZXz7PX33rjSEjwf6T8NDiCBYbeP9GH0J36ekFNkmsXXLBYAWjQJo4vo_kWqL6hXJuFzd9RyA52zy13lT-mMsaK-JdVivUkd5SJF3UF13r2hj28)

Quando gli account utente vengono creati, tali account vengono generati a livello di rete. Pertanto, invece di appartenere a un singolo sito, appartengono alla rete. Ciò presenta alcuni vantaggi e svantaggi distinti.

Per esempio, supponiamo che il tuo WordPress Multisite fosse nel settore delle notizie e delle informazioni. Stabiliresti il multisite e poi crei siti della rete per finanza, tecnologia, intrattenimento e altre aree di interesse, mantenendo il controllo complessivo di plugin e temi. Ogni sito della rete avrebbe, a sua volta, un livello di controllo molto più elevato sull'aspetto e sulla sensazione e sull'esperienza utente del proprio sito della rete rispetto a tipi di post personalizzati o categorie di post regolari.

In questo senso, quando un utente accede, accede alla rete e, in ultima analisi, è autenticato su ogni sito della rete per fornire un'esperienza senza soluzione di continuità. Se il tuo nuovo sito è basato su abbonamento, questa sarebbe la soluzione ideale e l'esito.

Se, tuttavia, la natura e lo scopo previsto del multisite fosse offrire siti della rete disparati che non hanno alcuna relazione tra loro, è quasi sempre il caso che siano necessari plugin esterni o aggiuntivi per manipolare i ruoli utente.

### Dominio e SSL

Parliamo di un'installazione WordPress Multisite che quasi sfugge alla nostra attenzione - Wordpress.com. È di gran lunga l'esempio più esteso di un WordPress multisite e dimostra le sue ampie capacità di essere personalizzato e modellato per soddisfare uno scopo.

Questi giorni, sul moderno internet, l'uso di SSL è quasi obbligatorio e gli amministratori di rete di WordPress multisite si trovano presto a fronteggiare queste sfide.

In configurazione _sottodominio_, i siti sono creati in base al dominio principale. Pertanto un sito etichettato ‘site1’ sarebbe creato come ‘site1.domain.com’. Utilizzando un certificato SSL wildcard, un amministratore di rete può affrontare con successo questa sfida e fornire capacità di crittografia SSL per la rete.

WordPress Multisite contiene una funzione di mappatura del dominio che consente ai siti della rete di essere associati a nomi di dominio personalizzati o a nomi di dominio diversi dal dominio principale della rete.

Per gli amministratori di rete, ciò presenta un ulteriore livello di complessità sia nella configurazione del nome di dominio sia nell'emissione e nella manutenzione dei certificati SSL.

In questo senso, sebbene WordPress Multisite fornisca un modo per consentire a [www.anotherdomain.com](http://www.anotherdomain.com) di essere mappato a ‘site1’, l'amministratore di rete rimane con la sfida di gestire esternamente le voci DNS e l'implementazione dei certificati SSL.

## Ultimate Multisite

Con le differenze tra un'installazione WordPress stand-alone e un'installazione Multisite comprese, diamo un'occhiata a come Ultimate Multisite sia l'arsenale definitivo per fornire Websites as a Service.

### Introduzione

Ultimate Multisite è il tuo coltello svizzero quando si tratta di creare un Website as a Service (WaaS). Pensa a Wix.com, Squarespace, WordPress.com e poi pensa a possedere il tuo servizio.

Sotto il cofano, Ultimate Multisite utilizza WordPress Multisite, ma lo fa in modo da non solo risolvere la moltitudine di sfide che gli amministratori di rete affrontano con le installazioni multisite, ma anche potenziare le capacità consentendo di supportare una vasta gamma di casi d'uso.

Nelle sezioni successive esamineremo alcuni casi d'uso comuni e le considerazioni necessarie per supportarli.

### Casi d'uso

#### Caso 1: Un'agenzia

Tipicamente le competenze fondamentali di un'agenzia risiedono nella progettazione di siti web, con aspetti come l'hosting o il marketing elencati come servizi aggiuntivi.

Per le agenzie, Ultimate Multisite presenta un'incredibile proposta di valore nelle sue capacità di ospitare e gestire più siti web su una singola piattaforma. Ancora più così per le agenzie che standardizzano i loro design su temi particolari come GeneratePress, Astra, OceanWP o altri possono sfruttare le capacità di Ultimate Multisite per attivare automaticamente questi temi per ogni nuovo sito.

Allo stesso modo, con l'abbondanza di offerte per i prezzi delle agenzie per plugin comuni e popolari, l'uso di Ultimate Multisite consente alle agenzie di sfruttare gli investimenti esistenti fornendo una piattaforma comune da cui i plugin possono essere installati, mantenuti e utilizzati.

Probabilmente si desidererebbe l'uso di una configurazione e fortunatamente Ultimate Multisite rende incredibilmente facile facilitare la mappatura del dominio e i certificati SSL con le sue integrazioni per diversi provider di hosting popolari, nonché servizi come Cloudflare e cPanel.

Quindi, sfruttando uno di questi provider o posizionando Ultimate Multisite dietro Cloudflare, aspetti come la gestione dei domini e dei certificati SSL diventano piuttosto triviale.

Le agenzie che preferiscono mantenere un controllo stretto sulla creazione dei siti apprezzeranno la facilità con cui possono creare siti e associare siti a clienti e piani tramite l'interfaccia semplificata di Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-4cYCjjZwK0DZhrlY2NLHTL4waL99PANVZmSJ4AN5MXLTxb1pVF0aAtC4dWJP2hW1pD_v6hL8X7G80LRk-NuazRQDkIPCuhuRJgIMjA4DxuQzVjWEz1Ag2RKnkqwkvmSfcgy2PLrS)

Il controllo stretto su plugin e temi viene mantenuto a livello di prodotto tramite le interfacce intuitive di Ultimate Multisite, consentendo ai plugin e ai temi di essere resi disponibili o nascosti, così come il loro stato di attivazione quando istanziati per un nuovo sito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-VVpPcr8bvKd2qf9zPB_1SBiVpEYdtmskG_iO0tNCJOm2RXbU6kSC1czyLV1CaU5Mw2fWd-k2r1bnQV_yA4zOL6qnYKLWohnI-EDYhXcpxD_4n-rabGlxjQO8iyjtOgXhuDL5r2y7)

I temi offrono funzionalità simili, consentendo di attivare o nascondere temi specifici durante la creazione del sito.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3CEl6U5CPdKatlXAcG5B9jJux_iWOYpUTI4crCgW15EFkhh4pODF7hYlMyzc3na8QAefadz1kcnY_T7Yn6ZyxbBMJdfRfa16IFZma_-u7NHTtMbLZwJ9f7JbqG1QTh0y1l9WWj5z)

Le agenzie troveranno tranquillità con Ultimate Multisite, che consente loro di fare ciò che fanno meglio: progettare siti web eccezionali.

#### Caso 2: Fornitore di nicchia

C'è un vecchio detto che dice: “fai una cosa e falla bene”. Per molti specialisti, ciò significa creare un prodotto o servizio attorno a un'idea centrale.

Forse sei un appassionato di golf che promuove siti web ai club o potresti essere un appassionato di eSports che fornisce siti web ai clan. Un individuo che promuove un servizio di prenotazione ai ristoranti, forse?

Per molte ragioni vorresti fornire servizi basati su un framework e una piattaforma comuni. Potrebbe essere che tu abbia progettato o investito in plugin su misura per fornire la funzionalità richiesta o potrebbe essere che le migliori pratiche del settore richiedano una forma di approccio standardizzato al design.

Una delle funzionalità innovative di Ultimate Multisite è l'uso di siti modello. Un sito modello è uno in cui il tema è stato installato e attivato, i plugin necessari installati e attivati e i post o le pagine di esempio creati. Quando un cliente crea un nuovo sito basato sul modello, i contenuti e le impostazioni del modello vengono copiati nel nuovo sito.

Per un fornitore di siti e servizi di nicchia, ciò offre un vantaggio senza pari nella capacità di creare istantaneamente un sito pronto all'uso con plugin personalizzati e design. Il cliente deve solo fornire l'input più minimo per completare il servizio.

A seconda dei requisiti, sia le configurazioni _sottocartella_ che _sottodominio_ possono essere adatte; in tal caso le scelte architetturali sarebbero tra un semplice certificato SSL per _sottocartelle_ o un certificato SSL wildcard per _sottodomini_.

#### Caso 3: Hosting Web WordPress

Ci sono una moltitudine di modi per ospitare siti WordPress, ma raramente è così semplice come fornire spazio web a un cliente con una versione preinstallata di WordPress. Ciò è dovuto al fatto che molte decisioni e considerazioni devono convergere per fornire un servizio significativo.

Ultimate Multisite eccelle in quest'area fornendo una soluzione chiavi in mano completa per l'hosting di siti WordPress. La soluzione include i meccanismi di base per fornire servizi di abbonamento, raccolta pagamenti, moduli di checkout, buoni sconto e comunicazioni con i clienti.

Gran parte del lavoro integrale necessario per installare, configurare e mantenere correttamente un WordPress Multisite è facilitato da Ultimate Multisite nella misura in cui gli amministratori di rete devono considerare solo gli aspetti relativi al loro servizio o nicchia, come livelli di prodotto, prezzi e offerte di servizio.

Per gli sviluppatori che desiderano integrarsi con Ultimate Multisite, la soluzione offre anche un'API RESTful completa e Webhooks per la notifica degli eventi.

Senza fare affidamento su una moltitudine di plugin e licenze esterne, Ultimate Multisite fornisce una soluzione ricca di funzionalità e comparabile a quella di Wix, Squarespace, WordPress.com e altri.

### Considerazioni sull'architettura

Sebbene non sia una guida completa, i seguenti elementi dovrebbero servire come guida per la corretta selezione delle tecnologie per supportare un'installazione Ultimate Multisite.

#### Hosting condiviso vs. dedicato

Sfortunatamente non tutti i provider di hosting sono uguali e alcuni praticano densità di server estreme. I provider a basso costo generano tipicamente entrate massimizzando la densità del server. Di conseguenza, la tua installazione Ultimate Multisite potrebbe essere solo uno dei diversi centinaia di siti sullo stesso server.

Senza adeguate salvaguardie da parte del provider, i siti su un server condiviso sperimentano il problema del ‘vicino rumoroso’. Cioè, un sito sullo stesso server consuma tante risorse che gli altri siti hanno da competere per le risorse rimanenti. Spesso questo si presenta come siti lenti o che non rispondono in modo tempestivo.

Come provider di hosting web, gli effetti del flusso significheranno che i tuoi clienti sperimentano velocità scarse, basso ranking delle pagine e alti tassi di rimbalzo, spesso portando a un churn dei clienti mentre cercano servizi altrove.

In breve, economico non significa buono.

Ultimate Multisite è noto per funzionare con diversi provider di hosting di qualità e si integra bene con il loro ambiente per fornire funzioni come la mappatura del dominio e l'SSL automatico. Questi provider danno valore alla performance e offrono un servizio di grado superiore rispetto all'hosting condiviso.

Per un elenco di provider compatibili e istruzioni complete di configurazione per ciascuno, consulta la documentazione dei Provider Compatibili.

#### Considerazioni sulle prestazioni

Ultimate Multisite non è un'applicazione lenta, anzi, è notevolmente veloce. Tuttavia, le sue prestazioni dipendono dall'applicazione e dall'infrastruttura sottostante e può sfruttare solo ciò a cui ha accesso.

Considera questo: sei l'amministratore di rete di un'installazione Ultimate Multisite con 100 siti. Alcuni di questi siti stanno andando bene e attirano un numero di visitatori del sito web ogni giorno.

Questo scenario sarebbe diverso su una scala più piccola, ad esempio da uno a cinque siti, ma prima o poi i problemi di scala sarebbero evidenti.

Lasciato in sospeso, il singolo sito Ultimate Multisite sarebbe responsabile di soddisfare le richieste di tutti i visitatori dei siti. Queste richieste potrebbero riguardare pagine PHP dinamiche o asset statici come fogli di stile, javascript o file multimediali. Che si tratti di uno o di cento siti, questi compiti diventano ripetitivi, monotoni e sprechi. Non è necessario utilizzare potenza CPU e memoria per elaborare un file PHP quando l'output è la stessa informazione statica per ogni richiesta.

Allo stesso modo, una richiesta per una pagina PHP o HTML genera a sua volta più richieste successive per script, fogli di stile e file immagine. Queste richieste sono indirizzate direttamente al tuo server Ultimate Multisite.

Si potrebbe facilmente risolvere questo problema aggiornando il server, ma non risolve un problema secondario: le latenza geografica. Solo più server in più località potrebbero affrontare correttamente questo problema.

Per questo motivo la maggior parte degli amministratori di rete utilizza soluzioni di caching front-end e reti di distribuzione dei contenuti (CDN) per soddisfare le richieste di pagine statiche. Soddisfare queste richieste e servire gli asset prima che la richiesta raggiunga il server risparmia risorse di elaborazione, elimina ritardi, evita upgrade inutili e massimizza gli investimenti tecnologici.

Ultimate Multisite include un add-on sofisticato di Cloudflare che consente agli amministratori di rete di posizionare le loro installazioni dietro Cloudflare e di utilizzare non solo le sue capacità di caching ma anche hosting DNS, certificati SSL e meccanismi di sicurezza.

#### Backup

Si può chiedere a 50 persone consigli sui backup e ricevere 50 opinioni diverse sulle strategie di backup. La risposta è: dipende.

Ciò che non è contestato è che i backup sono necessari e che è quasi inconcepibile che non siano gestiti dal provider, in particolare da uno che offre un servizio gestito. Di conseguenza, i clienti cercheranno l'amministratore di rete per fornire e gestire questo servizio. Chi l'amministratore di rete cercherà è un problema completamente diverso.

Per le finalità di questa sezione, concordiamo che un backup sia una copia a un determinato momento dello stato del sistema al momento dell'avvio del backup. In parole semplici, qualunque sia lo stato del sistema al momento del backup, quello stato viene catturato e conservato nel backup.

Con questa comprensione, la risposta su come ottenere i backup e cosa sia meglio per il tuo ambiente dipenderà in gran parte dalle tue esigenze e dalla capacità del provider di hosting di soddisfare tali requisiti. Tuttavia, nell'ordine dal più opinato al meno opinato, le opzioni di seguito dovrebbero fornire qualche indicazione.

#### Snapshot

I snapshot sono le armi d'argento per i backup perché sono facili, non complicati (fino a quando non vuoi ripristinare) e 'funzionano semplicemente'. Tuttavia, richiedono un po' di aiuto da parte del tuo provider e si applicano principalmente solo se hai un VPS (Virtual Private Server) o simili. Diversi provider elencati nella nostra documentazione dei 'Provider Compatibili' offrono backup che non richiedono ulteriori interventi o considerazioni da parte dell'amministratore di rete.

Mentre i backup tradizionali mirano a file e database, un snapshot mira all'intero disco. Ciò significa che non solo i dati del sito vengono catturati nello snapshot, ma anche il sistema operativo e la configurazione. Per molti, questo è un vantaggio distintivo poiché un nuovo sistema può essere generato quasi istantaneamente da uno snapshot e messo in funzione per sostituire un'istanza malata. Allo stesso modo, il processo di recupero per recuperare file richiede solo di collegare l'immagine dello snapshot come disco a un'istanza esistente in modo che i file possano essere accessibili e copiati.

I snapshot possono comportare un costo aggiuntivo con il provider di hosting, ma sono una polizza assicurativa contro gli incidenti.

#### Script esterni

Non sembra esserci una carenza di script e soluzioni esterne per il backup delle risorse WordPress e MySQL e questi funzionerebbero bene per Ultimate Multisite poiché è un plugin WordPress che utilizza il filesystem e il database di WordPress. Pertanto, una soluzione che esegue il backup dei siti WordPress coprirebbe adeguatamente le esigenze di Ultimate Multisite.

Non possiamo raccomandare uno script rispetto a un altro, ma il nostro consiglio generale è eseguire diversi test di backup e ripristino per garantire che i risultati siano desiderati e di 'essere sicuri di essere sicuri' valutando continuamente lo script e la sua funzionalità, in particolare dove viene applicata una forma di strategia di backup differenziale.

Si noti che questi script, durante l'esecuzione, aumenteranno il carico di sistema, che dovrebbe essere preso in considerazione.

#### Plugin

Quasi non c'è alcun problema in WordPress che non possa essere risolto con un plugin e se gestire script esterni non è la tua tazza di caffè, allora forse un plugin è la prossima opzione migliore.

Sebbene i plugin varino nelle opzioni e nelle funzionalità, eseguono principalmente la stessa funzione, ovvero fare una copia dei file WordPress e dei contenuti del database. Successivamente, le funzionalità differiscono poiché alcuni plugin possono inviare i backup a servizi esterni come Google Drive o Dropbox o a qualche servizio di storage di oggetti compatibile come S3, Wasabi o altri. I plugin più completi forniscono backup differenziali o qualche strategia per salvare solo i dati che sono stati modificati per ridurre i costi di storage esterno.

Nel selezionare il tuo plugin, fai attenzione a verificare che sia consapevole del multisite. A causa della sua natura di operazione, mentre il backup è in esecuzione, puoi aspettarti un carico temporaneo sul server fino al completamento del processo.

#### Dominio e SSL

Molto è già stato discusso riguardo ai nomi di dominio in modalità _sottodominio_ multisite. Una soluzione quasi universale per gli amministratori di rete è utilizzare voci DNS wildcard.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GwkLVUQ9Wb.png)

Questo tipo di voce DNS risolverà con successo i _sottodomini_ come ‘site1.domain.com’ e ‘site2.domain.com’ a un indirizzo IP di 1.2.3.4, supportando così Ultimate Multisite e, in misura maggiore, WordPress Multisite in modalità _sottodominio_.

Questo può funzionare perfettamente per HTTP perché l'host di destinazione è letto dagli header HTTP, ma raramente il web è così semplice in questi giorni dove le transazioni HTTPS sicure sono quasi obbligatorie.

Fortunatamente ci sono opzioni semplici per i certificati SSL. In modalità _sottocartella_ può essere utilizzato un certificato di dominio regolare. Questi sono disponibili in modo rapido e gratuito da provider di hosting che potrebbero utilizzare il servizio gratuito LetsEncrypt o un'altra fonte. Altrimenti, sono disponibili commercialmente dalle autorità se sei in grado di generare la richiesta di firma del certificato.

Per la modalità _sottodominio_, l'uso di un certificato SSL wildcard si abbinerà perfettamente a un dominio wildcard e consentirà al certificato di essere autorevole per il dominio principale e tutti i _sottodomini_ senza configurazioni superflue.

Tuttavia, si noti che i certificati SSL wildcard potrebbero non funzionare con servizi come Cloudflare a meno che tu non sia su un piano enterprise o imposti la voce su DNS solo, in tal caso tutta la cache e l'ottimizzazione vengono bypassate.

Out-of-the-box Ultimate Multisite fornisce una soluzione a questo problema dimostrando la nostra vasta esperienza con le esigenze dei WordPress multisite. Attivando questo semplice add-on, Ultimate Multisite utilizzerà le tue credenziali Cloudflare per aggiungere automaticamente voci DNS per i siti della rete in Cloudflare e impostare la loro modalità su ‘proxied’. In questo modo, ogni sottosito della rete, quando creato, avrà la piena protezione e i vantaggi di Cloudflare, inclusi SSL.

A seconda della natura e dello scopo della tua installazione Ultimate Multisite, potrebbe esserci la necessità che i clienti utilizzino i propri domini. In questo caso, l'amministratore di rete è incaricato di risolvere due problemi. Uno, l'hosting del nome di dominio e due, i certificati SSL per il dominio.

Per molti, l'uso di Cloudflare è un'opzione semplice. Il cliente deve solo posizionare il proprio dominio su Cloudflare, puntare un CNAME al dominio principale di Ultimate Multisite e mappare il proprio dominio in Ultimate Multisite per iniziare a sfruttare il proprio nome di dominio personalizzato.

Al di fuori di questo, è necessario cercare soluzioni alternative, motivo per cui Ultimate Multisite consiglia un elenco di Provider Compatibili. Ciò è dovuto al fatto che il processo di configurazione di DNS e SSL può essere un processo non banale. Tuttavia, con l'integrazione di Ultimate Multisite con questi provider, la complessità è notevolmente ridotta e la procedura è automatizzata.

#### Plugin

È molto probabile che tu abbia bisogno di plugin aggiuntivi per fornire funzionalità ai tuoi clienti o ai siti della rete. Tutti i plugin funzionano con WordPress Multisite e Ultimate Multisite? Beh, dipende.

Sebbene la maggior parte dei plugin sia installabile in un WordPress Multisite, la loro attivazione e licenza variano da autore ad autore. La sfida risiede nel modo in cui la licenza viene applicata, poiché alcuni plugin richiedono la licenza su base per dominio. Ciò significherebbe che per alcuni plugin l'amministratore di rete deve attivare manualmente la licenza per ogni plugin su ogni nuovo sito.
