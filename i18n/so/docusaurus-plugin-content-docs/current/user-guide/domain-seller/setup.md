---
title: Wax-soo-gaarsiinta iyo Isdiiwaangelinta Bixiyaha
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Bixiyaha Domainka: Dejinta iyo Isticmaalka Provider-ka

Addon-ka Domain Seller wuxuu la socdaa qaab dejin (wizard) oo tilmaamaya tallaabo kasta oo loo baahan yahay. Boggan ayaa ka hadlaya habka dejinta iyo sida aad u hagaajin karto ama dib u dejin karto kuwa provider-kaas ka dib.

## Shuruudaha {#requirements}

- **Multisite Ultimate** v2.4.12 ama ka weel badan, oo la hawlgelin karo shabakad (network-activated)
- **PHP** 7.4+
- Macluumaadka API ee laba-dambe oo lagu taageero registrar kasta

## Qaabka Dejinta Marka Labaadama La Isticmaalo (First-run setup wizard) {#first-run-setup-wizard}

Qaabka dejin wuxuu si toos ah u bilaabmaa markaad ugu hor mar hawlgelinayso plugin-ka. Waxaa sidoo kale laga heli karaa muddo kasta oo aad tagto **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Tallaabada 1 — Doorashada Provider-ka {#step-1--choose-a-provider}

Dooro registrar-ka aad rabto inaad la xiriirto. Doorashooyinka taageerada:

| Bixiyaha | Maareynta DNS-ka | Sirta WHOIS |
|---|---|---|
| OpenSRS | Haa | Haa |
| Namecheap | Maya | Haa (WhoisGuard, bilaash ah) |
| HostAfrica | Haa | Haa (ID protection) |
| Openprovider | Haa | Haa |
| Hostinger | Iyadoo la isticmaalayo mapping-ka domain-ka core-ka Hostinger ee domain-yada la haysto | Haa |
| GoDaddy | Maya | Maya |
| ResellerClub | Haa | Maya |
| NameSilo | Maya | Maya |
| Enom | Haa | Maya |

### Tallaabada 2 — Gel isticmaalka macluumaadka (credentials) {#step-2--enter-credentials}

Bixiyaha kasta wuxuu leeyahay meelo kala duwan oo lagu galo macluumaadka:

**OpenSRS** — Username iyo private key (oo la helay OpenSRS Reseller Control Panel-ka)

**Namecheap** — Username iyo API key (oo la helay Account › Tools › API Access)

**HostAfrica** — Endpoint-ka iyo macluumaadka sirta (credentials) ee Reseller module-ka HostAfrica. Hadda ma jiraan endpoint gaar ah oo sandbox ah; ka hor intaadan bilaabin diiiraha dhabta ah, hubi isbeddelada la akhri karo oo kaliya.

**Openprovider** — Username iyo sirta (password) oo leh iibsiga API-ga (API access). Mode-ka sandbox-ka ee doorbida waa Openprovider sandbox API, waxaana suurtagal in la isticmaalo macluumaadka macaamiisha (customer handle) awoodda ah si loo diiiriyo.

**Hostinger** — Token-ka hPanel-ka wadaagga ah ee Hostinger oo ka yimid isku-dhafka (integration) ee asalka Hostinger. Token-kan ayaa xoojinaya habka la xiriira domain-ka aasaasiga iyo hawlgalka diiiraha iibiyeya domain-ka.

**GoDaddy** — API key iyo sirta (secret) (oo ka yimid developer.godaddy.com).

**ResellerClub** — ID-ga Reseller iyo API key-ga (oo ka yimid dashboard-ka control-ka ResellerClub).

**NameSilo** — API key (oo la yimaada namesilo.com › Account › API Manager)

**Enom** — ID-ga accountka iyo API token-kaaga

Hubi **Sandbox mode** haddii uu jiro si aad u isku baahdaan oo aad ku baahan tahay inaad isku hubiso nidaamka horay intaadan bilaabin.

### Tallaabada 3 — Hubinta xiriirka {#step-3--test-the-connection}

Riix **Test Connection**. Wizard-ku wuxuu u dirayaa call API fudud si uu u hubiyo macluumaadkaaga iyo xiriirka. Samee hagaajinta dhibaatooyinka la xiriira macluumaadkaaga ka hor intaadan sii socon.

### Tallaabada 4 — Soo darista TLD-yada (Top-Level Domains) {#step-4--import-tlds}

Riix **Import TLDs** si aad u soo celiso dhammaan TLD-yada la heli karo iyo qiimaha wholesale-ka laga helo bixiyaha la xiriira. Tani waxay buuxisaa liiska TLD-yada loo isticmaalo alaabta domain-ka ah. Soo darista wuxuu qaadan karaa 30–60 ilbiriqsi haddii bixiyaha uu leeyahay liis weyn oo TLD-yo ah.

TLD-yadu waxay si isku kalsoon ugu dib u habaysadaan hal mar maalinta iyada oo loo marayo cron job la qorsheeyay (scheduled cron job).

### Tallaabada 5 — Abuurista alaab domain-ka ah {#step-5--create-a-domain-product}

Wizard-ku wuxuu abuuraa alaab domain oo guud ah (catch-all) iyadoo la isticmaalayo qiimeyn 10%. Waxaad si degdeg ah wax ka beddeli kartaa alaabtaas ama aad ka dhaafi kartaa oo aad gacanta ku samayn karto alaabooyin adigoo isticmaalaya **Ultimate Multisite › Products**.

Waxaad arki kartaa [Domain Products and Pricing](./domain-products) si aad u hesho hagitaanka dhammaystiran ee qaabdhismeedka alaabta.

---

## Dib u habaynista bixiyaha (Reconfiguring a provider) {#reconfiguring-a-provider}

U socda **Network Admin › Ultimate Multisite › Settings › Domain Seller** (ama ku riix **Settings**-ka liiska plugin-yada).

Bogga settings-ku wuxuu ka kooban yahay:

- **Farsaminta iibinta domainka (Enable domain selling)** — dib u socda (on/off) dhammaan astaanta.
- **Bixiyaha la isku beddelo (Default provider)** — bixiyaha loo isticmaalo marka la raadinayo domain-yo cusub iyo alaab cusub.
- **Inta badan ee TLD-ga lagu raadiyo (Max TLDs per search)** — inta badan oo TLD-yada la hubiyo markii macmiilku raadinayo; qiimaha sare waxay muujinayaan fursado badan laakiin waxay noqonayaan armad badan.
- **Muddooyinka cache-ka lahayd lahayd (Availability cache duration)** — inta lagu jiro muddo qofka la haysto iyo qiimaha lahayd in la kaydiyo; qiimaha hoose ayaa si sax ah u muujinaya laakiin waxay kordhisaa wicitaan API-ga.
- **Maareynta alaabta domainka (Manage domain products)** — xiriir degdeg ah oo loo maro liiska Alaabta (Products list).
- **Habaynta bixiyaha (Configure providers)** — waxay furaysaa Wizard-ka Isdhaafinta (Integration Wizard) si aad u ku darto ama ugu hagaajisid bixiyaha.

### Ku darid bixiye labaad (Adding a second provider) {#adding-a-second-provider}

Riix **Configure providers** oo mar kale ku fuli wizard-ka (wizard) si aad u dejisid registrar cusub. Waxaad leedahay fursad aad isku dejisid dhowr provider. U qeyb goobta domain kasta oo uu yahay provider gaar ah, ama ka tag inaad haysato default-ka.

### Syncing TLDs si gacanta ah (manually) {#syncing-tlds-manually}

Gudaha bogga settings-ka, riix **Sync TLDs** ee dhanka qofka aad dejisay (provider) si aad u soo celiso qiimaha ugu dambeeyay. Tani waxay muhiim u tahay markii provider uu cusboonaysiiyo qiimaha wholesale ama ku daro TLD-yada cusub.

---

## Logs {#logs}

Qof kasta oo provider-ku wuxuu qoraa log-kiisa gaarka ah. Waxaad arki kartaa logs-ka hoos ka dhaca **Network Admin › Ultimate Multisite › Logs**:

| Marayadda channel-ka logga (Log channel) | Waxyaabaha ku jira (Contents) |
|---|---|
| `domain-seller-registration` | Dhammaan isbeddellada dukumiinta (guusha iyo guuldarro) |
| `domain-seller-renewal` | Natiijooyinka hawsha dib-u-dhiska (Renewal job results) |
| `domain-seller-opensrs` | Hawlaha API-ga OpenSRS ee asalka ah (Raw OpenSRS API activity) |
| `domain-seller-namecheap` | Hawlaha API-ga Namecheap ee asalka ah (Raw Namecheap API activity) |
| `domain-seller-hostafrica` | Hawlaha API-ga HostAfrica ee asalka ah (Raw HostAfrica API activity) |
| `domain-seller-openprovider` | Hawlaha API-ga Openprovider ee asalka ah (Raw Openprovider API activity) |
| `domain-seller-hostinger` | Hawlaha API-ga Hostinger ee asalka ah (Raw Hostinger API activity) |
| `domain-seller-godaddy` | Hawlaha API-ga GoDaddy ee asalka ah (Raw GoDaddy API activity) |
| `domain-seller-resellerclub` | Hawlaha API-ga ResellerClub ee asalka ah (Raw ResellerClub API activity) |
| `domain-seller-namesilo` | Hawlaha API-ga NameSilo ee asalka ah (Raw NameSilo API activity) |
| `domain-seller-enom` | Hawlaha API-ga Enom ee asalka ah (Raw Enom API activity) |

---

## Fikradaha ku saabsan awoodda bixiyeyaasha (Provider capability notes) {#provider-capability-notes}

Ma aha in dhammaan API-yada registarr-ka isku day inay bixiyaan hawlo isku mid ah. Addon-ka wuxuu soo bandhigayaa hawlo aan la taageerin (unsupported operations) iyadoo si cad u muujinayo qalad kasta oo la xiriira maamulka, halkii uu si aamusnaan ku fashilmo.

**HostAfrica** waxay taageertaa habka ugu ballaaran ee lahayd in la iibiyo (reseller workflow), oo ay ku jiraan raadinta macluumaadka, isku-dubbaridda TLD/qiimaha, diiwaangelinta, dib u bilaabidda (renewal), wareejinta, cusboonaysiinta server-ka magaca (nameserver updates), DNS records, EPP codes, xiritaanka registrar-ka (registrar lock), iyo ilaalinista ID-ga.
**Openprovider** waxay taageertaa isku-dubbaridda TLD-ga qiimaha la iibiyo (reseller-priced sync), diiwaangelinta, dib u bilaabidda, wareejinta, cusboonaysiinta server-ka magaca, DNS zones, EPP codes, xiritaanka registrar-ka, iyo qarsoodka WHOIS. Waxay isku xirtaa (authenticates) token gaaban oo waqti kooban ah oo addon-ka si toos ah u cusboonaysiiya.
**Hostinger** waxay taageertaa raadinta lahayd suurtagalnimada (availability search), diiwaangelinta, raadinta portfolio-ga, cusboonaysiinta server-ka magaca, xiritaanka registrar-ka, iyo qarsoodka WHOIS iyadoo la isticmaalayo token-ka hPanel API ee la wadaagay. API-ga Domain-ka dadweynaha (public Domains API) ee Hostinger ma soo bandhigayo qiimaha la iibiyo ama qiimaha wholesale, wareejinta dhex-galka (inbound transfer), dib u bilaabidda cad (explicit renewal), ama helitaanka EPP-code-ka; dib u bilaabiddu waxay si toos ah dib u bilaabataa.
