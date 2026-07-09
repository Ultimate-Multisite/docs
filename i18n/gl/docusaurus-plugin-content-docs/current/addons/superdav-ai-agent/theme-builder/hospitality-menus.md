---
title: Menús de hostalaría
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menús de hostalaría

A funcionalidade **Menús de hostalaría** permite a Theme Builder xerar e inserir páxinas estruturadas de menús de comida e bebida directamente no teu sitio WordPress.

## Visión xeral

Theme Builder agora pode crear páxinas de menú profesionais e estruturadas para negocios de hostalaría, incluíndo restaurantes, cafés, bares e servizos de catering. Estes menús están totalmente integrados no deseño do teu sitio e pódense actualizar e xestionar facilmente.

## Tipos de hostalaría compatibles

- **Restaurantes** — menús de comidas con servizo completo
- **Cafés** — menús de café e pratos lixeiros
- **Bares e salóns** — menús de bebidas e aperitivos
- **Panadarías** — menús de repostaría e pan
- **Servizos de catering** — opcións de menú para eventos
- **Food trucks** — menús de servizo de comida móbil
- **Cervexarías e adegas** — menús de bebidas con descricións

## Estrutura do menú

### Categorías do menú

Os menús organízanse en categorías:

- **Aperitivos** — entrantes e pratos pequenos
- **Pratos principais** — pratos principais
- **Guarnicións** — acompañamentos e verduras
- **Sobremesas** — doces e sobremesas
- **Bebidas** — bebidas (alcohólicas e non alcohólicas)
- **Especiais** — especiais diarios ou de tempada

### Formato do elemento do menú

Cada elemento do menú inclúe:

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

#### Campos do elemento

| Campo | Tipo | Descrición |
|-------|------|-------------|
| `name` | string | Nome do prato ou bebida |
| `description` | string | Descrición detallada do elemento |
| `price` | string | Prezo (formatado con moeda) |
| `dietary_info` | array | Atributos dietéticos (vegano, sen glute, etc.) |
| `allergens` | array | Alérxenos comúns (froitos secos, marisco, etc.) |
| `availability` | string | Cando está dispoñible (diario, de tempada, etc.) |

## Crear menús de hostalaría

### Paso 1: Proporciona información do menú

Fálalle a Theme Builder sobre o teu menú:

```
Crea un menú de restaurante para o meu restaurante italiano con aperitivos,
pratos de pasta, pratos principais e sobremesas. Inclúe prezos e descricións.
```

### Paso 2: Theme Builder xera o menú

Theme Builder:

1. Crea unha páxina de menú estruturada
2. Deseñaa para que coincida co tema do teu sitio
3. Organiza os elementos en categorías
4. Formata prezos e descricións
5. Engade información dietética e de alérxenos

### Paso 3: Revisa e personaliza

Podes:

1. Editar elementos do menú e prezos
2. Engadir ou eliminar categorías
3. Reordenar elementos dentro das categorías
4. Actualizar descricións e información dietética
5. Axustar o estilo e a disposición

## Opcións de visualización do menú

### Páxina de menú completa

Unha páxina dedicada que mostra o teu menú completo:

- Organizada por categoría
- Con busca e filtros
- Disposición apta para imprimir
- Deseño adaptable a móbiles

### Widget de menú

Insire seccións do menú noutras páxinas:

- Elementos destacados na páxina de inicio
- Especiais diarios na barra lateral
- Menú de bebidas na páxina do bar
- Mostra de sobremesas no pé de páxina

### PDF do menú

Xera un menú PDF descargable:

- Formato profesional
- Calidade lista para imprimir
- Inclúe imaxes e descricións
- Fácil de compartir e enviar por correo electrónico

## Información dietética e de alérxenos

### Atributos dietéticos

Marca os elementos con información dietética:

- **Vegano** — sen produtos de orixe animal
- **Vexetariano** — sen carne
- **Sen glute** — seguro para a enfermidade celíaca
- **Sen lácteos** — sen produtos lácteos
- **Sen froitos secos** — sen froitos de árbore nin cacahuetes
- **Baixo en carbohidratos** — carbohidratos reducidos
- **Alto en proteínas** — rico en proteínas

### Avisos de alérxenos

Inclúe alérxenos comúns:

- **Froitos secos** — froitos de árbore e cacahuetes
- **Marisco** — crustáceos e moluscos
- **Peixe** — todas as especies de peixe
- **Lácteos** — leite e produtos lácteos
- **Ovos** — ovos de galiña
- **Soia** — produtos de soia
- **Glute** — trigo e cereais que conteñen glute
- **Sésamo** — sementes e aceite de sésamo

## Xestión do menú

### Actualizar prezos

Actualiza facilmente os prezos do menú:

1. Navega á páxina do menú
2. Fai clic en "Editar menú"
3. Actualiza os prezos dos elementos
4. Garda os cambios
5. Os cambios aparecen inmediatamente no teu sitio

### Engadir elementos de tempada

Crea variacións de menú de tempada:

1. Crea unha nova versión do menú
2. Engade elementos de tempada
3. Marca os elementos como "De tempada"
4. Programa datas de dispoñibilidade
5. Móstraos automaticamente durante a tempada

### Xestionar especiais

Mostra especiais diarios ou semanais:

1. Crea unha categoría "Especiais"
2. Engade elementos con datas de dispoñibilidade
3. Destaca os especiais na páxina de inicio
4. Actualiza diariamente ou semanalmente
5. Arquiva os especiais antigos

## Integración con Theme Builder

Ao usar Theme Builder para sitios de hostalaría:

1. **Detección automática de menú** — identifica se es un negocio de comida/bebida
2. **Creación de páxina de menú** — xera páxinas de menú profesionais
3. **Coincidencia de deseño** — os menús coinciden co tema do teu sitio
4. **Optimización móbil** — os menús móstranse de forma excelente en teléfonos
5. **Optimización SEO** — os menús son amigables para os motores de busca

## Boas prácticas

### Deseño do menú

- **Organización clara** — estrutura lóxica de categorías
- **Descricións lexibles** — apetitosas e informativas
- **Prezos consistentes** — moeda e formato claros
- **Fotos profesionais** — imaxes de comida de alta calidade
- **Espazo en branco** — non sobrecargues a páxina

### Contido

- **Descricións precisas** — describe os elementos con precisión
- **Destacar especiais** — fai que os especiais sobresaian
- **Incluír alérxenos** — lista sempre os alérxenos
- **Actualizar regularmente** — mantén os prezos e elementos ao día
- **Usar linguaxe apetitosa** — fai que os elementos soen deliciosos

### Accesibilidade

- **Tipos de letra lexibles** — usa tipografías claras e lexibles
- **Contraste suficiente** — asegúrate de que o texto sexa lexible
- **Etiquetas dietéticas** — marca claramente as opcións dietéticas
- **Avisos de alérxenos** — mostra os alérxenos de forma destacada
- **Apto para móbiles** — proba en todos os dispositivos

## Exemplos

### Estrutura do menú dun restaurante

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

### Estrutura do menú da cafetería

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

## Funcionalidades relacionadas

- [Crear menú](../abilities/create-menu.md) — crear menús de navegación
- [Dirección de deseño](./design-direction.md) — personaliza o deseño do teu sitio
- [Entrevista de descubrimento](./discovery-interview.md) — planifica a estrutura do teu sitio
