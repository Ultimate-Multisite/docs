---
title: Migrado de Tria Parte Modo
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migriĝo al Modo de Tria Parte

Superdav AI Agent v1.12.0 ŝanĝas la maniron, kiel estas manebleti tripartajn kapablitajn funkciojn. **La modo de tria parte nun defaultas al auto**, permesante nativan integriĝon kun WordPress Abilities API sur WordPress 7.0+ sen manua konfigurita.

## Kion ŝanĝis?

### Predvini v1.12.0

Tria parta kapabilitaj funkcioj postuli manuan konfigurigon:

- Vi devis eksplice aktivi "third-party mode"
- Kapabilitaj funkcioj estis pligitaj de registrio kaj
- Integrita kun WordPress Abilities API estis opciona
- La senviga modo estis la defaulto

### Post v1.12.0

Tria partaj kapabilitaj funkcioj funkcias aŭtomate:

- La modo de tria parte defaultas al "auto"
- Kapabilitaj funkcioj integriĝas nativel kun WordPress Abilities API
- Sen manua konfigurigo bezonas necesiĝas sur WordPress 7.0+
- La senviga modo estas tuta dispona por pli malaj versiojn de WordPress

## Kuj estas afectati?

### Novaj Instaloj (WordPress 7.0+)

**Neniu akcio bezonas fari.** La modo de tria parte estas aŭtomate sintonita al "auto", kaj kapabilitaj funkcioj funkcias sen manĝa.

### Ekzistantaj Instaloj

**Viaj ŝanĝoj estas konservitaj.** Se vi uzis:

- **Senviga modon (Legacy mode)**: Vi restas en senvigaj modo (neniu ŝanĝo)
- **Manuan modon de tria parte**: Vi restas en manua modo (neniu ŝanĝo)
- **Auto modon**: Vi kontinuisas kun auto modo (neniu ŝanĝo)

### WordPress Versioj Predvini 7.0

**La senviga modo estas tuta dispona.** Se vi estas sur WordPress 6.x aŭ pli malaj:

- La modo de tria parte defaultas al "legacy"
- Vi povas manue aktivi la modon de tria parte, se vi tio ŝatas
- Upgrade al WordPress 7.0+ por uzui nativan Abilities API

## Kompreni la Modojn

### Auto Modo (Nova Defaulto)

**Auto modo** uzas nativan integriĝon kun WordPress Abilities API:

- Kapabilitaj funkcioj estas registritaj per WordPress hooks
- Plena kompatibilitate kun WordPress 7.0+ Abilities API
- Aŭtomata troviĝo de tripartaj kapabilitaj funkcioj
- Sen manua konfigurigo bezonas necesiĝas

**Kiam uzati:** WordPress 7.0+ kun akablosajne abilites (third-party abilities)

### Modo Manul (Manual Mode)

**Modo manul** bez specifika konfiguracioj vgreja:

- Vi specifikuj kioh treti strona abilites (third-party abilities) ha porlade
- Upornost za testiranje aŭ selektiva porlado de abilites
- Voni redakti konfiguraciajn fajlos
- Maj kontrol, sed pli da preparacii

**Kiam uzati:** Testiro, selektiva porlado de abilites, aŭ personalizita konfiguracio.

### Modo Legato (Legacy Mode)

**Modo legato** uzas la vétra sistemon treti strona abilites:

- Personalizata registrio de abilites (ne WordPress Abilities API)
- Privalenta kun pli oldaj versioj de WordPress
- Sen nativa integracio kun WordPress
- Deprecata, sed tutpriprenata

**Kiam uzati:** WordPress 6.x aŭ pli mal, aŭ kiam vi bezonas legato kompatibilitate.

## Kontrolado de Viaj Aktualna Modo

### Per Panelu Administracio (Admin Panel)

1. Prisijete **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Paŝete pa la konfiguracion **Third-Party Mode**
3. Vi vidos via aktualna modo kaj opcioj por ĝin ŝanĝi

### Per Kodo (Via Code)

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', aŭ 'legacy'
```

## Ŝanĝado de Via Modo

### Migri al Auto Modo (Switch to Auto Mode)

Se vi estas sur WordPress 7.0+ kaj volas uzi auto modon:

1. Prisijete **Superdav AI Agent** → **Settings**
2. Trovu **Third-Party Mode**
3. Selektu **Auto (WordPress Abilities API)**
4. Klikete sur **Save**

Superdav AI Agent aŭtomate diskoveros kaj registros treti strona abilites.

### Migri al Manul Modo (Switch to Manual Mode)

Se vi volas kontroli manuele, kiuj abilites porladas:

1. Prisijete **Superdav AI Agent** → **Settings**
2. Trovu **Third-Party Mode**
3. Selektu **Manual**
4. Klikete sur **Save**
5. Redaktante via konfiguraciajn fajlon, specife kiu abilites ha porladas

### Migri al Legato Modo (Switch to Legacy Mode)

Se vi bezonas legato kompatibilitate:

1. Alti **Superdav AI Agent** $\rightarrow$ **Settings** (Konfiguracio)
2. Findet **Third-Party Mode** (Tria-parta Modo)
3. Selectet **Legacy** (Vétaj)
4. Clicket **Save** (Salva)

## Beneficencoj Auto Modo

### Automatica Diskovaro

Abilitate estas aŭtomatice diskertas de:

- Instalitaj pluginoj
- Aktiva temo
- Obligaj pluginoj
- Drop-in pluginoj

Neca necesi manuala registriĝo.

### Nata Integrita

Abilitate integriĝas kun la WordPress Abilities API:

- Konsista kun kerno de WordPress
- Funkcias kun la admino de WordPress
- Kompatabla kun aliaj pluginoj uzante Abilities API
- Futura-protekta, ĉar WordPress evoluas

### Simpligita Administrado

- Sen konfigura kajoj por modifi
- Sen manuala registriĝo de abilitate
- Kontroloj de vidibilitate de abilitate funkcias aŭtomate
- Adminnoticioj alertas vi al neklasifikitaj abilitate

### Megata Performeco

- Abilitate estas cacheita
- Lazi-loadita sur la peto
- Optimizita por WordPress 7.0+

## Migraja Via

### Se Vi Estas sur WordPress 6.x

1. **Upgradu al WordPress 7.0+** (kiam estas جاه)
2. **Aktu Superdav AI Agent** al v1.12.0+
3. **Mangi la tria-partan modon al Auto** (opcionala; legacy modo tut funkcias)
4. **Revizi vidibilitate de abilitate** por certigi la ĝustajn kontrolojn de aliro

### Se Vi Estas sur WordPress 7.0+

1. **Aktu Superdav AI Agent** al v1.12.0+
2. **Verifi ke la tria-parta modo estas sintonita al Auto** (ĝi devas esti tio per defolo)
3. **Revizi vidibilitate de abilitate** por certigi la ĝustajn kontrolojn de aliro
4. **Testu tria-partajn abilitate** por konfirmi, ke ili funkcias

## Problemo-solviĝo (Troubleshooting)

### Abilitate ne ŝargas en auto modo

- Verifi, ke vi estas sur WordPress 7.0+
- Kontu, ke la tria-parta modo estas sintonita al "Auto"
- Verifi, ke la plugino, kiu donas la abiliton, estas aktiva
- Kontu la eraro-logoj de WordPress por registriĝo-eraro

### Mi volami sekvi legacy modon

- Alti **Settings** $\rightarrow$ **Third-Party Mode** (Tria-parta Modo)
- Selectet **Legacy** (Vétaj)
- Clicket **Save** (Salva)
- Legacy modo tut funkcias

### Minaj personala kapablej ne montras

- Verifuji, ke si registri per WordPress hooks
- Kontroluji, ke si implementas la Abilities API korektajne
- Reviziu losoj de erorlogoj de WordPress
- Uzuuji la admin page **Ability Visibility** por vidi ĉiuj registritajn kapablejn

### Mi ricevas notojn "unclassified ability" (neklasifikita kapablo)

- Tio estas norma por novaj tretiĝaj kapablaboj
- Reviziu kaj klasifigu ilin en la admin notoj
- Vidu **Ability Visibility** por detalojn pri klasifikado

## Malversa Kompatibilitaj Periodo (Backward Compatibility)

### Ekzistantaj Konfiguracioj

Se vi havas ekzistantajn tretiĝajn kapablabajn konfiguraciojn:

- **Legacy mode (Vétaj modo)**: Via konfiguracio kontinuis workas
- **Manual mode (Manua modo)**: Via konfiguracio kontinuis workas
- **Auto mode (Aŭtomata modo)**: Via konfiguracio estas ignorita (auto modo prenas kontrolon)

Por konservi vian personalan konfiguracion, restu en Manua aŭ Vétaj modo.

### Deprecacia Tempora Planigo

- **v1.12.0**: Vétaj kaj Manua modoj estas tute suportitaj
- **v1.13.0+**: Vétaj modo povas montri deprecacia notojn
- **v2.0.0**: Vétaj modo povus esti forigita (TBD)

## La plej Bonaj Praktikoj (Best Practices)

### Por Novaj Instaloj

- Uzuu Auto mode ( ĝi estas la defaulto)
- Permitigu al Superdav AI Agent diskuti kapablabojn aŭtomate
- Uzuu Ability Visibility por kontroli aliron

### Por Ekzistantaj Instaloj

- Migru al WordPress 7.0+ kiam eble
- Migri al Auto mode por simpligita administro
- Reviziu kaj klasifigu kapablabojn uzante Ability Visibility

### Por Personalaj Kapablej

- Registri kapablabojn per WordPress hooks (Abilities API)
- Evitu personalaj registroj de kapablaboj
- Testu sur WordPress 7.0+ kun Auto mode

1. **Kontrolu de la versio de WordPress**: Verifikiĝu ke vi estas sur 7.0+ por Modo Auto
2. **Reviziĝu vian treta parte modo**: Aliriĝu al Settings kaj kontroli vian nunan modon
3. **Makedu se necese**: Migri al Modo Auto, se vi estas sur WordPress 7.0+
4. **Klasifi la kapablitajn**: Reviziĝu kaj klasifi ĉiuj neklasifizitaj kapabilitaj
5. **Testi**: Verifikiĝu ke vian treta parte kapabilitaj funkcias ĝuste

## Relacionaj Temoj

- **Kapabilitato Vido (Ability Visibility)**: Kontroli, kie kapabilitaj estas eksponitaj
- **WordPress Abilities API**: Studiu pri la nativa registriĝo de kapabilitaj WordPress
- **Treta Parte Kapabilitato Deklastro**: Krei kapabilitajn, kiuj funkcias kun Modo Auto
