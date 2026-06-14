---
title: Fahaizana Hita
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Fahaizana Azo Hita (Ability Visibility)

Ny Superdav AI Agent v1.12.0 dia manolotra fepetra **Ability Visibility** izay mifehy ireo lafiny (surfaces) izay afaka mampiseho ny fahaiza-manao tsirairay. Izany dia ahafahana manova ny fomba fiasa izay azo ampiasaina amin'ny alalan'ny REST APIs, MCP servers, WooCommerce integrations ary interface hafa.

## Inona no Ability Visibility?

Ny Ability Visibility dia rafitry ny alalana (permission system) izay mifehy:

- **Inona avy ireo fahaiza-manao** azo ampiasain'ny agents
- **Aiza no haseho azy** (REST API, MCP, WooCommerce, sns.)
- **Iza no afaka miditra azy** (amin'ny alalan'ny partner allow-lists)
- **Ahoana ny fametrahana azy** (eferetika na tsy eferetika)

Ny fahaiza-manao tsirairay dia mitondra haavo fahitana izay mamaritra ny fahafahany ho azo ampiasaina amin'ny lafiny samihafa.

## Haavo Fahitana (Visibility Levels)

### Public (Lalina)

**Ny fahaiza-manao malalaka (Public abilities)** dia azo ampiharina hatrany:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Ny anjara toerana rehetra (miankina amin'ny alalan'ny alalana mety)

Ohatra: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Atro anaty)

**Ny fahaiza-manao anatiny (Internal abilities)** dia azo ampiharina ao anatin'ny fametrahana WordPress anareo ihany:

- Chat interfaces
- Admin panels
- Mpampiasa efa miditra (logged-in users) ihany
- Tsy haseho amin'ny alalan'ny REST API na integrations ivelany

Ohatra: `manage-settings`, `view-analytics`, `export-data`

### Partner (Mpiara-miasa)

**Ny fahaiza-manao mpiara-miasa (Partner abilities)** dia azo ampiharina ho an'ny mpiara-miasa voafidy (whitelisted partners) ihany:

- Mila miditra ao amin'ny partner allow-list manokana
- Azo ampiasaina amin'ny alalan'ny REST API miaraka amin'ny fampahalalana mpiara-miasa
- Azo ampiasaina amin'ny MCP miaraka amin'ny fanamarinana mpiara-miasa
- Tsy azo ampiasaina amin'ny mpampiasa mahazatra

Ohatra: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Tsy azo ampiasaina)

**Ny fahaiza-manao tsy azo ampiasaina (Disabled abilities)** dia tsy azo ampiharina aiza na aiza:

- Tsy haseho amin'ny lafiny iray na hafa
- Tsy azo ampiasaina ao amin'ny chat
- Tsy azo ampiasaina ao amin'ny admin panels
- Ilaina ho an'ireo fahaiza-manao efa tsy ampiasaina intsony na manandrana (experimental)

## Fitera ny Fahaizana Azo Atao (Managing Ability Visibility)

### Fidirana amin'ny Famaritana Azo Atao (Accessing Ability Visibility Settings)

1. Mandehana any amin'ny **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Tsindrio ny tabilao **Abilities**
3. Ho hitanao lisitra rehetra an'ireo fahaizana (abilities) napetraka miaraka amin'ny haavon'ny fahitany azy ireo

### Fijerena ny antsipiriany momba ny Azo Atao (Viewing Ability Details)

Tsindrio amin'ny fahaizana iray mba hijerena:

- **Name**: Ny famantarana ilay fahaizana
- **Description**: Inona no ataon'ilay fahaizana
- **Current visibility**: Ampahiboly (Public), Intranapahafantarina (Internal), Partenery (Partner), na Voafetra (Disabled)
- **Partner allow-list**: Ireo partenera afaka miditra (raha misy fahitana ho Partenaire)
- **Last updated**: Ny fotoana farany novana ny fahitana azy
- **Status**: Fantatra (Recognized) na Tsy voalamina (Unclassified)

### Fanovana ny Haavon'ny Fahitana (Changing Visibility Levels)

Mba hanovana ny fahitana an'ny fahaizana iray:

1. Tsindrio ilay fahaizana ao amin'ilay lisitra
2. Safidio ny haavon'ny fahitana vaovao avy amin'ny dropdown
3. Raha safidy "Partner" ianao, ampiana famantarana partenera (partner identifiers) ao anatin'ny allow-list
4. Tsindrio **Save**

Ohatra:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Fandraisana Atao Maro (Bulk Operations)

Mba hanovana ny fahitana ho an'ny fahaizana maromaro:

1. Tsindrio ireo "checkbox" eo anilan'ireo fahaizana
2. Safidio ny haavon'ny fahitana vaovao avy amin'ny dropdown ho an'ny asa maro (bulk action)
3. Tsindrio **Apply**

## List'ny Partenera Azo Miditra (Partner Allow-List)

Ny **partner allow-list** no mifehy izay partenera ivelany afaka miditra ireo fahaizana ho level Partenaire.

### Fanampiana Partenera (Adding Partners)

1. Mandehana any amin'ny **Superdav AI Agent** → **Settings** → **Partners**
2. Tsindrio **Add Partner**
3. Ampidiro ny famantarana partenera (matetika dia API key na organization ID)
4. Safidio raha tianao ampiana anarana sy famaritana ho an'ny partenera
5. Tsindrio **Save**

### Fametrahana Azo Atao ho Partenera (Assigning Abilities to Partners)

Aorian'ny fanampiana partenera:

1. Mandehina ny tabilao **Abilities** (Fahaizana)
2. Mitadiava fahaizana misy fahitana an'ny Partner ianao
3. Tsindrio mba hanovana azy
4. Ao amin'ny faritra "Partner allow-list" dia asio ny boky ho an'ireo partner izay tokony hanana fidirana
5. Tsindrio **Save** (Tehirizo)

### Fanapahana Fidirana An'ny Partner

Mba hanaovana fanapahana ny fidirana an'ny partner iray:

1. Hanova ny fahaizana (ability)
2. Aza asio ny boky an'ilay partner ao amin'ny allow-list intsony
3. Tsindrio **Save** (Tehirizo)

Ho lasa tsy hanana fidirana amin'io fahaizana io ilay partner avy hatrany.

## Fahaizana Tsy Vohevitra (Unclassified Abilities)

Rehefa mametraka fahaizana vonona avy any ivelany izay tsy fantatry ny Superdav AI Agent, dia voamarina ho **Unclassified** (Tsy Vohevitra).

### Fampahafantarana ho Admin momba ireo Fahaizana Tsy Vohevitra

Ho hitanao fampahafantarana avy amin'ny admin:

```
⚠️ Unclassified Abilities Detected

Ireo fahaizana manaraka no napetraka fa tsy fantatra:
- custom-import-tool
- external-api-wrapper

Mety mitondra loza momba ny fiarovana na ny fifanarahana ireo fahaizana ireo.
Azafady, jereo sy asio fametrahana (classify) azy ireo.

[Review Abilities] [Dismiss]
```

### Fijerena ireo Fahaizana Tsy Vohevitra

1. Tsindrio **Review Abilities** ao amin'ny fampahafantarana
2. Ho an'ny fahaizana tsy vohevitra tsirairay, dia ho hitanao:
   - Anaran'ny fahaizana sy famaritana azy
   - Lohateny (Source) (izay plugin/addon no nametraka azy)
   - Fepetra fahitana azo atao (Suggested visibility level)
   - Fanombanana fiarovana (Security assessment)

3. Safidio ny fepetra fahitana:
   - **Public** (Atsara): Amin'ny fahaizana no tahaka; aseho amin'ny toerana rehetra
   - **Internal** (Atro anaty): Azo ampiasaina ao anatin'ny rafitra an-tokantrano ihany
   - **Partner**: Azo atao ho an'ireo partner manokana
   - **Disabled** (Voafetra): Aza ampiasaina ity fahaizana ity

4. Tsindrio **Classify** (Asio fametrahana) mba hitahirizana ny fanapahan-kevitra nataonao

### Nahoana no Ilaina ny Fametrahana Fahaizana Tsy Vohevitra?

Ny fametrahana fahaizana:

- **Manatsara ny fiarovana**: Manome alalana mazava izay aseho
- **Mampitondra tsy hisy loza**: Ny fahaizana tsy vohevitra dia voafetra ho tsy azo ampiasaina amin'ny ankapobeny (disabled by default)
- **Mamela ny fiasa**: Raha efa voapetra, dia lasa azo ampiasaina ilay fahaizana
- **Manome antontan-taratasy momba ny fanapahan-kevitra**: Ny safidinao dia voarakitra ho an'ny fandinihana (audit purposes)

## Hitaovana amin'ny Latama samihafa

### REST API

**Fahaizana ankapobeny (Public abilities)** dia azo alaina amin'ny alalan'ny REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Fahaizana anatiny sy ireo mpiara-miasa (Internal and Partner abilities)** dia tsy azo alaina amin'ny alalan'ny REST API.

### MCP Servers

**Fahaizana ankapobeny (Public abilities)** dia azo alaina amin'ny alalan'ny MCP:

```
MCP Server: Superdav AI Agent
Fahaizana azo ampiasaina:
- scaffold-block-theme
- activate-theme
- send-email
```

**Fahaizana anatiny (Internal abilities)** dia tsy voalaza amin'ny alalan'ny MCP.

**Fahaizana mpiara-miasa (Partner abilities)** dia azo alaina ihany raha misy fampahalalana manokana ho an'ny mpiara-miasa ianao.

### WooCommerce Integration

**Fahaizana ankapobeny (Public abilities)** mifandraika amin'ny WooCommerce dia azo ampiasaina:

- Fitantanana vokatra
- Fandrindrana ny baiko (Order processing)
- Fifandraisana amin'ny mpanjifa

**Fahaizana anatiny (Internal abilities)** dia tsy voalaza ho an'ny WooCommerce.

### Chat Interface

**Ny fahaizana rehetra** (Ankapobeny, Anatiny, Mpiara-miasa) dia azo ampiasaina ao amin'ny chat, miankina amin'ny alalan'ny zo an'ny mpampiasa:

- Ireo Administrator dia mahita ny fahaizana rehetra
- Ireo mpampiasa tsotra dia mahita ny fahaizana ankapobeny ihany
- Ireo mpiara-miasa dia mahita ny fahaizana ankapobeny + fahaizana mpiara-miasa (raha voamarina)

## Fomba fiasa tsara indrindra amin'ny fiarovana (Security Best Practices)

### Fitsipika Fandraisana Ampahany Farany Indrindra (Principle of Least Privilege)

- Ataovy ny fahaizana ho mora azo indrindra izay mbola ahafahana mampiasa azy
- Ampiasao ny fahaizana mpiara-miasa ho an'ny asa sarotra
- Atao tsy ampiasaina ireo fahaizana tsy ampiasainao

### Fandinihana tsy tapaka (Regular Audits)

- Jereo ny fahaizana isan-taona
- Fantaro raha misy fahaizana tsy voamarina
- Esory ny fidirana ho an'ireo mpiara-miasa tsy ampiasaina

### Fandaniam-bola sy Fanaraha-maso (Logging and Monitoring)

- Fantaro izay fahaizana tena ampiasaina indrindra
- Sarainao ny fomba fiasan'ny mpiara-miasa
- Manome fampitandremana raha misy fampiasana tsy ara-dalàna ny fahaizana

### Fahaizana Firaisana (Third-Party Abilities)

- Jereo ireo fahaizana avy amin'ny lafiny hafa alohan'ny hampandehanana azy
- Fantaro mazava izany
- Manomboha amin'ny fahaizana anatiny na mpiara-miasa
- Atao ho ankapobeny ihany rehefa voamarina tsara

## Fandiana (Troubleshooting)

**Tsy mipoitra ny fahaizana (ability) ao anatin'ny lisitra**
- Jereo raha voasokajy sy miasa ny fahaizana (ability)
- Jereo raha voafahana ny plugin/addon
- Avereno indray ny pejy

**Tsy afaka manova ny fomba fijerena ny fahaizana (visibility) aho**
- Jereo raha manana zo administrator ianao
- Jereo raha voafetra ny fahaizana (ability) avy amin'ny plugin iray
- Andramo hapetraka an-tsokosoko ireo plugin mifaninona

**Tsy afaka miditra amin'ny fahaizana (ability) ny mpiara-miasa (partner)**
- Jereo raha ao anatin'ny lisitry ny avela (allow-list) ilay mpiara-miasa
- Jereo raha voasain'ny fomba fijerena ny fahaizana (visibility) ho "Partner" io
- Ampahafantarina fa marina ny fampahalalana (credentials) an'ilay mpiara-miasa
- Jereo ireo API logs mba hahitana ny fahadisoana amin'ny fanamarinana

**Mihatsapa toy izany ny fahaizana tsy voasokajy dia mitohy**
- Avereno sy sokafy azy ao anatin'ny famantarana administrator (admin notice)
- Jereo raha voisa tsara ny sokajiana nataonao
- Jereo raha vaovao ny plugin mampanome ilay fahaizana

## Fiovan'ny Fandefasana avy amin'ny Mode Taloha (Migration from Legacy Mode)

Raha manova dikan-teny avy amin'ny dikan-teny taloha kokoa an'i Superdav AI Agent ianao:

- Ny fahaizana rehetra efa misy dia voasokajy ho "Public" ho azy
- Avereno sy avereno ny fomba fijerena araka izay ilainao
- Tsy mila asa intsony raha tsy te-hihena ny fidirana (restrict access)

Jereo ny **Third-Party Mode Migration** mba hahazoana antsipiriany bebe kokoa momba ny fiovana mankany amin'ny fampifandraisana API ho an'ny Fahaizana (Abilities API) voalohany.

## Dingana Manaraka (Next Steps)

Aorian'ny fametrahana ny fomba fijerena ny fahaizana (ability visibility):

1. **Jereo ny fahaizanao**: Fantaro ireo fahaizana rehetra napetraka
2. **Sokafy ny fahaizana tsy voasokajy**: Valio ireo famantarana administrator (admin notices)
3. **Apetraho ny mpiara-miasa**: Ampidiro ny mpiara-miasa raha mampiasa fomba fijerena "Partner" ianao
4. **Fantaro ny fampiasana azy**: Fantaro izay fahaizana ampiasaina indrindra
5. **Soraty ny fanapahan-kevitra**: Mitazona taratasy momba ny antony nifidiananao ny haavo fijerena tsirairay
