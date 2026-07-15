---
title: '9. Tanlessonya: Árazás a profitért'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# 9. Bölöm: Árazás a Profitért

A 5. bölségerben meghatároztuk a FitSite csomagok kezdeti árainak. Most finomítjuk az árazási stratégiát olyan technikákkal, amelyek növelik a bevételt, ösztönzik az emelkedést és csökkentik a „churn”-ot (elhasználódást).

## Hol maradtunk? {#where-we-left-off}

A FitSite rendelkezik csomagokkal, sablonokkal, fizetési folyamattal (checkout), márkanonosítással (branding) és bevezetési folyamattal (onboarding). Az elején az árak $49/$99/$199 havonta voltak. Most arra kell, hogy ezek az árak még jobban dolgozzanak.

## Árazási elvek a Niche Platformokhoz {#pricing-principles-for-niche-platforms}

### Árazás az Érték alapján, nem a Költség alapján {#price-on-value-not-cost}

Az általad biztosított hosting költsége akár 5-15 dollár lehet per ügyfél oldalon. Ez nem azt jelenti, hogy az árad 20 dollárnak kell lennie. Te nem hostinget adsz el. Te adsz el:

- Egy professzionális fitness weboldalt, amelyet kézi módon 2000-5000 dollár között lehetne építeni
- Folyamatos karbantartást, frissítést és biztonságot, amiről az ügyfélnek nem kell gondolkodnia
- Niche-specifikus funkciókat, amelyeket az általános szerkesztők nem kínálnak
- Egy olyan platform hitelességét, amelyet az iparázukra építettek

Árazd az alapján, hogy milyen értéket adsz, nem pedig az alapján, hogy mennyibe kerülnek neked.

### Összehasonlítás Alternatívákhoz {#anchor-to-alternatives}

Amikor egy fitness stúdió tulajdonos értékelгээre kerül a FitSite, összehasonlítja azt:

- **Webfejlesztő alkalmazása**: 2000-5000 dollár előleg + 50-100 dollár/havonta karbantartás
- **Wix/Squarespace**: 16-45 dollár/havonta, de nincs fitness-specifikus funkció, saját maga építi
- **Semmit sem csinálni**: Elveszett tagok, akik nem találják meg online

49-199 dollár/havonta árazás mellett a FitSite olcsóbb, mint egy webfejlesztő, képább, mint a általános szerkesztők, és sokkal jobb, mint egy teljesen más weboldal.

## Árazási Variációk Megvalósítása {#implementing-price-variations}

Az éves árazás ösztönzi a kötelezettséget és csökkenti a „churn”-ot. Navigálj minden csomag **Price Variations** (Árazási változatok) fülére, és add hozzá az éves opciókat:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Add hozzá egy **Period Selection** (Időszak kiválasztás) mezőt a fizetési űrlapjához, hogy az ügyfelek átválaszthatják a havi és az éves számlázás között. Látogass el a [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) oldalon.

### Miért működik az éves árazás? {#why-annual-pricing-works}

- **Neked**: Előre fizetett készpénz, alacsonyabb „churn” (az éves fizetők kevésbé valószínű, hogy lemondanak idő közben)
- **Ügyfelednek**: Valódi megtakarítás, költségvetési előrevető képesség

## Beállítási Díjak (Setup Fees) {#setup-fees}

Fontos lehet egy egyszeri beállítási díjat (setup fee) olyan csomagok esetén, amelyek kézi konfigurációt igényelnek:

- **Starter**: Nincs beállítási díj (eltakarítja a bemeneti akadályokat)
- **Growth**: 99 dollári beállítási díj (kövьeti a saját domain konfigurációját és az első konzultációt)
- **Pro**: 299 dollári beállítási díj (kövьeti a több helyszíni beállítást és az onboarding hívást)

Konfiguráld a beállítási díjakat minden csomag árazási szekciójában. Részletesebb információkért lásd a [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) oldalon.

## Próbaidőszakok (Trial Periods) {#trial-periods}

Egy próbaidő biztosítása csökkenti a regisztrációk akadályait, de bevezetheti a nem-konverziós kockázatot. A FitSite esetén:

- **7 napos ingyenes próbaidő** csak a Starter csomag esetén
- Nincs próbaidő a Growth és Pro esetén (ezek az ügyfelek kötelezettsége magasabb, és várhatóan fizetnek)

Konfiguráld a próbaidőt a Starter csomag árazási szekciójában az **Offer Trial** kapcsoló bekapcsolásával és a tartomány 7 napra állításával.

### Hogyan lehet a próbaidőből konverzni? {#making-trials-convert}

Egy próbaidő csak akkor működik, ha az ügyfél értéket tapasztal a próbaidő alatt. Az onboarding sorozatod (8. bölség) itt kulcsfontosságú – az üdvözlő e-maileket úgy kell időzíteni, hogy a 7 napos ablakon belül elkövetjék a felhasználást.

## Kedvkuponok (Discount Codes) {#discount-codes}

Létrehozj stratégiai kedvkuponokat (discount codes) konkrét célokra:

- **FITLAUNCH** – 30% kedvezmény az első 3 hónapra (indítási akcióhoz)
- **ANNUAL20** – 20% kedvezmény az éves csomagokra (ha nem van már kedvezmény)
- **REFERRAL** – 1 hónap ingyenes (ügyfél ajánlás esetén)

Navigálj a **Ultimate Multisite > Discount Codes** menüpontra ezek létrehozásához. Részletesebb információkért lásd a [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) oldalon.

:::tip Ne kedvezíts alapértelmezetten
A kedvezmények stratégiai eszközöknek kell, nem pedig állandó elemeknek. Ha mindenki kedvezményt kap, az nem kedvezmény – az a valódi árad. Hascold őket konkrét kampányokhoz, ajánlásokhoz és időkorlátolt akciókhoz.
:::

## Adókezelés (Tax Handling) {#tax-handling}

Ha olyan jogviszonyban működésed, ahol adóbelevétek kell a behajtaniak:

1. Konfiguráld az adóáthatárokat a **Ultimate Multisite > Settings > Taxes** menüpontban
2. Árold ki az adó kategóriákat a csomagokhoz
3. Győződj meg róla, hogy a számlák helyesen jelenítik meg az adót

Részletes konfigurációkért lásd a [Tax Handling](/user-guide/payment-gateways/tax-handling) oldalon. Ha nemzetközileg ügyfeleket szolgátozol, fontolja meg a [VAT addon](/addons/vat) használatát az EU megfelelőség érdekében.

## Az Árazás Áttekintése {#reviewing-your-pricing}

A kiindítás után negyedévente térj vissza az árazáshoz. Figyelj rá:

- **Konverziós arány csomagonként**: Ha a Starter csomag jól konvertál, de a Growth nem, az elválasztó túl nagy lehet
- **Emelkedési arány**: Ha csak néhány ügyfél emelkedik a Starter-tól a Growth-hoz, az Growth csomag nem kínál elég hozzáadott értéket
- **Churn csomagonként**: Ha az éves ügyfelek kevesebben „churn-olnak”, akkor erőteljesebben kell akcentálni az éves árazást
- **Versenyző árazás**: Mit kérnek az alternatívák? Megfelelően pozícionálódottál?

## A FitSite Hálózatának Állapotát {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo vagy $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo vagy $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo vagy $1,908/yr) + $299 setup fee
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

## Amit Építettünk E Bölségerben {#what-we-built-this-lesson}

- **Éves árazás** 20% kedvezménnyel a kötelezettség ösztönzésére
- **Beállítási díjak** a magasabb szintű csomagokon az onboarding munkára
- **Próbaidőszak** az alapcsomagon a regisztrációs akadályok csökkentésére
- **Stratégiai kedvkuponok** a kiindításra, ajánlásokra és kampányokra
- **Adókonfiguráció** megfelelően számlázáshoz
- **Árazási áttekintő keretrendszer** folyamatos optimalizációhoz

---

**Következő:** [10. Bölöm: Kiindítási nap](lesson-10-launch) – a kiindítás előtti ellenőrzőlista és a működésbe helyezés.
