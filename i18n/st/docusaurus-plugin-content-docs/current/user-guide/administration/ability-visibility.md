---
title: Ho bohlokoa le ho bona
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Boitsopebopebope (Ability Visibility)

Superdav AI Agent v1.12.0 e ntsa **Boitsopebopebope** (Ability Visibility) tse di tsela tsa go thusa, tse di dirang eng le eng se fana ka boitsopebopebopeba (ability). Le fa ke tla thusa baalima go bona kae kae botshelo ba agent ka REST APIs, MCP servers, WooCommerce integrations, le ditswalo tse ding.

## Boitsopebopebopeba (What is Ability Visibility)?

Boitsopebopebopeba ke tsela ya tsamaiso e thusang go dirisa:

- **Eng le botshelo** tse di fana ka agent
- **Leina le le ba thabela** (REST API, MCP, WooCommerce, le ditswalo ding)
- **Ba ba ba tlamega go ba leba** (kae ka ho ba leba le ba ba ba leba)
- **Kae di dirwang** (di tseba le di tseba)

Setlo se se fana ka boitsopebopebopeba se fana ka lefa le le bontsha kae kae kae.

## Leina la Boitsopebopebopeba (Visibility Levels)

### Public (Le fa ba ba tlamega go ba leba)

**Boitsopebopebopeba tsa le fa ba ba tlamega go ba leba** di fana ka lefa:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Boitsopebopebopeba jo bohle (le fa ba ba leba)

Sebaka se se fana ka eeng: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Le fa ba ba tlamega go ba leba)

**Boitsopebopebopeba tsa le fa ba ba tlamega go ba leba** di fana ka lefa mo tsela ya WordPress ya gago:

- Chat interfaces
- Admin panels
- Ba ba leba le ba tsamaisang (logged-in users) ke lefa
- Le fa di dirwang ka REST API kgotsa ditswalo ding tsa tsamaiso

Sebaka se se fana ka eeng: `manage-settings`, `view-analytics`, `export-data`

### Partner (Le fa ba ba tlamega go ba leba)

**Boitsopebopebopeba tsa le fa ba ba tlamega go ba leba** di fana ka lefa mo partner ba ba ba leba:

- Le tla hloka ho ba leba le ba tsamaisang (allow-list) la partner
- Di fana ka REST API le baalima ba partner
- Di fana ka MCP le baalima ba partner
- Le fa di dirwang ka ba ba tsamaisang (regular users)

Sebaka se se fana ka eeng: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Le fa ba ba tlamega go ba leba)

**Boitsopebopebopeba tsa le fa ba ba tlamega go ba leba** di fana ka lefa mo lefa le le bontsha:

- Le fa di dirwang ka lefa le le bontsha
- Le fa di dirwang mo chat
- Le fa di dirwang mo admin panels
- Le fa di dirwang ka boitsopebopebopeba tse di tsamaisang (deprecated) kgotsa tse di tsamaya



## Go-boetsopeho Boitshwaro (Managing Ability Visibility)

### Go-boetsopeho Boitshwaro sa Litlhokwa (Accessing Ability Visibility Settings)

1. La **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Le **Abilities** tab (Litlhokwa) e tsamaya
3. O tla bona lishomiso lehle tsa boitshwaro (abilities) le dikotla tsa lipelo tsa li lehle (visibility levels).

### Go-boetsopeho Boitshwaro (Viewing Ability Details)

Le tloha le hloka lehlaka la boitshwaro (ability) ho bona:

- **Name**: Le seo se fetang la ability.
- **Description**: Le seo ability e etsang.
- **Current visibility**: Public, Internal, Partner, kgotsa Disabled (E tlwaile).
- **Partner allow-list**: Boitshwaro ba lehle ba ka bona (ha ho le boitshwaro ba Partner).
- **Last updated**: Le fa boitshwaro bo ne bo fetoga la goanyane.
- **Status**: Le e tseba kgotsa E ne e ntse e tlhokwa.

### Go-boetsopeho Boitshwaro (Changing Visibility Levels)

Ho fetola lehle la ability:

1. Tsamaya le hloka lehlaka la ability mo lishomiso tsa boitshwaro.
2. Select lehle la lehle la boitshwaro ho tloha mo dropdown.
3. Ha o select "Partner", tsena dikotla tsa partner (partner identifiers) mo allow-list.
4. Tsamaya le hloka **Save** (Fetola).

Sebaka:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Ho Fetola Ka Boitshwaro (Bulk Operations)

Ho fetola lehle la boitshwaro ho boitshwaro ba li lehle tse dintsi:

1. Tsamaela le tsena boxes (boxes) mo boitshwaro ba li lehle.
2. Select lehle la lehle la boitshwaro ho tloha mo bulk action dropdown.
3. Tsamaya le hloka **Apply** (Tlhokwa).

## Lehlaka la Partner Allow-List (Partner Allow-List)

Le **partner allow-list** le fetola seo se etsang hore boitshwaro ba ka bona ba partner ba lehle tsa boitshwaro ba Partner.

### Ho Ntshoa Boitshwaro Ba Partner (Adding Partners)

1. Tsamaya le hloka lehlaka la **Superdav AI Agent** → **Settings** → **Partners**.
2. Tsamaela le hloka **Add Partner** (Ntshoa Partner).
3. Tsena partner identifier (usually an API key or organization ID).
4. Ha ho hloka, tsena lehle la partner le description.
5. Tsamaya le hloka **Save** (Fetola).

### Ho Tlhokwa Boitshwaro Ba Partner (Assigning Abilities to Partners)

Ha o ntshoa partner:

1. Go to the tab ya **Abilities**

2. Find an ability e a partner visibility (visibility of partner)

3. Click to edit

4. In the "Partner allow-list" section, check the boxes for partners who should have access

5. Click **Save**

### Ho go tsheba ho partner access

Ho go fana ho ba partner access:

1. Edit the ability
2. Uncheck the partner's box in the allow-list
3. Click **Save**

The partner will immediately lose access to that ability.

## Abilities e sengeng (Unclassified Abilities)

When you install a third-party ability that Superdav AI Agent doesn't recognize, it's marked as **Unclassified**.

### Lihloboho ho admin li ba abilities sengeng

O tla bona lihloboho la admin:

```
⚠️ Abilities Sengeng Li Tshepila

Li lohoho le li tshepila le li tsena:
- custom-import-tool
- external-api-wrapper

Li lohoho li ka na le diketso tsa bohloko (security) kapa ho ho sebelisa (compatibility).
Kaopa hore o le bone le o le tsene.

[Review Abilities] [Dismiss]
```

### Ho bona abilities sengeng

1. Click **Review Abilities** mo lihloboho la notice
2. Ho ba lehle le ability se sengeng, o tla bona:
   - Lebaka la ability le sepeletso (description)
   - Leano (which plugin/addon se ne se tsena)
   - Leano la ho sebelisa (Suggested visibility level)
   - Ho fana ka bohloko (Security assessment)

3. Choose a visibility level:
   - **Public**: Thaba le ability; phela e ka lekanyong le leng
   - **Internal**: Seba ho ho sebelisa le se ba ba le mo lehle
   - **Partner**: Seba ho ba partner le ba le bona
   - **Disabled**: Se ba le sebelisa ability ena

4. Click **Classify** ho tsena tsela ya hau

### Ke eng e hloka ho tsena abilities sengeng?

Ho tsena abilities:

- **Ho ntsa bohloko (Improves security)**: O tla tsena ka lebaka lehle hore o tsebe hore na eng e ba le bone
- **Ho sebelisa diketso (Prevents accidents)**: Abilities sengeng li ba le ho fana ka ho sebelisa le se ba le mo lehle
- **Ho fana ka features (Enables features)**: Ha o tsena, ability e tla ba le ho sebelisa
- **Ho tsena dikatso (Documents decisions)**: Diketso tsa hau di tsene ho ba le ho tsena



## Tšapelo ka Morero Fafeli

### REST API

**Tšapelo tsa botshelo (Public abilities)** di fana ka mofuta o nepa REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Tšapelo tsa bohloko (Internal and Partner abilities)** di tsena ka REST API.

### MCP Servers

**Tšapelo tsa botshelo (Public abilities)** di fana ka MCP:

```
MCP Server: Superdav AI Agent
Tšapelo tse neng di fana:
- scaffold-block-theme
- activate-theme
- send-email
```

**Tšapelo tsa bohloko (Internal abilities)** di tsena ka MCP.

**Tšapelo tsa partner (Partner abilities)** di fana fa le credentials tsa partner.

### WooCommerce Integration

**Tšapelo tsa botshelo (Public abilities)** tse neng di fetogela WooCommerce di fana:

- Go-manage products
- Go-process orders
- Go-communicate le morero wa mohlodi (Customer communication)

**Tšapelo tsa bohloko (Internal abilities)** di tsena ka WooCommerce.

### Chat Interface

**Tšapelo di tšapelo (All abilities)** (botshelo, bohloko, partner) di fana mo chat, go feta fa user a re, fa botshelo:

- Administrators ba bona tšapelo jo bogolo
- Users ba ntlha ba bona botshelo tsa botshelo (Public abilities)
- Partners ba bona botshelo tsa botshelo le tsa partner (fa di fetogile ka whitelist)

## Boitshwaro Jwa Ho Baetso (Security Best Practices)

### Prinsipho ea Ho Baetso le Tšapelo e le E le Possible (Principle of Least Privilege)

- Set tšapelo ho botshelo tse neng di le ho ba le ho fetogile ha di fana ka ho sebelisoa
- Sebele tšapelo tsa partner ho litšoa tse neng di le ho ba le ho fetogile (sensitive operations)
- Tsena tšapelo tse a re, tse a re le ho sebelisa

### Ho Baetso Joalo (Regular Audits)

- Re le ho bona tšapelo joalo ka mmele ea mmele (monthly)
- Re le ho ba le ho bona tšapelo tse neng di tsena
- Tsena tšapelo tsa partner tse a re, tse a re le ho sebelisoa

### Ho Baetso le Ho Tlhalosa (Logging and Monitoring)

- Re le ho bona tšapelo tse neng di le ba le ho sebelisoa hantle
- Re le ho tsamaea le litšomo tsa partner
- Tsena fa ho reba ho sebelisoa haholo ea tšapelo

### Tšapelo tsa Morero (Third-Party Abilities)

- Re le ho bona tšapelo tsa morero mmele joalo ka ho ba le ho fetogile
- Re le ho ba le ho tsamaea ho ba le ho reba
- Tsena ho sebelisa tšapelo tsa bohloko (Internal) kapa tsa partner fa di fetogile
- Ho fetola ho botshelo (Public) fa di fetogile ka ho bona

---

## Go-go-gao (Troubleshooting)

**Tsela le fa'a (An ability isn't showing in the list)**
- Re tsela hore ke a feso (Verify that the ability is installed and active)
- Re tsela hore ke plugin/addon e feso (Check that the plugin/addon is enabled)
- Re feso le page (Refresh the page)

**Ke ka feso ho fetola fa'a (I can't change an ability's visibility)**
- Re tsela hore o na le fa'a ea admin (Verify you have administrator permissions)
- Re tsela hore ke a feso ke plugin e feso (Check that the ability isn't locked by a plugin)
- Re feso le plugins tse di fetola (Try disabling conflicting plugins)

**Partner a ka feso ho feta fa'a (A partner can't access an ability)**
- Re tsela hore partner o na le allow-list (Verify the partner is in the allow-list)
- Re tsela hore ke a feso ea fetola fa'a e setsoe ho Partner (Check that the ability's visibility is set to Partner)
- Re feso le credentials tsa partner di fetola (Confirm the partner's credentials are correct)
- Re tsela API logs ho lefa lona le lona (Check API logs for authentication errors)

**Fa fa'a tse neng di fetolwa ha di feso (Unclassified abilities keep appearing)**
- Re leba le feta le ba di fetola ea admin notice (Review and classify them in the admin notice)
- Re tsela hore o fetola ho fetola (Check that your classification was saved)
- Re tsela hore plugin e fetang fa'a e fetolwa (Verify the plugin providing the ability is up to date)

## Ho fana ka Mode ea Legacy (Migration from Legacy Mode)

Ha u fetola ho version e fetileng ea Superdav AI Agent:

- Fa fa'a tse di fetileng, di fetolwa ho Public automatically (All existing abilities are automatically classified as Public)
- Re leba le feta le ba di fetola ka tsela e hloka (Review and adjust visibility as needed)
- Ha ho hlokahalo ho fetola access, ha ho hlokahalo ho fetola (No action required unless you want to restrict access)

Re leba **Third-Party Mode Migration** ho fana ka fa'a tse di fetolwa ho API integration e fetileng.

## Setso sa Ho Fetola (Next Steps)

Ha u setse ho fetola tsela ea fa'a e fetileng:

1. **Re leba fa'a ea hau**: Re leba ka fa'a hloboho tse di fetolwa ka ho feso (Audit all installed abilities)
2. **Fetola fa'a tse neng di fetolwa ha di feso**: Re tsela admin notice (Respond to admin notices)
3. **Setse partners**: Re fana le partners ha u sebelisa Partner visibility (Add partners if using Partner visibility)
4. **Re leba ho sebelisoa**: Re tsela fa'a tse neng di sebelisoa hantle (Track which abilities are used most)
5. **Leha le baetso**: Leha le baetso ka ho fana ka eng u ba fetolang level ea visibility
