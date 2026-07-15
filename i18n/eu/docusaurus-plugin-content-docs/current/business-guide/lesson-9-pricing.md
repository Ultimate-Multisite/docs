---
title: 'Lezioa 9: Prezioa zaharrak'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Ustea 9: Prezioak eta Gainara

Eskaintza 5-ean FitSite plan-ek beste prezioak ezartu dugu. Orain, merkatuaren merkataritza estrategiak estaltzeko teknike batzuk erabilizuz, revenusak handitu, upgradeak emateko eta churn (irudiak aukeratzeko) azaltzeko.

## Nondorean Orain Zuztitu Dugu {#where-we-left-off}

FitSite-ek planak, templateak, checkouta, brandingak eta onboardingak dagoen. Lehen prezioak bulanatu $49/$99/$199 eramania izan ziren. Orain hori prezioak handiagoz lan egin dezaten dugu.

## Niche Plataformakako Prezio Prinsipialak {#pricing-principles-for-niche-platforms}

### Erabendu Ardi, Ez Kostu {#price-on-value-not-cost}

Zerbitzuaren kostuak irudiari $5-$15 baina pertsona site bat. Horrak pretziokoa $20 ez duzaintzen du. Sizkizki hosting ez dutena saldu egiten duzu. Saldu egiten duzu:

- Profesional fitness websteina, eta hori dezake $2.000-$5.000 eratu behar izan dugu eskustoma egin dezake
- Udal maintenanceak, updateak eta segurtasunaren, eta horiek ez dutena garrantzitsua da
- Niche-spazio-ko aukerak, eta generic builderrak ez ematen dituenak
- Horren industria-ko irudi bat duen plataforma

Zerbitzuaren erabilera onartu behar duen ardiari, ez erabilera.

### Alternatibezkatuta Ekitatu (Anchor) {#anchor-to-alternatives}

Fitness studioaren propietaria FitSitea ebaloratzean, hori compareatzen du:

- **Web developer hartzea**: $2.000-$5.000 lehenago + bulanatu $50-$100 maintenance
- **Wix/Squarespace**: bulanatu $16-$45 baina fitness-spazio-ko aukerak ez dutena, hori berehala egin duzu
- **Ez egin ez dituzte**: Online aurkitzen ez duen miurrik

Bulanatu $49-$199, FitSitea developer lagunari baino txikiago da, generic builderrak eta websteina ez eginduenak erdugo da.

Zuzendararen prezioak adierazten duen horrek adeti eta iradokizun azaltzen du. Plan baten **Price Variations** tabera jarraitu eta annual opsioak gehitu:

| Plan | Mensual | Annual (mens per month) | Annual Total | Ahorrak |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% ezarrituta |
| Growth | $99/mo | $79/mo | $948/year | 20% ezarrituta |
| Pro | $199/mo | $159/mo | $1,908/year | 20% ezarrituta |

Checkout form-eko **Period Selection** field bat gehitu, guztiak lekuen iradokizuna eta mensual iradokizun artean aldatu dezaten. [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ikusi.

### Nola funtzionatzen du annual prezioak? {#implementing-price-variations}

- **Zure partean**: Aurrekiko diru, txikiago churn (annualan iradokizuna egiten dituzten klientak erabilgarri ez dira zeharren middlean cancelatzeko).
- **Gehiago**: Ahorrak gertu, aurrekontuaren iradokizun ezagutza.

## Setup Fees (Adeti-ezpenak) {#why-annual-pricing-works}

Handiaren konfiguratura edo adeti behar dituzten planak dira, horiek bitartean batzuen adeti-ezpena kontuan hartu:

- **Starter**: Adeti-ezpena ez da (adeti-ezpenak erraztasunak abazpenak).
- **Growth**: $99 adeti-ezpena (custom domain konfiguratura eta lehen konsultazioa hartzen du).
- **Pro**: $299 adeti-ezpena (multi-location setup eta onboarding calla hartzen du).

Plan baten prezio zeisten adeti-ezpenak konfiguratatu. Detalleak [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) ikusi.

## Trial Periods (Probarren Barki) {#setup-fees}

Trial period bat emateak signup iradokizunaren erraztasuna arautzen du baina non konvertizio ezarritzen duen riskua sortzen du. FitSite-eko:

*7-egun libre prueba* es solo para el plan Starter
No hay prueba en Growth y Pro (estos clientes están más comprometidos y esperan pagar)

Konfigura la prueba en la sección de precios del plan Starter activando el interruptor **Offer Trial** y estableciendo la duración en 7 días.

### Prueba kon konvertizatu {#trial-periods}

Prueba only funksiak duenean, klientea erabilera eta garrantzia da trialen ondorioz. Sailapenaren diseinu (Lesson 8) da garrantzitsia hemenan -- email-ekualdeak daingoa zuzenduko engagementa 7-egunko lapurtuaren beldurrak.

## Kodiko eskaintzak (Discount Codes) {#making-trials-convert}

Jartzen dut eskaintzak estrategiko diren zehatzeko:

- **FITLAUNCH** -- 30% ezagutzeko (3 alkarte lehenak) (promocióna lanzapena)
- **ANNUAL20** -- 20% ezagutzeko plan anualetan (du ere ez dago eskaintzatu)
- **REFERRAL** -- 1 alkarte libre (kliente referentziak)

Jartzen dut hauek lehiak: **Ultimate Multisite > Discount Codes**. Erdatu [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) duen tamaina.

:::tip Ez eskaintatu default batean
Eskaintzak herramienta estrategiko diren, ez dira beste batzuk. Hau guztioi eskaintzatu duenean, ez da eskaintza -- hau da prezioa gertuagoa. Gehiago erabiltu hauek kampainiak, referentziak eta promosioak erreguntzeko.
:::

## Tax-en maneho {#discount-codes}

Hau jakintzen ari zutenean taxo hartzea eskatzen duen erdatuetan dago:

1. Konfigura taxo-ekualdeak **Ultimate Multisite > Settings > Taxes**-an
2. Erregitu taxo-kategoria hauek planetan
3. Seguratu da taxoak inboketatik lehenago eragiten dira

[Tax Handling](/user-guide/payment-gateways/tax-handling) artikuluak egiaztatzeko detallatutako konfiguerazioa ikusitu. Mendiatune inpernatzen duten kliuntzak ematen dutenean, EU erregulazioari berriagarri eta [VAT addon](/addons/vat) ez duzu.

## Prezioak Ebaluatzea {#tax-handling}

Lan-aldiaren ondoren, prezioak quarterly (kuartaletan) ikusi. Horrek ikusi:

- **Planaren konversio tasa**: Starter ondo konvertatzen ari da baina Growth ez du, horietako arteko kloa handiagoa oso handi izan daiteke.
- **Upgrade tasa**: Starter gabe Growth-era kliuntzak handi ez dutenean, Growth planak beharrezkoa den gehiago errespetu nahi duela ez du.
- **Churn (ez itzultzea) planaren arabera**: Annual (laburial) kliuntzak txikiago itzultzen ari dira, annual prezioak gehiago zorrotu behar dituzte.
- **Kompetentziaren prezioak**: Alternatibak zer pentsatzen dute? Indartzeko aukera duzu?

FitSite Network
├── WordPress Multisite (subdomain modua)
├── Ultimate Multisite (konfiguratu + brandatuta)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Produkzioak
│   ├── FitSite Starter ($49/mo edo $468/yr) + 7- egun trial
│   ├── FitSite Growth ($99/mo edo $948/yr) + $99 instalazio zergabatua
│   ├── FitSite Pro ($199/mo edo $1,908/yr) + $299 instalazio zergabatua
│   └── Order Bumps + Discount Codes
├── Checkout Flow (periodo aukerareko toggle-arekin)
├── Branding (login, dashboard, emails, faktura, marketing site)
├── Customer Onboarding (Quick Start, emails, beharra resursosak)
├── Prezio Strategia
│   ├── Ezpotuaren diskontuak (20% eskaintza)
│   ├── Estrategiko instalazio zergabatuek
│   ├── Starter-eko trial periodoa
│   ├── Kampaniak eta referentziak dira diskontuak
│   └── Tax konfigurazioa
└── Lanbidean egiteko prestazio (next lesson)

## Zer egin dugu hori lekurrian {#reviewing-your-pricing}

- **Ezpotuaren prezioa** 20% diskontuarekin betetzeko
- **Instalazio zergabatuek** hautatutako nivelak dira beharra eskatzen eta onartzea eragiten
- **Trial periodoa** lehen planaren eskaintzeko, taldeko irraspenak jarraitzea eragoitzen du
- **Estrategiko diskontuak** lanbidean, referentziak eta kampaniak dira
- **Tax konfigurazioa** iradokizunarekin barne egiteko
- **Prezioa aztertzeko balioa** jarraian optimizatzean

---

**Next:** [Lesson 10: Launch Day](lesson-10-launch) -- lanbidean lekuak eta lan egiten hasi eta iradokizuna.
