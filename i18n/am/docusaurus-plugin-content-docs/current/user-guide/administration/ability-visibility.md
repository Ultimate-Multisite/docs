---
title: የአቅም ታይነት
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# የችሎታ መታየት ሁኔታ (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 **የችሎታ መታየት ሁኔታ (Ability Visibility)** ቁጥጥሮችን አስተዋውቋል፤ እነዚህም እያንዳንዱን ችሎታ በየትኞቹ ክፍሎች (surfaces) እንደሚታይ ይቆጣጠራሉ። ይህ አድሚኒስትራተሮች የትኞቹ የኤጀንት አቅሞች በREST APIs፣ በMCP servers፣ በWooCommerce integrations እና በሌሎች መገናኛዎች (interfaces) ምን ያህል መገኘት እንዳለባቸው በጥንቃቄ እንዲያስተካክሉ ያስችላቸዋል።

## የችሎታ መታየት ሁኔታ ምንድነው? {#what-is-ability-visibility}

የችሎታ መታየት ሁኔታ (Ability Visibility) የሚቆጣጠረው የሚከተሉትን ነው፦

- **የትኞቹ ችሎታዎች** ለኤጀንቶች የሚገኙ እንደሆኑ
- **የት እንደሚታዩ** (REST API፣ MCP፣ WooCommerce ወዘተ)
- **ማን መድረስ እንደሚችል** (በשותፍ የተፈቀዱ ዝርዝሮች - partner allow-lists)
- **እንዴት እንደሚመደቡ** (የሚታወቁ vs. የማይታወቁ)

እያንዳንዱ ችሎታ በተለያዩ ክፍሎች ላይ ያለውን መገኘት የሚወስን የራሱ የሆነ የታይነት ደረጃ አለው።

## የታይነት ደረጃዎች (Visibility Levels) {#visibility-levels}

### 1. የህዝብ (Public) {#public}

**የህዝብ ችሎታዎች** በሁሉም ቦታ ይገኛሉ፦

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- ሁሉም የተጠቃሚ ሚናዎች (በተገቢ ስልጣን)

ምሳሌ፦ `scaffold-block-theme`, `activate-theme`, `send-email`

### 2. የውስጥ (Internal) {#internal}

**የውስጥ ችሎታዎች** በWordPress installationዎ ውስጥ ብቻ ይገኛሉ፦

- Chat interfaces
- Admin panels
- የተግባር ተጠቃሚዎች ብቻ
- በREST API ወይም በውጫዊ ውህደቶች (external integrations) አይታዩም።

ምሳሌ፦ `manage-settings`, `view-analytics`, `export-data`

### 3. የשותፍ (Partner) {#partner}

**የשותፍ ችሎታዎች** ለተፈቀዱ (whitelisted) አጋሮች ብቻ ይገኛሉ፦

- ግልጽ የשותፍ ፈቃድ ዝርዝር (explicit partner allow-list entry) ያስፈልጋል
- በשותፍ መለያዎች (partner credentials) በREST API ይገኛል
- በשותፍ ማረጋገጫ (partner authentication) በMCP ይገኛል
- ለተራ ተጠቃሚዎች አይገኝም።

ምሳሌ፦ `bulk-import-users`, `modify-billing`, `access-analytics`

### 4. የተሰበሩ (Disabled) {#disabled}

**የተሰበሩ ችሎታዎች** በየትኛውም ቦታ አይገኙም።

- በየትኛውም ክፍል አይታዩም።
- በቻት አይገኙም።
- በአድሚን ፓነሎች አይገኙም።
- ለተሰረዙ ወይም ለሙከራ ችሎታዎች ጠቃሚ ነው።

## የችሎታ መታየት ሁኔታን ማስተዳደር {#managing-ability-visibility}

### የችሎታ መታየት ሁኔታ ቅንብሮችን መድረስ {#accessing-ability-visibility-settings}

1. ወደ **WordPress Admin** → **Superdav AI Agent** → **Settings** ይሂዱ።
2. **Abilities** ታብ ላይ ይጫኑ።
3. ሁሉንም የተጫኑ ችሎታዎች እና የየራሳቸው የታይነት ደረጃ ዝርዝር ያያሉ።

### የችሎታ ዝርዝሮችን መመልከት {#viewing-ability-details}

የችሎታውን ማንኛውንም ክፍል በመጫን የሚከተሉትን ይመልከቱ፦

- **Name**: የችሎታው መለያ (identifier)
- **Description**: ችሎታው ምን እንደሚያደርግ
- **Current visibility**: የህዝብ (Public)፣ የውስጥ (Internal)፣ የשותፍ (Partner)፣ ወይም የተሰበረ (Disabled)
- **Partner allow-list**: የትኞቹ አጋሮች መድረስ እንደሚችሉ (የשותፍ ታይነት ከሆነ)
- **Last updated**: የታይነቱ የመጨረሻ ጊዜ የተቀየረበት ጊዜ
- **Status**: የሚታወቅ (Recognized) ወይስ የማይታወቅ (Unclassified)

### የታይነት ደረጃዎችን መቀየር {#changing-visibility-levels}

የችሎታውን ታይነት ለመቀየር፦

1. በዝርዝሩ ውስጥ ያለውን ችሎታ ይጫኑ።
2. ከድራፕዳውን (dropdown) አዲስ የታይነት ደረጃ ይምረጡ።
3. "Partner" የሚለውን ከመረጡ፣ የשותፍ መለያዎችን (partner identifiers) በፈቃድ ዝርዝሩ ውስጥ ይጨምሩ።
4. **Save** ላይ ይጫኑ።

ምሳሌ፦

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### በጅምላ ስራዎች (Bulk Operations) {#bulk-operations}

ለብዙ ችሎታዎች ታይነት ለመቀየር፦

1. ከችሎታዎቹ አጠገብ ያሉትን ሳጥኖች (checkboxes) ይምረጡ።
2. ከጅምላ የድርጊት ድራፕዳውን (bulk action dropdown) አዲስ የታይነት ደረጃ ይምረጡ።
3. **Apply** ላይ ይጫኑ።

## የשותፍ ፈቃድ ዝርዝር (Partner Allow-List) {#partner-allow-list}

**የשותፍ ፈቃድ ዝርዝር** የትኞቹ ውጫዊ አጋሮች የשותፍ ደረጃ ችሎታዎችን መድረስ እንደሚችሉ ይቆጣጠራል።

### አጋሮችን መጨመር {#adding-partners}

1. ወደ **Superdav AI Agent** → **Settings** → **Partners** ይሂዱ።
2. **Add Partner** ላይ ይጫኑ።
3. የשותፍ መለያውን (partner identifier) ያስገቡ (በተለምዶ የAPI key ወይም የድርጅት መለያ ነው)።
4. በঐচ্ছিক ሁኔታ የשותፍ ስም እና መግለጫ ይጨምሩ።
5. **Save** ላይ ይጫኑ።

### ችሎታዎችን ለአጋሮች መመደብ {#assigning-abilities-to-partners}

አጋር ከጨመሩ በኋላ፦

1. ወደ **Abilities** ታብ ይሂዱ።
2. የשותፍ ታይነት ያለው ችሎታ ይፈልጉ።
3. ለማርትዕ ይጫኑ።
4. በ "Partner allow-list" ክፍል ውስጥ፣ መድረስ ያለባቸው አጋሮች ሳጥኖችን ይምረጡ።
5. **Save** ላይ ይጫኑ።

### የשותፍ መዳረሻን መሰረዝ (Revoking Partner Access) {#revoking-partner-access}

የአጋር መዳረሻ ለማስወገድ፦

1. ችሎታውን ያርትዑ።
2. በአፈቃድ ዝርዝሩ ውስጥ ያለውን የአጋር ሳጥን ያነሰሉ።
3. **Save** ላይ ይጫኑ።

አጋሩ ወዲያውኑ ወደዚያ ችሎታ መዳረሻ ያጣል/ታጣል።

## የማይታወቁ ችሎታዎች (Unclassified Abilities) {#unclassified-abilities}

Superdav AI Agent የማይያውቀው የሶስተኛ ወገን ችሎታ ሲጫኑ፣ እንደ **የማይታወቅ (Unclassified)** ምልክት ይደረግበታል።

### ለአድሚን ማሳሰቢያ ስለ የማይታወቁ ችሎታዎች {#admin-notice-for-unclassified-abilities}

የሚከተለውን የአድሚን ማሳሰቢያ ያያሉ፦

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### የማይታወቁ ችሎታዎችን መገምገም {#reviewing-unclassified-abilities}

1. በማሳሰቢያው ውስጥ **Review Abilities** ላይ ይጫኑ።
2. ለእያንዳንዱ የማይታወቅ ችሎታ የሚከተሉትን ያያሉ፦
   - የችሎታ ስም እና መግለጫ
   - ምንጩ (የትኛው plugin/addon እንዳስጫነው)
   - የተጠቆመ የታይነት ደረጃ
   - የደህንነት ግምገማ

3. የታይነት ደረጃ ይምረጡ፦
   - **Public**: ችሎታውን ይተማመኑበት፤ በሁሉም ቦታ ያጋልጡት።
   - **Internal**: ለውስጥ አገልግሎት ብቻ ይገድቡት።
   - **Partner**: ለተወሰኑ አጋሮች ብቻ ይገድቡት።
   - **Disabled**: ይህንን ችሎታ አይጠቀሙበት።

4. ውሳኔዎን ለማስቀመጥ **Classify** ላይ ይጫኑ።

### የማይታወቁ ችሎታዎችን ለምን መመደብ አለብኝ? {#why-classify-unclassified-abilities}

ችሎታዎችን መመደብ፦

- **ደህንነትን ያሻሽላል**: ምን እንደሚታይ በግልጽ ያጽድቃሉ።
- **አደጋዎችን ይከላከላል**: የማይታወቁ ችሎታዎች በነባሪነት የተሰበሩ ናቸው።
- **ባህሪያትን ያስችላል**: ከተመደቡ በኋላ፣ ችሎታው ይገኛል።
- **ውሳኔዎችን ይመዘግባል**: ምርጫዎችዎ ለኦዲት ዓላማ ይመዘገባሉ።

## በተለያዩ ክፍሎች ውስጥ ያለው ታይነት {#visibility-in-different-surfaces}

### REST API {#rest-api}

**የህዝብ ችሎታዎች** በREST endpoints ይገኛሉ፦

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**የውስጥ እና የשותፍ ችሎታዎች** በREST API አይገኙም።

### MCP Servers {#mcp-servers}

**የህዝብ ችሎታዎች** በMCP ይገኛሉ፦

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**የውስጥ ችሎታዎች** በMCP አይታዩም።

**የשותፍ ችሎታዎች** በשותፍ መለያዎች ብቻ ይገኛሉ።

### WooCommerce Integration {#woocommerce-integration}

ከWooCommerce ጋር የተያያዙ **የህዝብ ችሎታዎች** ይገኛሉ፦

- የምርት አስተዳደር
- የትዕዛዝ ሂደት
- የደንበኛ ግንኙነት

**የውስጥ ችሎታዎች** በWooCommerce አይታዩም።

### Chat Interface {#chat-interface}

**ሁሉም ችሎታዎች** (Public, Internal, Partner) በቻት ይገኛሉ፣ ይህም የሚወሰነው በተጠቃሚው ስልጣን ነው።

- አድሚኒስትራተሮች ሁሉንም ችሎታዎች ያያሉ።
- ተራ ተጠቃሚዎች የህዝብ ችሎታዎችን ብቻ ያያሉ።
- አጋሮች የህዝብ + የשותፍ ችሎታዎችን ያያሉ (የተፈቀዱ ከሆነ)።

## የደህንነት ምርጥ ልምዶች (Security Best Practices) {#security-best-practices}

### የቅንብረቱ መርህ (Principle of Least Privilege) {#principle-of-least-privilege}

- ችሎታዎችን አጠቃቀማቸውን የሚያስችላቸውን በጣም ገደብ ባለው ታይነት ያዘጋጁ።
- ለስሜታዊ ስራዎች የשותፍ ታይነትን ይጠቀሙ።
- የማይጠቀሙባቸውን ችሎታዎች ያሰበሯቸው።

### መደበኛ ኦዲቶች (Regular Audits) {#regular-audits}

- የችሎታ ታይነትን በየወሩ ይገምግሙ።
- የማይታወቁ ችሎታዎችን ይፈትሹ።
- ጥቅም ላይ የማይውሉ አጋሮችን መዳረሻ ያስወግዱ።

### መመዝገብ እና ክትትል (Logging and Monitoring) {#logging-and-monitoring}

- የትኞቹ ችሎታዎች በብዛት ጥቅም ላይ እንደሚውሉ ይከታተሉ።
- የአጋር መዳረሻ ዘይቤዎችን ይከታተሉ።
- ያልተለመደ የችሎታ አጠቃቀም ሲኖር ማንቂያ ይስጡ።

### የሶስተኛ ወገን ችሎታዎች (Third-Party Abilities) {#third-party-abilities}

- የሶስተኛ ወገን ችሎታዎችን ከመንቃትዎ በፊት ይገምግሙ።
- በግልጽ መመደብ (Classify) አለባቸው።
- በየውስጥ (Internal) ወይም በשותፍ (Partner) ታይነት ይጀምሩ።
- ከተፈተኑ በኋላ ብቻ ወደ ህዝብ (Public) ያሳድጉ።

## ችግር መፍታት (Troubleshooting) {#troubleshooting}

**ችሎታው በዝርዝሩ ላይ አይታይም**
- ችሎታው ተጫንና ንቁ መሆኑን ያረጋግጡ።
- የplugin/addon ተንቀሳቃሽ መሆኑን ያረጋግጡ።
- ገጹን ያድሱ (Refresh)።

**የችሎታውን ታይነት መቀየር አልችልም**
- የአድሚኒስትራተር ስልጣን እንዳለዎት ያረጋግጡ።
- ችሎታው በplugin ተቆልቋል (locked) መሆኑን ያረጋግጡ።
- የሚጋጩ plugins ለማጥፋት ይሞክሩ።

**አጋር ችሎታውን መድረስ አይችልም**
- አጋሩ በፈቃድ ዝርዝሩ ውስጥ መሆኑን ያረጋግጡ።
- የችሎታው ታይነት ወደ Partner መቅረብ መሆኑን ያረጋግጡ።
- የአጋሩ መለያዎች ትክክል መሆናቸውን ያረጋግጡ።
- የማረጋገጫ ስህተቶች (authentication errors) በAPI logs ውስጥ ይፈትሹ።

**የማይታወቁ ችሎታዎች መታየት ይቀጥላሉ**
- በማድሚን ማሳሰቢያው ውስጥ ይገምግሙና ይመድቡ።
- ምደባዎ እንደተቀመጠ መሆኑን ያረጋግጡ።
- ችሎታውን የሚያቀርበው plugin ወቅታዊ መሆኑን ያረጋግጡ።

## ከድሮው ሁነታ ወደ ሽግግር (Migration from Legacy Mode) {#migration-from-legacy-mode}

የSuperdav AI Agent የድሮ ስሪት ከሆነ እያሻሻሉ ከሆነ፦

- ሁሉም ያሉ ችሎታዎች በራስ-ሰር እንደ Public ይመደባሉ።
- እንደ አስፈላጊነቱ ይገምግሙና ያስተካክሉ።
- መዳረሻን መገደብ ባይፈልጉም ምንም እርምጃ አያስፈልግም።

ወደ ተወላጅ Abilities API ውህደት ሽግግር (transition) ላይ ተጨማሪ ዝርዝሮች ለማግኘት **Third-Party Mode Migration** ይመልከቱ።

## ቀጣይ እርምጃዎች (Next Steps) {#next-steps}

የችሎታ መታየት ሁኔታን ከማስዋቀር በኋላ፦

1. **የችሎታዎችዎን ግምገማ ያድርጉ**: ሁሉንም የተጫኑ ችሎታዎችን ኦዲት ያድርጉ።
2. **የማይታወቁ ችሎታዎችን መመደብ**: ለሚገኙ የአድሚን ማሳሰቢያዎች ምላሽ ይስጡ።
3. **አጋሮችን ማዘጋጀት**: የשותፍ ታይነትን እየተጠቀሙ ከሆነ አጋሮችን ይጨምሩ።
4. **አጠቃቀምን መከታተል**: የትኞቹ ችሎታዎች በብዛት ጥቅም ላይ እንደሚውሉ ይከታተሉ።
5. **ውሳኔዎችን መመዝገብ**: እያንዳንዱን የታይነት ደረጃ ለምን እንደመረጡ ማስታወሻ ይያዙ።
