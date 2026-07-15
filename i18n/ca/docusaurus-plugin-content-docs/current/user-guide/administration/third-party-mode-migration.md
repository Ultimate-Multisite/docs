---
title: Migració a Mode de Tercer.
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migració al Mode de Tercers

Superdav AI Agent v1.12.0 canvia la manera de gestionar les capacitats (abilities) de tercers. **El mode de tercers ara per defecte utilitza el mode automàtic**, cosa que permet l'integració nativa de l'Abilities API de WordPress en WordPress 7.0+ sense necessitat de configuració manual.

## Què ha canviat? {#what-changed}

### Ab v1.12.0 {#before-v1120}

Les capacitats de tercers requerien configuració manual:

- Hi havia de s'habilitar explícitament el "mode de tercers"
- Les capacitats es carregaven des d'un registre personalitzat
- L'integració amb l'Abilities API de WordPress era opcional
- El mode legat era el predeterminat

### Des v1.12.0 {#after-v1120}

Les capacitats de tercers funcionen automàticament:

- El mode de tercers per defecte és "automàtic"
- Les capacitats s'integren de manera nativa amb l'Abilities API de WordPress
- No és necessària configuració manual en WordPress 7.0+
- El mode legat encara està disponible per a versions antigues de WordPress

## Qui és afectat? {#who-is-affected}

### Instal·lacions noves (WordPress 7.0+) {#new-installations-wordpress-70}

**No és necessària cap acció.** El mode de tercers es configura automàticament en "automàtic", i les capacitats funcionen de resquadissa.

### Instal·lacions existents {#existing-installations}

**Les teves configuracions es preserven.** Si estàs utilitzant:

- **Mode legat**: Continues en mode legat (sense canvis)
- **Mode de tercers manual**: Continues en mode manual (sense canvis)
- **Mode automàtic**: Continues amb el mode automàtic (sense canvis)

### Versions de WordPress anteriors a 7.0 {#wordpress-versions-before-70}

**El mode legat encara és disponible.** Si estàs en WordPress 6.x o anterior:

- El mode de tercers per defecte és "legat"
- Pots habilitar el mode de tercers manualment si ho desitges
- Actualitza a WordPress 7.0+ per utilitzar l'Abilities API nativa

## Entendre els modes {#understanding-the-modes}

### Mode automàtic (Nou predeterminat) {#auto-mode-new-default}

**El mode automàtic** utilitza l'integració nativa de l'Abilities API de WordPress:

- Les capacitats es registren mitjançant els hooks de WordPress
- Compatibilitat completa amb l'Abilities API de WordPress 7.0+
- Descopertge automàtic de capacitats de tercers
- No és necessària configuració manual

**Quan utilitzar**: WordPress 7.0+ amb capacitats de tercers

### Mode manual {#manual-mode}

**El mode manual** requereix configuració explícita:

- Especifices quines capacitats de tercers has de carregar
- Útil per a proves o per carregar capacitats selectives
- Requereix editar els fitxers de configuració
- Més control, però més configuració

**Quan utilitzar**: Proves, carregada selectiva de capacitats o configuracions personalitzades

### Mode legat {#legacy-mode}

**El mode legat** utilitza el antic sistema de capacitats de tercers:

- Registre de capacitats personalitzat (no l'Abilities API de WordPress)
- Compatible amb versions anteriors de WordPress
- Sense integració nativa de WordPress
- Obsolet, però encara suportat

**Quan utilitzar**: WordPress 6.x o anterior, o quan necessites compatibilitat legat

## Com verificar el teu mode actual {#checking-your-current-mode}

### Des l'administració {#via-admin-panel}

1. Navega a **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Busca la configuració **Third-Party Mode**
3. Veuràs el teu mode actual i opcions per canviar-lo

### Des del codi {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Com canviar el teu mode {#changing-your-mode}

### Passar al Mode automàtic {#switch-to-auto-mode}

Si estàs en WordPress 7.0+ i vols utilitzar el mode automàtic:

1. Navega a **Superdav AI Agent** → **Settings**
2. Troba **Third-Party Mode**
3. Selecciona **Auto (WordPress Abilities API)**
4. Clica a **Save**

Superdav AI Agent descobrirà i registrarà automàticament les capacitats de tercers.

### Passar al Mode manual {#switch-to-manual-mode}

Si vols controlar manualment quines capacitats es carreguen:

1. Navega a **Superdav AI Agent** → **Settings**
2. Troba **Third-Party Mode**
3. Selecciona **Manual**
4. Clica a **Save**
5. Edita el teu fitxer de configuració per especificar quines capacitats has de carregar

### Passar al Mode legat {#switch-to-legacy-mode}

Si necessites compatibilitat legat:

1. Navega a **Superdav AI Agent** → **Settings**
2. Troba **Third-Party Mode**
3. Selecciona **Legacy**
4. Clica a **Save**

## Beneficis del Mode automàtic {#benefits-of-auto-mode}

### Descopertge automàtic {#automatic-discovery}

Les capacitats es descobreixen automàticament de:

- Plugins instal·lats
- Tema actiu
- Plugins *must-use*
- Plugins *drop-in*

No és necessària registració manual.

### Integració nativa {#native-integration}

Les capacitats s'integren amb l'Abilities API de WordPress:

- Consistent amb el *core* de WordPress
- Funciona amb l'administració de WordPress
- Compatible amb altres plugins que utilitzen l'Abilities API
- Preparat per el futur a mesura que evoluciona WordPress

### Gestió simplificada {#simplified-management}

- Sense fitxers de configuració que editar
- Sense registració manual de capacitats
- Els controls de visibilitat de capacitats funcionen automàticament
- Les notificacions de l'administrador et alerten sobre capacitats no classificades

### Millor rendiment {#better-performance}

- Les capacitats es fan *cache*
- Es carreguen de manera *lazy* quan es necessiten
- Optimitzat per WordPress 7.0+

## Camí de migració {#migration-path}

### Si estàs en WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Actualitza a WordPress 7.0+** (quan estiguis preparat)
2. **Actualitza Superdav AI Agent** a v1.12.0+
3. **Canvia el mode de tercers a Automàtic** (opcional; el mode legat encara funciona)
4. **Revisa la visibilitat de capacitats** per assegurar controls d'accés adequats

### Si estàs en WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Actualitza Superdav AI Agent** a v1.12.0+
2. **Verifica que el mode de tercers estigui configurat en Automàtic** (ha de ser per defecte)
3. **Revisa la visibilitat de capacitats** per assegurar controls d'accés adequats
4. **Prova les capacitats de tercers** per confirmar que funcionen

## Solucionar problemes {#troubleshooting}

### Les capacitats no es carreguen en mode automàtic {#abilities-arent-loading-in-auto-mode}

- Verifica que estàs en WordPress 7.0+
- Comprova que el mode de tercers estigui configurat en "Automàtic"
- Verifica que el plugin que proporciona la capacitat estigui actiu
- Comprova els registres d'errors de WordPress per errors de registració

### Vull mantenir el mode legat {#i-want-to-keep-legacy-mode}

- Navega a **Settings** → **Third-Party Mode**
- Selecciona **Legacy**
- Clica a **Save**
- El mode legat continuarà funcionant

### Les meves capacitats personalitzades no apareixen {#my-custom-abilities-arent-showing}

- Verifica que estan registrades mitjançant els hooks de WordPress
- Comprova que implementen correctament l'Abilities API
- Revisa els registres d'errors de WordPress
- Utilitza la pàgina d'administració **Ability Visibility** per veure totes les capacitats registrades

### Estic rebre notificacions d'“capacitat no classificada” {#im-getting-unclassified-ability-notices}

- Això és normal per a noves capacitats de tercers
- Revisa-les i classifica-les a la notificació de l'administrador
- Veure **Ability Visibility** per detalls sobre la classificació

## Compatibilitat amb versions anteriors {#backward-compatibility}

### Configuracions existents {#existing-configurations}

Si tens configuracions de capacitats de tercers existents:

- **Mode legat**: La teva configuració continua funcionant
- **Mode manual**: La teva configuració continua funcionant
- **Mode automàtic**: La teva configuració és ignorada (el mode automàtic pren el control)

Per mantenir la teva configuració personalitzada, manté't en mode Manual o Legat.

### Cronologia d'obsolescència {#deprecation-timeline}

- **v1.12.0**: Els modes legat i manual encara estan completament suportats
- **v1.13.0+**: El mode legat pot mostrar notificacions d'obsolescència
- **v2.0.0**: El mode legat pot ser eliminat (A determinar)

## Mejores pràctiques {#best-practices}

### Per a instal·lacions noves {#for-new-installations}

- Utitzar el mode automàtic (és el predeterminat)
- Deixar que Superdav AI Agent descobreixi les capacitats automàticament
- Utitzar Ability Visibility per controlar l'accés

### Per a instal·lacions existents {#for-existing-installations}

- Actualitzar a WordPress 7.0+ quan sigui possible
- Passar al mode automàtic per una gestió simplificada
- Revisar i classificar les capacitats utilitzant Ability Visibility

### Per a capacitats personalitzades {#for-custom-abilities}

- Registrar capacitats mitjançant els hooks de WordPress (Abilities API)
- Evitar registres de capacitats personalitzats
- Provar en WordPress 7.0+ amb mode automàtic

## Pròxims passos {#next-steps}

1. **Comprova la versió de WordPress**: Verifica que estàs en 7.0+ per al mode automàtic
2. **Revisa el teu mode de tercers**: Navega a Settings i comprova el teu mode actual
3. **Actualitza si és necessari**: Passa al mode automàtic si estàs en WordPress 7.0+
4. **Classifica les capacitats**: Revisa i classifica qualsevol capacitat no classificada
5. **Prova**: Verifica que les teves capacitats de tercers funcionen correctament

## Temes relacionats {#related-topics}

- **Ability Visibility**: Controla quines capacitats es mostren on
- **WordPress Abilities API**: Aprendeu sobre el registre natiu de capacitats de WordPress
- **Desenvolupament de capacitats de tercers**: Crea capacitats que funcionin amb el mode automàtic
