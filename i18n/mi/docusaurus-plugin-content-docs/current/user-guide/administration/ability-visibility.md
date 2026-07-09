---
title: Whakawhiti Whakaaro
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Whakarongo A2 (Ability Visibility) {#ability-visibility}

Te Superdav AI Agent v1.12.0 e te whakamōhaka **Whakarongo A2** (Ability Visibility) ki te tikanga, he whai tikanga tino nui ana i roto i te whakahaere i te mea ko te mana o ngā ability (ngā kaha/whakawāhi) kua whakarite ahau. Ko te whakatika i tēnei e kitea ai ngā administrator he taea ai te whakatika i te mea ko ngā kaha o te agent kua whakamahinga i roto i REST APIs, MCP servers, WooCommerce integrations, me ngā interface hou.

## He aha te Whakarongo A2? {#what-is-ability-visibility}

He Whakarongo A2 he system o mana (permission system) e whakahaa i:

- **Kei ngā ability** kua tere i ngā agent
- **Kei hea kua whakamahinga ahau** (REST API, MCP, WooCommerce, me te mea katoa)
- **Kei ai kua whai access ahau** (via partner allow-lists)
- **Kei waiho ahau** (recognized vs. unclassified)

Ka hoki i ngā ability ko te rangi o te whakawhiti (visibility level) e tino whakatau ana i te mea kua taea te whakamahi i roto i ngā surface (whakaritenga/interface) haere mai.

## Ngā Rerenga Whakarongo A2 (Visibility Levels) {#visibility-levels}

### Public (Māori: Pūtaheke / Whakaahau) {#public}

**Ngā ability pūtaheke** kua taea te whakamahi i roto i te wāhi katoa:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Ngā roa o ngā user (me ngā mana tika)

Whakarepuke: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Māori: Whakarongo Āwhiti / Whakarongo Tū) {#internal}

**Ngā ability āwhiti** kua taea te whakamahi anō i roto i te whare WordPress o koe:

- Chat interfaces
- Admin panels
- Ngā user kua pātaki ahau (logged-in users only)
- Aua e whakawhiti via REST API heta ngā integrations hou

Whakarepuke: `manage-settings`, `view-analytics`, `export-data`

### Partner (Māori: Whakarongo Pākehā / Whakarongo Whakamana) {#partner}

**Ngā ability o te pākehā** kua taea te whakamahi anō ki ngā partner kua whakataki ahau i te list (whitelisted partners):

- He tino tika ana ko e hiahia ai i te entry i te partner allow-list
- Kua taea te whakamahi via REST API me ngā credentials o te pākehā
- Kua taea te whakamahi via MCP me te whakatūmanawa o te pākehā
- Aua e taea ana ahau ki te user regular

Whakarepuke: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Māori: Whakarongo Whakamutai / Whakarongo Whakamutai) {#disabled}

**Ngā ability whakamutai** kua taea te whakamahi i roto i te wāhi katoa:

- Aua e whakawhiti via ahau surface ahau
- Aua e taea ana i te chat
- Aua e taea ana i ngā admin panels
- Whakarongo mō ngā ability kua whakatutai (deprecated) heta ngā experimental.

## Kaha Whakarite Te Whakarongo o Ngā Manatū (Ability Visibility) {#managing-ability-visibility}

### Whakarongo i Ngā Whakarite o Te Whakarongo o Ngā Manatū (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. Pā te **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Whakawā te tab **Abilities**
3. Ka whakaatu i ai koutou ngā rārangi katoa o ngā manatū (abilities) e whai ake ana me ngā kete whakawhiti (visibility levels) o kaha i te whakarite.

### Whakarongo i Ngā Wāhi o Ngā Manatū (Viewing Ability Details) {#viewing-ability-details}

Whakawā ki te manatū (ability) atu hei whakaahua:

- **Name**: Te whakamārama o te manatū
- **Description**: He aha te mahi a te manatū
- **Current visibility**: Public, Internal, Partner, or Disabled (Whakarongo i te whakarongo i te ora/whakamahi)
- **Partner allow-list**: Kei ai ngā whānau (partners) kua e taea te whai (access) (he tino tika ana ki te whakawhiti o te whakarongo i te ora/whakamahi)
- **Last updated**: I te wā kua whakawhanakea te whakarongo akorua
- **Status**: Recognized or Unclassified (Whakawhanaungatanga atu he tino whakahou, he pēnei ana)

### Whakanui Ngā Kete Whakarongo (Changing Visibility Levels) {#changing-visibility-levels}

Mō te whakawhiti te whakarongo o te manatū:

1. Whakawā i te manatū (ability) i te rārangi
2. Whakarite te kete whakawhiti hou mai i te dropdown menu
3. Ko te mea, ko te whai i "Partner", whero ngā whānau (partner identifiers) ki te allow-list
4. Whakawā **Save**

Whakamanawa:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Whakamahi Whakamārama (Bulk Operations) {#bulk-operations}

Mō te whakawhiti te whakarongo o ngā manatū mō ngā whānau (abilities) mō tētahi wāhi:

1. Whakawā i ngā box (boxes) i runga i te manatū
2. Whakarite te kete whakawhiti hou mai i te dropdown menu o te bulk action
3. Whakawā **Apply**

## Te Allow-List o Ngā Whānau (Partner Allow-List) {#partner-allow-list}

Ko te **partner allow-list** ko te tino whai (controls) ki ngā whānau (partners) e taea te whai i ngā manatū o te kete Partner.

### Whāinga Ngā Whānau (Adding Partners) {#adding-partners}

1. Pā te **Superdav AI Agent** → **Settings** → **Partners**
2. Whakawā **Add Partner**
3. Whakarite te whai (identifier) o te whānau (usually he API key or organization ID)
4. He tino tika ana, whero te ingoa me te whakamārama o te whānau atu
5. Whakawā **Save**

### Whakamahi Ngā Manatū ki ngā Whānau (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

I raro i te whero he whānau:

1. Pā no te tab **Abilities** (Ngā Whakawhiti)
2. Mangai i te ability (whakawhiti) e hiahia ana ki te whakatere o ngā Partner (Partner visibility).
3. Whakawākea ki te whakarē (edit).
4. I roto i te seksiyone "Partner allow-list" (list whakahoki partner), whakačea i ngā box mō ngā partner e tika ana he mea e hiahia ana i te whaiako.
5. Whakawākea **Save** (Whakawākea).

### Whakamutunga Access o Ngā Partner {#revoking-partner-access}

Mō te whero access o tō partner:

1. Whakawākea ki te whakarē (edit) i te ability.
2. Whaka-whaka (uncheck) i te box o tō partner i te allow-list.
3. Whakawākea **Save** (Whakawākea).

Ka whero i te partner immediately he tino access ki tēnei ability.

## Ngā Abilities Awae (Unclassified Abilities) {#unclassified-abilities}

I roto i te wā e whai i ai tētahi ability pōuri (third-party ability) kua kāore i te whakaae o Superdav AI Agent, ko ia e whakamārama ana he **Unclassified** (Awae).

### Whakamārama Admin mō Ngā Abilities Awae {#admin-notice-for-unclassified-abilities}

Ka e hoki koe i te whakatau admin:

```
⚠️ Unclassified Abilities Detected

Ngā ability (whakawhiti) berikut kua whakawākea engari ka kāore i te whakaae o ia:
- custom-import-tool
- external-api-wrapper

He taea ai ngā ability (whakawhiti) ei whaiaro ana i te ao amanara (security) he tino pai.
Tēnā koe, whakaa me whakamārama ahau i ahau.

[Review Abilities] [Dismiss]
```

### Whakamārama Ngā Abilities Awae {#reviewing-unclassified-abilities}

1. Whakawākea ki **Review Abilities** (Whakamārama Ngā Abilities) i te whakatau.
2. Mō every unclassified ability, ka e hoki koe i:
   - Nama o te ability me te whakamārama (description).
   - Taonga (Source) (ko wai te plugin/addon kua whakawākea ia).
   - Te rangi o te whakatau (Suggested visibility level).
   - Whakawārama amanara (Security assessment).

3. Whakarite te rangi o te whakatau:
   - **Public** (Awae): Whakatutuki i te ability; whero ana i te wāhi katoa.
   - **Internal** (Whaiaro): Whakawākea ki te whakamahi whaiaro anake.
   - **Partner** (Partner): Whakawākea ki ngā partner-specific.
   - **Disabled** (Whakamutunga): I roto i te ability (whakawhiti) ko tautoko ahau.

4. Whakawākea ki **Classify** (Whakarite) mō te whakatau o koe.

### Aroha: Aroha Ngā Abilities Awae? {#why-classify-unclassified-abilities}

Te whakarite ngā ability (whakawhiti):

- **Mā te pūmanawa amanara (security)**: Ka whakaae ahau i te mea e whakawākea ana.
- **Whakamutunga ngā pētrā**: Ko ngā ability awa e whakatutuki ana i te default ko tautoko ahau.
- **Whakahaere ngā āhuatanga (features)**: I roto i te whakarite, ka taea te whakamahi tēnei ability.
- **Whakamārama ngā whakatau**: Ka whakamaoritia ngā pilihan o koe mō te audit.

## Raraanga i Awa i Ahihi Kua Whakamahi {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Ngā whiriti mō te papahana (Public abilities)** e rite ana ana via REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Ngā whiriti mō te whakamahi mō te whānau (Internal and Partner abilities)** e kore ana available via REST API.

### MCP Servers {#mcp-servers}

**Ngā whiriti mō te papahana (Public abilities)** e rite ana ana via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Ngā whiriti mō te whakamahi mō te whānau (Internal abilities)** e kore ana exposed via MCP.

**Ngā whiriti mō te whānau (Partner abilities)** e rite ana anō ki ngā kredensial o te whānau (partner credentials) naku.

### WooCommerce Integration {#woocommerce-integration}

**Ngā whiriti mō te papahana (Public abilities)** e rite ana ana ki WooCommerce:

- Whakawhiti whakamahi pēpi (Product management)
- Whakamahi whakahaere rā (Order processing)
- Whakaritenga whai ora me ngā mea whai ora (Customer communication)

**Ngā whiriti mō te whānau (Internal abilities)** e kore ana exposed ki WooCommerce.

### Chat Interface {#chat-interface}

**Ngā whiriti katoa** (Public, Internal, Partner) e rite ana i te chat, i runga i ngā whakataunga o te wāhi (user permissions):

- Ngā administrator mō ngā whiriti katoa
- Ngā mea whai ora mō ngā whiriti papahana (Regular users see only Public abilities)
- Ngā whānau mō ngā whiriti papahana me ngā whiriti whānau (if whitelisted)

## Whakamahi Whakamahi Whakamahi (Security Best Practices) {#security-best-practices}

### Te Tikanga o te Whakawhiti Whakamahi Kōrero (Principle of Least Privilege) {#principle-of-least-privilege}

- Tīhia ngā whiriti ki te wāhi e tino pōuri (most restrictive visibility) he pēnei i e rite ana ana, engari e taea ai te whakamahi.
- Whakarite te whiriti whānau mō ngā mahi nui/whai ora (sensitive operations).
- Whakawātea ngā whiriti kua e kore koe whakamahi.

### Whakamahinga Whakamahi Kua Whakamahi (Regular Audits) {#regular-audits}

- Titiro i te whiriti o te papahana (ability visibility) mā te wā (monthly).
- Pātai mō ngā whiriti kua e kore ana whakahou (unclassified abilities).
- Whakawātea te whai whakamahi mō ngā whānau kua e kore ana whakamahia.

### Whakamahi Kua Whakarite (Logging and Monitoring) {#logging-and-monitoring}

- Titiro i ko ngā whiriti kua e whakamahia anō (used most).
- Tākaro i ngā pattern o te whai whakamahi mō te whānau (partner access patterns).
- Whakawātea i te whakaheke/whakamārama mō te whakamahi whiriti pēnei.

### Ngā Whiriti Pākehā (Third-Party Abilities) {#third-party-abilities}

- Titiro i ngā whiriti pākehā mō te whakamahi mō te whero (enabling)
- Whakarite ahau i ngā mea he tino whakahou (classify them explicitly).
- Whakaaro i te whiriti whānau (Internal or Partner visibility) mō te whakatūatanga.
- Whakamahia ki te papahana (Public) anō i raro i te whakamārama/whakawha (vetting).

## Whakamārama (Troubleshooting) {#troubleshooting}

**He mana/ability ka rawa i te list**
- Kia tinō mahi (installed) me te active te mana/ability.
- Kia kaha te whakatau (enabled) o te plugin/addon.
- Whakawātea te puta mai o te page (Refresh the page).

**Ka nui atu ahau i whakawhiti te mōhio o te mana/ability**
- Kia tinō i ngā manawa administrator (administrator permissions) he tino pai.
- Kia kaha te whakaaro (locked) ai te mana/ability eke ana i te plugin.
- Whakarongo ki te whakatau (disabling) i ngā plugin he pēnei ana.

**Ka nui atu ahau i whakawhiti te mea ka whai ake au**
- Kia tinō i te whaiako (allow-list) o te partner.
- Kia kaha te whakaaro (set) ai te mōhio o te mana/ability ki te Partner.
- Kia tino pai ngā whakamahi (credentials) o te partner.
- Whakarongo ki ngā API logs mo ngā pētranga authentication.

**He mana/abilities e hāpai i te whakatū (unclassified abilities)**
- Whakawātea me whakawhiti i ngā mea he hāpai i te admin notice.
- Kia tinō i te whakaingoa (classification) kua oti.
- Kia tinō i te plugin he hāpai i te mana/ability he tino pai ana.

## Whakamāori mai te Mode Pūrere (Migration from Legacy Mode) {#migration-from-legacy-mode}

Ko te mea e whai ake ana i te whakawhiti i te wera (upgrading) i te version purine o Superdav AI Agent:

- Ko ngā mana/abilities katoa he tino pai ai ko Public (Public).
- Whakawātea me whakaaro ahau i te mōhio (visibility) pēnei ana he tino pai.
- He tino mahi e hiahia ana anō ko te whai whakaaro (restrict access).

Kia whakaaro ki **Third-Party Mode Migration** mo mōhio atu i te whakawhiti ki te API integration o ngā Abilities he tino pai.

## Ngā Whakaritenga Whakamahi (Next Steps) {#next-steps}

Iha i te whakamāori i te mōhio o te mana/ability:

1. **Whakawātea i ngā mana/abilities mo te whakamāori**: Kia tinō katoa i ngā mana/abilities he tinō ana.
2. **Whakaingoa i ngā mana/abilities e hāpai i te whakatū (Classify unclassified abilities)**: Whakarongo ki ngā admin notice.
3. **Whakawhana hou i ngā partner**: Whakawhana ngā partner he whakamahi mō te Partner visibility.
4. **Mārama i te whakamahi (Monitor usage)**: Kia whakatipu i ko ngā mana/abilities he tino pai ana.
5. **Whakamāori i ngā whakatau (Document decisions)**: Kia whai whakaaro ki ngā pēnei i te whakatau ahau i ngā level o mōhio (visibility) he tino pai.
