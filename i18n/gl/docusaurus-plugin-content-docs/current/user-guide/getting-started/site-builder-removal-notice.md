---
title: Aviso de remoción do Modo de Constructor de Páxinas
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Aviso de Remoção do Modo Construtor de Sites

**O modo Construtor de Sites foi removido na Superdav AI Agent v1.12.0.** Se estavas a usar o modo Construtor de Sites, deves migrar para o **Setup Assistant agent** para criação de temas e configuração de sites.

## O Que Aconteceu? {#what-happened}

### Modo Construtor de Sites (Legado) {#site-builder-mode-legacy}

O modo Construtor de Sites era uma interface baseada em assistente (wizard) para:

- Criar sites a partir de templates
- Configurar definições básicas
- Escolher um tema
- Configurar o conteúdo inicial

### O Que Substituiu? {#what-replaced-it}

O **Setup Assistant agent** agora gere toda a funcionalidade do Construtor de Sites com:

- Configuração mais flexível, guiada pelo agente
- Melhores opções de personalização de temas
- Integração com o onboarding do Theme Builder
- Memória persistente `site_brief` para sessões futuras

## Se Estavas a Usar o Modo Construtor de Sites {#if-you-were-using-site-builder-mode}

### Os Teus Sites Estão Seguros {#your-sites-are-safe}

- Os sites existentes criados com o modo Construtor de Sites continuam a funcionar
- Sem perda de dados ou interrupção do site
- Podes continuar a gerir os teus sites normalmente

### Migrar para o Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Para nova configuração de sites ou alterações de tema, usa o Setup Assistant agent:

```
"Ajuda-me a configurar um novo site"
```

ou

```
"Iniciar o onboarding do Theme Builder"
```

O Setup Assistant agent oferece a mesma funcionalidade com mais flexibilidade.

## Comparação: Construtor de Sites vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Característica | Construtor de Sites (Removido) | Setup Assistant (Novo) |
|---------|----------------------|----------------------|
| Método de configuração | Formulário wizard | Conversa com agente |
| Seleção de tema | Templates pré-definidos | Geração personalizada |
| Personalização | Opções limitadas | Sistema de design completo |
| Site brief | Não é guardado | Memória persistente |
| Sessões futuras | Configuração repetida | Usar site_brief guardado |
| Flexibilidade | Fluxo fixo | Conversa adaptativa |

## Migrar para o Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Para Novos Sites {#for-new-sites}

Em vez de usar o modo Site Builder:

1. Pedido: "Ajuda-me a configurar um novo site"
2. O agente Assistente de Configuração irá guiá-lo através de:
   - Propósito e objetivos do site
   - Público-alvo
   - Identidade da marca
   - Geração de tema
   - Configuração inicial

### Para Sites Existentes {#for-existing-sites}

Se tiver um site existente a partir do modo Site Builder:

1. Pode continuar a usá-lo como está
2. Para atualizar o tema, peça: "Redesenhar o meu site"
3. O agente Assistente de Configuração irá ajudar a criar um novo tema
4. Os dados do seu site permanecem inalterados

### Para Alterações de Tema {#for-theme-changes}

Em vez da seleção de tema do modo Site Builder:

1. Pedido: "Mudar o meu tema"
2. O agente Assistente de Configuração irá:
   - Fazer perguntas sobre as suas preferências de design
   - Gerar um tema personalizado
   - Ativá-lo no seu site

## Diferenças Principais {#key-differences}

### Modo Site Builder {#site-builder-mode}

```
1. Escolher um template
2. Selecionar um tema
3. Configurar definições básicas
4. Pronto
```

### Agente Assistente de Configuração {#setup-assistant-agent}

```
1. Descrever o propósito do seu site
2. Definir o seu público-alvo
3. Escolher as preferências de design
4. O agente gera um tema personalizado
5. O agente ativa o tema
6. Resumo do site guardado para sessões futuras
```

## Benefícios do Agente Assistente de Configuração {#benefits-of-setup-assistant-agent}

### Mais Flexível {#more-flexible}

- Descreva o seu site em linguagem natural
- Obtenha recomendações personalizadas
- Adapte-se às suas necessidades específicas

### Melhor Personalização {#better-customization}

- Geração de tema personalizado
- Decisões do sistema de design
- Tokens de design persistentes

### Memória Persistente {#persistent-memory}

- O seu `site_brief` é guardado
- Agentes futuros entendem o seu site
- Não é preciso repetir as informações de configuração

### Fluxo de Trabalho Integrado {#integrated-workflow}

- Onboarding do Theme Builder
- Habilidade Estética do Sistema de Design
- Capacidade de Controlo de Visibilidade
- Tudo trabalha em conjunto sem problemas

## Resolução de Problemas {#troubleshooting}

### Não consigo encontrar o Modo Site Builder {#i-cant-find-site-builder-mode}

O modo Site Builder foi removido. Use o agente Assistente de Configuração em vez disso:

"Aide-me a configurar un novo sitio"

### Quero recriar um site a partir do Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Podes recriálo com o agente Setup Assistant:

1. Pedido: "Ajuda-me a configurar um novo site"
2. Descreve o propósito e o design do teu site original
3. O agente irá gerar um tema semelhante
4. O teu `site_brief` será guardado para referência futura

### O meu site existente no Site Builder não está a funcionar {#my-existing-site-builder-site-isnt-working}

Os sites existentes criados com o modo Site Builder continuam a funcionar. Se estás a ter problemas:

1. Verifica se o teu tema ainda está ativo
2. Confirma se os teus plugins estão ativados
3. Verifica os logs de erro do WordPress
4. Contacta o suporte se os problemas persistirem

### Ainda posso usar os meus antigos templates do Site Builder? {#can-i-still-use-my-old-site-builder-templates}

Os templates do Site Builder não estão mais disponíveis. No entanto:

- Os teus sites existentes continuam a funcionar
- Podes recriar sites semelhantes com o agente Setup Assistant
- O agente Setup Assistant oferece mais opções de personalização

## Próximos Passos {#next-steps}

1. **Para novos sites**: Usa o agente Setup Assistant
2. **Para sites existentes**: Continua a usá-los como estão
3. **Para alterações de tema**: Pede ajuda ao agente Setup Assistant
4. **Para refinar o design**: Usa a habilidade Design System Aesthetics

## Tópicos Relacionados {#related-topics}

- **Onboarding do Theme Builder**: Configuração guiada para temas personalizados
- **Agente Setup Assistant**: Configuração de site guiada pelo agente
- **Skill Site Specification**: Define os teus objetivos e público do site
- **Skill Design System Aesthetics**: Refina a identidade visual do teu site
