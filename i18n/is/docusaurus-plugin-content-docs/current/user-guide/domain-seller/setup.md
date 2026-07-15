---
title: Uppsetning og vinnara-samþættingar
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domén Séljar: Uppsetning og Leiðandi Stjórnunarinnar

Domén Séljar (Domain Seller) add-oninn fer með sér leiðandi uppsetningarpylsan sem leysir þig í gegnum alla nauðsynleg skref. Þessi síða dektar ferli pylsansins og hvernig þú getur sett upp eða breytt leiðandi stjórnunarannferðara (providers) eftir.

## Nauðskapur {#requirements}

- **Multisite Ultimate** v2.4.12 eða hærri, nýtingarvinnuþjónustu
- **PHP** 7.4+
- API-auði fyrir að minnsta einn stöðugt viðkomandi registrar

## Uppsetningarpylsa fyrsta nota {#first-run-setup-wizard}

Uppsetningarpylsanirstarfar sjálft þegar þú nýtingarvinnuþjónustuna (network-activate) add-oninn fyrsta sinni. Hún er aðgengileg í einu og sem **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Skref 1 — Veldu leiðandi stjórnunarannferðara {#step-1--choose-a-provider}

Veldu registrarann sem þú vilt tengja þig við. Stöðugt val:

| Leiðandi stjórnunarannferðari | DNS-stjórnun | WHOIS-vernd |
|---|---|---|
| OpenSRS | Já | Já |
| Namecheap | Nei | Já (WhoisGuard, freust) |
| HostAfrica | Já | Já (ID vernd) |
| Openprovider | Já | Já |
| Hostinger | Gjennom kjarna-mapping fyrir hostaðar domænar Hostingerinnar | Já |
| GoDaddy | Nei | Nei |
| ResellerClub | Já | Nei |
| NameSilo | Nei | Nei |
| Enom | Já | Nei |

### Skref 2 — Skrá inn auði {#step-2--enter-credentials}

Hvert leiðandi stjórnunarannferðari hefur annarra auði:

**OpenSRS** — Notkunannafn og privat key (frá OpenSRS Reseller Control Panel)

**Namecheap** — Notkunannafn og API-nyglei (frá Account › Tools › API Access)

**HostAfrica** — API-endpunkt fyrir Domains Reseller og auði frá HostAfrica reseller module. Engin sérstök sandbox endpunkt er nú skráð; prófa með trygum lesandi aðeignum áður en þú framkvæmir live skráningar.

**Openprovider** — Notkunannafn og lösenord með API-auði sett upp. Valfri sandox mode notar Openprovider sandbox API, og valfri default customer handle getur verið nota aftur fyrir skráningar.

**Hostinger** — Samskið hPanel API token frá grunn Hostinger samstarfi. Sama token styrkir mappað sem er á kerfisbundnum domænum og aðgerðir fyrir skráning Domæn Sells.

**GoDaddy** — API key og secret (frá developer.godaddy.com)

**ResellerClub** — Reseller ID og API key (frá stjórnarpannin ResellerClub)

**NameSilo** — API key (frá namesilo.com › Account › API Manager)

**Enom** — Account ID og API token

Skennu **Sandbox mode** þar sem það er til að prófa gegn testum umtökvaðan umhverfi við veitmanna fyrir því að fara í live-samning.

### Stig 3 — Prófa tengingu {#step-3--test-the-connection}

Klikka á **Test Connection**. Vísabrautin sendir ljómskeið API hringni til að staðfesta skilvirkni og tengingu. Fílldu alla skilvirkniáætlunana fyrir því að halda áfram.

### Stig 4 — Innafa TLDs {#step-4--import-tlds}

Klikka á **Import TLDs** til að draga allar tilfyllandi TLDs og hverskildar verðning frá tengdum veitmanni. Þetta byggir lista TLDs sem er notaður í domænumönnum. Innafaðuðin getur taka 30–60 sekúndur fyrir veitmenn með stórum lista TLDs.

TLDs eru einnig sjálfskipta upphafaðir aftur einnu sinni á dag vegna skjaldaferðar (cron job).

### Stig 5 — Skapa domænumönnum {#step-5--create-a-domain-product}

Vísabrautin skapar almenn domænumönnum með 10% viðbót. Þú getur breytt þennan mönnum strax eða skoða og skapa mönnum mannvænt í **Ultimate Multisite › Products**.

Sjá [Domain Products and Pricing](./domain-products) fyrir nánari leiðbeiningu um innreiðingu mönnum.

---

## Samkvæði á veitmanni {#reconfiguring-a-provider}

Gera ferð til **Network Admin › Ultimate Multisite › Settings › Domain Seller** (eða klikka á **Settings** í lista mönnum).

Skráningasíðin inniheldur:

- **Aktivað vönduð að selja domænar** — skipti þessari möguleika á á hvaða hvernig þú vilja séð (on/off)
- **Vinnandi veitiefurður** — veitiefurður sem notarð til leitarfara eftir domænum og nýrra vörum
- **Max TLDs per search** — hversu margar TLDs þú vill skoða þegar viðskiptavinur leitar; hærri gildi sýna fleiri val, en eru langlegri
- **Availability cache duration** — hversu lang varðar að nota vöndun fyrir tilboð og verð; lágara gildi eru nákvæmari, en þau hafa meira API-samtök

- **Manage domain products** — hraðli linkur til lista vörum
- **Configure providers** — opnar Integration Wizard til að bæta við eða breyta veitiefurðum

### Að bæta við tveggja veitiefurður {#adding-a-second-provider}

Klikka á **Configure providers** og körfðu wizardinn aftur fyrir nýja registrarann. Þú getur haft fleiri veitiefurðum sett upp samkvæmt sama tíma. Skyni hvert doménvörð til sérstekt veitiefurði, eða láttu það á vinnandi veitiefurði.

### Að synka TLDs mannvætis {#syncing-tlds-manually}

Á settningasíðunni klikka á **Sync TLDs** í nýrri veitiefurði til að hapa upp nýjustu verðsetningu. Þetta er mjög gagnlegt eftir það sem einn veitiefurður skilar upp nýjum vörðum eða breyttar hversu margar TLDs eru til staðar.

---

## Logs {#logs}

Hvert veitiefurður skilar upp í sín eigin logkaflutning. Logg eru að sjá á **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Innhald |
|---|---|
| `domain-seller-registration` | All framkvæmdarferli fyrir framkvæmdir (áttkvæmd og feil) |
| `domain-seller-renewal` | Niðurstöður viðkerningaferlisins |
| `domain-seller-opensrs` | Rauh API-virkni OpenSRS |
| `domain-seller-namecheap` | Rauh API-virkni Namecheap |
| `domain-seller-hostafrica` | Rauh API-virkni HostAfrica |
| `domain-seller-openprovider` | Rauh API-virkni Openprovider |
| `domain-seller-hostinger` | Rauh API-virkni Hostinger |
| `domain-seller-godaddy` | Rauh API-virkni GoDaddy |
| `domain-seller-resellerclub` | Rauh API-virkni ResellerClub |
| `domain-seller-namesilo` | Rauh API-virkni NameSilo |
| `domain-seller-enom` | Rauh API-virkni Enom |

---

## Athitiingar um framkvæmdarferli við veitendur (Provider capability notes) {#provider-capability-notes}

Ekki allir registrar API-s sýna sama aðgerðir. Addoninn sýnir óstöðugt stöðuferli sem ekki er støðugt, með kláramlegum feilum fyrir administratora í stað þess að falla hingað og af því.

- **HostAfrica** stendur fyrir breittra ferli framkvæmdarferlis við veitendur (reseller workflow), sem felur í sér leitarferli, synkingu TLD/prísa, framkvæmdir, viðkerningu, skipti, uppfærslu á nameservers, DNS-skjal, EPP kóða, lokað registrar og vernd af ID.
- **Openprovider** stendur fyrir synkingar TLD með resseller-prísum, framkvæmdir, viðkerningu, skipti, uppfærslu á nameservers, DNS-zonur, EPP kóða, lokað registrar og WHOIS vernd. Það staðfest sig með kortíma (bearer token) sem er fyrir kortímainn sjálfan að uppfærja sjálf.
- **Hostinger** stendur fyrir leitarferli fyrir tilvarðarferli, framkvæmdir, leitarferli fyrir portfolio, uppfærslu á nameservers, lokað registrar og WHOIS vernd með sama hPanel API kortíma. Almenn Domains API Hostingerinn sýnir ekki resseller/wholesale prís, innkomandi skipti, efp-kóða hentun, eða framkvæmdir; viðkerningar eru sjálfuppfærð aðeins.
