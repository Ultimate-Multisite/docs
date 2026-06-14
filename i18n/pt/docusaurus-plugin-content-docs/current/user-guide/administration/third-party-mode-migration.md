---
title: Migração do Modo de Terceiros
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migração para o Modo de Terceiros

O Superdav AI Agent v1.12.0 muda a forma como as habilidades de terceiros são tratadas. **O modo de terceiros agora é definido como automático por padrão**, permitindo a integração nativa com a WordPress Abilities API no WordPress 7.0+ sem configuração manual.

## O Que Mudou?

### Antes da v1.12.0

As habilidades de terceiros exigiam configuração manual:

- Você tinha que habilitar explicitamente o "modo de terceiros"
- As habilidades eram carregadas de um registro personalizado
- A integração com a WordPress Abilities API era opcional
- O modo legado era o padrão

### Depois da v1.12.0

As habilidades de terceiros funcionam automaticamente:

- O modo de terceiros é definido como "auto" por padrão
- As habilidades se integram nativamente à WordPress Abilities API
- Não é necessária configuração manual no WordPress 7.0+
- O modo legado ainda está disponível para versões mais antigas do WordPress

## Quem Será Afetado?

### Novas Instalações (WordPress 7.0+)

**Nenhuma ação necessária.** O modo de terceiros é definido automaticamente como "auto", e as habilidades funcionam sem necessidade de configuração.

### Instalações Existentes

**Suas configurações são preservadas.** Se você estava usando:

- **Modo legado**: Você permanece no modo legado (sem alteração)
- **Modo de terceiros manual**: Você permanece no modo manual (sem alteração)
- **Modo automático**: Você continua com o modo automático (sem alteração)

### Versões do WordPress Antes da 7.0

**O modo legado ainda está disponível.** Se você estiver no WordPress 6.x ou anterior:

- O modo de terceiros é definido como "legacy" por padrão
- Você pode habilitar manualmente o modo de terceiros se desejar
- Atualize para o WordPress 7.0+ para usar a Abilities API nativa

## Entendendo os Modos

### Modo Automático (Novo Padrão)

**O modo automático** usa a integração nativa com a WordPress Abilities API:

- As habilidades são registradas através de hooks do WordPress
- Compatibilidade total com a Abilities API do WordPress 7.0+
- Descoberta automática de habilidades de terceiros
- Não é necessária configuração manual

**Quando usar**: WordPress 7.0+ com capacidades de terceiros

### Modo Manual

O **modo manual** exige configuração explícita:

- Você especifica quais capacidades de terceiros carregar
- Útil para testes ou carregamento seletivo de capacidades
- Requer a edição de arquivos de configuração
- Oferece mais controle, mas requer mais configuração

**Quando usar**: Testes, carregamento seletivo de capacidades ou configurações personalizadas

### Modo Legado

O **modo legado** usa o antigo sistema de capacidade de terceiros:

- Registro de capacidade personalizado (não a API de Capacidades do WordPress)
- Compatível com versões mais antigas do WordPress
- Sem integração nativa com o WordPress
- Obsoleto, mas ainda suportado

**Quando usar**: WordPress 6.x ou anterior, ou quando você precisar de compatibilidade legada

## Verificando Seu Modo Atual

### Via Painel de Administração

1. Vá para **Administração do WordPress** → **Superdav AI Agent** → **Configurações**
2. Procure a configuração **Modo de Terceiros (Third-Party Mode)**
3. Você verá seu modo atual e opções para alterá-lo

### Via Código

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ou 'legacy'
```

## Alterando Seu Modo

### Mudar para Modo Automático (Auto Mode)

Se você estiver no WordPress 7.0+ e quiser usar o modo automático:

1. Vá para **Superdav AI Agent** → **Configurações**
2. Encontre **Modo de Terceiros (Third-Party Mode)**
3. Selecione **Automático (WordPress Abilities API)**
4. Clique em **Salvar**

O Superdav AI Agent descobrirá e registrará automaticamente as capacidades de terceiros.

### Mudar para Modo Manual

Se você quiser controlar manualmente quais capacidades são carregadas:

1. Vá para **Superdav AI Agent** → **Configurações**
2. Encontre **Modo de Terceiros (Third-Party Mode)**
3. Selecione **Manual**
4. Clique em **Salvar**
5. Edite seu arquivo de configuração para especificar quais capacidades carregar

### Mudar para Modo Legado

Se você precisar de compatibilidade legada:

1. Vá para **Superdav AI Agent** → **Configurações**
2. Encontre **Modo de Terceiros (Third-Party Mode)**
3. Selecione **Legado (Legacy)**
4. Clique em **Salvar**

## Benefícios do Modo Automático (Auto Mode)

### Descoberta Automática

As habilidades são descobertas automaticamente a partir de:

- Plugins instalados
- Tema ativo
- Plugins obrigatórios (Must-use plugins)
- Plugins drop-in

Não é necessário registro manual.

### Integração Nativa

As habilidades se integram à Abilities API do WordPress:

- Consistente com o núcleo do WordPress
- Funciona com o painel de administração do WordPress
- Compatível com outros plugins que usam a Abilities API
- À prova de futuro conforme o WordPress evolui

### Gerenciamento Simplificado

- Sem arquivos de configuração para editar
- Sem registro manual de habilidades
- Os controles de visibilidade das habilidades funcionam automaticamente
- Avisos do administrador alertam sobre habilidades não classificadas

### Melhor Desempenho

- As habilidades são armazenadas em cache (cached)
- Carregamento preguiçoso (lazy-loaded) sob demanda
- Otimizado para WordPress 7.0+

## Caminho de Migração

### Se Você Está no WordPress 6.x

1. **Atualize para o WordPress 7.0+** (quando estiver pronto)
2. **Atualize o Superdav AI Agent** para a versão v1.12.0+
3. **Mude o modo de terceiros para Auto** (opcional; o modo legado ainda funciona)
4. **Revise a visibilidade das habilidades** para garantir os controles de acesso corretos

### Se Você Está no WordPress 7.0+

1. **Atualize o Superdav AI Agent** para a versão v1.12.0+
2. **Verifique se o modo de terceiros está definido como Auto** (deve estar por padrão)
3. **Revise a visibilidade das habilidades** para garantir os controles de acesso corretos
4. **Teste as habilidades de terceiros** para confirmar que estão funcionando

## Solução de Problemas (Troubleshooting)

### As habilidades não estão carregando no modo automático

- Verifique se você está no WordPress 7.0+
- Confirme se o modo de terceiros está definido como "Auto"
- Verifique se o plugin que fornece a habilidade está ativo
- Verifique os logs de erro do WordPress em busca de erros de registro

### Eu quero manter o modo legado

- Vá para **Configurações** → **Modo de Terceiros (Third-Party Mode)**
- Selecione **Legado (Legacy)**
- Clique em **Salvar**
- O modo legado continuará funcionando

### Minhas habilidades personalizadas não estão aparecendo

- Verifique se elas estão registradas através dos hooks do WordPress
- Confirme se elas implementam a Abilities API corretamente
- Revise os logs de erro do WordPress
- Use a página de administração **Ability Visibility** para ver todas as habilidades registradas

### Estou recebendo avisos de "habilidade não classificada"

- Isso é normal para novas habilidades de terceiros
- Revise e classifique-as na notificação da administração
- Veja **Ability Visibility** para detalhes sobre a classificação

## Compatibilidade com Versões Anteriores (Backward Compatibility)

### Configurações Existentes

Se você tiver configurações de habilidade de terceiros existentes:

- **Modo Legado (Legacy mode)**: Sua configuração continua funcionando.
- **Modo Manual (Manual mode)**: Sua configuração continua funcionando.
- **Modo Automático (Auto mode)**: Sua configuração é ignorada (o modo automático assume o controle).

Para manter sua configuração personalizada, permaneça no modo Manual ou Legado.

### Linha do Tempo de Descontinuação (Deprecation Timeline)

- **v1.12.0**: Os modos Legado e Manual ainda são totalmente suportados.
- **v1.13.0+**: O modo Legado pode começar a mostrar avisos de descontinuação.
- **v2.0.0**: O modo Legado poderá ser removido (a definir).

## Melhores Práticas (Best Practices)

### Para Novas Instalações

- Use o Modo Automático (é o padrão).
- Deixe o Superdav AI Agent descobrir as habilidades automaticamente.
- Use a Ability Visibility para controlar o acesso.

### Para Instalações Existentes

- Atualize para WordPress 7.0+ sempre que possível.
- Mude para o Modo Automático para uma gestão simplificada.
- Revise e classifique as habilidades usando a Ability Visibility.

### Para Habilidades Personalizadas

- Registre as habilidades através dos hooks do WordPress (Abilities API).
- Evite registros de habilidade personalizados.
- Teste no WordPress 7.0+ com o Modo Automático.

## Próximos Passos

1. **Verifique sua versão do WordPress**: Confirme se você está na 7.0+ para o modo Automático (Auto mode).
2. **Revise seu modo de terceiros**: Vá em Configurações e verifique seu modo atual.
3. **Atualize se necessário**: Mude para o modo Automático se você estiver no WordPress 7.0+.
4. **Classifique as habilidades**: Revise e classifique quaisquer habilidades não classificadas.
5. **Teste**: Verifique se suas habilidades de terceiros estão funcionando corretamente.

## Tópicos Relacionados

- **Visibilidade das Habilidades (Ability Visibility)**: Controle quais habilidades são expostas onde.
- **API de Habilidades do WordPress (WordPress Abilities API)**: Aprenda sobre o registro nativo de habilidades do WordPress.
- **Desenvolvimento de Habilidade de Terceiros (Third-Party Ability Development)**: Crie habilidades que funcionam com o modo Automático.
