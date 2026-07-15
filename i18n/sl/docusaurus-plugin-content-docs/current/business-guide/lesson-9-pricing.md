---
title: 'Lekcija 9: Oblikovanje cen za dobiček'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lekcija 9: Oblikovanje cen za dobiček

V lekciji 5 smo določili začetne cene za pakete FitSite. Zdaj bomo izpopolnili cenovno strategijo s tehnikami, ki povečajo prihodke, spodbujajo nadgradnje in zmanjšajo odlive.

## Kje smo ostali {#where-we-left-off}

FitSite ima vzpostavljene pakete, predloge, zaključek nakupa, znamčenje in uvajanje. Začetne cene so bile $49/$99/$199 na mesec. Zdaj bomo poskrbeli, da bodo te cene delale več.

## Načela oblikovanja cen za nišne platforme {#pricing-principles-for-niche-platforms}

### Ceno določajte glede na vrednost, ne strošek {#price-on-value-not-cost}

Vaši stroški gostovanja so lahko $5–$15 na spletno mesto stranke. To ne pomeni, da bi morala biti vaša cena $20. Ne prodajate gostovanja. Prodajate:

- Profesionalno fitnes spletno mesto, katerega izdelava po meri bi stala $2,000–$5,000
- Stalno vzdrževanje, posodobitve in varnost, o katerih jim ni treba razmišljati
- Funkcije, specifične za nišo, ki jih splošni graditelji ne ponujajo
- Kredibilnost platforme, zgrajene za njihovo panogo

Ceno določite na podlagi vrednosti, ki jo zagotavljate, ne stroška, ki ga imate z zagotavljanjem.

### Sidrajte ceno na alternative {#anchor-to-alternatives}

Ko lastnik fitnes studia ocenjuje FitSite, ga primerja z:

- **Najemom spletnega razvijalca**: $2,000–$5,000 vnaprej + $50–$100/mesec za vzdrževanje
- **Wix/Squarespace**: $16–$45/mesec, vendar brez funkcij, specifičnih za fitnes; zgraditi ga morajo sami
- **Neukrepanjem**: Izgubljeni člani, ki jih ne morejo najti na spletu

Pri $49–$199/mesec je FitSite cenejši od razvijalca, zmogljivejši od splošnih graditeljev in neskončno boljši kot brez spletnega mesta.

## Uvedba cenovnih različic {#implementing-price-variations}

Letno obračunavanje spodbuja zavezanost in zmanjšuje odlive. Pojdite na zavihek **Price Variations** pri vsakem paketu in dodajte letne možnosti:

| Paket | Mesečno | Letno (na mesec) | Letno skupaj | Prihranek |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% popusta |
| Growth | $99/mo | $79/mo | $948/year | 20% popusta |
| Pro | $199/mo | $159/mo | $1,908/year | 20% popusta |

V obrazec za zaključek nakupa dodajte polje **Period Selection**, da lahko stranke preklapljajo med mesečnim in letnim obračunavanjem. Glejte [Obrazci za zaključek nakupa](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Zakaj letne cene delujejo {#why-annual-pricing-works}

- **Za vas**: Denar vnaprej, nižji odliv (stranke, ki plačajo letno, manj verjetno prekličejo sredi obdobja)
- **Zanje**: Resnični prihranki, predvidljivost proračuna

## Pristojbine za nastavitev {#setup-fees}

Razmislite o enkratni pristojbini za nastavitev pri paketih, ki vključujejo ročno konfiguracijo:

- **Starter**: Brez pristojbine za nastavitev (odstrani ovire za vstop)
- **Growth**: Pristojbina za nastavitev $99 (pokriva konfiguracijo domene po meri in začetno svetovanje)
- **Pro**: Pristojbina za nastavitev $299 (pokriva nastavitev več lokacij in uvodni klic)

Pristojbine za nastavitev konfigurirajte v razdelku cen pri vsakem paketu. Za podrobnosti glejte [Ustvarjanje vašega prvega naročniškega izdelka](/user-guide/configuration/creating-your-first-subscription-product).

## Preizkusna obdobja {#trial-periods}

Ponudba preizkusa zmanjša trenje pri prijavi, vendar uvaja tveganje, da se uporabnik ne pretvori v plačnika. Za FitSite:

- **7-dnevni brezplačni preizkus** samo pri paketu Starter
- Brez preizkusa pri Growth in Pro (te stranke so bolj zavezane in pričakujejo plačilo)

Preizkus konfigurirajte v razdelku cen paketa Starter tako, da omogočite preklopnik **Offer Trial** in nastavite trajanje na 7 dni.

### Kako poskrbeti, da se preizkusi pretvorijo {#making-trials-convert}

Preizkus deluje le, če stranka v preizkusnem obdobju izkusi vrednost. Vaše zaporedje uvajanja (lekcija 8) je tu ključno -- pozdravna e-poštna sporočila morajo biti časovno usklajena tako, da spodbudijo vključenost znotraj 7-dnevnega okna.

## Kode za popust {#discount-codes}

Ustvarite strateške kode za popust za posebne namene:

- **FITLAUNCH** -- 30% popusta za prve 3 mesece (za promocijo ob zagonu)
- **ANNUAL20** -- 20% popusta na letne pakete (če še niso znižani)
- **REFERRAL** -- 1 mesec brezplačno (za priporočila strank)

Za ustvarjanje pojdite na **Ultimate Multisite > Discount Codes**. Za celoten vodnik glejte [Ustvarjanje kod za popust](/user-guide/configuration/creating-discount-codes).

:::tip Ne ponujajte popustov privzeto
Popusti naj bodo strateška orodja, ne stalnica. Če vsak dobi popust, to ni popust -- to je vaša prava cena. Uporabljajte jih za določene kampanje, priporočila in časovno omejene promocije.
:::

## Obravnava davkov {#tax-handling}

Če poslujete v jurisdikciji, ki zahteva pobiranje davkov:

1. Konfigurirajte davčne stopnje v **Ultimate Multisite > Settings > Taxes**
2. Svojim paketom dodelite davčne kategorije
3. Poskrbite, da računi pravilno prikazujejo davek

Za podrobno konfiguracijo glejte [Obravnava davkov](/user-guide/payment-gateways/tax-handling). Če strankam služite mednarodno, razmislite o [VAT dodatku](/addons/vat) za skladnost v EU.

## Pregled vaših cen {#reviewing-your-pricing}

Po zagonu cene ponovno preglejte vsako četrtletje. Spremljajte:

- **Stopnja konverzije po paketu**: Če se Starter dobro pretvarja, Growth pa ne, je razlika med njima morda prevelika
- **Stopnja nadgradenj**: Če le malo strank nadgradi s Starter na Growth, paket Growth morda ne ponuja dovolj dodatne vrednosti
- **Odliv po paketu**: Če letne stranke odhajajo manj, močneje spodbujajte letno obračunavanje
- **Cene konkurentov**: Koliko zaračunavajo alternative? Ste pravilno pozicionirani?

## Omrežje FitSite do zdaj {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (način poddomen)
├── Ultimate Multisite (konfiguriran + z znamčenjem)
├── Domena platforme (fitsite.com + wildcard SSL)
├── Predloge spletnih mest (Studio Essential, Gym Pro, Fitness Chain)
├── Izdelki
│   ├── FitSite Starter ($49/mo ali $468/yr) + 7-dnevni preizkus
│   ├── FitSite Growth ($99/mo ali $948/yr) + pristojbina za nastavitev $99
│   ├── FitSite Pro ($199/mo ali $1,908/yr) + pristojbina za nastavitev $299
│   └── Dodatne ponudbe pri naročilu + kode za popust
├── Potek zaključka nakupa (s preklopnikom za izbiro obdobja)
├── Znamčenje (prijava, Dashboard, e-pošta, računi, marketinško spletno mesto)
├── Uvajanje strank (hitri začetek, e-pošta, viri pomoči)
├── Cenovna strategija
│   ├── Letni popusti (20% popusta)
│   ├── Strateške pristojbine za nastavitev
│   ├── 7-dnevni preizkus pri Starter
│   ├── Kode za popust za kampanje in priporočila
│   └── Davčna konfiguracija
└── Pripravljeno za zagon (naslednja lekcija)
```

## Kaj smo zgradili v tej lekciji {#what-we-built-this-lesson}

- **Letne cene** z 20-odstotnim popustom za spodbujanje zavezanosti
- **Nastavitvene pristojbine** na višjih paketih za pokritje uvajalnega dela
- **Poskusno obdobje** na začetnem paketu za zmanjšanje ovir pri prijavi
- **Strateške kode za popust** za zagon, priporočila in kampanje
- **Davčna konfiguracija** za skladno obračunavanje
- **Okvir za pregled cen** za stalno optimizacijo

---

**Naprej:** [Lekcija 10: Dan zagona](lesson-10-launch) -- kontrolni seznam pred zagonom in prehod v živo.
