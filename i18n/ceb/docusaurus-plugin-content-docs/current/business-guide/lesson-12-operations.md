---
title: 'Leksyon 12: Pagpadagan sa Negosyo'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lesson 12: Pagpadagan sa Negosyo

Ang usa ka platform dili proyekto nga matapos—kini usa ka negosyo nga imong pagadumalahan. Kini nga leksyon naghisgot sa adlaw-adlaw nga operasyon sa pagdumala sa FitSite: suporta, billing (pagbayad), maintenance, ug pagpabilin nga malipayon ang mga kustomer.

## Asa Kita Nagpahunong

Ang FitSite anaa na og live ug nagsugod na og pagparehistro ang mga kustomer. Karon kinahanglan nimo i-padagan ang operasyon sa usa ka sustainable nga paagi.

## Adlaw-adlaw nga Operasyon

### Pagmonitor (Monitoring)

Susiha kini matag adlaw (o mag-set up og alerts):

- **Uptime**: Ma-access ba ang platform? Gamit og uptime monitoring service.
- **Bag-ong pagparehistro (New signups)**: Pila ka bag-ong kustomer ang nagparehistro karon?
- **Napakyas nga bayad (Failed payments)**: Aduna bay mga pagbayad nga napakyas nga kinahanglan og atensyon?
- **Mga hangyo sa suporta (Support requests)**: Aduna ba’y pangutana gikan sa kustomer nga wala pa masulti og tubag?

### Suporta sa Kustomer (Customer Support)

Ang imong focus sa usa ka niche maoy bentaha dinhi. Tungod kay ang tanan nimong kustomer mga fitness studio, makakita ka pag-usab sa parehas nga pangutana:

**Kasagarang pangutana nga imong madawat:**

- "Kumusta nako pag-update sa akong class schedule?"
- "Pwede ba nako usbon ang kolor sa site nako?"
- "Kumusta nako pagdugang og bag-ong trainer sa akong site?"
- "Dili moandar ang domain nako"
- "Kumusta nako pagkansela/pag-upgrade sa akong plan?"

Pagmugna og imong knowledge base (nga gisugdan sa Lesson 8) bahin niining kanunay nga pangutana. Ang matag support ticket nga mahimong maayong article sa knowledge base usa ka senyales nga kinahanglan kang magsulat nianang article.

### Mga Lebel sa Suporta (Support Tiers)

Samtang nagkadako ka, i-structure ang suporta sumala sa plan:

| Plan | Support Level | Response Time |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 hours |
| Growth | Email support | 24 hours |
| Pro | Priority email + onboarding call | 4 hours |

Ang [Support Tickets addon](/addons/support-tickets) makatabang sa pagdumala sa mga hangyo sa suporta sulod sa platform.

## Operasyon sa Billing (Billing Operations)

### Pagbayad nga Regular (Recurring Payments)

Ang Ultimate Multisite mo-handle og automated recurring billing pinaagi sa imong payment gateway. Ang trabaho nimo mao ang pagmonitor niini:

- **Napakyas nga bayad**: Dali kaayo nga motubag. Kadaghanan sa mga pagkapakyas kay expired cards, dili kini tinuyo nga pagkansela.
- **Dunning**: Mag-set up og automated retry logic pinaagi sa imong payment gateway (maayo ni ang Stripe)
- **Mga hangyo sa pagkansela**: Sabton kung nganong molakaw ang mga kustomer. Ang matag pagkansela usa ka feedback.

### Pagdumala sa Memberships

adto sa **Ultimate Multisite > Memberships** aron:

- Makita tanang aktibo nga subscriptions
- Ma-handle ang mga hangyo og pag-upgrade ug downgrade
- Ma-process ang refunds kung gikinahanglan
- Ma-manage ang pagkahuman sa trial

Tan-awa ang [Managing Memberships](/user-guide/administration/managing-memberships) alang sa kompleto nga reference.

### Invoicing (Pagmugna og Invoice)

Siguroha nga husto ang pagmugna og invoices para sa matag bayad. Ang mga kustomer mahimong magkinahanglan og invoices alang sa business expense reporting. Tan-awa ang [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Pagmintina sa Platform (Platform Maintenance)

### WordPress ug Plugin Updates

Isip network administrator, ikaw responsable sa:

- **WordPress core updates**: Sulayi una kini sa usa ka staging site sa dili pa i-apply sa production
- **Plugin updates**: Parehas—sulayi una, dayon i-apply sa tibuok network
- **Theme updates**: I-verify kung husto pa gihapon ang hitsura sa templates human og theme update
- **Ultimate Multisite updates**: Sunda ang changelog ug sulayi una sa dili pa i-update

:::warning Never Update in Production Without Testing
Ang nabali nga update makaapekto sa matag customer site sa imong network. Kanunay sulayi ang mga update sa usa ka staging copy sa imong network una.
:::

### Seguridad (Security)

- Ipadayon ang pag-update sa tanang software
- Gamit og lig-on nga passwords ug two-factor authentication para sa admin accounts
- Monitor alang sa bisan unsang katingad-an o kahimtang
- Pagplano og aksyon kon adunay security incident

### Performance (Pagganap)

Samtang nagkadako ang imong network, monitor:

- **Page load times**: Dali ba ang mga site sa kustomer?
- **Server resource usage**: CPU, memory, disk space
- **Database performance**: Ang dagkong networks magkinahanglan og database optimization paglabay sa panahon

Pagkonsiderar sa pagpatuman og caching (page cache, object cache) ug usa ka CDN kon wala pa nimo kini gibuhat. Ang [Cloudflare integration](/user-guide/host-integrations/cloudflare) mo-handle niini og dako nga bahin.

## Pagdumala sa Kustomer Lifecycle (Customer Lifecycle Management)

### Pagkunhod sa Churn (Reducing Churn)

Ang churn mao ang porsyento sa mga kustomer nga makansela matag bulan. Alang sa usa ka subscription business, ang pagkunhod sa churn importante sama sa pagkuha og bag-ong kustomer.

**Kasagarang rason nganong molakaw ang mga kustomer sa fitness studio:**

- Wala sila makasabot unsaon paggamit sa platform → paayoa ang onboarding
- Dili nindot tan-awon ang site → paayoa ang templates
- Wala silay nakita nga value → paayoa ang features o komunikasyon
- Nakakita sila og mas barato nga alternatibo → palig-on ang imong niche value
- Nagkahitabo ang ilang negosyo → dili maiwasan, apan i-track kini pagahiwalay

### Pagdasig sa Pag-upgrade (Encouraging Upgrades)

Ang mga kustomer sa Starter nga nagmalampuson kinahanglan nga dasigon og upgrade:

- Kung moabot sila sa limitasyon sa plan (sites, storage), ipakita ang upgrade prompts
- Pagpadala og targeted emails nga naghisgot sa features sa Growth plan nga makabenepisyo kanila
- Ipakita kung unsa na ka-build sa mga kustomer sa Growth/Pro

### Win-Back Campaigns

Kung adunay kustomer nga nakakansela:

1. Pangutan-a nganong (exit survey o email)
2. Sulbii ang ilang kabalaka kon mahimo
3. Magtanyag og discount aron mobalik (30-60 ka adlaw pagkahuman sa pagkansela)

## Weekly ug Monthly Routines

### Kada Semana (Weekly)

- Review sa bag-ong pagparehistro ug mga pagkansela
- Tubagi ang tanang bukas nga support tickets
- Susiha ang performance ug uptime sa platform
- Review sa bisan unsang napakyas nga bayad

### Kada Bulan (Monthly)

- Pag-analisar sa importanteng metrics (MRR, churn, bag-ong kustomer, upgrades)
- I-apply ang WordPress ug plugin updates (human og staging test)
- Review ug i-update ang knowledge base base sa support patterns
- Pagpadala og newsletter o update sa mga kustomer (bag-ong features, tips, balita sa fitness industry)

### Kada Kwarter (Quarterly)

- I-review ang pagpariho batok sa competitors ug feedback sa kustomer
- Ebalwasyon sa template designs -- kinahanglan ba kini og refresh?
- Pag-assess sa hosting capacity -- kinahanglan ba nimo mag-scale?
- Review ug paayoa ang onboarding base sa activation data

## Unsa ang Atong Gihimo Niining Leksyon

- **Adlaw-adlaw nga monitoring routines** alang sa uptime, signups, bayad, ug suporta
- **Usa ka tiered support structure** nga nagkaparehas sa mga lebel sa plan
- **Billing operations** lakip ang dunning ug pagdumala sa pagkansela
- **Maintenance procedures** para sa updates, seguridad, ug performance
- **Churn reduction strategies** nga espesipiko sa fitness niche
- **Weekly, monthly, ug quarterly operational routines**

---

**Next:** [Lesson 13: Scaling Up](lesson-13-growth) -- pagpadako sa FitSite gikan sa usa ka gamay nga operasyon ngadto sa tinuod nga negosyo.
