---
title: Képesség láthatósága
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility

A Superdav AI Agent v1.12.0 bevezeti az **Ability Visibility** (Képesség Láthatósági) szabályozó elemeket, amelyek meghatározzák, mely felületek jelenítik meg adott képességet. Ez lehetővé teszi az adminisztrátorok számára, hogy finomhangolják, hogy mely agent funkciók állnak rendelkezésre a REST API-kon, MCP szervereken, WooCommerce integrációkban és más interfészokon.

## Mi az Ability Visibility?

Az Ability Visibility egy engedélyezési rendszer, amely szabályozza:

- **Mely képességek** állnak rendelkezésre az agentek számára
- **Hol jelennek meg** (REST API, MCP, WooCommerce stb.)
- **Kinek érhető el** (partner engedélyezési listákon keresztül)
- **Hogyan vannak osztályozva** (ismételt vs. nem osztályozott)

Minden képességhez egy láthatósági szint társul, amely meghatározza elérhetőségét a különböző felületeken.

## Láthatósági Szintek

### Public (Könyvelési)

Az **Public képességek** mindenhol elérhetők:

- REST API endpoint-okon
- MCP szervereken
- WooCommerce integrációkban
- Chat interfészokon
- Minden felhasználói szerepkör számára (megfelelő engedélyekkel)

Példa: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Belső)

Az **Internal képességek** csak a WordPress telepítésének belső részein elérhetők:

- Chat interfészokon
- Admin panelokon
- Csak bejelentkezett felhasználóknak
- Nem érhetők el REST API-n vagy külső integrációkon keresztül

Példa: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partneri)

Az **Partner képességek** csak a fehérlistázott partnerek számára elérhetők:

- Követelmény: kifejezetten partner engedélyezési listára való bejegyzés
- Elérhető REST API-n keresztül partner hitelesítéssel
- Elérhető MCP-n keresztül partner hitelesítéssel
- Nem elérhető a normál felhasználóknak

Példa: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Kiáramolt)

Az **Disabled képességek** semhol nem elérhetők:

- Nem jelennek meg semmilyen felületen
- Nem elérhetők a chatben
- Nem elérhetők az admin panelokon
- Hasznos elavult vagy kísérleti képességek esetén

## Ability Visibility Kezelése

### Az Ability Visibility Beállításainak Elérése

1. Navigáljon a **WordPress Admin** → **Superdav AI Agent** → **Settings** menüpontra
2. Kattintson az **Abilities** fülre
3. Látni fogja az összes telepített képességet, láthatósági szintjükkel együtt

### Képesség Részleteinek Megtekintése

Kattintson bármilyen képességre, hogy lássa:

- **Name**: A képesség azonosítója
- **Description**: Amit a képesség csinál
- **Current visibility**: Public, Internal, Partner vagy Disabled
- **Partner allow-list**: Mely partnerek férhetnek hozzá (ha Partner láthatóság)
- **Last updated**: Mikor változott utolsó alkalommal a láthatóság
- **Status**: Recognized vagy Unclassified

### Láthatósági Szintek Megváltoztatása

Egy képesség láthatósága megváltoztatásához:

1. Kattintson a képességre a listában
2. Válasszon ki egy új láthatósági szintet a legördülő menüből
3. Ha "Partner"-t választ, adja hozzá a partner azonosítókat az allow-listához
4. Kattintson **Save** (Mentés)

Példa:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Tömeges Operációk

Néhány képesség láthatósága megváltoztatása érdekében:

1. Tikozza a képességek melletti négyzeteket
2. Válasszon ki egy új láthatósági szintet a tömeges művelet legördülő menüből
3. Kattintson **Apply** (Alkalmazás)

## Partner Allow-List

A **partner allow-list** szabályozza, hogy mely külső partnerek férhetnek hozzá a Partner szintű képességekhez.

### Partnerek Hozzáadása

1. Navigáljon a **Superdav AI Agent** → **Settings** → **Partners** menüpontra
2. Kattintson **Add Partner** (Partner hozzáadása)
3. Adja meg a partner azonosítóját (általában egy API kulcs vagy szervezeti ID)
4. Opcionálisan adja hozzá a partner nevét és leírását
5. Kattintson **Save** (Mentés)

### Képességek Meghatározása Partnereknek

Egy partner hozzáadása után:

1. Navigáljon az **Abilities** fülre
2. Keresse meg egy Partner láthatóságú képességet
3. Kattintson szerkesztésre
4. Az "Partner allow-list" szekciójában tikozza a partnerek melletti négyzeteket, akiknek hozzáférése kell
5. Kattintson **Save** (Mentés)

### Partner Hozzáférés Revíziója (Megvonása)

Egy partner hozzáférésének megszüntetéséhez:

1. Szerkesztse a képességet
2. Tikozza ki a partner négyzetét az allow-listában
3. Kattintson **Save** (Mentés)

A partner azonnal elveszíti a hozzáférést az adott képességhez.

## Unclassified Abilities (Nem Osztályozott Képességek)

Ha telepít egy harmadik féltől származó képességet, amit a Superdav AI Agent nem ismeri, azt **Unclassified** (Nem Osztályozott) jelölésűként jelöli.

### Adminisztrációs Értesítés az Unclassified Abilities-ről

Látni fogja az adminisztrációs értesítést:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities Ellenőrzése

1. Kattintson az **Review Abilities** (Képességek áttekintése) gombra az értesítésben
2. Minden nem osztályozott képesség esetén láthatja:
   - A képesség nevét és leírását
   - Forrást (mely plugin/addon telepítette)
   - Javasolt láthatósági szintet
   - Biztonsági értékelést

3. Válasszon ki egy láthatósági szintet:
   - **Public**: Megfogadja a képességet; mindenhol jeleníteni
   - **Internal**: Csak belső használatra korlátozni
   - **Partner**: Specifikus partnerekre korlátozni
   - **Disabled**: Ne használja ezt a képességet

4. Kattintson **Classify** (Osztályozás) gombra, hogy elmentse döntését

### Miért kell Osztályozni az Unclassified Abilities-t?

Az képességek osztályozása:

- **Növeli a biztonságot**: Ön explicit módon jóváhagyja, mi jelenik meg
- **Megakadályozza a baleseteket**: Az nem osztályozott képességek alapértelmezetten kiáramoltak
- **Meghetővé teszi funkciókat**: Osztályozás után a képesség elérhetővé válik
- **Dokumentálja a döntéseket**: A választásai audit célra rögzítve maradnak

## Láthatóság Különböző Felületeken

### REST API

A **Public képességek** elérhetők a REST endpoint-okon keresztül:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal és Partner képességek** nem elérhetők REST API-n keresztül.

### MCP Szerverek

A **Public képességek** elérhetők az MCP-n keresztül:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal képességek** nem jelennek meg az MCP-n.

**Partner képességek** csak partner hitelesítéssel elérhetők.

### WooCommerce Integráció

A WooCommerce-hez kapcsolódó **Public képességek** elérhetők:

- Termékkezelés
- Rendelésfeldolgozás
- Ügyfélkommunikáció

**Internal képességek** nem érhetők el WooCommerce-on keresztül.

### Chat Interfész

**Minden képesség** (Public, Internal, Partner) elérhető a chatben, a felhasználói engedélyek függvényében:

- Az adminisztrátorok minden képességet látnak
- A normál felhasználók csak a Public képességeket látják
- A partnerek látják a Public + Partner képességeket (ha fehérlistázva)

## Biztonsági Javasolt Gyakorlatok

### Legkisebb Jogok Elv (Principle of Least Privilege)

- Áállítsa a képességeket a legszigorúbb láthatósági szintre, ami még használatát engeli
- Használja a Partner láthatóságot a kritikus műveletekhez
- Áramolassa azokat a képességeket, amelyeket nem használ

### Rendszeres Auditok

- Ellenőrizze a képesség láthatóságát havonta
- Keressen rá nem osztályozott képességekre
- Vónja meg a hozzáférést a nem használt partnerekről

### Naplózás és Monitoring

- Követje nyomon, mely képességeket használják leginkább
- Rögzítse a partner hozzáférési mintáit
- Értesítse az apró eltéréseket a képesség használatában

### Harmadik Féltől Származó Képességek

- Ellenőrizze a harmadik féltől származó képességeket, mielőtt aktiválja
- Osztályozza őket explicit módon
- Kezdje az Internal vagy Partner láthatósággal
- Csak alapos ellenőrzés után emelje Public státuszra

## Hibaelhárítás

**Egy képesség nem látható a listában**
- Ellenőrizze, hogy a képesség telepítve és aktív állapotban van-e
- Győződjön meg róla, hogy az addon/plugin aktiválva van
- Frissítse az oldalt

**Nem tudja megváltoztatni egy képesség láthatóságát**
- Ellenőrizze, hogy adminisztrátor engedélyekkel rendelkezik-e
- Győződjön meg róla, hogy a képességet nem zárló egy plugin
- Próbálja ki kiáramolt konfliktusos plugineket

**Egy partner nem tud hozzáférni egy képességhez**
- Ellenőrizze, hogy a partner az allow-listában van-e
- Győződjön meg róla, hogy a képesség láthatósága Partner-ként van beállítva
- Konzultálja, hogy a partner hitelesítő adatai helyesek-e
- Ellenőrizze az API naplókat a hitelesítési hiba után

**Az Unclassified abilities továbbra is megjelennek**
- Ellenőrizze és osztályozza őket az adminisztrációs értesítésben
- Győződjön meg róla, hogy a minősítése elmentődött
- Ellenőrizze, hogy a képességet biztosító plugin friss verziójú van-e

## Migráció Örökségi Módusból (Legacy Mode)

Ha egy régebbi Superdav AI Agent verziójától frissít:

- Az összes létező képesség automatikusan Public státuszúvá minősül
- Ellenőrizze és állítsa be a láthatóságot szükség szerint
- Nem szükséges cselekvés, hacsak nem akarja korlátozni a hozzáférést

Látogasson el a **Third-Party Mode Migration** (Harmadik Féltől Származó Módus Migráció) oldalra a részletesebb információkért az alapvető Abilities API integráció felé való átmenetről.

## Következő Lépések

Az ability visibility konfigurálása után:

1. **Ellenőrizze a képességeit**: Auditálja az összes telepített képességet
2. **Osztályozza az unclassified abilities-t**: Válaszoljon az adminisztrációs értesítésekre
3. **Állítsa be partnereket**: Adjon hozzá partnereket, ha Partner láthatóságot használ
4. **Követje a használatot**: Rögzítse, mely képességeket használják leginkább
5. **Dokumentálja a döntéseket**: Tartson jegyzeteket arról, hogy miért választotta ki adott láthatósági szintet
