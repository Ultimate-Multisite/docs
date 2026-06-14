---
title: Fanamboarana sy Fandaharam-potoana Mpamatsy
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Fanamboana sy Fandaharam-potoana Mpamatsy Domaine (Domain Seller)

Ny addon Domain Seller dia avy miaraka amin'ny wizard fampanaraha-maso izay mitarika anao amin'ny dingana rehetra ilaina. Ity pejy ity dia manazava ny lalana fiasan'ity wizard sy ny fomba hanovana na hamerenana ny mpamatsy (providers) aorian'izay.

## Fepetra Takiana

- **Multisite Ultimate** v2.4.12 na ambony kokoa, miasa amin'ny tambajotra (network-activated)
- **PHP** 7.4+
- Fampahalalana API ho an'ny registrar iray na mihoatra ny fanohanana

## Wizard fampanaraha-maso voalohany

Ny wizard fampanaraha-maso dia manomboka azy ho azy rehefa voafidy ny plugin ianao amin'ny alalan'ny "network-activate". Afaka misy anao hatrany amin'ny alalan'ny **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Dingana 1 — Mifidiana mpamatsy (Choose a provider)

Safidio ny registrar tianao hifandray. Ireto ny safidy azo atao:

| Mpamatsy (Provider) | Fitantanana DNS | Fiarovana WHOIS |
|---|---|---|
| OpenSRS | Eny | Eny |
| Namecheap | Tsia | Eny (WhoisGuard, maimaim-poana) |
| HostAfrica | Eny | Eny (Fiarovana ID) |
| Openprovider | Eny | Eny |
| Hostinger | Amin'ny alalan'ny fametrahana domain an'ny Hostinger ho hosted domains | Eny |
| GoDaddy | Tsia | Tsia |
| ResellerClub | Eny | Tsia |
| NameSilo | Tsia | Tsia |
| Enom | Eny | Tsia |

### Dingana 2 — Midira ny fampahalalana (Enter credentials)

Ny mpamatsy tsirairay dia manana toerana hafa ho an'ny fampahalalana:

**OpenSRS** — Anaran-tanana (Username) sy private key (avy amin'ny OpenSRS Reseller Control Panel).

**Namecheap** — Anaran-tanana (Username) sy API key (avy amin'ny Account › Tools › API Access).

**HostAfrica** — Endpoint API an'ny Domains Reseller sy ny fampahalalana (credentials) avy amin'ny module reseller an'i HostAfrica. Tsy misy endpoint sandbox manokana voasoratra ankehitriny; andramo aloha amin'ny fanamarinana na famakiana ihany (read-only checks) alohan'ny fampiharana ny fametrahana tena izy.

**Openprovider** — Anaran-tanana sy teny an-drazana (password) miaraka amin'ny API access voafidy. Ny mode sandbox safidy dia mampiasa ny Openprovider sandbox API, ary azo ampiasaina indray ny "default customer handle" iray ho an'ny fametrahana.

**Hostinger** — Token hPanel API shared an'ny Hostinger integration-n'ny. Iza ilay token mitovy no mampiasa amin'ny fametrahana ny domain fototra sy ny fandraisana anjara ho mpivarotra Domain Seller.

**GoDaddy** — API key sy secret (avy ao amin'ny developer.godaddy.com)

**ResellerClub** — Reseller ID sy API key (avy ao amin'ny control panel an'ny ResellerClub)

**NameSilo** — API key (avy ao amin'ny namesilo.com › Account › API Manager)

**Enom** — Account ID sy API token

Jereo ny **Sandbox mode** raha misy mba hanandehana amin'ny tontolo fanandramana an'ilay mpamatsy alohan'ny hampiasana azy ho tena izy.

### Dingana 3 — Andrana ny fifandraisana

Tsindrio ny **Test Connection**. Ny wizard dia mandefa antso API kely mba hanamarinana ireo fampahalalana sy ny fifandraisana. Aza adino ny manitsy olana momba ny fampahalalana alohan'ny hanohy.

### Dingana 4 — Intserana TLDs (Top-Level Domains)

Tsindrio ny **Import TLDs** mba handefasana ireo TLD rehetra azo sy ny vidin-kevitra ho mpanome (wholesale pricing) avy amin'ilay mpamatsy mifandray. Izany dia mametraka ny lisitry ny TLD ampiasaina amin'ireo vokatra domain. Mety mandritra 30–60 segondra ny fametrahana raha toa ka misy mpamatsy manana lisitry ny TLD lehibe.

Mba haverina indray ny TLD dia automatique isan-kerinandro amin'ny alalan'ny cron job voatendry.

### Dingana 5 — Famoronana vokatra domain

Ny wizard dia mamorona vokatra domain mialoha (default catch-all) misy fampidirana vidiny 10%. Afaka manova ity vokatra ity ianao avy hatrany na mandalo ary mamorona vokatra manokana amin'ny alalan'ny **Ultimate Multisite › Products**.

Jereo ny [Domain Products and Pricing](./domain-products) ho an'ny toromarika feno momba ny fametrahana vokatra.

---

## Fanovana ny mpamatsy (Reconfiguring a provider)

Mandehana any amin'ny **Network Admin › Ultimate Multisite › Settings › Domain Seller** (na tsindrio ny **Settings** ao anatin'ny lisitry ny plugin).

Ny pejy fampahalalana dia ahitana:

- **Hamoana domain selling** — alao na/tavo ny fahaizana ity taranja ity (toggle on/off)
- **Mpampiasa fototra (Default provider)** — ilay mpampiasa ampiasaina amin'ny fitadiavana domain sy ny vokatra vaovao
- **Tsy azo atao TLD isan-tarika** — firy no ho fantatra rehefa mitady mpanjifa; ny sandana ambany dia mampiseho safidy maro kokoa fa miadana kokoa

- **Fotoana fitahirizana (Availability cache duration)** — mandritra fotoana iray ve no hatao fitahirizana ny vokatra momba ny fahataran'ny domain sy ny vidiny; ny sandana latsaky ny valiny dia marina kokoa fa miampy antso API maro kokoa

- **Fitantanana vokatra domain (Manage domain products)** — rohy haingana mankany amin'ny lisitry ny Vokatra (Products list)
- **Fandinihana mpampiasa (Configure providers)** — manokatra ny Integration Wizard mba hanampiana na hanova ireo mpampiasa

### Fanampiana mpampiasa faharoa

Tsindrio ny **Configure providers** ary alefa indray ilay wizard ho an'ny registrar vaovao. Afaka manana mpampiasa maro ianao izay voarafitra miaraka amin'izany. Apetraho isaky ny vokatra domain ao amin'ny mpampiasa manokana, na avelao eo amin'ny fototra (default).

### Fandaharam-potoana TLD manokana (Syncing TLDs manually)

Ao amin'ny pejy fandrindrana (settings page), tsindrio ny **Sync TLDs** eo anilan'ny mpampiasa voarafitra rehetra mba handefasana ny vidiny vaovao. Tena ilaina izany rehefa manavao ny vidin'ny famatsiana (wholesale pricing) na manampy TLD vaovao ny mpampiasa iray.

---

## Logs

Ny mpampiasa tsirairay dia manoratra ao amin'ny lalana fandefasana (log channel) manokana ho azy. Afaka jerena ireo logs eo ambanin'ny **Network Admin › Ultimate Multisite › Logs**:

| Lalana channel | Vokatry |
|---|---|
| `domain-seller-registration` | Ny fidirana rehetra (fahombiazana sy tsy fahombiazana) |
| `domain-seller-renewal` | Vokatry ny asa fanavaozana |
| `domain-seller-opensrs` | Asa API OpenSRS an-tserasera |
| `domain-seller-namecheap` | Asa API Namecheap an-tserasera |
| `domain-seller-hostafrica` | Asa API HostAfrica an-tserasera |
| `domain-seller-openprovider` | Asa API Openprovider an-tserasera |
| `domain-seller-hostinger` | Asa API Hostinger an-tserasera |
| `domain-seller-godaddy` | Asa API GoDaddy an-tserasera |
| `domain-seller-resellerclub` | Asa API ResellerClub an-tserasera |
| `domain-seller-namesilo` | Asa API NameSilo an-tserasera |
| `domain-seller-enom` | Asa API Enom an-tserasera |

---

## Fanamarihana momba ny fahaiza-manao an'ny mpanome tolotra (Provider capability notes)

Tsy misy API an'ny registrar rehetra izay manome asa mitovy. Ny addon dia mampiseho ireo asa tsy voatantana amin'ny alalan'ny fahadisoana mazava ho an'ny mpitantana, fa tsy mihena fotsiny ny asany.

- **HostAfrica** dia manohana ny fomba fiasa fanomezan-dalana (reseller workflow) mivelatra indrindra, ahitana ny famakafakana (lookup), fifangaroana TLD/vidiny (pricing sync), fidirana (registration), fanavaozana (renewal), fifindrana (transfer), fanavaozana an'ny server anarana (nameserver updates), fonosana DNS (DNS records), kaody EPP, fametrahana fampandrefana registrar (registrar lock), ary fiantohana ny ID.
- **Openprovider** dia manohana ny fifangaroana TLD ho vidin'ny reseller, fidirana, fanavaozana, fifindrana, fanavaozana an'ny server anarana, faritra DNS (DNS zones), kaody EPP, fametrahana fampandrefana registrar, ary ny fitahirizana WHOIS privacy. Mampiasa bearer token fohy izay averina ho vaovao ho azy ny addon.
- **Hostinger** dia manohana ny fikarohana fahafahana (availability search), fidirana, famakafakana portfolio, fanavaozana an'ny server anarana, fametrahana fampandrefana registrar, ary fitahirizana WHOIS privacy amin'ny alalan'ny token API iombonana hPanel. Ny API Domains an'ny Hostinger dia tsy mamoaka ny vidin'ny reseller/wholesale, fifindrana miditra (inbound transfer), fanavaozana mivantana (explicit renewal), na famoahana kaody EPP; ny fanavaozana dia azo atao ho azy ihany.
