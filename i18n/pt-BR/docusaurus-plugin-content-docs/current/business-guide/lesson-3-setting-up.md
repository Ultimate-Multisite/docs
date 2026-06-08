---
title: 'Lição 3: Configurando Sua Rede'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lição 3: Configurando Sua Rede

É hora de construir. Nesta lição, você instalará o Ultimate Multisite e configurará a base da rede FitSite. Cada decisão aqui é tomada pensando no nicho fitness.

## Onde Paramos

Escolhemos estúdios de fitness como nosso nicho e validamos a oportunidade. Agora, transformamos essa ideia em uma plataforma funcional.

## Escolhendo Sua Hospedagem

Sua escolha de hospedagem é mais importante para uma plataforma de nicho do que para um site único. Você não está hospedando um site — você está hospedando uma rede que crescerá para dezenas ou centenas de sites.

### O Que Procurar

- **Suporte a WordPress Multisite**: Nem todos os hosts lidam bem com multisite
- **SSL Wildcard**: Essencial para redes baseadas em subdomínios
- **Recursos Escaláveis**: Você precisa de espaço para crescer sem precisar migrar
- **Integração Ultimate Multisite**: Mapeamento automático de domínio e SSL economizam um esforço operacional significativo

### Abordagem Recomendada

Escolha um host da lista de [Provedores Compatíveis](/user-guide/host-integrations/closte). Eles foram testados com o Ultimate Multisite e fornecem as integrações que você precisa para mapeamento de domínio e automação de SSL.

Para o FitSite, usaremos uma configuração de subdomínio. Isso significa que os sites dos clientes aparecerão inicialmente como `nomedostudio.fitsite.com` antes que eles mapeiem seu próprio domínio, se desejarem.

## Instalando o WordPress Multisite

Se você ainda não tem uma instalação de WordPress Multisite:

1. Instale o WordPress no seu provedor de hospedagem
2. Siga o guia [Como Instalar o WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Escolha a configuração **subdomínio** quando solicitado

:::tip Por que Subdomínios?
Subdomínios dão a cada site do cliente um endereço distinto (`studio.fitsite.com`) em vez de um caminho (`fitsite.com/studio`). Isso é mais profissional para seus clientes e evita conflitos de permalink. Veja [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) para uma comparação detalhada.
:::

## Instalando o Ultimate Multisite

Siga o guia [Instalando o Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) para:

1. Fazer o upload e ativar o plugin em toda a rede
2. Executar o [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Durante o setup wizard, mantenha o nicho FitSite em mente:

- **Moeda**: Defina a moeda que seus clientes de estúdios de fitness usam
- **Nome da empresa**: "FitSite" (ou o nome de marca escolhido)
- **Logo da empresa**: Faça o upload do logo da sua marca — ele aparecerá em faturas e e-mails

## Configurando para o Nicho Fitness

Com o Ultimate Multisite instalado, faça estas escolhas de configuração específicas do nicho:

### Configurações Gerais

Navegue até **Ultimate Multisite > Settings** e configure:

- **Site name**: FitSite
- **Default role**: Administrator — os donos de estúdios de fitness precisam de controle total sobre o conteúdo do site
- **Registration**: Ative o registro de usuários para que os donos dos estúdios possam se cadastrar sozinhos

### Configuração de E-mail

Os e-mails do seu sistema devem falar a língua do seu nicho. Navegue até **Ultimate Multisite > Settings > Emails** e personalize:

- Substitua a linguagem genérica "seu novo site" por mensagens específicas de fitness
- Assunto de boas-vindas de exemplo: "Seu site de estúdio de fitness está pronto"
- Corpo de boas-vindas de exemplo: Faça referência ao estúdio, às aulas e a como começar com o site de fitness deles

Vamos refinar isso mais na Lição 8 (Onboarding do Cliente), mas definir o tom agora garante que até os primeiros cadastros de teste pareçam específicos do nicho.

### Configuração de Domínio

Se estiver usando um provedor de hospedagem compatível, configure o mapeamento de domínio agora:

1. Navegue até **Ultimate Multisite > Settings > Domain Mapping**
2. Siga o guia de integração para o seu host específico
3. Teste se os novos subsites recebem SSL automaticamente

Isso garante que, quando começarmos a criar templates e sites de teste na próxima lição, tudo funcione do início ao fim.

## A Rede FitSite Até Agora

Ao final desta lição, é isto que você tem:

```
Rede FitSite
├── WordPress Multisite (modo de subdomínio)
├── Ultimate Multisite (instalado e configurado)
├── Hospedagem com SSL wildcard
├── Mapeamento de domínio configurado
├── Templates de e-mail específicos do nicho (inicial)
└── Pronto para templates de site (próxima lição)
```

## O Que Construímos Nesta Lição

- **Uma instalação funcional de WordPress Multisite** em modo de subdomínio
- **Ultimate Multisite instalado** e configurado com a marca FitSite
- **Hospedagem e SSL** configurados para uma rede em crescimento
- **Mapeamento de domínio** configurado para o seu provedor de hospedagem
- **Tom de e-mail específico do nicho** estabelecido desde o primeiro dia

---

**Próximo:** [Lição 4: Construindo Templates de Nicho](lesson-4-templates) — criaremos templates de site que os donos de estúdios de fitness realmente vão querer usar.
