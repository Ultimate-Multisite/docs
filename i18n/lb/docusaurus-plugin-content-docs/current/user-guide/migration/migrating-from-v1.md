---
title: V1 migiere
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migriere vo V1

## Ultimate Multisite isch vo sin ursprüngle 1.x Familie vo Releases uf d'2.x Familie vo Releases gwächslet.

Ultimate Multisite Version 2.0 und höher isch en komplett neu ufgstellt, was bedütet, dass es sehr wenig Gemeinsamkeite zwüsche de alte Version und de neue het. Wäg dem bruche Sie bi em Upgrade vo 1.x uf 2.x d'Daten in en Format, wo d'neue Version verstoht.

Glücklicherwiis **kommt Ultimate Multisite 2.0+ mit eme Migrator** iibaut, wo Daten us de alte Version erkennt und sie in s'neue Format umwandlet. D'Migration passiert während em **Setup Wizard** vo Version 2.0+.

Dä Lektion behandelt, wie de Migrator funktioniert, was Sie bi Fehler mache sölled und wie Sie Problem behebe chönnte, wo bim Prozess ufcho chönnt.

_**WICHTIG: Bevor Sie mit em Upgrade vo Version 1.x uf Version 2.0 afange, stellen Sie sicher, dass Sie en Backup vo Ihrer Site-Datenbank gmacht händ**_

## Ersti Schritt

De erscht Schritt isch, d'Plugin .zip Datei z'lade und Version 2.0 uf Ihrem Netzwerk-Admin-Dashboard z'installiere.

Nachdem Sie [Version 2.0 installiert und aktiviert händ](../getting-started/installing-ultimate-multisite.md), wird s'System automatisch erkenne, dass Ihr Multisite mit de Legacy-Version lauft, und Sie werdet die Meldig obe uf de Plugin-Seite gseh.

_**ACHTUNG:** Wenn Sie Ultimate Multisite 1.x uf Ihrem Multisite installiert händ, händ Sie d'Möglichkeit, d'Plugin mit der Version z'ersetze, wo Sie grad herunterglade händ. Bitte klicken Sie und wählen Sie **Aktuell ersetzen durch hochgeladen**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

D'n nöchsti Seite gëtt et Dir wëss, welch legacy add-ons Dir installiert hanner an Version 1.x. D'Seite wird Dir instruksione ginn, ob d'Version, déi Dir benotzt, mit Version 2.0 kompatibel ass oder ob Dir e uppgrunnen Version vum add-on nach de Migration installé muss.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Wann Dir parat sidd, chënnt Dir de Button anklickt, de "Visit the Installer to finish the upgrade" (Besichtigt de Installer, um d'uppgrunnd z'vollstécken) hett.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Datt wird Dir anschluss an d'Installationswizard-Seite mit puer Willkommensnachrichte brang. Dir muss bloed **Get Started** (Starten) anklickt, um zur nöchste Seite z'falle.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Nachdem Dir **Get Started** anklickt hanner, wird Dir an Pre-install Checks_._ redirigeiert. Datt wird Dir Iech Informatioun über Dir System und d'WordPress-Installation ginn anzeigje an mir sägen, ob et d'Aarbechtskännere vun Ultimate Multisite erfüllt.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

De nöchste Schritt ass, datt Dir Iech Iech License Key vun Ultimate Multisite iitragt an de Plugin aktivieret. Datt stellt sicher, datt all déi Funktiounen, inklusiv d'add-ons, op De Site verfügbar sinn.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Nachdem Dir Iech Key iitragt hanner, anklickt **Agree & Activate** (Zougstum an Aktivier) hett.

Nach de Lizenzaktivierig chënnt Dir d'actual Installation beginne, indem Dir op de nöchsti Seite **Install** (Installéieren) anklickt. Datt wird d'nötige Datefichieren an d'Datenbank automatisch erstellt, déi für Version 2.0 funktioniere muss.

## Jetzt d'Migration

De Migrator het e integrierti Sicherheitsfunktion, wo er dini ganz Multisite überprüeft, um sicherzstelle, dass alli dini Ultimate Multisite Date ohni Problem migriert wärde chönne. Klick uf de **Run Check** Knopf, um de Prozess z'starte.

Nachdem du de Check laufe laa hesch, häsch zwei Möglickeite: s'Resultat cha entweder **mit** ere Fehlermeldig oder **ohne** e Fehlermeldig si.

### Mit Fehler

Falls du e Fehlermeldig bechunsch, muesch du mit unserem Support-Team Kontakt ufneh, damit die dir hälfe chönne, de Fehler z'behebe. Stell sicher, dass du d'Fehlerlog **bereitstellsch**, wenn du en Ticket erstellsch. Du chasch de Log runterlade oder du chasch uf de Link klicke, wo "contact our support team" staht. Das öffnet s'Hilf-Widget a de rechte Siite vo dinere Site mit Fälder, wo scho für dich vorgfüüllt sind und d'Fehlerlogs unter de Beschriibig findsch.

_**Will s'System en Fehler gfunde het, chasch du nöd wiiter migriere uf Version 2.0. Du chasch denn zrugg uf Version 1.x rollbacke, um dini Netz wieder laufe z'laa, bis de Fehler behobe isch.**_

### Ohne Fehler

Falls s'System kei Fehler findet, gsehsch du e Erfolgsmeldig und en **Migrate** Knopf am Bode, wo dir erlaubt, mit de Migration wiiterz'gah. Uf dere Site wärsch du druf hiwiist, dass du dini Datenbank vorher backupe söllsch, was mir stark empfehle. Klick uf **Migrate**, falls du scho es Backup hesch.

Und das isch alles!

Sie chönntet entweder wiiter mit em Wizard-Setup wiitergah, um Ihre Logo und anderi Sache im Netzwerk z'aktualisiere, oder Sie chönntet de Menü vo Ihrer Ultimate Multisite Version 2.0 und sini neui Interface erkunde. Fang a und ha Spass!
