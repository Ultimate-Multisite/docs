---
title: Kunden-Account-Seite
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Die Account-Seite deines Kunden (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Wenn Kunden in deinem Netzwerk einen Tarif abonnieren, erhalten sie Zugriff auf eine Website und deren Dashboard mit wichtigen Informationen zu ihren Zahlungen, Mitgliedschaften, Domains, Tarifbeschränkungen usw. ...

In diesem Tutorial führen wir dich durch die Account-Seite des Kunden, und du siehst, was deine Kunden darin sehen und tun können.

## Die Account-Seite {#the-account-page}

Die Account-Seite ist zugänglich, indem du im Dashboard deines Kunden auf **Account** klickst.

![Account-Menü im Kunden-Dashboard](/img/account-page/account-menu.png)

In souveränen Mandantennetzwerken behält Ultimate Multisite v2.13.0 dieses Kundenverwaltungserlebnis auf der Hauptwebsite. Wenn ein Kunde Account-, Checkout-, Abrechnungs-, Rechnungs-, Website-Verwaltungs-, Template-Wechsel- oder Domain-Mapping-Aktionen von einem souveränen Mandanten aus öffnet, verweist die Aktion zurück auf das Kundenpanel der Hauptwebsite, damit die Abrechnungs- und Mitgliedschaftsdatensätze des Netzwerks maßgeblich bleiben.

Wenn der Kunde von einem souveränen Mandanten kommt, kann das Kundenpanel der Hauptwebsite einen Rückkehr-Link zurück zur Mandanten-Website enthalten. Der Rückkehr-Link wird nur angezeigt, wenn Ultimate Multisite das Rückkehrziel als eine der Websites des Kunden validieren kann. Dadurch werden beliebige Weiterleitungen verhindert, während der Mandanten-Workflow erhalten bleibt.

![Übersicht der Kunden-Account-Seite](/img/account-page/overview.png)

Nachdem ein Kunde darauf geklickt hat, sieht er eine Übersicht über seine Mitgliedschaft, Rechnungsadresse, Rechnungen, Domains, Website-Beschränkungen und kann außerdem die ****Website-Vorlage** ändern (wenn dies in deinem Netzwerk erlaubt ist)**.

Er kann die Mitgliedschaft auch auf einen anderen Tarif ändern oder ein anderes Paket oder einen anderen Service kaufen, den du anbietest. Sehen wir uns jeden Abschnitt separat an.

### Übersicht deiner Mitgliedschaft: {#your-membership-overview}

Der erste Block direkt unter dem Website-Namen deiner Kunden zeigt eine Übersicht ihres aktuellen Tarifs und der Services/Pakete, die damit gekauft wurden. Der Block zeigt außerdem die Mitgliedschaftsnummer, den dafür ursprünglich gezahlten Betrag, wie viel der Tarif und jeder Service/jedes Paket kostet und wie oft ihnen diese Mitgliedschaft in Rechnung gestellt wurde. Sie können auch sehen, ob die Mitgliedschaft **Aktiv**, **Abgelaufen** oder **Gekündigt** ist.

![Mitgliedschaftsübersicht mit Tarif, Betrag und Abrechnungsdetails](/img/account-page/membership-card.png)

Direkt unter diesem Block können deine Kunden die Blöcke **Über diese Website** und **Website-Limits** sehen. Diese Blöcke zeigen ihnen alle Beschränkungen, die zu ihrem Tarif gehören: Speicherplatz, Beiträge, Seiten, Besuche usw. ... Diese Limits können auf jeder Tarifseite unter **Ultimate Multisite > Produkte** konfiguriert werden.

![Blöcke „Über diese Website“ und „Website-Limits“ mit Tarifbeschränkungen](/img/account-page/site-limits.png)

Auf der rechten Seite von **Deine Mitgliedschaft** können Kunden auf **Ändern** klicken. Dadurch werden ihnen alle verfügbaren Tarife und Pakete/Services angezeigt. Wenn sie einen anderen Tarif wählen, gelten die Beschränkungen dieses Tarifs anstelle der aktuellen Beschränkungen der Mitgliedschaft – unabhängig davon, ob sie ein Downgrade oder Upgrade durchführen.

Wenn deine Kunden nun Pakete oder Services für diese aktuelle Mitgliedschaft kaufen – etwa mehr Speicherplatz oder Besuche –, wird die aktuelle Mitgliedschaft nicht geändert; nur die neuen Pakete werden hinzugefügt.

Beachte, dass Gutscheincodes auf dieser Seite zum Ändern der Mitgliedschaft nicht hinzugefügt werden können. Wenn der Kunde beim ersten Kauf der Mitgliedschaft einen Gutscheincode verwendet hat, gilt der Code auch für diese neue Mitgliedschaft.

### Aktualisieren der Rechnungsadresse: {#updating-the-billing-address}

Auf der Account-Seite können deine Kunden auch ihre Rechnungsadresse aktualisieren. Sie müssen nur neben _Rechnungsadresse_ auf **Aktualisieren** klicken.

![Abschnitt „Rechnungsadresse“ mit Aktualisieren-Button](/img/account-page/billing-address.png)

Ein neues Fenster wird deinem Kunden angezeigt. Er muss lediglich die neue Adresse eingeben und auf _Änderungen speichern_ klicken.

![Formular zum Aktualisieren der Rechnungsadresse](/img/account-page/billing-address-form.png)

### Ändern der Website-Vorlage: {#changing-the-site-template}

Um deinen Kunden zu erlauben, ihre Website-Vorlagen zu ändern, musst du zu **Ultimate Multisite > Einstellungen > Websites** gehen und die Option **Vorlagenwechsel erlauben** aktivieren.

Wähle außerdem unter **Ultimate Multisite > Produkte** deine Tarife aus und gehe zum Tab **Website-Vorlagen**. Stelle sicher, dass die Option **Website-Vorlagen erlauben** aktiviert ist und dass unter **Auswahlmodus für Website-Vorlagen** die Option **Verfügbare Website-Vorlagen auswählen** ausgewählt ist.

![Tab „Website-Vorlagen“ des Produkts mit Vorlagenauswahlmodus](/img/config/product-site-templates.png)

Du kannst alle verfügbaren Website-Vorlagen auf deiner Website sehen. Wähle aus, welche du deinen Kunden, die diesen Tarif abonniert haben, verfügbar machen möchtest und welche nicht. Beachte, dass diese Optionen auch das Checkout-Formular beeinflussen; jede Vorlage, die als **Nicht verfügbar** ausgewählt ist, erscheint daher nicht auf der Registrierungsseite für diesen Tarif.

Jetzt können deine Kunden innerhalb ihrer Account-Seite auf **Website-Vorlage ändern** klicken.

![Button „Website-Vorlage ändern“ auf der Account-Seite](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 zeigt ein neu gestaltetes Panel für den Vorlagenwechsel. Das Panel beginnt mit einer **current-template-Karte**, damit Kunden sehen können, welche Vorlage aktiv ist, bevor sie einen Ersatz auswählen.

Ein dauerhaftes Raster verfügbarer Website-Vorlagen bleibt sichtbar, während Kunden ihre Optionen prüfen. Dies hilft ihnen, die für ihren Tarif erlaubten Vorlagen zu vergleichen, ohne die aktuelle Auswahl aus dem Blick zu verlieren.

![Liste verfügbarer Website-Vorlagen für den Tarif](/img/config/site-templates-list.png)

Nachdem sie die Vorlage ausgewählt haben, zu der sie wechseln möchten, werden sie gebeten, die Änderung zu bestätigen.

![Bestätigungsdialog für den Website-Vorlagenwechsel](/img/account-page/template-switch-confirm.png)

Nachdem sie die Bestätigung aktiviert und auf **Wechsel verarbeiten** geklickt haben, wird die neue Website-Vorlage auf der Website deines Kunden verwendet.

Kunden können in diesem Panel auch **Reset current template** verwenden, wenn sie die Website auf das aktuell zugewiesene Template zurücksetzen müssen. Wie beim Wechsel zu einem anderen Template kann das Zurücksetzen eines Templates Website-Inhalte überschreiben. Daher sollten Kunden dies nur bestätigen, wenn sie die Zurücksetzungsaktion verstehen.

### Benutzerdefinierte Domains hinzufügen: {#adding-custom-domains}

Ihre Kunden haben außerdem die Möglichkeit, auf ihrer Account-Seite eine benutzerdefinierte Domain für diesen Plan hinzuzufügen. Damit Ihre Kunden benutzerdefinierte Domains verwenden können, gehen Sie zu **Ultimate Multisite > Settings >** **Domain Mapping**.

Aktivieren Sie die Option **Enable Domain Mapping**. Dadurch können Ihre Kunden benutzerdefinierte Domains auf Netzwerkebene verwenden.

Vergessen Sie nicht, auch zu prüfen, ob das Domain Mapping auf Produktbasis aktiviert ist – denn Sie können ein Produkt so einschränken, dass Ihre Kunden keine benutzerdefinierten Domains verwenden dürfen.

Gehen Sie zu **Ultimate Multisite > Products**. Wählen Sie den Plan Ihrer Wahl aus und gehen Sie zum Tab **Custom Domains**. Aktivieren Sie die Option **Allow Custom Domains**.

![Tab Custom Domains mit Umschalter Allow Custom Domains](/img/config/product-custom-domains.png)

Dadurch können alle Kunden, die diesen bestimmten Plan abonniert haben, benutzerdefinierte Domains verwenden. Jetzt können Ihre Kunden auf der Account-Seite eine benutzerdefinierte Domain hinzufügen, indem sie auf **Add Domain** klicken.

![Schaltfläche Add Domain auf der Account-Seite](/img/account-page/add-domain-button.png)

Das erste Fenster, das sich öffnet, zeigt Ihren Kunden eine Nachricht mit Anweisungen, wie sie ihre DNS-Einträge aktualisieren müssen, damit diese benutzerdefinierte Domain in Ihrem Netzwerk funktioniert.

![DNS-Anweisungen, die beim Hinzufügen einer benutzerdefinierten Domain angezeigt werden](/img/account-page/add-domain-dns.png)

Diese Nachricht kann (von Ihnen) unter **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bearbeitet werden.

![Einstellung Add New Domain Instructions in Domain Mapping](/img/config/settings-domain-mapping.png)

Hier ist eine vollständige Ansicht der Domain-Mapping-Einstellungsseite:

![Vollständige Seite der Domain-Mapping-Einstellungen](/img/config/settings-domain-mapping-full.png)

Nach dem Klick auf **Next Step** können Ihre Kunden ihren benutzerdefinierten Domainnamen hinzufügen und auswählen, ob diese benutzerdefinierte Domain die primäre sein soll. Beachten Sie, dass Ihre Kunden mehr als eine benutzerdefinierte Domain für ihre Websites verwenden können, sodass sie auswählen können, welche die primäre sein soll.

![Eingabe des benutzerdefinierten Domainnamens mit Option für primäre Domain](/img/account-page/add-domain-primary.png)

Nach dem Klick auf **Add Domain** wird die Domain dem Account Ihres Kunden hinzugefügt. Alles, was sie jetzt noch tun müssen, ist, die DNS-Einträge dieser benutzerdefinierten Domain bei ihrem Domain-Registrar zu ändern.

### Passwort ändern: {#changing-password}

Im Account-Dashboard können Ihre Kunden außerdem ihr Passwort ändern, indem sie auf **Change Password** klicken.

![Schaltfläche Change Password auf der Account-Seite](/img/account-page/change-password-button.png)

Dadurch wird ein neues Fenster angezeigt, in dem Ihre Kunden ihr aktuelles Passwort eingeben und anschließend das neue Passwort eintragen müssen, das sie verwenden möchten.

![Formular zum Ändern des Passworts mit Feldern für aktuelles und neues Passwort](/img/account-page/change-password-form.png)

### Danger Zone: {#danger-zone}

Wir haben außerdem zwei Optionen, die im Bereich **Danger Zone** angezeigt werden: **Delete Site** und **Delete Account**. Beide befinden sich im Bereich Danger Zone, weil diese beiden Aktionen unumkehrbar sind. Wenn Ihre Kunden ihre Website oder ihren Account löschen, können sie diese nicht wiederherstellen.

![Danger Zone mit den Optionen Delete Site und Delete Account](/img/account-page/danger-zone.png)

Wenn Ihre Kunden auf eine dieser beiden Optionen klicken, wird ihnen ein Fenster angezeigt, in dem sie die Option zum Entfernen der Website oder des Accounts aktivieren müssen. Außerdem werden sie gewarnt, dass diese Aktion nicht rückgängig gemacht werden kann.

![Bestätigungsdialog Delete Site](/img/account-page/delete-site-confirm.png)

![Bestätigungsdialog Delete Account](/img/account-page/delete-account-confirm.png)

Wenn sie ihre Website löschen, bleiben ihr Account und ihre Mitgliedschaft weiterhin unverändert. Sie verlieren nur alle Inhalte auf ihrer Website. Wenn sie ihren Account löschen, gehen alle Websites, Mitgliedschaften und Informationen zu diesem Account verloren.
