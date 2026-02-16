---
title: Auto Search and Replace sa mga Site Template
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Auto Search and Replace sa Site Templates (v2)

_**Ang tutorial na ito ay nangangailangan ng WP UItimo bersyon 2.x.**_

Isa sa mga pinakamakapangyarihang feature ng Ultimate Multisite ay ang kakayahang magdagdag ng mga custom na text, color, at select field sa registration form. Kapag nakuha na natin ang data na iyon, magagamit natin ito para i-pre-populate ang content sa ilang bahagi ng napiling site template. Pagkatapos, kapag na-publish na ang bagong site, papalitan ng Ultimate Multisite ang mga placeholder ng aktwal na impormasyon na inilagay sa panahon ng registration.

Halimbawa, puwede mong gawin ang iyong mga template site gamit ang mga placeholder. Dapat ilagay ang mga placeholder na napapalibutan ng double curly braces - {{placeholder_name}}.

Pagkatapos, magdagdag ka lang ng katugmang registration field para makuha ang data na iyon

Mapupunan ng iyong customer ang field na iyon sa panahon ng registration.

Awtomatikong papalitan ng Ultimate Multisite ang mga placeholder ng data na ibinigay ng customer.

## **Paglutas ng problemang "template na puno ng placeholders"**

Maganda ang lahat ng iyon, pero may pangit na problema tayong nararanasan: ngayon ang ating mga site template - na puwedeng bisitahin ng ating mga customer - ay puno ng mga pangit na placeholder na walang masyadong sinasabi.

Para malutas ito, nag-aalok kami ng opsyon na mag-set ng mga pansamantalang halaga para sa mga placeholder, at ginagamit namin ang mga halagang ito para i-search at i-replace ang kanilang mga content sa mga template site habang bumibisita ang iyong mga customer.

Puwede mong ma-access ang template placeholders editor sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings > Sites**, at pagkatapos, sa sidebar, i-click ang Edit Placeholders link.

![Edit Placeholders link sa Sites settings sidebar](/img/config/settings-sites.png)

Dadalhin ka nito sa placeholders content editor, kung saan puwede kang magdagdag ng mga placeholder at ng kani-kanilang content.

![Placeholders content editor na may mga placeholder name at value](/img/config/settings-sites.png)
