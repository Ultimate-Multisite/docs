---
title: Kiel konfigurigi domeno mapado?
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kiel konfiguruji domen-mappig (v2)

_**IMPORTANTE NOTA: Esta artikolo referas al versio 2.x de Ultimate Multisite.**_

Una de las características más potentes d'un xarco premium es la capacitat d'ofereix als nosos clients una oportunitat de pujar un domini de nivel superior a els seus sites. Després, quin sembla més professional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Això és per això que Ultimate Multisite ofereix aquesta característica integrada, sense necessitat d'utilitzar plugins de tercers.

## Què és el mapeig de domini (domain mapping)?

Com suggereix el nom, el mapeig de domini és la capacitat que ofrece Ultimate Multisite de prendre una sol·licitud d'un domini personal i mappar aquesta sol·licitud al site corresponent en la xarxa amb aquell domini específic adjunt.

### Com configurar el mapeig de domini a la teva Xarxa Ultimate Multisite

El mapeig de domini requereix algunes configuracions per funcionar. Gràcies, Ultimate Multisite automatitza el treball dur per tu així pots complir fàcilment els requisits.

Durant l'instal·lació d'Ultimate Multisite, el wizard copiarà i instal·larà automàticament **sunrise.php** a la carpeta designada. **El wizard no t'permetrà continuar fins que aquest pas es completi**.

<!-- Screenshot unavailable: Wizard d'instal·lació de Ultimate Multisite amb el pas sunrise.php -->

Això significa que una vegada el wizard d'instal·lació d'Ultimate Multisite hagi completat la configuració de la teva xarxa, pots començar a mappar el domini personal immediatament.

Nota que el mapeig de domini en Ultimate Multisite no és obligatori. Tens l'opció d'utilitzar la funció nativa de WordPress Multisite per al mapeig de domini o qualsevol altra solució de mapeig de domini.

Se vi bezon necesi desabiliti la mapado de dominios Ultimate Multisite por el que poŝiĝas al alia solvoj de mapado de dominios, vi povas desabiliti ĉi tiun funkcion sub **Ultimate Multisite > Settings > Domain Mapping**.

![Página de configuración de mapeo de dominios mostrando redirección de administrador, mensaje de mapeo y opciones DNS](/img/config/domain-mapping-settings.png)

Tutele de ĉi tiu opcio vi ankaŭ povas vidi la opcio **Force Admin Redirect** (Forci redirekton de administrator). Ĉi tiu opcio permesas vi kontroli ĉu viaj klientoj tutele alcastil sin al sia administra dashboard per siaj personalaj dominios kaj subdominios aŭ nur al unu el iliajn.

Se vi selektas **Force redirect to mapped domain** (Forci redirekton al mapita dominio), viaj klientoj poŝiĝos alcastili sian administran dashboard nur per siaj personalaj dominios.

La opcio **Force redirect to network domain** (Forci redirekton al reta dominio) faros ekzemple la kontraŭon – viaj klientoj nur permesetas alcastili siajn dashboardojn sur sia subdomino, eĉ se ili provizos alcastili sin sur siaj personalaj dominios.

E la opcio **Allow access to the admin by both mapped domain domain and network domain** (Permiti alcastadon de la admin per la mapita dominio kaj reta dominio) permesas al ili alcastili siajn administran dashboardojn tutele sur la subdomino kaj la personala dominio.

![Menú de redirekto de administrator ekspandita montras la tri redirekto opcio](/img/config/domain-mapping-redirect-options.png)

Ekzistas du manoj por mapi personalan domain. La unua estas per mapado de la nombro de domeno de via reta administradanto kiel superadministrado kaj la dua estas per la subsite administradanto sub la paĝo de konto.

Sed antaŭ ol vi komencos mapi la personalan domain al unu el la subsitoj en via reto, vi bezonas certigi, ke la **DNS settings** (ajustoj DNS) de la nombro de domeno estas ĝuste konfigurita.

###

### Certigi, ke la DNS-ajustoj de la domeno estas ĝuste konfigurita

Pra, pra, pri funkcionigi necese certigi, ke la domeno ki vi planas mapi, apuntas al IP-adreso de viajantaj reto (Network's IP address). Notu: vi bezonas la Network IP-adrense – la IP-adrense de la domeno k kie estas instalita Ultimate Multisite – ne la IP-adrense de la personala domeno ki vi volas mapi. Por cherigi la IP-adrensen de specifika domeno, ni vi sugeras iri al [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), pa ekzemplo.

Por korekt mapi la domeno, vi bezonas aĉadi un **A RECORD** sur via dum la konfiguracio de via DNS apuntanta al tiu **IP-adrenso**. La administro de DNS vari multe inter diferencaj domeno registratoroj, sed estas multaj tutelaj sur la internet konvitiĝas pri tio se vi cheras " _Creating A Record on XXXX_ ", kie XXXX estas via domeno registrator (ekz.: " _Creating A Record on_ _GoDaddy_ ").

Se vi trovas malsanon al akiri tion funkcioni, **kontakti la suporton de via domeno registrator**, kaj ili tute helpos vi kun ĉi tiu parto.

Se vi planas permiti al via klientoj mapi siajn proprajn domenojn, ili devus fari ti laboron mem. Apunta ilin al siaj registrator suportaj sistemoj, se ili ne povas krei la A Record.

### Mapado de personala domeno kiel Super Admin

Kiam vi estas logita kiel super admin sur via reto, vi povas facile aĉadi kaj administra personalajn domenojn per iri sub **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Sub ĉi tiu paĝo vi povas kliki sur butonon **Add Domain** (Aggiungi Domeno) en la supero, kaj tio aldonos modulan fenestrion, kie vi povas fari definon kaj plenumi la **custom domain name** (personalia domeno), **the subsite** (subsiton), al kiu vi volas apliki la personalan domenon, kaj decidi, ĉu vi volas fari ĝin la **primary domain name** (primaran domenon) aŭ ne (notu, ke vi povas mapi **multaj domenojn al unu subsito**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Post kiam vi metis ĉiuj informoj, vi povas kliki sur butonon **Add Existing Domain** (Aggiungi Ekzistantan Domenon) en la bazaltio.

Tio komencos la proceson de verifado kaj akto de DNS-informoj de la personala domeno. Vi ankaŭ vidus logadon al bazaltio de la paĝo por sekvi la proceson, kiun ĝi faras. Ĉi tiu procesa povas diri kelkajn minutojn por finiĝi.

Ultimate Multisite v2.13.0 ankaŭ kreas la internan domen-registron aŭtomate, kiam nova sito estas kreita sur hosto, kiu devas traktiĝi kiel domeno per sita (per site). Se la hosto estas la primara domeno de la retoj, aŭ unu el la bazaltaj bazaj domenoj de la formulo de checkout konfiguraita en la kampo **Site URL** (URL de sita), la aŭtomata mapita-domeno-registraĵo saltas por ke la bazaj bazaj domenoj restu disponibile al ĉiu sito, kiu ĝin uzas.

La **Stage** (Stato) aŭ status devas ŝanĝi de **Checking DNS** (Verifas DNS-informojn) al **Ready** (Nekonfiksa/Mekziga), se ĉio estas bone konfiguraita.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Se vi klikas sur la domenon, vi bone povas vidi certajn opciojn en ĝi. Ĉu ni faros rapidan vidon al ili:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stadio:** Ĉi tio estas la stadio, en kiu la domeno estas. Kiam vi ĝin pliante pri la domeno, ĝi probable tutebe estu sur la stadio **Kontro de DNS** (*Checking DNS*). La proceso kontrolas la DNS-enfermo kaj konfirmas, ke ili estas ĝustataj. Tiam, la domeno wirdus pligitaj al la stadio **Kontro de SSL** (*Checking SSL*). Ultimate Multisite kontrolas, ĉu la domeno havas SSL aŭ ne, kaj kategorias vian domenon kiel **Nekonfida** (*Ready*) aŭ **Nekonfida (sen SSL)** (*Ready without SSL*).

**Sitio:** La subdomeno kiu estas asociita kun ĉi tiu domeno. La mapita domeno montros la encon la specifan sitiojn.

**Aktiva:** Vi povas ŝanĝi ĉi ti optionon al "on" aŭ "off" por aktivi aŭ deaktivi la domenon.

**Estas Primara Domeno?** Viaj klientoj povas havi pli ol un domenon mapitan por ĉiu sitio. Uzu ĉi ti optionon por selekti, ĉu ĉi tiu estas la primara domeno por la specifan sitiojn.

**Estas Sektura?** Eĉ se Ultimate Multisite kontrolas, ĉu la domeno havas SSL-sertifikon aŭ ne antaŭ eldonigi ĝin, vi povas manuveble selekti ŝarĝi la domenon kun aŭ sen SSL-sertifikon. Notu, ke se la ĉezo ne havas SSL-sertifikon kaj vi provas forci ŝarĝi ĝin kun SSL, ĝi povas doni al vi erarojn.

### Mapado de tujdomeno kiel Subsitio uzanto

Subsitio administratoroj ankaŭ povas mapi tujdomenojn el ilia subsitio administratora dashboardo.

Unue, vi devas certigi, ke vi aktivas ĉi ti optionon sub la ŝanĝoj **Mapado de domeno** (*Domain mapping*). Vidu la skiron al unuaj.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Vi ankaŭ povas fari aŭ konfigurigi ĉi ti optionon sub la nivelo **Plan** aŭ produktooptionoj sur **Ultimate Multisite > Produktoj**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kiam iu iu opciojoj estas aktiva kaj subsite uzanto permesita mapi personalajn domajn nomojn, la subsite uzanto devas vidi metaboxon sub **Account** paĝo nomitan **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

La uzanto povas kliki sur butonon **Add Domain**, kaj tio prezentos modalan fenestrion kun certaj instruoj.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Tamen la uzanto povas kliki sur **Next Step** kaj procedi al aldonado de la personala domajno. Ili ankaŭ povas elekti, ĉu tio estos la primara domajno aŭ ne.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klikado sur **Add Domain** komencas la proceson de verifado kaj akto de informoj pri la personala domajno.

### Pri Domajno Sinkruo (About Domain Syncing)

Domajno sinkruo estas proceso, kie Ultimate Multisite aldonas la personalan domajn nomon al viajn alojaj konton kiel aldonita domajno **por ke la mapado de domajnoj funkcias**.

Domajno sinkruo okazas aŭtomate, se via aloja provizanto havas integriĝon kun la funkcio de mapado de domajnoj de Ultimate Multisite. Teten ĉi tiuj alojaj provizantoj estas _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ kaj _Cpanel._

Kiam integracio de aloja provizanto estas aktiva, Ultimate Multisite ankaŭ povas enŝuti la taskon de DNS aŭ subdomajno kreo de la provizanto por novaj sitoj. Se ne ekzistas integriĝo, kiu aŭskutas tiian taskon, la arkajobo saltas por eviti nulu-op (no-op) en la kviro. La DNS kaj SSL kontroloj por mapitaj domajnoj continus fari per la norman domajno-stadion proceson.

Vous devas activate ĉi ti integriĝon en la ŝanĝoj de Ultimate Multisite sub la tabelo **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Notu, se viaj alojentanto ne estas unu el ti integritantoj menciitaj above, **vi devas manuve manuale sincronigi aŭ aĉeti la domeno** al via aloja konto._
