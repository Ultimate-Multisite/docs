---
title: MVA-endringslogg
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# MVA Endringslogg

Versjon 1.0.7 - Utgitt 2026-02-03

* Feilretting: Tysk (DE) MVA-numre feilet validering på grunn av VIES SOAP service MS_MAX_CONCURRENT_REQ feil. Vi byttet fra den eldre SOAP API-en til den offisielle EU VIES REST API-en for mer pålitelig validering.
* Feilretting: MVA-numre aksepteres nå selv når VIES-tjenesten er midlertidig utilgjengelig, i stedet for å bli feilaktig avvist. Det blir opprettet en loggføring for senere gjennomgang.
* Feilretting: Feltet for MVA/skattekort er nå synlig for alle land, ikke bare EU-medlemmer. Ikke-EU skattekort (f.eks. sveitsiske CHE-numre) lagres for fakturaoppvisning uten VIES-validering.
* Feilretting: MVA-prefiks-oppslag for Hellas (GR), Monaco (MC) og Isle of Man (IM) var ødelagt på grunn av feil array-oppslaglogikk.
* Forbedring: Fjernet unødvendig wp-cli-bundle dev-avhengighet som kunne forårsake fatale feil når den ble brukt sammen med Site Exporter-tillegg.
* Forbedring: Lagt til omfattende enhetstest-suite (53 tester).

Versjon 1.0.6 - Utgitt 2026-01-25

* Feilretting: Innenlandske B2B-transaksjoner belaster nå korrekt MVA. I henhold til EU MVA-regler gjelder omvendt plikt (reverse charge) kun for grenseoverskridende B2B-transaksjoner, ikke når kundens land matcher selskapets land.

Versjon 1.0.5 - Utgitt 2026-01-22

* Feilretting: Tillegg laster ikke eller fungerer ikke som de skal.
* Endring: Byttet MVA-satsdatakilde fra euvatrates.com til ibericode/vat-rates-repository for mer pålitelige og aktivt vedlikeholdte data.
* Feilretting: Korrigert skrivefeil i super_reduced_rates-alternativverdien.
* Forbedring: Lagt til nullkontroller for håndtering av landkoder for å forhindre feil.
* Endring: Fjernet innbakte oversettelsesfiler til fordel for automatisk oppdatering via Traduttore.

Versjon: 1.0.3 - Utgitt 2025-09-28

* Omdøpt prefiks til ultimate-multisite; oppdatert tekstdomene; versjonsøkning.

Versjon 1.0.0-beta.4 - 2021-09-24

* Lagt til: filter wp_ultimo_skip_network_active_check for mu-plugins baserte oppsett;

Versjon 1.0.0 - 05/08/2021 - Første utgivelse
