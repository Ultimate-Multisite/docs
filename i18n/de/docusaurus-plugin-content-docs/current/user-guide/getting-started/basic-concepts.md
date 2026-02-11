---
title: Grundlagen
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Grundlegende Konzepte

Für einen neuen WordPress Multisite-Benutzer und jemanden, der gerade mit Ultimate Multisite angefangen hat, kann es anfangs viele neue Wörter und Begriffe geben, die man aufnehmen muss. Sie zu lernen ist eine wichtige Aufgabe, weil Sie die Plattform und ihre Funktionsweise als Ganzes verstehen müssen.

In diesem Artikel werden wir versuchen, einige der wichtigsten Konzepte in WordPress zu definieren und zu erklären. Einige davon sind für Benutzer relevanter, andere für Entwickler und einige für beide.

## WordPress Multisite

WordPress **Multisite** ist eine Art von WordPress-Installation, die es Ihnen ermöglicht, ein Netzwerk mehrerer Websites von einem einzigen WordPress-Dashboard aus zu erstellen und zu verwalten. Sie können alles verwalten, einschließlich der Anzahl der Sites, Funktionen, Themes und Benutzerrollen. Es ist möglich, Hunderte und Tausende von Sites zu verwalten.

## Network

In Bezug auf WordPress ist ein Multisite-Netzwerk ein Ort, an dem mehrere **subsites** von einem einzigen Dashboard aus verwaltet werden können. Obwohl die Erstellung eines Multisite-Netzwerks je nach Hosting-Anbieter unterschiedlich ist, ist das Endergebnis in der Regel ein paar zusätzliche Direktiven in der **wp-config.php**-Datei, damit WordPress weiß, dass es in diesem speziellen Modus arbeitet.

Es gibt eine Reihe von Unterschieden zwischen einem Multisite-Netzwerk und einer eigenständigen WordPress-Installation, die wir kurz besprechen werden.

## Database

Eine Datenbank ist ein strukturiertes, organisiertes Datenset. In der Computerterminologie bezieht sich eine Datenbank auf Software, die zum Speichern und Organisieren von Daten verwendet wird. Stellen Sie sich das wie einen Aktenschrank vor, in dem Sie Daten in verschiedenen Abschnitten namens Tabellen speichern.

WordPress Multisite verwendet eine Datenbank und jede Subsite erhält ihre eigenen Tabellen mit der Blog-ID im Präfix, sodass Sie nach der Installation einer Netzwerkinstallation und dem Erstellen einer Subsite diese Tabellen haben sollten:

```
_wp_1_options_ \- options table for first subsite

_wp_2_options_ \- options table for second subsite
```

## Hosting provider

Ein Hosting-Anbieter ist ein Unternehmen, das Unternehmen und Privatpersonen ermöglicht, ihre Websites über das World Wide Web verfügbar zu machen. Die von Webhosting-Anbietern angebotenen Dienstleistungen können variieren, umfassen jedoch in der Regel Webdesign, Speicherplatz auf einem Host und Internetverbindung.

## Domain

Ein Domainname ist eine Adresse, die Menschen verwenden, um Ihre Website zu besuchen. Er sagt dem Webbrowser, wo er nach Ihrer Website suchen soll. Genau wie eine Straßenadresse ist eine Domain die Art und Weise, wie Menschen Ihre Website online besuchen. Und, wie ein Schild vor Ihrem Laden. Wenn Sie unsere Website besuchen möchten, müssen Sie unsere Webadresse in die Adressleiste Ihres Browsers eingeben, die lautet [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ wobei [**ultimatemultisite.com**](http://ultimatemultisite.com) der Domainname ist.

## Subdomain

Eine Subdomain ist eine Art von Website-Hierarchie unter der Hauptdomain, aber anstatt Ordner zu verwenden, um Inhalte auf einer Website zu organisieren, bekommt sie irgendwie ihre eigene Website. Sie wird dargestellt als [**https://site1.domain.com/**](https://site1.domain.com/) wobei _site1_ der Subdomain-Name und [_domain.com_](http://domain.com) die Hauptdomain ist.

## Subdirectory

Ein Unterverzeichnis ist eine Art von Website-Hierarchie unter einer Root-Domain, die Ordner verwendet, um Inhalte auf einer Website zu organisieren. Ein Unterverzeichnis ist dasselbe wie ein Unterordner und die Namen können austauschbar verwendet werden. Es wird dargestellt als [**https://domain.com/site1**](https://domain.com/site1) wobei _site1_ der Unterverzeichnisname und [_domain.com_](http://domain.com) die Hauptdomain ist.

## Subsite

Eine Subsite ist eine Kind-Website, die Sie in einem Multisite-Netzwerk erstellen. Sie kann entweder eine **subdomain** oder ein **subdirectory** sein, je nachdem, wie Ihre WordPress Multisite-Installation konfiguriert ist.

## Super Admin

Ein WordPress Super Admin ist eine Benutzerrolle mit vollen Befugnissen, um alle Subsiten in einem Multisite-Netzwerk zu verwalten. Für Multisite-Benutzer ist es das **höchste Zugriffslevel**, das Sie Ihrer WordPress-Installation gewähren können.

## Plugin

Im Allgemeinen ist ein Plugin ein Satz von Code, der Ihrer WordPress-Website zusätzliche Funktionalität hinzufügt. Das kann so einfach sein wie das Ändern des Login-Logos oder so komplex wie das Hinzufügen von E-Commerce-Funktionalität. _Woocommerce und Contact Form_ sind Beispiele für ein Plugin.

In einer WordPress Multisite können Plugins nur vom Netzwerk-Admin-Dashboard aus von Super Admin installiert werden. Subsite-Admins können Plugins nur innerhalb ihrer Subsite aktivieren und deaktivieren.

## Themes

Ein WordPress-Theme ist eine Gruppe von Dateien (_Grafiken, Stylesheets und Code_), die das Gesamterscheinungsbild der Website bestimmt. Es liefert alle Frontend-Stilierungen wie Schriftgestaltung, Seitenlayout, Farben usw.

Wie bei Plugins können Themes in WordPress Multisite nur von Super Admin installiert werden und können auf Subsite-Ebene von Subsite-Admins aktiviert werden.

## Site Template

**Site Template** ist eine Boilerplate-Website, die als Basis beim Erstellen neuer Websites in Ihrem Netzwerk verwendet werden kann.

Das bedeutet, Sie können eine Basis-Website erstellen, verschiedene Plugins aktivieren, ein aktives Theme festlegen und es nach Belieben anpassen. Dann, wenn Ihr Kunde ein neues Konto erstellt, erhält er anstelle einer Standard-WordPress-Website ohne sinnvollen Inhalt darin eine Kopie Ihrer Basis-Website mit allen Anpassungen und Inhalten bereits vorhanden.

## Domain Mapping

**Domain mapping** mit WordPress ist eine Möglichkeit, Benutzer über die Adresse einer Website zum richtigen Host umzuleiten. In einer WordPress Multisite werden Subsiten entweder mit einem Unterverzeichnis oder einer Subdomain erstellt. Domain Mapping ermöglicht es Subsite-Benutzern, eine Top-Level-Domain wie [**joesbikeshop.com**](http://joesbikeshop.com) zu verwenden, damit ihre Site-Adresse professioneller wirkt.

## SSL

SSL steht für **Secure Sockets Layer**. Es ist ein digitales Zertifikat, das die Identität einer Website authentifiziert und eine verschlüsselte Verbindung ermöglicht. Heutzutage wird es als Standardtechnologie verwendet, um eine Internetverbindung sicher zu halten und sensible Daten, die zwischen zwei Systemen übertragen werden, zu schützen, sodass Kriminelle keine Informationen lesen oder ändern können, einschließlich potenzieller persönlicher Details. Moderne Browser erfordern SSL, was es bei der Erstellung und dem Betrieb einer Website unerlässlich macht.

## Media

Medien sind Bilder, Audio, Video und andere Dateien, die eine Website ausmachen.

Netzwerk-Sites teilen eine einzige Datenbank in einer WordPress Multisite, sie behalten separate Pfade im Dateisystem für Mediendateien bei.

Der Standard-WordPress-Standort (wp-content/uploads) bleibt erhalten; jedoch wird sein Pfad geändert, um die eindeutige ID der Netzwerk-Site widerzuspiegeln. Folglich erscheinen Mediendateien für eine Netzwerk-Site als wp-contents/uploads/site/[id].

## Permalinks

Permalinks sind die dauerhaften URLs Ihres einzelnen Blogposts oder Ihrer Seite innerhalb Ihrer Website. Permalinks werden auch als **pretty links** bezeichnet. Standardmäßig verwenden WordPress-URLs das Abfragezeichenformat, das ungefähr so aussieht:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite ist ein WordPress-Plugin, das für WordPress Multisite-Installationen entwickelt wurde und Ihre WordPress-Installation in ein Premium-Netzwerk von Websites verwandelt – ähnlich wie [WordPress.com](https://WordPress.com) – und es Kunden ermöglicht, Websites über monatliche, vierteljährliche oder jährliche Gebühren zu erstellen (Sie können auch kostenlose Pläne erstellen).

## Checkout Form

Checkout Form ist ein ein- oder mehrstufiges Bestellformular, das die Erstellung von Subsite, Mitgliedschaft und Benutzerkonten über die Ultimate Multisite-Registrierung beinhaltet. Es besteht aus verschiedenen Feldern und Zahlungsformularen, die ein Benutzer während des Anmeldevorgangs einreichen muss.

## Webhook

Ein Webhook (auch Web-Callback oder HTTP-Push-API genannt) ist eine Möglichkeit für eine App, anderen Anwendungen Echtzeitinformationen bereitzustellen. Ein Webhook liefert Daten an andere Anwendungen, sobald sie eintreffen, was bedeutet, dass Sie Daten sofort erhalten.

**Ultimate Multisite webhooks** eröffnen unendliche Möglichkeiten, Netzwerk-Admins ermöglichen es, allerlei verrückte, aber nützliche Integrationen durchzuführen, insbesondere wenn sie in Verbindung mit Diensten wie _Zapier und IFTTT_ verwendet werden.

## Events

Ein Event ist eine Aktion, die als Ergebnis einer Benutzer- oder einer anderen Quellaktion, wie z. B. einem Mausklick, auftritt. Ultimate Multisite protokolliert alle Ereignisse und Protokolle, die innerhalb Ihres gesamten Netzwerks stattfinden. Es verfolgt verschiedene Aktivitäten, die in Ihrer Multisite stattfinden, wie z. B. Planänderungen.
