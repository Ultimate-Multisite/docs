---
title: Mga Produkto at Pagpepresyo ng Domain
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Products at Pagpepresyo

Ang mga domain product ay kung paano mo kokontrolin ang pagpepresyo, TLDs, WHOIS privacy, at ang pagpili ng provider. Ang bawat domain product ay isang standard Multisite Ultimate product na may dagdag na tab na **Domain Settings**.

## Paglikha ng domain product

1. Pumunta sa **Network Admin › Ultimate Multisite › Products**
2. I-click ang **Add New**
3. Itakda ang product type sa **Domain**
4. I-configure ang tab na **Domain Settings** (tingnan sa ibaba)
5. I-save

Makikita ang mga domain product na may kulay lila na **Domain** badge sa listahan ng produkto at maaari itong i-filter gamit ang **Domain Products** tab.

## Domain settings tab

### Provider

Piliin kung anong registrar ang magha-handle ng pagpaparehistro para sa product na ito. Default itong gagamit ng global **Default provider** na itinakda sa Domain Seller settings.

### Supported TLDs

Iwanang blangko para makagawa ng **catch-all product** na magagamit sa lahat ng TLD na hindi tugma sa ibang product.

Maglagay ng comma-separated list ng TLDs (hal., `.com, .net, .org`) para makagawa ng **TLD-specific product** na magagamit lamang sa mga extension na iyon.

**Paano gumagana ang product matching:** Kapag naghahanap ang isang customer ng domain, pipiliin ng addon ang pinaka-specific na tumutugma na product. Ang product na may `.com` sa TLD list nito ay mas may prayoridad kaysa sa catch-all product. Kung walang TLD-specific product na tumutugma, gagamitin ang catch-all. Kung walang products, hindi ipapakita ang domain search.

### Markup type

Tatlong mode ang kumokontrol kung paano kinakalkula ang iyong retail price mula sa wholesale cost:

| Mode | Paano ito gumagana |
|---|---|
| **Percentage** | Nagdaragdag ng porsyento sa wholesale cost. Ang 20% markup sa $10 wholesale domain ay magbibigay ng $12. |
| **Fixed markup** | Nagdaragdag ng fixed dollar amount. Ang $5 markup sa $10 domain ay magbibigay ng $15. |
| **Fixed price** | Hindi pinapansin ang wholesale cost. Palaging sisingilin ang halaga na iyong inilagay. |

### Introductory pricing

I-enable ito para mag-alok ng discounted first-year price. Magtakda ng hiwalay na **Introductory price** (ang presyo sa unang taon) kasabay ng regular na **Renewal price** (taon 2 pataas). Makikita ng customer ang dalawang presyo na ipinapakita habang nagche-checkout para malaman nila kung ano ang aasahan sa renewal.

### WHOIS privacy

Kumokontrol ito kung ang WHOIS privacy protection ay iaalok para sa mga domain na narehistro sa pamamagitan ng product na ito.

| Setting | Behavior |
|---|---|
| **Disabled** | Hindi kailanman iaalok o i-e-enable ang WHOIS privacy. |
| **Always Included** | Ang WHOIS privacy ay awtomatikong naka-enable sa pagpaparehistro nang walang bayad. |
| **Customer Choice** | May lalabas na checkbox habang nagche-checkout. Itakda ang **Privacy price** para magsingil bawat taon, o iwanan ito sa $0 para libre itong ialok. |

Para sa Namecheap, ang WHOIS privacy ay gumagamit ng WhoisGuard (palaging libre). Para sa OpenSRS, gumagamit ito ng OpenSRS privacy service (maaaring may bayad sa wholesale).

---

## TLD import at sync

Nagpapakita ang mga domain product ng real-time wholesale pricing na kinukuha mula sa konektadong provider. Para gumana ito, kailangang i-import ang mga TLD.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Araw-araw itong tumatakbo sa pamamagitan ng isang scheduled cron job sa lahat ng naka-configure na providers

Pagkatapos mag-sync, pumunta sa anumang Domain Settings tab ng domain product at gamitin ang TLD picker para makita ang mga available na TLD kasama ang kasalukuyan nilang wholesale prices.

---

## Auto-renewal

Ang mga domain renewal ay nakatali sa membership status ng customer:

- Kapag nag-renew ang membership at may nakakabit na domain, awtomatikong iine-queue ang domain renewal
- Ang mga pagtatangka sa renewal ay gumagamit ng active payment gateway ng customer
- Ang mga pagkabigong renewal ay awtomatikong susubukang ulitin (retried) gamit ang exponential backoff
- Magpapadala ng email notification para sa matagumpay na renewal, pagkabigo, at mga paparating na expiration

Email template IDs para sa domain lifecycle events:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual domain registration

Para magparehistro ng domain para sa isang customer nang hindi sila dumadaan sa checkout:

1. Pumunta sa **Network Admin › Ultimate Multisite › Register Domain**
2. Piliin ang customer at ilagay ang domain name
3. Punan ang contact details ng registrant (pangalan, address, telepono)
4. I-click ang **Register**

Ang domain record ay nililikha at ikinakabit sa account ng customer.
