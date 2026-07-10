---
title: Eksport tal-sit
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportazzjoni tal-Site {#site-export}

Il-pajs admin ta **Site Export** jippermettix l-administratori ta reġistrazzjon (network administrators) li jagħmlu pakkett ta xi site, jew l-network kollha, biex jgħandu għal download biex tista' tiġi migrat, backup, jew għall-aħħar.

## Exportazzjoni ta site waħd {#exporting-one-site}
Idħħol għall-**Ultimate Multisite > Site Export** u għażel **Generate new Site Export**. Iddehlil il-subsite li tista' tiġi esportat, u poiġix għal tiegħek se l-archive għandu inklużi l-uploads, plugins, u themes.

Meta jkompliet l-export, download il-ZIP mill-lista **Existing Exports**. Il-ZIP exportati issa jinkludu `index.php` li jidimmu biex jgħin f'booting self (self-booting) u `readme.txt`, biex l-archive tista' titlob fuq host ġdid u tibda biex ma għandi installa plugin ta import separat ewli.

## Exportazzjoni tal-network kollha {#exporting-the-whole-network}
Uża **Network Export** fuq pajs Site Export meta għandek bżonn archive waħd hu li jinkludi kull subsite fl-network. Dan huwa util qabel migrazzjonijiet ta host, drill ta rikurso minn katastrofa (disaster-recovery drills), jew rebuilds ta staging li fejn kull subsite għandu tistablu flimhum.

Għandna l-Network Export jista' jkollu aktar żgħir min export ta site waħd, għalflisba, jorrunlo w during low-traffic window (wejġa biex ma jkun ħafna żjarri) u konfirmaw li l-target storage għandu spazju free għall-uploads, plugins, themes, u ZIP files generati.

### Network Import Bundles {#network-import-bundles}
Ħlas min Ultimate Multisite 2.12.0, Site Exporter jistax jagħmlu **network import bundles** — archive speċjali nidejdin biex tista' tiġi rikurata l-site kollha flittera (streamlined network-wide site restoration). Network import bundle jinkludi kull il-file u metadata li għandek biex tirikstra l-sites tal-ġdid għall-installazzjoni ta network.

#### Generazzjoni ta Network Import Bundle {#generating-a-network-import-bundle}

1. Id-دخل **Ultimate Multisite > Site Export**
2. Klikk fuq **Generate new Network Export**
3. Iżgħar **Network Import Bundle** bħala tip ta esportazzjoni
4. Iżgħar jew le tista tagħmel inklużi għall-uploadijiet, pluginijiet u temi
5. Klikk fuq **Generate**
6. Download il-bundle ZIP mill-lista **Existing Exports**

#### Restawli min Network Import Bundle {#restoring-from-a-network-import-bundle}

Biex tirrestaw siti min network import bundle:

1. Installa Ultimate Multisite fuq l-host target tiegħek
2. Ikomplettu l-wizard ta setup tal-multisite
3. Id-دخل **Ultimate Multisite > Site Export** fuq la rete nuova
4. Klikk fuq **Import Network Bundle**
5. Iżgħar il-file ZIP tal-network import bundle
6. Segwi l-istruzzjonijiet ta import li huma fuqix-xix
7. Il-proċess ta import jirtrestaw kull siti, il-kontenut tagħhom u konfiguratja

Network import bundles jippreservaw:
- Kontenut tal-sita (posts, pages, custom post types)
- Isettings u opzjonijiet tal-sita
- Ruļi u permessjonijiet tal-istmenti
- Pluginijiet u temi (jefilqu inklużi fil-bundle)
- Uploadijiet ta media (jefilqu inklużi fil-bundle)
- Tabbli database u dati kustomi

## Installazzjoni ta ZIP esportat li jiddebit biex jiġi boot (self-booting export ZIP) {#installing-a-self-booting-export-zip}

Biex tirrestaw ZIP li jiddebit biex jiġi boot fuq host ġdid:

1. Iżgħar il-kontenut tal-ZIP esportat għall-web root target
2. Iftah l-`index.php` li t-uploadit f browser
3. Segwi l-istruzzjonijiet ta installa fuqix-xix mill-package tal-esport bundle
4. Rivisja il-`readme.txt` bundle għall-note speċifiku tal-esport qabel ma tixleb il-file temporann

Biex tagħmel installazzjoni u dettagli ta import speċifi għall-addon, għandu tqaddem għall-dokumentazzjoni tal-addon [Site Exporter](/addons/site-exporter).

Biex tagħmel referenza għat-tool ta siti waħda li addatt fuq Ultimate Multisite 2.9.0, għandu tqaddem għal [Export & Import](/user-guide/administration/export-import).
