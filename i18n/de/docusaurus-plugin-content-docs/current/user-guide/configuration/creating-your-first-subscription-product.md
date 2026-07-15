---
title: Erstellen Ihres ersten Abonnementprodukts
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Dein erstes Abonnementprodukt erstellen (v2)

_**WICHTIGER HINWEIS: Dieser Artikel ist nur für Benutzer von Ultimate Multisite Version 2.x gedacht. Wenn du Version 1.x verwendest,**_ **_**lies diesen Artikel**_**.

Um dein Netzwerk zu betreiben und deine Dienste an potenzielle Benutzer zu verkaufen, benötigst du verschiedene Abonnementoptionen. Wie erstellst du diese Produkte? Welche Arten von Produkten kannst du anbieten? In diesem Artikel behandeln wir alles, was du über Produkte wissen musst.

## Produkttyp {#product-type}

Mit Ultimate Multisite kannst du deinen Kunden zwei Kategorien von Produkten anbieten: **Tarife** und **Add-ons** **(Order Bump)**. Add-ons können in zwei Typen unterteilt werden:**Pakete** und **Dienste**. Als Nächstes sehen wir uns ihre Unterschiede und Besonderheiten an.

  * **Tarife** : das grundlegende Produkt von Ultimate Multisite. Dein Kunde kann nur dann eine Mitgliedschaft haben, wenn sie mit einem Tarif verknüpft ist. Ein Tarif stellt deinen Kunden eine oder mehrere Websites bereit (abhängig von den Konfigurationen deines Tarifs) mit den Einschränkungen, die du auf deiner Produktbearbeitungsseite festlegst.

  * **Pakete** : Add-ons, die sich direkt auf die Funktionen von Ultimate Multisite-Tarifen auswirken. Sie ändern Einschränkungen oder fügen dem ursprünglichen Tarif, den dein Kunde gekauft hat, neue Ressourcen, Plugins oder Themes hinzu. Ein Basistarif könnte beispielsweise 1.000 Besuche pro Monat erlauben, und du kannst ein Paket verfügbar machen, das diese Zahl auf 10.000 erhöht.

  * **Dienste:** Add-ons, die die Funktionen von Ultimate Multisite nicht verändern. Es handelt sich um Aufgaben, die du zusätzlich zu dem gekauften Tarif für deinen Kunden ausführst. Zum Beispiel könnte dein Kunde einen Tarif kaufen, der eine einzelne Website erlaubt, und zusätzlich für einen Extra-Dienst bezahlen, der das Design dieser Website erstellt.

## Produkte verwalten {#managing-products}

Für viele kann der Tab **Produkte** in Ultimate Multisite **(Ultimate Multisite > Produkte)** mit Tarifen in einer traditionellen Hosting-Umgebung gleichgesetzt werden.

Innerhalb von Ultimate Multisite definiert der Tab Produkte den Aufbau und die Einschränkungen, die für ein bestimmtes Produkt oder einen bestimmten Dienst gelten. Solche Aufbauten umfassen die Beschreibung des Produkts oder Dienstes, Preis, Steuern und Berechtigungen.

Dieser Abschnitt führt dich durch das Verständnis dieses wesentlichen Grundpfeilers von Ultimate Multisite.

![Produktlistenseite](/img/config/products-list.png)

## Produkte hinzufügen {#adding-products}

Ob Tarif, Paket oder Dienst: Der Einstiegspunkt zum Definieren eines neuen Elements erfolgt über **Ultimate Multisite > Produkte > Produkt hinzufügen**.

![Button „Produkt hinzufügen“](/img/config/product-add-button.png)

Die Oberfläche enthält zwei Hauptbereiche. Links befinden sich mehrere Tabs, die bei der Definition des Produkts helfen, und rechts gibt es einige Bereiche, um den Grundpreis des Produkts, seinen aktiven Status und das Produktbild festzulegen.

![Übersicht der Produktbearbeitungsseite](/img/config/product-edit-full.png)

### Beschreibung {#description}

Die grundlegenden Produktinformationen können durch Angabe eines Produktnamens und einer Beschreibung definiert werden. Diese Kennzeichnungen werden überall dort angezeigt, wo Produktinformationen erforderlich sind, etwa bei der Tarif- und Preisauswahl, auf Rechnungen, bei Upgrades und Ähnlichem.

![Abschnitt Produktbeschreibung](/img/config/product-description.png)

### Preistyp {#pricing-type}

Auf der rechten Seite der Oberfläche kann die Basispreisgestaltung definiert werden.

![Abschnitt Preisgestaltung und Speichern](/img/config/product-pricing-save.png)

Ultimate Multisite unterstützt drei verschiedene Preistypen. Die Option **bezahlt** fordert den Netzwerkadministrator auf, Informationen zum Preis und zur Abrechnungshäufigkeit des Produkts anzugeben.

### Preisgestaltung {#pricing}

Die Preiskomponente definiert den Grundpreis des Produkts und das Abrechnungsintervall.

![Abschnitt Preisgestaltung und Speichern](/img/config/product-pricing-save.png)

Ein Beispielpreis von $29.99 mit einer Einstellung von 1 Monat wird daher jeden Monat mit $29.99 abgerechnet. Ebenso wird ein Preis von $89.97 mit einer Einstellung von 3 Monaten diesen Betrag jedes Quartal abrechnen.

### Abrechnungszyklen {#billing-cycles}

Der Abschnitt Abrechnungszyklen gibt die Häufigkeit des oben genannten Abrechnungsintervalls an und wird im Allgemeinen im Zusammenhang mit Verträgen oder festen Laufzeiten verstanden.

![Abschnitt Preisgestaltung und Speichern](/img/config/product-pricing-save.png)

Beispielsweise würde ein Produktpreis von $29.99 mit einem Intervall von 1 Monat und 12 Abrechnungszyklen $29.99 pro Monat für das Produkt über die folgenden 12 Monate abrechnen. Mit anderen Worten: Eine solche Einstellung würde eine Festpreis-Laufzeit von $29.99 pro Monat für 12 Monate festlegen und danach die Abrechnung beenden.

### Testzeitraum {#trial-period}

Das Aktivieren des Schalters für ein Testangebot ermöglicht es dem Netzwerkadministrator, einen Testzeitraum für das Produkt festzulegen.

![Abschnitt Preisgestaltung und Speichern](/img/config/product-pricing-save.png)

Während des Testzeitraums können Kunden das Produkt kostenlos nutzen und werden erst abgerechnet, wenn der Testzeitraum abgelaufen ist.

### Einrichtungsgebühr {#setup-fee}

Du kannst deinem Tarif auch eine Einrichtungsgebühr hinzufügen.

![Abschnitt Preisgestaltung und Speichern](/img/config/product-pricing-save.png)

Das bedeutet, dass dein Kunde bei der ersten Belastung einen zusätzlichen Betrag zahlt (zusätzlich zum Tarifpreis), der der Gebühr entspricht, die du in diesem Abschnitt festgelegt hast.

### Aktiv {#active}

Der Aktiv-Schalter legt effektiv fest, ob das Produkt Kunden für neue Registrierungen zur Verfügung steht.

![Aktiv-Schalter](/img/config/product-active.png)

Wenn es bestehende Kunden in diesem Tarif gibt, bewirkt das Deaktivieren des Schalters, dass der Tarif effektiv als Bestandstarif weitergeführt und aus zukünftigen Registrierungen entfernt wird. **Bestehende Kunden im Tarif werden weiterhin abgerechnet**, bis sie auf einen neuen Tarif umgestellt oder aus dem Tarif entfernt werden.

### Produktbild {#product-image}

Der Button **Bild hochladen** ermöglicht es dem Netzwerkadministrator, die Medienbibliothek zu verwenden, um ein Produktbild auszuwählen oder hochzuladen.

![Abschnitt Produktbild](/img/config/product-image.png)

### Löschen {#delete}

Der Button **Produkt löschen** löscht das Produkt aus dem System. Er erscheint, sobald das Produkt veröffentlicht ist.

![Abschnitt Produkt löschen](/img/config/product-delete.png)

Im Gegensatz zu anderen Löschvorgängen wird das Produkt nicht in einen Papierkorbzustand verschoben. Sobald es gelöscht wurde, ist die Aktion daher unumkehrbar.

### Produktoptionen {#product-options}

Sobald die grundlegenden Produktinformationen definiert sind, helfen die Produktoptionen dem Netzwerkadministrator dabei, die spezifischen Attribute des Produkts weiter zu definieren.

#### Allgemein {#general}

Der Tab **Allgemein** definiert die allgemeinen Attribute des Produkts, die auf keinen der anderen produktspezifischen Tabs zutreffen.

![Tab Allgemein](/img/config/product-general-tab.png)

Der selbsterklärende **Produkt-Slug** definiert den Slug, mit dem das Produkt in URLs und anderen Bereichen von Ultimate Multisite identifiziert wird.

Ultimate Multisite unterstützt mehrere Produkttypen, nämlich Plan, Paket und Dienstleistung. Die Tabs **Produktoptionen** werden abhängig vom angegebenen Produkttyp dynamisch angepasst.

Die **Kundenrolle** legt die Rolle fest, die dem Kunden zugewiesen wird, wenn die Website erstellt wird. Typischerweise ist dies für die meisten Netzwerkadministratoren der Ultimate Multisite-Standard oder Administrator. Die Ultimate Multisite-Standardrolle kann unter **Ultimate Multisite > Einstellungen > Login & Registrierung** festgelegt werden.

![Einstellungen für Kundenrolle](/img/config/product-customer-role-settings.png)

#### Upgrades & Downgrades {#up--downgrades}

Dieser Tab legt die Upgrade- und Downgrade-Pfade fest, die einem Kunden innerhalb seiner spezifischen Stufe zur Verfügung stehen.

Um dieses Konzept zu verstehen, betrachten Sie ein Beispiel, bei dem eine spezialisierte Ultimate Multisite-Installation ihren Kunden Learning-Management-Lösungen bereitstellt. Um dies zu erreichen, werden drei Pläne (Basic, Plus und Premium) definiert und bestimmte Plugins für jeden Plan aktiviert (Anweisungen zum Aktivieren von Plugins finden Sie später in diesem Abschnitt).

Wenn die Ultimate Multisite-Installation auch Geschäftswebsites oder eCommerce-Websites bedient, müssen für diese Pläne möglicherweise andere Plugins installiert und aktiviert werden.

In diesem Umfang wäre es unerwünscht und problematisch, eLearning-Kunden den Wechsel zu eCommerce-Plänen zu erlauben, da diese Pläne, Preise und Einschränkungen möglicherweise nicht passend sind.

Um daher den Pfad des Kunden einzuschränken und Vorfälle zu verhindern, kann der Netzwerkadministrator eine Plangruppe definieren und innerhalb dieser Gruppe die Pläne festlegen, zu denen der Kunde wechseln kann.

![Tab Upgrades und Downgrades](/img/config/product-upgrades.png)

Um eine Plangruppe zu definieren, geben Sie die kompatiblen Pläne in der Liste **Plangruppe** an. Die **Produktreihenfolge** bestimmt, wie die Pläne vom niedrigsten zum höchsten angeordnet und angezeigt werden.

Ultimate Multisite enthält außerdem eine **Order-Bump**-Funktion, mit der passende Add-on-Produkte und Dienstleistungen zu Plänen hinzugefügt werden können. Diese werden dem Kunden als zusätzliche Artikel angeboten, die beim Checkout oder während eines Upgrades zu Plänen hinzugefügt werden können.

#### Preisvariationen {#price-variations}

Preisvariationen ermöglichen es dem Netzwerkadministrator, alternative Preisstufen abhängig von der Dauer festzulegen. Diese Einstellung ermöglicht es, monatliche, vierteljährliche, jährliche oder beliebige andere Abrechnungszeiträume für dasselbe Produkt anzubieten. Sie können beispielsweise ein Produkt für 29,99 $/Monat mit einer rabattierten Jahresoption für 249,99 $/Jahr einrichten.

![Tab Preisvariationen](/img/config/product-price-variations-tab.png)

Um Preisvariationen einzurichten, setzen Sie den Schalter **Preisvariationen aktivieren** auf aktiv und klicken Sie auf die Schaltfläche **Neue Preisvariation hinzufügen**.

![Produktpreisvariationen](/img/config/product-price-variations.png)

Um eine Variation einzugeben, legen Sie die Dauer, den Zeitraum und den Preis der Variation fest. Weitere Variationen können durch erneutes Klicken auf die Schaltfläche eingegeben werden.

Wenn Ihr Basisproduktpreis beispielsweise 29,99 $ pro Monat beträgt, könnten Sie hinzufügen:

  * **3 Monate** für 79,99 $ (ein kleiner Rabatt gegenüber monatlicher Zahlung)
  * **1 Jahr** für 249,99 $ (ein erheblicher Rabatt für eine jährliche Bindung)

:::tip Anzeigen eines Schalters für den Abrechnungszeitraum im Frontend

Preisvariationen allein fügen dem Frontend-Checkout keinen Toggle oder Schalter hinzu. Damit Kunden zwischen Abrechnungszeiträumen wechseln können (z. B. monatlich / jährlich), müssen Sie Ihrem Checkout-Formular ein Feld **Zeitraumauswahl** hinzufügen. Siehe [Checkout-Formulare: Einen Schalter zur Zeitraum-Auswahl hinzufügen](checkout-forms#adding-a-period-selection-toggle) für Schritt-für-Schritt-Anweisungen.
:::

#### Steuern {#taxes}

Der Tab **Steuern** stimmt mit den in **Ultimate Multisite > Einstellungen > Steuern** angegebenen Steuereinstellungen und genauer mit den definierten Steuersätzen überein. Um Steuern zu aktivieren und anwendbare Steuersätze zu definieren, lesen Sie bitte die Dokumentation unter **Ultimate Multisite: Einstellungen**

![Tab Steuern](/img/config/product-taxes.png)

In einem früheren Beispiel haben wir einen lokalen Steuersatz von 7,25 % definiert, der für Kunden in Kalifornien (Vereinigte Staaten von Amerika) gilt.

Sobald der Steuersatz unter **Ultimate Multisite > Einstellungen > Steuersätze verwalten** definiert ist, kann er auf Produktebene ausgewählt werden.

![Tab Steuern](/img/config/product-taxes.png)

Um anzugeben, dass ein Produkt ein steuerpflichtiger Artikel ist, setzen Sie den Schalter **Ist steuerpflichtig** auf aktiv und wählen Sie den anwendbaren Steuersatz aus dem Dropdown-Menü Steuerkategorie aus.

#### Website-Vorlagen {#site-templates}

Im Wesentlichen sind Website-Vorlagen vollständige WordPress-Websites, die zu Beginn ihres Abonnements auf die Website eines Kunden geklont werden.

![Tab Website-Vorlagen](/img/config/product-site-templates.png)

Der Netzwerkadministrator erstellt und konfiguriert die Vorlagen-Website als reguläre WordPress-Website mit aktivierten und konfigurierten Themes, Plugins und Inhalten. Die Vorlagen-Website wird unverändert zum Kunden geklont.

Dieser Tab ermöglicht es dem Netzwerkadministrator, das Verhalten von Website-Vorlagen bei einem neuen Abonnement festzulegen. Um Website-Vorlagen für diesen Plan zu verwenden, setzen Sie den Schalter **Website-Vorlagen zulassen** auf aktiv.

Wenn **Website-Vorlagen zulassen** deaktiviert ist, können Kunden in diesem Plan keine Vorlagen auswählen, selbst wenn ein Checkout-Formular, ein teilbarer Link oder ein URL-Parameter Vorlagen andernfalls verfügbar machen würde. Ultimate Multisite erzwingt diese Beschränkung nun über eine Fallback-Kette über die verfügbaren Einstiegspunkte hinweg: Zuerst werden die Planeinstellungen geprüft, dann die Vorlageneinstellungen des Checkout-Formulars und anschließend vorausgewählte oder per URL bereitgestellte Vorlagen. Dadurch bleiben Planbeschränkungen konsistent und es wird verhindert, dass Vorlagen für Produkte erscheinen, die sie nicht anbieten sollten.

Der **Auswahlmodus für Website-Vorlagen** definiert das Verhalten von Website-Vorlagen während des Abonnementprozesses.

Die Einstellung **S** **tandard** folgt den Schritten im Bestellformular. Wenn der Netzwerkadministrator im Bestellprozess einen Schritt zur Vorlagenauswahl definiert hat und dieser Schritt mit Vorlagen definiert wurde, berücksichtigt diese Einstellung die im Bestellschritt festgelegten Vorgaben.

Die Angabe von **W** **ebsite-Vorlage zuweisen** erzwingt die Auswahl der angegebenen Vorlage. Folglich werden alle Schritte zur Vorlagenauswahl im Bestellprozess entfernt.

Schließlich überschreibt **V** **erfügbare Website-Vorlagen auswählen** die im Bestellschritt angegebenen Vorlagen mit den in dieser Einstellung ausgewählten Vorlagen. Eine vorausgewählte Vorlage kann ebenfalls definiert werden, um dem Kunden die Auswahl zu erleichtern.

Wenn der Netzwerkadministrator letztlich möchte, dass die Vorlagenauswahl in den Bestellschritten erfolgt, genügt die Einstellung „ _Standard_ “. Alternativ können die Optionen „ _neue Vorlage zuweisen_ “ oder „ _verfügbare Website-Vorlagen auswählen_ “ wünschenswert sein, um die Vorlagenauswahl zu entfernen und zu sperren und die Auswahl an die Tarifeinstellungen zu delegieren.

#### Websites {#sites}

Der Tab **Websites** ist Teil der Einschränkungsfunktionalität von Ultimate Multisite.

![Tab Websites](/img/config/product-sites.png)

Diese Einstellung legt die maximale Anzahl von Websites fest, die ein Kunde unter seiner Mitgliedschaft erstellen kann.

Um die Einschränkung zu aktivieren, setzen Sie den Umschalter **Websites begrenzen** in den aktiven Zustand und geben Sie die maximale Anzahl von Websites im Feld **Website-Kontingent** an.

#### Besuche {#visits}

Der Tab **Besuche** ist ein weiterer Teil des Einschränkungssystems von Ultimate Multisite. Diese Einstellung ermöglicht die Erfassung und anschließende Drosselung eindeutiger Besucher auf der Website eines Kunden.

![Tab Besuche](/img/config/product-visits.png)

Aus Marketingperspektive können Netzwerkadministratoren diese Einstellung nutzen, um Kunden dazu zu bewegen, ihren Tarif zu upgraden, sobald Limits erreicht sind. Diese Einstellung kann den Netzwerkadministrator außerdem dabei unterstützen, übermäßigen Traffic auf Websites einzudämmen und zu verhindern, um Systemressourcen zu schonen.

Um diese Funktion zu nutzen, setzen Sie den Umschalter **eindeutige Besuche begrenzen** in den aktiven Zustand und geben Sie die maximale Anzahl eindeutiger Besucher im Feld **Kontingent für eindeutige Besuche** an.

Sobald dieses Limit erreicht ist, stellt Ultimate Multisite die Bereitstellung der Website des Kunden ein, anstatt eine Meldung anzuzeigen, dass Limits überschritten wurden.

#### Benutzer {#users}

Die „Benutzer“-Einschränkungen von Ultimate Multisite ermöglichen es dem Netzwerkadministrator, Limits für die Anzahl der Benutzer festzulegen, die erstellt und Rollen zugewiesen werden können.

![Tab Benutzer](/img/config/product-users.png)

Um die Einschränkungsfunktion zu aktivieren, setzen Sie den Umschalter **Benutzer begrenzen** in den aktiven Zustand, indem Sie ihn nach rechts schieben.

Setzen Sie als Nächstes für jede Rolle, die begrenzt werden soll, den danebenstehenden Umschalter in einen aktiven Zustand und definieren Sie das maximale obere Limit im entsprechenden Feld.

#### Beitragstypen {#post-types}

Der Tab **Beitragstypen** ermöglicht es dem Netzwerkadministrator, granulare Limits für die umfangreiche Palette von Beitragstypen innerhalb von WordPress festzulegen.

![Tab Beitragstypen](/img/config/product-post-types.png)

Aufgrund des Aufbaus von WordPress sind Beiträge und Beitragstypen ein wesentlicher Bestandteil der Kernfunktionalität, und daher ist das Einschränkungssystem von Ultimate Multisite darauf ausgelegt, den Netzwerkadministrator beim Einrichten und Aufrechterhalten von Limits zu unterstützen.

Um dieses Einschränkungs-Subsystem zu aktivieren, setzen Sie den Umschalter **Beitragstypen begrenzen** in den aktiven Zustand, indem Sie ihn nach rechts schieben.

Schalten Sie als Nächstes jeden zu begrenzenden Beitragstyp ein, indem Sie ihn nach rechts schieben und das maximale obere Limit im entsprechenden Feld angeben.

#### Speicherplatz {#disk-space}

Der Tab **Speicherplatz** ermöglicht es Netzwerkadministratoren, den von Kunden verbrauchten Speicherplatz zu beschränken.

![Tab Speicherplatz](/img/config/product-disk-space.png)

Typischerweise werden in einer WordPress-Multisite die Kerndateien von allen Websites gemeinsam genutzt, und für Mediendateien und Uploads werden individuelle Verzeichnisse erstellt, auf die diese Einstellungen und Einschränkungen angewendet werden.

Um die Einschränkung der Speichernutzung zu aktivieren, setzen Sie den Umschalter **Speichergröße pro Website begrenzen** in den aktiven Zustand, indem Sie ihn nach rechts schieben.

Geben Sie als Nächstes das maximale obere Limit in Megabyte im Feld **Speicherplatzkontingent** an.

#### Benutzerdefinierte Domain {#custom-domain}

Durch Umschalten dieser Option können Sie benutzerdefinierte Domains speziell für diesen Tarif zulassen.

![Tab Benutzerdefinierte Domains](/img/config/product-custom-domains.png)

#### Themes {#themes}

Der Tab **Themes** innerhalb der Produktoptionen ermöglicht es dem Netzwerkadministrator, Themes für Kunden zur Auswahl verfügbar zu machen und optional den Status des Themes zu erzwingen.

![Tab Themes](/img/config/product-themes.png)

_**Hinweis: Damit Themes Kunden zur Verfügung gestellt werden können, müssen sie vom Netzwerkadministrator netzwerkweit aktiviert werden.**_

![Seite Netzwerk-Themes](/img/config/product-themes-network-enabled.png)

Die Option **Sichtbarkeit** definiert, ob dieses Theme für den Kunden sichtbar ist, wenn er den Tab **Design > Themes** innerhalb seiner Website anzeigt. Wenn diese Option auf **Ausgeblendet** gesetzt wird, wird das Theme aus der Ansicht entfernt und damit die Möglichkeit eingeschränkt, es auszuwählen und zu aktivieren.

![Tab Themes](/img/config/product-themes.png)

Die Auswahl **Verhalten** ermöglicht es dem Netzwerkadministrator, den Status des Themes bei der Erstellung der Kunden-Website zu definieren.

Im Status **V** **erfügbar** wird das Theme dem Kunden zur Selbstaktivierung zur Verfügung gestellt. Umgekehrt entzieht der Status **Nicht verfügbar** dem Kunden die Möglichkeit, das Theme zu aktivieren. Schließlich erzwingt die Option **Aktivierung erzwingen** die Auswahl und Aktivierung des Themes und legt es damit bei der Website-Erstellung als Standard fest.

#### Plugins {#plugins}

Ähnlich wie beim Tab Themes ermöglicht Ultimate Multisite dem Netzwerkadministrator, die Sichtbarkeit von Plugins für Kunden sowie deren Status bei der Erstellung einer neuen Website zu definieren.

![Tab Plugins](/img/config/product-plugins.png)

Das Dropdown-Menü **Sichtbarkeit** ermöglicht es, dass das Plugin für den Kunden entweder sichtbar oder ausgeblendet ist, wenn es auf seiner Website über die Menüoption Plugins angezeigt wird.

Der Netzwerkadministrator kann das Verhalten der Plugins zusätzlich beeinflussen, indem er die Optionen im Verhalten-Drop-down verwendet.

![Plugins-Tab](/img/config/product-plugins.png)

Die Auswahl **Default** berücksichtigt den Plugin-Zustand, der in der vom Kunden ausgewählten Website-Vorlage definiert ist. Daher bleiben Plugins, die innerhalb der Vorlage aktiviert sind, aktiviert, wenn die Vorlage auf die Website des Kunden geklont wird.

**Force Activate** versetzt das Plugin bei der Website-Erstellung in einen aktiven Zustand, und umgekehrt deaktiviert **Force Inactivate** das Plugin bei der Website-Erstellung. In beiden Fällen kann der Zustand des Plugins vom Kunden manuell über das WordPress Plugins-Menü geändert werden.

Die Einstellung **Force Activate & Lock** funktioniert ähnlich, verhindert jedoch, dass der Plugin-Zustand vom Kunden geändert wird. Eine Einstellung von Force Activate and Lock erzwingt daher den aktiven Zustand des Plugins und verhindert, dass der Kunde es deaktiviert. Ebenso erzwingt die Einstellung **Force Inactivate & Lock** den inaktiven Zustand des Plugins und verhindert, dass der Benutzer das Plugin aktiviert.

Der Netzwerkadministrator sollte die Einstellungen Force Activate & Lock und Force Inactivate & Lock möglicherweise in Verbindung mit Website-Vorlagen berücksichtigen, da Plugins und Plugin-Zustände innerhalb der Vorlagen von diesen Einstellungen beeinflusst werden können, wenn sie ausgewählt sind.

#### Einschränkungen zurücksetzen {#reset-limitations}

Der Tab **Reset Limitations** setzt alle benutzerdefinierten Begrenzungen zurück, die für das Produkt definiert sind. Um Begrenzungen zurückzusetzen, klicken Sie auf die Schaltfläche **reset limitations**.

![Tab „Einschränkungen zurücksetzen“](/img/config/product-reset-limitations.png)

Um die Aktion zu bestätigen, schieben Sie den **confirm reset**-Schalter nach rechts in den aktiven Zustand und klicken Sie auf die Schaltfläche **reset limitations**.

![Tab „Einschränkungen zurücksetzen“](/img/config/product-reset-limitations.png)

## Produkt bearbeiten, duplizieren oder löschen {#edit-duplicate-or-delete-product}

Bestehende Produkte können bearbeitet, dupliziert oder gelöscht werden, indem Sie zu **Ultimate Multisite > Products** navigieren und den Mauszeiger über den Namen des bestehenden Produkts bewegen.

![Hover-Aktionen für Produkt](/img/config/product-hover-actions.png)
