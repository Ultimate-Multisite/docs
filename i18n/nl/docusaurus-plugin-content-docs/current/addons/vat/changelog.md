---
title: Btw-wijzigingslog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT-wijzigingslog {#vat-changelog}

Versie 1.0.7 - Uitgebracht op 2026-02-03

* Oplossing: Duitse (DE) VAT-nummers konden niet worden gevalideerd door VIES SOAP service MS_MAX_CONCURRENT_REQ-fouten. Overgestapt van de verouderde SOAP API naar de officiële EU VIES REST API voor betrouwbaardere validatie.
* Oplossing: VAT-nummers worden nu geaccepteerd wanneer de VIES service tijdelijk niet beschikbaar is, in plaats van onterecht te worden geweigerd. Er wordt een logvermelding aangemaakt voor latere controle.
* Oplossing: Het VAT/Tax ID-veld is nu zichtbaar voor alle landen, niet alleen voor EU-leden. Niet-EU-belasting-ID's (bijv. Zwitserse CHE-nummers) worden opgeslagen voor weergave op facturen zonder VIES-validatie.
* Oplossing: Het opzoeken van VAT-voorvoegsels voor Griekenland (GR), Monaco (MC) en Isle of Man (IM) werkte niet door onjuiste array-opzoeklogica.
* Verbetering: Onnodige wp-cli-bundle dev-afhankelijkheid verwijderd die fatale fouten kon veroorzaken bij gebruik naast de Site Exporter addon.
* Verbetering: Uitgebreide unit-testsuite toegevoegd (53 tests).

Versie 1.0.6 - Uitgebracht op 2026-01-25

* Oplossing: Binnenlandse B2B-transacties brengen nu correct VAT in rekening. Volgens EU-VAT-regels geldt verleggingsregeling alleen voor grensoverschrijdende B2B-transacties, niet wanneer het land van de klant overeenkomt met het land van het bedrijf.

Versie 1.0.5 - Uitgebracht op 2026-01-22

* Oplossing: Addon laadde niet of werkte niet goed.
* Wijziging: Gegevensbron voor VAT-tarieven gewijzigd van euvatrates.com naar ibericode/vat-rates repository voor betrouwbaardere en actief onderhouden gegevens.
* Oplossing: Typfout in super_reduced_rates optiewaarde gecorrigeerd.
* Verbetering: Null-controles toegevoegd voor verwerking van landcodes om fouten te voorkomen.
* Wijziging: Meegeleverde vertaalbestanden verwijderd ten gunste van automatische updates via Traduttore.

Versie: 1.0.3 - Uitgebracht op 2025-09-28

* Voorvoegsel hernoemd naar ultimate-multisite; tekstdomein bijgewerkt; versieverhoging.

Versie 1.0.0-beta.4 - 2021-09-24

* Toegevoegd: filter wp_ultimo_skip_network_active_check voor op mu-plugins gebaseerde setups;

Versie 1.0.0 - 05/08/2021 - Eerste release
