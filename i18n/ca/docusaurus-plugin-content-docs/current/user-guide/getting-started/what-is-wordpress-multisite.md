---
title: Què és WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Què és WordPress Multisite? {#what-is-wordpress-multisite}

A nivell fonamental, WordPress ofereix una funcionalitat anomenada ‘Multisite’, que remunta les seves orígens al 2010, amb el llançament de WordPress 3.0. Desvinguts, ha rebut diverses revisions per introduir noves funcionalitats i reforçar la seguretat.

En essència, un WordPress multisite es pot imaginar així: una Universitat manté una única instal·lació de WordPress, però cada facultat manté el seu propi lloc web de WordPress.

##

## Què és exactament WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite és una funcionalitat de WordPress que permet que múltiples llocs web comparteixin una única instal·lació de WordPress. Quan es activa multisite, el lloc web de WordPress original es converteix per suportar el que normalment es coneix com a **xarxa de llocs web**.

Aquesta xarxa comparteix el sistema de fitxers (és quin dir, **plugins i themes també es comparteixen**), la base de dades, els fitxers fonamentals de WordPress, el `wp-config.php`, etc.

Això significa que les actualitzacions de WordPress, themes i plugins només han de realitzar-se una sola vegada per a tots els llocs de la vostra xarxa, ja que comparteixen els mateixos fitxers al sistema de fitxers.

Aquest fet és un dels principals avantatges de multisite, ja que us permet fer creixer el nombre de llocs que gestioneu mantenint el mateix nombre de tasques que ha de fer-se per mantenir els llocs dels vostres clients.

##

## Subdomini o Subdirectori? {#subdomain-or-subdirectory}

Hi ha dos modes per executar un WordPress multisite, i ha de triar-ne un quan converteu la vostra instal·lació regular de WordPress en una instal·lació multisite:

**Subdomini:** ex.: [site.domain.com](http://site.domain.com)

…o

**Subdirectori:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Cada mode té avantatges i desavantatges que ha de tenir en compte quan preneu aquesta decisió.

No obstant, hi ha una cosa important de recordar: una vegada que tingueu la vostra decisió, canviar la vostra xarxa de subdirectori a subdomini o viceversa és molt difícil, especialment si ja teniu un grup de llocs creats.

Abans de prendre aquesta decisió, hi ha un parell de punts que fer-se'n recordar:

El **Mode Subdirectori** és el mode més fàcil en termes de configuració i manteniment. Això passa perquè tots els llocs són simplement camins adjunts al domini principal (per exemple, [yourdomain.com/subsite](http://yourdomain.com/subsite)). Com a resultat, només necessiteu **un certificat SSL** per al domini principal i això cobreix tota la xarxa.

Al mateix temps, a causa de la seva estructura d'URL, Google i la majoria dels altres motors de cerca consideraran tots els subsites de la vostra xarxa basada en subdirectoris com un únic lloc web gegant. Com a resultat, el contingut afegit als subsites pels vostres clients pugui afectar el rendiment SEO del vostre lloc web principal, per exemple. El nivell d'impacte és debatible i hi ha un argument que es pot fer de que tenir aquesta disposició pot fins i tot ser beneficiós per al rendiment SEO.

El **Mode Subdomini** és una mica més complex de configurar, però la seva estructura d'URL (per exemple, [subsite.yournetwork.com](http://subsite.yournetwork.com)) es percep generalment com a més "professional".

Un dels principals reptes en la configuració del mode subdomini és la cobertura SSL (HTTPS) per a tota la xarxa. S'ha de tenir en compte que els navegadors consideren els subdominis entitats aïllades. Com a resultat, necessitareu un certificat SSL diferent per cada subdomini de la vostra xarxa, o un tipus especial de certificat anomenat **certificat SSL Wildcard**. En els últims anys, els proveïdors d'hosting i els panels han millorat molt en termes de proveisió de SSL i alguns ofereixen certificats wildcard amb un clic, reduint la brexa entre els dos modes en termes de complexitat de configuració.

En contrast amb el mode subdirectori, els subsites d'una xarxa basada en subdominis són considerats pels motors de cerca com a llocs web separats, cosa que significa que el contingut present en un subsite no interferea en absolut amb el rendiment SEO d'altres subsites.

## L'Super Admin {#the-super-admin}

Les instal·lacions de WordPress de lloc únic us permeten afegir un nombre il·limitat d'usuàri i donar a aquests usuaris diferents rols d'usuari amb diferents permisos.

En WordPress Multisite, es desbloqueja un nou tipus d'usuari: **l'super admin**, i es desbloqueja un nou quadre de control: **el quadre de control de la xarxa**.

Com que el nom ho indica, l'super admin té superpoderes sobre la xarxa, ja que és capaç de gestionar tots els seus subsites, plugins, themes, tot!

Quan converteu la vostra instal·lació de WordPress de lloc únic en multisite, l'administrador original del lloc únic es convertirà automàticament en super admin.

Els plugins i themes només poden instal·lar-se o desinstal·lar-se des del quadre de control de la xarxa pels super admins. Els admins de subsites poden després triar activar o desactivar aquests plugins o themes a menys que l'super admin de la xarxa activi un plugin, cosa que força que estigui actiu per tots els subsites tot el temps.

_Nota: com podeu veure, convidar algú a la vostra xarxa i concedir-li el estatut de super admin dona a aquest usuari control total sobre la vostra xarxa. Com exemple, altres super admins fins i tot poden eliminar el vostre estatut de super admin, bloquejant-vos efectivament l'accés al vostre propi quadre de control de la xarxa. Per permetre que els clients d'Ultimate Multisite tinguin un control granular sobre el que poden fer els altres super admins, tenim un addon anomenat Support Agents. Aquest addon us permet crear un altre tipus d'usuari – un agent – amb només els permisos que podrien necessitar per realitzar les seves tasques a la xarxa._

## Què es comparteix entre els subsites i què no {#what-is-shared-among-subsites-and-what-is-not}

Com que vam mencionar abans, un dels principals avantatges de WordPress multisite és que tots els subsites comparteixen les mateixes configuracions, fitxers fonamentals, themes, plugins, fitxers fonamentals de WordPress, etc.

No obstant, hi ha elements que estan ben delimitats per subsite.

- Per exemple, cada subsite té la seva pròpia carpeta d'uploads. Com a resultat, els uploads realitzats pels usuaris d'un subsite en particular no poden ser accedits en un altre subsite.

- Cada subsite té el seu propi quadre de control d'administració i pot activar o desactivar plugins o themes a menys que fos actiu a nivell de xarxa per un super admin.

- La majoria de les taules de la base de dades es creen per cada subsite, cosa que significa que les publicacions, els comentaris, les pàgines, les configuracions i més estan delimitats per cada subsite.

## Gestió d'usuàri en WordPress Multisite {#user-management-on-wordpress-multisite}

Un subjecte delicat en WordPress multisite és la gestió d'usuàri. La taula d'usuàri de WordPress és una de les poques que es comparteixen entre tots els subsites.

Aquesta disposició pot generar alguns problemes depenent del que planegeu construir amb la vostra xarxa. L'exemple de més avall ajuda a il·lustrar el més pressant.

Imaginem el següent escenari:

Creu una xarxa WordPress multisite i comencem a oferir subsites per una tarifa mensual a persones que volen tenir una botiga d'e-commerce.

Apareix el vostre primer client pagador: John. Creu un lloc per John a la vostra xarxa, instal·leu tots els plugins necessaris, i després creeu un usuari per John perquè pugui gestionar la seva botiga.

Després apareix un segon client: Alice. Feu lo mateix per ella i ara també té una botiga a la vostra xarxa.

John i Alice són ambdós els vostres clients, però no es coneixen. De forma més important, si un visita el lloc web de la botiga de l'altre, no hi ha manera de saber que aquesta botiga està allotjada en la mateixa xarxa de llocs.

Un dia, John necessita comprar un parell de cotilleres i en troba el perfecte a la botiga d'Alice. Quan intenta acabar la compra, rep un missatge d'error de "email ja utilitzat", cosa que és bizarra ja que John està 100% segur que és la primera vegada que visita el lloc web d'Alice.

El que va passar aquí és que l'usuari de John es comparteix a tota la xarxa, així que quan intenta crear un compte per pagar al lloc d'Alice, WordPress detecta que ja existeix un usuari amb el mateix adreça electrònica i llança un error.

_Nota: Reconem qu'és molt greu depenent del vostre cas d'ús, per tant, Ultimate Multisite té una opció que eludeix les revisions regulars per un usuari existent, permetent crear múltiples comptes utilitzant la mateixa adreça electrònica. Cada compte està vinculat a un subsite, així que el risc de colisió es manté a un mínim. En l'exemple anterior, John no rebreix missatge d'error i podria comprar les cotilleres sense cap problema. Aquesta opció es diu Enable Multiple Accounts i es pot activar en Ultimate Multisite → Settings → Login & Registration._

Tot i que la taula d'usuàri es comparteixi, els usuaris poden ser afegits i eliminats dels subsites pels admins de subsites o l'super admin, i fins i tot poden tenir rols d'usuari diferents en diferents subsites.

## Consideracions de rendiment {#performance-considerations}

WordPress multisite és molt potent quan es tracta del nombre de llocs que pot suportar. Això es pot comprovar amb el fet que [WordPress.com](https://WordPress.com), Edublogs i Campuspress són tots serveis basats en multisite i cada un allotja milers de llocs.

Tot i que en teoria no hi ha un nombre màxim de llocs que pugueu allotjar en una única instal·lació WordPress multisite, en pràctica el nombre de llocs que podeu executar satisfactòriament pot variar molt depenent d'un nombre de factors diferents: quànis són els llocs dinàmics, quins plugins estan disponibles per als subsites, etc.

Com a regla general, més senzilles són els vostres subsites, millor. Preferir llocs on el contingut no és realment dinàmic (cosa que els fa grans candidats per a estratègies d'emmagatzematge agressives) i mantenir la pila de plugins tan lleugers com sigui possible (més baix és el nombre de plugins actius, millor) pot augmentar dràsticament el nombre de subsites que podeu allotjar.

La millor part és que com que tot és WordPress, els mateixos eines que ja coneixeu i us agraden per a millores de rendiment també funcionaran per a una xarxa multisite.

El principal collo de galler per a multisite és la base de dades, però si tot el reste està configurat correctament, poden passar uns milers de llocs abans que hagiu de preocupar-vos. Fins i tot llavors, hi ha solucions que es poden afegir progressivament en aquell moment (com les solucions de *database sharding*, per exemple).
