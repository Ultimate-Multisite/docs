---
title: Chyba souboru Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Chyba při instalaci souboru Sunrise

Soubor sunrise.php je speciální soubor, který WordPress hledá při svém spouštění. Aby jej WordPress dokázal detekovat, musí být umístěn uvnitř **složky wp-content**.

Když aktivujete Ultimate Multisite a projdete průvodcem nastavením, jako je ten na snímku obrazovky, Ultimate Multisite se pokusí zkopírovat náš soubor sunrise.php do složky wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Ve většině případů se nám soubor podaří úspěšně zkopírovat a vše funguje. Pokud však něco není správně nastaveno (například oprávnění složek), můžete narazit na situaci, kdy Ultimate Multisite není schopen soubor zkopírovat.

Pokud si přečtete chybovou zprávu, kterou vám Ultimo zobrazí, uvidíte, že přesně to se zde stalo: **Kopírování Sunrise se nezdařilo**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Problém vyřešíte jednoduše tak, že zkopírujete soubor sunrise.php ze složky pluginu wp-ultimo a vložíte ho do složky wp-content. Poté stránku průvodce obnovte a kontroly by měly proběhnout úspěšně.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> V každém případě by to mohlo být důvodem ke kontrole oprávnění vašich složek, abyste předešli problémům v budoucnu (nejen s Ultimate Multisite, ale i s dalšími pluginy a šablonami).

Nástroj **Kontrola stavu**, který je součástí WordPress (najdete ho v **administraci hlavního webu > Nástroje > Kontrola stavu**), vám dokáže oznámit, zda máte oprávnění složek nastavena na hodnoty, které by mohly způsobovat problémy s WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
