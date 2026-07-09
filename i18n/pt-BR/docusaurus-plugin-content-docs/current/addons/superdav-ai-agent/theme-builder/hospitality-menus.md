---
title: Cardápios de Hospitalidade
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menus de Hospitalidade {#hospitality-menus}

O recurso **Menus de Hospitalidade** permite que o Theme Builder gere e incorpore páginas de menu de alimentos e bebidas estruturadas diretamente no seu site WordPress.

## Visão Geral {#overview}

O Theme Builder agora pode criar páginas de menu profissionais e estruturadas para negócios de hospitalidade, incluindo restaurantes, cafés, bares e serviços de buffet. Estes menus são totalmente integrados ao design do seu site e podem ser facilmente atualizados e gerenciados.

## Tipos de Hospitalidade Suportados {#supported-hospitality-types}

- **Restaurantes** — menus de refeições completas
- **Cafés** — menus de café e lanches leves
- **Bares e Lounges** — menus de bebidas e aperitivos
- **Padarias** — menus de doces e pães
- **Serviços de Buffet** — opções de menu para eventos
- **Food Trucks** — menus de serviço de alimentação móvel
- **Cervejarias e Vinícolas** — menus de bebidas com descrições

## Estrutura do Menu {#menu-structure}

### Categorias de Menu {#menu-categories}

Os menus são organizados em categorias:

- **Entradas** — aperitivos e pratos pequenos
- **Pratos Principais** — pratos principais
- **Acompanhamentos** — acompanhamentos e vegetais
- **Sobremesas** — guloseimas doces
- **Bebidas** — bebidas (alcoólicas e não alcoólicas)
- **Especiais** — pratos ou itens sazonais/diários

### Formato do Item de Menu {#menu-item-format}

Cada item de menu inclui:

```json
{
  "name": "Salmão Grelhado",
  "description": "Salmão atlántico fresco com molho de manteiga e limão",
  "price": "$24.95",
  "dietary_info": ["Sem Glúten", "Alto em Proteína"],
  "allergens": ["Peixe"],
  "availability": "Diário"
}
```

#### Campos do Item {#item-fields}

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `name` | string | Nome do prato ou bebida |
| `description` | string | Descrição detalhada do item |
| `price` | string | Preço (formatado com moeda) |
| `dietary_info` | array | Atributos dietéticos (Vegano, Sem Glúten, etc.) |
| `allergens` | array | Alérgenos comuns (Nozes, Crustáceos, etc.) |
| `availability` | string | Quando está disponível (Diário, Sazonal, etc.) |

## Criando Menus de Hospitalidade {#creating-hospitality-menus}

### Passo 1: Fornecer Informações do Menu {#step-1-provide-menu-information}

Diga ao Theme Builder sobre o seu menu:

```
Crie um menu de restaurante para o meu restaurante italiano com entradas,
pratos de massa, pratos principais e sobremesas. Inclua preços e descrições.
```

### Passo 2: Theme Builder Gera o Menu {#step-2-theme-builder-generates-menu}

O Theme Builder:

1. Cria uma página de menu estruturada
2. Desenha o menu para combinar com o tema do seu site
3. Organiza os itens em categorias
4. Formata preços e descrições
5. Adiciona informações dietéticas e sobre alérgenos

### Passo 3: Revisar e Personalizar {#step-3-review-and-customize}

Você pode:

1. Editar itens e preços do menu
2. Adicionar ou remover categorias
3. Reordenar itens dentro das categorias
4. Atualizar descrições e informações dietéticas
5. Ajustar o estilo e o layout

## Opções de Exibição do Menu {#menu-display-options}

### Página Completa do Menu {#full-menu-page}

Uma página dedicada exibindo o seu menu completo:

- Organizado por categoria
- Pesquisável e filtrável
- Layout otimizado para impressão
- Design responsivo para dispositivos móveis

### Widget de Menu {#menu-widget}

Incorpore seções de menu em outras páginas:

- Itens em destaque na página inicial
- Especiais do dia na barra lateral
- Menu de bebidas na página do bar
- Vitrine de sobremesas no rodapé

### Menu PDF {#menu-pdf}

Gere um menu PDF para download:

- Formatação profissional
- Qualidade pronta para impressão
- Inclui imagens e descrições
- Fácil de compartilhar e enviar por e-mail

## Informações Dietéticas e Sobre Alérgenos {#dietary-and-allergen-information}

### Atributos Dietéticos {#dietary-attributes}

Marque os itens com informações dietéticas:

- **Vegano** — sem produtos de origem animal
- **Vegetariano** — sem carne
- **Sem Glúten** — seguro para celíacos
- **Sem Laticínios** — sem produtos lácteos
- **Sem Nozes** — sem nozes de árvore ou amendoim
- **Baixo Carboidrato** — carboidratos reduzidos
- **Alto em Proteína** — rico em proteínas

### Avisos de Alérgenos {#allergen-warnings}

Inclua alérgenos comuns:

- **Nozes** — nozes de árvore e amendoim
- **Crustáceos** — crustáceos e moluscos
- **Peixe** — todas as espécies de peixe
- **Laticínios** — leite e produtos lácteos
- **Ovos** — ovos de galinha
- **Soja** — produtos de soja
- **Glúten** — trigo e grãos contendo glúten
- **Gergelim** — sementes e óleo de gergelim

## Gerenciamento de Menu {#menu-management}

### Atualizando Preços {#updating-prices}

Atualize facilmente os preços do menu:

1. Navegue até a página do menu
2. Clique em "Editar Menu"
3. Atualize os preços dos itens
4. Salve as alterações
5. As alterações aparecem imediatamente no seu site

### Adicionando Itens Sazonais {#adding-seasonal-items}

Crie variações sazonais do menu:

1. Crie uma nova versão do menu
2. Adicione itens sazonais
3. Marque os itens como "Sazonais"
4. Agende as datas de disponibilidade
5. Exibe automaticamente durante a temporada

### Gerenciando Especiais {#managing-specials}

Exiba especiais diários ou semanais:

1. Crie uma categoria "Especiais"
2. Adicione itens com datas de disponibilidade
3. Destaque os especiais na página inicial
4. Atualize diariamente ou semanalmente
5. Arquive especiais antigos

## Integração com Theme Builder {#integration-with-theme-builder}

Ao usar o Theme Builder para sites de hospitalidade:

1. **Detecção automática de menu** — identifica se você é um negócio de alimentos/bebidas
2. **Criação de página de menu** — gera páginas de menu profissionais
3. **Combinação de design** — os menus combinam com o tema do seu site
4. **Otimização para dispositivos móveis** — os menus são exibidos lindamente em celulares
5. **Otimização SEO** — os menus são amigáveis para mecanismos de busca

## Melhores Práticas {#best-practices}

### Design do Menu {#menu-design}

- **Organização clara** — estrutura de categorias lógica
- **Descrições legíveis** — apetitosas e informativas
- **Preços consistentes** — moeda e formatação claras
- **Fotos profissionais** — imagens de alimentos de alta qualidade
- **Espaço em branco** — não sobrecarregue a página

### Conteúdo {#content}

- **Descrições precisas** — descreva os itens com exatidão
- **Destaque os especiais** — faça os especiais se destacarem
- **Inclua alérgenos** — liste sempre os alérgenos
- **Atualize regularmente** — mantenha preços e itens atualizados
- **Use linguagem apetitosa** — faça os itens parecerem deliciosos

### Acessibilidade {#accessibility}

- **Fontes legíveis** — use fontes claras e fáceis de ler
- **Contraste suficiente** — garanta que o texto seja legível
- **Rótulos dietéticos** — marque claramente as opções dietéticas
- **Avisos de alérgenos** — exiba os alérgenos de forma proeminente
- **Amigável para dispositivos móveis** — teste em todos os dispositivos

## Exemplos {#examples}

### Estrutura do Menu de Restaurante {#restaurant-menu-structure}

```
Entradas
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salada Caprese

Pratos de Massa
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Pratos Principais
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Sobremesas
├── Tiramisu
├── Panna Cotta
└── Seleção de Gelato
```

### Estrutura do Menu de Café {#cafe-menu-structure}

```
Café
├── Espresso
├── Cappuccino
└── Latte

Doces
├── Croissants
├── Muffins
└── Scones

Sanduíches
├── Panini Caprese
├── Club de Peru Defumado
└── Wrap Vegetariano
```

## Recursos Relacionados {#related-features}

- [Criar Menu](../abilities/create-menu.md) — criar menus de navegação
- [Direção do Design](./design-direction.md) — personalizar o design do seu site
- [Entrevista de Descoberta](./discovery-interview.md) — planejar a estrutura do seu site
