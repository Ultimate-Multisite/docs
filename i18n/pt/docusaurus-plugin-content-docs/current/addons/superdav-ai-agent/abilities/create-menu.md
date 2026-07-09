---
title: Criar menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Criar Menu {#create-menu}

A capacidade **Criar Menu** cria menus de navegação WordPress com suporte para rótulos de navegação distintos, separados dos títulos das páginas.

## Visão geral {#overview}

Esta capacidade expande a funcionalidade padrão de criação de menus com a capacidade de especificar um parâmetro `navigation_label`. Isto permite criar menus em que o rótulo apresentado na navegação difere do título da página, proporcionando mais flexibilidade na estrutura do sítio e na experiência do utilizador.

## Parâmetros {#parameters}

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|----------|-------------|
| `name` | string | Sim | Nome do menu, por exemplo, `Primary Navigation` |
| `location` | string | Não | Localização do tema à qual atribuir este menu, por exemplo, `primary` |
| `navigation_label` | string | Não | Rótulo a apresentar na navegação (distinto do título da página) |

## Valor de retorno {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Rótulo de navegação vs título da página {#navigation-label-vs-page-title}

O parâmetro `navigation_label` permite separar o nome interno do menu do rótulo apresentado aos utilizadores:

- **`name`** — Identificador interno do menu usado pelo WordPress (por exemplo, "Primary Navigation")
- **`navigation_label`** — O rótulo apresentado aos visitantes do sítio na navegação (por exemplo, "Main Menu")

Isto é útil quando:
- A sua convenção de nomenclatura interna difere dos rótulos apresentados aos utilizadores
- Pretende rótulos mais curtos na navegação do que no painel de administração
- Precisa de dar suporte a vários idiomas com comprimentos de rótulo diferentes
- Está a criar menus para regiões ou grupos de utilizadores específicos

## Exemplos de utilização {#usage-examples}

### Exemplo 1: Menu simples com rótulo de navegação {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Crie um menu de navegação principal chamado "Main Navigation" com o rótulo de navegação "Menu".
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

### Exemplo 2: Menu para uma localização específica do tema {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Crie um menu de rodapé chamado "Footer Links" com o rótulo de navegação "Quick Links" e atribua-o à localização de rodapé.
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

## Integração com Theme Builder {#integration-with-theme-builder}

Ao usar Theme Builder, a capacidade Criar Menu:

1. Deteta automaticamente as localizações de menu do tema disponíveis
2. Cria menus com rótulos de navegação apropriados para o seu design
3. Atribui menus às localizações corretas do tema
4. Suporta a adição de itens de menu após a criação

## Capacidades relacionadas {#related-abilities}

- **`add_menu_item`** — Adicionar itens a um menu existente
- **`update_menu`** — Renomear um menu ou reatribuí-lo a uma localização do tema
- **`delete_menu`** — Remover um menu do seu sítio

## Boas práticas {#best-practices}

- **Use rótulos de navegação claros** — mantenha os rótulos concisos e descritivos para os utilizadores
- **Faça corresponder as localizações do tema** — atribua menus à localização correta do tema para uma apresentação adequada
- **Planeie a estrutura do menu** — decida a hierarquia do seu menu antes de criar itens
- **Teste a capacidade de resposta** — verifique se os menus são apresentados corretamente em dispositivos móveis
- **Localize os rótulos** — use rótulos de navegação diferentes para versões em idiomas diferentes

## Limitações {#limitations}

- Os rótulos de navegação são apenas para apresentação; o `name` interno continua a ser usado para identificação pelo WordPress
- O suporte dos temas varia; nem todos os temas suportam todas as localizações de menu
- Os itens de menu devem ser adicionados separadamente após a criação do menu
- Alterar um rótulo de navegação exige atualizar o menu

## Capacidades relacionadas {#related-abilities-1}

- [Gerar logótipo SVG](./generate-logo-svg.md) — criar logótipos para o cabeçalho do seu sítio
- [Validar contraste da paleta](./validate-palette-contrast.md) — garantir esquemas de cores acessíveis
