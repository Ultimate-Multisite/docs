---
title: Kakayahang Makita
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Pagkakita ng Kakayahan (Ability Visibility)

Nagpapakilala ang Superdav AI Agent v1.12.0 ng **Ability Visibility** controls na kumokontrol kung aling mga interface (o "surface") ang magpapakita ng bawat kakayahan. Pinapayagan nito ang mga administrator na ayusin nang detalyado kung anong mga kakayahan ng agent ang magagamit sa pamamagitan ng REST APIs, MCP servers, WooCommerce integrations, at iba pang interface.

## Ano ang Ability Visibility? {#what-is-ability-visibility}

Ang Ability Visibility ay isang sistema ng pahintulot na kumokontrol sa:

- **Anong mga kakayahan** ang available sa mga agent
- **Saan ito ipinapakita** (REST API, MCP, WooCommerce, atbp.)
- **Sino ang pwedeng mag-access** (sa pamamagitan ng partner allow-lists)
- **Paano ito ikinakategorya** (recognized vs. unclassified)

Ang bawat kakayahan ay may kasamang visibility level na nagtatakda ng pagiging available nito sa iba't ibang interface.

## Visibility Levels {#visibility-levels}

### Public {#public}

Ang mga **Public abilities** ay available sa lahat ng lugar:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Lahat ng user roles (na may tamang pahintulot)

Halimbawa: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal {#internal}

Ang mga **Internal abilities** ay available lamang sa loob ng iyong WordPress installation:

- Chat interfaces
- Admin panels
- Mga user na naka-login lang
- Hindi ipinapakita sa REST API o external integrations

Halimbawa: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

Ang mga **Partner abilities** ay available lamang sa mga partner na nasa allow-list:

- Nangangailangan ng malinaw na entry sa partner allow-list
- Available sa REST API gamit ang partner credentials
- Available sa MCP gamit ang partner authentication
- Hindi available sa regular na user

Halimbawa: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled {#disabled}

Ang mga **Disabled abilities** ay hindi available kahit saan:

- Hindi ipinapakita sa anumang interface
- Hindi available sa chat
- Hindi available sa admin panels
- Kapaki-pakinabang para sa mga kakayahan na hindi na ginagamit (deprecated) o eksperimental

## Pag-manage ng Ability Visibility {#managing-ability-visibility}

### Pag-access sa Ability Visibility Settings {#accessing-ability-visibility-settings}

1. Pumunta sa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. I-click ang tab na **Abilities**
3. Makakakita ka ng listahan ng lahat ng naka-install na abilities kasama ang kanilang visibility levels

### Pagtingin sa Detalye ng Ability {#viewing-ability-details}

I-click ang anumang ability para makita ang:

- **Name**: Ang identifier ng kakayahan
- **Description**: Ano ang ginagawa ng kakayahan
- **Current visibility**: Public, Internal, Partner, o Disabled
- **Partner allow-list**: Aling mga partner ang pwedeng mag-access (kung Partner visibility)
- **Last updated**: Kailan huling binago ang visibility
- **Status**: Recognized o Unclassified

### Pagpapalit ng Visibility Levels {#changing-visibility-levels}

Para baguhin ang visibility ng isang ability:

1. I-click ang ability sa listahan
2. Pumili ng bagong visibility level mula sa dropdown
3. Kung pipiliin ang "Partner", magdagdag ng partner identifiers sa allow-list
4. I-click ang **Save**

Halimbawa:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations {#bulk-operations}

Para baguhin ang visibility ng maraming abilities:

1. I-check ang mga box sa tabi ng mga abilities
2. Pumili ng bagong visibility level mula sa bulk action dropdown
3. I-click ang **Apply**

## Partner Allow-List {#partner-allow-list}

Kinokontrol ng **partner allow-list** kung aling mga external partner ang pwedeng mag-access ng mga abilities na nasa Partner-level.

### Pagdaragdag ng Partners {#adding-partners}

1. Pumunta sa **Superdav AI Agent** → **Settings** → **Partners**
2. I-click ang **Add Partner**
3. Ilagay ang partner identifier (karaniwan ay API key o organization ID)
4. Opsyonal na magdagdag ng pangalan at deskripsyon ng partner
5. I-click ang **Save**

### Pag-assign ng Abilities sa Partners {#assigning-abilities-to-partners}

Pagkatapos magdagdag ng partner:

1. Pumunta sa **Abilities** tab
2. Hanapin ang isang ability na may Partner visibility
3. I-click para i-edit
4. Sa seksyon na "Partner allow-list", i-check ang mga box para sa mga partner na dapat may access
5. I-click ang **Save**

### Pag-revoke ng Partner Access {#revoking-partner-access}

Para tanggalin ang access ng isang partner:

1. I-edit ang ability
2. I-uncheck ang box ng partner sa allow-list
3. I-click ang **Save**

Agad na mawawalan ng access ang partner sa ability na iyon.

## Unclassified Abilities {#unclassified-abilities}

Kapag nag-install ka ng third-party ability na hindi kinikilala ng Superdav AI Agent, ito ay minamarkahan bilang **Unclassified**.

### Admin Notice para sa Unclassified Abilities {#admin-notice-for-unclassified-abilities}

Makakakita ka ng admin notice:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Pagre-review ng Unclassified Abilities {#reviewing-unclassified-abilities}

1. I-click ang **Review Abilities** sa notice
2. Para sa bawat unclassified ability, makikita mo ang:
   - Pangalan at deskripsyon ng ability
   - Source (anong plugin/addon ang nag-install nito)
   - Suggested visibility level
   - Security assessment

3. Pumili ng visibility level:
   - **Public**: Nagtitiwala ka sa ability; ipapakita ito sa lahat ng lugar
   - **Internal**: Limitado sa internal na paggamit lang
   - **Partner**: Limitado sa mga tiyak na partner
   - **Disabled**: Huwag gamitin ang ability na ito

4. I-click ang **Classify** para i-save ang iyong desisyon

### Bakit Kailangang I-classify ang Unclassified Abilities? {#why-classify-unclassified-abilities}

Ang pag-classify ng abilities:

- **Nagpapabuti ng seguridad**: Ikaw mismo ang nag-aapruba kung ano ang ipinapakita
- **Naiiwasan ang aksidente**: Ang unclassified abilities ay naka-disable by default
- **Nagpapagana ng features**: Kapag na-classify, magiging available ang ability
- **Nagdodokumento ng desisyon**: Ang iyong mga pagpili ay ini-log para sa audit purposes

## Visibility sa Iba't Ibang Interface {#visibility-in-different-surfaces}

### REST API {#rest-api}

Ang mga **Public abilities** ay available sa pamamagitan ng REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Ang mga **Internal at Partner abilities** ay hindi available sa REST API.

### MCP Servers {#mcp-servers}

Ang mga **Public abilities** ay available sa pamamagitan ng MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

Ang mga **Internal abilities** ay hindi ipinapakita sa MCP.

**Partner abilities** ay available lamang gamit ang partner credentials.

### WooCommerce Integration {#woocommerce-integration}

Ang mga **Public abilities** na may kaugnayan sa WooCommerce ay available:

- Product management
- Order processing
- Customer communication

Ang mga **Internal abilities** ay hindi ipinapakita sa WooCommerce.

### Chat Interface {#chat-interface}

Ang **Lahat ng abilities** (Public, Internal, Partner) ay available sa chat, depende sa pahintulot ng user:

- Nakikita ng mga Administrator ang lahat ng abilities
- Nakikita lang ng regular na user ang Public abilities
- Nakikita ng mga Partner ang Public + Partner abilities (kung whitelisted)

## Security Best Practices {#security-best-practices}

### Principle of Least Privilege {#principle-of-least-privilege}

- Itakda ang abilities sa pinaka-restrictive na visibility na papayagan pa rin ang paggamit nito
- Gamitin ang Partner visibility para sa mga sensitibong operasyon
- I-disable ang mga abilities na hindi mo ginagamit

### Regular Audits {#regular-audits}

- I-review ang visibility ng abilities buwan-buwan
- Mag-check para sa unclassified abilities
- Tanggalin ang access para sa mga partner na hindi na ginagamit

### Logging and Monitoring {#logging-and-monitoring}

- Subaybayan kung aling abilities ang pinakamadalas gamitin
- I-track ang pattern ng access ng partner
- Mag-alert sa mga hindi pangkaraniwang paggamit ng ability

### Third-Party Abilities {#third-party-abilities}

- I-review ang third-party abilities bago i-enable
- I-classify ito nang malinaw
- Magsimula sa Internal o Partner visibility
- Itataas sa Public lang pagkatapos ng masusing pagsusuri

## Troubleshooting {#troubleshooting}

**Hindi lumalabas ang ability sa listahan**
- I-verify na naka-install at active ang ability
- Tiyakin na naka-enable ang plugin/addon
- I-refresh ang page

**Hindi ko mabago ang visibility ng ability**
- I-verify na mayroon kang administrator permissions
- Tiyakin na hindi naka-lock ang ability ng isang plugin
- Subukan i-disable ang mga nagkakasalungat na plugins

**Hindi ma-access ng partner ang ability**
- I-verify na nasa allow-list ang partner
- Tiyakin na ang visibility ng ability ay naka-set sa Partner
- Kumpirmahin na tama ang credentials ng partner
- Tingnan ang API logs para sa mga error sa authentication

**Patuloy pa ring lumalabas ang unclassified abilities**
- I-review at i-classify ang mga ito sa admin notice
- Tiyakin na na-save ang iyong classification
- I-verify na updated ang plugin na nagbibigay ng ability

## Migration mula sa Legacy Mode {#migration-from-legacy-mode}

Kung nag-u-upgrade ka mula sa mas lumang bersyon ng Superdav AI Agent:

- Lahat ng umiiral na abilities ay awtomatikong kino-classify bilang Public
- I-review at i-adjust ang visibility kung kinakailangan
- Walang aksyon na kailangan maliban kung gusto mong limitahan ang access

Tingnan ang **Third-Party Mode Migration** para sa mas detalyadong impormasyon sa paglipat sa native Abilities API integration.

## Next Steps {#next-steps}

Pagkatapos i-configure ang ability visibility:

1. **I-review ang iyong abilities**: I-audit ang lahat ng naka-install na abilities
2. **I-classify ang unclassified abilities**: Tumugon sa mga admin notices
3. **I-set up ang partners**: Magdagdag ng partners kung gumagamit ng Partner visibility
4. **Subaybayan ang paggamit**: Subaybayan kung aling abilities ang pinakamadalas gamitin
5. **Idokumento ang mga desisyon**: Magtala ng mga notes kung bakit mo pinili ang bawat visibility level
