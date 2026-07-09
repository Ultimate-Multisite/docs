---
title: Migratio Modus Tertii Partium
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migratio ad Modum Tertiariorum {#third-party-mode-migration}

Superdav AI Agent v1.12.0 mutat quommodo potestates tertiariae maneantur. **Modus tertiarius nunc default est auto**, permittens integrationem API Potestatum WordPress in WordPress 7.0+ sine configuration manuali.

## Quid Mutavit? {#what-changed}

### Ante v1.12.0 {#before-v1120}

Potestates tertiariae requirunt configuration manualem:

- Debebas explicitē "modum tertiarium" activare
- Potestates erant caratae ex registro custom
- Integrationem cum API Potestatum WordPress erat optionalis
- Modus antiquus erat default

### Post v1.12.0 {#after-v1120}

Potestates tertiariae operant automaticē:

- Modus tertiarius default est "auto"
- Potestates integrantur nativamente cum API Potestatum WordPress
- Nulla configuration manualis est necessaria in WordPress 7.0+
- Modus antiquus est iam disponibilis pro versionibus WordPress vetustiores

## Qui Est Affectus? {#who-is-affected}

### Novae Installationes (WordPress 7.0+) {#new-installations-wordpress-70}

**Nihil actio requiritur.** Modus tertiarius est automaticē statutus in "auto", et potestates operant sine configuratione manuali.

### Installationes Existentiae {#existing-installations}

**Configura tua conservatur.** Si usus es:

- **Modus antiquus**: In modum antiquo manes (nulla mutatio)
- **Modus tertiarius manualis**: In modo manuali manes (nulla mutatio)
- **Modus auto**: Continuas in modo auto manes (nulla mutatio)

### Versiones WordPress Ante 7.0 {#wordpress-versions-before-70}

**Modus antiquus est iam disponibilis.** Si es in WordPress 6.x vel ante:

- Modus tertiarius default est "antiquus"
- Potest manualiter modum tertiarium activare si desideras
- Upgrade ad WordPress 7.0+ ut API Potestatum nativum usus
## Comprehendere Modi {#understanding-the-modes}

### Modus Auto (Novus Default) {#auto-mode-new-default}

**Modus auto** usumit integrationem nativem cum API Potestatum WordPress:

- Potestates registruntur per hooks WordPress
- Plena compatibilitas cum API Potestatum WordPress 7.0+
- Descolectio automatica potestatorum tertiariorum
- Nulla configuration manualis est necessaria

**Quando usare**: WordPress 7.0+ con capacità di terze parti

### Modalità Manuale {#manual-mode}

La **modalità manuale** richiede una configurazione esplicita:

- Specifichi quali capacità di terze parti caricare
- Utile per testare o caricare selettivamente le capacità
- Richiede la modifica dei file di configurazione
- Più controllo, ma più preparazione

**Quando usare**: Per testare, caricare selettivamente le capacità o per configurazioni personalizzate

### Modalità Legacy {#legacy-mode}

La **modalità legacy** utilizza il vecchio sistema delle capacità di terze parti:

- Registro di capacità personalizzato (non l'API WordPress Abilities)
- Retrocompatibile con versioni più vecchie di WordPress
- Nessuna integrazione nativa con WordPress
- Deprecata ma ancora supportata

**Quando usare**: Per WordPress 6.x o precedenti, o quando hai bisogno di compatibilità legacy

## Verificare la Tua Modalità Attuale {#checking-your-current-mode}

### Tramite Pannello di Amministrazione {#via-admin-panel}

1. Vai a **Admin WordPress** → **Superdav AI Agent** → **Impostazioni**
2. Cerca l'impostazione **Modalità Terze Parti** (Third-Party Mode)
3. Vedrai la tua modalità attuale e le opzioni per cambiarla

### Tramite Codice {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Cambiare la Tua Modalità {#changing-your-mode}

### Passare alla Modalità Auto {#switch-to-auto-mode}

Se sei su WordPress 7.0+ e vuoi usare la modalità auto:

1. Vai a **Superdav AI Agent** → **Impostazioni**
2. Trova **Modalità Terze Parti** (Third-Party Mode)
3. Seleziona **Auto (API Capacità WordPress)** (Auto (WordPress Abilities API))
4. Clicca su **Salva** (Save)

Superdav AI Agent scoprirà e registrerà automaticamente le capacità di terze parti.

### Passare alla Modalità Manuale {#switch-to-manual-mode}

Se vuoi controllare manualmente quali capacità vengono caricate:

1. Vai a **Superdav AI Agent** → **Impostazioni**
2. Trova **Modalità Terze Parti** (Third-Party Mode)
3. Seleziona **Manuale** (Manual)
4. Clicca su **Salva** (Save)
5. Modifica il tuo file di configurazione per specificare quali capacità caricare

### Passare alla Modalità Legacy {#switch-to-legacy-mode}

Se hai bisogno di compatibilità legacy:

1. Ir ad **Superdav AI Agent** → **Impostationes**
2. Invenie **Modus Terterti** (Third-Party Mode)
3. Sēlecta **Legacy**
4. Clipe **Salva**

## Beneficia Super Modus Auto {#benefits-of-auto-mode}

### Descobrere Automaticum {#automatic-discovery}

Abilitates sunt automaticce descubrita ex:

- Pluginibus installatis
- Thema activum
- Pluginibus necessariis (Must-use plugins)
- Pluginibus drop-in

Nihil registratio manualis necessaria est.

### Integrare Nativum {#native-integration}

Abilitates integrare secum Abilities API WordPress:

- Coerentia cum core WordPress
- Operat in admin WordPress
- Compatibilis cum aliis pluginibus usantibus Abilities API
- Futura-proof dum WordPress evolvitur

### Gestio Simplificata {#simplified-management}

- Nulla file configuration editus sunt
- Nulla registratio manualis abilitatum est
- Controla visibilitatis abilitatum operant automaticce
- Notitia admin te alertat de abilitatibus non classificatis

### Performatio Melior {#better-performance}

- Abilitates cachementur (cached)
- Lazy-loaded ad demandam
- Optimata pro WordPress 7.0+

## Via Migratio {#migration-path}

### Si in WordPress 6.x es {#if-youre-on-wordpress-6x}

1. **Adnucti ad WordPress 7.0+** (cum paratus es)
2. **Superdav AI Agent** ad v1.12.0+ **actualiza**
3. **Modus terterti ad Auto muta** (optionalis; modus legacy adhuc operatur)
4. **Visibilitatem abilitatum revere** ut controlum accessus proprium sit

### Si in WordPress 7.0+ es {#if-youre-on-wordpress-70}

1. **Superdav AI Agent** ad v1.12.0+ **actualiza**
2. **Verifica modum terterti est set ad Auto** (de default debet esse)
3. **Visibilitatem abilitatum revere** ut controlum accessus proprium sit
4. **Abilitates terterta teste** ut operant

## Solutio Problematum {#troubleshooting}

### Abilitates non cargant in modo auto {#abilities-arent-loading-in-auto-mode}

- Verifica si in WordPress 7.0+ es
- Verifica si modus terterti est set ad "Auto"
- Verifica si plugin qui abilitatem praebet activus est
- Verifica logs erroris WordPress pro erroribus registrationis

### Volvo modum legacy conservare {#i-want-to-keep-legacy-mode}

- Ir ad **Impostationes** → **Modus Terterti**
- Sēlecta **Legacy**
- Clipe **Salva**
- Modus legacy adhuc operatur

### Me mine facultates non ostenduntur {#my-custom-abilities-arent-showing}

- Verifica si sunt registrata per WordPress hooks
- Verifica si implementant Abilities API in modo recte
- Revisa logs error WordPress
- Usa la pagina admin **Ability Visibility** utendi omnes facultates registratae videri

### "facultas non classificata" notitia miagō {#im-getting-unclassified-ability-notices}

- Hoc est normalis pro novis facultatibus terdiatibus
- Revisa et classifica eos in notitia admin
- Videri **Ability Visibility** ad detiles de classificatione

## Compatibilitas Retroactiva {#backward-compatibility}

### Configuratio existere {#existing-configurations}

Si habes configurationes facultatum terdiatorum existerias:

- **Modus Legatus**: Configuratio tua sic continuat operari
- **Modus Manualis**: Configuratio tua sic continuat operari
- **Modus Auto**: Configuratio tua ignorata est (modus auto prendet in se)

Ad conservandum configurationem tuam custom, manere in modo Manuali vel Legato.

### Tempus Deprecandi {#deprecation-timeline}

- **v1.12.0**: Modi Legatus et Manualis sic plene suportantur
- **v1.13.0+**: Modus Legatus notitia deprecationis ostendere potest
- **v2.0.0**: Modus Legatus potius removeatur (TBD)

## Meliora Practicae {#best-practices}

### Pro Novis Installationibus {#for-new-installations}

- Usa Modum Auto (est default)
- Sapiens Superdav AI Agent facultates automatico discoveret
- Usa Ability Visibility ad accessum controlare

### Pro Installationibus Existeriis {#for-existing-installations}

- Upgrade ad WordPress 7.0+ dum potest
- Mutare in Modum Auto ad management simplificatum
- Revisa et classifica facultatas uti Ability Visibility

### Pro Facultatibus Customibus {#for-custom-abilities}

- Registra facultatas via WordPress hooks (Abilities API)
- Evade registri facultatum customium
- Testa in WordPress 7.0+ cum Modo Auto

1. **Verifica versionem WordPress tuam**: Assura te quod es in 7.0+ ut modo Automatis operaret.
2. **Revisa modum tuum tertii partes**: Cursus ad Settings (Impostationes) et verifica modum tuum actuellem.
3. **Actualiza si necesse**: Mutare ad modum Auto si es in WordPress 7.0+ ut modo Operari.
4. **Classifica potestates**: Revisa et classifica omnes potestates quae non sunt classificatae.
5. **Teste**: Verifica quod potestates tuas tertii partes bene operant.

## Temas Relacionati {#next-steps}

- **Visibilis Potestatis (Ability Visibility)**: Controla ubi quibus potestates expurguntur.
- **API Potestatum WordPress (WordPress Abilities API)**: Discipula de registratione potestatum nativibus WordPress.
- **Descriptio Potestatum Tertii Partes (Third-Party Ability Development)**: Crea potestates quae cum modo Auto operant.
