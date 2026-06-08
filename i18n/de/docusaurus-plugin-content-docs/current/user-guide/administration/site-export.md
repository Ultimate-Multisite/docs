---
title: Site Export
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export

Die Admin-Seite **Site Export** ermöglicht es Netzwerkadministratoren, eine einzelne Website oder das gesamte Netzwerk in ein herunterladbares Archiv zu verpacken. Dies ist nützlich für Migrationen, Backups oder wenn Sie die Daten an einen Dritten übergeben müssen.

## Exportieren einer einzelnen Website

Gehen Sie zu **Ultimate Multisite > Site Export** und wählen Sie **Generate new Site Export**. Wählen Sie die Unterseite aus, die Sie exportieren möchten, und entscheiden Sie dann, ob das Archiv auch Uploads, Plugins und Themes enthalten soll.

Sobald der Export abgeschlossen ist, laden Sie die ZIP-Datei aus der Liste **Existing Exports** herunter. Die Export-ZIPs enthalten jetzt ein selbststartendes `index.php` und eine `readme.txt`, sodass das Archiv auf einem neuen Host hochgeladen und gestartet werden kann, ohne vorher ein separates Import-Plugin installieren zu müssen.

## Exportieren des gesamten Netzwerks

Verwenden Sie auf der Site Export Seite **Network Export**, wenn Sie ein einziges Archiv benötigen, das alle Unterseiten des Netzwerks enthält. Dies ist nützlich vor Host-Migrationen, bei Disaster-Recovery-Übungen oder beim Wiederaufbau von Staging-Umgebungen, bei denen jede Unterseite zusammengehören muss.

Da ein Netzwerk-Export viel größer sein kann als ein Einzel-Site-Export, führen Sie diesen bitte während einer Zeit mit geringem Datenverkehr durch und stellen Sie sicher, dass der Zielspeicher genügend freien Platz für Uploads, Plugins, Themes und die erzeugten ZIP-Dateien hat.

### Network Import Bundles

Mit Ultimate Multisite 2.12.0 kann Site Exporter **network import bundles** erstellen – spezielle Archive, die für eine optimierte Wiederherstellung des gesamten Netzwerks konzipiert sind. Ein Netzwerk-Import-Bundle enthält alle notwendigen Dateien und Metadaten, um mehrere Websites auf einer neuen Netzwerkinstallation wiederherzustellen.

#### Ein Network Import Bundle erstellen

1. Gehen Sie zu **Ultimate Multisite > Site Export**
2. Klicken Sie auf **Generate new Network Export**
3. Wählen Sie **Network Import Bundle** als Exporttyp
4. Wählen Sie, ob Uploads, Plugins und Themes enthalten sein sollen
5. Klicken Sie auf **Generate**
6. Laden Sie das Bundle ZIP aus der Liste **Existing Exports** herunter

#### Wiederherstellen aus einem Network Import Bundle

Um Websites aus einem Netzwerk-Import-Bundle wiederherzustellen:

1. Installieren Sie Ultimate Multisite auf Ihrem Zielhost
2. Schließen Sie den Multisite-Setup-Assistenten ab
3. Gehen Sie auf dem neuen Netzwerk zu **Ultimate Multisite > Site Export**
4. Klicken Sie auf **Import Network Bundle**
5. Laden Sie die Netzwerk-Import-Bundle-ZIP-Datei hoch
6. Befolgen Sie die Anweisungen zum Import auf dem Bildschirm
7. Der Importvorgang stellt alle Websites, deren Inhalte und Konfigurationen wieder her

Network import bundles bewahren:
- Website-Inhalte (Beiträge, Seiten, benutzerdefinierte Beitragstypen)
- Website-Einstellungen und Optionen
- Benutzerrollen und Berechtigungen
- Plugins und Themes (falls im Bundle enthalten)
- Mediendateien (falls im Bundle enthalten)
- Benutzerdefinierte Datenbanktabellen und Daten

## Installation eines selbststartenden Export-ZIPs

Um ein selbststartendes ZIP auf einem neuen Host wiederherzustellen:

1. Laden Sie den Inhalt des exportierten ZIPs in das Ziel-Web-Root hoch.
2. Öffnen Sie das hochgeladene `index.php` in einem Browser.
3. Befolgen Sie die Anweisungen des eingebetteten Installers aus dem Exportpaket.
4. Überprüfen Sie die eingebettete `readme.txt` auf spezifische Export-Hinweise, bevor Sie temporäre Dateien löschen.

Weitere Details zur Installation und zum Import für Addons finden Sie in der [Site Exporter addon documentation](/addons/site-exporter).

Für das Einzel-Site-Tool, das in Ultimate Multisite 2.9.0 hinzugefügt wurde, siehe [Export & Import](/user-guide/administration/export-import).
