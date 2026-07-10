---
title: Steuerbehandlung
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Steuerbehandlung {#tax-handling}

Ultimate Multisite hat ein Steuereinzugsmodul in unser Core-Plugin integriert. Wenn du also Umsatzsteuern auf deine Tarife, Pakete und Dienstleistungen erheben musst, kannst du das ganz einfach tun, ohne irgendwelche Add-ons installieren zu müssen.

Für Unternehmen mit Sitz in Europa bieten wir ein **Add-on** an, das Werkzeuge und Funktionen hinzufügt, um die Einhaltung der **Mehrwertsteuer** besser zu unterstützen.

Ultimate Multisite reicht keine Steuern in deinem Namen bei der Regierung ein und führt sie auch nicht ab; wir helfen dir lediglich dabei, zum Zeitpunkt der Transaktion die entsprechenden Steuern zu erheben. **Du musst die Steuern weiterhin selbst abführen.**

## Steuereinzug aktivieren {#enabling-tax-collection}

Der Steuereinzug ist standardmäßig nicht aktiviert. Um ihn zu aktivieren, musst du zu **Ultimate Multisite > Einstellungen > Steuern** gehen und den Schalter aktivieren, um die Einstellung „Steuern aktivieren“ einzuschalten.

![Schalter „Steuern aktivieren“ oben auf der Seite mit den Steuereinstellungen](/img/config/settings-taxes-enable.png)

Hier ist eine vollständige Ansicht der Seite mit den Steuereinstellungen:

![Vollständige Seite mit Steuereinstellungen](/img/config/settings-taxes-full.png)

Du kannst dir auch die Steuereinstellungen für einzelne Produkte ansehen:

![Steuereinstellungen für Produkte](/img/config/settings-taxes.png)

### Steuer ausgeschlossen vs. Steuer eingeschlossen {#tax-excluded-vs-tax-included}

Standardmäßig sind alle deine Produktpreise ohne Steuer, was bedeutet, dass Steuern **nicht im Preis** des Produkts enthalten sind. Wenn wir feststellen, dass ein Kunde bei einem bestimmten Kauf Steuern zahlen sollte, fügen wir die Steuern **zusätzlich** zur Zwischensumme hinzu.

Wenn du es bevorzugst, dass Steuern im Preis deines Produkts enthalten sind, kannst du dies tun, indem du die Einstellung **Inklusive Steuer** aktivierst.

![Zeile mit dem Schalter „Inklusive Steuer“ unter der Einstellung „Steuern aktivieren“](/img/config/settings-taxes-inclusive.png)

Vergiss nicht, die vorgenommenen Änderungen zu **speichern**.

###

## Steuersätze erstellen {#creating-tax-rates}

Nachdem du den Steuereinzug aktiviert hast, musst du mit unserem Steuersatz-Editor Steuersätze für bestimmte Standorte erstellen.

Du kannst auf den Editor zugreifen, indem du in der Seitenleiste der Seite mit den Steuereinstellungen auf die Schaltfläche **Steuersätze verwalten** klickst.

![Link „Steuersätze verwalten“ im Bereich „Steuersätze“ auf der Einstellungsseite](/img/config/settings-taxes-manage-rates.png)

Auf der Seite des Steuersatz-Editors kannst du neue Steuersätze hinzufügen, indem du auf die Schaltfläche **Neue Zeile hinzufügen** klickst.

![Tabelle des Steuersatz-Editors mit Schaltfläche „Neue Zeile hinzufügen“ oben](/img/config/tax-rates-editor.png)

Du musst jedem Steuersatz einen **Titel** geben (wird auf Rechnungen verwendet). Dann kannst du das **Land** (erforderlich), das **Bundesland,** und die **Stadt** (beide optional) auswählen, in denen diese Steuer erhoben wird. Füge schließlich den **Steuersatz in Prozent** hinzu.

### Steuerkategorien {#tax-categories}

Du kannst auch mehrere Steuerkategorien erstellen, um unterschiedliche Steuersätze für verschiedene Arten von Produkten hinzuzufügen.

Klicke auf **Neue Steuerkategorie hinzufügen** , schreibe dann den Namen deiner Kategorie und drücke **Erstellen**.

![Schaltfläche „Neue Steuerkategorie hinzufügen“ oben im Steuersatz-Editor](/img/config/tax-categories-add.png)

![Eingabefeld „Name der Steuerkategorie“ im Modal zum Erstellen der Kategorie](/img/config/tax-categories-create-modal.png)

Um durch Kategorien zu blättern, klicke auf **Wechseln** und wähle die Kategorie aus, zu der du neue Steuern hinzufügen möchtest.

![Dropdown-Schaltfläche „Wechseln“, um zwischen Steuerkategorien zu wechseln](/img/config/tax-categories-switch.png)

![Dropdown zur Auswahl der Steuerkategorie mit verfügbaren Kategorien](/img/config/tax-categories-select.png)

Du kannst die Steuerkategorie für ein bestimmtes Produkt festlegen, indem du zur **Produkt-Bearbeitungsseite** und dann zum Tab „Steuern“ gehst.

![Produkt-Steuern-Tab mit Steuerkategorie und steuerpflichtig-Schalter](/img/config/product-taxes.png)

Auf demselben Bildschirm kannst du den Schalter **Ist steuerpflichtig?** deaktivieren, damit Ultimate Multisite weiß, dass es für dieses bestimmte Produkt keine Steuern erheben soll.

## Europäische Mehrwertsteuer-Unterstützung {#european-vat-support}

Wie bereits erwähnt, haben wir ein Add-on für Kunden in der EU verfügbar, die aufgrund der europäischen Mehrwertsteuer-Vorschriften zusätzliche Anforderungen haben.

Unsere Mehrwertsteuer-Werkzeuge helfen bei einigen wichtigen Dingen:

  * Einfaches Laden von EU-Mehrwertsteuersätzen;

  * Erfassung und Validierung der Umsatzsteuer-Identifikationsnummer – und Reverse-Charge für von der Mehrwertsteuer befreite Rechtsträger (z. B. Unternehmen mit gültigen Umsatzsteuer-Identifikationsnummern);

Um dieses Add-on zu installieren, gehe zu **Ultimate Multisite > Einstellungen** und klicke dann auf den Seitenleisten-Link **Unsere Add-ons ansehen**.

![Seitenleiste der Einstellungsseite mit Link „Unsere Add-ons ansehen“](/img/config/settings-taxes-addons-link.png)

Du wirst zu unserer Add-ons-Seite weitergeleitet. Dort kannst du nach dem **Ultimate Multisite Mehrwertsteuer-Add-on** suchen und es installieren.

<!-- Screenshot nicht verfügbar: Kachel des Mehrwertsteuer-Add-ons auf der Add-ons-Seite -->

<!-- Screenshot nicht verfügbar: Dialog „Jetzt installieren“ für das Mehrwertsteuer-Add-on -->

Gehe dann zu **Network Admin > Plugins** und aktiviere dieses Add-on netzwerkweit.

<!-- Screenshot nicht verfügbar: Aktion „Netzwerkweit aktivieren“ für das Mehrwertsteuer-Add-on auf der Plugins-Seite -->

Wenn du zurück zum **Tab „Steuereinstellungen“** gehst, siehst du neue verfügbare Optionen. Aktiviere die Option **Mehrwertsteuer-Unterstützung aktivieren**, um die neuen Mehrwertsteuer-Werkzeuge zu aktivieren. Vergiss nicht, deine Einstellungen zu **speichern**!

<!-- Screenshot nicht verfügbar: Schalter „Mehrwertsteuer-Unterstützung aktivieren“ in den Steuereinstellungen nach der Aktivierung des Add-ons -->

### Mehrwertsteuersätze abrufen {#pulling-on-vat-tax-rates}

Eines der Werkzeuge, die unsere Integration hinzufügt, ist die Möglichkeit, die Steuersätze für EU-Mitgliedstaaten zu laden. Das kann erfolgen, indem du nach dem Aktivieren der EU-Mehrwertsteuer-Unterstützung die Seite des Steuersatz-Editors besuchst.

Am unteren Rand der Seite siehst du die Optionen zum Abrufen der Mehrwertsteuer. Wenn du einen Satztyp auswählst und auf die Schaltfläche **EU-Mehrwertsteuersätze aktualisieren** klickst, wird die Tabelle mit den Steuersätzen für jeden EU-Mitgliedstaat abgerufen und automatisch ausgefüllt. Danach musst du sie nur noch speichern.

![Schaltfläche „EU-Mehrwertsteuersätze aktualisieren“ am unteren Rand des Steuersatz-Editors](/img/config/tax-rates-vat-pull.png)

Du kannst die Werte nach dem Abrufen auch bearbeiten. Bearbeite dazu einfach die benötigte Tabellenzeile und klicke, um die neuen Werte zu speichern.

### Mehrwertsteuer-Validierung {#vat-validation}

Wenn die Mehrwertsteuer-Unterstützung aktiviert ist, fügt Ultimate Multisite dem Checkout-Formular unterhalb des Rechnungsadressfelds ein zusätzliches Feld hinzu. Das Feld wird nur für Kunden mit Sitz in der EU angezeigt.

<!-- Screenshot nicht verfügbar: Feld für die Umsatzsteuer-Identifikationsnummer im Frontend-Checkout-Formular unterhalb der Rechnungsadresse -->

Ultimate Multisite validiert dann die Umsatzsteuer-Identifikationsnummer, und wenn sie als gültig zurückkommt, wird das Reverse-Charge-Verfahren angewendet und der Steuersatz für diese Bestellung auf 0 % gesetzt.
