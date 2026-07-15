---
title: Uburyo bwo gushobora kubona
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Uburyo Ubwumuryo (Ability Visibility)

Superdav AI Agent v1.12.0 yitangira **Uburyo Ubwumuryo** (Ability Visibility) uburyo bwo gukoresha uburenganzira bwo kumenya ibyerekezo by'uburyo bw'uburyo (abilities) byo kubyara ku ntego zikoreshwa. Ibi bituma abanyamwuga (administrators) guhindura uburyo uburyo bwo kubyara ku ntego zikoreshwa mu gihe cyo gukoresha REST API, MCP servers, WooCommerce integrations, no ibindi byerekezo by'ibindi.

## Uburyo Ubwumuryo ni iki? {#what-is-ability-visibility}

Uburyo Ubwumuryo ni uburyo bwo gukora uburenganzira (permission system) bwo kumenya:

- **Ibyerekezo** byo kubyara ku ntego zikoreshwa
- **Yitangira aho** (REST API, MCP, WooCommerce, n'ibindi)
- **Abantu bashobora gukoresha** (bujya uburyo bwo kwumva mu rwego rwa partner allow-lists)
- **Uburyo bwo kubyara ku ntego zikoreshwa** (uburyo bw'ubwumva cyangwa ubwumva bwo kubyara)

Kubwo byo bya ubwumva, byishobora gukoresha mu gihe cyo gukoresha ibindi.

## Ibyerekezo By'Uburyo Ubwumuryo (Visibility Levels) {#visibility-levels}

### Public (Icyo Cyose) {#public}

**Ibyerekezo by'uburyo bw'uburyo (Public abilities)** byishobora gukoreshwa mu gihe cyose:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Ubwoko bwose bwo abantu (n'ibyo bafite uburenganzira bwiza)

Urugero: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Bwa Bakoresha Muho) {#internal}

**Ibyerekezo by'uburyo bw'uburyo (Internal abilities)** byishobora gukoreshwa mu gihe cyo gukoresha WordPress yawe gusa:

- Chat interfaces
- Admin panels
- Abantu bashobora gukoresha (logged-in users) gusa
- Biyitangira mu gihe cyo gukoresha REST API cyangwa ibindi byerekezo by'ibindi

Urugero: `manage-settings`, `view-analytics`, `export-data`

### Partner (Bwa Partner) {#partner}

**Ibyerekezo by'uburyo bw'uburyo bwa partner (Partner abilities)** byishobora gukoreshwa ku batereye bafite ubwumva (whitelisted partners) gusa:

- Biyumva mu gihe cyo gukoresha REST API n'ibyo bafite uburenganzira bw'uburyo bwa partner
- Biyumva mu gihe cyo gukoresha MCP n'ubwumva bwa partner
- Biyumva ku batereye (regular users)

Urugero: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Bwiboneka) {#disabled}

**Ibyerekezo by'uburyo bw'uburyo bwa bwarashyirwe (Disabled abilities)** byishobora gukoreshwa mu gihe cyose:

- Biyitangira mu gihe cyo gukoresha ibindi
- Biyumva mu chat
- Biyumva mu admin panels
- Byari yiza ku byerekezo by'uburyo bw'uburyo bwarashyirwe (deprecated) cyangwa byo bitangira



## Gukoresha Ubwumuryo W'Ubwumva {#managing-ability-visibility}

### Gutangira Ubwumuryo W'Ubwumva (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. Tunda ku **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Clickye tab ya **Abilities**
3. Uza kubona list yose y'ability zizikoreshwa n'ubwumuryo bwo kuvuga (visibility levels)

### Gukoresha Ubwumva Bwo Ability (Viewing Ability Details) {#viewing-ability-details}

Clickye ku ability runa kugira ngo ubonde:

- **Name**: Icyemezo cy'ability
- **Description**: Icyo ability ikora
- **Current visibility**: Public, Internal, Partner, cyangwa Disabled
- **Partner allow-list**: Abanyamwuga (partners) bashobora gukoresha (niba ubwumuryo bwo Partner)
- **Last updated**: Icyo gihe ubwumuryo bwagize uburyo bwo guhindurwa
- **Status**: Yabonewe cyangwa Yaboneje

### Guhindura Ubwumuryo Bwo Kuvuga (Changing Visibility Levels) {#changing-visibility-levels}

Kugira ngo uhindure ubwumuryo bwo kuvuga bwo ability:

1. Clickye ku ability mu list
2. Selecta ubwumuryo bukwirwa mu dropdown
3. Niba uza gukoresha "Partner", ugira ngo ushije cyemezo (identifiers) y'abanyamwuga mu allow-list
4. Clickye **Save**

Urugero:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Uburyo Bwo Gukora Icyemezo (Bulk Operations) {#bulk-operations}

Kugira ngo uhindure ubwumuryo bwo kuvuga bwo ability nyamukuru:

1. Checkye boxes zikoreshwa ku ability
2. Selecta ubwumuryo bukwirwa mu dropdown ya bulk action
3. Clickye **Apply**

## Allow-List Y'Abanyamwuga (Partner Allow-List) {#partner-allow-list}

I **partner allow-list** igira urugero bwo gukemura abanyamwuga bashobora gukoresha ubwumuryo bwo Partner.

### Gufasha Abanyamwuga (Adding Partners) {#adding-partners}

1. Tunda ku **Superdav AI Agent** → **Settings** → **Partners**
2. Clickye **Add Partner**
3. Entera cyemezo y'abanyamwuga (usanzwe API key cyangwa organization ID)
4. Urugero, ushije cyemezo y'abanyamwuga n'uburyo bwo kubyitwa
5. Clickye **Save**

### Gukoresha Ability ku Banyamwuga (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

Nyuma yo gufasha partner:

1. Kwita ku gukora mu tabu ya **Abilities** (Ibyiciro)
2. Shaka uburyo bwo gukoresha uburyo bwa partner (Partner visibility)
3. Gukora click kugira ngo utonde (edit)
4. Mu igice cy'Partner allow-list', shaka ubwoko bw'box ku byo mu batabugenge bwo partner wumva umusobanuro (access)
5. Gukora click **Save**

### Guhagarika Uburyo Bwa Partner {#revoking-partner-access}

Kugera ku gukoresha uburyo bwa partner:

1. Edit uburyo bwa partner
2. Uncheck ubwoko bw'box bwa partner mu allow-list
3. Gukora click **Save**

Ubutabugenge bwa partner uzagira umusobanuro w'uburyo bwa partner bw'umva umusobanuro (access) mu gihe cy'ibyo byose.

## Ibyiciro Itabugenge (Unclassified Abilities) {#unclassified-abilities}

Icyo gishya uburyo bwa third-party ability (ability yawe) kandi Superdav AI Agent ntacyumva, kigishirwa nk'**Unclassified**.

### Umusobanuro ku batabugenge bwo Ibyiciro Itabugenge {#admin-notice-for-unclassified-abilities}

Ushobora kubona umusobanuro w'admin:

```
⚠️ Ibyiciro Itabugenge Byumva

Ibyo byo mu buryo bw'install (installed) byumva ariko ntacyumva:
- custom-import-tool
- external-api-wrapper

Ibyo byo mu buryo bwa partner yashobora gutera umusaruro cyangwa gukomeza ubwumvikane.
Nshobora kugira ngo murebe kandi nshobora guhagarika.

[Gushyira Ibyiciro] [Kugera Kuva]
```

### Gushyira Ibyiciro Itabugenge {#reviewing-unclassified-abilities}

1. Gukora click **Review Abilities** mu umusobanuro
2. Ku gihe cyo gishya uburyo bwa partner, ushobora kubona:
   - Izina ry'ability n'ubwumvikane (description)
   - Uburyo bw'install (source) (iki plugin/addon yashyiraho)
   - Ubwoko bw'visibility bwishirwa (Suggested visibility level)
   - Gukomeza ubwumvikane (Security assessment)

3. Shaka ubwoko bw'visibility:
   - **Public**: Kwishimira uburyo bwa partner; gushyira mu gihe cyose
   - **Internal**: Gutera ku gukoresha mu mategeko y'internal gusa
   - **Partner**: Gutera ku batabugenge bwo specific (specific partners)
   - **Disabled**: Ntashobora gukoresha uburyo bwa partner

4. Gukora click **Classify** kugira ngo ushye ikindi kintu cyo gukora ubwumvikane

### Uburyo Bwo Gukomeza Ibyiciro Itabugenge? {#why-classify-unclassified-abilities}

Gukomeza uburyo bwa partner:

- **Kugera umusaruro**: Wibone mu buryo bw'install (installed) byose
- **Gukomeza ubwumvikane**: Ibyiciro itabugenge byishirwa mu gihe cyo gukora ubwumvikane
- **Gushyira ibintu**: Iyo ugiye gukomeza, uburyo bwa partner bishobora gukoreshwa

- **Kugera umusobanuro**: Ubwoko bw'uburyo bwawe bishirwa mu gihe cyo guhagarika (audit)

## Ubwumva mu Ntchito Ziri Ihariye (Visibility in Different Surfaces) {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Ubufatanye bw'abantu bose** (Public abilities) bufite ubufatanye bwa REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Ubufatanye bw'abantu b'umukono n'abandi b'umwezi** (Internal and Partner abilities) bufite ubufatanye bwa REST API.

### MCP Servers {#mcp-servers}

**Ubufatanye bw'abantu bose** (Public abilities) bufite ubufatanye bwa MCP:

```
MCP Server: Superdav AI Agent
Abilities zifite ubufatanye:
- scaffold-block-theme
- activate-theme
- send-email
```

**Ubufatanye bw'umukono n'abandi b'umwezi** (Internal abilities) bufite ubufatanye mu MCP.

**Ubufatanye bw'abandi b'umwezi** (Partner abilities) bufite ubufatanye gusa n'ubwoko bw'abantu b'umwezi (partner credentials).

### WooCommerce Integration {#woocommerce-integration}

**Ubufatanye bw'abantu bose** (Public abilities) bifite ubushobozi bukurikirana na WooCommerce:

- Ucuruzi mu product
- Gukora order
- Gutangira n'abantu b'umukono

**Ubufatanye bw'umukono n'abandi b'umwezi** (Internal abilities) bifite ubufatanye mu WooCommerce.

### Chat Interface {#chat-interface}

**Imwe n'imwezo yose** (All abilities) zifite ubufatanye mu chat, bukurikirana n'ubwoko bw'abantu b'umuntu:

- Abanyamwuga babona imwezo yose
- Abantu b'umukono bafona imwezo yose
- Abandi b'umwezi bifona imwezo yose (niba bafite ubufatanye)

## Uburyo Bwo Gukora Icyemezo (Security Best Practices) {#security-best-practices}

### Ubwoko bw'Ubwoko Bwa Mwezi (Principle of Least Privilege) {#principle-of-least-privilege}

- Kurinda imwezo mu buryo bwo gukoresha cyane kandi kuko bishobora gukoreshwa.
- Gukoresha ubufatanye bw'abandi b'umwezi ku byiciro byiza cyane.
- Guhagarira imwezo yose usho nta mwezi wuri gukoresha.

### Icyemezo Cy'Ubwoko (Regular Audits) {#regular-audits}

- Gushyira imwezo mu gihe cy'umwezi
- Gutera ku byiciro bishobora kuba bishya
- Guhagarira ubufatanye ku bandi bafite ubufatanye kandi batagukoreshwa.

### Uburyo Bwo Gukoresha Icyemezo (Logging and Monitoring) {#logging-and-monitoring}

- Kurinda ibyo imwezo bifite gukoreshwa cyane
- Gutangira ubwoko bw'abandi bafite ubufatanye
- Guhagarira ku byiciro by'ubwoko bw'imwezo yose

### Icyemezo Cy'Abantu B'umwezi (Third-Party Abilities) {#third-party-abilities}

- Kurinda imwezo cy'abantu b'umwezi mbere y'ibyo gukoreshwa
- Gufata ubufatanye mu buryo bw'ubwoko.
- Guhagarira ku bufatanye bw'umukono n'abandi b'umwezi mbere y'uko byashobora gufata ubufatanye bw'abantu bose (Public).

## Gukoresha {#troubleshooting}

**Uburyo bwo kubona uburyo bw'ubwujumbura mu listi**
- Shobora kugera ko uburyo bw'ubwujumbura bugaragaza kandi kigaragaza (active)
- Shobora gushyira ngo plugin/addon yari yashyizwe mu bikorwa (enabled)
- Shobora gukora refresh ya page

**Ntabwo nshobora guhindura ubwujumbura bw'ubwujumbura**
- Shobora kugera ko wumva uburyo bwo kubona ubutumwa (administrator permissions)
- Shobora gushyira ngo uburyo bw'ubwujumbura ntabwo yashyizwe mu bikorwa na plugin
- Shoba gukora refresh ya plugins zikwiye

**Ushirisha (partner) ntashobora kugera ku buryo bwo kubona uburyo bw'ubwujumbura**
- Shobora kugera ko ushirisha yari yashyizwe mu listi y'abantu bashobora gukoresha (allow-list)
- Shoba gushyira ngo ubwujumbura bwo uburyo bw'ubwujumbura yari yashyizwe ku buryo bwo kubona uburyo bw'ubwujumbura (Partner)
- Shobora gukorera ko umwanya w'ushirisha wari wumva
- Shoba gushyira ngo ushaka uburyo bwo kubona uburyo bw'ubwujumbura yari yashyizwe mu bikorwa (API logs) kugira ngo utereye ibibazo by'ubwujumbura

**Uburyo bwo ubwujumbura bwa ntabwo bukurikirana bugaragaza**
- Shoba gushyira ngo uburikirane kandi ugukoresha mu rurimi rw'admin notice (admin notice)
- Shobora kugera ko wumva ko wari yashyizwe mu bikorwa
- Shoba gushyira ngo plugin yashyize uburyo bw'ubwujumbura yari yashyizwe mu bikorwa

## Gukoresha ku gice cy'Ubwuzine (Migration from Legacy Mode) {#migration-from-legacy-mode}

Iyo uri kubone uburyo bwo guhindura ku gihe cy'Superdav AI Agent ya mbere:

- Ubwujumbura bwose bukurikirana ko buri gihe bwa Public
- Shoba gushyira ngo ubwujumbura ntabwo yashyizwe mu bikorwa nk'uko wumva
- Nta ikintu cyo gutya (action) kuko ushaka guhindura uburyo bwo kubona ubutumwa

Shobora kugera ku **Third-Party Mode Migration** kugira ngo umva ibindi by'ubwujumbura ku gukoresha API ya Native Abilities.

## Icyemezo cy'Uburyo bw'Ubwuzine (Next Steps) {#next-steps}

Nyuma yo guhindura uburyo bwo kubona uburyo bw'ubwujumbura:

1. **Gushyira ngo ubone uburyo bwa ubwujumbura**: Gukoresha ibyo byose by'abantu bashyizwe mu bikorwa
2. **Gukoresha uburyo bwo kubona uburyo bw'ubwujumbura bwa ntabwo bukurikirana**: Guhagarara ku rurimi rw'admin notice
3. **Gusobanura abantu bashobora gukoresha (partners)**: Gufasha abantu bashobora gukoresha iyo uburyo bw'ubwujumbura bwa Partner
4. **Gushyira ngo ubone uko byashyirwe**: Gutangira ko uburyo bwo kubona uburyo bw'ubwujumbura bugaragaza cyane
5. **Kugera ibyo wumva**: Gukoresha ibyo wumva ku gihe cyose cyo guhindura ubwujumbura

---
