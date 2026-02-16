---
title: Paggawa ng Iyong Unang Subscription Product
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Paggawa ng Iyong Unang Subscription Product (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay para lamang sa mga gumagamit ng Ultimate Multisite version 2.x. Kung gumagamit ka ng version 1.x,**_ **_**tingnan ang artikulong ito**_**.

Para masimulan ang pagpapatakbo ng iyong network at makapagbenta ng iyong mga serbisyo sa mga potensyal na user, kailangan mong magkaroon ng iba't ibang subscription options. Paano ka gagawa ng mga products na ito? Ano-ano ang mga uri ng products na maaari mong i-offer? Sa artikulong ito, tatalakayin natin ang lahat ng kailangan mong malaman tungkol sa products.

## Uri ng Product

Sa Ultimate Multisite, maaari kang mag-alok ng dalawang kategorya ng products sa iyong mga kliyente: **plans** at **add-ons** **(Order Bump)**. Ang add-ons ay maaaring hatiin sa dalawang uri: **packages** at **services**. Titingnan natin ang kanilang mga pagkakaiba at katangian sa susunod.

  * **Plans**: ang pangunahing product ng Ultimate Multisite. Ang iyong kliyente ay maaari lamang magkaroon ng membership kung ito ay naka-attach sa isang plan. Ang plan ay nagbibigay sa iyong mga kliyente ng isa o higit pang sites (depende sa mga configuration ng iyong plan) na may mga limitasyong itinakda mo sa iyong product editing page.

  * **Packages**: mga add-ons na direktang nakakaapekto sa mga functionality ng Ultimate Multisite plans. Binabago nito ang mga limitasyon o nagdadagdag ng bagong resources, plugins o themes sa orihinal na plan na binili ng iyong kliyente. Halimbawa, ang isang basic plan ay maaaring payagan ang 1,000 visits bawat buwan at maaari kang mag-alok ng package na nagpapalawak nito sa 10,000.

  * **Services:** mga add-ons na hindi nagbabago sa mga functionality ng Ultimate Multisite. Ito ay mga gawain na gagawin mo para sa iyong kliyente bilang karagdagan sa plan na binili nila. Halimbawa, ang iyong customer ay maaaring bumili ng plan na nagpapahintulot ng isang site at nagbabayad din ng dagdag na serbisyo na gagawin ang design ng site na ito.

## Pamamahala ng mga Products

Para sa marami, ang **Products** tab sa Ultimate Multisite **(Ultimate Multisite > Products)** ay maaaring ihambing sa plans sa isang tradisyonal na hosting environment.

Sa loob ng Ultimate Multisite, ang Products tab ay tumutukoy sa structure at mga limitasyong naaangkop sa isang partikular na product o serbisyo. Ang mga structure na ito ay umaabot sa product o service description, presyo, taxes, at permissions.

Ang seksyong ito ay gagabay sa iyong pag-unawa sa mahalagang pundasyon ng Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Pagdagdag ng mga Products

Kung plan, package, o service man, ang pasukan sa pagtukoy ng bagong item ay sa pamamagitan ng **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Ang interface ay naglalaman ng dalawang pangunahing seksyon. Sa kaliwa ay may ilang tabs na tumutulong sa pagtukoy ng product at sa kanan ay may ilang seksyon para itakda ang base price ng product, ang active state nito, at product image.

![Product edit page overview](/img/config/product-edit-full.png)

### Description

Ang pangunahing impormasyon ng product ay maaaring itakda sa pamamagitan ng pagbibigay ng product name at description. Ang mga identifier na ito ay ipinapakita kung saan man kailangan ang product information tulad ng plan at pricing selection, invoices, upgrades, at iba pa.

![Product description section](/img/config/product-description.png)

### Uri ng Pricing

Sa kanang bahagi ng interface, maaaring itakda ang base pricing.

![Pricing and save section](/img/config/product-pricing-save.png)

Ang Ultimate Multisite ay sumusuporta sa tatlong magkakaibang uri ng pricing. Ang **paid** option ay nagpapakita sa network administrator ng impormasyon tungkol sa presyo ng product at billing frequency.

### Pricing

Ang price component ay tumutukoy sa base product price at billing interval.

![Pricing and save section](/img/config/product-pricing-save.png)

kaya ang halimbawang presyo na $29.99 na may setting na 1 month ay magbibill ng $29.99 bawat buwan. Gayundin, ang presyo na $89.97 na may setting na 3 months ay magbibill ng halagang iyon bawat quarter.

### Billing Cycles

Ang seksyon ng billing cycles ay tumutukoy sa dalas ng nabanggit na billing interval at karaniwang nauunawaan sa konteksto ng contracts o fixed terms.

![Pricing and save section](/img/config/product-pricing-save.png)

Halimbawa, ang product price na $29.99 na may interval na 1 month at 12 billing cycles ay magbibill ng $29.99 bawat buwan para sa product sa loob ng susunod na 12 buwan. Sa madaling salita, ang setting na ito ay magtatakda ng fixed-price term na $29.99 bawat buwan sa loob ng 12 buwan at pagkatapos ay titigil na ang billing.

### Trial Period

Ang pag-enable ng offer trial toggle ay nagpapahintulot sa network administrator na magtakda ng trial period para sa product.

![Pricing and save section](/img/config/product-pricing-save.png)

Sa panahon ng trial period, malaya ang mga customer na gamitin ang product at hindi sila sisingilin hanggang matapos ang trial period.

### Setup Fee

Maaari ka ring mag-apply ng setup fee sa iyong plan.

![Pricing and save section](/img/config/product-pricing-save.png)

Ibig sabihin nito, magbabayad ang iyong kliyente ng dagdag na halaga sa unang charge (bukod pa sa price plan) na katumbas ng fee na itinakda mo sa seksyong ito.

### Active

Ang active toggle ay tumutukoy kung ang product ay available sa mga customer para sa bagong sign-ups.

![Active toggle](/img/config/product-active.png)

Kung may mga existing customers sa plan na ito, ang pagtatakda ng toggle sa disabled state ay epektibong naggo-grandfather sa plan at tinatanggal ito sa mga susunod na sign-ups. **Ang mga existing customers sa plan ay patuloy na sisingilin** hanggang sila ay mailipat sa bagong plan o maalis sa plan.

### Product Image

Ang **Upload Image** button ay nagpapahintulot sa network administrator na gamitin ang media library para pumili o mag-upload ng product image.

![Product image section](/img/config/product-image.png)

### Delete

Ang **Delete Product** button ay nagde-delete ng product mula sa system. Ito ay lumalabas kapag ang product ay na-publish na.

![Delete product section](/img/config/product-delete.png)

Hindi tulad ng ibang deletions, ang product ay hindi inilalagay sa anumang trash state. Kaya kapag na-delete na, ang aksyon ay hindi na maibabalik.

### Product Options

Kapag naitakda na ang base-level product information, ang product options ay tumutulong sa network administrator na mas madetalyadong itakda ang mga partikular na attribute ng product.

#### General

Ang **General** tab ay tumutukoy sa mga pangkalahatang attribute ng product na hindi naaangkop sa alinman sa iba pang product-specific tabs.

![General tab](/img/config/product-general-tab.png)

Ang madaling maunawaan na **product slug** ay tumutukoy sa slug kung saan nakikilala ang product sa URLs at iba pang bahagi ng Ultimate Multisite.

Ang Ultimate Multisite ay sumusuporta sa ilang uri ng product, partikular na Plan, Package, at Service. Ang **Product Options** tabs ay dynamic na inaayos depende sa uri ng product na tinukoy.

Ang **Customer Role** ay tumutukoy sa role na itatalaga sa customer kapag nagawa na ang site. Karaniwan para sa karamihan ng network administrators, ito ay magiging Ultimate Multisite default o Administrator. Ang Ultimate Multisite default role ay maaaring itakda sa **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Up & Downgrades

Ang tab na ito ay tumutukoy sa mga upgrade at downgrade paths na available sa customer sa loob ng kanilang partikular na tier.

Para maunawaan ang konseptong ito, isaalang-alang ang isang halimbawa kung saan ang isang niche Ultimate Multisite installation ay nagbibigay ng learning management solutions sa mga customer nito. Para makamit ito, tatlong plans (Basic, Plus, at Premium) ang tinutukoy at ang mga partikular na plugins ay ina-activate para sa bawat plan (tingnan mamaya sa seksyong ito para sa mga tagubilin kung paano mag-activate ng plugins).

Kung ang Ultimate Multisite installation ay nagse-service din ng business websites o eCommerce websites, ang mga plans na iyon ay maaaring mangailangan ng ibang plugins na i-install at i-activate.

Sa ganitong paraan, hindi kanais-nais at magkakaroon ng problema kung papayagan ang mga eLearning customers na lumipat sa eCommerce plans dahil ang mga plans, pricing, at limitations na ito ay maaaring hindi angkop.

Kaya para limitahan ang path ng customer at maiwasan ang mga insidente, maaaring magtakda ang network administrator ng plan group at sa loob ng group na iyon ay tukuyin ang mga plans na maaaring lipatan ng customer.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Para magtakda ng plan group, tukuyin ang mga compatible plans sa loob ng **plan group** list. Ang **product order** ay tumutukoy kung paano inaayos at ipinapakita ang mga plans mula sa pinakamababa hanggang pinakamataas.

Kasama rin sa Ultimate Multisite ang **order bump** feature kung saan ang naaangkop na add-on products at services ay maaaring idagdag sa plans. Ito ay ini-offer sa customer bilang karagdagang items na maaaring idagdag sa plans sa checkout o habang nag-a-upgrade.

#### Price Variations

Ang price variations ay nagpapahintulot sa network administrator na magtakda ng alternatibong pricing tiers depende sa tagal. Ang setting na ito ay ginagawang posible ang 3 months, 6 months, o annual pricing tiers na maitatag o anumang iba pang tagal at dalas ayon sa use case.

![Price Variations tab](/img/config/product-price-variations.png)

Para magtakda ng price variations, itakda ang **enable price variations** toggle sa active at i-click ang **Add new Price Variation** button.

Para maglagay ng variation, itakda ang duration, period, at price ng variation. Ang mga karagdagang variations ay maaaring ilagay sa pamamagitan ng pag-click muli sa button.

![Price Variations tab](/img/config/product-price-variations.png)

#### Taxes

Ang **Taxes** tab ay naka-align sa mga tax settings na tinukoy sa **Ultimate Multisite > Settings > Taxes** at mas partikular sa mga tax rates na tinukoy. Para ma-enable ang taxes at magtakda ng applicable tax rates, pakitingnan ang dokumentasyon sa **Ultimate Multisite: Settings**

![Taxes tab](/img/config/product-taxes.png)

Sa nakaraang halimbawa, nagtakda tayo ng local tax rate na 7.25% na naaangkop sa mga customer sa California (United States of America).

Kapag natukoy na ang tax rate sa **Ultimate Multisite > Settings > Manage Tax Rates**, ito ay mapipili na sa product level.

![Taxes tab](/img/config/product-taxes.png)

Para ipahiwatig na ang isang product ay taxable item, itakda ang **Is Taxable** toggle sa active at piliin ang applicable tax rate mula sa Tax Category dropdown.

#### Site Templates

Sa esensya, ang site templates ay mga kumpletong WordPress websites na kino-clone sa site ng customer sa simula ng kanilang subscription.

![Site Templates tab](/img/config/product-site-templates.png)

Ang network administrator ay gumagawa at nagko-configure ng template site bilang regular na WordPress site na may na-activate at na-configure na themes, plugins, at content. Ang template site ay kino-clone nang eksakto sa customer.

Ang tab na ito ay nagpapahintulot sa network administrator na tukuyin ang behavior ng site templates sa bagong subscription. Para magamit ang site templates, itakda ang **allow site templates** toggle sa active state nito.

Ang **site template selection mode** ay tumutukoy sa behavior ng site templates sa proseso ng subscription.

Ang **Default** setting ay sumusunod sa mga hakbang sa checkout form. Kung ang network administrator ay nagtakda ng template selection step sa proseso ng checkout at ang step ay tinukoy na may mga templates, ang setting na ito ay igagalang ang mga direktiba na itinakda sa checkout step.

Ang pagtukoy ng **Assign Site Template** ay pinipilit ang pagpili ng tinukoy na template. Dahil dito, ang anumang template selection steps sa proseso ng checkout ay aalisin.

Panghuli, ang **Choose Available Site Templates** ay ino-override ang mga templates na tinukoy sa checkout step ng mga templates na napili sa setting na ito. Maaari ring magtakda ng pre-selected template para tulungan ang customer sa pagpili.

Sa huli, kung nais ng network administrator na mangyari ang template selection sa checkout steps, ang setting na '_default_' ay sapat na. Bilang alternatibo, para alisin at i-lock ang template selection at ipagkatiwala ang pagpili sa plan settings, ang '_assign new template_' o '_choose available site templates_' options ay maaaring kanais-nais.

#### Sites

Ang **Sites** tab ay bahagi ng limitations functionality ng Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Ang setting na ito ay tumutukoy sa maximum na bilang ng sites na maaaring gawin ng customer sa ilalim ng kanilang membership.

Para ma-enable ang limitation, itakda ang **limit sites** toggle sa active state nito at tukuyin ang maximum na bilang ng sites sa **site allowance** field.

#### Visits

Ang **Visits** tab ay karagdagang bahagi ng limitations system ng Ultimate Multisite. Ang setting na ito ay nagpapahintulot sa pag-account at kasunod na throttling ng unique visitors sa site ng customer.

![Visits tab](/img/config/product-visits.png)

Mula sa perspektibong marketing, maaaring gamitin ng mga network administrators ang setting na ito bilang paraan para hikayatin ang mga customer na i-upgrade ang kanilang plan kapag naabot na ang mga limits. Ang setting na ito ay maaari ring makatulong sa network administrator na pigilan at maiwasan ang labis na traffic sa mga sites para mapanatili ang system resources.

Para magamit ang feature na ito, itakda ang **limit unique visits** toggle sa active state nito at tukuyin ang maximum na bilang ng unique visitors sa **unique visits quota** field.

Kapag naabot ang limit na ito, titigil ang Ultimate Multisite sa pag-serve ng site ng customer at sa halip ay magpapakita ng mensahe na nagsasabing nalampasan na ang mga limits.

#### Users

Ang 'Users' limitations ng Ultimate Multisite ay nagpapahintulot sa network administrator na magpataw ng mga limitasyon sa bilang ng mga users na maaaring gawin at italaga sa mga roles.

![Users tab](/img/config/product-users.png)

Para ma-enable ang limitations feature, itakda ang **limit user** toggle sa active state nito sa pamamagitan ng pag-slide nito pakanan.

Susunod, para sa bawat role na lilitawan, itakda ang toggle sa tabi nito sa active state at tukuyin ang maximum upper limit sa angkop na field.

#### Post Types

Ang **Post Types** tab ay nagpapahintulot sa network administrator na magpataw ng granular limits sa malawak na hanay ng post types sa loob ng WordPress.

![Post Types tab](/img/config/product-post-types.png)

Dahil sa construction ng WordPress, ang posts at post types ay isang mahalagang bahagi ng core functionality nito, at dahil dito ang limitations system ng Ultimate Multisite ay idinisenyo para tulungan ang network administrator sa pagtatatag at pagpapanatili ng mga limits.

Para ma-enable ang limits subsystem na ito, itakda ang **limit post types** toggle sa active state nito sa pamamagitan ng pag-slide nito pakanan.

Susunod, para sa bawat post type na lilitawan, i-toggle ito sa pamamagitan ng pag-slide nito pakanan at tukuyin ang maximum upper limit sa angkop na field.

#### Disk Space

Ang **Disk Space** tab ay nagpapahintulot sa mga network administrators na limitahan ang space na ginagamit ng mga customer.

![Disk Space tab](/img/config/product-disk-space.png)

Karaniwan sa WordPress multisite, ang mga core files ay ibinabahagi sa lahat ng sites at ang mga indibidwal na directories ay ginagawa para sa media files at uploads kung saan naaangkop ang mga settings at limitations na ito.

Para ma-enable ang disk usage limitation, itakda ang **limit disk size per site** toggle sa active state nito sa pamamagitan ng pag-slide nito pakanan.

Susunod, tukuyin ang maximum upper limit sa megabytes sa **disk space allowance** field.

#### Custom Domain

Sa pamamagitan ng pag-toggle ng option na ito, maaari mong payagan ang custom domains sa partikular na plan na ito.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes

Ang **Themes** tab sa loob ng product options ay nagpapahintulot sa network administrator na gawing available ang mga themes sa mga customer para sa pagpili at opsyonal na pilitin ang state ng theme.

![Themes tab](/img/config/product-themes.png)

_**Paalala: Para maging available ang mga themes sa mga customer, kailangan itong ma-network enable ng network administrator.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Ang **visibility** option ay tumutukoy kung ang theme na ito ay makikita ng customer kapag tinitingnan ang kanilang **Appearance > Themes** tab sa loob ng kanilang site. Ang pagtatakda ng option na ito sa **Hidden** ay nagtatanggal ng theme mula sa view at sa gayon ay nililimitahan ang kakayahang pumili at i-activate ito.

![Themes tab](/img/config/product-themes.png)

Ang **behavior** selection ay nagpapahintulot sa network administrator na tukuyin ang state ng theme sa paglikha ng customer site.

Sa **Available** state, ang theme ay ginagawang available sa customer para sa self-activation. Sa kabilang banda, ang **Not Available** state ay nagtatanggal sa customer ng kakayahang i-activate ang theme. Panghuli, ang **Force Activate** option ay pinipilit ang pagpili at pag-activate ng theme kaya ito ay itinakda bilang default sa paglikha ng site.

#### Plugins

Katulad ng Themes tab, ang Ultimate Multisite ay nagpapahintulot sa network administrator na tukuyin ang visibility ng plugins sa mga customer pati na rin ang kanilang state sa paglikha ng bagong site.

![Plugins tab](/img/config/product-plugins.png)

Ang **visibility** drop-down ay nagpapahintulot na ang plugin ay maaaring maging visible o nakatago mula sa customer kapag tinitingnan sa kanilang site sa pamamagitan ng Plugins menu option.

Maaari pang manipulahin ng network administrator ang behavior ng mga plugins sa pamamagitan ng paggamit ng mga options sa behavior drop-down.

![Plugins tab](/img/config/product-plugins.png)

Ang **Default** selection ay iginalang ang plugin state na tinukoy sa site template na pinili ng customer. Kaya ang mga plugins na na-activate sa loob ng template ay mananatiling activated kapag ang template ay na-clone sa site ng customer.

Ang **Force Activate** ay naglalagay ng plugin sa active state sa paglikha ng site at sa kabilang banda ang **Force Inactivate** ay nagde-deactivate ng plugin sa paglikha ng site. Sa parehong mga pangyayaring ito, ang state ng plugin ay maaaring manu-manong baguhin ng customer sa pamamagitan ng kanilang WordPress Plugins menu.

Ang **Force Activate & Lock** setting ay gumagana nang katulad ngunit pinipigilan ang plugin state na mabago ng customer. Kaya ang setting na Force Activate and Lock ay pipilitin ang plugin sa active state nito at pipigilan ang customer na i-deactivate ito. Gayundin, ang **Force Inactivate & Lock** setting ay pipilitin ang plugin sa inactive state nito at pipigilan ang user na i-activate ang plugin.

Maaaring isaalang-alang ng network administrator ang Force Activate & Lock at Force Inactivate & Lock settings kasabay ng site templates dahil ang mga plugins at plugin states sa loob ng templates ay maaaring maapektuhan ng mga settings na ito kung napili.

#### Reset Limitations

Ang **Reset Limitations** tab ay nagre-reset ng lahat ng custom limits na tinukoy sa product. Para i-reset ang limitations, i-click ang **reset limitations** button.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Para kumpirmahin ang aksyon, i-slide ang **confirm reset** toggle sa active state nito sa kanan at i-click ang **reset limitations** button.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## I-edit, I-duplicate, o I-delete ang Product

Ang mga existing products ay maaaring i-edit, i-duplicate o i-delete sa pamamagitan ng pag-navigate sa **Ultimate Multisite > Products** at pag-hover sa existing product name.

![Product hover actions](/img/config/product-hover-actions.png)
