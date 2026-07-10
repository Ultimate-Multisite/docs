---
title: Féileacht Fhíneachta
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Fhéil Fhíneacht (Ability Visibility) {#ability-visibility}

Tá **Fhéil Fhíneacht (Ability Visibility)** ag Superdav AI Agent v1.12.0, a bhfuil rathúil ar na ruthaithe a léiríonn conairtí a gcurraíonn an fhéil fhíneacht a bheith agat ar chuid dearmada. Cén fáth go bhfuil sé seo ag fáil ar chuid fhéileachtaí an agenta trí REST APIs, MCP servers, WooCommerce integrations, agus fáil eile.

## Cad é Fhéil Fhíneacht? {#what-is-ability-visibility}

Is é Fhéil Fhíneacht (Ability Visibility) siomradh breiseanna a chiallaíonn:

- **Cé Fhéileachtaí** a bheith ar fáil do theanga
- **Cá bhfuil siad léirithe** (REST API, MCP, WooCommerce, etc.)
- **Con a bheith ag fáil agat** (trá allow-lists deatâir)
- **Cén fáth a bheith ag curtha** (a chothromchaithe vs. an chothromchaithe)

Tá méid fhéil fhíneacht ar chuid fhéileachtaí a bhaineann leis an t-amachas a bheith agat ar chuid dearmada.

## Meidí Fhéil Fhíneacht (Visibility Levels) {#visibility-levels}

### Public (Pública) {#public}

**Fhéileachtaí publa** tá ar fáil i gcónaí:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Gach rôl oifigiúil (le chuid breiseanna atá ag curtha)

Eagraíochta: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Intearnl) {#internal}

**Fhéileachtaí intearnl** tá ar fáil anseo leat an WordPress:

- Chat interfaces
- Admin panels
- Uirlisí a bhfáil (Logged-in users only)
- Níl léirithe trí REST API nó integrations eile

Eagraíochta: `manage-settings`, `view-analytics`, `export-data`

### Partner (Deatâir) {#partner}

**Fhéileachtaí deatâir** tá ar fáil do deatâir a bhfáil agat:

- Baitheann ar chuid allow-list deatâir ag curtha go súnach
- Ar fáil trí REST API le breiseanna deatâir
- Ar fáil trí MCP le athchruinneadh deatâir
- Níl ar fáil do uirlisí oifigiúla

Eagraíochta: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Anailís) {#disabled}

**Fhéileachtaí anailís** níl ag fáil ar aon chónaí:

- Níl léirithe trí aon dearmad
- Níl ar fáil i chat
- Níl ar fáil i admin panels
- Useful for deprecated or experimental abilities

## Déanamh ar Fhíneacht Ability {#managing-ability-visibility}

### Aistriú ar Cailteanna Fhíneachta (Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. And leat ar **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cliom ar an tab **Abilities**
3. Beidh tú ag fheiceáil liosta de càileanna a bhí curtha, le na leasla fhíneachta (visibility levels) atá ag siad.

### Fhéachán ar Fáil Déiridhí Ability (Viewing Ability Details) {#viewing-ability-details}

Cliom ar aon ability chun seo a fheiceáil:

- **Name**: An díntinn an ability
- **Description**: Cad a dhéanann an ability
- **Current visibility**: Public, Internal, Partner, or Disabled (Fáil public, Intrachnai, Partnair, nó Déshláin)
- **Partner allow-list**: Cion a bheith ag fáil (if Partner visibility)
- **Last updated**: Conas a bhí an fáil ach thaispeánta go láiste
- **Status**: Recognized or Unclassified (Achtaithe nó Ndiúchaithe)

### Changú Fhíneachtaí Fáil (Changing Visibility Levels) {#changing-visibility-levels}

Chun athrú fhíneacht aon ability:

1. Cliom ar an ability i liosta
2. Déan chun leasla fhíneachta nua a bheith ag an dropdown
3. Má tá tú ag déanamh "Partner", adda díntinn partnair (partner identifiers) go léir na allow-list
4. Cliom ar **Save**

Eisimpleir:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Oibríochtaí Mór (Bulk Operations) {#bulk-operations}

Chun athrú fhíneacht ar chuid càileanna:

1. Cliom ar na bixinn aige leat ag an ability
2. Déan chun leasla fhíneachta nua a bheith ag an bulk action dropdown
3. Cliom ar **Apply**

## Liosta Fáil Partnair (Partner Allow-List) {#partner-allow-list}

An **partner allow-list** curraíonn conas a bheith ag fáil càileanna de chuid partnairí oifríche (external partners).

### Añadh Partnairí (Adding Partners) {#adding-partners}

1. And leat ar **Superdav AI Agent** → **Settings** → **Partners**
2. Cliom ar **Add Partner**
3. Déan díntinn partnair (usually an API key or organization ID)
4. Córasach, adda oileúcháin partnair agus cur chun cinn (partner name and description)
5. Cliom ar **Save**

### Aistriú Càileanna do Partnairí (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

Tar éis an partnair a shlónadh:

1. Roinn go dtús **Abilities** tab
2. Déan ar chuid an ability le fhoisteacht Partner visibility
3. Cliom chun é ardán
4. Iar a chuid "Partner allow-list" section, déan na boxa do partnerí atá a bheith ag cur chun cinn
5. Cliom **Save**

### Aosadh Fhoisteachta Partner Access {#revoking-partner-access}

Le chas an t-athrúcháin access de partner:

1. Athrúcháin an ability
2. Níl an boxa do partner ag cur chun cinn i bhfhoisteacht
3. Cliom **Save**

Beidh an partner an t-athrúchán access ar an ability sin go léir.

## Abilities Ní Chlasfáideach (Unclassified) {#unclassified-abilities}

Nuair a chur in áit un ability tríúchláir (third-party ability) atá Superdav AI Agent níl ag teacht ar fáil, tá sé mar **Unclassified**.

### Notice Admin do Abilities Ní Chlasfáideach {#admin-notice-for-unclassified-abilities}

Beidh tú ag iarraidh notice admin:

```
⚠️ Unclassified Abilities Detected

An t-athrúcháin a bhí cur in áit ach níl ag teacht ar fáil:
- custom-import-tool
- external-api-wrapper

Is féidir leis na abilities seo go leor rialacha séur agus comhionachta.
Le do thoil, déan ar chuid de shonraithe agus a chlasfadh sin.

[Review Abilities] [Dismiss]
```

### Aosadh Abilities Ní Chlasfáideach {#reviewing-unclassified-abilities}

1. Cliom **Review Abilities** i an notice
2. Do chuid ability ní chlasfáideach, beidh tú ag iarraidh:
   - Teachtaireacht an ability agus a chur in áit
   - Source (an plugin/addon a chur in áit é)
   - Leas seo ar fhoisteacht
   - Aistriú séur

3. Déan chun leas teachtaireachta:
   - **Public**: Treideach ar an ability; chur é ar an cur sin
   - **Internal**: Cur tú féin go léir
   - **Partner**: Cur tú partnerí a bhfuil siad ag cur chun cinn
   - **Disabled**: Ná úsáid an ability seo

4. Cliom **Classify** chun do chuid de shonraithe a chur in áit

### Cad a bheith ag clasfadh Abilities Ní Chlasfáideach? {#why-classify-unclassified-abilities}

Clasfadh abilities:

- **Dígtaíonn séur**: Taispeán tú go léir a bhí cur chun cinn
- **Bíonn an gortacha ag cur isteach**: Beidh na abilities ní chlasfáideach ag cur in áit go leor ar an chuid
- **Léiríonn feichar**: Mara do chuid de shonraithe, beidh an ability ag cur in áit tar éis a bhí chlasfadh
- **Leonaidh teachtaireachtaí**: Beidh do chuid de shonraithe ag cur in áit chun an t-athrúcháin a bheith ar fáil

## Fíneacht in Surfaí Éifeachtach {#visibility-in-different-surfaces}

### REST API {#rest-api}

Tá **eifeachtaí oiliúla** ar fáil tríd an curraí REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Níl **eifeachtaí ionta agus de chuidine** ar fáil tríd an REST API.

### MCP Servers {#mcp-servers}

Tá **eifeachtaí oiliúla** ar fáil tríd MCP:

```
MCP Server: Superdav AI Agent
Eifeachtaí ar fáil:
- scaffold-block-theme
- activate-theme
- send-email
```

Níl **eifeachtaí ionta** ag teacht ar MCP.

Tá **eifeachtaí de chuidine** ar fáil ach le curraíochta de chuidine.

### WooCommerce Integration {#woocommerce-integration}

Tá **eifeachtaí oiliúla** aige le WooCommerce ar fáil:

- Déan an chéad chun rialta (Product management)
- Déan an chéad chun ordú (Order processing)
- Caint le chuidisteoirí (Customer communication)

Níl **eifeachtaí ionta** ag teacht ar WooCommerce.

### Chat Interface {#chat-interface}

Tá **cáileán** (Public, Internal, Partner) ar fáil i chat, ag cur chun cinn an ghlúin (user permissions):

- Déanach (Administrators) téann ar an gcuid eifeachtaí
- Uirlisí (Regular users) téann ar eifeachtaí oiliúla ach leatóg
- De chuidine (Partners) téann ar eifeachtaí oiliúla + de chuidine (má tá sé leatógaithe)

## Beisteachta Best Practices {#security-best-practices}

### Príomh-chúram Leasú (Principle of Least Privilege) {#principle-of-least-privilege}

- Déan an eifeachtaí go léir le curraí beagásach is mór a ghlúin a fháil.
- Use Partner visibility ar obairí scéalfaí (sensitive operations).
- Ináimh an eifeachtaí atá agat ach níl ag úsáid.

### Audits Ríomhacha {#regular-audits}

- Déan ar chuid eifeachtaí oiliúla gach mianach.
- Déan ar chuid eifeachtaí ní a bhfhéidir a bheith ag cur le chéile (unclassified abilities).
- Trí an fáil ar fáil do de chuidine atá ag úsáid ach níl ag úsáid.

### Logaí agus Monitóirí {#logging-and-monitoring}

- Monitóraigh conas a bhfaidh eifeachtaí a úsáid go mór.
- Traceann an polaí cur le chéile do de chuidine.
- Déan alert ar úsáid as an gcuid eifeachtaí (unusual ability usage).

### Eifeachtaí Treoir {#third-party-abilities}

- Déan ar chuid eifeachtaí treoir ar fáil primaois go léir a fháil.
- Déan ar na hiontaí go mór iad go súnach.
- Déan an t-amach go léir ar fáil ach tar éifeachtaithe (vetting).

## Troubleshooting {#troubleshooting}

**Níl é a bhealach ag tairgse ar an liosta**
- Déan cinnte go bhfuil an bhealach curtha agus go bhfuil sé beagach (active)
- Déan cinnte go bhfuil an plugin/addon acuánaithe (enabled)
- Athfíodh an cur síos (refresh)

**Níl mé ag athrú an fhéilbhleacht (visibility) ar bhealach**
- Déan cinnte go bhfuil teangail administrator (administrator permissions) agat
- Déan cinnte go bhfuil an bhealach ocra (locked) deagúil le plugin nàoir
- Déan an tairgse (disable) na pluginí a bhfeicneamh leat

**Níl aon fáil access ar bhealach do chuidí comhiontha (partner)**
- Déan cinnte go bhfuil an chuid comhiontha ag cur isteach (allow-list)
- Déan cinnte go bhfuil an fhéilbhleacht an bhealach ar "Partner" (Chuid Comhiontha) curtha
- Déan cinnte go bhfuil na creideanna (credentials) an chuid comhiontha ceart
- Déan an tairgse log API chun earráidí athchruinn (authentication errors) a fheiceáil

**Tairgse an-aistriúla ag cur isteach níl aon rud**
- Déan ar fáil agus cur isteach (classify) iad ag cur síos (admin notice)
- Déan cinnte go bhfuil do cur síos curtha
- Déan cinnte go bhfuil an plugin a thaispeáint an bhealach ag cur síos (up to date)

## Migration from Legacy Mode {#migration-from-legacy-mode}

Má tá tú ag athrú ó chuid fhoireann (version) earlier de Superdav AI Agent:

- Is é an gcuid bhealaí (abilities) a bhaineann go bhfuil siad curtha ar "Public" (Pública) go dtí an tairgse
- Déan ar fáil agus athrú an fhéilbhleacht mar atá ag cur síos (as needed)
- Níl aon rud a dhéanamh anois má tá tú ag cur isteach (restrict) do chuid access

Déan ar fáil ar **Third-Party Mode Migration** chun níos mó sin féin á bhfhéidir ar athrú chuig cur síos API Abilities (Abilities API) na hionta.

## Next Steps {#next-steps}

Tar éis an cur síos an fhéilbhleachta an bhealach:

1. **Déan ar fáil ar do bhealaí**: Déan ar chuid (audit) ar an gcuid bhealaí a bhaineann
2. **Cur síos na bhealaí níl aon aistriúla**: Athbhreithniú ar cur síos admin
3. **Déan ar fáil ar chuidí comhiontha**: Add do chuidí comhiontha má tá tú ag cur isteach (Partner visibility)
4. **Féach ar úsáid**: Déan ar fáil ar an gcuid bhealaí a bhaineann is mó
5. **Dúlamha dhéanamh ar na deicidí**: Déan nochtú ar an rud a dhéan tú chun cur síos (visibility level) aonair
