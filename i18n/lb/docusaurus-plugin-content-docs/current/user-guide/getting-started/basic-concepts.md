---
title: Basiskonzept
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Grundlegendi Konzepte {#basic-concepts}

Für en neue WordPress Multisite-User und jemanden, der gerade anfängt mit Ultimate Multisite, git es am Anfang viele neui Wörter und Ausdrücke. Es isch wichtig, die z'lerne, will du d'Plattform und wie sie als Ganzes funktioniert, verstah muesch.

In dem Artikel versuechemer, einigi vo de wichtige Konzepte in WordPress z'definierä und z'erkläre. E paar sind für User relevanter, anderi für Entwickler, und e paar für beidi.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** isch en Art WordPress-Installation, wo dir erlaubt, es Netz vo meh Website vo einere einzige WordPress-Dashboard z'erstelle und z'verwalte. Du chasch alles verwalte, inklusive de Anzahl vo de Sites, Features, Themes und User Roles. Es isch möglich, hunderte und Tausendi vo Sites z'verwalte.

## Netzwerk (Network) {#network}

Im Bezug uf WordPress isch es Multisite-Netzwerk en Ort, wo mehri **Subsites** vo einere einzige Dashboard verwalte chönd. Obwohl d'Erstellig vo eme Multisite-Netzwerk bi de Hosting-Provider unterschiedlich isch, isch s'Endresultat meistens e paar zusätzlechi Richtlinie i de Datei **wp-config.php**, damit WordPress weiss, dass es in dem spezielle Modus lauft.

Es git en paar deutlechi Unterschid zwüsche eme Multisite-Netzwerk und ere eigenständige WordPress-Installation, wo mir kurz bespräche wend.

## Datenbank (Database) {#database}

E Datenbank isch e strukturierti, organisierte Sammlig vo Date. Im Computerbegriff beziäht sich en Datenbank uf Software, wo brucht wird, um Date z'speichere und z'organisiere. Stell dir das vor wie es Aktenschrank, wo du Date in verschidene Abteilige nimmst, wo Table gnannt sind.

WordPress Multisite brucht e einzigi Datenbank, und jede Subsite überchunnt sini eigeti Tables mit de blog id im Präfix, also sobald du en Netzwerk-Installation installiersch und en Subsite erstellsch, söttisch du die Tables ha:

_wp_1_options_ \- options table für d'ersten Unterseite

_wp_2_options_ \- options table für d'zweite Unterseite

## Hosting-anbieter {#hosting-provider}

E Hosting-anbieter isch e Firma, wo Gschäft und Persone ermögliche, ihri Websites über s'World Wide Web verfügbar z'mache. D'Dienstleistige, wo Webhosting-Anbieter aabietet, variiere, aber beinhalte üblicherweise Websitedesign, Speicherplatz uf em Host und Verbindig zum Internet.

## Domain {#domain}

E Domainname isch e Adress, wo Lüüt bruche, um zu Ihrer Site z'besuche. Er seit em Webbrowser, wo er Ihre Site sueche soll. Genau wie e Strasseadress isch e Domain, wie Lüüt Ihre Website online bsueche. Und ähnlich wie es Schild vor Ihrem Ladä. Wenn Sie unsere Website bsueche wend, müesse Sie d'Webadresse i de Adressleist vom Browser iigäh, wo das [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) isch, wo [**ultimatemultisite.com**](http://ultimatemultisite.com) de Domainname isch.

## Subdomain {#subdomain}

E Subdomain isch e Art vo Website-Hierarchie unter em Hauptdomain, aber statt Ordner z'bruche, um Inhalt uf ere Website z'organisiere, bekommt sie quasi e eigeti Website. Sie wird präsentiert als [**https://site1.domain.com/**](https://site1.domain.com/), wo _site1_ de Subdomain-Name isch und [_domain.com_](http://domain.com) de Hauptdomain isch.

## Unterverzeichnis (Subdirectory) {#subdirectory}

E Unterverzeichnis isch e Art vo Website-Hierarchie unter em Root-Domain, wo Ordner brucht, um Inhalt uf ere Website z'organisiere. E Unterverzeichnis isch s'gliich wie en Unterordner und d'Namen chönne usgwechselt werde. Sie wird präsentiert als [**https://domain.com/site1**](https://domain.com/site1), wo _site1_ de Unterverzeichnis-Name isch und [_domain.com_](http://domain.com) de Hauptdomain isch.

## Unterseite {#subsite}

E Subsite isch e Kind-Site, wo Sie i eme Multisite Netzwerk erstellt. Es chan entweder e **Subdomain** oder e **Unterverzeichnis** si, abhängig wie Ihre WordPress Multisite Installation konfiguriert isch.

## Super Admin {#super-admin}

E WordPress Super Admin isch en Benutzerrolle mit volle Fähigkeite, alli Subsites in eme Multisite Netzwerk z'manage. Für Multisite-User isch es d'**höchsti Zugriffsebene**, wo Sie Ihrer WordPress-Installation biete chönd.

## Plugin {#plugin}

Im Allgemeine isch e Plugin en Satz vo Code, wo extra Funktionalität zu Ihrer WordPress-Site hinzufügt. Das chan soifach si wie s'Ändere vom Login-Logo oder so komplex wie d'Hinzuefüegig vo E-Commerce-Funktionalität. _Woocommerce und Contact Form_ sind Bispil für Plugins.

U eme WordPress Multisite chönd Plugins nur vom Netzwerk-Admin-Dashboard dur de Super Admin installiert werde. Subsite Admins chönd Plugins nur innerhalb ihrer eigene Subsite aktiviere und deaktiviere.

## Themes {#themes}

E WordPress Theme isch e Gruppe vo Date (_Grafike, Style Sheets und Code_), wo s'ganze Ussehe vo de Site bestimmt. Es liefert alli Front-End-Stylings wie Schriftart-Styling, Layout vo de Seite, Farbe usw.

Gleich wie bi Plugins chönd Themes i WordPress Multisite nur vom Super Admin installiert werde und chönd vo Subsite Admins uf Subsite-Ebene aktiviert werde.

## Site Template {#site-template}

**Site Template** isch e Vorlage-Site, wo als Basis brucht werde chan, wenn Sie neui Sites in Ihrem Netzwerk erstellt.

Das heisst, Sie chönd e Basis-Site erstelle, verschiedeni Plugins aktiviere, es Theme wähle und es uf jede Art personalisiere. Wenn Ihr Kunde denn en neus Konto erstellt, bekommt er statt eme Standard WordPress-Site mit nüüt Sinnvollem Inhalt e Kopie Ihrer Basis-Site mit all de Personalisierige und Inhält scho druf.

## Domain Mapping {#domain-mapping}

**Domain mapping** mit WordPress isch e Weg, wie mer Benutzer uf de richtig Host umleitet, über d'Adresse vo ere Website. Bi WordPress Multisite werdet Subsites entweder mit eme Unterverzeichnis oder eme Subdomain erstellt. Was Domain Mapping macht, isch dass es subsite-Benutzer erlaubt, en Top-Level-Domain wie [**joesbikeshop.com**](http://joesbikeshop.com) z'bruche, damit d'Websadresse professioneller usgseht.

## SSL {#ssl}

SSL staht für **Secure Sockets Layer**. Es isch es digitale Zertifikat, wo d'Identität vo ere Website bestätigt und e verschlüsselte Verbindig ermöglicht. Hützutags wird es als Standardtechnologie brucht, um e Internetverbindig sicher z'halte und jede sensible Date, wo zwüsche zwei System gschickt wird, z'schütze. Das verhindert, dass Kriminelli Informatione läse oder ändere chönne, au potenzielli persönlechi Details. Moderni Browser bruuche SSL, was es essentiell macht bi de Erstellig und Betrib vo ere Website.

## Media {#media}

Media sind Bilder, Audio, Video und anderi Dateie, wo e Website usmache.

Netzwerk-Sites teile en einzigi Datenbank in eme WordPress Multisite, sie pflege aber separati Pfade uf em Filesystem für Mediendateie.

De Standardort vo WordPress (wp-content/uploads) blibt de gliich; aber sini Pfad wird verändert, um d'eindeutigi ID vom Netzwerk-Site widerzspiegelä. Folglich erscheine Mediendateie für e Netzwerk-Site als wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks sind die permanente URLs vo dim einzelne Blogpost oder Page innerhalb vo dinere Site. Permalinks werdet au als **pretty links** bezeichnet. Standardmässig bruuche WordPress URLs s'Query String Format, wo ungefähr so usgseht:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite isch en WordPress plugin, wo für WordPress Multisite-Installations gmacht isch, und das verwandlet dini WordPress-Installation in es Premium-Netzwerk vo Sites – ähnlich wie [WordPress.com](https://WordPress.com) –, wo Chunde Sites über monatlichi, vierteljährlichi oder jährlichi Gebühre chönne erstelle (du chasch au Free Plans erstelle).

## Checkout Form {#checkout-form}

D'Checkout Form isch es einzelnes oder mehstufiges Bestellformular, wo d'Erstellig vo Subsites, Mitgliedschaft und Benutzerkonten dur Ultimate Multisite Registrierig beinhaltet. Es besteht us verschiedene Feldern und Zahlungsformular, wo en Benutzer während em Anmeldeprozess iigäh muess.

## Webhook {#webhook}

En Webhook (au als Web Callback oder HTTP Push API gnannt) isch es Mittel, womit e App andere Apps Echtzit-Informatione zur Verfüegig stelle cha. En Webhook liefert Daten a anderi Apps, sobald sie passiere, was bedütet, dass du d'Daten sofort hesch.

**Ultimate Multisite webhooks** eröffne unendlichi Mögliichkeite und erlaubed de Netzwerkadministratore, allsochi verrückti aber nützlichi Integratione z'mache, bsunders wenn sie mit Service wie _Zapier und IFTTT_ kombiniert werde.

## Events {#events}

En Event isch en Aktion, wo als Resultat vo ere Benutzeraktion oder ere andere Quellaktion passiert, wie zum Bischpil es Mausklick. Ultimate Multisite speichert alli Events und Logs, wo in dim ganze Netzwerk passiere. Es verfolgt verschiedeni Aktivitäte i dim Multisite, wie zum Bischpil Planänderige.
