---
title: Com configurar el mapatge de dominis
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Com configurar l’assignació de dominis (v2)

_**NOTA IMPORTANT: Aquest article fa referència a Ultimate Multisite versió 2.x.**_

Una de les funcions més potents d’una xarxa premium és la capacitat d’oferir als nostres clients la possibilitat d’adjuntar un domini de primer nivell als seus llocs. Al capdavall, què sembla més professional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Per això Ultimate Multisite ofereix aquesta funció integrada, sense necessitat d’utilitzar plugins de tercers.

## Què és l’assignació de dominis?

Com el seu nom indica, l’assignació de dominis és la capacitat que ofereix Ultimate Multisite de rebre una sol·licitud per a un domini personalitzat i assignar aquesta sol·licitud al lloc corresponent de la xarxa que té adjunt aquest domini concret.

### Com configurar l’assignació de dominis a la teva xarxa Ultimate Multisite

L’assignació de dominis requereix una mica de configuració per part teva perquè funcioni. Afortunadament, Ultimate Multisite automatitza la feina difícil per tu perquè puguis complir fàcilment els requisits.

Durant la instal·lació de Ultimate Multisite, l’assistent copiarà i instal·larà automàticament el **sunrise.php** a la carpeta designada. **L’assistent no et permetrà continuar fins que aquest pas s’hagi completat**.

<!-- Captura de pantalla no disponible: assistent d’instal·lació de Ultimate Multisite amb el pas sunrise.php -->

Això vol dir que, un cop l’assistent d’instal·lació de Ultimate Multisite hagi acabat de configurar la teva xarxa, pots començar a assignar el domini personalitzat de seguida.

Tingues en compte que l’assignació de dominis a Ultimate Multisite no és obligatòria. Tens l’opció d’utilitzar la funció nativa d’assignació de dominis de WordPress Multisite o qualsevol altra solució d’assignació de dominis.

Si necessites desactivar l’assignació de dominis de Ultimate Multisite per donar pas a altres solucions d’assignació de dominis, pots desactivar aquesta funció a **Ultimate Multisite > Configuració > Assignació de dominis**.

![Pàgina de configuració d’assignació de dominis que mostra la redirecció d’administració, el missatge d’assignació i les opcions DNS](/img/config/domain-mapping-settings.png)

Just a sota d’aquesta opció, també pots veure l’opció **Força la redirecció d’administració**. Aquesta opció et permet controlar si els teus clients podran accedir al seu tauler d’administració tant al seu domini personalitzat com al subdomini, o només a un d’ells.

Si selecciones **Força la redirecció al domini assignat** , els teus clients només podran accedir al seu tauler d’administració als seus dominis personalitzats.

L’opció **Força la redirecció a** **domini de xarxa** farà exactament el contrari: els teus clients només podran accedir als seus taulers al seu subdomini, fins i tot si intenten iniciar sessió als seus dominis personalitzats.

I l’opció **Permet l’accés a l’administració tant pel domini assignat com pel domini de xarxa** els permet accedir als seus taulers d’administració tant al subdomini com al domini personalitzat.

![Desplegable de redirecció d’administració expandit que mostra les tres opcions de redirecció](/img/config/domain-mapping-redirect-options.png)

Hi ha dues maneres d’assignar un domini personalitzat. La primera és assignant el nom de domini des del tauler d’administració de la teva xarxa com a super admin i la segona és a través del tauler d’administració del sublloc, a la pàgina Account.

Però abans de començar a assignar el domini personalitzat a un dels subllocs de la teva xarxa, hauràs d’assegurar-te que la **configuració DNS** del nom de domini estigui configurada correctament.

###

### Assegurar-se que la configuració DNS del domini estigui configurada correctament

Perquè una assignació funcioni, has d’assegurar-te que el domini que vols assignar apunti a l’adreça IP de la teva xarxa. Tingues en compte que necessites l’adreça IP de la xarxa —l’adreça IP del domini on està instal·lat Ultimate Multisite—, no l’adreça IP del domini personalitzat que vols assignar. Per cercar l’adreça IP d’un domini concret, suggerim anar a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), per exemple.

Per assignar correctament el domini, has d’afegir un **REGISTRE A** a la teva configuració **DNS** que apunti a aquella **adreça IP**. La gestió DNS varia molt entre diferents registradors de dominis, però hi ha molts tutorials en línia que ho expliquen si cerques " _Crear un registre A a XXXX_ ", on XXXX és el teu registrador de dominis (ex.: " _Crear un registre A a_ _GoDaddy_ ").

Si tens problemes per fer que això funcioni, **contacta amb el suport del teu registrador de dominis** i et podran ajudar amb aquesta part.

Si tens previst permetre que els teus clients assignin els seus propis dominis, hauran de fer ells mateixos la feina d’aquesta part. Adreça’ls al sistema de suport del seu registrador si no poden crear el registre A.

### Assignar un nom de domini personalitzat com a Super Admin

Quan has iniciat sessió com a super admin a la teva xarxa, pots afegir i gestionar fàcilment noms de domini personalitzats anant a **Ultimate Multisite > Dominis**.

![Pàgina de llista de dominis a Ultimate Multisite](/img/admin/domains-list.png)

En aquesta pàgina, pots fer clic al botó **Afegeix domini** de la part superior i això obrirà una finestra modal on pots establir i emplenar el **nom de domini personalitzat** , **el sublloc** al qual vols aplicar el nom de domini personalitzat, i decidir si vols establir-lo com a **nom de domini principal** o no (tingues en compte que pots assignar **múltiples noms de domini a un sublloc**).

![Modal d’afegir domini amb nom de domini, selector de lloc i commutador de domini principal](/img/admin/domain-add-modal.png)

Després d’introduir tota la informació, pots fer clic al botó **Afegeix domini existent** de la part inferior.

Això iniciarà el procés de verificació i obtenció de la informació DNS del domini personalitzat. També veuràs un registre a la part inferior de la pàgina perquè puguis seguir el procés que s’està duent a terme. Aquest procés pot trigar uns minuts a completar-se.

Ultimate Multisite v2.13.0 també crea automàticament el registre de domini intern quan es crea un lloc nou en un host que s’hauria de tractar com un domini per lloc. Si el host és el domini principal de la xarxa, o un dels dominis base compartits del formulari de pagament configurats en un camp **Site URL**, el registre automàtic de domini assignat s’omet perquè aquest domini base compartit continuï disponible per a tots els llocs que l’utilitzen.

Quan un client registra un domini nou mitjançant Domain Seller v1.3.0 o una versió més recent, Ultimate Multisite assigna automàticament el domini registrat al lloc de xarxa del client per defecte. Els administradors ja no han d’afegir un registre de domini assignat separat després d’un registre correcte, llevat que vulguin ajustar opcions com ara la marca de domini principal, l’estat d’activació o la gestió de SSL.

La **Etapa** o l’estat hauria de canviar de **Comprovant DNS** a **A punt** si tot està configurat correctament.

<!-- Captura de pantalla no disponible: fila de domini que mostra l’etapa Comprovant DNS a la llista de dominis -->

<!-- Captura de pantalla no disponible: fila de domini que mostra l’etapa A punt amb l’indicador d’estat verd -->

Si feu clic al nom del domini, podreu veure-hi algunes opcions. Fem-hi una ullada ràpida:

![Pàgina de detall del domini amb commutadors d’etapa, lloc, actiu, principal i SSL](/img/admin/domain-edit.png)

**Etapa:** Aquesta és l’etapa en què es troba el domini. Quan afegiu el domini per primera vegada, probablement estarà a l’etapa **Comprovant DNS**. El procés comprovarà les entrades DNS i confirmarà que són correctes. Després, el domini passarà a l’etapa **Comprovant SSL**. Ultimate Multisite comprovarà si el domini té SSL o no i classificarà el vostre domini com a **A punt** o **A punt (sense SSL)**.

**Lloc:** El subdomini associat amb aquest domini. El domini assignat mostrarà el contingut d’aquest lloc concret.

**Actiu:** Podeu activar o desactivar aquesta opció per activar o desactivar el domini.

**És el domini principal?:** Els vostres clients poden tenir més d’un domini assignat per a cada lloc. Feu servir aquesta opció per seleccionar si aquest és el domini principal del lloc concret.

**És segur?:** Tot i que Ultimate Multisite comprova si el domini té un certificat SSL o no abans d’habilitar-lo, podeu seleccionar manualment carregar el domini amb o sense un certificat SSL. Tingueu en compte que, si el lloc web no té un certificat SSL i intenteu forçar-ne la càrrega amb SSL, pot generar errors.

### Assignar un nom de domini personalitzat com a usuari de sublloc

Els administradors de subllocs també poden assignar noms de domini personalitzats des del Dashboard d’administració del seu sublloc.

Primer, heu d’assegurar-vos d’habilitar aquesta opció a la configuració de **mapatge de dominis**. Vegeu la captura de pantalla de sota.

<!-- Captura de pantalla no disponible: configuració de mapatge de dominis que permet als usuaris de subllocs assignar dominis mitjançant el commutador de gestió de DNS del client -->

També podeu definir o configurar aquesta opció al nivell de **Pla** o a les opcions del producte a **Ultimate Multisite > Productes**.

![Secció de dominis personalitzats a la pàgina d’edició del producte](/img/config/product-custom-domains.png)

Quan qualsevol d’aquestes opcions està habilitada i un usuari de sublloc té permís per assignar noms de domini personalitzats, l’usuari del sublloc hauria de veure una metabox a la pàgina **Account** anomenada **Dominis**.

<!-- Captura de pantalla no disponible: metabox de dominis a la pàgina Account del sublloc amb el botó Afegeix domini -->

L’usuari pot fer clic al botó **Afegeix domini** i s’obrirà una finestra modal amb algunes instruccions.

<!-- Captura de pantalla no disponible: modal Afegeix domini que mostra instruccions de registre A de DNS per a usuaris de subllocs -->

L’usuari pot fer clic a **Pas següent** i continuar per afegir el nom de domini personalitzat. També pot triar si aquest serà el domini principal o no.

<!-- Captura de pantalla no disponible: formulari Afegeix domini amb camp de nom de domini personalitzat i commutador de domini principal -->

<!-- Captura de pantalla no disponible: pas de confirmació d’Afegeix domini que activa la verificació de DNS -->

Fer clic a **Afegeix domini** iniciarà el procés de verificació i obtenció de la informació DNS del domini personalitzat.

### Sobre la sincronització de dominis

La sincronització de dominis és un procés en què Ultimate Multisite afegeix el nom de domini personalitzat al vostre compte d’allotjament com a domini addicional **perquè el mapatge de dominis funcioni**.

La sincronització de dominis es produeix automàticament si el vostre proveïdor d’allotjament té integració amb la funció de mapatge de dominis d’Ultimate Multisite. Actualment, aquests proveïdors d’allotjament són _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ i _Cpanel._

Quan una integració de proveïdor d’allotjament està activa, Ultimate Multisite també pot posar a la cua la tasca de creació de DNS o de subdomini al costat del proveïdor per als llocs acabats de crear. Si cap integració està escoltant aquesta tasca, la feina en segon pla s’omet per evitar entrades de cua sense efecte. Les comprovacions de DNS i SSL per als dominis assignats continuen executant-se mitjançant el procés normal d’etapes de domini.

Haureu d’activar aquesta integració a la configuració d’Ultimate Multisite, a la pestanya **Integració**.

![Pestanya d’integracions a la configuració d’Ultimate Multisite que mostra proveïdors d’allotjament](/img/config/integrations-tab.png)

<!-- Captura de pantalla no disponible: enllaços de configuració del proveïdor d’allotjament a la pestanya de configuració d’integracions -->

_Tingueu en compte que, si el vostre proveïdor d’allotjament no és un dels proveïdors esmentats anteriorment, **haureu de sincronitzar o afegir manualment el nom de domini** al vostre compte d’allotjament._
