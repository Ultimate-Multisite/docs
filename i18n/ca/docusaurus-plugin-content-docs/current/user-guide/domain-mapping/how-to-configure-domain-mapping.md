---
title: Com configurar la cartografia de domini
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# Com configurar el mapeig de domini (v2)

_**NOTA IMPORTANT: Aquest article es refereix a Ultimate Multisite versió 2.x.**_

Una de les funcionalitats més potents d'un network premium és la capacitat de proporcionar als nostres clients la possibilitat d'associar un domini de nivell superior als seus llocs. Després de tot, què sembla més professional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Per això, Ultimate Multisite ofereix aquesta funcionalitat integrada, sense la necessitat d'utilitzar plugins de terceres parts.

## Què és el mapeig de domini?

Com que el nom ho suggereix, el mapeig de domini és la capacitat que ofereix Ultimate Multisite de rebre una sol·licitud de domini personalitzat i mapejar aquesta sol·licitud al lloc corresponent del network amb aquest domini adjuntat.

### Com configurar el mapeig de domini al teu network Ultimate Multisite

El mapeig de domini requereix alguna configuració de la teva part per funcionar. Per sorteu, Ultimate Multisite automatitza el treball dur per a tu, així que et permet de complir fàcilment els requisits.

Durant l'instal·lació d'Ultimate Multisite, l'assistència (wizard) copiarà i instal·larà automàticament el **sunrise.php** a la carpeta designada. **L'assistència no et permetrà continuar fins que aquest pas estigui completat**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/installation/install-wizard.png)

Això significa que una vegada que l'assistència d'instal·lació d'Ultimate Multisite hagi acabat de configurar el teu network, pots començar a mapejar el domini personalitzat de seguida.

Tens en compte que el mapeig de domini en Ultimate Multisite no és obligatori. Tens la opció d'utilitzar la funció nativa de mapeig de domini de WordPress Multisite o qualsevol altra solució de mapeig de domini.

Si necessites deshabilitar el mapeig de domini d'Ultimate Multisite per cedir el pas a altres solucions de mapeig de domini, pots deshabilitar aquesta funcionalitat en **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Just per sota d'aquesta opció, també pots veure l'opció **Force Admin Redirect**. Aquesta opció et permet controlar si els teus clients podran accedir al seu *dashboard* d'administració tant amb el seu domini personalitzat i subdomini, o només amb un dels dos.

Si seleccioneu **Force redirect to mapped domain**, els teus clients només podran accedir al seu *dashboard* d'administració amb els seus dominis personalitzats.

L'opció **Force redirect to network domain** farà exactament el contrari: els teus clients només tindran permès accedir als seus *dashboard* amb el seu subdomini, fins i tot intentant iniciar sessió amb els seus dominis personalitzats.

I l'opció **Allow access to the admin by both mapped domain domain and network domain** els permet accedir als seus *dashboard* d'administració tant amb el subdomini com amb el domini personalitzat.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Hi ha dues maneres de mapejar un domini personalitzat. La primera és mapejar el nom de domini des del *dashboard* d'administració del teu network com a superadministrador, i la segona és a través del *dashboard* d'administració del subsite, a la pàgina de comptes.

Però abans de començar a mapejar el domini personalitzat a un dels subsites del teu network, hauràs de comprovar que la configuració de **DNS** del nom de domini està correcta.

###

### Com assegurar-se que la configuració DNS del domini és correcta

Per que un mapeig funcione, has de comprovar que el domini que planees mapejar apunta a l'adreça IP del teu Network. Ten en compte que necessites l'adreça IP del Network —l'adreça IP del domini on s'ha instal·lat Ultimate Multisite— i no l'adreça IP del domini personalitzat que vols mapejar. Per buscar l'adreça IP d'un domini específic, et suggereix anar a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), per exemple.

Per mapejar el domini correctament, has de crear un **A RECORD** a la teva configuració **DNS** que apunti a aquesta **adreça IP**. La gestió de DNS varia molt entre diferents registradors de domini, però hi ha molts tutorials en línia que cobreixen això si busques " _Creating A Record on XXXX_ " on XXXXX és el teu registrador de domini (ex.: " _Creating A Record on_ _GoDaddy_ ").

Si tens problemes per fer que això funcione, **contacta amb el suport del teu registrador de domini** i ells et podran ajudar amb aquesta part.

Si planees permetre als teus clients mapejar els seus propis dominis, ells haurà de fer el treball en aquesta part. Dirig-los al sistema de suport del seu registrador si es veuen incapacitats de crear l'A Record.

### Mapejar nom de domini personalitzat com a Super Admin

Quan et has de connectat com a superadministrador al teu network, pots afegir i gestionar fàcilment noms de domini personalitzats anant a **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

En aquesta pàgina, pots clicar al botó **Add Domain** en la part superior i això t'mostrarà una finestra modal on pots configurar i rebre el **nom de domini personalitzat**, **el subsite** al qual vols aplicar el nom de domini personalitzat, i decidir si vols que sigui el nom de domini **principal** o no (ten en compte que pots mapejar **múltiples noms de domini a un subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Després de posar tota la informació, pots clicar al botó **Add Existing Domain** a la part inferior.

Això començarà el procés de verificar i obtenir la informació DNS del domini personalitzat. També veuràs un *log* a la part inferior de la pàgina per seguir el procés que està passant. Aquest procés pot trigar uns minuts.

El **Stage** o l'estat hauria de canviar de **Checking DNS** a **Ready** si tot està configurat correctament.

![Domain row showing the Checking DNS stage in the domains list](/img/admin/domain-stage-checking.png)

![Domain row showing the Ready stage with the green status indicator](/img/admin/domain-stage-ready.png)

Si cliqueu al nom de domini, podreu veure algunes opcions dins. Veiem un cop ràpid:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** És l'estat en què es troba el domini. Quan afegeu el domini per primera vegada, probablement estarà en l'estat **Checking DNS**. El procés comprovarà les entrades DNS i confirmarà que són correctes. Després, el domini es posarà en l'estat **Checking SSL**. Ultimate Multisite comprovarà si el domini té SSL o no i categoritzarà el teu domini com a **Ready** o **Ready (without SSL)**.

**Site:** El subdomini associat a aquest domini. El domini mapejat mostrarà el contingut d'aquest site específic.

**Active:** Pots activar o desactivar aquesta opció per activar o desactivar el domini.

**Is Primary Domain?:** Els teus clients poden tenir més d'un domini mapejat per a cada site. Utitza aquesta opció per seleccionar si aquest és el domini principal per al site específic.

**Is Secure?:** Tot i que Ultimate Multisite comprovi si el domini té un certificat SSL o no abans de habilitarlo, pots seleccionar manualment carregar el domini amb o sense un certificat SSL. Ten en compte que si el lloc web no té un certificat SSL i intentes forçar-lo amb SSL, et poden apareixer errors.

### Mapejar nom de domini personalitzat com a usuari de Subsite

Els administradors de subsites també poden mapejar noms de domini personalitzats des del *dashboard* d'administració del seu subsite.

Primer, has de comprovar que has d'habilitar aquesta opció dins de la configuració de **Domain mapping**. Veu la captura de pantalla a continuació.

![Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle](/img/config/domain-mapping-customer-dns.png)

També pots configurar o ajustar aquesta opció al nivell del **Plan** o les opcions de producte en **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Quan qualsevol d'aquestes opcions estan habilitades i a un usuari de subsite es li permet mapejar noms de domini personalitzats, l'usuari de subsite hauria de veure una metabox sota la pàgina **Account** anomenada **Domains**.

![Domains metabox on the subsite Account page with Add Domain button](/img/account-page/domains-metabox.png)

L'usuari pot clicar al botó **Add Domain** i això t'mostrarà una finestra modal amb algunes instruccions.

![Add Domain modal showing DNS A-record instructions for subsite users](/img/account-page/domain-add-instructions.png)

L'usuari pot després clicar a **Next Step** i continuar amb l'afecció del nom de domini personalitzat. També pot triar si aquest serà el domini principal o no.

![Add Domain form with custom domain name field and primary domain toggle](/img/account-page/domain-add-form.png)

![Add Domain confirmation step that triggers DNS verification](/img/account-page/domain-add-confirm.png)

Cliquar a **Add Domain** començarà el procés de verificar i obtenir la informació DNS del domini personalitzat.

### Sobre la sincronització de dominis

La Sincronització de Dominis (Domain Syncing) és un procés pel qual Ultimate Multisite afegeix el nom de domini personalitzat al teu compte d'hosting com a domini addicional **per que el mapeig de domini funcione**.

La sincronització de dominis es produeix automàticament si el teu proveïdor d'hosting té integració amb la funcionalitat de mapeig de domini d'Ultimate Multisite. Actualment, aquests proveïdors d'hosting són _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ i _Cpanel._

Hauràs de activar aquesta integració a la configuració d'Ultimate Multisite sota la pestañer **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

![Hosting provider Configuration links on the Integrations settings tab](/img/config/integrations-providers.png)

_Ten en compte que si el teu proveïdor d'hosting no és un dels proveïdors esmentats anteriorment,**hauràs de sincronitzar o afegir manualment el nom de domini** al teu compte d'hosting._
