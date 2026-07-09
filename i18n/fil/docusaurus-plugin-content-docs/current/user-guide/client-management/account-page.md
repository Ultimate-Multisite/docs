---
title: Pahina ng Account ng Kliyente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pahina ng Account ng Iyong Kliyente (v2) {#your-clients-account-page-v2}

_**MAHALAGANG TALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Kapag nag-subscribe ang mga customer sa isang plano sa iyong network, nagkakaroon sila ng access sa isang websayt at sa Dashboard nito na may mahahalagang impormasyon tungkol sa kanilang mga pagbabayad, mga kasapian, mga domain, mga limitasyon ng plano, atbp...

Sa tutorial na ito, gagabayan ka namin sa pahina ng Account ng customer at makikita mo kung ano ang makikita at magagawa ng iyong mga customer sa loob nito.

## Ang Pahina ng Account {#the-account-page}

Maa-access ang pahina ng Account sa pamamagitan ng pag-click sa **Account** sa loob ng Dashboard ng iyong customer.

![Menu ng Account sa Dashboard ng customer](/img/account-page/account-menu.png)

Sa mga sovereign tenant network, pinananatili ng Ultimate Multisite v2.13.0 ang karanasan sa pamamahala ng customer na ito sa pangunahing websayt. Kung magbubukas ang isang customer ng mga aksyon para sa Account, checkout, billing, invoice, pamamahala ng websayt, pagpapalit ng template, o domain-mapping mula sa isang sovereign tenant, ang aksyon ay tumuturo pabalik sa panel ng customer sa pangunahing websayt upang manatiling awtoritatibo ang mga talaan ng billing at kasapian ng network.

Kapag dumating ang customer mula sa isang sovereign tenant, maaaring magsama ang panel ng customer sa pangunahing websayt ng return link pabalik sa tenant site. Ipinapakita lang ang return link kapag ma-validate ng Ultimate Multisite ang return target bilang isa sa mga websayt ng customer, na pumipigil sa mga arbitraryong redirect habang pinapanatili ang daloy ng tenant.

![Pangkalahatang-ideya ng pahina ng Account ng customer](/img/account-page/overview.png)

Pagkatapos itong i-click ng customer, makakakita sila ng pangkalahatang-ideya ng kanilang kasapian, billing address, mga invoice, mga domain, mga limitasyon ng websayt, at magagawa rin nilang baguhin ang ****Template ng Site** (kung pinapayagan ito sa iyong network)**.

Maaari rin nilang palitan ang kasapian sa ibang plano, o bumili ng ibang package o serbisyo na inaalok mo. Tingnan natin ang bawat seksyon nang hiwalay.

### Pangkalahatang-ideya ng Iyong Kasapian: {#your-membership-overview}

Ipinapakita ng unang block sa ibaba mismo ng pangalan ng websayt ng iyong mga customer ang pangkalahatang-ideya ng kanilang kasalukuyang plano at mga serbisyo/package na binili kasama nito. Ipinapakita rin ng block ang numero ng kasapian, ang paunang halagang ibinayad para dito, kung magkano ang halaga ng plano at anumang serbisyo/package, at ilang beses silang nasingil para sa kasapiang ito. Makikita rin nila kung ang kasapian ay **Aktibo** , **Nag-expire** o **Nakansela**.

![Pangkalahatang-ideya ng kasapian na nagpapakita ng plano, halaga, at mga detalye ng billing](/img/account-page/membership-card.png)

Sa ibaba mismo ng block na ito, makikita ng iyong mga customer ang mga block na **Tungkol sa Site na Ito** at **Mga Limitasyon ng Site**. Ipinapakita sa kanila ng mga block na ito ang lahat ng limitasyong kasama ng kanilang plano: espasyo sa disk, mga post, mga pahina, mga pagbisita, atbp... Maaaring i-configure ang mga limitasyong ito sa bawat pahina ng plano sa **Ultimate Multisite > Mga Produkto**.

![Mga block na Tungkol sa Site na Ito at Mga Limitasyon ng Site na nagpapakita ng mga limitasyon ng plano](/img/account-page/site-limits.png)

Sa kanang bahagi ng **Iyong Kasapian** , maaaring mag-click ang mga customer sa **Baguhin**. Ipapakita nito sa kanila ang lahat ng available na plano at package/serbisyo. Kung pipili sila ng ibang plano, ang mga limitasyon para sa plano ang ipapatupad sa halip na ang kasalukuyang mga limitasyon ng kasapian - hindi mahalaga kung nagda-downgrade o nag-a-upgrade sila nito.

Ngayon, kung pipiliin ng iyong mga customer na bumili ng mga package o serbisyo para sa kasalukuyang kasapiang ito - tulad ng mas maraming espasyo sa disk o mga pagbisita - hindi mababago ang kasalukuyang kasapian, kundi ang mga bagong package lang ang idaragdag dito.

Tandaan na hindi maaaring idagdag ang mga coupon code sa pahinang ito ng pagbabago ng kasapian. Kung gumamit ang customer ng coupon code sa unang pagbili ng kasapian, mailalapat din ang code sa bagong kasapiang ito.

### Pag-update ng Billing Address: {#updating-the-billing-address}

Sa pahina ng Account, maaari ring i-update ng iyong mga customer ang kanilang billing address. Kailangan lang nilang mag-click sa **I-update** sa tabi ng _Billing Address_.

![Seksyon ng Billing Address na may button na I-update](/img/account-page/billing-address.png)

May lalabas na bagong window sa iyong customer. Ang kailangan lang niyang gawin ay punan ang bagong address at mag-click sa _I-save ang mga Pagbabago_.

![Form para i-update ang billing address](/img/account-page/billing-address-form.png)

### Pagbabago ng Template ng Site: {#changing-the-site-template}

Upang payagan ang iyong mga customer na baguhin ang kanilang mga template ng site, kailangan mong pumunta sa **Ultimate Multisite > Mga Setting > Mga Site** at i-toggle on ang opsyong **Payagan ang Pagpapalit ng Template**.

Gayundin, sa **Ultimate Multisite > Mga Produkto**, piliin ang iyong mga plano at pumunta sa tab na **Mga Template ng Site**. Tiyaking naka-toggle on ang opsyong **Payagan ang Mga Template ng Site** at sa **Mode ng Pagpili ng Template ng Site** , napili ang opsyong **Piliin ang Mga Available na Template ng Site**.

![Tab ng mga template ng site ng produkto na may mode ng pagpili ng template](/img/config/product-site-templates.png)

Makikita mo ang lahat ng available na template ng site sa iyong websayt. Piliin kung alin ang gusto mong gawing available at alin ang gusto mong hindi maging available sa iyong mga customer na naka-subscribe sa ilalim ng planong ito. Tandaan na naaapektuhan din ng mga opsyong ito ang checkout form, kaya anumang template na piniling **Hindi Available** ay hindi lalabas sa pahina ng pagpaparehistro para sa planong ito.

Ngayon ay maaaring mag-click ang iyong mga customer sa **Baguhin ang Template ng Site** sa loob ng kanilang pahina ng Account.

![Button na Baguhin ang Template ng Site sa pahina ng Account](/img/account-page/change-template-button.png)

Ipinapakita ng Ultimate Multisite 2.10.0 ang isang muling idinisenyong panel para sa pagpapalit ng template. Nagsisimula ang panel sa isang **card ng kasalukuyang template** upang makita ng mga customer kung aling template ang aktibo bago sila pumili ng kapalit.

Nananatiling nakikita ang isang persistent grid ng mga available na template ng site habang sinusuri ng mga customer ang kanilang mga opsyon. Tinutulungan silang ihambing ang mga template na pinapayagan para sa kanilang plano nang hindi nawawala sa paningin ang kasalukuyang pinili.

![Listahan ng mga available na template ng site para sa plano](/img/config/site-templates-list.png)

Pagkatapos piliin ang gusto nilang palitan dito, hihilingin sa kanila na kumpirmahin ang pagbabago.

![Dialog ng kumpirmasyon sa pagpapalit ng template ng site](/img/account-page/template-switch-confirm.png)

Pagkatapos i-toggle on ang kumpirmasyon at mag-click sa **Iproseso ang Pagpapalit** , gagamitin ang bagong template ng site sa websayt ng iyong customer.

Maaari ring gamitin ng mga customer ang **Reset current template** mula sa panel na ito kapag kailangan nilang i-reset ang site pabalik sa kasalukuyang nakatalagang template. Tulad ng paglipat sa ibang template, ang pag-reset ng template ay maaaring mag-overwrite ng nilalaman ng site, kaya dapat lamang itong kumpirmahin ng mga customer kapag nauunawaan nila ang aksyon ng pag-reset.

### Pagdaragdag ng Custom Domains: {#adding-custom-domains}

Magkakaroon din ang iyong mga customer ng opsyong magdagdag ng custom domain para sa planong ito sa kanilang Account page. Para payagan ang iyong mga customer na gumamit ng custom domains, pumunta sa **Ultimate Multisite > Settings >** **Domain Mapping**.

I-toggle on ang opsyong **Enable Domain Mapping**. Papayagan nito ang iyong mga customer na gumamit ng custom domains sa antas ng network.

Huwag kalimutang tingnan din kung naka-enable ang domain mapping batay sa produkto - dahil maaari mong limitahan ang isang produkto para hindi payagan ang iyong mga customer na gumamit ng custom domains.

Pumunta sa **Ultimate Multisite > Products**. Piliin ang planong gusto mo at pumunta sa tab na **Custom Domains**. I-toggle on ang opsyong **Allow Custom Domains**.

![Tab na Custom Domains na may toggle na Allow Custom Domains](/img/config/product-custom-domains.png)

Papayagan nito ang lahat ng customer na naka-subscribe sa partikular na planong ito na gumamit ng custom domains. Ngayon, sa Account page, maaaring magdagdag ang iyong mga customer ng custom domain sa pamamagitan ng pag-click sa **Add Domain**.

![Button na Add Domain sa account page](/img/account-page/add-domain-button.png)

Ipapakita ng unang window na magbubukas sa iyong mga customer ang isang mensaheng nagtuturo sa kanila kung paano i-update ang kanilang DNS records upang gumana ang custom domain na ito sa iyong network.

![Mga tagubilin sa DNS na ipinapakita kapag nagdaragdag ng custom domain](/img/account-page/add-domain-dns.png)

Maaaring i-edit ang mensaheng ito (mo) sa **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Setting na Add New Domain Instructions sa Domain Mapping](/img/config/settings-domain-mapping.png)

Narito ang buong view ng page ng mga setting ng domain mapping:

![Buong page ng mga setting ng domain mapping](/img/config/settings-domain-mapping-full.png)

Pagkatapos i-click ang **Next Step** , maaaring idagdag ng iyong mga customer ang kanilang custom domain name at piliin kung ang custom domain na ito ang magiging primary. Tandaan na maaaring gumamit ang iyong mga customer ng higit sa isang custom domain para sa kanilang mga website, kaya maaari nilang piliin kung alin ang magiging primary.

![Paglalagay ng custom domain name na may opsyon sa primary domain](/img/account-page/add-domain-primary.png)

Pagkatapos i-click ang **Add Domain** , idaragdag ang domain sa account ng iyong customer. Ang kailangan na lang nilang gawin ngayon ay baguhin ang DNS records ng custom domain na ito sa kanilang domain registrar.

### Pagpapalit ng Password: {#changing-password}

Sa loob ng account dashboard, maaari ring palitan ng iyong mga customer ang kanilang password sa pamamagitan ng pag-click sa **Change Password**.

![Button na Change Password sa account page](/img/account-page/change-password-button.png)

Magpapakita ito ng bagong window kung saan kailangang punan ng iyong mga customer ang kanilang kasalukuyang password at pagkatapos ay ilagay ang bagong password na gusto nilang gamitin.

![Form ng pagpapalit ng password na may mga field para sa kasalukuyan at bagong password](/img/account-page/change-password-form.png)

### Danger Zone: {#danger-zone}

Mayroon din tayong dalawang opsyon na ipinapakita sa bahagi ng **Danger Zone**: **Delete Site** at **Delete Account**. Pareho silang nasa bahagi ng Danger Zone dahil hindi na mababawi ang dalawang aksyong ito. Kung burahin ng iyong mga customer ang kanilang website o ang kanilang account, hindi na nila maibabalik ang mga ito.

![Danger Zone na may mga opsyong Delete Site at Delete Account](/img/account-page/danger-zone.png)

Kung i-click ng iyong mga customer ang alinman sa dalawang opsyong ito, ipapakita sa kanila ang isang window kung saan kailangan nilang i-toggle on ang opsyon para alisin ang website o account at babalaan sila na hindi na mababawi ang aksyong ito.

![Dialog ng kumpirmasyon para sa Delete Site](/img/account-page/delete-site-confirm.png)

![Dialog ng kumpirmasyon para sa Delete Account](/img/account-page/delete-account-confirm.png)

Kung burahin nila ang kanilang website, mananatiling hindi nagagalaw ang kanilang account at membership. Mawawala lang sa kanila ang lahat ng nilalaman sa kanilang website. Kung burahin nila ang kanilang account, mawawala ang lahat ng website, membership, at impormasyong may kaugnayan sa account na ito.
