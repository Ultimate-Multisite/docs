---
title: Pahina ng Account ng Kliyente
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Ang Account Page ng Iyong Customer (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay para sa Ultimate Multisite version 2.x.**_

Kapag nag-subscribe ang mga customer sa isang plan sa iyong network, magkakaroon sila ng access sa isang website at sa dashboard nito na may mahalagang impormasyon tungkol sa kanilang mga bayarin, membership, domain, limitasyon ng plan, at iba pa...

Sa tutorial na ito, gagabayan ka namin sa account page ng customer at makikita mo kung ano ang nakikita at magagawa ng iyong mga customer dito.

## Ang Account Page

Maa-access ang account page sa pamamagitan ng pag-click sa **Account** sa loob ng dashboard ng iyong customer.

![Account menu sa customer dashboard](/img/admin/dashboard.png)

![Pangkalahatang-tanaw ng customer account page](/img/admin/dashboard.png)

Pagkatapos mag-click ng customer dito, makikita nila ang pangkalahatang-tanaw ng kanilang membership, billing address, mga invoice, domain, limitasyon ng site, at makakapagpalit din sila ng ****Site Template** (kung pinapayagan sa iyong network)**.

Maaari rin nilang palitan ang membership sa ibang plan, o bumili ng ibang package o serbisyo na iyong inaalok. Tingnan natin ang bawat bahagi nang hiwalay.

### Pangkalahatang-tanaw ng Iyong Membership:

Ang unang block sa ibaba ng pangalan ng website ng iyong customer ay nagpapakita ng pangkalahatang-tanaw ng kasalukuyang plan at mga serbisyo/package na binili kasama nito. Ipinapakita rin ng block ang membership number, ang unang halagang binayaran, magkano ang plan at anumang serbisyo/package, at ilang beses na silang nabill para sa membership na ito. Makikita rin nila kung ang membership ay **Active**, **Expired** o **Canceled**.

![Pangkalahatang-tanaw ng membership na nagpapakita ng plan, halaga, at mga detalye ng billing](/img/admin/memberships-list.png)

Sa ibaba ng block na ito, makikita ng iyong mga customer ang **About This Site** at ang **Site Limits** blocks. Ipinapakita ng mga block na ito ang lahat ng limitasyon na kasama sa kanilang plan: disk space, posts, pages, visits, at iba pa... Maaaring i-configure ang mga limitasyong ito sa bawat plan page sa **Ultimate Multisite > Products**.

![About This Site at Site Limits blocks na nagpapakita ng mga limitasyon ng plan](/img/admin/dashboard.png)

Sa kanang bahagi ng **Your Membership**, maaaring mag-click ang mga customer sa **Change**. Ipapakita nito sa kanila ang lahat ng available na plan at package/serbisyo. Kung pipili sila ng ibang plan, ang mga limitasyon ng bagong plan ang magkakabisa imbes na ang kasalukuyang limitasyon ng membership - kahit nag-downgrade o nag-upgrade man sila.

Ngayon, kung pipiliin ng iyong mga customer na bumili ng mga package o serbisyo para sa kasalukuyang membership na ito - tulad ng mas maraming disk space o visits - hindi mababago ang kasalukuyang membership kundi idadagdag lang ang mga bagong package dito.

Tandaan na hindi maaaring magdagdag ng coupon codes sa page na ito para sa pagpapalit ng membership. Kung gumamit ang customer ng coupon code sa unang pagbili ng membership, mag-aaplay din ang code sa bagong membership na ito.

### Pag-update ng Billing Address:

Sa account page, maaari ring i-update ng iyong mga customer ang kanilang billing address. Kailangan lang nilang mag-click sa **Update** sa tabi ng _Billing Address_.

![Bahagi ng Billing Address na may Update button](/img/admin/customers-list.png)

Magbubukas ang bagong window para sa iyong customer. Ang kailangan lang nilang gawin ay punan ang bagong address at mag-click sa _Save Changes_.

![Form para sa pag-update ng billing address](/img/admin/customers-list.png)

### Pagpapalit ng Site Template:

Para payagan ang iyong mga customer na magpalit ng kanilang site templates, pumunta sa **Ultimate Multisite > Settings > Sites** at i-toggle on ang opsyon na **Allow Template Switching**.

Gayundin, sa **Ultimate Multisite > Products**, piliin ang iyong mga plan at pumunta sa **Site Templates** tab. Siguraduhing naka-toggle on ang opsyon na **Allow Site Templates** at sa **Site Template Selection Mode**, napili ang opsyon na **Choose Available Site Templates**.

![Product site templates tab na may template selection mode](/img/config/product-site-templates.png)

Makikita mo ang lahat ng available na site templates sa iyong website. Piliin kung alin ang gusto mong gawing available at alin ang hindi mo gustong maging available sa iyong mga customer na naka-subscribe sa plan na ito. Tandaan na naaapektuhan din ng mga opsyon na ito ang checkout form, kaya anumang template na pinili bilang **Not Available** ay hindi lalabas sa registration page para sa plan na ito.

Ngayon ay maaari nang mag-click ang iyong mga customer sa **Change Site Template** sa loob ng kanilang account page.

![Change Site Template button sa account page](/img/admin/dashboard.png)  
Lalabas ang listahan ng lahat ng available na Site Templates para sa plan na ito sa iyong customer.

![Listahan ng available na site templates para sa plan](/img/config/site-templates-list.png)

Pagkatapos piliin ang gusto nilang palitan, hihilingin sa kanila na kumpirmahin ang pagbabago.

![Dialog para sa kumpirmasyon ng pagpapalit ng site template](/img/admin/dashboard.png)

Pagkatapos i-toggle on ang kumpirmasyon at mag-click sa **Process Switch**, gagamitin na ang bagong site template sa website ng iyong customer.

### Pagdaragdag ng Custom Domains:

Magkakaroon din ng opsyon ang iyong mga customer na magdagdag ng custom domain para sa plan na ito sa kanilang account page. Para payagan ang iyong mga customer na gumamit ng custom domains, pumunta sa **Ultimate Multisite > Settings >** **Domain Mapping**.

I-toggle on ang opsyon na **Enable Domain Mapping**. Papayagan nito ang iyong mga customer na gumamit ng custom domains sa antas ng network.

Huwag kalimutang tingnan kung enabled ang domain mapping sa batayan ng product - dahil maaari mong limitahan ang isang product na hindi payagan ang iyong mga customer na gumamit ng custom domains.

Pumunta sa **Ultimate Multisite > Products**. Piliin ang plan na gusto mo at pumunta sa **Custom Domains** tab. I-toggle on ang opsyon na **Allow Custom Domains**.

![Custom Domains tab na may Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Papayagan nito ang lahat ng customer na naka-subscribe sa partikular na plan na ito na gumamit ng custom domains. Ngayon, sa Account page, maaaring magdagdag ang iyong mga customer ng custom domain sa pamamagitan ng pag-click sa **Add Domain**.

![Add Domain button sa account page](/img/admin/domains-list.png)

Ang unang window na magbubukas ay magpapakita sa iyong mga customer ng mensahe na nagtuturo kung paano i-update ang kanilang DNS records para gumana ang custom domain na ito sa iyong network.

![Mga tagubilin sa DNS na ipinapakita kapag nagdadagdag ng custom domain](/img/admin/domains-list.png)

Ang mensaheng ito ay maaaring i-edit (mo) sa **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting sa Domain Mapping](/img/config/settings-domain-mapping.png)

Pagkatapos mag-click sa **Next Step**, maaaring idagdag ng iyong mga customer ang kanilang custom domain name at piliin kung ang custom domain na ito ang magiging primary. Tandaan na maaaring gumamit ang iyong mga customer ng higit sa isang custom domain para sa kanilang mga website, kaya mapipili nila kung alin ang magiging primary.

![Pag-enter ng custom domain name na may primary domain option](/img/admin/domains-list.png)

Pagkatapos mag-click sa **Add Domain**, idadagdag ang domain sa account ng iyong customer. Ang kailangan na lang nilang gawin ngayon ay baguhin ang DNS records ng custom domain na ito sa kanilang domain registrar.

### Pagpapalit ng Password:

Sa loob ng account dashboard, maaari ring palitan ng iyong mga customer ang kanilang password sa pamamagitan ng pag-click sa **Change Password**.

![Change Password button sa account page](/img/admin/dashboard.png)

Magpapakita ito ng bagong window kung saan kakailanganin ng iyong mga customer na punan ang kanilang kasalukuyang password at pagkatapos ay punan ang bagong password na gusto nilang gamitin.

![Form para sa pagpapalit ng password na may kasalukuyan at bagong password fields](/img/admin/dashboard.png)

### Danger Zone:

Mayroon din tayong dalawang opsyon na ipinapakita sa bahagi ng **Danger Zone**: **Delete Site** at **Delete Account**. Pareho silang nasa Danger Zone dahil hindi na maaaring bawiin ang dalawang aksyon na ito. Kung tatanggalin ng iyong mga customer ang kanilang website o ang kanilang account, hindi na nila ito mababawi.

![Danger Zone na may Delete Site at Delete Account options](/img/admin/dashboard.png)

Kung mag-click ang iyong mga customer sa alinman sa dalawang opsyon na ito, ipapakita sa kanila ang isang window kung saan kakailanganin nilang i-toggle on ang opsyon na tanggalin ang website o account at babalaan sila na hindi na maaaring i-undo ang aksyon na ito.

![Dialog para sa kumpirmasyon ng Delete Site](/img/admin/dashboard.png)

![Dialog para sa kumpirmasyon ng Delete Account](/img/admin/dashboard.png)

Kung tatanggalin nila ang kanilang website, mananatiling buo ang kanilang account at membership. Mawawala lang sa kanila ang lahat ng content sa kanilang website. Kung tatanggalin nila ang kanilang account, mawawala ang lahat ng website, membership at impormasyon tungkol sa account na ito.
