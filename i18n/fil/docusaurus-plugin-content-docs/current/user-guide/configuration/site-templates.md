---
title: Mga Template ng Site
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Mga Site Template (v2)

_**PAALALA: Ang artikulong ito ay para sa Ultimate Multisite version 2.x. Kung gumagamit ka ng version 1.x,**_ **tingnan ang artikulong ito** _**.**_

Ang layunin natin sa paggawa ng premium na network gamit ang Ultimate Multisite ay i-automate ang maraming proseso hangga't maaari habang binibigyan ng flexibility ang ating mga kliyente at iba't ibang pagpipilian kapag gumagawa sila ng kanilang mga website. Isang madaling paraan para makamit ang balanseng ito ay gamitin ang Site Templates feature ng Ultimate Multisite.

## Ano ang Site Template?

Gaya ng ipinahihiwatig ng pangalan nito, ang Site Template ay isang handa nang site na maaaring gamitin bilang pundasyon kapag gumagawa ng mga bagong site sa iyong network.

Ibig sabihin, maaari kang gumawa ng base site, mag-activate ng iba't ibang plugin, pumili ng active na theme, at i-customize ito sa gusto mong paraan. Pagkatapos, kapag gumawa ng bagong account ang iyong customer, sa halip na makuha nila ang default na WordPress site na walang makabuluhang content, makakakuha sila ng kopya ng iyong base site na may lahat na ng customization at content.

Maganda 'yan, pero paano ako gagawa ng bagong site template? Napakasimple lang nito.

## Paggawa at Pag-edit ng Bagong Site Template

Ang mga Site Template ay mga normal na site lang sa iyong network. Para gumawa ng bagong template, pumunta lang sa **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button sa Sites list page](/img/config/site-templates-list.png)**

Magbubukas ito ng modal window na hihingi ng **Site title, Site Domain/path,** at **Site type**. Sa ilalim ng **Site Type** drop-down field, siguraduhing piliin mo ang **Site Template** *.*

_![Add site template modal na may site type dropdown](/img/config/site-templates-list.png)_

Sa ibaba ng form, mapapansin mo ang **Copy Site** toggle switch. Gagamitin ito para gumawa ng bagong site template batay sa isang umiiral na site template bilang panimulang punto para makatipid ka ng oras sa halip na gumawa ng site template mula sa simula.

![Add site template modal na may copy site toggle](/img/config/site-templates-list.png)

### Pag-customize ng Content ng Site Template

Para i-customize ang iyong site template, pumunta lang sa dashboard panel nito at gawin ang mga pagbabagong kailangan mo. Maaari kang gumawa ng mga bagong post, page, mag-activate ng mga plugin at magpalit ng active na theme. Maaari ka ring pumunta sa Customizer at baguhin ang iba't ibang customization option.

Lahat ng data na iyon ay makokopya kapag gumawa ang customer ng bagong site batay sa Site Template na iyon.

### Mga Advanced na Option

Kung marunong ka ng custom coding, maaari mong gamitin ang aming Search and Replace API para awtomatikong palitan ang impormasyon sa bagong site pagkatapos itong magawa. Kapaki-pakinabang ito para sa mga bagay tulad ng pagpapalit ng pangalan ng kumpanya sa About page, pagpapalit ng contact email sa Contact page, at iba pa.

### Paggamit ng mga Site Template

Okay, nakagawa ka na ng iba't ibang Site Template na may iba-ibang disenyo, theme at setting. Paano mo sila gagawing kapaki-pakinabang sa iyong network ngayon?

Sa pangkalahatan, dalawang approach ang maaari mong gamitin ngayon (hindi sabay):

  * Pag-attach ng isang Site Template sa bawat isa sa iyong mga Plan

**O KAYA**

  * Hayaan ang iyong mga kliyente na pumili ng site template mismo habang nagsa-sign-up.

#### Mode 1: Assign Site Template

Sa mode na ito, hindi makakapili ng template ang iyong mga kliyente kapag gumawa sila ng account, kundi ikaw ang magde-define kung aling template ang gagamitin sa bawat isa sa iyong mga Plan.

Para gawin ito, pumunta ka sa **Ultimate Multisite > Products > Edit**.

![Edit product para mag-assign ng site template](/img/config/product-site-templates.png)

Dadalhin ka nito sa **Edit Product** page. Sa ilalim ng **Product Options** section, hanapin ang **Site template** tab at piliin ang **Assign Site Template** option mula sa drop-down field. Lalabas ang listahan ng mga available na site template at papayagan kang pumili ng isang site template lang na nakatalaga sa product.

![Product site template tab na may assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Choose Available Site Template

Sa mode na ito, bibigyan mo ng pagpipilian ang iyong mga kliyente habang nagsa-sign-up. Makakapili sila mula sa iba't ibang site template na idi-define mo sa ilalim ng product settings. May option ka ring limitahan ang site template na maaari nilang piliin sa ilalim ng napiling product. Papayagan ka nitong magkaroon ng iba't ibang set ng site template sa ilalim ng bawat product na mainam para i-highlight ang iba't ibang function at feature para sa mas mahal na product.

Sa **Edit Product** page, sa ilalim ng **Product Options** section, hanapin ang **Site template** tab at piliin ang **Choose Available Site Template** option mula sa drop-down field. Lalabas ang listahan ng mga available na site template at papayagan kang piliin ang mga site template na gusto mong maging available. Magagawa mo ito sa pamamagitan ng pagpili ng Behavior nito: **Available** kung gusto mong isama ang site template sa listahan. _**Not Available**_ kung ayaw mong lumabas ang site template bilang option. At **Pre-selected** kung gusto mong isa sa mga nakalista na site template ang maging default na napili.

![Choose available site templates na may behavior options](/img/config/product-site-templates.png)

### Default Mode: Pagpili ng Site Template sa Checkout Form

Kung gusto mong maging available ang lahat ng iyong site template habang nagre-register, o ayaw mong gumawa ng dagdag na trabaho sa pag-assign o pagtukoy ng site template sa ilalim ng bawat product na gagawin mo, maaari mo na lang i-set ang site template selection sa ilalim ng iyong **Checkout Form**. Para gawin ito, pumunta lang sa **Ultimate Multisite > Checkout Forms**. Pagkatapos i-click ang **Edit** sa ilalim ng form na gusto mong i-configure.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Dadalhin ka nito sa **Edit Checkout Form** page. Hanapin ang **Template Selection** field at i-click ang **Edit** sa ilalim nito.

![Checkout form editor na may template selection field](/img/config/checkout-form-editor.png)

May lalabas na modal window. Sa ilalim ng **Template Sites** field, maaari mong piliin at ilista ang lahat ng site template na gusto mong maging available habang nagre-register. Ang mga site template na tutukuyin mo dito ay magiging available anuman ang piniling product ng user.

![Template sites field sa checkout form editor](/img/config/checkout-form-step.png)

### Mga Site Template Option

May iba pang site template function na maaari mong i-on o i-off sa ilalim ng Ultimate Multisite settings.

![Site template options sa Ultimate Multisite settings](/img/config/settings-sites.png)

#### Allow Template Switching

Ang pag-enable ng option na ito ay magpapahintulot sa iyong mga kliyente na palitan ang template na pinili nila habang nagsa-sign-up pagkatapos magawa ang account at site. Kapaki-pakinabang ito sa punto de bista ng kliyente dahil pinapayagan silang pumili ulit ng template kung malaman nilang hindi pala ang pinakamainam para sa kanilang pangangailangan ang orihinal nilang pinili.

#### Allow Users to use their Site as templates

Dahil naglaan ng oras ang mga subsite user sa pagbuo at pagde-disenyo ng sarili nilang site, maaaring gusto nilang i-clone at gamitin ito bilang isa sa mga available na site template kapag gumawa sila ng isa pang subsite sa iyong network. Papayagan sila ng option na ito na magawa iyon.

#### Copy Media on Template Duplication

Ang pag-check ng option na ito ay magkokopya ng media na na-upload sa template site patungo sa bagong ginawang site. Maaari itong i-override sa bawat isa sa mga plan.

#### **Prevent Search Engines from indexing Site Templates**

Ang mga site template na tinalakay sa artikulong ito ay mga boilerplate ngunit bahagi pa rin ng iyong network na nangangahulugang mahahanap pa rin sila ng mga search engine. Papayagan ka ng option na ito na itago ang mga site template para hindi sila ma-index ng mga search engine.

## Pag-pre-populate ng mga Site Template gamit ang auto search-and-replace

Isa sa mga pinaka-powerful na feature ng Ultimate Multisite ay ang kakayahang magdagdag ng arbitrary na text, color, at select field sa registration form. Kapag nakuha na natin ang data na iyon, magagamit natin ito para i-pre-populate ang content sa ilang bahagi ng napiling site template. Pagkatapos, kapag pina-publish ang bagong site, papalitan ng Ultimate Multisite ang mga placeholder ng aktwal na impormasyong inilagay habang nagre-register.

Halimbawa, kung gusto mong makuha ang pangalan ng kumpanya ng iyong end-user habang nagre-register at awtomatikong ilagay ang pangalan ng kumpanya sa home page. Sa home page ng iyong template site, kailangan mong idagdag ang mga placeholder, tulad ng nasa larawan sa ibaba (ang mga placeholder ay dapat nakapaligiran ng double curly braces - {{placeholder_name}}).

![Homepage na may placeholder text sa curly braces](/img/config/site-templates-list.png)

Pagkatapos, maaari mo na lang idagdag ang katugmang registration field sa iyong checkout form para makuha ang data na iyon:

![Checkout form na may katugmang registration field](/img/config/checkout-form-editor.png)

Mapupunan ng iyong customer ang field na iyon habang nagre-register.

![Registration field na pinunan ng customer](/img/config/checkout-form-step.png)

![Preview ng registration form](/img/config/checkout-form-editor.png)

Awtomatikong papalitan ng Ultimate Multisite ang mga placeholder ng data na ibinigay ng customer.

![Mga placeholder na pinalitan ng customer data sa site](/img/config/site-templates-list.png)

### Paglutas sa problemang "template na puno ng placeholder"

Maganda ang lahat ng iyan, pero may problema tayong nakakaharap: ngayon ang ating mga site template - na maaaring bisitahin ng ating mga customer - ay puno ng mga pangit na placeholder na hindi gaanong nagsasabi ng kahit ano.

Para malutas ito, nag-aalok kami ng option na mag-set ng mga pekeng value para sa mga placeholder, at ginagamit namin ang mga value na iyon para i-search at i-replace ang mga content nito sa mga template site habang bumibisita ang iyong mga customer.

Maa-access mo ang template placeholders editor sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings > Sites**, at pagkatapos, sa sidebar, i-click ang **Edit Placeholders** link.

![Placeholder settings sa ilalim ng Sites settings page](/img/config/settings-sites.png)

Dadalhin ka nito sa placeholders content editor, kung saan maaari kang magdagdag ng mga placeholder at ang kani-kanilang content.

![Template placeholders content editor](/img/config/settings-sites.png)
