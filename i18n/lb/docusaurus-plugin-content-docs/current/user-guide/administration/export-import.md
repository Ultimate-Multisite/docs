---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ultimate Multisite 2.9.0 füegt es einzelni Site **Export & Import** Tool unter **Tools > Export & Import** bi. Bruche das, wenn Sie eene WordPress-Site als ZIP-Datei verpacke, die ZIP wiederherstellen oder eene Site zwüsche kompatible Ultimate Multisite und Single-site WordPress Installatione verschiebe.

## Erforderlichi Berechtigunge {#required-permissions}

Sie müesse sich als Administrator anmelden, wo Zuegang zu em WordPress **Tools** Menü uf de Site hät, wo Sie exportiere oder importiere wend. Ume eme Multisite Netzwerk bruuche Sie bi Export oder Import vo Subsites us Tools vom Netzwerk-Level Ultimate Multisite e Netzwerkadministrator-Account.

Export ZIP Downloads werdet über en authentifizierte Download-Endpunkt serviert, drum bliebe Sie d'Admin-Session aktiv, bis de Download fertig isch und teile Sie d'generierte Download-URLs nöd öffentlich.

## E Site als ZIP exportiere {#exporting-a-site-to-a-zip}

1. Im WordPress Admin für die Site, wo Sie kopiere wend, gaht Sie zu **Tools > Export & Import**.
2. Öffne de Exportbereich und wähle d'Site us, wo Sie verpacke wend.
3. Wähle optional Inhalt us zum Iifüüge, wie Uploads, Plugins und Themes, wenn die Option verfügbar isch.
4. Starte de Export und warte, bis de Prozess fertig isch. Grossi Sites müesse villicht im Hintergrund fertig werde, bevor d'ZIP parat isch.
5. Lade d'fertigi ZIP us de Exports-Liste runter.

Behalte d'ZIP an ere sichere Ort. Sie chan Siteinhalt, Iistellige, Mediendateie und gwählti Code-Assets enthalte.

## Was de Export beinhaltet {#what-the-export-includes}

En Export ZIP chan folgendes enthalte:

- De Datenbankinhalt und d'Konfiguration vo de gwählte Site.
- Uploaded Media Dateie, wenn Uploads iigfüegt sind.
- Plugins und Themes, wenn die Option wählt isch.
- Importmetadate, wo s'Export & Import Tool brucht, um d'Site uf de Zielinstallation wieder ufzbaue.

D'exakte ZIP-Größe hängt vo de Menge an Medien, de ausgewählte Plugins und Themes sowie de Größe vo de Datenbanktabellen vo de Site ab.

## Eiseite us eme ZIP importiere {#importing-a-site-from-a-zip}

1. Gang zu **Tools > Export & Import** uf de Ziel WordPress-Site.
2. Öffne de Import-Bereich und lade de ZIP hoch, wo du mit em Export & Import Tool erstellt häsch.
3. Gib en Ersatz-URL ii, falls d'Site e neui Adress brucht, oder la de Feld leer, um d'ursprünglichi URL z'behalte.
4. Wähl, ob du de hochglade ZIP nach em Import lösche wetsch.
5. Klick uf **Begin Import**.
6. Beobachte de ausstehendi Import, bis er fertig isch. Bruuch **Cancel Import** nur, wenn du de Prozess vor em Abschluss stoppe muesch.
7. Überprüf d'importierti Site, bevor du normale Traffic oder Kundezugang zuelösch.

Bi eme Ein-Site WordPress-Installations ersetzt en ZIP d'aktuelli Site dur d'importierti Site. Mach e vollständige Backup vo de Ziel-Site, bevor du afangsch, und vermeid es, mehri Imports für di gliichi Site glichzitig z'starte.

## Begränzige und Kompatibilitätsnotize {#limitations-and-compatibility-notes}

Sehr grossi Upload-Verzeichnisse oder Medienbibliotheke chönne grossi ZIP-Dateie produziere. Bestätige d'PHP-Upload-Limits, d'Usfüehrigslimits, de Festplätz, de Speicher und d'Server-Timeout-Iistellige, bevor du grossi Site exportiersch oder importiersch.
Sehr grossi Medienbibliotheke müesse villicht während eme Wartigsfenster mit wenig Verkehr verleit werde.
D'Ziel-WordPress-Installation muess kompatibli WordPress-, PHP-, Ultimate Multisite-, Plugin- und Theme-Versionen laufe.
E Import vo ere Einzilsite ersetzt d'Ziel-Site. Es isch kei Merge-Tool.
Moves vo Multisite uf e Einzilsite und vo e Einzilsite uf Multisite sind nur möglich, wenn d'Zielumgäbig d'Plugins, Themes, URLs und die nötige Ultimate Multisite-Komponente vom exportierte Site laufe chann.
Halt de ZIP privat. Er chan Datenbankinhalt, hochgeladeni Dateie und Konfigurationsdetails vo de exportierte Site enthalte.

Für älteri Export-Workflows uf Netzwerkebene lueg dir [Site Export](/user-guide/administration/site-export) a.
