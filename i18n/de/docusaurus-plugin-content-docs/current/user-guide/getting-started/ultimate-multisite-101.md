---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite ist ein WordPress‑Multisite‑Plugin, das es Ihnen ermöglicht, WaaS (Websites as a Service) oder Websites als Service für Kunden anzubieten. Bevor wir uns vertiefen und lernen, wie Ultimate Multisite Ihrem Unternehmen und Ihren Kunden helfen kann, gibt es einige grundlegende Kenntnisse, die wir erwerben müssen.

## Das WordPress‑Multisite

Die meisten von uns sind mit der Standard‑WordPress‑Installation vertraut. Sie erstellen sie entweder über das Control Panel Ihres Hosting‑Anbieters oder, für die Mutigen, richten einen neuen Webserver und eine Datenbank ein, laden die Kerndateien herunter und beginnen den Installationsprozess.

Dies funktioniert für Millionen von WordPress‑Seiten weltweit, aber aus Sicht einer Agentur oder eines Hosting‑Anbieters lohnt es sich, kurz über die Volumen zu sprechen.

Obwohl es synchron ist, eine einzelne WordPress‑Seite oder sogar einhundert davon über ein automatisiertes Control Panel zu erstellen, beginnen Probleme schnell, wenn es um die Verwaltung dieser Seiten geht. Ohne Verwaltung sind Sie ein primäres Ziel für Malware. Verwaltung bedeutet Aufwand und Ressourcen, und obwohl es externe Tools und Plugins gibt, die die Verwaltung und Administration von WordPress‑Seiten vereinfachen, bedeutet die Tatsache, dass Kunden administrativen Zugriff haben, dass diese Bemühungen leicht überwindet werden können.

Im Kern bietet WordPress eine Funktion namens „Multisite“, die ihre Ursprünge im Jahr 2010 bei der Veröffentlichung von WordPress 3.0 hat. Seitdem hat sie mehrere Revisionen erhalten, die neue Funktionen einführen und die Sicherheit verbessern.

Im Wesentlichen kann ein WordPress‑Multisite wie folgt betrachtet werden: Eine Universität betreibt eine einzige WordPress‑Installation, aber jede Fakultät betreibt ihre eigene WordPress‑Seite.

Um diese Aussage zu zerlegen, werfen wir einen Blick auf einige der grundlegenden Terminologien, die nicht nur in der Dokumentation von Ultimate Multisite, sondern auch in der WordPress‑Community verwendet werden.

### Das Netzwerk

In Bezug auf WordPress ist ein Multisite‑Netzwerk ein Ort, an dem mehrere Unterseiten von einem einzigen Dashboard aus verwaltet werden können. Obwohl die Erstellung eines Multisite‑Netzwerks je nach Hosting‑Anbieter unterschiedlich ist, ist das Endergebnis in der Regel ein paar zusätzliche Direktiven in der wp‑config.php, damit WordPress weiß, dass es in diesem speziellen Modus arbeitet.

Es gibt mehrere deutliche Unterschiede zwischen einem Multisite‑Netzwerk und einer eigenständigen WordPress‑Installation, die wir kurz besprechen werden.

#### Subdomain vs. Subdirectory

Eine der unmittelbarsten Entscheidungen, die Sie treffen müssen, ist, ob die Multisite‑Installation mit _Subdirectories_ oder _Subdomains_ betrieben wird. Ultimate Multisite funktioniert gleichermaßen gut mit beiden Optionen, aber es gibt einige architektonische Unterschiede zwischen den beiden Konfigurationen.

In einer _Subdirectory_-Konfiguration erben Netzwerksites einen Pfad, der auf dem Hauptdomainnamen basiert. Zum Beispiel hat eine Netzwerksite mit dem Namen „site1“ die vollständige URL https://domain.com/site1. In einer _Subdomain_-Konfiguration hat die Netzwerksite ihre eigene _Subdomain_, die vom Hauptdomainnamen abgeleitet ist. Somit hat eine Site mit dem Namen „site1“ die vollständige URL https://site1.domain.com/.

Obwohl beide Optionen völlig gültige Entscheidungen sind, bietet die Verwendung von _Subdomains_ einige Vorteile, erfordert jedoch auch mehr Überlegung und Planung in ihrer Architektur.

In Bezug auf DNS stellt die Verwendung von _Subdirectories_ eine relativ einfache Herausforderung dar. Da Netzwerksites einfach Kinder des übergeordneten Pfades sind, muss nur ein einzelner Domainnamen-Eintrag für den Hauptdomainnamen existieren. Für _Subdomains_ ist die Herausforderung etwas komplexer und erfordert entweder einen separaten CNAME-Eintrag für jede Netzwerksite oder einen Wildcard (*) Eintrag in den DNS‑Einträgen.

Ein weiterer Aspekt, der berücksichtigt werden muss, ist SSL und die Ausstellung und Verwendung von SSL‑Zertifikaten. In einer _Subdirectory_-Konfiguration kann ein einzelnes Domainzertifikat verwendet werden, da die Netzwerksites einfach Pfade des Hauptdomainnamens sind. Somit stellt ein Zertifikat für domain.com ausreichend SSL für https://domain.com/site1, https://domain.com/site2 und so weiter bereit.

In einer _Subdomain_-Konfiguration ist die Verwendung eines Wildcard‑SSL‑Zertifikats eine der häufigsten Optionen. Dieses Zertifikat verschlüsselt einen Domainnamen und seine _Subdomains_. Daher bietet ein Wildcard‑SSL‑Zertifikat Verschlüsselung für https://site1.domain.com, https://site2.domain.com und https://domain.com selbst.

Obwohl andere Optionen existieren, sind diese oft begrenzt in Umfang und Anwendung und erfordern zusätzliche Konfiguration und Überlegung hinsichtlich der Eignung.

#### Plugins und Themes

Was WordPress gibt, nimmt es auch wieder, zumindest aus Sicht des Kunden. In einer eigenständigen WordPress‑Installation, wenn der Site‑Administrator ein schlechtes Plugin installiert oder seine Installation nicht auf dem neuesten Stand hält, ist das einzige Opfer und die einzige Beute dieses Handelns sich selbst. Wenn jedoch ein Site‑Administrator ein schlechtes Plugin auf einer Multisite‑Installation installiert, wird jedes Site im Netzwerk zum Opfer.

Aus diesem Grund entfernt WordPress, wenn es als Multisite konfiguriert ist, die Fähigkeit von Site‑Administratoren, Plugins und Themes zu installieren, und verschiebt diese Fähigkeit stattdessen in eine neu erstellte Netzwerk‑Administrator‑ oder „Super‑Admin“-Rolle. Diese privilegierte Rolle kann dann entscheiden, ob Administratoren von Netzwerk‑Sites das Plugins‑Menü in ihrem Dashboard sehen oder darauf zugreifen dürfen und, falls ja, ob solche Berechtigungen das _Aktivieren_ oder _Deaktivieren_ von Plugins umfassen.

In diesem Umfang ist der Netzwerk‑Administrator dafür verantwortlich, Plugins und Themes in das Netzwerk zu installieren und Berechtigungen zu delegieren, um diese Plugins und Themes in den Netzwerk‑Sites zu nutzen. Site‑Administratoren können keine Plugins und Themes installieren oder auf Plugins und Themes zugreifen, die nicht ihrem Site zugewiesen sind.

#### Benutzer und Administratoren

In einer WordPress‑Multisite teilen sich alle Netzwerk‑Sites dieselbe Datenbank und damit dieselben Benutzer, Rollen und Berechtigungen. Der passendste Weg, dies zu denken, ist, dass alle Benutzer Mitglieder des Netzwerks und nicht eines bestimmten Sites sind.

Angesichts dieses Verständnisses kann es unerwünscht sein, Benutzer zu erstellen, und aus diesem Grund entfernt WordPress Multisite diese Fähigkeit von den Site‑Administratoren und verschiebt sie in die Rolle des Netzwerk‑Administrators. Der Netzwerk‑Administrator kann dann die notwendigen Privilegien an einen Site‑Administrator delegieren, um ihm zu ermöglichen, Benutzerkonten für sein eigenes Site zu erstellen.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Wiederholen wir die obige Aussage: obwohl die Benutzerkonten dem Site zugeordnet zu sein scheinen, werden sie tatsächlich dem Netzwerk zugewiesen und müssen daher im gesamten Netzwerk eindeutig sein. Es kann vorkommen, dass Benutzernamen aufgrund dieses Grundes nicht registriert werden können.

Obwohl es kein fremdes Konzept in Unternehmenssystemen ist, ist diese einzige Quelle der Benutzerregistrierung und Authentifizierung oft ein schwieriges Konzept für Personen, die mit eigenständigen WordPress‑Installationen vertraut sind, bei denen die Benutzerverwaltung etwas einfacher ist.

#### Medien

Wo Netzwerk‑Sites eine einzige Datenbank in einer WordPress‑Multisite teilen, behalten sie separate Pfade im Dateisystem für Mediendateien bei.

Der Standard‑WordPress‑Ort (wp‑content/uploads) bleibt; jedoch wird sein Pfad geändert, um die eindeutige ID der Netzwerk‑Site widerzuspiegeln. Folglich erscheinen Mediendateien für eine Netzwerk‑Site als wp‑contents/uploads/site/[id].

#### Permalinks

Wir haben zuvor erwähnt, dass es eindeutige Vorteile von _Subdomain_ gegenüber _Subdirectory_ gibt, und hier ist es: Pfade.

In einer _Subdirectory_-Konfiguration müssen die Haupt‑Site (die erste Site, die erstellt wird, wenn das Netzwerk eingerichtet wird) und die Netzwerk‑Unterseiten denselben Pfad von der Domain aus teilen. Dies kann zu einer großen Anzahl von Konflikten führen.

Für Beiträge wird ein obligatorischer /blog/ Pfad zur Haupt‑Site hinzugefügt, um Kollisionen mit Netzwerk‑Sites zu verhindern. Das bedeutet, dass hübsche Permalinks wie „Post name“ als domain.name/blog/post-name/ angezeigt werden.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

In einer _Subdomain_-Konfiguration ist diese Aktion nicht erforderlich, da jede Netzwerk‑Site von vollständiger Domaintrennung profitiert und daher nicht auf einen einzigen Pfad angewiesen ist. Sie behalten stattdessen ihre eigenen eindeutigen Pfade basierend auf ihrer _Subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statische Seiten

In einer _Subdirectory_-Konfiguration erstreckt sich das Potenzial für Namenskonflikte auf statische Seiten, da die Haupt‑Site und die Netzwerk‑Sites denselben Pfad teilen.

Um dies zu verhindern, bietet WordPress eine Möglichkeit, bestimmte Site‑Namen zu blockieren, damit sie nicht mit den Namen der ersten Site kollidieren. Typischerweise würde der Netzwerk‑Administrator die Stammpfade der Seiten der Haupt‑Site eingeben.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

In einer _Subdomain_-Konfiguration werden Namenskonflikte durch die _Subdomain_ gemildert, da sie eindeutig für die Netzwerk‑Site ist und in keiner Weise mit der Haupt‑Site zusammenhängt.

### Registrierung

In den Netzwerkeinstellungen von WordPress Multisite stehen mehrere neue Optionen für die Benutzerregistrierung zur Verfügung, die es neuen und bestehenden Benutzern ermöglichen, Sites zu erstellen.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Im Gegensatz zu eigenständigen WordPress‑Installationen behalten Netzwerksites die vertrauten Optionen nicht bei, um Benutzerregistrierungen zu erlauben oder diese Registrierungen Rollen zuzuweisen.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Wenn Benutzerkonten erstellt werden, werden diese Konten auf Netzwerkebene generiert. Somit gehören sie nicht zu einer bestimmten Site, sondern zum Netzwerk. Dies hat einige eindeutige Vor- und Nachteile.

Angenommen, Ihre WordPress‑Multisite war im Geschäft mit Nachrichten und Informationen. Sie würden die Multisite einrichten und dann Netzwerksites für Finanzen, Technologie, Unterhaltung und andere Interessensbereiche erstellen, während Sie die Kontrolle über Plugins und Themes behalten. Jede Netzwerksite hätte dann ein viel höheres Maß an Kontrolle über das Aussehen und die Benutzererfahrung ihrer Netzwerksite als benutzerdefinierte Beitragstypen oder reguläre Beitragskategorien.

In diesem Umfang loggt sich ein Benutzer ein, er loggt sich in das Netzwerk ein und wird letztlich auch in jeder Netzwerksite eingeloggt, um ein nahtloses Erlebnis zu bieten. Wenn Ihre neue Site abonnementbasiert ist, wäre dies die ideale Lösung und das Ergebnis.

Wenn jedoch die beabsichtigte Natur und der Zweck der Multisite darin besteht, unterschiedliche Netzwerksites anzubieten, die keine Beziehung zueinander haben, ist es fast immer der Fall, dass externe oder zusätzliche Plugins erforderlich sind, um die Benutzerrollen zu manipulieren.

### Domain und SSL

Sprechen wir über eine WordPress‑Multisite‑Installation, die fast unsere Aufmerksamkeit entgeht – Wordpress.com. Dies ist bei weitem das umfangreichste Beispiel einer WordPress‑Multisite und demonstriert ihre umfangreichen Möglichkeiten, angepasst und geformt zu werden, um einen Zweck zu erfüllen.

Heutzutage ist die Verwendung von SSL im modernen Internet fast obligatorisch und Netzwerk‑Administratoren von WordPress‑Multisites werden bald mit diesen Herausforderungen konfrontiert.

In einer _Subdomain_-Konfiguration werden Sites basierend auf dem Root‑Domainnamen erstellt. Somit würde eine Site mit dem Namen „site1“ als „site1.domain.com“ erstellt werden. Durch die Verwendung eines Wildcard‑SSL‑Zertifikats kann ein Netzwerk‑Administrator diese Herausforderung erfolgreich bewältigen und SSL‑Verschlüsselungsfähigkeiten für das Netzwerk bereitstellen.

WordPress Multisite enthält eine Domain‑Mapping‑Funktion, die es ermöglicht, Netzwerk‑Sites mit benutzerdefinierten Domainnamen oder Domainnamen, die vom Root‑Domain des Netzwerks abweichen, zu verknüpfen.

Für Netzwerk‑Administratoren stellt dies eine zusätzliche Schicht von Komplexität sowohl in der Domainnamen‑Konfiguration als auch bei der Ausstellung und Wartung von SSL‑Zertifikaten dar.

In diesem Umfang bietet WordPress Multisite zwar die Möglichkeit, [www.anotherdomain.com](http://www.anotherdomain.com) auf „site1“ zu mappen, aber der Netzwerk‑Administrator bleibt mit der Herausforderung konfrontiert, die DNS‑Einträge extern zu verwalten und die Implementierung von SSL‑Zertifikaten.

## Ultimate Multisite

Mit den Unterschieden zwischen einer eigenständigen WordPress‑Installation und einer Multisite‑Installation verstanden, werfen wir einen Blick darauf, wie Ultimate Multisite das ultimative Arsenal für die Bereitstellung von Websites as a Service ist.

### Einführung

Ultimate Multisite ist Ihr Schweizer Taschenmesser, wenn es darum geht, eine Website as a Service (WaaS) zu erstellen. Denken Sie an Wix.com, Squarespace, WordPress.com und dann an die Idee, Ihren eigenen Service zu besitzen.

Unter der Haube nutzt Ultimate Multisite WordPress Multisite, aber es tut dies auf eine Weise, die nicht nur die Vielzahl von Herausforderungen löst, mit denen Netzwerk‑Administratoren bei Multisite‑Installationen konfrontiert sind, sondern die Fähigkeiten erweitert, um eine Vielzahl von Anwendungsfällen zu unterstützen.

In den folgenden Abschnitten werfen wir einen Blick auf einige häufige Anwendungsfälle und die erforderlichen Überlegungen, um diese Fälle zu unterstützen.

### Anwendungsfälle

#### Fall 1: Eine Agentur

Typischerweise liegen die Kernkompetenzen einer Agentur im Design von Websites, wobei Aspekte wie Hosting oder Marketing als zusätzliche Dienstleistungen aufgeführt sind.

Für Agenturen bietet Ultimate Multisite ein unglaubliches Wertversprechen in seiner Fähigkeit, mehrere Websites auf einer einzigen Plattform zu hosten und zu verwalten. Noch besser für Agenturen, die ihre Designs auf bestimmten Themes wie GeneratePress, Astra, OceanWP oder anderen standardisieren, können sie die Fähigkeiten von Ultimate Multisite nutzen, um diese Themes automatisch für jede neue Site zu aktivieren.

Gleichzeitig ermöglichen die zahlreichen Angebote für Agenturpreise für gängige und beliebte Plugins die Nutzung vorhandener Investitionen, indem ein gemeinsames Plattform bereitgestellt wird, von der aus Plugins installiert, gepflegt und genutzt werden können.

Die meisten Agenturen wünschen sich wahrscheinlich eine Konfiguration, und glücklicherweise macht Ultimate Multisite es unglaublich einfach, Domain‑Mapping und SSL‑Zertifikate mit seinen Integrationen für mehrere beliebte Hosting‑Provider sowie Dienste wie Cloudflare und cPanel zu erleichtern.

Durch die Nutzung eines dieser Provider oder durch das Platzieren von Ultimate Multisite hinter Cloudflare werden Aspekte wie die Verwaltung von Domains und SSL‑Zertifikaten etwas trivial.

Agenturen, die eine enge Kontrolle über die Erstellung von Sites bevorzugen, werden die Leichtigkeit schätzen, mit der sie Sites erstellen und Sites mit Kunden und Plänen über die optimierte Benutzeroberfläche von Ultimate Multisite verknüpfen können.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Die enge Kontrolle über Plugins und Themes wird auf Produktbasis durch die intuitiven Schnittstellen von Ultimate Multisite aufrechterhalten, die es ermöglichen, Plugins und Themes verfügbar oder versteckt zu machen sowie ihren Aktivierungsstatus bei der Instanziierung einer neuen Site festzulegen.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes bieten ähnliche Funktionalität, indem sie es ermöglichen, bestimmte Themes bei der Site‑Erstellung zu aktivieren oder zu verbergen.

![Product theme limitations interface](/img/config/product-themes.png)

Agenturen werden Frieden mit Ultimate Multisite finden, indem sie tun, was sie am besten können – außergewöhnliche Websites zu entwerfen.

#### Fall 2: Nischenanbieter

Es gibt ein altes Sprichwort, das besagt: „Tue eine Sache und tue sie gut“. Für viele Spezialisten bedeutet dies, ein Produkt oder eine Dienstleistung rund um eine einzige Kernidee zu schaffen.

Vielleicht sind Sie ein begeisterter Golfer, der Websites für Clubs bewirbt, oder Sie sind ein begeisterter Esports‑Gamer, der Websites für Clans bereitstellt. Oder Sie bewerben einen Buchungsservice für Restaurants?

Aus vielen Gründen möchten Sie Dienste auf einer gemeinsamen Plattform und einem gemeinsamen Framework bereitstellen. Vielleicht haben Sie maßgeschneiderte Plugins entwickelt oder investiert, um die erforderliche Funktionalität bereitzustellen, oder es könnte sein, dass Branchenbest Practices einen standardisierten Ansatz für das Design erfordern.

Eine der innovativen Funktionen von Ultimate Multisite ist die Verwendung von Template‑Sites. Eine Template‑Site ist eine Site, bei der das Theme installiert und aktiviert, notwendige Plugins installiert und aktiviert sowie Beispielbeiträge oder Seiten erstellt wurden. Wenn ein Kunde eine neue Site basierend auf der Vorlage erstellt, werden die Inhalte und Einstellungen der Vorlage in die neu erstellte Site kopiert.

Für einen Anbieter von Nischen‑Sites und -Dienstleistungen bietet dies einen unvergleichlichen Vorteil, um sofort eine Site bereit zu stellen, die mit benutzerdefinierten Plugins und Design einsatzbereit ist. Der Kunde muss nur die minimalen Eingaben liefern, um den Service abzuschließen.

Je nach Anforderungen können sowohl _Subdirectory_- als auch _Subdomain_-Konfigurationen geeignet sein, in welchem Fall die architektonischen Entscheidungen zwischen einem einfachen SSL‑Zertifikat für _Subdirectories_ oder einem Wildcard‑SSL‑Zertifikat für _Subdomains_ liegen würden.

#### Fall 3: WordPress‑Webhosting

Es gibt eine Vielzahl von Möglichkeiten, WordPress‑Sites zu hosten, aber selten ist es so einfach wie das Bereitstellen von Webspace für einen Kunden mit einer vorinstallierten WordPress‑Version. Dies liegt daran, dass eine Reihe von Entscheidungen und Überlegungen zusammenkommen müssen, um einen sinnvollen Service bereitzustellen.

Ultimate Multisite glänzt in diesem Bereich, indem es eine umfassende Turnkey‑Lösung für das Hosting von WordPress‑Sites bietet. In die Lösung sind die Kernmechanismen zur Bereitstellung von Abonnement‑Services, Zahlungsabwicklung, Checkout‑Formulare, Rabatt‑Gutscheine und Kundenkommunikation enthalten.

Ein großer Teil der integralen Arbeit, die erforderlich ist, um WordPress Multisite korrekt zu installieren, zu konfigurieren und zu warten, wird von Ultimate Multisite erleichtert, sodass Netzwerk‑Administratoren sich nur auf Aspekte konzentrieren müssen, die sich auf ihren Service oder ihr Nischengebiet beziehen, wie Produktstufen, Preisgestaltung und Serviceangebote.

Für Entwickler, die sich mit Ultimate Multisite integrieren möchten, bietet die Lösung auch eine umfassende RESTful‑API und Webhooks für Ereignisbenachrichtigungen.

Ohne sich auf eine Vielzahl externer Plugins und Lizenzen zu verlassen, bietet Ultimate Multisite eine funktionsreiche und vergleichbare Lösung wie Wix, Squarespace, WordPress.com und andere.

### Architekturüberlegungen

Obwohl es keine umfassende Anleitung ist, sollten die folgenden Punkte als Leitfaden für die korrekte Auswahl von Technologien dienen, die eine Ultimate Multisite‑Installation unterstützen.

#### Shared vs. Dedicated Hosting

Leider sind nicht alle Hosting‑Provider gleich und einige üben extreme Serverdichten aus. Niedrigpreisige Provider generieren in der Regel Einnahmen, indem sie die Serverdichte maximieren. Daher kann Ihre Ultimate Multisite‑Installation möglicherweise nur eine von mehreren hundert Sites auf demselben Server sein.

Ohne geeignete Schutzmaßnahmen seitens des Providers erleben Sites auf einem Shared‑Server das „noisy neighbour“-Problem. Das heißt, eine Site auf demselben Server verbraucht so viele Ressourcen, dass andere Sites um die verbleibenden Ressourcen konkurrieren müssen. Oft äußert sich dies in langsamen Sites oder solchen, die nicht rechtzeitig reagieren.

Als Webhosting‑Anbieter bedeutet dies, dass Ihre Kunden schlechte Geschwindigkeiten, niedrige Page‑Rank‑Werte und hohe Absprungraten erleben, was oft zu Kundenabwanderung führt, da sie nach anderen Services suchen.

Kurz gesagt: billig bedeutet nicht gut.

Ultimate Multisite ist dafür bekannt, mit einer Reihe guter Hosting‑Provider zu arbeiten und sich gut in deren Umgebung zu integrieren, um Funktionen wie Domain‑Mapping und automatisches SSL bereitzustellen. Diese Provider schätzen Leistung und bieten einen höheren Servicegrad als Shared‑Hosting.

Für eine Liste kompatibler Provider und vollständige Installationsanweisungen für jeden Provider lesen Sie bitte die Dokumentation zu Kompatiblen Providern.

#### Leistungsüberlegungen

Ultimate Multisite ist keine langsame Anwendung, sondern bemerkenswert schnell. Es arbeitet jedoch nur so gut wie die zugrunde liegende Anwendung und Infrastruktur und kann nur das nutzen, auf das es Zugriff hat.

Betrachten Sie dies: Sie sind der Netzwerk‑Administrator einer Ultimate Multisite‑Installation mit 100 Sites. Einige dieser Sites laufen gut und ziehen täglich eine Anzahl von Website‑Besuchern an.

Dieses Szenario wäre anders bei einer kleineren Skala von ein bis fünf Sites, aber bald würden Skalierungsprobleme offensichtlich werden.

Unbeaufsichtigt wäre die einzelne Ultimate Multisite‑Site dafür verantwortlich, die Anfragen aller Besucher der Sites zu erfüllen. Diese Anfragen könnten dynamische PHP‑Seiten oder statische Assets wie Stylesheets, JavaScript oder Mediendateien sein. Ob eine oder hundert Sites, diese Aufgaben werden sich wiederholen, monoton und verschwenderisch. Es ist unnötig, CPU‑Leistung und Speicher zu verwenden, um eine PHP‑Datei zu verarbeiten, wenn die Ausgabe für jede Anfrage dieselben statischen Informationen ist.

Ebenso erzeugt eine Anfrage für eine PHP‑ oder HTML‑Seite wiederum mehrere nachfolgende Anfragen für Skripte, Stylesheets und Bilddateien. Diese Anfragen werden direkt an Ihren Ultimate Multisite‑Server gerichtet.

Man könnte dieses Problem leicht lösen, indem man den Server aufrüstet, aber es löst ein sekundäres Problem nicht – geografische Latenzen. Nur mehrere Server an mehreren Standorten könnten dieses Problem richtig adressieren.

Aus diesem Grund nutzen die meisten Netzwerk‑Administratoren Front‑End‑Caching‑Lösungen und Content‑Distribution‑Netzwerke (CDN), um die Anfragen für statische Seiten zu erfüllen. Die Erfüllung dieser Anfragen und das Bereitstellen von Assets, bevor die Anfrage den Server erreicht, spart Verarbeitungsressourcen, eliminiert Verzögerungen, vermeidet unnötige Upgrades und maximiert die Technologieinvestitionen.

Ultimate Multisite enthält ein ausgeklügeltes Cloudflare‑Add‑On, das Netzwerk‑Administratoren ermöglicht, ihre Installationen hinter Cloudflare zu platzieren und nicht nur die Caching‑Fähigkeiten, sondern auch DNS‑Hosting, SSL‑Zertifikate und Sicherheitsmechanismen zu nutzen.

#### Backups

Man könnte 50 Personen um Rat zu Backups bitten und 50 verschiedene Meinungen zu Backup‑Strategien erhalten. Die Antwort lautet: es hängt ab.

Was nicht bestritten wird, ist, dass Backups erforderlich sind und dass es fast unvorstellbar ist, dass diese nicht vom Provider verwaltet werden, insbesondere von einem, der einen Managed Service anbietet. Folglich werden Kunden den Netzwerk‑Administrator bitten, diesen Service bereitzustellen und zu verwalten. Wer der Netzwerk‑Administrator ist, ist ein völlig anderes Problem.

Für die Zwecke dieses Abschnitts stimmen wir zu, dass ein Backup eine zeitpunktbezogene Kopie des Systemzustands zum Zeitpunkt der Initiierung des Backups ist. Einfach ausgedrückt, wird der Zustand des Systems zum Zeitpunkt des Backups erfasst und im Backup gesperrt.

Mit diesem Verständnis hängt die Antwort, wie die Backups erreicht werden und was am besten für Ihre Umgebung ist, stark von Ihren Anforderungen und der Fähigkeit des Hosting‑Providers ab, diese Anforderungen zu erfüllen. In der Reihenfolge von am meisten bis am wenigsten opinionsabhängig sollten die folgenden Optionen einige Orientierung bieten.

#### Snapshots

Snapshots sind die Silberpfeile zu Backups, weil sie einfach, unkompliziert (bis Sie wiederherstellen möchten) und „funktionieren“. Es erfordert jedoch etwas Hilfe von Ihrem Provider und gilt hauptsächlich, wenn Sie einen VPS (Virtual Private Server) oder Ähnliches haben. Mehrere Provider, die in unserer Dokumentation zu „Kompatiblen Providern“ aufgeführt sind, bieten Backups an, die keine weitere Intervention oder Überlegung des Netzwerk‑Administrators erfordern.

Wo traditionelle Backups Dateien und Datenbanken anvisieren, zielt ein Snapshot auf die gesamte Festplatte. Das bedeutet, dass nicht nur die Daten der Site im Snapshot erfasst werden, sondern auch das Betriebssystem und die Konfiguration. Für viele ist dies ein deutlicher Vorteil, da ein neues System nahezu sofort aus einem Snapshot erzeugt und in Betrieb genommen werden kann, um eine kranke Instanz zu ersetzen. Ebenso erfordert der Wiederherstellungsprozess, um Dateien abzurufen, lediglich das Anhängen des Snapshot‑Images als Festplatte an eine bestehende Instanz, damit die Dateien zugänglich und kopierbar sind.

Snapshots können zusätzliche Kosten beim Hosting‑Provider verursachen, sind aber eine Versicherung gegen Unfälle.

#### Externe Skripte

Es scheint keine Knappheit an externen Skripten und Lösungen zu geben, um WordPress und MySQL‑Ressourcen zu sichern, und diese würden gut für Ultimate Multisite funktionieren, da es ein WordPress‑Plugin ist, das das WordPress‑Dateisystem und die Datenbank nutzt. Daher würde eine Lösung, die WordPress‑Sites sichert, die Bedürfnisse von Ultimate Multisite ausreichend abdecken.

Wir können kein Skript über ein anderes empfehlen, aber unser allgemeiner Rat ist, mehrere Backup‑ und Wiederherstellungstests durchzuführen, um sicherzustellen, dass die Ergebnisse erwünscht sind, und „sicherzustellen, dass Sie sicher sind“, indem Sie das Skript und seine Funktionalität kontinuierlich bewerten, insbesondere wenn eine Art differenzieller Backup‑Strategie angewendet wird.

Es sollte beachtet werden, dass diese Skripte, während sie laufen, die Systemlast erhöhen, was berücksichtigt werden sollte.

#### Plugins

Es gibt praktisch kein Problem in WordPress, das nicht mit einem Plugin gelöst werden kann, und wenn das Verwalten externer Skripte nicht Ihre Sache ist, ist vielleicht ein Plugin die nächste beste Option.

Obwohl Plugins in Optionen und Funktionen variieren, führen sie im Wesentlichen die gleiche Funktion aus, nämlich eine Kopie der WordPress‑Dateien und Datenbankinhalte zu erstellen. Danach unterscheiden sich die Funktionen, da einige Plugins die Backups an externe Dienste wie Google Drive oder Dropbox oder an einen kompatiblen Objektspeicher wie S3, Wasabi oder andere senden können. Die umfassenderen Plugins bieten differenzielle Backups oder eine Art Strategie, um nur Daten zu sichern, die sich geändert haben, um externe Speicherkosten zu sparen.

Bei der Auswahl Ihres Plugins achten Sie darauf, dass es multisite‑bewusst ist. Aufgrund seiner Betriebsweise können Sie während der Ausführung des Backups vorübergehend eine Last auf dem Server erwarten, bis der Prozess abgeschlossen ist.

#### Domain und SSL

Wie bereits besprochen, gibt es bereits viel über Domainnamen im Multisite‑Subdomain‑Modus. Eine nahezu universelle Lösung für Netzwerk‑Administratoren ist die Verwendung von Wildcard‑DNS‑Einträgen.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Dieser Typ DNS‑Eintrag löst _Subdomains_ wie „site1.domain.com“ und „site2.domain.com“ erfolgreich auf eine IP-Adresse von 1.2.3.4 auf, wodurch Ultimate Multisite und in größerem Umfang WordPress Multisite im Subdomain‑Modus unterstützt werden.

Dies kann für HTTP hervorragend funktionieren, da der Zielhost aus den HTTP‑Headern gelesen wird, aber selten ist das Web so einfach, dass sichere HTTPS‑Transaktionen fast obligatorisch sind.

Glücklicherweise gibt es einfache Optionen für SSL‑Zertifikate. Im _Subdirectory_-Modus kann ein reguläres Domainzertifikat verwendet werden. Diese sind leicht und kostenlos von Hosting‑Providern erhältlich, die möglicherweise den kostenlosen LetsEncrypt‑Dienst oder eine andere Quelle nutzen. Andernfalls sind sie kommerziell von Behörden erhältlich, wenn Sie in der Lage sind, die Zertifikatsignieranforderung zu generieren.

Im _Subdomain_-Modus wird die Verwendung eines Wildcard‑SSL‑Zertifikats perfekt mit einer Wildcard‑Domain kombiniert und ermöglicht es dem Zertifikat, autoritativ für die Root‑Domain und alle _Subdomains_ ohne zusätzliche Konfiguration zu sein.

Allerdings sollte beachtet werden, dass Wildcard‑SSL‑Zertifikate möglicherweise nicht mit Diensten wie Cloudflare funktionieren, es sei denn, Sie haben einen Enterprise‑Plan oder setzen den Eintrag auf DNS‑nur, wodurch alle Caching‑ und Optimierungsfunktionen umgangen werden.

Out‑of‑the‑Box bietet Ultimate Multisite eine Lösung für dieses Problem, die unsere umfangreiche Erfahrung mit den Bedürfnissen von WordPress‑Multisites demonstriert. Die Aktivierung dieses einfachen Add‑Ons lässt Ultimate Multisite Ihre Cloudflare‑Anmeldeinformationen nutzen, um automatisch DNS‑Einträge für Netzwerk‑Sites in Cloudflare hinzuzufügen und deren Modus auf „proxied“ zu setzen. Auf diese Weise hat jede Netzwerk‑Unterseite, wenn sie erstellt wird, den vollen Schutz und die Vorteile von Cloudflare, einschließlich SSL.

Je nach Art und Zweck Ihrer Ultimate Multisite‑Installation kann es erforderlich sein, dass Kunden ihre eigenen Domains verwenden. In diesem Fall ist der Netzwerk‑Administrator dafür verantwortlich, zwei Probleme zu lösen. Erstens die Hosting‑Domain und zweitens SSL‑Zertifikate für die Domain.

Für viele ist die Verwendung von Cloudflare eine einfache Option. Der Kunde muss lediglich seine Domain auf Cloudflare setzen, einen CNAME auf die Root‑Domain von Ultimate Multisite verweisen und seine Domain in Ultimate Multisite mappen, um von seiner benutzerdefinierten Domain zu profitieren.

Außerhalb davon müssen alternative Lösungen gesucht werden, weshalb Ultimate Multisite eine Liste kompatibler Provider empfiehlt. Dies liegt daran, dass der Prozess der Einrichtung von DNS und SSL ein nicht trivialer Prozess sein kann. Mit der Integration von Ultimate Multisite in diese Provider wird die Komplexität jedoch stark reduziert und das Verfahren automatisiert.

#### Plugins

Es ist sehr wahrscheinlich, dass Sie zusätzliche Plugins benötigen, um Ihren Kunden oder Netzwerk‑Sites Funktionalität bereitzustellen. Funktionieren alle Plugins mit WordPress Multisite und Ultimate Multisite? Nun, es hängt ab.

Obwohl die meisten Plugins in einer WordPress Multisite installierbar sind, variieren Aktivierung und Lizenzierung je nach Autor.

Die Herausforderung besteht darin, wie die Lizenzierung bei einigen Plugins pro Domain angewendet wird. Das würde bedeuten, dass der Netzwerk‑Administrator die Lizenz für jedes Plugin auf jeder neuen Site manuell aktivieren müsste.

Daher ist es am besten, den Plugin‑Autor zu fragen, wie sein Plugin mit einer WordPress Multisite funktioniert und welche speziellen Anforderungen oder Verfahren erforderlich sind, um es zu lizenzieren.
