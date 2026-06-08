---
title: 'Lição 5: Projetando Seus Planos'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lição 5: Criando Seus Planos

Seus níveis de planos não são apenas níveis de preço — eles são um reflexo de como seus clientes de nicho realmente operam. Nesta lição, você irá criar níveis de produtos que correspondam às necessidades reais de negócios de fitness em diferentes estágios.

## Onde Paramos

O FitSite tem três modelos prontos (Studio Essential, Gym Pro, Fitness Chain). Agora, vamos criar os planos que determinam o que os clientes têm acesso e o que eles pagam.

## Pensando em Segmentos de Clientes

O erro que a maioria das pessoas comete é criar planos em torno de recursos técnicos (armazenamento, largura de banda, número de páginas). Seus clientes de nicho não pensam nesses termos. Um dono de academia pensa no que precisa para manter o negócio funcionando.

Para estúdios de fitness, existem três segmentos naturais:

| Segmento | Quem São | O Que Precisam |
|---------|-------------|----------------|
| **Instrutores solo / estúdios pequenos** | 1-3 funcionários, localização única, começando | Um site profissional, informações de aulas, formulário de contato |
| **Academias estabelecidas** | 5-20 funcionários, localização única, crescendo | Tudo acima mais agendamento, blog, galeria, domínio personalizado |
| **Redes de fitness** | Múltiplas localizações, marca estabelecida | Tudo acima mais multi-site, páginas de localização, diretório de funcionários |

Seus planos devem ser mapeados para esses segmentos, e não para pacotes de recursos arbitrários.

## Criando os Planos FitSite

Navegue até **Ultimate Multisite > Products > Add Product** para cada plano.

### Plano 1: FitSite Starter -- $49/mês

**Público-alvo**: Instrutores solo e estúdios pequenos

**Aba Descrição**:
- Nome: FitSite Starter
- Descrição: "Tudo que um personal trainer ou estúdio pequeno precisa para parecer profissional online."

**Aba Geral**:
- Tipo de produto: Plano
- Função do cliente: Administrador

**Aba Modelos de Site**:
- Permitir modelos de site: Ativado
- Modelos disponíveis: Apenas Studio Essential

**Limitações**:
- Sites: 1
- Espaço em disco: 1 GB
- Domínio personalizado: Desativado (usa `studioname.fitsite.com`)

**Aba Plugins**:
- Plugin de formulário de contato: Ativar Forçadamente
- Plugin de SEO: Ativar Forçadamente
- Plugin de agendamento: Não Disponível (incentivo de upgrade)

**Aba Temas**:
- Seu tema selecionado: Ativar Forçadamente
- Todos os outros temas: Oculto

### Plano 2: FitSite Growth -- $99/mês

**Público-alvo**: Academias estabelecidas de localização única

**Aba Descrição**:
- Nome: FitSite Growth
- Descrição: "Para academias estabelecidas prontas para expandir sua presença online e atrair novos membros."

**Aba Modelos de Site**:
- Modelos disponíveis: Studio Essential e Gym Pro

**Limitações**:
- Sites: 1
- Espaço em disco: 5 GB
- Domínio personalizado: Ativado

**Aba Plugins**:
- Tudo do Starter, mais:
- Plugin de agendamento: Ativar Forçadamente
- Plugin de galeria: Ativar Forçadamente
- Funcionalidade de blog: Disponível

**Aba Upgrade e Downgrade**:
- Grupo de planos: FitSite Plans
- Ordem do produto: 2

### Plano 3: FitSite Pro -- $199/mês

**Público-alvo**: Redes de fitness com múltiplas localizações

**Aba Descrição**:
- Nome: FitSite Pro
- Descrição: "A plataforma completa para marcas de fitness com múltiplas localizações."

**Aba Modelos de Site**:
- Modelos disponíveis: Os três modelos

**Limitações**:
- Sites: 5 (um por localização)
- Espaço em disco: 20 GB
- Domínio personalizado: Ativado

**Aba Plugins**:
- Tudo do Growth, mais:
- Todos os plugins premium: Ativar Forçadamente

**Aba Upgrade e Downgrade**:
- Grupo de planos: FitSite Plans
- Ordem do produto: 3

## Configurando o Grupo de Planos

O grupo de planos garante que os clientes só possam fazer upgrade ou downgrade dentro da família de planos FitSite. Em cada aba **Upgrade e Downgrade** do plano:

1. Defina o **Grupo de Planos** como "FitSite Plans" para os três planos.
2. Defina a **Ordem do Produto** como 1 (Starter), 2 (Growth), 3 (Pro).

Isso cria um caminho de upgrade claro: Starter → Growth → Pro.

## Adicionando Adicionais no Checkout (Order Bumps)

Adicionais no checkout são produtos complementares oferecidos durante o pagamento. Para o FitSite, considere:

- **Pacote de Armazenamento Extra** ($19/mês) — 5 GB adicionais de espaço em disco
- **Suporte Prioritário** ($29/mês) — tempos de resposta mais rápidos
- **Site Adicional** ($39/mês) — para clientes que precisam de mais sites do que o plano permite

Crie estes como produtos do tipo **Package** no Ultimate Multisite e associe-os aos planos relevantes.

## Por Que Esta Estrutura Funciona

- **Starter** remove barreiras de entrada — preço baixo, oferta simples, coloca os instrutores online rapidamente
- **Growth** adiciona os recursos que as academias realmente pedem — agendamento, galerias, domínios personalizados
- **Pro** atende o segmento de alto valor que precisa de suporte multi-localização
- **Adicionais no Checkout** permitem que os clientes personalizem sem complicar os planos principais
- **Caminho de upgrade claro** significa que os clientes crescem com você, em vez de irem embora

## A Rede FitSite Até Agora

```
FitSite Network
├── WordPress Multisite (modo de subdomínio)
├── Ultimate Multisite (configurado)
├── Hospedagem com SSL wildcard + mapeamento de domínio
├── Modelos de Site (Studio Essential, Gym Pro, Fitness Chain)
├── Produtos
│   ├── FitSite Starter ($49/mês) → modelo Studio Essential
│   ├── FitSite Growth ($99/mês) → modelos Studio Essential + Gym Pro
│   ├── FitSite Pro ($199/mês) → todos os modelos
│   └── Adicionais no Checkout (Extra Storage, Priority Support, Additional Site)
└── Pronto para configuração de checkout (próxima lição)
```

## O Que Construímos Nesta Lição

- **Três níveis de planos** mapeados para segmentos reais de negócios de fitness
- **Controle de recursos** usando os controles de plugin e modelo do Ultimate Multisite
- **Um grupo de planos** com um caminho de upgrade claro
- **Produtos adicionais no checkout** para receita extra
- **Uma estrutura de preços** baseada no valor para o cliente, e não em especificações técnicas

---

**Próximo:** [Lição 6: A Experiência de Cadastro](lesson-6-checkout) — construímos um fluxo de checkout que converte donos de estúdios de fitness em clientes pagantes.
