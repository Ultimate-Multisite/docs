---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Verslag

Weergawe 1.0.7 - Vrygestel op 2026-02-03

* Hersiening: Duitse (DE) VAT-nommers misluk validering as gevolg van VIES SOAP diens MS_MAX_CONCURRENT_REQ foute. Ons het geskakel van die ou SOAP API na die amptelike EU VIES REST API vir meer betroubare validering.
* Hersiening: VAT-nommers word nou aanvaar wanneer die VIES diens tydelik nie beskikbaar is nie, in plaas daarvan dat dit verkeerd afgewys word. 'n Log-inskrywing word geskep vir latere hersiening.
* Hersiening: Die VAT/Belasting ID-veld is nou vir alle lande sigbaar, nie net EU-lede nie. Nie-EU belasting ID's (bv. Swits CHE nommers) word gestoor vir faktuurwysig sonder VIES validering.
* Hersiening: Die VAT-voorsetsopsoek vir Griekeland (GR), Monaco (MC) en die Eiland Man (IM) was gebreek as gevolg van 'n verkeerde lêer-opsoeklogika.
* Verbetering: Onnodige wp-cli-bundle dev afhanklikheid verwyder wat fatale foute kan veroorsaak wanneer dit saam met die Site Exporter addon gebruik word.
* Verbetering: Omvattende eenheidstoets-suit (53 toetse) bygevoeg.

Weergawe 1.0.6 - Vrygestel op 2026-01-25

* Hersiening: Binnelandse B2B-transaksies reken nou korrek VAT. Volgens EU VAT-reëls geld die omgekeerde belasting slegs vir grensoorskrydende B2B-transaksies, nie wanneer die kliënt se land dieselfde is as die maatskappy se land nie.

Weergawe 1.0.5 - Vrygestel op 2026-01-22

* Hersiening: Addon laai nie of werk nie behoorlik.
* Verandering: VAT-koerantdatabron is geskakel van euvatrates.com na die ibericode/vat-rates repository vir meer betroubare en aktief gehandhaafde data.
* Hersiening: Super_reduced_rates opsiewaarde-typo reggestel.
* Verbetering: Null-kontroles bygevoeg vir landkode-hantering om foute te voorkom.
* Verandering: Ingebakte vertalingslêers verwyder ten gunste van outomatiese opdaterings via Traduttore.

Weergawe: 1.0.3 - Vrygestel op 2025-09-28

* Voorvoegsel hernaam na ultimate-multisite; teksdomein opgedateer; weergawe-verhoging.

Weergawe 1.0.0-beta.4 - 2021-09-24

* Bygevoeg: filter wp_ultimo_skip_network_active_check vir mu-plugins gebaseerde opstelling.

Weergawe 1.0.0 - 05/08/2021 - Aanvanklike Vrystelling
