---
title: Criar Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Criar Menu

A funcionalidade **Criar Menu** cria menus de navegação do WordPress com suporte a rótulos de navegação distintos, separados dos títulos das páginas.

## Visão Geral {#overview}

Esta funcionalidade estende a criação de menus padrão, permitindo especificar um parâmetro `navigation_label`. Isso permite que você crie menus onde o rótulo exibido na navegação seja diferente do título da página, proporcionando mais flexibilidade na estrutura do site e na experiência do usuário.

## Parâmetros {#parameters}

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|----------|-------------|
| `name` | string | Sim | Nome do menu, ex: `Navegação Principal` |
| `location` | string | Não | Localização do tema para atribuir este menu, ex: `primary` |
| `navigation_label` | string | Não | Rótulo a ser exibido na navegação (diferente do título da página) |

## Valor de Retorno {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Rótulo de Navegação vs. Título da Página {#navigation-label-vs-page-title}

O parâmetro `navigation_label` permite que você separe o nome interno do menu do rótulo exibido aos usuários:

- **`name`** — Identificador interno do menu usado pelo WordPress (ex: "Primary Navigation")
- **`navigation_label`** — O rótulo exibido aos visitantes do site na navegação (ex: "Main Menu")

Isso é útil quando:
- Sua convenção de nomenclatura interna difere dos rótulos visíveis para o usuário
- Você deseja rótulos mais curtos na navegação do que no painel de administração
- Você precisa suportar múltiplos idiomas com diferentes comprimentos de rótulo
- Você está construindo menus para regiões ou grupos de usuários específicos

## Exemplos de Uso {#usage-examples}

### Exemplo 1: Menu Simples com Rótulo de Navegação {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
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

### Exemplo 2: Menu para Localização Específica do Tema {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
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

Ao usar o Theme Builder, a funcionalidade Criar Menu:

1. Detecta automaticamente as localizações de menu disponíveis no tema
2. Cria menus com rótulos de navegação apropriados para o seu design
3. Atribui os menus às localizações corretas do tema
4. Suporta a adição de itens de menu após a criação

## Funcionalidades Relacionadas {#related-abilities}

- **`add_menu_item`** — Adicionar itens a um menu existente
- **`update_menu`** — Renomear um menu ou reatribuí-lo a uma localização do tema
- **`delete_menu`** — Remover um menu do seu site

## Melhores Práticas {#best-practices}

- **Use rótulos de navegação claros** — mantenha os rótulos concisos e descritivos para os usuários
- **Combine com as localizações do tema** — atribua os menus à localização correta do tema para exibição adequada
- **Planeje a estrutura do menu** — decida sobre a hierarquia do seu menu antes de criar os itens
- **Teste a responsividade** — verifique se os menus são exibidos corretamente em dispositivos móveis
- **Localize os rótulos** — use rótulos de navegação diferentes para diferentes versões de idioma

## Limitações {#limitations}

- Os rótulos de navegação são apenas para exibição; o `name` interno ainda é usado para identificação do WordPress
- O suporte ao tema varia; nem todos os temas suportam todas as localizações de menu
- Os itens de menu devem ser adicionados separadamente após a criação do menu
- Mudar um rótulo de navegação exige a atualização do menu

## Funcionalidades Relacionadas {#related-abilities-1}

- [Gerar Logo SVG](./generate-logo-svg.md) — criar logos para o cabeçalho do seu site
- [Validar Contraste da Paleta](./validate-palette-contrast.md) — garantir esquemas de cores acessíveis
