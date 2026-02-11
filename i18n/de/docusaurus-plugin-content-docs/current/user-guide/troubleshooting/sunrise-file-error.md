---
title: Sunrise-Datei-Fehler
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Fehler bei der Installation der Sunrise-Datei

Die Datei **sunrise.php** ist eine spezielle Datei, die WordPress beim Bootstrapping sucht. Damit WordPress die Datei **sunrise.php** erkennen kann, muss sie sich im Ordner **wp-content** befinden.

Wenn Sie Ultimate Multisite aktivieren und den Setup-Assistenten wie auf dem Screenshot durchlaufen, versucht Ultimate Multisite, unsere Datei **sunrise.php** in den Ordner **wp-content** zu kopieren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-v6hosgLWpt.png)

In den meisten Fällen gelingt das Kopieren der Datei problemlos und alles funktioniert. Wenn jedoch etwas nicht richtig eingerichtet ist (z. B. Ordnerberechtigungen), kann es vorkommen, dass Ultimate Multisite die Datei nicht kopieren kann.

Wenn Sie die Fehlermeldung lesen, die Ultimo Ihnen anzeigt, sehen Sie genau das: **Sunrise copy failed**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RXS5EbirfM.png)

Um das zu beheben, können Sie die Datei **sunrise.php** einfach aus dem Ordner des wp‑ultimo‑Plugins kopieren und in Ihren Ordner **wp-content** einfügen. Laden Sie danach die Assistenten‑Seite neu und die Prüfungen sollten bestehen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-p6hz1I9ycl.png) In jedem Fall kann dies ein Hinweis auf eine allgemeine Überprüfung Ihrer Ordnerberechtigungen sein, um zukünftige Probleme zu vermeiden (nicht nur mit Ultimate Multisite, sondern auch mit anderen Plugins und Themes).

Das **Health Check‑Tool**, das Teil von WordPress ist (Sie können es über Ihr Haupt‑Site‑**Admin‑Panel > Tools > Health Check** aufrufen), kann Ihnen mitteilen, ob Ihre Ordnerberechtigungen auf Werte eingestellt sind, die Probleme mit WordPress verursachen könnten.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oZEKeyxo2E.png)
