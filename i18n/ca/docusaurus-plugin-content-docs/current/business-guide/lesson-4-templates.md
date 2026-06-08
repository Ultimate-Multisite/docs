---
title: 'Lliçó 4: Creació de Plantilles de Nich'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Aula 4: Creació de Templates de Nich

Els templates són el nucli de la teva proposta de valor de nich. Un propietari d'estudi de fitness que s'inscriu i veu un lloc web que ja sembla un site de fitness —amb horaris de classes, perfils d'entrenadors i la imatge correcta— és molt més probable que es quedi que un que veu un canvas en blanc.

## On acab vam

Tenim una xarxa FitSite funcional amb Ultimate Multisite instal·lat i configurat. Ara creem els templates que faran que FitSite sembli dissenyat específicament per a empreses de fitness.

## Per què són importants els templates de nich

Els templates genèrics obliguen als teus clients a fer el treball dur: descobrir quines pàgines necessiten, quin tipus de contingut funciona i com fer que trigui bé per a la seva indústria. Els templates de nich eliminen aquesta fricció.

Un propietari d'estudi de fitness que s'inscriu a FitSite hauria de veure:

- Una pàgina d'inici que sembli un site d'estudi de fitness
- Pàgines de classes, horaris, entrenadors i preus ja creades
- Imatges i contingut de marcador de posició que coincideixin amb la seva indústria
- Un disseny que sembli professional i coherent amb la marca de fitness

Ells encreen els detalls. No comencen des de zero.

## Planificació dels templates

Abans de construir, decideix quins templates oferir. Per a FitSite, crearem tres:

### Template 1: Studio Essential

Per a petits estudis i entrenadors personals.

- **Pàgina d'inici** amb imatge hero, destacats de classes i crida a l'acció
- Pàgina **Sobre nosaltres** amb la història i la missió de l'estudi
- Pàgina **Classes** amb disseny d'horari
- Pàgina **Entrenadors** amb cartes de perfil
- Pàgina **Contacte** amb mapa de ubicació i formulari
- **Disseny net i modern** amb una paleta de colors adequada al fitness

### Template 2: Gym Pro

Per a gimnasos establerts amb més serveis.

- Tot el que hi ha a Studio Essential, més:
- Pàgina **Admembrament** amb taula de preus
- Pàgina **Galeria** amb fotos de les instal·lacions
- Secció de **Blog** amb consells de fitness i notícies
- Secció de **Testimonials** a la pàgina d'inici
- **Opció de marca més destacada**

### Template 3: Fitness Chain

Per a operacions amb múltiples ubicacions.

- Tot el que hi ha a Gym Pro, més:
- Pàgina **Ubicacions** amb múltiples llistats d'instal·lacions
- Template de subpàgina de **Franquicia/ubicació**
- **Marca centralitzada** amb detalls específics de l'ubicació
- **Directori de personal** per diverses ubicacions

## Creació d'un site template

En Ultimate Multisite, un template és simplement un site de WordPress configurat com que vols que es vegin els nous sites de clients. Així és com a crear-ne un:

### Pas 1: Crear el site template

1. Navega a **Sites > Add New** al teu administratiu de xarxa
2. Crea un site amb el nom `template-studio-essential`
3. Aquest site és el teu canvas de treball

### Pas 2: Instal·lar i configurar el tema

Canvia al dashboard del site template i:

1. Activa un tema adequat per a empreses de fitness
2. Configura la configuració, els colors i la tipografia del tema
3. Configura l'encabezament i el pie de pàgina amb navegació adequada al fitness

:::tip Selecció de Tema
Escollir un tema que sigui suficientment flexible per veure bé en fitness, però no tan complex que els teus clients no puguin gestionar-lo. Temes com Astra, GeneratePress o Kadence funcionen bé perquè són lleugers, personalitzables i ben suportats.
:::

### Pas 3: Crear les pàgines

Crea cada pàgina amb:

- **Contingut de marcador de posició** que sona natural per a fitness ("Benvingut a [Nom de l'estudi]" i no "Lorem ipsum")
- **Imatges de marcador de posició** de sites de fotos gratuïts que mostrin activitats de fitness
- **Dispositius funcionals** utilitzant l'editor de pàgines o els blocs

Fes que el contingut de marcador de posició sigui instructiu quan sigui possible. En lloc de text de riomple genèric, escriu contingut com: "Substitueix això per una breu descripció del teu estudi i el que el fa especial. Menciona la teva filosofia d'entrenament, anys d'experiència o el que poden esperar els clients."

### Pas 4: Configurar els plugins

Instala i activa els plugins que necessiten els estudis de fitness:

- Un plugin de reserva o penjament (si és aplicable al teu nivell de plan)
- Un plugin de formulari de contacte
- Un plugin de SEO (preconfigurat amb valors predeterminats relatius al fitness)

### Pas 5: Marcar com a Template

1. Navega a **Ultimate Multisite > Sites**
2. Edita el site template
3. Activa el interruptor **Site Template**

Repeteix aquest procés per a cada template que vulguis oferir.

## Llista de verificació de qualitat del template

Abans de fer que un template estigui disponible, verifica:

- [ ] Que totes les pàgines carreguen correctament i semblin professionals
- [ ] Que el contingut de marcador de posició sigui útil i específic del nich
- [ ] Que les imatges siguin adequades i propertament llicenciades
- [ ] Que la responsivitat mòbil funcione a totes les pàgines
- [ ] Que la navegació sigui lògica i completa
- [ ] Que els formularis de contacte funcionin
- [ ] Que no hi hagi enllaços rotos ni assets faltants
- [ ] Que la velocitat de càrrega de la pàgina sigui acceptable

## La xarxa FitSite fins ara

```
FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (configurat)
├── Hosting amb SSL wildcard
├── Domain mapping configurat
├── Site Templates
│   ├── Studio Essential (estudis petits, entrenadors)
│   ├── Gym Pro (gimnasios establerts)
│   └── Fitness Chain (múltiples ubicacions)
└── Preparat per a la configuració de plans (pròxima aula)
```

## El que vam construir en aquesta aula

- **Tres templates específics de nich** dissenyats per diferents tamanys d'empreses de fitness
- **Contingut i imatges adequades al fitness** que faran que la plataforma sembli dissenyada amb un propòsit
- **Contingut de marcador de posició instructiu** que guia els clients en la personalització
- **Una llista de verificació de qualitat** per assegurar que els templates estan preparats per a la producció

---

**Pròxima:** [Aula 5: Disseny de plans](lesson-5-plans) — creem nivells de producte que coincideixin amb com operen realment les empreses de fitness.
