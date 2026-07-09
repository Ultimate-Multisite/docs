---
title: Construtor de Plugins e Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Construtor e Sandbox de Plugins {#plugin-builder--sandbox}

O Gratis AI Agent v1.5.0 introduz o **Sistema de Construtor e Sandbox de Plugins**, que permite ao assistente de IA gerar, ativar e gerenciar plugins do WordPress na sua rede — tudo isso através de um ambiente sandbox seguro e isolado.

## Visão Geral {#overview}

O Construtor de Plugins permite que o assistente de IA escreva plugins personalizados do WordPress em resposta a solicitações em linguagem natural. Os plugins gerados são validados, armazenados e ativados dentro de uma camada sandbox antes de afetarem qualquer funcionalidade no site ao vivo.

Casos de uso incluem:

- Gerar plugins utilitários leves sem envolvimento de desenvolvedores.
- Prototipar funcionalidades que exigem hooks do WordPress ou tipos de posts personalizados (custom post types).
- Criar scripts de automação de curta duração para operações em lote (batch operations).

## Gerando um Plugin via IA {#generating-a-plugin-via-ai}

Para gerar um plugin, abra a interface de chat do Gratis AI Agent e descreva o que você precisa. Por exemplo:

> "Crie um plugin que adicione uma notificação administrativa personalizada no dashboard."

A IA fará o seguinte:

1. Produzir o código PHP do plugin usando geração estruturada de código.
2. Validar a saída em busca de erros de sintaxe e padrões inseguros.
3. Salvar o plugin gerado na loja sandbox.
4. Retornar uma confirmação com o slug do plugin e um botão **Ativar no Sandbox**.

Você pode refinar o resultado fazendo perguntas adicionais na mesma conversa antes de ativar.

## Ativação no Sandbox {#sandbox-activation}

Ativar um plugin gerado no sandbox é diferente de ativá-lo na rede ao vivo. O sandbox:

- Executa o plugin em um ambiente WordPress isolado (wp-env).
- Captura quaisquer erros, avisos ou conflitos de hook do PHP.
- Relata o resultado da ativação de volta na interface de chat.

Para ativar um plugin no sandbox, clique no botão **Ativar no Sandbox** na resposta do chat da IA, ou use o comando slash:

```
/activate-plugin <plugin-slug>
```

Uma mensagem de status confirma se a ativação foi bem-sucedida ou falhou. Em caso de falha, o log de erro é exibido no tópico do chat.

## Gerenciando Plugins Gerados {#managing-generated-plugins}

Os plugins gerados estão listados em **Gratis AI Agent → Plugin Builder → Manage Plugins**. A partir desta tela, você pode:

| Ação | Descrição |
|---|---|
| **View source** (Visualizar código-fonte) | Revisar o código PHP completo do plugin. |
| **Re-activate in sandbox** (Reativar no sandbox) | Executar novamente a verificação de ativação no sandbox. |
| **Install on network** (Instalar na rede) | Implantar o plugin na sua rede WordPress ao vivo (requer confirmação manual). |
| **Update** (Atualizar) | Fornecer uma nova versão via IA, substituindo o código existente. |
| **Delete** (Excluir) | Remover o plugin do repositório do sandbox. Desativa-o em todos os sites primeiro. |

:::warning
A opção **Install on network** implanta o plugin gerado na sua rede WordPress multisite ao vivo. Revise o código do plugin antes de prosseguir. O Gratis AI Agent solicitará confirmação antes de concluir uma instalação ao vivo.
:::

## Instalando um Plugin Gerado na Rede {#installing-a-generated-plugin-on-the-network}

Quando estiver satisfeito com um plugin no sandbox, você pode instalá-lo na rede ao vivo:

1. Vá para **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Clique em **Install on Network** (Instalar na Rede) ao lado do plugin que deseja implantar.
3. Confirme o diálogo. O plugin será instalado em `wp-content/plugins/` e ativado na rede.

Alternativamente, use o comando de barra na interface de chat:

```
/install-plugin <plugin-slug>
```

## Atualizações de Plugins {#plugin-updates}

Para atualizar um plugin gerado, descreva a alteração ao assistente de IA em uma nova conversa:

> "Atualize o plugin dashboard-notice para mostrar apenas a notificação aos administradores."

A IA gera uma nova versão, que aparece no sandbox junto com a versão atual. Você revisa a diferença (diff) e confirma antes de aplicar a atualização.

## Integração com HookScanner {#hookscanner-integration}

O Plugin Builder usa um **HookScanner** integrado para analisar os hooks e filtros registrados por cada plugin gerado. A saída do HookScanner é mostrada na resposta do chat e inclui:

- Hooks de ação registrados (`add_action` calls).
- Hooks de filtro registrados (`add_filter` calls).
- Quaisquer hooks encontrados nas dependências do plugin (ignora os diretórios `vendor/` e `node_modules/`).

Isso ajuda você a entender o comportamento de um plugin antes de ativá-lo.

## Considerações de Segurança {#security-considerations}

- Os plugins gerados são armazenados separadamente dos plugins instalados manualmente e não são acessíveis pela tela padrão de gerenciamento de plugins do WordPress até que você os instale explicitamente na rede.
- O sandbox usa validação de caminho para evitar travessia de diretório ao escrever arquivos de plugin.
- Plugins com chamadas de função perigosas (ex: `eval`, `exec`, `system`) são sinalizados durante a validação e não serão ativados.
