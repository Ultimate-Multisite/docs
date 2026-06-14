---
title: Rendera API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint ya Register API ya Ultimate Multisite

Muviri wechinyorwa uyu tutorial, munaona kuti ndikubatsira kuenda sei nemashoko anogona kuita onboarding wese wekudzidzwa kwemutauro wekudzidzwa (onboarding process) kwemumbe wedu wekufamba neUltimate Multisite /register API endpoint uye sei kunoita iye neZapier.

Endpoint iyi inoratidza kuti inoshandisa POST method uye inokwazisa neURL _**https://yoursite.com/wp-json/wu/v2/register**_. Mune chiri chiri, zvinhu 4 zvichatanga mune network yako:

  * Mutauro weWordPress wekare kana kukwazisa kwake kubva pamusoro peUser ID achakwanisa kuwedzera.

  * Mutauro weCustomer wese waUltimate Multisite kana kukwazisa kwake kubva pamusoro peCustomer ID achakwanisa kuwedzera.

  * Site yakare muWordPress network yakare kutanga.

  * Mune mangwana, Membership yakare ya Ultimate Multisite yakare kutanga.

Kuti uri munhu anoda kuti uyu process unenge uchitika, unoda API credentials yako. Kuti utangei, enda ku admin panel yenyaya yako, ndigadzirisa **Ultimate Multisite > Settings** > **API & Webhooks**, uye ndikwazisa API Settings section.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ndiiri chine chiri chiri chepage ya API settings:

![API settings full page](/img/config/settings-api-full.png)

Chine chiri chiri cha **Enable API** uye ndichida credentials yako yekuti uende.

Nekuti, tiri kuenda kutaura endpoint uye ndikubatsira kuita registration action muZapier.

## Endpoint body parameters

Tiri kuona zvinhu zvakakosha zvinodzidzwa kuti tinenge tichingava dzinogona kutangazvitsika kuendpoint. Mune mangwana emweya, uona full call.

### Customer

Iyi ndiyo mahengetsi anoda kuti process yewedzera User uye Ultimate Multisite Customer ine:

"customer_id" : integer

Kuti kutauri ID ya mwana wemwe wako uyu munzara. Kana ukavandikwa, maelezo aya aizvigadzirwa kuti zvikwanise kuita mwana wemwe wekuti uye WordPress user. User ID inogona kuwedzwa zvakasiyi neID ya mwana wemwe.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Chii chiri chinotore kana munzara inoshandiswa ndicho chiri Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products anogone kupewa array inozivisa ID ya product yakawanda kubva munzara wako. Zviona, endpoint iyi haizovaka products. Shandisa documentation ya Ultimate Multisite kuti uone zvakanaka endpoint yekuvaka products.

**"products" : [1,2],**

### Payment

Seunogona neMembership, tinoda status chete.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Nekuti tichipfira, tinoda URL ya site uye Title yayo, zvose zvinogona kuva munzara weSite.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Zvinorewa kubva endpoint yekuvaka (register) zvichiri array inozivisa maelezo ekuzara mwana wemwe wekuti chiri kuitwa.

## Kuita action mu Zapier

Nekuti endpoint yepamusoro yepamusoro uye yakakwana yekuita account creation, unogona kuona action yepamusoro yepamusoro mu Zapier.

Unoziva sei kuita uye kuenda zvakanaka nezvose zvinoremedzwa neversion ya Zapier? Unzwisisa zvakanyanya pano. (link?)

### Kuita action

Kuti kuti kutaura zvakanaka nezvinhu zvinogona kuwedzera sei kutamba ne registration endpoint neZapier, tiri kuita integration neGoogle Forms. Mazuva onozivaka iye form uye kanai inosavaka maererano mabhariro yainguva yenyika Ultimate Multisite.

MuGoogle Forms, unoda form inozvirimo dzinodzidzera zvakasiyana-siyana zvinodzidzera kuti uingane nemembership yakare mu network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nekuti mune Zapier, unoda zapo dzimwe uye unogona kuita connection neform yakanaka iye muGoogle kupfungwa dzinogara mumapuro (spreadsheet) anozivaka data.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Kuti zvakagara! Form yaGoogle Forms inogone kuitwa neZapier uye inogona kuita connection nenetwork. Ndizvi, tiri kuenda kuAction inotevera Trigger inosavaka mazuva onozivaka iye form.

Tsvaga app yenyika Ultimate Multisite uye chigadzirisa. Kuti uri munhu anoda Zap inyi, unogona kutaura option ya Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Panguva iyi yakare, chigadzirisa account inozvinogone kuita connection neZap iye.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Iyi ndiyo nzvimbo inosimba zvikuru pane zvinhu zvakawanda. Tinofanira kuitana (match) zvinhu zvakava kubva muGoogle Forms nezvinhu zvakasiyana-siyana zvakakosha kuti register endpoint, seunogona kuona munzvimbo yakanaka yeiriye iye.

Mune isingiro iyi, tinofanira kuitana username, email, password, name uye URL ya website chete. Zvinotevera zvinogone kuva zvakasiyana-siyana kuti membership dzose dzinoitwa muGoogle Forms dzinogone kutamba pfungwa yenyika uye status yakakosha.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Ndiri kuita zvinhu zvose, ndichatanga nekuita test wakanaka. Pa chivimbo chinotevera, unogona kuona zvose zvinoteverwa kune endpoint, nzira dzakawanda dzinogona kuteverwa uye nzira dzine nguva yakawanda dzinogone kuteverwa.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Tseya test wako weZap (Zap) uye zvinoita zvakanaka. Kana kune kuratidza kunge kune matambudziko, ndichigadzirisa zvose zvinoteverwa kuti zvibatsire. Kubva kuna zvinhu zvakawanda, zvinhu zvakawanda zviri kuonekwa zvichienderana.

### Zvinoteverwa zvese zveendpoint (Complete endpoint parameters)

Iyi nzira yakanaka yakawanda uye zvose zvinogone kuteverwa.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
