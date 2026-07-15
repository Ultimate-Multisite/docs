---
title: Viditelnost schopností
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Viditelnost schopností

Superdav AI Agent v1.12.0 zavádí ovládací prvky **Viditelnosti schopností** (Ability Visibility), které určují, které rozhraní zobrazí každou schopnost. To umožňuje administrátorům jemně doladit, které schopnosti agentů jsou dostupné přes REST API, MCP servery, integrace WooCommerce a další rozhraní.

## Co je Viditelnost schopností? {#what-is-ability-visibility}

Viditelnost schopností je systém oprávnění, který kontroluje:

- **Jaké schopnosti** jsou dostupné pro agenty
- **Kde jsou zobrazeny** (REST API, MCP, WooCommerce atd.)
- **Kdo se jim může dostat** (skrze seznam povolených partnerů)
- **Jak jsou klasifikovány** (rozpoznané vs. nerozpoznané)

Každá schopnost má úroveň viditelnosti, která určuje její dostupnost v různých rozhraních.

## Úrovně viditelnosti {#visibility-levels}

### Veřejné (Public) {#public}

**Veřejné schopnosti** jsou dostupné všude:

- Koncovky REST API
- MCP servery
- Integrace WooCommerce
- Chatová rozhraní
- Všechny uživatelské role (s vhodnými oprávněními)

Příklad: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interní (Internal) {#internal}

**Interní schopnosti** jsou dostupné pouze uvnitř vaší instalace WordPressu:

- Chatová rozhraní
- Administrační panely
- Pouze pro přihlášené uživatele
- Nejsou zobrazeny přes REST API ani externí integrace

Příklad: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partnerní schopnosti** jsou dostupné pouze pro partnerům v seznamu povolených:

- Vyžaduje explicitní zápis do seznamu povolených partnerů
- Dostupné přes REST API s údaji partnera
- Dostupné přes MCP s ověřením partnera
- Není dostupné pro běžné uživatele

Příklad: `bulk-import-users`, `modify-billing`, `access-analytics`

### Zakázané (Disabled) {#disabled}

**Zakázané schopnosti** nejsou dostupné nikde:

- Nejsou zobrazeny přes žádné rozhraní
- Není dostupné v chatu
- Není dostupné v administračních panelech
- Užitečné pro zastaralé nebo experimentální schopnosti

## Správa viditelnosti schopností {#managing-ability-visibility}

### Přístup k nastavení viditelnosti schopností {#accessing-ability-visibility-settings}

1. Přejděte na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klikněte na záložku **Abilities**
3. Uvidíte seznam všech nainstalovaných schopností s jejich úrovněmi viditelnosti

### Zobrazení detailů schopnosti {#viewing-ability-details}

Klikněte na jakoukoli schopnost, abyste viděli:

- **Name**: Identifikátor schopnosti
- **Description**: Co schopnost dělá
- **Current visibility**: Veřejné, Interní, Partner nebo Zakázané
- **Partner allow-list**: Kým se dostat může (pokud je viditelnost Partner)
- **Last updated**: Kdy byla viditelnost naposledy změněna
- **Status**: Rozpoznané nebo Nerozpoznané

### Změna úrovní viditelnosti {#changing-visibility-levels}

Jak změnit viditelnost schopnosti:

1. Klikněte na schopnost v seznamu
2. Vyberte novou úroveň viditelnosti z rozbalovací nabídky
3. Pokud vyberete „Partner“, přidejte identifikátory partnerů do seznamu povolených
4. Klikněte na **Save**

Příklad:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Hromadné operace {#bulk-operations}

Jak změnit viditelnost pro více schopností:

1. Zaškrtněte políčka vedle schopností
2. Vyberte novou úroveň viditelnosti z rozbalovací nabídky hromadných akcí
3. Klikněte na **Apply**

## Seznam povolených partnerů (Partner Allow-List) {#partner-allow-list}

**Seznam povolených partnerů** kontroluje, které externí partneři mohou dostat přístup k partnerním schopnostem.

### Přidání partnerů {#adding-partners}

1. Přejděte na **Superdav AI Agent** → **Settings** → **Partners**
2. Klikněte na **Add Partner**
3. Zadejte identifikátor partnera (obvykle API klíč nebo ID organizace)
4. Volitelně přidejte název a popis partnera
5. Klikněte na **Save**

### Přiřazení schopností partnerům {#assigning-abilities-to-partners}

Po přidání partnera:

1. Přejděte na záložku **Abilities**
2. Najděte schopnost s partnerní viditelností
3. Klikněte pro úpravu
4. V sekci „Partner allow-list“ zaškrtněte políčka pro partnery, kteří by měli mít přístup
5. Klikněte na **Save**

### Zrušení přístupu partnera {#revoking-partner-access}

Jak odebrat přístup partnera:

1. Upravte schopnost
2. Odzaškrtněte políčko partnera v seznamu povolených
3. Klikněte na **Save**

Partner okamžitě ztratí přístup k této schopnosti.

## Nerozpoznané schopnosti (Unclassified Abilities) {#unclassified-abilities}

Pokud nainstalujete schopnost třetí strany, kterou Superdav AI Agent nerozpozná, je označena jako **Nerozpoznaná** (Unclassified).

### Administrační upozornění na nerozpoznané schopnosti {#admin-notice-for-unclassified-abilities}

Uvidíte administrátorské upozornění:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Prohlížení nerozpoznaných schopností {#reviewing-unclassified-abilities}

1. Klikněte na **Review Abilities** v upozornění
2. Pro každou nerozpoznanou schopnost uvidíte:
   - Název a popis schopnosti
   - Zdroj (který plugin/addon ji nainstaloval)
   - Navrhovaná úroveň viditelnosti
   - Bezpečnostní hodnocení

3. Vyberte úroveň viditelnosti:
   - **Public**: Věřte schopnosti; zobraziť ji všude
   - **Internal**: Omezit pouze na interní použití
   - **Partner**: Omezit pro konkrétní partnery
   - **Disabled**: Používat tuto schopnost ne

4. Klikněte na **Classify** k uložení vašeho rozhodnutí

### Proč klasifikovat nerozpoznané schopnosti? {#why-classify-unclassified-abilities}

Klasifikování schopností:

- **Zlepšuje bezpečnost**: Vy explicitně schválíte, co je zobrazeno
- **Zabraňuje nehodám**: Nerozpoznané schopnosti jsou výchozí zakázané
- **Umožňuje funkce**: Jakmile jsou klasifikovány, schopnost je dostupná
- **Dokumentuje rozhodnutí**: Vaše volby jsou zaznamenány pro účely auditů

## Viditelnost v různých rozhraních {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Veřejné schopnosti** jsou dostupné přes REST koncovky:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interní a partnerní schopnosti** nejsou dostupné přes REST API.

### MCP servery {#mcp-servers}

**Veřejné schopnosti** jsou dostupné přes MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interní schopnosti** nejsou zobrazeny přes MCP.

**Partnerní schopnosti** jsou dostupné pouze s údaji partnera.

### Integrace WooCommerce {#woocommerce-integration}

**Veřejné schopnosti** související s WooCommerce jsou dostupné:

- Správa produktů
- Zpracování objednávek
- Komunikace s klienty

**Interní schopnosti** nejsou dostupné pro WooCommerce.

### Chatové rozhraní {#chat-interface}

**Všechny schopnosti** (Veřejné, Interní, Partnerní) jsou dostupné v chatu, v závislosti na oprávněních uživatele:

- Administrátoři vidí všechny schopnosti
- Běžní uživatelé vidí pouze veřejné schopnosti
- Partneři vidí veřejné + partnerní schopnosti (pokud jsou v seznamu povolených)

## Nejlepší bezpečnostní praxe {#security-best-practices}

### Princip nejmenších oprávnění (Principle of Least Privilege) {#principle-of-least-privilege}

- Nastavte schopnosti na nejpřísnější viditelnost, která stále umožňuje jejich použití
- Používejte partnerní viditelnost pro citlivé operace
- Zakážete schopnosti, které nepoužíváte

### Pravidelné audity {#regular-audits}

- Kontrolujte viditelnost schopností měsíčně
- Hledejte nerozpoznané schopnosti
- Odstraňte přístup pro nepoužívané partnery

### Protokolování a monitorování {#logging-and-monitoring}

- Monitorujte, které schopnosti jsou nejčastěji použity
- Sledujte vzorce přístupu partnerů
- Alarmujte při neobvyklém použití schopností

### Schopnosti třetích stran {#third-party-abilities}

- Prohlížejte schopnosti třetích stran před aktivací
- Klasifikujte je explicitně
- Začněte s interní nebo partnerní viditelností
- Zvyšte na veřejnou pouze po ověření

## Řešení problémů (Troubleshooting) {#troubleshooting}

**Schopnost se v seznamu nezobrazuje**
- Ověřte, že je schopnost nainstalovaná a aktivní
- Zkontrolujte, že je plugin/addon aktivní
- Obnovte stránku

**Nemohu změnit viditelnost schopnosti**
- Ověřte, že máte administrátorská oprávnění
- Zkontrolujte, že schopnost není zablokována pluginem
- Zkuste deaktivovat konfliktní pluginy

**Partner nemůže dostat přístup k schopnosti**
- Ověřte, že je partner v seznamu povolených
- Zkontrolujte, že viditelnost schopnosti je nastavena na Partner
- Potvrďte, že jsou údaje partnera správné
- Zkontrolujte API logy na chyby při ověření

**Nerozpoznané schopnosti se stále objevují**
- Prohlížejte a klasifikujte je v administrátorském upozornění
- Zkontrolujte, že vaše klasifikace byla uložena
- Ověřte, že plugin poskytující schopnost je aktuální

## Migrace ze starého režimu (Legacy Mode) {#migration-from-legacy-mode}

Pokud upgradujete ze starší verze Superdav AI Agent:

- Všechny stávající schopnosti jsou automaticky klasifikovány jako Veřejné
- Prohlížejte a upravte viditelnost podle potřeby
- Žádná akce není vyžadována, pokud nechcete přístup omezit

Podívejte se na **Third-Party Mode Migration** pro více detailů o přechodu na nativní integraci Abilities API.

## Další kroky {#next-steps}

Po konfiguraci viditelnosti schopností:

1. **Prohlížejte své schopnosti**: Auditujte všechny nainstalované schopnosti
2. **Klasifikujte nerozpoznané schopnosti**: Odpovděte na administrátorské upozornění
3. **Nastavte partnery**: Přidejte partnery, pokud používáte partnerní viditelnost
4. **Monitorujte použití**: Sledujte, které schopnosti jsou nejčastěji použity
5. **Dokumentujte rozhodnutí**: Uchovávejte poznámky o tom, proč jste zvolili každou úroveň viditelnosti
