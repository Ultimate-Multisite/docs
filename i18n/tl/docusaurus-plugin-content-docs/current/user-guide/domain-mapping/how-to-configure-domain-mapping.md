---
title: Paano I-configure ang Pagmamapa ng Domain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Paano I-configure ang Pagmamapa ng Domain (v2) {#how-to-configure-domain-mapping-v2}

_**MAHALAGANG TALA: Tumutukoy ang artikulong ito sa Ultimate Multisite bersyon 2.x.**_

Isa sa pinakamakapangyarihang tampok ng isang premium na network ay ang kakayahang mag-alok sa ating mga kliyente ng pagkakataong maglakip ng top-level domain sa kanilang mga sityo. Sa huli, alin ang mas mukhang propesyonal: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Iyon ang dahilan kung bakit iniaalok ng Ultimate Multisite ang tampok na iyon na nakapaloob na, nang hindi kailangang gumamit ng mga third-party na pandagdag.

## Ano ang pagmamapa ng domain? {#whats-domain-mapping}

Gaya ng ipinahihiwatig ng pangalan, ang pagmamapa ng domain ay ang kakayahang iniaalok ng Ultimate Multisite na tumanggap ng kahilingan para sa isang custom domain at imapa ang kahilingang iyon sa katumbas na sityo sa network na may nakakabit na partikular na domain na iyon.

### Paano i-setup ang pagmamapa ng domain sa iyong Ultimate Multisite Network {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Nangangailangan ang pagmamapa ng domain ng ilang pag-setup sa iyong bahagi upang gumana. Mabuti na lang, ina-automate ng Ultimate Multisite ang mahirap na trabaho para sa iyo upang madali mong matugunan ang mga kinakailangan.

Sa panahon ng pag-install ng Ultimate Multisite, awtomatikong kokopyahin at ii-install ng wizard ang **sunrise.php** sa itinalagang folder. **Hindi ka papayagan ng wizard na magpatuloy hanggang sa makumpleto ang hakbang na ito**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ibig sabihin nito, kapag natapos na ng installation wizard ng Ultimate Multisite ang pag-setup ng iyong network, maaari ka nang magsimulang magmapa ng custom domain kaagad.

Tandaan na hindi sapilitan ang pagmamapa ng domain sa Ultimate Multisite. May opsyon kang gamitin ang native na domain mapping function ng WordPress Multisite o anumang iba pang solusyon sa pagmamapa ng domain.

Kung kailangan mong i-disable ang pagmamapa ng domain ng Ultimate Multisite upang bigyang-daan ang iba pang solusyon sa pagmamapa ng domain, maaari mong i-disable ang tampok na ito sa ilalim ng **Ultimate Multisite > Settings > Domain Mapping**.

![Pahina ng mga setting ng Pagmamapa ng Domain na nagpapakita ng admin redirect, mensahe sa pagmamapa at mga opsyon sa DNS](/img/config/domain-mapping-settings.png)

Sa mismong ibaba ng opsyong ito, makikita mo rin ang opsyong **Force Admin Redirect**. Pinapayagan ka ng opsyong ito na kontrolin kung maa-access ng iyong mga customer ang kanilang admin Dashboard kapwa sa kanilang custom domain at subdomain o sa isa lamang sa mga ito.

Kung pipiliin mo ang **Force redirect to mapped domain** , maa-access lamang ng iyong mga customer ang kanilang admin Dashboard sa kanilang mga custom domain.

Gagawin ng opsyong **Force redirect to** **network domain** ang eksaktong kabaligtaran - papayagan lamang ang iyong mga customer na ma-access ang kanilang mga Dashboard sa kanilang subdomain, kahit na sinusubukang mag-sign in sa kanilang mga custom domain.

At pinapayagan sila ng opsyong **Allow access to the admin by both mapped domain domain and network domain** na ma-access ang kanilang mga admin Dashboard kapwa sa subdomain at sa custom domain.

![Nakabukas na dropdown ng Admin Redirect na nagpapakita ng tatlong opsyon sa pag-redirect](/img/config/domain-mapping-redirect-options.png)

May dalawang paraan upang imapa ang isang custom domain. Ang una ay sa pamamagitan ng pagmamapa ng pangalan ng domain mula sa iyong network admin Dashboard bilang super admin at ang pangalawa ay sa pamamagitan ng admin Dashboard ng subsityo sa ilalim ng pahina ng Account.

Ngunit bago ka magsimulang magmapa ng custom domain sa isa sa mga subsityo sa iyong network, kailangan mong tiyakin na maayos na naka-configure ang **mga setting ng DNS** ng pangalan ng domain.

###

### Pagtitiyak na maayos na naka-configure ang mga setting ng DNS ng domain {#making-sure-the-domain-dns-settings-are-properly-configured}

Para gumana ang pagmamapa, kailangan mong tiyakin na ang domain na balak mong imapa ay nakaturo sa IP address ng iyong Network. Tandaan na kailangan mo ang IP address ng Network - ang IP address ng domain kung saan naka-install ang Ultimate Multisite - hindi ang IP address ng custom domain na gusto mong imapa. Upang maghanap ng IP address ng isang partikular na domain, iminumungkahi naming pumunta sa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), halimbawa.

Upang maimapa nang tama ang domain, kailangan mong magdagdag ng **A RECORD** sa iyong configuration ng **DNS** na nakaturo sa **IP address** na iyon. Malaki ang pagkakaiba-iba ng pamamahala ng DNS sa pagitan ng iba't ibang domain registrar, ngunit maraming tutorial online na tumatalakay dito kung hahanapin mo ang " _Creating A Record on XXXX_ " kung saan ang XXXX ay ang iyong domain registrar (hal.: " _Creating A Record on_ _GoDaddy_ ").

Kung nahihirapan kang mapagana ito, **makipag-ugnayan sa suporta ng iyong domain registrar** at matutulungan ka nila sa bahaging ito.

Kung balak mong payagan ang iyong mga kliyente na imapa ang sarili nilang mga domain, sila mismo ang kailangang gumawa sa bahaging ito. Ituro sila sa support system ng kanilang registrar kung hindi nila magawang gumawa ng A Record.

### Pagmamapa ng custom domain name bilang Super Admin {#mapping-custom-domain-name-as-super-admin}

Kapag naka-log in ka bilang super admin sa iyong network, madali kang makakapagdagdag at makakapamahala ng mga custom domain name sa pamamagitan ng pagpunta sa ilalim ng **Ultimate Multisite > Domains**.

![Pahina ng listahan ng Mga Domain sa Ultimate Multisite](/img/admin/domains-list.png)

Sa ilalim ng pahinang ito, maaari mong i-click ang button na **Add Domain** sa itaas at magbubukas ito ng modal window kung saan maaari mong itakda at punan ang **custom domain name** , **ang subsityo** na nais mong paglagyan ng custom domain name, at magpasya kung gusto mo itong itakda bilang **pangunahing domain** name o hindi (tandaan na maaari kang magmapa ng **maraming domain name sa isang subsityo**).

![Modal ng Add Domain na may domain name, tagapili ng sityo at toggle ng pangunahing domain](/img/admin/domain-add-modal.png)

Pagkatapos ilagay ang lahat ng impormasyon, maaari mong i-click ang button na **Add Existing Domain** sa ibaba.

Sisimulan nito ang proseso ng pag-verify at pagkuha ng impormasyon ng DNS ng custom domain. Makakakita ka rin ng log sa ibaba ng pahina upang masundan mo ang prosesong pinagdaraanan nito. Maaaring tumagal ng ilang minuto bago makumpleto ang prosesong ito.

Lumilikha rin ang Ultimate Multisite v2.13.0 ng panloob na tala ng domain nang awtomatiko kapag may bagong sityong ginawa sa isang host na dapat ituring bilang per-site domain. Kung ang host ay ang pangunahing domain ng network, o isa sa mga nakabahaging base domain ng form ng pag-checkout na naka-configure sa isang field na **URL ng Sityo**, nilalaktawan ang awtomatikong tala ng naka-map na domain upang manatiling available ang nakabahaging base domain sa bawat sityong gumagamit nito.

Kapag nagrehistro ang isang customer ng bagong domain sa pamamagitan ng Domain Seller v1.3.0 o mas bago, awtomatikong mini-map ng Ultimate Multisite ang nairehistrong domain sa sityo ng network ng customer bilang default. Hindi na kailangang magdagdag ng mga administrator ng hiwalay na tala ng naka-map na domain pagkatapos ng matagumpay na rehistrasyon maliban kung gusto nilang isaayos ang mga opsyon gaya ng flag ng pangunahing domain, estado ng pag-activate, o paghawak ng SSL.

Dapat magbago ang **Yugto** o ang status mula **Sinusuri ang DNS** tungo sa **Handa** kung maayos na naka-set up ang lahat.

<!-- Hindi available ang screenshot: Hanay ng domain na nagpapakita ng yugtong Sinusuri ang DNS sa listahan ng mga domain -->

<!-- Hindi available ang screenshot: Hanay ng domain na nagpapakita ng yugtong Handa na may berdeng indicator ng status -->

Kung iki-click mo ang pangalan ng domain, makikita mo ang ilang opsyon sa loob nito. Tingnan natin ang mga ito nang mabilis:

![Pahina ng detalye ng domain na may mga toggle para sa yugto, sityo, active, primary at SSL](/img/admin/domain-edit.png)

**Yugto:** Ito ang yugto kung nasaan ang domain. Kapag una mong idinagdag ang domain, malamang na nasa yugtong **Sinusuri ang DNS** ito. Susuriin ng proseso ang mga entry ng DNS at kukumpirmahing tama ang mga ito. Pagkatapos, ilalagay ang domain sa yugtong **Sinusuri ang SSL**. Susuriin ng Ultimate Multisite kung may SSL ang domain o wala at ikakategorya ang iyong domain bilang **Handa** o **Handa (walang SSL)**.

**Sityo:** Ang subdomain na nauugnay sa domain na ito. Ipapakita ng naka-map na domain ang nilalaman ng partikular na sityong ito.

**Active:** Maaari mong i-toggle ang opsyong ito nang on o off upang i-activate o i-deactivate ang domain.

**Pangunahing Domain ba?:** Maaaring magkaroon ang iyong mga customer ng higit sa isang naka-map na domain para sa bawat sityo. Gamitin ang opsyong ito upang piliin kung ito ang pangunahing domain para sa partikular na sityo.

**Secure ba?:** Kahit sinusuri ng Ultimate Multisite kung may SSL certificate ang domain o wala bago ito i-enable, maaari mong manu-manong piliing i-load ang domain nang may o walang SSL certificate. Tandaan na kung walang SSL certificate ang website at susubukan mong pilitin itong i-load gamit ang SSL, maaari itong magbigay sa iyo ng mga error.

### Pag-map ng custom na pangalan ng domain bilang user ng Subsite {#mapping-custom-domain-name-as-subsite-user}

Maaari ring mag-map ang mga administrator ng subsite ng mga custom na pangalan ng domain mula sa kanilang dashboard ng admin ng subsite.

Una, kailangan mong tiyaking i-enable mo ang opsyong ito sa ilalim ng mga setting ng **Pag-map ng domain**. Tingnan ang screenshot sa ibaba.

<!-- Hindi available ang screenshot: Mga setting ng pag-map ng domain na nagpapahintulot sa mga user ng subsite na mag-map ng mga domain sa pamamagitan ng toggle ng Customer DNS Management -->

Maaari mo ring i-set o i-configure ang opsyong ito sa ilalim ng antas ng **Plan** o mga opsyon ng produkto sa **Ultimate Multisite > Mga Produkto**.

![Seksyon ng Mga Custom na Domain sa pahina ng pag-edit ng produkto](/img/config/product-custom-domains.png)

Kapag naka-enable ang alinman sa mga opsyong iyon at pinapayagan ang isang user ng subsite na mag-map ng mga custom na pangalan ng domain, dapat makakita ang user ng subsite ng metabox sa ilalim ng pahina ng **Account** na tinatawag na **Mga Domain**.

<!-- Hindi available ang screenshot: Metabox ng Mga Domain sa pahina ng Account ng subsite na may button na Magdagdag ng Domain -->

Maaaring i-click ng user ang button na **Magdagdag ng Domain** at maglalabas ito ng modal window na may ilang tagubilin.

<!-- Hindi available ang screenshot: Modal ng Magdagdag ng Domain na nagpapakita ng mga tagubilin sa DNS A-record para sa mga user ng subsite -->

Pagkatapos, maaaring i-click ng user ang **Susunod na Hakbang** at magpatuloy sa pagdaragdag ng custom na pangalan ng domain. Maaari rin nilang piliin kung ito ang magiging pangunahing domain o hindi.

<!-- Hindi available ang screenshot: Form ng Magdagdag ng Domain na may field ng custom na pangalan ng domain at toggle ng pangunahing domain -->

<!-- Hindi available ang screenshot: Hakbang ng kumpirmasyon ng Magdagdag ng Domain na nagsisimula ng beripikasyon ng DNS -->

Ang pag-click sa **Magdagdag ng Domain** ay magsisimula ng proseso ng pag-verify at pagkuha ng impormasyon ng DNS ng custom na domain.

### Tungkol sa Pag-sync ng Domain {#about-domain-syncing}

Ang Pag-sync ng Domain ay isang proseso kung saan idinaragdag ng Ultimate Multisite ang custom na pangalan ng domain sa iyong hosting account bilang add-on domain **upang gumana ang pag-map ng domain**.

Awtomatikong nangyayari ang pag-sync ng domain kung may integrasyon ang iyong hosting provider sa feature ng pag-map ng domain ng Ultimate Multisite. Sa kasalukuyan, ang mga hosting provider na ito ay _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ at _Cpanel._

Kapag active ang integrasyon ng host-provider, maaari ring i-enqueue ng Ultimate Multisite ang gawain sa paggawa ng DNS o subdomain sa panig ng provider para sa mga bagong gawang sityo. Kung walang integrasyong nakikinig para sa gawaing iyon, nilalaktawan ang background job upang maiwasan ang mga entry sa queue na walang ginagawa. Patuloy na tumatakbo ang mga pagsusuri ng DNS at SSL para sa mga naka-map na domain sa pamamagitan ng normal na proseso ng yugto ng domain.

Kakailanganin mong i-activate ang integrasyong ito sa mga setting ng Ultimate Multisite sa ilalim ng tab na **Integrasyon**.

![Tab ng Mga Integrasyon sa mga setting ng Ultimate Multisite na nagpapakita ng mga hosting provider](/img/config/integrations-tab.png)

<!-- Hindi available ang screenshot: Mga link ng Configuration ng hosting provider sa tab ng mga setting ng Integrations -->

_Tandaan na kung ang iyong hosting provider ay hindi isa sa mga provider na nabanggit sa itaas,**kakailanganin mong manu-manong i-sync o idagdag ang pangalan ng domain** sa iyong hosting account._
