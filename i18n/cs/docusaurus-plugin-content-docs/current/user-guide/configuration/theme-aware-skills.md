---
title: Umělobyté do témy
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Funkce závislé na tématu

Superdav AI Agent v1.10.0 obsahuje čtyři nové funkce závislé na tématu, které se automaticky přizpůsobí vašemu aktivnímu tématu WordPress. Tyto funkce poskytují specializované pokyny a možnosti, které jsou navrženy s ohledem na architekturu a funkce vašeho tématu.

## Co jsou funkce závislé na tématu?

Funkce závislé na tématu jsou předkonfigurované znalostní báze a sadu nástrojů, které si asistenta AI automaticky vybere na základě tématu WordPress, které je aktuálně aktivní na vašem webu. Když přepnete téma, dostupné funkce asistenta se automaticky aktualizují – není nutná ruční konfigurace.

Každá funkce zahrnuje:

- **Dokumentaci specifickou pro téma** — pokyny k používání a přizpůsobení tématu
- **Odkazy na bloky a vzory** — dostupné bloky, vzory a designové možnosti
- **Příklady přizpůsobení** — kódové úryvky a vzory konfigurace pro běžné úkoly
- **Nejlepší praxe** — doporučení pro architekturu a pracovní postup tématu

## Dostupné funkce závislé na tématu

### Block Themes (Bloková témata)

**Používá se pro:** Témata, která používají blokovou architekturu WordPressu (Full Site Editing).

Funkce Block Themes poskytuje pokyny k:

- Vytváření a úpravě šablon pomocí editoru bloků
- Práci s blokovými vzory a recyklovatelnými bloky
- Přizpůsobení globálních stylů a nastavení theme.json
- Používání bloků a variant tématu
- Vytváření vlastních blokových vzorů pro váš web

**Automaticky se aktivuje, když:** Vaše aktivní téma je blokové téma (podporuje funkci `block-templates`).

### Classic Themes (Klasická témata)

**Používá se pro:** Tradiční témata WordPressu, která používají PHP šablony a klasický editor.

Funkce Classic Themes poskytuje pokyny k:

- Práci s PHP soubory šablon a hooky
- Přizpůsobení vzhledu tématu pomocí Customizeru
- Používání widgetových oblastí a bočních panelů
- Úpravě CSS a vývoji pomocí dceřínského tématu (child theme)
- Pochopení hierarchie tématu a tagů šablon

**Automaticky se aktivuje, když:** Vaše aktivní téma je klasické (neblokové) téma.

### Kadence Blocks

**Používá se pro:** Weby, které používají plugin Kadence Blocks pro pokročilý blokový design.

Funkce Kadence Blocks poskytuje pokyny k:

- Používání pokročilé knihovky bloků Kadence (Hero, Testimonials, Pricing atd.)
- Konfiguraci nastavení bloků Kadence a responsivní možnosti
- Vytváření vlastních rozložení pomocí bloků sítě a kontejneru Kadence
- Integrovaní bloků Kadence se svým tématem
- Využívání designového systému a přednastavení Kadence

**Automaticky se aktivuje, když:** Na vašem webu je aktivní plugin Kadence Blocks.

### Kadence Theme

**Používá se pro:** Weby, které používají téma Kadence pro blokový design a přizpůsobení.

Funkce Kadence Theme poskytuje pokyny k:

- Přizpůsobení tématu Kadence pomocí globálních stylů a theme.json
- Používání vestavěných blokových vzorů a šablon Kadence
- Konfiguraci nastavení a možností tématu Kadence
- Vytváření vlastních designů pomocí designového systému Kadence
- Integrovaní Kadence s populárními pluginy a nástroji

**Automaticky se aktivuje, když:** Vaše aktivní téma je téma Kadence.

## Jak se funkce vybírají

Asistent automaticky detekuje vaše aktivní téma a nainstalované pluginy při každé zprávě. Pokud je k dispozici odpovídající funkce závislá na tématu, je automaticky načtena do kontextu asistenta. Nemusíte funkce ručně povolovat ani přepínat.

### Více funkcí

Pokud se na váš web vztahuje více funkcí (například máte aktivní jak Kadence Blocks, tak i Kadence Theme), asistent má přístup ke všech platných funkcích a může se odkazovat na pokyny z každé z nich.

### Přepínání témat

Když změníte své aktivní téma, dostupné funkce asistenta se automaticky aktualizují v následující zprávě. Například:

1. Používáte blokové téma s aktivní funkcí **Block Themes**.
2. Přepnete se na klasické téma.
3. V vaší další zprávě je funkce **Classic Themes** automaticky načtena a funkce **Block Themes** již není k dispozici.

## Používání funkcí závislých na tématu

Aby bylo možné využít funkci závislou na tématu, stačí v chatovém rozhraní popsat, co chcete udělat. Asistent automaticky odkazuje na vhodné pokyny z dané funkce.

### Příklady dotazů

**Pro Block Themes:**
> "Vytvořit sekci s herním obrázkem a centrovým textem pomocí blokových vzorů."

**Pro Classic Themes:**
> "Přidat vlastní widgetovou oblast do bočního panelu pomocí dceřínského tématu."

**Pro Kadence Blocks:**
> "Vytvořit sekci s svědectvím pomocí bloku Testimonials Kadence."

**Pro Kadence Theme:**
> "Přizpůsobit rozložení hlavičky a styl navigace."

Asistent poskytne pokyny a kódové příklady specifické pro vaše aktivní téma a pluginy.

:::note
Funkce závislé na tématu jsou automaticky dostupné v Superdav AI Agent v1.10.0 a novějších. Není vyžadována žádná dodatečná příprava ani konfigurace.
:::
