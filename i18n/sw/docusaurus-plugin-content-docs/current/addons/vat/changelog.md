---
title: Historia ya Mabadiliko ya VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Historia ya Mabadiliko za VAT

Version 1.0.7 - Ili kutolewa tarehe 2026-02-03

* Urekebisho: Namba za VAT za Ujermani (DE) zilikuwa zikishindwa kupata uthibitisho kutokana na makosa ya VIES SOAP service MS_MAX_CONCURRENT_REQ. Tumebadilisha kutoka kwa API ya zamani ya SOAP kwenda kwa API ya VIES REST rasmi ya EU kwa ajili ya uthibitisho wa kuaminika zaidi.
* Urekebisho: Sasa namba za VAT zinakubaliwa hata wakati huduma ya VIES haipo kwa muda, badala ya kukataliwa vibaya. Kifaa cha kumbukumbu (log entry) kimeundwa kwa ajili ya mapitio baadaye.
* Urekebisho: Sehemu ya VAT/Tax ID sasa inaonekana kwa nchi zote, si tu wanachama wa EU. Namba za kodi zisizo za EU (k.m., namba za Swiss CHE) zinahifadhiwa kwa ajili ya kuonyeshwa kwenye ankara bila kuthibitishwa na VIES.
* Urekebisho: Utafutaji wa kiambishi cha VAT kwa Ureno (GR), Monaco (MC), na Isle of Man (IM) ulikuwa umepasuka kutokana na mantiki isiyo sahihi ya kutafuta kwenye array.
* Uboreshaji: Tumeondoa uegiliano wa maendeleo (dev dependency) wa wp-cli-bundle usiohitajika ambao uweza kusababisha makosa makubwa wakati unatumika pamoja na addon ya Site Exporter.
* Uboreshaji: Tumeongeza seti kamili ya vipimo vya unit (unit test suite) (vipimo 53).

Version 1.0.6 - Ili kutolewa tarehe 2026-01-25

* Urekebisho: Biashara za B2B ndani ya nchi sasa zinatoza VAT ipasavyo. Kulingana na kanuni za VAT za EU, *reverse charge* inatumika tu kwa biashara za B2B zinazopitia mipaka, si wakati nchi ya mteja inalingana na nchi ya kampuni.

Version 1.0.5 - Ili kutolewa tarehe 2026-01-22

* Urekebisho: Addon haikuweza kupakia au kufanya kazi ipasavyo.
* Mabadiliko: Tumehamisha chanzo cha data ya viwango vya VAT kutoka euvatrates.com kwenda kwenye repository ya ibericode/vat-rates kwa ajili ya data inayotunza na kuaminika zaidi.
* Urekebisho: Tumerekebisha makosa ya kuandika (typo) kwenye thamani ya chaguo *super_reduced_rates*.
* Uboreshaji: Tumeongeza ukaguzi wa *null* kwa usimamizi wa nambari za nchi ili kuzuia makosa.
* Mabadiliko: Tumeondoa faili za tafsiri zilizojumuishwa kwa faida ya masasisho ya kiotomatiki kupitia Traduttore.

Version: 1.0.3 - Ili kutolewa tarehe 2025-09-28

* Kubadilisha kiambishi (prefix) kuwa ultimate-multisite; kusasisha *text domain*; na kuongeza toleo (version bump).

Version 1.0.0-beta.4 - 2021-09-24

* Kuongeza: filter wp_ultimo_skip_network_active_check kwa mipangilio ya mu-plugins;

Version 1.0.0 - 05/08/2021 - Kutoa kwa mara ya kwanza
