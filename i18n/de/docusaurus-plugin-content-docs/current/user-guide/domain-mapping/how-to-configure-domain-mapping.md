---
title: So konfigurieren Sie Domain‑Mapping
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# Wie man Domain Mapping (v2) konfiguriert

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Eine der mächtigsten Funktionen eines Premium-Netzwerks ist die Möglichkeit, unseren Kunden die Chance zu geben, eine Top-Level-Domain an ihre Sites anzuhängen. Schließlich, welche sieht professioneller aus: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) oder [_**joesbikeshop.com**_](http://joesbikeshop.com)? Deshalb bietet Ultimate Multisite diese Funktion bereits integriert, ohne dass Drittanbieter-Plugins benötigt werden.

## Was ist Domain Mapping?

Wie der Name schon sagt, ist Domain Mapping die Fähigkeit, die von Ultimate Multisite angeboten wird, eine Anfrage für eine benutzerdefinierte Domain entgegenzunehmen und diese Anfrage der entsprechenden Site im Netzwerk mit dieser spezifischen Domain zuzuordnen.

### Wie man Domain Mapping auf Ihrem Ultimate Multisite Netzwerk einrichtet

Domain Mapping erfordert einige Einstellungen von Ihrer Seite, damit es funktioniert. Glücklicherweise automatisiert Ultimate Multisite die harte Arbeit für Sie, sodass Sie die Anforderungen leicht erfüllen können.

Während der Installation von Ultimate Multisite wird der Assistent automatisch die Datei **sunrise.php** in den vorgesehenen Ordner kopieren und installieren. **Der Assistent erlaubt es Ihnen nicht, fortzufahren, bis dieser Schritt abgeschlossen ist**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zrBdFs13Dy.png)

Das bedeutet, dass Sie, sobald der Ultimate Multisite Installationsassistent die Einrichtung Ihres Netzwerks abgeschlossen hat, sofort mit dem Mapping der benutzerdefinierten Domain beginnen können.

Beachten Sie, dass Domain Mapping in Ultimate Multisite nicht zwingend erforderlich ist. Sie haben die Möglichkeit, die native Domain Mapping-Funktion von WordPress Multisite oder eine andere Domain Mapping-Lösung zu verwenden.

Falls Sie das Domain Mapping von Ultimate Multisite deaktivieren müssen, um anderen Domain Mapping-Lösungen den Vorrang zu geben, können Sie diese Funktion unter **Ultimate Multisite > Settings > Domain Mapping** deaktivieren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbrC47pTcX.png)

Direkt unter dieser Option finden Sie auch die Option **Force Admin Redirect**. Diese Option ermöglicht es Ihnen zu steuern, ob Ihre Kunden ihr Admin-Dashboard sowohl auf ihrer benutzerdefinierten Domain als auch auf ihrer Subdomain oder nur auf einer davon aufrufen können.

Wenn Sie **Force redirect to mapped domain** auswählen, können Ihre Kunden ihr Admin-Dashboard nur auf ihrer benutzerdefinierten Domain aufrufen.

Die Option **Force redirect to** **network domain** macht genau das Gegenteil – Ihre Kunden dürfen ihre Dashboards nur auf ihrer Subdomain aufrufen, selbst wenn sie versuchen, sich auf ihren benutzerdefinierten Domains anzumelden.

Und die Option **Allow access to the admin by both mapped domain domain and network domain** ermöglicht es ihnen, ihre Admin-Dashboards sowohl auf der Subdomain als auch auf der benutzerdefinierten Domain aufzurufen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JYwHPWhYwV.png)

Es gibt zwei Möglichkeiten, eine benutzerdefinierte Domain zu mappen. Die erste besteht darin, den Domainnamen über das Netzwerk-Admin-Dashboard als Super-Admin zu mappen, und die zweite erfolgt über das Unterseiten-Admin-Dashboard unter der Kontoseite.

Bevor Sie jedoch die benutzerdefinierte Domain einer der Unterseiten in Ihrem Netzwerk zuweisen, müssen Sie sicherstellen, dass die **DNS-Einstellungen** des Domainnamens korrekt konfiguriert sind.

### 

### Sicherstellen, dass die Domain-DNS-Einstellungen korrekt konfiguriert sind

Damit ein Mapping funktioniert, müssen Sie sicherstellen, dass die Domain, die Sie mappen möchten, auf die IP-Adresse Ihres Netzwerks zeigt. Beachten Sie, dass Sie die IP-Adresse des Netzwerks benötigen – die IP-Adresse der Domain, auf der Ultimate Multisite installiert ist – und nicht die IP-Adresse der benutzerdefinierten Domain, die Sie mappen möchten. Um die IP-Adresse einer bestimmten Domain zu ermitteln, empfehlen wir zum Beispiel die Seite [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Um die Domain korrekt zu mappen, müssen Sie einen **A RECORD** in Ihrer **DNS**-Konfiguration hinzufügen, der auf diese **IP-Adresse** zeigt. Die DNS-Verwaltung variiert stark zwischen verschiedenen Domain-Registraren, aber es gibt zahlreiche Tutorials online, die das abdecken, wenn Sie nach „_Creating A Record on XXXX_“ suchen, wobei XXXX Ihr Domain-Registrar ist (z. B. „_Creating A Record on_ _GoDaddy_ “).

Wenn Sie Schwierigkeiten haben, dies zum Laufen zu bringen, **kontaktieren Sie den Support Ihres Domain-Registrars** und dieser kann Ihnen bei diesem Teil helfen.

Wenn Sie Ihren Kunden erlauben, ihre eigenen Domains zu mappen, müssen sie diesen Teil selbst erledigen. Verweisen Sie sie auf das Support-System ihres Registrars, falls sie nicht in der Lage sind, den A Record zu erstellen.

### Mapping einer benutzerdefinierten Domain als Super-Admin

Wenn Sie als Super-Admin in Ihrem Netzwerk angemeldet sind, können Sie benutzerdefinierte Domainnamen einfach hinzufügen und verwalten, indem Sie zu **Ultimate Multisite > Domains** gehen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5XxtXP622s.png)

Unter dieser Seite können Sie oben auf die Schaltfläche **Add Domain** klicken, und es öffnet sich ein Modal-Fenster, in dem Sie den **custom domain name**, die **Unterseite**, auf die Sie die benutzerdefinierte Domain anwenden möchten, und entscheiden können, ob Sie sie als **primary domain** festlegen möchten oder nicht (beachten Sie, dass Sie **mehrere Domainnamen einer Unterseite** zuordnen können).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rD6fnbzRe9.png)

Nachdem Sie alle Informationen eingegeben haben, können Sie unten auf die Schaltfläche **Add Existing Domain** klicken.

Dies startet den Prozess der Überprüfung und des Abrufs der DNS-Informationen der benutzerdefinierten Domain. Sie sehen auch unten auf der Seite ein Protokoll, damit Sie dem Prozess folgen können. Dieser Prozess kann einige Minuten dauern.

Die **Stage** oder der Status sollte sich von **Checking DNS** zu **Ready** ändern, wenn alles korrekt eingerichtet ist.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3g2mkrlk75we98uhscagnr3ini0s)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5dIPdYQfZi.png)

Wenn Sie auf den Domainnamen klicken, können Sie einige Optionen darin sehen. Werfen wir einen kurzen Blick darauf:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5tCiNUIKih.png)

**Stage:** Dies ist die Phase, in der sich die Domain befindet. Wenn Sie die Domain zum ersten Mal hinzufügen, befindet sie sich wahrscheinlich in der Phase **Checking DNS**. Der Prozess prüft die DNS-Einträge und bestätigt, dass sie korrekt sind. Anschließend wird die Domain in die Phase **Checking SSL** überführt. Ultimate Multisite prüft, ob die Domain SSL hat oder nicht, und kategorisiert Ihre Domain als **Ready** oder **Ready (without SSL)**.

**Site:** Die Subdomain, die mit dieser Domain verknüpft ist. Die gemappte Domain zeigt den Inhalt dieser spezifischen Site.

**Active:** Sie können diese Option ein- oder ausschalten, um die Domain zu aktivieren oder zu deaktivieren.

**Is Primary Domain?:** Ihre Kunden können mehr als eine gemappte Domain für jede Site haben. Verwenden Sie diese Option, um auszuwählen, ob dies die primäre Domain für die spezifische Site ist.

**Is Secure?:** Obwohl Ultimate Multisite prüft, ob die Domain ein SSL-Zertifikat hat oder nicht, bevor es aktiviert wird, können Sie manuell auswählen, ob die Domain mit oder ohne SSL-Zertifikat geladen werden soll. Beachten Sie, dass die Website ohne SSL-Zertifikat Fehler erzeugen kann, wenn Sie versuchen, sie mit SSL zu laden.

### Mapping einer benutzerdefinierten Domain als Unterseiten-Benutzer

Unterseiten-Administratoren können ebenfalls benutzerdefinierte Domainnamen von ihrem Unterseiten-Admin-Dashboard aus mappen.

Zuerst müssen Sie sicherstellen, dass Sie diese Option in den **Domain mapping**-Einstellungen aktivieren. Sehen Sie sich das untenstehende Screenshot an.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M3MO6RKBWe.png)

Sie können diese Option auch auf der **Plan**-Ebene oder in den Produktoptionen unter **Ultimate Multisite > Products** festlegen oder konfigurieren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JRqx7Uhqsa.png)

Wenn eine dieser Optionen aktiviert ist und ein Unterseiten-Benutzer das Mapping von benutzerdefinierten Domainnamen erlaubt ist, sollte der Unterseiten-Benutzer ein Metabox unter der **Account**-Seite namens **Domains** sehen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DUeHUY66yP.png)

Der Benutzer kann auf die Schaltfläche **Add Domain** klicken, und es öffnet sich ein Modal-Fenster mit einigen Anweisungen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-n5mNhDpL38.png)

Der Benutzer kann dann auf **Next Step** klicken und fortfahren, die benutzerdefinierte Domain hinzuzufügen. Er kann auch wählen, ob dies die primäre Domain sein soll oder nicht.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0vlbs2dcaz.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zez2zeiqz8mi67o7izkg3d7x43ve)Klicken Sie auf **Add Domain**, um den Prozess der Überprüfung und des Abrufs der DNS-Informationen der benutzerdefinierten Domain zu starten.

### Über Domain Syncing

Domain Syncing ist ein Prozess, bei dem Ultimate Multisite den benutzerdefinierten Domainnamen zu Ihrem Hosting-Konto als Add-on-Domain **für das Funktionieren des Domain Mappings** hinzufügt.

Domain Syncing geschieht automatisch, wenn Ihr Hosting-Provider eine Integration mit der Domain Mapping-Funktion von Ultimate Multisite hat. Derzeit sind diese Hosting-Provider _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ und _Cpanel_.

Sie müssen diese Integration in den Ultimate Multisite-Einstellungen unter dem **Integration**-Tab aktivieren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-k6i46r4x2yddii0op4x343jizq20)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JMADuxaH62.png)

_Beachten Sie, dass, wenn Ihr Hosting-Provider nicht einer der oben genannten Provider ist, **müssen Sie die Domain manuell synchronisieren oder dem Hosting-Konto hinzufügen**._
