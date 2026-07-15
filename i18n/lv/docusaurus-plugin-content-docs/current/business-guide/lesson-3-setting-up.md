---
title: '3. nodarbība: Jūsu tīkla iestatīšana'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# 3. nodarbība: Tīkla iestatīšana

Laiks būvēt. Šajā nodarbībā jūs instalēsiet Ultimate Multisite un konfigurēsiet FitSite tīkla pamatu. Katrs lēmums šeit tiek pieņemts, domājot par fitnesa nišu.

## Kur mēs palikām {#where-we-left-off}

Mēs izvēlējāmies fitnesa studijas kā savu nišu un pārbaudījām iespēju. Tagad pārvērtīsim šo ideju par strādājošu platformu.

## Hostinga izvēle {#choosing-your-hosting}

Jūsu hostinga izvēle nišas platformai ir svarīgāka nekā vienai tīmekļa vietnei. Jūs neuzturat vienu vietni — jūs uzturat tīklu, kas izaugs līdz desmitiem vai simtiem vietņu.

### Kam pievērst uzmanību {#what-to-look-for}

- **WordPress Multisite atbalsts**: Ne visi hostinga pakalpojumu sniedzēji labi apstrādā multisite
- **Wildcard SSL**: Būtiski subdomēnos balstītiem tīkliem
- **Mērogojami resursi**: Jums vajag vietu izaugsmei bez migrēšanas
- **Ultimate Multisite integrācija**: Automatizēta domēnu kartēšana un SSL ietaupa ievērojamas operatīvās pūles

### Ieteicamā pieeja {#recommended-approach}

Izvēlieties hostingu no [Saderīgo pakalpojumu sniedzēju](/user-guide/host-integrations/closte) saraksta. Tie ir pārbaudīti ar Ultimate Multisite un nodrošina integrācijas, kas nepieciešamas domēnu kartēšanai un SSL automatizācijai.

FitSite gadījumā mēs izmantosim subdomēnu konfigurāciju. Tas nozīmē, ka klientu vietnes sākotnēji parādīsies kā `studioname.fitsite.com`, pirms viņi pēc izvēles piesaista savu domēnu.

## WordPress Multisite instalēšana {#installing-wordpress-multisite}

Ja jums vēl nav WordPress Multisite instalācijas:

1. Instalējiet WordPress pie sava hostinga pakalpojumu sniedzēja
2. Izpildiet ceļvedi [Kā instalēt WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Kad tiek prasīts, izvēlieties **subdomēnu** konfigurāciju

:::tip Why Subdomains?
Subdomains give each customer site its own distinct address (`studio.fitsite.com`) rather than a path (`fitsite.com/studio`). This is more professional for your customers and avoids permalink conflicts. See [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) for a detailed comparison.
:::

## Ultimate Multisite instalēšana {#installing-ultimate-multisite}

Izpildiet ceļvedi [Ultimate Multisite instalēšana](/user-guide/getting-started/installing-ultimate-multisite), lai:

1. Augšupielādētu un aktivizētu plugin visā tīklā
2. Palaistu [Iestatīšanas vedni](/user-guide/getting-started/multisite-setup-wizard)

Iestatīšanas vedņa laikā paturiet prātā FitSite nišu:

- **Valūta**: Iestatiet valūtu, ko izmanto jūsu fitnesa studiju klienti
- **Uzņēmuma nosaukums**: "FitSite" (vai jūsu izvēlētais zīmola nosaukums)
- **Uzņēmuma logotips**: Augšupielādējiet savu zīmola logotipu — tas parādās rēķinos un e-pastos

## Konfigurēšana fitnesa nišai {#configuring-for-the-fitness-niche}

Kad Ultimate Multisite ir instalēts, veiciet šīs nišai specifiskās konfigurācijas izvēles:

### Vispārīgie iestatījumi {#general-settings}

Dodieties uz **Ultimate Multisite > Settings** un konfigurējiet:

- **Vietnes nosaukums**: FitSite
- **Noklusējuma loma**: Administrators — fitnesa studiju īpašniekiem nepieciešama pilna kontrole pār savas vietnes saturu
- **Reģistrācija**: Iespējojiet lietotāju reģistrāciju, lai studiju īpašnieki varētu reģistrēties paši

### E-pasta konfigurācija {#email-configuration}

Jūsu sistēmas e-pastiem jārunā jūsu nišas valodā. Dodieties uz **Ultimate Multisite > Settings > Emails** un pielāgojiet:

- Aizstājiet vispārīgu "your new site" formulējumu ar fitnesam specifisku ziņojumapmaiņu
- Apsveikuma tēmas piemērs: "Jūsu fitnesa studijas tīmekļa vietne ir gatava"
- Apsveikuma teksta piemērs: Atsaucieties uz viņu studiju, nodarbībām un darba sākšanu ar viņu fitnesa vietni

Mēs to pilnveidosim tālāk 8. nodarbībā (Klientu ievadīšana), bet tona iestatīšana jau tagad nodrošina, ka pat agrīnas testa reģistrācijas šķiet nišai specifiskas.

### Domēna konfigurācija {#domain-configuration}

Ja izmantojat saderīgu hostinga pakalpojumu sniedzēju, konfigurējiet domēnu kartēšanu tagad:

1. Dodieties uz **Ultimate Multisite > Settings > Domain Mapping**
2. Izpildiet integrācijas ceļvedi savam konkrētajam hostingam
3. Pārbaudiet, vai jaunās apakšvietnes automātiski saņem SSL

Tas nodrošina, ka tad, kad nākamajā nodarbībā sāksim veidot veidnes un testa vietnes, viss darbosies no sākuma līdz beigām.

## FitSite tīkls līdz šim {#the-fitsite-network-so-far}

Šīs nodarbības beigās jums ir:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Ko mēs izveidojām šajā nodarbībā {#what-we-built-this-lesson}

- **Strādājošu WordPress Multisite** instalāciju subdomēnu režīmā
- **Instalētu Ultimate Multisite**, kas konfigurēts ar FitSite zīmolu
- **Hostingu un SSL**, kas iestatīti augošam tīklam
- **Domēnu kartēšanu**, kas konfigurēta jūsu hostinga pakalpojumu sniedzējam
- **Nišai specifisku e-pasta toni**, kas izveidots no pirmās dienas

---

**Tālāk:** [4. nodarbība: Nišas veidņu veidošana](lesson-4-templates) — mēs izveidojam vietņu veidnes, ko fitnesa studiju īpašnieki patiešām vēlēsies izmantot.
