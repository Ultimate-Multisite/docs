---
title: Inyubiri za Domain n'Urugero rwa Ubwujgwa
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Inzego mu bikoreshi n'Urundi (Domain Products and Pricing)

Inzego mu bikoreshi n'Urundi (Domain products) ni uburyo ushagarira uburenganzira bwo kugenzura ubunyangamugayo, TLDs (Top-Level Domains), privacy ya WHOIS, no gukora ubutumvikande bw'uburenganzira. Icyo cyose cyo bikoreshwa ni product ya standard Multisite Ultimate kandi ikaba yashyize tab ya **Domain Settings** ikomeye.

## Gukora domain product {#creating-a-domain-product}

1. Gukoresha **Network Admin › Ultimate Multisite › Products**.
2. Click **Add New** (Gusobanura).
3. Set product type ku **Domain**.
4. Configure tab ya **Domain Settings** (ubwumva uburyo mu kintu cyiza) (bura mu).
5. Save (Kugira umwihariko).

Domain products bishobora kubona n'ibyo byo bifite badge ya purple ya **Domain** mu list ya products kandi bishobora gukoreshwa ku mpamvu ya tab ya **Domain Products**.

## Tab ya Domain settings {#domain-settings-tab}

### Provider (Umuhagarariye) {#provider}

Wumva uburyo umuhagarariye w'ubwujisoro (registrar) yashyize uburenganzira bwo gukoresha ibi product. Iki ni cyo cyihagarira mu **Default provider** yashyize mu Domain Seller settings.

### Supported TLDs (TLDs zishoborwa) {#supported-tlds}

Wizera umwihariko (leave blank) kugira ngo ugera **catch-all product** (product wose) uhoze ku TLDs zose zitagutwe na product yakirimo.

Gukoresha list ya TLDs yashyize mu gukoresha comma (e.g., `.com, .net, .org`) kugira ngo utera **TLD-specific product** (product w'ubwujisoro bwa TLD) uhoze ku TLD runaka zose.

**Uburyo uburenganzira bw'ibyo byo bikoreshwa:** Iyo umuthanda yashobora gukoresha product yakirimo yiza cyane. Product yakirimo ikoresheye `.com` mu list ya TLD yayo ikaba ikomeye cyane ku product catch-all. Niba nta product w'ubwujisoro bwa TLD runaka zose, ugera umuthanda (catch-all) ukoreshwa. Niba nta product zishobora gukoreshwa, umutandukiro w'uburenganzira bw'domain utagushobora kubona.

### Markup type (Uburyo bwo gukoresha ubwujisoro) {#markup-type}

Icyo cyose cyo kugaragaza uburyo uburenganzira bwa ubutumvikande bwawe bishobora kugerwaho ku maseka y'uburenganzira bw'uburyo (wholesale cost):

| Mode (Uburyo) | Uburyo bwo gukoresha |
|---|---|
| **Percentage** (Icyiciro cy'ikoresho) | Imeze ikoresheje ku maseka y'uburenganzira bw'uburyo. Ubutumvikande mu 20% ku domain ya wholesale ya $10 bishobora kuba $12. |
| **Fixed markup** (Ubutumvikande runaka) | Imeze ikoresheje igiciro cy'ubwujisoro runaka. Ubutumvikande rwa $5 ku domain ya $10 bishobora kuba $15. |
| **Fixed price** (Imeze runaka runaka) | Imeze yashyize uburenganzira bw'uburyo mu gihe cyose. Imeze igikorera ubutumvikande wowe utagushobora kubona. |

### Introductory pricing (Ubutumvikande bwa mbere) {#introductory-pricing}

Koresha kugira uburyo bwo gukora ubushobozi bw'umwihariko mu mwaka wa mbere. Wishobora gukoresha **Introductory price** (iryo za mwaka wa 1) kandi wiboneye n'aho **Renewal price** (iryo za mwaka wa 2+). Umukoresha yibona ibi cyo kubona iki cyangwa se mu gihe cyo guhuza.

### WHOIS privacy {#whois-privacy}

Iyi ikoranira uko ubushobozi bwo gukora WHOIS privacy bishobora gukoreshwa ku domain zikoreshwa mu gihe cy'umutera uyu muntu.

| Icyemezo | Uburyo bw'ubwoko |
|---|---|
| **Disabled** | Ubushobozi bwo gukora WHOIS privacy bishobora gukoreshwa cyangwa guhindurwa mu gihe cy'umutera uyu muntu. |
| **Always Included** | Ubushobozi bwo gukora WHOIS privacy bishobora gukoreshwa mu gihe cyo gutangira ku mutera uyu muntu nta kintu. |
| **Customer Choice** | Icyemezo cy'ubwoko kigira umbwereze mu gihe cyo guhuza. Shobora gukoresha **Privacy price** kugira ngo uboneye ku mwaka, cyangwa ugabanya kuri $0 kugira ngo ubyumve bwo kubona ari ukwiyongera. |

Ku Namecheap, WHOIS privacy ikoresha WhoisGuard (igice cy'umutera nta kintu). Ku OpenSRS, ikoresha ubushobozi bw'OpenSRS (shobora kuba hari igice mu gihe cyo gutanga ibyo bishobora gukoreshwa ku mutera uyu muntu).

---

## TLD import and sync {#tld-import-and-sync}

Icyiciro cy'umutera uyu muntu yiboneye ubushobozi bw'wholesale bukurikirana bukurikirana mu gihe cyo gutanga n'ubwoko bwa provider. Kugira ngo ibi bikore, TLDs (ubwoko bwa domain) bifite uburyo bwo gukoreshwa mu gihe cyo gutangira.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Iki kora buri munsi ku gihe cy'umutera uyu muntu mu gihe cyo guhuza n'ubwoko bwa provider.

Nyuma y'uko ubushobozi bukurikirana, gukoresha tab ya Domain Settings ya domain yose kugira ngo umbwereze TLD wiboneye mu gihe cyo gutanga n'ubwoko bwa wholesale.

---

## Auto-renewal {#auto-renewal}

Ubwoko bw'domain bwo guhuza bukurikirana n'ubushobozi bwo mutera uyu muntu:

- Iyo ubushobozi bwo mutera uyu muntu bishobora gukoreshwa kandi domain yiboneye, ibi bikorwa mu gihe cyo gutangira guhuza.
- Icyemezo cy'umutera uyu muntu bukurikirana n'ubushobozi bw'payment gateway wako.
- Ubwoko bwo guhuza bwo gukora buri gihe kigabanya mu gihe cyo gutangira ku mutera uyu muntu.
- Ubutumwa bwo email bukurikirana mu gihe cyo guhuza n'ubushobozi, ibyo byashoboye kwihagarara, kandi ibyo byoroshye gukoreshwa.

Icyemezo cyo template ya email ku byerekeza ibintu by'domain lifecycle:

| Ekitazo | Template ID |
|---|---|
| Domain yashyirwaho | `domain_registered` |
| Domain yashyirwaho mu gihe cyo gukoreshwa | `domain_renewed` |
| Urugiro rwa domain rugerageye | `domain_renewal_failed` |
| Domain rugerageye mu gihe cyo gukoreshwa | `domain_expiring_soon` |

---

## Admin: Gukoresha domain yihindihiza (Manual domain registration) {#admin-manual-domain-registration}

Kugira ngo ushyire umudeni ku giti cy'umuntu nta kumenya mu checkout:

1. Gutera ku **Network Admin › Ultimate Multisite › Register Domain**
2. Kugera ku umuntu kandi ugenda ku izina ry'umudeni (domain name)
3. Gukoresha amakuru y'umuntu wari yashyiraho (izina, uburyo, n'ibanga)
4. Gukora **Register**

Urugiro rwa domain rugerageye kandi rugera ku akaonto ry'umuntu.
