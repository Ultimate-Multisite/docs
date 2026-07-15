---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite ist ein WordPress Multisite plugin, mit dem du Kunden ein WaaS oder Websites as a Service anbieten kannst. Bevor wir einsteigen und lernen, wie Ultimate Multisite deinem Unternehmen und deinen Kunden helfen kann, müssen wir uns einige Grundlagen aneignen.

## Das WordPress Multisite {#the-wordpress-multisite}

Die meisten von uns sind mit der standardmäßigen WordPress-Installation vertraut. Du erstellst sie entweder über das Control Panel deines Hosting-Anbieters oder, für die Mutigen, richtest einen neuen Webserver und eine Datenbank ein, lädst die Core-Dateien herunter und beginnst mit dem Installationsprozess.

Das funktioniert für Millionen von WordPress-Websites auf der ganzen Welt, aber aus der Perspektive einer Agentur oder eines Hosting-Anbieters sprechen wir kurz über Volumen.

Während es ein Kinderspiel ist, eine WordPress-Website oder sogar hundert über ein automatisiertes Control Panel zu erstellen, zeigen sich bald Probleme, wenn es um die Verwaltung dieser Websites geht. Unverwaltet bist du ein primäres Ziel für Malware. Verwalten bedeutet Aufwand und Ressourcen, und obwohl externe Tools und Plugins verfügbar sind, die dabei helfen, die Verwaltung und Administration von WordPress-Websites zu optimieren, bedeutet die Tatsache, dass Kunden administrativen Zugriff behalten, dass diese Bemühungen leicht zunichtegemacht werden könnten.

Im Core stellt WordPress eine Funktion bereit, die schlicht „Multisite“ heißt und deren Ursprünge bis ins Jahr 2010 zur Einführung von WordPress 3.0 zurückreichen. Seitdem hat sie eine Reihe von Überarbeitungen erhalten, die darauf abzielten, neue Funktionen einzuführen und die Sicherheit zu erhöhen.

Im Wesentlichen kann man sich eine WordPress multisite so vorstellen: Eine Universität betreibt eine einzelne Installation von WordPress, aber jede Fakultät betreibt ihre eigene WordPress-Website.

Um diese Aussage aufzuschlüsseln, sehen wir uns einige der grundlegenden Begriffe an, die nicht nur in der Dokumentation von Ultimate Multisite, sondern auch in der gesamten WordPress-Community vorkommen.

### Das Network {#the-network}

Im Sinne von WordPress ist ein Multisite-Netzwerk der Ort, an dem eine Anzahl von Unterseiten über ein einzelnes Dashboard verwaltet werden kann. Obwohl sich das Erstellen eines Multisite-Netzwerks je nach Hosting-Anbieter unterscheidet, ist das Endergebnis in der Regel ein paar zusätzliche Direktiven in der Datei wp-config.php, damit WordPress weiß, dass es in diesem speziellen Modus betrieben wird.

Es gibt eine Reihe deutlicher Unterschiede zwischen einem Multisite-Netzwerk und einer eigenständigen WordPress-Installation, die wir kurz besprechen werden.

#### Subdomain vs. Unterverzeichnis {#subdomain-vs-subdirectory}

Eine der unmittelbarsten Entscheidungen, die du treffen musst, ist, ob die Multisite-Installation mit _Unterverzeichnissen_ oder _Subdomains_ betrieben wird. Ultimate Multisite funktioniert mit beiden Optionen gleichermaßen gut, aber es gibt einige architektonische Unterschiede zwischen den beiden Konfigurationen.

In der _Unterverzeichnis_-Konfiguration erben Netzwerk-Websites einen Pfad basierend auf dem Haupt-Domainnamen. Zum Beispiel hat eine Netzwerk-Website mit der Bezeichnung „site1“ ihre vollständige URL als https://domain.com/site1. In der _Subdomain_-Konfiguration hat die Netzwerk-Website ihre eigene _Subdomain_, die vom Haupt-Domainnamen abgeleitet ist. Somit hat eine Website mit der Bezeichnung „site1“ ihre vollständige URL als https://site1.domain.com/.

Während beide Optionen vollkommen gültige Entscheidungen sind, bietet die Verwendung von _Subdomains_ eine Reihe von Vorteilen, erfordert aber auch mehr Überlegung und Planung in ihrer Architektur.

In Bezug auf DNS stellt die Verwendung von _Unterverzeichnissen_ eine relativ einfache Herausforderung dar. Da Netzwerk-Websites einfach Kinder des übergeordneten Pfads sind, muss nur ein einzelner Domainnameneintrag für den Haupt-Domainnamen existieren. Für _Subdomains_ ist die Herausforderung etwas komplexer und erfordert entweder einen separaten CNAME-Eintrag für jede Netzwerk-Website oder einen Wildcard-Eintrag (*) in den DNS-Einträgen.

Ein weiterer zu berücksichtigender Bereich ist SSL sowie die Ausstellung und Verwendung von SSL-Zertifikaten. In der _Unterverzeichnis_-Konfiguration kann ein einzelnes Domain-Zertifikat verwendet werden, da die Netzwerk-Websites einfach Pfade des Haupt-Domainnamens sind. Somit stellt ein Zertifikat für domain.com SSL für https://domain.com/site1, https://domain.com/site2 und so weiter angemessen bereit.

In der _Subdomain_-Konfiguration ist die Verwendung eines Wildcard-SSL-Zertifikats eine der gängigsten Optionen. Diese Art von SSL-Zertifikat stellt Verschlüsselung für eine Domain und ihre _Subdomains_ bereit. Daher stellt ein Wildcard-SSL-Zertifikat Verschlüsselung für https://site1.domain.com, https://site2.domain.com und https://domain.com selbst bereit.

Obwohl es andere Optionen gibt, sind diese oft in Umfang und Anwendung begrenzt und erfordern zusätzliche Konfiguration und Überlegungen hinsichtlich ihrer Eignung.

#### Plugins und Themes {#plugins-and-themes}

Was WordPress gibt, nimmt es auch wieder, zumindest aus der Perspektive des Kunden. In einer eigenständigen WordPress-Installation ist, wenn der Website-Administrator ein schlechtes Plugin installiert oder es versäumt, seine Installation aktuell zu halten, das einzige Opfer und der einzige Leidtragende dieser Handlung er selbst. Wenn jedoch ein Website-Administrator ein schlechtes Plugin in einer Multisite-Installation installiert, wird jede im Netzwerk installierte Website zum Opfer.

Aus diesem Grund entfernt WordPress, wenn es als Multisite konfiguriert ist, die Fähigkeit von Website-Administratoren, Plugins und Themes zu installieren, und verschiebt diese Fähigkeit stattdessen auf eine neu erstellte Netzwerkadministrator- oder „Super Admin“-Rolle. Diese privilegierte Rolle kann dann entscheiden, ob Administratoren von Netzwerk-Websites das Plugins-Menü in ihrem Dashboard sehen oder darauf zugreifen dürfen und, falls ja, ob sich solche Berechtigungen auf das _Aktivieren_ oder _Deaktivieren_ von Plugins erstrecken.

In diesem Umfang ist der Netzwerkadministrator dafür verantwortlich, Plugins und Themes im Netzwerk zu installieren, und delegiert Berechtigungen zur Nutzung dieser Plugins und Themes an Netzwerk-Websites. Website-Administratoren können keine Plugins und Themes installieren oder auf Plugins und Themes zugreifen, die ihrer Website nicht zugewiesen sind.

#### Benutzer und Administratoren {#users-and-administrators}

In einem WordPress Multisite teilen sich alle Netzwerk-Websites dieselbe Datenbank und daher dieselben Benutzer, Rollen und Berechtigungen. Am treffendsten kann man es sich so vorstellen, dass alle Benutzer Mitglieder des Netzwerks sind und nicht einer bestimmten Website.

Angesichts dieses Verständnisses kann es unerwünscht sein, zuzulassen, dass Benutzer erstellt werden, und aus diesem Grund entfernt WordPress Multisite diese Berechtigung von den Website-Administratoren und verschiebt diese Berechtigung zum Netzwerkadministrator. Der Netzwerkadministrator kann wiederum die notwendigen Rechte an einen Website-Administrator delegieren, damit dieser Benutzerkonten für seine eigene Website erstellen kann.

<!-- Screenshot nicht verfügbar: WordPress Multisite-Oberfläche zur Benutzerverwaltung im Netzwerk -->

Um die obige Aussage zu wiederholen: Obwohl die Benutzerkonten so erscheinen, als wären sie mit der Website verbunden, sind sie tatsächlich dem Netzwerk zugewiesen und müssen daher im gesamten Netzwerk eindeutig sein. Aus diesem Grund kann es Fälle geben, in denen Benutzernamen nicht zur Registrierung verfügbar sind.

Obwohl dies in Unternehmenssystemen kein fremdes Konzept ist, ist diese zentrale Quelle für Benutzerregistrierung und Authentifizierung für Personen, die mit eigenständigen WordPress-Installationen vertraut sind, in denen die Benutzerverwaltung etwas einfacher ist, oft ein schwer verständliches Konzept.

#### Medien {#media}

Wenn Netzwerk-Websites in einem WordPress Multisite eine einzelne Datenbank gemeinsam nutzen, behalten sie getrennte Pfade im Dateisystem für Mediendateien bei.

Der Standard-Speicherort von WordPress (wp-content/uploads) bleibt bestehen; sein Pfad wird jedoch geändert, um die eindeutige ID der Netzwerk-Website widerzuspiegeln. Folglich erscheinen Mediendateien für eine Netzwerk-Website als wp-contents/uploads/site/[id].

#### Permalinks {#permalinks}

Wir haben zuvor erwähnt, dass es deutliche Vorteile der _subdomain_- gegenüber der _subdirectory_-Konfiguration gibt, und hier ist einer davon: Pfade.

In einer _subdirectory_-Konfiguration müssen die Haupt-Website (die erste Website, die beim Einrichten des Netzwerks erstellt wird) und Netzwerk-Unterwebsites denselben Pfad verwenden, der vom Domainnamen ausgeht. Dies birgt das Potenzial für eine große Anzahl von Konflikten.

Für Beiträge wird der Haupt-Website ein obligatorischer /blog/-Pfad hinzugefügt, um Kollisionen mit Netzwerk-Websites zu verhindern. Das bedeutet, dass schöne Permalinks wie „Beitragsname“ als domain.name/blog/post-name/ dargestellt werden.

<!-- Screenshot nicht verfügbar: WordPress-Permalink-Einstellungen mit /blog/-Pfad in der Subdirectory-Konfiguration -->

In einer _subdomain_-Konfiguration ist diese Maßnahme nicht notwendig, da jede Netzwerk-Website von einer vollständigen Domaintrennung profitiert und daher nicht auf einen einzigen Pfad angewiesen sein muss. Stattdessen behalten sie ihre eigenen, auf ihrer _subdomain_ basierenden, eindeutigen Pfade bei.

<!-- Screenshot nicht verfügbar: WordPress-Permalink-Einstellungen für Subdomain-Konfiguration -->

#### Statische Seiten {#static-pages}

In der _subdirectory_-Konfiguration erstreckt sich das Potenzial für Namenskonflikte auf statische Seiten, da die Haupt-Website und die Netzwerk-Websites denselben Pfad gemeinsam nutzen.

Um dies zu verhindern, stellt WordPress eine Möglichkeit bereit, bestimmte Website-Namen auf eine Sperrliste zu setzen, damit sie nicht mit den Namen der ersten Website kollidieren. Typischerweise würde der Netzwerkadministrator die Stamm-Pfade der Seiten der Haupt-Website eintragen.

<!-- Screenshot nicht verfügbar: WordPress-Netzwerkeinstellungen mit gesperrten Website-Namen zur Vermeidung von Konflikten -->

In der _subdomain_-Konfiguration wird die Möglichkeit von Namenskonflikten durch die _subdomain_ abgeschwächt, da sie für die Netzwerk-Website eindeutig ist und in keiner Weise mit der Haupt-Website verbunden ist.

### Registrierung {#registration}

Innerhalb der Netzwerkeinstellungen von WordPress Multisite stehen mehrere neue Optionen zur Benutzerregistrierung zur Verfügung, die es neuen und bestehenden Benutzern ermöglichen, Websites zu erstellen.

<!-- Screenshot nicht verfügbar: WordPress Multisite-Netzwerkeinstellungen mit Registrierungsoptionen -->

Im Gegensatz zu eigenständigen WordPress-Installationen behalten Netzwerk-Websites nicht die vertrauten Optionen bei, Benutzerregistrierungen zu erlauben oder diese Registrierungen Rollen zuzuweisen.

<!-- Screenshot nicht verfügbar: Einstellungen zur Benutzerregistrierung einer eigenständigen WordPress-Website mit begrenzten Optionen -->

Wenn Benutzerkonten erstellt werden, werden diese Konten auf Netzwerkebene generiert. Somit gehören sie nicht zu einer bestimmten Website, sondern zum Netzwerk. Dies hat einige deutliche Vor- und Nachteile.

Nehmen wir zum Beispiel an, Ihr WordPress Multisite wäre im Bereich Nachrichten und Informationen tätig. Sie würden das Multisite einrichten und dann Netzwerk-Websites für Finanzen, Technologie, Unterhaltung und andere Interessengebiete erstellen, während Sie die Gesamtkontrolle über Erweiterungen und Designs behalten. Jede Netzwerk-Website hätte wiederum ein weit höheres Maß an Kontrolle über das Erscheinungsbild und die Benutzererfahrung ihrer Netzwerk-Website, als es benutzerdefinierte Beitragstypen oder reguläre Beitragskategorien hätten.

In diesem Sinne meldet sich ein Benutzer, wenn er sich anmeldet, beim Netzwerk an und ist letztlich auch bei jeder Netzwerk-Website angemeldet, um eine nahtlose Erfahrung zu bieten. Wenn Ihre neue Website abonnementbasiert wäre, wäre dies die ideale Lösung und das ideale Ergebnis.

Wenn jedoch die beabsichtigte Art und der Zweck des Multisite darin bestünden, unterschiedliche Netzwerk-Websites anzubieten, die keine Beziehung zueinander haben, ist es fast immer der Fall, dass externe oder zusätzliche Erweiterungen erforderlich sind, um die Benutzerrollen zu manipulieren.

### Domain und SSL {#domain-and-ssl}

Sprechen wir über eine WordPress Multisite-Installation, die unserer Aufmerksamkeit fast entgeht – WordPress.com. Dies ist bei Weitem das umfangreichste Beispiel für ein WordPress Multisite und demonstriert dessen weitreichende Möglichkeiten, angepasst und geformt zu werden, um einen Zweck zu erfüllen.

Heutzutage ist im modernen Internet die Nutzung von SSL nahezu obligatorisch, und Netzwerkadministratoren von WordPress Multisites werden bald mit diesen Herausforderungen konfrontiert.

In der _subdomain_-Konfiguration werden Websites basierend auf dem Root-Domainnamen erstellt. Somit würde eine Website mit der Bezeichnung „site1“ als „site1.domain.com“ erstellt. Durch die Verwendung eines Wildcard-SSL-Zertifikats kann ein Netzwerkadministrator diese Herausforderung erfolgreich bewältigen und SSL-Verschlüsselungsfähigkeiten für das Netzwerk bereitstellen.

WordPress Multisite enthält eine Domain-Mapping-Funktion, die es ermöglicht, Netzwerk-Websites mit benutzerdefinierten Domainnamen oder Domainnamen zu verknüpfen, die sich von der Root-Domain des Netzwerks unterscheiden.

Für Netzwerkadministratoren stellt dies eine zusätzliche Komplexitätsebene dar, sowohl bei der Konfiguration von Domainnamen als auch bei der Ausstellung und Wartung von SSL-Zertifikaten.

In diesem Umfang bietet WordPress Multisite zwar eine Möglichkeit, [www.anotherdomain.com](http://www.anotherdomain.com) auf „site1“ abzubilden, der Netzwerkadministrator steht jedoch vor der Herausforderung, die DNS-Einträge und die Implementierung von SSL-Zertifikaten extern zu verwalten.

## Ultimate Multisite {#ultimate-multisite}

Nachdem die Unterschiede zwischen einer eigenständigen WordPress-Installation und einer Multisite-Installation verstanden sind, schauen wir uns an, wie Ultimate Multisite das ultimative Arsenal für die Bereitstellung von Websites as a Service ist.

### Einführung {#introduction}

Ultimate Multisite ist dein Schweizer Taschenmesser, wenn es darum geht, eine Website as a Service (WaaS) zu erstellen. Denke an Wix.com, Squarespace, WordPress.com und dann daran, deinen eigenen Dienst zu besitzen.

Unter der Haube nutzt Ultimate Multisite WordPress Multisite, tut dies jedoch auf eine Weise, die nicht nur die Vielzahl von Herausforderungen löst, mit denen Netzwerkadministratoren bei Multisite-Installationen konfrontiert sind, sondern auch die Fähigkeiten erweitert, sodass eine große Bandbreite an Anwendungsfällen unterstützt werden kann.

In den folgenden Abschnitten werfen wir einen Blick auf einige häufige Anwendungsfälle und die Überlegungen, die erforderlich sind, um diese Fälle zu unterstützen.

### Anwendungsfälle {#use-cases}

#### Fall 1: Eine Agentur {#case-1-an-agency}

Typischerweise liegen die Kernkompetenzen einer Agentur im Design von Websites, wobei Aspekte wie deren Hosting oder Marketing als zusätzliche Dienstleistungen aufgeführt werden.

Für Agenturen bietet Ultimate Multisite ein unglaubliches Wertversprechen durch seine Fähigkeiten, mehrere Websites auf einer einzigen Plattform zu hosten und zu verwalten. Noch mehr können Agenturen, die ihre Designs auf bestimmte Themes wie GeneratePress, Astra, OceanWP oder andere standardisieren, die Fähigkeiten von Ultimate Multisite nutzen, diese Themes für jede neue Website automatisch zu aktivieren.

Ähnlich ermöglicht der Einsatz von Ultimate Multisite angesichts der Fülle an Angeboten für Agenturpreise bei gängigen und beliebten Plugins Agenturen, bestehende Investitionen zu nutzen, indem eine gemeinsame Plattform bereitgestellt wird, von der aus Plugins installiert, gewartet und verwendet werden können.

Höchstwahrscheinlich wäre die Verwendung einer Konfiguration gewünscht, und glücklicherweise macht Ultimate Multisite es unglaublich einfach, Domain-Mapping und SSL-Zertifikate mit seinen Integrationen für eine Reihe beliebter Hosting-Anbieter sowie Dienste wie Cloudflare und cPanel zu ermöglichen.

Durch die Nutzung eines dieser Anbieter oder indem Ultimate Multisite hinter Cloudflare platziert wird, werden Aspekte wie die Verwaltung von Domains und SSL-Zertifikaten somit ziemlich trivial.

Agenturen, die eine strenge Kontrolle über die Erstellung von Websites behalten möchten, werden die Einfachheit zu schätzen wissen, mit der sie über die optimierte Oberfläche von Ultimate Multisite Websites erstellen und Websites mit Kunden und Plänen verknüpfen können.

![Ultimate Multisite Oberfläche zur Website-Verwaltung](/img/admin/sites-list.png)

Eine strenge Kontrolle über Plugins und Themes wird pro Produkt über die intuitiven Oberflächen von Ultimate Multisite aufrechterhalten, sodass Plugins und Themes verfügbar gemacht oder ausgeblendet werden können, ebenso wie ihr Aktivierungsstatus, wenn sie für eine neue Website instanziiert werden.

![Oberfläche für Produkt-Plugin-Einschränkungen](/img/config/product-plugins.png)

Themes bieten ähnliche Funktionalität und ermöglichen, dass bestimmte Themes bei der Website-Erstellung aktiviert oder ausgeblendet werden.

![Oberfläche für Produkt-Theme-Einschränkungen](/img/config/product-themes.png)

Agenturen werden mit Ultimate Multisite beruhigt sein, da es ihnen ermöglicht, das zu tun, was sie am besten können – außergewöhnliche Websites zu gestalten.

#### Fall 2: Nischenanbieter {#case-2-niche-provider}

Es gibt ein altes Sprichwort, das sagt: „Mach eine Sache und mach sie gut“. Für viele Spezialisten bedeutet dies, ein Produkt oder einen Dienst rund um eine einzelne Kernidee zu erstellen.

Vielleicht bist du ein begeisterter Golfer, der Websites für Clubs bewirbt, oder du bist ein begeisterter E-Sport-Spieler, der Websites für Clans bereitstellt. Vielleicht eine Einzelperson, die einen Buchungsdienst für Restaurants bewirbt?

Aus vielen Gründen möchtest du Dienste auf Basis eines gemeinsamen Frameworks und einer gemeinsamen Plattform bereitstellen. Es könnte sein, dass du maßgeschneiderte Plugins entwickelt oder in sie investiert hast, um die erforderliche Funktionalität bereitzustellen, oder es kann der Fall sein, dass bewährte Branchenpraktiken eine Form eines standardisierten Designansatzes erfordern.

Eine der innovativen Funktionen von Ultimate Multisite ist die Verwendung von Template-Websites. Eine Template-Website ist eine, bei der das Theme installiert und aktiviert wurde, notwendige Plugins installiert und aktiviert wurden und Beispielbeiträge oder -seiten erstellt wurden. Wenn ein Kunde eine neue Website auf Grundlage des Templates erstellt, werden die Inhalte und Einstellungen des Templates auf die neu erstellte Website kopiert.

Für einen Anbieter von Nischen-Websites und -Diensten bietet dies einen beispiellosen Vorteil in der Fähigkeit, sofort eine einsatzbereite Website mit individuellen Plugins und Design zu erstellen. Der Kunde muss nur die minimalsten Eingaben bereitstellen, um den Dienst abzuschließen.

Je nach Anforderungen können sowohl _Unterverzeichnis_- als auch _Subdomain_-Konfigurationen geeignet sein; in diesem Fall lägen die Architekturentscheidungen zwischen einem einfachen SSL-Zertifikat für _Unterverzeichnisse_ oder einem Wildcard-SSL-Zertifikat für _Subdomains_.

#### Fall 3: WordPress Webhosting {#case-3-wordpress-web-hosting}

Es gibt unzählige Möglichkeiten, WordPress-Websites zu hosten, aber selten ist es so einfach, einem Kunden Webspace mit einer vorinstallierten Version von WordPress bereitzustellen. Das liegt daran, dass eine Reihe von Entscheidungen und Überlegungen zusammenkommen müssen, um einen sinnvollen Dienst bereitzustellen.

Ultimate Multisite glänzt in diesem Bereich, indem es eine umfassende schlüsselfertige Lösung für das Hosting von WordPress-Websites bereitstellt. In der Lösung enthalten sind die Kernmechanismen zur Bereitstellung von Abonnementdiensten, Zahlungseinzug, Checkout-Formularen, Rabattgutscheinen und Kundenkommunikation.

Ein Großteil der integralen Arbeit, die erforderlich ist, um eine WordPress Multisite korrekt zu installieren, zu konfigurieren und zu warten, wird durch Ultimate Multisite so weit erleichtert, dass Netzwerkadministratoren nur Aspekte berücksichtigen müssen, die sich auf ihren Dienst oder ihre Nische beziehen, wie Produktstufen, Preisgestaltung und Serviceangebote.

Für Entwickler, die eine Integration mit Ultimate Multisite wünschen, bietet die Lösung außerdem eine umfassende RESTful API und Webhooks für Ereignisbenachrichtigungen.

Ohne Abhängigkeit von einer Vielzahl externer Plugins und Lizenzen bietet Ultimate Multisite eine funktionsreiche und vergleichbare Lösung zu Wix, Squarespace, WordPress.com und anderen.

### Architekturüberlegungen {#architecture-considerations}

Auch wenn dies kein umfassender Leitfaden ist, sollen die folgenden Punkte als Orientierung für die richtige Auswahl von Technologien dienen, die eine Ultimate Multisite-Installation unterstützen.

#### Shared vs. Dedicated Hosting {#shared-vs-dedicated-hosting}

Leider sind nicht alle Hosting-Anbieter gleich, und einige praktizieren extreme Serverdichten. Kostengünstige Anbieter erzielen in der Regel Einnahmen, indem sie die Serverdichte maximieren. Daher kann Ihre Ultimate Multisite-Installation nur eine von mehreren hundert Websites auf demselben Server sein.

Ohne geeignete Schutzmaßnahmen seitens des Anbieters erleben Websites auf einem gemeinsam genutzten Server das Problem des „lauten Nachbarn“. Das heißt, eine Website auf demselben Server verbraucht so viele Ressourcen, dass andere Websites um die verbleibenden Ressourcen konkurrieren müssen. Häufig äußert sich dies in Websites, die langsam sind oder nicht zeitnah reagieren.

Wenn Sie selbst Webhosting anbieten, bedeuten die Folgeeffekte, dass Ihre Kunden schlechte Geschwindigkeiten, niedrige Seitenrankings und hohe Absprungraten erleben, was oft zu Kundenabwanderung führt, da sie anderswo Dienste suchen.

Kurz gesagt: billig bedeutet nicht gut.

Ultimate Multisite funktioniert nachweislich mit einer Reihe guter Hosting-Anbieter und integriert sich gut in deren Umgebung, um Funktionen wie Domain-Mapping und automatisches SSL bereitzustellen. Diese Anbieter legen Wert auf Leistung und bieten einen höherwertigen Dienst als Shared Hosting.

Eine Liste kompatibler Anbieter und vollständige Einrichtungsanweisungen für jeden finden Sie in der Dokumentation der Compatible Providers.

#### Leistungsüberlegungen {#performance-considerations}

Ultimate Multisite ist keine langsame Anwendung, vielmehr ist sie bemerkenswert schnell. Sie arbeitet jedoch nur so gut wie die zugrunde liegende Anwendung und Infrastruktur und kann nur das nutzen, worauf sie Zugriff hat.

Bedenken Sie Folgendes: Sie sind der Netzwerkadministrator einer Ultimate Multisite-Installation mit 100 Websites. Einige dieser Websites laufen gut und ziehen täglich eine Anzahl von Website-Besuchern an.

Dieses Szenario wäre in kleinerem Maßstab, etwa bei einer bis fünf Websites, anders, aber schon bald würden Skalierungsprobleme sichtbar werden.

Ohne weiteres Eingreifen wäre die einzelne Ultimate Multisite-Website dafür verantwortlich, die Anfragen aller Besucher an die Websites zu erfüllen. Diese Anfragen könnten dynamische PHP-Seiten oder statische Assets wie Stylesheets, JavaScript oder Mediendateien betreffen. Ob eine oder hundert Websites: Diese Aufgaben werden repetitiv, monoton und verschwenderisch. Es ist unnötig, CPU-Leistung und Speicher zu verwenden, um eine PHP-Datei zu verarbeiten, wenn die Ausgabe für jede Anfrage dieselbe statische Information ist.

Ebenso erzeugt eine Anfrage nach einer PHP- oder HTML-Seite wiederum mehrere nachfolgende Anfragen nach Skripten, Stylesheets und Bilddateien. Diese Anfragen richten sich direkt an Ihren Ultimate Multisite-Server.

Man könnte dieses Problem leicht lösen, indem man den Server aufrüstet, aber das behebt ein zweites Problem nicht – geografische Latenzen. Nur mehrere Server an mehreren Standorten könnten dieses Problem angemessen angehen.

Aus diesem Grund nutzen die meisten Netzwerkadministratoren Frontend-Caching-Lösungen und Content-Distribution-Networks (CDN), um Anfragen nach statischen Seiten zu erfüllen. Diese Anfragen zu erfüllen und Assets auszuliefern, bevor die Anfrage den Server erreicht, spart Verarbeitungsressourcen, beseitigt Verzögerungen, vermeidet unnötige Upgrades und maximiert Technologieinvestitionen.

Ultimate Multisite enthält ein ausgefeiltes Cloudflare-Add-on, das Netzwerkadministratoren ermöglicht, ihre Installationen hinter Cloudflare zu platzieren und nicht nur dessen Caching-Fähigkeiten, sondern auch DNS-Hosting, SSL-Zertifikate und Sicherheitsmechanismen zu nutzen.

#### Backups {#backups}

Man könnte 50 Personen um Rat zu Backups bitten und 50 verschiedene Meinungen zu Backup-Strategien erhalten. Die Antwort lautet: Es kommt darauf an.

Unbestritten ist, dass Backups erforderlich sind und dass es nahezu unvorstellbar ist, dass diese nicht vom Anbieter verwaltet werden, insbesondere wenn dieser einen verwalteten Dienst anbietet. Folglich werden Kunden vom Netzwerkadministrator erwarten, dass er diesen Dienst bereitstellt und verwaltet. An wen sich der Netzwerkadministrator wendet, ist ein völlig anderes Problem.

Für die Zwecke dieses Abschnitts einigen wir uns darauf, dass ein Backup eine Zeitpunktkopie des Systemzustands zum Zeitpunkt der Initiierung des Backups ist. Einfach ausgedrückt: Welcher Zustand des Systems zum Zeitpunkt des Backups auch immer besteht, dieser Zustand wird erfasst und im Backup eingeschlossen.

Mit diesem Verständnis hängt die Antwort darauf, wie die Backups erreicht werden und was für Ihre Umgebung am besten ist, weitgehend von Ihren Anforderungen und der Fähigkeit des Hosting-Anbieters ab, diese Anforderungen zu erfüllen. Die folgenden Optionen sollten jedoch, in der Reihenfolge von am stärksten meinungsbehaftet bis am wenigsten meinungsbehaftet, etwas Orientierung bieten.

#### Snapshots {#snapshots}

Snapshots sind die Wunderwaffe für Backups, weil sie einfach, unkompliziert (bis Sie wiederherstellen möchten) sind und „einfach funktionieren“. Dafür ist allerdings etwas Unterstützung von Ihrem Anbieter erforderlich, und es gilt meist nur, wenn Sie einen VPS (Virtual Private Server) oder Ähnliches haben. Mehrere Anbieter, die in unserer Dokumentation „Compatible Providers“ aufgeführt sind, bieten Backups an, die kein weiteres Eingreifen oder Nachdenken durch den Netzwerkadministrator erfordern.

Während traditionelle Backups auf Dateien und Datenbanken abzielen, zielt ein Snapshot auf die gesamte Festplatte ab. Das bedeutet, dass nicht nur die Daten der Website im Snapshot erfasst werden, sondern auch das Betriebssystem und die Konfiguration. Für viele ist dies ein klarer Vorteil, da aus einem Snapshot nahezu sofort ein neues System erstellt und in Betrieb genommen werden kann, um eine angeschlagene Instanz zu ersetzen. Ebenso erfordert der Wiederherstellungsprozess zum Abrufen von Dateien lediglich, das Snapshot-Image als Festplatte an eine bestehende Instanz anzuhängen, sodass auf die Dateien zugegriffen und sie kopiert werden können.

Snapshots können beim Hosting-Anbieter zusätzliche Kosten verursachen, aber sie sind eine Versicherung gegen Unfälle.

#### Externe Skripte {#external-scripts}

Es scheint keinen Mangel an externen Skripten und Lösungen zu geben, um WordPress- und MySQL-Ressourcen zu sichern, und diese würden gut für Ultimate Multisite funktionieren, da es ein WordPress-Plugin ist, das das WordPress-Dateisystem und die Datenbank nutzt. Daher würde eine Lösung, die WordPress-Websites sichert, die Anforderungen von Ultimate Multisite angemessen abdecken.

Wir können kein bestimmtes Skript gegenüber einem anderen empfehlen, aber unser allgemeiner Rat ist, mehrere Sicherungs- und Wiederherstellungstests durchzuführen, um sicherzustellen, dass die Ergebnisse den Erwartungen entsprechen, und „auf Nummer sicher zu gehen“, indem das Skript und seine Funktionalität kontinuierlich bewertet werden, insbesondere wenn irgendeine Form einer differentiellen Sicherungsstrategie angewendet wird.

Es sollte beachtet werden, dass diese Skripte während der Ausführung die Systemlast erhöhen, was berücksichtigt werden sollte.

#### Plugins {#plugins}

Es gibt in WordPress fast kein Problem, das nicht mit einem Plugin gelöst werden kann, und wenn das Verwalten externer Skripte nicht Ihr Ding ist, dann ist vielleicht ein Plugin die nächstbeste Option.

Obwohl sich Plugins in Optionen und Funktionen unterscheiden, erfüllen sie meist dieselbe Funktion, nämlich eine Kopie der WordPress-Dateien und der Datenbankinhalte zu erstellen. Danach unterscheiden sich die Funktionalitäten, da einige Plugins die Sicherungen an externe Dienste wie Google Drive oder Dropbox oder an eine Art kompatiblen Objektspeicherdienst wie S3, Wasabi oder andere übertragen können. Die umfassenderen Plugins bieten differentielle Sicherungen oder irgendeine Art von Strategie, um nur Daten zu sichern, die geändert wurden, um externe Speicherkosten zu sparen.

Achten Sie bei der Auswahl Ihres Plugins darauf, zu überprüfen, dass es multisite-fähig ist. Aufgrund seiner Funktionsweise können Sie während der laufenden Sicherung mit einer vorübergehenden Last auf dem Server rechnen, bis der Prozess abgeschlossen ist.

#### Domain und SSL {#domain-and-ssl-1}

Über Domainnamen im multisite-_subdomain_-Modus wurde bereits viel diskutiert. Eine nahezu universelle Lösung für Netzwerkadministratoren ist die Verwendung von Wildcard-DNS-Einträgen.

![Beispiel für die Konfiguration eines Wildcard-DNS-Eintrags](/img/config/settings-domain-mapping.png)

Diese Art von DNS-Eintrag löst _Subdomains_ wie „site1.domain.com“ und „site2.domain.com“ erfolgreich auf eine IP-Adresse von 1.2.3.4 auf und unterstützt damit Ultimate Multisite und in größerem Umfang WordPress Multisite im _subdomain_-Modus.

Dies kann für HTTP perfekt funktionieren, da der Ziel-Host aus den HTTP-Headern gelesen wird, aber selten ist das Web heutzutage so einfach, da sichere HTTPS-Transaktionen fast obligatorisch sind.

Glücklicherweise gibt es einfache Optionen für SSL-Zertifikate. Im _subdirectory_-Modus kann ein reguläres Domain-Zertifikat verwendet werden. Diese sind leicht und kostenlos bei Hosting-Anbietern erhältlich, die möglicherweise den kostenlosen LetsEncrypt-Dienst oder eine andere Quelle verwenden. Andernfalls sind diese kommerziell bei Zertifizierungsstellen erhältlich, wenn Sie in der Lage sind, die Zertifikatsignierungsanforderung zu erstellen.

Für den _subdomain_-Modus passt die Verwendung eines Wildcard-SSL-Zertifikats perfekt zu einer Wildcard-Domain und ermöglicht es dem Zertifikat, für die Root-Domain und alle _Subdomains_ ohne zusätzliche Konfiguration autoritativ zu sein.

Es sollte jedoch beachtet werden, dass Wildcard-SSL-Zertifikate möglicherweise nicht mit Diensten wie Cloudflare funktionieren, es sei denn, Sie haben einen Enterprise-Plan oder stellen den Eintrag auf Nur-DNS ein; in diesem Fall werden sämtliches Caching und sämtliche Optimierung umgangen.

Standardmäßig bietet Ultimate Multisite eine Lösung für dieses Problem und zeigt damit unsere umfassende Erfahrung mit den Anforderungen von WordPress-Multisites. Durch Aktivieren dieses einfachen Add-ons nutzt Ultimate Multisite Ihre Cloudflare-Zugangsdaten, um automatisch DNS-Einträge für Netzwerk-Websites in Cloudflare hinzuzufügen und deren Modus auf „proxied“ zu setzen. Auf diese Weise erhält jede Netzwerk-Subsite bei ihrer Erstellung den vollständigen Schutz und die Vorteile von Cloudflare einschließlich SSL.

Je nach Art und Zweck Ihrer Ultimate Multisite-Installation kann es erforderlich sein, dass Kunden ihre eigenen Domains verwenden. In diesem Fall ist der Netzwerkadministrator damit betraut, zwei Probleme zu lösen. Erstens das Hosting des Domainnamens und zweitens SSL-Zertifikate für die Domain.

Für viele ist die Verwendung von Cloudflare eine einfache Option. Der Kunde muss seine Domain lediglich bei Cloudflare einrichten, einen CNAME auf die Root-Domain von Ultimate Multisite verweisen lassen und seine Domain in Ultimate Multisite zuordnen, um die Vorteile seines benutzerdefinierten Domainnamens zu nutzen.

Darüber hinaus müssen alternative Lösungen gesucht werden, weshalb Ultimate Multisite eine Liste kompatibler Anbieter empfiehlt. Das liegt daran, dass der Prozess der Einrichtung von DNS und SSL ein nicht trivialer Prozess sein kann. Mit der Integration von Ultimate Multisite in diese Anbieter wird die Komplexität jedoch weitgehend beseitigt und das Verfahren automatisiert.

#### Plugins {#plugins-1}

Es ist sehr wahrscheinlich, dass Sie zusätzliche Plugins benötigen, um Ihren Kunden oder Netzwerk-Websites Funktionalität bereitzustellen. Funktionieren alle Plugins mit WordPress Multisite und Ultimate Multisite? Nun, es kommt darauf an.

Obwohl die meisten Plugins in einer WordPress Multisite installiert werden können, variieren ihre Aktivierung und Lizenzierung von Autor zu Autor.

Die Herausforderung liegt darin, wie die Lizenzierung angewendet wird, da einige Plugins eine Lizenzierung pro Domain erfordern. Dies würde bedeuten, dass der Netzwerkadministrator bei einigen Plugins die Lizenz für jedes Plugin auf jeder neuen Website manuell aktivieren muss.

Daher ist es möglicherweise am besten, beim Plugin-Autor nachzufragen, wie sein Plugin mit einer WordPress Multisite funktionieren würde und welche besonderen Anforderungen oder Verfahren für die Lizenzierung erforderlich sind.
