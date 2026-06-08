---
title: Construtor e Sandbox de Plugins
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

O Gratis AI Agent v1.5.0 apresenta o **Plugin Builder & Sandbox System**, que permite ao assistente de IA gerar, ativar e gerenciar plugins do WordPress na sua rede — tudo através de um ambiente sandbox seguro e isolado.

## Visão Geral

O Plugin Builder permite que o assistente de IA escreva plugins personalizados do WordPress em resposta a solicitações em linguagem natural. Os plugins gerados são validados, armazenados e ativados dentro de uma camada sandbox antes de afetarem qualquer funcionalidade do site em produção.

Os casos de uso incluem:

- Gerar plugins utilitários leves sem a necessidade de envolvimento de desenvolvedores.
- Criar protótipos de recursos que exigem hooks do WordPress ou tipos de postagem personalizados.
- Criar scripts de automação de curta duração para operações em lote.

## Gerando um Plugin via IA

Para gerar um plugin, abra a interface de chat do Gratis AI Agent e descreva o que você precisa. Por exemplo:

> "Crie um plugin que adicione um aviso personalizado no painel de administração."

A IA irá:

1. Produzir o código PHP do plugin usando geração de código estruturada.
2. Validar a saída em busca de erros de sintaxe e padrões inseguros.
3. Salvar o plugin gerado no repositório sandbox.
4. Retornar uma confirmação com o *slug* do plugin e um botão **Activate in Sandbox** (Ativar no Sandbox).

Você pode refinar o resultado dando mais detalhes na mesma conversa antes de ativar.

## Ativação no Sandbox

Ativar um plugin gerado no sandbox é diferente de ativá-lo na rede principal (live network). O sandbox:

- Executa o plugin em um ambiente WordPress isolado (wp-env).
- Captura quaisquer erros, avisos ou conflitos de hooks do PHP.
- Relata o resultado da ativação de volta na interface de chat.

Para ativar um plugin no sandbox, clique no botão **Activate in Sandbox** na resposta da IA, ou use o comando de barra:

```
/activate-plugin <plugin-slug>
```

Uma mensagem de status confirma se a ativação foi bem-sucedida ou falhou. Em caso de falha, o log de erros é exibido no tópico de chat.

## Gerenciando Plugins Gerados

Os plugins gerados são listados em **Gratis AI Agent → Plugin Builder → Manage Plugins**. Nesta tela, você pode:

| Ação | Descrição |
|---|---|
| **View source** | Revisar o código PHP completo do plugin. |
| **Re-activate in sandbox** | Reexecutar a verificação de ativação no sandbox. |
| **Install on network** | Implantar o plugin na rede principal (requer confirmação manual). |
| **Update** | Fornecer uma nova versão via IA, substituindo o código existente. |
| **Delete** | Remover o plugin do repositório sandbox. Desativa-o de todos os sites primeiro. |

:::warning
**Install on network** implanta o plugin gerado no seu WordPress multisite ativo. Revise o código do plugin antes de prosseguir. O Gratis AI Agent solicitará confirmação antes de concluir uma instalação em produção.
:::

## Instalando um Plugin Gerado na Rede

Quando você estiver satisfeito com um plugin no sandbox, você pode instalá-lo na rede principal:

1. Vá para **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Clique em **Install on Network** ao lado do plugin que deseja implantar.
3. Confirme o diálogo. O plugin é instalado em `wp-content/plugins/` e ativado na rede.

Alternativamente, use o comando de barra na interface de chat:

```
/install-plugin <plugin-slug>
```

## Atualizações de Plugins

Para atualizar um plugin gerado, descreva a mudança para o assistente de IA em uma nova conversa:

> "Atualize o plugin dashboard-notice para mostrar o aviso apenas para administradores."

A IA gera uma nova versão, que aparece no sandbox junto com a versão atual. Você revisa o *diff* e confirma antes que a atualização seja aplicada.

## Integração HookScanner

O Plugin Builder usa um **HookScanner** integrado para analisar os hooks e filtros registrados por cada plugin gerado. A saída do HookScanner é mostrada na resposta do chat e inclui:

- Hooks de ação registrados (`add_action` calls).
- Hooks de filtro registrados (`add_filter` calls).
- Quaisquer hooks encontrados em dependências de plugins (ignora diretórios `vendor/` e `node_modules/`).

Isso ajuda você a entender o comportamento de um plugin antes de ativá-lo.

## Considerações de Segurança

- Os plugins gerados são armazenados separadamente dos plugins instalados manualmente e não são acessíveis pela tela padrão de gerenciamento de plugins do WordPress até que você os instale explicitamente na rede.
- O sandbox usa validação de caminho (*path validation*) para evitar travessia de diretório ao escrever arquivos de plugin.
- Plugins com chamadas de função perigosas (por exemplo, `eval`, `exec`, `system`) são sinalizados durante a validação e não serão ativados.
