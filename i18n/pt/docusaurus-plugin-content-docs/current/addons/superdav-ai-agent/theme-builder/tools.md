---
title: Ferramentas e Configuração
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Ferramentas e Configuração

Theme Builder usa um conjunto de ferramentas para analisar, desenhar e construir o seu site WordPress. Na versão 1.16.0, **sd-ai-agent/site-scrape é agora uma ferramenta de Camada 1**, ficando disponível por predefinição no Theme Builder. Superdav AI Agent v1.18.0 também introduz um pacote complementar Advanced distribuído separadamente para fluxos de trabalho de programadores de confiança; essas ferramentas não fazem parte do pacote principal WordPress.org e têm de ser instaladas e autorizadas separadamente.

## Ferramentas Disponíveis {#available-tools}

### Ferramentas de Camada 1 (Sempre Disponíveis) {#tier-1-tools-always-available}

As ferramentas de Camada 1 estão disponíveis por predefinição no Theme Builder sem qualquer configuração adicional.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Objetivo:** Analisar sites existentes para extrair inspiração de design, estrutura de conteúdo e funcionalidade.

**Capacidades:**

- **Análise de sites** — recolher e analisar sites de concorrentes ou de inspiração
- **Extração de design** — identificar cores, tipos de letra e padrões de layout
- **Estrutura de conteúdo** — compreender a organização e a hierarquia das páginas
- **Deteção de funcionalidades** — identificar plugins e funcionalidade
- **Análise de desempenho** — verificar a velocidade da página e a otimização
- **Análise SEO** — rever meta tags e dados estruturados

**Utilização:**

```
Analisa o design de example.com e usa-o como inspiração para o meu site.
```

**O Que Extrai:**

- Paleta de cores e utilização de cores
- Tipografia (tipos de letra e tamanhos)
- Estrutura de layout e espaçamento
- Padrões de navegação
- Organização de conteúdo
- Utilização de imagens e media
- Elementos interativos
- Responsividade móvel

**Limitações:**

- Não consegue recolher sites protegidos por palavra-passe
- Respeita o robots.txt e as políticas do site
- Pode não capturar conteúdo dinâmico
- Sites com muito JavaScript podem ter uma análise limitada
- Sites grandes podem demorar mais tempo a analisar

### Ferramentas de Camada 2 (Opcionais) {#tier-2-tools-optional}

As ferramentas de Camada 2 estão disponíveis quando ativadas explicitamente nas definições do Theme Builder.

#### Análises Avançadas {#advanced-analytics}

Fornece métricas de desempenho detalhadas:

- Tempos de carregamento da página
- Core Web Vitals
- Pontuação SEO
- Pontuação de acessibilidade
- Pontuação de melhores práticas

#### Otimizador de Conteúdo {#content-optimizer}

Analisa e sugere melhorias para:

- Legibilidade
- Otimização SEO
- Utilização de palavras-chave
- Estrutura de conteúdo
- Colocação de chamadas à ação

### Ferramentas de Camada 3 (Premium) {#tier-3-tools-premium}

As ferramentas de Camada 3 requerem configuração adicional ou funcionalidades premium.

#### Gerador de Conteúdo AI {#ai-content-generator}

Gera conteúdo para:

- Descrições de produtos
- Páginas de serviços
- Publicações de blog
- Meta descrições
- Texto de chamada à ação

#### Ferramentas de Design Avançadas {#advanced-design-tools}

Fornece capacidades de design avançadas:

- Geração de CSS personalizado
- Criação de animações
- Design de elementos interativos
- Teoria avançada da cor
- Otimização de tipografia

### Ferramentas Complementares Advanced (Pacote Separado) {#advanced-companion-tools-separate-package}

O pacote complementar Advanced é distribuído separadamente da versão principal do Superdav AI Agent. Destina-se a ambientes de programadores e proprietários de sites de confiança, onde os administradores permitem explicitamente que o agente use ferramentas de alto impacto.

As capacidades complementares Advanced podem incluir:

- **Ferramentas de sistema de ficheiros** — inspecionar e modificar ficheiros aprovados em ambientes de confiança
- **Ferramentas de base de dados** — consultar ou atualizar dados do site quando explicitamente autorizado
- **Ferramentas WP-CLI** — executar comandos de manutenção e inspeção do WordPress
- **Ferramentas de despachante REST** — chamar endpoints REST registados através de fluxos de trabalho de despacho controlados
- **Ferramentas de construção de plugins** — criar a estrutura inicial e iterar sobre código de plugin
- **Ferramentas de instantâneos Git** — criar instantâneos antes de operações de programador arriscadas
- **Ferramentas de gestão de utilizadores** — ajudar a rever ou ajustar registos de utilizadores quando permitido
- **Ferramentas de benchmark** — executar benchmarks de desempenho ou capacidade para revisão de desenvolvimento

Não documente estas ferramentas como ferramentas Theme Builder geralmente disponíveis para todas as instalações. Estão disponíveis apenas quando o pacote complementar Advanced está instalado, ativado e restrito a administradores de confiança.

## Configuração de Ferramentas {#tool-configuration}

### Ativar Ferramentas {#enabling-tools}

Para ativar ferramentas adicionais no Theme Builder:

1. Navegue para **Gratis AI Agent → Settings**
2. Vá a **Theme Builder → Tools**
3. Ative/desative ferramentas conforme necessário
4. Guarde as definições

### Permissões de Ferramentas {#tool-permissions}

Algumas ferramentas requerem permissões:

- **Recolha de sites** — requer acesso à internet
- **Análises** — requer integração com Google Analytics
- **Geração de conteúdo** — requer chaves de API
- **Funcionalidades avançadas** — podem requerer subscrição premium
- **Ferramentas complementares Advanced** — requerem o pacote Advanced distribuído separadamente e confiança explícita do administrador

### Chaves de API e Credenciais {#api-keys-and-credentials}

Configure chaves de API para ferramentas que as requerem:

1. Vá a **Gratis AI Agent → Settings → API Keys**
2. Introduza as credenciais para cada ferramenta
3. Teste a ligação
4. Guarde de forma segura

### Instalar o Pacote Complementar Advanced {#installing-the-advanced-companion-package}

O pacote complementar Advanced é lançado separadamente do ZIP principal WordPress.org. Instale-o apenas a partir do canal oficial de distribuição do projeto para a versão e, em seguida, restrinja o acesso a administradores de confiança. Reveja os pontos de aprovação humana e o comportamento dos instantâneos git antes de ativar ferramentas de sistema de ficheiros, base de dados, WP-CLI, despachante REST, construção de plugins, gestão de utilizadores ou benchmark num site de produção.

## Usar sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Utilização Básica {#basic-usage}

Peça ao Theme Builder para analisar um site:

```
Analisa o design do site do meu concorrente em competitor.com
e sugere melhorias de design para o meu site.
```

### Análise Específica {#specific-analysis}

Solicite tipos específicos de análise:

```
Extrai a paleta de cores de example.com e usa-a como inspiração.
```

```
Analisa a estrutura de navegação de example.com e aplica uma
organização semelhante ao meu site.
```

```
Verifica a responsividade móvel de example.com e garante que o meu site
é igualmente responsivo.
```

### Análise Comparativa {#comparison-analysis}

Compare vários sites:

```
Compara os designs de site1.com e site2.com e cria um design
que combine os melhores elementos de ambos.
```

## Limitações e Considerações das Ferramentas {#tool-limitations-and-considerations}

### Limitação de Taxa {#rate-limiting}

- O scraping tem limites de taxa para evitar sobrecarga do servidor
- Vários pedidos ao mesmo site podem ser limitados
- Sites grandes podem demorar mais a analisar

### Precisão do conteúdo {#content-accuracy}

- Conteúdo dinâmico pode não ser totalmente capturado
- Conteúdo renderizado por JavaScript pode ficar incompleto
- Dados em tempo real podem não ser refletidos
- Algum conteúdo pode estar por trás de paywalls

### Considerações legais e éticas {#legal-and-ethical-considerations}

- Respeite robots.txt e as políticas do site
- Não faça scraping de conteúdo protegido por direitos de autor para reprodução
- Use a análise como inspiração, não para copiar
- Verifique se tem direitos para usar o conteúdo extraído
- Siga os termos de serviço dos sites analisados

### Impacto no desempenho {#performance-impact}

- Fazer scraping de sites grandes pode demorar
- Vários scrapes simultâneos podem ser mais lentos
- A conectividade de rede afeta a velocidade
- Grandes conjuntos de dados podem exigir mais processamento

## Boas práticas {#best-practices}

### Usar a análise de sites {#using-site-analysis}

1. **Analise vários sites** — reúna inspiração de várias fontes
2. **Foque-se na estrutura** — aprenda padrões de layout e organização
3. **Extraia cores** — use paletas de cores como pontos de partida
4. **Estude a tipografia** — identifique combinações de fontes de que gosta
5. **Reveja a navegação** — compreenda a organização do menu

### Scraping ético {#ethical-scraping}

1. **Respeite robots.txt** — siga as diretrizes do site
2. **Não copie conteúdo** — use a análise apenas como inspiração
3. **Verifique direitos** — certifique-se de que pode usar o conteúdo extraído
4. **Atribua as fontes** — credite as fontes de inspiração
5. **Siga os termos** — cumpra os termos de serviço do site

### Maximizar a eficácia da ferramenta {#maximizing-tool-effectiveness}

1. **Seja específico** — solicite tipos específicos de análise
2. **Forneça contexto** — explique o objetivo do seu site
3. **Defina expectativas** — descreva os seus objetivos de design
4. **Itere** — refine com base nos resultados
5. **Combine ferramentas** — use várias ferramentas para uma análise abrangente

## Resolução de problemas {#troubleshooting}

### O site não faz scraping {#site-wont-scrape}

- Verifique se o site está publicamente acessível
- Verifique se robots.txt permite scraping
- Experimente um site diferente
- Verifique a ligação à internet
- Contacte o suporte se o problema persistir

### Análise incompleta {#incomplete-analysis}

- O site pode ter conteúdo dinâmico
- JavaScript pode não ser totalmente renderizado
- Sites grandes podem atingir o tempo limite
- Experimente analisar páginas específicas em vez disso
- Solicite tipos específicos de análise

### Desempenho lento {#slow-performance}

- Sites grandes demoram mais a analisar
- Vários scrapes simultâneos são mais lentos
- A conectividade de rede afeta a velocidade
- Experimente fora das horas de pico
- Analise primeiro secções menores

## Documentação relacionada {#related-documentation}

- [Entrevista de descoberta](./discovery-interview.md) — recolha informações de design
- [Direção de design](./design-direction.md) — refine o seu design
- [Menus de hotelaria](./hospitality-menus.md) — crie páginas de menus
