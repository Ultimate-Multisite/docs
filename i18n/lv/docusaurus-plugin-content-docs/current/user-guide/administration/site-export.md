---
title: Saites izveide
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Cita attērs {#site-export}

Administrētāja lapā **Cita attērs** (Site Export) tīkla administratorji var ielikt vienu vietni, vai visu tīklu, iecienīto arkīvā, lai to izmantotu migrācijām, backupiem vai pārdošanu darbiem.

## Vienas vietnes eksportēšana {#exporting-one-site}

Dodieties uz **Ultimate Multisite > Cita attērs** un izvēlieties **Izveidot jaunu Cita attēra**. Izvēlieties subvietni, ko vēlaties eksportēt, pēc tam izvēlieties, vai arkīvai jāiekļauj uzlādējumi (uploads), plugins un tēmas.

Kad eksportēšana beidzties, lejupielādējiet ZIP failu no **Eksistenti attēriem** saraksta. Eksportēti ZIP faili tagad ietver pašizturīgu `index.php` un `readme.txt`, tāpēc arkīvi var uzlādēt jaunam hosta un sākt bez pirmās instalācijas atsevišķas ievades plugins.

## Visas tīkla eksportēšana {#exporting-the-whole-network}

Izmantojiet **Tīkla eksportēšanu** (Network Export) Cita attēra lapā, ja jums ir nepieciešams vienas arkīva, kas ietver visus subvietus tīklā. Tas ir noderīgs pirms hosta migrācijām, katastrofas atgriešanas praktiskajiem uzdevumiem vai stāģu atkārtotas izveidojumiem, kur katrs subviets jātransportē kopā.

Tā kā tīkla eksportēšana var būt daudz lielāka nekā vienas vietnes eksportēšana, veiciet to laikā ar zema trafika laiku un apstipriniet, ka mērķa glabātājam ir pietiekami brīvi vietas uzlādēm, plugins, tēmām un izveidoti ZIP failiem.

### Tīkla ievades pakuoles (Network Import Bundles) {#network-import-bundles}

Sākot no Ultimate Multisite 2.12.0 Cita attēra var izveidot **tīkla ievades pakuoles** (network import bundles) — īpaši arkīvas, kas paredzētas tīkliskai vietnes atjaunošanai. Tīkla ievades pakūle ietver visus nepieciešamos failus un metadatus, lai atjaunotu vairākus vietnes jaunam tīkla instalācijā.

#### Tīkla ievades pakūles izveide {#generating-a-network-import-bundle}

1. Ieiet **Ultimate Multisite > Site Export** ienk.
2. Nospieci **Generate new Network Export**.
3. Izvēlieties **Network Import Bundle** kā izpauksties veidokli.
4. Izvēlieties, vai vēlaties iekļautu uzlādējumus (uploads), pluginus un tēmas (themes).
5. Nospieci **Generate**.
6. Lejiet lejupielādēt ZIP paku, kas atrodas sarakstā **Existing Exports**.

#### Atjaunošana no Network Import Bundle {#restoring-from-a-network-import-bundle}

Atjaunošanu no network import bundle:

1. Uzstādiet Ultimate Multisite uz savu mērķa hosti.
2. Pabeidziet multisite iestatīšanas wizard.
3. Nospieci **Ultimate Multisite > Site Export** jaus tīklā.
4. Nospieci **Import Network Bundle**.
5. Uzlādējiet network import bundle ZIP failu.
6. Lēci seko ekrāna instrukcijām atjaunošanai.
7. Import process atjaunina visus sites, viņu saturu un konfigurācijas.

Network import bundles saglabā:
- Saites saturu (postus, lapas, custom post types)
- Saites iestatījumus un opcijas
- Lietotāju roļus un ierobežojumus
- Pluginus un tēmas (ja tie ir iekļauti paku)
- Mediju uzlādējumus (ja tie ir iekļauti paku)
- Custom databāzes tabulas un dati

## Uzstādīt pašizpildīgo izpauksta ZIP failu {#installing-a-self-booting-export-zip}

Atjaunošanu no pašizpildīgo ZIP faila jaunam hosti:

1. Uzlādējiet izpauksta ZIP paka saturu uz mērķa web rootu.
2. Atveriet uzlādēto `index.php` brauzerā.
3. Sekojiet ekrāna instrukcijām, kas ir iekļautas paku izpauksties pakotējumā.
4. Pārskatiet paku iekļautais `readme.txt` atjaunošanai specifiskās noteikumi pirms atņemšanas atkārtotu failus.

Addon-specifiskām uzstādīšanas un importas detaļām skatīt [Site Exporter addon documentation](/addons/site-exporter).

Ultimate Multisite 2.9.0 versijai pievienotā vienreizais sites lietotnis skatīt [Export & Import](/user-guide/administration/export-import).
