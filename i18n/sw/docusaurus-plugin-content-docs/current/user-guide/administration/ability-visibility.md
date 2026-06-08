---
title: Uwezo wa Kuonekana
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Uonekano wa Uwezo (Ability Visibility)

Superdav AI Agent v1.12.0 inatanguliza udhibiti wa **Uonekano wa Uwezo** ambao unadhibiti ni sehemu zipi zitafichua uwezo kila uwezo. Hii inaruhusu wasimamizi kurekebisha kwa undani ni uwezo gani wa agent zitapatikana kupitia REST APIs, seva za MCP, viunganishi vya WooCommerce, na sehemu zingine.

## Uonekano wa Uwezo ni Nini?

Uonekano wa Uwezo ni mfumo wa ruhusa ambao unadhibiti:

- **Ni uwezo gani** unaopatikana kwa agent
- **Wapi unawafichua** (REST API, MCP, WooCommerce, n.k.)
- **Nani anaweza kufikia** (kupitia orodha ya kuruhusu ya washirika)
- **Jinsi unavyopangwa** (unatambuliwa vs. hautambuliwi)

Kila uwezo unabeba kiwango cha uonekano kinachoamua upatikanaji wake katika maeneo tofauti.

## Viwango vya Uonekano

### Umma (Public)

**Uwezo wa Umma** unapatikana kila mahali:

- Njia za REST API (REST API endpoints)
- Seva za MCP
- Viunganishi vya WooCommerce
- Mifuatano ya mazungumzo (Chat interfaces)
- Watumiaji wote wa majukumu (na ruhusa husika)

Mfano: `scaffold-block-theme`, `activate-theme`, `send-email`

### Ndani (Internal)

**Uwezo wa Ndani** unapatikana ndani tu ya usakinishaji wako wa WordPress:

- Mifuatano ya mazungumzo (Chat interfaces)
- Paneli za kiadmin
- Watumiaji walioingia tu
- Haifichuliwi kupitia REST API au viunganishi vya nje

Mfano: `manage-settings`, `view-analytics`, `export-data`

### Mshirika (Partner)

**Uwezo wa Mshirika** unapatikana kwa washirika walioorodheshwa tu:

- Unahitaji kuwekwa wazi kwenye orodha ya kuruhusu ya washirika
- Unapatikana kupitia REST API kwa kutumia siri za washirika
- Unapatikana kupitia MCP kwa kutumia uthibitisho wa washirika
- Haipatikani kwa watumiaji wa kawaida

Mfano: `bulk-import-users`, `modify-billing`, `access-analytics`

### Zimezimwa (Disabled)

**Uwezo zilizozimwa** hazipatikani popote:

- Haifichuliwi kupitia eneo lolote
- Haipatikani kwenye mazungumzo
- Haipatikani kwenye paneli za kiadmin
- Inatumika kwa uwezo zilizotangazwa kuwa zimeisha au za majaribio

## Kudhibiti Uonekano wa Uwezo

### Kufikia Mipangilio ya Uonekano wa Uwezo

1. Nenda kwenye **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Bonyeza kichupo cha **Abilities**
3. Utaona orodha ya uwezo zote zilizosakinishwa pamoja na viwango vya uonekano zao

### Kuangalia Maelezo ya Uwezo

Bonyeza kwenye uwezo wowote ili kuona:

- **Jina**: Kitambulisho cha uwezo
- **Maelezo**: Uwezo unachofanya
- **Uonekano wa sasa**: Umma, Ndani, Mshirika, au Zimezimwa
- **Orodha ya kuruhusu ya washirika**: Ni washirika gani wanaweza kufikia (ikiwa ni uonekano wa Mshirika)
- **Ilibadilishwa mara ya mwisho**: Lini uonekano lilibadilishwa mara ya mwisho
- **Hali**: Unatambuliwa au Haitambuliwi

### Kubadilisha Viwango vya Uonekano

Kubadilisha uonekano wa uwezo:

1. Bonyeza uwezo kwenye orodha
2. Chagua kiwango kipya cha uonekano kutoka kwenye orodha ndururu (dropdown)
3. Ikiwa unachagua "Mshirika", ongeza kitambulisho cha washirika kwenye orodha ya kuruhusu
4. Bonyeza **Save**

Mfano:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operesheni za Jumla (Bulk Operations)

Kubadilisha uonekano kwa uwezo nyingi:

1. Weka tiki kwenye boksi zilizopo kando ya uwezo
2. Chagua kiwango kipya cha uonekano kutoka kwenye orodha ndururu ya hatua za jumla
3. Bonyeza **Apply**

## Orodha ya Kuruhusu ya Washirika (Partner Allow-List)

**Orodha ya kuruhusu ya washirika** inadhibiti ni washirika wa nje gani wanaweza kufikia uwezo wa kiwango cha Mshirika.

### Kuongeza Washirika

1. Nenda kwenye **Superdav AI Agent** → **Settings** → **Partners**
2. Bonyeza **Add Partner**
3. Ingiza kitambulisho cha mshirika (kawaida ni API key au ID ya shirika)
4. Chaguo la kuongeza jina na maelezo ya mshirika
5. Bonyeza **Save**

### Kuwapa Uwezo kwa Washirika

Baada ya kuongeza mshirika:

1. Nenda kwenye kichupo cha **Abilities**
2. Tafuta uwezo yenye uonekano wa Mshirika
3. Bonyeza kuhariri
4. Katika sehemu ya "Partner allow-list", weka tiki kwa washirika ambao wanapaswa kuwa na uwezo
5. Bonyeza **Save**

### Kizuia Ufikiaji wa Mshirika

Ili kuondoa ufikiaji wa mshirika:

1. Hariri uwezo
2. Ondoa tiki ya mshirika kwenye orodha ya kuruhusu
3. Bonyeza **Save**

Mshirika atapoteza ufikiaji wa uwezo huo mara moja.

## Uwezo Haitambuliwi (Unclassified Abilities)

Unaposanisha uwezo wa upande wa tatu ambao Superdav AI Agent hautambui, unatangazwa kuwa **Haitambuliwi**.

### Taarifa ya Admin kwa Uwezo Haitambuliwi

Utaona taarifa ya admin:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Kupitia Uwezo Haitambuliwi

1. Bonyeza **Review Abilities** kwenye taarifa
2. Kwa kila uwezo haitambuliwi, utaona:
   - Jina na maelezo ya uwezo
   - Chanzo (ni plugin/addon gani ilisakinisha)
   - Kiwango kinachopendekezwa cha uonekano
   - Tathmini ya usalama

3. Chagua kiwango cha uonekano:
   - **Umma (Public)**: Muamini uwezo; uifichue kila mahali
   - **Ndani (Internal)**: Upunguze kwa matumizi ya ndani tu
   - **Mshirika (Partner)**: Upunguze kwa washirika maalum
   - **Zimezimwa (Disabled)**: Usitumie uwezo huu

4. Bonyeza **Classify** kuhifadhi uamuzi wako

### Kwa nini Kutambua Uwezo Haitambuliwi?

Kutambua uwezo:

- **Huboresha usalama**: Unakubali wazi kile kinachofichuliwa
- **Kuzuia ajali**: Uwezo haitambuliwi huzimwa kwa msingi
- **Kuwezesha vipengele**: Baada ya kutambuliwa, uwezo unakuwa upatikanaji
- **Kudokumenta maamuzi**: Chaguo zako huzikusanywa kwa ajili ya ukaguzi

## Uonekano katika Maeneo Tofauti

### REST API

**Uwezo wa Umma** unapatikana kupitia REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Uwezo wa Ndani na Mshirika** haupatikani kupitia REST API.

### Seva za MCP

**Uwezo wa Umma** unapatikana kupitia MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Uwezo wa Ndani** haifichuliwi kupitia MCP.

**Uwezo wa Mshirika** unapatikana kwa kutumia siri za washirika tu.

### Viunganishi vya WooCommerce

**Uwezo wa Umma** vinavyohusiana na WooCommerce vinapatikana:

- Usimamizi wa bidhaa
- Usindikaji wa maagizo
- Mawasiliano na wateja

**Uwezo wa Ndani** haifichuliwi kwa WooCommerce.

### Mifuatano ya Mazungumzo (Chat Interface)

**Uwezo zote** (Umma, Ndani, Mshirika) zinapatikana kwenye mazungumzo, kulingana na ruhusa za mtumiaji:

- Wasimamizi wanaona uwezo wote
- Watumiaji wa kawaida wanaona tu uwezo wa Umma
- Washirika wanaona Uwezo wa Umma + Uwezo wa Mshirika (ikiwa wameorodheshwa)

## Mazoea Bora ya Usalama

### Kanuni ya Haki Ndogo Zaidi (Principle of Least Privilege)

- Weka uwezo kwenye uonekano wa kuzuia zaidi ambao bado unaruhusu matumizi yake
- Tumia uonekano wa Mshirika kwa operesheni nyeti
- Zima uwezo ambazo hazizitumiki

### Ukaguzi wa Mara kwa Mara

- Pitia uonekano wa uwezo kila mwezi
- Angalia kwa uwezo haitambuliwi
- Ondoa ufikiaji kwa washirika ambao hawatumii

### Usajili na Ufuatiliaji (Logging and Monitoring)

- Fuatilia ni uwezo gani zinatumika zaidi
- Tathmini mifumo ya ufikiaji wa washirika
- Toa tahadhari kwa matumizi ya uwezo yasiyo ya kawaida

### Uwezo wa Upande wa Tatu

- Pitia uwezo za upande wa tatu kabla ya kuzianzisha
- Zitambue wazi
- Anza na uonekano wa Ndani au Mshirika
- Zifanye kuwa Umma tu baada ya kufanyiwa ukaguzi

## Kutatua Matatizo (Troubleshooting)

**Uwezo halionekani kwenye orodha**
- Thibitisha kuwa uwezo limefunguliwa na bado linafanya kazi
- Angalia kuwa plugin/addon imefunguliwa
- Refresha ukurasa

**Siwezi kubadilisha uonekano wa uwezo**
- Thibitisha kuwa una ruhusa ya msimamizi
- Angalia kuwa uwezo haujafungwa na plugin
- Jaribu kuzima plugins zinazokinzana

**Mshirika hawezi kufikia uwezo**
- Thibitisha kuwa mshirika yuko kwenye orodha ya kuruhusu
- Angalia kuwa uonekano wa uwezo umewekwa kama Mshirika
- Thibitisha kuwa siri za mshirika ni sahihi
- Angalia kumbukumbu za API kwa makosa ya uthibitisho

**Uwezo haitambuliwi bado zinaonekana**
- Zipitia na zitambue kwenye taarifa ya admin
- Angalia kuwa utambuzi wako umefungwa
- Thibitisha kuwa plugin inayoleta uwezo imesasishwa

## Kuhama kutoka Hali ya Zamani (Legacy Mode)

Ikiwa unaposasisha kutoka toleo la zamani la Superdav AI Agent:

- Uwezo zote zilizopo zinatambuliwa kiotomatiki kama Umma
- Pitia na rekebisha uonekano kama inavyohitajika
- Hakuna hatua inayohitajika isipokuwa unataka kupunguza ufikiaji

Tazama **Third-Party Mode Migration** kwa maelezo zaidi kuhusu mpito wa kuunganisha na API ya Uwezo ya asili.

## Hatua Zijazo

Baada ya kupanga uonekano wa uwezo:

1. **Pitia uwezo zako**: Ukaguzi wa uwezo zote zilizosakinishwa
2. **Tambua uwezo haitambuliwi**: Jibu taarifa za admin
3. **Weka upanga**: Ongeza washirika ikiwa unatumia uonekano wa Mshirika
4. **Fuatilia matumizi**: Tathmini ni uwezo gani zinatumika zaidi
5. **Dokumenta maamuzi**: Weka kumbukumbu kuhusu kwanini ulichagua kiwango cha uonekano kila kimoja
