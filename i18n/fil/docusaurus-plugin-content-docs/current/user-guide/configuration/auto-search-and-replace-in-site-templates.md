---
title: Awtomatikong Paghahanap at Pagpapalit sa mga Template ng Site
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Awtomatikong Search and Replace sa mga Template ng Site (v2)

_**Kinakailangan ng tutorial na ito ang WP UItimo bersyon 2.x.**_

Isa sa pinakamakapangyarihang feature ng Ultimate Multisite ay ang kakayahang magdagdag ng anumang mga patlang para sa teksto, kulay, at pagpili sa form ng pagpaparehistro. Kapag nakuha na natin ang datos na iyon, magagamit natin ito upang paunang punan ang nilalaman sa ilang bahagi ng napiling template ng site. Pagkatapos, kapag nai-publish na ang bagong site, papalitan ng Ultimate Multisite ang mga placeholder ng aktuwal na impormasyong inilagay habang nagpaparehistro.

Halimbawa, maaari mong gawin ang iyong mga template na site gamit ang mga placeholder. Dapat idagdag ang mga placeholder na napapalibutan ng dobleng curly braces - {{placeholder_name}}.

Pagkatapos, maaari ka na lamang magdagdag ng katugmang patlang sa pagpaparehistro upang kunin ang datos na iyon

Magagawa ng iyong customer na punan ang patlang na iyon habang nagpaparehistro.

Pagkatapos ay awtomatikong papalitan ng Ultimate Multisite ang mga placeholder ng datos na ibinigay ng customer.

## **Paglutas sa problema ng "template na puno ng mga placeholder"** {#solving-the-template-full-of-placeholders-problem}

Maganda ang lahat ng iyon, ngunit nakakaharap tayo ng hindi magandang problema: ngayon ang ating mga template ng site - na maaaring bisitahin ng ating mga customer - ay puno ng hindi magandang tingnang mga placeholder na hindi gaanong nagpapaliwanag.

Upang malutas iyon, iniaalok namin ang opsyong magtakda ng mga pekeng halaga para sa mga placeholder, at ginagamit namin ang mga halagang iyon upang hanapin at palitan ang kanilang nilalaman sa mga template na site habang bumibisita ang iyong mga customer.

Maaari mong ma-access ang editor ng mga placeholder ng template sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings > Sites**, pag-scroll sa bahagi ng Site Template Options, at pagkatapos ay pag-click sa link na **I-edit ang mga Placeholder**.

![Bahagi ng Site Template Options sa pahina ng mga setting ng Sites](/img/config/settings-sites-templates-section.png)

Dadalhin ka nito sa editor ng nilalaman ng mga placeholder, kung saan maaari kang magdagdag ng mga placeholder at ng kani-kanilang nilalaman.

![Entry point ng editor ng mga placeholder ng template](/img/config/settings-sites-templates-section.png)
