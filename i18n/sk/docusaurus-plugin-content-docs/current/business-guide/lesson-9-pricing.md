---
title: 'Lekcia 9: Cenotvorba pre zisk'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lekcia 9: Cenotvorba pre zisk

V Lekcii 5 sme nastavili počiatočné ceny pre plány FitSite. Teraz spresníme cenovú stratégiu pomocou techník, ktoré zvyšujú príjmy, podporujú prechody na vyššie plány a znižujú churn.

## Kde sme skončili

FitSite má zavedené plány, šablóny, checkout, branding a onboarding. Počiatočné ceny boli $49/$99/$199 mesačne. Teraz zabezpečíme, aby tieto ceny pracovali efektívnejšie.

## Princípy cenotvorby pre špecializované platformy

### Stanovujte cenu podľa hodnoty, nie nákladov

Vaše náklady na hosting môžu byť $5-$15 za zákaznícku stránku. To však neznamená, že vaša cena má byť $20. Nepredávate hosting. Predávate:

- Profesionálnu fitness webovú stránku, ktorej vývoj na mieru by stál $2,000-$5,000
- Priebežnú údržbu, aktualizácie a bezpečnosť, na ktoré nemusia myslieť
- Funkcie špecifické pre daný segment, ktoré všeobecné nástroje na tvorbu stránok neponúkajú
- Dôveryhodnosť platformy vytvorenej pre ich odvetvie

Stanovujte cenu podľa hodnoty, ktorú poskytujete, nie podľa nákladov na jej dodanie.

### Ukotvite cenu voči alternatívam

Keď majiteľ fitness štúdia hodnotí FitSite, porovnáva ho s:

- **Najatím webového vývojára**: $2,000-$5,000 vopred + $50-$100/mesiac za údržbu
- **Wix/Squarespace**: $16-$45/mesiac, ale bez funkcií špecifických pre fitness; stránku si vytvárajú sami
- **Nerobením ničoho**: Stratení členovia, ktorí ich nevedia nájsť online

Pri $49-$199/mesiac je FitSite lacnejší než vývojár, schopnejší než všeobecné nástroje na tvorbu stránok a nekonečne lepší než žiadna webová stránka.

## Implementácia cenových variácií

Ročné ceny podporujú záväzok a znižujú churn. Prejdite na kartu **Price Variations** každého plánu a pridajte ročné možnosti:

| Plán | Mesačne | Ročne (mesačne) | Ročne spolu | Úspora |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% zľava |
| Growth | $99/mo | $79/mo | $948/year | 20% zľava |
| Pro | $199/mo | $159/mo | $1,908/year | 20% zľava |

Do svojho checkout formulára pridajte pole **Period Selection**, aby zákazníci mohli prepínať medzi mesačnou a ročnou fakturáciou. Pozrite si [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Prečo ročné ceny fungujú

- **Pre vás**: Hotovosť vopred, nižší churn (zákazníci, ktorí platia ročne, majú menšiu pravdepodobnosť zrušenia uprostred obdobia)
- **Pre nich**: Skutočná úspora, predvídateľnosť rozpočtu

## Zriaďovacie poplatky

Zvážte jednorazový zriaďovací poplatok pri plánoch, ktoré zahŕňajú praktickú konfiguráciu:

- **Starter**: Bez zriaďovacieho poplatku (odstráňte bariéry vstupu)
- **Growth**: Zriaďovací poplatok $99 (pokrýva konfiguráciu vlastnej domény a úvodnú konzultáciu)
- **Pro**: Zriaďovací poplatok $299 (pokrýva nastavenie viacerých lokalít a onboarding hovor)

Zriaďovacie poplatky nakonfigurujte v cenovej sekcii každého plánu. Podrobnosti nájdete v časti [Vytvorenie vášho prvého predplatného produktu](/user-guide/configuration/creating-your-first-subscription-product).

## Skúšobné obdobia

Ponúknutie skúšobného obdobia znižuje prekážky pri registrácii, ale prináša riziko, že sa používateľ nestane platiacim zákazníkom. Pre FitSite:

- **7-dňová bezplatná skúška** iba pri pláne Starter
- Žiadna skúška pri Growth a Pro (títo zákazníci sú rozhodnutejší a očakávajú, že budú platiť)

Skúšku nakonfigurujte v cenovej sekcii plánu Starter zapnutím prepínača **Offer Trial** a nastavením trvania na 7 dní.

### Ako dosiahnuť konverzie zo skúšok

Skúška funguje iba vtedy, ak zákazník počas skúšobného obdobia zažije hodnotu. Vaša onboarding sekvencia (Lekcia 8) je tu kľúčová -- uvítacie e-maily by mali byť načasované tak, aby podporili zapojenie v rámci 7-dňového okna.

## Zľavové kódy

Vytvorte strategické zľavové kódy na konkrétne účely:

- **FITLAUNCH** -- 30% zľava na prvé 3 mesiace (na spúšťaciu promo akciu)
- **ANNUAL20** -- 20% zľava na ročné plány (ak už nie sú zľavnené)
- **REFERRAL** -- 1 mesiac zadarmo (za odporúčania zákazníkov)

Na ich vytvorenie prejdite do **Ultimate Multisite > Discount Codes**. Úplný návod nájdete v časti [Vytváranie zľavových kódov](/user-guide/configuration/creating-discount-codes).

:::tip Nezľavňujte predvolene
Zľavy by mali byť strategickými nástrojmi, nie trvalou súčasťou. Ak zľavu dostane každý, nie je to zľava -- je to vaša skutočná cena. Používajte ich na konkrétne kampane, odporúčania a časovo obmedzené promo akcie.
:::

## Práca s daňami

Ak pôsobíte v jurisdikcii, ktorá vyžaduje výber daní:

1. Nakonfigurujte daňové sadzby v **Ultimate Multisite > Settings > Taxes**
2. Priraďte svojim plánom daňové kategórie
3. Uistite sa, že faktúry správne zobrazujú daň

Podrobnú konfiguráciu nájdete v časti [Práca s daňami](/user-guide/payment-gateways/tax-handling). Ak obsluhujete zákazníkov medzinárodne, zvážte [VAT addon](/addons/vat) na súlad s pravidlami EÚ.

## Kontrola vašej cenotvorby

Po spustení sa k cenotvorbe vracajte štvrťročne. Sledujte:

- **Miera konverzie podľa plánu**: Ak Starter konvertuje dobre, ale Growth nie, rozdiel medzi nimi môže byť príliš veľký
- **Miera prechodov na vyšší plán**: Ak len málo zákazníkov prechádza zo Starter na Growth, plán Growth možno neponúka dostatok dodatočnej hodnoty
- **Churn podľa plánu**: Ak roční zákazníci odchádzajú menej, silnejšie propagujte ročné ceny
- **Ceny konkurencie**: Koľko si účtujú alternatívy? Máte správne pozicionovanie?

## Sieť FitSite doteraz

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Čo sme vytvorili v tejto lekcii

- **Ročné ceny** s 20 % zľavou na podporu záväzku
- **Setup poplatky** pri vyšších úrovniach na pokrytie úsilia pri onboardingu
- **Skúšobné obdobie** pri vstupnom pláne na zníženie prekážok pri registrácii
- **Strategické zľavové kódy** pre spustenie, odporúčania a kampane
- **Daňová konfigurácia** pre fakturáciu v súlade s predpismi
- **Rámec na kontrolu cien** pre priebežnú optimalizáciu

---

**Ďalej:** [Lekcia 10: Deň spustenia](lesson-10-launch) -- kontrolný zoznam pred spustením a ostré spustenie.
