---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite è un plugin WordPress Multisite che ti consente di offrire un WaaS o Websites as a Service ai clienti. Prima di addentrarci e scoprire come Ultimate Multisite può aiutare la tua attività e i tuoi clienti, ci sono alcune conoscenze di base che dobbiamo acquisire.

## Il WordPress Multisite {#the-wordpress-multisite}

La maggior parte di noi ha familiarità con l’installazione standard di WordPress. La crei tramite il pannello di controllo del tuo provider di hosting oppure, per i più audaci, configuri un nuovo server web e database, scarichi i file core e inizi il processo di installazione.

Questo funziona per milioni di siti WordPress in tutto il mondo, ma dalla prospettiva di un’agenzia o di un provider di hosting parliamo per un momento di volumi.

Sebbene sia semplicissimo creare un sito WordPress, o anche cento, tramite un pannello di controllo automatizzato, i problemi iniziano presto a manifestarsi quando si tratta della gestione di questi siti. Se lasciati non gestiti, diventi un bersaglio privilegiato per il malware. Gestire significa impiegare sforzi e risorse e, sebbene siano disponibili strumenti e plugin esterni per aiutare a snellire la gestione e l’amministrazione dei siti WordPress, il fatto che i clienti mantengano l’accesso amministrativo significa che questi sforzi potrebbero facilmente essere vanificati.

Nel suo core, WordPress fornisce una funzionalità chiamata semplicemente ‘Multisite’, le cui origini risalgono al 2010 con il lancio di WordPress 3.0. Da allora ha ricevuto una serie di revisioni volte a introdurre nuove funzionalità e rafforzare la sicurezza.

In sostanza, un WordPress multisite può essere inteso così: un’università mantiene una singola installazione di WordPress, ma ogni facoltà mantiene il proprio sito WordPress.

Per analizzare questa affermazione, diamo un’occhiata ad alcuni dei termini di base presenti non solo nella documentazione di Ultimate Multisite, ma anche in tutta la community WordPress.

### La rete {#the-network}

In termini di WordPress, una rete multisite è il luogo in cui un certo numero di sottositi può essere gestito da una singola Dashboard. Sebbene la creazione di una rete multisite differisca tra i provider di hosting, il risultato finale di solito consiste in alcune direttive aggiuntive nel file wp-config.php per far sapere a WordPress che sta operando in questa modalità specifica.

Ci sono una serie di differenze distinte tra una rete multisite e un’installazione WordPress autonoma, che discuteremo brevemente.

#### Sottodominio vs. sottodirectory {#subdomain-vs-subdirectory}

Una delle decisioni più immediate che dovrai prendere è se l’installazione multisite opererà con _sottodirectory_ o _sottodomini_. Ultimate Multisite funziona altrettanto bene con entrambe le scelte, ma ci sono alcune differenze architetturali tra le due configurazioni.

Nella configurazione a _sottodirectory_, i siti della rete ereditano un percorso basato sul nome di dominio principale. Ad esempio, un sito della rete etichettato ‘site1’ avrà il suo URL completo come https://domain.com/site1. Nella configurazione a _sottodominio_, il sito della rete avrà il proprio _sottodominio_ derivato dal nome di dominio principale. Quindi un sito etichettato ‘site1’ avrà il suo URL completo come https://site1.domain.com/.

Sebbene entrambe le opzioni siano scelte perfettamente valide, l’uso dei _sottodomini_ offre una serie di vantaggi, ma richiede anche più riflessione e pianificazione nella sua architettura.

In termini di DNS, l’uso delle _sottodirectory_ presenta una sfida relativamente semplice. Poiché i siti della rete sono semplicemente figli del percorso padre, deve esistere una sola voce di nome di dominio per il nome di dominio principale. Per i _sottodomini_ la sfida è un po’ più complessa, richiedendo una voce CNAME separata per ogni sito della rete oppure una voce wildcard (*) nei record DNS.

Un’ulteriore area di considerazione è quella di SSL e dell’emissione e utilizzo dei certificati SSL. Nella configurazione a _sottodirectory_ può essere utilizzato un singolo certificato di dominio, poiché i siti della rete sono semplicemente percorsi del nome di dominio principale. Quindi un certificato per domain.com fornirà adeguatamente SSL per https://domain.com/site1, https://domain.com/site2 e così via.

Nella configurazione a _sottodominio_, l’uso di un certificato SSL wildcard è una delle opzioni più comuni. Questo tipo di certificato SSL fornisce crittografia per un dominio e i suoi _sottodomini_. Pertanto un certificato SSL wildcard fornirà crittografia per https://site1.domain.com, https://site2.domain.com e https://domain.com stesso.

Sebbene esistano altre opzioni, queste sono spesso limitate per ambito e applicazione e richiedono configurazione e considerazioni aggiuntive in merito all’idoneità.

#### Plugin e temi {#plugins-and-themes}

Ciò che WordPress dà, lo toglie anche, almeno dalla prospettiva del cliente. In un’installazione WordPress autonoma, se l’amministratore del sito installa un plugin scadente o non mantiene aggiornata la propria installazione, l’unica vittima e parte lesa di questo atto è lui stesso. Tuttavia, un amministratore del sito che installa un plugin scadente su un’installazione multisite rende vittima ogni sito installato nella rete.

Per questo motivo, quando configurato come multisite, WordPress rimuove agli amministratori del sito la capacità di installare plugin e temi e sposta invece questa capacità a un nuovo ruolo di amministratore di rete o ‘super admin’. Questo ruolo privilegiato può quindi decidere se consentire agli amministratori dei siti della rete di vedere o accedere al menu dei plugin nella loro Dashboard e, in tal caso, se tali permessi si estendano all’_attivazione_ o alla _disattivazione_ dei plugin.

In questo senso, l’amministratore di rete è responsabile dell’installazione di plugin e temi nella rete e delega ai siti della rete i permessi per utilizzare questi plugin e temi. Gli amministratori del sito non possono installare plugin e temi né accedere a plugin e temi non assegnati al loro sito.

#### Utenti e amministratori {#users-and-administrators}

In un WordPress Multisite, tutti i siti della rete condividono lo stesso database e quindi condividono gli stessi utenti, ruoli e capacità. Il modo più appropriato di pensarci è che tutti gli utenti sono membri della rete e non di un sito specifico.

Dato questo presupposto, potrebbe essere indesiderabile consentire la creazione di utenti e per questo motivo WordPress Multisite rimuove questa capacità dagli amministratori del sito e la trasferisce all’amministratore di rete. A sua volta, l’amministratore di rete può delegare i privilegi necessari a un amministratore del sito per consentirgli di creare Account utente per il proprio sito.

<!-- Screenshot non disponibile: interfaccia di gestione utenti di rete di WordPress Multisite -->

Ribadendo quanto affermato sopra, sebbene gli Account utente sembrino essere correlati al sito, in realtà sono assegnati alla rete e pertanto devono essere univoci in tutta la rete. Per questo motivo possono verificarsi casi in cui i nomi utente non siano disponibili per la registrazione.

Sebbene non sia un concetto estraneo ai sistemi aziendali, questa singola fonte di registrazione e autenticazione degli utenti è spesso un concetto difficile da comprendere per le persone abituate alle installazioni WordPress autonome, dove l’amministrazione degli utenti è in qualche modo più semplice.

#### Media {#media}

Quando i siti di rete condividono un unico database in WordPress Multisite, mantengono percorsi separati nel filesystem per i file multimediali.

La posizione standard di WordPress (wp-content/uploads) rimane; tuttavia, il suo percorso viene modificato per riflettere l’ID univoco del sito di rete. Di conseguenza, i file multimediali per un sito di rete appaiono come wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Abbiamo già menzionato che esistono vantaggi distintivi della configurazione _subdomain_ rispetto a quella _subdirectory_ ed eccoli qui: i percorsi.

In una configurazione _subdirectory_, il sito principale (il primo sito creato quando viene istituita la rete) e i sottositi di rete devono condividere lo stesso percorso a partire dal nome di dominio. Questo può potenzialmente generare un gran numero di conflitti.

Per i post, viene aggiunto un percorso /blog/ obbligatorio al sito principale per evitare conflitti con i siti di rete. Ciò significa che permalink leggibili come “Nome articolo” verranno presentati come domain.name/blog/post-name/

<!-- Screenshot non disponibile: impostazioni dei permalink di WordPress che mostrano il percorso /blog/ nella configurazione subdirectory -->

In una configurazione _subdomain_ questa azione non è necessaria perché ogni sito di rete beneficia di una separazione completa del dominio e quindi non deve fare affidamento su un unico percorso. Mantengono invece i propri percorsi distinti basati sul loro _subdomain_.

<!-- Screenshot non disponibile: impostazioni dei permalink di WordPress per la configurazione subdomain -->

#### Pagine statiche {#static-pages}

Nella configurazione _subdirectory_ il potenziale di conflitti di denominazione si estende alle pagine statiche, poiché il sito principale e i siti di rete condividono lo stesso percorso.

Per evitarlo, WordPress fornisce un mezzo per inserire in una blacklist determinati nomi di sito in modo che non entrino in conflitto con i nomi del primo sito. In genere l’amministratore di rete inserirebbe i percorsi radice delle pagine del sito principale.

<!-- Screenshot non disponibile: impostazioni di rete di WordPress che mostrano nomi di sito vietati per prevenire conflitti -->

Nella configurazione _subdomain_ la possibilità di conflitti di denominazione è mitigata dal _subdomain_, poiché è univoco per il sito di rete e non è correlato in alcun modo al sito principale.

### Registrazione {#registration}

All’interno delle impostazioni di rete di WordPress Multisite sono disponibili diverse nuove opzioni di registrazione utenti, che consentono a utenti nuovi ed esistenti di creare siti.

<!-- Screenshot non disponibile: impostazioni di rete di WordPress Multisite che mostrano le opzioni di registrazione -->

A differenza delle installazioni WordPress autonome, i siti di rete non mantengono le opzioni familiari per consentire le registrazioni degli utenti o assegnare tali registrazioni ai ruoli.

<!-- Screenshot non disponibile: impostazioni di registrazione utenti di un sito WordPress autonomo che mostrano opzioni limitate -->

Quando vengono creati Account utente, tali Account vengono generati a livello di rete. Pertanto, invece di appartenere a un particolare sito, appartengono invece alla rete. Questo presenta alcuni vantaggi e svantaggi distintivi.

Ad esempio, supponi che il tuo WordPress Multisite operi nel settore delle notizie e dell’informazione. Configureresti il multisite e poi creeresti siti di rete per finanza, tecnologia, intrattenimento e altre aree di interesse, mantenendo al contempo il controllo complessivo di plugin e temi. A sua volta, ogni sito di rete avrebbe un livello di controllo molto maggiore sull’aspetto, sulla percezione e sull’esperienza utente del proprio sito di rete rispetto a quanto avrebbero tipi di post personalizzati o categorie di post regolari.

In questo senso, quando un utente effettua l’accesso, accede alla rete e in definitiva risulta connesso anche a ciascun sito di rete, per offrire un’esperienza fluida. Se il tuo nuovo sito fosse basato su abbonamento, questa sarebbe la soluzione e il risultato ideali.

Se, tuttavia, la natura e lo scopo previsti del multisite fossero offrire siti di rete separati che non hanno alcuna relazione tra loro, è quasi sempre necessario ricorrere a plugin esterni o aggiuntivi per manipolare i ruoli utente.

### Dominio e SSL {#domain-and-ssl}

Parliamo di un’installazione WordPress Multisite che quasi sfugge alla nostra attenzione: WordPress.com. Questo è di gran lunga l’esempio più esteso di un multisite WordPress e dimostra le sue ampie capacità di essere personalizzato e modellato per soddisfare uno scopo.

Oggi, nell’internet moderno, l’uso di SSL è quasi obbligatorio e gli amministratori di rete dei multisite WordPress si trovano presto ad affrontare queste sfide.

Nella configurazione _subdomain_ i siti vengono creati in base al nome di dominio radice. Pertanto un sito etichettato “site1” verrebbe creato come “site1.domain.com”. Utilizzando un certificato SSL wildcard, un amministratore di rete può affrontare con successo questa sfida e fornire capacità di crittografia SSL per la rete.

WordPress Multisite contiene una funzione di domain mapping che consente ai siti di rete di essere associati a nomi di dominio personalizzati o a nomi di dominio diversi dal dominio radice della rete.

Per gli amministratori di rete questo comporta un ulteriore livello di complessità sia nella configurazione del nome di dominio sia nell’emissione e manutenzione dei certificati SSL.

In questa misura, mentre WordPress Multisite fornisce un mezzo per consentire a [www.anotherdomain.com](http://www.anotherdomain.com) di essere mappato su ‘site1’, all’amministratore di rete resta la sfida di gestire esternamente le voci DNS e l’implementazione dei certificati SSL.

## Ultimate Multisite {#ultimate-multisite}

Comprese le differenze tra un’installazione WordPress autonoma e un’installazione Multisite, diamo un’occhiata a come Ultimate Multisite sia l’arsenale definitivo per fornire siti web come servizio.

### Introduzione {#introduction}

Ultimate Multisite è il tuo coltellino svizzero quando si tratta di creare un sito web come servizio (WaaS). Pensa a Wix.com, Squarespace, WordPress.com e poi immagina di possedere il tuo servizio.

Sotto il cofano Ultimate Multisite utilizza WordPress Multisite, ma lo fa in un modo che non solo risolve la miriade di sfide che gli amministratori di rete affrontano con le installazioni multisite, ma ne potenzia le capacità, consentendo di supportare un’ampia varietà di casi d’uso.

Nelle sezioni seguenti esamineremo alcuni casi d’uso comuni e le considerazioni necessarie per supportarli.

### Casi d’uso {#use-cases}

#### Caso 1: un’agenzia {#case-1-an-agency}

In genere le competenze principali di un’agenzia risiedono nella progettazione di siti web, con aspetti come il loro hosting o il marketing elencati come servizi aggiuntivi.

Per le agenzie Ultimate Multisite presenta una proposta di valore incredibile grazie alle sue capacità di ospitare e gestire più siti web su un’unica piattaforma. Ancor di più, le agenzie che standardizzano i propri design su temi specifici come GeneratePress, Astra, OceanWP o altri possono sfruttare le capacità di Ultimate Multisite di attivare automaticamente questi temi per ogni nuovo sito.

Allo stesso modo, con l’abbondanza di offerte con prezzi per agenzie per plugin comuni e popolari, l’uso di Ultimate Multisite consente alle agenzie di sfruttare gli investimenti esistenti fornendo una piattaforma comune da cui i plugin possono essere installati, mantenuti e utilizzati.

Molto probabilmente sarebbe desiderabile l’uso di una configurazione e, fortunatamente, Ultimate Multisite rende incredibilmente semplice facilitare la mappatura dei domini e i certificati SSL grazie alle sue integrazioni con numerosi provider di hosting popolari, nonché con servizi come Cloudflare e cPanel.

Pertanto, sfruttando uno di questi provider o posizionando Ultimate Multisite dietro Cloudflare, aspetti come la gestione dei domini e dei certificati SSL diventano in qualche modo banali.

Le agenzie che preferiscono mantenere uno stretto controllo sulla creazione dei siti apprezzeranno la facilità con cui possono creare siti e associare siti a clienti e piani tramite l’interfaccia semplificata di Ultimate Multisite.

![Interfaccia di gestione siti di Ultimate Multisite](/img/admin/sites-list.png)

Uno stretto controllo su plugin e temi viene mantenuto per singolo prodotto tramite le interfacce intuitive di Ultimate Multisite, consentendo di rendere disponibili o nascondere plugin e temi, oltre a definirne lo stato di attivazione quando vengono istanziati per un nuovo sito.

![Interfaccia delle limitazioni dei plugin del prodotto](/img/config/product-plugins.png)

I temi offrono funzionalità simili, consentendo l’attivazione o l’occultamento di temi specifici alla creazione del sito.

![Interfaccia delle limitazioni dei temi del prodotto](/img/config/product-themes.png)

Le agenzie troveranno tranquillità con Ultimate Multisite, che consente loro di fare ciò che sanno fare meglio: progettare siti web eccezionali.

#### Caso 2: fornitore di nicchia {#case-2-niche-provider}

C’è un vecchio detto che dice: “fai una cosa e falla bene”. Per molti specialisti questo significa creare un prodotto o servizio attorno a un’unica idea centrale.

Forse sei un appassionato golfista che promuove siti web per club, oppure potresti essere un appassionato giocatore di esports che fornisce siti web ai clan. Magari un individuo che promuove un servizio di prenotazione per ristoranti?

Per molte ragioni vorresti fornire servizi basati su un framework e una piattaforma comuni. Potrebbe essere che tu abbia progettato o investito in plugin su misura per fornire la funzionalità richiesta, oppure potrebbe essere il caso che le migliori pratiche del settore richiedano una qualche forma di approccio standardizzato al design.

Una delle funzionalità innovative di Ultimate Multisite è l’uso di siti modello. Un sito modello è un sito in cui il tema è stato installato e attivato, i plugin necessari installati e attivati e post o pagine di esempio creati. Quando un cliente crea un nuovo sito basato sul modello, i contenuti e le impostazioni del modello vengono copiati nel sito appena creato.

Per un fornitore di siti e servizi di nicchia, questo offre un vantaggio impareggiabile nella capacità di creare istantaneamente un sito pronto all’uso con plugin e design personalizzati. Il cliente deve fornire solo il minimo indispensabile di input per completare il servizio.

A seconda dei requisiti, possono essere adatte configurazioni sia _subdirectory_ sia _subdomain_; in tal caso le scelte architetturali sarebbero tra un semplice certificato SSL per le _subdirectory_ o un certificato SSL wildcard per i _subdomain_.

#### Caso 3: hosting web WordPress {#case-3-wordpress-web-hosting}

Esistono una miriade di modi per ospitare siti WordPress, ma raramente è semplice quanto fornire spazio web a un cliente con una versione preinstallata di WordPress. Questo perché una serie di decisioni e considerazioni devono convergere per fornire un servizio significativo.

Ultimate Multisite eccelle in quest’area fornendo una soluzione chiavi in mano completa per l’hosting di siti WordPress. Nella soluzione sono inclusi i meccanismi principali per fornire servizi in abbonamento, riscossione dei pagamenti, moduli di checkout, buoni sconto e comunicazioni con i clienti.

Gran parte del lavoro integrale richiesto per installare, configurare e mantenere correttamente un WordPress Multisite è facilitato da Ultimate Multisite, al punto che gli amministratori di rete devono considerare solo gli aspetti relativi al loro servizio o alla loro nicchia, come livelli di prodotto, prezzi e offerte di servizio.

Per gli sviluppatori che desiderano integrarsi con Ultimate Multisite, la soluzione offre anche una RESTful API completa e Webhook per la notifica degli eventi.

Senza dipendere da una miriade di plugin e licenze esterni, Ultimate Multisite fornisce una soluzione ricca di funzionalità e comparabile a quelle di Wix, Squarespace, WordPress.com e altri.

### Considerazioni sull’architettura {#architecture-considerations}

Pur non essendo una guida completa, i seguenti elementi dovrebbero servire da orientamento per la corretta selezione delle tecnologie a supporto di un’installazione Ultimate Multisite.

#### Hosting condiviso vs. dedicato {#shared-vs-dedicated-hosting}

Purtroppo non tutti i provider di hosting sono uguali e alcuni praticano densità di server estreme. I provider a basso costo in genere generano ricavi massimizzando la densità dei server. Di conseguenza, la tua installazione Ultimate Multisite potrebbe essere solo uno tra diverse centinaia di siti sullo stesso server.

Senza adeguate misure di salvaguardia da parte del provider, i siti su un server condiviso sperimentano il problema del “vicino rumoroso”. Vale a dire, un sito sullo stesso server consuma così tante risorse che gli altri siti devono competere per le risorse rimanenti. Spesso questo si manifesta con siti lenti o che non riescono a rispondere in tempi adeguati.

Come provider di web hosting, gli effetti a cascata faranno sì che i tuoi clienti sperimentino scarse velocità, basso posizionamento delle pagine e alti tassi di rimbalzo, spesso con conseguente abbandono dei clienti mentre cercano servizi altrove.

In breve, economico non significa buono.

Ultimate Multisite è noto per funzionare con diversi buoni provider di hosting e si integra bene con il loro ambiente per fornire funzioni come la mappatura dei domini e SSL automatico. Questi provider valorizzano le prestazioni e forniscono un servizio di livello superiore rispetto all’hosting condiviso.

Per un elenco di provider compatibili e le istruzioni complete di configurazione per ciascuno, consulta la documentazione dei Provider compatibili.

#### Considerazioni sulle prestazioni {#performance-considerations}

Ultimate Multisite non è un’applicazione lenta; al contrario, è notevolmente veloce. Tuttavia, funziona bene solo quanto l’applicazione e l’infrastruttura sottostanti e può sfruttare solo ciò a cui ha accesso.

Considera questo: sei l’amministratore di rete di un’installazione Ultimate Multisite con 100 siti. Alcuni di questi siti stanno andando bene e attirano ogni giorno un certo numero di visitatori.

Questo scenario sarebbe diverso su scala più piccola, diciamo da uno a cinque siti, ma in breve tempo i problemi di scala diventerebbero evidenti.

Se lasciato senza interventi, il singolo sito Ultimate Multisite sarebbe responsabile di soddisfare le richieste di tutti i visitatori dei siti. Queste richieste potrebbero riguardare pagine PHP dinamiche o risorse statiche come fogli di stile, javascript o file multimediali. Che si tratti di uno o cento siti, questi compiti diventano ripetitivi, monotoni e dispendiosi. Non è necessario usare potenza CPU e memoria per elaborare un file PHP quando l’output è la stessa informazione statica per ogni richiesta.

Allo stesso modo, una richiesta per una pagina PHP o HTML genera a sua volta più richieste successive per script, fogli di stile e file immagine. Tali richieste sono indirizzate direttamente al tuo server Ultimate Multisite.

Si potrebbe risolvere facilmente questo problema aggiornando il server, ma questo non risolve un problema secondario: le latenze geografiche. Solo più server in più località potrebbero affrontare correttamente questo problema.

Per questo motivo la maggior parte degli amministratori di rete utilizza soluzioni di caching front-end e reti di distribuzione dei contenuti (CDN) per soddisfare le richieste di pagine statiche. Soddisfare queste richieste e servire le risorse prima che la richiesta raggiunga il server consente di risparmiare risorse di elaborazione, eliminare ritardi, evitare aggiornamenti non necessari e massimizzare gli investimenti tecnologici.

Ultimate Multisite include un sofisticato add-on Cloudflare che consente agli amministratori di rete di posizionare le proprie installazioni dietro Cloudflare e utilizzare non solo le sue capacità di caching, ma anche hosting DNS, certificati SSL e meccanismi di sicurezza.

#### Backup {#backups}

Si potrebbero chiedere consigli sui backup a 50 persone e ricevere 50 opinioni diverse sulle strategie di backup. La risposta è: dipende.

Ciò che non è in discussione è che i backup sono necessari e che è quasi inconcepibile che non siano gestiti dal provider, in particolare da uno che offre un servizio gestito. Di conseguenza, i clienti si rivolgeranno all’amministratore di rete affinché fornisca e gestisca questo servizio. A chi si rivolga l’amministratore di rete è un problema completamente diverso.

Ai fini di questa sezione, concordiamo che un backup è una copia puntuale dello stato del sistema nel momento in cui il backup è stato avviato. In parole semplici, qualunque sia lo stato del sistema al momento del backup, quello stato viene acquisito e conservato nel backup.

Con questa comprensione, la risposta su come ottenere i backup e su cosa sia meglio per il tuo ambiente dipenderà in larga misura dai tuoi requisiti e dalla capacità del provider di hosting di soddisfarli. Tuttavia, in ordine dall’opzione più prescrittiva alla meno prescrittiva, le opzioni seguenti dovrebbero fornire alcune indicazioni.

#### Snapshot {#snapshots}

Gli snapshot sono la soluzione miracolosa per i backup perché sono facili, non complicati (finché non vuoi ripristinare) e “funzionano e basta”. Richiedono però un certo aiuto dal tuo provider e si applicano principalmente solo se hai un VPS (Virtual Private Server) o simile. Diversi provider elencati nella nostra documentazione “Provider compatibili” offrono backup che non richiedono ulteriori interventi o considerazioni da parte dell’amministratore di rete.

Mentre i backup tradizionali mirano a file e database, uno snapshot mira all’intero disco. Questo significa che nello snapshot vengono acquisiti non solo i dati del sito, ma anche il sistema operativo e la configurazione. Per molti questo è un vantaggio evidente, poiché un nuovo sistema può essere avviato quasi istantaneamente da uno snapshot ed essere messo in funzione per sostituire un’istanza in difficoltà. Allo stesso modo, il processo di recupero per ottenere solo i file richiede semplicemente di collegare l’immagine dello snapshot come disco a un’istanza esistente, in modo che i file possano essere accessibili e copiati.

Gli snapshot possono comportare un costo aggiuntivo con il provider di hosting, ma sono una polizza assicurativa contro gli incidenti.

#### Script esterni {#external-scripts}

Non sembra esserci carenza di script e soluzioni esterni per eseguire il backup delle risorse WordPress e MySQL, e questi funzionerebbero bene per Ultimate Multisite, poiché è un plugin WordPress che utilizza il filesystem e il database di WordPress. Pertanto, una soluzione che esegue il backup dei siti WordPress coprirebbe adeguatamente le esigenze di Ultimate Multisite.

Non possiamo raccomandare uno script rispetto a un altro, ma il nostro consiglio generale è di eseguire diversi test di backup e ripristino per assicurarsi che i risultati siano quelli desiderati e di “essere sicuri di essere sicuri” valutando continuamente lo script e la sua funzionalità, in particolare quando viene applicata una qualche forma di strategia di backup differenziale.

Va notato che questi script, durante l’esecuzione, aumenteranno il carico di sistema, cosa che dovrebbe essere presa in considerazione.

#### Plugin {#plugins}

Non c’è quasi nessun problema in WordPress che non possa essere risolto con un plugin e, se gestire script esterni non fa per voi, allora forse un plugin è la migliore opzione successiva.

Sebbene i plugin varino per opzioni e funzionalità, svolgono per lo più la stessa funzione, ovvero creare una copia dei file WordPress e dei contenuti del database. In seguito, le funzionalità differiscono, poiché alcuni plugin possono inviare i backup a servizi esterni come Google Drive o Dropbox, oppure a qualche tipo di servizio di archiviazione a oggetti compatibile come S3, Wasabi o altri. I plugin più completi forniscono backup differenziali o una qualche strategia per eseguire il backup solo dei dati che sono stati modificati, così da risparmiare sui costi di archiviazione esterna.

Nella scelta del vostro plugin, fate attenzione a verificare che sia consapevole del multisite. Per la sua natura di funzionamento, mentre il backup è in esecuzione potete aspettarvi un carico temporaneo sul server fino al completamento del processo.

#### Dominio e SSL {#domain-and-ssl-1}

Si è già discusso molto dei nomi di dominio in modalità _subdomain_ multisite. Una soluzione quasi universale per gli amministratori di rete è utilizzare voci DNS wildcard.

![Esempio di configurazione di una voce DNS wildcard](/img/config/settings-domain-mapping.png)

Questo tipo di voce DNS risolverà correttamente _subdomains_ come ‘site1.domain.com’ e ‘site2.domain.com’ a un indirizzo IP 1.2.3.4, supportando così Ultimate Multisite e, in misura più ampia, WordPress Multisite che utilizza la modalità _subdomain_.

Questo può funzionare perfettamente per HTTP perché l’host di destinazione viene letto dagli header HTTP, ma raramente il web è così semplice al giorno d’oggi, dove le transazioni HTTPS sicure sono quasi obbligatorie.

Fortunatamente esistono opzioni semplici per i certificati SSL. In modalità _subdirectory_ può essere utilizzato un normale certificato di dominio. Questi sono facilmente e liberamente disponibili presso provider di hosting che potrebbero utilizzare il servizio gratuito LetsEncrypt o un’altra fonte. In alternativa, sono disponibili commercialmente presso autorità se siete in grado di generare la richiesta di firma del certificato.

Per la modalità _subdomain_, l’uso di un certificato SSL wildcard si abbinerà perfettamente a un dominio wildcard e permetterà al certificato di essere autorevole per il dominio root e tutti i _subdomains_ senza configurazioni superflue.

Tuttavia, va notato che i certificati SSL wildcard potrebbero non funzionare con servizi come Cloudflare, a meno che non siate su un piano enterprise o impostiate la voce su solo DNS, nel qual caso tutta la cache e l’ottimizzazione vengono bypassate.

Subito pronto all’uso, Ultimate Multisite fornisce una soluzione a questo problema, dimostrando la nostra vasta esperienza con le esigenze dei multisite WordPress. L’attivazione di questo semplice add-on farà sì che Ultimate Multisite utilizzi le vostre credenziali Cloudflare per aggiungere automaticamente voci DNS per i siti di rete in Cloudflare e impostare la loro modalità su “proxied”. In questo modo, ogni subsito di rete, quando creato, avrà la piena protezione e i benefici di Cloudflare, incluso SSL.

A seconda della natura e dello scopo della vostra installazione Ultimate Multisite, potrebbe esserci la necessità che i clienti utilizzino i propri domini. In questo caso, l’amministratore di rete ha il compito di risolvere due problemi: primo, l’hosting del nome di dominio e, secondo, i certificati SSL per il dominio.

Per molti, l’uso di Cloudflare è un’opzione semplice. Il cliente deve solo inserire il proprio dominio su Cloudflare, puntare un CNAME al dominio root di Ultimate Multisite e mappare il proprio dominio in Ultimate Multisite per iniziare a sfruttare il proprio nome di dominio personalizzato.

Al di fuori di questo, è necessario cercare soluzioni alternative, motivo per cui Ultimate Multisite raccomanda un elenco di Provider compatibili. Questo perché il processo di configurazione di DNS e SSL può essere non banale. Tuttavia, con l’integrazione di Ultimate Multisite con questi provider, la complessità viene notevolmente ridotta e la procedura è automatizzata.

#### Plugin {#plugins-1}

È molto probabile che abbiate bisogno di plugin aggiuntivi per fornire funzionalità ai vostri clienti o siti di rete. Tutti i plugin funzionano con WordPress Multisite e Ultimate Multisite? Beh, dipende.

Sebbene la maggior parte dei plugin sia installabile in un WordPress Multisite, la loro attivazione e licenza varia da autore ad autore.

La sfida sta nel modo in cui la licenza viene applicata, con alcuni plugin che richiedono licenza su base per dominio. Ciò significherebbe che, per alcuni plugin, l’amministratore di rete deve attivare manualmente la licenza per ciascun plugin su ogni nuovo sito.

Pertanto, potrebbe essere meglio verificare con l’autore del plugin come il suo plugin funzionerebbe con un WordPress Multisite e qualsiasi requisito o procedura speciale necessari per concederlo in licenza.
