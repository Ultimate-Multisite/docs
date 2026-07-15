---
title: Awoodda Muujinta
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Muujinta Aragtida (Ability Visibility)

Superdav AI Agent v1.12.0 waxay soo bandhigaysaa mareegga **Muujinta Awoodda (Ability Visibility)** kaas oo maamulaya waxa ay meelay u soo bandhiga awood kasta. Tani waxay u oggolaanaysaa maamulayaasha inay si fiican u hagaajiyaan noocyada awoodda ee agent-ka laga heli karo REST APIs, MCP servers, WooCommerce integrations, iyo interface kale oo la mid ah.

## Waa maxay Muujinta Awoodda (Ability Visibility)? {#what-is-ability-visibility}

Muujinta Awoodda waa nidaam oggolaansho (permission system) kaas oo maamulaya:

- **Waa noocyada awoodda** ee agent-ka loogu talagalay
- **Meel ay u soo bandhigaan** (REST API, MCP, WooCommerce, iwm.)
- **Qof kasta oo heli karo** (iyadoo la isticmaalayo liisaska oggolaanshaha ee shaqeynta)
- **Sida loo kala saaro** (oo la aqoonsan yahay vs. aan la aqoonsanayn)

Awood kasta wuxuu leeyahay heer muujinta oo go'aamiya meesha uu kuugu heli karo dhammaan meelaha kala duwan.

## Heerarka Muujinta (Visibility Levels) {#visibility-levels}

### Guud (Public) {#public}

**Awoodda guud** waxay ku heli karaan dhammaan meelaha:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Dhammaan qaybta isticmaalayaasha (iyadoo la isticmaalayo oggolaanshaha saxda ah)

Tusaale: `scaffold-block-theme`, `activate-theme`, `send-email`

### Gudaha (Internal) {#internal}

**Awoodda gudaha** waxay ku heli karaan oo kaliya warshadaha WordPress-kaaga:

- Chat interfaces
- Admin panels
- Isticmaalayaasha la soo galay oo kaliya
- Ma soo bandhigin REST API ama isdhaafsado dibadda ah

Tusaale: `manage-settings`, `view-analytics`, `export-data`

### Shaqeynta Wasaareed (Partner) {#partner}

**Awoodda shaqeynta wasaareed** waxay ku heli karaan kuwa la liisay (whitelisted partners):

- Waxay u baahan tahay in la dariyo si cad liiska oggolaanshaha ee shaqeynta
- Waxaa la heli karaa REST API iyadoo la isticmaalayo macluumaadka shaqeynta wasaareedka
- Waxaa la heli karaa MCP iyadoo la isticmaalayo aqoonsiga shaqeynta wasaareedka
- Ma heli karaan isticmaalayaasha caadiga ah

Tusaale: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dibadda (Disabled) {#disabled}

**Awoodda dibadda ah** ma heli karaan meel kasta:

- Ma soo bandhigin wax meel ah
- Ma ku haysan chat
- Ma ku haysan admin panels
- Waxay caawiyaan awoodaha horeyeyay ama kuwa isku dayay



## Maareyntaanka Aragtida Maareynta {#managing-ability-visibility}

### Isticmaalka Dejinta Aragtida (Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. Tag **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Guji tab-ka **Abilities** (Awooddaaha)
3. Waxaad arki doontid liis oo ah dhammaan awoodaha la soo dejiyay iyo heerarka ay u muuqdaan

### Aragtida Faahfaahinta Awooddaaha {#viewing-ability-details}

Guuji awood kasta si aad u aragto:

- **Name** (Magaca): Waxa uu yahay cidda aqoonsada awoodda
- **Description** (Sharaxaad): Waa maxay ay awooddu qabato
- **Current visibility** (Aragtida Hadda ah): Public, Internal, Partner, ama Disabled (Xirfad la xiray)
- **Partner allow-list**: Waa meelaha ay partner-kaashu u heli karaan (haddii aragtida Partner ah)
- **Last updated** (Marka la cusboonaysiiyay): Marka la beddelay aragtida ugu dambeeyay
- **Status** (Xaaladda): Ma la aqoonsan yahay mise aan la kala saarin

### Beddelidda Heerarka Aragtida {#changing-visibility-levels}

Si aad u beddesho aragtida awood:

1. Guji awooddaas ee liiska
2. Dooro heer aragti cusub oo ka soo qaado dropdown-ka (doorkii)
3. Haddii aad doorato "Partner", ku dar cidda aqoonsada partner-kaashka (allow-list)
4. Guji **Save** (Kaydi)

Tusaale:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Hawlaha Weyn (Bulk Operations) {#bulk-operations}

Si aad u beddesho aragtida awood badan oo isku ah:

1. Guji sanduuqaska (checkboxes) ee dhanka awoodaha
2. Dooro heer aragti cusub oo ka soo qaado dropdown-ka hawsha weyn (bulk action)
3. Guji **Apply** (Applies)

## Liiska Partner-kaashka (Partner Allow-List) {#partner-allow-list}

**partner allow-list** wuxuu maareeyaa cidda u heli karto awoodaha heerka Partner-kaashka ah.

### Ku Daridda Partner-kaashka {#adding-partners}

1. Tag **Superdav AI Agent** → **Settings** → **Partners**
2. Guji **Add Partner** (Ku dar partner)
3. Gel cidda aqoonsada partner-kaashka (badankood waa API key ama Organization ID)
4. Waxaad dooran kartaa inaad ku darno magaca iyo sharraxaadda partner-kaashka
5. Guji **Save** (Kaydi)

### U Qeexidda Awoodaha Partner-kaashka ah ee Partner-kaashka {#assigning-abilities-to-partners}

Marka aad u daray partner:

1. Tagga tabka **Abilities**-ka tag.
2. Raadi awood (ability) oo lahayd aragti Partner-ka ah.
3. Guji si aad u hagaajiso (edit).
4. Qaybta "Partner allow-list" ee, hub qoraalka (boxes) kuwa partner-ka ah ee loo baahan yahay inay helaan fursad.
5. Guji **Save** (Kaydi).

### Xiridda Fursadda Partner-ka Ah {#revoking-partner-access}

Si aad u ka saarto isticmaalka partner-ka:

1. Hagaajso awoodda (ability)-ga.
2. Ka saar qoraalka (uncheck) box-ka partner-ka ah ee allow-list-ka.
3. Guji **Save** (Kaydi).

Partner-ku si degdeg ah wuxuu ka baqayaa isticmaalka awooddaas.

## Abilities-ka Aan La Qaybaysan {#unclassified-abilities}

Marka aad ku rakibto awood saddexaad oo Superdav AI Agent uusan aqoon u lahayn, waxay lagu calaamaysaa **Unclassified** (Aan La Qaybaysan).

### Ogeysiis Maamulaha ee Abilities-ka Aan La Qaybaysan {#admin-notice-for-unclassified-abilities}

Waxaad arki doontaa ogeysiis maamul ah:

```
⚠️ Unclassified Abilities Detected

Abilities-ka soo socda waxaa lagu rakibay laakiin ma la aqoonsan:
- custom-import-tool
- external-api-wrapper

Abilities-kan waxay keeni karaan khatar amniga ama isku dhafka (compatibility).
Fadlan dib u eeg oo kala saar.

[Review Abilities] [Dismiss]
```

### Dib U Eegista Abilities-ka Aan La Qaybaysan {#reviewing-unclassified-abilities}

1. Guji **Review Abilities** (Dib U Eegista Abilities) ee ogeysiga.
2. Marka aad dib u eegto awood kasta oo aan la qaybaysan, waxaad arki doontaa:
   - Magaca iyo sharraafka awoodda (Ability name and description)
   - Ilaha ay ka soo baxday (Plugin/addon-ka rakibay)
   - Heeltaabka aragti ee la soo jeediyay (Suggested visibility level)
   - Qiimaynta amniga (Security assessment)

3. Dooro heer aragti:
   - **Public** (Guud): Isku hubi awoodda; si ballaaran u fujiyo
   - **Internal** (Dhaqso ah): U deji isticmaalka gudaha kaliya
   - **Partner** (Partner): U deji partner-ka gaarka ah
   - **Disabled** (Ka xiray): Ha isticmaalin awooddan

4. Guji **Classify** (Kala saar) si aad u kaydiso go'aankaaga.

### Maxaa Loo Kala Saara Abilities-ka Aan La Qaybaysan? {#why-classify-unclassified-abilities}

Kala saarka abilities-ka:

- **Waxa uu horumariyey amniga**: Waxaad si cad u ogolaataa waxa la soo bandhigayo
- **Waxay ka horjoogsataa dhaca**: Abilities-ka aan la qaybaysan waxaa laga xirayaa default (default)
- **Waxay fududaysaa astaamaha**: Marka la kala saaro, awoodda ayaa la heli karaa
- **Waxa uu dukumeentiyeeyaa go'aanka**: Doorooyinkaagu waxaa lagu kaydiyaa si loo hubiyo

---

## ئاسانلو لەسەر ڕووبارە جیاوازەکاندا بینراوێنان {#visibility-in-different-surfaces}

### REST API {#rest-api}

**توانایی جیهانی (Public abilities)** دەکرێت بە ڕێگەی REST endpointsەوە بەکاربهێنرێت:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**توانایە ناوخۆیی و هاوبەشیکراوەکان (Internal and Partner abilities)** بە ڕێگەی REST APIیەوە بەکارنەهێنرێت.

### MCP Servers {#mcp-servers}

**توانای جیهانی (Public abilities)** دەکرێت بە ڕێگەی MCP بەکاربهێنرێت:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**توانایە ناوخۆییەکان (Internal abilities)** لەسەر MCP نیشان دەدرێن.

**توانایەکانی هاوبەشیکراوەکان (Partner abilities)** تەنها بە کارگێڕی هاوبەشیکراوەکانی دەکرێت بەکاربهێنرێت.

### WooCommerce Integration {#woocommerce-integration}

**توانایە جیهانییەکان (Public abilities)** پەیوەست بە WooCommerce دەکرێن:

- بەڕێوەبردنی بەرهەم
- پڕۆسێسینگەی داواکارییەکان
- پەیوەندی کارپێکراو

**توانایە ناوخۆییەکان (Internal abilities)** بۆ WooCommerce نیشان دەدرێن.

### Chat Interface {#chat-interface}

**هەموو تواناکان** (جیهانی، ناوخۆیی، هاوبەشیکراوەکانی) لە چاتدا بەکارنەهێنرێت، بەپێی ڕێزمانی بەکارهێنەر:

- بەڕێوەبەران هەموو تواناکان دەبینن
- بەکارهێنەرانی ئاسایی تەنها توانای جیهانییان دەبینن
- هاوبەشیکراوان (ئەگەر لیست بکرێن) توانای جیهانی و توانای هاوبەشیکراوەکان دەبینن

## باشترین شێوازی پاراستبوون لەسەر بنەمای ئاسانترین تایبەتمەندییەکان {#security-best-practices}

### بنەمای کەمترین ئەوەی پێویستە (Principle of Least Privilege) {#principle-of-least-privilege}

- تواناکان بە ئەو ڕێگەیەک دیاری بکە کە زیاتردا کراوە و 여هودا بتوانن بەکاربهێنرێت
- بۆ کارە هەستیارەکان، لەسەر توانای هاوبەشیکراوەکانی بەکاربێنە
- تواناکان کە بەکارنەهێنیت ناتوانن بەکاربهێنە

### پشکنینەکانی ڕێکخستراو (Regular Audits) {#regular-audits}

- هەموو مانگێک بینینی بینراوێنان
- بۆ تواناکانی ناڕێکخراو یان نەدۆزراوەکان بگەڕێ
- دەستکاریی دەستگەیشتن لەلایەن هاوبەشیکراوەکانی بەکارنەهێنرێت

### تۆمارکردن و چاودێری (Logging and Monitoring) {#logging-and-monitoring}

- چ ئەو تواناکانەی زیاتر بەکارهاتوون دیاری بکە
- شێوازی دەستگەیشتنی هاوبەشیکراوان لەسەر ڕێنمایی بکە
- ئاگادار بێت ئەگەر بەکارھێنانی نایارێکی توانایەک

### تواناکانی سێیەم (Third-Party Abilities) {#third-party-abilities}

- پێش چالاککردن، تواناکانی سێیەم فێر بکە
- بە شێوەیەکی ڕوون و دیار بۆیان پۆلێن بکە
- لەگەڵ توانای ناوخۆیی یان هاوبەشیکراوەکانی دەست پێ بکە
- تەنها دوای چاککردنەوە (Vetting) بۆ جیهانی بکەرەوە

## Wax-dhaafidda (Troubleshooting) {#troubleshooting}

**Awoodda (Ability) ma aanay ku muuqanaya liiska**
- Hubi in awooddu la soo dejiyay oo ay socoto (active).
- Hubi in plugin/addon-ka uu furan yahay.
- Dib u soo celinta bogga (Refresh the page).

**Ma beddeli karo aragti (visibility) ee awoodda**
- Hubi inaad leedahay fursadaha maamulaha (administrator permissions).
- Hubi in awooddu plugin kale ku xirna (locked by a plugin).
- Isku day inaad ka saarto plugin-yada isku dhaca.

**Wixii la shaqeeyay (partner) ma heli karo awoodda**
- Hubi in wiilkaas uu yahay mid lagu oggolaado (allow-list).
- Hubi in aragti awooddu ay ku dejisay "Partner".
- Hubi in macluumaadka wiilkaas uu sax yahay.
- Hubi log-yada API-ga aad ka eegto qaladkii aqoonsiga (authentication errors).

**Awoodaha aan la kala saarin ayaa sii soo muuqda**
- Eeg oo kala saar kuwa admin-ka ku jira warqadaha (admin notice).
- Hubi in kala saaristaada ay la kaydsay.
- Hubi in plugin-ka bixiyay awoodda uu yahay mid cusub (up to date).

## Ku guurista Mode-ka Qadiimiga ah (Migration from Legacy Mode) {#migration-from-legacy-mode}

Haddii aad ka qaadaysid nooc hore oo Superdav AI Agent:

- Awood kasta oo jira ayaa si toos ah loo kala saaray "Public".
- Eeg oo hagaaji aragti awoodda sida loo baahan yahay.
- Ma jirto wax la qabto haddii aad rabto inaad xaddiddo helitaanka (restrict access).

Waxaad ka heli kartaa faahfaahin dheeraad ah ku saabsan ku guurista Mode-ka Qalabka Saddexaad (**Third-Party Mode Migration**) si aad u ogaato sida loo guuro isku-dhafka API-ga Awoodda (Abilities API).

## Tallaabooyinka Xiga (Next Steps) {#next-steps}

Marka aad dejisay aragti awoodda:

1. **Eeg awoodahaaga**: Hubi dhammaan awoodaha la soo dejiyay
2. **Kala saar awoodaha aan la kala saarin**: Ka jawaab warqadaha admin-ka
3. **U diyaari wiilal (partners)**: Ku dar wiilalka haddii aad isticmaalayso aragti Partner
4. **La socodka isticmaalka**: Hubi awoodda ay ugu badan yihiin kuwa la isticmaalay
5. **Qor dukumentiirro (Document decisions)**: Ilaali qoraallo ku saabsan sababta aad dooratay heer kasta oo aragti ah
