---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog

Version 1.0.7 - Giliwat sa 2026-02-03

* Fix: Ang mga German (DE) VAT numbers nga nagkaproblema sa validation tungod sa VIES SOAP service MS_MAX_CONCURRENT_REQ errors. Gi-switch gikan sa daan nga legacy SOAP API ngadto sa official EU VIES REST API para mas lig-on ang pag-validate.
* Fix: Ang mga VAT number karon madawat bisan kung temporaryo dili available ang VIES service, imbes nga sayop i-reject. Usa ka log entry ang gihimo para sa mosunod nga review.
* Fix: Ang field sa VAT/Tax ID karon makita para sa tanang nasud, dili lang mga miyembro sa EU. Ang mga tax ID sa dili EU (pananglitan, Swiss CHE numbers) gi-store para ipakita sa invoice nga walay VIES validation.
* Fix: Ang pagpangita sa VAT prefix alang sa Greece (GR), Monaco (MC), ug Isle of Man (IM) na nasulod tungod sa sayop nga array lookup logic.
* Improvement: Gikuha ang dili kinahanglanon nga wp-cli-bundle dev dependency nga mahimong maghatag og fatal errors kung gamiton uban sa Site Exporter addon.
* Improvement: Dugang usa ka komprehensibo nga unit test suite (53 tests).

Version 1.0.6 - Giliwat sa 2026-01-25

* Fix: Ang mga domestic B2B transactions karon husto nang nagabayad og VAT. Sumala sa EU VAT rules, ang reverse charge lang ang magamit sa cross-border B2B transactions, dili kung ang nasud sa customer pareho sa nasud sa kompanya.

Version 1.0.5 - Giliwat sa 2026-01-22

* Ayos: Ang Addon dili mo-load o dili maayo ang pagtrabaho.
* Usab: Gipasa ang VAT rate data source gikan sa euvatrates.com ngadto sa iibericode/vat-rates repository para mas kasaligan ug aktibong giatiman nga datos.
* Ayos: Gitama ang typo sa option value sa super_reduced_rates.
* Pagsigarilyo: Dugang mga null checks para sa pagproseso sa country code aron malikayan ang mga sayop.
* Usab: Gikuha ang bundled translation files ug gipulihan kini pinaagi sa awtomatikong update pinaagi sa Traduttore.

Version: 1.0.3 - Gipa-rely sa 2025-09-28

* Gi-rename ang prefix ngadto sa ultimate-multisite; gi-update ang text domain; gipataas ang version number.

Version 1.0.0-beta.4 - 2021-09-24

* Dugang: Gitugotan ang filter wp_ultimo_skip_network_active_check para sa mga mu-plugins nga setup;

Version 1.0.0 - 05/08/2021 - Initial Release
