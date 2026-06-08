---
title: Momsändringshistorik
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog

Version 1.0.7 - Släppt den 2026-02-03

* Fix: Tyska (DE) momsnummer misslyckades med valideringen på grund av VIES SOAP service MS_MAX_CONCURRENT_REQ fel. Vi bytte från den äldre SOAP API:n till den officiella EU VIES REST API:n för en mer tillförlitlig validering.
* Fix: Momsnummer accepteras nu även när VIES-tjänsten tillfälligt är otillgänglig, istället för att felaktigt avvisas. En loggpost skapas för senare granskning.
* Fix: Fältet för moms-/skatte-ID är nu synligt för alla länder, inte bara EU-medlemmar. Icke-EU skatte-ID (t.ex. Schweiziska CHE-nummer) sparas för fakturvisning utan VIES-validering.
* Fix: Momsprefixuppslagningen för Grekland (GR), Monaco (MC) och Isle of Man (IM) var trasig på grund av felaktig array-uppslagslogik.
* Improvement: Tog bort onödig wp-cli-bundle dev-beroende som kunde orsaka dödliga fel när det användes tillsammans med Site Exporter-addonet.
* Improvement: Lade till en omfattande enhetstestsvit (53 tester).

Version 1.0.6 - Släppt den 2026-01-25

* Fix: Inhemska B2B-transaktioner debiterar nu korrekt moms. Enligt EU:s momslagstiftning gäller omvänd skattskyldighet endast för gränsöverskridande B2B-transaktioner, inte när kundens land matchar företagets land.

Version 1.0.5 - Släppt den 2026-01-22

* Fix: Addonet laddades inte eller fungerade inte korrekt.
* Change: Bytt VAT-räkningsdatakälla från euvatrates.com till ibericode/vat-rates-repository för mer tillförlitlig och aktivt underhållen data.
* Fix: Korrigerade stavfel i super_reduced_rates-alternativvärdet.
* Improvement: Lade till null-kontroller för hantering av landskoder för att förhindra fel.
* Change: Tog bort inbäddade översättningsfiler till förmån för automatiska uppdateringar via Traduttore.

Version: 1.0.3 - Släppt den 2025-09-28

* Bytt prefix till ultimate-multisite; uppdaterade textdomän; versionsökning.

Version 1.0.0-beta.4 - 2021-09-24

* Added: filter wp_ultimo_skip_network_active_check för mu-plugins baserade uppsättningar;

Version 1.0.0 - 05/08/2021 - Initial Release
