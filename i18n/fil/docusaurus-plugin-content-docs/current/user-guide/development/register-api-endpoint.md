---
title: Irehistro ang API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ang Ultimate Multisite Register API endpoint

Sa tutorial na ito, matututuhan mo kung paano gamitin ang Ultimate Multisite /register API endpoint para likhain ang buong proseso ng onboarding para sa bagong customer sa iyong network at kung paano ito gawin gamit ang Zapier.

Ginagamit ng endpoint ang POST method at tinatawag sa pamamagitan ng URL na _**https://yoursite.com/wp-json/wu/v2/register**_. Sa tawag na ito, 4 na proseso ang isasagawa sa loob ng iyong network:

  * Isang bagong WordPress user o ang pagkakakilanlan nito sa pamamagitan ng user ID ang lilikhain.

  * Isang bagong Customer sa Ultimate Multisite o ang pagkakakilanlan nito sa pamamagitan ng customer ID ang lilikhain.

  * Isang bagong site sa WordPress network ang lilikhain.

  * Sa huli, isang bagong Membership sa Ultimate Multisite ang lilikhain.

Para sa prosesong ito, kakailanganin mo ang iyong API credentials. Para makuha ang mga ito, pumunta sa iyong network admin panel, mag-navigate sa **Ultimate Multisite > Settings** > **API & Webhooks,** at hanapin ang seksyong API Settings.

![Seksyon ng API Settings sa Ultimate Multisite](/img/config/settings-api.png)

Narito ang buong tanaw ng pahina ng API settings:

![Buong pahina ng API settings](/img/config/settings-api-full.png)

Piliin ang **Enable API** at kunin ang iyong API credentials.

Ngayon, tuklasin natin ang endpoint at pagkatapos ay gumawa ng registration action sa Zapier.

## Mga parameter ng body ng endpoint {#endpoint-body-parameters}

Magkaroon muna tayo ng pangkalahatang-ideya ng minimum na impormasyong kailangan nating ipadala sa endpoint. Sa dulo ng artikulong ito, makikita mo ang buong tawag.

### Customer {#customer}

Ito ang impormasyong kinakailangan para sa proseso ng paglikha ng User at ng Ultimate Multisite Customer:

"customer_id" : integer

Posibleng ipadala ang customer ID na nilikha sa iyong network. Kung hindi isinumite, gagamitin ang impormasyon sa ibaba para gumawa ng bagong customer at bagong WordPress user. Maaari ring ipadala ang user ID sa parehong paraan gaya ng customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Ang tanging impormasyong kailangan natin sa loob ng object na ito ay ang Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Mga Produkto** {#products}

Ibinibigay ang mga produkto bilang array na may 1 o higit pang product ID mula sa iyong network. Mag-ingat, hindi lumilikha ng mga produkto ang endpoint na ito. Tingnan ang dokumentasyon ng Ultimate Multisite para mas maunawaan ang endpoint sa paglikha ng produkto.

**"products" : [1,2],**

### Pagbabayad {#payment}

Gaya ng sa Membership, kailangan lang natin ang status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

At para isara ang body, kailangan natin ang URL at Title ng site, parehong nasa loob ng Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ang ibabalik ng register endpoint ay isang array na may bagong nalikhang impormasyon ng membership.

## Paglikha ng action sa Zapier {#creating-an-action-in-zapier}

Sa pagpapakilala ng bago at mas matatag na endpoint para sa paglikha ng account, magkakaroon ka rin ng access sa bagong action sa Zapier.

Alam mo ba kung paano gamitin at sulitin ang lahat ng iniaalok ng bagong bersyon ng Zapier? Matuto pa rito. (link?)

### Paglikha ng action {#creating-an-action}

Para mas maipakita kung paano gamitin ang registration endpoint gamit ang Zapier, gumawa tayo ng integration sa Google Forms. Tuwing pinupunan ang form na ito at sine-save ang impormasyon sa answer sheet ng form, isang bagong membership ang lilikhain sa Ultimate Multisite network.

Sa Google Forms, gumawa ng form na may minimum na mga field na kinakailangan para gumawa ng bagong membership sa network.

<!-- Hindi available ang screenshot: Google Forms form na may mga field para gumawa ng bagong membership -->

Ngayon sa Zapier, gumawa ng bagong Zap at ikonekta ang ginawang form sa Google sa pamamagitan ng spreadsheet kung saan naka-save ang data.

<!-- Hindi available ang screenshot: Zapier trigger configuration na kumokonekta sa Google Forms spreadsheet -->

Tapos na! Nakakonekta na ang Google Forms form sa Zapier at handa nang i-integrate sa network. Ngayon lumipat tayo sa Action na magiging resulta ng Trigger na pinapagana ng Google Forms tuwing ito ay pinupunan.

Hanapin ang bagong Ultimate Multisite app at piliin ito. Para sa ganitong uri ng Zap, piliin ang opsyong Register.

<!-- Hindi available ang screenshot: Pagpili ng Zapier action na nagpapakita ng Ultimate Multisite app na may opsyong Register -->

Pagkatapos ng unang hakbang na ito, piliin ang account na ikokonekta sa Zap na ito.<!-- Hindi available ang screenshot: Hakbang sa pagkonekta ng Zapier account para sa Ultimate Multisite -->

Ito ang pinakasensitibong bahagi ng buong proseso. Kailangan nating itugma ang mga field na galing sa Google Forms sa minimum na mga field na kinakailangan para sa register endpoint, gaya ng ipinakita sa nakaraang seksyon ng artikulong ito.

Sa halimbawang ito, kailangan lang nating i-configure ang username, email, password, pangalan at URL ng website. Ang iba ay iniiwang paunang natukoy upang ang lahat ng membership na mabubuo sa Google Forms na ito ay susunod sa parehong pattern ng produkto at status.

<!-- Hindi available ang screenshot: Pagmamapa ng field sa pagitan ng Google Forms at Ultimate Multisite register endpoint -->

Kapag na-set up na ang impormasyon, magpatuloy sa huling test. Sa huling screen, makikita mo ang lahat ng field na ipapadala sa endpoint, ang kani-kanilang impormasyon at ang mga field na ipapadalang walang laman.<!-- Hindi available ang screenshot: Zapier test screen na nagpapakita ng lahat ng field na ipapadala sa register endpoint -->

I-test ang bago mong Zap at dapat itong matagumpay na makumpleto. Kung may anumang error na mangyari, suriin ang lahat ng field at kung tama ang pagkakapadala ng mga ito. Dahil maraming impormasyon, may ilang bagay na maaaring hindi mapansin.

### Kumpletong mga parameter ng endpoint {#complete-endpoint-parameters}

Narito ang kumpletong tawag at lahat ng posibilidad ng mga field na maaaring ipadala.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
