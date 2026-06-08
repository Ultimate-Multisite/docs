---
title: Avís de Retirada del Mode de Constructor de Sites
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Avís de eliminació del mode Site Builder

**El mode Site Builder s'ha eliminat en Superdav AI Agent v1.12.0.** Si estaves utilitzant el mode Site Builder, hauràs de migrar a l'**agent Setup Assistant** per a la creació de temes i la configuració del lloc web.

## Què ha passat?

### Mode Site Builder (Antic)

El mode Site Builder era una interfície basada en un assistent (wizard) per a:

- Crear llocs web a partir de templates
- Configurar configuracions bàsiques
- Escollir un tema
- Configurar contingut inicial

### Què ho ha substituït?

L'**agent Setup Assistant** ara gestiona tota la funcionalitat de Site Builder amb:

- Una configuració més flexible, guiada per l'agent
- Millores opcions de personalització de temes
- Integració amb l'onboarding de Theme Builder
- Memòria persistent de site_brief per a sessions futures

## Si utilitzaves el mode Site Builder

### Els teus llocs web són segurs

- Els llocs web existents creats amb el mode Site Builder continuen de funcionar
- Cap pèrdua de dades ni interrupció del lloc web
- Pots continuar gestionant els teus llocs web normalment

### Migra a l'Agent Setup Assistant

Per a la configuració de llocs web nous o canvis de tema, utilitza l'agent Setup Assistant:

```
"Help me set up a new site"
```

o

```
"Start the Theme Builder onboarding"
```

L'agent Setup Assistant proporciona la mateixa funcionalitat amb més flexibilitat.

## Comparativa: Site Builder vs. Setup Assistant

| Funcionalitat | Site Builder (Eliminat) | Setup Assistant (Nou) |
|---------|----------------------|----------------------|
| Mètode de configuració | Formar de wizard | Conversació de l'agent |
| Selecció de tema | Templates predefinits | Generació personalitzada |
| Personalització | Opcions limitades | Sistema de disseny complet |
| Site brief | No es guarda | Memòria persistent |
| Sessions futures | Repetir la configuració | Utilitzar el site_brief guardat |
| Flexibilitat | Flux de treball fix | Conversació adaptativa |

## Migrar a l'Agent Setup Assistant

### Per a llocs web nous

En lloc d'utilitzar el mode Site Builder:

1. Sol·licitar: "Help me set up a new site"
2. L'agent Setup Assistant et guiarà a través de:
   - Objectiu i metres del lloc web
   - Públi publicitat objectiu
   - Identitat de marca
   - Generació de tema
   - Configuració inicial

### Per a llocs web existents

Si tens un lloc web existent creat amb el mode Site Builder:

1. Pots continuar utilitzant-lo tal com està
2. Per actualitzar el tema, sol·licita: "Redesign my site"
3. L'agent Setup Assistant t'ajudarà a crear un nou tema
4. Els teus dades del lloc web es mantenen inalterats

### Per canvis de tema

En lloc de la selecció de tema del mode Site Builder:

1. Sol·licitar: "Change my theme"
2. L'agent Setup Assistant:
   - Preguntarà sobre les teves preferències de disseny
   - Generarà un tema personalitzat
   - L'activarà al teu lloc web

## Diferències clau

### Mode Site Builder

```
1. Escollir un template
2. Seleccionar un tema
3. Configurar configuracions bàsiques
4. Iniciat
```

### Agent Setup Assistant

```
1. Descrever l'objectiu del teu lloc web
2. Definir el teu públi publicitat objectiu
3. Escollir preferències de disseny
4. L'agent genera un tema personalitzat
5. L'agent activa el tema
6. Site brief guardat per sessions futures
```

## Beneficis de l'Agent Setup Assistant

### Més flexible

- Descriure el teu lloc web en llengua natural
- Obtindre recomanacions personalitzades
- Adaptar-se a les teves necessitats específiques

### Millor personalització

- Generació de temes personalitzats
- Decisions del sistema de disseny
- Tokens de disseny persistents

### Memòria persistent

- El teu site_brief es guarda
- Els agents futurs entenen el teu lloc web
- No és necessari repetir la informació de configuració

### Flux de treball integrat

- Onboarding de Theme Builder
- Habilitat de Estètica del Sistema de Disseny (Design System Aesthetics)
- Controles de visibilitat de habilitats (Ability Visibility controls)
- Tot treballa junts de manera fluida

## Solucionar problemes

### No trobo el mode Site Builder

El mode Site Builder ha estat eliminat. Utilitza l'agent Setup Assistant en canvi:

```
"Help me set up a new site"
```

### Vull recrear un lloc web de Site Builder

Pots recrearlo amb l'agent Setup Assistant:

1. Sol·licitar: "Help me set up a new site"
2. Descriure l'objectiu i el disseny del teu lloc web original
3. L'agent generarà un tema similar
4. El teu site_brief es guardarà per referència futura

### El meu lloc web Site Builder existent no funciona

Els llocs web existents creats amb el mode Site Builder continuen de funcionar. Si estàs experimentant problemes:

1. Comprova que el teu tema encara és actiu
2. Verifica que els teus plugins estan habilitats
3. Comprova els logs d'errors de WordPress
4. Contacta amb suport si els problemes persisteixen

### Incapacitat de usar els templates Site Builder antics?

Els templates Site Builder ja no estan disponibles. No obstant això:

- Els teus llocs web existents continuen de funcionar
- Pots recrear llocs web similars amb l'agent Setup Assistant
- L'agent Setup Assistant proporciona més opcions de personalització

## Pròxims passos

1. **Per a llocs web nous**: Utilitza l'agent Setup Assistant
2. **Per a llocs web existents**: Continua utilitzant-los tal com estan
3. **Per canvis de tema**: Sol·licita ajuda a l'agent Setup Assistant
4. **Per refinament del disseny**: Utilitza l'habilitat de Estètica del Sistema de Disseny

## Temes relacionats

- **Theme Builder Onboarding**: Configuració guiada per a temes personalitzats
- **Setup Assistant Agent**: Configuració de lloc web guiada per l'agent
- **Site Specification Skill**: Definir els objectius i el públi publicitat objectiu del teu lloc web
- **Design System Aesthetics Skill**: Refinar l'identitat visual del teu lloc web
