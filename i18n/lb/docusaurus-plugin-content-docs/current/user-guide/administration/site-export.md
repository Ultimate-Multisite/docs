---
title: Site-Export
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export

D'Admin-Siite Export-siite laatet Ihnen, e Netzwerkinadministrator chann eis Siite oder s'ganze Netz in en nachladbare Archiv für Migration, Backup oder Übernahmearbeit z'packe.

## Eise Siite exportiere

Geit zu **Ultimate Multisite > Site Export** und wähle **Generate new Site Export**. Wähle d'Subsite us, wo Sie exportiere wend, und wähle denn, ob s'Archiv Uploads, Plugins und Themes iibinde söll.

Wann de Export fertig isch, lad de ZIP us de Liste **Existing Exports** runter. Export-ZIP's enthalt jetz en selber startende `index.php` und en `readme.txt`, so dass de Archiv uf en frische Host hochglade und ohni vorher e separate Importer Plugin z'installiere starte cha wärde.

## S'ganze Netz exportiere

Benutze Sie **Network Export** uf de Site Export-Siite, wenn Sie en einzelnes Archiv bruche, wo alli Subsiete im Netz enthält. Das isch nützlich vor Host-Migratione, bei Katastrophenwiederherstelligsübige oder Staging-Ufbau, wo jede Subsite zäme müesse reise.

Will en Network Export viel grösser chönnt si als en Einzel-Siite Export, laufe Sie ihn während ere Ziit mit wenig Verkehr und bestätige Sie, dass de Zielspeicher gnueg freie Platz für Uploads, Plugins, Themes und generierti ZIP-Dateie het.

### Network Import Bundles

Mit Ultimate Multisite 2.12.0 chann de Site Exporter **network import bundles** generiere – spezialisierti Archiv, wo für e vereifelti Netzwerkwitwiiti Siiterestaurierig gmacht sind. En network import bundle enthält alli nötige Date und Metadate, um mehri Siite uf en neui Netzwerkinstallation z'wiederherstelle.

#### Generiere vo eme Network Import Bundle

1. Gaat u **Ultimate Multisite > Site Export**
2. Klicke u **Generate new Network Export**
3. Wähl **Network Import Bundle** als exporttyp us
4. Wähl, ob du Uploads, Plugins und Themes iibinde wetsch
5. Klicke u **Generate**
6. Lad de bundle ZIP us de Liste **Existing Exports** runter

#### Wiederherstelle us eme Network Import Bundle

Um Sites us eme network import bundle wiederherzstelle:

1. Installier Ultimate Multisite uf din Zielhost
2. Schließe de multisite setup wizard ab
3. Ga u **Ultimate Multisite > Site Export** uf de neie network
4. Klicke u **Import Network Bundle**
5. Lad de network import bundle ZIP file hoch
6. Folg de on-screen import instruktionen
7. De importprozess wird alli Sites, ihri Inhalt und Konfiguration wiederherstelle

Network import bundles bewahre:
- Site content (posts, pages, custom post types)
- Site settings und options
- User roles und permissions
- Plugins und themes (falls sie im bundle iibunde sind)
- Media uploads (falls sie im bundle iibunde sind)
- Custom database tables und data

## Installiere en selbststartende export ZIP

Um en selbststartende ZIP uf eme frische host wiederherzstelle:

1. Lad de Inhalt vom exportierte ZIP in de Ziel web root hoch.
2. Öffne de hochglade `index.php` i eme Browser.
3. Folg de on-screen installer instruktionen us em bundle export package.
4. Überprüef de bundle `readme.txt` uf exportspezifischi Notize, bevor du temporäri Datei wegschmeissisch.

Für spezifischi Installations- und Importdetails vo Addon channst du d'Dokumentation vom [Site Exporter addon](/addons/site-exporter) aluege.

Für s'Single-Site Tool, wo in Ultimate Multisite 2.9.0 dezuegfüegt isch, lueg u [Export & Import](/user-guide/administration/export-import).
