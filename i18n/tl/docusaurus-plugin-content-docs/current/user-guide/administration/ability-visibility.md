---
title: Kakayahang Makita
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Pagpapakita ng Kakayahan (Ability Visibility)

Ang Superdav AI Agent v1.12.0 ay nagpapakilala ng **Ability Visibility** controls na namamahala kung aling mga surface ang magpapakita ng bawat kakayahan (ability). Pinapayagan nito ang mga administrator na i-fine-tune kung aling mga capability ng agent ang magagamit sa pamamagitan ng REST APIs, MCP servers, WooCommerce integrations, at iba pang interface.

## Ano ang Ability Visibility? {#what-is-ability-visibility}

Ang Ability Visibility ay isang sistema ng permiso na kumokontrol:

- **Aling mga ability** ang available sa mga agent
- **Saan ito ipinapakita** (REST API, MCP, WooCommerce, atbp.)
- **Sino ang maaaring mag-access dito** (sa pamamagitan ng partner allow-lists)
- **Paano ito ikoklasipika** (kilala vs. hindi kinikilala)

Bawat ability ay mayroong antas ng visibility na nagtatakda kung ito ay available sa iba't ibang surface.

## Mga Antas ng Visibility {#visibility-levels}

### Public {#public}

Ang mga **Public abilities** ay available kahit saan:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Lahat ng user roles (na may naaangkop na mga permiso)

Halimbawa: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal {#internal}

Ang mga **Internal abilities** ay available lamang sa loob ng iyong WordPress installation:

- Chat interfaces
- Admin panels
- Mga naka-log-in na user lamang
- Hindi ipinapakita sa pamamagitan ng REST API o external integrations

Halimbawa: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

Ang mga **Partner abilities** ay available lamang sa mga whitelisted partner:

- Nangangailangan ng pormal na pagpasok sa partner allow-list
- Available sa pamamagitan ng REST API gamit ang partner credentials
- Available sa pamamagitan ng MCP na may partner authentication
- Hindi available sa regular na mga user

Halimbawa: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled {#disabled}

Ang mga **Disabled abilities** ay hindi available kahit saan:

- Hindi ipinapakita sa anumang surface
- Hindi available sa chat
- Hindi available sa admin panels
- Kapaki-pakinabang para sa mga lumang o eksperimental na ability

## Pamamahala ng Visibility ng Ability {#managing-ability-visibility}

### Pag-access sa Mga Setting ng Visibility ng Ability {#accessing-ability-visibility-settings}

1. Pumunta sa **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. I-click ang tab na **Abilities**
3. Makikita mo rito ang listahan ng lahat ng naka-install na ability kasama ang kanilang mga antas ng visibility (kung sino ang makakakita nito).

### Pagtingin sa Detalye ng Ability {#viewing-ability-details}

I-click ang anumang ability para makita ang:

- **Name**: Ang identifier ng ability
- **Description**: Ano ang ginagawa ng ability
- **Current visibility**: Public, Internal, Partner, o Disabled (Naka-activate/Lahat, Panloob, Kasosyo, o Binabawi)
- **Partner allow-list**: Aling mga partner ang maaaring mag-access (kung Partner visibility ito)
- **Last updated**: Kailan huli itong binago ang visibility
- **Status**: Recognized (Kinikilala) o Unclassified (Hindi Inuri)

### Pagbabago ng Mga Antas ng Visibility {#changing-visibility-levels}

Para baguhin ang visibility ng isang ability:

1. I-click ang ability sa listahan
2. Piliin ang bagong antas ng visibility mula sa dropdown menu
3. Kung pinili mo ay "Partner", idagdag ang partner identifiers sa allow-list
4. I-click ang **Save** (I-save)

Halimbawa:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (Paggamit ng Maramihang Aksyon) {#bulk-operations}

Para baguhin ang visibility para sa maraming ability:

1. Lagyan ng tsek (check box) ang mga ability
2. Piliin ang bagong antas ng visibility mula sa dropdown menu ng bulk action
3. I-click ang **Apply** (Ilapat)

## Partner Allow-List {#partner-allow-list}

Ang **partner allow-list** ang nagkokontrol kung aling mga external partner ang maaaring mag-access ng mga ability na may Partner-level access.

### Pagdaragdag ng Mga Partner {#adding-partners}

1. Pumunta sa **Superdav AI Agent** → **Settings** → **Partners**
2. I-click ang **Add Partner** (Magdagdag ng Partner)
3. Ilagay ang partner identifier (karaniwan ay API key o organization ID)
4. Opsyonal, maglagay ng pangalan at deskripsyon ng partner
5. I-click ang **Save** (I-save)

### Pag-assign ng Mga Ability sa mga Partner {#assigning-abilities-to-partners}

Pagkatapos magdagdag ng partner:

1. Pumunta sa tab na **Abilities**
2. Hanapin ang isang ability na may Partner visibility
3. I-click para i-edit
4. Sa seksyong "Partner allow-list," i-check ang mga kahon para sa mga partner na dapat ay may access
5. I-click ang **Save**

### Pagbawi ng Access ng Partner {#revoking-partner-access}

Para tanggalin ang access ng isang partner:

1. I-edit ang ability
2. I-uncheck ang box ng partner sa allow-list
3. I-click ang **Save**

Agad mawawala ang access ng partner sa ability na iyon.

## Mga Hindi Inuri na Ability (Unclassified Abilities) {#unclassified-abilities}

Kapag nag-install ka ng third-party ability na hindi kilala ng Superdav AI Agent, ito ay itatalaga bilang **Unclassified**.

### Admin Notice para sa mga Unclassified Abilities {#admin-notice-for-unclassified-abilities}

Makikita mo ang isang admin notice:

```
⚠️ Mga Natukling Unclassified Abilities

Ang mga sumusunod na abilities ay na-install ngunit hindi kinikilala:
- custom-import-tool
- external-api-wrapper

Maaaring magdulot ng panganib sa seguridad o compatibility ang mga ability na ito.
Mangyaring suriin at iuri ang mga ito.

[Suriin ang Mga Ability] [Itapon]
```

### Pagsusuri sa mga Unclassified Abilities {#reviewing-unclassified-abilities}

1. I-click ang **Review Abilities** sa notice
2. Para sa bawat unclassified ability, makikita mo:
   - Pangalan at deskripsyon ng ability
   - Pinagmulan (alin na plugin/addon ang nag-install nito)
   - Mungunahing antas ng visibility
   - Pagtatasa sa seguridad

3. Pumili ng visibility level:
   - **Public**: Magtiwala sa ability; ilabas ito kahit saan
   - **Internal**: Limitahan sa internal use lamang
   - **Partner**: Limitahan sa mga partikular na partner
   - **Disabled**: Huwag gamitin ang ability na ito

4. I-click ang **Classify** para i-save ang iyong desisyon

### Bakit Kailangang Iuri ang mga Unclassified Abilities? {#why-classify-unclassified-abilities}

Ang pag-classify ng mga ability:

- **Pinapahusay ang seguridad**: Eksplisitong pinapayagan mo kung ano ang ipo-expose
- **Naiiiwasan ang aksidente**: Ang mga unclassified abilities ay naka-disable by default
- **Nagbibigay ng features**: Kapag na-classify na, magiging available ang ability
- **Naglalaman ng dokumentasyon ng desisyon**: Itinatala ang iyong mga pagpili para sa audit purposes

## Pagkakita sa Iba't Ibang Surface (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

Ang mga **pampublikong kakayahan** ay available sa pamamagitan ng REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

Ang mga **internal at partner abilities** ay hindi available sa pamamagitan ng REST API.

### MCP Servers {#mcp-servers}

Ang mga **pampublikong kakayahan** ay available sa pamamagitan ng MCP:

MCP Server: Superdav AI Agent
Mga Available na kakayahan:
- scaffold-block-theme
- activate-theme
- send-email

Ang mga **internal abilities** ay hindi ipinapakita (exposed) sa pamamagitan ng MCP.

Ang mga **partner abilities** ay available lamang gamit ang partner credentials.

### WooCommerce Integration {#woocommerce-integration}

Ang mga **pampublikong kakayahan** na may kaugnayan sa WooCommerce ay available:

- Product management
- Order processing
- Customer communication

Ang mga **internal abilities** ay hindi ipinapakita (exposed) sa WooCommerce.

### Chat Interface {#chat-interface}

Ang **lahat ng kakayahan** (Public, Internal, Partner) ay available sa chat, depende sa mga pahintulot ng user:

- Nakikita ng mga Administrator ang lahat ng kakayahan
- Nakikita ng mga Regular na user ang Public abilities lamang
- Nakikita ng mga Partners ang Public + Partner abilities (kung naka-whitelist)

## Mga Pinakamahusay na Praktis sa Seguridad (Security Best Practices) {#security-best-practices}

### Prinsipyo ng Pinakamababang Karapatan (Principle of Least Privilege) {#principle-of-least-privilege}

- Itakda ang mga kakayahan sa pinaka-restrictive na visibility na papayagan pa rin ang kanilang paggamit
- Gumamit ng Partner visibility para sa sensitibong operasyon
- Patayin ang mga kakayahan na hindi mo ginagamit

### Regular na Audit {#regular-audits}

- Suriin ang visibility ng kakayahan buwan-buwan
- Tingnan kung may mga kakayahang hindi nakaklasipika (unclassified)
- Tanggalin ang access para sa mga hindi ginagamit na partner

### Pag-log at Pagsubaybay (Logging and Monitoring) {#logging-and-monitoring}

- Subaybayan kung aling mga kakayahan ang pinakamadalas gamitin
- Subaybayan ang mga pattern ng access ng partner
- Magbigay ng alert sa hindi pangkaraniwang paggamit ng kakayahan

### Mga Kakayahang Pangatlong Panig (Third-Party Abilities) {#third-party-abilities}

- Suriin ang mga third-party abilities bago ito i-enable
- Malinaw itong iklasipika (classify)
- Magsimula sa Internal o Partner visibility muna
- Iangat ito sa Public lamang pagkatapos ng masusing pagsusuri

## Pag-aayos (Troubleshooting) {#troubleshooting}

**Hindi lumalabas ang isang ability sa listahan**
- Siguraduhin na naka-install at aktibo ang ability
- Tingnan kung naka-enable ba ang plugin/addon
- I-refresh ang page

**Hindi ko mabago ang visibility ng isang ability**
- Siguraduhin na mayroon kang administrator permissions
- Tingnan kung naka-lock ba ang ability ng isang plugin
- Subukan i-disable ang mga nagkakasalungat na plugin

**Hindi ma-access ng partner ang isang ability**
- Siguraduhin na nasa allow-list ang partner
- Tingnan kung ang visibility ng ability ay naka-set sa Partner
- I-confirm na tama ang credentials ng partner
- Tingnan ang API logs para sa mga error sa authentication

**Patuloy na lumilitaw ang hindi ikinlasipiklang abilities**
- Suriin at i-classify ang mga ito sa admin notice
- Siguraduhin na na-save ang iyong klasipikasyon
- I-verify kung updated ang plugin na nagbibigay ng ability

## Paglipat mula sa Legacy Mode (Migration from Legacy Mode) {#migration-from-legacy-mode}

Kung nag-a-upgrade ka mula sa mas lumang bersyon ng Superdav AI Agent:

- Lahat ng kasalukuyang abilities ay awtomatikong ikoklasipika bilang Public
- Suriin at i-adjust ang visibility kung kinakailangan
- Walang kailangang gawin maliban kung gusto mong limitahan ang access

Tingnan ang **Third-Party Mode Migration** para sa mas maraming detalye tungkol sa paglipat patungo sa native Abilities API integration.

## Susunod na Hakbang (Next Steps) {#next-steps}

Pagkatapos i-configure ang visibility ng ability:

1. **Suriin ang iyong mga abilities**: I-audit ang lahat ng naka-install na abilities
2. **I-classify ang hindi ikinlasipiklang abilities**: Tumugon sa admin notices
3. **Mag-set up ng partners**: Magdagdag ng mga partner kung gumagamit ka ng Partner visibility
4. **Subaybayan ang paggamit**: Subaybayan kung aling abilities ang pinakamadalas gamitin
5. **Idokumento ang mga desisyon**: Mag-iwan ng mga tala kung bakit mo pinili ang bawat antas ng visibility
