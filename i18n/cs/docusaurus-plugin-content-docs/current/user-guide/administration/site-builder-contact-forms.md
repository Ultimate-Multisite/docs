---
title: Kontakt formuláře pro Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktní formuláře v Site Builderu

Superdav AI Agent v1.10.0 přidává možnost vytvářet kontaktní formuláře přímo z chatovacího rozhraní pomocí agenta Site Builder. To vám umožňuje přidat plně funkční kontaktní formuláře na jakoukoli stránku, aniž byste opouštěli chat.

## Přehled

Funkce kontaktního formuláře Site Builder (`create_contact_form`) automaticky detekuje nainstalovaný plugin pro formuláře a vytvoří kontaktní formulář pomocí nativních funkcí tohoto pluginu. Podporované pluginy pro formuláře zahrnují:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistent automaticky vybere nejlepší dostupný plugin pro formuláře na vašem webu a vygeneruje kontaktní formulář přizpůsobený právě tomuto pluginu.

## Vytváření kontaktního formuláře

Jak vytvořit kontaktní formulář pomocí Site Builderu:

1. Otevřete chatovací panel **Gratis AI Agent** v administraci WordPressu.
2. Přepněte se na agenta **Site Builder** kliknutím na ikonu agenta v hlavičce chatu.
3. Popište kontaktní formulář, který chcete vytvořit. Například:

   > "Přidej kontaktní formulář na stránku Kontakt s poli pro jméno, e-mail, zprávu a telefonní číslo."

   Nebo jednoduše:

   > "Vytvoř kontaktní formulář pro stránku Kontakt."

4. Site Builder vygeneruje kontaktní formulář a vrátí krátký kód (shortcode), který je připraven k vložení.

## Používání vygenerovaného shortcode

Po tom, co Site Builder vytvoří kontaktní formulář, vrátí krátký kód (např. `[contact-form-7 id="123"]`). Můžete:

1. **Vložit jej na stránku nebo do příspěvku** — Zkopírujte krátký kód a vložte jej na jakoukoli stránku nebo do příspěvku pomocí editoru bloků nebo klasického editoru.
2. **Přidat jej přes Site Builder** — Požádejte Site Builder, aby formulář automaticky přidal na konkrétní stránku:

   > "Přidej kontaktní formulář na stránku Kontakt."

3. **Použít jej v šabloně** — Pokud se cítíte komfortně s PHP, můžete krátký kód přidat do souboru šablony tématu.

## Přizpůsobení kontaktního formuláře

Po vytvoření kontaktního formuláře Site Builderu můžete provést další úpravy:

### Skrze chatovací rozhraní

Požádejte Site Builderu, aby formulář upravil:

> "Aktualizuj kontaktní formulář tak, aby obsahoval pole pro předmět a aby bylo pole pro zprávu povinné."

Site Builder aktualizuje formulář a vrátí upravený krátký kód.

### Skrze administraci pluginu formulářů

Můžete formulář také přizpůsobit přímo v nastavení vašeho pluginu pro formuláře:

1. Přejděte do **Contact Form 7** (nebo do vašeho nainstalovaného pluginu pro formuláře) v administraci WordPressu.
2. Najděte formulář vytvořený Site Builderem.
3. Upravte pole formuláře, pravidla validace a e-mailové upozornění podle potřeby.

## Pluginy pro formuláře a kompatibilita

Site Builder automaticky detekuje, který plugin pro formuláře je na vašem webu nainstalován, a používá ho k vytvoření kontaktního formuláře. Pokud je nainstalováno více pluginů pro formuláře, Site Builder je prioritizuje v tomto pořadí:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Pokud není nainstalováno žádné z těchto pluginů, Site Builder doporučí, aby byl před vytvořením kontaktního formuláře nainstalován.

## E-mailová upozornění

Kontaktní formuláře vytvořené Site Builderem jsou výchozíně nakonfigurovány tak, aby odesílaly e-mailová upozornění administrátorovi webu. Můžete si upravit e-mailovou adresu příjemce a zprávu upozornění:

1. Přejděte do administrace vašeho pluginu pro formuláře.
2. Najděte formulář vytvořený Site Builderem.
3. Upravte nastavení e-mailových upozornění.

Pro podrobnější návod se podívejte do dokumentace vašeho pluginu pro formuláře:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Příklady použití

### Jednoduchý kontaktní formulář

> "Vytvoř jednoduchý kontaktní formulář s poli pro jméno, e-mail a zprávu."

### Formulář s více kroky

> "Vytvoř kontaktní formulář s prvním krokem pro kontaktní údaje a druhým krokem pro zprávu a preferovanou kontaktní metodu."

### Formulář s podmíněnou logikou

> "Vytvoř kontaktní formulář, který zobrazuje různá pole na základě výběru uživatele v rozbalovacím menu."

### Formulář s nahráváním souborů

> "Vytvoř kontaktní formulář, který uživatelům umožňuje nahrát soubor nebo přílohu."

:::note
Vytváření kontaktních formulářů je dostupné v Superdav AI Agent v1.10.0 a novějších verzích. Pro použití této funkce musí být aktivní agent Site Builder.
:::
