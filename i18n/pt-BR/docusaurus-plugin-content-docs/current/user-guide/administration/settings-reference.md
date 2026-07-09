---
title: Referência de configurações
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referência de configurações

Esta página acompanha configurações que afetam a administração diária e mudanças recentes de comportamento no Ultimate Multisite.

## Outras opções

A área **Outras opções** aparece em **Ultimate Multisite > Configurações > Login e cadastro**.

| Configuração | Descrição |
|---|---|
| **Enable Jumper** | Mostra a ferramenta de navegação rápida Jumper na área de administração. Use-a para ir diretamente para telas do Ultimate Multisite, objetos de rede e destinos de administração compatíveis. Desative-a se você não quiser que este atalho fique visível. |

## Relatório de erros e telemetria

A configuração anterior de adesão ao relatório de erros foi removida da página de configurações. A telemetria anônima está desativada e não há alternância na UI para ativá-la.

Se você mantém runbooks internos ou capturas de tela para a página de configurações, remova referências ao antigo campo de adesão ao relatório de erros para que os administradores não procurem uma configuração que não está mais presente.

## Configurações de importação/exportação

A aba de configurações **Importação/Exportação** descreve quais configurações ela controla e vincula diretamente a **Ultimate Multisite > Exportação de site** para arquivos de site e rede. Use a aba de configurações para configuração de importação/exportação, use **Ferramentas > Exportar e importar** para o fluxo de trabalho de exportação/importação de site único e use a ferramenta Site Export quando precisar de um arquivo completo de Network Export.

## Aviso de saldo do Domain Seller HostAfrica

Quando o addon Domain Seller está conectado à HostAfrica, os administradores de rede agora veem um aviso dispensável de saldo baixo quando o saldo da conta de revendedor está baixo demais para o processamento confiável de registro ou renovação de domínios.

Trate este aviso como um alerta operacional: recarregue o saldo de revendedor da HostAfrica antes de aceitar mais registros de domínios pagos e, em seguida, retorne às configurações do Domain Seller ou à tela de monitoramento de domínios para confirmar que registros e renovações podem continuar normalmente.

## Configurações do conector de provedor de AI

As configurações do conector de provedor de AI agora expõem apenas os pools de Account OAuth compatíveis:

| Provedor | Fluxo de configuração |
|---|---|
| **Anthropic Max** | Conecte uma ou mais Account Anthropic Max com o botão OAuth. Use o fallback manual de OAuth quando um navegador em sandbox não conseguir concluir o redirecionamento automaticamente. |
| **OpenAI ChatGPT/Codex** | Conecte Account ChatGPT por meio do mesmo fluxo de trabalho de pool OAuth. Operações compatíveis com o conector podem usar chamadas de ferramenta ChatGPT Codex depois que a Account estiver conectada. |
| **Google AI Pro** | Conecte Account Google AI Pro por meio de OAuth e, em seguida, atualize o conector se a lista de Account não for atualizada imediatamente. |

Cursor Pro não é mais um provedor compatível. Remova capturas de tela internas antigas, runbooks ou etapas de integração que mencionem campos de configuração ou caminhos de conector do Cursor Pro.

Ao adicionar ou remover Account de provedor, insira um endereço de e-mail válido para a Account que está sendo atualizada ou excluída e salve as configurações do provedor antes de testar operações apoiadas pelo conector.
