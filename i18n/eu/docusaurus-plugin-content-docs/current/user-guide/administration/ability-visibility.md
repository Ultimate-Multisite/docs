---
title: Eskupidetzearen erabilera
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Aplikazioaren Ezkutzeko Erabiltasuna (Ability Visibility)

Superdav AI Agent v1.12.0-ek **Aplikazioaren Ezkutzeko Erabiltasuna** kontrolak introduzio dira, zein erabilera (ability) zein eskuratzen duen erabakit. Horrek administurietan zein agent funtzioak REST API, MCP serverrak, WooCommerce integrazioak eta beste interfaze hauek arraketen daiteke kontrolatzeko aukera ematen du.

## Aplikazioaren Ezkutzeko Erabiltasuna Zer da?

Aplikazioaren Ezkutzeko Erabiltasuna (Ability Visibility) eskubideen sistema bat da, zein gauza hauek kontrolatzen duen:

- **Agent funtzioak** zein erabilera dutelako
- **Zer dikan da horiek** (REST API, MCP, WooCommerce, eta beste)
- **Zer irakurri dezake** (partnertarren ohartu listak bidez)
- **Zer moduan da horiek** (katolizatu vs. ez katolizatu)

Hitz batek zein erabilera dutelako nivel du, horrek desberdineten gauzakaren artean horien erabilera ditentukan du.

## Ezkutzeko Niveleak

### Publikoa (Public)

**Publikoak erabilera** zenbat da:

- REST API endpoint-etan
- MCP serverrak
- WooCommerce integrazioetan
- Chat interfazeetan
- Horrek erabiltzaile guztietan (eskubideen ondoaren bidez)

Testu-gisa: `scaffold-block-theme`, `activate-theme`, `send-email`

### Innerakoa (Internal)

**Innerakoak erabilera** zenbat da:

- Chat interfazeetan
- Admin paneletan
- Erabiltzaileak erabiltzen duten lekuetan
- REST API edo beste integrazioetan ez dago horiek

Testu-gisa: `manage-settings`, `view-analytics`, `export-data`

### Partnertar (Partner)

**Partnertarren erabilera** zenbat da:

- Partnertarren ohartu listan zein bat da
- Partnertarren kredentzialak bidez REST API arraketen da
- Partnertarren autentikazioa bidez MCP arraketen da
- Erabiltzaile regularen artean ez dago horiek

Testu-gisa: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deshabilitatuta (Disabled)

**Deshabilitatutako erabilera** zenbat da:

- Horrek batzuk arraketen ez du
- Chatetan ez dago horiek
- Admin paneletan ez dago horiek
- Ez dago horiek erabiltzeko, edo ezinbestekiko edo juergatik erabilera dutelako funtzioak dira

## Ability Visibility-n irrenketa

### Abilio Irrenketa Kontrolatzeko

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** (Konfigurazioa)
2. **Abilities** (Abilidades/Kapitalak) taban klik egin
3. Installatutako guztia abilio-ak eta horiek irrenketa lekuak ikusten duzu.

### Abilio Detalioak Ikusteko

Abilio bat klikatu beharko duzu jakinarazteko:

- **Name** (Izena): Abilioaren identifikadore
- **Description** (Deskribapena): Abilioa zer egiten duen
- **Current visibility** (Aktual irrenketa): Public, Internal, Partner edo Disabled (Deshabilitatuta)
- **Partner allow-list** (Partnerak emateko lista): Partner irrenketan (Partner visibility) zehandiziek zehandi ez dute.
- **Last updated** (Lehen datua): Irrenketa lehen datuenean zer egin zuen
- **Status** (Estatus): Aterlan (Recognized) edo Unclassified (Ez identifikatu)

### Irrenketak Aldatzeko

Abilio bat irrenketak aldatzeko:

1. Lista-n abilioa klikatu duzu
2. Dropdown menua (menu despenbatua) nandu, irrenketa leku berriana aukeratu duzu
3. "Partner" aukeratzen dutenean, partner identifikadoreak emateko listara (allow-list) gehitu duzu
4. **Save** (Saldu) klikatu

Ezaupenean:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operazioak Nagusiak (Bulk Operations)

Abilio batzuk irrenketak aldatzeko:

1. Abilioen ondoreko boteak (checkboxes) markatu duzu
2. Bulk action dropdown menua (bulk action dropdown menu) nandu, irrenketa leku berriana aukeratu duzu
3. **Apply** (Aplikatu) klikatu

## Partner Allow-List (Partnerak emateko lista)

**Partner allow-list** kontrolatzen du zein ekstergo partnerrak Partner-level abilio-ek erabil dezaketak.

### Partnerak Gehitu eta Erregistroa

1. **Superdav AI Agent** → **Settings** (Konfigurazioa) → **Partners** (Partnerrak)
2. **Add Partner** (Partner gehitu) klikatu duzu
3. Partner identifikadoreak (normalment API key edo organization ID) inputatu duzu
4. Ondorekin, partneraren izena eta deskribapena gehitu dezakezu
5. **Save** (Saldu) klikatu

### Abilioak Partnerrak Erakundean Atribuzea

Partner bat gehiatzen duenaren ondoren:

1. Irduzu **Abilities** taban.
2. Partnerta erabilera dauden bat aurkitu.
3. Editatzeko klik egin.
4. "Partner allow-list" zehaztasuneko parteia, erabilera eskatzen dituen partnertakaren boteak markatu.
5. **Save** (Saldu) aipatzi.

### Partnertako Erabilera Ez-eskatzea

Partnertatik erabilera hartzeko:

1. Editatu dauden erabilera.
2. Allow-listan partnertatik boteak ez markatu.
3. **Save** (Saldu) aipatzi.

Partnertatik hor erabilera hemen egiten du.

## Erabilera Ez-klasifikatuak (Unclassified Abilities)

Superdav AI Agentaren ez jakusten duen hiru-parteko erabilera instalatzen duenean, hori **Ez-klasifikatu** daudenak.

### Ez-klasifikatuak Erabilera Administrazioan

Administrazioaren notisia aurkitu:

```
⚠️ Ez-klasifikatuak Erabilera Aurkitu dira

Hauko erabilera instalatu dauden baina ez jakusten dira:
- custom-import-tool
- external-api-wrapper

Hauko erabilerekin segurtasun edo bidezkoak arriskuak izan dezatat.
Zuremeatu eta klasifikatu duzu.

[Erabilera Zuremeatu] [Ez Zuremeatu]
```

### Ez-klasifikatuak Zuremeatu

1. Notisia aurkitu: **Review Abilities** (Erabilera Zuremeatu) aipatzi.
2. Ez-klasifikatu erabilera baten bitartean, aurkitu duzu:
   - Erabilera nazioa eta deskribapena
   - Zuleta (zein plugin/addonak instalatu dauden)
   - Zuremeatuaren eskatutako hizkuntza
   - Segurtasun eragiketa

3. Zuremeatuaren hizkuntza aukeratu:
   - **Public** (Publikoa): Erabilera uzten fidatu; guzti aurkitu dauden artean erakusten duzu
   - **Internal** (Internala): Aurreko erabiltzeko eskatutako lekuetara murriztu duzu
   - **Partner** (Partnertako): Partnertak ezarritutako partnertakaren artean murriztu duzu
   - **Disabled** (Ez-aktibatuta): Horrek erabilera ez uzten

4. Zure erabakia saldatzeko **Classify** (Klasifikatu) aipatzi.

### Ez-klasifikatuak Non-klasifikatu dezake?

Erabilera klasifikatu dezake:

- **Segurtasun hobitzen du**: Zer erakusten duen zehatz aprobatzen duzu
- **Arriskuak prevenitzatzen du**: Ez-klasifikatuak defaultetan ez-aktibatuta daudenak
- **Erabilera aktiboa egiten du**: Klasifikatu gtainaren ondoren, erabilera erabilera dauden bat dauden
- **Erakundea dokumentatzen du**: Zure aukerak auditu (zuremeatu) eraguntzeko logiatzen dira

## Erratasun edo Barkapen Sobaritzaileak

### REST API

**Publik abiltzaileak** disponible dira REST endpoint-ek:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal eta Partnertar abiltzaileak** REST API bidez ez daiko.

### MCP Serverrak

**Publik abiltzaileak** disponible dira MCP bidez:

```
MCP Server: Superdav AI Agent
Abiltzaileak disponibleak:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abiltzaileak** MCP bidez ez daiko.

**Partnertar abiltzaileak** partnertar identifikazioak bidez baino ez daiko.

### WooCommerce Integrazioa

**WooCommerce-re lotutako publik abiltzaileak** disponible dira:

- Produkzioa zehatzea
- Ordena procesamendua
- Klientearekin harremanak

**Internal abiltzaileak** WooCommerce-ra ez daiko.

### Chat Interface

**Abiltzaile guztiek** (Publik, Internal, Partnertar) chat-an disponible dira, erabiltzailearen permietzaileari dagokion:

- Administratorrak abiltzaile guztietara ikusten dute
- Erregulako erabiltzaileak publik abiltzaileak ikusten dute
- Partnertarrak publik eta partnertar abiltzaileak ikusten dute (whitelisted jakin dituztenak)

## Segurtasunaren Best Praktikak

### Lehen Pertsua Erreguntzak Prinsipialdia

- Abiltzaileak erabiltzeko aukera duen lehen restrikzioa ematen artean konponbideatu
- Sensitibo operazioetara Partnertar abiltzaileak erabiliz
- Ez erabiltzen dituzten abiltzaileak deshabilitatu

### Auditu Regularrak

- Abiltzailearen visibilidada mensual ikustu
- Ez klerifikatu abiltzaileak kontrolatu
- Ez erabiltzen dituzten partnertarren erakundeak deshabilitatu

### Logia eta Monitorizazioa

- Zer abiltzaileak leez dauden artean lehen erabiltzen dira ikustu
- Partnertarren erabilera motxilerak taldeatu
- Abiltzailearen ezohola motxilerak alertatzea

### Hirugarren Parte Abiltzaileak

- Aktibatu aurretik hirugarren parte abiltzaileak ikustu
- Ezaugariz konponbideatu
- Internal edo Partnertar visibilidadarekin hasten dena
- Bietan binarte egin ondoren publika egindua

## Problema-ezpenaketa (Troubleshooting)

**Ez dago eskaera ez du listan erabiliz**
- Ezkatu ondorioztatzen da abilidadea instalatuta eta aktibo dagoela.
- Ezkatu ondorioztatzen da plugin/addon-ek aktiboa dagoela.
- Pagintua refreshatu (eskeritzatu).

**Ez kondicionoa (visibility) aldatu dezake**
- Ezkatu ondorioztatzen da administrator permietua duela.
- Ezkatu ondorioztatzen da plugin bat abilidadea blokeatuta dagoela.
- Plugin ezberdinetan erabiliz coba (deshabilitatu).

**Ekinak (partner) ez du zehaztasun (access) abilidadeera**
- Ezkatu ondorioztatzen da ekinak allow-listan dagoela.
- Ezkatu ondorioztatzen da abilidadearen kondicionoa "Partner" (Ekinak) ituratuta dagoela.
- Ekinaren identifikazio datuak (credentials) barneago dira.
- API log-ek autentikazio errorrak (authentication errors) eratu.

**Ez zehaztutako abilidadeak irudia egiten jarraitzen du**
- Administrazioa (admin notice) daude iruditzen eta zehaztu (classify).
- Ezkatu ondorioztatzen da zehaztutako datua salduta dagoela.
- Abilidadea ematen plugin-ek eguneratuta dagoela zuzena jakinarazteko.

## Migrazioa Irudia Modu Zaharra (Migration from Legacy Mode)

Superdav AI Agent-en aurreratu bertsio batetik iruditzen ari zete:

- Abilidade guztiek automatikoki "Public" (Publikoa) gisa zehaztuta dauden.
- Bezatu eta eskeritzatu behar dela jakinarazteko kondicionoak aldatu duzu.
- Erabidura ez dago erabiliz nahi duz, ez dutra ekintza behar da.

**Third-Party Mode Migration** (Ekinak Modu Migrazioa) arauago informazioa hartzeko native Abilities API integrazioan iruditzen dira.

## Irudi Mendiak (Next Steps)

Abilidadearen kondicionoa konfiguratutakoan ondoren:

1. **Ezertatu abilidadeak**: Instalatutako abilidade guztia auditatu duzu.
2. **Zehaztu ez zehaztutako abilidadeak**: Administrazioa daude iruditzen eta zehaztu (classify).
3. **Ekinak eratu**: Partner kondicionoa erabiltzen ari zete, ekinak gehiago batzuk eratu duzu.
4. **Erabiltasuna izitu jakinarazteko**: Abilidadeek zeinak gehiago erabiliz dutelako ikustu duzu.
5. **Eskaintzak dokumentatu**: Zerbiak (visibility) zein bat ere erabiltzen duzela ezagutzeko nota bat jarri duzu.
