---
title: Magparehistro ng API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ang Ultimate Multisite Register API endpoint

Sa tutorial na ito, matututunan mo kung paano gamitin ang Ultimate Multisite /register API endpoint para gawin ang buong proseso ng pag-onboard (onboarding) para sa bagong customer sa iyong network at kung paano ito gagawin gamit ang Zapier.

Ang endpoint na ito ay gumagamit ng POST method at tinatawag sa URL na _**https://yoursite.com/wp-json/wu/v2/register**_. Sa tawag na ito, apat na proseso ang gagawin sa loob ng iyong network:

  * Magkakaroon ng bagong WordPress user o pagkakakilanlan nito sa pamamagitan ng user ID.

  * Magkakaroon ng bagong Customer sa Ultimate Multisite o pagkakakilanlan nito sa pamamagitan ng customer ID.

  * Magkakaroon ng bagong site sa WordPress network.

  * Sa huli, magkakaroon ng bagong Membership sa Ultimate Multisite.

Para sa prosesong ito, kakailanganin mo ang iyong API credentials. Para makuha ito, pumunta ka sa admin panel ng iyong network, mag-navigate sa **Ultimate Multisite > Settings** > **API & Webhooks**, at hanapin ang seksyon na API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Narito ang buong tingin ng pahina ng API settings:

![API settings full page](/img/config/settings-api-full.png)

Piliin ang **Enable API** at makuha ang iyong API credentials.

Ngayon, tuklasin natin ang endpoint at pagkatapos ay gumawa ng registration action sa Zapier.

## Endpoint body parameters {#endpoint-body-parameters}

Magbigay tayo ng pangkalahatang ideya tungkol sa minimum na impormasyong kailangan nating ipadala sa endpoint. Sa dulo ng artikulong ito, makikita mo ang buong tawag (call).

### Customer {#customer}

Ito ang impormasyon na kinakailangan para sa proseso ng paggawa ng User at Ultimate Multisite Customer:

"customer_id" : integer

Maaari bang ipadala ang customer ID na ginawa sa iyong network sa customer? Kung hindi mo ito isinumite, gagamitin ang impormasyong nasa ibaba para gumawa ng bagong customer at bagong WordPress user. Maaari ring ipadala ang user ID sa parehong paraan tulad ng customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Ang tanging impormasyong kailangan namin sa loob ng object na ito ay ang Membership Status.

"membership" { "status" : "string", // isa sa "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Ang mga produkto ay binibigyan ng isang array na may 1 o higit pang product ID mula sa iyong network. Mag-ingat, ang endpoint na ito ay hindi lumilikha ng mga produkto. Tingnan ang dokumentasyon ng Ultimate Multisite para mas maunawaan nang husto ang endpoint para sa paglikha ng produkto.

**"products" : [1,2],**

### Payment {#payment}

Gaya ng Membership, kailangan lang namin ang status.

**"payment" { "status" : "string", // isa sa "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

At para tapusin natin, kailangan din namin ang URL at Title ng site, pareho sa loob ng Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ang ibabalik ng register endpoint ay isang array na may bagong impormasyon ng membership na nilikha.

## Paglikha ng aksyon sa Zapier {#creating-an-action-in-zapier}

Sa pagpapakilala ng bagong at mas matibay na account creation endpoint na ito, magkakaroon ka rin ng bagong action sa Zapier.

Alam mo ba kung paano gamitin at tamasahin ang lahat ng inaalok ng bagong bersyon ng Zapier? Matuto dito. (link?)

### Paglikha ng aksyon {#creating-an-action}

Para mas maipaliwanag kung paano gamitin ang registration endpoint kasama ang Zapier, gumawa tayo ng integration gamit ang Google Forms. Sa tuwing pupunan at ise-save ang impormasyon sa answer sheet ng form na ito, may magiging bagong membership sa Ultimate Multisite network.

Sa Google Forms, gumawa ng form na may pinakamababang fields na kailangan para lumikha ng bagong membership sa network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ngayon sa Zapier, gumawa ng bagong Zap at i-connect ang ginawang form sa Google gamit ang spreadsheet kung saan naka-save ang data.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Tapos na! Ang Google Forms form ay konektado sa Zapier at handa nang i-integrate sa network. Ngayon, lumipat tayo sa Action na magreresulta mula sa Trigger na ginagawa ng Google Forms tuwing pupunan ito.

Hanapin ang bagong Ultimate Multisite app at piliin ito. Para sa ganitong uri ng Zap, piliin ang Register option.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Pagkatapos ng unang hakbang na ito, piliin ang account na i-ko-connect sa Zap na ito.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ito ang pinaka-sensitive part ng buong proseso. Kailangan nating itapat ang mga fields na galing sa Google Forms sa minimum na mga fields na kailangan para sa register endpoint, gaya ng ipinakita sa nakaraang seksyon ng artikulong ito.

Sa halimbawang ito, kailangan lang nating i-configure ang username, email, password, pangalan at URL ng website. Ang iba ay naka-pre-determine na kaya lahat ng membership na gawa mula sa Google Forms na ito ay susunod sa parehong pattern ng produkto at status.

<!-- Hindi screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Kapag naka-set na ang impormasyon, ituloy mo na ang huling pagsubok. Sa huling screen, makikita mo lahat ng fields na ipapadala sa endpoint, ang kani-kanilang impormasyon at ang mga fields na ipapadala nang walang laman.<!-- Hindi available ang screenshot: Zapier test screen na nagpapakita ng lahat ng fields na ipapadala sa register endpoint -->

Subukan ang iyong bagong Zap at dapat itong matagumpay. Kung mayroong anumang error, tingnan mo ang lahat ng fields at kung tama ba ang pagpapadala nito. Dahil marami tayong impormasyon, baka hindi mapansin ang ilang bagay.

### Kumpletong mga parameter ng endpoint {#complete-endpoint-parameters}

Narito ang kumpletong tawag (call) at lahat ng posibilidad ng mga fields na maaaring ipadala.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // isa sa "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // isa sa "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
