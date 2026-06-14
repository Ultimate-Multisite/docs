---
title: Umuco w'Urugero rw'Ubwumvikane
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migération vers le mode Tiers (Third-Party Mode)

Superdav AI Agent v1.12.0 a changé la façon dont les capacités tierces sont gérées. **Le mode tiers passe désormais par défaut en "auto"**, ce qui permet l'intégration native de l'API des Capacités WordPress sur WordPress 7.0+ sans configuration manuelle.

## Qu'est-ce qui a changé ?

### Avant v1.12.0

Les capacités tierces nécessitaient une configuration manuelle :

- Il fallait activer explicitement le "mode tiers" (third-party mode)
- Les capacités étaient chargées à partir d'un registre personnalisé
- L'intégration avec l'API des Capacités WordPress était optionnelle
- Le mode hérité (legacy mode) était par défaut.

### Après v1.12.0

Les capacités tierces fonctionnent automatiquement :

- Le mode tiers passe par défaut en "auto"
- Les capacités s'intègrent nativement à l'API des Capacités WordPress
- Aucune configuration manuelle n'est nécessaire sur WordPress 7.0+
- Le mode hérité est toujours disponible pour les anciennes versions de WordPress.

## Qui est concerné ?

### Nouvelles Installations (WordPress 7.0+)

**Aucune action requise.** Le mode tiers est automatiquement réglé sur "auto", et les capacités fonctionnent dès l'installation.

### Installations Existantes

**Vos paramètres sont conservés.** Si vous utilisiez :

- **Le mode hérité (Legacy mode)** : Vous restez en mode hérité (pas de changement)
- **Le mode tiers manuel (Manual third-party mode)** : Vous restez en mode manuel (pas de changement)
- **Le mode auto (Auto mode)** : Vous continuez avec le mode auto (pas de changement)

### Versions de WordPress Avant 7.0

**Le mode hérité est toujours disponible.** Si vous êtes sur WordPress 6.x ou antérieur :

- Le mode tiers passe par défaut en "legacy"
- Vous pouvez activer manuellement le mode tiers si vous le souhaitez
- Passez à WordPress 7.0+ pour utiliser l'API des Capacités native.

## Comprendre les Modes

### Mode Auto (Nouveau Défaut)

**Le mode auto** utilise l'intégration native de l'API des Capacités WordPress :

- Les capacités sont enregistrées via les hooks de WordPress
- Compatibilité totale avec l'API des Capacités WordPress 7.0+
- Découverte automatique des capacités tierces
- Aucune configuration manuelle n'est nécessaire

**Icyo ku gukoresha**: WordPress 7.0+ n'ubwoko bw'ibintu by'abantu (third-party)

### Manual Mode (Uburyo bwa Gukora N'ubwoko)

**Manual mode** ukenya n'uko ubushobora gukorwa mu buryo bukenye:

- Ubutera ukuri wumva uburyo bwose bwa third-party byo gukoresha
- Ukenya cyane ku gukora test cyangwa gukoresha ibintu byo gukoresha mu buryo bukenye
- Ukenya n'uko ubushobora gukoresha ibyerekeje (configuration files)

Ukenya cyane, ariko ukenya n'ubwoko bwa gukorwa bishobora kuba bishobora gukorwa mu buryo bukenye.

**Icyo gukoresha**: Gukora test, gukoresha ibintu byo gukoresha mu buryo bukenye cyangwa gukora uburyo bukenye bw'ibintu.

### Legacy Mode (Uburyo bwa Mu gihe)

**Legacy mode** yagize uburyo bw'ibintu by'abantu bukenye bw'umwe:

- Ubutera bwa ibintu byo gukoresha (Custom ability registry) (si WordPress Abilities API)
- Yikoresha mu buryo bukoreshwa n'ibyo byo WordPress bya mbere
- Nta gukoresha mu buryo bukenye bw'WordPress
- Icyo cyari cyagize, ariko kigomba gukoreshwa

**Icyo gukoresha**: WordPress 6.x cyangwa mbere, cyangwa ukenya n'uko ubikoresha ibintu bya mu gihe (legacy compatibility).

## Gukoresha Uburyo Bwawe Huri Umu gihe

### Binyuze mu Admin Panel

1. Gukoresha **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Gushakira uburyo bwa **Third-Party Mode**
3. Uza kumenya uburyo bwawe n'ibyo ukenye gukora ibyo.

### Binyuze mu Code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', cyangwa 'legacy'
```

## Gukoresha Uburyo Bwawe

### Gukoresha Auto Mode (Uburyo bwa Kumenya)

Iyo ukenye mu WordPress 7.0+ kandi wumva uburyo bwa auto:

1. Gukoresha **Superdav AI Agent** → **Settings**
2. Shaka **Third-Party Mode**
3. Shaka **Auto (WordPress Abilities API)**
4. Click **Save**

Superdav AI Agent uzakora gukoresha n'ibintu byo third-party mu buryo bukenye.

### Gukoresha Manual Mode (Gukoresha N'ubwoko)

Iyo ukenya n'uko wumva ibintu byo gukoresha mu buryo bukenye:

1. Gukoresha **Superdav AI Agent** → **Settings**
2. Shaka **Third-Party Mode**
3. Shaka **Manual**
4. Click **Save**
5. Edit ubutera bwawe kugira ngo wumve ibintu byo gukoresha mu buryo bukenye.

### Gukoresha Legacy Mode (Gukoresha Mu gihe)

Iyo ukenya n'uko ubikoresha ibintu bya mbere:

1. Kwibuka **Superdav AI Agent** $\rightarrow$ **Settings**
2. Shaka **Third-Party Mode**
3. Shaka **Legacy**
4. Cunga **Save**

## Ubutunso mu Auto Mode (Benefits of Auto Mode)

### Umucozi w'Auto (Automatic Discovery)

Uburyo bwo gukoresha ubushobozi bishobora gutungwa mu buryo bw'auto ku:

- Plugins zikoreshwa
- Theme yashyirwaho
- Plugins zikoreshwa cyangwa zishobora gukoreshwa (Must-use plugins)
- Plugins zishobora guhindurwa (Drop-in plugins)

Nta ngombwa yo gutanga mu buryo bw'itandwaho.

### Urugendo rwa Gutandukanya (Native Integration)

Ubushobozi bishobora gukoreshwa n'Abilities API ya WordPress:

- Bishobora kwibanda na core ya WordPress
- Bishobora gukoreshwa mu admin y'WordPress
- Bishobora guhindurwa n'amaplugin zikoresha Abilities API
- Bishobora gutandukanya nk'uko WordPress ikomeye

### Urugendo rwa Gutera Ubwumvikane (Simplified Management)

- Nta fici ya gukoresha (configuration files) kugira ngo uhindure
- Nta ngombwa yo gutanga ubushobozi mu buryo bw'itandwaho
- Icyemezo cyo gukoresha Ubushobozi (Ability Visibility controls) bishobora guhindurwa byiza
- Amakuru y'Admin (Admin notices) bishobora kukugira umwujaji ku bushobozi bishya ntabwo bishoborwe.

### Uburyo bwiza bwo Gutera Ubwumvikane (Better Performance)

- Ubushobozi bishobora gukoreshwa mu cache
- Bishobora gutungwa mu gihe cy'ibyo bitazwaga (Lazy-loaded on demand)
- Bishobora guhindurwa ku mpamvu ya WordPress 7.0+

## Urugendo rwa Gutera Ubushobozi (Migration Path)

### He ugiye kuri WordPress 6.x

1. **Gukoresha WordPress 7.0+** (igihe cyo gutandukanya)
2. **Guhindura Superdav AI Agent** ku v1.12.0+
3. **Ghindura third-party mode ku Auto** (ngombwa; legacy mode bishobora gukoreshwa)
4. **Gushyira mu mategeko ubwumvikane bw'ability** kugira ngo uburyo bwo kwizera bishoboreka

### He ugiye kuri WordPress 7.0+

1. **Guhindura Superdav AI Agent** ku v1.12.0+
2. **Kugera ko third-party mode yari yashyiramo Auto** (igice cyo gukoresha)
3. **Gushyira mu mategeko ubwumvikane bw'ability** kugira ngo uburyo bwo kwizera bishoboreka
4. **Kugenzura third-party abilities** kugira ngo utandukanye n'uko bishobora gukoreshwa

## Gukemura Icyemezo (Troubleshooting)

### Ubushobozi bishobora guhindurwa mu auto mode (Abilities aren't loading in auto mode)

- Kugenzura ko ugiye kuri WordPress 7.0+
- Kugenzura ko third-party mode yari yashyiramo "Auto"
- Kugenzura ko plugin igira ubushobozi bishobora guhindurwa yari yashyiramo (active)
- Kugenzura error logs ya WordPress kugira ngo utandukanye mu gutanga

### Nshaka kwibuka legacy mode (I want to keep legacy mode)

- Kwibuka **Settings** $\rightarrow$ **Third-Party Mode**
- Shaka **Legacy**
- Cunga **Save**
- Legacy mode bishobora gukoreshwa ku gukoresha

### Uburyo mu bikorwa by'umwe ntabwo yari yuriye

- Gushyira umwihariko bwawe uburyo bwa WordPress (WordPress hooks)
- Kugera ko ushobora uburenganzira bw'Abilities API neza
- Gukoresha ibyemezo byo gukoresha error logs ya WordPress

### Ntabwo ntabwo nshobora "ability" zishobora kuboneka

- Iki ni cyiza ku rugero rwa "abilities" ziri za gihugu (third-party) zishya
- Gushyira umwihariko bwawe neza mu admin notice
- Kugera ku **Ability Visibility** kugira ngo usere ibyo byo gukoresha

## Uburyo bw'umwihariko (Backward Compatibility)

### Icyemezo cyo hagati y'ibyo yashyize

Niba hari uburyo bwa "ability" ziri za gihugu zishobora kuba ari mu gihe, ushobora gukoresha:

- **Legacy mode**: Uburyo bwawe bwawe bishobora kwizera
- **Manual mode**: Uburyo bwawe bwawe bishobora kwizera
- **Auto mode**: Uburyo bwawe bwawe bishobora guhagararirwa (Auto mode yashyize)

Kugira ngo uburyo bwawe bwawe bishobora kwizera, ugomba gukoresha Manual cyangwa Legacy mode.

### Icyemezo cyo gufata umwihariko

- **v1.12.0**: Legacy and Manual modes bishobora kwizera neza
- **v1.13.0+**: Legacy mode yashobora gushyira ibyo byo gukoresha (deprecation notices)
- **v2.0.0**: Legacy mode yashobora gufata (TBD)

## Uburyo bwiza bwa gukoresha (Best Practices)

### Ku gihe cy'ibyo bishya

- Gukoresha Auto mode (iki ni uburyo bwa mbere)
- Kugera ko Superdav AI Agent yashobora kugera ku "abilities" zihinduka mu buryo bwiza
- Gukoresha Ability Visibility kugira ngo ushagarire uburenganzira

### Ku gihe cy'ibyo bishya byari yari yari yari

- Kugera ku WordPress 7.0+ niba hari ikindi
- Gukoresha Auto mode kugira ngo ugahagaririre gukora ibintu mu buryo bwiza
- Kugera no gushyira umwihariko bwawe neza mu admin notice

### Ku gihe cy'ibyo byari yari yari yari yari yari

- Gushyira "abilities" zikoresha ku WordPress hooks (Abilities API)
- Kugera ko ushobora gukoresha registry ya "custom abilities"
- Kugera ku WordPress 7.0+ uburyo bwa Auto mode

## Icyemezo cy'ibyo byo gukora mu gihe cy'ibyo byo mu nzira

Next Steps

1. **Gushya version ya WordPress yacu**: Shobora kugira umwujiza 7.0+ kugira ngo ufungire Auto mode.
2. **Gushya mode ya third-party yawe**: Soza ku Settings kandi ugushyira umwujiza w'umwezi wako.
3. **Gukoresha iyo hari ikibazo**: Shobora gukoresha Auto mode niba ufungire WordPress 7.0+ cyangwa uburyo bwawe.
4. **Kugenzura ubushobozi**: Genzura kandi kugenzura ubushobozi bose bishya ntabwo byumwe mu buryo bw'ibindi.
5. **Gukora test**: Shobora gukora test kugira ngo ushije ko ubushobozi bwa third-party bishobora gukora neza.

## Inzego Zikoreshwa

- **Uburyo bwo gushobora kubona ubushobozi (Ability Visibility)**: Uko ufungire ibyo ubushobozi byose mu buryo bw'ibindi.
- **WordPress Abilities API**: Gukwira ngo wumve kuri registration yawe y'ability ya WordPress.
- **Gukora third-Party Ability Development**: Gukora ubushobozi bishya byashobora gukora neza n'Auto mode.
