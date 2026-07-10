---
title: Viditeľnosť schopnosti
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Viditeľnosť schopností (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 spúšťa novú funkciu **Viditeľnosť schopností** (Ability Visibility), ktorá určuje, ktoré rozhranie (surfaces) zobrazia každú schopnosť. To umožňuje administrátorom do finálnej nastavenia, aké schopnosti agentov sú prístupné cez REST API, MCP server, integrácie s WooCommerce a iné rozhranie.

## Čo je Viditeľnosť schopností? {#what-is-ability-visibility}

Viditeľnosť schopností je systém práv, ktorý ovláda:

- **Kéde** sú schopnosti dostupné pre agentov
- **Kde sú zobrazené** (REST API, MCP, WooCommerce atď.)
- **Kto ich môže pristupovať** (cez partnerové allow-listy)
- **Ako sú klasifikované** (rozpoznané vs. nerozpoznané)

Každá schopnosť má stupeň viditeľnosti, ktorý určuje jej dostupnosť na rôznych rozhraniách.

## Stupeň viditeľnosti {#visibility-levels}

### Verebná (Public) {#public}

**Verebné schopnosti** sú prístupné všade:

- REST API endpointy
- MCP serverov
- Integrácie s WooCommerce
- Chatie rozhranie (Chat interfaces)
- Všetky používateľské role (s príslušnými právami)

Príklad: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interná (Internal) {#internal}

**Interné schopnosti** sú prístupné len v rámci vašej WordPress inštalácie:

- Chatie rozhranie
- Admin panely
- Len pripriavení používateľov (Logged-in users only)
- Nie sú zobrazené cez REST API ani externé integrácie

Príklad: `manage-settings`, `view-analytics`, `export-data`

### Partnerová (Partner) {#partner}

**Partnerové schopnosti** sú prístupné len pre partnerov uvedené v allow-liste:

- Vyžaduje explicitný prístup do partnerového allow-listu
- Dostupné cez REST API s partnerovými údajmi prihlásenia
- Dostupné cez MCP s autentifikáciou partnerov
- Nie sú dostupné pre bežných používateľov

Príklad: `bulk-import-users`, `modify-billing`, `access-analytics`

### Vypnutá (Disabled) {#disabled}

**Vypnuté schopnosti** nie sú prístupné nikde:

- Nie sú zobrazené cez žiadne rozhranie
- Nie sú dostupné v chate
- Nie sú dostupné v admin paneloch
- Užitečné pre zastarané alebo experimentálne schopnosti

## Správa viditeľnosti schopností {#managing-ability-visibility}

### Prístup k nastaveniam viditeľnosti schopností {#accessing-ability-visibility-settings}

1. Prejdite do **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kliknite na záložku **Abilities** (Schopnosti)
3. Uvidíte zoznam všetkých nainštalovaných schopností s ich úrovňami viditeľnosti

### Zobrazenie detailov schopností {#viewing-ability-details}

Kliknite na akúkoľvek schopnosť, aby ste uvideli:

- **Name**: Identifikátor schopnosti
- **Description**: Čo schopnosť robí
- **Current visibility** (Aktuálna viditeľnosť): Public (Verejná), Internal (Interná), Partner (Partner) alebo Disabled (Vypnutá)
- **Partner allow-list** (Zoznam partnerov pre prístup): Ak je nastavená viditeľnosť "Partner", ktoré partneri môžu pristupovať
- **Last updated** (Posledne aktualizované): Kedy sa viditeľnosť poslednýkrát zmenila
- **Status** (Stav): Rozpoznaná alebo Unclassified (Nezohaspkaná)

### Zmena úrovní viditeľnosti {#changing-visibility-levels}

Aby ste zmenili viditeľnosť schopnosti:

1. Kliknite na schopnosť v zozname
2. Vyberte novú úroveň viditeľnosti z rozbaľovacieho menu
3. Ak vyberiete "Partner", pridajte identifikátory partnerov do zo zoznamu prístupných partnerov (allow-list)
4. Kliknite na **Save** (Uložiť)

Príklad:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Hromadné operácie {#bulk-operations}

Aby ste zmenili viditeľnosť viacerých schopností naraz:

1. Označte políčka (box) vedúce k schopnostiam
2. Vyberte novú úroveň viditeľnosti z rozbaľovacieho menu pre hromadnú akciu
3. Kliknite na **Apply** (Aplikovať)

## Zoznam prístupných partnerov (Partner Allow-List) {#partner-allow-list}

**Zoznam prístupných partnerov** ovláda, ktoré externí partneri môžu pristupovať k schopnostiam úrovne Partner.

### Pridanie partnerov {#adding-partners}

1. Prejdite do **Superdav AI Agent** → **Settings** → **Partners**
2. Kliknite na **Add Partner** (Pridať partnera)
3. Zadejte identifikátor partnera (obvykle API kľúč alebo ID organizácie)
4. Voliteľne pridalte názov a popis partnera
5. Kliknite na **Save** (Uložiť)

### Pridanie schopností pre partnerov {#assigning-abilities-to-partners}

Po pridaní partnera:

1. Prejdite na záložku **Abilities** (Možnosti)
2. Nájdite možnosť s viditeľnosťou pre partnerov (**Partner visibility**)
3. Kliknite na úpravu
4. V sekcii „Partner allow-list“ označte políčka pre partnerov, ktorí by mali prístup
5. Kliknite na **Save** (Uložiť)

### Odpoveď na prístup partnerov {#revoking-partner-access}

Aby ste odstránili prístup partnera:

1. Upravte možnosť
2. Odm označte políčko partnera v zozname povolených (allow-list)
3. Kliknite na **Save** (Uložiť)

Partner okamžite stráca prístup k tejto možnosti.

## Neusk분에 klasifikované možnosti (**Unclassified Abilities**) {#unclassified-abilities}

Keď nainštalujete externú možnosť, ktorú Superdav AI Agent nepozná, je ona označená ako **Neusk분에 klasifikovaná** (Unclassified).

### Informácia pre adminov o neusk분에 klasifikovaných možností {#admin-notice-for-unclassified-abilities}

Uvidíte administratívnu informáciu:

```
⚠️ Neusk분에 klasifikované možnosti detekované

Nasledujúce možnosti boli nainštalované, ale nie sú rozpoznaní:
- custom-import-tool
- external-api-wrapper

Tieto možnosti môžu predstavovať bezpečnostné alebo kompatibilné riadenia.
Prosím, prejdite ich a klasifikujte.

[Prejsť na možnosti] [Odmietnuť]
```

### Prezeranie neusk분에 klasifikovaných možností {#reviewing-unclassified-abilities}

1. Kliknite na **Review Abilities** (Prezeraj možnosti) v upozornení
2. Pre každú neusk분에 klasifikovanú možnosť uvidíte:
   - Názov a popis možnosti
   - Zdroj (ktorý plugin/addon ju nainštaloval)
   - Predložený stupeň viditeľnosti
   - Hodnotenie bezpečnosti

3. Vyberte stupeň viditeľnosti:
   - **Public** (Verejné): Spojte sa na možnosť; zobraziť jej všade
   - **Internal** (Interné): Omeستي prístup len pre interné použitie
   - **Partner**: Omeستي prístup len pre špecifické partnerov
   - **Disabled** (Vypnutá): Nepoužívajte túto možnosť

4. Kliknite na **Classify** (Klasifikovať) na uloženie svojej rozhodnutia

### Prečo klasifikať neusk분에 klasifikované možnosti? {#why-classify-unclassified-abilities}

Klasifikovanie možností:

- **Zlepšuje bezpečnosť**: Vy explicitne schvaľujete, čo je zobrazené
- **Prevence nešťastných udalostí**: Neusk분에 klasifikované možnosti sú štandardne vypnuté
- **Umožňuje funkcie**: Po klasifikácii sa možnosť stane dostupnou
- **Dokumentuje rozhodnutia**: Vaše voľby sú zaznamenané na účely auditu

## Viditeľnosť na rôznych povrchoch {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Verejné schopnosti** sú prístupné cez REST endpointy:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Vnútorné a partner schopnosti** nie sú prístupné cez REST API.

### MCP Servery {#mcp-servers}

**Verejné schopnosti** sú prístupné cez MCP:

```
MCP Server: Superdav AI Agent
Dostupné schopnosti:
- scaffold-block-theme
- activate-theme
- send-email
```

**Vnútorné schopnosti** nie sú exponované cez MCP.

**Partner schopnosti** sú prístupné len s partnerovými údajmi prihlasovania.

### Integrácia s WooCommerce {#woocommerce-integration}

**Verejné schopnosti** sú k WooCommerce prístupné:

- Správa produktov
- Príjem objednávok
- Komunikácia s klientom

**Vnútorné schopnosti** nie sú exponované pre WooCommerce.

### Chat rozhranie {#chat-interface}

**Všetky schopnosti** (verejné, vnútorné, partner) sú prístupné v chate, v závislosti od práv používateľa:

- Administrátoři vidia všetky schopnosti
- Bežní používatelia vidia len verejné schopnosti
- Partneri vidia verejné + partner schopnosti (ak sú na zozname)

## Najlepšie praxe bezpečnosti {#security-best-practices}

### Princíp najmenšej prívody (Principle of Least Privilege) {#principle-of-least-privilege}

- Nastavte schopnosti na najobmedzenjšiu viditeľnosť, ktorá ich stále umožňuje použiť
- Používajte partnerovú viditeľnosť pre citlivé operácie
- Vypnite schopnosti, ktoré nebudete používať

### Pravidelné audity {#regular-audits}

- Prejdite viditeľnosť schopností mesačne
- Skontrolujte neklassifikované schopnosti
- Odstránte prístup pre nevyužívané partnerov

### Logovanie a monitorovanie {#logging-and-monitoring}

- Monitorujte, ktoré schopnosti sa najčastejšie používajú
- Sledujte vzorce prístupu partnerov
- Alertujte na neobvyklé použitie schopností

### Tretí strójské schopnosti (Third-Party Abilities) {#third-party-abilities}

- Prejdite tretí strójské schopnosti pred ich aktiváciou
- Explicitne ich klasifikujte
- Začnite s vnútornou alebo partnerovou viditeľnosťou
- Promovujte na verejnú len po overení

## Řešení problémů {#troubleshooting}

**Možnost se neobjevuje v seznamu**
- Ověřte, že možnost je nainstalována a aktivní
- Zkontrolujte, zda je plugin/addon zapojen
- Přezačtěte stránku (Refresh)

**Nemohu změnit viditelnost možnosti**
- Ověřte, že máte správné administrativní oprávnění
- Zkontrolujte, zda možnost není zablokována pluginem
- Zkuste vypnout konfliktní pluginy

**Partner nemůže k možnosti přístup**
- Ověřte, že partner je v seznamu povolení (allow-list)
- Zkontrolujte, zda viditelnost možnosti je nastavena na Partner
- Potvrďte, že údaje o přístupu partnera jsou správné
- Zkontrolujte API logy na chyby autentizace

**Nezařazené možnosti se neustále objevují**
- Projděte a zařaďte je v administrativních upozorněních (admin notice)
- Ověřte, že vaše klasifikace byla uložena
- Zkontrolujte, zda poskytovatel možnosti je aktuální

## Migrace z Legacy režimu {#migration-from-legacy-mode}

Pokud si aktualizujete starší verzi Superdav AI Agent:

- Všechny existující možnosti jsou automaticky zařazeny jako Public (Veřejné)
- Projděte a upravte viditelnost podle potřeby
- Žádná akce není nutná, pokud nechcete přístup omezit

Pro více informací o přechodu na integraci s native Abilities API se podívejte do **Migrace z režimu třetích stran (Third-Party Mode Migration)**.

## Další kroky {#next-steps}

Po nakonfigurování viditelnosti možností:

1. **Projděte své možnosti**: Auditujte všechny nainstalované možnosti
2. **Zařaďte nezařazené možnosti**: Odpovězte na administrativní upozornění
3. **Nastavte partnery**: Přidejte partnery, pokud používáte viditelnost Partner
4. **Monitorujte využití**: Sledujte, které možnosti jsou nejvíce využívány
5. **Dokumentujte rozhodnutí**: Udržujte poznámky o tom, proč jste si pro každou úroveň viditelnosti zvolili konkrétní nastavení
