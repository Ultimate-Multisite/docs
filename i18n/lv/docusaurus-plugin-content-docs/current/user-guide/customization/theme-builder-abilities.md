---
title: Temas izstrādes spējās
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Temas būvums: Bloktemu scaffoldēšana un aktivizācija {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 ieviesta divas spēcīgas iespējas, kas ļauj jums tieši no чаta interfeisa izveidot un izvietot personalizētus bloktemas.

## Īssvarojums {#overview}

Iespējās **scaffold-block-theme** un **activate-theme** iespējas ļauj agentiem:
- Izveidot pilnas, produkcijai gatavas bloktemas atbilstoši jūsu specifikācijām
- Automāti aktivizēt temus uz jūsu vietnē bez manas iejaukšanās
- Izveidot kohesīvu vizuālu identitāti ar ceļvedojamajiem dizaina lēmumiem

## Bloktemas scaffoldēšana {#scaffold-block-theme}

**scaffold-block-theme** iespēja izveido jaunu WordPress bloktemu ar pilnu temu struktūru, kur ietver:

- `theme.json` konfigurāciju ar dizaina tokenus
- Bloktempla failus par biežos layoutiem
- Personalizētus bloku stili un variācijas
- Temas metadatus un atbalsta deklarācijas

### Kā izmantot {#how-to-invoke}

Jautājumā ar Superdav AI Agent varētu lūgt temu izveidi:

```
"Izveido bloktemu vadīto 'Modern Agency' ar zilu un balta krāsu skemu,
sans-serif tipografiju un profesionālu layoutu"
```

Agentis darīs šo:
1. Sūdzēs jūsu dizaina preferences sarunas caur
2. Izveidīs pilnu temu struktūru
3. Izveidīs visus nepieciešamos temas failus
4. Gatavo temu aktivizācijai

### Jautājums par rezultātiem {#expected-output}

Kad iespēja veiksmīgi izstrādās, jūs redziet:

- Apstiprinājumu, ka tema ir scaffoldēta
- Temas nosaukumu un vietas
- Dizaina tokenu kopsavilkumu (krāsu, tipografiju, atstarpes)
- Gatavu aktivizācijas statusa

Piemēra rezultāta:
```
✓ Tema "Modern Agency" veiksmīgi scaffoldēta
  Vieta: /wp-content/themes/modern-agency/
  Krāsas: Primary #0066CC, Secondary #FFFFFF
  Tipografija: Inter (sans-serif)
  Statuss: Gatava aktivizācijai
```

## Temas aktivizācija {#activate-theme}

Spēkmes **activate-theme** ļauj pārlaupīt savu vietni uz jauni izveidotu vai jau eksistējo blokiem temām.

### Kā izmantot {#how-to-invoke-1}

Pēc tēmas izveidošanas jūs varat to aktivizēt neatkarīgi no laika:

```
"Aktivizēt Modern Agency tēmu"
```

Vai aktivizēt jebkuru jau eksistējo tēmu:

```
"Pārlaupīt Twentytwentyfour tēmām"
```

### Jautājums par rezultātiem {#expected-output-1}

Kad aktivizācija veiksmīgi pabeidzjas:

- Aktīvās tēmas apstiprinājums
- Pirms aktīvas tēmas nosaukums (references lai)
- Vietne URL, kurā tēma tagad ir pieejama
- Jebkādas tēmas specifiskās iestatījumu paziņojumi

Piemēra rezultāta:
```
✓ Tēma aktivizēta veiksmīgi
  Aktīvā tēma: Modern Agency
  Pirms aktīvas tēmas: Twentytwentyfour
  Pieejams vietnē: https://yoursite.com
  Piezīme: Pārbaudiet savu puslipi, lai apstiprinātu jauno dizainu
```

## Darba plāns: Izveidot un aktivizēt {#workflow-scaffold-and-activate}

Tipisks darba plāns kombinē abas iespējas:

1. **Lūgties par tēmas izveidi**: "Izveidot blokiem tēmu manam SaaS apmeklējuma lapai"
2. **Agent izveido tēmu**: Izveido failus un dizaina tokenus
3. **Pārskatīt un uzlabot**: Disaina izmaiņu apspriešana, ja tas ir nepieciešams
4. **Aktivizēt**: "Aktivizēt tēmu tagad"
5. **Apstiprināt**: Apmeklējiet savu vietni, lai apstiprinātu, ka jaunais dizains ir pieejams

## Dizaina tokeni un personalizācija {#design-tokens-and-customization}

Izveidotas tēmas izmanto WordPress dizaina tokenus (kairībā ar `theme.json`) šādi:

- **Krāsas**: Primāri, sekundāri, akcenta, neitrāla palete
- **Tipografija**: Fontu ģimenes, izmēri, svarsība, līnijas augstums
- **Atstarpes**: Padding, margin, gap skali
- **Saraksturi**: Radiusa un platuma tokeni
- **Šaduci**: Elevācijas līmeņi

Šie tokeni ir centrēti `theme.json` failā, kas ļauj viegli pielāgot visu dizaina sistēmu no vienas faila.

## ierobežojumi un paziņojumi {#limitations-and-notes}

Tema tiek izveidots failā `/wp-content/themes/` un jāievēro WordPress nosaukuma konvencijas.
Aktivizācija prasa atbilstošas iestatas uz jūsu WordPress vietnē.
Piemērotu PHP koda temās ir minimāli; sarežģītas funkcijas veidzam ar pluginus.
Bloktemas labāk darbojas ar WordPress 5.9 un jaunāku versiju.

## Kļūdu likums (Troubleshooting) {#troubleshooting}

**Tema neparādās pēc izveidošanas (scaffolding)**
- Pārbaudiet, vai temāji direktorijs ir savāts un ir atbilstošas iestatas.
- Pārbaudiet, vai `theme.json` ir pareizi formatēts JSON.
- Nodrošiniet, ka temājs nosaukums nav konfliktējošs ar jau eksistētām temām.

**Aktivizācija neiztur**
- Apstipriniet, ka jums ir administratoru iestatas.
- Pārbaudiet, vai WordPress var lasīt temājas direktoriju.
- Skatieties WordPress kļūdu logus (error logs) detalizētāk.

**Dizaina tokeni nepiemērojas**
- Pārbaudiet, vai `theme.json` sintakse ir pareiza.
- Tīriet jebkuru kešēšanas pluginu (caching plugins).
- Pārbaudiet, vai jūsu WordPress versija atbalsta to tokenus, ko jūs izmantojat.

## Nākamie soļi {#next-steps}

Pēc tematas aktivizēšanas var:
- Izmantot **Design System Aesthetics** prasmi, lai uzlabotu tipografiju, krāsas un atstarpes (spacing).
- Personalizēt individuālos bloku stili ar WordPress bloka redaktoru.
- Pievienot savu CSS failā `style.css` temā.
- Izveidot personalizētas bloku šablons konkrētām lapas tipiem.
