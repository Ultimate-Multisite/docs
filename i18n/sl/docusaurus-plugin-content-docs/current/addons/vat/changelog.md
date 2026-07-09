---
title: Dnevnik sprememb DDV
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Dnevnik sprememb za DDV

Različica 1.0.7 - Izdano 2026-02-03

* Popravek: Nemške (DE) številke za DDV niso prestale preverjanja zaradi napak MS_MAX_CONCURRENT_REQ v storitvi VIES SOAP. Preklopljeno s starega SOAP API na uradni EU VIES REST API za zanesljivejše preverjanje.
* Popravek: Številke za DDV so zdaj sprejete, ko storitev VIES začasno ni na voljo, namesto da bi bile nepravilno zavrnjene. Za poznejši pregled se ustvari zapis v dnevniku.
* Popravek: Polje za DDV/davčno številko je zdaj vidno za vse države, ne le za članice EU. Davčne številke držav zunaj EU (npr. švicarske številke CHE) se shranijo za prikaz na računu brez preverjanja VIES.
* Popravek: Iskanje predpone za DDV za Grčijo (GR), Monako (MC) in Otok Man (IM) ni delovalo zaradi napačne logike iskanja v polju.
* Izboljšava: Odstranjena nepotrebna razvojna odvisnost wp-cli-bundle, ki je lahko povzročila usodne napake pri uporabi skupaj z dodatkom Site Exporter.
* Izboljšava: Dodan obsežen nabor enotnih testov (53 testov).

Različica 1.0.6 - Izdano 2026-01-25

* Popravek: Domače B2B transakcije zdaj pravilno obračunajo DDV. Po pravilih EU o DDV se obrnjena davčna obveznost uporablja samo za čezmejne B2B transakcije, ne pa kadar se država stranke ujema z državo podjetja.

Različica 1.0.5 - Izdano 2026-01-22

* Popravek: Addon se ni nalagal ali pravilno deloval.
* Sprememba: Vir podatkov o stopnjah DDV je bil zamenjan z euvatrates.com na repozitorij ibericode/vat-rates za zanesljivejše in aktivno vzdrževane podatke.
* Popravek: Popravljena tipkarska napaka v vrednosti možnosti super_reduced_rates.
* Izboljšava: Dodana preverjanja null pri obravnavi kode države za preprečevanje napak.
* Sprememba: Odstranjene priložene datoteke prevodov v korist samodejnih posodobitev prek Traduttore.

Različica: 1.0.3 - Izdano 2025-09-28

* Preimenovanje predpone v ultimate-multisite; posodobitev text domain; dvig različice.

Različica 1.0.0-beta.4 - 2021-09-24

* Dodano: filter wp_ultimo_skip_network_active_check za nastavitve na osnovi mu-plugins;

Različica 1.0.0 - 05/08/2021 - Prva izdaja
