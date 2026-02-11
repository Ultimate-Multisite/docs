---
title: Rabattcodes erstellen
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Erstellen von Rabattcodes (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Mit Ultimate Multisite können Sie Rabattcodes erstellen, um Ihren Kunden Rabatte auf ihre Abonnements zu gewähren. Und die Erstellung ist einfach!

## Erstellen und Bearbeiten von Rabattcodes

Um einen Rabattcode zu erstellen oder zu bearbeiten, gehen Sie zu **Ultimate Multisite > Discount Codes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

Dort haben Sie eine Liste der bereits erstellten Rabattcodes.

Sie können auf **Add Discount** **Code** klicken, um einen neuen Gutschein zu erstellen, oder die vorhandenen bearbeiten, indem Sie mit der Maus darüber fahren und auf **Edit** klicken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

Sie werden zur Seite weitergeleitet, auf der Sie Ihren Gutscheincode erstellen oder bearbeiten. In diesem Beispiel erstellen wir einen neuen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

Schauen wir uns die hier verfügbaren Einstellungen an:

**Enter Discount Code:** Dies ist nur der Name Ihres Rabattcodes. Dies ist nicht der Code, den Ihre Kunden beim Checkout verwenden müssen.

**Description:** Hier können Sie kurz beschreiben, wofür dieser Gutschein gedacht ist.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Coupon code:** Hier definieren Sie den Code, den Ihre Kunden während des Checkouts eingeben müssen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Discount:** Hier können Sie entweder einen **Prozentsatz** oder einen **festen Betrag** für Ihren Rabattcode festlegen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Apply to renewals:** Wenn diese Option deaktiviert ist, wird dieser Rabattcode nur auf die **erste Zahlung** angewendet. Alle weiteren Zahlungen erhalten keinen Rabatt. Ist die Option aktiviert, ist der Rabattcode für alle zukünftigen Zahlungen gültig.

**Setup fee discount:** Wenn diese Option deaktiviert ist, gewährt der Gutscheincode **keinen Rabatt auf die Einrichtungsgebühr** der Bestellung. Ist die Option aktiviert, können Sie den Rabatt (Prozentsatz oder fester Betrag) festlegen, den dieser Gutscheincode auf die Einrichtungsgebühr Ihrer Pläne anwendet.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Active:** Aktivieren oder deaktivieren Sie diesen Gutscheincode manuell.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

Unter **Advanced Options** haben wir die folgenden Einstellungen:

**Limit uses:**

  * **Uses:** Hier sehen Sie, wie oft der Rabattcode verwendet wurde.

  * **Max uses:** Dies begrenzt die Anzahl der Male, die Benutzer diesen Rabattcode verwenden können. Wenn Sie hier beispielsweise 10 eingeben, kann der Gutschein nur 10 Mal verwendet werden. Nach diesem Limit kann der Rabattcode nicht mehr verwendet werden.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)

**Start & expiration dates:** Hier haben Sie die Möglichkeit, ein Startdatum und/oder ein Ablaufdatum für Ihren Gutschein hinzuzufügen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limit products:** Wenn Sie **Select products** aktivieren, werden Ihnen alle Ihre Produkte angezeigt. Sie haben die Möglichkeit, manuell (durch Aktivieren oder Deaktivieren) auszuwählen, welche Produkte diesen Gutscheincode akzeptieren können. Produkte, die hier deaktiviert sind, zeigen keine Änderung, wenn Ihre Kunden versuchen, diesen Gutscheincode zu verwenden.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

Nachdem Sie all diese Optionen eingerichtet haben, klicken Sie auf **Save Discount Code**, um Ihren Gutschein zu speichern, und fertig!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

Der Gutschein steht jetzt in Ihrer Liste, und von dort aus können Sie auf **edit or delete** klicken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### Verwendung von URL-Parametern:

Wenn Sie Ihre Preistabellen anpassen oder eine schöne Gutscheincode-Seite für Ihre Website erstellen und einen Rabattcode automatisch auf Ihr Checkout-Formular anwenden möchten, können Sie dies über URL-Parameter tun.

Zuerst müssen Sie den freigegebenen Link für Ihren Plan erhalten. Gehen Sie dazu zu **Ultimate Multisite > Products** und wählen Sie einen Plan aus.

Klicken Sie auf die Schaltfläche **Click to Copy Shareable Link**. Dadurch erhalten Sie den freigegebenen Link zu diesem spezifischen Plan. In unserem Fall war der freigegebene Link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TecoStCUYi.png)

Um Ihren Rabattcode auf diesen spezifischen Plan anzuwenden, fügen Sie einfach den Parameter **?discount_code=XXX** zur URL hinzu. Dabei ist **XXX** der Gutscheincode.

In unserem Beispiel wenden wir den Gutscheincode **50OFF** auf dieses spezifische Produkt an.

Die URL für diesen spezifischen Plan mit dem angewendeten 50OFF-Rabattcode sieht so aus: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
