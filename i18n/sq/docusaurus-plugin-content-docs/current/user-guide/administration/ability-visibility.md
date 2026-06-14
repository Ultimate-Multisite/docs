---
title: Aksessibiliteti i shfaqjes
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Vërtetësia e Aftësisë (Ability Visibility)

Superdav AI Agent v1.12.0 prezanton kontrollin **Vërtetësie të Aftësisë** që rregullon cilat sipërfaqe (surfaces) expozojnë çdo aftësi. Kjo lejon administratorët të përshtatësin se cilat kapacitete e agentit janë të disponueshme përmes REST API, serverëve MCP, integrimeve WooCommerce dhe ndërfaqeve të tjera.

## Çfarë është Vërtetësia e Aftësisë?

Vërtetësia e Aftësisë është një sistem leje që kontrollon:

- **Cilat aftësi** janë të disponueshme për agjentët
- **Ku ato janë expozuar** (REST API, MCP, WooCommerce, etj.)
- **Kush mund t'i aksesojë** (përmes listave lejeve partnerësh)
- **Si klasifikohen** (të njohura vs. të pafundamentuar)

Çdo aftësi ka një nivel vërtetësie që përcakton disponueshmërinë e saj në sipërfaqet e ndryshme.

## Nivelet e Vërtetësisë

### Publike (Public)

**Aftësitë publike** janë të disponueshme kudo:

- Endpoint-t REST API
- Serverët MCP
- Integrimet WooCommerce
- Ndërfaqet e bisedës (Chat interfaces)
- Të gjitha rolet e përdoruesve (me leje të përshtatshme)

Shembull: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interne (Internal)

**Aftësitë interne** janë të disponueshme vetëm brenda instalimit tuaj WordPress:

- Ndërfaqet e bisedës
- Paneli i administratorëve
- Vetëm përdoruesve të hyrë në sistem
- Nuk janë expozuar përmes REST API ose integrimeve të jashtme

Shembull: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Aftësitë partneri** janë të disponueshme vetëm për partnerët e listuar në listën lejeve:

- Kërkon një hyrje eksploruese në listën lejeve të partnerëve
- Disponues përmes REST API me kredencialet e partnerit
- Disponues përmes MCP me autentikim partneri
- Nuk janë të disponueshme për përdoruesit ordinorë

Shembull: `bulk-import-users`, `modify-billing`, `access-analytics`

### Idisabilituara (Disabled)

**Aftësitë i ndalur** nuk janë të disponueshme në asnjë vend:

- Nuk janë expozuar përmes asnjë sipërfaqe
- Nuk janë të disponueshme në bisedë
- Nuk janë të disponueshme në paneli i administratorëve
- Përdurues për aftësitë e vjetruara ose eksperimentale

## Menaxhimi i Vëzhgimit të Aftësive

### Aksesi në Cilësimet e Vëzhgimit të Aftësive

1. Shkoni te **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klikoni te tab-i **Abilities** (Aftësi)
3. Do të shihni një listë me të gjitha aftësit e instaluara dhe nivelet e tyre të vëzhgimit

### Shikimi i Detajeve të Aftësive

Klikoni në çdo aftësi për të parë:

- **Name** (Emri): Identifikuesi i aftësisë
- **Description** (Përshkrimi): Çfarë bën aftësia
- **Current visibility** (Vëzhgimi aktual): Publik, I Brendshëm, Partner ose I Pishkueshëm (Disabled)
- **Partner allow-list** (Listë e lejuar për partnerët): Cilat partnerë mund të aksesojnë (nëse është vëzhgimi i partnerit)
- **Last updated** (Përditësuar më së fundmi): Kur ndryshua vëzhgimi
- **Status**: I njohur ose I Klasifikuar

### Ndryshimi i Niveleve të Vëzhgimit

Për të ndryshuar vëzhgimin e një aftësie:

1. Klikoni te aftësia në listë
2. Zgjidhni një nivel të ri të vëzhgimit nga menutë drop-down (menu me rullim)
3. Nëse zgjidhni "Partner", shtoni identifikuesit e partnerëve në listën e lejuar
4. Klikoni te **Save** (Ruaj)

Shembull:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operacione në Masë

Për të ndryshuar vëzhgimin për disa aftësit:

1. Kontrolloni kuti (checkbox) pranë aftësive
2. Zgjidhni një nivel të ri të vëzhgimit nga menutë drop-down e veprimeve në masë
3. Klikoni te **Apply** (Aplikoj)

## Listë e Lejuar për Partnerët (Partner Allow-List)

**Partner allow-list** kontrollon cilët partnerë të jashtëm mund të aksesojnë aftësit me nivel partneri.

### Shtimi i Partnerëve

1. Shkoni te **Superdav AI Agent** → **Settings** → **Partners**
2. Klikoni te **Add Partner** (Shtoni Partner)
3. Vendosni identifikuesin e partnerit (zakonisht një API key ose ID i organizatës)
4. Opsionalisht shtoni emrin dhe përshkrimin e partnerit
5. Klikoni te **Save** (Ruaj)

### Bashkimi i Aftësive me Partnerët

Pas shtimit të një partneri:

1. Shko në tabin **Abilities** (Aftësi)
2. Gjej një aftësi me vizibilitet Partner (Partner).
3. Kliko për të redaktuar.
4. Në seksionin "Partner allow-list" (Listë e lejuar partnerë), zgjidh kuti për partnerët që duhet të kenë akses.
5. Kliko **Save** (Ruaj).

### Heqja e Aksesit Partner

Për të hequr aksesin e një partneri:

1. Redakto aftësinë.
2. Hesho kuti box-in e partnerit në listën e lejuar.
3. Kliko **Save** (Ruaj).

Partneri do humb menjëherë aksesin në atë aftësi.

## Abilities i Paklasifikuara (Unclassified Abilities)

Kur instaloni një aftësi të palënduar (third-party ability) që Superdav AI Agent nuk e njeh, ajo markohet si **Unclassified** (i paklasifikuara).

### Njoftim për Administratorët për Abilities i Paklasifikuara

Do të shihni një njoftim administrator:

```
⚠️ Abilities i Paklasifikuara të Zbuluar

Aftësitë e mëposhtme janë instaluar por nuk renkohen:
- custom-import-tool
- external-api-wrapper

Këto aftësi mund të sjellin rreziqe sigurie ose përputhshmërie.
Ju lutem i vlerësoni dhe klasifikoni ato.

[Review Abilities] [Dismiss]
```

### Vlerësimi i Abilities i Paklasifikuara

1. Kliko **Review Abilities** (Vlerëso Aftësinë) në njoftim.
2. Për çdo aftësi të paklasifikuara, do të shihni:
   - Emrin dhe përshkrimin e aftësisë
   - Burimin (cili plugin/addon e instaloi)
   - Niveli i sugjeruar i vizibilitetit
   - Vlerësimin e sigurisë

3. Zgjidh një nivel vizibiliteti:
   - **Public** (Publik): Besoni aftësinë; ekspozojeni atë në çdo vend
   - **Internal** (I Brendshëm): Kufizoni përdorimin vetëm për qëllime të brendshme
   - **Partner** (Partner): Kufizoni partnerëve specifikë
   - **Disabled** (i Ndaluar): Mos e përdorni këtë aftësi

4. Kliko **Classify** (Klasifiko) për të ruajtur vendimin tuaj.

### Pse Klasifikoni Abilities i Paklasifikuara?

Klasifikimi i aftësive:

- **Përparon sigurinë**: Ju lejoni eksplisit se çfarë do të ekspozojmë
- **Parandalon aksidente**: Aftësitë e paklasifikuara janë të ndaluara vetëm me parashikim (default)
- **Lejon funksionalitetet**: Pasi klasifikohet, aftësia bëhet e disponueshme
- **Dokumento vendimet**: Zgjedhjet tuaja ruhen për audita

## Përsjellshmëria në Sipërfaqe të Ndryshme

### REST API

**Aftësitë publike** janë të disponueshme përmes endpoint-eve REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Aftësitë të brendshme dhe partnerëve** nuk janë të disponueshme përmes REST API.

### MCP Servers

**Aftësitë publike** janë të disponueshme përmes MCP:

```
MCP Server: Superdav AI Agent
Aftësitë e disponueshme:
- scaffold-block-theme
- activate-theme
- send-email
```

**Aftësitë e brendshme** nuk ekspozon përmes MCP.

**Aftësitë partnerëve** janë të disponueshme vetëm me kredencialet e partnerëve.

### Integrimi me WooCommerce

**Aftësitë publike** që lidhen me WooCommerce janë të disponueshme:

- Menaxhimi i produkteve
- Përpunimi i burimeve (Order processing)
- Komunikimi me klientët

**Aftësitë e brendshme** nuk ekspozon në WooCommerce.

### Interfesa e Chatit

**Të gjitha aftësitë** (Publike, të brendshme, partnerëve) janë të disponueshme në chat, në varësi të lejeve të përdoruesit:

- Administratorët e shohin të gjitha aftësitë
- Përdoruesit të zakonshëm e shohin vetëm aftësitë publike
- Partnerët e shohin aftësitë Publike + partnerëve (nëse janë listuar si lejuar)

## Praktikat më të Mira për Sigurinë

### Principi i Përparimit të Menjënat (Principle of Least Privilege)

- Vendos aftësitë në nivelin më restriktiv që ende lejon përdorimin e tyre
- Përdor aftësitë partnerëve për operacionet sensitive
- Kthej pakë aftësitë që nuk i përdorni

### Auditet Rregullore

- Kontrollo vizibilitetin e aftësive mujore
- Kontrollo aftësitë e klasifikuara në mënyrë të pa klasifikuar (unclassified abilities)
- Fikoj aksesin për partnerët që nuk i përdoren

### Regjistrimi dhe Monitorimi

- Monitoro cilat aftësi përdoren më shumë
- Trackoni modelet e aksesit të partnerëve
- Alertoni për përdorimin anomal të aftësive

### Aftësitë e Palës së Tretë (Third-Party Abilities)

- Kontrollo aftësitë e palës së tretë para se t'i aktivizoni
- Klasifikojini ato qartësisht
- Filloni me vizibilitet të brendshme ose partnerë
- Promovoni në publike vetëm pasi i keni vlerësuar (vetërfytyruar)

## Zgjidhja Problema

**Një aftësi nuk po shfaqet në listë**
- Kontrolloni që aftësia është instaluar dhe aktive
- Sigurohuni që plugin/addon është i aktivizuar
- Refreshoni faqen

**Nuk mund të ndryshoj dukshmërin e një aftësie**
- Verifikoni që keni të drejtat e administratorit
- Kontrolloni që aftësia nuk është e penguar nga një plugin
- Provoni të deaktivizoni pluginet që mund të konfliktosh

**Një partner nuk mund të aksesojë një aftësi**
- Verifikoni që partneri është në listën e lejuar (allow-list)
- Kontrolloni që dukshmëria e aftësisë është e vendosur në Partner
- Konfirmojeni se kredencialet e partnerit janë të sakta
- Kontrolloni logjet API për gabime autentikimi

**Aftësitë e klasifikuara nuk klasifikohen mbeten të shfaqen**
- Rishikoni dhe klasifikoni ato në njoftime admini (admin notice)
- Kontrolloni që klasifikimi juaj është ruajtur
- Verifikoni se plugin-u që ofron aftësinë është i përditësuar

## Migrimi nga Modi i Vjetër (Legacy Mode)

Nëse po përditësoheni nga një version më i vjetër i Superdav AI Agent:

- Të gjitha aftësitë ekzistuese klasifikohen automatikisht si Publike (Public)
- Rishikoni dhe rregulloni dukshmërin sipas nevojave
- Nuk kërkohet asnjë veprim nëse nuk dëshironi të kufizoni aksesin

Shikoni **Migrimi i Modit Tretë-Pihallë (Third-Party Mode Migration)** për më shumë detaje mbi kalimin drejt integrimit me API-n e Aftësive natyrale.

## Hapat Të Ardhshëm

Pas konfigurimit të dukshmërisë së aftësive:

1. **Rishikoni aftësitë tuaja**: Auditoni të gjitha aftësitë e instaluara
2. **Klasifikoni aftësitë e klasifikuara**: Përgjigjuni njoftime admini (admin notices)
3. **Konfigurojeni partnerët**: Shtoni partnerë nëse po përdorni dukshmërin Partner
4. **Monitoroni përdorimin**: Trackoni cilat aftësi përdoren më shumë
5. **Dokumentoni vendimet**: Mbani shënime pse keni zgjedhur nivelin e dukshmërisë për secilën
