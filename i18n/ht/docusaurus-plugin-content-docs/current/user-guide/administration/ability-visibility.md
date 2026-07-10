---
title: Vizibilite Kapasite
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilité des Capacités {#ability-visibility}

Superdav AI Agent v1.12.0 introduit les contrôles de **Visibilité des Capacités** qui gèrent quelles surfaces exposent chaque capacité. Cela permet aux administrateurs d'ajuster finement quelles capacités de l'agent sont disponibles via REST APIs, serveurs MCP, intégrations WooCommerce et autres interfaces.

## Qu'est-ce que la Visibilité des Capacités ? {#what-is-ability-visibility}

La Visibilité des Capacités est un système de permission qui contrôle :

- **Quelles capacités** sont disponibles pour les agents
- **Où elles sont exposées** (REST API, MCP, WooCommerce, etc.)
- **Qui peut y accéder** (via des listes d'autorisation partenaires)
- **Comment elles sont classées** (reconnu vs. non classifié)

Chaque capacité porte un niveau de visibilité qui détermine sa disponibilité sur différentes surfaces.

## Niveaux de Visibilité {#visibility-levels}

### Public {#public}

Les **capacités publiques** sont disponibles partout :

- Endpoints REST API
- Serveurs MCP
- Intégrations WooCommerce
- Interfaces de chat
- Tous les rôles utilisateurs (avec les permissions appropriées)

Exemple : `scaffold-block-theme`, `activate-theme`, `send-email`

### Interne {#internal}

Les **capacités internes** ne sont disponibles que dans votre installation WordPress :

- Interfaces de chat
- Panneaux d'administration
- Utilisateurs connectés uniquement
- Non exposées via REST API ou intégrations externes

Exemple : `manage-settings`, `view-analytics`, `export-data`

### Partenaire {#partner}

Les **capacités partenaires** ne sont disponibles que pour les partenaires autorisés (whitelisted) :

- Nécessite une entrée explicite dans la liste d'autorisation des partenaires
- Disponible via REST API avec les identifiants du partenaire
- Disponible via MCP avec l'authentification du partenaire
- Non disponible pour les utilisateurs réguliers

Exemple : `bulk-import-users`, `modify-billing`, `access-analytics`

### Désactivé {#disabled}

Les **capacités désactivées** ne sont disponibles nulle part :

- Non exposées via aucune surface
- Non disponibles dans le chat
- Non disponibles dans les panneaux d'administration
- Utile pour les capacités obsolètes ou expérimentales

## Jere Mantye Vizibilite Abiliti yo {#managing-ability-visibility}

### Aksè a Konfigirasyon Vizibilite Abiliti {#accessing-ability-visibility-settings}

1. Ale nan **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klike sou onglet **Abilities** (Abiliti)
3. Ou pral wè yon lis tout abiliti ki enstale ak nivo vizibilite yo.

### Wè Detay Abiliti a {#viewing-ability-details}

Klike sou nenpòt abiliti pou w wè:

- **Name**: Idantifikatè abiliti a
- **Description**: Sa abiliti a fè
- **Current visibility** (Vizibilite kouran): Public, Internal, Partner, oswa Disabled (Dezaktive)
- **Partner allow-list**: Ki partnè yo ka aksède (si vizibilite Partner la)
- **Last updated** (Derni aktualize a): Kote vizibilite a te chanje dènye fwa
- **Status**: Reconnexion (Reconèt) oswa Unclassified (Pa klasifye)

### Chanje Nivo Vizibilite {#changing-visibility-levels}

Pou chanje vizibilite yon abiliti:

1. Klike sou abiliti an nan lis la
2. Chwazi yon nouvo nivo vizibilite de menm nan dropdown a
3. Si ou chwazi "Partner", ajoute idantifikatè partnè yo nan allow-list la
4. Klike sou **Save** (Ensanme)

Egzanp:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operasyon Bloke (Bulk Operations) {#bulk-operations}

Pou chanje vizibilite pou plizyè abiliti:

1. Kontwole (check) bo ak abilite yo
2. Chwazi yon nouvo nivo vizibilite de menm nan dropdown aksyon bloke a
3. Klike sou **Apply** (Aplike)

## Partner Allow-List {#partner-allow-list}

**Partner allow-list** la kontwole ki partnè eksteryè yo ka jwenn aksè nan abiliti nivo Partner la.

### Ajoute Partnè yo {#adding-partners}

1. Ale nan **Superdav AI Agent** → **Settings** → **Partners**
2. Klike sou **Add Partner** (Ajoute Partnè)
3. Antre idantifikatè partnè a (souvan yon API key oswa ID òganizasyon an)
4. Opsyonalman ajoute non ak deskripsyon partnè a
5. Klike sou **Save** (Ensanme)

### Asigne Abiliti yo nan Partnè yo {#assigning-abilities-to-partners}

Ap ajou yon partnè:

1. Ale chèche onglet **Abilities** (Capabilitate).
2. Chèche yon abityè ki gen vizibilite Partner.
3. Klike pou edite li.
4. Nan seksyon "Partner allow-list", chèche kote ou ka mete bwat yo pou partner ki ta dwe gen aksè.
5. Klike sou **Save** (Konsève).

### Retire Aksè Partner la {#revoking-partner-access}

Pou retire aksè yon partner:

1. Edite abityè a.
2. Deséle bwat partner la nan allow-list la.
3. Klike sou **Save**.

Partner la pral pèdi aksè a abityè sa a imedyatman.

## Abilities ki pa Klasifye (Unclassified Abilities) {#unclassified-abilities}

Lè ou mete yon abityè de twazyèm pati (third-party ability) ki Superdav AI Agent pa konnen, li pral mete li kòm **Unclassified**.

### Nòt Admin pou Abilities ki pa Klasifye {#admin-notice-for-unclassified-abilities}

Ou pral wè yon nòt admin sa a:

```
⚠️ Abilities ki pa Klasifye Detecté

Abityè ki swiv yo te mete men yo pa rekonèt:
- custom-import-tool
- external-api-wrapper

Abityè sa yo ka gen risk sekirite oswa konpatibilite.
Tanpri, revize epi klasifye yo.

[Review Abilities] [Dismiss]
```

### Revize Abilities ki pa Klasifye {#reviewing-unclassified-abilities}

1. Klike sou **Review Abilities** nan nòt la.
2. Pou chak abityè ki pa klasifye, ou pral wè:
   - Non ak deskripsyon abityè a
   - Sèvi (ki plugin/addon ki te mete li)
   - Nivo vizibilite ki sijere
   - Evaluer sekirite

3. Chwazi yon nivo vizibilite:
   - **Public** (Pablik): Fè konfyans nan abityè a; montre li kote ou ka.
   - **Internal** (Entè): Restre pou itilizasyon anndan sèlman.
   - **Partner** (Partner): Restre pou partner espesifik yo.
   - **Disabled** (Dezaktive): Pa itilize abityè sa a.

4. Klike sou **Classify** (Klasifye) pou konsève desizyon ou an.

### Poukisa Klasifye Abilities ki pa Klasifye? {#why-classify-unclassified-abilities}

Klasifye abityè yo:

- **Amelyore sekirite**: Ou ap aprann esansyèl sa kote ou pèmèt li montre.
- **Evite aksidan**: Abityè ki pa klasifye yo dezaktive pa default.
- **Pèmèt fonksyon**: Lè abityè a klasifye, li vin disponib pou itilize.
- **Dokimante desizyon yo**: Chwazi ou yo ap mete nan log pou kontwòl (audit).

## Visibilité nan Diferan Sèf {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Abilités publiques** disponib yo atravè REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Abilités entè ak Partenarya** pa disponib atravè REST API.

### MCP Servers {#mcp-servers}

**Abilités publiques** disponib yo atravè MCP:

```
MCP Server: Superdav AI Agent
Abilités ki disponib:
- scaffold-block-theme
- activate-theme
- send-email
```

**Abilités entè** pa montre nan MCP.

**Abilités Partenarya** sèlman disponib ak kredansyèl patron (partner credentials).

### WooCommerce Integration {#woocommerce-integration}

**Abilités publiques** ki gen rapò ak WooCommerce disponib:

- Jere pwodwi
- Pwosesis lòd (Order processing)
- Komunikasyon ak kliyan

**Abilités entè** pa montre nan WooCommerce.

### Chat Interface {#chat-interface}

**Tout abilités** (Publik, Entè, Partenarya) disponib nan chat la, selon pèmisyon itilizatè a:

- Administrate yo wè tout abilités
- Itilizatè regilye yo wè sèlman abilités publiques
- Partenarya yo wè Abilités Publike + Abilités Partenarya (si yo te ap aprann/whitelisted)

## Bon Pratiques Sekirite {#security-best-practices}

### Prinsipal Pwovizyon Miniman (Principle of Least Privilege) {#principle-of-least-privilege}

- Mete abilités nan vizibilite ki pi restriktif la ki pafè pou itilize yo
- Itilize vizibilite Partenarya pou operasyon sensib
- Desactive abilités ou pa itilize

### Audits Regilye {#regular-audits}

- Revize vizibilite abilités chak mwa
- Kontwe pou abilités ki pa klasifye (unclassified abilities)
- Retire aksè pou patron yo ki pa itilize

### Logging ak Monitè {#logging-and-monitoring}

- Monitè ki abilés ki itilize plis
- Swiv modèl aksè patron yo
- Bay alerte sou itilizasyon anòm abilités

### Abilités Twa Pwovizyon (Third-Party Abilities) {#third-party-abilities}

- Revize abilités twa pati anvan ou kòmanse yo
- Klasifye yo eksplisite
- Kòmanse ak vizibilite Entè oswa Partenarya
- Promouye pou Publik sèlman apre ou te fè yon bon etid (vetting)

## Rezoudi (Troubleshooting) {#troubleshooting}

**Yon abitye pa montre nan lis la**
- Verify ke abitye a monte epi li aktif
- Kontwo ke plugin/addon la ap active
- Rafraich paj la

**Mwen pa ka chanje vizibilite yon abitye a**
- Verify ke ou gen pèmisyon administrateur
- Kontwo ke abitye a pa bloke pa yon plugin
- Esaye deaktive (disable) plugin ki ka kontradi
- Esaye deaktive (disable) plugin ki ka kontradi

**Yon patnè pa ka jwenn aksè nan yon abitye**
- Verify ke patnè a nan lis pèmisyon anba (allow-list) la
- Kontwo ke vizibilite abitye a se mete sou "Partner"
- Konfime ke kredansyèl patnè a kòrèk
- Kontwo log API pou erè autentifikasyon

**Abitye ki pa klasifye toujou parèt**
- Revize epi klasifye yo nan notifikasyon admin anba (admin notice) la
- Verify ke klasifikasyon ou te konsève
- Verify ke plugin ki bay abitye a se sou dènye vèsyon

## Migrasyon soti nan Mod Ansyen (Legacy Mode) {#migration-from-legacy-mode}

Si ou ap fè yon upgrade soti nan yon vèsyon anvan Superdav AI Agent:

- Tout abitye egzistans yo otomatikman klasifye kòm "Public"
- Revize epi ajiste vizibilite yo jan ou bezwen
- Pa gen okenn aksyon ki nesesè si ou pa vle limite aksè a

Gade **Migrasyon Mod Twa Pati** pou plis detay sou transfè nan entegrasyon API Abitye natif la.

## Etap Pou Swiv (Next Steps) {#next-steps}

Ap fè sa apre ou fin configure vizibilite abitye yo:

1. **Revize abitye w**: Fè yon audit sou tout abitye ki monte
2. **Klasifye abitye ki pa klasifye**: Repond a notifikasyon admin yo
3. **Fè up patnè yo**: Ajoute patnè yo si ou ap itilize vizibilite Partner
4. **Monitè itilizasyon an**: Swiv ki abitye yo itilize plis
5. **Dokimante desizyon yo**: Kenbe not ak rezon poukisa ou chwazi chak nivo vizibilite
