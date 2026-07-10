---
title: Paglilibot sa Panel ng Admin
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Paglilibot sa Admin Panel {#touring-the-admin-panel}

Nilalayon ng Ultimate Multisite na maging kasing-simple at kasing-linaw hangga't maaari, ngunit sa ganito kalakas na kasangkapan, makatutulong ang may gabay na paglilibot. Talakayin natin ang mga admin page para matulungan kang maging pamilyar.

## Dashboard {#dashboard}

Ipinapakita ng Ultimate Multisite **Dashboard** ang mga pangunahing ulat at analytics kabilang ang mga kita, mga aktibidad ng site, paglago ng membership, bilang ng mga bisita, at datos na heograpiko.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Narito ang buong view ng dashboard:

![Buong page ng Ultimate Multisite Dashboard](/img/admin/um-dashboard-full.png)

At ang ibabang seksyon ng dashboard:

![Ibabang seksyon ng Ultimate Multisite Dashboard](/img/admin/um-dashboard-bottom.png)

Narito rin ang buong view ng network dashboard:

![Buong page ng Network Dashboard](/img/admin/network-dashboard-full-page.png)

## Mga Checkout Form {#checkout-forms}

Nagbibigay sa iyo ang **Mga Checkout Form** ng kakayahang gumawa ng mga custom na page ng pagpaparehistro. Maaari mong i-customize ang mga field, maglagay ng mga custom na class at script, at limitahan ang access batay sa bansa o lokasyon ng bisita.

![Listahan ng Mga Checkout Form](/img/admin/checkout-forms-list.png)

## Mga Produkto {#products}

Ang seksyong **Mga Produkto** ang lugar kung saan ka gumagawa ng iba't ibang plan, package, at serbisyo para sa iyong network. Tukuyin ang mga presyo, dalas ng billing, at mga limitasyon at quota sa antas ng produkto.

![Listahan ng Mga Produkto](/img/admin/products-list.png)

## Mga Membership {#memberships}

Ipinapakita ng page na **Mga Membership** ang lahat ng subscription sa iyong network. Suriin at i-edit ang mga detalye ng subscription kabilang ang mga plan, produkto, halaga at dalas ng billing, kasaysayan ng pagbabayad, at mga timestamp.

![Listahan ng Mga Membership](/img/admin/memberships-list.png)

## Mga Pagbabayad {#payments}

Nagbibigay ang page na **Mga Pagbabayad** ng mabilis na view ng kasaysayan ng pagbabayad sa kabuuan ng iyong network, na may detalyadong impormasyon ng transaksyon kabilang ang mga partikular na produkto at halaga.

![Listahan ng Mga Pagbabayad](/img/admin/payments-list.png)

## Mga Customer {#customers}

Ipinapakita ng page na **Mga Customer** ang lahat ng miyembrong nakarehistro sa iyong network kasama ang pangunahing impormasyon ng user kabilang ang pangalan, email address, huling pag-login, at isang link na "switch to" para sa pag-log in sa kanilang subsite.

![Listahan ng Mga Customer](/img/admin/customers-list.png)

## Mga Site {#sites}

Inililista ng page na **Mga Site** ang lahat ng subsite sa iyong network kabilang ang mga template ng site at mga site na pag-aari ng customer. Madaling pamahalaan ang mga mapped domain, limitasyon at quota, mga plugin at theme, at mga thumbnail ng site.

![Listahan ng Mga Site](/img/admin/sites-list.png)

## Mga Domain {#domains}

Ang page na **Mga Domain** ay nakalaan para sa mga custom na domain na naka-map sa mga subsite. Bilang super admin, maaari kang manu-manong magdagdag o mag-map ng mga custom na pangalan ng domain at tingnan ang mga DNS record at log.

![Listahan ng Mga Domain](/img/admin/domains-list.png)

## Mga Discount Code {#discount-codes}

Hinahayaan ka ng **Mga Discount Code** na gumawa ng mga coupon code upang mag-alok ng mga discount sa iyong mga end-user. Tukuyin ang halaga ng discount at i-target ang mga partikular na user o grupo.

![Listahan ng Mga Discount Code](/img/admin/discount-codes-list.png)

## Mga Broadcast {#broadcasts}

Ang **Mga Broadcast** ay isang kasangkapan para maglunsad ng mga anunsyo o magpadala ng mga pribadong mensahe sa iyong mga user ng subsite. I-target ang mga partikular na grupo ng user batay sa plan o produktong naka-subscribe sila.

![Listahan ng Mga Broadcast](/img/admin/broadcasts-list.png)

## Mga Setting {#settings}

Ang page na **Mga Setting** ang lugar kung saan mo kino-configure ang Ultimate Multisite — mga setting ng pagpaparehistro, pagbabayad, API at webhooks, pag-map ng domain, at iba pang integration.

Inililista ng mga setting ng AI connector ang kasalukuyang sinusuportahang mga OAuth provider pool: Anthropic Max, OpenAI ChatGPT/Codex, at Google AI Pro. Hinahayaan ng bawat provider card ang mga super admin na magkonekta ng mga account, i-refresh ang mga naka-save na account, mag-alis ng mga account sa pamamagitan ng email, at gamitin ang manu-manong OAuth fallback kapag hinaharang ng sandboxed environment ang browser redirect. Inalis na sa admin panel ang mga opsyon sa pag-setup ng Cursor Pro.

Sinusuportahan ng mga account ng ChatGPT/Codex ang paggamit ng tool na backed ng connector kung saan pinapayagan ng operasyon ang mga tool, kaya magagamit ng mga admin workflow na umaasa sa mga operasyong suportado ng connector ang gawi ng Codex tool pagkatapos maikonekta ang OpenAI account.

![Page ng Mga Setting](/img/admin/settings-general.png)

Narito ang buong view ng page ng mga pangkalahatang setting:

![Buong page ng Mga Pangkalahatang Setting](/img/admin/settings-general-full.png)

At ang page ng mga setting ng email:

![Buong page ng Mga Setting ng Email](/img/admin/settings-emails-full.png)

At ang page ng mga setting ng pagbabayad:

![Buong page ng Mga Setting ng Pagbabayad](/img/admin/settings-payments-full.png)

At ang ibabang seksyon ng mga setting ng pagbabayad:

![Ibabang seksyon ng Mga Setting ng Pagbabayad](/img/admin/settings-payments-bottom.png)

At ang page ng mga setting ng site:

![Buong page ng Mga Setting ng Site](/img/admin/settings-sites-full.png)

## Mga Event {#events}

Pinapanatili ng page na **Mga Event** ang talaan ng lahat ng event at log sa iyong network. Sinusubaybayan nito ang mga aktibidad tulad ng mga pagbabago sa plan, signup, at iba pang galaw — kapaki-pakinabang para sa pag-monitor ng iyong multisite.

![Listahan ng Mga Event](/img/admin/events-list.png)

## Webhooks {#webhooks}

Hinahayaan ka ng **Webhooks** na maghatid ng data sa ibang application. Kapaki-pakinabang para sa pagpapadala ng data mula sa Ultimate Multisite patungo sa mga platform tulad ng Zapier.

![Listahan ng Webhooks](/img/admin/webhooks-list.png)
