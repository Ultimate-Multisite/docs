---
title: Paano I-configure ang Domain Mapping
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Paano Mag-configure ng Domain Mapping (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Isa sa pinakamakapangyarihang feature ng isang premium network ay ang kakayahang magbigay sa ating mga kliyente ng pagkakataong ikabit ang top-level domain (TLD) sa kanilang mga site. Pagkatapos, alin ang mas propesyonal: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Kaya naman, inaalok ng Ultimate Multisite ang feature na iyan nang direkta sa sistema, nang hindi na kailangan gumamit ng third-party plugins.

## Ano ang domain mapping?

Gaya ng pangalan nito, ang domain mapping ay ang kakayahan ng Ultimate Multisite na tanggapin ang kahilingan para sa custom domain at iugnay (map) ang kahilingang iyon sa katumbas na site sa network na may kaukulang domain na nakakabit.

### Paano mag-set up ng domain mapping sa iyong Ultimate Multisite Network

Kailangan itong magkaroon ng ilang pag-setup mula sa panig mo para gumana. Salamat, awtomatiko ng Ultimate Multisite ang mahirap na trabaho para sa iyo para madali mong matupad ang mga kinakailangan.

Sa panahon ng instalasyon ng Ultimate Multisite, awtomatikong kopyahin at i-install ng wizard ang **sunrise.php** sa itinalagang folder. Hindi ka papayagan ng wizard na magpatuloy hangga't hindi natatapos ang hakbang na ito.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ibig sabihin, kapag natapos na ang Ultimate Multisite installation wizard sa pag-set up ng iyong network, maaari mo nang simulan ang domain mapping para sa custom domain agad.

Tandaan na ang domain mapping sa Ultimate Multisite ay hindi mandatoryo. Mayroon kang opsyon na gumamit ng native WordPress Multisite domain mapping function o anumang ibang solusyon sa domain mapping.

Kung kailangan mong i-disable ang domain mapping ng Ultimate Multisite para magbigay daan sa ibang mga solusyon sa domain mapping, maaari mo itong i-disable sa ilalim ng **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Diretso sa ibaba nito, makikita mo rin ang opsyon na **Force Admin Redirect**. Ang opsyong ito ay nagbibigay sa iyo na kontrolin kung ang mga customer ay makakapasok sa kanilang admin dashboard gamit ang kanilang custom domain at subdomain o sa isa lang sa kanila.

Kung pipiliin mo ang **Force redirect to mapped domain**, ang mga customer mo ay makakapasok lamang sa kanilang admin dashboard gamit ang kanilang custom domains.

Ang opsyon na **Force redirect to network domain** naman ay gagawin ang kabaligtaran—ang mga customer mo ay papayagan lang mag-access ng kanilang dashboard sa kanilang subdomain, kahit sinusubukan nilang mag-sign in sa kanilang custom domains.

At ang opsyon na **Allow access to the admin by both mapped domain domain and network domain** naman ay pinapayagan silang ma-access ang kanilang mga admin dashboard pareho sa subdomain at sa custom domain.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

May dalawang paraan para i-map ang isang custom domain. Una ay sa pamamagitan ng pag-map ng pangalan ng domain mula sa network admin dashboard mo bilang super admin, at pangalawa naman ay sa pamamagitan ng subsite admin dashboard sa ilalim ng account page.

Ngunit bago ka magsimula sa pag-map ng custom domain sa isa sa mga subsites sa iyong network, kailangan mong siguraduhin na ang **DNS settings** ng pangalan ng domain ay tama ang pagkaka-configure.

###

### Siguraduhin na tama ang pag-configure ng DNS settings ng domain

Para gumana ang mapping, kailangan mong siguraduhin na ang domain na plano mong i-map ay nakatuturo sa IP address ng iyong Network. Tandaan mo na kailangan mo ang Network IP address—ang IP address ng domain kung saan naka-install ang Ultimate Multisite—hindi ang IP address ng custom domain na gusto mong i-map. Para maghanap ng IP address ng isang partikular na domain, iminumungkahi namin na pumunta ka sa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), halimbawa.

Para maayos na ma-map ang domain, kailangan mong magdagdag ng **A RECORD** sa iyong **DNS** configuration na tumuturo sa **IP address** na iyon. Ang pamamahala ng DNS ay malaki ang pagkakaiba depende sa iba't ibang domain registrar, pero maraming tutorials online tungkol diyan kung hahanapin mo ang " _Creating A Record on XXXX_ " kung saan ang XXXX ay ang iyong domain registrar (halimbawa: " _Creating A Record on_ _GoDaddy_ ").

Kung nahihirapan ka sa pagpapatakbo nito, **makipag-ugnayan sa support ng iyong domain registrar** at sila ang makakatulong sa bahaging ito.

Kung plano mong payagan ang iyong mga kliyente na i-map ang kanilang sariling mga domain, kailangan nilang gawin ang trabahong ito nang mag-isa. Ituro mo sa kanila ang sistema ng support ng kanilang registrar kung hindi nila kaya gumawa ng A Record.

### Pag-map ng custom domain name bilang Super Admin

Kapag naka-log in ka bilang super admin sa iyong network, madali mong mai-add at mai-manage ang mga custom domain name sa pamamagitan ng pagpunta sa ilalim ng **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Sa ilalim ng pahinang ito, maaari mong i-click ang **Add Domain** button sa itaas at magbubukas ito ng isang modal window kung saan maaari mong itakda at punan ang **custom domain name**, **ang subsite** na nais mong gamitin para sa custom domain name, at magdesisyon kung gusto mo itong gawing **primary domain** o hindi (tandaan na maaari kang mag-map ng **maraming domain name sa iisang subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Pagkatapos mong ilagay ang lahat ng impormasyon, maaari mo nang i-click ang **Add Existing Domain** button sa ibaba.

Magsisimula ito ng proseso ng pag-verify at pagkuha ng DNS information ng custom domain. Makikita mo rin ang isang log sa ibaba ng pahina para masubaybayan mo ang prosesong pinagdadaanan nito. Maaaring tumagal itong ilang minuto bago matapos.

Ang Ultimate Multisite v2.13.0 ay awtomatikong lumilikha ng internal domain record kapag may bagong site na ginawa sa isang host na dapat ituring na per-site domain. Kung ang host ay ang primary domain ng network, o isa sa mga shared checkout-form base domains na naka-configure sa field na **Site URL**, hindi skip ang automatic mapped-domain record para manatiling available ang shared base domain para sa bawat site na gumagamit nito.

Ang **Stage** o status ay magbabago mula sa **Checking DNS** patungo sa **Ready** kung lahat ay tama ang setup.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Kung i-click mo ang domain name, makikita mo ang ilang opsyon sa loob nito. Tingnan natin muna ang mga ito:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Ito ang yugto kung nasaan ang domain mo. Kapag unang nagdagdag ka ng domain, malamang nasa **Checking DNS** stage ito. Titingnan ng proseso ang mga DNS entries at i-confirm na tama sila. Pagkatapos, ilalagay ang domain sa **Checking SSL** stage. Titingnan ng Ultimate Multisite kung may SSL ba ang domain o wala, at ikokategorya nito ang iyong domain bilang **Ready** o **Ready (without SSL)**.

**Site:** Ito ang subdomain na konektado sa domain na ito. Ang naka-map na domain ay magpapakita ng content ng partikular na site na ito.

**Active:** Maaari mong i-toggle ito para i-activate o i-deactivate ang domain mo.

**Is Primary Domain?:** Maaaring magkaroon ng higit sa isang naka-map na domain ang iyong mga customer para sa bawat site. Gamitin ang opsyong ito para piliin kung ito ba ang pangunahing domain para sa partikular na site.

**Is Secure?:** Kahit na tinitignan ng Ultimate Multisite kung may SSL certificate ba ang domain bago ito i-enable, maaari mo itong manu-manong piliin para i-load ang domain nang may o walang SSL certificate. Tandaan na kung ang website ay walang SSL certificate at susubukan mong pilitin itong mag-load ng SSL, maaaring magbigay ito ng error.

### Pag-mapa ng custom domain name bilang Subsite user

Maa rin i-mapa ng mga subsite administrator ang custom domain names mula sa kanilang subsite admin dashboard.

Una, kailangan mong siguraduhin na naka-enable ang opsyong ito sa ilalim ng **Domain mapping** settings. Tingnan ang screenshot sa ibaba.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Maa mo ring i-set o i-configure ang opsyong ito sa ilalim ng **Plan** level o product options sa **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Kapag naka-enable ang alinman sa mga opsyong iyon at pinapayagan ang user ng subsite na mag-map ng custom domain names, makikita ng user ng subsite ang isang metabox sa ilalim ng pahinang **Account** na tinatawag na **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Maaaring i-click ng user ang **Add Domain** button at magbubukas ito ng isang modal window na may ilang mga tagubilin.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Pagkatapos, maaaring i-click ng user ang **Next Step** at ituloy ang pagdaragdag ng custom domain name. Maaari rin nilang piliin kung ito ba ay magiging primary domain o hindi.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Ang pag-click sa **Add Domain** ay magsisimula ng proseso ng pag-verify at pagkuha ng impormasyon ng DNS ng custom domain.

### Tungkol sa Domain Syncing

Ang Domain Syncing ay isang proseso kung saan idinadagdag ng Ultimate Multisite ang custom domain name sa iyong hosting account bilang isang add-on domain **para gumana ang domain mapping**.

Awtomatikong nangyayari ang domain syncing kung may integrasyon ang iyong hosting provider sa feature ng domain mapping ng Ultimate Multisite. Sa kasalukuyan, ang mga hosting provider na ito ay _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ at _Cpanel._

Kapag aktibo ang host-provider integration, maaari ring i-enqueue ng Ultimate Multisite ang task ng DNS o paglikha ng subdomain sa panig ng provider para sa mga bagong nilikhang site. Kung walang integrasyong nakikinig para sa task na iyon, hindi skip ang background job upang maiwasan ang mga no-op queue entries. Ang mga DNS at SSL check para sa mga naka-map na domain ay patuloy na tumatakbo sa normal na proseso ng domain stage.

Kailangan mong i-activate ang integration na ito sa Ultimate Multisite settings sa ilalim ng tab na **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Tandaan na kung ang iyong hosting provider ay wala sa mga provider na nabanggit sa itaas, **kailangan mong i-sync o manu-manong idagdag ang domain name** sa iyong hosting account._
