---
title: VAT Ndekọ mgbanwe
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Ndekọ mgbanwe VAT {#vat-changelog}

Ụdị 1.0.7 - E wepụtara na 2026-02-03

* Ndozi: Nọmba VAT German (DE) na-ada ọdịda na validation n'ihi njehie MS_MAX_CONCURRENT_REQ nke VIES SOAP service. A gbanwere site na SOAP API ochie gaa na EU VIES REST API gọọmentị maka validation a pụrụ ịdabere na ya karịa.
* Ndozi: A na-anabatazi nọmba VAT mgbe VIES service adịghị nwa oge, kama ịjụ ha n'ụzọ na-ezighị ezi. A na-emepụta ndekọ log maka nyocha e mesịrị.
* Ndozi: Field VAT/Tax ID apụtala ugbu a maka mba niile, ọ bụghị naanị ndị òtù EU. A na-echekwa Non-EU tax IDs (dịka nọmba Swiss CHE) maka ngosipụta invoice na-enweghị VIES validation.
* Ndozi: Nchọta prefix VAT maka Greece (GR), Monaco (MC), na Isle of Man (IM) mebiri n'ihi logic nchọta array na-ezighi ezi.
* Nkwalite: Ewepụla dev dependency wp-cli-bundle na-adịghị mkpa nke nwere ike ịkpata njehie fatal mgbe eji ya na mgbakwunye Site Exporter.
* Nkwalite: Agbakwunyere unit test suite zuru ezu (ule 53).

Ụdị 1.0.6 - E wepụtara na 2026-01-25

* Ndozi: Azụmahịa Domestic B2B na-ana VAT nke ọma ugbu a. Dịka iwu EU VAT si dị, reverse charge na-emetụta naanị azụmahịa cross-border B2B, ọ bụghị mgbe mba onye ahịa kwekọrọ na mba ụlọ ọrụ.

Ụdị 1.0.5 - E wepụtara na 2026-01-22

* Ndozi: Addon anaghị ebulite ma ọ bụ arụ ọrụ nke ọma.
* Mgbanwe: A gbanwere isi iyi data VAT rate site na euvatrates.com gaa na repository ibericode/vat-rates maka data a pụrụ ịdabere na ya karịa ma na-elekọta ya nke ọma.
* Ndozi: Edozila typo na uru option super_reduced_rates.
* Nkwalite: Agbakwunyere null checks maka ijikwa country code iji gbochie njehie.
* Mgbanwe: Ewepụla faịlụ ntụgharị asụsụ e jikọtara n'ime ya, jiri updates akpaka site na Traduttore dochie ha.

Ụdị: 1.0.3 - E wepụtara na 2025-09-28

* Kpọgharịa prefix ka ọ bụrụ ultimate-multisite; melite text domain; bulie ụdị.

Ụdị 1.0.0-beta.4 - 2021-09-24

* Agbakwunyere: filter wp_ultimo_skip_network_active_check maka setups dabere na mu-plugins;

Ụdị 1.0.0 - 05/08/2021 - Mwepụta mbụ
