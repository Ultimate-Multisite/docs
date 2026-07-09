---
title: Moms-ændringslog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog

Version 1.0.7 - Udgivet den 2026-02-03

* Rettelse: Tyske (DE) VAT-numre fejlede validering på grund af VIES SOAP service MS_MAX_CONCURRENT_REQ-fejl. Skiftet fra forældet SOAP API til den officielle EU VIES REST API for mere pålidelig validering.
* Rettelse: VAT-numre accepteres nu, når VIES-tjenesten er midlertidigt utilgængelig, i stedet for at blive afvist fejlagtigt. En logpost oprettes til senere gennemgang.
* Rettelse: VAT/Tax ID-feltet er nu synligt for alle lande, ikke kun EU-medlemmer. Ikke-EU-skatte-ID'er (f.eks. schweiziske CHE-numre) gemmes til visning på faktura uden VIES-validering.
* Rettelse: Opslag af VAT-præfiks for Grækenland (GR), Monaco (MC) og Isle of Man (IM) var ødelagt på grund af forkert array-opslagslogik.
* Forbedring: Fjernet unødvendig wp-cli-bundle dev dependency, som kunne forårsage fatale fejl, når den blev brugt sammen med Site Exporter addon.
* Forbedring: Tilføjet omfattende unit test-suite (53 tests).

Version 1.0.6 - Udgivet den 2026-01-25

* Rettelse: Indenlandske B2B-transaktioner opkræver nu korrekt VAT. Ifølge EU VAT-regler gælder omvendt betalingspligt kun for grænseoverskridende B2B-transaktioner, ikke når kundens land matcher virksomhedens land.

Version 1.0.5 - Udgivet den 2026-01-22

* Rettelse: Addon indlæses ikke eller fungerer ikke korrekt.
* Ændring: Skiftet VAT-satsdatakilde fra euvatrates.com til ibericode/vat-rates-repository for mere pålidelige og aktivt vedligeholdte data.
* Rettelse: Korrigeret slåfejl i super_reduced_rates-indstillingsværdi.
* Forbedring: Tilføjet null checks for håndtering af landekode for at forhindre fejl.
* Ændring: Fjernet medfølgende oversættelsesfiler til fordel for automatiske opdateringer via Traduttore.

Version: 1.0.3 - Udgivet den 2025-09-28

* Omdøb præfiks til ultimate-multisite; opdater text domain; versionsforøgelse.

Version 1.0.0-beta.4 - 2021-09-24

* Tilføjet: filter wp_ultimo_skip_network_active_check for mu-plugins-baserede opsætninger;

Version 1.0.0 - 05/08/2021 - Første udgivelse
