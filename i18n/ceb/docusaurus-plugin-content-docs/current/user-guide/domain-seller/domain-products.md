---
title: Mga Produkto ug Presyo sa Domain
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Mga Produkto sa Domain ug Presyo

Ang mga domain product mao kung giun nimo kontrolado ang pagpresyo, TLDs (Top-Level Domains), WHOIS privacy, ug pagpili sa provider. Ang matag domain product kay usa ka standard Multisite Ultimate product nga adunay extra **Domain Settings** tab.

## Paghimo og domain product {#creating-a-domain-product}

1. Adto sa **Network Admin › Ultimate Multisite › Products**
2. I-click ang **Add New**
3. Ihimog ang product type ngadto sa **Domain**
4. I-configure ang **Domain Settings** tab (tan-awa sa ubos)
5. I-save

Ang mga domain product modama nga adunay usa ka purpura nga **Domain** badge sa listahan sa produkto ug mahimong i-filter gamit ang **Domain Products** tab.

## Domain settings tab {#domain-settings-tab}

### Provider {#provider}

Pili kung kinsa ang registrar nga mag-handle sa registration para niining product. Ang default kay ang global nga **Default provider** nga ghitak sa Domain Seller settings.

### Supported TLDs {#supported-tlds}

Biyaan kini nga walay sulod aron makaporma og usa ka **catch-all product** nga magamit sa tanang TLDs nga wala matabangan sa lain nga product.

Isulod ang usa ka listahan nga gihubad sa koma sa mga TLD (pananglitan, `.com, .net, .org`) aron makaporma og usa ka **TLD-specific product** nga magamit lang para sa mga extension nga ato ra.

**Unsaon pagtrabaho ang product matching:** Kung mangita ang customer og domain, ang addon mopili sa labing espesipiko nga matching product. Ang product nga adunay `.com` sa listahan sa TLD ni mas unahon kaysa sa catch-all product. Kung walay TLD-specific product nga magmatch, gamiton ang catch-all. Kung walay mga produkto, dili ipakita ang pagpangita og domain.

### Markup type {#markup-type}

Tulo ka modes ang nagkontrol kung giun gihimo ang imong retail price gikan sa wholesale cost:

| Mode | Unsaon kini pagtrabaho |
|---|---|
| **Percentage** | Nagdadagdag og porsyento sa ibabaw sa wholesale cost. Ang 20% markup sa usa ka $10 nga wholesale domain naghatag og $12. |
| **Fixed markup** | Nagdadagdag og usa ka fixed nga kantidad sa kwarta. Ang $5 markup sa usa ka $10 nga domain naghatag og $15. |
| **Fixed price** | Wala kini mag-alagad ang wholesale cost bisan unsa pa. Kanunay kining mangayo sa kantidad nga imong isulod. |

### Introductory pricing {#introductory-pricing}

Pahiyag sa paghatag og discounted nga presyo sa unang tuig. Magbutang og lahi nga **Introductory price** (presyo sa una nga tuig) uban sa regular nga **Renewal price** (para sa tuig 2 pataas). Makita sa customer ang duha ka presyo inang checkout para masayod sila unsa ang ilang mahimong expectar sa renewal.

### WHOIS privacy {#whois-privacy}

Nagkontrol kung gihatag ba og WHOIS privacy protection alang sa mga domain nga nagparehistro pinaagi niining produkto.

| Setting | Pamaagi sa Paglihok |
|---|---|
| **Disabled** | Walay WHOIS privacy ang gihatag o gi-enable. |
| **Always Included** | Ang WHOIS privacy gi-enable awtomatiko pagparehistro nga walay bayad. |
| **Customer Choice** | Usa ka checkbox ang moapareho sa panahon sa checkout. Ibutang ang **Privacy price** para magbayad kada tuig, o biyaan kini sa $0 aron maghatag og libre. |

Para sa Namecheap, ang WHOIS privacy naggamit og WhoisGuard (luwas gihapon). Para sa OpenSRS, naggamit sila sa OpenSRS privacy service (posibleng adunay gasto sa wholesale).

---

## TLD import ug sync {#tld-import-and-sync}

Ang mga domain product nagpakita sa real-time nga wholesale pricing nga kuha gikan sa konektadong provider. Aron molihok kini, kinahanglan i-import ang mga TLDs.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Nagpadayon kada adlaw pinaagi sa usa ka scheduled cron job sa tanang nakong configured nga providers.

Human sa sync, adto sa bisan unsang domain product's Domain Settings tab ug gamita ang TLD picker aron makita ang available TLDs uban sa ilang kasamtangang wholesale prices.

---

## Auto-renewal {#auto-renewal}

Ang renewal sa domain gihubad sa membership status sa customer:

- Kung mag-renew ang membership ug adunay link nga domain, ang renewal sa domain awtomatikong ma-queue.
- Ang mga pag-attempt sa renewal naggamit sa active payment gateway sa customer.
- Ang mga mapakyas nga renewal gi-retry awtomatiko uban sa exponential backoff.
- Mga email notification ang ipadala alang sa malampusong renewal, mga kapakyasan, ug umaabot nga expiration.

Email template IDs para sa domain lifecycle events:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual domain registration {#admin-manual-domain-registration}

Para magparehistro og domain alang sa usa ka customer nga dili moagi sa checkout:

1. Adto sa **Network Admin › Ultimate Multisite › Register Domain**
2. Pilia ang customer ug iangita ang ngalan sa domain
3. Pun-on ang mga detalye sa kontak sa nagparehistro (ngalan, address, telepono)
4. I-click ang **Register**

Ang rekord sa domain ma-create ug konektado sa account sa customer.
