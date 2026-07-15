---
title: Khawv txhob paub
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# ការមើលឃើញសមត្ថភាព (Ability Visibility)

Superdav AI Agent v1.12.0 ໄດ້ណែនាំការគ្រប់គ្រង **Ability Visibility** ដែលគ្រប់គ្រងថា តើផ្ទៃ (surfaces) នីមួយៗបង្ហាញសមត្ថភាព (ability) ណាខ្លះ។ ការធ្វើបែបនេះអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងកែតម្រូវបានយ៉ាងល្អិតល្អន់ថា សមត្ថភាពរបស់ Agent អាចប្រើបានតាមរយៈ REST APIs, MCP servers, WooCommerce integrations និងចំណុចប្រទាក់ផ្សេងៗទៀត។

## Ability Visibility ជាអ្វី? {#what-is-ability-visibility}

Ability Visibility គឺជាប្រព័ន្ធអនុញ្ញាតមួយដែលគ្រប់គ្រង៖

- **សមត្ថភាពណាខ្លះ** ដែលមានសម្រាប់ Agent
- **ទីតាំងដែលវាត្រូវបានបង្ហាញ** (REST API, MCP, WooCommerce, ល)
- **អ្នកណាអាចចូលប្រើបាន** (តាមរយៈ partner allow-lists)
- **របៀបដែលវាត្រូវបានចាត់ថ្នាក់** (ទទួលស្គាល់ vs. មិនទទួលស្គាល់)

សមត្ថភាពនីមួយៗមានកម្រិតនៃការមើលឃើញ ដែលកំណត់ពីលទ្ធភាពរបស់វាឆ្លងកាត់ផ្ទៃផ្សេងៗគ្នា។

## កម្រិតនៃការមើលឃើញ (Visibility Levels) {#visibility-levels}

### សាធារណៈ (Public) {#public}

**សមត្ថភាពសាធារណៈ** អាចប្រើបានគ្រប់ទីកន្លែង៖

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- តួនាទីអ្នកប្រើប្រាស់ទាំងអស់ (ជាមួយនឹងការអនុញ្ញាតសមស្រប)

ឧទាហរណ៍: `scaffold-block-theme`, `activate-theme`, `send-email`

### ផ្ទៃក្នុង (Internal) {#internal}

**សមត្ថភាពផ្ទៃក្នុង** មានតែនៅក្នុងការដំឡើង WordPress របស់អ្នកប៉ុណ្ណោះ៖

- Chat interfaces
- Admin panels
- អ្នកប្រើប្រាស់ដែលបានចូលគណនីរួចហើយប៉ុណ្ណោះ
- មិនត្រូវបានបង្ហាញតាមរយៈ REST API ឬ integrations ខាងក្រៅទេ

ឧទាហរណ៍: `manage-settings`, `view-analytics`, `export-data`

### ដៃគូ (Partner) {#partner}

**សមត្ថភាពដៃគូ** មានតែសម្រាប់ដៃគូដែលបានចុះបញ្ជីអនុញ្ញាតប៉ុណ្ណោះ៖

- ទាមទារការបញ្ចូលក្នុង partner allow-list ដោយច្បាស់លាស់
- អាចប្រើបានតាមរយៈ REST API ជាមួយនឹងព័ត៌មានសម្ងាត់របស់ដៃគូ
- អាចប្រើបានតាមរយៈ MCP ជាមួយនឹងការផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់ដៃគូ
- មិនអាចប្រើបានសម្រាប់អ្នកប្រើប្រាស់ធម្មតាទេ

ឧទាហរណ៍: `bulk-import-users`, `modify-billing`, `access-analytics`

### បិទ (Disabled) {#disabled}

**សមត្ថភាពដែលត្រូវបានបិទ** មិនអាចប្រើបាននៅទីណាទាំងអស់៖

- មិនត្រូវបានបង្ហាញតាមរយៈផ្ទៃណាមួយទេ
- មិនមាននៅក្នុង chat
- មិនមាននៅក្នុង admin panels
- មានប្រយោជន៍សម្រាប់សមត្ថភាពដែលហួសសម័យ ឬកំពុងសាកល្បង

## ការគ្រប់គ្រងការមើលឃើញសមត្ថភាព (Managing Ability Visibility) {#managing-ability-visibility}

### ចូលទៅមើលការកំណត់ការមើលឃើញសមត្ថភាព (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. ໄປທີ່ **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. ចុចលើแท็บ **Abilities**
3. អ្នកនឹងឃើញបញ្ជីនៃសមត្ថភាពទាំងអស់ដែលបានដំឡើង រួមជាមួយកម្រិតនៃការមើលឃើញរបស់វា។

### មើលព័ត៌មានលម្អិតនៃសមត្ថភាព (Viewing Ability Details) {#viewing-ability-details}

ចុចលើសមត្ថភាពណាមួយដើម្បីមើល៖

- **Name**: លេខសម្គាល់នៃសមត្ថភាពនោះ
- **Description**: សមត្ថភាពនោះធ្វើអ្វីខ្លះ
- **Current visibility**: សាធារណៈ (Public), ផ្ទៃក្នុង (Internal), ដៃគូ (Partner), ឬ បិទ (Disabled)
- **Partner allow-list**: តើដៃគូណាខ្លះអាចចូលប្រើបាន (ប្រសិនបើជាការមើលឃើញរបស់ Partner)
- **Last updated**: កាលបរិច្ឆេទដែលការមើលឃើញត្រូវបានផ្លាស់ប្តូរចុងក្រោយ
- **Status**: ត្រូវបានទទួលស្គាល់ (Recognized) ឬ Chưaកំណត់ប្រភេទ (Unclassified)

### ការផ្លាស់ប្តូរកម្រិតនៃការមើលឃើញ (Changing Visibility Levels) {#changing-visibility-levels}

ដើម្បីផ្លាស់ប្តូរការមើលឃើញនៃសមត្ថភាពមួយ៖

1. ចុចលើសមត្ថភាពនោះក្នុងបញ្ជី
2. ជ្រើសរើសកម្រិតនៃការមើលឃើញថ្មីពីបញ្ជីទម្លាក់ចុះ (dropdown)
3. ប្រសិនបើអ្នកជ្រើសរើស "Partner" សូមបន្ថែមលេខសម្គាល់ដៃគូទៅក្នុងបញ្ជីអនុញ្ញាត (allow-list)
4. ចុច **Save**

ឧទាហរណ៍៖

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### ប្រតិបត្តិការច្រើន (Bulk Operations) {#bulk-operations}

ដើម្បីផ្លាស់ប្តូរការមើលឃើញសម្រាប់សមត្ថភាពជាច្រើន៖

1. ចុចលើប្រអប់ធីកនៅជាប់នឹងសមត្ថភាពនីមួយៗ
2. ជ្រើសរើសកម្រិតនៃការមើលឃើញថ្មីពីបញ្ជីសកម្មភាពច្រើន (bulk action dropdown)
3. ចុច **Apply**

## បញ្ជីអនុញ្ញាតដៃគូ (Partner Allow-List) {#partner-allow-list}

**partner allow-list** គ្រប់គ្រងថាដៃគូខាងក្រៅណាខ្លះដែលអាចចូលប្រើសមត្ថភាពកម្រិត Partner បាន។

### ការបន្ថែមដៃគូ (Adding Partners) {#adding-partners}

1. ទៅកាន់ **Superdav AI Agent** → **Settings** → **Partners**
2. ចុចលើ **Add Partner**
3. បញ្ចូលលេខសម្គាល់ដៃគូ (ជាធម្មតាគឺ API key ឬ organization ID)
4. ជាជម្រើស សូមបន្ថែមឈ្មោះ និងការពិពណ៌នារបស់ដៃគូ
5. ចុច **Save**

### ការកំណត់សមត្ថភាពដល់ដៃគូ (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

បន្ទាប់ពីបានបន្ថែមដៃគូហើយ៖

1. ໄປທີ່ **Abilities** tab (Tab ຂອງຄວາມສາມາດ)
2. ຊອກຫາ ability ທີ່ມີ Partner visibility (ການເຫັນຂອງຄູ່ຮ່ວມງານ)
3. ຄລິກເພື່ອແກ້ໄຂ
4. ໃນສ່ວນ "Partner allow-list" (ລາຍຊື່ອະນຸຍາດຄູ່ຮ່ວມງານ), ເລືອກວົງເລັບສຳລັບຄູ່ຮ່ວມງານທີ່ຈະຕ້ອງມີການເຂົ້າເຖິງ
5. ຄລິກ **Save** (ບັນທຶກ)

### ການຍົກເລີກການເຂົ້າເຖິງຂອງຄູ່ຮ່ວມງານ {#revoking-partner-access}

ເພື່ອເອົາການເຂົ້າເຖິງຂອງຄູ່ຮ່ວມງານອອກ:

1. ແກ້ໄຂ ability ນັ້ນ
2. ປິດວົງເລັບຂອງຄູ່ຮ່ວມງານໃນ allow-list
3. ຄລິກ **Save** (ບັນທຶກ)

ຄູ່ຮ່ວມງານຈະສູນເສຍການເຂົ້າເຖິງ ability ນັ້ນທັນທີ.

## Unclassified Abilities (Ability ທີ່ບໍ່ໄດ້ຈັດປະເພດ) {#unclassified-abilities}

ເມື່ອທ່ານຕິດຕັ້ງ ability ຂອງແພທ-ທາຣີດີ (third-party ability) ທີ່ Superdav AI Agent ບໍ່ຮັບຮູ້, ມັນຈະຖືກໝາຍວ່າເປັນ **Unclassified** (ບໍ່ໄດ້ຈັດປະເພດ).

### Admin Notice ສຳລັບ Unclassified Abilities {#admin-notice-for-unclassified-abilities}

ເຈົ້າຈະເຫັນຂໍ້ຄວາມສຳລັບ admin:

```
⚠️ Unclassified Abilities Detected

Ability ຂ້າງລຸ່ມນີ້ຖືກຕິດຕັ້ງແລ້ວ ແຕ່ບໍ່ໄດ້ຮັບການຮັບຮູ້:
- custom-import-tool
- external-api-wrapper

Ability ເຫຼົ່ານີ້ອາດຈະມີຄວາມສ່ຽງດ້ານຄວາມປອດໄພ ຫຼື ຄວາມເຂົ້າກັນໄດ້.
ກະລຸນາທົບທວນ ແລະ ຈັດປະເພດມັນ.

[Review Abilities] [Dismiss]
```

### ການທົບທວນ Unclassified Abilities {#reviewing-unclassified-abilities}

1. ຄລິກ **Review Abilities** (ທົບທວນ ability) ໃນຂໍ້ຄວາມນັ້ນ
2. ສຳລັບ ability ທີ່ບໍ່ໄດ້ຈັດປະເພດແຕ່ລະອັນ, ເຈົ້າຈະເຫັນ:
   - ຊື່ ແລະ ຄຳອະທິບາຍຂອງ ability
   - ແຫຼ່ງຂໍ້ມູນ (plugin/addon ໃດຕິດຕັ້ງມັນ)
   - ລະດັບການເຫັນທີ່ແນະນຳ (Suggested visibility level)
   - ການປະເມີນຄວາມປອດໄພ (Security assessment)

3. ເລືອກລະດັບການເຫັນ:
   - **Public** (ສາທາລະນະ): ໄວ້ວາງໃຈ ability ນັ້ນ; ໃຫ້ມັນເປີດເຜີຍທຸກບ່ອນ
   - **Internal** (ພາຍໃນ): ຈຳກັດໃຊ້ພາຍໃນເທົ່ານັ້ນ
   - **Partner** (ຄູ່ຮ່ວມງານ): ຈຳກັດໃຫ້ຄູ່ຮ່ວມງານສະເພາະໃສ່
   - **Disabled** (ປິດການໃຊ້ງານ): ຢ່າໃຊ້ ability ນີ້

4. ຄລິກ **Classify** (ຈັດປະເພດ) ເພື່ອບັນທຶກການຕັດສິນໃຈຂອງເຈົ້າ

### ເປັນຫຍັງຕ້ອງ Classify Unclassified Abilities? {#why-classify-unclassified-abilities}

ການຈັດປະເພດ ability:

- **ເພີ່ມຄວາມປອດໄພ**: ເຈົ້າໄດ້ອະນຸຍາດຢ່າງຊັດເຈນວ່າຈະເປີດເຜີຍຫຍັງ
- **ປ້ອງກັນຂໍ້ຜິດພາດ**: Ability ທີ່ບໍ່ໄດ້ຈັດປະເພດແມ່ນຖືກປິດການໃຊ້ງານໂດຍຄ່າເລີ່ມຕົ້ນ
- **ເຮັດໃຫ້ມີຟັງຊັນ**: ເມື່ອຖືກຈັດປະເພດແລ້ວ, ability ນັ້ນຈະສາມາດນຳໃຊ້ໄດ້
- **ບັນທຶກການຕັດສິນໃຈ**: ການເລືອກຂອງເຈົ້າຈະຖືກບັນທຶກໄວ້ເພື່ອການກວດສອບ

## Visibility in Different Surfaces {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public abilities** chuav available thav via REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal and Partner abilities** chuav not available via REST API.

### MCP Servers {#mcp-servers}

**Public abilities** chuav available via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** chuav not exposed via MCP.

**Partner abilities** chuav available only with partner credentials.

### WooCommerce Integration {#woocommerce-integration}

**Public abilities** related to WooCommerce chuav available:

- Product management (thiv loj)
- Order processing (loji order)
- Customer communication (kuaa hlub)

**Internal abilities** chuav not exposed to WooCommerce.

### Chat Interface {#chat-interface}

**All abilities** (Public, Internal, Partner) chuav available in chat, depending on user permissions:

- Administrators see all abilities (Administrator chuav tsoom tsoom ability)
- Regular users see only Public abilities (User thav tsoom public ability)
- Partners see Public + Partner abilities (if whitelisted - thav tsoom partner ability)

##  solucionar {#security-best-practices}

**Ability-a tsis muau hauv ha lú**
- Kualj tsis muaj, ability-a install ha active (kualj tsis muaj, ability-a install ha active)
- Kualj plugin/addon-a enabled (kualj plugin/addon-a enable)
- Refresh the page (refresh the page)

**Kuv tsis muaj khawses tsis muau hauv visibility**
- Verify you have administrator permissions (verify kualj muaj admin permission)
- Check that the ability isn't locked by a plugin (check kualj ability tsis lock ooves by plugin)
- Try disabling conflicting plugins (try disable conflicting plugin)

**Partner tsis muaj khawses ha ability**
- Verify the partner is in the allow-list (verify partner tsis ha allow-list)
- Check that the ability's visibility is set to Partner (check kualj ability visibility set to Partner)
- Confirm the partner's credentials are correct (confirm partner credential correct)
- Check API logs for authentication errors (check API log for error authentication)

**Ability tsis muaj classification keep appearing**
- Review and classify them in the admin notice (review ha classify them ha admin notice)
- Check that your classification was saved (check kualj classification save)
- Verify the plugin providing the ability is up to date (verify plugin provide ability update)

## Migration tu Mode Legacy {#principle-of-least-privilege}

If you're upgrading from an older version of Superdav AI Agent:

- All existing abilities are automatically classified as Public (all existing ability automatic classify as Public)
- Review and adjust visibility as needed (review ha adjust visibility kualj thlaj)
- No action required unless you want to restrict access (no action required unless you want restrict access)

See **Third-Party Mode Migration** for more details on the transition to native Abilities API integration.

## Next Steps {#regular-audits}

After configuring ability visibility:

1. **Review your abilities**: Audit all installed abilities (review kualj ability: audit all install ability)
2. **Classify unclassified abilities**: Respond to admin notices (classify ability tsis classify: respond ha admin notice)
3. **Set up partners**: Add partners if using Partner visibility (set up partner: add partner if use Partner visibility)
4. **Monitor usage**: Track which abilities are used most (monitor usage: track ability which use most)
5. **Document decisions**: Keep notes on why you chose each visibility level (document decision: keep note why choose each visibility level)
