---
title: Abilidad sa Pagkakita
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility {#ability-visibility}

Ang Superdav AI Agent v1.12.0 nagpaila og **Ability Visibility** controls nga nagdumala kung uns mga surfaces ang magpakita sa matag ability. Nagtugot kini sa mga administrator nga i-fine-tune kung uns mga abilidad sa agent ang magamit pinaagi sa REST APIs, MCP servers, WooCommerce integrations, ug uban pang mga interface.

## Unsa ang Ability Visibility? {#what-is-ability-visibility}

Ang Ability Visibility usa ka sistema sa permiso nga nagkontrol:

- **Unsay mga ability** ang available sa mga agents
- **Asa kini gipahibalo** (REST API, MCP, WooCommerce, etc.)
- **Kinsa ang makagamit niini** (pinaagi sa partner allow-lists)
- **Giun kini klasipika** (giila vs. wala giila)

Ang matag ability adunay lebel sa visibility nga nagtino sa pagka-available niini sa lain-laing mga surface.

## Visibility Levels {#visibility-levels}

### Public {#public}

Ang mga **Public abilities** an available bisan asa:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Tanan nga user roles (u banabana nga mga permiso)

Pananglitan: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal {#internal}

Ang mga **Internal abilities** an available lang sulod sa imong WordPress installation:

- Chat interfaces
- Admin panels
- Mga logged-in user lang
- Wala gipahibalo pinaagi sa REST API o external integrations

Pananglitan: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

Ang mga **Partner abilities** an available lang sa mga whitelisted partner:

- Nagkinahanglan og klaro nga pagpasok sa partner allow-list
- Available pinaagi sa REST API uban ang partner credentials
- Available pinaagi sa MCP uban ang partner authentication
- Wala available sa regular users

Pananglitan: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled {#disabled}

Ang mga **Disabled abilities** dili an available bisan asa:

- Wala gipahibalo pinaagi sa bisan uns nga surface
- Wala an available sa chat
- Wala an available sa admin panels
- Makatabang kini alang sa mga deprecated o experimental nga abilities

## Pagdumala sa Ability Visibility {#managing-ability-visibility}

### Pag-access sa Mga Setting sa Ability Visibility {#accessing-ability-visibility-settings}

1. Adto sa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. I-click ang tab nga **Abilities**
3. Makita nimo ang listahan sa tanang na-install nga abilities uban sa ilang mga lebel sa visibility (pagkakita).

### Pagtan-aw sa Detalye sa Ability {#viewing-ability-details}

I-click ang bisan unsang ability aron makita:

- **Name**: Ang identifier sa ability
- **Description**: Unsa ang buhaton sa ability
- **Current visibility**: Public, Internal, Partner, o Disabled (Giduso)
- **Partner allow-list**: Kinsa ang mga partner nga maka-access (kung Partner visibility kini)
- **Last updated**: Kanus-a huli giusab ang visibility
- **Status**: Recognized (Giila) o Unclassified (Wala giila)

### Pagbag-o sa Mga Lebel sa Visibility {#changing-visibility-levels}

Aron usbon ang visibility sa usa ka ability:

1. I-click ang ability sa listahan
2. Pili og bag-ong lebel sa visibility gikan sa dropdown menu
3. Kung pilion nimo ang "Partner", iapil ang partner identifiers sa allow-list
4. I-click ang **Save** (I-save)

Pananglitan:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (Pagsulod sa Daghang Operasyon) {#bulk-operations}

Aron usbon ang visibility para sa dagkong mga ability:

1. I-check ang mga kahon sa kilid sa mga abilities
2. Pili og bag-ong lebel sa visibility gikan sa bulk action dropdown
3. I-click ang **Apply** (I-apply)

## Partner Allow-List {#partner-allow-list}

Ang **partner allow-list** nagkontrol kung unsang external partners ang maka-access sa mga ability nga naa sa Partner-level.

### Pagdadagdag og Mga Partner {#adding-partners}

1. Adto sa **Superdav AI Agent** → **Settings** → **Partners**
2. I-click ang **Add Partner** (Magdugang og Partner)
3. Isulod ang partner identifier (kasagaran kini API key o organization ID)
4. Optional nga iapil ang ngalan ug deskripsyon sa partner
5. I-click ang **Save** (I-save)

### Paghatag og Abilities sa mga Partners {#assigning-abilities-to-partners}

Human magdugang og partner:

1. Adto sa tab nga **Abilities**
2. Pangitaa ang usa ka ability nga naa'y Partner visibility
3. I-click para i-edit
4. Sa seksyon nga "Partner allow-list", i-check ang mga kahon alang sa mga partner nga kinahanglan adunay access
5. I-click ang **Save**

### Pagbawi sa Access sa Partner {#revoking-partner-access}

Para ma-remove ang access sa usa ka partner:

1. I-edit ang ability
2. I-uncheck ang box sa partner sa allow-list
3. I-click ang **Save**

Ang partner dayon mawala ang access niining ability.

## Unclassified Abilities {#unclassified-abilities}

Kung mag-install ka og third-party ability nga wala giila sa Superdav AI Agent, kini gi-marka isip **Unclassified**.

### Admin Notice para sa Unclassified Abilities {#admin-notice-for-unclassified-abilities}

Makita nimo ang admin notice:

```
⚠️ Unclassified Abilities Detected

Ang mga following abilities gipahimutang apan wala giila:
- custom-import-tool
- external-api-wrapper

Kini nga mga ability mahimong magdala og security o compatibility risks.
Palihog i-review ug i-classify kini.

[Review Abilities] [Dismiss]
```

### Pag-review sa Unclassified Abilities {#reviewing-unclassified-abilities}

1. I-click ang **Review Abilities** sa notice
2. Para sa matag unclassified ability, makita nimo:
   - Ability name ug description
   - Source (unsay plugin/addon ang nag-install niini)
   - Suggested visibility level
   - Security assessment

3. Pilia ang visibility level:
   - **Public**: Magmatod sa ability; ipakita kini bisan asa
   - **Internal**: Limitado lang sa internal use
   - **Partner**: Limitado sa mga piho nga partner
   - **Disabled**: Ayaw gamiton kining ability

4. I-click ang **Classify** para i-save ang imong desisyon

### Ngano Kinahanglan I-classify ang Unclassified Abilities? {#why-classify-unclassified-abilities}

Ang pag-classify sa mga ability:

- **Nagpauswag sa security**: Eksplisitong giaprubahan nimo kung unsa ang ipatungha
- **Nagsagol sa aksidente**: Ang mga unclassified abilities gipahimo nga disabled by default
- **Naghatag og features**: Human ma-classify, ang ability mahimong magamit na
- **Nagdokumento sa mga desisyon**: Ang imong mga pagpili gi-log para sa audit purposes

## Pagkakita sa Nagkalain nga mga Surface (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

Ang mga **Public abilities** pwedeng makuha pinaagi sa REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Ang mga **Internal and Partner abilities** dili makuha pinaagi sa REST API.

### MCP Servers {#mcp-servers}

Ang mga **Public abilities** pwedeng makuha pinaagi sa MCP:

MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email

Ang mga **Internal abilities** dili ipakita pinaagi sa MCP.

Ang mga **Partner abilities** pwedeng gamiton lang kung naa kay partner credentials.

### WooCommerce Integration {#woocommerce-integration}

Ang mga **Public abilities** nga may kalabotan sa WooCommerce pwedeng gamiton:

- Product management
- Order processing
- Customer communication

Ang mga **Internal abilities** dili ipakita sa WooCommerce.

### Chat Interface {#chat-interface}

Ang tanang mga **abilities** (Public, Internal, Partner) pwedeng gamiton sa chat, depende sa permissions sa user:

- Administrators makakita sa tanan nga abilities
- Regular users makakita lang sa Public abilities
- Partners makakita sa Public + Partner abilities (kung gi-whitelist sila)

## Mga Best Practices sa Seguridad (Security Best Practices) {#security-best-practices}

### Principle of Least Privilege {#principle-of-least-privilege}

- Ibutang ang mga abilities sa pinaka-restrictive nga visibility nga pwedeng gamiton gihapon.
- Gamita ang Partner visibility para sa sensitibo nga mga operasyon.
- Patilin ang mga abilities nga dili nimo gigamit.

### Regular Audits {#regular-audits}

- I-review ang visibility sa ability kada bulan.
- Siguraduhon nga walay unclassified abilities.
- Tangtangon ang access alang sa mga partner nga wala na naggamit.

### Logging and Monitoring {#logging-and-monitoring}

- Monitor kung uns mga abilities ang labing gamiton.
- Subayhi ang mga pattern sa access sa partner.
- Mag-alert kung adunay dili kasagaran nga paggamit sa ability.

### Third-Party Abilities {#third-party-abilities}

- I-review ang third-party abilities sa dili pa kini i-enable.
- Klaro nga klasipikahon sila.
- Sugdan gamiton sa Internal o Partner visibility una.
- Ipromote sa Public lang human ma-vetting (ma-check).

## Pag-troubleshoot {#troubleshooting}

**Wala'y makita ang usa ka ability sa listahan**
- Siguraduhon nga na-install ug aktibo ang ability
- Susi kung gi-enable ba ang plugin/addon
- I-refresh ang page

**Dili ko makausab ang visibility sa usa ka ability**
- Siguraduhon nga naa kay administrator permissions
- Susi kung na-lock ba kini sa usa ka plugin
- Sulayi i-disable ang mga nagbangga nga plugins

**Dili makasulod ang partner sa usa ka ability**
- Siguraduhon nga naa ang partner sa allow-list
- Susi kung ang visibility sa ability gi-set sa Partner
- Kumpirmaha nga tama ang credentials sa partner
- Suri ang API logs para sa mga error sa authentication

**Ang mga unclassified abilities nagpadayon sa pagpakita**
- Susuri ug klasipikahon kini sa admin notice
- Siguraduhon nga na-save ang imong klasipikasyon
- Siguraduhon nga updated ang plugin nga naghatag sa ability

## Migrasyon gikan sa Legacy Mode {#migration-from-legacy-mode}

Kung nag-upgrade ka gikan sa mas daan nga bersyon sa Superdav AI Agent:

- Ang tanang kasamtangang abilities awtomatikong klasipikahan isip Public
- Susuri ug i-adjust ang visibility kung kinahanglanon
- Walay kinahanglan buhat gawas kung gusto nimo limitahan ang access

Tan-awa ang **Third-Party Mode Migration** para sa dugang detalye bahin sa paglipat ngadto sa native Abilities API integration.

## Sunod nga mga lakang {#next-steps}

Human ma-configure ang visibility sa ability:

1. **Susuri ang imong mga abilities**: I-audit ang tanang na-install nga abilities
2. **Klasipikahon ang mga unclassified abilities**: Tubagi ang admin notices
3. **I-set up ang mga partner**: Dugangi ang mga partner kung naggamit ka og Partner visibility
4. **Monitor ang paggamit**: Subayhi kung unsang abilities ang labing gigamit
5. **Dokumentahi ang mga desisyon**: Magpabilin og mga nota kung nganong gipili nimo ang matag lebel sa visibility
