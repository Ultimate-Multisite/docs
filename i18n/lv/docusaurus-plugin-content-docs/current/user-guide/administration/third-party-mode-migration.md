---
title: Trešās puses režīma migrācija
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrācija uz tretiem pusēm

Superdav AI Agent v1.12.0 mainīja, kā tiek strādāti tretiepusēji spējumi. **Trešās puses režīms tagad defaultējas uz "auto",** ļaujot integrēties ar WordPress Abilities API tieši bez manas konfigurācijas, nepieciežīgi WordPress 7.0+ versijā.

## Kāds ir mainījies?

### Pirms v1.12.0

Trešās puses spējumi prasa manuālās konfigurācijas:

- Jūs jātinaši jāveic ekspluatēti "trešās puses režīma" iespēju
- Spējumi ielādējami no custom reģistrā
- Integrācija ar WordPress Abilities API bija valkārīga
- Senā režija bija defaultēta

### Pēc v1.12.0

Trešās puses spējumi strādā automātiski:

- Trešās puses režīms defaultējas uz "auto"
- Spējumi integrējas tieši ar WordPress Abilities API
- Nepieciešama manas konfigurācijas veicšana WordPress 7.0+ versijās
- Senā režija joprojām ir pieejama vecākiem WordPress versijām

## Kur ir ietekmēts?

### Jauni instalācijas (WordPress 7.0+)

**Nepieciešams neveikt nekāda darbība.** Trešās puses režīms automātiski tiek noteikts uz "auto", un spējumi strādā bez manas konfigurācijas.

### Savi ir eksistējošie instalācijas

**Jūsu iestatījumi saglabātas.** Ja jūs izmantojāt:

- **Senā režiju**: Jūs paliekat senajā režīmā (nekāda izmaiņas)
- **Manuālo trešās puses režīmu**: Jūs paliekat manuālajā režīmā (nekāda izmaiņas)
- **Auto režīmu**: Jūs turpināt strādāt auto režīmā (nekāda izmaiņas)

### WordPress versijas pirms 7.0

**Senā režija joprojām ir pieejama.** Ja jūs esat uz WordPress 6.x vai vēl senā:

- Trešās puses režīms defaultējas uz "legacy" (senais)
- Jūs varat manuāli iespēt trešās puses režīmu, ja vēlaties
- Pārvietojieties uz WordPress 7.0+ izmantot tiešu Abilities API

## Režimu sapratīšana

### Auto režīms (Jauns defaultējs)

**Auto režīms** izmanto tiešu integrāciju ar WordPress Abilities API:

- Spējumi tiek reģistrēti caur WordPress hooks
- Pilna saderība ar WordPress 7.0+ Abilities API
- Automātiska atklāšana trešās puses spējumos
- Nepieciešama manas konfigurācijas veicšana

**Kāpēc izmantot**: WordPress 7.0+ ar tretišās puses iespējām

### Manas režīms (Manual Mode)

**Manas režīmā** nepieciešama precīza konfigurācija:

- Jūs noteikjat, kuras tretišās puses iespējas jāaizcarga
- Noderīga testēt vai izvēlētos iespēju aizmirsti
- Nepieciešams rediģēt konfiguraācijas failus
- Lielāks kontrole, bet vairāk iestatījumu

**Kāpēc izmantot**: Testēšana, izvēlētas iespēju aizmirsta vai pielāgotas konfigurācijas

### Vecais režīms (Legacy Mode)

**Vecais režīms** izmanto vecais tretišās puses iespēju sistēmu:

- Pielaugotie iespēju reģistrs (ne WordPress Abilities API)
- Atpakaļ kompatibils ar vecas WordPress versijas
- Nav vietējai WordPress integrāciju
- Deprecēts, bet joprojām atbalstīts

**Kāpēc izmantot**: WordPress 6.x vai vēl vecākās versijas, vai jums ir nepieciešama vecais kompatibilite

## Kā pārbaudīt pašreizējamo režīmu

### Ar admin panelu

1. Ieiet uz **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Meklējiet iestatījumu **Third-Party Mode** (Tretišās puses režīms)
3. Jūs redzēs savu pašreizējais režīmu un iespējas mainīt to

### Ar kodu

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' vai 'legacy'
```

## Kā mainīt savu režīmu

### Pārvietot uz Auto režīmu (Auto Mode)

Ja jūs esat WordPress 7.0+ un vēlaties izmantot auto režīmu:

1. Ieiet uz **Superdav AI Agent** → **Settings**
2. Meklējiet **Third-Party Mode** (Tretišās puses režīms)
3. Izvēlieties **Auto (WordPress Abilities API)**
4. Nospiediet **Save** (Saglabāt)

Superdav AI Agent automātiski atklās un reģistrē tretišās puses iespējas.

### Pārvietot uz Manas režīmu (Manual Mode)

Ja vēlaties manas kontrolēt, kuras iespējas jāaizmirst:

1. Ieiet uz **Superdav AI Agent** → **Settings**
2. Meklējiet **Third-Party Mode** (Tretišās puses režīms)
3. Izvēlieties **Manual** (Manas)
4. Nospiediet **Save** (Saglabāt)
5. Rediģējiet savu konfiguraācijas failu, lai noteiktu, kuras iespējas jāaizmirst

### Pārvietot uz Veco režīmu (Legacy Mode)

Ja jums ir nepieciešama vecais kompatibilite:

1. Ieiet uz **Superdav AI Agent** → **Settings**
2. Atrod **Third-Party Mode** (Trešpārdo modes)
3. Izvēlieties **Legacy** (Senāks)
4. Nospiedi **Save** (Saglabāt)

## Auto Mode priekšrocības

### Automātiskais atklājums

Spēju automātiski atrod no:

- Iestādītiem pluginiem
- Aktīvo tēmas (theme)
- Noteikto lietojamības pluginiem (Must-use plugins)
- Drop-in pluginiem

Nav nepieciešams manuāli reģistrēt.

### Datu integrācija ar WordPressu

Spējas integrējas ar WordPress Abilities API:

- Atbilst WordPressa pamata (core) noteikumiem
- Darbojas ar WordPress adminu
- Kompatibils ar citām pluginiem, kas izmanto Abilities API
- Ir nākotnes drošs, jo WordPress attīstās

### Vienkāršā pārvaldība

- Nav konfigurācijas failus, kurus jāredaktē
- Nav manuāli reģistrēt spējām (abilities)
- Spēju redzamības kontroles darbojas automātiski
- Adminu paziņojumi atliec jums uzmanību neklassificētu spējām

### Labāka veiktspēja

- Spējas tiek kešotas (cached)
- Laikmeklis tiek ielādēti tikai pēc pieprasījuma (lazy-loaded on demand)
- Optimizētas WordPress 7.0+ versijās

## Migrācijas ceļš

### Ja esat uz WordPress 6.x

1. **Pārsniegt uz WordPress 7.0+** (kroku, kad būs gatavs)
2. **Atjaunināt Superdav AI Agentu** uz v1.12.0+
3. **Izveidot trešpārdo modu Auto** (optacionāli; senāks modes vēl darbojas)
4. **Pārskatīt spēju redzamību**, lai nodrošinātu pareizu piekļuves kontroli

### Ja esat uz WordPress 7.0+

1. **Atjaunināt Superdav AI Agentu** uz v1.12.0+
2. **Apstiprināt, ka trešpārdo modes ir noteikts uz Auto** (tas par defaultem būs)
3. **Pārskatīt spēju redzamību**, lai nodrošinātu pareizu piekļuves kontroli
4. **Tests trešpārdo spējām**, lai apstiprinātu, ka tās darbojas

## Kļūdu likums (Troubleshooting)

### Spējas neiekļaujas auto režīmā

- Pārbaudiet, vai esat uz WordPress 7.0+
- Pārbaudiet, vai trešpārdo modes ir noteikts uz "Auto"
- Pārbaudiet, vai plugin, kas sniedz spēju, ir aktīvs
- Pārbaudiet WordPressa kļūdu logus (error logs) reģistrācijas kļūdu meklē

### Es vēlos saglabāt senāks modu

- Ieiet uz **Settings** → **Third-Party Mode**
- Izvēlieties **Legacy** (Senāks)
- Nospiedi **Save** (Saglabāt)
- Senais modes turpinās darbojoties

### Mans savas ne redzina parādās

- Pārbaudiet, vai tās ir reģistrētas ar WordPress hooks
- Pārbaudiet, vai jūs labi implementējāt Abilities API
- Pārskatiet WordPress kļūdu logus (error logs)
- Izmantojiet admin lapu **Ability Visibility**, lai redzētu visus reģistrētos savus savus abilities

### Man tiek saņemti "neklasificētas abilities" paziņojumi

- Tas ir normāls jauniem tretpasts abilities
- Pārskatiet un klasificējiet tos admin paziņojumos
- Redziet **Ability Visibility** detalizētām informācijām par klasifikāciju

## Atpakaļcompatibilitāte (Backward Compatibility)

### Saviriktās konfigurācijas

Ja jums ir jau eksistējošas tretpasts abilities konfigurācijas:

- **Legacy mode**: Jūsu konfigurācija turpinās darbojoties
- **Manual mode**: Jūsu konfigurācija turpinās darbojoties
- **Auto mode**: Jūsu konfigurācija tiek ignorēta (auto mode ņem pārvaldību)

Lai saglabātu savu custom konfigurāciju, palikiet Manual vai Legacy režīmā.

### Deprekācijas laiks (Deprecation Timeline)

- **v1.12.0**: Legacy un Manual modi turpinās pilnībā atbalstīti
- **v1.13.0+**: Legacy mode var parādīt deprecācijas paziņojumus
- **v2.0.0**: Legacy mode var būt izslēgts (noteikts)

## Labākās prakses (Best Practices)

### Ja ir jauni instalācijas

- Izmantojiet Auto mode (tā ir defaultais)
-Ļaujiet Superdav AI Agentam automātiski atklāt abilities
-Izmantojiet Ability Visibility, lai kontrolētu piekļuvi

### Ja ir jau eksistējošas instalācijas

- Pārsniegt WordPress 7.0+ iespējams
- Pārslēgties uz Auto mode vienkāršākas pārvaldības veidā
- Pārskatīt un klasificēt abilities izmantojot Ability Visibility

### Ja ir custom abilities

- Reģistrējiet abilities ar WordPress hooks (Abilities API)
- Iz베giet custom ability registries
- Tests veikties WordPress 7.0+ Auto mode ar

## Nākamie soļi

1. **Pārbaudiet savu WordPress versiju**: Pārliecinieties, ka jums ir WordPress 7.0+ Auto režīmā.
2. **Atbildiet uz savu trešās puses režīmu**: Ieiet iestatījumiem un pārbaudiet, kāds ir jūsu pašreizējais režīms.
3. **Ja nepieciešams, atjauninājiet**: Pārvietojies uz Auto režīmu, ja jums ir WordPress 7.0+ versija.
4. **Klasificējiet spējas**: Pārbaudiet un klasificējiet jebkuras nekategorizētās spējas.
5. **Pārbaudiet**: Pārliecinieties, ka jūsu trešās puses spējas darbojas pareizi.

## Saistītie tēmāti

- **Spēju redzamība (Ability Visibility)**: Kontrolējiet, kuras spējas ir pieejamas un kur.
- **WordPress Abilities API**: Izpelciet vietējo WordPress spēju reģistrācijas parasti.
- **Trešās puses spēju attīstība (Third-Party Ability Development)**: Izveidojiet spējas, kas darbojas ar Auto režīmu.
