---
title: Míseartú na hiontaí treoir
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrátió Modes Tírt-Chuid

Múid AI Agent v1.12.0 léiríonn conas a bheith leat ag cur áirítear ar fadhbanna trí-chuid. **Tá mode tírt-chuid ag cur "auto" mar default**, rud a fáil amach le cur áirítear WordPress Abilities API ar WordPress 7.0+ gan fháil ar chuid cúrama.

## Cad a Changú? {#what-changed}

### Ar Pháirtleacht le v1.12.0 {#before-v1120}

Ar fáilbhartha trí-chuid, bhí ag cur áirítear manual:

- Bha thuas ag cur "third-party mode" ag cur áirítear go súnach
- Bhí na abilities ag cur iomlán ó chreachtais cúrama (custom registry)
- Bhí an cur áirítear le WordPress Abilities API ag cur fáilte
- Bhí mode léiriúil ag cur ag cur áirítear

### Tar éis v1.12.0 {#after-v1120}

Tá na abilities trí-chuid ag cur go hiomlán:

- Tá mode tírt-chuid ag cur "auto" mar default
- Tá na abilities ag cur iomlán le WordPress Abilities API
- Ní tha cur áirítear manual ag cur amach ar WordPress 7.0+
- Tá mode léiriúil ag cur fáilte do chuid versiona WordPress eile

## Conas a Bhíonn na Modes Ag Cur? {#who-is-affected}

### Auto Mode (Nóta Default) {#new-installations-wordpress-70}

**Auto mode** a úsáideann iomlán WordPress Abilities API:

- Bha na abilities ag cur áirítear trí WordPress hooks
- Tá cur fáilte leat ar fáil le WordPress 7.0+ Abilities API
- Fáilte go hiomlán do abilities trí-chuid
- Ní tha cur áirítear manual ag cur amach

**An cumhacht a bheith ar chuid:** WordPress 7.0+ le fadaí treoiraithe tríúint

### Mod Manual {#existing-installations}

**Mod manual** ag iarraidh curruin féinarla:

- Tá tú ag díriúint conas a bhfáthachais tríúint a chur i bhfeidm
- Goir mór chun teastáil an t-aonráil nó chun fadaí treoiraithe a chur i bhfeidm go leathanach
- Is é ag iarraidh éirigh na fáilíocht (configuration files)

Conas a bheith níos mó control, ach níl é sin ar chuid a chur in áit

**An cumhacht a bheith ar chuid:** Teastáil, fadaí treoiraithe a chur i bhfeidm go leathanach, nó fadaí treoiraithe a chur in áit a bhfáthachais

### Mod Legacy {#wordpress-versions-before-70}

**Mod legacy** a úsáideann an siastair tríúint uige:

- Registry deacairt (ni mór ar WordPress Abilities API)
- Is é ag fáilocht leat ar fhoirtí WordPress eile
- Níl aon chuid a chur in áit leat ar WordPress go nascach
- Tá sé deacairt ach tá sé ag fáilocht anois

**An cumhacht a bheith ar chuid:** WordPress 6.x nó níos luaithe, nó nuair atá tú ag iarraidh fadaí treoiraithe a chur in áit leat

## A chuid a bhfáthachais agat {#understanding-the-modes}

### Trá ar an Panel Admin {#auto-mode-new-default}

1. Déan curte go **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Léigh ar an cur chuig **Third-Party Mode**
3. Beidh tú ag iarraidh a bheith ar chuid atá agat agus ar fadaí chun é sin a athrú

### Trá ar code {#manual-mode}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', nó 'legacy'
```

## Athrú an mod {#legacy-mode}

### Athrú chuig Auto Mode {#checking-your-current-mode}

Má tá tú ar WordPress 7.0+ agus má tá tú ag iarraidh a bheith ar chuid auto:

1. Déan curte go **Superdav AI Agent** → **Settings**
2. Léigh ar **Third-Party Mode**
3. Déan chun **Auto (WordPress Abilities API)**
4. Cliog ar **Save**

Beidh Superdav AI Agent ag fáil agus ag cur in áit na fadaí treoiraithe tríúint go leathanach.

### Athrú chuig Manual Mode {#via-admin-panel}

Má tá tú ag iarraidh a chur in áit manual conas a bhfáthachais a chur i bhfeidm:

1. Déan curte go **Superdav AI Agent** → **Settings**
2. Léigh ar **Third-Party Mode**
3. Déan chun **Manual**
4. Cliog ar **Save**
5. Athrú an fáilíocht a chur in áit chun é sin a chur i bhfeidm

### Athrú chuig Legacy Mode {#via-code}

Má tá tú ag iarraidh fadaí treoiraithe leat ar fhoirtí WordPress eile:

1. Roinn go **Superdav AI Agent** → **Settings**
2. Déan an **Third-Party Mode** (Moda Third-Party)
3. Déan **Legacy** (Léideach)
4. Cliom ar **Save** (Sábháil)

## Spéisteanna Auto Mode (Auto Mode Benefits) {#changing-your-mode}

### Déan Authiomáth (Automatic Discovery) {#switch-to-auto-mode}

Bíonn a gcuid fáilteanna ag déanamh anois ó:

- Pluginí curtha ar fáil
- Theme atá agat
- Pluginí is guthaithe (Must-use plugins)
- Pluginí drop-in

Níl aon registration manachainnraithe ag cur faire.

### Intégráid Nàbh (Native Integration) {#switch-to-manual-mode}

Bíonn a gcuid fáilteanna ag intégráid le Abilities API de WordPress:

- Is é sin cúramh le core WordPress
- Tá sé i gcónaí le admin WordPress
- Tá sé i gcomhacht le pluginí eile a úsáideann Abilities API
- Tá sé inbháileach ar fáil mar a bhíonn WordPress ag déanamh athrú

### Déan Mhaith (Simplified Management) {#switch-to-legacy-mode}

- Níl aon file configuration a athrú
- Níl aon registration ability manachainnraithe
- Déan an tairiscint abilities (Ability Visibility controls) ag cur faire go authiomáid
- Bíonn notice admin ag cur fáilteanna ar chuid abilities anchaiseartha

### Foirmeas Mhaoireachta Níos Fearnna (Better Performance) {#benefits-of-auto-mode}

- Tá abilities cached (cothaithe)
- Tá sé lazy-loaded ar fáil go dtí a bheith ag cur faire
- Is é sin oiriúnach do WordPress 7.0+

## Caint Mhaoireachta (Migration Path) {#automatic-discovery}

### Má tá tú ar WordPress 6.x {#native-integration}

1. **Athbhreithniú go WordPress 7.0+** (nuair atá tú ag cur faire)
2. **Athgabháil Superdav AI Agent** go v1.12.0+
3. **Chang an Third-Party Mode ar Auto** (optioin; níl aon fáilteach mode ag cur faire)
4. **Déan an tairiscint abilities ar chuid a bheith ag cur faire** chun cur faire féin a fháil

### Má tá tú ar WordPress 7.0+ {#simplified-management}

1. **Athgabháil Superdav AI Agent** go v1.12.0+
2. **Déan an tairiscint third-party mode ar Auto** (caithfidh sé bheith ag cur faire mar chuid a bheith ag cur faire)
3. **Déan an tairiscint abilities ar chuid a bheith ag cur faire** chun cur faire féin a fháil
4. **Test third-party abilities** chun cinnte a bheith agat go bhfuil siad ag cur faire

## Caint Mhaoireachta (Troubleshooting) {#better-performance}

### Níl abilities ag cur faire i auto mode {#migration-path}

- Déan an curfaire ar fáil ar WordPress 7.0+
- Déan an curfaire ar fáil ar "Auto"
- Déan an curfaire a bhíonn ag cur faire ar fáil
- Déan an logarru error de WordPress ar chuid errors registration

### Ba mhaith liom a bheith ag cur faire i legacy mode {#if-youre-on-wordpress-6x}

- Roinn go **Settings** → **Third-Party Mode** (Moda Third-Party)
- Déan **Legacy** (Léideach)
- Cliom ar **Save** (Sábháil)
- Ba mhaith liom a bheith ag cur faire i legacy mode

### Níl mo chuid féin a bhaineann {#if-youre-on-wordpress-70}

- Déan cinnte go bhfuil siad registered trí WordPress hooks
- Déan cinnte go bhfuil siad ag iarraidh an Abilities API ar fáil go ceart
- Roinn na log éiríne WordPress (WordPress error logs)
- Use an lúsadmin **Ability Visibility** chun an gcuid abilities a fheiceáil

### Tá mé ag iarraidh "ability" nua classified {#troubleshooting}

- Is é seo normal do abilities trí chuid nua
- Roinn agus classified siad i an notice admin
- Déan cinnte go bhfuil **Ability Visibility** ar fáil le haghaidh curtas ar an classified

## Comhionachtaí ar an t-amach (Backward Compatibility) {#abilities-arent-loading-in-auto-mode}

### Cuidigeatasan a bheith agat atá ag obair {#i-want-to-keep-legacy-mode}

Má tá tú ag curtas trí chuid a bhaineann:

- **Mode Legacy**: Buid féin a thaispeánann an curtas
- **Mode Manual**: Buid féin a thaispeánann an curtas
- **Mode Auto**: Beidh an curtas ag iarraidh (an mode auto a laithreachíonn é)

Leat a bheith leis an curtas a bheith agat, déan cinnte go bhfuil tú ag obair i Mode Manual nó Legacy.

### Tíme deart a bhaint ar an t-amach (Deprecation Timeline) {#my-custom-abilities-arent-showing}

- **v1.12.0**: Tá na mode Legacy agus Manual ag fáil ar fáil go ceart
- **v1.13.0+**: Is féidir leis an mode Legacy leanúintí deart a shonneadh
- **v2.0.0**: Is féidir leat an mode Legacy a tógáil (ag curtas)

## Beasainn ar an chuid féin (Best Practices) {#im-getting-unclassified-ability-notices}

### Do nua chuidaithe {#backward-compatibility}

- Use Auto mode (is é seo an mode deamassach)
- Déan go leor do Superdav AI Agent a dhéanamh ag fáil abilities go hiomlán
- Use Ability Visibility chun curtas a athrú a bheith agat

### Do chuidaithe atá ag obair {#existing-configurations}

- Upgrade ar WordPress 7.0+ má bhí féidir é
- Switch go Mode Auto chun curtas a laithreach a bheith agat
- Roinn agus classified abilities ag curtas a bheith agat trí Ability Visibility

### Do abilities féin {#deprecation-timeline}

- Register abilities via WordPress hooks (Abilities API)
- Déan cinnte go bhfuil tú ag iarraidh registry abilities trí chuid féin
- Test ar WordPress 7.0+ le Mode Auto

## Taispeántais ar an t-amach (Next Steps) {#best-practices}

1. **Chonadh an t-aistriú WordPress a bheith agat**: Déan cinnte go bhfuil tú ar 7.0+ chun mod an Auto a bheith agat
2. **Réamhscan an mod third-party (treoir):** Déan cur isteach i Settings agus léigh an mod atá agat anois
3. **Athbhreithniú má tá sé ag cur áirítear**: Athchun mod an Auto má tá tú ar WordPress 7.0+
4. **Chlúidh na cúilte (abilities)**: Léigh agus chluais cúilte a bhí ag cur áirítear níl éis
5. **Teasta**: Déan cinnte go bhfuil do cúilte third-party ag eanglaidh go ceart
