---
title: Aviso de Remoção do Modo Construtor de Sites
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Aviso de Remoção do Modo Construtor de Sites

**O modo Construtor de Sites foi removido no Superdav AI Agent v1.12.0.** Se você estava usando o modo Construtor de Sites, deve migrar para o **Setup Assistant agent** para criação de temas e configuração de sites.

## O Que Aconteceu?

### Modo Construtor de Sites (Legado)

O modo Construtor de Sites era uma interface baseada em assistente (wizard) para:

- Criar sites a partir de templates
- Configurar configurações básicas
- Escolher um tema
- Configurar o conteúdo inicial

### O Que Substituiu?

O **Setup Assistant agent** agora cuida de toda a funcionalidade do Construtor de Sites com:

- Configuração mais flexível, guiada pelo agente
- Melhores opções de personalização de temas
- Integração com o onboarding do Theme Builder
- Memória persistente `site_brief` para sessões futuras

## Se Você Estava Usando o Modo Construtor de Sites

### Seus Sites Estão Seguros

- Os sites existentes criados com o modo Construtor de Sites continuam funcionando
- Sem perda de dados ou interrupção do site
- Você pode continuar gerenciando seus sites normalmente

### Migre para o Setup Assistant Agent

Para novas configurações de site ou alterações de tema, use o Setup Assistant agent:

```
"Ajude-me a configurar um novo site"
```

ou

```
"Iniciar o onboarding do Theme Builder"
```

O Setup Assistant agent oferece a mesma funcionalidade com mais flexibilidade.

## Comparação: Construtor de Sites vs. Setup Assistant

| Recurso | Construtor de Sites (Removido) | Setup Assistant (Novo) |
|---------|----------------------|----------------------|
| Método de Configuração | Formulário Wizard | Conversa com o Agente |
| Seleção de Tema | Templates pré-definidos | Geração personalizada |
| Personalização | Opções limitadas | Sistema de design completo |
| Site brief | Não armazenado | Memória persistente |
| Sessões Futuras | Configuração repetida | Uso do site_brief armazenado |
| Flexibilidade | Fluxo fixo | Conversa adaptativa |

## Migrando para o Setup Assistant Agent

### Para Novos Sites

Em vez de usar o modo Construtor de Sites:

1. Solicitação: "Ajude-me a configurar um novo site"
2. O agente Assistente de Configuração irá guiá-lo através de:
   - Propósito e objetivos do site
   - Público-alvo
   - Identidade da marca
   - Geração de tema
   - Configuração inicial

### Para Sites Existentes

Se você tem um site existente criado no modo Construtor de Sites:

1. Você pode continuar usando-o como está
2. Para atualizar o tema, solicite: "Redesenhe meu site"
3. O agente Assistente de Configuração irá ajudá você a criar um novo tema
4. Os dados do seu site permanecem inalterados

### Para Alterações de Tema

Em vez da seleção de tema do modo Construtor de Sites:

1. Solicitação: "Mude meu tema"
2. O agente Assistente de Configuração irá:
   - Perguntar sobre suas preferências de design
   - Gerar um tema personalizado
   - Ativá-lo no seu site

## Principais Diferenças

### Modo Construtor de Sites (Site Builder Mode)

```
1. Escolha um template
2. Selecione um tema
3. Configure as configurações básicas
4. Pronto
```

### Agente Assistente de Configuração (Setup Assistant Agent)

```
1. Descreva o propósito do seu site
2. Defina seu público-alvo
3. Escolha suas preferências de design
4. O agente gera um tema personalizado
5. O agente ativa o tema
6. Resumo do site armazenado para sessões futuras
```

## Benefícios do Agente Assistente de Configuração

### Mais Flexível

- Descreva seu site em linguagem natural
- Obtenha recomendações personalizadas
- Adapte-se às suas necessidades específicas

### Melhor Personalização

- Geração de tema personalizado
- Decisões do sistema de design
- Tokens de design persistentes

### Memória Persistente

- Seu `site_brief` é armazenado
- Agentes futuros entendem seu site
- Não é necessário repetir as informações de configuração

### Fluxo de Trabalho Integrado

- Onboarding do Construtor de Temas (Theme Builder)
- Habilidade Estética do Sistema de Design
- Capacidade de Controles de Visibilidade
- Tudo trabalha em conjunto perfeitamente

## Solução de Problemas

### Não consigo encontrar o Modo Construtor de Sites

O modo Construtor de Sites foi removido. Use o agente Assistente de Configuração em vez disso:

"Ajude-me a configurar um novo site"

### Quero recriar um site do Site Builder

Você pode recriá-lo com o agente Assistente de Configuração (Setup Assistant agent):

1. Solicitação: "Ajude-me a configurar um novo site"
2. Descreva o propósito e o design do seu site original
3. O agente gerará um tema semelhante
4. Seu `site_brief` será armazenado para referência futura

### Meu site existente com Site Builder não está funcionando

Sites criados com o modo Site Builder continuam funcionando. Se você estiver enfrentando problemas:

1. Verifique se seu tema ainda está ativo
2. Verifique se seus plugins estão habilitados
3. Verifique os logs de erro do WordPress
4. Entre em contato com o suporte se os problemas persistirem

### Ainda posso usar meus antigos templates do Site Builder?

Os templates do Site Builder não estão mais disponíveis. No entanto:

- Seus sites existentes continuam funcionando
- Você pode recriar sites semelhantes com o agente Assistente de Configuração (Setup Assistant agent)
- O agente Assistente de Configuração oferece mais opções de personalização

## Próximos Passos

1. **Para novos sites**: Use o agente Assistente de Configuração (Setup Assistant agent)
2. **Para sites existentes**: Continue usando-os como estão
3. **Para alterações de tema**: Solicite ajuda ao agente Assistente de Configuração (Setup Assistant agent)
4. **Para refinamento do design**: Use a habilidade Estética do Sistema de Design (Design System Aesthetics skill)

## Tópicos Relacionados

- **Onboarding do Theme Builder**: Configuração guiada para temas personalizados
- **Agente Assistente de Configuração (Setup Assistant Agent)**: Configuração de site guiada pelo agente
- **Habilidade Especificação do Site (Site Specification Skill)**: Defina os objetivos e o público do seu site
- **Habilidade Estética do Sistema de Design (Design System Aesthetics Skill)**: Refine a identidade visual do seu site
