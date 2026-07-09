---
title: Ìṣètò àti Ìṣàgbékalẹ̀ Olùpèsè
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Olùtà Orúkọ Àgbègbè: Ìṣètò àti Ìṣàtúnṣe Olùpèsè {#domain-seller-setup-and-provider-configuration}

Àfikún Olùtà Orúkọ Àgbègbè wá pẹ̀lú wizard ìṣètò tí ń tọ́ ọ kọjá gbogbo ìgbésẹ̀ tí ó nílò. Ojú-ewé yìí ṣàlàyé ìṣàn wizard náà àti bí a ṣe lè ṣètò tàbí tún àwọn olùpèsè ṣètò lẹ́yìn náà.

## Àwọn ohun tí a nílò {#requirements}

- **Multisite Ultimate** v2.4.12 tàbí tó ga jù bẹ́ẹ̀ lọ, tí a mú ṣiṣẹ́ ní nẹ́tíwọ́ọ̀kì
- **PHP** 7.4+
- Àwọn ìjẹ́rìí API fún ó kéré tán alákóso ìforúkọsílẹ̀ kan tí a ṣe àtìlẹ́yìn fún

## Wizard ìṣètò ìgbà àkọ́kọ́ {#first-run-setup-wizard}

Wizard ìṣètò náà yóò bẹ̀rẹ̀ fúnra rẹ̀ ní ìgbà àkọ́kọ́ tí o bá mú plugin náà ṣiṣẹ́ ní nẹ́tíwọ́ọ̀kì. Ó tún wà nígbàkúgbà láti **Alábòójútó Nẹ́tíwọ́ọ̀kì › Ultimate Multisite › Ìṣètò Olùtà Orúkọ Àgbègbè**.

### Ìgbésẹ̀ 1 — Yan olùpèsè kan {#step-1--choose-a-provider}

Yan alákóso ìforúkọsílẹ̀ tí o fẹ́ sopọ̀ mọ́. Àwọn aṣàyàn tí a ṣe àtìlẹ́yìn fún:

| Olùpèsè | Ìṣàkóso DNS | Ìpamọ́ WHOIS |
|---|---|---|
| OpenSRS | Bẹ́ẹ̀ni | Bẹ́ẹ̀ni |
| Namecheap | Rárá | Bẹ́ẹ̀ni (WhoisGuard, ọ̀fẹ́) |
| HostAfrica | Bẹ́ẹ̀ni | Bẹ́ẹ̀ni (ààbò ID) |
| Openprovider | Bẹ́ẹ̀ni | Bẹ́ẹ̀ni |
| Hostinger | Nípasẹ̀ ìmápù orúkọ àgbègbè Hostinger ìpìlẹ̀ fún àwọn orúkọ àgbègbè tí a gbalejo | Bẹ́ẹ̀ni |
| GoDaddy | Rárá | Rárá |
| ResellerClub | Bẹ́ẹ̀ni | Rárá |
| NameSilo | Rárá | Rárá |
| Enom | Bẹ́ẹ̀ni | Rárá |

### Ìgbésẹ̀ 2 — Tẹ àwọn ìjẹ́rìí sílẹ̀ {#step-2--enter-credentials}

Olùpèsè kọ̀ọ̀kan ní àwọn pápá ìjẹ́rìí tó yàtọ̀:

**OpenSRS** — Orúkọ aṣàmúlò àti kọ́kọ́rọ́ ikọ̀kọ̀ (láti OpenSRS Reseller Control Panel)

**Namecheap** — Orúkọ aṣàmúlò àti kọ́kọ́rọ́ API (láti Account › Àwọn Irinṣẹ́ › Ìráyè API)

**HostAfrica** — endpoint API Olùtà-tún-tà Domains àti àwọn ìjẹ́rìí láti módulo olùtà-tún-tà HostAfrica. Kò sí endpoint sandbox lọ́tọ̀ tí a ti ṣàkọsílẹ̀ lọ́wọ́lọ́wọ́; dán an wò pẹ̀lú àwọn ìṣàyẹ̀wò kíkà-nìkan tó dáa kí o tó ṣiṣẹ́ àwọn ìforúkọsílẹ̀ gidi.

**Openprovider** — Orúkọ aṣàmúlò àti ọ̀rọ̀ aṣínà pẹ̀lú ìráyè API tí a ti mú ṣiṣẹ́. Módù sandbox àṣàyàn ń lo API sandbox Openprovider, àti handle oníbàárà aiyipada àṣàyàn lè tún lò fún àwọn ìforúkọsílẹ̀.

**Hostinger** — token API hPanel Hostinger tí a pín láti ìṣàkóso Hostinger ìpìlẹ̀. token kan náà ni ń ṣiṣẹ́ ìmápù orúkọ àgbègbè ìpìlẹ̀ àti àwọn iṣẹ́ ìforúkọsílẹ̀ Olùtà Orúkọ Àgbègbè.

**GoDaddy** — Kọ́kọ́rọ́ API àti aṣírí (láti developer.godaddy.com)

**ResellerClub** — ID olùtà-tún-tà àti kọ́kọ́rọ́ API (láti páníẹ́lì ìṣàkóso ResellerClub)

**NameSilo** — Kọ́kọ́rọ́ API (láti namesilo.com › Account › Olùṣàkóso API)

**Enom** — ID Account àti token API

Ṣàyẹ̀wò **Módù sandbox** níbi tí ó bá wà láti dán an wò lòdì sí àyíká ìdánwò olùpèsè kí o tó lọ sí ìṣiṣẹ́ gidi.

### Ìgbésẹ̀ 3 — Dán ìsopọ̀ náà wò {#step-3--test-the-connection}

Tẹ **Dán Ìsopọ̀ Wò**. Wizard náà yóò fi ìpè API fẹ́ẹ́rẹ́ ránṣẹ́ láti ṣàyẹ̀wò àwọn ìjẹ́rìí àti ìsopọ̀. Ṣàtúnṣe ìṣòro ìjẹ́rìí èyíkéyìí kí o tó tẹ̀síwájú.

### Ìgbésẹ̀ 4 — Gbé àwọn TLD wọlé {#step-4--import-tlds}

Tẹ **Gbé Àwọn TLD Wọlé** láti fa gbogbo àwọn TLD tó wà àti ìdíyelé osùwọ̀n-ńlá láti olùpèsè tí a sopọ̀ mọ́. Èyí yóò kún àtòkọ TLD tí àwọn ọjà orúkọ àgbègbè ń lò. Ìgbéwọlé náà lè gba iṣẹ́jú-aaya 30–60 fún àwọn olùpèsè tí wọ́n ní katalọ́ọ̀gù TLD ńlá.

A tún máa ń tún àwọn TLD múṣiṣẹ́pọ̀ fúnra rẹ̀ lẹ́ẹ̀kan lójúmọ́ nípasẹ̀ iṣẹ́ cron tí a ṣètò.

### Ìgbésẹ̀ 5 — Ṣẹ̀dá ọjà orúkọ àgbègbè kan {#step-5--create-a-domain-product}

Wizard náà yóò ṣẹ̀dá ọjà orúkọ àgbègbè aiyipada tó gba gbogbo nǹkan pẹ̀lú àfikún owó 10%. O lè ṣàtúnṣe ọjà yìí lẹ́sẹ̀kẹsẹ̀ tàbí fo ó kọjá kí o sì ṣẹ̀dá àwọn ọjà lọ́nà ọwọ́ lábẹ́ **Ultimate Multisite › Àwọn Ọjà**.

Wo [Àwọn Ọjà Orúkọ Àgbègbè àti Ìdíyelé](./domain-products) fún ìtọ́nisọ́nà ìṣàtúnṣe ọjà kíkún.

---

## Títún olùpèsè ṣètò {#reconfiguring-a-provider}

Lọ sí **Alábòójútó Nẹ́tíwọ́ọ̀kì › Ultimate Multisite › Àwọn Ètò › Olùtà Orúkọ Àgbègbè** (tàbí tẹ **Àwọn Ètò** nínú àtòkọ plugin).

Ojú-ewé àwọn ètò ní:

- **Mú títà orúkọ àgbègbè ṣiṣẹ́** — yí gbogbo ẹ̀yà náà sí ṣiṣẹ́/pà
- **Olùpèsè aiyipada** — olùpèsè tí a máa ń lò fún àwọn ìṣàwárí orúkọ àgbègbè àti àwọn ọjà tuntun
- **Iye TLD tó pọ̀ jù fún ìṣàwárí kọ̀ọ̀kan** — iye TLD mélòó ni a ó ṣàyẹ̀wò nígbà tí oníbàárà bá ń wá; àwọn iye tó ga jù ń fi àwọn aṣàyàn púpọ̀ hàn ṣùgbọ́n wọ́n lọra
- **Ìpẹ́ àkókò cache ìwànílẹ̀** — bí ó ṣe pẹ́ tó láti cache àwọn àbájáde ìwànílẹ̀ àti ìdíyelé; àwọn iye tó kéré jù péye síi ṣùgbọ́n wọ́n pọ̀ sí i àwọn ìpè API
- **Ṣàkóso àwọn ọjà orúkọ àgbègbè** — ìjápọ̀ kíákíá sí àtòkọ Àwọn Ọjà
- **Ṣètò àwọn olùpèsè** — ṣí Integration Wizard láti fi àwọn olùpèsè kun tàbí tún wọn ṣètò

### Fífi olùpèsè kejì kun {#adding-a-second-provider}

Tẹ **Ṣètò àwọn olùpèsè** kí o sì tún ṣiṣẹ́ wizard náà fún alákóso ìforúkọsílẹ̀ tuntun. O lè ní ọ̀pọ̀ olùpèsè tí a ṣètò nígbà kan náà. Yan olùpèsè pàtó fún ọjà orúkọ àgbègbè kọ̀ọ̀kan, tàbí fi sí aiyipada.

### Mímú àwọn TLD ṣiṣẹ́pọ̀ lọ́nà ọwọ́ {#syncing-tlds-manually}

Ní ojú-ewé àwọn ètò, tẹ **Mú Àwọn TLD Ṣiṣẹ́pọ̀** lẹ́gbẹ̀ẹ́ olùpèsè èyíkéyìí tí a ti ṣètò láti fa ìdíyelé tuntun jù lọ. Èyí wúlò lẹ́yìn tí olùpèsè bá ṣe ìmúdójúìwọ̀n ìdíyelé osùwọ̀n-ńlá tàbí fi àwọn TLD tuntun kun.

---

## Àwọn ìkọ̀sílẹ̀ {#logs}

Olùpèsè kọ̀ọ̀kan máa ń kọ sí ikanni ìkọ̀sílẹ̀ tirẹ̀. A lè wo àwọn ìkọ̀sílẹ̀ lábẹ́ **Alábòójútó Nẹ́tíwọ́ọ̀kì › Ultimate Multisite › Àwọn Ìkọ̀sílẹ̀**:

| Ikanni ìkọ̀sílẹ̀ | Àkóónú |
|---|---|
| `domain-seller-registration` | Gbogbo ìgbìyànjú ìforúkọsílẹ̀ (àṣeyọrí àti ìkùnà) |
| `domain-seller-renewal` | Àwọn àbájáde iṣẹ́ ìtúnse |
| `domain-seller-opensrs` | Ìgbòkègbodò API OpenSRS aise |
| `domain-seller-namecheap` | Ìgbòkègbodò API Namecheap aise |
| `domain-seller-hostafrica` | Ìgbòkègbodò API HostAfrica aise |
| `domain-seller-openprovider` | Ìgbòkègbodò API Openprovider aise |
| `domain-seller-hostinger` | Ìgbòkègbodò API Hostinger aise |
| `domain-seller-godaddy` | Ìgbòkègbodò API GoDaddy aise |
| `domain-seller-resellerclub` | Ìgbòkègbodò API ResellerClub aise |
| `domain-seller-namesilo` | Ìgbòkègbodò API NameSilo aise |
| `domain-seller-enom` | Ìgbòkègbodò API Enom aise |

---

## Àwọn àkọsílẹ̀ agbára olùpèsè {#provider-capability-notes}

Kì í ṣe gbogbo API alákóso ìforúkọsílẹ̀ ni ń fi àwọn iṣẹ́ kan náà hàn. Àfikún náà máa ń fi àwọn iṣẹ́ tí a kò ṣe àtìlẹ́yìn fún hàn pẹ̀lú àwọn àṣìṣe tó ṣe kedere fún alábòójútó dípò kí ó kùnà ní ìdákẹ́jẹ.

- **HostAfrica** ṣe atilẹyin workflow reseller alãye tó gbooro jù lọ, pẹlu lookup, TLD/pricing sync, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock, àti ID protection.
- **Openprovider** ṣe atilẹyin TLD sync pẹ̀lú iye-owó reseller, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock, àti WHOIS privacy. Ó ń jẹ́risi pẹ̀lú bearer token tó ní ìgbà-kúkúrú tí addon náà ń sọ di tuntun laifọwọyi.
- **Hostinger** ṣe atilẹyin ìṣàwárí availability, registration, portfolio lookup, nameserver updates, registrar lock, àti WHOIS privacy nípasẹ̀ hPanel API token tí wọ́n pín. Domains API gbangba ti Hostinger kò ṣàfihàn reseller/wholesale pricing, inbound transfer, renewal kedere, tàbí EPP-code retrieval; renewals jẹ́ auto-renew nìkan.
