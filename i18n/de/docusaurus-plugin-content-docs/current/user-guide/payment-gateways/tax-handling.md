---
title: Steuerbehandlung
sidebar_position: 4
_i18n_hash: 087a366fc43cafff9e887f68e71e23fe
---
# Steuerverwaltung

Ultimate Multisite verfügt über ein Steuererhebungsmodul, das in unser Kern-Plugin integriert ist, sodass Sie, wenn Sie Umsatzsteuern auf Ihre Pläne, Pakete und Dienstleistungen erheben müssen, dies problemlos tun können, ohne Add-ons installieren zu müssen.

Für Unternehmen mit Sitz in Europa bieten wir ein **Add-on** an, das Werkzeuge und Funktionen hinzufügt, um die **Mehrwertsteuer**-Compliance besser zu unterstützen.

Ultimate Multisite reicht keine Steuererklärungen ein oder leistet Steuern im Namen des Staates; wir helfen Ihnen lediglich dabei, die entsprechenden Steuern zum Zeitpunkt der Transaktion zu erheben. **Sie müssen die Steuern weiterhin selbst abführen.**

## Steuererhebung aktivieren

Die Steuererhebung ist standardmäßig nicht aktiviert. Um sie zu aktivieren, gehen Sie zu **Ultimate Multisite > Settings > Taxes** und schalten die Option „Enable Taxes“ ein.

![Enable Taxes toggle in tax settings](/img/config/settings-taxes.png)

### Steuer ausgeschlossen vs. Steuer enthalten

Standardmäßig sind alle Ihre Produktpreise steuerfrei, was bedeutet, dass Steuern **nicht im Produktpreis enthalten** sind. Wenn wir feststellen, dass ein Kunde Steuern für einen bestimmten Kauf zahlen muss, fügen wir die Steuern **oben** auf den Zwischensumme hinzu.

Wenn Sie möchten, dass Steuern im Produktpreis enthalten sind, können Sie dies tun, indem Sie die Einstellung **Inclusive Tax** aktivieren.

![Inclusive Tax setting toggle](/img/config/settings-taxes.png)

Vergessen Sie nicht, die vorgenommenen Änderungen **zu speichern**.

## Steuersätze erstellen

Nachdem Sie die Steuererhebung aktiviert haben, müssen Sie Steuersätze für bestimmte Standorte mithilfe unseres Steuersatz-Editors erstellen.

Sie können den Editor öffnen, indem Sie auf die Schaltfläche **Manage Tax Rates** in der Seitenleiste der Steuer-Einstellungsseite klicken.

![Manage Tax Rates button on the sidebar](/img/config/settings-taxes.png)

Auf der Seite des Steuersatz-Editors können Sie neue Steuersätze hinzufügen, indem Sie auf die Schaltfläche **Add new Row** klicken.

![Tax rates editor with Add new Row button](/img/config/settings-taxes.png)

Sie müssen jedem Steuersatz einen **Titel** geben (wird auf Rechnungen verwendet). Anschließend können Sie das **Land** (erforderlich), den **Bundesstaat** und die **Stadt** (beides optional) auswählen, in denen diese Steuer erhoben wird. Schließlich geben Sie den **Steuersatz in Prozent** ein.

### Steuerkategorien

Sie können auch mehrere Steuerkategorien erstellen, um unterschiedliche Steuersätze für verschiedene Produkttypen hinzuzufügen.

Klicken Sie auf **Add new Tax Category**, geben Sie den Namen Ihrer Kategorie ein und drücken Sie **Create**.

![Add new Tax Category button](/img/config/settings-taxes.png)

![Creating a new tax category](/img/config/settings-taxes.png)

Um durch die Kategorien zu blättern, klicken Sie auf **Switch** und wählen Sie die Kategorie aus, zu der Sie neue Steuern hinzufügen möchten.

![Switch between tax categories](/img/config/settings-taxes.png)

![Selecting a tax category to view](/img/config/settings-taxes.png)

Sie können die Steuerkategorie für ein bestimmtes Produkt festlegen, indem Sie zur **Product edit page** gehen und dann zum Tab Steuern wechseln.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Auf demselben Bildschirm können Sie den Schalter **Is Taxable?** ausschalten, um Ultimate Multisite mitzuteilen, dass für dieses Produkt keine Steuern erhoben werden sollen.

## Europäische Mehrwertsteuer-Unterstützung

Wie bereits erwähnt, haben wir ein Add-on für Kunden in der EU, die zusätzliche Anforderungen aufgrund der europäischen Mehrwertsteuervorschriften haben.

Unsere Mehrwertsteuer-Tools helfen bei ein paar wichtigen Dingen:

- Einfache Ladefunktion für EU-Mehrwertsteuersätze;
- Erfassung und Validierung der Mehrwertsteuernummer – sowie Reverse-Charge für Mehrwertsteuerbefreite Unternehmen (wie Unternehmen mit gültiger Mehrwertsteuernummer);

Um dieses Add-on zu installieren, gehen Sie zu **Ultimate Multisite > Settings** und klicken Sie dann auf den Seitenleistenlink **Check our Add-ons**.

![Settings page with add-ons sidebar link](/img/config/settings-taxes.png)

Sie werden auf unsere Add-on-Seite weitergeleitet. Dort können Sie nach dem **Ultimate Multisite VAT add-on** suchen und es installieren.

![VAT add-on on the add-ons page](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

Dann gehen Sie zu **Network Admin > Plugins** und aktivieren das Add-on im gesamten Netzwerk.

![Network Activate the VAT add-on](/img/config/settings-taxes.png)

Wenn Sie zurück zur **Tax Settings tab** gehen, sehen Sie neue Optionen. Schalten Sie die Option **Enable VAT Support** ein, um die neuen Mehrwertsteuer-Tools zu aktivieren. Vergessen Sie nicht, Ihre Einstellungen **zu speichern**!

![Enable VAT Support toggle in tax settings](/img/config/settings-taxes.png)

### Laden der Mehrwertsteuersätze

Eines der Tools, das unsere Integration hinzufügt, ist die Möglichkeit, die Steuersätze für EU-Mitgliedstaaten zu laden. Dies kann durchgeführt werden, indem Sie die Seite des Steuersatz-Editors besuchen, nachdem Sie die EU-Mehrwertsteuer-Unterstützung aktiviert haben.

Unten auf der Seite sehen Sie die Optionen zum Laden der Mehrwertsteuer. Durch Auswählen eines Sätze-Typs und Klicken auf die Schaltfläche **Update EU VAT Rates** werden die Steuersätze für jeden EU-Mitgliedstaat automatisch in die Tabelle geladen. Dann müssen Sie es nur noch speichern.

### ![VAT rates pulling options with Update EU VAT Rates button](/img/config/settings-taxes.png)

Sie können die Werte auch nach dem Laden bearbeiten. Dazu bearbeiten Sie einfach die Zeile in der Tabelle, die Sie benötigen, und klicken zum Speichern der neuen Werte.

### Mehrwertsteuer-Validierung

Wenn die Mehrwertsteuer-Unterstützung aktiviert ist, fügt Ultimate Multisite ein zusätzliches Feld zum Checkout-Formular hinzu, unterhalb des Rechnungsadressfeldes. Das Feld erscheint nur für Kunden, die sich in der EU befinden.

![VAT number field on the checkout form](/img/config/settings-taxes.png)

Ultimate Multisite validiert dann die Mehrwertsteuernummer und wenn sie als gültig zurückkommt, wird das Reverse-Charge-Verfahren angewendet und der Steuersatz für diese Bestellung auf 0 % gesetzt.
