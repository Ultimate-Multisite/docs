---
title: 'Lekcia 7: Urobte si to po svojom'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lekcia 7: Urobte z toho svoj produkt

Vaši zákazníci by nikdy nemali mať pocit, že používajú „nejaký WordPress plugin“. Mali by mať pocit, že používajú FitSite -- platformu vytvorenú pre ich odvetvie. Táto lekcia sa venuje brandingu, white-labelingu a tomu, ako dosiahnuť, aby platforma pôsobila ako produkt.

## Kde sme skončili {#where-we-left-off}

FitSite má funkčný checkout tok, ktorý prevedie majiteľov fitness štúdií od výberu plánu až po živú stránku. Teraz zabezpečíme, aby celý zážitok pôsobil ako jednotný, brandovaný produkt.

## Doména vašej platformy {#your-platform-domain}

Základom vašej značky je vaša doména. Pre FitSite:

- **Hlavná doména**: `fitsite.com` (vaša marketingová stránka a koreň siete)
- **Zákaznícke stránky**: `studioname.fitsite.com` (subdomény)
- **Vlastné domény**: Zákazníci na plánoch Growth a Pro si môžu namapovať vlastnú doménu

### Nastavenie vašej domény {#setting-up-your-domain}

1. Zaregistrujte doménu svojej platformy
2. Nasmerujte ju na svojho poskytovateľa hostingu
3. Nakonfigurujte wildcard DNS (`*.fitsite.com`) pre zákaznícke subdomény
4. Uistite sa, že wildcard SSL je aktívne

Podrobné pokyny nájdete v časti [Ako nakonfigurovať mapovanie domén](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-labeling admin prostredia {#white-labeling-the-admin-experience}

Keď sa majiteľ fitness štúdia prihlási do dashboardu svojej stránky, mal by vidieť vašu značku, nie branding WordPress alebo Ultimate Multisite.

### Vlastná prihlasovacia stránka {#custom-login-page}

Prispôsobte prihlasovaciu stránku WordPress tak, aby zobrazovala:

- Vaše logo FitSite
- Vizuály na pozadí vhodné pre fitness
- Farby vašej značky

### Branding dashboardu {#dashboard-branding}

Použite doplnok [Admin Page Creator](/addons/admin-page-creator) alebo vlastné CSS na:

- Nahradenie loga WordPress vaším logom FitSite
- Prispôsobenie farebnej schémy adminu tak, aby zodpovedala vašej značke
- Pridanie vlastného widgetu dashboardu s rýchlymi odkazmi a pomocnými zdrojmi špecifickými pre fitness

### Vlastné admin stránky {#custom-admin-pages}

Zvážte vytvorenie vlastných admin stránok, ktoré zvýraznia najrelevantnejšie akcie pre majiteľov fitness štúdií:

- „Upravte svoj rozvrh lekcií“
- „Aktualizujte profily trénerov“
- „Zobraziť vašu stránku“

Tým sa zníži krivka učenia, pretože akcie relevantné pre danú niku budú v popredí namiesto toho, aby boli skryté v štandardnom menu WordPress.

## Branding vašej komunikácie {#branding-your-communications}

Každý e-mail, faktúra a oznámenie by mali posilňovať vašu značku.

### Systémové e-maily {#system-emails}

Prejdite na **Ultimate Multisite > Settings > Emails** a prispôsobte všetky systémové e-maily:

- **Meno odosielateľa**: FitSite
- **E-mail odosielateľa**: hello@fitsite.com
- **E-mailové šablóny**: Použite farby a logo svojej značky
- **Jazyk**: V celom texte špecifický pre fitness

Kľúčové e-maily na prispôsobenie:

| E-mail | Generická verzia | Verzia FitSite |
|-------|----------------|-----------------|
| Uvítanie | „Vaša nová stránka je pripravená“ | „Webová stránka vášho fitness štúdia je live“ |
| Potvrdenie platby | „Platba prijatá“ | „Platba za FitSite subscription potvrdená“ |
| Koniec skúšobnej verzie | „Vaša skúšobná verzia čoskoro končí“ | „Vaša skúšobná verzia FitSite končí o 3 dni -- udržte web svojho štúdia live“ |

### Faktúry {#invoices}

Prispôsobte šablóny faktúr pomocou:

- Vášho loga FitSite a farieb značky
- Údajov o vašej firme
- Názvov produktov špecifických pre fitness (nie generických ID plánov)

## Stránka orientovaná na zákazníkov {#the-customer-facing-site}

Vaša hlavná doména (`fitsite.com`) potrebuje marketingovú stránku, ktorá predáva platformu. Je oddelená od adminu siete Ultimate Multisite -- je verejnou tvárou vášho podnikania.

Kľúčové stránky:

- **Domovská stránka**: Jasná hodnotová ponuka pre fitness podniky
- **Funkcie**: Čo FitSite robí, vyjadrené fitness terminológiou
- **Cenník**: Vaše tri plány s porovnaním funkcií špecifických pre niku
- **Príklady**: Ukážkové stránky vytvorené na platforme
- **Registrácia**: Odkazy na váš checkout formulár

:::tip Vaša marketingová stránka môže byť sieťovou stránkou
Vytvorte svoju marketingovú stránku ako stránku v rámci vlastnej siete. Umožní vám to spravovať ju z rovnakého dashboardu a zároveň demonštrovať možnosti vašej vlastnej platformy.
:::

## Vlastná doména pre zákazníkov {#custom-domain-for-customers}

Pre zákazníkov na plánoch, ktoré zahŕňajú vlastné domény, proces jasne zdokumentujte:

1. Zákazník si zaregistruje alebo prevedie svoju doménu k registrátorovi
2. Zákazník aktualizuje DNS tak, aby smerovalo na vašu platformu (uveďte presné záznamy)
3. Ultimate Multisite sa postará o mapovanie domény a SSL

Vytvorte článok pomocníka alebo položku v znalostnej databáze špeciálne pre tento proces, napísanú pre netechnických majiteľov fitness štúdií.

## Sieť FitSite doteraz {#the-fitsite-network-so-far}

```
Sieť FitSite
├── WordPress Multisite (režim subdomén)
├── Ultimate Multisite (nakonfigurované + brandované)
├── Doména platformy (fitsite.com + wildcard SSL)
├── Šablóny stránok (Studio Essential, Gym Pro, Fitness Chain)
├── Produkty (Starter, Growth, Pro + Order Bumps)
├── Checkout tok (špecifický pre niku, otestovaný)
├── Branding
│   ├── Vlastná prihlasovacia stránka
│   ├── Brandovaný admin dashboard
│   ├── Systémové e-maily špecifické pre niku
│   ├── Brandované faktúry
│   └── Marketingová stránka na fitsite.com
└── Pripravené na onboarding tok (ďalšia lekcia)
```

## Čo sme v tejto lekcii vytvorili {#what-we-built-this-lesson}

- **Doména platformy a DNS** nakonfigurované pre brandovaný zážitok
- **White-label admin** s brandingom FitSite naprieč celým prostredím
- **Prispôsobená komunikácia** -- e-maily, faktúry a oznámenia všetky v súlade so značkou
- **Marketingová stránka**, ktorá predáva FitSite majiteľom fitness štúdií
- **Dokumentácia k vlastnej doméne** pre zákazníkov, ktorí chcú vlastnú doménu

---

**Ďalej:** [Lekcia 8: Onboarding zákazníkov](lesson-8-onboarding) -- navrhneme zážitok, ktorý premení novú registráciu na aktívneho, spokojného zákazníka.
