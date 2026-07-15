---
title: Menus de hotelaria
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menus de Hotelaria

A funcionalidade **Menus de Hotelaria** permite que Theme Builder gere e incorpore páginas estruturadas de menus de alimentos e bebidas diretamente no seu site WordPress.

## Visão geral {#overview}

Theme Builder agora pode criar páginas de menu profissionais e estruturadas para empresas de hotelaria, incluindo restaurantes, cafés, bares e serviços de catering. Estes menus são totalmente integrados no design do seu site e podem ser facilmente atualizados e geridos.

## Tipos de hotelaria suportados {#supported-hospitality-types}

- **Restaurantes** — menus de refeições com serviço completo
- **Cafés** — menus de café e refeições leves
- **Bares e Lounges** — menus de bebidas e aperitivos
- **Padarias** — menus de pastelaria e pão
- **Serviços de catering** — opções de menu para eventos
- **Food Trucks** — menus de serviço de comida móvel
- **Cervejarias e Adegas** — menus de bebidas com descrições

## Estrutura do menu {#menu-structure}

### Categorias do menu {#menu-categories}

Os menus são organizados em categorias:

- **Aperitivos** — entradas e pratos pequenos
- **Pratos principais** — pratos principais
- **Acompanhamentos** — acompanhamentos e legumes
- **Sobremesas** — doces
- **Bebidas** — bebidas (alcoólicas e não alcoólicas)
- **Especiais** — especiais diários ou sazonais

### Formato do item do menu {#menu-item-format}

Cada item do menu inclui:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Campos do item {#item-fields}

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `name` | string | Nome do prato ou bebida |
| `description` | string | Descrição detalhada do item |
| `price` | string | Preço (formatado com moeda) |
| `dietary_info` | array | Atributos dietéticos (Vegan, Gluten-Free, etc.) |
| `allergens` | array | Alergénios comuns (Nuts, Shellfish, etc.) |
| `availability` | string | Quando disponível (Daily, Seasonal, etc.) |

## Criar menus de hotelaria {#creating-hospitality-menus}

### Passo 1: Fornecer informações do menu {#step-1-provide-menu-information}

Informe o Theme Builder sobre o seu menu:

```
Crie um menu de restaurante para o meu restaurante italiano com aperitivos,
pratos de massa, pratos principais e sobremesas. Inclua preços e descrições.
```

### Passo 2: Theme Builder gera o menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Cria uma página de menu estruturada
2. Desenha-a para corresponder ao theme do seu site
3. Organiza os itens em categorias
4. Formata preços e descrições
5. Adiciona informações dietéticas e sobre alergénios

### Passo 3: Rever e personalizar {#step-3-review-and-customize}

Pode:

1. Editar itens do menu e preços
2. Adicionar ou remover categorias
3. Reordenar itens dentro das categorias
4. Atualizar descrições e informações dietéticas
5. Ajustar o estilo e o layout

## Opções de apresentação do menu {#menu-display-options}

### Página de menu completa {#full-menu-page}

Uma página dedicada que apresenta o seu menu completo:

- Organizada por categoria
- Pesquisável e filtrável
- Layout adequado para impressão
- Design responsivo em dispositivos móveis

### Widget de menu {#menu-widget}

Incorpore secções do menu noutras páginas:

- Itens em destaque na página inicial
- Especiais do dia na barra lateral
- Menu de bebidas na página do bar
- Mostra de sobremesas no rodapé

### PDF do menu {#menu-pdf}

Gere um menu em PDF transferível:

- Formatação profissional
- Qualidade pronta para impressão
- Inclui imagens e descrições
- Fácil de partilhar e enviar por email

## Informações dietéticas e sobre alergénios {#dietary-and-allergen-information}

### Atributos dietéticos {#dietary-attributes}

Marque itens com informações dietéticas:

- **Vegan** — sem produtos de origem animal
- **Vegetarian** — sem carne
- **Gluten-Free** — seguro para doença celíaca
- **Dairy-Free** — sem produtos lácteos
- **Nut-Free** — sem frutos de casca rija nem amendoins
- **Low-Carb** — hidratos de carbono reduzidos
- **High-Protein** — rico em proteína

### Avisos de alergénios {#allergen-warnings}

Inclua alergénios comuns:

- **Nuts** — frutos de casca rija e amendoins
- **Shellfish** — crustáceos e moluscos
- **Fish** — todas as espécies de peixe
- **Dairy** — leite e produtos lácteos
- **Eggs** — ovos de galinha
- **Soy** — produtos de soja
- **Gluten** — trigo e cereais que contêm glúten
- **Sesame** — sementes e óleo de sésamo

## Gestão do menu {#menu-management}

### Atualizar preços {#updating-prices}

Atualize facilmente os preços do menu:

1. Navegue até à página do menu
2. Clique em "Editar Menu"
3. Atualize os preços dos itens
4. Guarde as alterações
5. As alterações aparecem imediatamente no seu site

### Adicionar itens sazonais {#adding-seasonal-items}

Crie variações sazonais do menu:

1. Crie uma nova versão do menu
2. Adicione itens sazonais
3. Marque itens como "Sazonal"
4. Agende datas de disponibilidade
5. Apresente automaticamente durante a época

### Gerir especiais {#managing-specials}

Apresente especiais diários ou semanais:

1. Crie uma categoria "Especiais"
2. Adicione itens com datas de disponibilidade
3. Destaque especiais na página inicial
4. Atualize diariamente ou semanalmente
5. Arquive especiais antigos

## Integração com Theme Builder {#integration-with-theme-builder}

Ao usar Theme Builder para sites de hotelaria:

1. **Deteção automática de menu** — identifica se é uma empresa de alimentos/bebidas
2. **Criação de página de menu** — gera páginas de menu profissionais
3. **Correspondência de design** — os menus correspondem ao theme do seu site
4. **Otimização para dispositivos móveis** — os menus são exibidos de forma bonita em telemóveis
5. **Otimização de SEO** — os menus são amigáveis para motores de busca

## Melhores práticas {#best-practices}

### Design do menu {#menu-design}

- **Organização clara** — estrutura lógica de categorias
- **Descrições legíveis** — apetitosas e informativas
- **Preços consistentes** — moeda e formatação claras
- **Fotografias profissionais** — imagens de comida de alta qualidade
- **Espaço em branco** — não sobrecarregue a página

### Conteúdo {#content}

- **Descrições precisas** — descreva os itens com precisão
- **Destaque especiais** — faça os especiais sobressair
- **Inclua alergénios** — liste sempre os alergénios
- **Atualize regularmente** — mantenha preços e itens atualizados
- **Use linguagem apetitosa** — faça os itens parecerem deliciosos

### Acessibilidade {#accessibility}

- **Tipos de letra legíveis** — use tipos de letra claros e legíveis
- **Contraste suficiente** — garanta que o texto é legível
- **Etiquetas dietéticas** — marque claramente as opções dietéticas
- **Avisos de alergénios** — apresente os alergénios de forma destacada
- **Compatível com dispositivos móveis** — teste em todos os dispositivos

## Exemplos {#examples}

### Estrutura do menu de restaurante {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Estrutura do menu do café {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Funcionalidades relacionadas {#related-features}

- [Criar menu](../abilities/create-menu.md) — criar menus de navegação
- [Direção de design](./design-direction.md) — personalizar o design do seu site
- [Entrevista de descoberta](./discovery-interview.md) — planear a estrutura do seu site
