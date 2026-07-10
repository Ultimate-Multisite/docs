---
title: Kufanana kwezvinoviona
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Kuvira Kufanana (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 inoratidzi **Ability Visibility** controls kuti zvinhu zviri kuita kuti zvinonakidziswe (expose) izvi zvinoreva (abilities). Izvi zvinoitirwa kuti administrators vanedze zvakanaka kuti zvinonakidziswe zvinoreva (agent capabilities) zvichiri kuita kupfungwa kuburikidza ne-REST APIs, MCP servers, WooCommerce integrations, uye interfaces dzine kune zvinhu zvose.

## Ability Visibility ndiyo? {#what-is-ability-visibility}

Ability Visibility ndiyo nzira yekubvumira inotizara:

- **Zvinoreva (abilities) zvinonakidziswe** kuti zvinogona kuita agents
- **Zvinonakidziswe kwazvo** (REST API, MCP, WooCommerce, nhema dzine kune zvinhu zvose)
- **Vanhu vanogona kuona** (kuburikidza ne-allow-lists dze partners)
- **Kuti zvinoreva zviri kuitwa sei** (zvinozivikanwa vs. zvakasiya)

Moyo we ability inoratidzi nzira yekubvumira inotarisirwa kuti izvi zvinhu zvichiri kuita munzvimbo dzakasiyana-siyana.

## Visibility Levels {#visibility-levels}

### Public (Kuvira Kwemweya) {#public}

**Public abilities** zvinogona kuone panguva dzose:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Zvinonakidziswe kwese zvinhu dze users (ne permissions dzine kune zvakanaka)

Zvakare: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Kuvira Kwemweya) {#internal}

**Internal abilities** zvinogona kuone chete munzvimbo yenyu ya WordPress:

- Chat interfaces
- Admin panels
- Users anovaka (logged-in users) chete
- Haina kuonekwa kupfungwa kuburikidza ne-REST API kana integrations dzine kune vanhu vakare.

Zvakare: `manage-settings`, `view-analytics`, `export-data`

### Partner (Kuvira Kwemweya Dze Partners) {#partner}

**Partner abilities** zvinogona kuone chete dze partners dzinovakundwa (whitelisted):

- Inoda kuva munzvimbo dze partner allow-list zvakare
- Zinogona kuonekwa kupfungwa kuburikidza ne-REST API necredentials dze partner
- Zinogona kuonekwa kupfungwa kuburikidza ne-MCP neauthentication dze partner
- Haina kuone vanhu vakare

Zvakare: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Kuvira Kwemweya) {#disabled}

**Disabled abilities** hazvisonogona kuone munzvimbo yakanaka:

- Haina kuonekwa kupfungwa kuburikidza nechinangwa chakanaka
- Haina kuonekwa mu chat
- Haina kuonekwa mu admin panels
- Zvinonakidziswe kuti zviri kuitwa sei (deprecated) kana zvinoreva (experimental)



## Kurudzera Kufamba Kwemabasa (Managing Ability Visibility) {#managing-ability-visibility}

### Kuva Settings kweKurudzera Kufamba Kwemabasa (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. Penda **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klikira pa tab ya **Abilities**
3. Utaona list yezo zvinowanikwa dzese dzinobva nelevel dzako dzakufamba (visibility levels).

### Kuti Uone Zvinobva zveAbility (Viewing Ability Details) {#viewing-ability-details}

Klikira pa ability yenzira kuti uone:

- **Name**: Chiri chiri chezi ability
- **Description**: Izvi zvinotenda iwe izvi ability inotenda
- **Current visibility**: Public, Internal, Partner, kana Disabled
- **Partner allow-list**: Zvinhu zvine partner vanogona kuona (kuti iwe uri Partner visibility)
- **Last updated**: Nenzira visibility yakagadzirwa nguva yakare
- **Status**: Inobva inozivikanwa (Recognized) kana inobva inozivikanwa (Unclassified)

### Kusimbisa Levels dzakufamba Kwemabasa (Changing Visibility Levels) {#changing-visibility-levels}

Kuti usimbise visibility ya ability:

1. Klikira pa ability mu list
2. Chibvumira level yakare yevisibility kubva mu dropdown menu
3. Kana uchibvumira "Partner", shandisa partner identifiers ku allow-list
4. Klikira **Save** (Simba)

Example:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Kuratidza Mabasa Akawanda (Bulk Operations) {#bulk-operations}

Kuti usimbise visibility ya ability dzakawanda:

1. Shika boxes dzakare pa abilities
2. Chibvumira level yakare yevisibility kubva mu dropdown menu yekugadzirisa mabasa akawanda (bulk action)
3. Klikira **Apply** (Simba)

## Partner Allow-List {#partner-allow-list}

**Partner allow-list** inogadzirisa kuti partner vanhu vachakwana vachivimbise ability dzine Partner-level.

### Kuva Partners {#adding-partners}

1. Penda **Superdav AI Agent** → **Settings** → **Partners**
2. Klikira **Add Partner** (Shandisa Partner)
3. Shandisa partner identifier (usually API key kana organization ID)
4. Zvinhu zvakare, shandisa zvinobva nepartner name uye description
5. Klikira **Save**

### Kuti Ability dzine Partners (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

Panguva ya partner yakagadzirwa:

1. Penda ku tabu **Abilities** (Mhinduro)
2. Tsvaga ability inotiri nekuviona na Partner visibility (Uviona wePartner)
3. Chibvumira kuti uende (Edit)
4. Mu chigwisa "Partner allow-list", tsanidza boxes dzakareva ku partner vachinge vachazvo zvinoita access
5. Chibvumira **Save**

### Kupa Access ya Partner {#revoking-partner-access}

Kuti usave access ya partner:

1. Penda ability iye (Edit)
2. Usanidzire box ya partner mu allow-list
3. Chibvumira **Save**

Partner anozvakanisa access ya iye mwedzi wese.

## Abilities dzakavandudzwa (Unclassified Abilities) {#unclassified-abilities}

Kana uri kuita install ability ya third-party inotiri Superdav AI Agent haizvinobvunza, inotiri kuti iwe iwe **Unclassified**.

### Chinyorwa cheAdmin ku Abilities dzakavandudzwa {#admin-notice-for-unclassified-abilities}

Utaona chinyorwa cheadmin:

```
⚠️ Unclassified Abilities Detected

Abilities izvi zvaingobva zvakaisarirwa asi haizvinobvunza:
- custom-import-tool
- external-api-wrapper

Abilities izvi zina dzinogona kuita risikubatsira kana kuramba kune compatibility.
Unoda kuti uone uye utiri iwe.

[Review Abilities] [Dismiss]
```

### Kuone Abilities dzakavandudzwa {#reviewing-unclassified-abilities}

1. Chibvumira **Review Abilities** mu chinyorwa cheadmin
2. Kune ability inotiri, utaona:
   - Zita rinoita uye maunhu anozvinoreva (description)
   - Mhando yakanaka (Source) (iwe munhu/addon unogona kuita iye)
   - Mhando yekubvunza (Suggested visibility level)
   - Kuramba kune security

3. Chigadzira mhando yekubvunza:
   - **Public**: Vina kuita trust; vashandisa panguva yese
   - **Internal**: Usavandudzwa kunoita chete munhu wose weinternal
   - **Partner**: Usavandudzwa kune partner vakareva
   - **Disabled**: Usanogone kuita iye

4. Chibvumira **Classify** kuti usave chigadziriro chako

### Ndiwe nezvikuai Classify Abilities dzakavandudzwa? {#why-classify-unclassified-abilities}

Kuti usave classify abilities:

- **Inokubatsira security**: Unoziva zvakare kana iye inogona kuita
- **Inopinda zvinokanganisa**: Abilities dzakavandudzwa dzinogone kuita risanidzidzwa mwedzi wese
- **Inopa features**: Ndapana iwe classify, ability ine kuita

- **Inodzidzira zvinhu**: Zvinhu zvaunoda kuti usave zvakare (audit)

## Kuvira Kuti Vose Mhando Yese {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Kuvira kwakasiyana (Public abilities)** kunogona kuva kune REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Kuvira kwemaviri (Internal and Partner abilities)** kunogona kuva kune REST API.

### MCP Servers {#mcp-servers}

**Kuvira kwakasiyana (Public abilities)** kunogona kuva kune MCP:

```
MCP Server: Superdav AI Agent
Kuvira kuitika:
- scaffold-block-theme
- activate-theme
- send-email
```

**Kuvira kwemaviri (Internal abilities)** hazi kufanana kuparamu kune MCP.

**Kuvira kwemaviriwe (Partner abilities)** kunogona kuva nekuvusha zvinodiwa dzinobva nepartner credentials chete.

### WooCommerce Integration {#woocommerce-integration}

**Kuvira kwakasiyana (Public abilities)** dzine ruremerero neWooCommerce dzine kugona:

- Kuratidza zvinhu zveproduct
- Kufamba neorder
- Kuunza kunongana necustomer

**Kuvira kwemaviri (Internal abilities)** hazi kufanana kune WooCommerce.

### Chat Interface {#chat-interface}

**Kuvira chinhu chakanaka (All abilities)** (Public, Internal, Partner) chinogona kuva munzvimbo inoshandiswa chat, kunyanya kubva kuita zvinhu nemabhuku ya user:

- Administrators vanogona kuona uvira wese
- Users vakuru vanogona kuona kuvira kwakasiyana (Public abilities) chete
- Partners vanogona kuona Public + Partner abilities (kuti vave vachifananwa/whitelisted)

## Mhinduro Yemashure (Security Best Practices) {#security-best-practices}

### Chii Chakanaka Chekufanana Kune Zvinodiwa (Principle of Least Privilege) {#principle-of-least-privilege}

- Tsvaka kuvira kune chivimbo chinobva nekuita zvinhu zvakanyanya, kunyangwe kunogona kuenda.
- Shandisa kuvira kwemaviriwe (Partner visibility) kuti zvisina kugadzirwa zvakasiyana dzinobva nekuita zvinhu dzine ruremerero.
- Zvave kuvira zvinoshandiswa hazi kufanana.

### Kuratidza Kune Mazuva (Regular Audits) {#regular-audits}

- Rururura kuvira kune mazuva nemazuva
- Rururura kuti zviri kuona kuvira dzakasiyana dzinobva nekuita zvinhu zvisina kugadzirwa
- Zvave kuvira zvinoshandiswa hazi kufanana.

### Kuratidza uye Kufamba (Logging and Monitoring) {#logging-and-monitoring}

- Rururura kuti kuvira kuitika kwakasiyana dzinogona kuita zvakanyanya
- Kuratidza nzira inoshandiswa nepartner
- Tsvaka kana zvinoshandiswa kuvira zvinhu zvose zviri kuitika (unusual ability usage)

### Kuvira Kwemabhuku Epanzira (Third-Party Abilities) {#third-party-abilities}

- Rururura kuvira kwemabhuku epanyira panguva unogona kuita zvakasiyana dzinobva nekuvusha
- Tsvaka zvinoshandiswa zvine ruremerero chete
- Zvave kuvira kune Internal kana Partner chete pane kuti zvinhu zviri kuitika (vetting)



## Kutiro (Troubleshooting) {#troubleshooting}

**Kutiro (Ability) haingakasi ku listi**
- Chika kuti ability inoshandiswa uye inachivire (installed and active).
- Saka kuti plugin/addon inoshandiswa.
- Refresh page.

**Ndinokwanisa kunge kuratidza visibility ya ability**
- Chika kuti unenge uine permissions dze administrator.
- Chika kuti plugin inoshandiswa haingakutanga (locked).
- Try disabling conflicting plugins.

**Partner haanokwanisa kuenda munzvimbo ye ability**
- Chika kuti partner anenge akaita kwenye (allow-list).
- Chika kuti visibility ya ability inenge yakaitwa "Partner".
- Confirm kuti credentials dze partner dzine kuratidza zvakanaka.
- Check API logs kuti pane matambudziko ekutanga (authentication errors).

**Abilities haziingazivikanwa dziri kuenda**
- Review uye chivire (classify) zvinoshandiswa mu admin notice.
- Chika kuti classification yako yakaitwa.
- Verify kuti plugin inoshandisa ability inenge inoshandiswa zvakare (up to date).

## Kuratidza kubva munzvimbo ya Zvinhu Zvinotanga (Migration from Legacy Mode) {#migration-from-legacy-mode}

Kana uri kuenda kubva munzvimbo yakare ya Superdav AI Agent:

- Zvinoshandiswa zvinotanga zvose zvichivire kuti Public.
- Review uye zvisarudzi visibility zvakare zvakaita seunoda.
- Hakuna chirevo rakanaka kana unoda kuita kuratidza access.

Chirare **Third-Party Mode Migration** kune zvinangwa zvakawanda pamusoro pekuenda kubva munzvimbo ya API ya Abilities integration inoshandiswa nezinowakanisa (native).

## Zvinhu Zvinotanga (Next Steps) {#next-steps}

Panguva unenge uri kuratidza visibility ya ability:

1. **Review your abilities**: Chika zvinoshandiswa zvose zveability.
2. **Classify unclassified abilities**: Respond ku admin notices.
3. **Set up partners**: Add partners kana unenge uri kushandisa Partner visibility.
4. **Monitor usage**: Track kuti ability inozivikanwa zvakawanda.
5. **Document decisions**: Ramba uine notes pamusoro pezvaiita zvinokwanisa (visibility levels) zvinokwanisa.
