---
title: 'Lição 3: Configurar a sua rede'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lição 3: Configurar a Sua Rede

Hora de construir. Nesta lição, irá instalar Ultimate Multisite e configurar a base da rede FitSite. Cada decisão aqui é tomada tendo em mente o nicho de fitness.

## Onde Ficámos {#where-we-left-off}

Escolhemos estúdios de fitness como o nosso nicho e validámos a oportunidade. Agora vamos transformar essa ideia numa plataforma funcional.

## Escolher o Seu Alojamento {#choosing-your-hosting}

A escolha do seu alojamento é mais importante para uma plataforma de nicho do que para um único website. Não está a alojar um site -- está a alojar uma rede que crescerá para dezenas ou centenas de sites.

### O Que Procurar {#what-to-look-for}

- **Suporte para WordPress Multisite**: Nem todos os alojamentos lidam bem com multisite
- **SSL wildcard**: Essencial para redes baseadas em subdomínios
- **Recursos escaláveis**: Precisa de espaço para crescer sem migrar
- **Integração com Ultimate Multisite**: O mapeamento automatizado de domínios e SSL poupa um esforço operacional significativo

### Abordagem Recomendada {#recommended-approach}

Escolha um alojamento da lista de [Fornecedores Compatíveis](/user-guide/host-integrations/closte). Estes foram testados com Ultimate Multisite e fornecem as integrações de que precisa para mapeamento de domínios e automatização de SSL.

Para a FitSite, vamos usar uma configuração de subdomínio. Isto significa que os sites dos clientes aparecerão inicialmente como `studioname.fitsite.com` antes de, opcionalmente, mapearem o seu próprio domínio.

## Instalar WordPress Multisite {#installing-wordpress-multisite}

Se ainda não tiver uma instalação WordPress Multisite:

1. Instale WordPress no seu fornecedor de alojamento
2. Siga o guia [Como Instalar WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Escolha a configuração de **subdomínio** quando solicitado

:::tip Porquê Subdomínios?
Os subdomínios dão a cada site de cliente o seu próprio endereço distinto (`studio.fitsite.com`) em vez de um caminho (`fitsite.com/studio`). Isto é mais profissional para os seus clientes e evita conflitos de permalinks. Consulte [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) para uma comparação detalhada.
:::

## Instalar Ultimate Multisite {#installing-ultimate-multisite}

Siga o guia [Instalar Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) para:

1. Carregar e ativar o plugin em toda a rede
2. Executar o [Assistente de Configuração](/user-guide/getting-started/multisite-setup-wizard)

Durante o assistente de configuração, mantenha o nicho FitSite em mente:

- **Moeda**: Defina para a moeda que os seus clientes de estúdios de fitness usam
- **Nome da empresa**: "FitSite" (ou o nome da marca que escolheu)
- **Logótipo da empresa**: Carregue o logótipo da sua marca -- isto aparece em faturas e emails

## Configurar para o Nicho de Fitness {#configuring-for-the-fitness-niche}

Com Ultimate Multisite instalado, faça estas escolhas de configuração específicas do nicho:

### Definições Gerais {#general-settings}

Navegue para **Ultimate Multisite > Definições** e configure:

- **Nome do site**: FitSite
- **Função predefinida**: Administrador -- os proprietários de estúdios de fitness precisam de controlo total sobre o conteúdo do seu site
- **Registo**: Ative o registo de utilizadores para que os proprietários de estúdios possam inscrever-se por si próprios

### Configuração de Email {#email-configuration}

Os emails do seu sistema devem falar a linguagem do seu nicho. Navegue para **Ultimate Multisite > Definições > Emails** e personalize:

- Substitua linguagem genérica como "o seu novo site" por mensagens específicas de fitness
- Exemplo de assunto de boas-vindas: "O website do seu estúdio de fitness está pronto"
- Exemplo de corpo de boas-vindas: Faça referência ao estúdio, às aulas e a como começar com o site de fitness

Vamos refinar isto mais na Lição 8 (Integração de Clientes), mas definir o tom agora garante que até os primeiros registos de teste pareçam específicos do nicho.

### Configuração de Domínio {#domain-configuration}

Se estiver a usar um fornecedor de alojamento compatível, configure agora o mapeamento de domínios:

1. Navegue para **Ultimate Multisite > Definições > Mapeamento de Domínios**
2. Siga o guia de integração para o seu alojamento específico
3. Teste se os novos subsites recebem SSL automaticamente

Isto garante que, quando começarmos a criar modelos e sites de teste na próxima lição, tudo funciona de ponta a ponta.

## A Rede FitSite Até Agora {#the-fitsite-network-so-far}

No final desta lição, eis o que tem:

```
Rede FitSite
├── WordPress Multisite (modo de subdomínio)
├── Ultimate Multisite (instalado e configurado)
├── Alojamento com SSL wildcard
├── Mapeamento de domínios configurado
├── Modelos de email específicos do nicho (iniciais)
└── Pronto para modelos de sites (próxima lição)
```

## O Que Construímos Nesta Lição {#what-we-built-this-lesson}

- **Uma instalação WordPress Multisite funcional** em modo de subdomínio
- **Ultimate Multisite instalado** e configurado com a marca FitSite
- **Alojamento e SSL** configurados para uma rede em crescimento
- **Mapeamento de domínios** configurado para o seu fornecedor de alojamento
- **Tom de email específico do nicho** estabelecido desde o primeiro dia

---

**Seguinte:** [Lição 4: Criar Modelos de Nicho](lesson-4-templates) -- vamos criar modelos de sites que os proprietários de estúdios de fitness realmente vão querer usar.
