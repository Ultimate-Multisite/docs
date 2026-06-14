---
title: Quid est WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Quid est WordPress Multisite?

In sua essentia, WordPress offre una funzione chiamata ‘Multisite’ che risale alle sue origini al 2010 con il lancio di WordPress 3.0. Da allora ha ricevuto diverse revisioni volte a introdurre nuove funzionalità e rafforzare la sicurezza.

In sostanza, un multisite di WordPress può essere pensato così: Un'Università mantiene un'unica installazione di WordPress ma ogni facoltà mantiene il proprio sito WordPress.

##

## Che cos'è esattamente WordPress Multisite?

Multisite è una funzione di WordPress che permette a più siti di condividere un'unica installazione di WordPress. Quando si attiva il multisite, il sito WordPress originale viene convertito per supportare ciò che di solito viene chiamato una **rete di siti**.

Questa rete condivide il sistema di file (il che significa che **plugin e temi sono anche condivisi**), il database, i file core di WordPress, wp-config.php, ecc.

Questo significa che gli aggiornamenti di WordPress, tema e plugin devono essere eseguiti una sola volta per tutti i siti della tua rete poiché condividono gli stessi file sul sistema di file.

Questo fatto è uno dei principali vantaggi del multisite, perché ti permette di aumentare il numero di siti che gestisci mantenendo lo stesso numero di compiti da svolgere per mantenere i siti dei tuoi clienti.

##

## Sottodominio o Sottodirectory?

Esistono due modalità per far funzionare un WordPress multisite – e devi sceglierne una quando converti la tua installazione WordPress normale in una installazione multisite:

**Sottodominio:** es.: [site.domain.com](http://site.domain.com)

…o

**Sottodirectory:** es.: [yourdomain.com/site](http://yourdomain.com/site)

Ogni modalità ha vantaggi e svantaggi che devi considerare quando prendi questa decisione.

Un thing est important à noter, cependant : une fois que vous avez pris votre décision, changer votre réseau d'un sous-répertoire vers un sous-domaine ou inversement est vraiment difficile – surtout si vous avez déjà quelques sites créés.

Avant de prendre cette décision, voici quelques points à garder en tête :

**Mode Sous-répertoire (Subdirectory Mode)** est le mode le plus simple en termes de configuration et d'entretien. Cela se produit parce que tous les sites ne sont que des chemins attachés au domaine principal (par exemple, [votre_domaine.com/sous-site](http://votre_domaine.com/sous-site)). Par conséquent, vous n'avez besoin que **d'un seul certificat SSL** pour le domaine principal et celui-ci couvrira tout le réseau.

En même temps, en raison de sa structure d'URL, Google et la plupart des autres moteurs de recherche considéreront tous les sous-sites de votre réseau basé sur un sous-répertoire comme un seul site géant. Par conséquent, le contenu ajouté aux sous-sites par vos clients finaux pourrait affecter la performance SEO de votre site principal, par exemple. Le niveau d'impact est débattable et il y a un argument à faire que cette disposition peut même être bénéfique pour la performance SEO.

**Mode Sous-domaine (Subdomain Mode)** est un peu plus complexe à configurer, mais sa structure d'URL (par exemple, [sous-site.votre_réseau.com](http://sous-site.votre_réseau.com)) est généralement perçue comme ayant l'air « plus professionnelle ».

Unum ex magnis difficilibus in configuration modo subdomain est copertura SSL (HTTPS) pro omni rete. Hoc venit ab eo quod browser subdomainingos ut entitates isolatas considerant. Ut in hoc casu, necesse tibi certatum SSL differentem ad cada subdominium in rete habere, vel specialem generum certatum vocatum **certatum Wildcard SSL**. In annis recentibus, fornitores hosting et paneli melior quoque sunt in provisione SSL et aliqui oferunt certificata wildcard per un click, clausam inter intermodos in termini complexitatis configurationis.

In contrasto ad modo subdirectory, subsites in rete ad basem subdomain considerant search engines ut separate websites, quod significat quod contentus in uno subsite nullo modo affectat performance SEO aliorum subsites.

## Super Admin

Installatio WordPress unius loci permittit te ad additionem numerorum utilizatorum infinitorum et conferendum illis distinctas roles utilisateur cum distinctis permissionibus.

In WordPress Multisite, novus generis utilisateur aperitur: **super admin** – et novum panel admin aperitur: **panel network admin**.

Ut nomen significat, super admin potestates in rete habet, esse in capacitate omnium subsitiorum, pluginium, themarum, omnia administrare!

Cum tu installatio WordPress unius loci ad multisite convertis, administrator originalis locus unicus automatic super admin infortunetur.

Plugin et thema solum per panel network admin ab super admins instalari vel deinstallari possunt. Administrator subsite potest eligere activare vel deactivare illos plugin aut themas, nisi super admin network plugin activet, quod eos omnia tempora pro omnibus subsitioribus activat.

_Nota: uti possides, ut videas, invitare aliquem in network tu et concedere ei status super admin daret hoc utor controlem totalem super network tuum. Ut exemplum, alii super admini potuerunt etiam status tuum super adminis removere, de facto te ex panel admin network tuum clausisse. Ut clientibus Ultimate Multisite permittamus habere controllem granularem in quo super admini additionales possunt facere, habemus add-on vocatum Support Agents. Hoc add-on tibi permittit creare ulterius generis utrumque – agentem – cum tantis permissionibus quibus necesse sunt ad operandum in network._

## Quid est communis inter subsites et quid non est

Sicut dicimus ante, una ex clavis vantacibus WordPress multisite est quod omnes subsites eadem configurationes, files core, themes, plugins, files core WordPress, etc., partifecunt.

Sed sunt elementa quae per subsite particularem modo bene limitantur.

- Per exemplum, cada subsitus habet suam proprietatem uploads folder. In hoc modo, uploades facti ab utulis uno particularis subsite non possunt accrescere in aliam subsite.

- Cada subsitus habet suum panel admin dedicatum et potest plugins vel themes activare vel deactivare, nisi super adminus network esse eorum activus.

- Plures tabulae database pro quo cada subsitem creantur, quod significat quod posts, commentarii, paginae, settinges, et aliae sunt per cada subsite limitatae.

## Management utentium in WordPress Multisite

Una delicata materia in WordPress multisite est management utentium. Tabula utentium WordPress est una ex paucardis quae inter omnes subsites partifecit.

Haec arrangementi aliquas quaestionibus generare potest, secundum quod planās construere cum network tuo. Exemplum infra illustrat primum gravissimum.

Imaginatur sequens scenario:

Creas una red de múltiples sitios de WordPress y comienzas a ofrecer subsites por una tarifa mensual a personas que desean tener una tienda de comercio electrónico.

Consigues tu primer cliente que paga: John. Creas un sitio para John en tu red, instalas todos los plugins necesarios y luego creas un usuario para John para que pueda administrar su tienda.

Luego llega una segunda clienta: Alice. Haces lo mismo para ella y ahora también tiene una tienda en tu red.

John y Alice son ambos tus clientes, pero no se conocen. Más importante aún, si uno de ellos visita el sitio web de la otra tienda, no hay forma de saber que esta tienda está alojada en la misma red de sitios.

Un día, John necesita comprar un par de zapatos nuevos y encuentra los perfectos en la tienda de Alice. Cuando intenta finalizar la compra, recibe un mensaje de error que dice "correo electrónico ya en uso", lo cual es extraño porque John está 100% seguro de que esta es la primera vez que visita el sitio web de Alice.

Lo que sucedió aquí es que el usuario de John se comparte en toda la red, por lo que cuando intenta crear una cuenta para pagar en el sitio de Alice, WordPress detecta que ya existe un usuario con la misma dirección de correo electrónico y lanza un error.

_Nota: Nos damos cuenta de lo malo que puede ser esto dependiendo de tu caso de uso, por lo que Ultimate Multisite tiene una opción que omite las comprobaciones normales para un usuario existente, permitiendo crear múltiples cuentas usando la misma dirección de correo electrónico. Cada cuenta está vinculada a un subsite, por lo que el riesgo de colisión se mantiene al mínimo. En el ejemplo anterior, John no recibiría un mensaje de error y podría comprar esos zapatos sin problemas. Esta opción se llama Habilitar Múltiples Cuentas (Enable Multiple Accounts) y se puede activar en Ultimate Multisite → Settings → Login & Registration._

Etiam tabula hominum partitur, sed utentes in sub-sites adhiberi et removere possunt administratores sub-sites vel super administrator, et etiam in sub-sites distinctis roles utentium habere possunt.

## Consideratio de performance

WordPress multisite est verum potentia quando qua de numero situeriorum potest sustinere est. Hoc potest probari per factum quod [WordPress.com](https://WordPress.com), Edublogs et Campuspress omnes servitia sunt ad multisite fundatae, et quomodo unus host milia situerium sustinet.

Cum in theoria nullum maximum numerum situeriorum est quos in una installation WordPress multisite hospitare possis, in practica numero situeriorum quos potes satisfactoriam modo operare facere potest saepe variari potest in secundum numeros factorum distinctorum: quomodo situeria sunt dynamica, quae plugin ad sub-sites disponendi sunt, etc.

Ut regola generale dicamus, quam simplicior est tua rete, ita melius. Favorizare situerios ubi contentus non tantum dynamicus est (quod eos optimos candidatus ad strategias caching aggressivas facit) et stack plugin leviter tenere (quanto minus est numerus plugin activorum, tanto melius), potest numero sub-sites quos potes hospitare drasticam modo incrementare.

Melior pars est quod omnia hic WordPress sunt, ita eadem instrumenta quae performance melior adhibere conies, multisite network operari possunt.

Principale obstaculum multisite est database, sed si omnia alio recte configuratum sit, per mille situeriorum potes antequam de eo ipso curari debueris. Etiam in hoc tempore sunt solutio quae gradatim addebori possunt (sicut solutiones sharding database, dummodo).
