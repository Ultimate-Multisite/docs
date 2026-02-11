---
title: Automatisches Suchen und Ersetzen in Site-Vorlagen
sidebar_position: 8
_i18n_hash: 81adce2fb2df1a5296590bffea6f2d14
---
# Automatisches Suchen und Ersetzen in Site-Vorlagen (v2)

_**Dieses Tutorial erfordert WP UItimo Version 2.x.**_

Eine der mächtigsten Funktionen von Ultimate Multisite ist die Möglichkeit, beliebigen Text, Farbe und Auswahlfelder zum Registrierungsformular hinzuzufügen. Sobald wir diese Daten erfasst haben, können wir sie nutzen, um bestimmte Teile des ausgewählten Site-Vorlageninhalts vorab zu befüllen. Dann, wenn die neue Site veröffentlicht wird, ersetzt Ultimate Multisite die Platzhalter durch die tatsächlich während der Registrierung eingegebenen Informationen.

Zum Beispiel können Sie Ihre Vorlagen-Sites mit Platzhaltern versehen. Platzhalter sollten von doppelten geschweiften Klammern umgeben sein – {{placeholder_name}}.

Dann können Sie einfach ein entsprechendes Registrierungsfeld hinzufügen, um diese Daten zu erfassen.

Ihr Kunde kann dieses Feld dann während der Registrierung ausfüllen.

Ultimate Multisite ersetzt die Platzhalter anschließend automatisch durch die vom Kunden bereitgestellten Daten.

## **Lösung des Problems „Vorlage voller Platzhalter“**

All das ist großartig, aber wir stoßen auf ein hässliches Problem: jetzt sind unsere Site-Vorlagen – die von unseren Kunden besucht werden können – voller hässlicher Platzhalter, die wenig aussagen.

Um das zu lösen, bieten wir die Möglichkeit, gefälschte Werte für die Platzhalter festzulegen, und wir verwenden diese Werte, um deren Inhalte auf den Vorlagen-Sites während des Besuchs Ihrer Kunden zu suchen und zu ersetzen.

Sie können auf den Editor für Vorlagen-Platzhalter zugreifen, indem Sie zu **Ultimate Multisite > Settings > Sites** gehen und dann im Seitenleistenmenü auf den Link Edit Placeholders klicken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aFtnOrska9.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OeMzuyauOW.png)
