---
title: Ferramentas e Configuração
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Ferramentas e Configuração {#tools-and-configuration}

Theme Builder usa um conjunto de ferramentas para analisar, projetar e construir seu site WordPress. Na versão 1.16.0, **sd-ai-agent/site-scrape agora é uma ferramenta Tier 1**, tornando-a disponível por padrão no Theme Builder. Superdav AI Agent v1.18.0 também apresenta um pacote complementar Advanced distribuído separadamente para fluxos de trabalho de desenvolvedores confiáveis; essas ferramentas não fazem parte do pacote principal do WordPress.org e devem ser instaladas e autorizadas separadamente.

## Ferramentas Disponíveis {#available-tools}

### Ferramentas Tier 1 (Sempre Disponíveis) {#tier-1-tools-always-available}

As ferramentas Tier 1 estão disponíveis por padrão no Theme Builder sem nenhuma configuração adicional.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Finalidade:** Analisar sites existentes para extrair inspiração de design, estrutura de conteúdo e funcionalidade.

**Recursos:**

- **Análise de site** — fazer scrape e analisar sites concorrentes ou de inspiração
- **Extração de design** — identificar cores, fontes e padrões de layout
- **Estrutura de conteúdo** — entender a organização e a hierarquia das páginas
- **Detecção de recursos** — identificar plugins e funcionalidades
- **Análise de desempenho** — verificar a velocidade da página e a otimização
- **Análise de SEO** — revisar meta tags e dados estruturados

**Uso:**

```
Analise o design de example.com e use-o como inspiração para meu site.
```

**O Que Ele Extrai:**

- Paleta de cores e uso de cores
- Tipografia (fontes e tamanhos)
- Estrutura de layout e espaçamento
- Padrões de navegação
- Organização de conteúdo
- Uso de imagens e mídia
- Elementos interativos
- Responsividade em dispositivos móveis

**Limitações:**

- Não consegue fazer scrape de sites protegidos por senha
- Respeita robots.txt e políticas do site
- Pode não capturar conteúdo dinâmico
- Sites com muito JavaScript podem ter análise limitada
- Sites grandes podem demorar mais para analisar

### Ferramentas Tier 2 (Opcionais) {#tier-2-tools-optional}

As ferramentas Tier 2 ficam disponíveis quando ativadas explicitamente nas configurações do Theme Builder.

#### Análises Avançadas {#advanced-analytics}

Fornece métricas de desempenho detalhadas:

- Tempos de carregamento da página
- Core Web Vitals
- Pontuação de SEO
- Pontuação de acessibilidade
- Pontuação de melhores práticas

#### Otimizador de Conteúdo {#content-optimizer}

Analisa e sugere melhorias para:

- Legibilidade
- Otimização de SEO
- Uso de palavras-chave
- Estrutura de conteúdo
- Posicionamento de chamada para ação

### Ferramentas Tier 3 (Premium) {#tier-3-tools-premium}

As ferramentas Tier 3 exigem configuração adicional ou recursos premium.

#### Gerador de Conteúdo com IA {#ai-content-generator}

Gera conteúdo para:

- Descrições de produtos
- Páginas de serviços
- Posts de blog
- Meta descrições
- Texto de chamada para ação

#### Ferramentas de Design Avançadas {#advanced-design-tools}

Fornece recursos avançados de design:

- Geração de CSS personalizado
- Criação de animações
- Design de elementos interativos
- Teoria avançada de cores
- Otimização de tipografia

### Ferramentas Complementares Advanced (Pacote Separado) {#advanced-companion-tools-separate-package}

O pacote complementar Advanced é distribuído separadamente da versão principal do Superdav AI Agent. Ele é destinado a ambientes confiáveis de desenvolvedores e proprietários de sites nos quais administradores permitem explicitamente que o agente use ferramentas de alto impacto.

Os recursos complementares Advanced podem incluir:

- **Ferramentas de sistema de arquivos** — inspecionar e modificar arquivos aprovados em ambientes confiáveis
- **Ferramentas de banco de dados** — consultar ou atualizar dados do site quando explicitamente autorizado
- **Ferramentas WP-CLI** — executar comandos de manutenção e inspeção do WordPress
- **Ferramentas de despachante REST** — chamar endpoints REST registrados por meio de fluxos de trabalho de despacho controlados
- **Ferramentas de criação de plugins** — estruturar e iterar no código de plugins
- **Ferramentas de snapshot do Git** — criar snapshots antes de operações arriscadas de desenvolvedor
- **Ferramentas de gerenciamento de usuários** — ajudar a revisar ou ajustar registros de usuários quando permitido
- **Ferramentas de benchmark** — executar benchmarks de desempenho ou capacidade para revisão de desenvolvimento

Não documente essas ferramentas como ferramentas do Theme Builder geralmente disponíveis para todas as instalações. Elas estão disponíveis somente quando o pacote complementar Advanced está instalado, ativado e restrito a administradores confiáveis.

## Configuração de Ferramentas {#tool-configuration}

### Ativando Ferramentas {#enabling-tools}

Para ativar ferramentas adicionais no Theme Builder:

1. Navegue até **Gratis AI Agent → Settings**
2. Vá para **Theme Builder → Tools**
3. Ative/desative ferramentas conforme necessário
4. Salve as configurações

### Permissões das Ferramentas {#tool-permissions}

Algumas ferramentas exigem permissões:

- **Scraping de site** — requer acesso à internet
- **Analytics** — requer integração com Google Analytics
- **Geração de conteúdo** — requer chaves de API
- **Recursos avançados** — podem exigir assinatura premium
- **Ferramentas complementares Advanced** — exigem o pacote Advanced distribuído separadamente e confiança explícita do administrador

### Chaves de API e Credenciais {#api-keys-and-credentials}

Configure chaves de API para ferramentas que as exigem:

1. Vá para **Gratis AI Agent → Settings → API Keys**
2. Insira credenciais para cada ferramenta
3. Teste a conexão
4. Salve com segurança

### Instalando o Pacote Complementar Advanced {#installing-the-advanced-companion-package}

O pacote complementar Advanced é lançado separadamente do ZIP principal do WordPress.org. Instale-o somente a partir do canal oficial de distribuição do projeto para a versão e, em seguida, restrinja o acesso a administradores confiáveis. Revise os mecanismos de aprovação humana e o comportamento de snapshots do git antes de ativar ferramentas de sistema de arquivos, banco de dados, WP-CLI, despachante REST, criação de plugins, gerenciamento de usuários ou benchmark em um site de produção.

## Usando sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Uso Básico {#basic-usage}

Peça ao Theme Builder para analisar um site:

```
Analise o design do site do meu concorrente em competitor.com
e sugira melhorias de design para meu site.
```

### Análise Específica {#specific-analysis}

Solicite tipos específicos de análise:

```
Extraia a paleta de cores de example.com e use-a como inspiração.
```

```
Analise a estrutura de navegação de example.com e aplique uma
organização semelhante ao meu site.
```

```
Verifique a responsividade em dispositivos móveis de example.com e garanta que meu site
seja igualmente responsivo.
```

### Análise Comparativa {#comparison-analysis}

Compare vários sites:

```
Compare os designs de site1.com e site2.com e crie um design
que combine os melhores elementos de ambos.
```

## Limitações e Considerações das Ferramentas {#tool-limitations-and-considerations}

### Limitação de Taxa {#rate-limiting}

- O scraping tem limitação de taxa para evitar sobrecarga do servidor
- Várias solicitações para o mesmo site podem ser limitadas
- Sites grandes podem levar mais tempo para analisar

### Precisão do conteúdo {#content-accuracy}

- Conteúdo dinâmico pode não ser totalmente capturado
- Conteúdo renderizado por JavaScript pode estar incompleto
- Dados em tempo real podem não ser refletidos
- Alguns conteúdos podem estar atrás de paywalls

### Considerações legais e éticas {#legal-and-ethical-considerations}

- Respeite robots.txt e as políticas do site
- Não faça scraping de conteúdo protegido por direitos autorais para reprodução
- Use a análise como inspiração, não para copiar
- Verifique se você tem direitos para usar o conteúdo extraído
- Siga os termos de serviço dos sites analisados

### Impacto no desempenho {#performance-impact}

- Fazer scraping de sites grandes pode levar tempo
- Vários scrapings simultâneos podem ser mais lentos
- A conectividade de rede afeta a velocidade
- Grandes conjuntos de dados podem exigir mais processamento

## Melhores práticas {#best-practices}

### Usando a análise de site {#using-site-analysis}

1. **Analise vários sites** — reúna inspiração de várias fontes
2. **Concentre-se na estrutura** — aprenda padrões de layout e organização
3. **Extraia cores** — use paletas de cores como pontos de partida
4. **Estude tipografia** — identifique combinações de fontes de que você gosta
5. **Revise a navegação** — entenda a organização dos menus

### Scraping ético {#ethical-scraping}

1. **Respeite robots.txt** — siga as diretrizes do site
2. **Não copie conteúdo** — use a análise apenas como inspiração
3. **Verifique os direitos** — garanta que você possa usar o conteúdo extraído
4. **Atribua as fontes** — dê crédito às fontes de inspiração
5. **Siga os termos** — cumpra os termos de serviço do site

### Maximizando a eficácia da ferramenta {#maximizing-tool-effectiveness}

1. **Seja específico** — solicite tipos específicos de análise
2. **Forneça contexto** — explique o propósito do seu site
3. **Defina expectativas** — descreva seus objetivos de design
4. **Itere** — refine com base nos resultados
5. **Combine ferramentas** — use várias ferramentas para uma análise abrangente

## Solução de problemas {#troubleshooting}

### Site não faz scraping {#site-wont-scrape}

- Verifique se o site está acessível publicamente
- Verifique se robots.txt permite scraping
- Tente um site diferente
- Verifique a conexão com a internet
- Entre em contato com o suporte se o problema persistir

### Análise incompleta {#incomplete-analysis}

- O site pode ter conteúdo dinâmico
- JavaScript pode não ser totalmente renderizado
- Sites grandes podem atingir o tempo limite
- Tente analisar páginas específicas em vez disso
- Solicite tipos específicos de análise

### Desempenho lento {#slow-performance}

- Sites grandes levam mais tempo para analisar
- Vários scrapings simultâneos são mais lentos
- A conectividade de rede afeta a velocidade
- Tente durante horários fora de pico
- Analise seções menores primeiro

## Documentação relacionada {#related-documentation}

- [Entrevista de descoberta](./discovery-interview.md) — reúna informações de design
- [Direção de design](./design-direction.md) — refine seu design
- [Menus de hospitalidade](./hospitality-menus.md) — crie páginas de menu
