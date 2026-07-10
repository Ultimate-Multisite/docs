---
title: Bidhaa za Domain na Bei
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Bidhaa za Nje ya Nchi na Bei {#domain-products-and-pricing}

Bidhaa za nje ya nchi (Domain products) ni jinsi unadhibiti bei, TLDs, faragha ya WHOIS, na kuchagua mtoa huduma. Kila bidhaa ya nje ya nchi ni bidhaa ya kawaida ya Ultimate Multisite iliyo na tab kombo ya ziada iitwayo **Domain Settings**.

## Kuunda bidhaa ya nje ya nchi {#creating-a-domain-product}

1. Nenda kwa **Network Admin › Ultimate Multisite › Products**
2. Bonyeza **Add New**
3. Weka aina ya bidhaa kuwa **Domain**
4. Sanifisha tab kombo ya **Domain Settings** (ona chini)
5. Hifadhi

Bidhaa za nje ya nchi zinaonekana na alama ya rangi ya zambarau ya **Domain** katika orodha ya bidhaa na zinaweza kuchujwa kwa kutumia tab kombo ya **Domain Products**.

## Tab kombo ya mipangilio ya nje ya nchi {#domain-settings-tab}

### Provider {#provider}

Chagua rejista (registrar) gani anashughulikia usajili kwa ajili ya bidhaa hii. Inaanza kwa **Default provider** ya jumla iliyowekwa katika mipangilio ya Domain Seller.

### Supported TLDs {#supported-tlds}

Wacha iwe tupu ili kuunda **bidhaa ya kukamata yote (catch-all product)** ambayo inatumika kwa TLD zote ambazo hazikakamatwa na bidhaa nyingine.

Ingiza orodha iliyotenganishwa na koma ya TLDs (k.m., `.com, .net, .org`) ili kuunda **bidhaa maalum ya TLD** ambayo inatumika kwa uzwondo hizo tu.

**Jinsi upanguzaji wa bidhaa unavyofanya kazi:** Mteja anapotafuta nje ya nchi, kiongeza huchagua bidhaa inayolingana zaidi na maelezo yaliyotolewa. Bidhaa yenye `.com` katika orodha yake ya TLD inapata kipaumbele kuliko bidhaa ya kukamata yote. Ikiwa hakuna bidhaa maalum ya TLD inayolingana, inatumika ile ya kukamata yote. Ikiwa hakuna bidhaa zilizopo, utafutaji wa nje ya nchi haujaonyeshwa.

### Markup type {#markup-type}

Modi tatu zinadhibiti jinsi bei yako ya rejareja inavyohesabiwa kutoka kwa gharama ya jumla:

| Mode | Inafanya kazi vipi |
|---|---|
| **Percentage** | Inoongeza asilimia juu ya gharama ya jumla. Markup ya 20% kwenye nje ya nchi ya jumla ya $10 inatoa $12. |
| **Fixed markup** | Inoongeza kiasi thabiti cha dola. Markup ya $5 kwenye nje ya nchi ya $10 inatoa $15. |
| **Fixed price** | Inapuuza kabisa gharama ya jumla. Daima inachaji kiasi ulichoweka. |

### Introductory pricing {#introductory-pricing}

Washa ili kutoa bei ya mwaka wa kwanza iliyopunguzwa. Weka **Introductory price** tofauti (bei ya mwaka wa 1) pamoja na **Renewal price** ya kawaida (mwaka wa 2 na zaidi). Mteja anaona bei zote mbili zikionyeshwa wakati wa malipo ili ajue anachotarajia wakati wa kufanywa upya.

### WHOIS privacy {#whois-privacy}

Inadhibiti kama faragha ya WHOIS inatolewa kwa nje za nchi zilizosajiliwa kupitia bidhaa hii.

| Setting | Behaviour |
|---|---|
| **Disabled** | Faragha ya WHOIS haitawahi kutolewa au kuwahi kuwepo. |
| **Always Included** | Faragha ya WHOIS inawashwa kiotomatiki wakati wa usajili bila malipo. |
| **Customer Choice** | Sanduku la kuchagua linaonekana wakati wa malipo. Weka **Privacy price** ili kuchaji kwa kila mwaka, au ukiacha $0 ili kutoa bure. |

Kwa Namecheap, faragha ya WHOIS inatumia WhoisGuard (daima bure). Kwa OpenSRS, inatumia huduma ya faragha ya OpenSRS (inaweza kuwa na gharama ya jumla).

---

## Kuimport na kuunganisha TLD {#tld-import-and-sync}

Bidhaa za nje ya nchi zinaonyesha bei halisi ya jumla inayopatikana kutoka kwa mtoa huduma aliyeunganishwa. Ili hili lifanye kazi, TLDs lazima ziingizwe.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (kwa mtoa huduma)
- **Automatic sync:** Inafanya kazi kila siku kupitia kazi ya cron iliyopangwa kwa watoa huduma wote walioainishwa

Baada ya kuunganisha, nenda kwenye tab kombo ya Domain Settings ya bidhaa yoyote ya nje ya nchi na tumia kuchagua TLD kuona TLDs zinazopatikana pamoja na bei zao za jumla za sasa.

---

## Auto-renewal {#auto-renewal}

Ufanyaji upya wa nje za nchi unahusishwa na hali ya ushirikishwaji wa mteja:

- Wakati ushirikishwaji unapoendelea na nje ya nchi imeunganishwa, upya wa nje ya nchi unapoingizwa kiotomatiki
- Jaribio la upya linatumia langoni la malipo linalofanya kazi kwa mteja
- Upya ulioshindikana unajaribiwa tena kiotomatiki kwa kutumia backoff ya kielezo (exponential backoff)
- Arifa za barua pepe hutumwa kwa upya uliofanikiwa, kushindwa, na kuja na kuisha

Kitambulisho cha muundo wa barua pepe kwa matukio ya maisha ya nje ya nchi:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Usajili wa nje ya nchi kwa mikono {#admin-manual-domain-registration}

Ili usajili nje ya nchi kwa niaba ya mteja bila kupitia malipo:

1. Nenda kwa **Network Admin › Ultimate Multisite › Register Domain**
2. Chagua mteja na ingiza jina la nje ya nchi
3. Jaza maelezo ya anayesajili (jina, anwani, simu)
4. Bonyeza **Register**

Rekodi ya nje ya nchi inaundwa na kuunganishwa na akaunti ya mteja.
