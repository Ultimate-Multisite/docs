---
title: Website‑Vorlagen
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Site-Vorlagen (v2)

_**HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x. Wenn Sie Version 1.x verwenden,**_ **siehe diesen Artikel** _**.**_

Unser Ziel beim Erstellen eines Premium-Netzwerks mit Ultimate Multisite ist es, so viele Prozesse wie möglich zu automatisieren und gleichzeitig unseren Kunden Flexibilität und verschiedene Optionen zu bieten, aus denen sie bei der Erstellung ihrer Websites wählen können. Ein einfacher Weg, dieses Gleichgewicht zu erreichen, besteht darin, die Ultimate Multisite Site Templates-Funktion zu nutzen.

## Was ist eine Site-Vorlage?

Wie der Name schon sagt, ist eine Site-Vorlage eine Boilerplate-Website, die als Basis beim Erstellen neuer Websites in Ihrem Netzwerk verwendet werden kann.

Das bedeutet, Sie können eine Basis-Website erstellen, verschiedene Plugins aktivieren, ein aktives Theme festlegen und sie nach Belieben anpassen. Wenn Ihr Kunde dann ein neues Konto erstellt, erhält er anstelle einer Standard-WordPress-Website ohne sinnvollen Inhalt eine Kopie Ihrer Basis-Website mit allen Anpassungen und Inhalten bereits vorhanden.

Das klingt großartig, aber wie erstelle ich eine neue Site-Vorlage? Es ist so einfach wie möglich.

## Erstellen und Bearbeiten einer neuen Site-Vorlage

Site-Vorlagen sind einfach normale Websites in Ihrem Netzwerk. Um eine neue Vorlage zu erstellen, gehen Sie einfach zu **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![add site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-D1F8SOUTYU.png)**

Dies öffnet ein Modal-Fenster, in dem Sie nach dem **Site title, Site Domain/path** und **Site type** gefragt werden. Im Dropdown-Feld **Site Type** stellen Sie sicher, dass Sie **Site Template** auswählen *.*  

_![Add site template modal](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-gGWUnGCS36.png)_

Unten im Formular sehen Sie einen **Copy Site**-Toggle-Schalter. Damit können Sie eine neue Site-Vorlage auf Basis einer bestehenden Site-Vorlage erstellen, um Zeit zu sparen, anstatt eine Site-Vorlage von Grund auf neu zu erstellen.

![Add site template modal 2](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DVSq5dgWfa.png)

### Anpassen des Inhalts einer Site-Vorlage

Um Ihre Site-Vorlage anzupassen, navigieren Sie einfach zu ihrem Dashboard-Panel und nehmen die gewünschten Änderungen vor. Sie können neue Beiträge, Seiten erstellen, Plugins aktivieren und das aktive Theme ändern. Sie können sogar zum Customizer gehen und alle Arten von Anpassungsoptionen ändern.

Alle diese Daten werden kopiert, wenn ein Kunde eine neue Website basierend auf dieser Site-Vorlage erstellt.

### Erweiterte Optionen

Wenn Sie sich mit etwas benutzerdefiniertem Code auskennen, können Sie unsere Search and Replace API nutzen, um Informationen auf der neuen Website nach ihrer Erstellung automatisch zu ersetzen. Das ist nützlich für Dinge wie das Ersetzen von Firmennamen auf einer About-Seite, das Ersetzen der Kontakt-E-Mail auf der Kontakt-Seite usw.

### Verwendung von Site-Vorlagen

Ok, Sie haben also eine Reihe verschiedener Site-Vorlagen mit unterschiedlichen Designs, Themes und Einstellungen erstellt. Wie machen Sie sie jetzt in Ihrem Netzwerk nützlich?

Im Wesentlichen gibt es jetzt zwei Ansätze, die Sie nutzen können (nicht gleichzeitig):

  * Eine Site-Vorlage jedem Ihrer Pläne zuweisen

**ODER**

  * Ihren Kunden die Möglichkeit geben, die Site-Vorlagen selbst während der Anmeldung auszuwählen.

#### Modus 1: Site-Vorlage zuweisen

In diesem Modus können Ihre Kunden keine Vorlage auswählen, wenn sie ein Konto erstellen, sondern Sie definieren, welche Vorlage für jeden Ihrer Pläne verwendet werden soll.

Um dies zu tun, gehen Sie zu **Ultimate Multisite > Products > Edit**.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-t7UjzQEG5g.png)

Dies führt Sie zur **Edit Produc** t-Seite. Unter dem Abschnitt **Product Options** finden Sie die Registerkarte **Site template** und wählen die Option **Assign Site** **Template** aus dem Dropdown-Feld. Dadurch wird die Liste der verfügbaren Site-Vorlagen angezeigt und Sie können nur eine Site-Vorlage auswählen, die dem Produkt zugeordnet ist.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HTcetltjLR.png)

#### Modus 2: Verfügbare Site-Vorlage auswählen

In diesem Modus geben Sie Ihren Kunden während des Anmeldevorgangs die Möglichkeit zur Auswahl. Sie können aus verschiedenen Site-Vorlagen wählen, die Sie unter den Produkteeinstellungen definieren. Sie haben die Möglichkeit, die Site-Vorlage, die sie unter dem ausgewählten Produkt wählen können, einzuschränken. Dadurch können Sie unterschiedliche Sets von Site-Vorlagen unter jedem Produkt haben, was ideal ist, um verschiedene Funktionen und Features für ein höherpreisiges Produkt hervorzuheben.

Auf der **Edit Product**-Seite. Unter dem Abschnitt **Product Options** finden Sie die Registerkarte **Site template** und wählen die Option **Choose Available Site Template** aus dem Dropdown-Feld. Dadurch wird die Liste der verfügbaren Site-Vorlagen angezeigt und Sie können die Site-Vorlage auswählen, die verfügbar sein soll. Sie können dies tun, indem Sie ihr Verhalten wählen: **Available**, wenn Sie möchten, dass die Site-Vorlage in der Liste enthalten ist. _**Not Available**_, wenn Sie möchten, dass die Site-Vorlage nicht als Option angezeigt wird. Und **Pre-selected**, wenn Sie möchten, dass eine der aufgeführten Site-Vorlagen als Standard ausgewählt ist.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dY8gSreOfG.png)

### Standardmodus: Auswahl der Site-Vorlage im Checkout-Formular

Wenn Sie möchten, dass alle Ihre Site-Vorlagen während der Registrierung verfügbar sind, oder wenn Sie es nicht bevorzugen, zusätzliche Arbeit zu leisten, um Site-Vorlagen unter jedem von Ihnen erstellten Produkt zuzuweisen oder festzulegen, können Sie einfach die Auswahl der Site-Vorlage unter Ihrem **Checkout Form** festlegen. Dazu gehen Sie zu **Ultimate Multisite > Checkout Forms**. Klicken Sie dann auf **Edit** unter dem Formular, das Sie konfigurieren möchten.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FaXifuzMu3.png)

Dies öffnet die Seite **Edit Checkout Form**. Finden Sie das Feld **Template Selection** und klicken Sie auf **Edit** darunter.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZDAp4vdnve.png)

Ein Modal-Fenster erscheint. Unter dem Feld **Template Sites** können Sie alle Site-Vorlagen auswählen und auflisten, die während der Registrierung verfügbar sein sollen. Die von Ihnen hier angegebenen Site-Vorlagen sind unabhängig vom ausgewählten Produkt verfügbar.

![Assign site template](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pCSfzJkf4d.png)

### Site-Vorlagen-Optionen

Es gibt weitere Funktionen für Site-Vorlagen, die Sie unter den Ultimate Multisite-Einstellungen ein- oder ausschalten können.

![Site template option](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wrwT3rqFEf.png)

#### Template Switching erlauben

Durch Aktivieren dieser Option können Ihre Kunden die von ihnen während des Anmeldevorgangs gewählte Vorlage nach der Erstellung des Kontos und der Website wechseln. Das ist aus Sicht des Kunden nützlich, da es ihnen ermöglicht, eine Vorlage erneut auszuwählen, wenn sie später feststellen, dass ihre ursprüngliche Wahl nicht die beste für ihre spezifischen Bedürfnisse war.

#### Benutzern erlauben, ihre Website als Vorlagen zu verwenden

Da Subsite-Benutzer Zeit damit verbracht haben, ihre eigene Website zu erstellen und zu gestalten, möchten sie sie möglicherweise klonen und als eine der Site-Vorlagen verwenden, die beim Erstellen einer weiteren Subsite in Ihrem Netzwerk verfügbar sind. Diese Option ermöglicht es ihnen, dies zu erreichen.

#### Medien bei Vorlagen-Duplikation kopieren

Durch Aktivieren dieser Option werden die auf der Vorlagen-Website hochgeladenen Medien in die neu erstellte Website kopiert. Dies kann für jeden Plan überschrieben werden.

#### **Verhindern, dass Suchmaschinen Site-Vorlagen indexieren**

Site-Vorlagen, wie in diesem Artikel besprochen, sind Boilerplate, aber dennoch Teil Ihres Netzwerks, was bedeutet, dass sie für Suchmaschinen weiterhin auffindbar sind. Diese Option ermöglicht es Ihnen, die Site-Vorlagen zu verbergen, damit Suchmaschinen sie nicht indexieren.

## Vorbefüllung von Site-Vorlagen mit automatischem Suchen-und-Ersetzen

Eine der leistungsstärksten Funktionen von Ultimate Multisite ist die Möglichkeit, beliebigen Text, Farbe und Auswahlfelder zum Registrierungsformular hinzuzufügen. Sobald wir diese Daten erfasst haben, können wir sie verwenden, um den Inhalt bestimmter Teile der ausgewählten Site-Vorlage vorzufüllen. Wenn die neue Website veröffentlicht wird, ersetzt Ultimate Multisite die Platzhalter automatisch durch die tatsächlich während der Registrierung eingegebenen Informationen.

Beispielsweise, wenn Sie den Firmennamen des Endbenutzers während der Registrierung erfassen und automatisch auf der Startseite platzieren möchten. Auf der Startseite Ihrer Vorlagen-Website müssen Sie die Platzhalter hinzufügen, wie im Bild unten (Platzhalter sollten von doppelten geschweiften Klammern umgeben sein – {{placeholder_name}}).

![homepage placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-yEOlZVv2Gr.png)

Dann können Sie einfach ein entsprechendes Registrierungsfeld in Ihrem Checkout-Formular hinzufügen, um diese Daten zu erfassen:

![checkout form](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9adTd73gNT.png)

Ihr Kunde kann dieses Feld dann während der Registrierung ausfüllen.

![registration field](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jHQ9ZOGWlh.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-preview)

Ultimate Multisite ersetzt dann die Platzhalter automatisch durch die vom Kunden bereitgestellten Daten.

![replace placeholder](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-chL5wf7wmY.png)

### Lösung des Problems „Vorlage voller Platzhalter“

All das ist großartig, aber wir stoßen auf ein hässliches Problem: Unsere Site-Vorlagen – die von unseren Kunden besucht werden können – sind voller hässlicher Platzhalter, die wenig aussagen.

Um das zu lösen, bieten wir die Möglichkeit, gefälschte Werte für die Platzhalter festzulegen, und wir verwenden diese Werte, um deren Inhalte auf den Vorlagen-Websites zu suchen und zu ersetzen, während Ihre Kunden diese besuchen.

Sie können auf den Editor für Vorlagen-Platzhalter zugreifen, indem Sie zu **Ultimate Multisite > Settings > Sites** gehen und dann im Seitenmenü auf den Link **Edit Placeholders** klicken.

![placeholder settings](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztZnAexNEZ.png)

Damit gelangen Sie zum Inhalt-Editor der Platzhalter, in dem Sie Platzhalter und deren jeweiligen Inhalte hinzufügen können.

![template placeholders](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-95QJa1MRGz.png)
