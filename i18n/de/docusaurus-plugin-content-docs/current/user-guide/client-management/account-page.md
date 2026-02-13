---
title: Kundenkonto-Seite
sidebar_position: 14
_i18n_hash: 92f8a44adfaf871b0a881fbc76bc0084
---
# Ihre Kundenkonto-Seite (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Wenn Kunden ein Paket in Ihrem Netzwerk abonnieren, erhalten sie Zugriff auf eine Website und deren Dashboard mit wichtigen Informationen zu ihren Zahlungen, Mitgliedschaften, Domains, Planbeschränkungen usw.

In diesem Tutorial führen wir Sie durch die Kundenkonto-Seite und zeigen Ihnen, was Ihre Kunden dort sehen und tun können.

## Die Kontoseite

Die Kontoseite ist über **Account** im Dashboard Ihres Kunden zugänglich.

![Account menu in the customer dashboard](/img/admin/dashboard.png)

![Customer account page overview](/img/admin/dashboard.png)

Nach dem Klick auf die Seite erhalten sie einen Überblick über ihre Mitgliedschaft, Rechnungsadresse, Rechnungen, Domains, Site-Limits und können auch das ****Site Template** ändern (falls es in Ihrem Netzwerk erlaubt ist)**.

Sie können auch die Mitgliedschaft auf einen anderen Plan ändern oder ein weiteres Paket oder einen Service erwerben, den Sie anbieten. Schauen wir uns jeden Abschnitt einzeln an.

### Ihr Mitgliedschaftsüberblick:

Der erste Block direkt unter dem Namen der Website Ihres Kunden zeigt einen Überblick über den aktuellen Plan und die mit diesem erworbenen Dienste/Pakete. Der Block zeigt auch die Mitgliedsnummer, den anfänglichen Betrag, der dafür bezahlt wurde, die Kosten des Plans und aller Dienste/Pakete sowie die Anzahl der Zahlungen für diese Mitgliedschaft. Sie können auch sehen, ob die Mitgliedschaft **Active**, **Expired** oder **Canceled** ist.

![Membership overview showing plan, amount, and billing details](/img/admin/memberships-list.png)

Direkt unter diesem Block können Ihre Kunden die Blöcke **About This Site** und **Site Limits** sehen. Diese Blöcke zeigen ihnen alle Einschränkungen, die mit ihrem Plan verbunden sind: Speicherplatz, Beiträge, Seiten, Besuche usw. Diese Grenzen können auf jeder Plan-Seite unter **Ultimate Multisite > Products** konfiguriert werden.

![About This Site and Site Limits blocks showing plan limitations](/img/admin/dashboard.png)

Auf der rechten Seite von **Your Membership** können Kunden auf **Change** klicken. Dies zeigt ihnen alle verfügbaren Pläne und Pakete/Services. Wenn sie einen anderen Plan wählen, gelten die Einschränkungen dieses Plans anstelle der aktuellen Einschränkungen der Mitgliedschaft – es spielt keine Rolle, ob sie downgraden oder upgraden.

Wenn Ihre Kunden nun Pakete oder Services für diese aktuelle Mitgliedschaft erwerben – z. B. mehr Speicherplatz oder Besuche – wird die aktuelle Mitgliedschaft nicht geändert, sondern nur die neuen Pakete werden hinzugefügt.

Beachten Sie, dass Gutscheincodes auf dieser Seite zur Änderung der Mitgliedschaft nicht hinzugefügt werden können. Wenn der Kunde beim ersten Kauf der Mitgliedschaft einen Gutscheincode verwendet hat, gilt dieser Code auch für die neue Mitgliedschaft.

### Aktualisierung der Rechnungsadresse:

Auf der Kontoseite können Ihre Kunden ihre Rechnungsadresse ebenfalls aktualisieren. Sie müssen einfach auf **Update** neben _Billing Address_ klicken.

![Billing Address section with Update button](/img/admin/customers-list.png)

Ein neues Fenster öffnet sich für Ihren Kunden. Er muss lediglich die neue Adresse eingeben und auf _Save Changes_ klicken.

![Update billing address form](/img/admin/customers-list.png)

### Änderung des Site Templates:

Um Ihren Kunden die Änderung ihrer Site Templates zu ermöglichen, gehen Sie zu **Ultimate Multisite > Settings > Sites** und aktivieren die Option **Allow Template Switching**.

Außerdem wählen Sie in **Ultimate Multisite > Products** Ihre Pläne aus und gehen zum Tab **Site Templates**. Stellen Sie sicher, dass die Option **Allow Site Templates** aktiviert ist und im **Site Template Selection Mode** die Option **Choose Available Site Templates** ausgewählt ist.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Sie können alle verfügbaren Site Templates auf Ihrer Website sehen. Wählen Sie, welche Sie verfügbar machen möchten und welche nicht für Ihre Kunden unter diesem Plan verfügbar sein sollen. Beachten Sie, dass diese Optionen auch das Checkout-Formular beeinflussen, sodass ein Template, das als **Not Available** ausgewählt ist, auf der Registrierungsseite für diesen Plan nicht angezeigt wird.

Jetzt können Ihre Kunden auf **Change Site Template** in ihrer Kontoseite klicken.

![Change Site Template button on account page](/img/admin/dashboard.png)
Eine Liste aller verfügbaren Site Templates für diesen Plan erscheint Ihrem Kunden.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Nach Auswahl des gewünschten Templates werden sie aufgefordert, die Änderung zu bestätigen.

![Site template switch confirmation dialog](/img/admin/dashboard.png)

Nach Aktivierung der Bestätigung und Klicken auf **Process Switch** wird das neue Site Template auf der Website Ihres Kunden verwendet.

### Hinzufügen von Custom Domains:

Ihre Kunden haben ebenfalls die Möglichkeit, für diesen Plan auf ihrer Kontoseite eine Custom Domain hinzuzufügen. Um Ihren Kunden die Nutzung von Custom Domains zu ermöglichen, gehen Sie zu **Ultimate Multisite > Settings >** **Domain Mapping**.

Aktivieren Sie die Option **Enable Domain Mapping**. Dadurch können Ihre Kunden Custom Domains auf Netzwerkebene nutzen.

Vergessen Sie nicht, ebenfalls zu prüfen, ob die Domain Mapping auf Produktebene aktiviert ist – denn Sie können ein Produkt so einschränken, dass Ihre Kunden keine Custom Domains nutzen dürfen.

Gehen Sie zu **Ultimate Multisite > Products**. Wählen Sie den gewünschten Plan aus und gehen Sie zum Tab **Custom Domains**. Aktivieren Sie die Option **Allow Custom Domains**.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Damit können alle Kunden, die diesen spezifischen Plan abonniert haben, Custom Domains nutzen. Auf der Kontoseite können Ihre Kunden nun eine Custom Domain hinzufügen, indem sie auf **Add Domain** klicken.

![Add Domain button on the account page](/img/admin/domains-list.png)

Das erste sich öffnende Fenster zeigt Ihren Kunden eine Nachricht, in der sie angewiesen werden, wie sie ihre DNS-Einträge aktualisieren, damit diese Custom Domain in Ihrem Netzwerk funktioniert.

![DNS instructions shown when adding a custom domain](/img/admin/domains-list.png)

Diese Nachricht kann (von Ihnen) unter **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bearbeitet werden.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Nach dem Klicken auf **Next Step** können Ihre Kunden ihren Custom Domain Namen hinzufügen und wählen, ob diese Custom Domain die primäre sein soll. Beachten Sie, dass Ihre Kunden mehr als eine Custom Domain für ihre Websites nutzen können, sodass sie wählen können, welche die primäre sein soll.

![Custom domain name entry with primary domain option](/img/admin/domains-list.png)

Nach dem Klicken auf **Add Domain** wird die Domain zu Ihrem Kundenkonto hinzugefügt. Alles, was sie jetzt tun müssen, ist die DNS-Einträge dieser Custom Domain bei ihrem Domain-Registrar zu ändern.

### Passwort ändern:

Im Kontodashboard können Ihre Kunden ihr Passwort ebenfalls ändern, indem sie auf **Change Password** klicken.

![Change Password button on account page](/img/admin/dashboard.png)

Dies öffnet ein neues Fenster, in dem Ihre Kunden ihr aktuelles Passwort eingeben und anschließend das neue Passwort, das sie verwenden möchten, eingeben müssen.

![Change password form with current and new password fields](/img/admin/dashboard.png)

### Gefahrenzone:

Wir haben außerdem zwei Optionen im **Danger Zone**: **Delete Site** und **Delete Account**. Beide befinden sich im Danger Zone, weil diese beiden Aktionen unwiderruflich sind. Wenn Ihre Kunden ihre Website oder ihr Konto löschen, können sie diese nicht wiederherstellen.

![Danger Zone with Delete Site and Delete Account options](/img/admin/dashboard.png)

Wenn Ihre Kunden auf eine dieser beiden Optionen klicken, wird ihnen ein Fenster angezeigt, in dem sie die Option zum Entfernen der Website oder des Kontos aktivieren müssen, und sie werden darauf hingewiesen, dass diese Aktion nicht rückgängig gemacht werden kann.

![Delete Site confirmation dialog](/img/admin/dashboard.png)

![Delete Account confirmation dialog](/img/admin/dashboard.png)

Wenn sie ihre Website löschen, bleibt ihr Konto und ihre Mitgliedschaft unverändert. Sie verlieren lediglich alle Inhalte ihrer Website. Wenn sie ihr Konto löschen, gehen alle Websites, Mitgliedschaften und Informationen zu diesem Konto verloren.
