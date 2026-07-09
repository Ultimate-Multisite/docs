---
title: 'Lekcija 7: Naredite po svoje'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lekcija 7: Naj bo vaše

Vaše stranke se nikoli ne bi smele počutiti, kot da uporabljajo "nek WordPress vtičnik." Počutiti bi se morale, kot da uporabljajo FitSite -- platformo, zgrajeno za njihovo panogo. Ta lekcija obravnava znamčenje, white-label označevanje in to, kako platformi dati občutek pravega izdelka.

## Kje smo ostali

FitSite ima delujoč tok zaključka nakupa, ki lastnike fitnes studiev popelje od izbire paketa do živega spletnega mesta. Zdaj bomo poskrbeli, da bo celotna izkušnja delovala kot povezan, znamčen izdelek.

## Domena vaše platforme

Temelj vaše blagovne znamke je vaša domena. Za FitSite:

- **Glavna domena**: `fitsite.com` (vaše marketinško spletno mesto in koren omrežja)
- **Spletna mesta strank**: `studioname.fitsite.com` (poddomena)
- **Domene po meri**: Stranke na paketih Growth in Pro lahko preslikajo svojo domeno

### Nastavitev vaše domene

1. Registrirajte domeno svoje platforme
2. Usmerite jo k svojemu ponudniku gostovanja
3. Konfigurirajte wildcard DNS (`*.fitsite.com`) za poddomene strank
4. Poskrbite, da je wildcard SSL aktiven

Za podrobna navodila glejte [Kako konfigurirati preslikavo domen](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-label označevanje skrbniške izkušnje

Ko se lastnik fitnes studia prijavi v Dashboard svojega spletnega mesta, mora videti vašo blagovno znamko, ne pa WordPress ali Ultimate Multisite znamčenja.

### Prilagojena prijavna stran

Prilagodite WordPress prijavno stran, da prikazuje:

- Vaš FitSite logotip
- Ozadje s podobami, primernimi za fitnes
- Barve vaše blagovne znamke

### Znamčenje Dashboarda

Uporabite dodatek [Admin Page Creator](/addons/admin-page-creator) ali CSS po meri, da:

- Zamenjate WordPress logotip s svojim FitSite logotipom
- Prilagodite barvno shemo skrbništva, da se ujema z vašo blagovno znamko
- Dodate gradnik Dashboarda po meri s hitrimi povezavami in viri pomoči, specifičnimi za fitnes

### Skrbniške strani po meri

Razmislite o ustvarjanju skrbniških strani po meri, ki izpostavijo najpomembnejša dejanja za lastnike fitnes studiev:

- "Uredite svoj urnik vadb"
- "Posodobite profile trenerjev"
- "Oglejte si svoje spletno mesto"

To zmanjša krivuljo učenja, saj dejanja, relevantna za nišo, postavi v ospredje, namesto da bi bila zakopana v standardnem WordPress meniju.

## Znamčenje vaših komunikacij

Vsako e-poštno sporočilo, račun in obvestilo bi morali krepiti vašo blagovno znamko.

### Sistemska e-poštna sporočila

Pojdite na **Ultimate Multisite > Settings > Emails** in prilagodite vsa sistemska e-poštna sporočila:

- **Ime pošiljatelja**: FitSite
- **E-pošta pošiljatelja**: hello@fitsite.com
- **E-poštne predloge**: Uporabite barve in logotip svoje blagovne znamke
- **Jezik**: Povsod specifičen za fitnes

Ključna e-poštna sporočila za prilagoditev:

| E-poštno sporočilo | Splošna različica | Različica FitSite |
|-------|----------------|-----------------|
| Dobrodošlica | "Vaše novo spletno mesto je pripravljeno" | "Spletno mesto vašega fitnes studia je živo" |
| Potrdilo o plačilu | "Plačilo prejeto" | "Plačilo naročnine FitSite potrjeno" |
| Konec preizkusnega obdobja | "Vaše preizkusno obdobje se kmalu konča" | "Vaše preizkusno obdobje FitSite se konča čez 3 dni -- ohranite spletno mesto svojega studia živo" |

### Računi

Prilagodite predloge računov z:

- Vašim FitSite logotipom in barvami blagovne znamke
- Podatki vašega podjetja
- Imeni izdelkov, specifičnimi za fitnes (ne splošnimi ID-ji paketov)

## Spletno mesto za stranke

Vaša glavna domena (`fitsite.com`) potrebuje marketinško spletno mesto, ki prodaja platformo. To je ločeno od skrbništva omrežja Ultimate Multisite -- je javni obraz vašega podjetja.

Ključne strani:

- **Domača stran**: Jasna vrednostna ponudba za fitnes podjetja
- **Funkcije**: Kaj FitSite počne, izraženo v fitnes izrazih
- **Cene**: Vaši trije paketi s primerjavami funkcij, specifičnimi za nišo
- **Primeri**: Predstavitev spletnih mest, zgrajenih na platformi
- **Prijava**: Povezave do vašega obrazca za zaključek nakupa

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Domena po meri za stranke

Za stranke na paketih, ki vključujejo domene po meri, jasno dokumentirajte postopek:

1. Stranka registrira ali prenese svojo domeno k registrarju
2. Stranka posodobi DNS, da kaže na vašo platformo (navedite točne zapise)
3. Ultimate Multisite poskrbi za preslikavo domene in SSL

Ustvarite članek pomoči ali vnos v bazi znanja posebej za ta postopek, napisan za netehnične lastnike fitnes studiev.

## Omrežje FitSite do zdaj

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

## Kaj smo zgradili v tej lekciji

- **Domeno platforme in DNS**, konfigurirana za znamčeno izkušnjo
- **White-label skrbništvo** z FitSite znamčenjem povsod
- **Prilagojene komunikacije** -- e-poštna sporočila, računi in obvestila, vsi skladni z blagovno znamko
- **Marketinško spletno mesto**, ki FitSite prodaja lastnikom fitnes studiev
- **Dokumentacijo za domeno po meri** za stranke, ki želijo svojo domeno

---

**Naprej:** [Lekcija 8: Uvajanje strank](lesson-8-onboarding) -- zasnovali bomo izkušnjo, ki novo prijavo spremeni v aktivno, zadovoljno stranko.
