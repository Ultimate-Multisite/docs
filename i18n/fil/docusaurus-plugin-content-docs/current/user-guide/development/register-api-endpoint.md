---
title: Irehistro ang API Endpoint
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ang Ultimate Multisite Register API endpoint

Sa tutorial na ito, matututunan mo kung paano gamitin ang Ultimate Multisite /register API endpoint para gumawa ng buong proseso ng onboarding para sa bagong customer sa iyong network at kung paano ito gawin gamit ang Zapier.

Ang endpoint ay gumagamit ng POST method at tinatawag sa pamamagitan ng URL na _**https://yoursite.com/wp-json/wu/v2/register**_. Sa tawag na ito, 4 na proseso ang isasagawa sa iyong network:

  * Gagawa ng bagong WordPress user o kikilalanin ito sa pamamagitan ng user ID.

  * Gagawa ng bagong Customer sa Ultimate Multisite o kikilalanin ito sa pamamagitan ng customer ID.

  * Gagawa ng bagong site sa WordPress network.

  * Sa huli, gagawa ng bagong Membership sa Ultimate Multisite.

Para sa prosesong ito, kakailanganin mo ang iyong API credentials. Para makuha ito, pumunta sa iyong network admin panel, mag-navigate sa **Ultimate Multisite > Settings** > **API & Webhooks,** at hanapin ang API Settings section.

![API Settings section sa Ultimate Multisite](/img/config/settings-api.png)  
Piliin ang **Enable API** at kunin ang iyong API credentials.

Ngayon, tingnan natin ang endpoint at pagkatapos ay gumawa ng registration action sa Zapier.

## Mga parameter ng endpoint body

Tingnan natin ang pangkalahatang-ideya ng minimum na impormasyon na kailangan nating ipadala sa endpoint. Sa dulo ng artikulong ito, makikita mo ang kumpletong call.

### Customer

Ito ang impormasyon na kailangan para sa proseso ng paggawa ng User at ng Ultimate Multisite Customer:

"customer_id" : integer

Maaaring ipadala ang customer ID na nagawa na sa iyong network. Kung hindi isinumite, gagamitin ang impormasyon sa ibaba para gumawa ng bagong customer at bagong WordPress user. Ang user ID ay maaari ring ipadala sa parehong paraan tulad ng customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Ang tanging impormasyon na kailangan natin sa loob ng object na ito ay ang Membership Status.

"membership" { "status" : "string", // isa sa "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Ang products ay ibinibigay bilang array na may 1 o higit pang product ID mula sa iyong network. Tandaan, hindi gumagawa ng products ang endpoint na ito. Tingnan ang dokumentasyon ng Ultimate Multisite para mas maintindihan ang product creation endpoint.

**"products" : [1,2],**

### Payment

Tulad ng Membership, kailangan lang natin ang status.

**"payment" { "status" : "string", // isa sa "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

At para tapusin ang body, kailangan natin ang URL at Title ng site, parehong nasa loob ng Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ang ibabalik ng register endpoint ay isang array na naglalaman ng impormasyon ng bagong nagawang membership.

## Paggawa ng action sa Zapier

Sa pagpapakilala ng bago at mas matatag na account creation endpoint na ito, magkakaroon ka rin ng access sa bagong action sa Zapier.

Alam mo ba kung paano gamitin at masulit ang lahat ng inaalok ng bagong bersyon ng Zapier? Matuto pa rito. (link?)

### Paggawa ng action

Para mas maipakita kung paano gamitin ang registration endpoint kasama ang Zapier, gumawa tayo ng integration sa Google Forms. Sa tuwing mapupunan ang form na ito at mase-save ang impormasyon sa answer sheet ng form, gagawa ng bagong membership sa Ultimate Multisite network.

Sa Google Forms, gumawa ng form na may minimum na mga field na kailangan para makagawa ng bagong membership sa network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ngayon sa Zapier, gumawa ng bagong Zap at ikonekta ang ginawang form sa Google sa pamamagitan ng spreadsheet kung saan naka-save ang data.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Tapos na! Nakakonekta na ang Google Forms form sa Zapier at handa nang i-integrate sa network. Ngayon, magpatuloy tayo sa Action na magiging resulta ng Trigger na inii-trigger ng Google Forms sa tuwing napupunan ito.

Hanapin ang bagong Ultimate Multisite app at piliin ito. Para sa ganitong uri ng Zap, piliin ang Register option.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Pagkatapos ng unang hakbang na ito, piliin ang account na ikokonekta sa Zap na ito.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ito ang pinakamaselan na bahagi ng buong proseso. Kailangan nating itugma ang mga field na galing sa Google Forms sa minimum na mga field na kailangan para sa register endpoint, tulad ng ipinakita sa nakaraang seksyon ng artikulong ito.

Sa halimbawang ito, kailangan lang nating i-configure ang username, email, password, pangalan at URL ng website. Ang iba ay naka-set na nang maaga para ang lahat ng membership na nagawa sa Google Forms na ito ay susunod sa parehong product at status pattern.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Kapag na-set up na ang impormasyon, magpatuloy sa final test. Sa huling screen, makikita mo ang lahat ng field na ipapadala sa endpoint, ang kani-kanilang impormasyon at ang mga field na ipapadala nang walang laman.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

I-test ang iyong bagong Zap at dapat itong matapos nang maayos. Kung may lumabas na error, tingnan ang lahat ng field at kung naipapadala nang tama ang mga ito. Dahil maraming impormasyon, may mga bagay na maaaring makalusot.

### Kumpletong endpoint parameters

Narito ang kumpletong call at lahat ng posibleng field na maaaring ipadala.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // isa sa "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // isa sa "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
