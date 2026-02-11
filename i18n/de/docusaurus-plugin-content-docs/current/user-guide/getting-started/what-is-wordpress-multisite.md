---
title: Was ist WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Was ist WordPress Multisite?

Im Kern bietet WordPress eine Funktion namens „Multisite“, die ihre Ursprünge bis zum Jahr 2010 beim Start von WordPress 3.0 zurückverfolgt. Seitdem hat sie mehrere Revisionen erhalten, die darauf abzielen, neue Funktionen einzuführen und die Sicherheit zu erhöhen.

Im Wesentlichen kann ein WordPress-Multisite wie folgt beschrieben werden: Eine Universität betreibt eine einzige WordPress-Installation, während jede Fakultät ihre eigene WordPress-Website verwaltet.

## 

## Was genau ist WordPress Multisite?

Multisite ist eine Funktion von WordPress, die es mehreren Websites ermöglicht, eine einzige WordPress-Installation zu teilen. Sobald Multisite aktiviert ist, wird die ursprüngliche WordPress-Website in ein **Netzwerk von Websites** umgewandelt.

Dieses Netzwerk teilt das Dateisystem (was bedeutet, dass **Plugins und Themes ebenfalls geteilt werden**), die Datenbank, die WordPress-Kerndateien, die wp-config.php usw.

Das bedeutet, dass WordPress-, Theme- und Plugin-Updates nur einmal für alle Ihre Netzwerk-Websites durchgeführt werden müssen, da sie dieselben Dateien im Dateisystem teilen.

Diese Tatsache ist einer der Hauptvorteile von Multisite, da sie es Ihnen ermöglicht, die Anzahl der von Ihnen verwalteten Websites zu erhöhen, während die Anzahl der Aufgaben, die Sie zur Wartung der Websites Ihrer Kunden durchführen müssen, gleich bleibt.

## 

## Subdomain oder Subverzeichnis?

Es gibt zwei Modi, WordPress Multisite auszuführen – und Sie müssen einen auswählen, wenn Sie Ihre reguläre WordPress-Installation in eine Multisite-Installation umwandeln:

**Subdomain:** ex.: [site.domain.com](http://site.domain.com)

…oder

**Subdirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Jeder Modus hat Vor- und Nachteile, die Sie bei dieser Entscheidung berücksichtigen müssen.

Eine wichtige Sache ist jedoch zu beachten: Sobald Sie Ihre Entscheidung getroffen haben, ist es wirklich schwierig, Ihr Netzwerk von Subverzeichnis zu Subdomain oder umgekehrt zu ändern – insbesondere wenn Sie bereits mehrere Websites erstellt haben.

Bevor Sie diese Entscheidung treffen, sollten Sie folgende Punkte beachten:

**Subdirectory-Modus** ist der einfachste Modus in Bezug auf Einrichtung und Wartung. Das liegt daran, dass alle Websites lediglich Pfade sind, die an die Hauptdomain angehängt sind (z. B. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Daher benötigen Sie nur **ein SSL-Zertifikat** für die Hauptdomain, das das gesamte Netzwerk abdeckt.

Gleichzeitig werden aufgrund seiner URL-Struktur Google und die meisten anderen Suchmaschinen alle Subsites Ihres subdirectory-basierten Netzwerks als eine riesige Website betrachten. Infolgedessen kann der von Ihren Endkunden hinzugefügte Inhalt die SEO-Leistung Ihrer Landing-Page beeinflussen, zum Beispiel. Der Grad der Auswirkung ist umstritten, und es gibt Argumente dafür, dass eine solche Anordnung sogar vorteilhaft für die SEO-Leistung sein kann.

**Subdomain-Modus** ist etwas komplexer einzurichten, aber seine URL-Struktur (z. B. [subsite.yournetwork.com](http://subsite.yournetwork.com)) wird im Allgemeinen als „professioneller“ wahrgenommen.

Eine der größten Herausforderungen bei der Einrichtung des Subdomain-Modus ist die SSL-Abdeckung (HTTPS) für das gesamte Netzwerk. Es kommt darauf an, dass Browser Subdomains als isolierte Einheiten betrachten. Daher benötigen Sie für jede Subdomain Ihres Netzwerks ein anderes SSL-Zertifikat oder ein spezielles Zertifikat namens **Wildcard-SSL-Zertifikat**. In den letzten Jahren haben Hosting-Anbieter und Panels ihre SSL-Bereitstellung verbessert, und einige bieten Wildcard-Zertifikate mit einem Klick an, wodurch die Lücke zwischen den beiden Modi in Bezug auf die Komplexität bei der Einrichtung geschlossen wird.

Im Gegensatz zum Subdirectory-Modus werden Subsites eines subdomain-basierten Netzwerks von Suchmaschinen als separate Websites betrachtet, was bedeutet, dass Inhalte auf einer Subsite die SEO-Leistung anderer Subsites überhaupt nicht beeinträchtigen.

## Der Super-Admin

Einzel-WordPress-Installationen ermöglichen es Ihnen, eine unbegrenzte Anzahl von Benutzern hinzuzufügen und diesen Benutzern unterschiedliche Rollen mit unterschiedlichen Berechtigungen zuzuweisen.

In WordPress Multisite wird ein neuer Benutzertyp freigeschaltet: **der Super-Admin** – und ein neues Admin-Panel wird freigeschaltet: **das Netzwerk-Admin-Panel**.

Wie der Name schon sagt, hat der Super-Admin Superkräfte über das Netzwerk und kann alle Subsites, Plugins, Themes und alles andere verwalten!

Sobald Sie Ihre Einzel-WordPress-Installation in Multisite umwandeln, wird der ursprüngliche Administrator der Einzel-Website automatisch zum Super-Admin aufgestuft.

Plugins und Themes können nur vom Netzwerk-Admin-Panel aus von Super-Admins installiert oder deinstalliert werden. Subsite-Administratoren können dann entscheiden, diese Plugins oder Themes zu aktivieren oder zu deaktivieren, es sei denn, der Super-Admin aktiviert ein Plugin im Netzwerk, was es zwingt, für alle Subsites jederzeit aktiv zu sein.

_Hinweis: Wie Sie sehen können, gibt das Einladen einer Person in Ihr Netzwerk und das Gewähren des Super-Admin-Status diesem Benutzer die volle Kontrolle über Ihr Netzwerk. Als Beispiel können andere Super-Admins sogar Ihren Super-Admin-Status entfernen, wodurch Sie effektiv aus Ihrem eigenen Netzwerk-Admin-Panel ausgesperrt werden. Um Ultimate Multisite-Kunden granularen Zugriff darauf zu geben, was zusätzliche Super-Admins tun können, haben wir ein Add-On namens Support Agents. Dieses Add-On ermöglicht es Ihnen, noch einen weiteren Benutzertyp – einen Agenten – zu erstellen, der nur die Berechtigungen hat, die er möglicherweise benötigt, um seine Aufgaben im Netzwerk auszuführen._

## Was zwischen Subsites geteilt wird und was nicht

Wie bereits erwähnt, ist einer der Hauptvorteile von WordPress Multisite, dass alle Subsites dieselben Konfigurationen, Kerndateien, Themes, Plugins, WordPress-Kerndateien usw. teilen.

Es gibt jedoch Elemente, die sauber auf Subsite-Basis abgegrenzt sind.

- Zum Beispiel erhält jede Subsite ihren eigenen Uploads-Ordner. Daher können Uploads, die von Benutzern einer bestimmten Subsite gemacht wurden, nicht auf einer anderen Subsite abgerufen werden.
- Jede Subsite hat ihr eigenes dediziertes Admin-Panel und kann Plugins oder Themes aktivieren oder deaktivieren, es sei denn, sie wurden von einem Super-Admin im Netzwerk aktiviert.
- Die meisten Datenbanktabellen werden für jede Subsite erstellt, was bedeutet, dass Beiträge, Kommentare, Seiten, Einstellungen und mehr für jede Subsite abgegrenzt sind.

## Benutzerverwaltung in WordPress Multisite

Ein sensibles Thema bei WordPress Multisite ist die Benutzerverwaltung. Die WordPress-Benutzertabelle ist eine der wenigen, die zwischen allen Subsites geteilt wird.

Diese Anordnung kann je nach dem, was Sie mit Ihrem Netzwerk bauen möchten, einige Probleme verursachen. Das folgende Beispiel veranschaulicht das dringendste Problem.

Stellen Sie sich folgendes Szenario vor:

Sie erstellen ein WordPress-Multisite-Netzwerk und beginnen, Subsites gegen eine monatliche Gebühr für Personen anzubieten, die einen E-Commerce-Shop betreiben möchten.

Sie erhalten Ihren ersten zahlenden Kunden – John. Sie erstellen eine Website für John in Ihrem Netzwerk, installieren alle notwendigen Plugins und erstellen anschließend einen Benutzer für John, damit er seinen Shop verwalten kann.

Dann kommt ein zweiter Kunde – Alice. Sie tun dasselbe für sie, und sie hat nun ebenfalls einen Shop in Ihrem Netzwerk.

John und Alice sind beide Ihre Kunden, aber sie kennen sich nicht. Noch wichtiger ist, dass, wenn einer von ihnen die Website des anderen Shops besucht, es keine Möglichkeit gibt zu erkennen, dass dieser Shop auf demselben Netzwerk von Websites gehostet wird.

Eines Tages muss John ein neues Paar Schuhe kaufen und findet die perfekten in Alice’s Shop. Wenn er versucht, den Kauf abzuschließen, erhält er eine Fehlermeldung „E-Mail bereits in Verwendung“, was seltsam ist, da John zu 100 % sicher ist, dass dies das erste Mal ist, dass er Alice’s Website besucht hat.

Was hier passiert ist, dass Johns Benutzerkonto über das gesamte Netzwerk geteilt wird, sodass WordPress erkennt, dass ein Benutzer mit derselben E-Mail-Adresse bereits existiert, und einen Fehler auslöst, wenn er versucht, ein Konto für den Kauf in Alice’s Shop zu erstellen.

_Hinweis: Wir erkennen, wie schlecht das je nach Anwendungsfall sein kann, daher bietet Ultimate Multisite eine Option, die die regulären Prüfungen für einen bestehenden Benutzer umgeht und die Erstellung mehrerer Konten mit derselben E-Mail-Adresse ermöglicht. Jedes Konto ist an eine Subsite gebunden, sodass das Risiko einer Kollision minimal bleibt. Im obigen Beispiel würde John keine Fehlermeldung erhalten und die Schuhe ohne Probleme kaufen können. Diese Option heißt Enable Multiple Accounts und kann in Ultimate Multisite → Settings → Login & Registration aktiviert werden._

Obwohl die Benutzertabelle geteilt wird, können Benutzer von Subsite-Administratoren oder dem Super-Admin zu Subsites hinzugefügt und daraus entfernt werden, und sie können sogar unterschiedliche Benutzerrollen auf verschiedenen Subsites haben.

## Leistungsüberlegungen

WordPress Multisite ist wirklich leistungsstark, wenn es um die Anzahl der Websites geht, die es unterstützen kann. Das lässt sich daran erkennen, dass [WordPress.com](https://WordPress.com), Edublogs und Campuspress alle auf Multisite basierende Dienste sind und jeweils Tausende von Websites hosten.

Obwohl es theoretisch keine maximale Anzahl von Websites gibt, die Sie auf einer einzigen WordPress-Multisite-Installation hosten können, variiert die Anzahl der Websites, die Sie zufriedenstellend betreiben können, stark je nach verschiedenen Faktoren: wie dynamisch die Websites sind, welche Plugins für Subsites verfügbar sind usw.

Als Faustregel gilt: Je einfacher Ihr Netzwerk ist, desto besser. Wenn Sie Websites bevorzugen, deren Inhalt nicht wirklich dynamisch ist (was sie zu großartigen Kandidaten für aggressive Caching-Strategien macht) und den Plugin-Stack so leicht wie möglich halten (je weniger aktive Plugins, desto besser), können Sie die Anzahl der Subsites, die Sie hosten können, drastisch erhöhen.

Das Beste daran ist, dass es hier alles WordPress ist, sodass die gleichen Tools, die Sie bereits für Leistungsverbesserungen kennen und lieben, auch für ein Multisite-Netzwerk funktionieren.

Der Hauptengpass für Multisite ist die Datenbank, aber wenn alles andere korrekt eingerichtet ist, können Sie mehrere tausend Websites betreiben, bevor Sie sich darum kümmern müssen. Selbst dann gibt es Lösungen, die zu diesem Zeitpunkt schrittweise hinzugefügt werden können (wie zum Beispiel Datenbank-Sharding-Lösungen).
