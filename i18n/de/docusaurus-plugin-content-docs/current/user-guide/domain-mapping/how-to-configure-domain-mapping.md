---
title: So konfigurieren Sie die Domain-Zuordnung
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# So konfigurierst du Domain Mapping (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Eine der leistungsstärksten Funktionen eines Premium-Netzwerks ist die Möglichkeit, unseren Kunden anzubieten, eine Top-Level-Domain mit ihren Websites zu verbinden. Was wirkt schließlich professioneller: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) oder [_**joesbikeshop.com**_](http://joesbikeshop.com)? Deshalb bietet Ultimate Multisite diese Funktion integriert an, ohne dass Plugins von Drittanbietern erforderlich sind.

## Was ist Domain Mapping?

Wie der Name schon sagt, ist Domain Mapping die von Ultimate Multisite angebotene Möglichkeit, eine Anfrage für eine benutzerdefinierte Domain entgegenzunehmen und diese Anfrage der entsprechenden Website im Netzwerk zuzuordnen, mit der diese bestimmte Domain verbunden ist.

### So richtest du Domain Mapping in deinem Ultimate Multisite-Netzwerk ein

Domain Mapping erfordert einige Einrichtungsschritte deinerseits, damit es funktioniert. Glücklicherweise automatisiert Ultimate Multisite die harte Arbeit für dich, sodass du die Anforderungen leicht erfüllen kannst.

Während der Installation von Ultimate Multisite kopiert und installiert der Assistent die **sunrise.php** automatisch in den vorgesehenen Ordner. **Der Assistent lässt dich erst fortfahren, wenn dieser Schritt abgeschlossen ist**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Das bedeutet: Sobald der Installationsassistent von Ultimate Multisite die Einrichtung deines Netzwerks abgeschlossen hat, kannst du sofort mit dem Mapping der benutzerdefinierten Domain beginnen.

Beachte, dass Domain Mapping in Ultimate Multisite nicht verpflichtend ist. Du hast die Möglichkeit, die native Domain-Mapping-Funktion von WordPress Multisite oder eine andere Domain-Mapping-Lösung zu verwenden.

Wenn du Ultimate Multisite Domain Mapping deaktivieren musst, um anderen Domain-Mapping-Lösungen Platz zu machen, kannst du diese Funktion unter **Ultimate Multisite > Einstellungen > Domain Mapping** deaktivieren.

![Einstellungsseite für Domain Mapping mit Admin-Weiterleitung, Mapping-Nachricht und DNS-Optionen](/img/config/domain-mapping-settings.png)

Direkt unter dieser Option kannst du auch die Option **Force Admin Redirect** sehen. Mit dieser Option kannst du steuern, ob deine Kunden ihr Admin-Dashboard sowohl über ihre benutzerdefinierte Domain als auch über ihre Subdomain erreichen können oder nur über eine von beiden.

Wenn du **Force redirect to mapped domain** auswählst, können deine Kunden ihr Admin-Dashboard nur über ihre benutzerdefinierten Domains aufrufen.

Die Option **Force redirect to** **network domain** bewirkt genau das Gegenteil – deine Kunden dürfen nur über ihre Subdomain auf ihre Dashboards zugreifen, selbst wenn sie versuchen, sich über ihre benutzerdefinierten Domains anzumelden.

Und die Option **Allow access to the admin by both mapped domain domain and network domain** erlaubt ihnen, ihre Admin-Dashboards sowohl über die Subdomain als auch über die benutzerdefinierte Domain aufzurufen.

![Ausgeklapptes Admin Redirect-Dropdown mit den drei Weiterleitungsoptionen](/img/config/domain-mapping-redirect-options.png)

Es gibt zwei Möglichkeiten, eine benutzerdefinierte Domain zu mappen. Die erste besteht darin, den Domainnamen über dein Netzwerk-Admin-Dashboard als Super Admin zu mappen, und die zweite über das Admin-Dashboard der Subsite auf der Account-Seite.

Bevor du jedoch mit dem Mapping der benutzerdefinierten Domain auf eine der Subsites in deinem Netzwerk beginnst, musst du sicherstellen, dass die **DNS-Einstellungen** des Domainnamens korrekt konfiguriert sind.

###

### Sicherstellen, dass die DNS-Einstellungen der Domain korrekt konfiguriert sind

Damit ein Mapping funktioniert, musst du sicherstellen, dass die Domain, die du mappen möchtest, auf die IP-Adresse deines Netzwerks zeigt. Beachte, dass du die Netzwerk-IP-Adresse benötigst – die IP-Adresse der Domain, auf der Ultimate Multisite installiert ist – nicht die IP-Adresse der benutzerdefinierten Domain, die du mappen möchtest. Um die IP-Adresse einer bestimmten Domain zu suchen, empfehlen wir zum Beispiel [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Um die Domain korrekt zu mappen, musst du in deiner **DNS**-Konfiguration einen **A RECORD** hinzufügen, der auf diese **IP-Adresse** zeigt. Die DNS-Verwaltung unterscheidet sich stark zwischen verschiedenen Domain-Registraren, aber es gibt online viele Tutorials dazu, wenn du nach „ _Creating A Record on XXXX_ “ suchst, wobei XXXX dein Domain-Registrar ist (z. B.: „ _Creating A Record on_ _GoDaddy_ “).

Wenn du Schwierigkeiten hast, dies zum Laufen zu bringen, **kontaktiere den Support deines Domain-Registrars**, und er kann dir bei diesem Teil helfen.

Wenn du deinen Kunden erlauben möchtest, ihre eigenen Domains zu mappen, müssen sie diesen Teil selbst erledigen. Verweise sie an das Support-System ihres Registrars, wenn sie nicht in der Lage sind, den A Record zu erstellen.

### Benutzerdefinierten Domainnamen als Super Admin mappen

Wenn du in deinem Netzwerk als Super Admin angemeldet bist, kannst du benutzerdefinierte Domainnamen einfach hinzufügen und verwalten, indem du zu **Ultimate Multisite > Domains** gehst.

![Domains-Listenseite in Ultimate Multisite](/img/admin/domains-list.png)

Auf dieser Seite kannst du oben auf die Schaltfläche **Add Domain** klicken. Dadurch öffnet sich ein modales Fenster, in dem du den **benutzerdefinierten Domainnamen** und **die Subsite**, auf die du den benutzerdefinierten Domainnamen anwenden möchtest, festlegen und ausfüllen sowie entscheiden kannst, ob du ihn als **primären Domainnamen** festlegen möchtest oder nicht (beachte, dass du **mehrere Domainnamen einer Subsite zuordnen** kannst).

![Add Domain-Modal mit Domainname, Website-Auswahl und Umschalter für primäre Domain](/img/admin/domain-add-modal.png)

Nachdem du alle Informationen eingegeben hast, kannst du unten auf die Schaltfläche **Add Existing Domain** klicken.

Dadurch wird der Prozess zum Überprüfen und Abrufen der DNS-Informationen der benutzerdefinierten Domain gestartet. Unten auf der Seite siehst du außerdem ein Protokoll, mit dem du den laufenden Prozess verfolgen kannst. Dieser Vorgang kann einige Minuten dauern.

Ultimate Multisite v2.13.0 erstellt außerdem automatisch den internen Domain-Eintrag, wenn eine neue Website auf einem Host erstellt wird, der als Domain pro Website behandelt werden soll. Wenn der Host die primäre Domain des Netzwerks ist oder eine der gemeinsamen Checkout-Formular-Basisdomains, die in einem **Site URL**-Feld konfiguriert sind, wird der automatische mapped-domain-Eintrag übersprungen, damit diese gemeinsame Basisdomain für jede Website verfügbar bleibt, die sie verwendet.

Wenn ein Kunde eine neue Domain über Domain Seller v1.3.0 oder neuer registriert, ordnet Ultimate Multisite die registrierte Domain standardmäßig automatisch der Netzwerk-Website des Kunden zu. Administratoren müssen nach einer erfolgreichen Registrierung keinen separaten mapped-domain-Eintrag mehr hinzufügen, es sei denn, sie möchten Optionen wie die Primary-Domain-Markierung, den Aktivierungsstatus oder die SSL-Behandlung anpassen.

Die **Stage** oder der Status sollte von **Checking DNS** zu **Ready** wechseln, wenn alles korrekt eingerichtet ist.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Wenn du auf den Domainnamen klickst, kannst du darin einige Optionen sehen. Werfen wir einen kurzen Blick darauf:

![Domain-Detailseite mit Stage-, Website-, Aktiv-, Primär- und SSL-Umschaltern](/img/admin/domain-edit.png)

**Stage:** Dies ist die Stage, in der sich die Domain befindet. Wenn du die Domain zum ersten Mal hinzufügst, befindet sie sich wahrscheinlich in der **Checking DNS**-Stage. Der Prozess prüft die DNS-Einträge und bestätigt, dass sie korrekt sind. Danach wird die Domain in die **Checking SSL**-Stage versetzt. Ultimate Multisite prüft, ob die Domain SSL hat oder nicht, und kategorisiert deine Domain als **Ready** oder **Ready (without SSL)**.

**Site:** Die Subdomain, die mit dieser Domain verknüpft ist. Die zugeordnete Domain zeigt den Inhalt dieser bestimmten Website an.

**Active:** Du kannst diese Option ein- oder ausschalten, um die Domain zu aktivieren oder zu deaktivieren.

**Is Primary Domain?:** Deine Kunden können mehr als eine zugeordnete Domain für jede Website haben. Verwende diese Option, um auszuwählen, ob dies die primäre Domain für die bestimmte Website ist.

**Is Secure?:** Auch wenn Ultimate Multisite prüft, ob die Domain ein SSL-Zertifikat hat oder nicht, bevor sie aktiviert wird, kannst du manuell auswählen, ob die Domain mit oder ohne SSL-Zertifikat geladen werden soll. Beachte, dass es zu Fehlern kommen kann, wenn die Website kein SSL-Zertifikat hat und du versuchst, sie mit SSL zwangsweise zu laden.

### Benutzerdefinierten Domainnamen als Subsite-Benutzer zuordnen

Subsite-Administratoren können benutzerdefinierte Domainnamen auch über ihr Subsite-Admin-Dashboard zuordnen.

Zuerst musst du sicherstellen, dass du diese Option unter den Einstellungen für **Domain mapping** aktivierst. Siehe den Screenshot unten.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Du kannst diese Option auch auf **Plan**-Ebene oder in den Produktoptionen unter **Ultimate Multisite > Products** festlegen oder konfigurieren.

![Abschnitt „Custom Domains“ auf der Produktbearbeitungsseite](/img/config/product-custom-domains.png)

Wenn eine dieser Optionen aktiviert ist und ein Subsite-Benutzer benutzerdefinierte Domainnamen zuordnen darf, sollte der Subsite-Benutzer eine Metabox auf der **Account**-Seite mit dem Namen **Domains** sehen.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Der Benutzer kann auf die Schaltfläche **Add Domain** klicken, wodurch ein modales Fenster mit einigen Anweisungen geöffnet wird.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Der Benutzer kann dann auf **Next Step** klicken und fortfahren, den benutzerdefinierten Domainnamen hinzuzufügen. Er kann auch auswählen, ob dies die primäre Domain sein soll oder nicht.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ein Klick auf **Add Domain** startet den Prozess zur Überprüfung und zum Abrufen der DNS-Informationen der benutzerdefinierten Domain.

### Über Domain Syncing

Domain Syncing ist ein Prozess, bei dem Ultimate Multisite den benutzerdefinierten Domainnamen deinem Hosting-Account als Add-on-Domain hinzufügt, **damit das Domain-Mapping funktioniert**.

Domain Syncing erfolgt automatisch, wenn dein Hosting-Anbieter eine Integration mit der Domain-Mapping-Funktion von Ultimate Multisite hat. Derzeit sind diese Hosting-Anbieter _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ und _Cpanel._

Wenn eine Host-Provider-Integration aktiv ist, kann Ultimate Multisite auch die providerseitige DNS- oder Subdomain-Erstellungsaufgabe für neu erstellte Websites in die Warteschlange stellen. Wenn keine Integration auf diese Aufgabe hört, wird der Hintergrundjob übersprungen, um No-op-Warteschlangeneinträge zu vermeiden. DNS- und SSL-Prüfungen für zugeordnete Domains laufen weiterhin über den normalen Domain-Stage-Prozess.

Du musst diese Integration in den Ultimate Multisite-Einstellungen unter dem Tab **Integration** aktivieren.

![Integrations-Tab in den Ultimate Multisite-Einstellungen mit Hosting-Anbietern](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Beachte: Wenn dein Hosting-Anbieter nicht zu den oben genannten Anbietern gehört, **musst du den Domainnamen manuell synchronisieren oder hinzufügen** in deinem Hosting-Account._
