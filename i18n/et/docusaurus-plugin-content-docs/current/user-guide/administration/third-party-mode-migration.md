---
title: Kolmepoolse režiimi migratsioon
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migratsioon kolmandateileti (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 muuttaa teisekolmandateilisteid käsitlemise viisil. **Kolmandateilimoodi on nüüd oletuksena "auto",** võimaldades loodud WordPress Abilities API -integreerimise kasutamist WordPress 7.0+ versioonil ilma manuaalset konfiguratsiooni vajutamata.

## Mis muutus? {#what-changed}

### V1.12.0 enne {#before-v1120}

Kolmandateilisteid abilisi manuaalse konfiguratsiooni:

- Peidi "kolmandateilimoodi" aktiivselt
- Abilused laaditi oma erikujulistust (custom registry)
- Integreerimine WordPress Abilities API-ga oli valikuline
- Vanemise mood oli oletus.

### V1.12.0 pärast {#after-v1120}

Kolmandateilisteid abilisi töötavad automaatselt:

- Kolmandateilimoodi on oletuksena "auto"
- Abilused integreeruvad loodud WordPress Abilities API-ga
- WordPress 7.0+ versioonil ei ole vaja manuaalset konfiguratsiooni
- Vanemise mood on endiselt saadaval vanemate WordPress versioonide jaoks

## Keda mõjutab? {#who-is-affected}

### Uued installatsioonid (WordPress 7.0+) {#new-installations-wordpress-70}

**Ei vajata tegevust.** Kolmandateilimoodi asetatakse automaatselt "auto" ja abilused töötavad valmis.

### Olemasolevad installatsioonid {#existing-installations}

**Te seadistused säilitatakse.** Kui kasutasite:

- **Vanemise mood:** Juhutas teiselt vanemise mood (ei muudatus)
- **Manuaalset kolmandateilimoodi:** Juhutas teiselt manuaalset mood (ei muudatus)
- **Auto-mood:** Juhutas auto-moodi (ei muudatus)

### WordPress versioonid enne 7.0 {#wordpress-versions-before-70}

**Vanemise mood on endiselt saadaval.** Kui olete WordPress 6.x või vanem:

- Kolmandateilimoodi on oletuksena "legacy"
- Saate manuaalselt aktiveerida kolmandateilimoodi, kui soovite
- Upgrade'ige WordPress 7.0+ versioonile kasutamiseks loodud Abilities API-ga

## Moodide mõistmine {#understanding-the-modes}

### Auto-mood (Uus oletus) {#auto-mode-new-default}

**Auto-mood** kasutab loodud WordPress Abilities API -integreerimist:

- Abilused registreeritakse WordPress hookidega
- Täielik compatibiliteet WordPress 7.0+ Abilities API-ga
- Kolmandateiliste abiluste automaatne avastamine
- Manuaalset konfiguratsiooni vajatus ei ole

**Käitke kasutage**: WordPress 7.0+ ja kolmandate osutuste võimalustega

### Manuaalivõrd (Manual Mode) {#manual-mode}

**Manuaalivõrd** nõuab otsese konfiguratsiooni:

- Te määrate, millise kolmandate osutuste võimalusi laadida
- Kasulik testide või valiklikule võimaluste laadimiseks
- nõuab konfiguratsioonifailide muutmise
- Lisab kontrolli, kuid suurema seadistamise vajaliku

**Käitke kasutage**: Testimine, valiklikul võimalustega laadimine või oma konfiguratsioonid

### Või vanem (Legacy Mode) {#legacy-mode}

**Vane võrd** kasutab vanast kolmandate osutuste süsteemi:

- Omaettevõte registreerim (ei WordPress Abilities API)
- Tagasiühenduvus vana WordPress versioonidega
- Ei ole loodud WordPressiga integreeritav
- Vana, kuid edelleen toetatud

**Käitke kasutage**: WordPress 6.x või vanemad versioonid, või kui vajate vanast compatibiliteti

## Praeguse võrde kontrollimine {#checking-your-current-mode}

### Administratsiooni paneli kaudu {#via-admin-panel}

1. Minenda **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Vaadake **Third-Party Mode** seadistust
3. Näete oma praeguse võrde ja võimalusi seda muuta

### Koodi kaudu {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' või 'legacy'
```

## Võrde muutmine {#changing-your-mode}

### Muuda Auto võrdele (Switch to Auto Mode) {#switch-to-auto-mode}

Kui olete WordPress 7.0+ versioonil ja soovite kasutada auto võrdet:

1. Minenda **Superdav AI Agent** → **Settings**
2. Leppige **Third-Party Mode** seadistuse all
3. Valige **Auto (WordPress Abilities API)**
4. Klõpsake **Save**

Superdav AI Agent avastab ja registreib kolmandate osutuste võimalused automaatselt.

### Muuda Manuaalivõrdele (Switch to Manual Mode) {#switch-to-manual-mode}

Kui soovite manuaalselt kontrollida, millised võimalused laaditakse:

1. Minenda **Superdav AI Agent** → **Settings**
2. Leppige **Third-Party Mode** seadistuse all
3. Valige **Manual**
4. Klõpsake **Save**
5. Muuta oma konfiguratsioonifail, et määrata, millised võimalused laadida

### Muuda Vana võrdele (Switch to Legacy Mode) {#switch-to-legacy-mode}

Kui vajate vanast compatibiliteti:

1. Minime **Superdav AI Agent** → **Settings**
2. Leitu **Third-Party Mode** (Kolmepoolne režiim)
3. Valige **Legacy** (Vajadatud/Vana režiim)
4. Klõpsa **Save** (Salvesta)

## Auto Mode eelised {#benefits-of-auto-mode}

### Automaatiline avastamine {#automatic-discovery}

Abilusi avatakse automaatselt järgmestest:

- Installitud pluginid
- Aktiivne teema
- Oluline pluginid
- Drop-in pluginid

Manuaalset registreerimist ei vaja.

### Lõpulemne integreerimine (Native Integration) {#native-integration}

Abilused integreeruvad WordPress Abilities API-ga:

- Ühemärge WordPress core'iga
- Funktsioneerib WordPress adminis
- Compatibel teiste pluginidega, mis kasutavad Abilities API-t
- Eelujuhise tulevikku, kui WordPress arenevad

### Väsimlik juhtimine (Simplified Management) {#simplified-management}

- Ei ole konfiguratsioonifailid, mida muuta
- Ei ole manuaalset abiluse registreerimist
- Ability Visibility kontrollid töötavad automaatselt
- Admini teavitused hoiatusena teavitavad unklassifikatsioonil olevast abilust

### Parem jõudlus (Better Performance) {#better-performance}

- Abilused on kaedatud (cached)
- Laaditakse vaba ajal (lazy-loaded) vajadusel
- Optimeeritud WordPress 7.0+ versioonile

## Migratsiooni teel {#migration-path}

### Kui oled WordPress 6.x-l {#if-youre-on-wordpress-6x}

1. **Upgrade'i WordPressi 7.0+ versioonile** (kui on valmis)
2. **Uudenda Superdav AI Agent v1.12.0+ versioonile**
3. **Muuda kolmepoolne režiim Auto-le** (valikuline; legacy mode toimib edelleen)
4. **Kontrolli abiluse nähtavust**, et veidi õigutatud juurdepääsu kontrollid oleksid korrektsed

### Kui oled WordPress 7.0+-l {#if-youre-on-wordpress-70}

1. **Uudenda Superdav AI Agent v1.12.0+ versioonile**
2. **Võtke kinnituse, et kolmepoolne režiim on asetatud Auto-le** (see peaks olema oletuks)
3. **Kontrolli abiluse nähtavust**, et veidi õigutatud juurdepääsu kontrollid oleksid korrektsed
4. **Testi kolmepoolseid abilusi**, et kinnitada nende toimimist

## Probleemide lahendamine (Troubleshooting) {#troubleshooting}

### Abilused ei laaduda auto-režiimis {#abilities-arent-loading-in-auto-mode}

- Kontrollige, et olete WordPress 7.0+ versioonil
- Kontrollige, et kolmepoolne režiim on asetatud "Auto"-le
- Kontrollige, kas abilust antav plugin on aktiivne
- Kontrollige WordPressi viga logud registreerimisveetide osas

### Ma tahan hoida legacy mode {#i-want-to-keep-legacy-mode}

- Minime **Settings** → **Third-Party Mode** (Kolmepoolne režiim)
- Valige **Legacy** (Vajadatud/Vana režiim)
- Klõpsa **Save** (Salvesta)
- Legacy mode jätkab toimimist

### Minu oma erikud ei näideta {#my-custom-abilities-arent-showing}

- Kontrollige, et need on registreeritud WordPress hookidega
- Kontrollige, et need implementeerivad Abilities API õigesti
- Vaadake WordPress vigu logud (error logs)
- Kasutage **Ability Visibility** administratiile, et näha kõik registreeritud ability'd

### Mul tuleb "unclassified ability" teavitusi {#im-getting-unclassified-ability-notices}

- See on tavaline uute kolmandate osapoolsete ability'd jaoks
- Vaadake ja klassifitseerige need administrati vigu logus
- Saate klassifikatsioonist rohkem infot **Ability Visibility**st

## Tagas compatibiliteet (Backward Compatibility) {#backward-compatibility}

### Olemasolevad konfiguratsioonid {#existing-configurations}

Kui teil on olemasoleva kolmandate osapoolsete ability'd konfiguratsioonid:

- **Legacy mode**: Teie konfiguratsioon jätkab töötamist
- **Manual mode**: Teie konfiguratsioon jätkab töötamist
- **Auto mode**: Teie konfiguratsioon ignoreerub (auto mode võtab üle)

Et säilitada oma erikkonne konfiguratsiooni, jääge Manual või Legacy režiimile.

### Deprekatsioonijaduga (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy ja Manual modud on veel täielikult toetatud
- **v1.13.0+**: Legacy mode võib näidata deprecatsiooni teavitusi
- **v2.0.0**: Legacy mode võib eemaldata (TBD)

## Parimad praktikad (Best Practices) {#best-practices}

### Uute installatsioonide jaoks {#for-new-installations}

- Kasutage Auto mode'i (see on oletus)
- Lase Superdav AI Agent automatically leida ability'd
- Kasutage Ability Visibility kontrollima aksessi

### Olemasolevate installatsioonide jaoks {#for-existing-installations}

- Upgrade'ige WordPress 7.0+ võimalusel
- Liiguge Auto mode'ile lihtsustatud haldamiseks
- Vaadake ja klassifitseerige ability'd Ability Visibility abil

### Eriliste ability'd jaoks (For Custom Abilities) {#for-custom-abilities}

- Registreerige ability'd WordPress hookidega (Abilities API)
- Vältige erikummise ability registry'id
- Testige WordPress 7.0+ Auto mode'iga

1. **Kontrollige WordPress versiooni kontrollimine**: Veenduge, et kasutate 7.0+ versiooni, et saada Auto režiimi.
2. **Kolmandise osas funktsioonide ülevaatamine**: Minumise Settings (Sätted) ja kontrollige oma praegu aktiveeritud režiimi.
3. **Päivitus vajadusel**: Liigutage Auto režiimile, kui kasutate WordPressi 7.0+ versiooni.
4. **Abilusi klassifikatsioon**: Vaadige üle ja klassifitseerige kõik klassifitseerimatu abilused.
5. **Testimine**: Veenduge, et teie kolmandised osas funktsioonid töötavad õigesti.

## Seotud teemad {#next-steps}

- **Abiluse nähtavus**: Kontrollige, milles kohas on aktiveeritud abilused nähtavaks.
- **WordPress Ability API**: Loe rohkem selle kohta, kuidas WordPressi loodud abilusi registreerida.
- **Kolmandise osas funktsioonide arendamine**: Luue abilusi, mis töötavad Auto režiimi koos.
