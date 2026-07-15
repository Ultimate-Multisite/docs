---
title: Veebilehtspesifikatsioon oskus
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Veebilete spetsivskil

**Veebilete spetsivskil** on struktureeritud lähenemine veebisaite eesmärkide, publiku ja brändi identiteedi dokumenteerimiseks. See teave on salvestatud teie **site_brief** memori, mida agentid kasutavad erinevate sessioonide jooksul ühtlustamiseks ja kontekstiärilist abiks olema.

## Mis on Veebilete spetsifikatsioon? {#what-is-site-specification}

Veebilete spetsifikatsioon on dokumenteerimise protsess, mis hõlmab:

- **Veebisaite eesmärki**: mida teie veebisait teeb ja miks see on olemas
- **Lõpulemiskohva publiku**: kes külastab teie veebisaite ja mida nad vajavad
- **Brändi identiteeti**: teie värvid, toon ja visuaalne stiil
- **Ärifeesmärgid**: millise tulemuseiks teie veebisait on õnnestunud
- **Sisutruktuuri**: kuidas teie veebisait on korraldatud

See spetsifikatsioon muutub teie **site_brief**'iks, peabse memori, mida agentid kasutavad veebisaite konteksti mõista.

## Miks kasutada Veebilete spetsifikatsiooni? {#why-use-site-specification}

### Ühtlustus erinevate sessioonide jooksul {#consistency-across-sessions}

Veebilete spetsifikatsiooni ilma ei oleks, peate teie veebisaite eesmärki iga kord uue sessiooni alguses selgitama. Sellega agentid mõistavad kohe:

- Veebisaite eesmärgid ja publiku
- Teie brändi värvid ja toon
- Teie sisutruktuuri
- Teie ärifeesmärgid

### Paremad soovitusid {#better-recommendations}

Agentid kasutavad teie site_brief'i, et:

- Soovita funktsioone, mis on ühtlustatud veebisaite eesmärkega
- Soovita sisutruktuure, mis vastavad teie eesmärgilisi
- Kui ette näha disaine, mis on ühtlustatud teie brändiga
- Vältida ebatulistel funktsioonide soovitamist

### Kiire kasutuse algus {#faster-onboarding}

Uued agentid (või uues sessioonides olevad agentid) saavad kiiresti tööle, lugees teie site_brief'i asemel selgitavate küsimuste esitamise.

## Veebilete spetsifikatsiooni algatamine {#initiating-site-specification}

### Teema ehitamise ajal {#during-theme-builder-onboarding}
Veebilete spetsifikatsiooni spetsivskil on automaatselt algatamine **Teema ehitamise (Theme Builder) alguses**. Seadistusabi agent küsib küsimusi ja lahendab teie site_brief'i.

### Manuaalne algatamine {#manual-initiation}

Võimalik alustada veebilehtide spetsifikatsiooni igal ajal:

```
"Lulime minu veebilehti spetsifikatsiooni"
```

või

```
"Aita mul veebilehe kirjelduse loomisel"
```

## Veebilehte spetsifikatsiooniprotsess {#the-site-specification-process}

### Samuti 1: Veebilehtide eesmärk {#step-1-site-purpose}

Agent küsib:

```
Mis on teie veebilehti peamine eesmärk?
- E-commerce pood
- Blogi või sisuveebileht
- Portfolio või esitundlikud näidused
- SaaS-programm
- Kommunitet või foorum
- Muu: [kirjeldage]
```

Võite valida kategooria või kirjeldada oma eesmärki.

### Samuti 2: Loeja {#step-2-target-audience}

```
Keda on teie peamine loeja?
- Konsumeerijad / üldine publik
- Ärimajandusspetsialistid
- Arengajad / tehnilised kasutajad
- Ühendajad / õpetajad
- Muu: [kirjeldage]

Mis on nende peamised vajadused?
```

### Samuti 3: Brändi identiteet {#step-3-brand-identity}

```
Mis on teie brändi värvid?
- Põhine värv: [värvi valik või hex kod]
- Sekundärvärv: [värvi valik või hex kod]
- Aktsentvärv: [valik]

Kuidas kirjeldaksite oma brändi toonid?
- Professionaalne / korporatiivne
- Kreatiivne / kunstlik
- Leppevõtlik / kasual
- Minimalne / modernne
- Lõpnev / sõbralik
```

### Samuti 4: Ärimajanduslikud eesmärgid {#step-4-business-goals}

```
Mis on teie veebilehe õnnestumise näide?
- Liidude genereerimine
- Tooted müümine
- Kommuniteti loomine
- Teaduse jagamine
- Autoriteedi loodamine
- Muu: [kirjeldage]

Mis on teie peamine meetlik (metri) ?
- Müügid
- Kasutajate osalemine
- Sisu jõudmine
- Konversioonid
- Muu
```

### Samuti 5: Sisulise struktuur {#step-5-content-structure}

```
Kuidas teie sisu on korraldatud?
- Tasne (kõik sisu samas tasemel)
- Hierhariline (kategooriad ja allkategooriad)
- Kronoloogiline (blogi stiilis)
- Tooted põhinev (katalog)
- Muu: [kirjeldage]

Milliseid sisulisi tüüpe kasutate?
- Blogipostitused
- Tootelehed
- Kasutustegevuse analüüsid
- Dokumentatsioon
- Videod
- Muu
```

## Teie site_brief memori {#your-sitebrief-memory}

Veebilehtide spetsifikatsiooni lõpetamise pärast teie teave salvestatakse agenti memori **site_brief** kui. See on struktureeritud registre, mis sisaldab:

## Veend ja uuendamine oma site_briefi {#viewing-and-updating-your-sitebrief}

### Vaata oma site_brief {#view-your-sitebrief}

Paluta agentilt:

```
"Näita mulle minu site_brief"
```

või

```
"Mis tead minu kohta?"
```

Agentile näidatakse teie salvestatud spetsifikatsiooni.

### Uuenda oma site_briefi {#update-your-sitebrief}

Kui teie veebileht muutub, saate seda uuendada:

```
"Uuenda minu site_brief: me kohdistame nüüd B2B klientidele"
```

või

```
"Vaata üle mineite spetsifikatsioon"
```

See käivitab Site Specification skilla uuesti teie olemasoleva teabe algpunktina.

## Kuidas agentid kasutavad site_briefit {#how-agents-use-sitebrief}

### Disaini soovitatud lahendused {#design-recommendations}

Kui palute disaini muutusi, viitavad agentid teie site_briefile:

```
Teie: "Redige ümber minu eeslehtele"
Agent: "Teie site_briefi põhjal kohdistame siin 25-45 aega naistele
warm, käsitsi valmistatud tooniga. Ma luoo disaini, mis rõhutab
teid teiste käsitööjuheliste ja jätkusuutlikkuse väärtusi."
```

### Funktsioonide ettepanekud {#feature-suggestions}

Agentid pakuvad funktsioone, mis on suunatud teie eesmärkidele:

```
Teie: "Mitä funktsioone peaks ma lisama?"
Agent: "E-commerce poodi jaoks, mille eesmärk on klientide loialduse
loodud, soovitan: lojalite programmid, kliendi arvustused, e-posti
juhtmeale ja toote soovitusi."
```

### Sisulise struktuur {#content-structure}

Agentid pakuvad sisulise korraldamise ettepanekuid teie struktuuri põhjal:

Kuidas ma oma blogi korraldu?
Agent: Kuna kasutate produktikatalogit ja blogi, soovitan postide järjestamist toote kategooriatesse ja 'stilinguid' loomist, mis esitamad on erinevaid toote ühendatud.

## Parimad praktikad {#best-practices}

### Ole spetsiifiline {#be-specific}

"Üldne publiku" asemel kirjeldage oma tõestatud publikut:

- ✓ "Naised 25-45 väeline, kes huvitub jätkusuutlikust modastuse"
- ✗ "Kõik inimesed"

### Pärustige regulaarselt {#update-regularly}

Kui teie veebileht muutub, paigutage oma `site_brief` (veebilehti kirjeldus):

- Kui siit muutate publikut
- Kui lisate uusi tootejuhiid
- Kui muutus teie brändi identiteet
- Kui muutuvad teie äri eesmärgid

### Kasutage ühtlustatud terminoloogiat {#use-consistent-terminology}

Kasutage sama terminid kõikides sessయోగudes:

- ✓ Kuulge alati "jätkusuutlik juvel" (ei "eko sõbralik juvel" ja "rohelikud tooted")
- ✓ Viita oma publikule ühtlas samalla viisil

### Sisuta konteksti {#include-context}

Anna taustainfomoot, mis aitab agentit mõista teie otsuseid:

- "Me siame siame professionaale, kes hinnatakse kvaliteeti hinnan üle"
- "Meie publik on tehniliselt ettevalmistatud ja ootab moderni disaini"
- "Me oleme bootstrapped startup, seega meil on vajalik kostetegevad lahendused"

## Suhtsus Theme Builder onboardinguga {#relationship-to-theme-builder-onboarding}

Site Specification oskus on integreeritud **Theme Builder onboardingu voolu** sisse. Kui lõpetate onboardinguga, luub teie `site_brief` automaatselt selle teavetega, mida olete antnud.

Võite Site Specificationi ka käivitada eraldi, kui soovite:

- Parandada oma spetsifikatsiooni algse seadistamise pärast
- Uudistada oma site briefit veebilehti muutudes
- Luua üksikasjalik spetsifikatsioon enne Theme Builderi kasutamist

## Probleemide lahendamine {#troubleshooting}

**Minu `site_brief` ei kasutata**
- Kontrollige, kas agentil on sisse pääs (access) memoriasse
- Paluta agentit "vaadada minu site brief" (recall my site brief)
- Kontrollige, et memori on sisse käivitunud teie seadistustes

**Ma soovisin uuesti alustada uue site\_briefiga**
- Külg agentile: "Puhasta minu site brief ja alusta ühestest"
- Soita Site Specificationi uuesti

**Agent teeb soovitatusi, mis ei vastata minu site\_briefile**
- Paluta agentit: "Vaata minu site brief"
- Patenta oma site\_briefi, kui see on vanaline
- Anna lisakontestte tegevuse jaoks.

## Järgmine sammud {#next-steps}

Site specificationi definitsioonide pärast:

1. **Kasuta Theme Builder**: Luua oma site\_briefist põhjalik tema
2. **Täpsusta disain:** Kasuta Design System Aesthetics oskust üksikasjaliku disaini tegevuste jaoks
3. **Planeeri sisu:** Paluta agentit sisuvahendite struktuuride soovitatavate ettepanemiste eest
4. **Loo funktsioone:** Paluta funktsioone, mis on suunatud teie äri eesmärkidele
