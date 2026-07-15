---
title: Gerar SVG de Logo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Gerar Logo SVG

A capacidade **Gerar Logo SVG** permite que o Theme Builder crie e incorpore SVGs de logo personalizados diretamente no seu site WordPress, com sanitização automática e segura de namespace.

## Visão Geral {#overview}

Esta capacidade gera logos vetoriais escaláveis (SVG) com base na identidade visual e nas preferências de design do seu site. Os SVGs gerados são automaticamente sanitizados para garantir que sejam seguros para uso no WordPress, mantendo a integridade visual.

## Parâmetros {#parameters}

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|----------|-------------|
| `site_name` | string | Sim | O nome do site para o qual o logo deve ser gerado |
| `style` | string | Sim | O estilo de design (ex: "moderno", "clássico", "minimalista", "divertido") |
| `colors` | array | Não | Array de códigos de cores hexadecimais para usar no logo (ex: `["#678233", "#ffffff"]`) |
| `width` | number | Não | Largura do SVG em pixels (padrão: 200) |
| `height` | number | Não | Altura do SVG em pixels (padrão: 200) |
| `include_text` | boolean | Não | Se deve incluir o nome do site como texto no logo (padrão: true) |

## Formato de Saída {#output-format}

A capacidade retorna uma string SVG com a seguinte estrutura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamento de Sanitização SVG {#svg-sanitisation-behaviour}

Os SVGs gerados passam por uma sanitização automática e segura de namespace para:

- **Remover atributos inseguros** — remove manipuladores de eventos, scripts e atributos potencialmente perigosos
- **Preservar namespaces** — mantém os namespaces SVG (xmlns, xlink) para renderização correta
- **Validar estrutura** — garante que o SVG esteja em conformidade com os padrões W3C
- **Codificar entidades** — escapa corretamente caracteres especiais no conteúdo de texto
- **Remover referências externas** — remove folhas de estilo e referências de imagem externas

Isso garante que o SVG seja seguro para ser incorporado diretamente no WordPress sem exigir sanitização adicional.

## Exemplo de Uso {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Resultado:**
A capacidade cria um logo SVG que:
- Incorpora o nome do site "CloudSync"
- Usa o esquema de cores azul e branco especificado
- Segue princípios de design moderno
- É automaticamente sanitizado e pronto para uso

## Integração com Theme Builder {#integration-with-theme-builder}

Ao usar a seleção de direção de design do Theme Builder, a capacidade Gerar Logo SVG:

1. Analisa sua direção de design e paleta de cores
2. Gera um logo SVG personalizado que corresponde às suas preferências
3. Incorpora automaticamente o logo na área de cabeçalho/marca do seu site
4. Armazena o SVG como um logo personalizado na mídia do WordPress

## Melhores Práticas {#best-practices}

- **Forneça preferências de estilo claras** — descreva o estilo de design que você deseja (moderno, clássico, divertido, etc.)
- **Especifique cores** — inclua as cores da sua marca para consistência
- **Teste a renderização** — verifique se o logo é exibido corretamente em diferentes tamanhos de tela
- **Personalize ainda mais** — use as ferramentas de personalização de logo do WordPress para ajustar tamanho e posicionamento

## Limitações {#limitations}

- Logos SVG são gerados como gráficos estáticos (não animados)
- Logos complexos com muitos elementos podem exigir refinamento manual
- Fontes personalizadas não são suportadas; o texto usa fontes do sistema
- Dimensões muito grandes ou muito pequenas podem afetar a qualidade

## Capacidades Relacionadas {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — verificar o contraste de cores para acessibilidade
- [Create Menu](./create-menu.md) — criar menus de navegação para o seu site
