---
title: 'Aralin 12: Pagpapatakbo ng Negosyo'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Aralin 12: Pagpapatakbo ng Negosyo

Ang platform ay hindi isang proyektong tinatapos mo -- ito ay negosyong pinapatakbo mo. Saklaw ng araling ito ang pang-araw-araw na operasyon ng pamamahala sa FitSite: suporta, billing, pagpapanatili, at pagpapanatiling masaya ng mga customer.

## Kung Saan Tayo Huminto

Live na ang FitSite at nagsa-sign up na ang mga customer. Ngayon kailangan mong patakbuhin ang operasyon nang sustenable.

## Pang-araw-araw na Operasyon

### Monitoring

Suriin ang mga ito araw-araw (o mag-set up ng mga alerto):

- **Uptime**: Naa-access ba ang platform? Gumamit ng uptime monitoring service.
- **Mga bagong signup**: Ilang bagong customer ang nagsign up ngayong araw?
- **Mga bigong bayad**: Mayroon bang mga kabiguan sa pagbabayad na kailangang asikasuhin?
- **Mga kahilingan sa suporta**: Mayroon bang mga tanong ng customer na hindi pa nasasagot?

### Suporta sa Customer

Bentahe rito ang iyong niche focus. Dahil lahat ng iyong customer ay mga fitness studio, paulit-ulit mong makikita ang parehong mga tanong:

**Mga karaniwang tanong na matatanggap mo:**

- "Paano ko ia-update ang iskedyul ng klase ko?"
- "Maaari ko bang baguhin ang mga kulay ng site ko?"
- "Paano ako magdadagdag ng bagong trainer sa site ko?"
- "Hindi gumagana ang domain ko"
- "Paano ko kakanselahin/ia-upgrade ang plan ko?"

Buuin ang iyong knowledge base (sinimulan sa Aralin 8) sa paligid ng mga paulit-ulit na tanong na ito. Bawat support ticket na maaari sanang naging artikulo sa knowledge base ay senyales para isulat ang artikulong iyon.

### Mga Antas ng Suporta

Habang lumalaki ka, ayusin ang suporta ayon sa plan:

| Plan | Antas ng Suporta | Oras ng Tugon |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 oras |
| Growth | Email support | 24 oras |
| Pro | Priority email + onboarding call | 4 oras |

Makakatulong ang [Support Tickets addon](/addons/support-tickets) sa pamamahala ng mga kahilingan sa suporta sa loob ng platform.

## Mga Operasyon sa Billing

### Mga Umuulit na Bayad

Awtomatikong pinangangasiwaan ng Ultimate Multisite ang umuulit na billing sa pamamagitan ng iyong payment gateway. Ang trabaho mo ay mag-monitor para sa:

- **Mga bigong bayad**: Mag-follow up agad. Karamihan sa mga kabiguan ay expired na mga card, hindi sinadyang pagkansela.
- **Dunning**: Mag-set up ng automated retry logic sa pamamagitan ng iyong payment gateway (mahusay itong hinahawakan ng Stripe)
- **Mga kahilingan sa pagkansela**: Unawain kung bakit umaalis ang mga customer. Bawat pagkansela ay feedback.

### Pamamahala ng Mga Membership

Mag-navigate sa **Ultimate Multisite > Memberships** para:

- Tingnan ang lahat ng aktibong subscription
- Pangasiwaan ang mga kahilingan sa upgrade at downgrade
- Magproseso ng refund kapag kinakailangan
- Pamahalaan ang mga pag-expire ng trial

Tingnan ang [Pamamahala ng Mga Membership](/user-guide/administration/managing-memberships) para sa buong sanggunian.

### Invoicing

Tiyaking tama ang pagkakagawa ng mga invoice para sa bawat bayad. Maaaring kailanganin ng mga customer ang mga invoice para sa pag-uulat ng gastusin ng negosyo. Tingnan ang [Pamamahala ng Mga Bayad at Invoice](/user-guide/administration/managing-payments-and-invoices).

## Pagpapanatili ng Platform

### Mga Update sa WordPress at Plugin

Bilang network administrator, responsable ka sa:

- **Mga update sa WordPress core**: Subukan sa staging site bago ilapat sa production
- **Mga update sa plugin**: Ganoon din -- subukan muna, pagkatapos ay ilapat sa buong network
- **Mga update sa theme**: Tiyaking tama pa rin ang hitsura ng mga template pagkatapos ng mga update sa theme
- **Mga update sa Ultimate Multisite**: Sundan ang changelog at subukan bago mag-update

:::warning Huwag Kailanman Mag-update sa Production Nang Walang Pagsusuri
Ang sirang update ay nakaaapekto sa bawat customer site sa iyong network. Palaging subukan muna ang mga update sa staging copy ng iyong network.
:::

### Seguridad

- Panatilihing updated ang lahat ng software
- Gumamit ng malalakas na password at two-factor authentication para sa mga admin account
- Mag-monitor para sa kahina-hinalang aktibidad
- Magkaroon ng plan para sa mga insidente sa seguridad

### Performance

Habang lumalaki ang iyong network, i-monitor ang:

- **Mga oras ng pag-load ng page**: Mabilis ba ang mga customer site?
- **Paggamit ng server resource**: CPU, memory, disk space
- **Performance ng database**: Kailangan ng malalaking network ang pag-optimize ng database sa paglipas ng panahon

Isaalang-alang ang pagpapatupad ng caching (page cache, object cache) at CDN kung hindi mo pa nagagawa. Hinahawakan ng [Cloudflare integration](/user-guide/host-integrations/cloudflare) ang malaking bahagi nito.

## Pamamahala ng Lifecycle ng Customer

### Pagbabawas ng Churn

Ang churn ay ang porsyento ng mga customer na nagkakansela bawat buwan. Para sa isang subscription business, ang pagbabawas ng churn ay kasinghalaga ng pagkuha ng mga bagong customer.

**Mga karaniwang dahilan kung bakit nagchi-churn ang mga customer na fitness studio:**

- Hindi nila maunawaan kung paano gamitin ang platform → pagbutihin ang onboarding
- Hindi sapat ang ganda ng site → pagbutihin ang mga template
- Hindi nila nakita ang halaga → pagbutihin ang mga feature o komunikasyon
- Nakahanap sila ng mas murang alternatibo → patibayin ang iyong niche value
- Nagsara ang kanilang negosyo → hindi maiiwasan, ngunit i-track ito nang hiwalay

### Paghikayat ng Mga Upgrade

Ang mga customer sa Starter na nagtatagumpay ay dapat hikayating mag-upgrade:

- Kapag naabot nila ang mga limitasyon ng plan (mga site, storage), magpakita ng mga upgrade prompt
- Magpadala ng targeted email na nagha-highlight ng mga feature ng Growth plan na mapakikinabangan nila
- Ipakita kung ano ang nabuo ng mga customer sa Growth/Pro

### Mga Win-Back Campaign

Kapag nagkansela ang isang customer:

1. Itanong kung bakit (exit survey o email)
2. Tugunan ang kanilang alalahanin kung maaari
3. Mag-alok ng discount para bumalik (30-60 araw pagkatapos ng pagkansela)

## Lingguhan at Buwanang Mga Routine

### Lingguhan

- Suriin ang mga bagong signup at pagkansela
- Sagutin ang lahat ng bukas na support ticket
- Suriin ang performance at uptime ng platform
- Suriin ang anumang bigong bayad

### Buwanan

- Suriin ang mahahalagang sukatan (MRR, churn, mga bagong customer, upgrades)
- Ilapat ang mga update sa WordPress at plugin (pagkatapos ng staging test)
- Suriin at i-update ang knowledge base batay sa mga pattern ng suporta
- Magpadala ng newsletter o update sa mga customer (mga bagong feature, tips, balita sa industriya ng fitness)

### Quarterly

- Suriin ang pricing kumpara sa mga competitor at feedback ng customer
- Suriin ang mga disenyo ng template -- kailangan ba ng pag-refresh?
- Tayahin ang hosting capacity -- kailangan mo bang mag-scale?
- Suriin at pagbutihin ang onboarding batay sa activation data

## Ang Binuo Natin sa Araling Ito

- **Pang-araw-araw na mga routine sa pagmamanman** para sa uptime, mga pagpaparehistro, mga pagbabayad, at suporta
- **Isang tiered na istruktura ng suporta** na tumutugma sa mga antas ng plan
- **Mga operasyon sa billing** kabilang ang dunning at paghawak ng pagkansela
- **Mga pamamaraan sa maintenance** para sa mga update, seguridad, at performance
- **Mga estratehiya sa pagbabawas ng churn** na partikular sa fitness niche
- **Lingguhan, buwanan, at quarterly na mga routine sa operasyon**

---

**Susunod:** [Aralin 13: Pagpapalawak](lesson-13-growth) -- pagpapalago ng FitSite mula sa isang maliit na operasyon tungo sa isang tunay na negosyo.
