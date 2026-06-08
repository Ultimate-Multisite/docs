---
title: 'Ukázka 3: Nastavení vaší sítě'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lekce 3: Nastavení vaší sítě

Je čas s budováním. V této lekci nainstalujete Ultimate Multisite a nakonfigurujete základ FitSite sítě. Každé rozhodnutí zde je učiněno s ohledem na fitnessní niši.

## Kde jsme skončili

Vybrali jsme fitness studia jako naši niši a ověřili jsme si příležitost. Nyní tuto myšlenku převedeme na funkční platformu.

## Výběr hostingu

Volba vašeho hostingu je pro nišní platformu důležitější než pro jediný web. Nehostujete jeden web – hostujete síť, která vyрастěje na desítky nebo stovky webů.

### Na co si dát pozor

- **Podpora WordPress Multisite**: Ne všechny hosty zvládají multisite dobře
- **Wildcard SSL**: Základní pro sítě založené na poddoménách
- **Rozšířitelné zdroje**: Potřebujete prostor pro růst bez nutnosti migrace
- **Integrace Ultimate Multisite**: Automatické mapování domén a SSL šetří značný provozní námasí

### Doporučený přístup

Vyberte hostitele z seznamu [Kompatibilní poskytovatelé](/user-guide/host-integrations/closte). Byly testováni s Ultimate Multisite a poskytují integrace, které potřebujete pro mapování domén a automatizaci SSL.

Pro FitSite použijeme konfiguraci s poddoménami. To znamená, že webové stránky zákazníků se zpočátku objeví jako `studioname.fitsite.com`, než si případně napojí vlastní doménu.

## Instalace WordPress Multisite

Pokud ještě nemáte instalaci WordPress Multisite:

1. Nainstalujte WordPress u vašeho poskytovatele hostingu
2. Postupujte podle návodu [Jak nainstalovat WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Při zadávání údajů zvolte konfiguraci **subdomain**

:::tip Proč poddomény?
Poddomény každému webu zákazníka dávají vlastní odlišnou adresu (`studio.fitsite.com`) namísto cesty (`fitsite.com/studio`). Je to pro vaše zákazníky profesionálnější a zabraňuje konfliktům permalinků. Podrobnější srovnání naleznete v [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Instalace Ultimate Multisite

Postupujte podle návodu [Instalace Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite), abyste:

1. Nah().__ploadovali a aktivovali plugin pro celou síť
2. Spustili [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Během setup wizard si pamatujte na niši FitSite:

- **Měna**: Nastavte měnu, kterou používají vaši zákazníci fitness studií
- **Název společnosti**: "FitSite" (nebo váš zvolený název značky)
- **Logo společnosti**: Nahrajte logo vaší značky – to se zobrazí na fakturách a e-mailech

## Konfigurace pro fitness niši

Po instalaci Ultimate Multisite proveďte tyto konfigurace specifické pro niši:

### Obecná nastavení

Přejděte na **Ultimate Multisite > Settings** a nakonfigurujte:

- **Název webu**: FitSite
- **Výchozí role**: Administrator – vlastníci fitness studií potřebují plnou kontrolu nad obsahem svého webu
- **Registrace**: Zapněte registraci uživatelů, aby si vlastníci studií mohli sami zaregistrovat

### Konfigurace e-mailů

Vaše systémové e-maily by měly mluvit jazykem vaší niše. Přejděte na **Ultimate Multisite > Settings > Emails** a upravte:

- Nahrazení obecného jazyka "váš nový web" specifickou komunikací pro fitness
- Příklad předmětu pro přivítání: "Váš web fitness studia je připraven"
- Příklad těla pro přivítání: Odvolání na jejich studio, třídy a zahájení práce s jejich fitness webem

Drobnosti tyto vylepšíme v Lekci 8 (Onboarding zákazníků), ale nastavením tónu nyní zajistíme, že i rané testovací registrace budou působit specificky pro niši.

### Konfigurace domény

Pokud používáte kompatibilního poskytovatele hostingu, nakonfigurujte mapování domén nyní:

1. Přejděte na **Ultimate Multisite > Settings > Domain Mapping**
2. Postupujte podle integrace pro váš konkrétní hostitel
3. Otestujte, že nové subsites získají SSL automaticky

Tím zajistíte, že když začneme vytvářet šablony a testovací weby v příští lekci, vše bude fungovat od začátku do konce.

## FitSite síť na tuto chvíli

Na konci této lekce máte:

```
FitSite Network
├── WordPress Multisite (režim poddomény)
├── Ultimate Multisite (instalovaný a nakonfigurovaný)
├── Hosting s wildcard SSL
├── Konfigurované mapování domén
├── Nišní e-mailové šablony (počáteční)
└── Připraveno na šablony webů (příští lekce)
```

## Co jsme v této lekci vytvořili

- **Funkční instalace WordPress Multisite** v režimu poddomény
- **Ultimate Multisite nainstalovaný** a nakonfigurovaný s brandingem FitSite
- **Hosting a SSL** nastavené pro rostoucí síť
- **Mapování domén** nakonfigurované pro vašeho poskytovatele hostingu
- **Nišní tón e-mailů** zavedený od prvního dne

---

**Další:** [Lekce 4: Vytváření nišních šablon](lesson-4-templates) – vytvoříme šablony webů, které vlastníci fitness studií skutečně chtějí používat.
