---
title: 'Lekce 7: Jak to udělat svým'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lekce 7: Jak to udělat svým

Vaši zákazníci by nikdy neměli pocit, že používají „jakýkoli WordPress plugin“. Měli by pocit, že používají FitSite – platformu navrženou pro jejich obor. Tato lekce pokrývá značkování, white-labeling a to, jak udělat z platformy pocit skutečného produktu.

## Kde jsme skončili

FitSite má funkční proces objednávky, který přivádí majitele fitness studií od výběru plánu až k živému webu. Nyní musíme celý zážitek tak, aby působil jako spojený, značkovaný produkt.

## Doména vaší platformy

Základem vaší značky je vaše doménové jméno. Pro FitSite:

- **Hlavní doména**: `fitsite.com` (vaše marketingové stránky a kořen sítě)
- **Zákaznické stránky**: `studioname.fitsite.com` (poddomény)
- **Vlastní domény**: Zákazníci na plánech Growth a Pro si mohou přiřadit vlastní doménu

### Nastavení domény

1. Registrujte doménu vaší platformy
2. Ukryjte ji na vaše herboovací prostředí (hosting provider)
3. Konfigurujte wildcard DNS (`*.fitsite.com`) pro poddomény zákazníků
4. Zajistěte, že je aktivní wildcard SSL

Podrobnější pokyny naleznete v [Jak nakonfigurovat mapování domény](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-labeling administrace

Když se majitel fitness studia přihlásí do svého dashboardu, by měl vidět vaši značku, ne WordPress nebo Ultimate Multisite branding.

### Vlastní stránka přihlášení

Upravte stránku přihlášení WordPress, aby zobrazovala:

- Logo vašeho FitSite
- Fotografie pro fitness prostředí
- Barvy vaší značky

### Značkování dashboardu

Použijte addon [Admin Page Creator](/addons/admin-page-creator) nebo vlastní CSS, abyste:

- Nahradili logo WordPress vaším logem FitSite
- Upravili barevnou škálu administrace tak, aby odpovídala vaší značce
- Přidali vlastní widget do dashboardu s odkazy a zdroji pro fitness a rychlé odkazy

### Vlastní stránky administrace

Zvažte vytvoření vlastních stránek administrace, které zvýrazní nejdůležitější akce pro majitele fitness studií:

- „Upravit váš rozvrh tříd“
- „Aktualizovat profily trenérů“
- „Zobrazit svůj web“

Tím se sníží křivka učení, protože se relevantní akce pro daný obor dostanou do popředí, místo aby byly pohřbeny v běžném menu WordPress.

## Značkování komunikace

Každý e-mail, faktura a upozornění by měly posilovat vaši značku.

### Systémové e-maily

Přejděte do **Ultimate Multisite > Settings > Emails** a upravte všechny systémové e-maily:

- **Z jména**: FitSite
- **Z e-mailu**: hello@fitsite.com
- **E-mailové šablony**: Použijte barvy a logo vaší značky
- **Jazyk**: Fitness specifický napříč celým

Klíčové e-maily k úpravě:

| E-mail | Obecná verze | Verze FitSite |
|-------|----------------|-----------------|
| Vítejte | „Váš nový web je připraven“ | „Váš web fitness studia je aktivní“ |
| Úhrada | „Úhrada přijata“ | „Potvrzena platba předplatného FitSite“ |
| Končí zkušební období | „Vaše zkušební období končí brzy“ | „Vaše zkušební období FitSite končí za 3 dny – udržte web vašeho studia aktivní“ |

### Faktury

Upravte šablony faktur s:

- Logo FitSite a barvy značky
- Vaše obchodní údaje
- Název produktů specifický pro fitness (ne obecní ID plánů)

## Web pro zákazníky

Vaše hlavní doména (`fitsite.com`) potřebuje marketingové stránky, které prodávají platformu. To je odděleno od administrace sítě Ultimate Multisite – je to veřejná tvář vašeho podnikání.

Klíčové stránky:

- **Úvodní stránka**: Jasní prodejní argument pro fitness podniky
- **Funkce**: Co FitSite dělá, ale v termínech fitness
- **Ceny**: Vaše tři plány s porovnáním funkcí specifickým pro obor
- **Příklady**: Zobrazte webové stránky vytvořené na platformě
- **Registrace**: Odkazy na váš formulář pro objednávku

:::tip Vaše marketingové stránky mohou být síťové stránky
Vytvořte své marketingové stránky jako stránku v rámci vaší vlastní sítě. To vám umožní spravovat je z toho samého dashboardu a ukázat schopnosti vaší vlastní platformy.
:::

## Vlastní doména pro zákazníky

Pro zákazníky, kteří mají plány zahrnující vlastní domény, dokumentujte proces jasně:

1. Zákazník registruje nebo převede svou doménu u registrátora
2. Zákazník aktualizuje DNS, aby ukazoval na vaši platformu (poskytněte přesné záznamy)
3. Ultimate Multisite zajistí mapování domény a SSL

Vytvořte článek s návodem nebo záznam do znalostní báze specificky pro tento proces, napsaný pro ne-technické majitele fitness studií.

## Síť FitSite na tuto chvíli

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Co jsme v této lekci vytvořili

- **Platforma doména a DNS** nakonfigurovány pro značkovaný zážitek
- **White-labeled admin** s brandingem FitSite napříč celou administrací
- **Upravená komunikace** – e-maily, faktury a upozornění jsou vše na značce
- **Marketingové stránky**, které prodávají FitSite majitelům fitness studií
- **Dokumentace vlastních domén** pro zákazníky, kteří chtějí vlastní doménu

---

**Další:** [Lekce 8: Onboarding zákazníků](lesson-8-onboarding) – navrhujeme zážitek, který převede novou registraci na aktivního, šťastného zákazníka.
