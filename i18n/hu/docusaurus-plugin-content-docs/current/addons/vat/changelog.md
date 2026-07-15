---
title: VAT változtatási naplója
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# ÁFA Módosítási Napló

Verzió 1.0.7 - Kiadása 2026-02-03

* Javítás: Német (DE) ÁFA számok validációja sikertelen volt a VIES SOAP szolgáltatás MS_MAX_CONCURRENT_REQ hiba miatt. A megbízhatóbb ellenőrzés érdekében a régi SOAP API-ről az hivatalos EU VIES REST API-re váltottunk.
* Javítás: Az ÁFA számok most elfogadják, még akkor is, ha a VIES szolgáltatás ideiglenesen elérhetetlen. Nem kerülnek rosszul elutasításra. Egy naplóbejegyzést készítünk el későbbi áttekintéshez.
* Javítás: Az ÁFA/Adószám mező most minden ország számára látható, nem csak az EU tagállamok számára. Az EU-n kívüli adószámok (pl. svájci CHE számok) tárolódnak a számla megjelenítéshez, VIES ellenőrzés nélkül.
* Javítás: Az ÁFA előfixus keresése görögország (GR), Mónaco (MC) és Man-szig (IM) esetén hibás volt a helytelen tömbkereső logika miatt.
* Javítás: Eltávolítottunk egy nem szükséges wp-cli-bundle dev függőséget, amely végzetes hibákat okozhatott a Site Exporter addon-nal együtt használatkor.
* Javítás: Hozzáadtunk átfogó egységteszt-követítést (53 teszt).

Verzió 1.0.6 - Kiadása 2026-01-25

* Javítás: A hazai B2B tranzakciók most helyesen számítanak ÁFA-t. Az EU ÁFA szabályainak megfelelően a visszafizetett adó (reverse charge) csak a határokon átlévő B2B tranzakciókra éri ki, nem akkor, ha az ügyfél országa megegyezik a vállalat országával.

Verzió 1.0.5 - Kiadása 2026-01-22

* Javítás: Az Addon nem töltődött be vagy nem működött megfelelően.
* Megváltozás: Az ÁFA adatrátak forrását euvatrates.com-ról az ibericode/vat-rates repozitóriumiakra váltottuk, hogy megbízhatóbb és aktívan karbantartott adatokat biztosítsunk.
* Javítás: Javítottuk a super_reduced_rates opció értékének elírását.
* Javítás: Hozzáadtunk null-ellenőrzéseket az országkód kezeléséhez, hogy elkerüljük a hibákat.
* Megváltozás: Eltávolítottuk a csomagolt fordítási fájlokat, helyette automatikus frissítést biztosítva a Traduttore segítségével.

Verzió: 1.0.3 - Kiadása 2025-09-28

* A prefix nevének megváltoztatása ultimate-multisite-re; szövegdomén nevének frissítése; verzió emelése.

Verzió 1.0.0-beta.4 - 2021-09-24

* Hozzáadva: filter wp_ultimo_skip_network_active_check a mu-plugins alapú beállítások számára;

Verzió 1.0.0 - 05/08/2021 - Első kiadás
