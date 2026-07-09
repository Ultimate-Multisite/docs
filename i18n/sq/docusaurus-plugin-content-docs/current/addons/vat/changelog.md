---
title: Regjistri i ndryshimeve të TVSH-së
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Regjistri i ndryshimeve të VAT

Versioni 1.0.7 - Publikuar më 2026-02-03

* Rregullim: Numrat gjermanë (DE) të VAT dështonin në validim për shkak të gabimeve MS_MAX_CONCURRENT_REQ të shërbimit VIES SOAP. U kalua nga SOAP API i vjetër te EU VIES REST API zyrtar për validim më të besueshëm.
* Rregullim: Numrat e VAT tani pranohen kur shërbimi VIES është përkohësisht i padisponueshëm, në vend që të refuzohen gabimisht. Krijohet një hyrje në regjistër për shqyrtim të mëvonshëm.
* Rregullim: Fusha VAT/Tax ID tani është e dukshme për të gjitha vendet, jo vetëm për anëtarët e BE-së. ID-të tatimore jo-BE (p.sh. numrat zviceranë CHE) ruhen për shfaqje në faturë pa validim VIES.
* Rregullim: Kërkimi i prefiksit të VAT për Greqinë (GR), Monakon (MC) dhe Isle of Man (IM) ishte i prishur për shkak të logjikës së pasaktë të kërkimit në array.
* Përmirësim: U hoq varësia e panevojshme zhvillimore wp-cli-bundle që mund të shkaktonte gabime fatale kur përdorej krahas shtesës Site Exporter.
* Përmirësim: U shtua paketë gjithëpërfshirëse testesh unitare (53 teste).

Versioni 1.0.6 - Publikuar më 2026-01-25

* Rregullim: Transaksionet vendase B2B tani e ngarkojnë saktë VAT. Sipas rregullave të BE-së për VAT, reverse charge zbatohet vetëm për transaksionet ndërkufitare B2B, jo kur vendi i klientit përputhet me vendin e kompanisë.

Versioni 1.0.5 - Publikuar më 2026-01-22

* Rregullim: Shtesa nuk ngarkohej ose nuk funksiononte siç duhet.
* Ndryshim: Burimi i të dhënave për normat e VAT u kalua nga euvatrates.com te repositori ibericode/vat-rates për të dhëna më të besueshme dhe të mirëmbajtura aktivisht.
* Rregullim: U korrigjua gabimi tipografik në vlerën e opsionit super_reduced_rates.
* Përmirësim: U shtuan kontrolle null për trajtimin e kodit të vendit për të parandaluar gabimet.
* Ndryshim: U hoqën skedarët e përfshirë të përkthimit në favor të përditësimeve automatike përmes Traduttore.

Versioni: 1.0.3 - Publikuar më 2025-09-28

* Riemërtim i prefiksit në ultimate-multisite; përditësim i domenit të tekstit; rritje versioni.

Versioni 1.0.0-beta.4 - 2021-09-24

* U shtua: filtri wp_ultimo_skip_network_active_check për konfigurime të bazuara në mu-plugins;

Versioni 1.0.0 - 05/08/2021 - Publikimi fillestar
