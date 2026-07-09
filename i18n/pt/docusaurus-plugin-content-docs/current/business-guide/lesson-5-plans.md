---
title: 'Lição 5: Conceber os seus planos'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lição 5: Desenhar os Seus Planos

Os níveis dos seus planos não são apenas níveis de preços -- são um reflexo de como os clientes do seu nicho realmente operam. Nesta lição, vai desenhar níveis de produto que correspondem às necessidades reais de negócios de fitness em diferentes fases.

## Onde Ficámos

A FitSite tem três modelos prontos (Studio Essential, Gym Pro, Fitness Chain). Agora criamos os planos que determinam a que os clientes têm acesso e quanto pagam.

## Pensar em Segmentos de Clientes

O erro que a maioria das pessoas comete é desenhar planos em torno de funcionalidades técnicas (armazenamento, largura de banda, número de páginas). Os clientes do seu nicho não pensam nesses termos. O proprietário de um ginásio pensa no que precisa para gerir o seu negócio.

Para estúdios de fitness, existem três segmentos naturais:

| Segmento | Quem São | Do Que Precisam |
|---------|-------------|----------------|
| **Treinadores individuais / pequenos estúdios** | 1-3 funcionários, localização única, a começar | Um site profissional, informações de aulas, formulário de contacto |
| **Ginásios estabelecidos** | 5-20 funcionários, localização única, em crescimento | Tudo o que está acima mais reservas, blog, galeria, domínio personalizado |
| **Cadeias de fitness** | Várias localizações, marca estabelecida | Tudo o que está acima mais multi-site, páginas de localizações, diretório de equipa |

Os seus planos devem corresponder a estes segmentos, não a pacotes arbitrários de funcionalidades.

## Criar os Planos FitSite

Navegue até **Ultimate Multisite > Produtos > Adicionar Produto** para cada plano.

### Plano 1: FitSite Starter -- $49/mês

**Alvo**: Treinadores individuais e pequenos estúdios

**Separador Descrição**:
- Nome: FitSite Starter
- Descrição: "Tudo o que um personal trainer ou pequeno estúdio precisa para parecer profissional online."

**Separador Geral**:
- Tipo de produto: Plano
- Função do cliente: Administrador

**Separador Modelos de Site**:
- Permitir modelos de site: Ativado
- Modelos disponíveis: Apenas Studio Essential

**Limitações**:
- Sites: 1
- Espaço em disco: 1 GB
- Domínio personalizado: Desativado (usa `studioname.fitsite.com`)

**Separador Plugins**:
- Plugin de formulário de contacto: Forçar Ativação
- Plugin de SEO: Forçar Ativação
- Plugin de reservas: Não Disponível (incentivo para upgrade)

**Separador Temas**:
- O seu tema selecionado: Forçar Ativação
- Todos os outros temas: Ocultos

### Plano 2: FitSite Growth -- $99/mês

**Alvo**: Ginásios estabelecidos com uma única localização

**Separador Descrição**:
- Nome: FitSite Growth
- Descrição: "Para ginásios estabelecidos prontos para aumentar a sua presença online e atrair novos membros."

**Separador Modelos de Site**:
- Modelos disponíveis: Studio Essential e Gym Pro

**Limitações**:
- Sites: 1
- Espaço em disco: 5 GB
- Domínio personalizado: Ativado

**Separador Plugins**:
- Tudo no Starter, mais:
- Plugin de reservas: Forçar Ativação
- Plugin de galeria: Forçar Ativação
- Funcionalidade de blog: Disponível

**Separador Upgrades e Downgrades**:
- Grupo de planos: FitSite Plans
- Ordem do produto: 2

### Plano 3: FitSite Pro -- $199/mês

**Alvo**: Cadeias de fitness com várias localizações

**Separador Descrição**:
- Nome: FitSite Pro
- Descrição: "A plataforma completa para marcas de fitness com várias localizações."

**Separador Modelos de Site**:
- Modelos disponíveis: Todos os três modelos

**Limitações**:
- Sites: 5 (um por localização)
- Espaço em disco: 20 GB
- Domínio personalizado: Ativado

**Separador Plugins**:
- Tudo no Growth, mais:
- Todos os plugins premium: Forçar Ativação

**Separador Upgrades e Downgrades**:
- Grupo de planos: FitSite Plans
- Ordem do produto: 3

## Configurar o Grupo de Planos

O grupo de planos garante que os clientes só podem fazer upgrade ou downgrade dentro da família de planos FitSite. No separador **Upgrades e Downgrades** de cada plano:

1. Defina o **Grupo de Planos** como "FitSite Plans" para todos os três planos
2. Defina a **Ordem do Produto** como 1 (Starter), 2 (Growth), 3 (Pro)

Isto cria um caminho de upgrade claro: Starter → Growth → Pro.

## Adicionar Order Bumps

Order bumps são produtos adicionais oferecidos durante o checkout. Para a FitSite, considere:

- **Pacote de Armazenamento Extra** ($19/mês) -- espaço em disco adicional de 5 GB
- **Suporte Prioritário** ($29/mês) -- tempos de resposta mais rápidos
- **Site Adicional** ($39/mês) -- para clientes que precisam de mais sites do que o plano permite

Crie estes como produtos do tipo **Pacote** no Ultimate Multisite e associe-os aos planos relevantes.

## Porque Esta Estrutura Funciona

- **Starter** remove barreiras à entrada -- preço baixo, oferta simples, coloca treinadores online rapidamente
- **Growth** adiciona as funcionalidades que os ginásios realmente pedem -- reservas, galerias, domínios personalizados
- **Pro** serve o segmento de alto valor que precisa de suporte para várias localizações
- **Order bumps** permitem que os clientes personalizem sem complicar os planos principais
- **Caminho de upgrade claro** significa que os clientes crescem consigo em vez de irem embora

## A Rede FitSite Até Agora

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## O Que Construímos Nesta Lição

- **Três níveis de planos** mapeados para segmentos reais de negócios de fitness
- **Restrição de funcionalidades** usando os controlos de plugin e modelos do Ultimate Multisite
- **Um grupo de planos** com um caminho de upgrade claro
- **Produtos de order bump** para receita adicional
- **Uma estrutura de preços** baseada no valor para o cliente, não em especificações técnicas

---

**Seguinte:** [Lição 6: A Experiência de Inscrição](lesson-6-checkout) -- vamos criar um fluxo de checkout que converte proprietários de estúdios de fitness em clientes pagantes.
