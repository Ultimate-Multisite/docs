---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportieren & Importieren {#export--import}

Ultimate Multisite 2.9.0 fügt ein Tool zum **Exportieren & Importieren** für einzelne Websites unter **Tools > Exportieren & Importieren** hinzu. Verwenden Sie es, wenn Sie eine WordPress-Website als ZIP-Datei verpacken, diese ZIP-Datei wiederherstellen oder eine Website zwischen kompatiblen Ultimate Multisite- und Einzel-Website-WordPress-Installationen verschieben müssen.

## Erforderliche Berechtigungen {#required-permissions}

Sie müssen sich als Administrator anmelden, der Zugriff auf das WordPress-Menü **Tools** auf der zu exportierenden oder zu importierenden Website hat. Bei einem Multisite-Netzwerk verwenden Sie bei der Exportierung oder dem Import von Subsites aus den Netzwerk-Tools von Ultimate Multisite ein Netzwerkadministrator-Konto.

ZIP-Downloads werden über einen authentifizierten Download-Endpunkt bereitgestellt. Halten Sie daher die Admin-Sitzung aktiv, bis der Download abgeschlossen ist, und geben Sie die erstellten Download-URLs nicht öffentlich weiter.

## Exportieren einer Website als ZIP {#exporting-a-site-to-a-zip}

1. Gehen Sie im WordPress-Admin der Website, die Sie kopieren möchten, zu **Tools > Exportieren & Importieren**.
2. Öffnen Sie den Exportbereich und wählen Sie die Website, die Sie verpacken möchten.
3. Wählen Sie optional den Inhalt aus, den Sie einbeziehen möchten, wie z. B. Uploads, Plugins und Themes, sofern diese Optionen verfügbar sind.
4. Starten Sie den Export und warten Sie, bis der Vorgang abgeschlossen ist. Große Websites benötigen möglicherweise Hintergrundverarbeitung, bevor die ZIP-Datei fertig ist.
5. Laden Sie die fertige ZIP-Datei aus der Exportliste herunter.

Bewahren Sie die ZIP-Datei an einem sicheren Ort auf. Sie kann Website-Inhalte, Einstellungen, Mediendateien und ausgewählte Code-Assets enthalten.

## Was der Export beinhaltet {#what-the-export-includes}

Eine Export-ZIP kann enthalten:

- Die Datenbankinhalte und Konfiguration der ausgewählten Website.
- Hochgeladene Mediendateien, wenn Uploads einbezogen werden.
- Plugins und Themes, wenn diese Optionen ausgewählt sind.
- Import-Metadaten, die vom Export & Import Tool verwendet werden, um die Website auf der Zielinstallation wieder aufzubauen.

Die genaue Größe der ZIP-Datei hängt von der Menge der Medien, den ausgewählten Plugins und Themes und der Größe der Datenbanktabellen der Website ab.

## Importieren einer Website aus einer ZIP {#importing-a-site-from-a-zip}

1. Gehen Sie auf der Ziel-WordPress-Website zu **Tools > Exportieren & Importieren**.
2. Öffnen Sie den Importbereich und laden Sie die von dem Export & Import Tool erstellte ZIP-Datei hoch.
3. Geben Sie eine Ersatz-URL ein, falls die Website eine neue Adresse verwenden soll, oder lassen Sie das Feld leer, um die ursprüngliche URL beizubehalten.
4. Wählen Sie, ob die hochgeladene ZIP-Datei nach Abschluss des Imports gelöscht werden soll.
5. Klicken Sie auf **Import starten**.
6. Überwachen Sie den ausstehenden Import, bis dieser abgeschlossen ist. Verwenden Sie **Import abbrechen** nur, wenn Sie den Vorgang vor Abschluss stoppen müssen.
7. Überprüfen Sie die importierte Website, bevor Sie normalen Datenverkehr oder Kundenzugriff erlauben.

Auf einer Einzel-Website-WordPress-Installation ersetzt das Importieren einer ZIP die aktuelle Website durch die importierte Website. Erstellen Sie vor Beginn ein vollständiges Backup der Ziel-Website und vermeiden Sie es, gleichzeitig mehrere Imports für dieselbe Website zu starten.

## Einschränkungen und Kompatibilitätshinweise {#limitations-and-compatibility-notes}

- Sehr große Upload-Verzeichnisse oder Mediendbibliotheken können zu großen ZIP-Dateien führen. Bestätigen Sie die PHP-Upload-Limits, Ausführungslimits, Festplattenspeicher, den Speicher und die Server-Timeout-Einstellungen, bevor Sie große Websites exportieren oder importieren.
- Sehr große Mediendbibliotheken müssen möglicherweise während eines Wartungsfensters mit geringem Datenverkehr verschoben werden.
- Die Ziel-WordPress-Installation sollte kompatible Versionen von WordPress, PHP, Ultimate Multisite, Plugins und Themes ausführen.
- Ein Import für eine Einzel-Website ersetzt die Ziel-Website. Es handelt sich nicht um ein Merge-Tool.
- Der Wechsel von Multisite zu Einzel-Website und von Einzel-Website zu Multisite wird nur unterstützt, wenn die Zielumgebung die Plugins, Themes, URLs und erforderlichen Ultimate Multisite-Komponenten der exportierten Website ausführen kann.
- Behalten Sie die ZIP-Datei privat. Sie kann Datenbankinhalte, hochgeladene Dateien und Konfigurationsdetails der exportierten Website enthalten.

Für ältere Netzwerk-Export-Workflows siehe [Site Export](/user-guide/administration/site-export).
