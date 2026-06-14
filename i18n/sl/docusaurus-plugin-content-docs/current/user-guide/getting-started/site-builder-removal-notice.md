---
title: Obvestilo o odstranitvi načina gradnje spletnega mesta
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Obvestilo o odstranitvi moči Site Builder Mode

**Site Builder mode je odstranjen v Superdav AI Agent v verziji v1.12.0.** Če ste uporabljali Site Builder mode, morate prehoditi na **Setup Assistant agent** za ustvarjanje tem in urejanje spletnih strani.

## Kaj se je zgodilo?

### Site Builder Mode (Starostni)

Site Builder mode je bil wizard-baziran interfejs za:

- Ustvarjanje strani iz šablon
- Konfiguracijo osnovnih nastavitev
- Izbiro teme
- Uporabo začetnega vsebine

### Kaj ga zamenja?

**Setup Assistant agent** zdaj obravnava vso funkcionalnost Site Builder mode s:

- bolj fleksibilno nastavitvijo, ki jo vodi agent
- boljšimi možnostmi prilagoditve teme
- integracijo z onboardingom Theme Builderja
- trajnim memorijo `site_brief` za prihodnje seanse

## Če ste uporabljali Site Builder Mode

### Vaše strani so varno

- Strani ustvarjene s Site Builder mode nadaljujejo delovati
- Ni izgubljen podatki ali prekinitev strani
- Lahko nadaljevate upravljanje svojih strani običajno

### Prehod na Setup Assistant agent

Za novo nastavitve strani ali spremembe tem uporabite Setup Assistant agent:

```
"Pomagaj mi ustvariti novu stran"
```

ali

```
"Začniti onboarding Theme Builderja"
```

Setup Assistant agent ponuja isto funkcionalnost z več fleksibilnosti.

## Primerjava: Site Builder vs. Setup Assistant

| Funkcija | Site Builder (Odstranjen) | Setup Assistant (Novo) |
|---------|----------------------|----------------------|
| Metoda nastavitve | Wizard obrazec | Razgovor s agentom |
| Izbiro teme | Preddefinirane šablone | Samostavna generacija |
| Prilagodljivost | Omejena možnost | Celotna sistem za dizajn |
| Site brief | Ni shranjen | Trajna memorija |
| Prihodnje seanse | Ponovni postavitvi | Uporaba shranjene `site_brief` |
| Fleksibilnost | Fiksna potek delovanja | Adaptiv razgovor |

## Prehod na Setup Assistant agent

### Za nove strani

Namesto uporabo Site Builder mode:

1. Zahteva: "Pomagaj mi nastaviti novo spletno mesto"
2. Agent Pomaga za nastavitvami vodi skozi:
   - Namerno in cilje spletnega mesta
   - Cilna pubsubenca
   - Brand identiteta
   - Generiranje teme
   - Početna konfiguracija

### Za obstoječa spletna mesta

Če imate obstojno spletno mesto iz Site Builder mode:

1. Lahko nadaljevate z uporabo kot je
2. Za nadogodobitev teme zahteve: "Redizajniraj moje spletno mesto"
3. Agent Pomaga za nastavitvami vam bo pomagal ustvariti novo temo
4. Vaš podatki o spletnem mestu ostajajo neimenovani

### Za spremembe teme

Namesto izbire teme v Site Builder mode:

1. Zahteva: "Spremeni mi temo"
2. Agent Pomaga za nastavitvami bo:
   - Vprašal o vaših predlogah dizajna
   - Generiral prilagojeno temo
   - Aktiviral jo na vašem mestu

## Ključne razlike

### Site Builder Mode

```
1. Izberi šablon
2. Izberi temu
3. Konfiguri osnovne nastavitve
4. Končno
```

### Agent Pomaga za nastavitvami (Setup Assistant Agent)

```
1. Opisaj namen vaše spletne strani
2. Določite ciljno pubsubenco
3. Izberite predloge dizajna
4. Agent generira prilagojeno temo
5. Agent aktivira temo
6. Kratko opomba o mestu je shranjena za prihodnje seanse
```

## Prednosti Agent Pomaga za nastavitvami (Setup Assistant Agent)

### Več fleksibilno

- Opisujte svoje spletno mesto v naravnem jeziku
- Dobite prilagojene priporočbe
- Prilagodite se vašim specifičnim potrebam

### Boljša prilagodljivost

- Generiranje prilagojene teme
- Odločanja o sistemu dizajna (Design System)
- Trajno shranjevanje dizajnerskih tokenov (design tokens)

### Trajna memorija

- Vaš `site_brief` je shranjen
- Prihodnji agenti bodo razumeli vaše spletno mesto
- Ni potrebno ponavljati informacije o nastavitvah pri vsakoj seanci

### Integriran delovni tok (Integrated Workflow)

- Onboarding za temo Builderja
- Veščina estetike Design Systema
- Možnost nadzorov vidljivosti (Visibility controls)
- Vse stvari deluje skoordinirano in brez težav

## Reševanje težav (Troubleshooting)

### Ne najdem Site Builder mode

Site Builder mode je odstranjen. Uporabite agent Pomaga za nastavitvami:

### I želim ponovno ustvariti spletno mesto iz Site Builderja

To lahko ponovno ustvarite z agentom Setup Assistant:

1. Zahtevanje: "Pomagaj mi nastavit novo spletno mesto" (Help me set up a new site)
2. Opis svojega originalnega spletnega mesta in njegovega dizajna
3. Agent bo generiral podobno temo
4. Vaš `site_brief` bo shranjen za prihodnje reference

### Moj obstoječi Site Builder spletni strani ne deluje

Obstojna spletna mesta ustvarjena z načinom Site Builderja nadaljujejo delovati. Če imate težave:

1. Preverite, da je vaša tema še vedno aktivna
2. Preverite, da so vključeni (enabled) vsi vosje pluginji
3. Preverite WordPress error logs
4. Stikajte se z podporo, če problemi vztrajajo

### Ali lahko nadaljujem z uporabo mojih starih temeljcev Site Builderja?

Temeljci Site Builderja ni več na voljo. Vendar:

- Vaša obstojna spletna mesta nadaljujejo delovati
- Lahko ponovno ustvarite podobna spletna mesta z agentom Setup Assistant
- Agent Setup Assistant ponuja več možnosti prilagodbe

## Naslednji koraki

1. **Za nova spletne mesta**: Uporabite agent Setup Assistant
2. **Za obstojna spletna mesta**: Nadaljujte z uporabo kot so
3. **Za spremembe teme**: Zahtevajte pomoč od agenta Setup Assistant
4. **Za izboljšanje dizajna**: Uporabite veščino Design System Aesthetics

## Povezani področja

- **Onboarding Theme Builderja**: Voženo nastavitve za prilagojene teme
- **Agent Setup Assistant**: Voženo nastavitve spletne strani z agentom
- **Site Specification Skill**: Določite cilje in publiko vaše spletne strani
- **Design System Aesthetics Skill**: Izboljšajte vizualno identiteto vaše spletne strani
