---
title: Migração para Modo de Terceiros
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migração para o Modo de Terceiros

O Superdav AI Agent v1.12.0 altera a forma como as habilidades de terceiros são gerenciadas. **O Modo de Terceiros agora é configurado por padrão como "auto"**, permitindo a integração nativa com a Abilities API do WordPress no WordPress 7.0+ sem a necessidade de configuração manual.

## O Que Mudou?

### Antes da v1.12.0

As habilidades de terceiros exigiam configuração manual:

- Era preciso habilitar explicitamente o "Modo de Terceiros"
- As habilidades eram carregadas de um registro personalizado
- A integração com a Abilities API do WordPress era opcional
- O modo legado era o padrão

### Após a v1.12.0

As habilidades de terceiros funcionam automaticamente:

- O Modo de Terceiros é configurado por padrão como "auto"
- As habilidades se integram nativamente com a Abilities API do WordPress
- Não é necessária configuração manual no WordPress 7.0+
- O modo legado ainda está disponível para versões mais antigas do WordPress

## Quem é Afetado?

### Instalações Novas (WordPress 7.0+)

**Nenhuma ação é necessária.** O Modo de Terceiros é definido automaticamente como "auto", e as habilidades funcionam prontas para uso.

### Instalações Existentes

**Suas configurações são preservadas.** Se você estava usando:

- **Modo Legado**: Você permanecerá no modo legado (sem alteração)
- **Modo de Terceiros Manual**: Você permanecerá no modo manual (sem alteração)
- **Modo Auto**: Você continua com o modo auto (sem alteração)

### Versões do WordPress Antes de 7.0

**O modo legado ainda está disponível.** Se você estiver usando WordPress 6.x ou anterior:

- O Modo de Terceiros é configurado por padrão como "legacy"
- Você pode habilitar o Modo de Terceiros manualmente, se desejar
- Atualize para o WordPress 7.0+ para usar a Abilities API nativa

## Entendendo os Modos

### Modo Auto (Novo Padrão)

**O Modo Auto** utiliza a integração nativa com a Abilities API do WordPress:

- As habilidades são registradas via hooks do WordPress
- Compatibilidade total com a Abilities API do WordPress 7.0+
- Descoberta automática de habilidades de terceiros
- Não é necessária configuração manual

**Quando usar**: WordPress 7.0+ com habilidades de terceiros

### Modo Manual

**O Modo Manual** exige configuração explícita:

- Você especifica quais habilidades de terceiros carregar
- Útil para testes ou carregamento seletivo de habilidades
- Requer a edição de arquivos de configuração
- Mais controle, mas mais configuração

**Quando usar**: Testes, carregamento seletivo de habilidades ou configurações personalizadas

### Modo Legado

**O Modo Legado** utiliza o sistema antigo de habilidades de terceiros:

- Registro de habilidades personalizado (não a Abilities API do WordPress)
- Compatível com versões mais antigas do WordPress
- Sem integração nativa com o WordPress
- Descontinuado, mas ainda suportado

**Quando usar**: WordPress 6.x ou anterior, ou quando você precisa de compatibilidade legada

## Verificando Seu Modo Atual

### Pelo Painel de Administração

1. Vá para **Painel do WordPress** → **Superdav AI Agent** → **Configurações**
2. Procure a configuração **Modo de Terceiros**
3. Você verá seu modo atual e opções para alterá-lo

### Pelo Código

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ou 'legacy'
```

## Alterando Seu Modo

### Mudar para o Modo Auto

Se você estiver no WordPress 7.0+ e quiser usar o modo auto:

1. Vá para **Superdav AI Agent** → **Configurações**
2. Encontre **Modo de Terceiros**
3. Selecione **Auto (WordPress Abilities API)**
4. Clique em **Salvar**

O Superdav AI Agent descobrirá e registrará automaticamente as habilidades de terceiros.

### Mudar para o Modo Manual

Se você quiser controlar manualmente quais habilidades carregar:

1. Vá para **Superdav AI Agent** → **Configurações**
2. Encontre **Modo de Terceiros**
3. Selecione **Manual**
4. Clique em **Salvar**
5. Edite seu arquivo de configuração para especificar quais habilidades carregar

### Mudar para o Modo Legado

Se você precisar de compatibilidade legada:

1. Vá para **Superdav AI Agent** → **Configurações**
2. Encontre **Modo de Terceiros**
3. Selecione **Legacy**
4. Clique em **Salvar**

## Benefícios do Modo Auto

### Descoberta Automática

As habilidades são descobertas automaticamente de:

- Plugins instalados
- Tema ativo
- Plugins obrigatórios (must-use)
- Plugins drop-in

Não é necessário registro manual.

### Integração Nativa

As habilidades se integram com a Abilities API do WordPress:

- Consistente com o núcleo do WordPress
- Funciona com o painel de administração do WordPress
- Compatível com outros plugins que usam a Abilities API
- À prova de futuro à medida que o WordPress evolui

### Gerenciamento Simplificado

- Sem arquivos de configuração para editar
- Sem registro manual de habilidades
- Os controles de Visibilidade de Habilidade funcionam automaticamente
- Os avisos do administrador alertam sobre habilidades não classificadas

### Melhor Desempenho

- As habilidades são armazenadas em cache
- Carregadas sob demanda (lazy-loaded)
- Otimizado para o WordPress 7.0+

## Caminho de Migração

### Se Você Está no WordPress 6.x

1. **Atualize para o WordPress 7.0+** (quando estiver pronto)
2. **Atualize o Superdav AI Agent** para v1.12.0+
3. **Mude o modo de terceiros para Auto** (opcional; o modo legado ainda funciona)
4. **Revise a visibilidade das habilidades** para garantir os controles de acesso adequados

### Se Você Está no WordPress 7.0+

1. **Atualize o Superdav AI Agent** para v1.12.0+
2. **Verifique se o Modo de Terceiros está definido como Auto** (ele deve estar por padrão)
3. **Revise a visibilidade das habilidades** para garantir os controles de acesso adequados
4. **Teste as habilidades de terceiros** para confirmar que funcionam

## Solução de Problemas

### As habilidades não estão carregando no modo auto

- Verifique se você está no WordPress 7.0+
- Verifique se o Modo de Terceiros está definido como "Auto"
- Verifique se o plugin que fornece a habilidade está ativo
- Verifique os logs de erro do WordPress em busca de erros de registro

### Eu quero manter o modo legado

- Vá para **Configurações** → **Modo de Terceiros**
- Selecione **Legacy**
- Clique em **Salvar**
- O modo legado continuará funcionando

### Minhas habilidades personalizadas não estão aparecendo

- Verifique se elas estão registradas via hooks do WordPress
- Verifique se elas implementam corretamente a Abilities API
- Revise os logs de erro do WordPress
- Use a página de administração **Visibilidade de Habilidade** para ver todas as habilidades registradas

### Estou recebendo avisos de "habilidade não classificada"

- Isso é normal para novas habilidades de terceiros
- Revise e classifique-as no aviso do administrador
- Veja **Visibilidade de Habilidade** para detalhes sobre a classificação

## Compatibilidade com Versões Anteriores

### Configurações Existentes

Se você tiver configurações de habilidades de terceiros existentes:

- **Modo Legado**: Sua configuração continua funcionando
- **Modo Manual**: Sua configuração continua funcionando
- **Modo Auto**: Sua configuração é ignorada (o modo auto assume o controle)

Para manter sua configuração personalizada, permaneça no modo Manual ou Legado.

### Cronograma de Descontinuação

- **v1.12.0**: Modos Legado e Manual ainda totalmente suportados
- **v1.13.0+**: O modo legado pode mostrar avisos de descontinuação
- **v2.0.0**: O modo legado pode ser removido (A definir)

## Melhores Práticas

### Para Instalações Novas

- Use o Modo Auto (é o padrão)
- Deixe o Superdav AI Agent descobrir as habilidades automaticamente
- Use Visibilidade de Habilidade para controlar o acesso

### Para Instalações Existentes

- Atualize para o WordPress 7.0+ sempre que possível
- Mude para o Modo Auto para um gerenciamento simplificado
- Revise e classifique as habilidades usando Visibilidade de Habilidade

### Para Habilidades Personalizadas

- Registre as habilidades via hooks do WordPress (Abilities API)
- Evite registros de habilidades personalizados
- Teste no WordPress 7.0+ com o Modo Auto

## Próximos Passos

1. **Verifique sua versão do WordPress**: Confirme se você está no 7.0+ para o Modo Auto
2. **Revise seu modo de terceiros**: Vá para Configurações e verifique seu modo atual
3. **Atualize, se necessário**: Mude para o Modo Auto se estiver no WordPress 7.0+
4. **Classifique as habilidades**: Revise e classifique quaisquer habilidades não classificadas
5. **Teste**: Verifique se suas habilidades de terceiros funcionam corretamente

## Tópicos Relacionados

- **Visibilidade de Habilidade**: Controle quais habilidades são expostas onde
- **WordPress Abilities API**: Saiba sobre o registro nativo de habilidades do WordPress
- **Desenvolvimento de Habilidades de Terceiros**: Crie habilidades que funcionam com o Modo Auto
