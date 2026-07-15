---
title: Wax-soo-dhidda goobta
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Soo Dhaqashada Website-ka (Site Export)

Bogga maamulka **Site Export** wuxuu u oggolaanayaa maamulayaasha shabakadaha inay hal website, ama dhammaan shabakadda oo dhan, ay ku dhex qabaan fayl la soo dejin karo si loo guuriyo (migration), hagaajin (backup), ama in lagu wareejiyo shaqo.

## Soo Dhaqashada Hal Website {#exporting-one-site}

Tag **Ultimate Multisite > Site Export** kaaga, ka dibna dooro **Generate new Site Export**. Dooro subsite-ka aad rabto inaad soo dhaqato, ka dibna dooro haddii fayl la soo dejinta (archive) uu ku dhex raacayo faylka la soo galiyay (uploads), plugins, iyo themes.

Marka ay soo dhaqashadu dhammaato, soo dejiso ZIP-ka laga helo liiska **Existing Exports**. ZIP-yada la soo dhaqaatay hadda waxay ka kooban yihiin `index.php` oo isku-dhafan (self-booting) iyo faylka `readme.txt`, si aad u isticmaasho faylka la soo dejiyay server cusub oo bilaabista isla markaana aan hore u installin plugin kale oo soo galiya (importer).

## Soo Dhaqashada Dhammaan Shabakadda {#exporting-the-whole-network}

Isticmaal **Network Export** (Wax Soo Dhaafidka Shirkadda) bogga Site Export marka aad u baahan tahay fayl hal oo ay ku jiraan dhammaan subsites-ka shirkaddaada oo dhan. Tani waxay muhiim u ah ka hor guurista server-ka, jimicsiga soo celinta xaaladaha xun (disaster-recovery drills), ama dib-u-dhacidda meel uu wax lagu samaynayo (staging rebuilds) halkaas oo ay subsites kasta isku socon lahayd.

Maadaama Network Export-ka uu noqon karo mid aad u weyn marka la barbardhigo export-ka hal site, si aad u fuliso, ku fuli inta aad rabto xilliga aan la hayn traffic badan (low-traffic window) oo hubi in meesha aad u socoto ay leedahay meel ku filan oo boos ah oo lagu soo gali karo plugins, themes, iyo ZIP files-ka la sameeyay.

### Network Import Bundles {#network-import-bundles}

Laakiin laga bilaabo Ultimate Multisite 2.12.0, Site Exporter wuxuu awoodaa inuu abuuro **network import bundles** (Bundles-ka Soo Dhaafidka Shirkadda) — kuwa gaarka ah oo loo qaabeeyay si loo fududeeyo soo celinta dhammaan site-yada shirkadda. Network import bundle-ku wuxuu ka kooban yahay dhammaan faylasha iyo metadata-da loo baahan yahay si loogu soo celiyo site-yo badan oo kuwaraysho installation cusub oo shirkadda ah.

#### Abuurista Network Import Bundle {#generating-a-network-import-bundle}

1. Tag **Ultimate Multisite > Site Export** (Export-ka Website-ga)
2. Guji **Generate new Network Export** (Abuur Network Export cusub)
3. Dooro **Network Import Bundle** oo ah nooca export-ka (abuurista)
4. Doorashada inaad ku darto faylasha la soo galiyay (uploads), plugins, iyo themes (themes).
5. Guji **Generate** (Abuur)
6. Soo download ZIP bundle-ka ka mid ah liiska **Existing Exports** (Export-yadi hore).

#### Dib u soo celinta Network Import Bundle {#restoring-from-a-network-import-bundle}

Si aad dib ugu soo celiso (restore) websites-ka network import bundle-ka:

1. Install Ultimate Multisite ku dhig server-kaaga la rabo (target host).
2. Dhammaystirso hageeyga (wizard) ee multisite setup.
3. Tag **Ultimate Multisite > Site Export** oo ku yaal network-ka cusub.
4. Guji **Import Network Bundle** (Soo gali Network Bundle-ka).
5. Soo upload faylka ZIP-ka ah ee network import bundle-ka.
6. Raac tilmaamaha soo socda ee laga arko screen-ka (on-screen instructions) ee import-ka.
7. Habka import-ka ayaa dib u soo celin doona dhammaan websites-ka, waxyaabaha ay ku jiraan, iyo settings-yadeeda.

Inkiisiga la ilaaliyo:
- Waxyaabaha ku jira goobta (posts, pages, custom post types)
- Dejinta iyo doorashooyinka goobta
- Doorashada isticdellada iyo u hoggaansanka
- Plugins-ka iyo themes-ka (haddii ay ku jiraan bundle-ka)
- Waxyaabaha la soo geliyay media-da (haddii ay ku jiraan bundle-ka)
- Miisaanka database-ka gaarka ah iyo xogta

## Installitaanka ZIP-ka soo saarista oo is-bootista (self-booting export) {#installing-a-self-booting-export-zip}

Si aad u soo celiso ZIP-ka is-bootista goob cusub:

1. Ku soo gali waxyaabaha ku jira ZIP-ka la soo saaray (exported) goobta web-root-ka loo qorsheynayo.
2. Fur `index.php` ee la soo geliyay browser-kaaga.
3. Raadi tilmaamaha installitaanka ee laga helo package-ka la soo saaray oo ku jira export-ka, isla markaana si toos ah (on-screen).
4. Eeg `readme.txt` ee la soo saaray oo ku jira qoraallo gaar ah oo ku saabsan export-ka intaadan ka saarin faylasha koowaad (temporary files).

Si aad u hesho faahfaahinta installitaanka iyo soo celinta kuwa addon-ka gaarka ah, sii istaag [addon documentation](https://docs.ultimate-multisite.com/addons/site-exporter).

Haddii aad rabto inaad aragto qalabka hal-gooni ah ee lagu daray Ultimate Multisite 2.9.0, si aad u ogaato sida loo soo saaro iyo loo dhexgeliyo (Export & Import), raac halkan: [Export & Import](/user-guide/administration/export-import).
