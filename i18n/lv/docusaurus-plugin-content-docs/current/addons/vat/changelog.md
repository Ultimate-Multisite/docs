---
title: PVN izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# PVN izmaiņu žurnāls

Versija 1.0.7 - Izlaista 2026-02-03

* Labojums: Vācijas (DE) PVN numuru validācija neizdevās VIES SOAP servisa MS_MAX_CONCURRENT_REQ kļūdu dēļ. Pārslēgts no mantotās SOAP API uz oficiālo ES VIES REST API uzticamākai validācijai.
* Labojums: PVN numuri tagad tiek pieņemti, kad VIES serviss īslaicīgi nav pieejams, nevis tiek nepareizi noraidīti. Vēlākai pārskatīšanai tiek izveidots žurnāla ieraksts.
* Labojums: PVN/nodokļu ID lauks tagad ir redzams visām valstīm, ne tikai ES dalībvalstīm. Ārpus ES nodokļu ID (piem., Šveices CHE numuri) tiek glabāti rēķina attēlošanai bez VIES validācijas.
* Labojums: PVN prefiksa uzmeklēšana Grieķijai (GR), Monako (MC) un Menas salai (IM) bija bojāta nepareizas masīva uzmeklēšanas loģikas dēļ.
* Uzlabojums: Noņemta nevajadzīga wp-cli-bundle izstrādes atkarība, kas varēja izraisīt fatālas kļūdas, lietojot kopā ar Site Exporter addon.
* Uzlabojums: Pievienots visaptverošs vienībtestu komplekts (53 testi).

Versija 1.0.6 - Izlaista 2026-01-25

* Labojums: Iekšzemes B2B darījumiem tagad PVN tiek piemērots pareizi. Saskaņā ar ES PVN noteikumiem apgrieztā maksāšana attiecas tikai uz pārrobežu B2B darījumiem, nevis gadījumos, kad klienta valsts sakrīt ar uzņēmuma valsti.

Versija 1.0.5 - Izlaista 2026-01-22

* Labojums: Addon netika ielādēts vai nedarbojās pareizi.
* Izmaiņa: PVN likmju datu avots nomainīts no euvatrates.com uz ibericode/vat-rates repozitoriju, lai iegūtu uzticamākus un aktīvi uzturētus datus.
* Labojums: Izlabota super_reduced_rates opcijas vērtības drukas kļūda.
* Uzlabojums: Pievienotas nulles vērtības pārbaudes valsts koda apstrādei, lai novērstu kļūdas.
* Izmaiņa: Noņemti komplektā iekļautie tulkojumu faili par labu automātiskiem atjauninājumiem caur Traduttore.

Versija: 1.0.3 - Izlaista 2025-09-28

* Pārdēvēts prefikss uz ultimate-multisite; atjaunināts teksta domēns; versijas palielinājums.

Versija 1.0.0-beta.4 - 2021-09-24

* Pievienots: filtrs wp_ultimo_skip_network_active_check mu-plugins balstītām konfigurācijām;

Versija 1.0.0 - 05/08/2021 - Sākotnējais laidiens
