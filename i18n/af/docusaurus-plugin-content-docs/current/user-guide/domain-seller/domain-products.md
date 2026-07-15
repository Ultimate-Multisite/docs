---
title: Domeinprodukte en Prysing
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domeinprodukte en Prysgstelling

Domeinprodukte is hoe jy prysgstelling, TLD's, WHOIS-privaatheid en verskafferkeuse beheer. Elke domeinproduk is 'n standaard Multisite Ultimate produk met 'n ekstra **Domeininstellings**-tabblad.

## Die skep van 'n domeinproduk {#creating-a-domain-product}

1. Gaan na **Network Admin › Ultimate Multisite › Products**
2. Klik op **Add New**
3. Stel die produktipe op **Domain**
4. Konfigureer die **Domain Settings**-tabblad (sien hieronder)
5. Stoor

Domeinprodukte verskyn met 'n paarse **Domain**-badge in die produklys en kan gefiltreer word met behulp van die **Domain Products**-tabblad.

## Domeininstellings-tabblad {#domain-settings-tab}

### Verskaffer {#provider}

Kies watter registerant die registrasie vir hierdie produk hanteer. Dit skakel standaard na die globale **Default provider** wat in Domain Seller-instellings gestel is.

### Ondersteunde TLD's {#supported-tlds}

Laat leeg om 'n **catch-all produk** te skep wat op alle TLD's toegepas word wat nie deur 'n ander produk gematch word nie.

Voer 'n komma-gefrede lys van TLD's in (bv. `.com, .net, .org`) om 'n **TLD-spesifieke produk** te skep wat slegs op daardie uitbreidings van toepassing is.

**Hoe produkmatching werk:** Wanneer 'n kliënt na 'n domein soek, kies die bykomende produk die mees spesifieke pas-produk. 'n Produk met `.com` in sy TLD-lys het voorrang op 'n catch-all produk. As geen TLD-spesifieke produk pas nie, word die catch-all gebruik. As geen produkte bestaan nie, word die domeinsoek nie getoon nie.

### Merkopslagtipe {#markup-type}

Drie modi bepaal hoe jou kleinhandelpryse van die groothandelkoste bereken word:

| Modus | Hoe dit werk |
|---|---|
| **Percentage** | Voeg 'n persentasie by tot die groothandelkoste. 'n 20% merkopslag op 'n $10 groothandeldomein gee $12. |
| **Fixed markup** | Voeg 'n vaste geldbedrag by. 'n $5 merkopslag op 'n $10 domein gee $15. |
| **Fixed price** | Ignoreer die groothandelkoste heeltemal. Het altyd die bedrag wat jy invoer. |

### Inleidende prysgstelling {#introductory-pricing}

Aktiveer om 'n geraffelde eerstejaarspris aan te bied. Stel 'n aparte **Introductory price** (die jaar-1-pris) langs die gereelde **Renewal price** (jaar 2+) in. Die kliënt sien beide pryse tydens die afrekening sodat hulle weet wat hulle by hernuwing kan verwag.

### WHOIS-privaatheid {#whois-privacy}

Beheer of WHOIS-privaatheid beskerming vir domeine wat deur hierdie produk geregistreer word, aangebied word.

| Instelling | Gedrag |
|---|---|
| **Disabled** | WHOIS-privaatheid word nooit aangebied of geaktiveer nie. |
| **Always Included** | WHOIS-privaatheid word outomaties by registrasie sonder koste geaktiveer. |
| **Customer Choice** | 'n Afkrydsvak verskyn tydens die afrekening. Stel die **Privacy price** in om per jaar te hef, of laat dit op $0 om dit gratis aan te bied. |

Vir Namecheap gebruik WHOIS-privaatheid WhoisGuard (altyd gratis). Vir OpenSRS gebruik dit die OpenSRS-privaatheidsdiens (kan 'n koste by die groothandel hê).

---

## TLD-import en sinkronisasie {#tld-import-and-sync}

Domeinprodukte toon real-time groothandelprysgstelling wat van die gekoppelde verskaffer gehaal word. Vir dit om te werk, moet TLD's ingepop word.

- **Manuele sinkronisasie:** Settings › Domain Seller › Sync TLDs (per verskaffer)
- **Outomatiese sinkronisasie:** Loop daagliks via 'n geskeduleerde cron-werk op alle gekonfigureerde verskaffers

Ná 'n sinkronisasie, gaan na enige domeinproduk se Domeininstellings-tabblad en gebruik die TLD-kiezer om beskikbare TLD's met hul huidige groothandelpryse te sien.

---

## Outo-vernying {#auto-renewal}

Domeinvernyings is gekoppel aan die kliënt se lidmaatskapstatus:

- Wanneer 'n lidmaatskap hernu word en 'n domein gekoppel is, word die domeinvernying outomaties in die waglyn geplaas
- Hernuwingspogings gebruik die kliënt se aktiewe betalingshek
- Mislukte vernuwings word outomaties herprobeer met eksponensiële terugdringing
- E-pos-kennisgewings word gestuur vir suksesvolle vernuwings, mislukkings en komende verloopdade

E-pos sjabloon-ID's vir domeinlewen-siklusgebeurtenisse:

| Gebeurtenis | Sjabloon-ID |
|---|---|
| Domein geregistreer | `domain_registered` |
| Domein hernu | `domain_renewed` |
| Vernuwing misluk | `domain_renewal_failed` |
| Domein binnekort verloop | `domain_expiring_soon` |

---

## Admin: Manuele domeinregistrasie {#admin-manual-domain-registration}

Om 'n domein namens 'n kliënt te registreer sonder dat hulle deur die afrekening gaan:

1. Gaan na **Network Admin › Ultimate Multisite › Register Domain**
2. Kies die kliënt en voer die domeinam naam in
3. Vul die registrant kontakbesonderhede in (naam, adres, foon)
4. Klik op **Register**

Die domeinrekord word geskep en aan die kliënt se rekening gekoppel.
