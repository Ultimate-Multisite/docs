---
title: Fòcas a h-ealaidh
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Fhaighinnachd a' Chàrach (Ability Visibility)

Superdav AI Agent v1.12.0 a thann a' chlàradh **Ability Visibility** a tha a' leige sinn a' chlàradh, a tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh. Tha seo a' leige sinn do chùineadh a' chlàradh gu sònraich gu cumhachd a tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh, a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh.

## Cò a tha Ability Visibility? (What is Ability Visibility?)

Ability Visibility is se system de chàrach a tha a' chlàradh:

- **Cò a tha** a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh
- **Cuimhne a tha iad a' chlàradh** (REST API, MCP, WooCommerce, etc.)
- **Cona a tha iad a' chlàradh** (leithidhan a' chlàradh)
- **Cuimhne a tha iad a' chlàradh** (a chlàradh a' chlàradh vs. a chlàradh a' chlàradh)

Tha chàrach a tha eachdraidh leithid a tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh.

## Leithidhan a tha Ability Visibility? (Visibility Levels)

### Public (Public)

**Ability Public** tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Cùinean ùr (leithidhan) a h-uileachda (leithidhan a' chlàradh)

Eisimpleir: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Intearnel)

**Ability Intearnel** tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh:

- Chat interfaces
- Admin panels
- Cùinean a tha a' chlàradh (leithidhan)
- Cha tha a' chlàradh gu REST API no leithidhean a' chlàradh

Eisimpleir: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Ability Partner** tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh:

- Tha a' chlàradh gu leithidhan a' chlàradh a' chlàradh a' chlàradh
- A tha a' chlàradh gu REST API le cridheiridh partner
- A tha a' chlàradh gu MCP le fhaighinnadh partner
- Cha tha a' chlàradh gu cùinean ùr

Eisimpleir: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Deabhailte)

**Ability Deabhailte** tha a' chlàradh a' chlàradh a' chlàradh a' chlàradh a' chlàradh:

- Cha tha a' chlàradh gu aon leithidhan
- Cha tha a' chlàradh gu chat
- Cha tha a' chlàradh gu cùinean a' chlàradh
- Tha eòlasach airson abilityn a tha a' chlàradh a' chlàradh.

## A' chlàradhchail a' chlàradhchail

### A' chlàradhchail a' chlàradhchail de dhòighinn a' chlàradhchail

1. Ràdhdaidh **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Clicke ar taobh **Abilities** (A' chlàradhchail)
3. Bidh thu ag faic seachd de luchd-chlàradh a' chlàradhchail a' chlàradhchail agus eadar-dheargadh na stiùiriche chlàradhchail.

### A' chlàradhchail a' chlàradhchail a' chlàradhchail

Clicke ar aon chlàradhchail airson faic:

- **Name**: An t-idheantar a' chlàradhchail
- **Description**: Guid a tha an chlàradhchail a' doladh
- **Current visibility**: Public, Internal, Partner, no Disabled (A' chlàradhchail a' chlàradhchail)
- **Partner allow-list**: Còmhnaidh a' chlàradhchail a' faic a gineadh (chan a tha e 'Partner visibility')
- **Last updated**: Cuimhneach air an t-am sin a' chlàradhchail a' chlàradhchail a' chlàradhchail
- **Status**: A' chlàradhchail a' faic air no Unclassified (Chan a tha e 'Unclassified')

### A' chlàradhchail a' chlàradhchail a' chlàradhchail

 airson atharrachadh a' chlàradhchail a' chlàradhchail:

1. Clicke ar an chlàradhchail anns an lise
2. Taisg an t-am sin air a thabhairt de dhòighinn (dropdown)
3. Mar a tha thu ag taisg "Partner", leughid an t-idheantar na partner air an list a' chlàradhchail a' faic
4. Clicke ar **Save**

Eisimpleir:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### A' chlàradhchail a' chlàradhchail a' chlàradhchail

 airson atharrachadh a' chlàradhchail gu mbeidh thu de dhòighinn (multiple abilities):

1. Clicke ar na boxa a' chlàradhchail
2. Taisg an t-am sin air a thabhairt de dhòighinn a' chlàradhchail a' chlàradhchail
3. Clicke ar **Apply**

## A' chlàradhchail a' faic a gineadh (Partner Allow-List)

A' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlàradhchail a' faic a gineadh a' chlà

1. Ràdh an tab **Abilities** (Ceallan)
2. Thoir sealladh a tha le fhaisg Partner visibility (Fhaisg a tha le fhaisg Partner)
3. Click airson am fhaighinn (Edit)
4. I stiùir "Partner allow-list", thoir an t-tagh (checkbox) airson na partner a tha thuig a tha thuig a bheith le fhaisg
5. Click **Save**

### A' chlàradh fhaisg Partner (Revoking Partner Access)

Tha e cheannach a bhith a' chlàradh fhaisg an partner:

1. Edit an ability
2. Tha an t-tagh an partner a tha thuig a bheith le fhaisg a' chlàradh (Uncheck)
3. Click **Save**

Bidh an partner a tharraing agad fhaisg air an ability sin gu sgeulach.

## Abilities a cha bhith a' chlàradh (Unclassified Abilities)

Nuair a tha thuig a bhith a' chlàradh ability a tha le fhaighinn Superdav AI Agent, tha e a' chlàradh mar **Unclassified**.

### A' chlàradh admin airson abilities a cha bhith a' chlàradh (Admin Notice for Unclassified Abilities)

Bidh thuig a fheuchain tòiseachadh admin:

```
⚠️ Abilities a cha bhith a' chlàradh a tha a' chlàradh

Tha an amh a tha a' chlàradh a tha a' chlàradh mar a tha a' chlàradh:
- custom-import-tool
- external-api-wrapper

Leum nas abilities seo e cheannach a bhith a' chlàradh air a' chlàradh is dòigh.
De uile, tha thuig a bhith a' chlàradh agus a' chlàradh.

[Review Abilities] [Dismiss]
```

### A' chlàradh abilities a cha bhith a' chlàradh (Reviewing Unclassified Abilities)

1. Click **Review Abilities** anns an tòiseachadh
2. airson each unclassified ability, tha thuig a fheuchain:
   - am fhaighinn agus a chluas
   - Source (an plugin/addon a tha e a' chlàradh)
   - Suggested visibility level (fhaisg le fhaisg a' chlàradh)
   - Security assessment (aistriú seachadach)

3. Thoir fhaisg le fhaisg a' chlàradh:
   - **Public**: Bhaidh thuig a fhisghal an ability; tharraing e air a bhith air a' chlàradh gu sin.
   - **Internal**: Tha e a' chlàradh do uileachd a' chlàradh.
   - **Partner**: Tha e a' chlàradh do partner a tha thuig a tha thuig.
   - **Disabled**: Bidh an ability seo a' chlàradh.

4. Click **Classify** airson a' chlàradh tòisich agad

### Cuimhneachadh: A bheil thuig a' chlàradh abilities a cha bhith a' chlàradh? (Why Classify Unclassified Abilities?)

A chlàradh abilities:

- **Ambroichd a' chlàradh**: Tha thuig a bheiridh air gu sgeulach am fhaisg.
- **Bheiridh an t-tagh**: Bidh abilities a cha bhith a' chlàradh a' chlàradh a' chlàradh gu sin.
- **A' chlàradh feumaidh e**: An uair a tha e a' chlàradh, tha an ability air a bheith.
- **Cuimhneachadh na deisghean**: Tha tòisich agad a' chlàradh a' chlàradh airson faighinn.

## Fhaisg an Eadar Airtean

### REST API

**Abhailteine publiquinte** tha a' cheannachda gu REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Abhailteine seallach agus pàirtnerichean** cha tha a' cheannachda gu REST API.

### MCP Servers

**Abhailteine publiquinte** tha a' cheannachda gu MCP:

```
MCP Server: Superdav AI Agent
Abhailteine a' cheannachda:
- scaffold-block-theme
- activate-theme
- send-email
```

**Abhailteine seallach cha tha a' cheannachda gu MCP.

**Abhailteine pàirtnerichean** cha tha a' cheannachda nam deireadh le cridheann pàirtnerichean.

### WooCommerce Integration

**Abhailteine publiquinte** a' cheannachda gu WooCommerce tha a' cheannachda:

- Bhratachadh proddechan
- Tròdh proddechan
- Comharrachadh sealltainnean

**Abhailteine seallach cha tha a' cheannachda gu WooCommerce.

### Chat Interface

**Bhaidh **a' chùisbeulagan** (publiquinte, seallach, pàirtnerichean) a' cheannachda anns an chat, ag iarraidh amh dhuthist air a' chùisbeulagan:

- Tha na stiùirean a' cheannachda air ean dà chùisbeulagan
- Tha na chùisbeulagan seallach a' cheannachda nam publiquinte
- Tha na pàirtnerichean a' cheannachda nam publiquinte + pàirtnerichean (chan sealltaint)

## Bhràith-bhàith-bhàith Sgàilidhean

### Prìnise an tòisichd le fhaighinn as beag

- Rinn a' cheannachda gu fhaighinn as beag as fheàrr a tha a' tolaidh sinn
- Usgaidh chùisbeulagan pàirtnerichean airson obair sealltainneach
- Chanachda abhailteine a tha thu cha tha a' uile

### Audits a' cheannachda

- Ràdhsaichd a' cheannachda gu mhaigh a' chùisbeulagan a' cheannachda
- Cheannachda airson abhailteine cha tha a' cheannachda
- Chanachda fhaighinn air a' cheannachda airson pàirtnerichean a tha a' uile

### Lògachadh agus Sealltainn

- Cheannachda gu faicinn a' chùisbeulagan a tha a' cheannachda gu mòr
- Tagaichd na far-ràdhsaichean pàirtnerichean
- Sealltainn air uile a' cheannachda

### Abhailteine a' chùisbeulagan a' chùisbeulagan

- Ràdhsaichd abhailteine a' chùisbeulagan a' cheannachda air a bhith a' cheannachda
- Chlàradhdaidh sinn gu fhaicinn nam deireadh le sealltainn seallach
- Slàth a' cheannachda nam publiquinte nam deireadh tar a tha a' chùisbeulagan

## Troubleshooting

**Nìl a' chunnich a' fhaighinn an eòlas** (An ability isn't showing in the list)
- Bheir a' chunnich a' fhaighinn agus a' tha air a' chluich (Verify the ability is installed and active)
- Bheir a' chunnich a' fhaighinn an plugin/addon air a' chluich (Check that the plugin/addon is enabled)
- A' chlàradh an seòl (Refresh the page)

**Tha mi a' chunnich am fhaighinn an fhaighinn a' chluich** (I can't change an ability's visibility)
- Bheir a' chunnich a' fhaighinn air a' chluich (Verify you have administrator permissions)
- Bheir a' chunnich a' fhaighinn gu bheil an eòlas lorgheachdaich de bharrachd air a' chluich (Check that the ability isn't locked by a plugin)
- Til chlàradh na plugin sin (Try disabling conflicting plugins)

**Tha eadar-dhearg a' chunnich am fhaighinn an eòlas** (A partner can't access an ability)
- Bheir a' chunnich air a' chluich gu bheil an dìonair a' leat (Verify the partner is in the allow-list)
- Bheir a' chunnich a' fhaighinn an eòlas air a bhith wedi' suidheachadh mar Partner (Check that the ability's visibility is set to Partner)
- Bheir a' chunnich na creidheann a' leat gu sònraichte (Confirm the partner's credentials are correct)
- Bheir a' chunnich an log API airson earrachdairean (Check API logs for authentication errors)

**Tha eòlas nan fhaighinn nan dìonair a' tòisich air a bhith a' tòisich** (Unclassified abilities keep appearing)
- Bheir a' chluich agus a' tòisich an eòlas sin anns an notice admin (Review and classify them in the admin notice)
- Bheir a' chunnich air a chluich gu bheil an fhaighinn a' leatairt (Check that your classification was saved)
- Bheir a' chunnich an plugin a tha a' tòisich an eòlas air a bhith a' leatairt (Verify the plugin providing the ability is up to date)

## Migration from Legacy Mode

Tha thu air a' chluich air a' chluich air an fhaighinn Superdav AI Agent a tha air a' chluich:

- Tha cudrom air a' chluich gu bheil a' chunnich a' leatairt (All existing abilities are automatically classified as Public)
- Bheir a' chluich agus a' suidheach an fhaighinn mar tha thu deasgaidh (Review and adjust visibility as needed)
- Tha eòlas air a' chluich gu bheil am fhaighinn a' leatairt (No action required unless you want to restrict access)

Fàg air **Third-Party Mode Migration** airson fhaighinn asgaidh air an tòisich dhan API Abilities.

## Next Steps

An uair a tha thu a' suidheachadh an fhaighinn a' chluich:

1. **Bheir a' chluich air a' chluich**: Aimsgeal (Audit all installed abilities)
2. **Tha eòlas nan fhaighinn nan dìonair a' tòisich**: Rann an t-notice admin (Respond to admin notices)
3. **Bheir a' chluich na dìonair**: Add partners if using Partner visibility (Set up partners if using Partner visibility)
4. **Tha eòlas air a chluich**: Tagaidh cèidhean a tha a' leatairt (Track which abilities are used most)
5. **Bheir a' chluich nan deisgaidh**: Leugh an t-notes air am bith a tha thu a' chluich airson ùine eòlas sin (Keep notes on why you chose each visibility level)
