---
title: Paggawa ng Iyong Unang Produkto ng Subscription
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Paglikha ng Iyong Unang Subscription Product (v2)

_**MAHALAGANG PAUNAWA: Ang artikulong ito ay para lamang sa mga gumagamit ng Ultimate Multisite version 2.x. Kung gumagamit ka pa ng version 1.x,**_ **_tingnan mo itong artikulo**_**.

Para simulan ang pagpapatakbo ng iyong network at magsimulang magbenta ng iyong serbisyo sa mga potensyal na user, kailangan mo ng iba't ibang subscription options. Paano mo gagawin ang mga produktong ito? Anong uri ng mga produkto ang maaari mong ialok? Sa artikulong ito, tatalakayin natin ang lahat ng impormasyong kailangan mo tungkol sa mga produkto.

## Uri ng Produkto

Sa Ultimate Multisite, maaari kang mag-alok ng dalawang kategorya ng produkto sa iyong mga kliyente: **plans** at **add-ons (Order Bump)**. Ang add-ons ay maaaring hatiin sa dalawang uri: **packages** at **services**. Titingnan natin ang kanilang pagkakaiba at espesyal na katangian pagkatapos nito.

  * **Plans**: Ito ang pangunahing produkto ng Ultimate Multisite. Ang isang kliyente ay maaari lamang magkaroon ng membership kung ito ay nakakabit sa isang plan. Nagbibigay ang isang plan sa iyong mga kliyente ng isa o higit pang sites (depende ito sa mga configuration ng iyong plan) na may mga limitasyon na itinakda mo sa iyong product editing page.

  * **Packages**: Ito ay mga add-on na direktang nakakaapekto sa mga functionality ng Ultimate Multisite plans. Binabago nila ang mga limitasyon o nagdaragdag ng mga bagong resources, plugins, o themes sa orihinal na plan na binili ng iyong kliyente. Halimbawa, ang isang basic plan ay maaaring magpahintulot ng 1,000 visits bawat buwan at maaari kang mag-alok ng package na nagpapalawak nito sa 10,000.

  * **Services**: Ito ay mga add-on na hindi nagbabago sa mga functionality ng Ultimate Multisite. Ang mga ito ay mga gawain na gagawin mo para sa iyong kliyente bukod pa sa plan na kanilang binili. Halimbawa, maaaring bumili ang iyong customer ng plan na nagpapahintulot lamang ng isang site at magbayad din para sa karagdagang serbisyo na gagawin ang disenyo ng site na iyon.

## Pamamahala ng mga Produkto

Para sa marami, ang tab na **Products** sa Ultimate Multisite **(Ultimate Multisite > Products)** ay parang mga plano sa tradisyonal na hosting environment.

Sa loob ng Ultimate Multisite, ang tab na Products ang nagtatakda ng istraktura at mga limitasyon na naaangkop sa isang partikular na produkto o serbisyo. Ang mga istrukturang ito ay umaabot sa deskripsyon ng produkto o serbisyo, presyo, buwis, at mga pahintulot (permissions).

Ang bahaging ito ang gagabay sa iyong pag-unawa sa mahalagang pundasyon ng Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Pagdaragdag ng Produkto (Adding Products)

Maging plano man, package, o serbisyo, ang paraan para magsimula sa pagtukoy ng bagong item ay sa **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Ang interface ay may dalawang pangunahing bahagi. Sa kaliwa ay may ilang mga tab na tumutulong sa pagtukoy ng produkto, at sa kanan ay may ilang seksyon para tukuyin ang batayang presyo ng produkto, ang aktibong estado nito, at larawan ng produkto.

![Product edit page overview](/img/config/product-edit-full.png)

### Deskripsyon (Description)

Ang pangunahing impormasyon ng produkto ay maaaring tukuyin sa pamamagitan ng pagbibigay ng pangalan at deskripsyon ng produkto. Ang mga identifier na ito ay ipinapakita kahit saan kailangan ang impormasyon ng produkto, tulad ng pagpili ng plano at presyo, mga invoice, upgrades, at iba pa.

![Product description section](/img/config/product-description.png)

### Uri ng Pagpepresyo (Pricing Type)

Sa kanang bahagi ng interface, maaaring tukuyin ang batayang presyo.

![Pricing and save section](/img/config/product-pricing-save.png)

Sinusuportahan ng Ultimate Multisite ang tatlong magkakaibang uri ng pagpepresyo. Ang opsyong **paid** ay humihingi sa network administrator para sa impormasyon tungkol sa presyo at dalas ng pagbabayad ng produkto.

### Presyo (Pricing)

Ang bahagi ng presyo ay tumutukoy sa batayang presyo ng produkto at ang interval ng pagbabayad.

![Pricing and save section](/img/config/product-pricing-save.png)

kaya halimbawa, ang presyong $29.99 na may setting na 1 buwan ay babayaran ng $29.99 bawat buwan. Katulad nito, ang presyong $89.97 na may setting na 3 buwan ay babayaran sa halagang iyon kada quarter.

### Billing Cycles

Ang seksyong Billing Cycles ay nagsasabi kung gaano kadalas mangyayari ang nabanggit na billing interval at karaniwang nauunawaan ito batay sa mga kontrata o fixed terms.

![Pricing and save section](/img/config/product-pricing-save.png)

Halimbawa, ang presyo ng produkto na $29.99 na may interval na 1 buwan at 12 billing cycles ay babayaran ang $29.99 bawat buwan para sa produkto sa loob ng susunod na 12 buwan. Sa madaling salita, ang ganitong setting ay magtatatag ng fixed-price term na $29.99 bawat buwan sa loob ng 12 buwan at pagkatapos ay titigil ang pagbili.

### Trial Period

Ang pag-enable ng offer trial toggle ay nagpapahintulot sa network administrator na magtakda ng trial period para sa produkto.

![Pricing and save section](/img/config/product-pricing-save.png)

Sa panahon ng trial period, malaya ang mga customer na gamitin ang produkto at hindi sila babayaran hangga't hindi natatapos ang trial period.

### Setup Fee

Maaari mo ring maglagay ng setup fee sa iyong plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Ibig sabihin, ang iyong kliyente ay magbabayad ng dagdag na halaga sa unang bayad (bukod sa price plan) na tumutugma sa fee na itinakda mo sa seksyong ito.

### Active

Ang active toggle ay epektibong nagtatakda kung ang produkto ay available ba sa mga customer para sa bagong pag-sign up.

![Active toggle](/img/config/product-active.png)

Kung mayroon nang mga customer sa plan na ito, ang pag-toggle nito sa disabled state ay epektibong magpapawalang-bisa (grandfathers) ng plan para alisin ito sa mga susunod na pagpaparehistro. **Ang mga existing customers sa plan ay patuloy na bibili** hanggang sa sila ay lumipat sa bagong plan o tanggalin mula sa plan.

### Larawan ng Produkto

Pinapayagan ng **Upload Image** button ang network administrator na gamitin ang media library para pumili o mag-upload ng larawan ng produkto.

![Product image section](/img/config/product-image.png)

### Tanggalin (Delete)

Ang **Delete Product** button ay nagtatanggal ng produkto mula sa system. Lumilitaw ito kapag na-publish na ang produkto.

![Delete product section](/img/config/product-delete.png)

Hindi tulad ng ibang pagtanggal, ang produkto ay hindi inilalagay sa anumang trash state. Kaya kapag tinanggal na, ang aksyong iyon ay hindi na mababawi (irreversible).

### Mga Opsyon ng Produkto (Product Options)

Kapag na-define na ang pangunahing impormasyon ng produkto, ang mga product options ay tumutulong sa network administrator na tukuyin pa ang mga tiyak na katangian ng produkto.

#### Pangkalahatan (General)

Ang tab na **General** ay nagtatakda ng pangkalahatang mga katangian ng produkto na hindi naaangkop sa alinman sa ibang product-specific tabs.

![General tab](/img/config/product-general-tab.png)

Ang madaling intindihin na **product slug** ang tumutukoy sa slug kung saan kinikilala ang produkto sa mga URL at iba pang bahagi ng Ultimate Multisite.

Sumusuporta ang Ultimate Multisite sa ilang uri ng produkto gaya ng Plan, Package, at Service. Ang mga product options tab ay dinamikong ina-adjust depende sa uri ng produkto na tinukoy.

Ang **Customer Role** ay tumutukoy sa papel (role) na ibinibigay sa customer kapag nilikha ang site. Karaniwan para sa karamihan ng network administrator, ito ay ang Ultimate Multisite default o Administrator. Ang Ultimate Multisite default role ay maaaring itakda sa **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Pag-angat at Pagbaba (Up & Downgrades)

Ang tab na ito ay nagpapakita ng mga opsyon para mag-upgrade o bumaba ang isang customer sa loob ng kanilang partikular na tier.

Para mas maintindihan ito, isipin mo ang isang halimbawa kung saan ang isang niche Ultimate Multisite installation ay nagbibigay ng learning management solutions sa kanilang mga customer. Upang makamit ito, itinatukoy ang tatlong plano (Basic, Plus, at Premium) at may partikular na plugins na aktibo para sa bawat plano (tingnan mamaya sa seksyong ito para sa mga instructions kung paano i-activate ang mga plugins).

Kung ang Ultimate Multisite installation ay nagbibigay din ng serbisyo para sa business websites o eCommerce websites, maaaring mangailangan ng ibang mga plugin ang mga plan na ito.

Sa ganitong paraan, hindi maganda at problema kung papayagan ang mga customer mula sa eLearning na lumipat sa mga plano para sa eCommerce dahil ang mga plan, presyo, at limitasyon ay maaaring hindi akma.

Kaya upang limitahan ang daan ng customer at maiwasan ang mga insidente, maaaring tukuyin ng network administrator ang isang plan group at sa loob ng grupong iyon tukuyin kung aling mga plano ang pwedeng puntahan ng customer.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Upang tukuyin ang isang plan group, tukuyin ang mga compatible na plano sa listahan ng **plan group**. Ang **product order** ang nagtatakda kung paano nakaayos at ipinapakita ang mga plano mula sa pinakamababa hanggang sa pinakamataas.

Kasama rin sa Ultimate Multisite ang feature na **order bump**, kung saan ang mga add-on product at serbisyo ay maaaring idagdag sa mga plano kung naaangkop. Inaalok ito sa customer bilang karagdagang item na pwedeng idagdag sa mga plano sa checkout o habang nag-u-upgrade.

#### Pagbabago ng Presyo (Price Variations)

Pinapayagan ng Price variations ang network administrator na magtakda ng iba't ibang antas ng presyo depende sa tagal ng panahon. Ginagawa nitong posible na maaalok ang buwanan, quarterly, taunan, o anumang ibang panahon ng pagbabayad para sa iisang produkto. Halimbawa, maaari kang mag-set up ng produkto sa $29.99/buwan na may discounted annual option sa $249.99/taon.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Para makagawa ng price variations, i-set ang **Enable Price Variations** toggle sa active at i-click ang button na **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Para magpasok ng variation, itakda ang tagal (duration), panahon (period), at presyo ng variation. Maaaring magdagdag ng karagdagang variations sa pamamagitan ng muling pag-click sa button.

Halimbawa, kung ang base product price mo ay $29.99 bawat buwan, maaari kang magdagdag ng:

  * **3 Buwan** sa $79.99 (maliit na diskwento kumpara sa buwanan)
  * **1 Taon** sa $249.99 (malaking diskwento para sa taunang pangako)

:::tip Pagpapakita ng Billing Period Toggle sa Frontend

Ang price variations lang ay hindi nagdaragdag ng toggle o switch sa frontend checkout. Para mapili ng mga customer ang pagitan ng billing periods (halimbawa: Buwanan / Taunan), kailangan mong magdagdag ng **Period Selection** field sa iyong checkout form. Tingnan ang [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) para sa step-by-step na mga tagubilin.
:::

#### Buwis (Taxes)

Ang **Taxes** tab ay naaayon sa mga setting ng buwis na tinukoy sa **Ultimate Multisite > Settings > Taxes** at mas partikular ang mga rate ng buwis na itinakda. Para i-enable ang buwis at tukuyin ang mga applicable tax rates, tingnan ang dokumentasyon sa **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Sa isang naunang halimbawa, nagtakda tayo ng lokal na tax rate na 7.25% para sa mga customer sa California (United States of America).

Kapag itinakda na ang tax rate sa **Ultimate Multisite > Settings > Manage Tax Rates**, maaari mo na itong piliin sa antas ng produkto.

![Taxes tab](/img/config/product-taxes.png)

Para ipahiwatig na ang isang produkto ay may buwis, gawing aktibo ang toggle na **Is Taxable** at piliin ang naaangkop na tax rate mula sa dropdown ng Tax Category.

#### Site Templates

Sa madaling salita, ang site templates ay mga kumpletong WordPress website na kinokopya (cloned) sa site ng customer simula sa simula ng kanilang subscription.

![Site Templates tab](/img/config/product-site-templates.png)

Ang network administrator ang gumagawa at nagse-set up ng template site bilang isang regular na WordPress site na may mga theme, plugin, at content na aktibo at naka-configure. Ang template site ay eksaktong kinokopya sa customer.

Pinapayagan ng tab na ito ang network administrator na tukuyin ang pag-uugali ng site templates kapag may bagong subscription. Para magamit ang site templates para sa plan na ito, gawing aktibo ang toggle na **Allow Site Templates**.

Kapag hindi naka-enable ang **Allow Site Templates**, hindi makakapili ang mga customer ng templates kahit na may checkout form, shareable link, o URL parameter na nagbibigay ng access sa mga template. Kinokontrol na ngayon ng Ultimate Multisite ang limitasyong ito sa pamamagitan ng isang fallback chain sa lahat ng magagamit na entry points: unang tinitingnan ang plan settings, pagkatapos ay ang checkout-form template settings, at panghuli ang pre-selected o URL-provided templates. Pinapanatili nito ang mga limitasyon ng plan na pare-pareho at pinipigilan ang mga template na lumabas para sa mga produktong hindi dapat magbigay nito.

Ang **site template selection mode** ang nagtatakda ng pag-uugali ng site templates habang nasa proseso ng subscription.

Ang **D** **efault** na setting ay sumusunod sa mga hakbang sa checkout form. Kung ang network administrator ay nagtakda ng template selection step sa proseso ng checkout at ang step na iyon ay itinakda gamit ang mga templates, ibibigay ng setting na ito ang mga direksyon na itinatag sa checkout step.

Ang pagtukoy sa **A** **ssign Site Template** ay pinipilit ang pagpili ng tinukoy na template. Dahil dito, aalisin ang anumang mga hakbang ng pagpili ng template sa proseso ng checkout.

Sa huli, ang **C** **hoose Available Site Templates** ay nag-o-override sa mga templates na itinakda sa checkout step gamit ang mga template na napili sa setting na ito. Maaari ring magtakda ng pre-selected na template upang tulungan ang customer sa pagpili.

Sa huli, kung nais ng network administrator na mangyari ang pagpili ng template sa mga checkout step, sapat na ang setting na ' _default_ '. Bilang alternatibo upang alisin at i-lock ang pagpili ng template at ipasa ang pagpili sa mga plan settings, maaaring maging kanais-nais ang mga opsyon na ' _assign new template_ ' o ' _choose available site templates_ '.

#### Sites

Ang tab na **Sites** ay bahagi ng functionality ng limitasyon ng Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Tinutukoy ng setting na ito ang pinakamaraming bilang ng mga site na maaaring gawin ng isang customer sa ilalim ng kanilang membership.

Upang i-enable ang limitasyon, itakda ang toggle na **limit sites** sa aktibong estado at tukuyin ang pinakamataas na bilang ng mga site sa field na **site allowance**.

#### Visits

Ang tab na **Visits** ay isa pang bahagi ng sistema ng limitasyon ng Ultimate Multisite. Pinapayagan ng setting na ito ang pag-account at kasunod na throttling ng mga unique visitor sa site ng customer.

![Visits tab](/img/config/product-visits.png)

Mula sa pananaw ng marketing, ang mga network administrator ay maaaring gamitin ang setting na ito para hikayatin ang mga customer na mag-upgrade ng kanilang plano kapag naabot na ang limitasyon. Matutulungan din ng setting na ito ang network administrator na pigilan at maiwasan ang sobrang trapiko sa mga site upang mapreserba ang mga resources ng sistema.

Para gamitin ang feature na ito, i-set ang **limit unique visits** toggle sa active state at tukuyin ang pinakamataas na bilang ng mga natatanging bisitang nasa field na **unique visits quota**.

Kapag naabot na ang limitasyon na ito, titigil ang Ultimate Multisite sa pag-serve ng site ng customer sa halip na magpakita ng mensahe na lumampas na ang limit.

#### Users

Pinapayagan ng 'Users' limitations ng Ultimate Multisite ang network administrator na magtakda ng mga limitasyon sa bilang ng mga user na maaaring gawin at italaga sa iba't ibang roles.

![Users tab](/img/config/product-users.png)

Para i-enable ang feature ng limitasyon, i-set ang **limit user** toggle sa active state sa pamamagitan ng pag-slide nito sa kanan.

Pagkatapos para sa bawat role na bibigyan ng limitasyon, i-set ang toggle sa tabi nito sa active state at tukuyin ang pinakamataas na limit sa tamang field.

#### Post Types

Pinapayagan ng **Post Types** tab ang network administrator na magtakda ng mas detalyadong limitasyon sa malawak na hanay ng mga post type sa loob ng WordPress.

![Post Types tab](/img/config/product-post-types.png)

Dahil sa pagkakabuo ng WordPress, ang posts at post types ay isang mahalagang bahagi ng pangunahing functionality nito, kaya idinisenyo ang limits system ng Ultimate Multisite upang tulungan ang network administrator na magtatag at magpanatili ng mga limitasyon.

Para i-enable ang subsystem na ito ng limitasyon, i-set ang **limit post types** toggle sa active state sa pamamagitan ng pag-slide nito sa kanan.

Susunod, para sa bawat post type na gusto mong limitahan, i-toggle ito sa pamamagitan ng pag-slide nito sa kanan at tukuyin ang pinakamataas na limitasyon sa tamang field.

#### Disk Space

Pinapayagan ng tab na **Disk Space** ang mga network administrator na limitahan ang espasyong kinokonsumo ng mga customer.

![Disk Space tab](/img/config/product-disk-space.png)

Karaniwan sa isang WordPress multisite, ang core files ay ibinabahagi sa lahat ng site at ang mga indibidwal na direktoryo para sa media files at uploads kung saan naaangkop ang mga setting at limitasyong ito.

Para i-enable ang limitasyon sa paggamit ng disk, itakda ang **limit disk size per site** toggle sa aktibong estado sa pamamagitan ng pag-slide nito sa kanan.

Pagkatapos, tukuyin ang pinakamataas na limitasyon sa megabytes sa field na **disk space allowance**.

#### Custom Domain

Sa pamamagitan ng pag-toggle ng opsyong ito, maaari mong payagan ang mga custom domain para sa plan na ito.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

Ang tab na **Themes** sa loob ng product options ay nagpapahintulot sa network administrator na gawing available ang mga theme sa mga customer para sa pagpili at upang pilitin (optionally force) ang estado ng theme.

![Themes tab](/img/config/product-themes.png)

_**Tanda: Para maging available ang mga theme sa mga customer, dapat itong i-enable ng network administrator.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Ang opsyong **visibility** ay tumutukoy kung ang theme na ito ay makikita ba o hindi sa customer kapag tinitingnan nila ang kanilang tab na **Appearance > Themes** sa loob ng kanilang site. Ang pagtatakda ng opsyong ito sa **Hidden** ay nag-aalis ng theme mula sa paningin at dahil dito ay nililimitahan ang kakayahang piliin at i-activate ito.

![Themes tab](/img/config/product-themes.png)

Ang pagpili sa **behavior** ay nagpapahintulot sa network administrator na tukuyin ang estado ng theme kapag nalikha ang site ng customer.

Sa **Available** na estado, ang theme ay ibinibigay sa customer para sila mismo ang mag-activate. Sa kabilang banda, ang **Not Available** na estado naman ay inaalis sa customer ang kakayahang i-activate ang theme. Panghuli, ang opsyon na **Force Activate** ay pinipilit ang pagpili at pag-activate ng theme kaya ito ang itatakoy bilang default kapag ginawa ang site.

#### Plugins

Katulad ng Themes tab, pinapayagan ng Ultimate Multisite ang network administrator na tukuyin kung paano makikita (visibility) ang mga plugin sa mga customer pati na rin ang kanilang estado pagkatapos gumawa ng bagong site.

![Plugins tab](/img/config/product-plugins.png)

Ang **visibility** drop-down ay nagbibigay-daan para maging nakikita o hindi makikita (hidden) ang plugin mula sa customer kapag tinitingnan nila ito sa kanilang site gamit ang opsyon sa Plugins menu.

Maaari pang manipulahin ng network administrator ang pag-uugali ng mga plugin sa pamamagitan ng paggamit ng mga opsyon sa behavior drop-down.

![Plugins tab](/img/config/product-plugins.png)

Ang **Default** na pagpili ay sumusunod sa estado ng plugin na itinakda sa site template na pinili ng customer. Kaya ang mga plugin na naka-activate sa loob ng template ay mananatiling naka-activate kapag kinopya (cloned) ang template sa site ng customer.

Ang **Force Activate** ay naglalagay sa plugin sa aktibong estado paggawa ng site, at kabaliktad nito, ang **Force Inactivate** naman ay hindi nag-a-activate ng plugin paggawa ng site. Sa parehong sitwasyon na ito, maaaring baguhin nang mano-mano ng customer ang estado ng plugin gamit ang kanilang WordPress Plugins menu.

Ang setting na **Force Activate & Lock** ay gumagana nang katulad pero pinipigilan nito ang pagbabago ng estado ng plugin ng customer. Kaya, kapag naka-set sa Force Activate at Lock, puwersahan nito ang plugin na maging aktibo at pipigilan ang customer na i-deactivate ito. Gayundin, ang setting na **Force Inactivate & Lock** ay puwersahin ang plugin na maging hindi aktibo at pipigilan ang user na i-activate ang plugin.

Maaaring isaalang-alang ng network administrator ang Force Activate & Lock at Force Inactivate & Lock settings kasabay ng site templates bilang plugins, dahil maaapektuhan ng mga setting na ito sa loob ng templates kung piliin ang mga ito.

#### Limitasyon sa Pag-reset

Ang tab na **Reset Limitations** ay nagre-reset ng lahat ng custom limits na itinakda sa produkto. Para mag-reset ng limitasyon, i-click ang button na **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Para kumpirmahin ang aksyon, i-slide ang toggle na **confirm reset** patungo sa aktibong estado sa kanan at i-click ang button na **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## I-edit, Kopyahin, o Burahin ang Produkto

Ang mga kasalukuyang produkto ay maaaring i-edit, kopyahin, o burahin sa pamamagitan ng pagpunta sa **Ultimate Multisite > Products** at pag-hover sa pangalan ng umiiral na produkto.

![Product hover actions](/img/config/product-hover-actions.png)
