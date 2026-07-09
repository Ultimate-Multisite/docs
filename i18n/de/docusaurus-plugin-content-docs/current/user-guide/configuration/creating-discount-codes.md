---
title: Rabattcodes erstellen
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Rabattcodes erstellen (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Mit Ultimate Multisite kannst du Rabattcodes erstellen, um deinen Kunden Rabatte auf ihre Abonnements zu geben. Und sie zu erstellen ist einfach!

## Rabattcodes erstellen und bearbeiten

Um einen Rabattcode zu erstellen oder zu bearbeiten, gehe zu **Ultimate Multisite > Rabattcodes**.

![Rabattcode-Liste — leerer Zustand, bevor Codes existieren](/img/config/discount-codes-empty.png)

Dort hast du eine Liste der Rabattcodes, die du bereits erstellt hast.

Du kannst auf **Rabatt** **Code hinzufügen** klicken, um einen neuen Gutschein zu erstellen, oder du kannst die vorhandenen bearbeiten, indem du mit der Maus darüberfährst und auf **Bearbeiten** klickst.

![Rabattcode-Liste mit Hover-Aktionen, die Links zum Bearbeiten und Löschen zeigen](/img/config/discount-codes-list-hover.png)

![Button „Rabattcode hinzufügen“ im Seitenkopf](/img/config/discount-codes-add-button.png)

Du wirst auf die Seite weitergeleitet, auf der du deinen Gutscheincode erstellen oder bearbeiten kannst. In diesem Beispiel erstellen wir einen neuen.

![Bearbeitungsseite für Rabattcodes mit allen sichtbaren Abschnitten](/img/config/discount-code-edit.png)

Schauen wir uns die hier verfügbaren Einstellungen an:

**Rabattcode eingeben:** Dies ist nur der Name deines Rabattcodes. Dies ist nicht der Code, den deine Kunden im Checkout-Formular verwenden müssen.

**Beschreibung:** Hier kannst du kurz beschreiben, wofür dieser Gutschein gedacht ist.

![Felder für Rabattcode-Name und Beschreibung oben auf der Bearbeitungsseite](/img/config/discount-code-description.png)

Du kannst den Rabattcode auch als aktiv oder inaktiv anzeigen:

![Aktiver Status des Rabattcodes](/img/config/discount-code-active.png)

**Gutscheincode:** Hier definierst du den Code, den deine Kunden während des Checkouts eingeben müssen.

![Gutscheincode-Feld, in das Kunden den Code beim Checkout eingeben](/img/config/discount-code-coupon-field.png)

**Rabatt:** Hier kannst du entweder einen **Prozentsatz** oder einen **festen Betrag** für deinen Rabattcode festlegen.

![Rabattbetrag-Einstellung mit Dropdown für Prozentsatz oder festen Betrag](/img/config/discount-code-amount.png)

**Auf Verlängerungen anwenden:** Wenn diese Option deaktiviert ist, wird dieser Rabattcode nur auf die **erste Zahlung** angewendet. Alle anderen Zahlungen erhalten keinen Rabatt. Wenn diese Option aktiviert ist, gilt der Rabattcode für alle zukünftigen Zahlungen.

**Rabatt auf Einrichtungsgebühr:** Wenn diese Option deaktiviert ist, gewährt der Gutscheincode **keinen Rabatt auf die Einrichtungsgebühr** der Bestellung. Wenn diese Option aktiviert ist, kannst du den Rabatt (Prozentsatz oder fester Betrag) festlegen, den dieser Gutscheincode auf die Einrichtungsgebühr deiner Tarife anwendet.

![Umschaltoptionen für Anwendung auf Verlängerungen und Rabatt auf Einrichtungsgebühr](/img/config/discount-code-renewals.png)

**Aktiv:** Aktiviere oder deaktiviere diesen Gutscheincode manuell.

![Aktiv-Umschalter zum manuellen Aktivieren oder Deaktivieren des Rabattcodes](/img/config/discount-code-active.png)

Unter **Erweiterte Optionen** haben wir die folgenden Einstellungen:

![Erweiterte Optionen für Rabattcodes](/img/config/discount-code-advanced.png)

**Nutzungen begrenzen:**

  * **Nutzungen:** Hier kannst du sehen, wie oft der Rabattcode verwendet wurde.

  * **Max. Nutzungen:** Dies begrenzt, wie oft Benutzer diesen Rabattcode verwenden können. Wenn du hier zum Beispiel 10 einträgst, kann der Gutschein nur 10-mal verwendet werden. Nach dieser Grenze kann der Gutscheincode nicht mehr verwendet werden.

![Einstellung zur Begrenzung der Nutzungen mit aktueller Nutzungsanzahl und Feld für maximale Nutzungen](/img/config/discount-code-limit-uses.png)

**Start- und Ablaufdaten:** Hier hast du die Möglichkeit, deinem Gutschein ein Startdatum und/oder ein Ablaufdatum hinzuzufügen.

![Felder für Start- und Ablaufdatum zur Planung des Rabattcodes](/img/config/discount-code-dates.png)

**Produkte begrenzen:** Wenn du **Produkte auswählen** aktivierst, werden dir alle deine Produkte angezeigt. Du hast die Möglichkeit, manuell auszuwählen (durch Ein- oder Ausschalten), welches Produkt diesen Gutscheincode akzeptieren kann. Produkte, die hier deaktiviert sind, zeigen keine Änderung, wenn deine Kunden versuchen, diesen Gutscheincode für sie zu verwenden.

![Abschnitt „Produkte begrenzen“ mit Umschaltern pro Produkt](/img/config/discount-code-limit-products.png)

Nachdem du all diese Optionen eingerichtet hast, klicke auf **Rabattcode speichern**, um deinen Gutschein zu speichern, und fertig!

![Button „Rabattcode speichern“ unten auf der Bearbeitungsseite](/img/config/discount-code-save.png)

Der Gutschein ist jetzt in deiner Liste, und von dort aus kannst du auf **bearbeiten oder löschen** klicken.

![Rabattcode-Zeile in der Liste mit Hover-Aktionen zum Bearbeiten und Löschen](/img/config/discount-codes-list-hover.png)

###

### URL-Parameter verwenden:

Wenn du deine Preistabellen anpassen oder eine schöne Gutscheincode-Seite für deine Website erstellen möchtest und automatisch einen Rabattcode auf dein Checkout-Formular anwenden willst, kannst du dies über URL-Parameter tun.

Zuerst musst du den teilbaren Link für deinen Tarif abrufen. Gehe dazu zu **Ultimate Multisite > Produkte** und wähle einen Tarif aus.

Klicke auf den Button **Klicken, um den teilbaren Link zu kopieren**. Dadurch erhältst du den teilbaren Link zu diesem spezifischen Tarif. In unserem Fall war der angegebene teilbare Link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Produktseite mit Button für teilbaren Link](/img/config/products-list.png)

Um deinen Rabattcode auf diesen spezifischen Tarif anzuwenden, füge einfach den Parameter **?discount_code=XXX** zur URL hinzu. Dabei ist **XXX** der Gutscheincode.

In unserem Beispiel wenden wir den Gutscheincode **50OFF** auf dieses spezifische Produkt an.

Die URL für diesen spezifischen Tarif mit angewendetem Rabattcode 50OFF sieht so aus: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
