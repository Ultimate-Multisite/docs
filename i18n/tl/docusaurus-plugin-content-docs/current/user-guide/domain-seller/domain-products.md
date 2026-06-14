---
title: Mga Produkto at Presyo ng Domain
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Mga Produkto at Presyo ng Domain

Ang mga domain product ay kung paano mo kokontrol ang pagpepresyo, TLDs (Top-Level Domains), WHOIS privacy, at pagpili ng provider. Ang bawat domain product ay isang standard na Multisite Ultimate product na may dagdag na tab na **Domain Settings**.

## Paglikha ng domain product

1. Pumunta sa **Network Admin › Ultimate Multisite › Products**
2. I-click ang **Add New**
3. Itakda ang uri ng produkto sa **Domain**
4. I-configure ang tab na **Domain Settings** (tingnan sa ibaba)
5. I-save

Ang mga domain product ay lalabas na may lila (**purple**) na badge na **Domain** sa listahan ng produkto at pwedeng i-filter gamit ang tab na **Domain Products**.

## Tab ng Domain settings

### Provider

Pumili kung aling registrar ang bahalang magrehistro para sa produktong ito. Ang default ay ang pandaigdigang **Default provider** na itinakda sa Domain Seller settings.

### Mga Suportadong TLDs

Hayaan itong walang laman para gumawa ng isang **catch-all product** na naaangkop sa lahat ng TLD na hindi tumutugma sa ibang produkto.

Magpasok ng listahan ng mga TLD na pinaghihiwalay ng comma (halimbawa: `.com, .net, .org`) para gumawa ng isang **TLD-specific product** na naaangkop lamang sa mga extension na iyon.

**Paano gumagana ang pagtutugma ng produkto:** Kapag naghahanap ang customer ng domain, pipiliin ng addon ang pinaka-espesyal na tumutugmang produkto. Ang produktong may `.com` sa listahan ng TLD nito ay mas uunahin kaysa sa isang catch-all product. Kung walang tumutugmang TLD-specific product, gagamitin ang catch-all. Kung walang mga produkto, hindi ipapakita ang paghahanap ng domain.

### Markup type (Uri ng Markup)

Tatlong paraan ang nagkokontrol kung paano kinakalkula ang iyong retail price mula sa wholesale cost:

| Mode | Paano ito gumagana |
|---|---|
| **Percentage** | Nagdaragdag ng porsyento sa ibabaw ng wholesale cost. Ang 20% markup sa isang $10 na wholesale domain ay magbibigay ng $12. |
| **Fixed markup** | Nagdaragdag ng isang nakapirming halaga sa dolyar. Ang $5 markup sa isang $10 na domain ay magbibigay ng $15. |
| **Fixed price** | Binabalewala ang wholesale cost nang tuluyan. Palaging kinakawalan ang halagang iyong ipinasok. |

### Introductory pricing (Panimulang presyo)

Pahintayin ang pag-aalok ng discounted na presyo para sa unang taon. Magtakda ng hiwalay na **Introductory price** (presyong pang-unang taon) kasabay ng regular na **Renewal price** (para sa taon 2 pataas). Makikita ng customer ang parehong presyo habang nag-checkout para malaman nila kung ano ang aasahan nila pagdating ng renewal.

### WHOIS privacy

Kontrolin kung mayroong proteksyon ng WHOIS privacy para sa mga domain na naka-register gamit ang produktong ito.

| Setting | Pag-uugali (Behaviour) |
|---|---|
| **Disabled** | Walang alok o enabled na WHOIS privacy. |
| **Always Included** | Awtomatikong naka-enable ang WHOIS privacy pag-rehistro nang walang bayad. |
| **Customer Choice** | May lalabas na checkbox habang nag-checkout. Itakda ang **Privacy price** para singilin bawat taon, o iwanan sa $0 para maging libre ito. |

Para sa Namecheap, gumagamit ng WhoisGuard (palaging libre) ang WHOIS privacy. Para sa OpenSRS, ginagamit nito ang OpenSRS privacy service (maaaring may bayad depende sa wholesale).

---

## TLD import at sync

Ang mga domain product ay nagpapakita ng real-time na wholesale pricing na kinuha mula sa konektadong provider. Para gumana ito, dapat i-import ang mga TLDs.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (bawat provider)
- **Automatic sync:** Tumakbo araw-araw via isang scheduled cron job sa lahat ng naka-configure na provider.

Pagkatapos mag-sync, pumunta sa anumang domain product's Domain Settings tab at gamitin ang TLD picker para makita ang mga available na TLDs kasama ang kanilang kasalukuyang wholesale prices.

---

## Auto-renewal

Ang renewal ng domain ay nakatali sa membership status ng customer:

- Kapag nag-renew ang membership at may naka-link na domain, awtomatikong magkakaroon ng queue ang renewal ng domain
- Ang mga pagtatangka ng renewal ay gumagamit ng active payment gateway ng customer
- Ang mga nabigong renewal ay awtomatikong susubukan muli gamit ang exponential backoff
- Magpapadala ng email notification para sa matagumpay na renewal, mga failure, at paparating na expiration.

Email template IDs para sa mga pangyayari sa lifecycle ng domain:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual na pagpaparehistro ng domain

Para magparehistro ng domain para sa isang customer nang hindi sila dumadaan sa checkout:

1. Pumunta sa **Network Admin › Ultimate Multisite › Register Domain**
2. Piliin ang customer at ilagay ang pangalan ng domain
3. Punuan ang mga detalye ng contact ng nagpaparehistro (pangalan, address, telepono)
4. I-click ang **Register**

Ang record ng domain ay gagawin at ikokonekta sa account ng customer.
