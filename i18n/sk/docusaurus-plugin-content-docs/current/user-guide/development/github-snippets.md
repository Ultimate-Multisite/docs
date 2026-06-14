---
title: GitHub kódodielky
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ako použiť úryvky Ultimate Multisite na našom GitHub repozitórii

V GitHub repozitóriu sú prístupné kódové úryvky, ktoré používajú užívatelia Ultimate Multisite často požadujú pre pridanie malých funkcií, ako je pridaní skriptu Google Analytics na stránkach registrácii alebo skrytí meta box z admin dashboardu.

Táto článok vám ukáže, ako použiť tieto kódy, alebo konkrétne kde ich umiestniť.

Úryvky nájdete na odlinke nižšie:

https://github.com/next-press/wp-ultimo-snippets/

Máte dve možnosti, ako môžete pridať kód:

  1. Do súboru functions.php vášho témy.
  2. Must-Use Plugins (mu-plugins).

# Ako pridať úryvek do súboru functions.php vašej témy.

  1. Prihláste sa do admin dashboardu sietí WordPress a prejdite na Themes > Theme Editor (vidieť snímku obrazovky nižšie).

  2. Na stránke "Edit Themes" si uistite, že máte vybranú aktívnu tému v rozbaľovacom poli vpravo hore na obrazovke (#3 na snímke obrazovky nižšie).

  3. Kliknite na súbor functions.php pod sekciou "Theme Files", aby ste ho načítali. Prejdite dole na spodok a vložte úryvek Ultimate Multisite, ktorý si ste získali z GitHub repozitóriu.

<!-- Snímka obrazovky nedostupné: WordPress Theme Editor zobrazujúce úpravu súboru functions.php -->

# Ako vytvoriť Must-Use Plugins (mu-plugins)

WordPress má funkciu, ktorá vám umožňuje načúfať prispôsobené funkcie nazvané "Must-Use Plugins", alebo v skratke "mu-plugins".

Tieto špeciálne mu-plugins sa načúfajú pred všetkými inými štandardnými pluginmi a nemôžu byť deaktivované. V sieti multisite kód z týchto mu-plugins bude načúfaný na všetkých sitoch v vašej inštalácii.

1. Použite FTP alebo SSH na prístup do súborového systému vašej WordPress inštalácie.

2. V slo som si nainštaloval WordPress, vytvorte v súborovom systéme (wp-content) novú smerovnicu s názvom: mu-plugins.

<!-- Zobrazenie obrázka nedostupné: Správca súborov zobrazuje smerovnicu wp-content s папkou mu-plugins -->

3. Na počítači vytvorte nový PHP súbor s názvom wu-snippet.php pomocou Notpada alebo akékoľvek iného textového editora.

4. Do toho súboru vložte kód z GitHub repozitória Ultimate Multisite a uložte ho. Môžete tento kód tiež pridať na začiatok kódu, aby ste označili svoj mu plugin.
