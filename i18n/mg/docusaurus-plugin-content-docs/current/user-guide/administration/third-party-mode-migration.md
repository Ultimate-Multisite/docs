---
title: Mifindra amin'ny Fomba Fandaharam-potoana Fanjakana Fahatelo
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration amin'ny Fomba Fiasa Fandaharam-potoana Fahatelo (Third-Party Mode)

Ny Superdav AI Agent v1.12.0 dia manova ny fomba fitantanana ireo fahaizana an'ny fahatelo (third-party abilities). **Amin'izao fotoana, ny fomba fiasa fahatelo dia miankina amin'ny "auto" ho default**, izay ahafahana mampiditra azy mivantana amin'ny WordPress Abilities API eo amin'ny WordPress 7.0+ nefa tsy mila fametrahana manokana.

## Inona no Novana?

### Alohan'ny v1.12.0

Nilازà ny fahaizana an'ny fahatelo (third-party abilities) tamin'ny alalan'ny fametrahana manokana:

- Mila mametraka mazava ny "third-party mode" ianao
- Ny fahaizana dia avy amin'ny registry manokana
- Ny fampifandraisana amin'ny WordPress Abilities API dia safidy (optional)
- Ny fomba fiasa taloha (legacy mode) no default

### Aorian'ny v1.12.0

Miasa ho azy ny fahaizana an'ny fahatelo:

- Ny fomba fiasa fahatelo dia miankina amin'ny "auto"
- Ny fahaizana dia mifandray mivantana amin'ny WordPress Abilities API
- Tsy mila fametrahana manokana eo amin'ny WordPress 7.0+
- Mbola azo ampiasaina ny fomba fiasa taloha (legacy mode) ho an'ny dikan-teny WordPress taloha kokoa

## Iza no Voafeta?

### Fampidirana Vaovao (WordPress 7.0+)

**Tsy mila manao na inona na inona.** Ny fomba fiasa fahatelo dia voafetra amin'ny "auto" ho azy, ary miasa tsara izy avy hatrany.

### Fampidirana Efa Misy (Existing Installations)

**Ny setrin'ny fandraisana anjara dia voatokana.** Raha mampiasa ireto ianao:

- **Legacy mode**: Ho mijanona amin'ny legacy mode ianao (tsy misy fiovana)
- **Manual third-party mode**: Ho mijanona amin'ny mode manokana ianao (tsy misy fiovana)
- **Auto mode**: Ho mitohy amin'ny auto mode ianao (tsy misy fiovana)

### Dikan-teny WordPress Alohan'ny 7.0

**Mbola azo ampiasaina ny legacy mode.** Raha mampiasa WordPress 6.x na taloha kokoa ianao:

- Ny fomba fiasa fahatelo dia miankina amin'ny "legacy" ho default
- Afaka manao fametrahana manokana ny third-party mode raha tianao
- Ampirisihina ny handroso amin'ny WordPress 7.0+ mba hampiasana ny Abilities API voalohany (native)

## Fahatakarana ireo Fomba Fiasa (Understanding the Modes)

### Auto Mode (Ny Default Vaovao)

**Ny auto mode** dia mampiasa ny fampifandraisana mivantana amin'ny WordPress Abilities API:

- Ny fahaizana dia voamarina amin'ny alalan'ny WordPress hooks
- Fahaiza-manao tanteraka miaraka amin'ny WordPress 7.0+ Abilities API
- Fikarohana ho azy ny fahaizana an'ny fahatelo (third-party abilities)
- Tsy mila fametrahana manokana

```php
// Ohatra hoe, rehefa mandeha ny hook, dia miasa mivantana izy
function my_custom_ability_hook( $data ) {
    if ( is_plugin_active( 'superdav-ai' ) ) {
        // Fandikana sy fampiharana ny fahaizana an'ny fahatelo eto
        return new ThirdPartyAbility();
    }
    return null;
}
add_action( 'wp_loaded', 'my_custom_ability_hook' );
```

**Faly fampiasana**: WordPress 7.0+ miaraka amin'ny fahaizana an-tserasera hafa (third-party abilities)

### Fomba Mampiasa Manokana (Manual Mode)

Ny **fomba mampiasa manokana (manual mode)** dia mitaky fametrahana mazava:

- Milaza izay fahaizana an-tserasera hafa (third-party abilities) tianao hampiasaina
- Ilaina amin'ny fanandramana na ny fampiasana fahaizana manokana
- Mitaky fanovana ireo rakitra fametrahana (configuration files)
- Manome fanaraha-maso bebe kokoa, fa mitaky fanamboarana be kokoa

**Faly fampiasana**: Fanandramana, fampiasana fahaizana manokana, na fametrahana manokana.

### Fomba Taloha (Legacy Mode)

Ny **fomba taloha (legacy mode)** dia mampiasa ny rafitry ny fahaizana an-tserasera hafa taloha:

- Fandrefana fahaizana manokana (registry of custom abilities) (tsy WordPress Abilities API)
- Mifanaraka amin'ny dikan-teny taloha kokoa (backward compatible) ireo dikan-teny WordPress taloha
- Tsy misy fampifandraisana mivantana amin'ny WordPress
- Efa tsy ampiasaina intsony fa mbola anan-tsiny

**Faly fampiasana**: WordPress 6.x na taloha kokoa, na rehefa mila fahaizana taloha ianao.

## Famaritana ny Fomba Miasa Ankehitriny

### Amin'ny Admin Panel (Admin Panel)

1. Mandehana any amin'**WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Mitady ny fampisehoana hoe **Third-Party Mode**
3. Ho hitanao ny fomba fiasanao ankehitriny sy ireo safidy hanovana azy

### Amin'ny Code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', na 'legacy'
```

## Fanovana ny Fomba Miasa

### Fiova amin'ny Auto Mode (Switch to Auto Mode)

Raha ao anatin'ny WordPress 7.0+ ianao ary te hampiasa auto mode:

1. Mandehana any amin'**Superdav AI Agent** → **Settings**
2. Mitady ny **Third-Party Mode**
3. Safidio hoe **Auto (WordPress Abilities API)**
4. Kiti ny **Save**

Ho mamantatra sy hanatsara ho fahaizana an-tserasera hafa (third-party abilities) ho azy ny Superdav AI Agent.

### Fiova amin'ny Manual Mode (Switch to Manual Mode)

Raha te-handamina manokana izay fahaizana hifandray:

1. Mandehana any amin'**Superdav AI Agent** → **Settings**
2. Mitady ny **Third-Party Mode**
3. Safidio hoe **Manual**
4. Kiti ny **Save**
5. Ovay ny rakitra fametrahanao (configuration file) mba hanazavana izay fahaizana tianao hampiasaina

### Fiova amin'ny Legacy Mode (Switch to Legacy Mode)

Raha mila fahaizana taloha ianao:

1. **Superdav AI Agent**-na la → **Settings** (Fandiana)
2. Mitadia ny **Third-Party Mode** (Modo ho anolotra hafa)
3. Safidio ny **Legacy** (Tsy mbola azo ampiasaina fa manome fahafahana)
4. Tsindrio ny **Save** (Te-hirafy)

## Tombontolo amin'ny Auto Mode

### Fikarohana Ho Anao Amin'ny Fomba Atao (Automatic Discovery)

Ny fahaizana dia hifantohana azy ho azy avy amin'ireto zavatra ireto:

- Plugins napetraka
- Theme miankina aminao
- Plugins tsy maintsy ampiasaina
- Plugins azo ampiana (Drop-in plugins)

Tsy mila manao fametrahana manokana ianao.

### Fandefasana Mivantana (Native Integration)

Ny fahaizana dia mifandray amin'ny WordPress Abilities API:

- Mitovy amin'ny fototry ny WordPress
- Miasa amin'ny admin an'ny WordPress
- Mifanaraka amin'ny plugins hafa mampiasa ny Abilities API
- Ho azo antoka ho an'ny ho avy rehefa miova ny WordPress

### Fitantanana Sarotra (Simplified Management)

- Tsy mila manova rakitra fametrahana ianao
- Tsy mila manao fametrahana fahaizana manokana ianao
- Ny Fandrefesana ny Fahaizana (Ability Visibility controls) dia miasa ho azy
- Ny fampahafantarana an'ny Admin dia hanome antso anao momba ireo fahaizana tsy voamarina

### Fahafahana Miara-miasa Tsara kokoa (Better Performance)

- Ny fahaizana dia voatahiry (cached)
- Azo ampiana rehefa ilaina (Lazy-loaded on demand)
- Voalamina ho an'ny WordPress 7.0+

## Lalàn'ny Fiovan-tena (Migration Path)

### Raha mbola amin'ny WordPress 6.x ianao

1. **Ampidiro mankany WordPress 7.0+** (rehefa vonona)
2. **Ampio ny Superdav AI Agent** ho v1.12.0+
3. **Ovay ny third-party mode ho Auto** (safidy an-tsokosoko; mbola miasa ny legacy mode)
4. **Jereo ny fampisehoana ny fahaizana** mba hahazoana fanaraha-maso tsara ny fomba fandraisana azy

### Raha mbola amin'ny WordPress 7.0+ ianao

1. **Ampio ny Superdav AI Agent** ho v1.12.0+
2. **Fantaro fa voafidy ny third-party mode ho Auto** (tokony ho toy izany no ankapobeny)
3. **Jereo ny fampisehoana ny fahaizana** mba hahazoana fanaraha-maso tsara ny fomba fandraisana azy
4. **Andramo ny fahaizana third-party** mba hanamafisana fa miasa izy

## Fanamboarana Olana (Troubleshooting)

### Tsy mipoitra ny fahaizana amin'ny auto mode

- Fantaro fa WordPress 7.0+ no ampiasainao
- Jereo fa voafidy ny third-party mode ho "Auto"
- Fantaro fa mbola miasa ilay plugin manome ny fahaizana
- Jereo ny error logs an'ny WordPress mba hahitana ny fahadisoana amin'ny fametrahana

### Te hanohy ny legacy mode aho

- Mandehana any **Settings** → **Third-Party Mode**
- Safidio ny **Legacy**
- Tsindrio ny **Save**
- Ny legacy mode dia ho miasa mbola

### Ireo tsy mipoitra ny fahaizana manokana ahy

- Jereo raha voasoratra amin'ny alalan'ny WordPress hooks izy ireo
- Jereo raha mampihatra tsara ny Abilities API izy ireo
- Jereo ny logs fahadisoana an'ny WordPress

### Mampandray "ability tsy voasokajy" aho

- Izany dia fomba mahazatra ho an'ny fahaizana vaovao avy amin'ny lafiny hafa (third-party) izany
- Jereo sy sokafy azy ireo ao amin'ny admin notice
- Jereo ny **Ability Visibility** mba hahazoana antsipiriany momba ny fametrahana

## Fandresena ny fomba taloha (Backward Compatibility)

### Fandaharana efa misy

Raha manana fepetra efa misy momba ny fahaizana avy amin'ny lafiny hafa ianao:

- **Legacy mode**: Ho miasa mbola ny fepetranareo
- **Manual mode**: Ho miasa mbola ny fepetranareo
- **Auto mode**: Ho tsy ho voarafitra ny fepetranareo (ny auto mode no handray anjara)

Mba hitazomana ny fepetra manokana anao, mijanona ao amin'ny Manual na Legacy mode.

### Fandaharam-potoana fandrosoana (Deprecation Timeline)

- **v1.12.0**: Mbola voasoratra tanteraka ny Legacy sy Manual modes
- **v1.13.0+**: Mety hisy famantarana fandrosoana ho an'ny Legacy mode
- **v2.0.0**: Mety ho esorina ny Legacy mode (Hahazo antoka)

## Fomba tsara indrindra ampiasaina (Best Practices)

### Ho an'ny fanoratana vaovao (New Installations)

- Ampiasao ny Auto mode (izay no default)
- Avelao ny Superdav AI Agent handinihina ho fahaizana ho azy
- Ampiasao ny Ability Visibility mba hifehezana ny fidirana

### Ho an'ny fanoratana efa misy (Existing Installations)

- Ampidiro amin'ny WordPress 7.0+ raha azo atao
- Miova amin'ny Auto mode mba hahatonga azy ho mora idin-tsaina kokoa
- Jereo sy sokafy ny fahaizana avy amin'ny alalan'ny Ability Visibility

### Ho an'ny fahaizana manokana (For Custom Abilities)

- Soraty ny fahaizana amin'ny alalan'ny WordPress hooks (Abilities API)
- Aza mampiasa custom ability registries
- Andramo amin'ny WordPress 7.0+ miaraka amin'ny Auto mode

1. **Jereo ny dikan'ny WordPress anao**: Fantaro fa ao amin'ny 7.0+ ianao mba hahazoana ny Auto mode.
2. **Jereo ny fomba fiasanareo amin'ny third-party mode**: Mandehin'ny Settings ary jereo ny mode anananao izany.
3. **Ampidiro raha ilaina**: Ovay ho amin'ny Auto mode raha ao amin'ny WordPress 7.0+ ianao.
4. **Apetraho ny fahaizana**: Jereo sy apetraho ireo fahaizana tsy voamarina.
5. **Andrana (Test)**: Fantaro fa miasa tsara ny fahaizana anao amin'ny third-party.

## Lohateny Mifandraika

- **Fahadisoana ny fahaizana (Ability Visibility)**: Apetraho izay fahaizana tokony ho hita aiza.
- **WordPress Abilities API**: Fantaro momba ny fametrahana ireo ability an'ny WordPress mivantana.
- **Famoronana Third-Party Ability**: Mamorona ability izay miasa amin'ny Auto mode
