---
title: Mbiri ya zosintha za VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Mbiri ya Zosintha za VAT {#vat-changelog}

Mtundu 1.0.7 - Watulutsidwa pa 2026-02-03

* Kukonza: Manambala a VAT aku Germany (DE) anali kulephera kutsimikiziridwa chifukwa cha zolakwika za VIES SOAP service MS_MAX_CONCURRENT_REQ. Zasinthidwa kuchokera ku SOAP API yakale kupita ku EU VIES REST API yovomerezeka kuti kutsimikizira kukhale kodalirika kwambiri.
* Kukonza: Manambala a VAT tsopano amavomerezedwa pamene VIES service sikupezeka kwakanthawi, m'malo mokanidwa molakwika. Cholemba cha log chimapangidwa kuti chiunikidwe pambuyo pake.
* Kukonza: Field ya VAT/Tax ID tsopano ikuwoneka kwa mayiko onse, osati mamembala a EU okha. Ma tax ID a mayiko osakhala EU (mwachitsanzo manambala a Swiss CHE) amasungidwa kuti awonetsedwe pa invoice popanda kutsimikiziridwa ndi VIES.
* Kukonza: Kusaka prefix ya VAT ya Greece (GR), Monaco (MC), ndi Isle of Man (IM) kunali kosweka chifukwa cha logic yolakwika yosakira mu array.
* Kuwongolera: Kuchotsedwa dev dependency ya wp-cli-bundle yosafunikira yomwe ikanatha kuyambitsa zolakwika zazikulu ikagwiritsidwa ntchito limodzi ndi addon ya Site Exporter.
* Kuwongolera: Yawonjezedwa unit test suite yokwanira (mayeso 53).

Mtundu 1.0.6 - Watulutsidwa pa 2026-01-25

* Kukonza: Zochitika za Domestic B2B tsopano zimalipiritsa VAT molondola. Malinga ndi malamulo a EU VAT, reverse charge imagwira ntchito kokha pa zochitika za B2B zodutsa malire, osati pamene dziko la kasitomala likufanana ndi dziko la kampani.

Mtundu 1.0.5 - Watulutsidwa pa 2026-01-22

* Kukonza: Addon sinali kutseguka kapena kugwira ntchito bwino.
* Kusintha: Gwero la data ya mitengo ya VAT lasinthidwa kuchokera ku euvatrates.com kupita ku repository ya ibericode/vat-rates kuti data ikhale yodalirika kwambiri komanso yosamalidwa nthawi zonse.
* Kukonza: Yakonzedwa typo ya mtengo wa option super_reduced_rates.
* Kuwongolera: Zawonjezedwa null checks pa kusamalira country code kuti apewe zolakwika.
* Kusintha: Mafayilo omasulira ophatikizidwa achotsedwa mokomera zosintha zokha kudzera mu Traduttore.

Mtundu: 1.0.3 - Watulutsidwa pa 2025-09-28

* Sinthani dzina la prefix kukhala ultimate-multisite; sinthani text domain; kukweza mtundu.

Mtundu 1.0.0-beta.4 - 2021-09-24

* Zawonjezedwa: filter wp_ultimo_skip_network_active_check ya ma setup ochokera pa mu-plugins;

Mtundu 1.0.0 - 05/08/2021 - Kutulutsidwa Koyamba
