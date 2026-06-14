---
title: Lihok sa Akaw sa Kliyente
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Ang Account Page sa Imong Kliyente (v2)

_**MAHINUNGAN: Kini nga article nagrefer sa Ultimate Multisite version 2.x.**_

Kung ang mga customer mag-subscribe og plano sa imong network, makakuha sila og access sa usa ka website ug dashboard nga adunay importante nga impormasyon bahin sa ilang mga bayad, membership, domain, limitasyon sa plano, ug uban pa...

Sa tutorial ni, atong giya kamo pinaagi sa account page sa customer ug makita ninyo kung unsa ang mahimo sa inyong mga customer diha niini.

## Ang Account Page

Ang account page ma-access pinaagi sa pag-click sa **Account** sulod sa dashboard sa imong customer.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

Sa sovereign tenant networks, ang Ultimate Multisite v2.13.0 nagpabilin niining experience sa pagdumala sa customer sa main site. Kung ang usa ka customer magbukas og account, checkout, billing, invoice, site-management, template-switching, o domain-mapping actions gikan sa usa ka sovereign tenant, ang mga aksyon molungtad balik sa customer panel sa main site aron ang network billing ug membership records magpabilin nga awtoritatibo.

Kung ang customer moabot gikan sa usa ka sovereign tenant, ang customer panel sa main site mahimong adunay return link pabalik sa tenant site. Ang return link ipakita lang kung ang Ultimate Multisite makapamatud-an (validate) nga ang target sa pagbalik kay usa sa mga website sa customer, kini aron mapugngan ang arbitrary redirects samtang gipreserba ang workflow sa tenant.

![Customer account page overview](/img/account-page/overview.png)

Human i-click nila kini, makakita sila og overview sa ilang membership, billing address, invoices, domains, site limitations, ug mahimo usab nilang usbon ang ****Site Template** (kung tugotan kini sa inyong network).

Mahimo usod nila ang membership ngadto sa lain nga plano, o paliton ang laing package o serbisyo nga inyong gi-offer. Atong tan-awon ang matag seksyon nga nag-inusara.

### Ang Iyong Pagtan-aw sa Membership:

Ang unang bloke na nasa ibaba mismo sa ngalan sa website sa inyong mga customer nagpapakita og overview sa ilang kasamtang nga plano ug mga serbisyo/packages nga gipalit gamit niini. Gipakita usab sa bloke ang membership number, ang sinugdanan nga kantidad nga gibayad para niini, unsa ka mahal ang plano ug bisan unsang serbisyo/package, ug pila ka beses sila nabayaran para niining membership. Mahimo usab nila makita kung ang membership kay **Active**, **Expired** o **Canceled**.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Sa dili pa kini bloke, makita sa inyong mga customer ang mga bloke nga **About This Site** ug **Site Limits**. Gipakita niini kanila ang tanang limitasyon nga naa sa ilang plano: disk space, posts, pages, visits, etc... Kini nga mga limitasyon mahimong i-configure sa matag plan page sa **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Sa tuig bahin sa **Your Membership**, makaklik ang mga customer sa **Change**. Kini magpakita kanila sa tanang available nga plans ug packages/services. Kung mopili sila og lain nga plano, ang mga limitasyon para sa plano mao na ang molapason imbes sa kasamtang nga mga limitasyon sa membership—bisan pa kung nag-downgrade o nag-upgrade sila niini.

Karon, kung ang inyong mga customer mopili og pagpalit og packages o serbisyo para niining kasamtang nga membership—sama sa dugang disk space o visits—ang kasamtang nga membership dili maoy usbon apan ang bag-ong mga package ra ang idadagdag niini.

Ablihi nga ang coupon codes dili mahimong i-add sa membership change page. Kung ang customer naggamit og coupon code sa unang pagpalit sa membership, ang code gihimo usab nga magamit niining bag-ong membership.

### Pag-update sa Billing Address:

Sa account page, pwede pud i-update sa inyong mga customer ang ilang billing address. Kinahanglan lang nila i-click ang **Update** tupad sa _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Magsinggit usa ka bag-ong window para sa inyong customer. Ang tanan nga kinahanglan niyang buhaton kay pun-on ang bag-ong address ug i-click ang _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Pagbag-o sa Site Template:

Para tugotan ang inyong mga customer nga magbag-o sa ilang site templates, kinahanglan ninyong moadto sa **Ultimate Multisite > Settings > Sites** ug i-toggle on ang option nga **Allow Template Switching**.

Dugang pa, sa **Ultimate Multisite > Products**, piliha ang inyong mga plans ug adto sa tab nga **Site Templates**. Siguraduha nga ang option nga **Allow Site Templates** naka-on ug sa **Site Template Selection Mode**, ang option nga **Choose Available Site Templates** ang gipili.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Makita ninyo tanan nga available site templates sa inyong website. Pilia kung unsa ang gusto ninyong himuon nga available ug kung unsa ang dili gusto nga available sa inyong mga customer nga nag-subscribe ubos niini nga plan. Ampo, kining mga option nag-apekto usab sa checkout form, busa bisan unsang template ang gipili nga **Not Available** dili ipakita sa registration page para niini nga plan.

Karon, ang inyong mga customer pwede i-click ang **Change Site Template** sulod sa ilang account page.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ang Ultimate Multisite 2.10.0 nagpakita og bag-ong disenyo sa template switch panel. Ang panel magsugod uban sa usa ka **current-template card** aron makita sa mga customer kung unsang template ang aktibo sa dili pa sila magpili og puli.

Magpabilin nga grid sa mga available site templates ang magpakita samtang nagahimo og review ang mga customer sa ilang mga opsyon. Makatabang ni kanila sa pagtandi sa mga template nga gitugotan alang sa ilang plan nga dili mawala ang tan-awon sa kasamtang pagpili.

![Listahan sa available site templates para sa plano](/img/config/site-templates-list.png)

Human ma-select nila ang gusto nilang usbon, ipangutana sila kung kailangan ba nila og confirmation sa pagbag-o.

![Confirmation dialog sa pag-switch sa site template](/img/account-page/template-switch-confirm.png)

Pag-on ni ang confirmation ug i-click ang **Process Switch**, ang bag-ong site template akong gamiton sa website sa imong customer.

Mahimo usab nga gamiton sa mga customer ang **Reset current template** gikan niining panel kung kinahanglan nila og reset sa site pabalik sa kasamtang gihatag nga template. Sama sa pag-switch ngadto sa lain nga template, ang pag-reset sa template makapawala sa sulod sa site, busa ang mga customer kinahanglan lang kumpirmaha kini kung masabtan nila ang aksyon sa reset.

### Pagdugang og Custom Domains:

Aduna usab ang opsyon alang sa imong mga customer nga magdugang og custom domain para niining plano sa ilang account page. Aron tugotan ang imong mga customer nga mogamit og custom domains, adto sa **Ultimate Multisite > Settings >** **Domain Mapping**.

I-toggle on ang option nga **Enable Domain Mapping**. Kini magtugot kaniny nga mogamit og custom domains sa lebel sa network.

Ayaw kalimti usab nga i-check kung ang domain mapping gina-enable base sa product - kay mahimo nimo limitahan ang usa ka product nga dili tugotan sa imong mga customer nga mogamit og custom domains.

Adto sa **Ultimate Multisite > Products**. Pilia ang plano nga gusto nimo ug adto sa tab nga **Custom Domains**. I-toggle on ang option nga **Allow Custom Domains**.

![Custom Domains tab uban sa Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Makahat ni magtugot sa tanang customer nga nag-subscribe an ni specific plan gamiton ang custom domains. Karon, sa Account page, ang imong mga customer pwede mag-add og custom domain pinaagi sa pag-click sa **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Ang unang window nga moablihan ipakita sa imong mga customer usa ka mensahe nga naghatag kanila og instruksyon kung unsaon pag-update sa ilang DNS records aron magtrabaho ang custom domain ni sila sa inyong network.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Kini nga mensahe pwede i-edit (ikaw) sa **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Ania ang bug-os nga tan-aw sa domain mapping settings page:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Human mag-click sa **Next Step**, ang imong mga customer pwede mag-add sa ilang custom domain name ug mopili kung kinsa ang mahimong primaryang domain niini. Ampo nga ang imong mga customer makagamit og labaw pa sa usa ka custom domain para sa ilang websites, busa pwede sila mopili kung asa ang mahimong primaryo.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Human mag-click sa **Add Domain**, ang domain iapil na sa account sa imong customer. Ang tanan nga kinahanglan nila karon mao ang pag-change sa DNS records niining custom domain sa ilang domain registrar.

### Pag-usab sa Password:

Sa sulod sa account dashboard, pwede usab sa imong mga customer mag-change sa ilang password pinaagi sa pag-click sa **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Magpapakita niini ang bag-ong window diin kinahanglan i-fill sa imong mga customer ang ilang kasamtang nga password ug dayon i-fill ang bag-ong password nga gusto nila gamiton.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Danger Zone:

Aduna pud kitay duha ka option nga gipakita sa bahin sa **Danger Zone**: **Delete Site** ug **Delete Account**. Pareho sila anaa sa Danger Zone kay kining duha ka lihok dili na maibalik. Kung ang imong mga customer mag-delete sa ilang website o account, dili na nila kini maibalik.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Kung i-click nila ang bisan unsa niining duha ka option, ipakita sila og window diin kinahanglan i-toggle on ang option sa pagtangtang sa website o account ug adunay warning nga dili na kini ma-undo.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Kung mag-delete sila sa ilang website, ang ilang account ug membership kay dili maapektuhan. Mawala lang gyud nila tanang content sa ilang website. Kung mag-delete sila sa ilang account, mawala na tanan nga mga website, membership ug impormasyon bahin niining account.
