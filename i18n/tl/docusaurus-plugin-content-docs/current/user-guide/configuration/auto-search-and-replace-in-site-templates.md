---
title: Auto Search at Palitan sa mga Site Template
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search at Palitan sa Site Templates (v2)

_**Kailangan ng tutorial na ito ang WP UItimo version 2.x.**_

Isa sa pinakamakapangyarihang feature ng Ultimate Multisite ay ang kakayahang magdagdag ng kahit anong text, kulay, at mga field na pipiliin sa registration form. Kapag nakuha na natin ang data na iyon, magagamit natin ito para punan muna ang content sa ilang bahagi ng site template na pinili mo. Pagkatapos, kapag na-publish na ang bagong site, papalitan ng Ultimate Multisite nito ang mga placeholder ng aktwal na impormasyon na inilagay noong registration.

Halimbawa, maaari mong gawin ang iyong mga template sites gamit ang mga placeholder. Ang mga placeholder ay dapat palibutan ng double curly braces - {{placeholder_name}}.

Pagkatapos, maaari ka lang magdagdag ng katugmang registration field para makuha ang data na iyon.

Ang iyong customer ay magagawang punan ang field na iyon habang nagre-register.

Pagkatapos, papalitan ng Ultimate Multisite ang mga placeholder ng data na ibinigay ng customer nang awtomatiko.

## **Solusyon sa "template na puno ng placeholders" problem**

Maganda lahat 'yan, pero nahaharap tayo sa isang pangit na problema: ngayon, ang ating mga site template - na pwedeng puntahan ng ating mga customer - ay puno ng mga pangit na placeholder na hindi masyadong nagsasabi.

Para malutas iyon, nag-aalok kami ng opsyon na magtakda ng pekeng halaga para sa mga placeholder, at gagamitin natin ang mga halagang iyon para maghanap at palitan ang kanilang nilalaman sa mga site template habang bumibisita ang iyong mga customer.

Maaari kang makakakuha ng access sa placeholders editor sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings > Sites**, pag-scroll sa Site Template Options area, at pagkatapos ay i-click ang link na **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Doon ka dadalhin sa content editor ng mga placeholders, kung saan maaari kang magdagdag ng mga placeholder at ang kani-kanilang nilalaman.

![Editor para sa mga template ng site na placeholder](https://example.com/img/config/settings-sites-templates-section.png)
