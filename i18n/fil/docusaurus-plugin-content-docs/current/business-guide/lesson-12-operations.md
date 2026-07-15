---
title: 'Lesson 12: Pagpapatakbo ng Negosyo'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lesson 12: Pagpapatakbo ng Negosyo

Ang isang plataporma ay hindi isang proyektong tatapusin—ito ay isang negosyong patakbuhin. Tinatalakay ng araling ito ang pang-araw-araw na operasyon ng pamamahala sa FitSite: suporta, pagbabayad (billing), pagpapanatili (maintenance), at pagpapasaya sa mga customer.

## Saan Tayo Tumigil {#where-we-left-off}

Ang FitSite ay live na at nagre-rehistro na ang mga customer. Ngayon, kailangan mong patakbuhin ang operasyon nang matatag.

## Pang-araw-araw na Operasyon {#daily-operations}

### Pagmomonitor (Monitoring) {#monitoring}

Tingnan ito araw-araw (o mag-set up ng mga alerto):

- **Uptime**: Accessible ba ang plataporma? Gumamit ng uptime monitoring service.
- **Bagong pagrehistro (New signups)**: Ilan ang bagong customer na nag-sign up ngayon?
- **Pagkabigo ng pagbabayad (Failed payments)**: Mayroon bang mga pagkabigo sa pagbabayad na kailangan ng atensyon?
- **Mga kahilingan sa suporta (Support requests)**: Mayroon bang mga tanong ng customer na hindi pa nasasagot?

### Suporta sa Customer (Customer Support) {#customer-support}

Ang pagtuon mo sa isang niche ay isang kalamangan dito. Dahil ang lahat ng iyong customer ay mga fitness studio, paulit-ulit mong makikita ang parehong mga tanong:

**Mga karaniwang tanong na makukuha mo:**

- "Paano ko ina-update ang iskedyul ng klase ko?"
- "Pwede ko bang baguhin ang kulay ng site ko?"
- "Paano ako magdadagdag ng bagong trainer sa site ko?"
- "Hindi gumagana ang domain ko"
- "Paano ko i-cancel/i-upgrade ang plan ko?"

Buuin ang iyong *knowledge base* (sinimulan sa Lesson 8) batay sa mga paulit-ulit na tanong na ito. Ang bawat *support ticket* na pwedeng maging *knowledge base article* ay senyales na kailangan mong magsulat ng artikulo na iyon.

### Mga Antas ng Suporta (Support Tiers) {#support-tiers}

Habang lumalaki ka, i-istraktura ang suporta ayon sa plan:

| Plan | Support Level | Response Time |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 hours |
| Growth | Email support | 24 hours |
| Pro | Priority email + onboarding call | 4 hours |

Ang [Support Tickets addon](/addons/support-tickets) ay makakatulong sa pag-manage ng mga kahilingan sa suporta sa loob ng plataporma.

## Operasyon sa Pagbabayad (Billing Operations) {#billing-operations}

### Paulit-ulit na Pagbabayad (Recurring Payments) {#recurring-payments}

Awtomatikong hinahawakan ng Ultimate Multisite ang paulit-ulit na pagbabayad sa pamamagitan ng iyong payment gateway. Ang trabaho mo ay bantayan ang mga sumusunod:

- **Failed payments**: Agad itong sundan up. Karamihan sa pagkabigo ay dahil sa expired na card, hindi dahil sa sinasadyang pag-cancel.
- **Dunning**: Mag-set up ng automated retry logic sa pamamagitan ng iyong payment gateway (mahusay itong hinahawakan ng Stripe)
- **Cancellation requests**: Alamin kung bakit umaalis ang mga customer. Ang bawat pag-cancel ay feedback.

### Pamamahala ng Membership (Managing Memberships) {#managing-memberships}

Pumunta sa **Ultimate Multisite > Memberships** para sa:

- Tingnan ang lahat ng aktibong subscription
- Harapin ang mga kahilingan na mag-upgrade at mag-downgrade
- Magproseso ng refund kung kinakailangan
- Pamahalaan ang pag-expire ng trial

Tingnan ang [Managing Memberships](/user-guide/administration/managing-memberships) para sa kumpletong reference.

### Invoicing {#invoicing}

Siguraduhin na tama ang pag-generate ng mga invoice para sa bawat pagbabayad. Maaaring kailanganin ng mga customer ang mga invoice para sa pag-uulat ng gastos sa negosyo. Tingnan ang [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Pagpapanatili ng Plataporma (Platform Maintenance) {#platform-maintenance}

### Pag-update ng WordPress at Plugin {#wordpress-and-plugin-updates}

Bilang network administrator, ikaw ang responsable sa:

- **WordPress core updates**: Subukan muna sa isang *staging site* bago ilapat sa *production*
- **Plugin updates**: Pareho—subukan muna, pagkatapos ay ilapat sa buong network
- **Theme updates**: I-verify na tama pa rin ang hitsura ng mga template pagkatapos ng pag-update ng theme
- **Ultimate Multisite updates**: Sundin ang *changelog* at subukan bago i-update

:::warning Huwag Mag-update sa Production Nang Walang Pagsubok
Ang isang nasirang update ay makakaapekto sa bawat customer site sa iyong network. Laging subukan ang mga update sa isang *staging copy* ng iyong network muna.
:::

### Seguridad (Security) {#security}

- Panatilihing updated ang lahat ng software
- Gumamit ng malalakas na password at two-factor authentication para sa admin accounts
- Bantayan ang mga kahina-hinalang aktibidad
- Maghanda ng plano para sa mga insidente sa seguridad

### Pagganap (Performance) {#performance}

Habang lumalaki ang iyong network, subaybayan ang:

- **Page load times**: Mabilis ba ang mga site ng customer?
- **Server resource usage**: CPU, memory, disk space
- **Database performance**: Ang malalaking network ay nangangailangan ng database optimization sa paglipas ng panahon

Isaalang-alang ang pag-implementa ng caching (page cache, object cache) at CDN kung hindi mo pa ito ginagawa. Ang [Cloudflare integration](/user-guide/host-integrations/cloudflare) ay humahawak sa malaking bahagi nito.

## Pamamahala ng Lifecycle ng Customer (Customer Lifecycle Management) {#customer-lifecycle-management}

### Pagbawas ng Churn {#reducing-churn}

Ang *Churn* ay ang porsyento ng mga customer na nag-cancel bawat buwan. Para sa isang subscription business, ang pagbawas ng *churn* ay kasinghalaga ng pagkuha ng mga bagong customer.

**Mga karaniwang dahilan kung bakit nagcha-churn ang mga customer ng fitness studio:**

- Hindi nila ma-figure out kung paano gamitin ang plataporma → pagandahin ang *onboarding*
- Hindi maganda ang hitsura ng site → pagandahin ang mga template
- Hindi nila nakita ang halaga → pagandahin ang mga features o komunikasyon
- Nakahanap sila ng mas murang alternatibo → patibayin ang niche value mo
- Sarado na ang kanilang negosyo → hindi maiiwasan, ngunit i-track ito nang hiwalay

### Paghikayat ng Pag-upgrade (Encouraging Upgrades) {#encouraging-upgrades}

Ang mga customer sa Starter na nagtatagumpay ay dapat hikayatin na mag-upgrade:

- Kapag naabot nila ang limitasyon ng plan (sites, storage), magpakita ng mga *upgrade prompts*
- Magpadala ng targeted emails na nagha-highlight ng mga features ng Growth plan na makikinabang sila
- Ipakita kung ano ang nabuo ng mga customer sa Growth/Pro

### Win-Back Campaigns {#win-back-campaigns}

Kapag nag-cancel ang isang customer:

1. Magtanong kung bakit (exit survey o email)
2. Tugunan ang kanilang pag-aalala kung posible
3. Mag-alok ng diskwento para bumalik (30-60 araw pagkatapos ng pag-cancel)

## Lingguhan at Buwanang Routine {#weekly-and-monthly-routines}

### Lingguhan (Weekly) {#weekly}

- Review ang mga bagong pagrehistro at mga pag-cancel
- Tumugon sa lahat ng bukas na *support tickets*
- Tingnan ang pagganap at *uptime* ng plataporma
- Review ang anumang pagkabigo sa pagbabayad

### Buwanan (Monthly) {#monthly}

- Suriin ang mga pangunahing metrics (MRR, churn, bagong customer, upgrades)
- Mag-apply ng WordPress at plugin updates (pagkatapos ng staging test)
- Review at i-update ang *knowledge base* batay sa mga pattern ng suporta
- Magpadala ng newsletter o update sa mga customer (bagong features, tips, balita sa fitness industry)

### Quarterly (Quarterly) {#quarterly}

- Suriin ang pagpepresyo laban sa mga kakumpitensya at feedback ng customer
- Tayahin ang mga disenyo ng template -- kailangan ba itong i-refresh?
- Suriin ang hosting capacity -- kailangan mo bang mag-scale?
- Review at pagandahin ang *onboarding* batay sa *activation data*

## Ano ang Binuo Natin sa Araling Ito {#what-we-built-this-lesson}

- **Pang-araw-araw na monitoring routines** para sa *uptime*, pagrehistro, pagbabayad, at suporta
- **Isinaayos na istraktura ng suporta** na tugma sa mga antas ng plan
- **Operasyon sa pagbabayad** kabilang ang *dunning* at paghawak ng pag-cancel
- **Mga pamamaraan ng pagpapanatili** para sa updates, seguridad, at pagganap
- **Mga estratehiya sa pagbawas ng churn** na partikular sa fitness niche
- **Lingguhan, buwanan, at quarterly operational routines**

---

**Next:** [Lesson 13: Scaling Up](lesson-13-growth) -- pagpapalaki ng FitSite mula sa isang maliit na operasyon patungo sa isang tunay na negosyo.
