---
title: Kufuna Kutsogolera
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Uvwe Wopse (Ability Visibility)

Superdav AI Agent v1.12.0 imapira **Ability Visibility** controls zomwe zikufuna kuti m'moyo wamene (surfaces) zimene zikufuna kudzera ndi chiyembekezo chomwe (ability). Izi zimapangitsa administrators kuti zikufunse bwino kuti zipi za zochitika za agent zikuperekedwa m'moyo wamene wosiyanasiyana, monga REST API, MCP servers, WooCommerce integrations, ndi m'moyo wosiyanasiyana.

## Kodi Ability Visibility ndi chiyani?

Ability Visibility ndi mfundo ya kuugwira (permission system) yomwe imapangitsa kuti:

- **Zochitika zotani** zikuperekedwa kwa agents
- **Ziziko zikuperekedwa** (REST API, MCP, WooCommerce, osati zomwe)
- **Ndikufuna kuti anthu anachita** (m'moyo wosiyanasiyana monga allow-lists za partners)
- **Kuti zimapereka bwanji** (zomwe zikuyenera kuwoneka vs. zomwe sikuyenera kuwoneka)

Kukonse ability kumapereka nkhani ya kuwoneka yomwe imapangitsa kuti zikuperekedwa m'moyo wosiyanasiyana.

## Mphindo za Kuwoneka (Visibility Levels)

### Public (M'moyo Wosiyanasiyana)

**Public abilities** zimapereka panthawi zonse:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Zinthu zonse za users (n'chiyembekezo chomwe chofunika)

Mifando: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (M'moyo Wosiyanasiyana M'moyo Wopulogera)

**Internal abilities** zimapereka m'moyo wanu wopulogera (WordPress installation):

- Chat interfaces
- Admin panels
- Users omwe ali opulogera
- Siku zikuperekedwa kupoyera kwa REST API kapena integrations za m'moyo wosiyanasiyana

Mifando: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Partner abilities** zimapereka kwa partners omwe ali opulogera (whitelisted):

- Zikufuna kuwoneka m'moyo wopulogera wa partner
- Zikuperekedwa kupoyera kwa REST API ndi credentials za partner
- Zikuperekedwa m'MCP ndi authentication ya partner
- Sikuperekedwa kwa users omwe ali opulogera

Mifando: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Zikuyenera)

**Disabled abilities** sikupereka panthawi zonse:

- Sikuperekedwa m'moyo wosiyanasiyana
- Sikuperekedwa m'chat
- Sikuperekedwa m'admin panels
- Zomwe zimaperekedwa kwambiri kapena zomwe zikuyenera kuwoneka (experimental abilities)

## Kutsatira Kutsatira ya Ufufuza Ubwino wa Ufufuza (Managing Ability Visibility)

### Kutsatira Kutsatira ya Ufufuza Ubwino wa Ufufuza (Accessing Ability Visibility Settings)

1. Tola ku **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Click tab ya **Abilities** (Ufufuzaji/Uwezo)
3. Utavuta orodha ya ubwino wote uliowekwa na viwango vya utawala (visibility levels).

### Kutsatira Ubwino wa Ufufuza (Viewing Ability Details)

Click juu ya ubwino wowote ili kuona:

- **Name**: Idini ya ubwino huo
- **Description**: Ubwino unaofanya nini
- **Current visibility**: Public, Internal, Partner, au Disabled (Isiyowekwa)
- **Partner allow-list**: Wanafunzi wapi wanaweza kufikia (kama ni utawala wa Partner)
- **Last updated**: Likuipitishwa wakati ubwino ulivyobadilika
- **Status**: Umeainishwa au Usiainishwa

### Kubadilisha Viwango vya Ubwino (Changing Visibility Levels)

Ili kubadilisha ubwino wa ubwino:

1. Click ubwino kwenye orodha
2. Chagua kiwango kipya cha utawala kutoka dropdown
3. Ikiwa unachagua "Partner", ongeza mbadala wa partner kwenye allow-list
4. Click **Save** (Hifadhi)

Mfano:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Kuendesha Hatua za Kila (Bulk Operations)

Ili kubadilisha ubwino kwa ubwino mwingi:

1. Chagua maboksi yanayotolewa karibu na ubwino huo
2. Chagua kiwango kipya cha utawala kutoka dropdown ya hatua kubwa (bulk action)
3. Click **Apply** (Tumia/Weka)

## Orodha ya Wanafunzi wa Partner (Partner Allow-List)

**partner allow-list** inasimamia wanafunzi wapi wa nje wanaweza kufikia ubwino wa kiwango cha Partner.

### Kuongeza Wanafunzi (Adding Partners)

1. Tola ku **Superdav AI Agent** → **Settings** → **Partners**
2. Click **Add Partner** (Ongeza Mwanafunzi)
3. Ingiza mbadala wa partner (kawaida ni API key au organization ID)
4. Chagua hiari kuongeza jina la partner na maelezo yake
5. Click **Save** (Hifadhi)

### Kuwapa Ubwino Wanafunzi kwa Wanafunzi (Assigning Abilities to Partners)

Baada ya kuongeza mwanafunzi:

1. Tenda ku tabu **Abilities**
2. Tenda uli ability uli na ndi wina wa Partner visibility
3. Tenda kuti mu edit
4. Mu section ya "Partner allow-list", tenda boxes za partner aliyenera kuona
5. Tenda **Save**

### Kukhulitsa Access ya Partner

Kuti utere access ya partner:

1. Edit ability
2. Uncheck box ya partner mu allow-list
3. Tenda **Save**

Partner uli kukhala akukumbutsa access ya ability iyi m'maka.

## Abilities Zosakhulidwa (Unclassified Abilities)

Pamene utshatu ability yomwe Superdav AI Agent hazi, itshatira kuti ndi **Unclassified**.

### Chidziwitso cha Admin kwa Abilities Zosakhulidwa

Mutendera chidziwitso cha admin:

```
⚠️ Unclassified Abilities Detected

Abilities onse omwe anshatira ukuti ziri zosakhulidwa:
- custom-import-tool
- external-api-wrapper

Abilities iyi zingathe kutanthauza mavuto a security kapena compatibility.
Tenda kuti muli kukhulitsa ndi kuphatikiza.

[Review Abilities] [Dismiss]
```

### Kukhulitsa Abilities Zosakhulidwa

1. Tenda **Review Abilities** mu chidziwitso
2. Kwa ability lina lina losakhulidwa, mutendera:
   - Lina la ability ndi mawu awo
   - M'maka (source) (imene plugin/addon iliyenera) ili yomwe ilipatsa
   - Level ya visibility yomwe imapereka
   - Kusankha kwa security

3. Sankhani level ya visibility:
   - **Public**: Kukhulupirira ability iyi; ipereka pameneonera zonse
   - **Internal**: Kupereka kwa ulemu wamene umene
   - **Partner**: Kukhulitsa kwa partner wina wosankha
   - **Disabled**: Osankhani kutsegula ability iyi

4. Tenda **Classify** kuti mutseza chitsanzo chanu

### Chifukwa chake kukhulitsa Abilities Zosakhulidwa?

Kukhulitsa abilities:

- **Kupatsa security:** Muli m'maka wamene umene ipereka
- **Kupanga mavuto:** Abilities osakhulidwa zimaperekedwa kuti zosankhule (disabled) m'maka
- **Kukonza features:** Pamene imapereka, ability imapereka
- **Kukhala ndi decisions:** Zofunso zanu zimaperekedwa kuti muli kukhulitsa



## Ufufu kuoneka m'moyo wosayansi (Visibility in Different Surfaces)

### REST API

**Zomwe zikhoza kwa umwonekedwe (Public abilities)** zikhoza kupitirira kupakanyike ndi REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Zomwe zikhoza m'moyo wopansi (Internal and Partner abilities)** sikhoza kupitirira kupakanyike ndi REST API.

### MCP Servers

**Zomwe zikhoza kwa umwonekedwe (Public abilities)** zikhoza kupitirira kupakanyike ndi MCP:

```
MCP Server: Superdav AI Agent
Zomwe zikhoza:
- scaffold-block-theme
- activate-theme
- send-email
```

**Zomwe zikhoza m'moyo wopansi (Internal abilities)** sikuphedwa kupitirira kupakanyike ndi MCP.

**Zomwe zikhoza kwa makubwera (Partner abilities)** zimene zikhoza kutayika ndi kukhala ndi credentials za makubwera.

### WooCommerce Integration

**Zomwe zikhoza kwa umwonekedwe (Public abilities)** zomwe zili poyenera WooCommerce zimene zikhoza kupitirira:

- Kufunsa zopangidwa (Product management)
- Kupanga amagulu (Order processing)
- Kukhala ndi mwayi ndi wamwamba (Customer communication)

**Zomwe zikhoza m'moyo wopansi (Internal abilities)** sikuphedwa kupitirira kwa WooCommerce.

### Chat Interface

**Zomwe zonse** (Public, Internal, Partner) zimene zikhoza kukhala pansi pa chat, kukhala monga momwe munthu amene ali ndi umodzi wosayansi (user permissions):

- Administrators zimene zikhoza zomwe zonse.
- Amene ali m'moyo wosayansi (Regular users) zimene zikhoza kuchita zokhoza kwa umwonekedwe (Public abilities) poyenera.
- Makubwera zimene zikhoza kuchita zomwe zonse za umwonekedwe (Public + Partner abilities) (njelanso kuti zili wophedwa).

## Zomwe Zili M'moyo Wosayansi (Security Best Practices)

### Kukhala ndi Umodzi Wosayansi Kwambiri (Principle of Least Privilege)

- Limani zomwe zikhoza kukhala ndi umwonekedwe wopansi kwambiri komwe zimene zikhoza kuchitidwa.
- Gumule kuti mwayi wa makubwera (Partner visibility) kuti mwayi wosayansi (sensitive operations).
- Gumule zomwe simene kumakwera.

### Kukhudza Zomwe Zili M'moyo Wopansi (Regular Audits)

- Limani umwonekedwe wa zomwe zikhoza m'moyo wosayansi m'mabiri m'mabiri.
- Limani zomwe simene zikhoza kukhala ndi umwonekedwe osayenera (unclassified abilities).
- Gumule mwayi wamwamba omwe simene kumakwera.

### Kukhudza ndi Kupereka Data (Logging and Monitoring)

- Limani zomwe zikhoza kutumikidwa kwambiri.
- Limani mwayi wa makubwera kuti amene akupita bwanji.
- Gumule pamene kukhala ndi umodzi wosayansi wosayenera (unusual ability usage).

### Zomwe Zili M'moyo Wopansi (Third-Party Abilities)

- Limani zomwe zili m'moyo wopansi poyenera kuchitidwa.
- Limani bwino kuti zimene zikhoza kukhala ndi umwonekedwe osayenera (Classify them explicitly).
- Mulani pa umwonekedwe wopansi kapena wa makubwera m'moyo wopansi poyenera kuchitidwa.
- Limani kuti zimene zikhoza kukhala ndi umwonekedwe wosayansi (Public) pamene zimene zili wophedwa (Promote to Public only after vetting).

## Kufunsa Matenda (Troubleshooting)

**Kufunsa kukhala kukhala ku list**
- Kufuna kuti ability ikhulupuluka na ikhulupuluka
- Kufuna kuti plugin/addon ikhulupuluka
- Rerecha page

**Sikubolela kupasa visibility ya ability**
- Kufuna kuti muli ndi udindo wa administrator (administrator permissions)
- Kufuna kuti ability sikulupuluka ndi plugin lina
- Try kupeza plugins zomwe zimakhudza (disabling conflicting plugins)

**Partner sikuboleli kuipatsa ability**
- Kufuna kuti partner ali m'allow-list
- Kufuna kuti visibility ya ability ikhalidwe kuti Partner
- Kufuna kuti credentials za partner zikukhala zikhalidwe
- Kufuna kuti muli ndi errors za authentication m'API logs

**Abilities osiyenera kukhala kukhala**
- Kufuna kuti muli ndi malo omwe mungukumbukire (review and classify them) m'admin notice
- Kufuna kuti classification yanu imapereka
- Kufuna kuti plugin lomwe limapereka ability lina limapereka

## Kupitira Kuchokera kwa Mode Yosiyanasiyana (Migration from Legacy Mode)

Ngati mukupitira kuchokera kwa version yomwe yomwe ya Superdav AI Agent:

- Zinthu zonse zomwe zili pansi zimapereka kuti Public
- Kufuna kuti muli ndi malo omwe mungukumbukire (review and adjust visibility) monga momwe mukuwoneza
- Samathani kuchokera kwa kufufuza (No action required unless you want to restrict access) ngati simukufuna kupanga kupeza.

Kufuna kuti muli ndi zambiri za kupitira **Third-Party Mode Migration** kuti muli ndi zambiri za kupitira kukhala mu API ya Abilities.

## Zofunso Zikulu (Next Steps)

Panda mungapereke visibility ya ability:

1. **Kufufuza abilities yanu**: Kufuna kuti mumakumbukire zonse zomwe zimapereka
2. **Kufuna kuti abilities osiyenera kukhala**: Kupereka admin notices
3. **Kupanga partners**: Kupanga partners ngati mukuwoneza Partner visibility
4. **Kufufuza ulamulira (Monitor usage)**: Kufunsa kuti abilities zikuphunzira kwambiri zomwe zimapereka
5. **Kukumbukira zolemba**: Kukhala ndi zolemba za chifukwa chake m'visibility level lomwe mukuwoneza
