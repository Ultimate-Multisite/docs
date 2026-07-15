---
title: Pahina ng Akaw ng Kliyente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pahina ng Account ng Iyong Kliyente (v2)

_**MAHALAGANG PAUNAWA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Kapag ang mga customer ay sumubscribe sa isang plano sa iyong network, mayroon silang access sa isang website at dashboard na may mahahalagang impormasyon tungkol sa kanilang mga bayad, membership, domain, limitasyon ng plano, atbp...

Sa tutorial na ito, gagabayan ka namin sa pahina ng account ng customer at makikita mo kung ano ang pwedeng tingnan at gawin nila doon.

## Ang Account Page {#the-account-page}

Maaari mong ma-access ang account page sa pamamagitan ng pag-click sa **Account** sa loob ng dashboard ng iyong customer.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

Sa mga sovereign tenant networks, pinapanatili ng Ultimate Multisite v2.13.0 ang karanasan sa pamamahala ng customer na ito sa pangunahing site. Kung ang isang customer ay magbubukas ng account, checkout, billing, invoice, site-management, template-switching, o domain-mapping actions mula sa isang sovereign tenant, ang mga aksyong iyon ay babalik sa main-site customer panel para manatiling awtoritatibo ang record ng billing at membership ng network.

Kapag dumating ang customer mula sa isang sovereign tenant, ang main-site customer panel ay maaaring maglaman ng return link pabalik sa site ng tenant. Ang return link na ito ay ipinapakita lamang kapag kaya ng Ultimate Multisite na i-validate ang target ng pagbabalik bilang isa sa mga site ng customer, na pumipigil sa arbitrary redirects habang pinapanatili ang workflow ng tenant.

![Customer account page overview](/img/account-page/overview.png)

Pagkatapos mag-click ang customer dito, makakakita sila ng overview ng kanilang membership, billing address, invoices, domain, site limitations, at maaari rin nilang baguhin ang ****Site Template** (kung pinapayagan ito sa iyong network).

Maa rin nilang mabago ang membership patungo sa ibang plano, o bumili ng ibang package o serbisyo na inaalok mo. Tingnan natin ang bawat seksyon nang hiwalay.

### Balangkas ng Iyong Membership: {#your-membership-overview}

Ang unang bloke sa ibaba mismo ng pangalan ng website ng iyong mga customer ay nagpapakita ng kabuuan ng kanilang kasalukuyang plano at mga serbisyo/package na binili gamit ito. Ipinapakita rin dito ang membership number, ang paunang halagang binayaran para dito, kung magkano ang presyo ng plano at anumang serbisyo/package, at kung ilang beses sila nabayaran para sa membership na ito. Makikita rin nila kung ang membership ay **Active** (Aktibo), **Expired** (Nalipas na), o **Canceled** (Nai-cancel).

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Sa ibaba ng bloke na ito, makikita ng iyong mga customer ang mga bloke na **About This Site** at **Site Limits**. Ipinapakita ng mga blokeng ito sa kanila ang lahat ng limitasyon na kaakibat ng kanilang plano: espasyo sa disk, posts, pahina, visits, atbp... Ang mga limitasyong ito ay maaaring i-configure sa bawat pahina ng plano sa **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Sa kanang bahagi ng **Your Membership**, maaaring i-click ng mga customer ang **Change** (Baguhin). Ipinapakita nito sa kanila ang lahat ng magagamit na plano at package/serbisyo. Kung pipili sila ng ibang plano, ang mga limitasyon para sa bagong plano ang ipapatupad sa halip sa kasalukuyang limitasyon ng membership—hindi mahalaga kung nag-downgrade o nag-upgrade sila.

Ngayon, kung pipili ng iyong mga customer na bumili ng mga package o serbisyo para sa kasalukuyang membership na ito—tulad ng mas maraming disk space o visits—hindi mababago ang kasalukuyang membership kundi ang mga bagong package lamang ang idadagdag dito.

Tandaan na hindi maaaring magdagdag ng coupon codes sa pahina ng pagbabago ng membership na ito. Kung gumamit ang customer ng coupon code noong unang pagbili ng membership, gagamitin din ang code na iyon para sa bagong membership na ito.

### Pag-update ng Billing Address: {#updating-the-billing-address}

Sa account page, pwedeng i-update ng mga customer nila ang kanilang billing address. Kailangan lang nilang i-click ang **Update** sa tabi ng _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Magpapakita ng bagong window para sa customer mo. Ang kailangan lang nilang gawin ay punan ang bagong address at i-click ang _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Pagbabago ng Site Template: {#changing-the-site-template}

Para payagan ang mga customer mong magpalit ng site template, kailangan mong pumunta sa **Ultimate Multisite > Settings > Sites** at i-toggle on ang opsyon na **Allow Template Switching**.

Gayundin, sa **Ultimate Multisite > Products**, piliin ang iyong mga plano at pumunta sa tab na **Site Templates**. Siguraduhin na naka-on ang opsyon na **Allow Site Templates** at sa **Site Template Selection Mode**, piliin ang opsyon na **Choose Available Site Templates**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Makikita mo doon lahat ng available na site templates sa iyong website. Pumili kung alin ang gusto mong gawing available at alin ang hindi gusto mong magamit ng mga customer na naka-subscribe sa plan na ito. Tandaan na naaapektuhan din ng opsyong ito ang checkout form, kaya ang anumang template na pipiliin bilang **Not Available** ay hindi lalabas sa registration page para sa plan na ito.

Ngayon, pwedeng i-click ng mga customer mo ang **Change Site Template** sa loob ng kanilang account page.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ang Ultimate Multisite 2.10.0 ay nagpapakita ng bagong disenyo para sa template switch panel. Ang panel na ito ay nagsisimula sa isang **current-template card** para makita ng mga customer kung aling template ang aktibo bago sila pumili ng kapalit.

Mananatiling nakikita ang isang patuloy na grid ng mga available site template habang sinusuri ng mga customer ang kanilang mga opsyon. Nakakatulong ito sa kanila para ikumpara ang mga template na pinapayagan para sa kanilang plano nang hindi nawawala ang tingin sa kasalukuyang pagpili.

![Listahan ng mga available site template para sa plano](/img/config/site-templates-list.png)

Pagkatapos piliin ang gusto nilang palitan, hihilingan sila na kumpirmahin ang pagbabago.

![Dialog ng kumpirmasyon sa pagpapalit ng site template](/img/account-page/template-switch-confirm.png)

Pagkatapos i-toggle ang confirmation at i-click ang **Process Switch**, ang bagong site template ay gagamitin sa website ng iyong customer.

Maaari ring gamitin ng mga customer ang **Reset current template** mula sa panel na ito kapag kailangan nilang ibalik ang site sa kasalukuyang itinalagang template. Tulad ng pagpapalit sa ibang template, ang pag-reset ng template ay maaaring magpabago (overwrite) ng laman ng site, kaya dapat lang silang kumpirmahin ito kapag naiintindihan na nila ang aksyong iyon.

### Pagdaragdag ng Custom Domains: {#adding-custom-domains}

Magkakaroon din ang iyong mga customer ng opsyon na magdagdag ng custom domain para sa plan na ito sa kanilang account page. Upang payagan ang iyong mga customer na gumamit ng custom domains, pumunta sa **Ultimate Multisite > Settings >** **Domain Mapping**.

I-toggle ang opsyong **Enable Domain Mapping**. Ito ay magpapahintulot sa iyong mga customer na gumamit ng custom domains sa antas ng network.

Huwag kalimutang tingnan din kung naka-enable ba ang domain mapping batay sa produkto—dahil maaari mong limitahan ang isang produkto upang hindi payagan ang iyong mga customer na gumamit ng custom domains.

Pumunta sa **Ultimate Multisite > Products**. Piliin ang plano na gusto mo at pumunta sa tab na **Custom Domains**. I-toggle ang opsyong **Allow Custom Domains**.

![Tab ng Custom Domains na may Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Bibigyan nito ang lahat ng customer na naka-subscribe sa specific plan na ito ng kakayahang gumamit ng custom domains. Ngayon, sa Account page, pwedeng magdagdag ang mga customer mo ng custom domain sa pamamagitan ng pag-click sa **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Ang unang window na bubukas ay magpapakita sa iyong mga customer ng mensahe na nagtuturo kung paano i-update ang kanilang DNS records para gumana ang custom domain na ito sa network mo.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Ang mensaheng ito ay pwedeng i-edit (ng ikaw) sa **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Narito ang buong tingin ng domain mapping settings page:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Pagkatapos mag-click sa **Next Step**, pwedeng idagdag ng iyong mga customer ang kanilang custom domain name at pumili kung ito ba ang magiging primaryang domain. Tandaan na pwedeng gumamit ang iyong mga customer ng higit sa isang custom domain para sa kanilang mga website, kaya maaari silang pumili kung alin ang magiging primarya.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Pagkatapos mag-click sa **Add Domain**, idadagdag ang domain sa account ng iyong customer. Ang kailangan na lang nilang gawin ngayon ay baguhin ang DNS records ng custom domain na ito sa kanilang domain registrar.

### Pagbabago ng Password: {#changing-password}

Sa loob ng account dashboard, pwedeng baguhin din ng iyong mga customer ang kanilang password sa pamamagitan ng pag-click sa **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Ito ay magpapakita ng bagong window kung saan kailangan ng mga customer na ilagay ang kanilang kasalukuyang password at pagkatapos ay ilagay ang bagong password na gusto nilang gamitin.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Delikadong Lugar (Danger Zone): {#danger-zone}

Mayroon din tayong dalawang opsyon na ipinapakita sa bahaging **Danger Zone**: **Delete Site** at **Delete Account**. Pareho silang nasa Danger Zone dahil ang dalawang aksyong ito ay hindi na mababawi. Kung buburahin ng iyong mga customer ang kanilang website o account, hindi na nila ito mababawi.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Kung i-click ng iyong mga customer ang alinman sa dalawang opsyong ito, ipapakita sa kanila ang isang window kung saan kailangan nilang i-toggle on ang opsyon para tanggalin ang website o account at bibigyan sila ng babala na hindi mababawi ang aksyong ito.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Kung buburahin nila ang kanilang website, account at membership ay mananatiling hindi maaapektuhan. Mawawala lang lahat ng content sa kanilang website. Kung buburahin nila ang kanilang account, mawawala lahat ng mga website, membership, at impormasyon tungkol sa account na ito.
