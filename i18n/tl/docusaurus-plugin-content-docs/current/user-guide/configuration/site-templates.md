---
title: Mga Template ng Site
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Mga Site Templates (v2)

_**TANDAAN: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x. Kung gumagamit ka ng version 1.x,**_ **tingnan ang artikulong ito** _**.**_

Ang layunin namin kapag gumagawa ng premium network gamit ang Ultimate Multisite ay gawing awtomatiko hangga't maaari ang maraming proseso habang binibigyan namin ang aming mga kliyente ng kaluwagan at iba't ibang opsyon na pipiliin kapag nagtatayo sila ng kanilang mga website. Isang madaling paraan upang makamit ang balanse na ito ay gamitin ang feature ng Ultimate Multisite Site Templates.

## Ano ang Site Template?

Gaya ng pangalan nito, ang isang Site Template ay isang boilerplate site na pwedeng gamitin bilang batayan kapag gumagawa ng mga bagong site sa iyong network.

Ibig sabihin, maaari kang gumawa ng base site, mag-activate ng iba't ibang plugins, magtakda ng active theme, at i-customize ito sa anumang paraan na gusto mo. Pagkatapos, kapag ang iyong customer ay gumawa ng bagong account, sa halip na makakuha ng default WordPress site na walang kabuluhang nilalaman sa loob nito, makakakuha sila ng kopya ng iyong base site na may lahat ng mga customization at nilalaman na naka-set na.

Mukhang napakagaling nito, pero paano ako gagawa ng bagong site template? Napakasimple nito hangga't maaari.

## Paggawa at Pag-e-edit ng Bagong Site Template

Ang Site Templates ay mga normal na site sa iyong network. Upang gumawa ng bagong template, pumunta ka lang sa **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Bubuksan nito ang isang modal window kung saan hihingin nito ang **Site title, Site Domain/path,** at **Site type**. Sa ilalim ng drop-down field na **Site Type**, siguraduhing piliin mo ang **Site Template** *.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Maaari ka ring magdagdag ng customer-facing description para ipaliwanag kung ano ang kasama sa template:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Sa ibaba ng form, makikita mo ang **Copy Site** toggle switch. Ito ay magbibigay sa iyo na gumawa ng bagong site template batay sa isang umiiral na site template bilang iyong panimulang punto para makatipid ka ng oras sa halip na gumawa ng site template mula sa simula.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Pag-customize ng nilalaman ng isang Site Template

Para i-customize ang iyong site template, pumunta ka lang sa dashboard panel nito at gawin ang mga pagbabagong kailangan mo. Maaari kang gumawa ng mga bagong post, page, mag-activate ng plugins, at magpalit ng active theme. Maaari ka pa ring pumunta sa Customizer at baguhin ang lahat ng uri ng customization options.

![Site template edit interface](/img/config/site-template-edit.png)

Lahat ng data na iyon ay kokopyahin kapag ang isang customer ay gumawa ng bagong site batay sa Site Template na iyon.

### Advanced Options

Kung alam mo ang ilang custom coding, maaari mong gamitin ang Search and Replace API namin para awtomatikong palitan ang impormasyon sa bagong site pagkatapos itong gawin. Nakakatulong ito para sa mga bagay tulad ng pagpapalit ng pangalan ng kumpanya sa About page, pagpapalit ng contact email sa Contact page, atbp.

### Paggamit ng Site Templates

Sige, gumawa ka na ng maraming iba't ibang Site Template na may iba't ibang disenyo, theme, at settings. Paano mo ito magagamit sa iyong network ngayon?

Sa madaling salita, may dalawang paraan kang magagamit ngayon (hindi sabay-sabay):

  * I-attach ang isang Site Template sa bawat isa sa iyong mga Plan

**O**

  * Payagan ang iyong mga kliyente na pumili ng site template mismo habang nagre-register.

#### Paraan 1: Pag-assign ng Site Template

Sa mode na ito, hindi magkakaroon ng pagpipilian ang mga kliyente sa template kapag nagtatala sila ng account, kundi ikaw naman ang magde-define kung aling template ang gagamitin sa bawat Plano mo.

Para gawin iyan, kailangan mong pumunta sa **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Dadaan ka rito sa pahina ng **Edit Product**. Sa ilalim ng seksyong **Product Options**, hanapin ang tab na **Site template** at piliin ang opsyon na **Assign Site Template** mula sa drop-down field. Magbubukas ito ng listahan ng mga site template na available at papayagan ka nitong pumili lamang ng isang site template na itatalaga para sa produktong iyon.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Pumili ng Available Site Template

Sa mode na ito, bibigyan mo ang iyong mga kliyente ng pagpipilian habang sila ay nagre-register. Maaari silang pumili mula sa iba't ibang site template na dine-define mo sa ilalim ng product settings. Mayroon kang opsyon na limitahan ang site template na kanilang mapipili sa ilalim ng napiling produkto. Ito ay magbibigay-daan sa iyo na magkaroon ng iba't ibang set ng site template sa ilalim ng bawat produkto, na perpekto para i-highlight ang iba't ibang function at feature para sa mas mataas na presyong produkto.

Sa pahinang **Edit Product**. Sa ilalim ng seksyong **Product Options**, hanapin ang tab na **Site template** at piliin ang opsyon na **Choose Available Site Template** mula sa drop-down field. Bubuksan nito ang listahan ng mga available na site template at papayagan ka nitong pumili ng site template na gusto mong maging available. Maaari mo itong gawin sa pamamagitan ng pagpili ng its Behavior: **Available** kung gusto mong isama ang site template sa listahan. _**Not Available**_ kung ayaw mong ipakita ang site template bilang opsyon. At **Pre-selected** kung nais mong maging default na napiling isa sa mga nakalistang site template.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Pagpili ng Site template sa Checkout form

Kung gusto mo na lahat ng iyong site template ay available habang nagre-register, o baka hindi mo gustong gumawa ng dagdag na trabaho ng pag-assign o pagtukoy ng mga site template sa ilalim ng bawat produktong gagawin mo. Kung ganoon, maaari mong itakda ang pagpili ng site template sa ilalim ng iyong **Checkout Form**. Para gawin ito, pumunta sa **Ultimate Multisite > Checkout Forms** at i-click ang **Edit** sa ilalim ng form na gusto mong i-configure.

Bubuksan nito ang pahina na **Edit Checkout Form**. Hanapin ang field na **Template Selection** at i-click ang **Edit** sa ilalim nito.

Magpapakita ng isang modal window. Sa ilalim ng field na **Template Sites**, maaari mong piliin at ilista ang lahat ng site template na gusto mong maging available habang nagre-register. Ang mga site template na iyong itatakda dito ay magiging available anuman ang produktong pinili ng user.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Sa frontend, makikita ng mga customer ang template chooser habang nag-check out at maaari silang pumili ng simula na disenyo para sa kanilang bagong site.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Mga Opsyon ng Site Template

May iba pang mga function para sa site templates na maaari mong i-on o i-off sa ilalim ng Ultimate Multisite settings.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Payagan ang Pagpapalit ng Template (Allow Template Switching)

Kapag naka-enable mo ito, papayagan nito ang iyong mga kliyente na palitan ang template na kanilang pinili habang nasa proseso ng pag-sign up matapos ma-create ang account at site. Nakakatulong ito sa pananaw ng kliyente dahil maaari nila itong muling piliin ang template kung malalaman nila mamaya na ang orihinal nilang pagpipilian ay hindi ang pinakaangkop para sa kanilang partikular na pangangailangan.

#### Payagan ang mga User na gamitin ang kanilang Site bilang templates (Allow Users to use their Site as templates)

Dahil naglaan ng oras ang mga user ng subsite sa paggawa at pagdidisenyo ng sarili nilang site, maaaring gusto nila itong i-clone at gamitin bilang isa sa mga available na site template kapag gumagawa sila ng isa pang subsite sa iyong network. Payagan ka ng opsyong ito na makamit iyon.

#### Kopyahin ang Media sa Pagdublik ng Template (Copy Media on Template Duplication)

Kapag sinuri mo ang opsyong ito, kopyahin nito ang mga media na na-upload sa template site patungo sa bagong ginawang site. Maaari itong i-override sa bawat plano.

#### **Pigilan ang mga Search Engine na mag-index ng Site Templates (Prevent Search Engines from indexing Site Templates)**

Ang mga site template, gaya ng tinalakay sa artikulong ito, ay boilerplate lang pero bahagi pa rin sila ng iyong network kaya available pa rin silang mahanap ng search engines. Payagan ka nitong itago ang mga site templates para hindi sila ma-index ng mga search engine.

## Pagpuno ng Site Templates gamit ang auto search-and-replace

Isa sa pinakamakapangyarihan ng Ultimate Multisite ang kakayahang magdagdag ng kahit anong text, kulay, at mga field na pwedeng piliin sa registration form. Kapag nakuha na natin ang data na iyon, magagamit natin ito para punan (pre-populate) ang nilalaman sa ilang bahagi ng site template na pinili mo. Pagkatapos, kapag inilabas na ang bagong site, papalitan ng Ultimate Multisite nito ang mga placeholder ng aktwal na impormasyong ipinasok noong registration.

Halimbawa, kung gusto mong makuha ang pangalan ng kumpanya ng iyong end-user habang nagre-register at awtomatikong ilagay ang pangalan ng kumpanya sa home page. Sa home page ng template site mo, kailangan mong magdagdag ng mga placeholder, gaya ng nasa larawan sa ibaba (ilagay ang mga placeholder na nakapalibot sa double curly braces - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Pagkatapos, maaari ka lang magdagdag ng katugmang registration field sa iyong checkout form para makuha ang data na iyon. Ang parehong editor ng checkout form na ginagamit mo para sa pagpili ng template ay nagbibigay-daan sa iyo na maglagay ng custom fields kasabay ng template chooser:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Ang iyong customer naman ang makakapuno sa field na iyon habang nagre-register.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Pagkatapos, papalitan ng Ultimate Multisite ang mga placeholder ng data na ibinigay ng customer nang awtomatiko.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Solusyon sa problemang "template puno ng placeholders"

Maganda lahat 'yan, pero may nakakahiyang problema tayo: ang mga template ng ating site - na pwedeng puntahan ng ating mga customer - ay puno ng mga pangit at hindi gaanong nagbibigay-impormasyong placeholder.

Para malutas iyan, nag-aalok kami ng opsyon na magtakda ng mga pekeng halaga para sa mga placeholder, at ginagamit namin ang mga halagang iyon para hanapin at palitan ang kanilang nilalaman sa mga template site habang bumibisita ang iyong mga customer.

Maaari kang makapasok sa editor ng template placeholders sa pamamagitan ng pagpunta sa **Ultimate Multisite > Settings > Sites**, at pagkatapos, sa sidebar, i-click ang link na **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Doon ka dadalhin sa content editor ng mga placeholders, kung saan maaari kang magdagdag ng mga placeholder at ang kani-kanilang nilalaman.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
