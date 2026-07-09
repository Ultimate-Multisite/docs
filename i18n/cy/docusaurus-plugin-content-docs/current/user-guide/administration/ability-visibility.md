---
title: Cyflwyniad y gallu gweld
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Gwirddolion Gwyllyd (Ability Visibility) {#ability-visibility}

Mae Superdav AI Agent v1.12.0 yn cyflwyno rheoleau **Gwirddolion Gwyllyd** sy'n reoli beth yw'r ffurfau sy'n dangos pob gwirddolion. Mae hyn yn sylwgi'r adminau i ddefnyddio'r gwirddolion y agentau sy'n ar gael drwy REST APIs, MCP servers, WooCommerce integrations, a ffresau eraill.

## Beth yw Gwirddolion Gwyllyd? {#what-is-ability-visibility}

Gwirddolion Gwyllyd yw system perthynol sy'n reoli:

- **Pa gwirddolion** sy'n ar gael i'r agentau
- **Oes ydynt yn dangos eu** (REST API, MCP, WooCommerce, etc.)
- **Pwy allai ei cyffredin** (drwy allow-lists o partnerau)
- **Sut mae'n cael eu cyflwyno** (gyfeiriadol vs. anghyfeiriadol)

Mae pob gwirddol yn chario leblon gwyllyd sy'n darnau'r arallgellau i'w ddefnyddio ar gyfer ffurfau cyffredinol.

## Leblon Gwyllyd (Visibility Levels) {#visibility-levels}

### Cyhoeddus (Public) {#public}

**Gwirddolion cyhoeddus** sy'n ar gael yn lleol:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Pob rôl o benwylwyr ( gydag perthynau pwysig)

Eglamp: `scaffold-block-theme`, `activate-theme`, `send-email`

### Cynllunol (Internal) {#internal}

**Gwirddolion cynllunol** sy'n ar gael yn ystod eich installiad WordPress:

- Chat interfaces
- Admin panels
- Benwylwyr a chwarae (logged-in users only)
- Nid cael eu dangos drwy REST API neu integrations allanoliaethol

Eglamp: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Gwirddolion partner** sy'n ar gael yn unig i partnerau a ddefnyddir:

- Mae angen o cyflwyno y allow-list partner yn ddefnyddiol
- Ar gael drwy REST API gyda chyfraddau partner
- Ar gael drwy MCP gyda chyfraddau partner
- Nid ar gael i benwylwyr cyffredinol

Eglamp: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dysgynol (Disabled) {#disabled}

**Gwirddolion dysgynol** nid yw'n ar gael yn unrhyw lle:

- Nid cael eu dangos drwy unrhyw ffurf
- Nid ar gael mewn chat
- Nid ar gael mewn admin panels
- Mae’n ddefnyddiol ar gyfer gwirddolion wedi'u dysgu neu eksperimentol

## Cyflenion y Gwirio'r Gallau {#managing-ability-visibility}

### Cyffredinol y Setiau Gallau {#accessing-ability-visibility-settings}

1. Ymddangos i **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Clic ar y tab **Abilities** (Gallau)
3. Byddwch yn gweld llyfrgell o'r holl gallau a'u leblon gallau eu cyflwyno

### Gweld Mstudiadau Gallau {#viewing-ability-details}

Cliciw ar unrhyw gallau i weld:

- **Name**: Ychwanegwyr y gallau
- **Description**: Beth sy'n ei wneud y gallau
- **Current visibility**: Cyhoeddus (Public), Cynllunol (Internal), Partner, neu Dysgynol (Disabled)
- **Partner allow-list**: Pa bethau allai eu cyffredinol (os oes gallau Partner)
- **Last updated**: Pan roedd y gallau wedi'i newid last
- **Status**: Gyflwynwyd neu Nid Cyflenydd

### Newid Leblon Gallau {#changing-visibility-levels}

I newid leblon gallau:

1. Clic ar y gallau yn y llyfrgell
2. Dewch o leblon gallau newydd o'r dropdown
3. Os ydych chi'n dewis "Partner", refwch gyflwynion partner i'r allow-list
4. Clic ar **Save** (Safio)

Mae'r amseriad fel ddelwedd:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Gweithredoedd Cyflwynol (Bulk Operations) {#bulk-operations}

I newid gallau ar gyfer gallau amserol:

1. Rhyddwch y byddau yn y cyfathrebu gyda'r gallau
2. Dewch o leblon gallau newydd o'r bulk action dropdown
3. Clic ar **Apply** (Cyflwyno)

## Allow-List Partner {#partner-allow-list}

Mae'r **partner allow-list** yn rheoli pa bethau allai eu cyffredinol y partnerau allanol.

### Ymyddu Partnerau {#adding-partners}

1. Ymddangos i **Superdav AI Agent** → **Settings** → **Partners**
2. Clic ar **Add Partner** (Ymyddu Partner)
3. Rhewch y gyflwynion partner (yn y cyffredinol API key neu ID organig)
4. Gallwch chi olys yn ystodol oneidio enw a meddyliau'r partner
5. Clic ar **Save** (Safio)

### Cyflwyno Gallau i Partnerau {#assigning-abilities-to-partners}

Ar ôl ymyddu partner:

1. Ymddwch i'tab **Abilities** (Molauedd)
2. Gweld amodol (ability) gyda thryd y gweithredwr Partner (Partner visibility)
3. Clic i redig (edit)
4. Yn y rheol "Partner allow-list", gweldwch y bochodau ar gyfer partnerau syddai fod yn cael cadw cyffredinol (access)
5. Clic ar **Save**

### Rhoddi Cadw Cadw Partner Access {#revoking-partner-access}

I rywbeth partner o ddoddi:

1. Redig y amodol (ability)
2. Draedwch y bochod ar gyfer y partner yn y allow-list
3. Clic ar **Save**

Bydd y partner yn colli cadw cyffredinol i'r amodol hwn yn llwyr.

## Amodol Nid cael Cyflwyno (Unclassified Abilities) {#unclassified-abilities}

Pan mae eich bod yn chwarae amodol o ffurf trydyddol (third-party ability) sydd wedi'i gael gan Superdav AI Agent, mae'n cael ei ddefnyddio fel **Unclassified**.

### Gwybodaeth Admin ar Amodol Nid cael Cyflwyno {#admin-notice-for-unclassified-abilities}

Byddwch yn gweld gwybodaeth admin:

```
⚠️ Unclassified Abilities Detected

Mae'r amodolau canlynol wedi'u chwarae ond nid yw'n cael eu chwarae:
- custom-import-tool
- external-api-wrapper

Efallai bod y amodolau hyn yn cyflawni risgau diogelwch neu ddefnyddio.
Please review and classify them. (Menwch ychwanegau a chyflwyno eu)

[Review Abilities] [Dismiss]
```

### Gweld Amodol Nid cael Cyflwyno {#reviewing-unclassified-abilities}

1. Clic ar **Review Abilities** yn y gwybodaeth
2. Ar gyfer pob amodol nid cael cyflwyno, byddwch yn gweld:
   - Enw a disgrifiad y amodol (Ability name and description)
   - Ffurf y cyflwyno (Source - pwy oedd wedi chwarae'i)
   - Nodiad cadw cyffredinol (Suggested visibility level)
   - Adseiliad diogelwch (Security assessment)

3. Dewch yn oeddechrau nodiad cadw cyffredinol:
   - **Public**: Cynfodwch y amodol; dangos ei gydolbwysion yn lleol
   - **Internal**: Rhyddwch i ddefnyddiau darnau o'r gymuned
   - **Partner**: Rhyddwch i partnerau penodol
   - **Disabled**: Peidiwch â defnyddio'r amodol hwn

4. Clic ar **Classify** i sicrhau eich penderfyniad

### Pam i Classify Amodol Nid cael Cyflwyno? {#why-classify-unclassified-abilities}

Cyflwyno amodolau:

- **Pobredol diogelwch**: Mae'n cywir eich bod yn cyffredinol y mae'n cael ei dangos
- **Rhyddwch anghyfrifolion**: Mae amodolau nid cael cyflwyno wedi'u defnyddio fel ddefnyddio yn ddefnyddiol o'r gymuned
- **Mae'n gael ffeithiau**: Ar ôl y cyflwyno, mae'r amodol yn cael ei ddefnyddio
- **Mae'n codi penderfyniadau**: Mae eich dewisau wedi'u cadw i weithrediadau



## Cyflonauedd yn Diffynion Gwrthodol {#visibility-in-different-surfaces}

### REST API {#rest-api}

Mae **gofalau cyhoeddus** ar gael eu cyflwyno drwy REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Mae **gofalau ddefnyddiol a partner** nid yn cael eu cyhoedd drwy REST API.

### MCP Servers {#mcp-servers}

Mae **gofalau cyhoeddus** ar gael eu cyflwyno drwy MCP:

```
MCP Server: Superdav AI Agent
Gofalau ar gael:
- scaffold-block-theme
- activate-theme
- send-email
```

Nid oes gan **gofalau ddefnyddiol** ei cael eu dangos drwy MCP.

Mae **gofalau partner** ar gael yn cael eu cyflwyno dim ond gyda chyfrannau partner.

### WooCommerce Integration {#woocommerce-integration}

Mae **gofalau cyhoeddus** sy'n lusion â WooCommerce ar gael:

- Rheoli cynnyrch (Product management)
- Prosessio barchnadau (Order processing)
- Cyfathogh gyda chwaraewyr (Customer communication)

Nid oes **gofalau ddefnyddiol** ei cael eu dangos i WooCommerce.

### Chat Interface {#chat-interface}

Mae **ball rhywbeth** (Cyhoeddus, Ddefiol, Partner) ar gael yn chat, gan fod ychwanegau defnyddi'r benyn o ddynol:

- Mae’r adminau'n gweld pob chwarae
- Mae'r benyn cyffredinol yn gweld y gofalau cyhoeddus ond ddefiol
- Mae'r partnerau'n gweld y gofalau cyhoeddus + gofalau partner (os oes wedi eu gael)

## Practysgol Cynllunio Diogelwch {#security-best-practices}

### Penderfynol Ddefnyddio'r Ddefnyddion Cynbioedd (Principle of Least Privilege) {#principle-of-least-privilege}

- Rheoli gofalau i'r cyflwyniad mwyaf rhyddol y mae'n sylweddol i eu defnyddio
- Defnyddio gofalau partner ar gyfer gweithgareddau sensitif
- Dysgu gofalau sy'n ddefnyddio

### Audiau Cyffredinol {#regular-audits}

- Ddychwion y gofalau cyflwyniad mlynedd
- Gweli am y gofalau nid yn cael eu cyflwyno
- Ailta cyffredin ar gyfer partnerau nid yn defnyddio

### Logu a Monitoriaeth (Logging and Monitoring) {#logging-and-monitoring}

- Monitorea beth yw'r gofalau sy'n cael eu defnyddio mwyaf
- Drwy'r llwybr y cyflwyniad o partnerau
- Ailta ar ddefnyddio gofalau anghyfreithiol

### Gofalau Tiriad Trydder (Third-Party Abilities) {#third-party-abilities}

- Gweli gofalau tiriad trydder قبل eu chynllunio
- Cyflwyni nhw'n ddefnyddiol yn llwyr
- Dechrau gyda gofalau ddefysiol neu partner
- Promu i cyhoeddus dim ond ar ôl gwylio

## Gwarchu'r Problemau {#troubleshooting}

**Nid yw gallu'r addef yn dangos yn y rheol**
- Cynlltydd bod y addef wedi'i chwarae a fod yn weithredol (active)
- Cynlltydd bod y plugin/addon wedi'i gael
- Atalwch y peidiad

**Ni gallaf gwahanu'r amgylchiad (visibility) o'r addef**
- Cynlltydd eich bod yn cael permisiwn administrator
- Cynlltydd nad yw'r addef wedi'i gaelio gan plugin
- Golygu'r pluginau sy'n golygu'r amgylchiad

**Ni gallai'r partner cyffredinol ymyrchu'r addef**
- Cynlltydd bod y partner yn cael ei ddefnyddio (allow-list)
- Cynlltydd nad yw'r amgylchiad o'r addef wedi'i setio i Partner
- Cyflwynwch fod y cyfrifau'r partner yn llawn
- Cynlltydd log API ar gyfer erosau cyfathrebu (authentication errors)

**Mae adeffau nid yn cael eu clasu'n parhau i dangos**
- Ddychwch a claswch nhw yn y gwybodaeth admin (admin notice)
- Cynlltydd bod eich clasu wedi'i cadw
- Cynlltydd nad yw'r plugin sy'n rhoi'r addef yn ddefnyddiol

## Mynodiad o'r Mod Legacy {#migration-from-legacy-mode}

Os ydych chi'n gwneud cyfathriadol o'r ffurf gaelig (version) a'r Superdav AI Agent:

- Mae pob addef sydd y bydd yn cael ei clasu fel Cyhoeddol (Public) yn awtomatig
- Ddychwch a rheoli amgylchiad fel mae angen
- Nid oes angen gweithrediad heb eich bod eisiau redeg ymyrchu

Gweld **Third-Party Mode Migration** i gael mwy o gyflwyniadau am y cyfathriadol i'r cyfathrebu API Addefau (Abilities API) newydd.

## Ymystyrion Canlynol {#next-steps}

Ar ôl cadw'r amgylchiad o'r addef:

1. **Ddychwch eich adeffau**: Cynlltydd pob addef sydd wedi'i chwarae
2. **Claswch adeffau nid yn cael eu clasu**: Cyflwynwch y gwybodaeth admin
3. **Setwch partnerau**: Refyn partnerau os ydych chi'n defnyddio amgylchiad Partner
4. **Monitau defnydd**: Drwy'r cyfathrebu beth yw'r adeffau sydd wedi'u defnyddio'n mwy
5. **Documentwch y penderfyniadau**: Cadwch nodau ar gyfer yr holl amgylchiadau sydd wedi'u chwilio
