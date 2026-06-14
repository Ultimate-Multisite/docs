---
title: Waxyaabaha Domainka iyo Qiimaha
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Alaabaha iyo Qiimaha Domain-ka

Alaabaha domain-ka waa sida aad maamushay qiimaha, TLD-yada (domain extensions), faahfaahinta WHOIS privacy, iyo doorashada bixiyeyaasha. Qayb kasta oo alaab domain ah waa alaab caadi ah oo Ultimate Multisite ah oo leh tab dheeri oo la yiraahdo **Domain Settings**.

## Abuurista alaab domain (domain product)

1. Tag **Network Admin › Ultimate Multisite › Products**
2. Click **Add New** (Ku dar cusub)
3. Ujeedinta nooca alaabta (product type) u qeex **Domain** (Domain).
4. Samee habka **Domain Settings** (Domain Settings) (isoo eeg hoose)
5. Save (Kaydi)

Alaabaha domain-ka waxay soo muuqda si ay ula socda badbaado madow oo la yiraahdo **Domain** (Domain) liiska alaabta, waxaana lagu filteri karaa iyadoo la isticmaalayo tabka **Domain Products**.

## Tabka Domain Settings

### Bixiyaha (Provider)

Dooro meesha ay bixiyaha (registrar) ka qaadan doonaa diiwaangelinta alaabtan. Waxay ku tahay bixiyaha guud ee la dejiyay **Default provider** (Bixiyaha caadiga ah) ee dejinta Domain Seller.

### TLD-yada La taageerada (Supported TLDs)

Si aad samayso **product oo guud ah (catch-all product)** oo kuugu habboon dhammaan TLD-yada aan la aqoonin wax kale, u dhig meel mugdi ah.

Waxaad galaysaa liis laga kala saaro comma (tusaale: `.com, .net, .org`) si aad u samayso **product gaar ah oo ku habboon TLD-gaas** oo kaliya u shaqeeya kuwaas.

**Sida ay u shaqeyso isku-dhafka (Product Matching):** Marka macmiil uu raadinayo domain, addon-ka wuxuu dooranayaa product-ka ugu saxdaa ee la midka ah. Product-ka leh `.com` ku jira liiska TLD-ga ayaa ka horreeya product-ka guud ee catch-all. Haddii aan jirin product gaar ah oo la mid ah TLD-ga, waxaa loo isticmaali doonaa catch-all-ka. Haddii aan jirin wax product ah oo la mid ah, raadinta domain-ka ma muujin doono.

### Nooca Markup (Markup type)

Waxaa saddex hab ay u maamulaan sida qiimaha ganacsigaaga (retail price) loo xisaabiyo kharashka lacagta aad ka soo qaaday (wholesale cost):

| Mode | Sida uu u shaqeeyo |
|---|---|
| **Percentage** | Waxay ku daraysaa boorsho (percentage) oo sare ka ah qiimaha weeralfadda (wholesale cost). Haddii aad ku dari lahayd 20% markup oo lagu bixiyo domain qiimihiisa $10, waxay noqonaysaa $12. |
| **Fixed markup** | Waxay ku daraysaa lacag cayiman. Haddii aad ku dari lahayd $5 markup oo lagu bixiyo domain qiimihiisa $10, waxay noqonaysaa $15. |
| **Fixed price** | Waxay si buuxda uga eegataa qiimaha weeralfadda (wholesale cost). Mar kasta oo ay ku soo geliso lacagta aad qorsheysid. |

### Qiimeynta hore (Introductory pricing)

Waxaad u oggolaanaysaa inaad bixisid qiimo la yar oo lagu bixiyo sanadka koowaad. Waxaad dejisan kartaa **Qiimaha hore (Introductory price)** (qiimaha sanadka 1-aad) oo la mid ah **Qiimaha cusboonaysiinta (Renewal price)** ee caadiga ah (sanadka 2-aad iyo kuwa ka dambeeya). Macaamihii waxay arkaan labada qiimaha marka ay ku wareegayaan si ay ogaadaan waxa ay u filan yihiin markii la cusboonaysiinayo.

### Aaminaadda WHOIS (WHOIS privacy)

Waxay xaqiijisaa in haddii domain-ka lagu diiwaangeliyo arrimaha ku jira badeecada (product), ma lahayn ilaalin (protection) oo WHOIS privacy ah.

| Dejinta | Waxa ka dhaca |
|---|---|
| **Disabled** | Siyaidda WHOIS privacy ma la bixiyo ama ma la furayo weli. |
| **Always Included** | Siyaidda WHOIS privacy si toos ah ayaa loo furayaa marka aad diiwaangeliso adiga oo aan wax rabin. |
| **Customer Choice** | Marka aad iibsanayso, waxay soo muuqataa sanduuq (checkbox). Ujeeddooyinka **Privacy price**-ka ku qor inuu bixiyo qiimo sanad kasta, ama u dhig $0 si aad si bilaash u bixiso. |

For Namecheap, WHOIS privacy waxay isticmaashaa WhoisGuard (si toos ah uma bixiyo). For OpenSRS, waxay isticmaashaa adeegga WHOIS privacy ee OpenSRS (waxay laga yaabaa inuu leeyahay kharash marka aad iibsanayso si weyn).

---

## TLD import and sync

Waxyaabaha domain-ka ah ayaa muujinaya qiimaha wholesale-ka dhabta ah oo la soo qaaday bixiyaha la xiriiray. Si tani ay u shaqayso, waa in TLD-yada (domain-ka) la soo diri doonaa.

- **Sync-ka gacanta lagu sameeyo (Manual sync):** Settings › Domain Seller › Sync TLDs (per provider)
- **Sync-ka tooska ah (Automatic sync):** Wuxuu socdaa maalin kasta iyada oo loo marayo scheduled cron job oo ku shaqeeya dhammaan bixiyayaasha la dejiyay.

Marka la sameeyo sync, tag qaybta Domain Settings ee lambarka domain-ka aad rabto inaad aragto waxa ay ka jiraan TLD-yada la heli karo iyo qiimaha wholesale (qiimaha lacagga weyn) ee hadda jira.

---

## Auto-renewal (Dib u soo celinta tooska ah)

Dib u soo celinta domain-ka waxay ku xiran tahay xaaladda aabeya:

- Marka aabeya la cusboonaysiiyo oo lambarka domain-ka la xiriirayo, dib u soo celinta domain-ka ayaa si toos ah loo qeexaa (queued).
- Isku dayga dib u soo celinta wuxuu isticmaalaa habka lacagta (payment gateway) ee aabeya.
- Dib u soo celinta ee ku guuldareysay waxaa si toos ah dib loo isku dayaa iyadoo la isticmaalayo qaab kororka muddada (exponential backoff).
- Warqadaha emailka ayaa la diraya dib u soo celinta ee guuleysta, kuwa ku guuldareystay, iyo kuwa soo socda inay dhammaanayaan.

ID-yada template-ka emailka ee dhacdooyinka nolosha domain-ka:

| Dhacdo | Template ID |
|---|---|
| Domain la diiiray | `domain_registered` |
| Domain la cusboonaysiiyay | `domain_renewed` |
| Cusboonaysiintu ku guuldareysatay | `domain_renewal_failed` |
| Domainu si degdeg ah u dhammaan doona | `domain_expiring_soon` |

---

## Admin: Diyaarinta domain-ka gacanta lagu sameeyo (Manual domain registration)

Si aad u diiirto domain oo ay macmiilku ku samaynayo iyada oo aanay mar la gaarin checkout:

1. Tag **Network Admin › Ultimate Multisite › Register Domain**
2. Dooro macmiilka oo ku qor magaca domain-ka
3. Buuxi faahfaahinta xiriirka qofka diiiraya (magaca, barta, lambarka taleefanka)
4. Guji **Register**

Dabaysha domain-ka ayaa la abuuraa laguna xiriira xogta macmiilka.
