---
title: Paano I-configure ang Domain Mapping
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Paano I-configure ang Pagmamapa ng Domain (v2)

_**MAHALAGANG TALA: Tinutukoy ng artikulong ito ang Ultimate Multisite bersyon 2.x.**_

Isa sa pinakamakapangyarihang tampok ng isang premium na network ay ang kakayahang mag-alok sa ating mga kliyente ng pagkakataong mag-attach ng top-level domain sa kanilang mga sityo. Pagkatapos ng lahat, alin ang mas mukhang propesyonal: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Kaya iniaalok ng Ultimate Multisite ang tampok na iyon na built-in, nang hindi kailangang gumamit ng mga pandagdag mula sa third party.

## Ano ang pagmamapa ng domain?

Gaya ng ipinahihiwatig ng pangalan, ang pagmamapa ng domain ay ang kakayahang iniaalok ng Ultimate Multisite na tumanggap ng kahilingan para sa isang custom na domain at imapa ang kahilingang iyon sa kaukulang sityo sa network na may naka-attach na partikular na domain na iyon.

### Paano i-setup ang pagmamapa ng domain sa iyong Ultimate Multisite Network

Nangangailangan ng ilang pagse-setup mula sa iyo ang pagmamapa ng domain para gumana. Mabuti na lang, ino-automate ng Ultimate Multisite ang mahirap na gawain para madali mong matugunan ang mga kinakailangan.

Sa panahon ng pag-install ng Ultimate Multisite, awtomatikong kokopyahin at ii-install ng wizard ang **sunrise.php** sa itinakdang folder. **Hindi ka papayagan ng wizard na magpatuloy hanggang makumpleto ang hakbang na ito**.

<!-- Hindi available ang screenshot: Ultimate Multisite installation wizard na may hakbang na sunrise.php -->

Ibig sabihin nito, kapag natapos na ng installation wizard ng Ultimate Multisite ang pagse-setup ng iyong network, maaari mo nang simulan agad ang pagmamapa ng custom na domain.

Tandaan na hindi mandatoryo ang pagmamapa ng domain sa Ultimate Multisite. May opsyon kang gamitin ang native na function ng pagmamapa ng domain ng WordPress Multisite o anumang iba pang solusyon sa pagmamapa ng domain.

Kung kailangan mong i-disable ang pagmamapa ng domain ng Ultimate Multisite upang bigyang-daan ang ibang mga solusyon sa pagmamapa ng domain, maaari mong i-disable ang tampok na ito sa ilalim ng **Ultimate Multisite > Mga Setting > Pagmamapa ng Domain**.

![Pahina ng mga setting ng Pagmamapa ng Domain na nagpapakita ng admin redirect, mensahe ng pagmamapa at mga opsyon sa DNS](/img/config/domain-mapping-settings.png)

Sa mismong ibaba ng opsyong ito, makikita mo rin ang opsyong **Puwersahang Admin Redirect**. Pinapayagan ka ng opsyong ito na kontrolin kung maa-access ng iyong mga customer ang kanilang admin dashboard kapwa sa kanilang custom na domain at subdomain o sa isa lamang sa mga ito.

Kung pipiliin mo ang **Puwersahang i-redirect sa mapped domain** , maa-access lamang ng iyong mga customer ang kanilang admin dashboard sa kanilang mga custom na domain.

Gagawin ng opsyong **Puwersahang i-redirect sa** **network domain** ang eksaktong kabaligtaran - papayagan lamang ang iyong mga customer na ma-access ang kanilang mga dashboard sa kanilang subdomain, kahit na sinusubukan nilang mag-sign in sa kanilang mga custom na domain.

At pinapayagan sila ng opsyong **Payagan ang access sa admin gamit ang parehong mapped domain domain at network domain** na ma-access ang kanilang mga admin dashboard kapwa sa subdomain at custom na domain.

![Naka-expand na dropdown ng Admin Redirect na nagpapakita ng tatlong opsyon sa redirect](/img/config/domain-mapping-redirect-options.png)

May dalawang paraan para imapa ang isang custom na domain. Ang una ay sa pamamagitan ng pagmamapa ng domain name mula sa iyong network admin dashboard bilang super admin at ang pangalawa ay sa pamamagitan ng admin dashboard ng subsityo sa ilalim ng pahina ng Account.

Ngunit bago mo simulang imapa ang custom na domain sa isa sa mga subsityo sa iyong network, kakailanganin mong tiyaking maayos na naka-configure ang **mga setting ng DNS** ng domain name.

###

### Pagtiyak na maayos na naka-configure ang mga setting ng DNS ng domain

Para gumana ang pagmamapa, kailangan mong tiyaking nakaturo ang domain na plano mong imapa sa IP address ng iyong Network. Tandaan na kailangan mo ang IP address ng Network - ang IP address ng domain kung saan naka-install ang Ultimate Multisite - hindi ang IP address ng custom na domain na gusto mong imapa. Para hanapin ang IP address ng isang partikular na domain, iminumungkahi naming pumunta sa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), halimbawa.

Para maimapa nang tama ang domain, kailangan mong magdagdag ng **A RECORD** sa iyong configuration ng **DNS** na nakaturo sa **IP address** na iyon. Malaki ang pagkakaiba-iba ng pamamahala ng DNS sa pagitan ng iba't ibang domain registrar, ngunit maraming tutorial online na tumatalakay dito kung hahanapin mo ang " _Creating A Record on XXXX_ " kung saan ang XXXX ay ang iyong domain registrar (hal.: " _Creating A Record on_ _GoDaddy_ ").

Kung nahihirapan kang paandarin ito, **makipag-ugnayan sa support ng iyong domain registrar** at matutulungan ka nila sa bahaging ito.

Kung plano mong payagan ang iyong mga kliyente na imapa ang sarili nilang mga domain, sila mismo ang kailangang gumawa ng trabaho sa bahaging ito. Ituro sila sa support system ng kanilang registrar kung hindi nila magawang lumikha ng A Record.

### Pagmamapa ng custom na domain name bilang Super Admin

Kapag naka-log in ka bilang super admin sa iyong network, madali kang makakapagdagdag at makakapamahala ng mga custom na domain name sa pamamagitan ng pagpunta sa ilalim ng **Ultimate Multisite > Mga Domain**.

![Pahina ng listahan ng mga Domain sa Ultimate Multisite](/img/admin/domains-list.png)

Sa ilalim ng pahinang ito, maaari mong i-click ang button na **Magdagdag ng Domain** sa itaas at magbubukas ito ng modal window kung saan maaari mong itakda at punan ang **custom na domain name** , **ang subsityo** kung saan mo gustong ilapat ang custom na domain name, at magpasya kung gusto mo itong itakda bilang **primary domain** name o hindi (tandaan na maaari mong imapa ang **maramihang domain name sa isang subsityo**).

![Modal ng Magdagdag ng Domain na may domain name, tagapili ng sityo at toggle ng primary domain](/img/admin/domain-add-modal.png)

Matapos ilagay ang lahat ng impormasyon, maaari mo nang i-click ang button na **Magdagdag ng Umiiral na Domain** sa ibaba.

Sisimulan nito ang proseso ng pag-verify at pagkuha ng impormasyon ng DNS ng custom na domain. Makakakita ka rin ng log sa ibaba ng pahina para masundan mo ang prosesong dinaraanan nito. Maaaring tumagal ng ilang minuto bago makumpleto ang prosesong ito.

Gumagawa rin ang Ultimate Multisite v2.13.0 ng panloob na rekord ng domain nang awtomatiko kapag nilikha ang bagong site sa isang host na dapat ituring bilang domain bawat site. Kung ang host ay pangunahing domain ng network, o isa sa mga shared na base domain ng checkout form na naka-configure sa isang **URL ng site** na field, nilalaktawan ang awtomatikong rekord ng naka-map na domain upang manatiling available ang shared na base domain sa bawat site na gumagamit nito.

Kapag nagrehistro ang isang customer ng bagong domain sa pamamagitan ng Domain Seller v1.3.0 o mas bago, awtomatikong ima-map ng Ultimate Multisite ang nakarehistrong domain sa network site ng customer bilang default. Hindi na kailangang magdagdag ng mga administrator ng hiwalay na rekord ng naka-map na domain pagkatapos ng matagumpay na pagpaparehistro maliban kung gusto nilang isaayos ang mga opsyon gaya ng flag ng pangunahing domain, estado ng pag-activate, o paghawak ng SSL.

Dapat magbago ang **Yugto** o ang status mula **Sinusuri ang DNS** patungong **Handa** kung maayos na naka-set up ang lahat.

<!-- Hindi available ang screenshot: Row ng domain na ipinapakita ang yugtong Sinusuri ang DNS sa listahan ng mga domain -->

<!-- Hindi available ang screenshot: Row ng domain na ipinapakita ang yugtong Handa kasama ang berdeng tagapagpahiwatig ng status -->

Kung iki-click mo ang pangalan ng domain, makikita mo ang ilang opsyon sa loob nito. Tingnan natin ang mga ito nang mabilis:

![Pahina ng detalye ng domain na may mga toggle para sa yugto, site, aktibo, pangunahing domain, at SSL](/img/admin/domain-edit.png)

**Yugto:** Ito ang yugto kung nasaan ang domain. Kapag una mong idinagdag ang domain, malamang na nasa yugtong **Sinusuri ang DNS** ito. Susuriin ng proseso ang mga entry ng DNS at kukumpirmahing tama ang mga ito. Pagkatapos, ilalagay ang domain sa yugtong **Sinusuri ang SSL**. Susuriin ng Ultimate Multisite kung may SSL ang domain o wala at ikakategorya ang iyong domain bilang **Handa** o **Handa (walang SSL)**.

**Site:** Ang subdomain na nauugnay sa domain na ito. Ipapakita ng naka-map na domain ang nilalaman ng partikular na site na ito.

**Aktibo:** Maaari mong i-toggle ang opsyong ito nang naka-on o naka-off upang i-activate o i-deactivate ang domain.

**Pangunahing Domain ba?:** Maaaring magkaroon ang iyong mga customer ng higit sa isang naka-map na domain para sa bawat site. Gamitin ang opsyong ito upang piliin kung ito ang pangunahing domain para sa partikular na site.

**Secure ba?:** Kahit sinusuri ng Ultimate Multisite kung may SSL certificate ang domain o wala bago ito i-enable, maaari mong manu-manong piliing i-load ang domain nang may SSL certificate o wala. Tandaan na kung walang SSL certificate ang website at susubukan mong piliting i-load ito gamit ang SSL, maaari itong magbigay sa iyo ng mga error.

### Pagmamapa ng custom na pangalan ng domain bilang user ng subsite

Maaari ring mag-map ang mga administrator ng subsite ng mga custom na pangalan ng domain mula sa kanilang subsite admin dashboard.

Una, kailangan mong tiyaking i-enable ang opsyong ito sa ilalim ng mga setting ng **pagmamapa ng domain**. Tingnan ang screenshot sa ibaba.

<!-- Hindi available ang screenshot: Mga setting ng pagmamapa ng domain na nagpapahintulot sa mga user ng subsite na mag-map ng mga domain sa pamamagitan ng toggle ng Customer DNS Management -->

Maaari mo ring itakda o i-configure ang opsyong ito sa antas ng **Plano** o sa mga opsyon ng produkto sa **Ultimate Multisite > Mga Produkto**.

![Seksyon ng Mga Custom na Domain sa pahina ng pag-edit ng produkto](/img/config/product-custom-domains.png)

Kapag na-enable ang alinman sa mga opsyong iyon at pinapayagan ang isang user ng subsite na mag-map ng mga custom na pangalan ng domain, dapat makita ng user ng subsite ang isang metabox sa ilalim ng pahina ng **Account** na tinatawag na **Mga Domain**.

<!-- Hindi available ang screenshot: Metabox ng Mga Domain sa pahina ng Account ng subsite na may button na Magdagdag ng Domain -->

Maaaring i-click ng user ang button na **Magdagdag ng Domain** at magbubukas ito ng modal window na may ilang tagubilin.

<!-- Hindi available ang screenshot: Modal ng Magdagdag ng Domain na nagpapakita ng mga tagubilin sa DNS A-record para sa mga user ng subsite -->

Pagkatapos ay maaaring i-click ng user ang **Susunod na Hakbang** at magpatuloy sa pagdaragdag ng custom na pangalan ng domain. Maaari rin nilang piliin kung ito ang magiging pangunahing domain o hindi.

<!-- Hindi available ang screenshot: Form ng Magdagdag ng Domain na may field ng custom na pangalan ng domain at toggle ng pangunahing domain -->

<!-- Hindi available ang screenshot: Hakbang ng kumpirmasyon ng Magdagdag ng Domain na nagti-trigger ng pag-verify ng DNS -->

Ang pag-click sa **Magdagdag ng Domain** ay magsisimula sa proseso ng pag-verify at pagkuha ng impormasyon ng DNS ng custom na domain.

### Tungkol sa Pag-sync ng Domain

Ang Pag-sync ng Domain ay isang proseso kung saan idinaragdag ng Ultimate Multisite ang custom na pangalan ng domain sa iyong hosting account bilang add-on domain **upang gumana ang pagmamapa ng domain**.

Awtomatikong nangyayari ang pag-sync ng domain kung may integrasyon ang iyong hosting provider sa feature na pagmamapa ng domain ng Ultimate Multisite. Sa kasalukuyan, ang mga hosting provider na ito ay _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ at _Cpanel._

Kapag aktibo ang integrasyon ng host provider, maaari ring i-enqueue ng Ultimate Multisite ang gawain sa panig ng provider para sa paggawa ng DNS o subdomain para sa mga bagong likhang site. Kung walang integrasyong nakikinig para sa gawaing iyon, nilalaktawan ang background job upang maiwasan ang mga entry sa queue na walang ginagawa. Patuloy na tumatakbo ang mga pagsusuri sa DNS at SSL para sa mga naka-map na domain sa pamamagitan ng normal na proseso ng yugto ng domain.

Kailangan mong i-activate ang integrasyong ito sa mga setting ng Ultimate Multisite sa ilalim ng tab na **Integrasyon**.

![Tab ng mga Integrasyon sa mga setting ng Ultimate Multisite na nagpapakita ng mga hosting provider](/img/config/integrations-tab.png)

<!-- Hindi available ang screenshot: Mga link ng Configuration ng hosting provider sa tab ng mga setting ng Integrations -->

_Tandaan na kung ang iyong hosting provider ay hindi isa sa mga provider na nabanggit sa itaas, **kailangan mong manu-manong i-sync o idagdag ang pangalan ng domain** sa iyong hosting account._
