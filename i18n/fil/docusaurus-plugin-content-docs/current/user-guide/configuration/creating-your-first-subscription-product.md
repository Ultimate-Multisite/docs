---
title: Paglikha ng Iyong Unang Produktong Pang-suskripsyon
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Paglikha ng Iyong Unang Produkto ng Suskripsiyon (v2) {#creating-your-first-subscription-product-v2}

_**MAHALAGANG TALA: Ang artikulong ito ay para lamang sa mga gumagamit ng Ultimate Multisite bersyon 2.x. Kung gumagamit ka ng bersyon 1.x,**_ **_**tingnan ang artikulong ito**_**.

Upang simulang patakbuhin ang iyong network at magsimulang ibenta ang iyong mga serbisyo sa mga potensyal na gumagamit, kailangan mong magkaroon ng iba’t ibang opsyon sa suskripsiyon. Paano mo ginagawa ang mga produktong ito? Ano ang mga uri ng produktong maaari mong ialok? Sa artikulong ito, tatalakayin natin ang lahat ng kailangan mong malaman tungkol sa mga produkto.

## Uri ng Produkto {#product-type}

Sa Ultimate Multisite maaari kang mag-alok ng dalawang kategorya ng mga produkto sa iyong mga kliyente: **mga plano** at **mga dagdag** **(Dagdag sa Order)**. Maaaring hatiin ang mga dagdag sa dalawang uri:**mga pakete** at **mga serbisyo**. Titingnan natin ang kanilang mga pagkakaiba at katangian sa susunod.

  * **Mga plano** : ang pangunahing produkto ng Ultimate Multisite. Maaari lamang magkaroon ng pagiging kasapi ang iyong kliyente kung nakakabit ito sa isang plano. Nagbibigay ang isang plano sa iyong mga kliyente ng isa o higit pang mga site (depende ito sa mga configuration ng iyong plano) na may mga limitasyong itinakda mo sa pahina ng pag-edit ng iyong produkto.

  * **Mga pakete** : mga dagdag na direktang nakaaapekto sa mga functionality ng mga plano ng Ultimate Multisite. Binabago nila ang mga limitasyon o nagdaragdag ng mga bagong resource, plugin, o theme sa orihinal na planong binili ng iyong kliyente. Halimbawa, maaaring magpahintulot ang isang pangunahing plano ng 1,000 pagbisita kada buwan at maaari kang magbigay ng pakete na nagpapalawak sa bilang na ito hanggang 10,000.

  * **Mga serbisyo:** mga dagdag na hindi nagbabago sa mga functionality ng Ultimate Multisite. Ang mga ito ay mga gawaing isasagawa mo para sa iyong kliyente bilang karagdagan sa planong binili nila. Halimbawa, maaaring bumili ang iyong customer ng planong nagpapahintulot ng isang site at magbayad rin para sa dagdag na serbisyo na gagawa ng disenyo ng site na ito.

## Pamamahala ng mga Produkto {#managing-products}

Para sa marami, ang tab na **Mga Produkto** sa Ultimate Multisite **(Ultimate Multisite > Mga Produkto)** ay maihahambing sa mga plano sa isang tradisyonal na hosting environment.

Sa loob ng Ultimate Multisite, tinutukoy ng tab na Mga Produkto ang balangkas at mga limitasyong naaangkop sa isang partikular na produkto o serbisyo. Saklaw ng mga ganitong balangkas ang paglalarawan ng produkto o serbisyo, presyo, buwis, at mga pahintulot.

Gagabayan ng seksyong ito ang iyong pag-unawa sa mahalagang batayang bahagi ng Ultimate Multisite.

![Pahina ng listahan ng mga produkto](/img/config/products-list.png)

## Pagdaragdag ng mga Produkto {#adding-products}

Plano man, pakete, o serbisyo, ang pasukan para sa pagtukoy ng bagong item ay sa pamamagitan ng **Ultimate Multisite > Mga Produkto > Magdagdag ng Produkto**.

![Button na Magdagdag ng Produkto](/img/config/product-add-button.png)

Naglalaman ang interface ng dalawang pangunahing seksyon. Sa kaliwa ay maraming tab na tumutulong sa pagtukoy ng produkto at sa kanan ay ilang seksyon upang tukuyin ang batayang presyo ng produkto, aktibong estado nito, at larawan ng produkto.

![Pangkalahatang-ideya ng pahina ng pag-edit ng produkto](/img/config/product-edit-full.png)

### Paglalarawan {#description}

Maaaring tukuyin ang pangunahing impormasyon ng produkto sa pamamagitan ng pagbibigay ng pangalan at paglalarawan ng produkto. Ipinapakita ang mga identifier na ito saanman kailangan ang impormasyon ng produkto gaya ng pagpili ng plano at presyo, mga invoice, upgrade, at mga katulad nito.

![Seksyon ng paglalarawan ng produkto](/img/config/product-description.png)

### Uri ng Pagpepresyo {#pricing-type}

Sa kanang bahagi ng interface, maaaring tukuyin ang batayang pagpepresyo.

![Seksyon ng pagpepresyo at pag-save](/img/config/product-pricing-save.png)

Sinusuportahan ng Ultimate Multisite ang tatlong magkakaibang uri ng pagpepresyo. Hinihingi ng opsyong **bayad** sa network administrator ang impormasyon tungkol sa presyo ng produkto at dalas ng pagsingil.

### Pagpepresyo {#pricing}

Tinutukoy ng bahagi ng presyo ang batayang presyo ng produkto at pagitan ng pagsingil.

![Seksyon ng pagpepresyo at pag-save](/img/config/product-pricing-save.png)

kaya ang halimbawang presyo na $29.99 na may setting na 1 buwan ay sisingil ng $29.99 bawat buwan. Gayundin, ang presyong $89.97 na may setting na 3 buwan ay sisingil ng halagang iyon bawat quarter.

### Mga Siklo ng Pagsingil {#billing-cycles}

Tinutukoy ng seksyon ng mga siklo ng pagsingil ang dalas ng nabanggit na pagitan ng pagsingil at karaniwang nauunawaan sa konteksto ng mga kontrata o nakapirming termino.

![Seksyon ng pagpepresyo at pag-save](/img/config/product-pricing-save.png)

Halimbawa, ang presyo ng produkto na $29.99 na may pagitan na 1 buwan at 12 siklo ng pagsingil ay sisingil ng $29.99 kada buwan para sa produkto sa susunod na 12 buwan. Sa madaling salita, magtatatag ang ganitong setting ng nakapirming presyong termino na $29.99 kada buwan sa loob ng 12 buwan at pagkatapos ay titigil ang pagsingil.

### Panahon ng Pagsubok {#trial-period}

Ang pag-enable sa toggle ng alok na pagsubok ay nagpapahintulot sa network administrator na tukuyin ang panahon ng pagsubok para sa produkto.

![Seksyon ng pagpepresyo at pag-save](/img/config/product-pricing-save.png)

Sa panahon ng pagsubok, malaya ang mga customer na gamitin ang produkto at hindi sila sisingilin hanggang matapos ang panahon ng pagsubok.

### Bayad sa Setup {#setup-fee}

Maaari ka ring maglapat ng bayad sa setup sa iyong plano.

![Seksyon ng pagpepresyo at pag-save](/img/config/product-pricing-save.png)

Ibig sabihin nito, magbabayad ang iyong kliyente ng dagdag na halaga sa unang singil (bilang karagdagan sa presyo ng plano) na tumutugma sa bayad na tinukoy mo sa seksyong ito.

### Aktibo {#active}

Epektibong tinutukoy ng toggle na aktibo kung available ang produkto sa mga customer para sa mga bagong sign-up.

![Toggle na aktibo](/img/config/product-active.png)

Kung may mga kasalukuyang customer sa planong ito, ang pagtatakda ng toggle sa disabled na estado nito ay epektibong nag-grandfather sa plano at inaalis ito sa mga susunod na sign-up. **Patuloy na sisingilin ang mga kasalukuyang customer sa plano** hanggang mailipat sila sa bagong plano o maalis mula sa plano.

### Larawan ng Produkto {#product-image}

Pinahihintulutan ng button na **Mag-upload ng Larawan** ang network administrator na gamitin ang media library upang pumili o mag-upload ng larawan ng produkto.

![Seksyon ng larawan ng produkto](/img/config/product-image.png)

### Tanggalin {#delete}

Tinatanggal ng button na **Tanggalin ang Produkto** ang produkto mula sa system. Lumilitaw ito kapag na-publish na ang produkto.

![Seksyon ng pagtanggal ng produkto](/img/config/product-delete.png)

Hindi tulad ng ibang pagtanggal, hindi inilalagay ang produkto sa anumang trash state. Kaya kapag natanggal na, hindi na mababawi ang aksyon.

### Mga Opsyon ng Produkto {#product-options}

Kapag natukoy na ang pangunahing impormasyon ng produkto, tumutulong ang mga opsyon ng produkto sa network administrator na higit pang tukuyin ang mga partikular na katangian ng produkto.

#### Pangkalahatan {#general}

Tinutukoy ng tab na **Pangkalahatan** ang mga pangkalahatang katangian ng produkto na hindi naaangkop sa alinman sa iba pang mga tab na partikular sa produkto.

![Tab na Pangkalahatan](/img/config/product-general-tab.png)

Tinutukoy ng malinaw na **slug ng produkto** ang slug kung saan nakikilala ang produkto sa mga URL at iba pang bahagi ng Ultimate Multisite.

Sinusuportahan ng Ultimate Multisite ang ilang uri ng produkto, gaya ng Plano, Pakete, at Serbisyo. Dinamikong inaangkop ang mga tab na **Mga Opsyon ng Produkto** depende sa tinukoy na uri ng produkto.

Tinutukoy ng **Tungkulin ng Customer** ang tungkuling itatalaga sa customer kapag ginawa ang site. Karaniwan, para sa karamihan ng network administrator, ito ay magiging default ng Ultimate Multisite o Administrator. Maaaring itakda ang default na tungkulin ng Ultimate Multisite sa **Ultimate Multisite > Settings > Login & Registration**.

![Mga setting ng tungkulin ng customer](/img/config/product-customer-role-settings.png)

#### Mga Pag-upgrade at Pag-downgrade {#up--downgrades}

Tinutukoy ng tab na ito ang mga landas ng pag-upgrade at pag-downgrade na available sa isang customer sa loob ng kanilang partikular na antas.

Upang maunawaan ang konseptong ito, isaalang-alang ang isang halimbawa kung saan nagbibigay ang isang niche na pag-install ng Ultimate Multisite ng mga solusyon sa pamamahala ng pagkatuto sa mga customer nito. Upang magawa ito, tinutukoy ang tatlong plano (Basic, Plus, at Premium) at ina-activate ang mga partikular na plugin para sa bawat plano (tingnan sa susunod na bahagi ng seksyong ito ang mga tagubilin kung paano mag-activate ng mga plugin).

Kung nagseserbisyo rin ang pag-install ng Ultimate Multisite sa mga website ng negosyo o mga website ng eCommerce, maaaring mangailangan ang mga planong iyon ng ibang mga plugin na mai-install at ma-activate.

Sa ganitong lawak, hindi kanais-nais at magiging problematiko na payagan ang mga customer ng eLearning na lumipat sa mga plano ng eCommerce dahil maaaring hindi angkop ang mga planong ito, pagpepresyo, at limitasyon.

Kaya upang limitahan ang landas ng customer at maiwasan ang mga insidente, maaaring tukuyin ng network administrator ang isang grupo ng plano at sa loob ng grupong iyon ay tukuyin ang mga planong maaaring lipatan ng customer.

![Tab na Mga Pag-upgrade at Pag-downgrade](/img/config/product-upgrades.png)

Upang tukuyin ang isang grupo ng plano, tukuyin ang mga katugmang plano sa loob ng listahan ng **grupo ng plano**. Tinutukoy ng **pagkakasunod-sunod ng produkto** kung paano inaayos at ipinapakita ang mga plano mula sa pinakamababa hanggang sa pinakamataas.

May kasama rin ang Ultimate Multisite na feature na **order bump** kung saan maaaring idagdag sa mga plano ang mga naaangkop na karagdagang produkto at serbisyo. Iniaalok ang mga ito sa customer bilang mga karagdagang item na maaaring idagdag sa mga plano sa pag-checkout o habang nag-a-upgrade.

#### Mga Variation ng Presyo {#price-variations}

Pinapayagan ng mga variation ng presyo ang network administrator na tukuyin ang mga alternatibong antas ng pagpepresyo depende sa tagal. Ginagawang posible ng setting na ito na mag-alok ng buwanan, kada tatlong buwan, taunang, o anumang iba pang panahon ng pagsingil para sa parehong produkto. Halimbawa, maaari kang mag-set up ng produkto sa $29.99/buwan na may may-diskuwentong taunang opsyon sa $249.99/taon.

![Tab na Mga Variation ng Presyo](/img/config/product-price-variations-tab.png)

Upang magtatag ng mga variation ng presyo, itakda ang toggle na **I-enable ang Mga Variation ng Presyo** sa active at i-click ang button na **Magdagdag ng bagong Variation ng Presyo**.

![Mga variation ng presyo ng produkto](/img/config/product-price-variations.png)

Upang maglagay ng variation, itakda ang tagal, panahon, at presyo ng variation. Maaaring maglagay ng karagdagang mga variation sa pamamagitan ng muling pag-click sa button.

Halimbawa, kung ang pangunahing presyo ng iyong produkto ay $29.99 bawat buwan, maaari kang magdagdag ng:

  * **3 Buwan** sa $79.99 (maliit na diskuwento kumpara sa buwanan)
  * **1 Taon** sa $249.99 (malaking diskuwento para sa taunang pangako)

:::tip Pagpapakita ng Toggle ng Panahon ng Pagsingil sa Frontend

Ang mga variation ng presyo lamang ay hindi nagdaragdag ng toggle o switch sa pag-checkout sa frontend. Upang payagan ang mga customer na lumipat sa pagitan ng mga panahon ng pagsingil (hal. Buwanan / Taunan), kailangan mong magdagdag ng field na **Pagpili ng Panahon** sa iyong form sa pag-checkout. Tingnan ang [Mga Form sa Pag-checkout: Pagdaragdag ng Toggle para sa Pagpili ng Panahon](checkout-forms#adding-a-period-selection-toggle) para sa sunod-sunod na mga tagubilin.
:::

#### Mga Buwis {#taxes}

Nakaayon ang tab na **Mga Buwis** sa mga setting ng buwis na tinukoy sa **Ultimate Multisite > Settings > Taxes** at, mas partikular, sa mga tinukoy na rate ng buwis. Upang i-enable ang mga buwis at tukuyin ang naaangkop na mga rate ng buwis, pakitingnan ang dokumentasyon sa **Ultimate Multisite: Settings**

![Tab na Mga Buwis](/img/config/product-taxes.png)

Sa isang naunang halimbawa, tinukoy natin ang lokal na rate ng buwis na 7.25% na naaangkop sa mga customer sa California (United States of America).

Kapag natukoy na ang rate ng buwis sa **Ultimate Multisite > Settings > Manage Tax Rates**, maaari na itong piliin sa antas ng produkto.

![Tab na Mga Buwis](/img/config/product-taxes.png)

Upang ipahiwatig na ang isang produkto ay item na may buwis, itakda ang toggle na **May Buwis** sa active at piliin ang naaangkop na rate ng buwis mula sa dropdown ng Kategorya ng Buwis.

#### Mga Template ng Site {#site-templates}

Sa pangkalahatan, ang mga template ng site ay kumpletong mga website ng WordPress na kino-clone sa site ng customer sa simula ng kanilang subscription.

![Tab na Mga Template ng Site](/img/config/product-site-templates.png)

Ginagawa at kino-configure ng network administrator ang template site bilang karaniwang WordPress site na may mga theme, plugin, at content na na-activate at na-configure. Kino-clone nang eksakto ang template site para sa customer.

Pinapayagan ng tab na ito ang network administrator na tukuyin ang gawi ng mga template ng site sa isang bagong subscription. Upang magamit ang mga template ng site para sa planong ito, itakda ang toggle na **Payagan ang Mga Template ng Site** sa active na estado nito.

Kapag naka-disable ang **Payagan ang Mga Template ng Site**, hindi makakapili ng mga template ang mga customer sa plano kahit na kung ang isang form sa pag-checkout, maibabahaging link, o parameter ng URL ay magpapahintulot sana na maging available ang mga template. Ipinapatupad na ngayon ng Ultimate Multisite ang limitasyong ito sa pamamagitan ng fallback chain sa mga available na entry point: unang sinusuri ang mga setting ng plano, pagkatapos ang mga setting ng template ng form sa pag-checkout, at pagkatapos ang mga paunang napili o ibinigay sa URL na mga template. Pinapanatili nitong pare-pareho ang mga limitasyon ng plano at pinipigilan ang paglitaw ng mga template para sa mga produktong hindi dapat mag-alok ng mga ito.

Ang **mode ng pagpili ng template ng sityo** ay tumutukoy sa asal ng mga template ng sityo habang isinasagawa ang proseso ng suskripsyon.

Sinusunod ng setting na **P** **aunang-takda** ang mga hakbang sa checkout form. Kung nagtakda ang tagapangasiwa ng network ng hakbang para sa pagpili ng template sa proseso ng checkout at ang hakbang ay tinukoy na may mga template, igagalang ng setting na ito ang mga direktibang itinakda sa hakbang ng checkout.

Ang pagtukoy sa **M** **agtalaga ng Template ng Sityo** ay pinipilit ang pagpili ng tinukoy na template. Dahil dito, inaalis ang anumang mga hakbang sa pagpili ng template sa proseso ng checkout.

Panghuli, ino-override ng **P** **umili ng Mga Available na Template ng Sityo** ang mga template na tinukoy sa hakbang ng checkout gamit ang mga template na pinili sa setting na ito. Maaari ring magtakda ng nakaunang pili na template upang tulungan ang kliyente sa pagpili.

Sa huli, kung nais ng tagapangasiwa ng network na mangyari ang pagpili ng template sa mga hakbang ng checkout, sapat na ang setting na ' _paunang-takda_ '. Bilang alternatibo, upang alisin at i-lock ang pagpili ng template at italaga ang pagpili sa mga setting ng plano, maaaring kanais-nais ang mga opsyong ' _magtalaga ng bagong template_ ' o ' _pumili ng mga available na template ng sityo_ '.

#### Mga Sityo {#sites}

Ang tab na **Mga Sityo** ay bahagi ng functionality ng mga limitasyon ng Ultimate Multisite.

![Tab na Mga Sityo](/img/config/product-sites.png)

Tinutukoy ng setting na ito ang pinakamataas na bilang ng mga sityo na maaaring gawin ng kliyente sa ilalim ng kanilang membership.

Upang paganahin ang limitasyon, itakda ang toggle na **limitahan ang mga sityo** sa aktibong estado nito at tukuyin ang pinakamataas na bilang ng mga sityo sa patlang na **alokasyon ng sityo**.

#### Mga Pagbisita {#visits}

Ang tab na **Mga Pagbisita** ay karagdagang bahagi ng sistema ng mga limitasyon ng Ultimate Multisite. Pinapayagan ng setting na ito ang pagtatala at kasunod na pag-throttle ng mga natatanging bisita sa sityo ng kliyente.

![Tab na Mga Pagbisita](/img/config/product-visits.png)

Mula sa pananaw ng marketing, magagamit ng mga tagapangasiwa ng network ang setting na ito bilang paraan upang hikayatin ang mga kliyente na i-upgrade ang kanilang plano kapag naabot na ang mga limitasyon. Makakatulong din ang setting na ito sa tagapangasiwa ng network na pigilan at maiwasan ang labis na trapiko sa mga sityo upang mapanatili ang mga yaman ng sistema.

Upang magamit ang feature na ito, itakda ang toggle na **limitahan ang mga natatanging pagbisita** sa aktibong estado nito at tukuyin ang pinakamataas na bilang ng mga natatanging bisita sa patlang na **quota ng natatanging pagbisita**.

Kapag naabot ang limitasyong ito, hihinto ang Ultimate Multisite sa pagsisilbi sa sityo ng kliyente sa halip na magpakita ng mensaheng nagsasaad na nalampasan ang mga limitasyon.

#### Mga User {#users}

Pinapayagan ng mga limitasyon sa 'Mga User' ng Ultimate Multisite ang tagapangasiwa ng network na magpatupad ng mga limitasyon sa bilang ng mga user na maaaring gawin at italaga sa mga tungkulin.

![Tab na Mga User](/img/config/product-users.png)

Upang paganahin ang feature ng mga limitasyon, itakda ang toggle na **limitahan ang user** sa aktibong estado nito sa pamamagitan ng pag-slide nito pakanan.

Susunod, para sa bawat tungkuling lilimitahan, itakda ang toggle sa tabi nito sa aktibong estado at tukuyin ang pinakamataas na limitasyon sa angkop na patlang.

#### Mga Uri ng Post {#post-types}

Pinapayagan ng tab na **Mga Uri ng Post** ang tagapangasiwa ng network na magpatupad ng detalyadong mga limitasyon sa malawak na hanay ng mga uri ng post sa loob ng WordPress.

![Tab na Mga Uri ng Post](/img/config/product-post-types.png)

Dahil sa pagkakabuo ng WordPress, ang mga post at mga uri ng post ay mahalagang bahagi ng pangunahing functionality nito, kaya idinisenyo ang sistema ng mga limitasyon ng Ultimate Multisite upang tulungan ang tagapangasiwa ng network sa pagtatakda at pagpapanatili ng mga limitasyon.

Upang paganahin ang subsystem ng mga limitasyong ito, itakda ang toggle na **limitahan ang mga uri ng post** sa aktibong estado nito sa pamamagitan ng pag-slide nito pakanan.

Susunod, para sa bawat uri ng post na lilimitahan, i-on ito sa pamamagitan ng pag-slide nito pakanan at pagtukoy ng pinakamataas na limitasyon sa angkop na patlang.

#### Espasyo sa Disk {#disk-space}

Pinapayagan ng tab na **Espasyo sa Disk** ang mga tagapangasiwa ng network na higpitan ang espasyong ginagamit ng mga kliyente.

![Tab na Espasyo sa Disk](/img/config/product-disk-space.png)

Karaniwan, sa isang WordPress multisite, ang mga pangunahing file ay ibinabahagi sa lahat ng sityo at gumagawa ng mga indibidwal na direktoryo para sa mga media file at mga upload kung saan nalalapat ang mga setting at limitasyong ito.

Upang paganahin ang limitasyon sa paggamit ng disk, itakda ang toggle na **limitahan ang laki ng disk bawat sityo** sa aktibong estado nito sa pamamagitan ng pag-slide nito pakanan.

Susunod, tukuyin ang pinakamataas na limitasyon sa megabytes sa patlang na **alokasyon ng espasyo sa disk**.

#### Custom Domain {#custom-domain}

Sa pamamagitan ng pag-toggle sa opsyong ito, maaari mong payagan ang mga custom domain sa planong ito nang partikular.

![Tab na Mga Custom Domain](/img/config/product-custom-domains.png)

#### Mga Tema {#themes}

Pinapayagan ng tab na **Mga Tema** sa loob ng mga opsyon ng produkto ang tagapangasiwa ng network na gawing available sa mga kliyente ang mga tema para sa pagpili at opsyonal na pilitin ang estado ng tema.

![Tab na Mga Tema](/img/config/product-themes.png)

_**Tala: Upang gawing available ang mga tema sa mga kliyente, dapat naka-enable ang mga ito sa network ng tagapangasiwa ng network.**_

![Pahina ng mga tema ng network](/img/config/product-themes-network-enabled.png)

Tinutukoy ng opsyong **visibility** kung nakikita o hindi ng kliyente ang temang ito kapag tinitingnan ang kanilang tab na **Appearance > Themes** sa loob ng kanilang sityo. Ang pagtatakda ng opsyong ito sa **Nakatago** ay nag-aalis sa tema sa view at sa gayon ay naghihigpit sa kakayahang piliin at i-activate ito.

![Tab na Mga Tema](/img/config/product-themes.png)

Pinapayagan ng pagpiling **behavior** ang tagapangasiwa ng network na tukuyin ang estado ng tema sa paggawa ng sityo ng kliyente.

Sa estadong **A** **vailable**, ginagawang available ang tema sa kliyente para sa sariling pag-activate. Sa kabaligtaran, inaalis ng estadong **Hindi Available** sa kliyente ang kakayahang i-activate ang tema. Panghuli, pinipilit ng opsyong **Puwersahang I-activate** ang pagpili at pag-activate ng tema kaya itinatakda ito bilang default sa paggawa ng sityo.

#### Mga Dagdag {#plugins}

Katulad ng tab na Mga Tema, pinapayagan ng Ultimate Multisite ang tagapangasiwa ng network na tukuyin ang visibility ng mga dagdag sa mga kliyente pati na rin ang kanilang estado sa paggawa ng bagong sityo.

![Tab na Mga Dagdag](/img/config/product-plugins.png)

Pinapayagan ng drop-down na **visibility** na maging nakikita o nakatago ang dagdag mula sa kliyente kapag tiningnan sa kanilang sityo sa pamamagitan ng opsyon sa menu na Mga Dagdag.

Mas higit pang makokontrol ng network administrator ang kilos ng mga plugin sa pamamagitan ng paggamit ng mga opsyon sa behavior drop-down.

![Tab ng Mga Plugin](/img/config/product-plugins.png)

Iginagalang ng pagpiling **Default** ang estado ng plugin na tinukoy sa template ng site na pinili ng customer. Kaya ang mga plugin na naka-activate sa loob ng template ay mananatiling naka-activate kapag na-clone ang template sa site ng customer.

Inilalagay ng **Force Activate** ang plugin sa aktibong estado sa paggawa ng site at kabaliktaran, dina-deactivate ng **Force Inactivate** ang plugin sa paggawa ng site. Sa parehong mga sitwasyong ito, maaaring manu-manong baguhin ng customer ang estado ng plugin sa pamamagitan ng kanilang WordPress Plugins menu.

Katulad ang paggana ng setting na **Force Activate & Lock** ngunit pinipigilan nitong mabago ng customer ang estado ng plugin. Kaya ang setting na Force Activate and Lock ay pipilitin ang plugin sa aktibong estado nito at pipigilan ang customer na i-deactivate ito. Gayundin, pipilitin ng setting na **Force Inactivate & Lock** ang plugin sa hindi aktibong estado nito at pipigilan ang user na i-activate ang plugin.

Maaaring naisin ng network administrator na isaalang-alang ang mga setting na Force Activate & Lock at Force Inactivate & Lock kasabay ng mga template ng site dahil ang mga plugin at mga estado ng plugin sa loob ng mga template ay maaaring maapektuhan ng mga setting na ito kung pinili.

#### I-reset ang Mga Limitasyon {#reset-limitations}

Nire-reset ng tab na **Reset Limitations** ang lahat ng custom na limitasyong tinukoy sa produkto. Upang i-reset ang mga limitasyon, i-click ang button na **reset limitations**.

![Tab ng Reset Limitations](/img/config/product-reset-limitations.png)

Upang kumpirmahin ang aksyon, i-slide ang toggle na **confirm reset** sa aktibong estado nito sa kanan at i-click ang button na **reset limitations**.

![Tab ng Reset Limitations](/img/config/product-reset-limitations.png)

## I-edit, I-duplicate, o I-delete ang Produkto {#edit-duplicate-or-delete-product}

Maaaring i-edit, i-duplicate, o i-delete ang mga umiiral na produkto sa pamamagitan ng pagpunta sa **Ultimate Multisite > Products** at pag-hover sa umiiral na pangalan ng produkto.

![Mga aksyon sa pag-hover sa Produkto](/img/config/product-hover-actions.png)
