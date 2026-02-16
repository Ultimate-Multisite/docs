---
title: Paano I-configure ang Domain Mapping
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Paano I-configure ang Domain Mapping (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Isa sa mga pinakamahusay na feature ng isang premium network ay ang kakayahang mag-alok sa ating mga kliyente ng pagkakataong mag-attach ng top-level domain sa kanilang mga site. Sa huli, alin ba ang mas mukhang propesyonal: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) o [_**joesbikeshop.com**_](http://joesbikeshop.com)? Kaya naman ang Ultimate Multisite ay nag-aalok ng feature na ito na built-in na, nang hindi na kailangan gumamit ng third-party plugins.

## Ano ang domain mapping?

Gaya ng ipinahihiwatig ng pangalan, ang domain mapping ay ang kakayahang inaalok ng Ultimate Multisite na tumanggap ng request para sa isang custom domain at i-map ang request na iyon sa katumbas na site sa network na may partikular na domain na naka-attach.

### Paano i-setup ang domain mapping sa iyong Ultimate Multisite Network

Ang domain mapping ay nangangailangan ng kaunting pag-setup sa iyong bahagi para gumana. Sa kabutihang palad, ina-automate ng Ultimate Multisite ang mahirap na trabaho para sa iyo upang madali mong matugunan ang mga kinakailangan.

Sa panahon ng pag-install ng Ultimate Multisite, awtomatikong kokopyahin at i-install ng wizard ang **sunrise.php** sa itinalagang folder. **Hindi ka papayagan ng wizard na magpatuloy hanggang hindi nakukumpleto ang hakbang na ito**.

![Ultimate Multisite installation wizard na may sunrise.php step](/img/config/settings-domain-mapping.png)

Ibig sabihin nito, kapag natapos na ng Ultimate Multisite installation wizard ang pag-setup ng iyong network, maaari ka nang magsimulang mag-map ng custom domain kaagad.

Tandaan na ang domain mapping sa Ultimate Multisite ay hindi sapilitan. May opsyon kang gamitin ang native na domain mapping function ng WordPress Multisite o anumang ibang domain mapping solution.

Kung kailangan mong i-disable ang Ultimate Multisite domain mapping para bigyan-daan ang ibang domain mapping solutions, maaari mong i-disable ang feature na ito sa ilalim ng **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings na may enable toggle](/img/config/settings-domain-mapping.png)

Sa ibaba mismo ng opsyong ito, makikita mo rin ang opsyong **Force Admin Redirect**. Pinapahintulutan ka ng opsyong ito na kontrolin kung ang iyong mga customer ay maa-access ang kanilang admin dashboard sa parehong custom domain at subdomain o sa isa lamang sa kanila.

Kung pipiliin mo ang **Force redirect to mapped domain**, ang iyong mga customer ay maa-access lamang ang kanilang admin dashboard sa kanilang mga custom domain.

Ang opsyong **Force redirect to network domain** ay gagawa ng eksaktong kabaligtaran - ang iyong mga customer ay papayagan lamang na ma-access ang kanilang mga dashboard sa kanilang subdomain, kahit na sinusubukan nilang mag-sign in sa kanilang mga custom domain.

At ang opsyong **Allow access to the admin by both mapped domain domain and network domain** ay nagpapahintulot sa kanila na ma-access ang kanilang mga admin dashboard sa parehong subdomain at custom domain.

![Force Admin Redirect options para sa domain mapping](/img/config/settings-domain-mapping.png)

May dalawang paraan para mag-map ng custom domain. Ang una ay sa pamamagitan ng pag-map ng domain name mula sa iyong network admin dashboard bilang super admin at ang pangalawa ay sa pamamagitan ng subsite admin dashboard sa ilalim ng account page.

Ngunit bago ka magsimulang mag-map ng custom domain sa isa sa mga subsite sa iyong network, kailangan mong tiyakin na ang **DNS settings** ng domain name ay maayos na naka-configure.

### 

### Pagtiyak na maayos na naka-configure ang DNS settings ng domain

Para gumana ang mapping, kailangan mong tiyakin na ang domain na plano mong i-map ay nakaturo sa IP address ng iyong Network. Tandaan na kailangan mo ang Network IP address - ang IP address ng domain kung saan naka-install ang Ultimate Multisite - hindi ang IP address ng custom domain na gusto mong i-map. Para hanapin ang IP address ng isang partikular na domain, iminumungkahi naming pumunta sa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), halimbawa.

Para maayos na ma-map ang domain, kailangan mong magdagdag ng **A RECORD** sa iyong **DNS** configuration na nakaturo sa **IP address** na iyon. Ang DNS management ay malaki ang pagkakaiba sa iba't ibang domain registrar, ngunit maraming mga tutorial online na sumasaklaw dito kung hahanapin mo ang "_Creating A Record on XXXX_" kung saan ang XXXX ay ang iyong domain registrar (hal.: "_Creating A Record on GoDaddy_").

Kung nahihirapan kang gawin itong gumana, **makipag-ugnayan sa support ng iyong domain registrar** at matutulungan ka nila sa bahaging ito.

Kung plano mong payagan ang iyong mga kliyente na mag-map ng sarili nilang mga domain, kailangan nilang gawin ang trabaho sa bahaging ito sa kanilang sarili. Ituro sila sa support system ng kanilang registrar kung nahihirapan silang gumawa ng A Record.

### Pag-map ng custom domain name bilang Super Admin

Kapag naka-log in ka bilang super admin sa iyong network, madali kang makakapag-add at makapag-manage ng mga custom domain name sa pamamagitan ng pagpunta sa ilalim ng **Ultimate Multisite > Domains**.

![Domains list page sa Ultimate Multisite](/img/admin/domains-list.png)

Sa ilalim ng page na ito, maaari kang mag-click sa **Add Domain** button sa itaas at magdadala ito ng modal window kung saan maaari mong i-set at punan ang **custom domain name**, **ang subsite** na gusto mong lagyan ng custom domain name, at magpasya kung gusto mo itong i-set bilang **primary domain** name o hindi (tandaan na maaari kang mag-map ng **maraming domain name sa isang subsite**).

![Add Domain modal na may domain name at site fields](/img/admin/domains-list.png)

Pagkatapos ilagay ang lahat ng impormasyon, maaari mo nang i-click ang **Add Existing Domain** button sa ibaba.

Magsisimula ito sa proseso ng pag-verify at pag-fetch ng DNS information ng custom domain. Makakakita ka rin ng log sa ibaba ng page para masundan mo ang prosesong pinagdadaanan nito. Ang prosesong ito ay maaaring tumagal ng ilang minuto para makumpleto.

Ang **Stage** o ang status ay dapat magbago mula **Checking DNS** patungo sa **Ready** kung lahat ay maayos na naka-setup.

![Domain stage na nagbabago mula Checking DNS patungo sa Ready](/img/admin/domains-list.png)

![Domain na may Ready status sa domains list](/img/admin/domains-list.png)

Kung i-click mo ang domain name, makikita mo ang ilang mga opsyon sa loob nito. Tingnan natin ang mga ito nang mabilis:

![Domain detail page na may stage, site, active, at SSL options](/img/admin/domains-list.png)

**Stage:** Ito ang stage kung nasaan ang domain. Kapag una mong idinagdag ang domain, malamang na nasa **Checking DNS** stage ito. Titingnan ng proseso ang mga DNS entry at kukumpirmahin na tama ang mga ito. Pagkatapos, ang domain ay ilalagay sa **Checking SSL** stage. Titingnan ng Ultimate Multisite kung ang domain ay may SSL o wala at ikakategorya ang iyong domain bilang **Ready** o **Ready (without SSL)**.

**Site:** Ang subdomain na nauugnay sa domain na ito. Ang mapped domain ay magpapakita ng content ng partikular na site na ito.

**Active:** Maaari mong i-toggle ang opsyong ito on o off para i-activate o i-deactivate ang domain.

**Is Primary Domain?:** Ang iyong mga customer ay maaaring magkaroon ng higit sa isang mapped domain para sa bawat site. Gamitin ang opsyong ito para piliin kung ito ang primary domain para sa partikular na site.

**Is Secure?:** Kahit na sinusuri ng Ultimate Multisite kung ang domain ay may SSL certificate o wala bago ito i-enable, maaari mong manu-manong piliin na i-load ang domain na may o walang SSL certificate. Tandaan na kung ang website ay walang SSL certificate at sinusubukan mong pilitin itong i-load na may SSL, maaari itong magbigay sa iyo ng mga error.

### Pag-map ng custom domain name bilang Subsite user

Ang mga subsite administrator ay maaari ring mag-map ng mga custom domain name mula sa kanilang subsite admin dashboard.

Una, kailangan mong tiyakin na i-enable mo ang opsyong ito sa ilalim ng **Domain mapping** settings. Tingnan ang screenshot sa ibaba.

![Domain mapping settings na nagpapahintulot sa mga subsite user na mag-map ng mga domain](/img/config/settings-domain-mapping.png)

Maaari mo ring i-set o i-configure ang opsyong ito sa ilalim ng **Plan** level o mga product option sa **Ultimate Multisite > Products**.

![Product custom domains option sa product settings](/img/config/settings-domain-mapping.png)

Kapag alinman sa mga opsyong iyon ay naka-enable at pinapahintulutan ang isang subsite user na mag-map ng mga custom domain name, dapat makita ng subsite user ang isang metabox sa ilalim ng **Account** page na tinatawag na **Domains**.

![Domains metabox sa subsite account page](/img/admin/domains-list.png)

Maaaring i-click ng user ang **Add Domain** button at magdadala ito ng modal window na may ilang mga tagubilin.

![Add Domain modal na may DNS instructions para sa mga subsite user](/img/admin/domains-list.png)

Maaaring i-click ng user ang **Next Step** at magpatuloy sa pagdaragdag ng custom domain name. Maaari rin nilang piliin kung ito ay magiging primary domain o hindi.

![Add custom domain name field na may primary domain option](/img/admin/domains-list.png)

![I-click ang Add Domain para simulan ang DNS verification](/img/admin/domains-list.png)Ang pag-click sa **Add Domain** ay magsisimula sa proseso ng pag-verify at pag-fetch ng DNS information ng custom domain.

### Tungkol sa Domain Syncing

Ang Domain Syncing ay isang proseso kung saan idinadagdag ng Ultimate Multisite ang custom domain name sa iyong hosting account bilang add-on domain **para gumana ang domain mapping**.

Awtomatikong nangyayari ang domain syncing kung ang iyong hosting provider ay may integration sa Ultimate Multisite domain mapping feature. Sa kasalukuyan, ang mga hosting provider na ito ay _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ at _Cpanel._

Kailangan mong i-activate ang integration na ito sa Ultimate Multisite settings sa ilalim ng **Integration** tab.

![Integration tab sa Ultimate Multisite settings](/img/config/settings-domain-mapping.png)

![Hosting provider integration settings para sa domain syncing](/img/config/settings-domain-mapping.png)

_Tandaan na kung ang iyong hosting provider ay hindi isa sa mga provider na nabanggit sa itaas, **kailangan mong manu-manong i-sync o idagdag ang domain name** sa iyong hosting account._
