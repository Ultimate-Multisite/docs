---
title: அணுகல் தெரிவுநிலை
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility (த可வுத்தன்மை)

Superdav AI Agent v1.12.0 ஆனது **Ability Visibility** கட்டுப்பாடுகளை அறிமுகப்படுத்துகிறது. இவை எந்தெந்த Surfaces (மேற்பரப்புகள்) எந்தெந்த திறன்களை (abilities) வெளிப்படுத்துகின்றன என்பதைக் கட்டுப்படுத்துகின்றன. இதன் மூலம், REST APIs, MCP servers, WooCommerce integrations மற்றும் பிற இடைமுகங்கள் வழியாக எந்தெந்த ஏஜென்ட் திறன்கள் கிடைக்க வேண்டும் என்பதை நிர்வாகத்தாளர்கள் நுணுக்கமாக அமைக்க முடியும்.

## What is Ability Visibility? (த可வுத்தன்மை என்றால் என்ன?) {#what-is-ability-visibility}

Ability Visibility என்பது ஒரு அனுமதி அமைப்பு (permission system). இது பின்வருவனவற்றை கட்டுப்படுத்துகிறது:

- ஏஜென்ட்களுக்கு எந்தெந்த **திறன்கள்** கிடைக்கின்றன
- அவை **எங்கு வெளிப்படுத்தப்படுகின்றன** (REST API, MCP, WooCommerce போன்றவை)
- **யார் அணுக முடியும்** (partner allow-lists மூலம்)
- அவை எப்படி **வகைப்படுத்தப்படுகின்றன** (recognized vs. unclassified)

ஒவ்வொரு திறனும் ஒரு Visibility Level-ஐக் கொண்டுள்ளது. இது வெவ்வேறு Surfaces முழுவதும் அதன் கிடைக்கும்தன்மையை தீர்மானிக்கிறது.

## Visibility Levels (த可வுத்தன்மை நிலைகள்) {#visibility-levels}

### Public (பொது) {#public}

**Public abilities** எல்லா இடங்களிலும் கிடைக்கக்கூடியவை:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- அனைத்து பயனர் ரோல்களுக்கும் (சரியான அனுமதிகளுடன்)

உதாரணம்: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (உள்) {#internal}

**Internal abilities** உங்கள் WordPress installation-க்குள் மட்டுமே கிடைக்கக்கூடியவை:

- Chat interfaces
- Admin panels
- உள்நுழைந்த பயனர்களுக்கு மட்டுமே
- REST API அல்லது வெளிப்புற integrations மூலம் வெளிப்படுத்தப்படாது

உதாரணம்: `manage-settings`, `view-analytics`, `export-data`

### Partner (கூட்டாளர்) {#partner}

**Partner abilities** அங்கீகரிக்கப்பட்ட கூட்டாளர்களுக்கு (whitelisted partners) மட்டுமே கிடைக்கக்கூடியவை:

- வெளிப்படையான partner allow-list உள்ளீடு தேவை
- partner credentials உடன் REST API வழியாக கிடைக்கும்
- partner authentication உடன் MCP வழியாக கிடைக்கும்
- சாதாரண பயனர்களுக்கு கிடைக்காது

உதாரணம்: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (செயலிழக்கப்பட்டது) {#disabled}

**Disabled abilities** எங்கும் கிடைக்காது:

- எந்த Surface மூலமாகவும் வெளிப்படுத்தப்படாது
- Chat-ல் கிடைக்காது
- Admin panels-ல் கிடைக்காது
- காலாவதியான அல்லது சோதனை முயற்சியான திறன்களுக்குப் பயனுள்ளது

## Managing Ability Visibility (த可வுத்தன்மையை நிர்வகித்தல்) {#managing-ability-visibility}

### Accessing Ability Visibility Settings (Ability Visibility அமைப்புகளை அணுகுதல்) {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** என்பதற்குச் செல்லவும்
2. **Abilities** என்ற Tab-ஐ கிளிக் செய்யவும்
3. நிறுவப்பட்ட அனைத்து திறன்களின் பட்டியலையும், அவற்றின் Visibility Levels-உம் இங்கே காண்பீர்கள்

### Viewing Ability Details (திறன் விவரங்களைப் பார்த்தல்) {#viewing-ability-details}

எந்த ஒரு திறனையும் கிளிக் செய்வதன் மூலம் நீங்கள் பார்க்க முடியும்:

- **Name**: திறனின் அடையாளங்காட்டி (identifier)
- **Description**: அந்தத் திறன் என்ன செய்கிறது
- **Current visibility**: Public, Internal, Partner, அல்லது Disabled
- **Partner allow-list**: எந்த கூட்டாளர்கள் அணுக முடியும் (Partner visibility என்றால்)
- **Last updated**: Visibility கடைசியாக எப்போது மாற்றப்பட்டது
- **Status**: Recognized அல்லது Unclassified

### Changing Visibility Levels (த可வுத்தன்மை நிலைகளை மாற்றுதல்) {#changing-visibility-levels}

ஒரு திறனின் Visibility-ஐ மாற்ற:

1. பட்டியலில் உள்ள திறனை கிளிக் செய்யவும்
2. டிராப் டவுனில் இருந்து புதிய Visibility Level-ஐத் தேர்ந்தெடுக்கவும்
3. "Partner" என்பதைத் தேர்ந்தெடுத்தால், allow-list-ல் partner identifiers-களைச் சேர்க்கவும்
4. **Save** என்பதைக் கிளிக் செய்யவும்

உதாரணம்:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (மொத்த செயல்பாடுகள்) {#bulk-operations}

பல திறன்களின் Visibility-ஐ மாற்ற:

1. திறன்களுக்கு அருகில் உள்ள பெட்டிகளை (checkboxes) டிக் செய்யவும்
2. bulk action டிராப் டவுனில் இருந்து புதிய Visibility Level-ஐத் தேர்ந்தெடுக்கவும்
3. **Apply** என்பதைக் கிளிக் செய்யவும்

## Partner Allow-List (கூட்டாளர் அனுமதிப் பட்டியல்) {#partner-allow-list}

**partner allow-list** என்பது எந்தெந்த வெளிப்புற கூட்டாளர்கள் Partner-level abilities-ஐ அணுக முடியும் என்பதைக் கட்டுப்படுத்துகிறது.

### Adding Partners (கூட்டாளர்களைச் சேர்த்தல்) {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** என்பதற்குச் செல்லவும்
2. **Add Partner** என்பதைக் கிளிக் செய்யவும்
3. partner identifier-ஐ உள்ளிடவும் (பொதுவாக ஒரு API key அல்லது organization ID)
4. விருப்பப்பட்டால், ஒரு partner name மற்றும் description-ஐ சேர்க்கவும்
5. **Save** என்பதைக் கிளிக் செய்யவும்

### Assigning Abilities to Partners (கூட்டாளர்களுக்கு திறன்களை ஒதுக்குதல்) {#assigning-abilities-to-partners}

ஒரு கூட்டாளரைச் சேர்த்த பிறகு:

1. **Abilities** Tab-க்குச் செல்லவும்
2. Partner visibility உள்ள ஒரு திறனைத் தேடவும்
3. அதைத் திருத்த (edit) கிளிக் செய்யவும்
4. "Partner allow-list" பிரிவில், அணுக வேண்டிய கூட்டாளர்களின் பெட்டிகளை டிக் செய்யவும்
5. **Save** என்பதைக் கிளிக் செய்யவும்

### Revoking Partner Access (கூட்டாளர் அணுகலை ரத்து செய்தல்) {#revoking-partner-access}

ஒரு கூட்டாளரின் அணுகலை அகற்ற:

1. திறனைத் திருத்தவும் (Edit)
2. allow-list-ல் இருந்து அந்த கூட்டாளரின் பெட்டியை டிக் செய்யாமல் இருக்கவும் (Uncheck)
3. **Save** என்பதைக் கிளிக் செய்யவும்

அந்த கூட்டாளருக்கு அந்தத் திறனை அணுகும் உரிமை உடனடியாக நீங்கிவிடும்.

## Unclassified Abilities (வகைப்படுத்தப்படாத திறன்கள்) {#unclassified-abilities}

நீங்கள் Superdav AI Agent அடையாளம் காணாத ஒரு third-party ability-ஐ நிறுவினால், அது **Unclassified** என்று குறிக்கப்படும்.

### Admin Notice for Unclassified Abilities (Unclassified Abilities க்கான நிர்வாக அறிவிப்பு) {#admin-notice-for-unclassified-abilities}

நீங்கள் ஒரு நிர்வாக அறிவிப்பைப் பார்ப்பீர்கள்:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Reviewing Unclassified Abilities (Unclassified Abilities-ஐ ஆய்வு செய்தல்) {#reviewing-unclassified-abilities}

1. அறிவிப்பில் உள்ள **Review Abilities** என்பதைக் கிளிக் செய்யவும்
2. ஒவ்வொரு unclassified ability-க்கும், நீங்கள் காண்பீர்கள்:
   - Ability name and description
   - Source (எந்த plugin/addon இதை நிறுவியது)
   - Suggested visibility level
   - Security assessment

3. ஒரு Visibility Level-ஐத் தேர்ந்தெடுக்கவும்:
   - **Public**: இந்தத் திறனை நம்புங்கள்; எல்லா இடங்களிலும் வெளிப்படுத்துங்கள்
   - **Internal**: உள் பயன்பாட்டிற்கு மட்டுமே கட்டுப்படுத்துங்கள்
   - **Partner**: குறிப்பிட்ட கூட்டாளர்களுக்கு மட்டுமே கட்டுப்படுத்துங்கள்
   - **Disabled**: இந்தத் திறனைப் பயன்படுத்த வேண்டாம்

4. உங்கள் முடிவைச் சேமிக்க **Classify** என்பதைக் கிளிக் செய்யவும்

### Why Classify Unclassified Abilities? (ஏன் Unclassified Abilities-ஐ வகைப்படுத்த வேண்டும்?) {#why-classify-unclassified-abilities}

திறன்களை வகைப்படுத்துவது:

- **பாதுகாப்பை மேம்படுத்துகிறது**: என்ன வெளிப்படுத்தப்படுகிறது என்பதை நீங்கள் வெளிப்படையாக ஒப்புதல் அளிக்கிறீர்கள்
- **விபத்துகளைத் தடுக்கிறது**: Unclassified abilities இயல்பாகவே செயலிழக்கப்படுகின்றன
- **அம்சங்களை செயல்படுத்துகிறது**: வகைப்படுத்தப்பட்டவுடன், அந்தத் திறன் கிடைக்கக்கூடியதாகிறது
- **முடிவுகளை ஆவணப்படுத்துகிறது**: தணிக்கை நோக்கங்களுக்காக உங்கள் தேர்வுகள் பதிவு செய்யப்படுகின்றன

## Visibility in Different Surfaces (வெவ்வேறு Surfaces-ல் த可வுத்தன்மை) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public abilities** REST endpoints வழியாக கிடைக்கக்கூடியவை:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal and Partner abilities** REST API வழியாக கிடைக்காது.

### MCP Servers {#mcp-servers}

**Public abilities** MCP வழியாக கிடைக்கக்கூடியவை:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCP வழியாக வெளிப்படுத்தப்படாது.

**Partner abilities** partner credentials உடன் மட்டுமே கிடைக்கும்.

### WooCommerce Integration {#woocommerce-integration}

WooCommerce தொடர்பான **Public abilities** கிடைக்கக்கூடியவை:

- Product management
- Order processing
- Customer communication

**Internal abilities** WooCommerce-க்கு வெளிப்படுத்தப்படாது.

### Chat Interface (அட்-டாப் இடைமுகம்) {#chat-interface}

**அனைத்து திறன்களும்** (Public, Internal, Partner) பயனர் அனுமதிகளைப் பொறுத்து Chat-ல் கிடைக்கக்கூடியவை:

- Administrators அனைத்து திறன்களையும் பார்க்க முடியும்
- சாதாரண பயனர்கள் Public abilities-ஐ மட்டுமே பார்ப்பார்கள்
- Partners Public + Partner abilities-ஐப் பார்ப்பார்கள் (whitelisted என்றால்)

## Security Best Practices (பாதுகாப்பு சிறந்த நடைமுறைகள்) {#security-best-practices}

### Principle of Least Privilege (குறைந்தபட்ச சலுகை கொள்கை) {#principle-of-least-privilege}

- அவற்றின் பயன்பாட்டிற்கு இன்னும் அனுமதிக்கும் மிகக் கட்டுப்படுத்தப்பட்ட Visibility-ஐ அமைக்கவும்
- முக்கியமான செயல்பாடுகளுக்கு Partner visibility-ஐப் பயன்படுத்தவும்
- நீங்கள் பயன்படுத்தாத திறன்களைச் செயலிழக்கச் செய்யவும்

### Regular Audits (தொடர்ச்சியான தணிக்கைகள்) {#regular-audits}

- மாதந்தோறும் ability visibility-ஐ ஆய்வு செய்யவும்
- unclassified abilities-ஐச் சரிபார்க்கவும்
- பயன்படுத்தப்படாத கூட்டாளர்களின் அணுகலை அகற்றவும்

### Logging and Monitoring (பதிவுசெய்தல் மற்றும் கண்காணிப்பு) {#logging-and-monitoring}

- எந்தெந்த திறன்கள் அதிகம் பயன்படுத்தப்படுகின்றன என்பதைக் கண்காணிக்கவும்
- கூட்டாளர் அணுகல் முறைகளை (patterns) கண்காணிக்கவும்
- அசாதாரணமான ability பயன்பாட்டிற்கு எச்சரிக்கை கொடுக்கவும்

### Third-Party Abilities (மூன்றாம் தரப்பு திறன்கள்) {#third-party-abilities}

- செயல்படுத்துவதற்கு முன் third-party abilities-ஐ ஆய்வு செய்யவும்
- அவற்றை வெளிப்படையாக வகைப்படுத்தவும் (Classify)
- Internal அல்லது Partner visibility-உடன் தொடங்கவும்
- சரிபார்க்கப்பட்ட பின்னரே Public-க்கு மேம்படுத்தவும் (Promote)

## Troubleshooting (சிக்கல் தீர்க்கும் வழிகாட்டி) {#troubleshooting}

**ஒரு ability பட்டியலில் காட்டவில்லை**
- அந்த ability நிறுவப்பட்டு செயல்படுகிறதா என்பதைச் சரிபார்க்கவும்
- plugin/addon இயக்கப்பட்டிருப்பதைச் சரிபார்க்கவும்
- பக்கத்தை Refresh செய்யவும்

**ஒரு ability-ன் visibility-ஐ மாற்ற முடியவில்லை**
- உங்களுக்கு administrator permissions இருக்கிறதா என்பதைச் சரிபார்க்கவும்
- அந்த ability ஒரு plugin மூலம் பூட்டப்பட்டிருக்கிறதா என்று பார்க்கவும்
- முரண்படும் plugins-ஐ முடக்க முயற்சிக்கவும்

**ஒரு கூட்டாளரால் ஒரு ability-ஐ அணுக முடியவில்லை**
- கூட்டாளர் allow-list-ல் இருக்கிறாரா என்பதைச் சரிபார்க்கவும்
- ability-ன் visibility Partner என்று அமைக்கப்பட்டுள்ளதா என்று பார்க்கவும்
- கூட்டாளரின் credentials சரியாக உள்ளதா என்பதை உறுதிப்படுத்தவும்
- authentication பிழைகளுக்காக API logs-ஐச் சரிபார்க்கவும்

**Unclassified abilities தொடர்ந்து தோன்றுகின்றன**
- நிர்வாக அறிவிப்பில் அவற்றை ஆய்வு செய்து வகைப்படுத்தவும் (Review and classify)
- உங்கள் வகைப்படுத்தல் சேமிக்கப்பட்டதா என்பதைச் சரிபார்க்கவும்
- ability-ஐ வழங்கும் plugin புதுப்பித்த நிலையில் உள்ளதா என்பதை உறுதிப்படுத்தவும்

## Migration from Legacy Mode (பழைய முறையில் இருந்து இடம்பெயர்தல்) {#migration-from-legacy-mode}

நீங்கள் Superdav AI Agent-ன் பழைய பதிப்பிலிருந்து மேம்படுத்திக் கொண்டால்:

- அனைத்து existing abilities-களும் தானாகவே Public என்று வகைப்படுத்தப்படும்
- தேவைக்கேற்ப Visibility-ஐ ஆய்வு செய்து சரிசெய்யவும்
- அணுகலை கட்டுப்படுத்த விரும்பாதவரை எந்த நடவடிக்கையும் தேவையில்லை

Native Abilities API integration-க்கு மாறுவது பற்றி மேலும் விவரங்களுக்கு **Third-Party Mode Migration** பார்க்கவும்.

## Next Steps (அடுத்த படிகள்) {#next-steps}

ability visibility-ஐ கட்டமைத்த பிறகு:

1. **உங்கள் திறன்களை ஆய்வு செய்யுங்கள்**: நிறுவப்பட்ட அனைத்து abilities-களையும் தணிக்கை செய்யுங்கள்
2. **Unclassified abilities-ஐ வகைப்படுத்துங்கள்**: நிர்வாக அறிவிப்புகளுக்குப் பதிலளிக்கவும்
3. **கூட்டாளர்களை அமைக்கவும்**: Partner visibility பயன்படுத்தினால் கூட்டாளர்களைச் சேர்க்கவும்
4. **பயன்பாத்தைக் கண்காணிக்கவும்**: எந்தெந்த abilities அதிகம் பயன்படுத்தப்படுகின்றன என்பதைக் கண்காணிக்கவும்
5. **முடிவுகளை ஆவணப்படுத்தவும்**: ஒவ்வொரு visibility level-ஐயும் ஏன் தேர்ந்தெடுத்தீர்கள் என்பதற்கான குறிப்புகளை வைக்கவும்
