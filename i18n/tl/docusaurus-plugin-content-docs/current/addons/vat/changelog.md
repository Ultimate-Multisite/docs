---
title: Talaan ng Pagbabago ng VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Talaan ng Pagbabago {#vat-changelog}

Bersyon 1.0.7 - Inilabas noong 2026-02-03

* Ayos: Nabibigo sa validation ang mga German (DE) VAT number dahil sa mga error na MS_MAX_CONCURRENT_REQ ng VIES SOAP service. Lumipat mula sa legacy SOAP API papunta sa opisyal na EU VIES REST API para sa mas maaasahang validation.
* Ayos: Tinatanggap na ngayon ang mga VAT number kapag pansamantalang hindi available ang VIES service, sa halip na maling tanggihan. Gumagawa ng log entry para sa susunod na pagsusuri.
* Ayos: Nakikita na ngayon ang VAT/Tax ID field para sa lahat ng bansa, hindi lamang sa mga miyembro ng EU. Iniimbak ang mga non-EU tax ID (hal. Swiss CHE numbers) para sa pagpapakita sa invoice nang walang VIES validation.
* Ayos: Sira ang paghahanap ng VAT prefix para sa Greece (GR), Monaco (MC), at Isle of Man (IM) dahil sa maling array lookup logic.
* Pagpapahusay: Inalis ang hindi kinakailangang wp-cli-bundle dev dependency na maaaring magdulot ng fatal errors kapag ginamit kasabay ng Site Exporter addon.
* Pagpapahusay: Nagdagdag ng komprehensibong unit test suite (53 tests).

Bersyon 1.0.6 - Inilabas noong 2026-01-25

* Ayos: Tama nang naniningil ng VAT ang mga domestic B2B transaction. Ayon sa mga patakaran ng EU VAT, nalalapat lamang ang reverse charge sa cross-border B2B transactions, hindi kapag tumutugma ang bansa ng customer sa bansa ng kumpanya.

Bersyon 1.0.5 - Inilabas noong 2026-01-22

* Ayos: Hindi naglo-load o hindi gumagana nang maayos ang addon.
* Pagbabago: Inilipat ang pinagmumulan ng data ng VAT rate mula sa euvatrates.com papunta sa ibericode/vat-rates repository para sa mas maaasahan at aktibong pinananatiling data.
* Ayos: Itinama ang typo sa value ng super_reduced_rates option.
* Pagpapahusay: Nagdagdag ng null checks para sa paghawak ng country code upang maiwasan ang mga error.
* Pagbabago: Inalis ang mga kasamang translation file pabor sa awtomatikong mga update sa pamamagitan ng Traduttore.

Bersyon: 1.0.3 - Inilabas noong 2025-09-28

* Palitan ang pangalan ng prefix sa ultimate-multisite; i-update ang text domain; itaas ang bersyon.

Bersyon 1.0.0-beta.4 - 2021-09-24

* Idinagdag: filter wp_ultimo_skip_network_active_check para sa mga setup na nakabatay sa mu-plugins;

Bersyon 1.0.0 - 05/08/2021 - Unang Release
