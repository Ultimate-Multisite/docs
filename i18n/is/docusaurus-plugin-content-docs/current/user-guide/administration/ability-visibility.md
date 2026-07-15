---
title: Viðskiptaviliðskiljan
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Viðskiptaþátturviðsjá (Ability Visibility)

Superdav AI Agent v1.12.0 hefur innført stjórnargildi **Viðskiptaþátturviðsjá** (Ability Visibility), sem stýra því hvar hverjar viðskiptaþættir eru sýndar. Þetta leyfir stjórnmenjum að finna nákvæm fyrirheimdu á því hvernig agenti geta verið til við mörgum yfirflutningum eins og REST API, MCP serverum, WooCommerce samstarfshópum og övrum myndum.

## Hvað er Viðskiptaþátturviðsjá? {#what-is-ability-visibility}

Viðskiptaþátturviðsjá er rétturssystem sem stýrir:

- **Hvernig viðskiptaþættir** eru til fólks
- **Hvar þau eru sýnd** (REST API, MCP, WooCommerce, osakan)
- **Hvernig þeim geta aðgangast** (þegar notendur eru í samstarfshópum)
- **Hvernig þeir eru klassifizdir** (erkjún vs. ekki erkjún)

Hvert viðskiptaþáttur ber með sér hlutlæg nálgun sem ákveður hvar það er til fólks á öllum yfirflutningum.

## Viðskiptaþátturviðsjástøðlur (Visibility Levels) {#visibility-levels}

### Almenn (Public) {#public}

**Almennar viðskiptaþættir** eru til fólks heima:

- REST API endpunkta
- MCP serverar
- WooCommerce samstarfshópir
- Chat myndir
- Öll notendurollar (með viðeigandi réttum)

Dæmi: `scaffold-block-theme`, `activate-theme`, `send-email`

### Innri (Internal) {#internal}

**Innri viðskiptaþættir** eru til fólks í þínu WordPress innreiðslu:

- Chat myndir
- Administraðar pannir (Admin panels)
- Tyldir notendur aðeins
- Ekki sýndar með REST API eða ytri samstarfshópum

Dæmi: `manage-settings`, `view-analytics`, `export-data`

### Samstarfshópur (Partner) {#partner}

**Samstarfshópur viðskiptaþættir** eru til fólks í samstarfshópum sem er listast eftir:

- Krefst sérstakrar innskráningu í lista fyrir samstarfshópa
- Til að geta þessar með REST API með samstarfshópurréttum
- Til að geta þessar með MCP með samstarfshópurinnáttun
- Ekki til að geta þessar regular notendur

Dæmi: `bulk-import-users`, `modify-billing`, `access-analytics`

### Afskipt (Disabled) {#disabled}

**Afskipt viðskiptaþættir** eru ekki til fólks heima:

- Ekki sýndar með okkum fyrir yfirflutning
- Ekki til að geta þessar í chat
- Ekki til að geta þessar í administraspanum
- Hjálflegt fyrir hlutskipti sem eru fornu eða eksperimentar

## Stjórnun viðskiptaferðarviðmi {#managing-ability-visibility}
(Managing Ability Visibility)

### Tilgangur á viðmiðum fyrir viðskipti (Accessing Ability Visibility Settings) {#accessing-ability-visibility-settings}

1. Gangi **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klikkaðu á flugvinnu **Abilities** (Viðmiðir)
3. Þar sjáðu lista yfir allar viðmið sem eru nýtt í systeminu og hvernig þeim er sett fyrir sýnargildi (visibility levels).

### Sjá Viðmiðsréttindi (Viewing Ability Details) {#viewing-ability-details}

Klikkaðu á nýtt viðmilið til að sjá:

- **Name** (Heiti): Viðmiliðins kennitalinn.
- **Description** (Skjalði): Hvað viðmilið gerir.
- **Current visibility** (Notrunandi sýnargildi): Öffent (Public), Innri (Internal), Samstarfsaðili (Partner) eða Afsláttur (Disabled).
- **Partner allow-list** (Samstarfsaðila tillitslista): Hvernig samstarfsaðilar geta aðgangast (ef er sett fyrir Samstarfsaðila sýnargildi).
- **Last updated** (Nýjustu uppfærð): Þegar sýnargildi var síðast breytt.
- **Status** (Staður): Aðgerðin er viðurhefnd (Recognized) eða Ótökin (Unclassified).

### Breytt Sýnargildi (Changing Visibility Levels) {#changing-visibility-levels}

Til að breyta sýnargildi nýttum viðmils:

1. Klikkaðu á viðmilið í listanum
2. Veldu nýtt sýnargildi úr veitandi felli (dropdown)
3. Ef þú velur "Partner", bæti samstarfsaðila kennitalum við tillitslista (allow-list).
4. Klikkaðu á **Save** (Spara).

Dæmi:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Breytt Aðgerðir í Hófi (Bulk Operations) {#bulk-operations}

Til að breyta sýnargildi fleiri viðmilsins:

1. Markmiðu afskráningum (check boxes) við nýtt viðmilið
2. Veldu nýtt sýnargildi úr felli fyrir hólfbreyttar aðgerðir (bulk action dropdown)
3. Klikkaðu á **Apply** (Ámynd).

## Samstarfsaðila Tillitslista (Partner Allow-List) {#partner-allow-list}

**Samstarfsaðila tillitslisti** stýrir hvernig yfirburðar samstarfsaðilar geta aðgangast viðmið sem eru sett fyrir Samstarfsaðila sýnargildi.

### Að bæta við Samstarfsaðila (Adding Partners) {#adding-partners}

1. Gangi **Superdav AI Agent** → **Settings** → **Partners**
2. Klikkaðu á **Add Partner** (Bæta samstarfsaðil í).
3. Skrifa kennitalinn fyrir samstarfsaðila (í almennu tilfelli er þetta API key eða organization ID).
4. Valfritið bæti við nafn og skjalði samstarfsaðila.
5. Klikkaðu á **Save** (Spara).

### Til að neita Viðmið Samstarfsaðilum (Assigning Abilities to Partners) {#assigning-abilities-to-partners}

Eftir að hafa bætt við samstarfsaðil:

1. Gangi **Abilities** fanum
2. Finndu ábilið með vísindamanna (Partner) sýn
3. Klikka til að breyta
4. Í hluta "Partner allow-list" (tillaga fyrir vísindamenn), vísuleysir boksins fyrir vísindamenn sem þurfa að hafa aðgang
5. Klikka á **Save**

### Til að fjarlægja aðgang vísindamanna {#revoking-partner-access}

Til að fjarlægja aðgang vísindamanns:

1. Breyti á ábilið (ability)
2. Fjáldu boksinn fyrir vísindamanninn í tillagið
3. Klikka á **Save**

Vísindamanni munu þarft að láta aðgang til þessum ábiliðum strax fela.

## Öryggislausnir (Unclassified Abilities) {#unclassified-abilities}

Þegar þú notar þriðja marka ábilið sem Superdav AI Agent ekki skilur, er það merkt sem **Unclassified** (öryggislausn).

### Stjórnarmérki fyrir öryggislausnir {#admin-notice-for-unclassified-abilities}

Þú sjá stjórnarmérki:

```
⚠️ Öryggislausnir eru upptökkuð

Føll eftir ábiliðum sem eru installað en eru ekki skiljurðar:
- custom-import-tool
- external-api-wrapper

Þessar ábiliðir gætu verið að hafa öryggis- eða samþættingu-risku.
Vinsamlegast skoða og klassifíka þær.

[Skoða Ábilið] [Fjáldu]
```

### Skoða Öryggislausnir {#reviewing-unclassified-abilities}

1. Klikka á **Review Abilities** (Skoða ábilið) í mérki
2. Fyrir hvert öryggislaust ábilið sjáðu:
   - Námni og skýring á ábiliðinu
   - Upphafi (hver plugin/addon installaði það)
   - Försla um sýnstíðlu (visibility level)
   - Öryggisvurðing
3. Veldu sýnstíðlu:
   - **Public** (Almenn): Trúðu á ábilið; sýna það í öllum staðum
   - **Internal** (Innanstaðarlegur): Begræða að innri notkunin only
   - **Partner** (Vísindamanni): Begræða til sérstökra vísindamanna
   - **Disabled** (Fjáldu): Notuðu ekki þetta ábilið

4. Klikka á **Classify** (Klassifíka) til að foga hugmyndina þinni

### Hvað er mikilvægt að klassifíka öryggislausnir? {#why-classify-unclassified-abilities}

Klassifíking á ábiliðum:

- **Vinnur við öryggi**: Þú neyðir sér hvað er sýnt
- **Fyrirhindrar ógnun**: Öryggislausnir eru fjáldar af raunni því að þær eru fjáldar af raunni í byrjun
- **Neymir eiginleika**: Eftir að hafa klassifíkað, verður ábiliðin til að nota

- **Skilna hugmyndir**: Valinn er skráð fyrir skoðun

## Sýnileiki á Öllum Yfirflutningum {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Önnur aðgengi** eru tilgjövilegir með REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Innanverðar og samstarfaráðila aðgengi** eru ekki tilgjövilegir með REST API.

### MCP Servers {#mcp-servers}

**Önnur aðgengi** eru tilgjövilegir með MCP:

```
MCP Server: Superdav AI Agent
Tilgjövilegar aðgerðir:
- scaffold-block-theme
- activate-theme
- send-email
```

**Innanverðar aðgerðir** eru ekki sýndar í MCP.

**Samstarfaráðila aðgerðir** eru tilgjövilegir aðeins með samstarfaráðila kennslum (credentials).

### WooCommerce Samþætting {#woocommerce-integration}

**Önnur aðgengi** sem tengjast WooCommerce eru tilgjövilegir:

- Stjórnun vörum
- Aðferðarforgjafni
- Samskipti við viðskiptavili

**Innanverðar aðgerðir** eru ekki sýndar í WooCommerce.

### Chat Interface {#chat-interface}

**All aðgerðir** (Önnur, Innanverðar, Samstarfaráðila) eru tilgjövilegir í chat, eftir notandafyrirbæri:

- Stjórnendur sjá allar aðgerðir
- Almennar notendur sjá aðeins önnur aðgengi
- Samstarfaráðilar sjá Önnur + Samstarfaráðila aðgerðir (ef þær eru viðeigandi)

## Bestu Þróunarforða Ámsögnin {#security-best-practices}

### Lítilsta möguleika á aðgangi (Principle of Least Privilege) {#principle-of-least-privilege}

- Set aðgerðir á þeim restri sýnileika sem stilla þeirnar notkun.
- Nota samstarfaráðila aðgengi fyrir kjarnafyrirbæri.
- Skiptu af viðgerðir sem þú ekki notar.

### Reglulegar Aðgerðir (Regular Audits) {#regular-audits}

- Sjá á sýnileika aðgerða mánuðarlega
- Þekki eftir óskilningum um aðgerðir
- Fjörðu að aðgangi fyrir notendur sem ekki notar þær.

### Skráning og Öryggisþróun (Logging and Monitoring) {#logging-and-monitoring}

- Fylgjast með hvaða aðgerðir eru notað mest
- Fylgja eftir skiptumönnum samstarfaráðila
- Tilkalla til viðvarunar á óvenjulegum notkun aðgerða.

### Þriðja-miðlar Aðgerðir (Third-Party Abilities) {#third-party-abilities}

- Sjá á þriðja-miðlar aðgerðir fyrir það að aktíva
- Skiptu þeim nákvæmlega um
- Byrja með Innanverðum eða Samstarfaráðila sýnileika
- Framkvæmt til Önnur eftir að hafa skoðað þær vel

## Feilanirblöndun {#troubleshooting}

**Ein möguleikið er ekki í lista sýnt**
- Staða möguleika (ability) er tæknin og aktiv er
- Skjaldi það að plugin/addon er á skilningi (enabled)
- Frís yfir síðuna

**Ég get ekki breytt sýnileika möguleika**
- Staða þín sem administrator er tæknin
- Skjaldi það að möguleikið sé lokað af plugin
- Prófa að skila pluginum sem gæti verið í ólíkandi (conflicting)

**Samstarfsaðili get ekki aðgangur til möguleika**
- Staða þess að samstarfsaðili er í lauslisti (allow-list)
- Skjaldi það að sýnileiki möguleika sé sett á Samstarfsaðil (Partner)
- Staða að samstarfsaðila tengd upplýsingar eru rétt
- Skjaldi API logs fyrir skynshefndartryggingar

**Óskynft möguleiki er aftur í sýn**
- Sjá og skilja þau í admin notitsum (admin notice)
- Staða að skilningin þín sé færð fram
- Skjaldi það að plugin sem gefur möguleika er uppfærður

## Feilanir frá gamlum leiðum (Legacy Mode Migration) {#migration-from-legacy-mode}

Ef þú uppfærðu úr eldri útgáfu Superdav AI Agent:

- Allir núverandi möguleiki eru sjálfan sem skynftur Semni (Public)
- Sjá og breyt sýnileika þar sem þarf
- Engin aðgerð er nauðsynleg nema þú vilji að hætta aðgangi

Sjá **Feilanir frá þriðja markaði (Third-Party Mode Migration)** fyrir meiri upplýsingar um skiptingu í nánari samstarfi við native Abilities API.

## Næstu skref {#next-steps}

Eftir að hafa sett sýnileika möguleika:

1. **Sjá og skilja möguleikið**: Staða allra installað möguleika
2. **Skynfa óskynfta möguleiki**: Svara til admin notitsum
3. **Set upp samstarfsaðila**: Ítildu samstarfsaðila ef þú notar Samstarfsaðil sýnileika (Partner visibility)
4. **Fylgjast með notkunni**: Fylgja því hvern möguleiki er nota mest
5. **Skjaldi á ákvörðunum**: Halda skjalði um hvernig þú valdi hvert sýnileikarnivao
