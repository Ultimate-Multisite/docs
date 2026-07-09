---
title: Specifikacija spretnosti za spletno mesto
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Veve specifikacija spretnosti za spletno mesto {#site-specification-skill}

Spretnina **Site Specification** je strukturiran pristop do dokumentiranja ciljev vašega spletnega mesta, publike in identitete blagovne znamke. Ta informacij je shranjena v vašem memoriji **site_brief**, ki jo agenti uporabljajo med seznami za zagotavljanje dosledne, kontekstno obveščene pomoči.

## Kaj je Site Specification? {#what-is-site-specification}

Site Specification je proces dokumentiranja:

- **Cilja spletnega mesta**: Kaj vaš spletni portal dela in zakaj obstaja
- **Ciljne publike**: Kdo obišče vaše spletno mesto in kaj potrebuje
- **Identitete blagovne znamke**: Vaše barve, ton in vizualni stil
- **Poslovne cilje**: Kako izgleda uspeh za vaše spletno mesto
- **Strukture vsebine**: Kako je vaš spletni portal organiziran

Ta specifikacija postane vaš **site_brief**, trajna memorija, ki jo agenti uporabljajo za razumevanje konteksta vašega spletnega mesta.

## Zakaj uporabljati Site Specification? {#why-use-site-specification}

### Doslednost med seznami {#consistency-across-sessions}

Brezen site_brief bi morali vsakrat ponovno izpostaviti cilj vašega spletnega mesta, vsakrar začetek nove sezne. Z njim agenti takoj razumejo:

- Cilje in publiko vaše spletne strani
- Barve in ton vaše blagovne znamke
- Strukturo vsebine
- Poslovne cilje

### Boljše priporočila {#better-recommendations}

Agenti uporabljajo vaš site_brief za:

- Predlaganje funkcij, ki so usklajene z ciljem vaše spletne strani
- Priporočanje struktur vsebine, ki se usklajajo z vašimi cilji
- Predlaganje dizajna, ki je dosledno z vašo blagovno znamko
- Izogibanje predlogov neskladnih funkcij

### Hitraj uvod v delo (Onboarding) {#faster-onboarding}

Novi agenti (ali agenti v novih seznami) lahko hitro pridobijo znanje, čitajo vaš site_brief namesto da postavljajo razjasnalna vprašanja.

## Iniciranje Site Specification {#initiating-site-specification}

### Med uvodom za Theme Builder {#during-theme-builder-onboarding}

Spretnina Site Specification je avtomatsko inicirana med **onboarding flow-om Theme Builderja**. Agent Setup Assistant postavlja vprašanja in gradi vaš site_brief.

### Ručna iniciranje {#manual-initiation}

Lahko lahko začnete Specifikacijo spletnega mesta v katerem koli času:

```
"Dajmo definirati specifikacijo mojega spletnega mesta"
```

ali

```
"Pomagaj mi ustvariti kratko opis spletnega mesta"
```

## Proces Specifikacije Spletnega Mesta {#the-site-specification-process}

### Korak 1: Namena spletnega mesta {#step-1-site-purpose}

Agent vpraša:

```
Kakšna je primarna namena vašega spletnega mesta?
- E-commerce trgovina
- Blog ali spletno mesto z vsebino
- Portfolijo ali prikaz delov
- SaaS aplikacija
- Družba ali forum
- Drugi: [opišite]
```

Mogete izbrati kategorijo ali opisati lastno nameno.

### Korak 2: Ciljna publika {#step-2-target-audience}

```
Kdo je vaša primarna publika?
- Konsumenti / splošna javnost
- Poslovni profesionalci
- Razvojniki / tehnične uporabnike
- Študenti / izobraževalci
- Drugi: [opišite]

Kakšne so njihove glavne potrebe?
```

### Korak 3: Brand identiteta {#step-3-brand-identity}

```
Kakšne so vaše barve blagovne znamke?
- Primarna barva: [izberovalec barv ali hex kod]
- Sekundarna barva: [izberovalec barv ali hex kod]
- Akcentna barva: [opcionalno]

Kako bi opisali ton vaše znamke?
- Profesional / korporativ
- Kreativen / umetniški
- Igralen / neformalen
- Minimalizem / modern
- Topel / prijateljski
```

### Korak 4: Poslovne cilje {#step-4-business-goals}

```
Kakšen je uspeh za vaše spletno mesto?
- Generiranje potencialnih kupcev (leads)
- Prodaja izdelkov
- Izgradnja skupnosti
- Deljenje znanja
- Ustanovitev avtoritete
- Drugi: [opišite]

Kaj je vaš glavni merilnik uspeha?
- Prihodki
- Uporaba uporabnikov (User engagement)
- Doseganje vsebine
- Konverzije
- Drugi
```

### Korak 5: Struktura vsebine {#step-5-content-structure}

```
Kako je organizirana vaša vsebina?
- Ravna struktura (vsa vsebina na isti ravni)
- Hierhična (kategorije in podkategorije)
- Kronološka (stil bloga)
- Na podlagi izdelkov (katalog)
- Drugi: [opišite]

Kakšne vrste vsebine uporabljate?
- Blog postovi
- Stranice z izdelki
- Primeri (Case studies)
- Dokumentacija
- Video
- Drugi
```

## Vaša memorija site_brief {#your-sitebrief-memory}

Po dokončanju Specifikacije spletnega mesta so vaše informacije shranjene kot **site_brief** v vašoj agent memory. To je strukturiran zapis, ki vsebuje:

## Prikazovanje in posodabljanje vaše site_brief {#viewing-and-updating-your-sitebrief}

### Predstavi svoj site_brief {#view-your-sitebrief}

Vprašajte agenta:

```
"Prikaži mi moj site brief"
```

ali

```
"Kaj veš o mojem spletnem mestu?"
```

Agent vam bo prikazal shranjeno specifikacijo.

### Posodabljanje svojega site_brief {#update-your-sitebrief}

Če se vaše spletno mesto razvija, ga lahko posodobite:

```
"Posodobili moj site brief: zdaj ciljamo B2B stranke"
```

ali

```
"Obnovi specifikacijo mojega spletnega mesta"
```

To bo ponovno vključilo veščino Site Specification z vašimi obstoječimi informacijami kot začetno točko.

## Kako agenti uporabljajo site_brief {#how-agents-use-sitebrief}

### Predlogi za dizajn {#design-recommendations}

Ko boste zahtevali spremembe dizajna, agenti se nanašajo na vaš site_brief:

```
Ti: "Redizajn moj homepage"
Agent: "Na podlagi vaše specifikacije spletnega mesta ciljamo ženske 25-45 let z toplo,
artisansno tonom. Ustvarjim dizajn, ki poudarja
vaše ročne nakitnice in trajnostne vrednote."
```

### Predlogi za funkcije {#feature-suggestions}

Agenti predlagajo funkcije, ki so usklajene z vašimi cilji:

```
Ti: "Kakšno funkcije bi morala dodati?"
Agent: "Za e-trgovino, ki se osredotoča na lojalnost strank,
predlagam: program lojalnosti, ocene strank, e-poštni newsletter in
predloge izdelkov."
```

### Struktura vsebine {#content-structure}

Agenti predlagajo organizacijo vsebine na podlagi vaše strukture:

Kako bi organiziral blog?
Odraka: Ker uporabljate katalog izdelkov z blogom, vam predlagam, da postave vsebine po kategorijah izdelkov in ustvarite 'uskeljive vodiče' (styling guides), ki prikazujejo več izdelkov skupaj.

## Najboljše prakse {#best-practices}

### Biti specifičen {#be-specific}
Namesto "splošna publika", opišite svojo resnico publiko:

- ✓ "Ženske 25-45 let, zainteresirane za bæječe modno oblačila"
- ✗ "Vsi"

### Redno posodabljanje {#update-regularly}
Ko se vaš spletni strani razvija, posodobite svoj `site_brief`:

- Ko prehodite na novo publiko
- Ko dodajate nove linije izdelkov
- Ko se spremeni identiteta vaše znamke
- Ko se spremenijo poslovne cilje

### Uporabljajte enako terminologijo {#use-consistent-terminology}
Uporabljajte iste izraze v vsakih pogodbah:

- ✓ vedno rečite "bæče nakrapanje" (ne "ekološko prijateljsko nakrapanje" in "zelene izdelke")
- ✓ Konsistentno označujte publiko na isti način

### Vključite kontekst {#include-context}
Pridajte podlagi, ki pomagajo agentom razumeti vaše odločanja:

- "Nam ciljamo profesionalce, ki cenijo kakovost nad ceno"
- "Naša publika je tehnološko poudarjena in pričakuje moderno dizajn"
- "Smo startap, ki se financira iz lastnih sredstev, zato potrebujemo učinkovita rešenja"

## Vezanega na onboarding Theme Builderja {#relationship-to-theme-builder-onboarding}

Sposobnost Site Specification je vključena v **postopek onboarding Theme Builderja**. Ko dokončate onboarding, se vaš `site_brief` sam avtomatsko ustvari z informacijami, ki ste jih priložili.

Site Specification lahko uporabljate tudi neodvisno, če želite:

- Uporabiti svoje specifikacije po začetni nastavitvi
- Posodobiti svoj site brief skozi razvoj vaše strani
- Ustvariti podrobne specifikacije pred začetom z Theme Builderjem

## Reševanje težav {#troubleshooting}

**Moj `site_brief` ni uporabljen**
- Potrdite, da agent ima dostop do memorije (memory)
- Vprašajte agenta, da "spomni moj site brief" (`recall my site brief`)
- Preverite, ali je memorija vključena v vaših nastavitvah

**Želim začeti znova s novim site\_briefom**
- Vprašajte agenta: "Očisti mi moj site brief in začni od nule"
- Nato ponovno predvzemite Site Specification

**Agent daje priporočila, ki se ne usklajujejo z mojim site_briefom**
- Vprašajte agenta za "pregled mojega site briefa"
- Obnovite svoj site\_brief, če je že star
- Pridobite dodatni kontekst v svojih zahtevah

## Naslednji koraki {#next-steps}

Po definiranju vaše specifikacije mesta:

1. **Uporabite Theme Builder**: Ustvarite prilagojen temo na podlagi vašega site\_briefa
2. **Učinkujte dizajn**: Uporabite veščino Design System Aesthetics za podrobno delo pri dizajnu
3. **Planirajte vsebino**: Vprašajte agente za predloge strukture vsebine
4. **Zgrajte funkcije**: Zahtevajte funkcije, ki so usklajene z vašimi poslovnimi cilji
