---
title: Website-Vorlagen
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Website-Vorlagen (v2) {#site-templates-v2}

_**HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x. Wenn du Version 1.x verwendest,**_ **siehe diesen Artikel** _**.**_

Unser Ziel beim Erstellen eines Premium-Netzwerks mit Ultimate Multisite ist es, so viele Prozesse wie möglich zu automatisieren und unseren Kunden gleichzeitig Flexibilität und verschiedene Optionen zur Auswahl zu geben, wenn sie ihre Websites erstellen. Eine einfache Möglichkeit, dieses Gleichgewicht zu erreichen, ist die Nutzung der Website-Vorlagen-Funktion von Ultimate Multisite.

## Was ist eine Website-Vorlage? {#what-is-a-site-template}

Wie der Name schon sagt, ist eine Website-Vorlage eine Boilerplate-Website, die beim Erstellen neuer Websites in deinem Netzwerk als Grundlage verwendet werden kann.

Das bedeutet, dass du eine Basis-Website erstellen, verschiedene Plugins aktivieren, ein aktives Theme festlegen und sie auf jede gewünschte Weise anpassen kannst. Wenn dein Kunde dann einen neuen Account erstellt, erhält er statt einer standardmäßigen WordPress-Website ohne sinnvolle Inhalte eine Kopie deiner Basis-Website, bei der alle Anpassungen und Inhalte bereits vorhanden sind.

Das klingt großartig, aber wie erstelle ich eine neue Website-Vorlage? Es ist so einfach, wie es nur sein kann.

## Erstellen und Bearbeiten einer neuen Website-Vorlage {#creating-and-editing-a-new-site-template}

Website-Vorlagen sind einfach normale Websites in deinem Netzwerk. Um eine neue Vorlage zu erstellen, kannst du einfach zu **Netzwerk-Admin > Ultimate Multisite > Websites > Website hinzufügen** gehen.

**![Schaltfläche „Website hinzufügen“ auf der Websites-Listenseite](/img/config/site-templates-list.png)**

Dadurch wird ein modales Fenster geöffnet, in dem nach dem **Website-Titel, der Website-Domain/dem Website-Pfad** und dem **Website-Typ** gefragt wird. Stelle im Dropdown-Feld **Website-Typ** sicher, dass du **Website-Vorlage** auswählst *.*

_![Modalfenster zum Hinzufügen einer Website-Vorlage mit Dropdown für den Website-Typ](/img/config/site-templates-list.png)_

Du kannst auch eine kundenorientierte Beschreibung hinzufügen, um zu erklären, was die Vorlage enthält:

![Beschreibungsfeld der Website-Vorlage auf dem Bearbeitungsbildschirm der Website-Vorlage](/img/config/site-template-edit-description.png)

Am unteren Rand des Formulars wirst du einen Umschalter **Website kopieren** bemerken. Damit kannst du eine neue Website-Vorlage auf Grundlage einer bestehenden Website-Vorlage als Ausgangspunkt erstellen, um Zeit zu sparen, anstatt eine Website-Vorlage von Grund auf neu zu erstellen.

![Modalfenster zum Hinzufügen einer Website-Vorlage mit Umschalter zum Kopieren der Website](/img/config/site-templates-list.png)

### Anpassen der Inhalte einer Website-Vorlage {#customizing-the-contents-of-a-site-template}

Um deine Website-Vorlage anzupassen, navigiere einfach zu ihrem Dashboard-Bereich und nimm die benötigten Änderungen vor. Du kannst neue Beiträge und Seiten erstellen, Plugins aktivieren und das aktive Theme ändern. Du kannst sogar zum Customizer gehen und alle möglichen Anpassungsoptionen ändern.

![Bearbeitungsoberfläche der Website-Vorlage](/img/config/site-template-edit.png)

All diese Daten werden kopiert, wenn ein Kunde eine neue Website auf Grundlage dieser Website-Vorlage erstellt.

### Erweiterte Optionen {#advanced-options}

Wenn du dich mit etwas individuellem Coding auskennst, kannst du unsere Search and Replace API nutzen, um Informationen auf der neuen Website nach ihrer Erstellung automatisch zu ersetzen. Das ist nützlich für Dinge wie das Ersetzen von Firmennamen auf einer Über-uns-Seite, das Ersetzen der Kontakt-E-Mail auf der Kontaktseite usw.

### Website-Vorlagen verwenden {#using-site-templates}

Okay, du hast also eine Reihe verschiedener Website-Vorlagen mit unterschiedlichen Designs, Themes und Einstellungen erstellt. Wie machst du sie jetzt in deinem Netzwerk nützlich?

Grundsätzlich gibt es zwei Ansätze, die du jetzt verwenden kannst (nicht gleichzeitig):

  * Eine Website-Vorlage jedem deiner Tarife zuweisen

**ODER**

  * Deinen Kunden erlauben, die Website-Vorlagen während der Registrierung selbst auszuwählen.

#### Modus 1: Website-Vorlage zuweisen {#mode-1-assign-site-template}

In diesem Modus können deine Kunden beim Erstellen eines Account keine Vorlage auswählen; stattdessen legst du fest, welche Vorlage bei jedem deiner Tarife verwendet werden soll.

Dazu musst du zu **Ultimate Multisite > Produkte > Bearbeiten** gehen.

![Produkt bearbeiten, um Website-Vorlage zuzuweisen](/img/config/product-site-templates.png)

Dies bringt dich zur Seite **Produkt bearbeiten**. Suche im Abschnitt **Produktoptionen** den Tab **Website-Vorlage** und wähle die Option **Website-Vorlage zuweisen** aus dem Dropdown-Feld. Dadurch wird die Liste der verfügbaren Website-Vorlagen angezeigt, und du kannst nur eine Website-Vorlage auswählen, die dem Produkt zugeordnet ist.

![Produkt-Tab „Website-Vorlage“ mit Option zum Zuweisen einer Website-Vorlage](/img/config/product-site-templates.png)

#### Modus 2: Verfügbare Website-Vorlage auswählen {#mode-2-choose-available-site-template}

In diesem Modus gibst du deinen Kunden während des Registrierungsprozesses eine Auswahl. Sie können aus verschiedenen Website-Vorlagen auswählen, die du in den Produkteinstellungen definierst. Du hast die Möglichkeit, die Website-Vorlagen einzuschränken, aus denen sie unter dem ausgewählten Produkt wählen können. So kannst du unter jedem Produkt unterschiedliche Gruppen von Website-Vorlagen haben, was ideal ist, um verschiedene Funktionen und Features für ein höherpreisiges Produkt hervorzuheben.

Auf der Seite **Produkt bearbeiten**. Suche im Abschnitt **Produktoptionen** den Tab **Website-Vorlage** und wähle die Option **Verfügbare Website-Vorlage auswählen** aus dem Dropdown-Feld. Dadurch wird die Liste der verfügbaren Website-Vorlagen angezeigt, und du kannst die Website-Vorlage auswählen, die verfügbar sein soll. Du kannst dies tun, indem du ihr Verhalten auswählst: **Verfügbar**, wenn die Website-Vorlage in die Liste aufgenommen werden soll. _**Nicht verfügbar**_, wenn die Website-Vorlage nicht als Option angezeigt werden soll. Und **Vorausgewählt**, wenn eine der aufgeführten Website-Vorlagen standardmäßig ausgewählt sein soll.

![Verfügbare Website-Vorlagen mit Verhaltensoptionen auswählen](/img/config/product-site-templates.png)

### Standardmodus: Auswahl der Website-Vorlage im Checkout-Formular {#default-mode-site-template-selection-on-the-checkout-form}

Wenn du möchtest, dass alle deine Website-Vorlagen während der Registrierung verfügbar sind, oder vielleicht keine zusätzliche Arbeit damit haben möchtest, Website-Vorlagen unter jedem von dir erstellten Produkt zuzuweisen oder festzulegen. Dann kannst du die Auswahl der Website-Vorlage einfach in deinem **Checkout-Formular** festlegen. Gehe dazu zu **Ultimate Multisite > Checkout-Formulare** und klicke unter dem Formular, das du konfigurieren möchtest, auf **Bearbeiten**.

Dies bringt dich zur Seite **Checkout-Formular bearbeiten**. Suche das Feld **Vorlagenauswahl** und klicke darunter auf **Bearbeiten**.

Ein modales Fenster wird angezeigt. Unter dem Feld **Vorlagen-Websites** kannst du alle Website-Vorlagen auswählen und auflisten, die während der Registrierung verfügbar sein sollen. Die Website-Vorlagen, die du hier angibst, sind unabhängig davon verfügbar, welches Produkt der Benutzer ausgewählt hat.

![Vorlagenauswahlfeld im Bestellformular-Editor](/img/config/checkout-form-template-step.png)

Im Frontend sehen Kunden die Vorlagenauswahl während des Bestellabschlusses und können das Startdesign für ihre neue Website auswählen.

![Frontend-Vorlagenauswahl während der Registrierung](/img/config/frontend-template-chooser.png)

### Optionen für Website-Vorlagen {#site-template-options}

Es gibt weitere Funktionen für Website-Vorlagen, die du in den Einstellungen von Ultimate Multisite ein- oder ausschalten kannst.

![Optionen für Website-Vorlagen in den Ultimate Multisite-Einstellungen](/img/config/settings-sites-templates-section.png)

#### Vorlagenwechsel erlauben {#allow-template-switching}

Wenn du diese Option aktivierst, können deine Kunden die Vorlage, die sie während des Registrierungsprozesses ausgewählt haben, nach der Erstellung von Account und Website wechseln. Das ist aus Sicht eines Kunden nützlich, da es ihm ermöglicht, eine Vorlage erneut auszuwählen, wenn er später feststellt, dass seine ursprüngliche Wahl nicht die beste für seine speziellen Anforderungen war.

#### Benutzern erlauben, ihre Website als Vorlagen zu verwenden {#allow-users-to-use-their-site-as-templates}

Da Benutzer von Unterwebsites Zeit damit verbracht haben, ihre eigene Website zu erstellen und zu gestalten, möchten sie sie möglicherweise klonen und als eine der Website-Vorlagen verwenden, die beim Erstellen einer weiteren Unterwebsite in deinem Netzwerk verfügbar sind. Diese Option ermöglicht ihnen das.

#### Medien bei Vorlagenduplizierung kopieren {#copy-media-on-template-duplication}

Wenn du diese Option aktivierst, werden die auf der Vorlagen-Website hochgeladenen Medien auf die neu erstellte Website kopiert. Dies kann in jedem der Tarife überschrieben werden.

#### **Verhindern, dass Suchmaschinen Website-Vorlagen indexieren** {#prevent-search-engines-from-indexing-site-templates}

Website-Vorlagen, wie in diesem Artikel beschrieben, sind Grundgerüste, aber dennoch Teil deines Netzwerks, was bedeutet, dass sie für Suchmaschinen weiterhin auffindbar sind. Mit dieser Option kannst du die Website-Vorlagen ausblenden, sodass Suchmaschinen sie nicht indexieren können.

## Website-Vorlagen per automatischem Suchen-und-Ersetzen vorbefüllen {#pre-populating-site-templates-with-auto-search-and-replace}

Eine der leistungsstärksten Funktionen von Ultimate Multisite ist die Möglichkeit, beliebige Text-, Farb- und Auswahlfelder zum Registrierungsformular hinzuzufügen. Sobald wir diese Daten erfasst haben, können wir sie verwenden, um den Inhalt in bestimmten Bereichen der ausgewählten Website-Vorlage vorab zu befüllen. Wenn die neue Website dann veröffentlicht wird, ersetzt Ultimate Multisite die Platzhalter durch die tatsächlichen Informationen, die während der Registrierung eingegeben wurden.

Wenn du beispielsweise während der Registrierung den Firmennamen deines Endbenutzers erfassen und den Firmennamen automatisch auf der Startseite einfügen möchtest. Auf der Startseite deiner Vorlagen-Website musst du die Platzhalter hinzufügen, wie im Bild unten gezeigt (Platzhalter sollten von doppelten geschweiften Klammern umgeben hinzugefügt werden – {{placeholder_name}}).

![Startseite mit Platzhaltertext in geschweiften Klammern](/img/config/site-templates-list.png)

Dann kannst du einfach ein passendes Registrierungsfeld in deinem Bestellformular hinzufügen, um diese Daten zu erfassen. Derselbe Bestellformular-Editor, der für die Vorlagenauswahl verwendet wird, lässt dich benutzerdefinierte Felder neben der Vorlagenauswahl platzieren:

![Vorlagenauswahl und Registrierungsfelder im Bestellformular-Editor](/img/config/checkout-form-template-step.png)

Dein Kunde kann dieses Feld dann während der Registrierung ausfüllen.

![Frontend-Bestellformular mit Vorlagenauswahl](/img/config/frontend-template-chooser.png)

Ultimate Multisite ersetzt die Platzhalter dann automatisch durch die vom Kunden bereitgestellten Daten.

![Platzhalter auf der Website durch Kundendaten ersetzt](/img/config/site-templates-list.png)

### Das Problem „Vorlage voller Platzhalter“ lösen {#solving-the-template-full-of-placeholders-problem}

All das ist großartig, aber wir stoßen auf ein unschönes Problem: Unsere Website-Vorlagen – die von unseren Kunden besucht werden können – sind nun voller unschöner Platzhalter, die nicht viel aussagen.

Um das zu lösen, bieten wir die Möglichkeit, Platzhaltern Scheinwerte zuzuweisen, und wir verwenden diese Werte, um deren Inhalte auf den Vorlagen-Websites zu suchen und zu ersetzen, während deine Kunden sie besuchen.

Du erhältst Zugriff auf den Editor für Vorlagen-Platzhalter, indem du zu **Ultimate Multisite > Einstellungen > Websites** gehst und dann in der Seitenleiste auf den Link **Platzhalter bearbeiten** klickst.

![Einstellungen für Website-Vorlagen auf der Seite mit den Website-Einstellungen](/img/config/settings-sites-templates-section.png)

Dadurch gelangst du zum Inhaltseditor der Platzhalter, in dem du Platzhalter und deren jeweilige Inhalte hinzufügen kannst.

![Einstiegspunkt des Inhaltseditors für Vorlagen-Platzhalter](/img/config/settings-sites-templates-section.png)
