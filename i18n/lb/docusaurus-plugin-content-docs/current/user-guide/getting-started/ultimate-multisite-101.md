---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite isch en WordPress Multisite plugin, wo dir erlaubt, WaaS oder Websites als Service a Chunde anzbiete. Bevor mir tiefer iitauche und lerne, wie Ultimate Multisite dis Gschäft und dini Chunde unterstütze cha, bruche mir e paar grundlegendi Kenntnis, wo mir ufbaue müesse.

## D WordPress Multisite {#the-wordpress-multisite}

Mir sind meistens mit de Standard-WordPress-Installation vertraut. Entweder du schaffsch sie über s'Kontrollpanel vo dim Hosting-Provider oder, für d'Mutige, richtisch en neue Webserver und e Datenbank ii, lade d'Kernfile runter und fangsch mit em Installationsprozess a.

Das funktioniert für Millione WordPress-Sites ide ganze Wält, aber us de Sicht vo ere Agentur oder eme Hosting-Provider la mer kurz über d'Volumen rede.

Obwohl es eifach isch, en WordPress-Site oder sogar hundert über es automatisiertes Kontrollpanel z'erstelle, fangt d'Problem bald a z'erscheine, wenns chunnt zum Management vo dene Sites. Ohne Management bisch du es Hauptziel für Malware. Z'manage heisst, dass mer Müeh und Ressource investiert, und obwohl es externi Tools und Plugins git, wo hälfe chönnte, s'Management und d'Administration vo WordPress-Sites z'vereifache, bedüütet de Fakt, dass Chunde administrative Zuegang behalte, dass die Bemüehige ganz eifach übertroffe werde chönnt.

Im Kern bietet WordPress en Feature a, wo eifach "Multisite" heisst, und das goht uf 2010 zrugg, als WordPress 3.0 lanciert worde isch. Syt dänn het es verschiedeni Revision gha, wo abgseh vo neue Features und de Versichering verbessert händ.

Im Wesentliche cha mer en WordPress multisite so vorstelle: E Universität pflegt e einzigi Installation vo WordPress, aber jede Fakultät pflegt sini eigeti WordPress-Site.

Um die Ussag z'zerlege, luege mer eus e paar grundlegendi Terminologie a, nöd nur i de Dokumentation vo Ultimate Multisite, sondern au im ganze WordPress-Community.

### S'Netzwerk (The Network) {#the-network}

Im Kontext vo WordPress isch es multisite network, wo meh Untersites us eme einzelne Dashboard verwaltet werde chönne. Obwohl d'Erstellig vo eme multisite network je nach Hosting-Provider unterscheidet, isch s'Endresult meistens e paar zusätzlechi Richtlinie i de wp-config.php Datei, damit WordPress weiss, dass es in dem spezielle Modus lauft.

Es git e paar markanti Unterschid zwüsche eme multisite network und ere eigenständige WordPress-Installation, wo mer churz bespräche wend.

#### Subdomain vs. Unterverzeichnis (Subdirectory) {#subdomain-vs-subdirectory}

E vo de erschte Entscheidigä, wo Sie treffe müend, isch, ob d'multisite Installation mit _Unterverzeichnisse_ oder _Subdomains_ lauft. Ultimate Multisite funktioniert beidi Wahl glei guet, aber es git e paar architektonischi Unterschid zwüsche de zwei Konfiguratione.

Bi ere _Unterverzeichnis_-Konfiguration erbe d'Netzwerk-Sites en Pfad basierend uf em Hauptdomainname. Zum Bischpil wird e Netzwerk-Site mit em Name ‘site1’ d'vollständigi URL https://domain.com/site1 ha. Bi ere _Subdomain_-Konfiguration het d'Netzwerk-Site ihre eigeti _Subdomain_, abgeleitet vom Hauptdomainname. Also wird e Site mit em Name ‘site1’ d'vollständigi URL https://site1.domain.com/.

Obwohl beidi Option perfekt gültigi Wahl sind, bietet de Gebrauch vo _Subdomains_ e paar Vorteil, aber es brucht au meh Gedanke und Planig i sin Architektur.

Wann's DNS aazeit d'Benutzig vo _subdirectories_ stellt e relativ eifache Ussforderig dar. Will Netzwärks-Sites eifach Chìtcher vo de Elterpfad sind, brucht me nur en einzelne Domainname-Eintrag für de Hauptdomainname. Bi _subdomains_ isch d'Ussforderig chli komplexer und erfordert entweder en separate CNAME-Eintrag für jede Netzwärks-Site oder en Wildcard (*) Eintrag i de DNS-Record.

En wiiteri Bereich, wo mer bedenke mues, isch SSL und d'Ussgab und Benützig vo SSL-Zertifikaten. Bi _subdirectory_-Konfiguration cha me en einzelne Domainzertifikat bruche, will d'Netzwärks-Sites eifach Pfad vom Hauptdomainname sind. Somit wird es Zertifikat für domain.com gnüegend SSL für https://domain.com/site1, https://domain.com/site2 und so wiiter biete.

Bi _subdomain_-Konfiguration isch d'Benutzig vo enere Wildcard-SSL-Zertifikat e vo de häufigste Option. Dä Typ SSL-Zertifikat bietet Verschlüsselig für en Domain und ihri _subdomains_. Drum wird en Wildcard-SSL-Zertifikat Verschlüsselig für https://site1.domain.com, https://site2.domain.com und selbst für https://domain.com biete.

Obwohl anderi Optionne existiere, sind die oft i ihrem Umfang und ihri Anwendig begrenzt und erfordere zusätzlechi Konfiguration und Überlegige bezüglich de Passendheit.

#### Plugins und Themes {#plugins-and-themes}

Was WordPress git, nimmt es au weg, zumindest us Sicht vom Kunde. Bi ere eigenständige WordPress-Installation isch de Site-Administrator s'einzige Opfer und d'Verlust vo dem Akt, wenn er en schlechte Plugin installiert oder sini Installation nöd aktuell hält. Aber en Site-Administrator, wo en schlechts Plugin ufere Multisite-Installation installiert, schafft es Opfer für jede Site im Netzwärk.

Wé wëllt, wann et als Multisite WordPress konfiguriert gëtt, entfernt d'WordPress d'Möglichkeit fir Site-Administrateure, Plugins und Themes z'installé, und verschiebt die Möglichkeit an en neu créierten Netzwerkadministrator oder 'Super Admin' Roll. Dës privilegierteri Roll kann denn entscheide, ob Administrateure vun de Netzwerk-Sites d'Plugins-Menü in ihrem Dashboard gseh oder z'akses sen, und ob dës Erlaubnis au uf _Aktivierën_ oder _Deaktivierën_ vu Plugins uftritt.

Bis zu dë Punkt kann de Netzwerkadministrator verantwortlich sinn fir d'Installation vu Plugins und Themes i de Netzwerk an und d'Erlaubnis delegéer fir déi Sites vun der Netzwerk dës Plugins und Themes z'benutzen. Site-Administrateure kënnen Plugins und Themes net installéieren oder Zeschtëssen, déi net hunn an ihrem Site zugewiese.

#### Users und Administrators {#users-and-administrators}

In WordPress Multisite teiljen all Netzwerk-Sites déi selwe Datenbank hunn a sinn drum au déi selwe User, Rollen a Capabilities hunn. D'passendst Wëg ze denken ass, datt all User Mitglied vun der Netzwerk sinn a net vun enger spezifes Site.

Mit dëser Verstand gëtt et villicht nöd wünscht, dass User créiert ginn, an dem Grund entfernt WordPress Multisite dës Möglichkeit fir Site-Administrateure und verschiebt dës Möglichkeit an déi vum Netzwerkadministrator. D'Netzwerkadministrator kann denn d'nötige Privilegiën an en Site-Administrator delegéieren, um ihm z'laassen, User-Konten fir sin eigeni Site z'créieren.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Wiederherstellend de Usdruck obema, ob d'User-Konten mit der Site verknäppt a sinn, si fakt an d'Netzwerk zugewiese a sinn, und muss drum fir d'ganz Netzwerk einzigartig sinn. Es kann Fälle ginn, wou Usernamen net verfügbar sinn fir z'registréieren wäldem Grund.

Obwohl es in Unternehmenssysteme kein fremdes Konzept ist, ist diese einzelne Quelle für Benutzerregistrierung und Authentifizierung oft schwer zu verstehen für Leute, die mit eigenständigen WordPress-Installationen vertraut sind, wo die Benutzerverwaltung etwas einfacher ist.

#### Media {#media}

Wenn Netzwerkseiten eine einzige Datenbank teilen, wie bei einer WordPress Multisite, behalten sie separate Pfade auf dem Dateisystem für Mediendateien.

Der Standardort von WordPress (wp-content/uploads) bleibt bestehen; jedoch wird sein Pfad geändert, um die eindeutige ID der Netzwerkseite widerzuspiegeln. Folglich erscheinen Mediendateien für eine Netzwerkseite unter wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Wir haben schon erwähnt, dass es deutliche Vorteile bei einer _subdomain_-Konfiguration gegenüber einer _subdirectory_-Konfiguration gibt, und hier sind die Pfade:

Bei einer _subdirectory_-Konfiguration müssen die Hauptseite (die erste Seite, die erstellt wird, wenn das Netzwerk eingerichtet ist) und die Netzwerk-Subseiten denselben Pfad vom Domainnamen aus teilen. Das birgt das Potenzial für eine riesige Anzahl von Konflikten.

Für Beiträge wird auf der Hauptseite ein obligatorischer /blog/ Pfad hinzugefügt, um Kollisionen mit den Netzwerkseiten zu vermeiden. Das bedeutet, dass schöne Permalinks wie ‘Postname’ als domain.name/blog/post-name/ angezeigt werden.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Bei einer _subdomain_-Konfiguration ist diese Aktion nicht nötig, weil jede Netzwerkseite von der vollständigen Domain-Trennung profitiert und sich daher nicht auf einen einzigen Pfad verlassen muss. Stattdessen behalten sie basierend auf ihrer _subdomain_ eigene, unterschiedliche Pfade bei.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statische Seiten {#static-pages}

In de _subdirectory_ konfiguur het potentieel voor naamconflicten ook uitbreiden tot statische pagina's als de hoofdsite en netwerk-sites delen hetzelfde pad.

Om dit te voorkomen, biedt WordPress een manier om bepaalde sitenaamnamen te blokkeren zodat ze niet conflicteren met de namen van de eerste site. Meestal voegt de netwerkbeheerder de hoofdpaden van de pagina's van de hoofdsite toe.

<!-- Screenshot niet beschikbaar: WordPress netwerkinstellingen die geblokkeerde sitenaamnamen tonen om conflicten te voorkomen -->

In de _subdomain_ configuratie wordt de mogelijkheid tot naamconflicten verzacht door de _subdomain_, omdat deze uniek is voor de netwerk-site en niets met de hoofdsite te maken heeft.

### Registratie {#registration}

Binnen de netwerkinstellingen van WordPress Multisite zijn er verschillende nieuwe opties voor gebruikersregistratie beschikbaar, waarmee zowel nieuwe als bestaande gebruikers sites kunnen aanmaken.

<!-- Screenshot niet beschikbaar: WordPress Multisite netwerkinstellingen die registratieopties tonen -->

In tegenstelling tot losstaande WordPress-installaties behouden netwerk-sites de bekende opties om gebruikersregistraties toe te staan of deze toewijzingen aan rollen toe te wijzen.

<!-- Screenshot niet beschikbaar: WordPress losstaande site gebruikersregistratieinstellingen die beperkte opties tonen -->

Wanneer gebruikersaccounts worden aangemaakt, worden deze accounts op netwerkniveau gegenereerd. Ze behoren dus in plaats van bij één specifieke site tot het hele netwerk. Dit heeft enkele bijzondere voordelen en nadelen.

Zum Bischpil, stell Sie sich vor, Ihre WordPress Multisite wäre im Bereich Nachrichten und Informationen tätig. Sie würden die Multisite einrichten und dann Netzwerkseiten für Finanzen, Technologie, Unterhaltung und andere Interessengebiete erstellen, während Sie die Gesamtsteuerung von Plugins und Themes beibehalten. Jede Netzwerkseite hätte wiederum eine weitaus grössere Kontrolle über das Aussehen und die Benutzererfahrung ihrer Netzwerkseite als benutzerdefinierte Posttypen oder normale Postkategorien.

In diesem Umfang loggt sich ein Benutzer beim Einloggen in das Netzwerk ein und wird letztendlich auch auf jede Netzwerkseite eingeloggt, um ein nahtloses Erlebnis zu bieten. Wenn Ihre neue Seite abonnementbasiert ist, wäre dies die ideale Lösung und das Ergebnis.

Wenn der vorgesehene Charakter und Zweck der Multisite jedoch darin besteht, unterschiedliche Netzwerkseiten anzubieten, die keine Beziehung zueinander haben, ist es fast immer notwendig, externe oder zusätzliche Plugins zu verwenden, um die Benutzerrollen zu manipulieren.

### Domain und SSL {#domain-and-ssl}

Lassen Sie uns über eine WordPress Multisite-Installation sprechen, die fast unsere Aufmerksamkeit entgeht – Wordpress.com. Dies ist das umfangreichste Beispiel für eine WordPress Multisite und demonstriert ihre weitreichenden Fähigkeiten zur Anpassung und Formgebung, um einen bestimmten Zweck zu erfüllen.

Heutzutage im modernen Internet ist die Verwendung von SSL fast obligatorisch, und Netzwerkadministratoren von WordPress Multisites stehen bald vor diesen Herausforderungen.

Bei einer _Subdomain_-Konfiguration werden Seiten auf Basis des Hauptdomainnamens erstellt. Eine Seite mit dem Namen ‘site1’ würde also als ‘site1.domain.com’ erstellt werden. Durch die Nutzung eines Wildcard-SSL-Zertifikats kann ein Netzwerkadministrator diese Herausforderung erfolgreich meistern und SSL-Verschlüsselungsfunktionen für das Netzwerk bereitstellen.

WordPress Multisite enthält e Domain-Mapping-Funktion, wo es Netzwerk-Sites erlaubt, mit benutzerdefinierten Domain-Namen oder Domain-Namen z'verbinde, wo anders sind als d'Root-Domain vom Netzwerk.

Für Netzwerk-Administrateure stellt das en zusätzliche Schicht vo Komplexität dar, sowohl bi de Domain-Konfiguration als au bi de Usgabet und Wartig vo SSL-Zertifikaten.

Bis zu dere Grössi bietet WordPress Multisite zwar e Mittel, um [www.anotherdomain.com](http://www.anotherdomain.com) mit ‘site1’ z'verbinde, blibt aber de Netzwerk-Administrator mit de Ufgab, d'DNS-Einträge extern z'manage und SSL-Zertifikate z'implementiere konfrontiert.

## Ultimate Multisite {#ultimate-multisite}

Wenn mer d'Unterschied zwüsche eme eigenständige WordPress-Installations und eme Multisite-Installations verstande händ, luege mer mal ah, wie Ultimate Multisite s'ultimative Arsenal isch zum Websites as a Service z'biete.

### Iifüehrig {#introduction}

Ultimate Multisite isch dini Schwizer Taschenmesser, wenns drum gaht, e Website as a Service (WaaS) z'erstelle. Denk an Wix.com, Squarespace, WordPress.com und denn denk dra, dini eigeti Service z'besitze.

Unter de Haube brucht Ultimate Multisite WordPress Multisite, aber es macht das uf en Art und Wiis, wo nöd nur d'vieli Herausforderige löst, wo Netzwerk-Administrateure mit Multisite-Installations händ, sondern au d'Fähigkeite verbessert, sodass e breiti Vielfalt vo Anwendungsfäll unterstützt wird.

In de folgende Abschnitte luege mer uns paar übliche Anwendungsfäll und Überlegige ah, wo nötig sind, um die Fäll z'unterstütze.

### Anwendungsfäll {#use-cases}

#### Fall 1: E Agentur {#case-1-an-agency}

Typisch lieged d'Kernfähikeite vo ere Agentur i de Gestaltung vo Websites mit Aspekt wie ihri Hosting oder Marketing als zusätzliche Service ufzfüehre.

Für Agenturen bietet Ultimate Multisite en unglaubliche Mehrwert, will es möglich isch, meh Website uf ei Plattform z'hoste und z'manage. Noch allem no mehr für Agenturen, wo ihri Designs mit bestimmte Themes wie GeneratePress, Astra, OceanWP oder anderi standardisiere chönne – sie chönne d'Fähigkeite vo Ultimate Multisite nutze, um die Themes automatisch für jede nöi Site z'aktivierä.

Ähnlich wie bi de riiche Deals für Agentur-Pricing uf gängigi und populäri Plugins, erlaubt d'Nutzig vo Ultimate Multisite Agenturen, ihri bestehende Investition z'nutze, indem sie e gemeinsami Plattform zur Verfüegig stelle, wo Plugins installiert, pflegt und brucht werde chönne.

Am wahrscheinlichste wird d'Konfiguration gwünscht, und glücklicherwiis macht Ultimate Multisite es unglaublich eifach, Domain-Mapping und SSL-Zertifikat mit sin Integratione für en Reihe vo beliebte Hosting-Provider wie Cloudflare und cPanel z'erlichte.

Drum, indem mer eine vo dene Provider nutze oder Ultimate Multisite hinter Cloudflare platziere, werde Aspekt wie d'Verwaltig vo Domain und SSL-Zertifikaten recht trivial.

Agenturen, wo e engi Kontrolle über d'Erstellig vo Site wend behalte, werded d'Eifachheit schätze chönne, mit dere sie Site erstelle und Sites mit Kunde und Plän dur s'vereinfacht Interface vo Ultimate Multisite verbinde chönne.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Engi Kontrolle über Plugins und Themes wird uf Produktbasis dur d'intuitivi Interfaces vo Ultimate Multisite gewährleistet, wo es erlaubt, Plugins und Themes verfügbar oder versteckt z'mache sowie de Aktivierungsstatus bi Instanziierig für e nöi Site z'bestimme.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes biete ähnlechi Funktionalität, wo bestimmti Themes uf de Site-Erstelligsziit aktiviert oder usgschaltet chönne werde.

![Product theme limitations interface](/img/config/product-themes.png)

Agenturen finde mit Ultimate Multisite Rueh, will sie das mache chönd, was sie am beschte mache – usgezeichneti Websiete designe.

#### Fall 2: Nische-Abieter {#case-2-niche-provider}

Es git es alte Sprichwort, wo säit: „Mach öppis und mach's guet.“ Für vill Spezialiste heisst das, e Produkt oder en Service um e einzigi Kernidee z'erstelle.

Vielleicht bisch du en begeisterte Golfer, wo Websiete a Clubs bewirbt, oder du bisch en begeisterter E-Sport-Gamer, wo Websiete a Clans bietet. En Einzelperson, wo en Buchigservice a Restaurants bewirbt villicht?

Für vill Gründ würdsch du Service basierend uf eme gmeine Rahme und Plattform aabiete welle. Es chönnt si, dass du usgmachte Plugins entworfe oder investiert hesch, um d'nötigi Funktionalität z'biete, oder es chönnt si, dass Branchen-Best-Praktike e Art Standardisierigsansatz für s'Design verlanget.

E vo de innovative Feature vo Ultimate Multisite isch de Gebrauch vo Template Sites. E Template Site isch e Site, wo s'Theme installiert und aktiviert isch, nötig Plugins installiert und aktiviert sind und Musterposts oder Pages erstellt worde sind. Wenn en Kunde e neui Site uf Basis vom Template erstellt, werdet d'Inhalt und Iistellige vom Template uf d'neu erstellti Site kopiert.

Für en Abieter vo Nische-Sites und -Service bietet das en unvergleichliche Vorteil i de Fähigkeit, sofort e Site parat z'mache mit benutzerdefinierten Plugins und Design. De Kunde muess nume s'minimali Input liefer, um de Service abzschlüsse.

Afhängig vo de Aaforderige chönne sowohl _subdirectory_ als _subdomain_ Konfigurationspassend si, wobei d'Architektura-Wahl zwüsche eme einfache SSL-Zertifikat für _subdirectories_ oder eme Wildcard-SSL-Zertifikat für _subdomains_ liit.

#### Fall 3: WordPress Webhosting {#case-3-wordpress-web-hosting}

Es git unzähligi Wëge, WordPress-Sites z'hoste, aber es isch selte so eifach, en Kunde mit eme vorinstallierte WordPress-Version Webspace z'biete. Das liegt do, well vill Entscheedige und Überlegige zämecho müesse, um en sinnvolle Service z'biete.

Ultimate Multisite excelletiert do, indem es en umfassendi Turnkey-Lösig für d'Hosting vo WordPress-Sites bietet. D'Lösig beinhaltet d'Kernmechanismen fir Abonnement-Services, Zahlungsabwicklig, Checkout-Formular, Rabattgutscheine und Kundekommunikation.

Vill vum integrale Arbet, déi zur korrekte Installation, Konfiguratioun und Wartung vun eme WordPress Multisite erforderlich ass, wird door Ultimate Multisite vereifelt, well Netzwerkinstellern nur Aspekter berücksichtigen müesse, déi zu sinem Service oder sinere Niche haine, wéi Produkt-Tiers, Priisbestimmungen und Service-Aagebot.

Für Entwickler, déi mit Ultimate Multisite integriert wëll sinn, bietet d'Lösig au en umfassende RESTful API und Webhooks fir Ereignis-Notifikatioun.

Ohne Abhängigkeit vo eme unzählige externe Plugins und Lizenzen bietet Ultimate Multisite en feature-richi und vergleichbare Lösig wéi Wix, Squarespace, WordPress.com und anderi.

### Architektur-Überlegungen {#architecture-considerations}

Obwohl es ke umfassende Führer ass, sölle d'folgende Pünkt als Orientierig fir d'korrekt Uswahl vun de Technologie dien.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Alli, nid all Hosting-Provider sind glich und es git Provider, wo extrem hochi Serverdichte pflege. Niedrigkost-Provider generiere ihri Iikomme meischt dur d'Maximierig vo de Serverdichte. D'Ultimate Multisite Installation chönnt drum nume e vo hunderte Site uf em gliiche Server si.

Ohni passendi Schutzmassnahme vom Provider erfahre Site uf eme gmeinsame Server s'Problem vom 'lausi Nachber' (noisy neighbour). Das heisst, e Site uf em gliiche Server brucht so vill Ressource, dass anderi Site müesse mit de verbliebene Ressource konkurriere. Oft zeigt sich das als Site, wo langsam sind oder nöd rechtzitig reagiered.

Als Provider vo Webhosting s'wird d'Folge spüre: Iri Kunde erlebend schlechti Geschwindikeit, tiefe Page Rank und hochi Bounce Rates, was oft zu Chunde-Abwanderig führt, will sie anderi Dienstleister sueche.

Kurz gseit: billig heisst nöd guet.

Ultimate Multisite isch bekannt dafür, mit eme paar guete Hosting-Provider z'funktioniere und sich i ihri Umgäbig z'integriere, um Funktione wie Domain Mapping und automatische SSL z'biete. Die Provider schätze d'Performance und biete e höcheri Servicequalität als Shared Hosting.

Für e Liste kompatibler Provider und vollständigi Irichtigsanleitige für jede chönntet ihr d'Dokumentation vo Compatible Providers aluege.

#### Performance-Überlegige {#performance-considerations}

Ultimate Multisite isch kei langsami Applikation, sondern merklich schnell. Es funktioniert aber nume so guet wie d'Grundlagendi Applikation und Infrastruktur und cha nur das nutze, was es zur Verfüegig het.

Denk dra: Du bisch de Netzwerkadministrator vo ere Ultimate Multisite Installation mit 100 Site. E paar devo laufe guet und ziehed jede Tag e Zahl vo Website-Besuecher a.

Dëst Szenario wär anders uf e chleiner Skal, sagnatz eins bis fünf Site, aber scho bald würd mer Problem vo de Skal gseh.

Wenn d'eini Ultimate Multisite Site unbeachtet bliebt, isch sie verantwortlich für alli Aafrog vo allne Bsuecher uf de Sites. Die Aafrog chönnte für dynamischi PHP-Siite oder statischi Date wie Stylesheets, JavaScript oder Mediendate si. Egal ob eifach eis oder hundert Sites, die Ufgabe wärde wiederkehrend, monoton und verschwendet. Es isch unnötig, CPU-Leischtig und Arbeitsspeicher z'bruche, um en PHP-File z'verarbeite, wenn d'Usgab für jede Aafrog di gliichi statischi Information isch.

Glichzitig generiert e Aafrog für e PHP- oder HTML-Siite im Gegesatz meh folgendi Aafrog für Skripte, Stylesheets und Bilddate. Die Aafrog sind direkt uf din Ultimate Multisite Server usgrichtet.

Mer chönnt das Problem eifach löse, indem mer de Server upgrade, aber das behebt es sekundäres Problem – geografischi Verzögerige (latencies). Nur mehri Server an verschidene Ort chönnte dieses Problem richtig apacke.

Wäg dem bruche d'meischte Netzwerkinfrastruktur-Verwalter Front-End Caching Lösige und Content Distribution Networks (CDN), um d'Aafrog für statischi Siite z'erfülle. D'Erfüllig vo dene Aafrog und s'Serviere vo Date, bevor d'Aafrog de Server erreicht, spart Verarbeitigsressource, eliminiert Verzögerige, vermeidet unnötigi Upgrades und maximiert technischi Investitione.

Ultimate Multisite beinhaltet en hochentwickelte Cloudflare add-on, wo Netzwerkinfrastruktur-Verwalter d'Installation hinter Cloudflare platziere chönne und nöd nur sini Caching-Fähigkeite nutze, sondern au DNS-Hosting, SSL-Zertifikate und Sicherheitsmechanismen.

#### Backups {#backups}

Mer chönnt 50 Lüt nach Rat zu Backups fröge und 50 verschiedeni Meinige zu Backup-Strategie übercho. D'Antwort isch: Es hängt devo ab.

Was nöd bestritten isch, dass Backups nötig sind und es fast unvorstellbar isch, dass die Provider, speziell einer mit einem Managed Service, diese nicht verwaltet. Folglich werden Kunden sich an den Netzwerkadministrator wenden, um diesen Service bereitzustellen und zu verwalten. Wer der Netzwerkadministrator ist, ist ein völlig anderes Problem.

Für diesen Abschnitt vereinbaren wir, dass ein Backup eine Momentaufnahme des Systemzustands zum Zeitpunkt der Initiierung des Backups ist. Ganz einfach gesagt: Egal wie der Zustand des Systems zum Zeitpunkt des Backups ist, dieser Zustand wird erfasst und im Backup gesichert.

Mit diesem Verständnis hängt die Antwort darauf ab, wie man Backups erreicht und was für Ihre Umgebung am besten ist, stark von Ihren Anforderungen und der Fähigkeit des Hosting-Providers abhängen. In der Reihenfolge von amsten Meinung bis am wenig meinungsstark sollten die folgenden Optionen einige Orientierung bieten.

#### Snapshots {#snapshots}

Snapshots sind die Silberbälle bei Backups, weil sie einfach, unkompliziert (bis man wiederherstellen will) und "einfach funktionieren". Sie erfordern jedoch etwas Hilfe von Ihrem Provider und gelten hauptsächlich für VPS (Virtual Private Server) oder ähnliche Systeme. Mehrere Anbieter in unserer Dokumentation zu „Kompatiblen Anbietern“ bieten Backups an, die keine weitere Intervention oder Berücksichtigung durch den Netzwerkadministrator erfordern.

Wann traditionelli Backups Date und Datenbanken abdecken, zielt en Snapshot uf d'ganzi Festplatte ab. Das heisst, nöd nur d'Date vom Site werdet im Snapshot gspeicheret, sondern au s'Betriebssystem und d'Konfigurationsdate. Für vill isch das e klare Vorteil, will mer vo eme Snapshot fast sofort es nöis System chönnt starte und es i Betrieb bringe, um en defekte Instanz z'ersetze. Ähnlich lauft de Wiederherstellungsverfahr, um Date wieder z'gwünne, nur wenn mer de Snapshot-Image als Festplatte a e bestehendi Instanz anhängt, damit d'Date zuegriffe und kopiert werde chönne.

Snapshots chönnte mit em Hosting-Provider en zusätzliche Choschte verursache, aber es isch e Versicherung gege Unfälle.

#### Externe Skripte {#external-scripts}

Es gits praktisch kei Mangel an externe Skripte und Lösige zum Backup vo WordPress- und MySQL-Ressource, und die würdet guet für Ultimate Multisite passe, will das en WordPress Plugin isch, wo d'WordPress-Dateystem und d'Datenbank brucht. Drum wär e Lösig, wo WordPress-Sites backupet, d'Bedürfniss vo Ultimate Multisite adäquat abdecke.

Mir chönne kei einisch Skript besser als anderi empfehle, aber üsi allgemeini Empfehlige isch, meh Backup- und Wiederherstellungsprüefige z'mache, um sicherzstelle, dass d'Resultat so sind wie mer wott, und "sicher sii" dur kontinuierlichi Bewertig vom Skript und sinere Funktionalität, bsunders do, wo e Art Differenzial-Backup-Strategie aawendet wird.

Es sött bemerkt werde, dass die Skripte während em Laufes d'Systembelastig erhöhe, was berücksichtigt werde muss.

#### Plugins {#plugins}

In WordPress git es praktisch kei Problem, wo nöd mit eme Plugin glöst werde chan, und wenn d'Verwaltig vo externe Skripte nöd dini Stärchi isch, denn isch villicht e Plugin d'nächsti beschti Option.

Obwohl Plugins verschidlichi Optionne und Funktione händ, mache si meistens di gliich Funktion: d'Kopie vo de WordPress-Dateie und de Datenbankinhalt z'mache. Danach unterscheide sich d'Funktione, will es paar Plugins d'Backups an externi Dienst wie Google Drive oder Dropbox schicke chönne oder zu irgendeiner kompatible Object Storage Service wie S3, Wasabi oder anderi. Je umfassender d'Plugins sind, biete si differenzielli Backups oder e Art Strategie a, nume die Date z'backen, wo sich gänderet händ, um externi Speicherchöschte z'spare.

Wenn Sie Ihren Plugin wähle, sorge Sie bitte dafür, dass er multisite-aware isch. Wäg sinere Funktionswiis chönne Sie während de Backup-Läuf temporäri Last uf em Server erwarte, bis de Prozess fertig isch.

#### Domain und SSL {#domain-and-ssl-1}

Es isch scho viel drüber gredt worde bezüglich Domainname in multisite _subdomain_ Modus. E fast universelli Lösig für Netzwerkadministrator isch d'Nutzig vo Wildcard DNS-Einträge.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Dä Art vo DNS-Eintrag wird _Subdomains_ wie ‘site1.domain.com’ und ‘site2.domain.com’ erfolgreich uf e IP-Adresse 1.2.3.4 auflöse, was Ultimate Multisite und im grössere Umfang WordPress Multisite mit em _subdomain_ Modus unterstützt.

Das chan perfekt für HTTP funktioniert, will de Zielhost us de HTTP-Header liest wird, aber s'Web isch heutzutag so eifach, dass sich sicheri HTTPS-Transaktione fast obligatorisch sind.

Glücklicherwiis git's eifachi Option für SSL-Zertifikate. Im _subdirectory_ Modus chann es regulär Domain-Zertifikat brucht werde. Die sind schnell und frei vo Hosting-Provider verfügbar, wo villicht de freie LetsEncrypt-Service oder anderi Quelle bruche. Andersch sind die kommerziell erhältlich vo de Behörde, falls Sie in der Lage sind, d'Certificate Signing Request z'generiere.

Für de _subdomain_ Modus passt d'Nutzig vo eme Wildcard SSL-Zertifikat perfekt zu eme Wildcard Domain und erlaubt em Zertifikat, für d'Root-Domain und alli _subdomains_ autoritativ z'si, ohni unnötigi Konfiguration.

Es sött aber bemerkt werde, dass Wildcard SSL-Zertifikate mit Service wie Cloudflare villicht nöd funktioniere, es sei denn, Sie sind uf eme Enterprise-Plan oder stelle d'Eingabe uf DNS nur i, in dem alls Caching und Optimierig umgah wird.

Out-of-the-box Ultimate Multisite bietet e Lösig für das Problem, indem er üsi umfangrichi Erfahrig mit de Bedürfnis vo WordPress multisites demonstriert. D'Aktivierig vo däm einfache Add-on wird Ultimate Multisite ermöglichä, Ihre Cloudflare Credentials z'bruche, um automatisch DNS-Einträge für Netzwerk-Sites in Cloudflare hinzuzufüge und ihri Modus uf 'proxied' z'stelle. Auf so Wiis wird jede Netzwerk-Subsite bi Erschaffig de volli Schutz und d'Vorteil vo Cloudflare inklusive SSL ha.

Je nach Art und Zweck Ihrer Ultimate Multisite Installation chönnt es nötig si, dass Kunde ihri eiget Domains bruche. In dem Fall isch de Netzwerkadministrator dafür verantwortlich, zwei Problem z'löse: Einerseits d'Hosting vom Domain-Name und anderseits d'SSL-Zertifikate für die Domain.

Für villi Lüüt isch d'Nutzig vo Cloudflare e eifachi Option. De Kunde muess nume sini Domain uf Cloudflare platziere, en CNAME uf d'Root-Domain vo Ultimate Multisite hiwiise und sini Domain in Ultimate Multisite mappe, um aazfange z'profitiere vo sinere eigene Domainname.

Usserdäm müesse Alternativlösung gsucht werde, weshalb Ultimate Multisite e Liste mit Kompatible Provider empfiehlt. Das isch will de Prozess vom DNS- und SSL-Iistellige nöd ganz einfach isch. Aber mit de Integration vo Ultimate Multisite mit dene Provider wird d'Komplexität viel reduziert und s'Verfahre wird automatisiert.

#### Plugins {#plugins-1}

Es isch sehr wahrscheinlich, dass Sie zusätzlechi Plugins bruuche müend, um Funktionalität für Ihre Kunde oder Netzwerksite z'biete. Funktioniered alli Plugins mit WordPress Multisite und Ultimate Multisite? Das hängt devo ab.

Obwohl d'meischte Plugins in ere WordPress Multisite installiert werde chönne, variiert d'Aktivierig und d'Lizenzierung vo Autor zu Autor.

D'Herausforderig liegt darin, wie d'Lizenzierung angewendet wird bi einige Plugins, wo e Lizenz pro Domain bruuche. Das heisst, dass für einige Plugins de Netzwerkadministrator manuell d'Lizenz für jede Plugin uf jede nöi Site aktiviere muess.

Drum isch es villicht am beschte mit em Plugin-Autor abkläre, wie sini Plugin mit ere WordPress Multisite funktioniert und ob spezielli Aaforderige oder Verfahre nötig sind, um sie z'lizenziere.
