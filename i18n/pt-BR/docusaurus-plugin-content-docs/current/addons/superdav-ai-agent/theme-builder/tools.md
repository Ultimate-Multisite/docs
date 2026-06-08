---
title: Ferramentas e Configuração
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Ferramentas e Configuração

O Theme Builder utiliza um conjunto de ferramentas para analisar, desenhar e construir o seu site WordPress. Na versão 1.16.0, **sd-ai-agent/site-scrape é agora uma ferramenta Tier 1**, tornando-a disponível por padrão no Theme Builder.

## Ferramentas Disponíveis

### Ferramentas Tier 1 (Sempre Disponíveis)

As ferramentas Tier 1 estão disponíveis por padrão no Theme Builder, sem necessidade de configuração adicional.

#### sd-ai-agent/site-scrape

**Propósito:** Analisar sites existentes para extrair inspiração de design, estrutura de conteúdo e funcionalidade.

**Capacidades:**

- **Análise de sites** — rastrear e analisar sites concorrentes ou de inspiração
- **Extração de design** — identificar cores, fontes e padrões de layout
- **Estrutura de conteúdo** — entender a organização e a hierarquia das páginas
- **Detecção de recursos** — identificar plugins e funcionalidades
- **Análise de desempenho** — verificar a velocidade e a otimização da página
- **Análise de SEO** — revisar meta tags e dados estruturados

**Uso:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**O Que Ele Extrai:**

- Paleta de cores e uso de cores
- Tipografia (fontes e tamanhos)
- Estrutura e espaçamento do layout
- Padrões de navegação
- Organização do conteúdo
- Uso de imagens e mídias
- Elementos interativos
- Responsividade em dispositivos móveis

**Limitações:**

- Não consegue rastrear sites protegidos por senha
- Respeita o robots.txt e as políticas do site
- Pode não capturar conteúdo dinâmico
- Sites com muito JavaScript podem ter análise limitada
- Sites grandes podem levar mais tempo para analisar

### Ferramentas Tier 2 (Opcional)

As ferramentas Tier 2 estão disponíveis quando ativadas explicitamente nas configurações do Theme Builder.

#### Advanced Analytics

Fornece métricas detalhadas de desempenho:

- Tempos de carregamento da página
- Core Web Vitals
- Pontuação de SEO
- Pontuação de Acessibilidade
- Pontuação de Melhores Práticas

#### Content Optimizer

Analisa e sugere melhorias para:

- Legibilidade
- Otimização de SEO
- Uso de palavras-chave
- Estrutura de conteúdo
- Posicionamento de chamadas para ação (Call-to-action)

### Ferramentas Tier 3 (Premium)

As ferramentas Tier 3 exigem configuração adicional ou recursos premium.

#### AI Content Generator

Gera conteúdo para:

- Descrições de produtos
- Páginas de serviços
- Posts de blog
- Meta descrições
- Textos de chamadas para ação

#### Advanced Design Tools

Fornece capacidades avançadas de design:

- Geração de CSS personalizado
- Criação de animações
- Design de elementos interativos
- Teoria avançada de cores
- Otimização de tipografia

## Configuração de Ferramentas

### Ativando Ferramentas

Para ativar ferramentas adicionais no Theme Builder:

1. Navegue até **Gratis AI Agent → Settings**
2. Vá para **Theme Builder → Tools**
3. Ative/desative as ferramentas conforme necessário
4. Salve as configurações

### Permissões das Ferramentas

Algumas ferramentas exigem permissões:

- **Site scraping** — requer acesso à internet
- **Analytics** — requer integração com Google Analytics
- **Content generation** — requer chaves de API
- **Advanced features** — pode exigir assinatura premium

### Chaves de API e Credenciais

Configure as chaves de API para as ferramentas que as exigem:

1. Vá para **Gratis AI Agent → Settings → API Keys**
2. Insira as credenciais para cada ferramenta
3. Teste a conexão
4. Salve com segurança

## Usando sd-ai-agent/site-scrape

### Uso Básico

Peça ao Theme Builder para analisar um site:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Análise Específica

Solicite tipos específicos de análise:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Análise Comparativa

Compare vários sites:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Limitações e Considerações das Ferramentas

### Limitação de Taxa (Rate Limiting)

- O rastreamento é limitado para evitar sobrecarga do servidor
- Múltiplas solicitações ao mesmo site podem ser limitadas (throttled)
- Sites grandes podem levar mais tempo para analisar

### Precisão do Conteúdo

- Conteúdo dinâmico pode não ser totalmente capturado
- Conteúdo renderizado por JavaScript pode estar incompleto
- Dados em tempo real podem não ser refletidos
- Algum conteúdo pode estar atrás de paywalls

### Considerações Legais e Éticas

- Respeitar o robots.txt e as políticas do site
- Não rastrear conteúdo protegido por direitos autorais para reprodução
- Usar a análise para inspiração, não para cópia
- Verificar se você tem direitos de uso do conteúdo extraído
- Seguir os termos de serviço dos sites analisados

### Impacto de Desempenho

- Rastrear sites grandes pode levar tempo
- Múltiplos rastreamentos simultâneos podem ser mais lentos
- A conectividade de rede afeta a velocidade
- Grandes conjuntos de dados podem exigir mais processamento

## Melhores Práticas

### Usando Análise de Sites

1. **Analise vários sites** — reúna inspiração de várias fontes
2. **Foque na estrutura** — aprenda padrões de layout e organização
3. **Extraia cores** — use paletas de cores como pontos de partida
4. **Estude tipografia** — identifique combinações de fontes que você gosta
5. **Revise a navegação** — entenda a organização do menu

### Rastreamento Ético

1. **Respeite o robots.txt** — siga as diretrizes do site
2. **Não copie conteúdo** — use a análise apenas para inspiração
3. **Verifique direitos** — garanta que você pode usar o conteúdo extraído
4. **Atribua fontes** — dê crédito às fontes de inspiração
5. **Siga os termos** — cumpra os termos de serviço do site

### Maximizando a Eficácia das Ferramentas

1. **Seja específico** — solicite tipos específicos de análise
2. **Forneça contexto** — explique o propósito do seu site
3. **Estabeleça expectativas** — descreva seus objetivos de design
4. **Itere** — refine com base nos resultados
5. **Combine ferramentas** — use múltiplas ferramentas para uma análise completa

## Solução de Problemas

### Site Não Rastreia

- Verifique se o site está publicamente acessível
- Verifique se o robots.txt permite o rastreamento
- Tente um site diferente
- Verifique a conexão com a internet
- Contate o suporte se o problema persistir

### Análise Incompleta

- O site pode ter conteúdo dinâmico
- O JavaScript pode não ter sido totalmente renderizado
- Sites grandes podem exceder o tempo limite (timeout)
- Tente analisar páginas específicas em vez disso
- Solicite tipos de análise específicos

### Desempenho Lento

- Sites grandes levam mais tempo para analisar
- Múltiplos rastreamentos simultâneos são mais lentos
- A conectividade de rede afeta a velocidade
- Tente em horários de menor movimento
- Analise seções menores primeiro

## Documentação Relacionada

- [Discovery Interview](./discovery-interview.md) — reunir informações de design
- [Design Direction](./design-direction.md) — refinar seu design
- [Hospitality Menus](./hospitality-menus.md) — criar páginas de menu
