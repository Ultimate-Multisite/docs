---
title: Gerar logotipo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Gerar Logo SVG

A capacidade **Gerar Logo SVG** permite ao Theme Builder criar e incorporar SVGs de logótipos personalizados diretamente no seu site WordPress com sanitização automática segura para namespaces.

## Visão geral {#overview}

Esta capacidade gera logótipos em gráficos vetoriais escaláveis (SVG) com base na direção de branding e nas preferências de design do seu site. Os SVGs gerados são sanitizados automaticamente para garantir que são seguros para utilização no WordPress, mantendo a integridade visual.

## Parâmetros {#parameters}

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|----------|-------------|
| `site_name` | string | Sim | O nome do site para o qual gerar o logótipo |
| `style` | string | Sim | O estilo de design (por exemplo, "moderno", "clássico", "minimalista", "divertido") |
| `colors` | array | Não | Array de códigos de cores hexadecimais a usar no logótipo (por exemplo, `["#678233", "#ffffff"]`) |
| `width` | number | Não | Largura do SVG em píxeis (predefinição: 200) |
| `height` | number | Não | Altura do SVG em píxeis (predefinição: 200) |
| `include_text` | boolean | Não | Se deve incluir o nome do site como texto no logótipo (predefinição: true) |

## Formato de saída {#output-format}

A capacidade devolve uma string SVG com a seguinte estrutura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamento de sanitização de SVG {#svg-sanitisation-behaviour}

Os SVGs gerados passam por sanitização automática segura para namespaces para:

- **Remover atributos inseguros** — elimina manipuladores de eventos, scripts e atributos potencialmente perigosos
- **Preservar namespaces** — mantém namespaces SVG (xmlns, xlink) para uma renderização correta
- **Validar a estrutura** — garante que o SVG está em conformidade com as normas W3C
- **Codificar entidades** — escapa corretamente caracteres especiais em conteúdo de texto
- **Remover referências externas** — elimina folhas de estilo externas e referências a imagens

Isto garante que o SVG é seguro para incorporar diretamente no WordPress sem exigir sanitização adicional.

## Exemplo de utilização {#usage-example}

**Prompt:**
```
Gera um logótipo moderno para a minha startup tecnológica chamada "CloudSync" usando as cores azul e branco.
```

**Resultado:**
A capacidade cria um logótipo SVG que:
- Incorpora o nome do site "CloudSync"
- Usa o esquema de cores azul e branco especificado
- Segue princípios de design moderno
- É automaticamente sanitizado e está pronto a usar

## Integração com o Theme Builder {#integration-with-theme-builder}

Ao usar a seleção de direção de design do Theme Builder, a capacidade Gerar Logo SVG:

1. Analisa a sua direção de design e paleta de cores
2. Gera um logótipo SVG personalizado que corresponde às suas preferências
3. Incorpora automaticamente o logótipo na área de cabeçalho/branding do seu site
4. Armazena o SVG como um logótipo personalizado nos média do WordPress

## Boas práticas {#best-practices}

- **Forneça preferências de estilo claras** — descreva o estilo de design que pretende (moderno, clássico, divertido, etc.)
- **Especifique cores** — inclua as cores da sua marca para consistência
- **Teste a renderização** — verifique se o logótipo é apresentado corretamente em diferentes tamanhos de ecrã
- **Personalize mais** — use as ferramentas de personalização de logótipo do WordPress para ajustar o tamanho e o posicionamento

## Limitações {#limitations}

- Os logótipos SVG são gerados como gráficos estáticos (não animados)
- Logótipos complexos com muitos elementos podem exigir aperfeiçoamento manual
- Tipos de letra personalizados não são suportados; o texto usa tipos de letra do sistema
- Dimensões muito grandes ou muito pequenas podem afetar a qualidade

## Capacidades relacionadas {#related-abilities}

- [Validar contraste da paleta](./validate-palette-contrast.md) — verificar o contraste de cores para acessibilidade
- [Criar menu](./create-menu.md) — criar menus de navegação para o seu site
