---
title: Wie konfiguriert meeschte Domain-Mapping?
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Wie man Domain-Mapping konfiguriert (v2)

_**WICHTIGE NOTIZ: Dä Artikel bezieht sich uf Ultimate Multisite Version 2.x.**_

E vo de mächtigste Features vo ere Premium Network isch d'Möglichkeit, üsi Kunde e Chance z'gäbe, e Top-Level Domain uf ihri Sites z'hänge. Nach allem, was gseh wird: Was sieht professioneller us: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) oder [_**joesbikeshop.com**_](http://joesbikeshop.com)? Des isch de Grund, warum Ultimate Multisite die Funktion scho mitbringt, ohni dass mer Drittanbieter-Plugins bruche müend.

## Was isch Domain Mapping?

Wie de Name scho seit, isch Domain Mapping d'Möglichkeit vo Ultimate Multisite, e Aafrog für e benutzerdefinierti Domain z'näh und die Aafrog mit de entsprechende Site im Netzwerk z'verbinde, wo die spezifischi Domain aaghängt isch.

### Wie man Domain Mapping uf dinere Ultimate Multisite Network iistellt

Domain Mapping brucht e paar Iistellige vo dir, damit es funktioniert. Glücklicherwiis automatisiert Ultimate Multisite d'schwere Arbeit für dich, sodass du d'Aaforderige ganz eifach erfüllsch.

Während de Installation vo Ultimate Multisite kopiert und installiert de Wizard automatisch **sunrise.php** i de vorgsehni Ordner. De Wizard wird dir nöd zuelah, wiiterzgah, bis dä Schritt abgschlosse isch.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Das heisst, sobald de Ultimate Multisite Installationswizard dini Network fertig iigstellt het, chasch du sofort mit em Mapping vo de benutzerdefinierten Domain afange.

Beachte, dass Domain Mapping in Ultimate Multisite nöd obligatorisch isch. Du häsch d'Option, d'native WordPress Multisite Domain Mapping Funktion oder jede anderi Domain Mapping Lösig z'bruche.

Wenn Sie die Domain-Mapping von Ultimate Multisite deaktivieren möchten, um Platz für andere Domain-Mapping-Lösungen zu schaffen, können Sie diese Funktion unter **Ultimate Multisite > Settings > Domain Mapping** deaktivieren.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Direkt unter dieser Option sehen Sie auch die Option **Force Admin Redirect**. Diese Option erlaubt Ihnen zu steuern, ob Ihre Kunden ihr Admin-Dashboard sowohl auf ihrer benutzerdefinierten Domain als auch ihrem Subdomain oder nur auf einer davon erreichen können.

Wenn Sie **Force redirect to mapped domain** auswählen, können Ihre Kunden ihr Admin-Dashboard nur auf ihren benutzerdefinierten Domains erreichen.

Die Option **Force redirect to network domain** macht genau das Gegenteil – Ihre Kunden dürfen ihre Dashboards nur auf ihrem Subdomain erreichen, selbst wenn sie versuchen, sich auf ihren benutzerdefinierten Domains anzumelden.

Und die Option **Allow access to the admin by both mapped domain domain and network domain** erlaubt ihnen den Zugriff auf ihre Admin-Dashboards sowohl auf dem Subdomain als auch auf der benutzerdefinierten Domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Es gibt zwei Möglichkeiten, eine benutzerdefinierte Domain zu mappen. Die erste ist das Mappen des Domainnamens von Ihrem Netzwerk-Admin-Dashboard als Superadmin und die zweite erfolgt über das Subsite-Admin-Dashboard unter der Seite Konten.

Aber bevor Sie beginnen, die benutzerdefinierte Domain mit einer Ihrer Subsites in Ihrem Netzwerk zu mappen, müssen Sie sicherstellen, dass die **DNS-Einstellungen** des Domainnamens korrekt konfiguriert sind.

###

### Sicherstellen, dass die DNS-Einstellungen der Domain korrekt konfiguriert sind

Damit e Mapping funktioniert, müesse Sie sicherstelle, dass d'Domain, wo Sie mappe wend, uf d'IP-Adress vo Ihrem Netzwerk zeigt. Mer bruuche d'Netzwerk-IP-Adress – die IP-Adress vo de Domain, wo Ultimate Multisite installiert isch – und nöd die IP-Adress vo de benutzerdefinierten Domain, wo Sie mappe wend. Um d'IP-Adress vo ere spezifische Domain z'sueche, empfehle mer, uf [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) z'gah, zum Bischpil.

Damit Sie d'Domain korrekt mappe chönd, müesse Sie en **A RECORD** i Ihrer **DNS** Konfiguration hinzufüge, wo uf die **IP-Adress** zeigt. D'DNS-Verwaltig variiert stark zwüsche verschiedene Domain-Registrare, aber es git vill Tutorials online, wo das abdecked, wenn Sie nach " _Creating A Record on XXXX_ " sueched, wo XXXX Ihr Domain-Registrar isch (z.B.: " _Creating A Record on_ _GoDaddy_ ").

Wenn Sie Müeh händ, das z'funktioniere, **kontaktieret de Support vo Ihrem Domain-Registrar**, und die chönd Ihnen mit dem Teil helfe.

Falls Sie plant händ, dass Ihre Kunde ihri eigeti Domains mappe dörfed, müesse sie die Arbeit für diesen Teil selber mache. Zeige Sie ihnen uf ihr Registrar-Supportsystem, falls sie nöd chönne de A Record erstelle.

### Benutzerdefinierten Domainnamen als Super Admin mappen

Wenn Sie sich als Super Admin uf Ihrem Netzwerk iiloget händ, chönd Sie benutzerdefinierti Domainnamen ganz eifach unter **Ultimate Multisite > Domains** hinzufüge und verwalte.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Unter dere Siite chönntet Sie uf de **Add Domain** Knopf obe druf klicke und das öffnet es Modalfenster, wo Sie de **custom domain name**, **de Subsite**, wo Sie de custom domain name wend aawende, iigäh und festlege chönd ob Sie ihn als **primary domain name** setze wend oder nöd (bemerket, dass Sie **mehli Domain-Namen uf eim Subsite mappend** chönne).

![Add Domain modal mit Domain Name, Site Picker und Primary Domain Toggle](/img/admin/domain-add-modal.png)

Nachdem Sie alli Infos iigäh händ, chönntet Sie druf de **Add Existing Domain** Knopf am Bode klicke.

Das startet de Prozess, bi de DNS-Informatione vom custom domain z'prüefe und z'hole. Am Bode vo de Siite gsehnd Sie au en Log, wo Sie de Prozess folge chönd. Das chan es paar Minute bruche.

Ultimate Multisite v2.13.0 erstellt automatisch au de interne Domain-Record, wenn e neus Site uf eme Host erstellt wird, wo als per-Site-Domain behandelt werde sött. Wenn de Host de primäri Domain vom Netz isch oder eine vo de gemeinsame Checkout-Form Basisdomainen konfiguriert isch i em Feld **Site URL**, wird de automatisch mappendi Domain-Record übersprunge, damit d'gemeinsami Basisdomain für jede Site verfügbar blibt, wo sie brucht.

De **Stage** oder de Status sött vo **Checking DNS** zu **Ready** wechselä, wenn alles richtig igstellt isch.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Wenn Sie uf de Domain Name klicke, chönntet Sie es paar Option i ihm gseh. Luege mer schnell mal druf:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Das isch de Schritt, wo d'Domain grad isch. Wenn Sie d'Domain zum erschte Mal hinzufüeged, wird sie wahrschinlich uf em **Checking DNS** Schritt si. Dä Prozess prüeft d'DNS-Einträge und bestätigt, dass die korrekt sind. Danach wird d'Domain uf em **Checking SSL** Schritt gsetzt. Ultimate Multisite prüeft, ob d'Domain es SSL het oder nöd, und klassifiziert Ihre Domain als **Ready** oder **Ready (ohne SSL)**.

**Site:** D'Subdomain, wo mit dere Domain verbunde isch. D'abgebundeni Domain zeigt de Inhalt vo dere spezifische Site a.

**Active:** Sie chönd die Option i- oder usschalte, um d'Domain z'aktivierä oder z'deaktivierä.

**Is Primary Domain?:** Ihre Kunde chönd meh als e Domain für jede Site abbinde ha. Bruche Sie die Option, um z'wähle, ob das d'primäri Domain für die spezifischi Site isch.

**Is Secure?:** Au wenn Ultimate Multisite prüeft, öb d'Domain es SSL-Zertifikat het oder nöd, bevor er sie aktiviert, chönd Sie manuell wähle, ob Sie d'Domain mit oder ohni es SSL-Zertifikat lade wend. Merke Sie sich, dass es Fehler chönnt gä, wenn d'Website kei SSL-Zertifikat het und Sie versueched, sie mit em Zwang z'lade.

### Custom Domain Name als Subsite Benutzer abbinde

Subsite-Administratore chönd au custom Domain Names vo ihrem Subsite Admin Dashboard abbinde.

Zuerst müend Sie sicherstelle, dass Sie die Option unter de **Domain mapping** Iistellige aktiviert händ. Luege Sie sich d'Screenshot unde a.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Sie chönd die Option au under em **Plan** Niveau oder de Produktoptionen uf **Ultimate Multisite > Products** iistelle oder konfigurierä.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Wann au eifachi vo dësen Option aktiv gsetzt ginn an en Subsite-User dësen benutzer kann custom domain names mappe, soll de Subsite-User en metabox under de **Account** Seite gseh, genaamt **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

De User kann uf de **Add Domain** Button klickt, und dat bringt en modal window mit puer Instruktionen.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

De User kann denn uf **Next Step** klickt, und s'proceedet zur Hif. de kann au welle welle, ob dat d'primär domain oder net.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klickt uf **Add Domain** startet de Prozess, um d'DNS Information vum custom domain z'verifiziere und z'fetzen.

### Über Domain Syncing

Domain Syncing isch en Prozess, wo Ultimate Multisite de custom domain name zu Ihrem Hosting-Account als add-on domain hinzufügt, **damit d'domain mapping funktioniert**.

Domain syncing passiert automatisch, wenn Ihr Hosting-Provider Integration mit de Ultimate Multisite domain mapping Feature het. Aktuell sind die Hosting-Provider _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ und _Cpanel._

Wenn en host-provider Integration aktiv isch, kann Ultimate Multisite au d'Task zur DNS oder Subdomain Erschaffung vo de Provider si für neu erstellti Sites. Wenn kei Integration die Task lauschtet, wird de background job übersprungen, um no-op queue entries z'vermeide. DNS- und SSL-Checks für mappti domains fahre wiiter durch de normale domain-stage Prozess.

Sie müesse die Integration i de Ultimate Multisite Iistellige unter em Tab **Integration** aktiviere.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Wichtig: Falls Ihr Hosting-Provider nöd einer vo de obe gnannte Provider isch, müesse Sie d'Domain manuell synchronisiere oder zu Ihrem Hosting-Account hinzufüge._
