---
title: Sunrise-Datei-Fehler
sidebar_position: 12
_i18n_hash: eec4276c1954a7f93d6d71ef2b15f106
---
# Fehler bei der Installation der Sunrise-Datei

Die Datei **sunrise.php** ist eine spezielle Datei, die WordPress beim Bootstrapping sucht. Damit WordPress die Datei **sunrise.php** erkennen kann, muss sie sich im Ordner **wp-content** befinden.

Wenn Sie Ultimate Multisite aktivieren und den Setup-Assistenten wie auf dem Screenshot durchlaufen, versucht Ultimate Multisite, unsere Datei **sunrise.php** in den Ordner **wp-content** zu kopieren.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

In den meisten Fällen gelingt das Kopieren der Datei problemlos und alles funktioniert. Wenn jedoch etwas nicht richtig eingerichtet ist (z. B. Ordnerberechtigungen), kann es vorkommen, dass Ultimate Multisite die Datei nicht kopieren kann.

Wenn Sie die Fehlermeldung lesen, die Ultimo Ihnen anzeigt, sehen Sie genau das: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Um das zu beheben, können Sie die Datei **sunrise.php** einfach aus dem Ordner des wp‑ultimo‑Plugins kopieren und in Ihren Ordner **wp-content** einfügen. Laden Sie danach die Assistenten‑Seite neu und die Prüfungen sollten bestehen.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In any case, this might warrant a general check of your folder permissions to avoid having problems in the future (not only with Ultimate Multisite but with other plugins and themes as well).

Das **Health Check‑Tool**, das Teil von WordPress ist (Sie können es über Ihr Haupt‑Site‑**Admin‑Panel > Tools > Health Check** aufrufen), kann Ihnen mitteilen, ob Ihre Ordnerberechtigungen auf Werte eingestellt sind, die Probleme mit WordPress verursachen könnten.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
