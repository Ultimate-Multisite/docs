---
title: Siti eksporti
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Sätti eksportimine {#site-export}

**Sätti eksportimise** adminileht võimaldab võrku administraatoritele üht site või kogu võrku pakkuda allalaaditavaks arkiviks migratsiooni, varjenduse või üleandmiseks.

## Ühise site eksportimine {#exporting-one-site}

Minema **Ultimate Multisite > Site Export** ja valima **Generate new Site Export**. Valige see subsite, mida soovite eksporta, seejärel valige, kas arkiv sisalda üleslaadimisi, pluginid ja teemad.

Kui eksport lõpub, laadige ZIP fail **Existing Exports** nist. Eksportitud ZIP failid sisaldavad nüüd itse käivitava `index.php` ja `readme.txt`, seega saab arkivi laadida uue hoosti ja alustada ilma eraldi importi pluginil installimata.

## Kogu võrku eksportimine {#exporting-the-whole-network}

Kasutage **Network Export** Site Exportimise lehel, kui vajate ühtset arkivi, mis sisaldab kogu võrku subsaitid. See on kasulik hoostmigratsioonide enne, katastroofivajenduse harjoitusi või staging rebuildi jaoks, kus iga subsait peab liigutuma koos.

Seega, kuna võrku eksport võib olla palju suurem kui ühise site eksport, kä jätke see ebaväga perioodil ja kinnitage, et siletuju on piisavalt vaba ruumi laadimisfileide, pluginide, teemade ja genereeritud ZIP failide jaoks.

### Võrku importi pakettid (Network Import Bundles) {#network-import-bundles}

Ultimate Multisite 2.12.0 alustades saab Site Exporter genereerida **network import bundles** – erialise arkivid, mille eesmärk on ühtlustatud võrku lahendamise jaoks. Võrku importi pakett sisaldab kõik vajalikud failid ja metadata mitme site uue võrku installatsiooni taastamiseks.

#### Võrku importi paketti genereerimine {#generating-a-network-import-bundle}

1. Minime **Ultimate Multisite > Site Export**'i küldu.
2. Klõpsake **Generate new Network Export**ile.
3. Valige eksporttüüpi kui **Network Import Bundle**.
4. Valige, kas sisaldada üleslaadimisi (uploads), pluginid ja teemad.
5. Klõpsake **Generate**.
6. Ladda lahti bundle ZIP fail **Existing Exports**-listist.

#### Restaauramine Network Import Bundle'ist {#restoring-from-a-network-import-bundle}

Saitide restaureerimiseks network import bundle'ist:

1. Installe Ultimate Multisite sihthostile.
2. Täytke multisite seadistamise juhend.
3. Minime **Ultimate Multisite > Site Export**i uues networkil.
4. Klõpsake **Import Network Bundle**.
5. Ladda lahti network import bundle ZIP fail.
6. Järgige ekraanil esitatud import juhiseid.
7. Import protsess restaureerib kõik saited, nende sisu ja konfiguratsioonid.

Network import bundle'id säilitavad:
- Saite sisu (postid, lehed, kasutamata postitüübid)
- Saite seadistused ja valikud
- Kasutaja rollid ja õigused
- Pluginid ja teemad (nend, kui need on bundleis sisaldatud)
- Media üleslaadimised (nend, kui need on bundleis sisaldatud)
- Kasutusvaldkonna tabelid ja andmed

## Itself käivitava eksport ZIP faili installimine {#installing-a-self-booting-export-zip}

Uues hostil itse käivitava ZIP faili restaureerimiseks:

1. Ladda eksporteeritud ZIP faili sisu sihtwebrootile.
2. Avage lahti ladeeritud `index.php` veebilebusse.
3. Järgige bundleeritud eksportpakendi ekraanil esitatud installija juhendeid.
4. Kontrollige bundleeritud `readme.txt` eksportiga seotud noote eksporti eemaldamise enne juhul, kui tegeleed tempfileidega.

Addon-spesifil installimiseks ja import detailidele võtke külast [Site Exporter addon dokumentatsiooni](/addons/site-exporter).

Ultimate Multisite 2.9.0's lisatud ühiskonna tööriistaga veidi rohkem eksporti ja importi kohta võite vaadata [Export & Import](/user-guide/administration/export-import).
