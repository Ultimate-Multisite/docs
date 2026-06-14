---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite est un plugin WordPress Multisite qui te permette di offrire WaaS o Siti Web come Servizio ai clienti. Prima di addentrarci e imparare come Ultimate Multisite può aiutare la tua attività e i tuoi clienti, c'è una conoscenza fondamentale che dobbiamo acquisire.

## Il WordPress Multisite

La maggior parte di noi è familiare con l'installazione standard di WordPress. O la crei tramite il pannello di controllo del tuo fornitore di hosting o, per i coraggiosi, configuri un nuovo server web e database, scarichi i file principali e inizi il processo di installazione.

Questo funziona per milioni di siti WordPress in tutto il mondo, ma dal punto di vista di un'agenzia o di un fornitore di hosting, discutiamo dei volumi per un momento.

Sebbene sia semplice creare un sito WordPress o anche cento tramite un pannello di controllo automatizzato, i problemi iniziano a manifestarsi presto quando si passa alla gestione di questi siti. Se lascili non gestiti, diventi un bersaglio primario per il malware. Gestire significa uno sforzo e una risorsa; sebbene ci siano strumenti esterni e plugin disponibili per aiutare a snellire la gestione e l'amministrazione dei siti WordPress, il fatto che i clienti mantengano l'accesso amministrativo significa che questi sforzi possono essere facilmente superati.

Nel suo nucleo, WordPress fornisce una funzione semplicemente chiamata ‘Multisite’ che risale alle sue origini al lancio di WordPress 3.0 nel 2010. Da allora ha ricevuto diverse revisioni volte a introdurre nuove funzionalità e rafforzare la sicurezza.

In sostanza, un WordPress multisite può essere pensato così: Un'Università mantiene un'unica installazione di WordPress ma ogni facoltà mantiene il proprio sito WordPress.

Cumque hoc statementem dividamus, examinemus de terminologia basică quae non solum in documentation Ultimate Multisite sed etiam in communitate WordPress est.

### Rete (The Network)

In termini WordPress, rete multisite est ubi plures subsites ex una sola dashboard geruntur. Cum creatio reti multisite differt inter homines hostingu, finis est usque ad plures directivas additionales in file wp-config.php ut WordPress sciat quod in hoc modo specifico operatur.

Plures distinctae differentiae sunt inter rete multisite et installationem WordPress solam (stand-alone), quae breve discutiam perferimus.

#### Subdomain vs. Subdirectory

Una ex primis decisionibus quae debet facere est si installatio multisite operabit cum _subdirectories_ vel _subdomains_. Ultimate Multisite in ambo eligendo bene operatur, sed sunt aliquae differentiae architectonicae inter duas configurationes.

In configuratione _subdirectory_, sita reti hereditant path basatum in nomine domini principalis. Per exemplum, situm reti nomen ‘site1’ habet suam totam URL ut https://domain.com/site1. In configuratione _subdomain_, situm reti habet suam _subdomain_ derivatam a nomine dominio principalis. Ibi situm nomen ‘site1’ habet totam URL ut https://site1.domain.com/.

Dum ambae optiones sunt perfectae eligenda, usus _subdomains_ plures ventajas offerre potest sed etiam sic plurimum cogitationem et planum in architectura requirit.

In termini di DNS, l'uso delle _sottodirectory_ presenta una sfida relativamente semplice. Poiché i siti di rete sono semplicemente figli del percorso principale, è necessaria solo un'unica voce di nome di dominio per il nome di dominio principale. Per le _sottodomini_, la sfida è un po' più complessa e richiede o un'entrata CNAME separata per ogni sito di rete o una entrata wildcard (*) nei record DNS.

Un altro ambito da considerare è quello degli SSL e l'emissione e l'uso dei certificati SSL. Nella configurazione _subdirectory_, un singolo certificato di dominio può essere utilizzato poiché i siti di rete sono semplicemente percorsi del nome di dominio principale. Pertanto, un certificato per domain.com fornirà adeguatamente SSL per https://domain.com/site1, https://domain.com/site2 e così via.

Nella configurazione _subdomain_, l'uso di un certificato SSL wildcard è una delle opzioni più comuni. Questo tipo di certificato SSL fornisce crittografia per un dominio e i suoi _sottodomini_. Pertanto, un certificato SSL wildcard fornirà crittografia per https://site1.domain.com, https://site2.domain.com e anche per domain.com stesso.

Sebbene esistano altre opzioni, queste sono spesso limitate per ambito e applicazione e richiedono una configurazione e una considerazione aggiuntive riguardo alla loro idoneità.

#### Plugin e Temi

Ciò che WordPress dà, ne toglie anche, almeno dal punto di vista del cliente. In un'installazione stand-alone di WordPress, se l'amministratore del sito installa un plugin cattivo o non mantiene la propria installazione aggiornata, l'unico vittima e conseguenza di questo atto è lui stesso. Tuttavia, un amministratore del sito che installa un plugin cattivo su un'installazione multisite crea una vittima per ogni sito installato nella rete.

Per hoc motivo, quando configurato come WordPress multisite, la capacità di installare plugin e temi viene rimossa dagli amministratori del sito per spostarla invece sul ruolo di amministratore di rete o 'super admin' appena creato. Questo ruolo privilegiato può decidere se consentire agli amministratori dei siti della rete di vedere o accedere al menu dei plugin nella loro dashboard e, in tal caso, se tali permessi si estendono all'attivazione o alla disattivazione dei plugin.

In questa misura, l'amministratore di rete è responsabile dell'installazione di plugin e temi nella rete e delega i permessi per utilizzare questi plugin e temi nei siti della rete. Gli amministratori del sito non possono installare plugin e temi né accedere a plugin e temi non assegnati al loro sito.

#### Utenti e Amministratori

In un WordPress Multisite, tutti i siti della rete condividono lo stesso database e, di conseguenza, gli stessi utenti, ruoli e capacità. Il modo migliore per pensarlo è che tutti gli utenti siano membri della rete e non di un sito particolare.

Data questa comprensione, potrebbe essere indesiderato permettere la creazione di utenti e per questo WordPress Multisite rimuove questa capacità dagli amministratori del sito e la sposta sul ruolo dell'amministratore di rete. A sua volta, l'amministratore di rete può delegare i privilegi necessari a un amministratore del sito per consentirgli di creare account utente per il proprio sito.

<!-- Screenshot non disponibile: interfaccia di gestione utenti della rete WordPress Multisite -->

Ribadendo quanto sopra, sebbene gli account utente sembrino essere collegati al sito in cui si trovano, sono in realtà assegnati alla rete e quindi devono essere univoci in tutta la rete. Possono esserci casi in cui i nomi utente non sono disponibili per l'iscrizione a causa di questo motivo.

Quodquam non est concept alienus in systematibus societatis, hoc unum źródum registrationis et authenticationis usoris saepe est concept difficile de intelligendi pro hominibus qui sunt familiaris cum installationibus WordPress solitudinis ubi administrationem utentium est aliquando plus facilis.

#### Media

Ubi sita network (Multisite) una database communem partifacerunt in WordPress Multisite, pathas distinctas in filesystem ad files mediae conservant.

Locus standard WordPress (wp-content/uploads) manet; tamen eius path alteratur ut id unicum ID sitae network reflectat. Consequentiam, file mediae pro sita network appareant ut wp-contents/uploads/site/[id].

#### Permalinks

Ante dicimus quod sunt distincta vira pro configuratione _subdomain_ quam _subdirectory_, et hic est: pathas.

In configuratione _subdirectory_, situs principalis (primum situs creatum cum network constitutus est) et subsita network debent eodem path ad dominio nomen ducere partiri. Hoc potest ad multitudinem conflictuum magnum recipere.

Pro postis, path obligatorius /blog/ sitae principalis adhibetur ut collisiones cum sitis network evitantur. Hoc significat quod permalinks pulchri sicut ‘Post name’ praesenterbuntur ut domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

In configuratione _subdomain_ hoc actus non est necessarius quia omnis situs network beneficio a separatione dominio completa et ergo non debet confire ad unum path. Inveza, propria distincta pathas conservant basata in _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

In configuration _subdirectory_, la posibilidad de conflictos de nombres se extiende a las páginas estáticas como el sitio principal y los sitios de red comparten la misma ruta.

Para evitar esto, WordPress ofrece un medio para poner en lista negra ciertos nombres de sitios para que no choquen con los nombres del primer sitio. Normalmente, el administrador de la red introduciría las rutas raíz de las páginas del sitio principal.

<!-- Captura de pantalla no disponible: configuración de red de WordPress Multisite mostrando nombres de sitios prohibidos para prevenir conflictos -->

En la configuración _subdomain_, la posibilidad de conflictos de nombres se mitiga gracias al _subdomain_ ya que es único para el sitio de la red y no está relacionado de ninguna manera con el sitio principal.

### Registro

Dentro de la configuración de red de WordPress Multisite hay varias opciones nuevas de registro de usuarios, que permiten a los nuevos y existentes usuarios crear sitios.

<!-- Captura de pantalla no disponible: configuración de red de WordPress Multisite mostrando opciones de registro -->

A diferencia de las instalaciones de WordPress independientes, los sitios de red no mantienen las opciones familiares para permitir el registro de usuarios o asignar esos registros a roles.

<!-- Captura de pantalla no disponible: configuración de registro de usuario de sitio independiente de WordPress mostrando opciones limitadas -->

Cuando se crean cuentas de usuario, esas cuentas se generan a nivel de la red. Por lo tanto, en lugar de pertenecer a un sitio en particular, pertenecen a la red. Esto tiene algunas ventajas y desventajas distintivas.

Exemplum est, si tu Multisite WordPress tu es in commercio novinarum et informationium. Tu fundaberis multisite et deinde creabis sita network pro pecunia, technologia, divertimenti et aliam ambitus interestus, dum omnem controllem super plugins et themes manebis. Omnis sita network autem habet in hoc modo gradum controlis maginorem super aspectum et experientiam usoris huius sitae network quam quod post types aut categoria regular postes.

Ad hoc extento cum utor logaret, in network logaret et ultimum in omni sita network etiam logaret ut experientia fluida sit. Si nova tua sita ad abonamentum fundata est, hoc est solutio et finis ideali.

Si autem, however, natura et finis intenti multisite erant offerre sita network dissimilares quae nulla relationem inter se habent, quasi semper necessarii sunt plugins externi aut additionales ut roles usorum manipulare possint.

### Dominium et SSL

Loquamus de installatione WordPress Multisite quae pratae nostra attentionem quasi evadit - Wordpress.com. Hoc est in summa exemplum multisite WordPress et demonstrat eius potestates vastas ad adaptationem et formam ad finem servandum.

In diebus hoc internet moderni, usus SSL quasi obligatorius est et administratorum network multisite WordPress prope hoc quaestionem presentantur.

In configuratione _subdomain_, sita creantur in base nominis domini radicatus. Ibi sita appellatum ‘site1’ creandum est ut ‘site1.domain.com’. Ut certificate SSL cum wildcard (wildcard) ad usum, administrator network hoc quaestionem successiva resolvere potest et potestates cryptographicae SSL pro network praebere potest.

WordPress Multisite contém uma função de mapeamento de domínio que permite associar sites da rede a nomes de domínio personalizados ou nomes de domínio diferentes do domínio raiz da rede.

Para os administradores da rede, isso apresenta uma camada adicional de complexidade tanto na configuração dos nomes de domínio quanto na emissão e manutenção de certificados SSL.

Nesse sentido, embora o WordPress Multisite forneça um meio de permitir que [www.anotherdomain.com](http://www.anotherdomain.com) seja mapeado para 'site1', o administrador da rede fica com o desafio de gerenciar externamente os registros DNS e a implementação dos certificados SSL.

## Ultimate Multisite

Com a compreensão das diferenças entre uma instalação do WordPress independente e uma instalação Multisite, vamos ver como o Ultimate Multisite é o arsenal definitivo para fornecer Websites as a Service (WaaS).

### Introdução

O Ultimate Multisite é sua faca suíça quando se trata de criar um Website as a Service (WaaS). Pense no Wix.com, Squarespace, WordPress.com e depois pense em possuir seu próprio serviço.

Por baixo dos panos, o Ultimate Multisite usa o WordPress Multisite, mas o faz de uma maneira que não só resolve a miríade de desafios que os administradores de rede enfrentam com instalações multisite, mas também aprimora as capacidades permitindo que uma grande variedade de casos de uso seja suportada.

Nas seções seguintes, veremos alguns casos de uso comuns e considerações necessárias para suportar esses casos.

### Casos de Uso

#### Caso 1: Uma Agência

Geralmente, as habilidades centrais de uma agência residem no design de websites com aspectos como hospedagem ou marketing listados como serviços adicionais.

Ad agenciam, Ultimate Multisite praebet proposition valorem incredibile in potestatem hospitare et administrare plurima webs in una sola platforma. Etiam plus tantum ad agencias quae designs suos uniformant in quibusdam themis sicut GeneratePress, Astra, OceanWP aut alios possunt utilis esse potestatem Ultimate Multisite ad automaticam activationem illorum thumorum pro omnibus novis locis.

Similis cum abundanti rebus de pretiis agenciarum ad plugin et popularibus, usus Ultimate Multisite permittit agencias ut investimenta existere ad usum recipiant, praebens platform commonem ex qua plugin potest installari, conservari et uti possibi.

Probabiliter usus configurationis desideratur et fortunam Ultimate Multisite facit id incredibiliter facile facilitare mappam domini et certificat SSL cum integrationibus suis pro numeros provider hostingu popularium sicut Cloudflare et cPanel.

Ita ergo per utilis unum illud aut per collocandum Ultimate Multisite post Cloudflare, aspectus sicut management domiorum et certificatorum SSL ad modum quasi trivialem sunt.

Agencies qui preferunt teneri apertum controllem super creationem locorum appreciabunt facilitatem cumque modo quomodo locos creari et locos cum clienti et planibus associari per interface simplificatam Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Control strictus in plugin et themis conservatur pro omnibus productis per interfaces intuitivas Ultimate Multisite, quae plugins et thema adhibere aut occundere atque statum activationis suarum cum instantiatione pro novo loco.

![Product plugin limitations interface](/img/config/product-plugins.png)

Itaque (Temi) similiterem facultates, permittens ut thema particularia sit activata vel occulta in creatione siti.

![interfaica limitationes themeum](/img/config/product-themes.png)

Agencies pacem mentis invenient cum Ultimate Multisite, permittens eos facere quod maxime faciam - design situs web exceptionales.

#### Casus 2: Fornitor de Niche

Habet vetus dicendum qui dicitur, "una rem fac et laque bene facias". Pro omnibus specialistis hoc significat creandum productum vel servitium circum una ideam principium.

Perhaps tu es golfeator avidus qui situs web ad clubs promovis, vel potes es gamer esports avidus qui situs web clavis praebes clans. Individuum qui servitium reservationis ad restauros promovet perhaps?

Pro omnibus causis servanda servitia ad fundamentum et platformam communes desiderabis. Potest esse quod plugines speciales aut investitae creas perfunctiunt necessarias operationes vel potest esse hoc quod bestiae industriae requirant formam approbatum ad design.

Una ex novis innovationibus Ultimate Multisite est usus sitiorum (template sites). Situs templum est illud ubi thema est installatum et activatum, plugines necessariae installata et activata, et posteros vel paginae exemplaria creatae sunt. Cum client creat novo situs ad templum, contentus et statuta templi in novoprobato sito copiuntur.

Pro fornitore sitiorum et servitiorum niche hoc praebet viam incomparabilem in potestatem instantane creare situs paratus ad operam cum pluginibus customibus et design. Client solum input minimum dare debet ut servitium completum faciat.

In función de los requisitos, tanto las configuraciones de _subdirectorio_ como de _subdominio_ pueden ser adecuadas; en cuyo caso, la elección arquitectónica estaría entre un certificado SSL simple para _subdirectorios_ o un certificado SSL comodín (wildcard) para _subdominios_.

#### Caso 3: Alojamiento Web de WordPress

Hay una miríada de formas de alojar sitios de WordPress, pero rara vez es tan sencillo como proporcionar espacio web a un cliente con una versión preinstalada de WordPress. Esto se debe a que muchas decisiones y consideraciones deben juntarse para ofrecer un servicio significativo.

Ultimate Multisite destaca en esta área al proporcionar una solución integral lista para usar (turnkey solution) para el alojamiento de sitios de WordPress. La solución incluye los mecanismos centrales para proporcionar servicios de suscripción, recaudación de pagos, formularios de pago (checkout forms), cupones de descuento y comunicaciones con clientes.

Gran parte del trabajo esencial requerido para instalar, configurar y mantener correctamente un WordPress Multisite es facilitado por Ultimate Multisite en la medida en que los administradores de red solo necesitan considerar aspectos relacionados con su servicio o nicho, como niveles de producto, precios y ofertas de servicio.

Para los desarrolladores que deseen integrarse con Ultimate Multisite, la solución también ofrece una API RESTful completa y Webhooks para notificaciones de eventos.

Sin depender de una miríada de plugins y licencias externas, Ultimate Multisite proporciona una solución rica en funciones y comparable a la de Wix, Squarespace, WordPress.com y otros.

### Consideraciones Arquitectónicas

Aunque no es una guía exhaustiva, los siguientes puntos deben servir como orientación para la selección correcta de tecnologías que soporten una instalación de Ultimate Multisite.

#### Alojamiento Compartido vs. Dedicado

Non omnes hostings providendi sunt aequales, et aliqui praeferunt densitatem serverum extremam. Provisores de basso costo genereant solum per maximisation densitatis serverum. Ut hoc, installatio Ultima Multisite tua potest esse solum unus ex omnibus centris locis in eodem serverio.

Sine cautelibus adhibitis a providendo, sitis in serverio communi experimentant probleminum 'vicini laeti'. Hoc est, situs in eodem serverio consumens tantas res fontes quae aliae sitis debent competitui pro res residua. saepe hoc se manifestat siti lentas vel qui in tempore opportuno non respondunt.

Ut tu solus providor web hosting, fluxus effectuum significabit quod tui clienti celeritatem pessimam, rangum paginam minimam et altas rates rebuntium experimentant, quod saepe ducit ad perditionem clientium qui servitia alibi quaerunt.

Breve dicendum: pauper non significat bonum.

Ultima Multisite notata est operari cum numero bonorum provisorium hostings et bene integra in environment suum ut functions sicut mappatura domini et SSL automaticam praebere. Huius provisorium performance valorat et servitium maiorem quam hosting communis daret.

Ad listam provisorium compatibilium et instructiones completas ad setup pro omnibus, consulta documentum Compatibilibus Provisoribus.

#### Consideratio Performance

Ultima Multisite non est applicatio lenta, sed valde celer. tamen, solum tantum ita operatur ut applicationis et infrastructure underlyinge sit bona et solum hoc utilis potest, quod habet accessum.

Mitte hoc: Tu es administrator rete installationis Ultima Multisite cum 100 locis. Aliquae illa loca bene operant et numeros visitatorum in omnes dies atraunt.

Hoc scenario in scala minoris, ut dicam un ad quinque sita, aliter esse, sed post longum tempus, problema scalai evidentia erit.

Si non vigilatus, situs singularius Ultimate Multisite solus est responsabilis ad satisfaciendum omnes petita visitatorum sitorum. Ha petita possunt esse ad paginas PHP dinamicas vel ad assetus staticos sicut stylesheets, javascript vel file mediae. Quod sit unum aut centum sita, hae labores repetitiva, monotona et desperantia sunt. Non est necessarium usum potestatis CPU et memoriae ad processum file PHP cum output statico eodem pro omnibus petitis.

Similis est: una petita ad paginam PHP vel HTML generat in turn multiple petita successiva ad scripta, stylesheets et files imagoes. Ha petita directum ad server tuum Ultimate Multisite diriguntur.

Problema hoc facile potest solvari upgradendo serverem, sed non rectificat secundarium problemum - latentias geographicas. Solum multiple server in locis multiple hoc problemum propert adressare potest.

Pro hoc motivo, multi administratorum network usant solutiones caching front-end et content distribution networks (CDN) ad satisfaciendum petita ad paginas staticas. Satisfacere hae petita et servare assetus antequam petita ad server perficitur conservat res procesionem, eliminat lentas, evitat upgradationes inutiles et maximizat investitiones technologiae.

Ultimate Multisite includit add-on sophistica Cloudflare qui administratorum network permittit ponere installationes suas post Cloudflare et usque adhibere non solum potestates caching eius sed etiam hosting DNS, certificata SSL et mechanica securitatis.

#### Backups

Quod 50 homines petere potueris de backups et 50 opinionum diversorum de strategiis backup inceptas accipies. Res est: dependet.

Quod non controversum est quod sauvegardiae necessariae sunt et quasi inconcepipibile est quod hae non gestant ab providendo, specialiter uno qui oferent servitium gestionatum. Consequentia, clienti ad administratorem networki ad petendum et gestionem huius servitii adverterunt. Qui administrator networki adverterit, est problemata in pleno modo diversa.

Ad finem huius sectionis, let's concordemus quod sauvegarde est copia del tempore systematis in tempore quo sauvegarde initiata est. Simpliciter dicamus, quomque sit status systematis tempore sauvegardiae, illam statum capturatur et securatur in sauvegarde.

Cum hoc intellegendo, responsum de modo quo sauvegardias adhibere et quid est melius pro environment tuo magna parte dependet ab requiritibus tuis et potestatem providendi hostings satisfacere illos requiritibus. Sed, in ordine a opinione maxime firmis ad opinionem minimam, optiones infra dicitur igitur quidam orientem dare debent.

#### Snapshots (Capturae)

Snapshots sunt fulmina argenti pro sauvegardiis quia sunt faciles, sine complicate (donec desideras restaurare) et 'simpliciter operant'. Sed necessitatem auxilii a providendo tuum requirunt et in summa applicabuntur solum si habes VPS (Virtual Private Server) vel simile. Plures providendi listata in documentation nostra ‘Compatible Providers’ oferent sauvegardias quae aliquam ulteriores interventiones aut considerationes administratore networki non requirunt.

Ubi sicut backups traditionales cibant files et databases, snapshot capta totam discalem. Hoc significat non solum quod data siti in snapshot capturatur, sed etiam systema operandi et configurationem. Pro multis hoc est distincte avantage, quia novum systema quasi instantane a snapshot potest generari et ad operationem bringi ut instantius infirmus substitueretur. Similiter, processus recuperationis ad retinendum files requirit solum attachandum imaginem snapshot ut disk ad instantiam existens, ita ut files possint accedere et copiari.

Snapshots possunt incuriam additionalem cum provider hostingu sed sunt assicuratio contra incidentes.

#### Scripts Externi

Appare non sit lacuna scriptorum externorum et solutionum ad backup res WordPress et MySQL, quae in Ultimate Multisite bene operabant quia est plugin WordPress qui systema filesystem et database WordPress usus facit. Ergo solutio quae sites WordPress backupat omnino necessitatibus Ultimate Multisite copiat.

Non possumus unum scriptum super alium recommendare sed consilium generale nostrum est facere plures testus backup et restaurandi ut sic certariur quod resultata desiderata sunt et 'certi sunt certi' per continuam evaluationem scripti et eius operationis, specialiter ubi aliquid soortus strategiae differentialis backup applicatur.

Debet notari quod hae scripta, dum operant, ponenda systematis onera incrementum conferunt, quod debet habetur in mente.

#### Plugins

Praticul non est problem in WordPress qui plugin pervenire potest et si gestionem scriptorum externorum tibi non placet, perhaps plugin est optio optimus.

Quamquam los plugins varían en opciones y características, en su mayoría realizan la misma función: hacer una copia de los archivos y el contenido de la base de datos de WordPress. Después de eso, las funcionalidades difieren, ya que algunos plugins pueden enviar las copias de seguridad a servicios externos como Google Drive o Dropbox, o a algún tipo de servicio de almacenamiento de objetos compatible como S3, Wasabi u otros. Los plugins más completos proporcionan copias de seguridad diferenciales o algún tipo de estrategia para respaldar solo los datos que han cambiado, con el fin de ahorrar costes de almacenamiento externo.

Al seleccionar tu plugin, ten cuidado de verificar que sea compatible con multisite. Debido a su modo de operación, mientras se realiza la copia de seguridad, puedes esperar una carga temporal en el servidor hasta que el proceso haya finalizado.

#### Dominio y SSL

Ya se ha hablado mucho sobre los nombres de dominio en el modo _subdominio_ de multisite. Una solución casi universal para los administradores de red es utilizar entradas DNS comodín (wildcard).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Este tipo de entrada DNS resolverá con éxito los _subdominios_, como ‘site1.domain.com’ y ‘site2.domain.com’, a una dirección IP de 1.2.3.4, lo que da soporte a Ultimate Multisite y, en mayor medida, a WordPress Multisite utilizando el modo _subdominio_.

Esto puede funcionar perfectamente para HTTP porque la dirección del host se lee de los encabezados HTTP, pero rara vez es tan simple hoy en día que las transacciones seguras HTTPS sean casi obligatorias.

Fortunatamente, esistono opzioni semplici per i certificati SSL. Nel modo _subdirectory_ (sottodirectory) è possibile utilizzare un certificato di dominio normale. Questi sono facilmente disponibili e gratuiti dai provider di hosting che potrebbero usare il servizio gratuito LetsEncrypt o altra fonte. Altrimenti sono commercialmente disponibili dalle autorità se sei in grado di generare la richiesta di firma del certificato.

Per il modo _subdomain_ (sottodominio), l'uso di un certificato SSL wildcard si abbina perfettamente a un dominio wildcard e permette al certificato di essere autorevole per il dominio principale e tutti i _subdomain_ senza configurazioni aggiuntive.

Tuttavia, bisogna notare che i certificati SSL wildcard potrebbero non funzionare con servizi come Cloudflare a meno che tu non sia su un piano enterprise o imposti l'accesso solo in DNS, nel qual caso tutte le cache e le ottimizzazioni vengono aggirate.

Ultimate Multisite di default fornisce una soluzione a questo problema dimostrando la nostra vasta esperienza con le esigenze dei WordPress multisite. Attivando questo semplice add-on, Ultimate Multisite farà uso delle tue credenziali Cloudflare per aggiungere automaticamente le voci DNS per i siti di rete in Cloudflare e impostare il loro modo su ‘proxied’ (tramite proxy). In questo modo ogni sottodominio di rete, quando creato, avrà la piena protezione e i benefici di Cloudflare incluso SSL.

A seconda della natura e dello scopo della tua installazione Ultimate Multisite potrebbe essere necessario che gli utenti utilizzino i propri domini. In questo caso l'amministratore di rete è responsabile di risolvere due problemi: uno, l'hosting del nome del dominio e due, i certificati SSL per il dominio.

Ad multis, uti Cloudflare usus est optionis facile. Client necessitatibus solum suam domenium in Cloudflare collocare, CNAME ad dominum radicis Ultimate Multisite ponere et domenam in Ultimate Multisite mappari ut incipiat proficire de nominibus domini propriis.

Extra hoc, solutiones alternae debent quaeriti, quod est propter hoc quod Ultimate Multisite recommendit listam Provisorium Compatibilium. Hoc est quia processus configurationis DNS et SSL potest esse processus non trivialis. Sed cum integratione Ultimate Multisite cum haec provisorium, complexitas valde minimizatur et procedura automatizatur.

#### Plugins

Altissime probabile est quod necessuas plugins ad praestandum functionem pro clientibus vel locis network exigantur. Omnes plugins cum WordPress Multisite et Ultimate Multisite operant? Bene, hoc dependet.

Dum plurima plugins in WordPress Multisite installari possunt, activatio et licentia variant a auctor ad auctor.

Quaestio est in modo quo licentia applicatur cum quibusdam plugins qui licentiam per dominum requirunt. Hoc significat quod pro quibusdam plugins administrator network necessitatibus manualiter licentiam adhibere debet pro omnibus pluginis in omnibus locis novis.

Ergo, perhaps melius est consultari auctorem pluginis de modo quo eius plugin operabit cum WordPress Multisite et quibusque requiritibus vel procedulis specialibus ad licentiam.
