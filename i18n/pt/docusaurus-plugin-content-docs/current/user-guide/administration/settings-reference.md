---
title: Referência de Configurações
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referência de Configurações

Esta página rastreia as configurações que afetam a administração do dia a dia e as mudanças recentes no comportamento do Ultimate Multisite.

## Outras Opções

A área **Outras Opções** aparece sob **Ultimate Multisite > Configurações > Login & Registro**.

| Configuração | Descrição |
|---|---|
| **Habilitar Jumper** | Mostra a ferramenta de navegação rápida Jumper na área de administração. Use-a para pular diretamente para as telas do Ultimate Multisite, objetos de rede e destinos de administração suportados. Desabilite se não quiser que este atalho esteja visível. |

## Relatórios de erro e telemetria

A configuração anterior de inscrição opcional de relatórios de erro foi removida da página de configurações. A telemetria anônima está desativada e não há um controle na interface para ativá-la.

Se você mantém manuais internos ou capturas de tela para a página de configurações, remova referências ao antigo campo de inscrição opcional de relatórios de erro para que os administradores não procurem uma configuração que não existe mais.

## Configurações de Importação/Exportação

A aba **Importação/Exportação** descreve quais configurações ela controla e tem um link direto para **Ultimate Multisite > Exportação de Site** para arquivos de site e rede. Use a aba de configurações para a configuração de importação/exportação, use **Ferramentas > Exportar e Importar** para o fluxo de trabalho de exportação/importação de site único, e use a ferramenta Exportação de Site quando precisar de um arquivo de backup completo da Rede Exportado.

## Configurações do conector de provedor de IA

As configurações do conector de provedor de IA agora expõem apenas os pools de conta OAuth suportados:

| Provider | Fluxo de configuração |
|---|---|
| **Anthropic Max** | Conecte uma ou mais contas Anthropic Max usando o botão OAuth. Use o fallback manual do OAuth quando um navegador sandbox não conseguir completar o redirecionamento automaticamente. |
| **OpenAI ChatGPT/Codex** | Conecte as contas do ChatGPT através do mesmo fluxo de trabalho de pool OAuth. Operações suportadas pelo conector podem usar chamadas de ferramenta do ChatGPT Codex após a conexão da conta. |
| **Google AI Pro** | Conecte as contas Google AI Pro através do OAuth e, em seguida, atualize o conector se a lista de contas não for atualizada imediatamente. |

O Cursor Pro não é mais um provedor suportado. Remova capturas de tela internas antigas, runbooks ou etapas de integração que mencionem campos de configuração ou caminhos de conector do Cursor Pro.

Ao adicionar ou remover contas de provedores, insira um endereço de e-mail válido para a conta que está sendo atualizada ou excluída e salve as configurações do provedor antes de testar operações com suporte de conector.
