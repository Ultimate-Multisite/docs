---
title: Crear menú
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Crear menú

A capacidade **Crear menú** crea menús de navegación de WordPress con compatibilidade para etiquetas de navegación distintas, separadas dos títulos das páxinas.

## Visión xeral

Esta capacidade amplía a funcionalidade estándar de creación de menús coa posibilidade de especificar un parámetro `navigation_label`. Isto permíteche crear menús nos que a etiqueta mostrada na navegación difire do título da páxina, proporcionando máis flexibilidade na estrutura do sitio e na experiencia de usuario.

## Parámetros

| Parámetro | Tipo | Obrigatorio | Descrición |
|-----------|------|----------|-------------|
| `name` | string | Si | Nome do menú, por exemplo `Primary Navigation` |
| `location` | string | Non | Localización do tema á que asignar este menú, por exemplo `primary` |
| `navigation_label` | string | Non | Etiqueta para mostrar na navegación (distinta do título da páxina) |

## Valor de retorno

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Etiqueta de navegación fronte a título da páxina

O parámetro `navigation_label` permíteche separar o nome interno do menú da etiqueta mostrada aos usuarios:

- **`name`** — Identificador interno do menú usado por WordPress (por exemplo, "Primary Navigation")
- **`navigation_label`** — A etiqueta mostrada aos visitantes do sitio na navegación (por exemplo, "Main Menu")

Isto é útil cando:
- A túa convención de nomes interna difire das etiquetas visibles para os usuarios
- Queres etiquetas máis curtas na navegación que no panel de administración
- Necesitas dar soporte a varios idiomas con diferentes lonxitudes de etiqueta
- Estás a crear menús para rexións ou grupos de usuarios específicos

## Exemplos de uso

### Exemplo 1: Menú sinxelo con etiqueta de navegación

**Solicitude:**
```
Crea un menú de navegación principal chamado "Main Navigation" coa etiqueta de navegación "Menu".
```

**Resultado:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Exemplo 2: Menú para unha localización específica do tema

**Solicitude:**
```
Crea un menú de pé de páxina chamado "Footer Links" coa etiqueta de navegación "Quick Links" e asígnao á localización do pé de páxina.
```

**Resultado:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integración con Theme Builder

Ao usar Theme Builder, a capacidade Crear menú:

1. Detecta automaticamente as localizacións de menú dispoñibles do tema
2. Crea menús con etiquetas de navegación axeitadas para o teu deseño
3. Asigna menús ás localizacións correctas do tema
4. Permite engadir elementos de menú despois da creación

## Capacidades relacionadas

- **`add_menu_item`** — Engadir elementos a un menú existente
- **`update_menu`** — Renomear un menú ou reasignalo a unha localización do tema
- **`delete_menu`** — Eliminar un menú do teu sitio

## Mellores prácticas

- **Usa etiquetas de navegación claras** — mantén as etiquetas concisas e descritivas para os usuarios
- **Fai coincidir as localizacións do tema** — asigna os menús á localización correcta do tema para unha visualización axeitada
- **Planifica a estrutura do menú** — decide a xerarquía do teu menú antes de crear elementos
- **Proba a adaptabilidade** — verifica que os menús se mostren correctamente en dispositivos móbiles
- **Localiza as etiquetas** — usa diferentes etiquetas de navegación para distintas versións idiomáticas

## Limitacións

- As etiquetas de navegación só son para visualización; o `name` interno segue a usarse para a identificación en WordPress
- A compatibilidade do tema varía; non todos os temas admiten todas as localizacións de menú
- Os elementos de menú deben engadirse por separado despois da creación do menú
- Cambiar unha etiqueta de navegación require actualizar o menú

## Capacidades relacionadas

- [Xerar Logo SVG](./generate-logo-svg.md) — crear logotipos para a cabeceira do teu sitio
- [Validar contraste da paleta](./validate-palette-contrast.md) — garantir esquemas de cores accesibles
