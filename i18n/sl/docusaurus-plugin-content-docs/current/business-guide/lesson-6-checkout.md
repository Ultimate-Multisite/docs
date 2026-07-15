---
title: 'Lekcija 6: Izkušnja registracije'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lekcija 6: Izkušnja registracije

Potek nakupa je mesto, kjer se zanimanje spremeni v prihodek. Zmeden ali generičen postopek registracije izgublja stranke. Nišno specifičen potek, ki govori njihov jezik in deluje brez napora, jih pretvori v kupce.

## Kje smo končali {#where-we-left-off}

FitSite ima konfigurirane predloge in pakete. Zdaj bomo zgradili izkušnjo registracije in nakupa, ki lastnike fitnes studiev spremeni v plačljive stranke.

## Razumevanje poteka registracije {#understanding-the-registration-flow}

Obrazci za nakup v Ultimate Multisite so popolnoma prilagodljivi večkoračni obrazci. Za FitSite želimo potek, ki:

1. Deluje, kot da je bil ustvarjen za fitnes podjetja
2. Zbere samo tisto, kar je potrebno
3. Stranko čim hitreje pripelje do delujočega spletnega mesta

Za celotno tehnično referenco si oglejte [Potek registracije](/user-guide/configuration/the-registration-flow).

## Oblikovanje nakupa za FitSite {#designing-the-fitsite-checkout}

Pojdite na **Ultimate Multisite > Obrazci za nakup** in ustvarite nov obrazec.

### 1. korak: Izbira paketa {#step-1-plan-selection}

Prva stvar, ki jo lastnik fitnes studia vidi, naj bodo paketi, predstavljeni z izrazi, ki jih razume.

- Dodajte polje **Tabela cen**
- Konfigurirajte ga tako, da prikaže vse tri pakete FitSite
- Opisi paketov, ki ste jih napisali v Lekciji 5, se prikažejo tukaj -- poskrbite, da nagovarjajo potrebe fitnes podjetij, ne tehničnih funkcij

:::tip Niche Language Matters
"1 GB storage" means nothing to a gym owner. "Everything you need for a professional studio website" means everything. Write plan descriptions in your customer's language.
:::

### 2. korak: Izbira predloge {#step-2-template-selection}

Po izbiri paketa stranka izbere svojo začetno predlogo.

- Dodajte polje **Izbira predloge**
- Razpoložljive predloge so filtrirane glede na paket, ki so ga izbrali (konfigurirano v Lekciji 5)
- Vsaka predloga naj ima predogledno sliko, ki prikazuje dizajn, specifičen za fitnes

### 3. korak: Ustvarjanje Account {#step-3-account-creation}

Naj bo minimalno. Zberite samo:

- E-poštni naslov
- Geslo
- Ime studia/podjetja (to postane ime njihovega spletnega mesta)

Pri registraciji ne sprašujte po informacijah, ki jih ne potrebujete. Vsako dodatno polje zmanjša konverzije.

### 4. korak: Nastavitev spletnega mesta {#step-4-site-setup}

- **Naslov spletnega mesta**: Vnaprej izpolnite z imenom studia, vnesenim v 3. koraku
- **URL spletnega mesta**: Samodejno ustvarite iz imena studia (npr. `ironworks.fitsite.com`)

### 5. korak: Plačilo {#step-5-payment}

- Dodajte polje **Plačilo**
- Konfigurirajte svoj plačilni prehod ([Stripe](/user-guide/payment-gateways/stripe) je priporočen za obračunavanje naročnin)
- Če ste v Lekciji 5 ustvarili dodatne ponudbe ob naročilu, dodajte polje **Dodatna ponudba ob naročilu** pred korakom plačila

### 6. korak: Potrditev {#step-6-confirmation}

- Prilagodite potrditveno sporočilo z jezikom, specifičnim za fitnes
- Primer: "Spletno mesto vašega fitnes studia se ustvarja. Čez nekaj sekund boste preusmerjeni na svoje novo spletno mesto."

## Dodajanje preklopa za izbiro obdobja {#adding-a-period-selection-toggle}

Če ste v svojih paketih nastavili različice cen (mesečno proti letno), v obrazec za nakup dodajte polje **Izbira obdobja**, da lahko stranke preklapljajo med obračunskimi obdobji. Za navodila si oglejte [Obrazci za nakup](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Konfiguriranje plačila {#configuring-payment}

Če še niste nastavili plačilnega prehoda:

1. Pojdite na **Ultimate Multisite > Nastavitve > Plačilni prehodi**
2. Sledite [vodniku za nastavitev Stripe](/user-guide/payment-gateways/stripe) ali svojemu izbranemu prehodu
3. Preizkusite celoten potek nakupa s testnim plačilom

Za podrobnosti o tem, kako plačila tečejo na vaš Account, si oglejte [Prejemanje plačil](/user-guide/payment-gateways/getting-paid).

## Testiranje poteka {#testing-the-flow}

Preden nadaljujete, opravite celotno testno registracijo:

1. Odprite obrazec za nakup v anonimnem/zasebnem oknu brskalnika
2. Izberite paket
3. Izberite predlogo
4. Ustvarite Account
5. Dokončajte plačilo (uporabite testni način)
6. Preverite, da je spletno mesto ustvarjeno s pravilno predlogo

Preverite, da:

- [ ] So opisi paketov jasni in nišno specifični
- [ ] Predogledi predlog prikazujejo dizajne, primerne za fitnes
- [ ] Se URL spletnega mesta pravilno ustvari iz imena studia
- [ ] Je plačilo uspešno obdelano
- [ ] Stranka pristane na delujočem spletnem mestu z izbrano predlogo
- [ ] Potrditvena e-poštna sporočila uporabljajo jezik, specifičen za fitnes

## Omrežje FitSite do zdaj {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Kaj smo zgradili v tej lekciji {#what-we-built-this-lesson}

- **Večkoračni obrazec za nakup**, prilagojen lastnikom fitnes studiev
- **Nišno specifičen jezik** skozi celoten potek registracije
- **Minimalno trenje** -- samo bistvena polja, hitra pot do delujočega spletnega mesta
- **Integracija plačil** s testnim preverjanjem
- **Preizkušen celovit potek** od izbire paketa do delujočega spletnega mesta

---

**Naslednje:** [Lekcija 7: Naj postane vaše](lesson-7-branding) -- platformi bomo dodali belo oznako in FitSite uveljavili kot blagovno znamko.
