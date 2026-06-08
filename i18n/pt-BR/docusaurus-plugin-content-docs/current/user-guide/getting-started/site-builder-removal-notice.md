---
title: Aviso de Remoção do Modo Construtor de Sites
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Aviso de Remoção do Modo Site Builder

**O Modo Site Builder foi removido na Superdav AI Agent v1.12.0.** Se você estava usando o Modo Site Builder, você deve migrar para o **agente Setup Assistant** para criação de temas e configuração do site.

## O que aconteceu?

### Modo Site Builder (Legado)

O Modo Site Builder era uma interface baseada em assistente (wizard) para:

- Criar sites a partir de modelos
- Configurar configurações básicas
- Escolher um tema
- Configurar conteúdo inicial

### O que o substituiu?

O **agente Setup Assistant** agora cuida de toda a funcionalidade do Site Builder com:

- Configuração guiada e mais flexível por agentes
- Melhores opções de personalização de temas
- Integração com o onboarding do Theme Builder
- Memória persistente de `site_brief` para sessões futuras

## Se você estava usando o Modo Site Builder

### Seus Sites Estão Seguros

- Sites existentes criados com o Modo Site Builder continuam funcionando
- Sem perda de dados ou interrupção do site
- Você pode continuar gerenciando seus sites normalmente

### Migre para o Agente Setup Assistant

Para configurar um site novo ou fazer alterações de tema, use o agente Setup Assistant:

```
"Help me set up a new site"
```

ou

```
"Start the Theme Builder onboarding"
```

O agente Setup Assistant oferece a mesma funcionalidade com mais flexibilidade.

## Comparação: Site Builder vs. Setup Assistant

| Recurso | Site Builder (Removido) | Setup Assistant (Novo) |
|---------|------------------------|----------------------|
| Método de configuração | Formulário assistente | Conversa com o agente |
| Seleção de tema | Modelos pré-definidos | Geração personalizada |
| Personalização | Opções limitadas | Sistema de design completo |
| Site brief | Não armazenado | Memória persistente |
| Sessões futuras | Configuração repetida | Uso do site_brief armazenado |
| Flexibilidade | Fluxo de trabalho fixo | Conversa adaptativa |

## Migrando para o Agente Setup Assistant

### Para Sites Novos

Em vez de usar o Modo Site Builder:

1. Solicite: "Help me set up a new site"
2. O agente Setup Assistant irá guiá-lo através de:
   - Propósito e objetivos do site
   - Público-alvo
   - Identidade da marca
   - Geração do tema
   - Configuração inicial

### Para Sites Existentes

Se você tem um site existente criado com o Modo Site Builder:

1. Você pode continuar usando-o como está
2. Para atualizar o tema, solicite: "Redesign my site"
3. O agente Setup Assistant irá ajudá-lo a criar um novo tema
4. Os dados do seu site permanecem inalterados

### Para Alterações de Tema

Em vez da seleção de tema do Modo Site Builder:

1. Solicite: "Change my theme"
2. O agente Setup Assistant irá:
   - Perguntar sobre suas preferências de design
   - Gerar um tema personalizado
   - Ativá-lo no seu site

## Diferenças Chave

### Modo Site Builder

```
1. Escolher um modelo
2. Selecionar um tema
3. Configurar configurações básicas
4. Pronto
```

### Agente Setup Assistant

```
1. Descrever o propósito do site
2. Definir o público-alvo
3. Escolher preferências de design
4. O agente gera um tema personalizado
5. O agente ativa o tema
6. site_brief armazenado para sessões futuras
```

## Benefícios do Agente Setup Assistant

### Mais Flexível

- Descreva seu site em linguagem natural
- Receba recomendações personalizadas
- Adapta-se às suas necessidades específicas

### Melhor Personalização

- Geração de temas personalizados
- Decisões do sistema de design
- Tokens de design persistentes

### Memória Persistente

- Seu `site_brief` é armazenado
- Agentes futuros entendem seu site
- Não é necessário repetir informações de configuração

### Fluxo de Trabalho Integrado

- Onboarding do Theme Builder
- Habilidade de Estética do Sistema de Design
- Controles de visibilidade de capacidade
- Tudo trabalhando em conjunto de forma contínua

## Solução de Problemas

### Não encontro o Modo Site Builder

O Modo Site Builder foi removido. Use o agente Setup Assistant em vez disso:

```
"Help me set up a new site"
```

### Quero recriar um site do Site Builder

Você pode recriá-lo com o agente Setup Assistant:

1. Solicite: "Help me set up a new site"
2. Descreva o propósito e o design do seu site original
3. O agente irá gerar um tema semelhante
4. Seu `site_brief` será armazenado para referência futura

### Meu site Site Builder existente não está funcionando

Sites existentes criados com o Modo Site Builder continuam funcionando. Se você estiver enfrentando problemas:

1. Verifique se o seu tema ainda está ativo
2. Verifique se seus plugins estão habilitados
3. Verifique os logs de erro do WordPress
4. Contate o suporte se os problemas persistirem

### Ainda posso usar meus antigos modelos Site Builder?

Os modelos Site Builder não estão mais disponíveis. No entanto:

- Seus sites existentes continuam funcionando
- Você pode recriar sites semelhantes com o agente Setup Assistant
- O agente Setup Assistant oferece mais opções de personalização

## Próximos Passos

1. **Para sites novos**: Use o agente Setup Assistant
2. **Para sites existentes**: Continue usando-os como estão
3. **Para alterações de tema**: Solicite ajuda do agente Setup Assistant
4. **Para refinamento de design**: Use a habilidade Design System Aesthetics

## Tópicos Relacionados

- **Theme Builder Onboarding**: Configuração guiada para temas personalizados
- **Setup Assistant Agent**: Configuração de site guiada por agente
- **Site Specification Skill**: Defina os objetivos e o público do seu site
- **Design System Aesthetics Skill**: Refine a identidade visual do seu site
