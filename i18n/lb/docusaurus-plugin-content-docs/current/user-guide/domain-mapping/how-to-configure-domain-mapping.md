---
title: Wéi een Domain Mapping konfiguréiert
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Wéi een Domain-Mapping konfiguréiert (v2)

_**WICHTEG NOTIZ: Dësen Artikel bezitt sech op Ultimate Multisite Versioun 2.x.**_

Eng vun de mächtegste Funktioune vun engem Premium-Netzwierk ass d'Méiglechkeet, eise Clienten unzebidden, eng Top-Level-Domain un hir Säiten unzehänken. Iwwerhaapt, wat gesäit méi professionell aus: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) oder [_**joesbikeshop.com**_](http://joesbikeshop.com)? Dofir bitt Ultimate Multisite dës Funktioun agebaut un, ouni datt een Drëtt-Partei-Pluginne benotze muss.

## Wat ass Domain-Mapping? {#whats-domain-mapping}

Wéi den Numm et seet, ass Domain-Mapping d'Méiglechkeet, déi Ultimate Multisite ubitt, eng Ufro fir eng personaliséiert Domain unzehuelen an dës Ufro op déi entspriechend Säit am Netzwierk ze mappen, un déi genau dës Domain ugehaange gouf.

### Wéi een Domain-Mapping op Ärem Ultimate Multisite-Netzwierk ariicht {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain-Mapping erfuerdert e bëssen Ariichtung vun Ärer Säit, fir ze funktionéieren. Glécklecherweis automatiséiert Ultimate Multisite déi schwéier Aarbecht fir Iech, sou datt Dir d'Ufuerderungen einfach erfëlle kënnt.

Wärend der Ultimate Multisite-Installatioun kopéiert an installéiert den Assistent automatesch d'**sunrise.php** an den zougewisene Dossier. **Den Assistent léisst Iech net weiderfueren, bis dëse Schrëtt ofgeschloss ass**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Dat bedeit, datt Dir, soubal den Ultimate Multisite-Installatiounsassistent d'Ariichtung vun Ärem Netzwierk ofgeschloss huet, direkt domat ufänke kënnt, déi personaliséiert Domain ze mappen.

Bedenkt, datt Domain-Mapping an Ultimate Multisite net obligatoresch ass. Dir hutt d'Méiglechkeet, d'nativ Domain-Mapping-Funktioun vu WordPress Multisite oder eng aner Domain-Mapping-Léisung ze benotzen.

Sollt Dir Ultimate Multisite Domain-Mapping deaktivéiere mussen, fir aner Domain-Mapping-Léisunge virzeloossen, kënnt Dir dës Funktioun ënner **Ultimate Multisite > Astellungen > Domain-Mapping** deaktivéieren.

![Domain-Mapping-Astellungssäit mat Admin-Ëmleedung, Mapping-Noriicht an DNS-Optiounen](/img/config/domain-mapping-settings.png)

Direkt ënner dëser Optioun gesitt Dir och d'Optioun **Admin-Ëmleedung forcéieren**. Dës Optioun erlaabt Iech ze kontrolléieren, ob Är Clienten op hiren Admin-Dashboard souwuel iwwer hir personaliséiert Domain wéi och iwwer hir Subdomain zougräife kënnen, oder nëmmen iwwer eng dovun.

Wann Dir **Ëmleedung op gemappt Domain forcéieren** auswielt, kënnen Är Clienten nëmmen iwwer hir personaliséiert Domainen op hiren Admin-Dashboard zougräifen.

D'Optioun **Ëmleedung op** **Netzwierk-Domain forcéieren** mécht genee de Géigendeel - Är Clienten däerfen nëmmen iwwer hir Subdomain op hir Dashboarden zougräifen, och wa si probéieren, sech iwwer hir personaliséiert Domainen unzemellen.

An d'Optioun **Zougrëff op den Admin iwwer béid, gemappt Domain an Netzwierk-Domain, erlaben** erlaabt hinnen, souwuel iwwer d'Subdomain wéi och iwwer déi personaliséiert Domain op hir Admin-Dashboarden zouzegräifen.

![Admin-Ëmleedungs-Ausklapplëscht ausgeklappt mat den dräi Ëmleedungsoptiounen](/img/config/domain-mapping-redirect-options.png)

Et ginn zwou Méiglechkeeten, eng personaliséiert Domain ze mappen. Déi éischt ass, den Domainnumm aus Ärem Netzwierk-Admin-Dashboard als Super Admin ze mappen, an déi zweet ass iwwer de Subsite-Admin-Dashboard ënner der Account-Säit.

Mee ier Dir ufänkt, déi personaliséiert Domain op eng vun de Subsites an Ärem Netzwierk ze mappen, musst Dir sécherstellen, datt d'**DNS-Astellungen** vum Domainnumm richteg konfiguréiert sinn.

###

### Sécherstellen, datt d'Domain-DNS-Astellunge richteg konfiguréiert sinn {#making-sure-the-domain-dns-settings-are-properly-configured}

Fir datt e Mapping funktionéiert, musst Dir sécherstellen, datt d'Domain, déi Dir plangt ze mappen, op d'IP-Adress vun Ärem Netzwierk weist. Bedenkt, datt Dir d'Netzwierk-IP-Adress braucht - d'IP-Adress vun der Domain, wou Ultimate Multisite installéiert ass - net d'IP-Adress vun der personaliséierter Domain, déi Dir mappe wëllt. Fir no der IP-Adress vun enger spezifescher Domain ze sichen, proposéiere mir zum Beispill [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) ze benotzen.

Fir d'Domain korrekt ze mappen, musst Dir en **A RECORD** an Ärer **DNS**-Konfiguratioun derbäisetzen, deen op déi **IP-Adress** weist. DNS-Verwaltung ënnerscheet sech staark tëscht verschiddenen Domain-Registraren, mee et gi vill Tutorials online, déi dat ofdecken, wann Dir no " _Creating A Record on XXXX_ " sicht, wou XXXX Ären Domain-Registrar ass (z. B.: " _Creating A Record on_ _GoDaddy_ ").

Wann Dir Problemer hutt, dëst zum Lafen ze bréngen, **kontaktéiert den Support vun Ärem Domain-Registrar**, an si kënnen Iech bei dësem Deel hëllefen.

Wann Dir plangt, Äre Clienten ze erlaben, hir eege Domainen ze mappen, musse si d'Aarbecht an dësem Deel selwer maachen. Verweist si op de Support-System vun hirem Registrar, wa si net fäeg sinn, den A Record ze erstellen.

### Personaliséierten Domainnumm als Super Admin mappen {#mapping-custom-domain-name-as-super-admin}

Wann Dir als Super Admin op Ärem Netzwierk ageloggt sidd, kënnt Dir personaliséiert Domainnimm einfach derbäisetzen a verwalten, andeems Dir ënner **Ultimate Multisite > Domainen** gitt.

![Domainen-Lëscht-Säit an Ultimate Multisite](/img/admin/domains-list.png)

Ënner dëser Säit kënnt Dir uewen op de Knäppchen **Domain derbäisetzen** klicken, an dëst mécht eng modal Fënster op, wou Dir de **personaliséierten Domainnumm**, **d'Subsite**, op déi Dir de personaliséierten Domainnumm uwende wëllt, astellen an ausfëlle kënnt, an decidéiere kënnt, ob Dir en als **primären Domainnumm** astelle wëllt oder net (bedenkt, datt Dir **méi Domainnimm op eng Subsite mappe** kënnt).

![Modal Fënster Domain derbäisetzen mat Domainnumm, Site-Auswiel a Schalter fir primär Domain](/img/admin/domain-add-modal.png)

Nodeems Dir all d'Informatiounen aginn hutt, kënnt Dir dann ënnen op de Knäppchen **Bestoend Domain derbäisetzen** klicken.

Dëst start de Prozess fir d'DNS-Informatioune vun der personaliséierter Domain z'iwwerpréiwen an ofzeruffen. Dir gesitt och ënnen op der Säit e Log, mat deem Dir de Prozess verfollege kënnt, deen duerchlaf gëtt. Dëse Prozess kann e puer Minutten daueren.

Ultimate Multisite v2.13.0 erstellt och den interne Domain-Record automatesch, wann eng nei Site op engem Host erstallt gëtt, deen als Domain pro Site behandelt soll ginn. Wann de Host d’primär Domain vum Netzwierk ass, oder eng vun de gemeinsame Checkout-Formulaire-Basisdomainen, déi op engem **Site URL**-Feld konfiguréiert sinn, gëtt den automatesche mapped-domain Record iwwersprongen, sou datt déi gemeinsam Basisdomain fir all Site verfügbar bleift, déi se benotzt.

Wann e Client eng nei Domain iwwer Domain Seller v1.3.0 oder méi nei registréiert, mappt Ultimate Multisite déi registréiert Domain standardméisseg automatesch op d’Netzwierk-Site vum Client. Administrateure mussen no enger erfollegräicher Registréierung kee separate mapped-domain Record méi derbäisetzen, ausser si wëllen Optiounen upassen, wéi d’primary-domain-Kennzeechen, den Aktivéierungszoustand oder d’SSL-Behandlung.

De **Stage** oder de Status soll vun **Checking DNS** op **Ready** wiesselen, wann alles richteg ageriicht ass.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Wann Dir op den Domain-Numm klickt, kënnt Dir dobannen e puer Optioune gesinn. Loosse mir se kuerz ukucken:

![Domain-Detail-Säit mat Stage, Site, aktiv-, primär- an SSL-Schalteren](/img/admin/domain-edit.png)

**Stage:** Dëst ass de Stage, an deem d’Domain ass. Wann Dir d’Domain fir d’éischt derbäisetzt, wäert se wahrscheinlech am **Checking DNS**-Stage sinn. De Prozess kontrolléiert d’DNS-Einträg a confirméiert, datt se korrekt sinn. Duerno gëtt d’Domain an de **Checking SSL**-Stage gesat. Ultimate Multisite kontrolléiert, ob d’Domain SSL huet oder net, a kategoriséiert Är Domain als **Ready** oder **Ready (without SSL)**.

**Site:** D’Subdomain, déi mat dëser Domain verbonnen ass. Déi gemappt Domain weist den Inhalt vun dëser spezifescher Site.

**Active:** Dir kënnt dës Optioun un- oder ausschalten, fir d’Domain ze aktivéieren oder ze deaktivéieren.

**Is Primary Domain?:** Är Clientë kënnen méi wéi eng gemappt Domain fir all Site hunn. Benotzt dës Optioun, fir auszewielen, ob dëst déi primär Domain fir déi spezifesch Site ass.

**Is Secure?:** Och wann Ultimate Multisite kontrolléiert, ob d’Domain e SSL-Zertifikat huet oder net, éier se aktivéiert gëtt, kënnt Dir manuell auswielen, ob d’Domain mat oder ouni SSL-Zertifikat geluede soll ginn. Bedenkt, datt wann d’Websäit kee SSL-Zertifikat huet an Dir probéiert se forcéiert mat SSL ze lueden, et Feeler ka ginn.

### Benotzerdefinéierten Domain-Numm als Subsite-Benotzer mappen {#mapping-custom-domain-name-as-subsite-user}

Subsite-Administrateure kënnen och personaliséiert Domain-Nimm aus hirem Subsite-Admin-Dashboard mappen.

Als éischt musst Dir sécherstellen, datt Dir dës Optioun ënner den **Domain mapping**-Astellungen aktivéiert. Kuckt de Screenshot hei drënner.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Dir kënnt dës Optioun och um **Plan**-Niveau oder an de Produitoptiounen ënner **Ultimate Multisite > Products** astellen oder konfiguréieren.

![Sektioun fir personaliséiert Domainen op der Produit-Ännerungssäit](/img/config/product-custom-domains.png)

Wann eng vun dësen Optiounen aktivéiert ass an e Subsite-Benotzer erlaabt ass, personaliséiert Domain-Nimm ze mappen, soll de Subsite-Benotzer eng Metabox op der **Account**-Säit gesinn, déi **Domains** heescht.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

De Benotzer kann op de **Add Domain**-Knäppchen klicken, an et geet eng Modal-Fënster mat e puer Instruktiounen op.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

De Benotzer kann duerno op **Next Step** klicken an domat weiderfueren, de personaliséierten Domain-Numm derbäizesetzen. Hie kann och wielen, ob dëst déi primär Domain soll sinn oder net.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Op **Add Domain** klicken start de Prozess, fir d’DNS-Informatioune vun der personaliséierter Domain ze iwwerpréiwen an ofzeruffen.

### Iwwer Domain-Synchroniséierung {#about-domain-syncing}

Domain-Synchroniséierung ass e Prozess, bei deem Ultimate Multisite de personaliséierten Domain-Numm zu Ärem Hosting-Account als Add-on-Domain derbäisetzt, **fir datt d’Domain mapping funktionéiert**.

Domain-Synchroniséierung geschitt automatesch, wann Ären Hosting-Ubidder eng Integratioun mat der Domain-mapping-Funktioun vun Ultimate Multisite huet. Aktuell sinn dës Hosting-Ubidder _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ an _Cpanel._

Wann eng Host-Provider-Integratioun aktiv ass, kann Ultimate Multisite och d’provider-säiteg DNS- oder Subdomain-Erstellungstask fir nei erstallt Siten an d’Queue setzen. Wann keng Integratioun op dës Task lauschtert, gëtt den Hannergrondjob iwwersprongen, fir no-op Queue-Einträg ze vermeiden. DNS- an SSL-Kontrolle fir gemappt Domainen lafe weider iwwer den normale Domain-Stage-Prozess.

Dir musst dës Integratioun an den Ultimate Multisite-Astellungen ënner dem **Integration**-Tab aktivéieren.

![Integratiounen-Tab an den Ultimate Multisite-Astellungen, deen Hosting-Ubidder weist](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Notéiert datt, wann Ären Hosting-Ubidder net ee vun deenen uewe genannte Provider ass,**Dir den Domain-Numm manuell synchroniséiere oder derbäisetze musst** zu Ärem Hosting-Account._
