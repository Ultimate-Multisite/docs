---
title: Aħjar Il-vista
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Xevizzja Vista Attività (Ability Visibility)

Superdav AI Agent v1.12.0 jiddu **Xevizzja Vista Attività** li controlli li governano quali superfici espongono ogni attivitá. Dan hu llumizzaw l-administrator li pu tajjimu ben għall-qiegħed li quali capacità tal-agent huma disponibbli permezz ta REST APIs, MCP servers, WooCommerce integrations, u fejn ikunu.

## X'għandu Xevizzja Vista Attività?

Xevizzja Vista Attività hija sistema permessament li jkontrolla:

- **Li quali attivitajiet** huma disponibbli lill-agent
- **Fejn huma esposti** (REST API, MCP, WooCommerce, ecc.)
- **Li qabel jidħol għalhom** (tramit allow-lists tal-partner)
- **Come huma klassifikati** (riconnsus vs. mhux ricunnsus)

Kulle attivitá jista' tagħha livell vista li jiddetermina disponibbiltatilha fuq superfici differenti.

## Livelli ta Vista (Visibility Levels)

### Pubbliku (Public)

**Attivitajiet pubbliċi** huma disponibbli f'kullewa:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- Kollha l-ruoli tal-utenti (ma' permessamenti appoġġati)

Eżempju: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interni (Internal)

**Attivitajiet interni** huma disponibbli biss f'installazzjoni WordPress tiegħek:

- Chat interfaces
- Admin panels
- Utenti li jkun loggati b'ħafna
- Mhumiex esposti permezz ta REST API jew integrations esterni

Eżempju: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Attivitajiet tal-partner** huma disponibbli biss għall-partner li huma msemmi f'lista blawista (whitelisted):

- Jidreq l-inseriment espliċitu f'allow-list tal-partner
- Disponibbli permezz ta REST API ma' kredinzi tal-partner
- Disponibbli permezz ta MCP ma' autentikazzjoni tal-partner
- Mhumiex disponibbli għall-utenti regolari

Eżempju: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabilitati (Disabled)

**Attivitajiet disabilitati** huma mhux disponibbli f'fejn hija:

- Mhumiex esposti permezz ta xieħed
- Mhumiex disponibbli f'chat
- Mhumiex disponibbli f'admin panels
- Utili għall-attivitajiet li huma deprecated (mghinnati) jew sperimentali

## Id-Diminizzaw Il-Aħħar (Managing Ability Visibility)

### Aċċess għall-Settings tal-Abilità (Accessing Ability Visibility Settings)

1. Irrita għal **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klikka fuq l-tab **Abilities**
3. Settba lista ta' tutte l-abilities li kienu installati u livelli tal-vidiabilità tagħhom

### Aħsor tal-Dettalji tal-Abilità (Viewing Ability Details)

Klikka fuq qualsess ability biex tara:

- **Name**: L-identifikatore tal-ability
- **Description**: X'għandu l-ability
- **Current visibility**: Pubbliku, Internali, Partner, jew Disabilitat
- **Partner allow-list**: Li quali partner jistgħu jidħlu (jefilja biex viżibbiltà ta' Partner)
- **Last updated**: Meta kienet l-vidiabilità tikkmienha l-oħra
- **Status**: Magħrufu jew Mammass

### Bidla Nivelli tal-Vidiabilità (Changing Visibility Levels)

Biex tbażi l-vidiabilità ta' ability:

1. Klikka fuq l-ability fil-lista
2. Sigli livelli tal-vidiabilità ġodid mill-dropdown
3. Jekk tagħżel "Partner", aċċetta l-partner identifiers għall-allow-list
4. Klikka fuq **Save**

Eżempju:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operazzjonijiet Bulk (Bulk Operations)

Biex tbażi l-vidiabilità għal ħafna abilities:

1. Sigli l-boxes li qabelhom l-abilities
2. Sigli livell tal-vidiabilità ġdid mill-dropdown ta' bulk action
3. Klikka fuq **Apply**

## Allow-List tal-Partner (Partner Allow-List)

L-**partner allow-list** tikkontrolla li quali partner esterni jistgħu jidħlu għall-abilities bidi livell Partner.

### Aċċettarja Partner (Adding Partners)

1. Irrita għal **Superdav AI Agent** → **Settings** → **Partners**
2. Klikka fuq **Add Partner**
3. Iscrivi l-partner identifier (tipiku huwa API key jew ID tal-organizzazzjoni)
4. Opcjonalment aċċetta ism u deskrizzjoni tal-partner
5. Klikka fuq **Save**

### Assegna Abilities għall-Partner (Assigning Abilities to Partners)

Wara ma aċċettat partner:

1. Id-direttiva à onglet **Abilities** (Abitilità)
2. Trova abilità con visibilità Partner
3. Clicca per modificare
4. Nella sezione "Partner allow-list", spunta le caselle per i partner che dovrebbero avere accesso
5. Clicca su **Save** (Salva)

### Revocare l'accesso ai Partner

Per rimuovere l'accesso di un partner:

1. Modifica l'abilità
2. Deseleziona la casella del partner nell'allow-list
3. Clicca su **Save** (Salva)

Il partner perderà immediatamente l'accesso a quell'abilità.

## Abilities Non Classificate

Quando installi un'abilità di terze parti che Superdav AI Agent non riconosce, viene contrassegnata come **Unclassified** (Non Classificata).

### Avviso per Amministratori sulle Abilities Non Classificate

Vedrai un avviso dell'amministratore:

```
⚠️ Abilities Non Classificate Rilevate

Le seguenti abilità sono state installate ma non riconosciute:
- custom-import-tool
- external-api-wrapper

Queste abilità potrebbero comportare rischi per la sicurezza o la compatibilità.
Si prega di rivederle e classificarle.

[Review Abilities] [Dismiss] (Rivedi le Abilities) [Ignora]
```

### Revisione delle Abilities Non Classificate

1. Clicca su **Review Abilities** (Rivedi le Abilities) nel messaggio
2. Per ogni abilità non classificata, vedrai:
   - Nome e descrizione dell'abilità
   - Fonte (quale plugin/addon l'ha installata)
   - Livello di visibilità suggerito
   - Valutazione della sicurezza

3. Scegli un livello di visibilità:
   - **Public** (Pubblico): Fidati dell'abilità; esponila ovunque
   - **Internal** (Interno): Restringi l'uso solo all'interno del sistema
   - **Partner**: Restringi a partner specifici
   - **Disabled** (Disabilitato): Non usare questa abilità

4. Clicca su **Classify** (Classifica) per salvare la tua decisione

### Perché Classificare le Abilities Non Classificate?

Classificare le abilità:

- **Migliora la sicurezza**: Approvi esplicitamente ciò che viene esposto
- **Previene incidenti**: Le abilità non classificate sono disabilitate di default
- **Abilita le funzionalità**: Una volta classificate, l'abilità diventa disponibile
- **Documenta le decisioni**: Le tue scelte vengono registrate per fini di audit

## Vidiabilità fuq Surface Diversi

### REST API

**Abilità Pubbliċi** disponibbli biex jkun tramite REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Abilità Internali u Partner** ma jkun disponibbli via REST API.

### MCP Servers

**Abilità Pubbliċi** disponibbli via MCP:

```
MCP Server: Superdav AI Agent
Abilità disponibbli:
- scaffold-block-theme
- activate-theme
- send-email
```

**Abilità Internali** ma jkun esposti via MCP.

**Abilità Partner** disponibbli biss mal-credential partner.

### WooCommerce Integration

**Abilità Pubbliċi** relatati għal WooCommerce disponibbli:

- Gestjoni tal-prodotti
- Aħdul ordini
- Komunikazzjoni ma'l klijenti

**Abilità Internali** ma jkun esposti le WooCommerce.

### Chat Interface

**B'all abilities** (Pubbliċi, Internali, Partner) disponibbli f'chat, b'dependenza mill-permess tal-user:

- L-Administratora jara kull abilità
- L-user regolari jara biss abiliti Pubbliċi
- Il-partner jara Abiliti Pubbliċi + Abiliti Partner (jifabbilja se hija whitelistata)

## Best Practices ta Sicurezza

### Principi tal-Privlijju Minqust (Principle of Least Privilege)

- Istawli abiliti b'vidiabilità l-restriktiva possibbli li tistawx jgħandu.
- Uża vidiabilità Partner għall-operazzjonijiet sensibili.
- Disabli abiliti li ma tistaqso jgħandu.

### Audit Regolari

- Rividi vidiabilità tal-abilities b'misfida
- Kontrolla għal abilities mhux klasifikati
- Elimina l-access għall-partner li ma jgħandux ittuża

### Logging u Monitora

- Monitorja quali abiliti qed tintużaw flis.
- Segui pattern tal-access tal-partner
- Alerti fuq użu anomali tal-abilities

### Abiliti Tal-Terzji

- Rividi abiliti tal-terzji qabel ma jgħandu
- Klasifikali esplicitament
- Incomċja b'vidiabilità Internali jew Partner
- Promu għall-Pubbliċi biss wara vetting (verifika)

## Problemi (Troubleshooting)

**Il-abilità ma la lista ma mhux tista**
- Verifika li abilità installata u attiva
- Kontrolla li plugin/addon li aktivi
- Refresh il page

**Mani ma nistgħu mġiegħel l-visibilità tal-abilità**
- Verifika li għandek permessi ta amministratur (administrator)
- Kontrolla li l-abilità mhux qed tkun bloccata min plugin
- Jidda biex tixgħlu plugins li jgħadu

**Partner ma jistgħu jidħlu f'abbliż**
- Verifika li l-partner huwa fil-allow-list (lista permess)
- Kontrolla li l-visibilità tal-abilità hija impostata fuq Partner
- Konferma li l-kredenziali tal-partner huma korretti
- Kontrolla il-API logs għal errori ta autentikazzjoni

**Abilità mhux klassifikati jmur juri**
- Rivisita u klassifikahom fil-admin notice (notifika tal-admin)
- Verifika li l-klassifikazzjoni tiegħek hija salta
- Verifika li il-plugin li jipprovvidi l-abilità huwa aggiornat

## Migrazzjoni mill-Mod Legacy (Legacy Mode)

Jekk qed tixgħel min versjoni aħjar ta Superdav AI Agent:

- Kull abilità preesistenti tistabbilita awtomatikament bħala Public
- Rivisita u aġust il-visibilità kif għandek bżonn
- Mammux ma għandekx tafjal xieħed l-akses (restrict access)

Vidi **Third-Party Mode Migration** għal magħru più dettagli fuq it-trasizzjoni għall-integrazzjoni nativa tal-Abilities API.

## Prossimu Passi (Next Steps)

Wara li tsetConfiga l-visibilità tal-abilità:

1. **Rivisita l-abilità tiegħek**: Audit kollha l-abilità installati
2. **Klassifika l-abilità mhux klassifikati**: Irrisponi għall-admin notices
3. **Ipprepara partner**: Aggiungi partner jekk qed tistaqsi l-visibilità tal-Partner
4. **Monitora l-użu**: Trakk li quali abilità qed titgħu flis uż
5. **Dokumenta d-deċiedi**: Ħajtin nota kif għalfeh għal ogni livello ta visibilità
