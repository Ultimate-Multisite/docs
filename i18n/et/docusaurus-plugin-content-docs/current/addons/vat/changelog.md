---
title: Käibemaksu muudatuste logi
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT muudatuste logi {#vat-changelog}

Versioon 1.0.7 - Välja antud 2026-02-03

* Parandus: Saksamaa (DE) VAT-numbrite valideerimine ebaõnnestus VIES SOAP teenuse MS_MAX_CONCURRENT_REQ vigade tõttu. Vahetati pärand SOAP API ametliku EU VIES REST API vastu usaldusväärsemaks valideerimiseks.
* Parandus: VAT-numbrid aktsepteeritakse nüüd, kui VIES teenus on ajutiselt kättesaamatu, selle asemel et need valesti tagasi lükata. Hilisemaks ülevaatuseks luuakse logikirje.
* Parandus: VAT/Tax ID väli on nüüd nähtav kõigi riikide jaoks, mitte ainult EL-i liikmetele. EL-i-välised maksu-ID-d (nt Šveitsi CHE numbrid) salvestatakse arvel kuvamiseks ilma VIES valideerimiseta.
* Parandus: VAT prefiksi otsing Kreeka (GR), Monaco (MC) ja Mani saare (IM) jaoks oli vale massiiviotsingu loogika tõttu katki.
* Täiustus: Eemaldati ebavajalik wp-cli-bundle arendussõltuvus, mis võis põhjustada fataalseid vigu, kui seda kasutati koos Site Exporter lisamooduliga.
* Täiustus: Lisati põhjalik unit-testide komplekt (53 testi).

Versioon 1.0.6 - Välja antud 2026-01-25

* Parandus: Riigisisesed B2B tehingud maksustavad nüüd VAT-i korrektselt. EL-i VAT-reeglite kohaselt rakendub pöördmaksustamine ainult piiriülestele B2B tehingutele, mitte siis, kui kliendi riik kattub ettevõtte riigiga.

Versioon 1.0.5 - Välja antud 2026-01-22

* Parandus: Lisamoodul ei laaditud või ei töötanud korralikult.
* Muudatus: VAT-määrade andmeallikas vahetati euvatrates.com-ilt ibericode/vat-rates repositooriumi vastu usaldusväärsemate ja aktiivselt hooldatud andmete saamiseks.
* Parandus: Parandati super_reduced_rates suvandi väärtuse kirjaviga.
* Täiustus: Lisati null-kontrollid riigikoodi käsitlemiseks, et vältida vigu.
* Muudatus: Eemaldati kaasapandud tõlkefailid automaatsete uuenduste kasuks Traduttore kaudu.

Versioon: 1.0.3 - Välja antud 2025-09-28

* Nimeta prefiks ümber ultimate-multisite-ks; uuenda tekstidomeeni; versiooni tõstmine.

Versioon 1.0.0-beta.4 - 2021-09-24

* Lisatud: filter wp_ultimo_skip_network_active_check mu-plugins põhiste seadistuste jaoks;

Versioon 1.0.0 - 05/08/2021 - Esmane väljalase
