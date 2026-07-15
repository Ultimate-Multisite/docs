---
title: Was isch WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Was isch WordPress Multisite?

Im Kern bietet WordPress e Funktione, wo mer „Multisite“ nennt, wo sini Ursprüng i 2010 mit em Start vo WordPress 3.0 aafangt hät. Sit dänn het er mehri Änderige übercho, um neui Funktione z'introduziere und d'Sicherheit z'verbessere.

Im Wesentliche chann mer sich en WordPress Multisite so vorstelle: E Universität pflegt e einzigi Installation vo WordPress, aber jede Fakultät pflegt sini eigeti WordPress-Site.

##

## Was isch genau WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite isch e Funktione vo WordPress, wo es mehri Sites erlaubt, e einzigi WordPress-Installation z'teile. Wenn multisite aktiviert isch, wird d'ursprünglichi WordPress-Site umgwandelt, um e so öppis z'unterstütze, wo mer üblicherweise als **Netzwerk vo Sites** bezeichnet.

Sies Netzwerk teilt s'Dateisystem (was bedütet au **Plugins und Themes werdet gteilt**), d'Datenbank, d'WordPress-Kerndateie, de wp-config.php usw.

Das heisst, WordPress-, Theme- und Plugin-Updates müend nur einisch für alli Sites im Netzwerk gmacht werde, will sie di gliiche Dateie uf em Dateisystem teile.

Das isch en vo de Hauptvorteil vom Multisite, will mer d'Anzahl vo de Sites, wo mer verwaltet chönne wachse laht, ohni dass d'Anzahl vo de Ufgabe blibt, wo mer müend mache, um d'Sites vo üsne Kunde z'pflege.

##

## Subdomain oder Unterverzeichniss? {#subdomain-or-subdirectory}

Es git zwei Modi zum Betrieb vo WordPress Multisite – und du muesch eis wähle, wenn du dini reguläri WordPress-Installation in en Multisite-Installation umwandelst:

**Subdomain:** z.B.: [site.domain.com](http://site.domain.com)

…oder

**Unterverzeichnis (Subdirectory):** z.B.: [yourdomain.com/site](http://yourdomain.com/site)

Jeder Mod het Vor- und Nachteil, wo du dir überlege muesch, wenn du die Entscheidig triffst.

Eins wichtigi Sach isch: sobald Sie sich für e Entscheidig gmacht händ, isch s'Ändere vo Ihrer Netzwerkstruktur vo Unterverzeichnis uf Subdomain oder umgekehrt wirklich schwierig – bsunders, wenn Sie scho en Haufn Site erstellt händ.

Bevor Sie die Entscheidig treffe, hie sind es paar Pünkt, wo Sie im Auge behalte sölled:

**Subdirectory Mode** isch de einfachsti Modus i Bezug uf Irichtig und Wartig. Das passiert will alli Sites eifach Pfade sind, wo a d'Hauptdomäne aaghängt sind (z.B. [ihredomain.com/subsite](http://ihredomain.com/subsite)). Als Resultat bruche Sie nur **e SSL-Zertifikat** für d'Hauptdomäne und das deckt s'ganze Netzwerk ab.

Gleichzeitig wird wäge de URL-Struktur Google und die meiste andere Suchmaschine alli Subsites vo Ihrem Unterverzeichnis-Netzwerk als ei riesigi Site betrachte. Als Resultat chönnte Inhälte, wo Ihre Endkunde uf de Subsites dezuefüegt händ, d'SEO-Leistig Ihrer Landing Page beeinflusse, zum Bischpil. D'Grössi vo dem Uswirkig isch umstrittig und es git Argumente, dass so e Ufbau sogar guet für d'SEO-Leistig sii chan.

**Subdomain Mode** isch chli komplizierter i de Irichtig, aber sini URL-Struktur (z.B. [subsite.ihrednetwork.com](http://subsite.ihrednetwork.com)) wird allgemein als "professioneller" empfunde.

Eines vo de wichtigste Usforderige bi de Irichtigig vom subdomain mode isch d'SSL-Abdeckig (HTTPS) für s'ganze Netz. Das chunnt druf ah, dass Browser Subdomains als isolierti Entitäte betrachted. Als Resultat bruche Sie en andere SSL-Zertifikat für jede Subdomain uf Ihrem Netz, oder e spezielli Art vo Zertifikat gnännt **Wildcard SSL certificate**. In de letschte Joahr verbessered Hosting-Provider und Panels ihr Angebot bi de SSL-Bereitstellig, und einige bi eme Klick uf en Knopf bietid Wildcard-Zertifikate a, was d'Lücke zwüsche de zwei Modi i Bezug uf d'Komplexität bi de Irichtigig schliesst.

Im Gegensatz zum subdirectory mode werded Subsites uf eme subdomain-basierten Netz vo Suchmaschine als separati Websites betrachtet, was bedütet, dass Inhalt, wo uf eme Subsite isch, keis Problem mit de SEO-Leistig vo andere Subsites het.

## De Super Admin {#the-super-admin}

Single-site WordPress Installatione erlaubed Ihne, unbegrenzt Benutzer z'füege und dene unterschiedlechi User Roles mit unterschiedliche Berechtigunge z'gäbe.

Bi WordPress Multisite wird en nöie Typ vo Benutzer freigschaltet: **de super admin** – und es nöis Admin-Panel wird freigschaltet: **s Netzwerk-Admin-Panel**.

Wie de Name scho seit, het de Super Admin über s'Netz Übermacht, will er alles verwalte cha: alli Subsites, Plugins, Themes, alles!

Sobald Sie Ihre Single-site WordPress Installation in Multisite umwandled, wird de ursprüngliche Admin vom Single Site automatisch zum Super Admin ufgrüschted.

Plugins und Themes chönned nur vo de Netzwerk-Admin-Panel dur Super Admins installiert oder deinstalliert werde. Subsite-Admins chönned denn wähle, ob sie die Plugins oder Themes aktiviere oder deaktiviere wend, es sei denn, de Super Admin vom Netz aktiviert en Plugin, was es für alli Subsites immer aktiv macht.

_Note: Wie Sie sehen, gibt Ihnen die Einladung einer Person in Ihr Netzwerk und die Erteilung von Super Admin-Status dieser Benutzer die volle Kontrolle über Ihr Netzwerk. Als Beispiel können andere Super Admins Ihren Super Admin-Status entfernen und Sie damit effektiv vom Administrationspanel Ihres eigenen Netzwerks ausschließen. Um Ultimate Multisite Kunden die Möglichkeit zu geben, eine detaillierte Kontrolle darüber zu haben, was zusätzliche Super Admins tun dürfen, haben wir ein Add-on namens Support Agents. Dieses Add-on ermöglicht es Ihnen, eine weitere Art von Benutzer – einen Agenten – mit nur den Berechtigungen zu erstellen, die er für die Ausführung seiner Aufgaben im Netzwerk benötigt._

## Was zwischen Subsites geteilt wird und was nicht {#what-is-shared-among-subsites-and-what-is-not}

Wie wir schon erwähnt haben, einer der Hauptvorteile von WordPress Multisite ist, dass alle Subsites dieselben Konfigurationen, Kerndateien, Themes, Plugins, WordPress-Kerndateien usw. teilen.

Es gibt jedoch Elemente, die auf Basis jeder einzelnen Subsite gut begrenzt sind.

\- Zum Beispiel erhält jede Subsite ihren eigenen Uploads-Ordner. Als Ergebnis können Uploads, die von Benutzern einer bestimmten Subsite gemacht wurden, nicht auf einer anderen Subsite aufgerufen werden.

\- Jede Subsite hat ihr eigenes dediziertes Admin-Panel und kann Plugins oder Themes aktivieren oder deaktivieren, es sei denn, sie sind vom Netzwerk durch einen Super Admin aktiviert worden.

\- Die meisten Datenbanktabellen werden für jede Subsite erstellt, was bedeutet, dass Beiträge, Kommentare, Seiten, Einstellungen usw. für jede Subsite begrenzt sind.

## Benutzerverwaltung in WordPress Multisite {#user-management-on-wordpress-multisite}

Ein heikles Thema bei WordPress Multisite ist die Benutzerverwaltung. Die WordPress-Benutzer-Tabelle ist eine von wenigen Tabellen, die zwischen allen Subsites geteilt werden.

Diese Anordnung kann je nachdem, was Sie mit Ihrem Netzwerk aufbauen möchten, einige Probleme verursachen. Das folgende Beispiel hilft, das dringendste Problem zu verdeutlichen.

Stellen Sie sich folgendes Szenario vor:

Sie erstellt es sich e WordPress multisite-Netzwerk und bietet Subsites für eine monatliche Gebühr an, damit Leute einen E-Commerce-Shop haben können.

Du bekommst deinen ersten zahlenden Kunden – John. Du erstellst eine Seite für John in deinem Netzwerk, installierst alle notwendigen Plugins und erstellst dann einen Benutzer für John, damit dieser seinen Shop verwalten kann.

Dann kommt ein zweiter Kunde – Alice. Du machst dasselbe für sie und jetzt hat sie auch einen Shop in deinem Netzwerk.

John und Alice sind beide deine Kunden, aber sie kennen sich nicht. Noch wichtiger ist: Wenn einer von ihnen die Website des anderen besucht, gibt es keine Möglichkeit herauszufinden, dass dieser Shop auf demselben Netzwerk von Seiten gehostet wird.

Eines Tages braucht John ein neues Paar Schuhe und findet genau das Richtige in Alices Shop. Als er versucht, den Kauf abzuschließen, bekommt er eine Fehlermeldung „E-Mail bereits in Gebrauch“, was seltsam ist, da John hundertprozentig sicher ist, dass dies das erste Mal ist, dass er die Website von Alice besucht.

Was hier passiert ist: Johns Benutzer wird über das gesamte Netzwerk geteilt. Wenn er versucht, ein Konto zu erstellen, um auf Alices Seite abzuschließen, erkennt WordPress, dass bereits ein Benutzer mit derselben E-Mail-Adresse existiert, und wirft einen Fehler aus.

_Hinweis: Wir wissen, wie schlimm das sein kann, je nach Anwendungsfall. Deshalb hat Ultimate Multisite eine Option, die die normalen Prüfungen auf einen bestehenden Benutzer umgeht und es ermöglicht, mehrere Konten mit derselben E-Mail-Adresse zu erstellen. Jedes Konto ist an eine Subsite gebunden, sodass das Risiko einer Kollision auf ein Minimum reduziert wird. Im obigen Beispiel würde John keine Fehlermeldung erhalten und könnte die Schuhe ohne Probleme kaufen. Diese Option heißt „Enable Multiple Accounts“ (Mehrere Konten aktivieren) und kann unter Ultimate Multisite → Settings → Login & Registration aktiviert werden._

Obwohl d'Benutzer-Tabelle gmeint isch, dass Benutzer mit allen Subsites teilt sind, chönne Subsite-Admins oder de Super Admin Benutzer zu und vo Subsites hinzufüge oder entferne, und sie chönne sogar unterschiedlechi Benutzerrolle uf verschiedene Subsites ha.

## Performance-Überlegige {#performance-considerations}

WordPress multisite isch würkli starch, wenn's drum gaht, wie vill Sites es unterstütze cha. Das chan mer teste, will [WordPress.com](https://WordPress.com), Edublogs und Campuspress alli Multisite-basierte Dienst sind und jede Host Tausendi vo Sites het.

Obwohl theoretisch kei maximali Anzahl vo Sites git, wo mer uf ere einzelne WordPress multisite Installation hoste cha, variiert d'praktischi Anzahl vo Sites, wo mer zufriedenstellend laufe chann, stark abhängig vo verschidene Faktore: wie dynamisch d'Sites sind, welchi Plugins für Subsites verfügbar sind usw.

Als Faustregel isch es besser, wenn s'Netzwerk einfacher isch. Wenn mer Sites bevorzugt, wo de Inhalt nöd wirklich dynamisch isch (was sie zu guete Kandidäte für aggressivi Caching-Strategie macht) und de Plugin-Stack so leicht wie möglich halt (je weniger aktivi Plugins, desto besser), chan mer d'Anzahl vo Subsites, wo mer hoste chönne, drastisch erhöhe.

S'Beschte isch, dass es do alles WordPress isch, also werde di gliiche Tools, wo mer scho kenned und liebed für Performance-Verbesserige, au für es multisite Netzwerk funktioniere.

De Hauptengpass bi Multisite isch d'Datenbank, aber wenn alli anderi Sache richtig igstellt sind, brucht mer e paar Tausend Sites, bevor mer uns Sorge mache müesse. Sogar denn git's Lösige, wo mer Schritt für Schritt dezuefüege cha (wie zum Bischpil Datenbank-Sharding-Lösige).
