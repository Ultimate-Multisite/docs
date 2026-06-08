---
title: Capacitats del Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capacitats de Theme Builder: Estructurar i Activar Block Themes

Superdav AI Agent v1.12.0 presenta dues capacitats potents que et permeten generar i desplegar block themes personalitzats directament des de l'interfície de xat.

## Panllàstic

Les capacitats **scaffold-block-theme** i **activate-theme** permeten als agents:
- Generar block themes complets i preparats per a producció basats en les teves especificacions.
- Activar els themes automàticament al teu lloc sense intervenció manual.
- Crear identitats visuals cohesives mitjançant decisions de disseny guiades.

## Estructurar Block Theme (Scaffold Block Theme)

La capacitat **scaffold-block-theme** genera un nou block theme de WordPress amb una estructura de tema completa, incloent:

- Configuració `theme.json` amb design tokens.
- Fitxers de plantilla de blocks per a dispositius comuns.
- Estils i variacions de blocks personalitzats.
- Metadades i declaracions de suport del tema.

### Com Activar-ho

Al teu xat amb Superdav AI Agent, pots sol·licitar la generació del tema:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

L'agent:
1. Recoll les teves preferències de disseny a través de la conversa.
2. Genera la estructura completa del tema.
3. Crea tots els fitxers de tema necessaris.
4. Prepara el tema per a l'activació.

### Resultat Esperat

Quan la capacitat s'executa amb èxit, veuràs:

- Confirmació que el tema s'ha estructurat (scaffolded).
- El nom i la ubicació del tema.
- Un resum dels design tokens aplicats (colors, tipografia, espai).
- Estat de preparat per a l'activació.

Exemple de resultat:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activar Tema (Activate Theme)

La capacitat **activate-theme** canvieu el teu lloc cap a un block theme nou estructurat o existent.

### Com Activar-ho

Després d'estructurar un tema, pots activar-lo immediatament:

```
"Activate the Modern Agency theme"
```

O activar qualsevol tema existent:

```
"Switch to the Twentytwentyfour theme"
```

### Resultat Esperat

Quan l'activació té èxit:

- Confirmació del tema actiu.
- Nom del tema anterior (per referència).
- URL del lloc on el tema està ara actiu.
- Qualsevol nota de configuració específica del tema.

Exemple de resultat:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Flux de Treball: Estructurar i Activar

Un flux de treball típic combina ambdues capacitats:

1. **Sol·licitar la generació del tema**: "Create a block theme for my SaaS landing page"
2. **L'agent estructura el tema**: Genera fitxers i design tokens.
3. **Revisió i refinament**: Discussió de canvis de disseny si és necessari.
4. **Activar**: "Activate the theme now"
5. **Verificar**: Visita el teu lloc per confirmar que el nou disseny està actiu.

## Design Tokens i Personalització

Els themes estructurats utilitzen els design tokens de WordPress (a través de `theme.json`) per a:

- **Colors**: Paleta primària, secundària, accent i neutra.
- **Tipografia**: Famílies de fonts, tamanys, pesos, altes figures.
- **Espai**: Escales de padding, margin i gap.
- **Borders**: Tokens de raiol i ampleura.
- **Ombres**: Nivells d'elevació.

Aquests tokens estan centralitzats a `theme.json`, cosa que facilita ajustar tot el teu sistema de disseny des d'un únic fitxer.

## Limitacions i Notes

- Els themes s'estructuraran a `/wp-content/themes/` i han de seguir les convencions de nomenclatura de WordPress.
- L'activació requereix permisos adequats al teu lloc de WordPress.
- El codi PHP personalitzat en els themes és mínim; utilitza plugins per a funcionalitats complexes.
- Els block themes funcionen millor amb WordPress 5.9 i versions posteriors.

## Solucionar Problemes (Troubleshooting)

**El tema no apareix després d'estructurar-lo**
- Verifica que el directori del tema existeixi i tingui els permisos adequats.
- Comprova que `theme.json` sigui un JSON vàlid.
- Assegura't que el nom del tema no conflicti amb themes existents.

**L'activació falla**
- Confirma que tens permisos d'administrador.
- Comprova que el directori del tema és legible per WordPress.
- Revisa els logs d'errors de WordPress per detalls.

**Els design tokens no s'apliquen**
- Verifica que la sintaxi de `theme.json` sigui correcta.
- Barreja qualsevol plugin de caching.
- Comprova que la teva versió de WordPress suporti els tokens que estàs utilitzant.

## Pròxims Passos

Després d'activar el teu tema, pots:
- Utitzar la capacitat **Design System Aesthetics** per refinar tipografia, colors i espai.
- Personalitzar els estils de blocks individuals a través de l'editor de blocks de WordPress.
- Afegir CSS personalitzat al fitxer `style.css` del tema.
- Crear templates de blocks personalitzats per a tipus de pàgina específics.
