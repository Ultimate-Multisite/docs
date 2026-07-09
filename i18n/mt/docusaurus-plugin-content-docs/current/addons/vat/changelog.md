---
title: Reġistru tal-bidliet tal-VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Reġistru tal-bidliet tal-VAT

Verżjoni 1.0.7 - Maħruġa fit-2026-02-03

* Tiswija: In-numri tal-VAT Ġermaniżi (DE) kienu qed ifallu l-validazzjoni minħabba żbalji MS_MAX_CONCURRENT_REQ tas-servizz VIES SOAP. Inbidel mill-SOAP API antik għall-EU VIES REST API uffiċjali għal validazzjoni aktar affidabbli.
* Tiswija: In-numri tal-VAT issa jiġu aċċettati meta s-servizz VIES ikun temporanjament mhux disponibbli, minflok ma jiġu miċħuda b’mod żbaljat. Tinħoloq entrata fil-log għal reviżjoni aktar tard.
* Tiswija: Il-kamp tal-VAT/Tax ID issa huwa viżibbli għall-pajjiżi kollha, mhux biss għall-membri tal-UE. Tax IDs mhux tal-UE (eż. numri Żvizzeri CHE) jinħażnu għall-wiri tal-fattura mingħajr validazzjoni VIES.
* Tiswija: It-tfittxija tal-prefiss tal-VAT għall-Greċja (GR), Monaco (MC), u Isle of Man (IM) kienet miksura minħabba loġika żbaljata tat-tfittxija fl-array.
* Titjib: Tneħħiet dipendenza ta’ żvilupp wp-cli-bundle mhux meħtieġa li setgħet tikkawża żbalji fatali meta tintuża flimkien mal-estensjoni Site Exporter.
* Titjib: Żdied sett komprensiv ta’ testijiet unit (53 test).

Verżjoni 1.0.6 - Maħruġa fil-2026-01-25

* Tiswija: It-tranżazzjonijiet domestiċi B2B issa jiċċarġjaw il-VAT b’mod korrett. Skont ir-regoli tal-VAT tal-UE, ir-reverse charge japplika biss għal tranżazzjonijiet B2B transfruntiera, mhux meta l-pajjiż tal-klijent jaqbel mal-pajjiż tal-kumpanija.

Verżjoni 1.0.5 - Maħruġa fit-2026-01-22

* Tiswija: L-estensjoni ma kinitx qed titgħabba jew taħdem kif suppost.
* Bidla: Is-sors tad-data tar-rati tal-VAT inbidel minn euvatrates.com għar-repożitorju ibericode/vat-rates għal data aktar affidabbli u miżmuma b’mod attiv.
* Tiswija: Ġie kkoreġut żball tipografiku fil-valur tal-għażla super_reduced_rates.
* Titjib: Żdiedu kontrolli null għall-immaniġġjar tal-kodiċi tal-pajjiż biex jiġu evitati żbalji.
* Bidla: Tneħħew fajls tat-traduzzjoni inklużi favur aġġornamenti awtomatiċi permezz ta’ Traduttore.

Verżjoni: 1.0.3 - Maħruġa fit-2025-09-28

* Ibdel l-isem tal-prefiss għal ultimate-multisite; aġġorna t-text domain; żieda fil-verżjoni.

Verżjoni 1.0.0-beta.4 - 2021-09-24

* Miżjud: filtru wp_ultimo_skip_network_active_check għal konfigurazzjonijiet ibbażati fuq mu-plugins;

Verżjoni 1.0.0 - 05/08/2021 - Ħarġa inizjali
