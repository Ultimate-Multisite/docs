---
title: PVM pakeitimų žurnalas
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT pakeitimų žurnalas

Versija 1.0.7 - Išleista 2026-02-03

* Pataisa: Vokietijos (DE) VAT numerių patvirtinimas nepavykdavo dėl VIES SOAP paslaugos MS_MAX_CONCURRENT_REQ klaidų. Pereita nuo senosios SOAP API prie oficialios ES VIES REST API, kad patvirtinimas būtų patikimesnis.
* Pataisa: VAT numeriai dabar priimami, kai VIES paslauga laikinai nepasiekiama, užuot buvę neteisingai atmetami. Vėlesnei peržiūrai sukuriamas žurnalo įrašas.
* Pataisa: VAT / mokesčių mokėtojo ID laukas dabar matomas visoms šalims, ne tik ES narėms. Ne ES mokesčių mokėtojų ID (pvz., Šveicarijos CHE numeriai) saugomi sąskaitos rodymui be VIES patvirtinimo.
* Pataisa: VAT prefikso paieška Graikijai (GR), Monakui (MC) ir Meno salai (IM) neveikė dėl neteisingos masyvo paieškos logikos.
* Patobulinimas: Pašalinta nereikalinga wp-cli-bundle kūrimo priklausomybė, kuri galėjo sukelti fatalias klaidas naudojant kartu su Site Exporter priedu.
* Patobulinimas: Pridėtas išsamus vienetų testų rinkinys (53 testai).

Versija 1.0.6 - Išleista 2026-01-25

* Pataisa: Vietinėms B2B operacijoms dabar teisingai taikomas VAT. Pagal ES VAT taisykles atvirkštinis apmokestinimas taikomas tik tarpvalstybinėms B2B operacijoms, o ne tada, kai kliento šalis sutampa su įmonės šalimi.

Versija 1.0.5 - Išleista 2026-01-22

* Pataisa: Priedas nebuvo įkeliamas arba tinkamai neveikė.
* Pakeitimas: VAT tarifų duomenų šaltinis pakeistas iš euvatrates.com į ibericode/vat-rates saugyklą, kad duomenys būtų patikimesni ir aktyviai prižiūrimi.
* Pataisa: Ištaisyta super_reduced_rates parinkties vertės rašybos klaida.
* Patobulinimas: Pridėtos null patikros šalies kodo apdorojimui, kad būtų išvengta klaidų.
* Pakeitimas: Pašalinti kartu pateikti vertimų failai, pirmenybę teikiant automatiniams atnaujinimams per Traduttore.

Versija: 1.0.3 - Išleista 2025-09-28

* Pervadintas prefiksas į ultimate-multisite; atnaujintas teksto domenas; padidinta versija.

Versija 1.0.0-beta.4 - 2021-09-24

* Pridėta: filtras wp_ultimo_skip_network_active_check mu-plugins pagrįstoms sąrankoms;

Versija 1.0.0 - 2021-05-08 - Pradinis leidimas
