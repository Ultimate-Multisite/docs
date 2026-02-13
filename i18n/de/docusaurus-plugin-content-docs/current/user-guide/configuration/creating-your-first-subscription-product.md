---
title: Erstellen Ihres ersten Abonnementprodukts
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# Erstellen Ihres ersten Abonnementprodukts (v2)

_**WICHTIGER HINWEIS: Dieser Artikel ist nur für Ultimate Multisite Version 2.x Benutzer. Wenn Sie Version 1.x verwenden,**_ **_**siehe diesen Artikel**_**._

Um Ihr Netzwerk zu betreiben und Ihre Dienstleistungen potenziellen Nutzern anzubieten, benötigen Sie verschiedene Abonnementoptionen. Wie erstellen Sie diese Produkte? Welche Produkttypen können Sie anbieten? In diesem Artikel behandeln wir alles, was Sie über Produkte wissen müssen.

## Produkttyp

Mit Ultimate Multisite können Sie Ihren Kunden zwei Produktkategorien anbieten: **Pläne** und **Add-ons** **(Order Bump)**. Add-ons lassen sich in zwei Typen unterteilen: **Pakete** und **Dienstleistungen**. Wir werden ihre Unterschiede und Besonderheiten im Folgenden betrachten.

  * **Pläne** : das grundlegende Produkt von Ultimate Multisite. Ihr Kunde kann nur dann eine Mitgliedschaft haben, wenn er an einen Plan gebunden ist. Ein Plan bietet Ihren Kunden ein oder mehrere Sites (es hängt von den Konfigurationen Ihres Plans ab) mit den Einschränkungen, die Sie auf Ihrer Produktbearbeitungsseite festlegen.

  * **Pakete** : Add-ons, die direkt die Funktionalitäten der Ultimate Multisite-Pläne beeinflussen. Sie ändern Einschränkungen oder fügen neue Ressourcen, Plugins oder Themes zum ursprünglichen Plan hinzu, den Ihr Kunde gekauft hat. Zum Beispiel könnte ein Basisplan 1.000 Besuche pro Monat zulassen und Sie können ein Paket anbieten, das diese Zahl auf 10.000 erweitert.

  * **Dienstleistungen**: Add-ons, die die Funktionalitäten von Ultimate Multisite nicht verändern. Sie sind Aufgaben, die Sie zusätzlich zum gekauften Plan für Ihren Kunden ausführen. Zum Beispiel könnte Ihr Kunde einen Plan kaufen, der ein einzelnes Site erlaubt, und zusätzlich für einen extra Service bezahlen, der dieses Site gestaltet.

## Produkte verwalten

Für viele kann die Registerkarte **Produkte** in Ultimate Multisite **(Ultimate Multisite > Produkte)** mit Plänen in einer traditionellen Hosting-Umgebung gleichgesetzt werden.

Innerhalb von Ultimate Multisite definiert die Registerkarte Produkte die Struktur und Einschränkungen, die für ein bestimmtes Produkt oder eine bestimmte Dienstleistung gelten. Diese Strukturen erstrecken sich auf Produkt- oder Dienstleistungsbeschreibung, Preis, Steuern und Berechtigungen.

Dieser Abschnitt wird Ihr Verständnis dieses wesentlichen Eckpfeilers von Ultimate Multisite unterstützen.

![Products list page](/img/config/products-list.png)

## Produkte hinzufügen

Egal ob ein Plan, Paket oder Dienstleistung, der Einstiegspunkt zur Definition eines neuen Elements ist über **Ultimate Multisite > Produkte > Produkt hinzufügen**.

![Add Product button](/img/config/product-add-button.png)

Die Oberfläche enthält zwei Hauptabschnitte. Auf der linken Seite befinden sich mehrere Registerkarten, die bei der Definition des Produkts helfen, und auf der rechten Seite gibt es einige Abschnitte zur Definition des Basispreises des Produkts, seines aktiven Status und des Produktbildes.

![Product edit page overview](/img/config/product-edit-full.png)

### Beschreibung

Die Basisproduktinformationen können durch Angabe eines Produktnamens und einer Beschreibung definiert werden. Diese Identifikatoren werden überall angezeigt, wo Produktinformationen benötigt werden, wie z. B. bei der Plan- und Preiswahl, Rechnungen, Upgrades usw.

![Product description section](/img/config/product-description.png)

### Preistyp

Auf der rechten Seite der Oberfläche kann die Basispreisgestaltung definiert werden.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite unterstützt drei verschiedene Preistypen. Die Option **paid** fordert den Netzwerkadministrator auf, Informationen zum Preis und zur Abrechnungsfrequenz des Produkts anzugeben.

### Preis

Die Preiskomponente definiert den Basisproduktpreis und das Abrechnungsintervall.

![Pricing and save section](/img/config/product-pricing-save.png)

Beispielsweise wird ein Preis von $29,99 mit einer Einstellung von 1 Monat $29,99 pro Monat berechnet. Ebenso wird ein Preis von $89,97 mit einer Einstellung von 3 Monaten diesen Betrag jedes Quartal berechnen.

### Abrechnungszyklen

Der Abschnitt Abrechnungszyklen gibt die Frequenz des oben genannten Abrechnungsintervalls an und wird im Allgemeinen im Hinblick auf Verträge oder feste Laufzeiten verstanden.

![Pricing and save section](/img/config/product-pricing-save.png)

Beispielsweise würde ein Produktpreis von $29,99 mit einem Intervall von 1 Monat und 12 Abrechnungszyklen $29,99 pro Monat für das Produkt über die folgenden 12 Monate berechnen. Mit anderen Worten würde eine solche Einstellung eine feste Preislaufzeit von $29,99 pro Monat für 12 Monate festlegen und dann die Abrechnung einstellen.

### Testphase

Durch Aktivieren des Angebots-Testmodus kann der Netzwerkadministrator eine Testphase für das Produkt festlegen.

![Pricing and save section](/img/config/product-pricing-save.png)

Während der Testphase können Kunden das Produkt frei nutzen und werden erst abgelaufen, wenn die Testphase beendet ist, abgerechnet.

### Einrichtungsgebühr

Sie können auch eine Einrichtungsgebühr für Ihren Plan festlegen.

![Pricing and save section](/img/config/product-pricing-save.png)

Das bedeutet, dass Ihr Kunde bei der ersten Belastung (zusätzlich zum Preisplan) einen zusätzlichen Betrag zahlt, der der in diesem Abschnitt definierten Gebühr entspricht.

### Aktiv

Der aktive Schalter definiert effektiv, ob das Produkt für neue Kundenanmeldungen verfügbar ist.

![Active toggle](/img/config/product-active.png)

Wenn es bereits Kunden auf diesem Plan gibt, führt das Deaktivieren des Schalters dazu, dass der Plan für zukünftige Anmeldungen entfernt wird. **Bestehende Kunden auf dem Plan werden weiterhin abgerechnet**, bis sie auf einen neuen Plan umgestellt oder aus dem Plan entfernt werden.

### Produktbild

Der **Bild hochladen**-Button ermöglicht es dem Netzwerkadministrator, die Mediathek zu nutzen, um ein Produktbild auszuwählen oder hochzuladen.

![Product image section](/img/config/product-image.png)

### Löschen

Der **Produkt löschen**-Button löscht das Produkt aus dem System. Er erscheint, sobald das Produkt veröffentlicht ist.

![Delete product section](/img/config/product-delete.png)

Im Gegensatz zu anderen Löschungen wird das Produkt nicht in einen Papierkorb verschoben. Sobald es gelöscht ist, ist die Aktion unwiderruflich.

### Produktoptionen

Sobald die Basisproduktinformationen definiert sind, helfen die Produktoptionen dem Netzwerkadministrator, die spezifischen Attribute des Produkts weiter zu definieren.

#### Allgemein

Die Registerkarte **Allgemein** definiert die allgemeinen Attribute des Produkts, die nicht auf andere produktbezogene Registerkarten zutreffen.

![General tab](/img/config/product-general-tab.png)

Der selbsterklärende **Produkt-Slug** definiert den Slug, mit dem das Produkt in URLs und anderen Bereichen von Ultimate Multisite identifiziert wird.

Ultimate Multisite unterstützt mehrere Produkttypen, nämlich Plan, Paket und Dienstleistung. Die Registerkarten **Produktoptionen** werden dynamisch angepasst, je nach angegebenem Produkttyp.

Die **Kundenrolle** gibt die Rolle an, die dem Kunden zugewiesen wird, wenn die Site erstellt wird. In der Regel wird für die meisten Netzwerkadministratoren die Ultimate Multisite-Standardrolle oder Administrator verwendet. Die Ultimate Multisite-Standardrolle kann in **Ultimate Multisite > Einstellungen > Login & Registrierung** festgelegt werden.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Auf- und Abstufungen

Diese Registerkarte gibt die Upgrade- und Downgrade-Pfade an, die einem Kunden innerhalb seiner spezifischen Stufe zur Verfügung stehen.

Um dieses Konzept zu verstehen, betrachten Sie ein Beispiel, bei dem eine Nischen-Ultimate-Multisite-Installation Lernmanagementlösungen für ihre Kunden bereitstellt. Um dies zu erreichen, werden drei Pläne (Basic, Plus und Premium) definiert und für jeden Plan spezifische Plugins aktiviert (siehe später in diesem Abschnitt Anweisungen zur Aktivierung von Plugins).

Wenn die Ultimate Multisite-Installation auch Geschäftswebsites oder E-Commerce-Websites betreut, können diese Pläne unterschiedliche Plugins erfordern, die installiert und aktiviert werden müssen.

In diesem Maße wäre es unerwünscht und problematisch, E-Learning-Kunden die Übergabe zu E-Commerce-Plänen zu ermöglichen, da diese Pläne, Preise und Einschränkungen möglicherweise nicht passend sind.

Um den Pfad des Kunden einzuschränken und Vorfälle zu verhindern, kann der Netzwerkadministrator eine Plan-Gruppe definieren und innerhalb dieser Gruppe die Pläne angeben, zu denen der Kunde wechseln kann.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Um eine Plan-Gruppe zu definieren, geben Sie die kompatiblen Pläne in der Liste **Plan-Gruppe** an. Die **Produktreihenfolge** bestimmt, wie die Pläne von niedrig bis hoch sortiert und angezeigt werden.

Ultimate Multisite enthält außerdem ein **Order Bump**-Feature, bei dem geeignete Add-on-Produkte und Dienstleistungen zu Plänen hinzugefügt werden können. Diese werden dem Kunden als zusätzliche Artikel angeboten, die beim Checkout oder bei einem Upgrade zu Plänen hinzugefügt werden können.

#### Preisschwankungen

Preisschwankungen ermöglichen es dem Netzwerkadministrator, alternative Preiskategorien je nach Dauer festzulegen. Diese Einstellung ermöglicht die Einrichtung von 3-Monats-, 6-Monats- oder Jahrespreiskategorien oder jeder anderen Dauer und Frequenz, die durch den Anwendungsfall bestimmt wird.

![Price Variations tab](/img/config/product-price-variations.png)

Um Preisschwankungen einzurichten, aktivieren Sie den Schalter **Preisschwankungen aktivieren** und klicken Sie auf die Schaltfläche **Neue Preisschwankung hinzufügen**.

Um eine Schwankung einzugeben, legen Sie die Dauer, den Zeitraum und den Preis der Schwankung fest. Weitere Schwankungen können durch erneutes Klicken auf die Schaltfläche eingegeben werden.

![Price Variations tab](/img/config/product-price-variations.png)

#### Steuern

Die Registerkarte **Steuern** entspricht den in **Ultimate Multisite > Einstellungen > Steuern** festgelegten Steuereinstellungen und insbesondere den definierten Steuersätzen. Um Steuern zu aktivieren und anwendbare Steuersätze festzulegen, lesen Sie die Dokumentation unter **Ultimate Multisite: Einstellungen**.

![Taxes tab](/img/config/product-taxes.png)

In einem früheren Beispiel haben wir einen lokalen Steuersatz von 7,25 % definiert, der für Kunden in Kalifornien (Vereinigte Staaten von Amerika) gilt.

Sobald der Steuersatz in **Ultimate Multisite > Einstellungen > Steuersätze verwalten** definiert ist, kann er auf Produktebene ausgewählt werden.

![Taxes tab](/img/config/product-taxes.png)

Um anzugeben, dass ein Produkt ein steuerpflichtiges Element ist, aktivieren Sie den Schalter **Steuerpflichtig** und wählen Sie den anwendbaren Steuersatz aus dem Dropdown-Steuerkategorie aus.

#### Site-Templates

Im Wesentlichen sind Site-Templates komplette WordPress-Websites, die zu Beginn eines Abonnements auf die Site eines Kunden geklont werden.

![Site Templates tab](/img/config/product-site-templates.png)

Der Netzwerkadministrator erstellt und konfiguriert die Template-Site als reguläre WordPress-Site mit aktivierten und konfigurierten Themes, Plugins und Inhalten. Die Template-Site wird wortwörtlich auf die Site des Kunden geklont.

Diese Registerkarte ermöglicht es dem Netzwerkadministrator, das Verhalten von Site-Templates bei einem neuen Abonnement festzulegen. Um Site-Templates zu nutzen, aktivieren Sie den Schalter **Site-Templates zulassen**.

Der **Site-Template-Auswahlmodus** definiert das Verhalten von Site-Templates während des Abonnementprozesses.

Die **D** **efault**-Einstellung folgt den Schritten im Checkout-Formular. Wenn der Netzwerkadministrator einen Template-Auswahlschritt im Checkout-Prozess definiert hat und der Schritt mit Templates definiert wurde, wird diese Einstellung die im Checkout-Schritt festgelegten Anweisungen berücksichtigen.

Durch Angabe von **A** **ssign Site Template** wird die Auswahl des angegebenen Templates erzwungen. Folglich werden alle Template-Auswahlschritte im Checkout-Prozess entfernt.

Schließlich überschreibt **C** **hoose Available Site Templates** die im Checkout-Schritt angegebenen Templates durch die in dieser Einstellung ausgewählten Templates. Ein vorselektiertes Template kann ebenfalls definiert werden, um dem Kunden bei der Auswahl zu helfen.

Letztendlich, wenn der Netzwerkadministrator möchte, dass die Template-Auswahl in den Checkout-Schritten erfolgt, reicht die Einstellung ' _default_ ' aus. Alternativ, um die Template-Auswahl zu entfernen und zu sperren und die Auswahl den Plan-Einstellungen zu übergeben, können die Optionen ' _assign new template_ ' oder ' _choose available site templates_ ' erwünscht sein.

#### Sites

Die Registerkarte **Sites** ist Teil der Beschränkungsfunktionalität von Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Diese Einstellung gibt die maximale Anzahl von Sites an, die ein Kunde im Rahmen seiner Mitgliedschaft erstellen kann.

Um die Beschränkung zu aktivieren, aktivieren Sie den Schalter **Sites begrenzen** und geben Sie die maximale Anzahl von Sites im Feld **Site-Zulassung** an.

#### Besuche

Die Registerkarte **Besuche** ist ein weiterer Teil des Beschränkungssystems von Ultimate Multisite. Diese Einstellung ermöglicht die Buchhaltung und anschließende Begrenzung von einzigartigen Besuchern auf der Site eines Kunden.

![Visits tab](/img/config/product-visits.png)

Aus marketingtechnischer Sicht können Netzwerkadministratoren diese Einstellung nutzen, um Kunden dazu zu ermutigen, ihren Plan zu upgraden, sobald die Grenzen erreicht sind. Diese Einstellung kann dem Netzwerkadministrator auch dabei helfen, übermäßigen Traffic auf Sites zu begrenzen und zu verhindern, um Systemressourcen zu schonen.

Um dieses Feature zu nutzen, aktivieren Sie den Schalter **Einzigartige Besuche begrenzen** und geben Sie die maximale Anzahl einzigartiger Besucher im Feld **Einzigartige Besuchsquote** an.

Sobald diese Grenze erreicht ist, wird Ultimate Multisite die Site des Kunden nicht mehr bedienen, sondern stattdessen eine Meldung anzeigen, dass die Grenzen überschritten wurden.

#### Benutzer

Die 'Users'-Beschränkungen von Ultimate Multisite ermöglichen es dem Netzwerkadministrator, Limits für die Anzahl von Benutzern festzulegen, die erstellt und Rollen zugewiesen werden können.

![Users tab](/img/config/product-users.png)

Um die Beschränkungsfunktion zu aktivieren, aktivieren Sie den Schalter **Benutzer begrenzen** durch Ziehen nach rechts.

Anschließend legen Sie für jede zu beschränkende Rolle den Schalter daneben auf aktiv und definieren die maximale Obergrenze im entsprechenden Feld.

#### Beitragstypen

Die Registerkarte **Beitragstypen** ermöglicht es dem Netzwerkadministrator, granulare Limits für die umfangreiche Auswahl an Beitragstypen in WordPress festzulegen.

![Post Types tab](/img/config/product-post-types.png)

Aufgrund der Struktur von WordPress sind Beiträge und Beitragstypen ein wesentlicher Bestandteil seiner Kernfunktionalität, und daher ist das Beschränkungssystem von Ultimate Multisite so konzipiert, dass es dem Netzwerkadministrator bei der Festlegung und Aufrechterhaltung von Limits hilft.

Um dieses Limits-Subsystem zu aktivieren, aktivieren Sie den Schalter **Beitragstypen begrenzen** durch Ziehen nach rechts.

Anschließend aktivieren Sie für jeden zu beschränkenden Beitragstyp den Schalter, indem Sie ihn nach rechts schieben und die maximale Obergrenze im entsprechenden Feld angeben.

#### Festplattenspeicher

Die Registerkarte **Festplattenspeicher** ermöglicht es Netzwerkadministratoren, den von Kunden verbrauchten Speicherplatz einzuschränken.

![Disk Space tab](/img/config/product-disk-space.png)

Typischerweise werden in einem WordPress-Multisite die Kerndateien unter allen Sites geteilt, und einzelne Verzeichnisse für Mediendateien und Uploads werden erstellt, auf die diese Einstellungen und Beschränkungen zutreffen.

Um die Festplattennutzung zu beschränken, aktivieren Sie den Schalter **Festplattengröße pro Site begrenzen** durch Ziehen nach rechts.

Geben Sie anschließend die maximale Obergrenze in Megabyte im Feld **Festplattenspeicherzulassung** an.

#### Custom Domain

Durch Aktivieren dieser Option können Sie für diesen Plan speziell benutzerdefinierte Domains zulassen.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

Die Registerkarte **Themes** innerhalb der Produktoptionen ermöglicht es dem Netzwerkadministrator, Themes für Kunden zur Auswahl verfügbar zu machen und optional den Status des Themes zu erzwingen.

_**Hinweis: Damit Themes für Kunden verfügbar gemacht werden können, müssen sie vom Netzwerkadministrator netzwerkweit aktiviert sein.**_

![Themes tab](/img/config/product-themes.png)

Die **Sichtbarkeit**-Option legt fest, ob dieses Theme für den Kunden sichtbar ist, wenn er die Registerkarte **Design > Themes** in seiner Site ansieht. Wenn Sie diese Option auf **Versteckt** setzen, wird das Theme aus der Ansicht entfernt und die Möglichkeit, es auszuwählen und zu aktivieren, eingeschränkt.

![Network themes page](/img/config/product-themes-network-enabled.png)

Die **Verhalten**-Auswahl ermöglicht es dem Netzwerkadministrator, den Status des Themes bei der Erstellung der Kunden-Site festzulegen.

Im **A** **vailable**-Zustand wird das Theme dem Kunden zur Selbstaktivierung zur Verfügung gestellt. Im Gegensatz dazu entfernt der **Nicht verfügbar**-Zustand dem Kunden die Möglichkeit, das Theme zu aktivieren. Abschließend erzwingt die Option **Aktivieren** die Auswahl und Aktivierung des Themes und setzt es somit bei der Site-Erstellung als Standard.

#### Plugins

Ähnlich wie die Registerkarte Themes ermöglicht Ultimate Multisite dem Netzwerkadministrator, die Sichtbarkeit von Plugins für Kunden sowie deren Status bei der Erstellung einer neuen Site festzulegen.

![Themes tab](/img/config/product-themes.png)

Das Dropdown **Sichtbarkeit** ermöglicht es, das Plugin entweder sichtbar oder für den Kunden verborgen zu machen, wenn es über das Plugins-Menü auf seiner Site angezeigt wird.

Der Netzwerkadministrator kann das Verhalten der Plugins weiter manipulieren, indem er die Optionen im Dropdown-Verhalten nutzt.

![Plugins tab](/img/config/product-plugins.png)

Die **Standard**-Auswahl respektiert den Plugin-Status, der im vom Kunden ausgewählten Site-Template definiert ist. Daher bleiben Plugins, die innerhalb des Templates aktiviert sind, aktiviert, wenn das Template auf die Site des Kunden geklont wird.

Die **Aktivieren erzwingen**-Option setzt das Plugin bei der Site-Erstellung in einen aktiven Zustand, während die **Deaktivieren erzwingen**-Option das Plugin bei der Site-Erstellung deaktiviert. In beiden Fällen kann der Kunde den Plugin-Status manuell über sein WordPress-Plugins-Menü ändern.

Die Einstellung **Aktivieren & Sperren** funktioniert ähnlich, verhindert jedoch, dass der Kunde den Plugin-Status ändert. Daher erzwingt eine Einstellung von Aktivieren & Sperren das Plugin in seinen aktiven Zustand und verhindert, dass der Kunde es deaktiviert. Ebenso wird die Einstellung **Deaktivieren & Sperren** das Plugin in seinen inaktiven Zustand zwingen und verhindern, dass der Benutzer das Plugin aktiviert.

Der Netzwerkadministrator sollte die Einstellungen Aktivieren & Sperren sowie Deaktivieren & Sperren in Verbindung mit Site-Templates berücksichtigen, da Plugins und Plugin-Status innerhalb der Templates von diesen Einstellungen betroffen sein können, wenn sie ausgewählt werden.

#### Limits zurücksetzen

Die Registerkarte **Limits zurücksetzen** setzt alle benutzerdefinierten Limits zurück, die für das Produkt definiert wurden. Um die Limits zurückzusetzen, klicken Sie auf die Schaltfläche **Limits zurücksetzen**.

![Plugins tab](/img/config/product-plugins.png)

Um die Aktion zu bestätigen, schieben Sie den Schalter **Zurücksetzen bestätigen** auf die rechte Seite und klicken Sie auf die Schaltfläche **Limits zurücksetzen**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

#### Legacy Options

Die Registerkarte **Legacy Options** beobachtet bestimmte Optionen und Verhaltensweisen, die in Ultimate Multisite 1.x definiert sind.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Diese Optionen werden zur Kompatibilität und zur einfachen Übergabe angeboten und werden in zukünftigen Versionen veraltet sein.

## Produkt bearbeiten, duplizieren oder löschen

Bestehende Produkte können bearbeitet, dupliziert oder gelöscht werden, indem Sie zu **Ultimate Multisite > Produkte** navigieren und mit der Maus über den bestehenden Produktnamen fahren.

![Product hover actions](/img/config/product-hover-actions.png)

## 

###
