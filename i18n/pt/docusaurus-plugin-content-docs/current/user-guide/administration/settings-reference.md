---
title: Referência de definições
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referência de configurações {#settings-reference}

Esta página acompanha as configurações que afetam a administração diária e alterações recentes de comportamento no Ultimate Multisite.

## Outras opções {#other-options}

A área **Outras opções** aparece em **Ultimate Multisite > Configurações > Login e registo**.

| Configuração | Descrição |
|---|---|
| **Ativar Jumper** | Mostra a ferramenta de navegação rápida Jumper na área de administração. Use-a para saltar diretamente para ecrãs do Ultimate Multisite, objetos de rede e destinos de administração suportados. Desative-a se não quiser que este atalho esteja visível. |

## Relatórios de erros e telemetria {#error-reporting-and-telemetry}

A configuração anterior de adesão a relatórios de erros foi removida da página de configurações. A telemetria anónima está desativada e não há alternância na UI para a ativar.

Se mantém runbooks internos ou capturas de ecrã para a página de configurações, remova referências ao antigo campo de adesão a relatórios de erros para que os administradores não procurem uma configuração que já não está presente.

## Configurações de importação/exportação {#importexport-settings}

O separador de configurações **Importação/Exportação** descreve quais configurações controla e liga diretamente a **Ultimate Multisite > Exportação de site** para arquivos de site e de rede. Use o separador de configurações para a configuração de importação/exportação, use **Ferramentas > Exportar e Importar** para o fluxo de trabalho de exportação/importação de site único, e use a ferramenta Exportação de site quando precisar de um arquivo completo de Exportação de Rede.

## Aviso de saldo do Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Quando o addon Domain Seller está ligado à HostAfrica, os administradores de rede veem agora um aviso dispensável de saldo baixo quando o saldo da conta de revendedor é demasiado baixo para um processamento fiável de registos ou renovações de domínios.

Trate este aviso como um alerta operacional: carregue o saldo de revendedor da HostAfrica antes de aceitar mais registos de domínio pagos, depois regresse às configurações do Domain Seller ou ao ecrã de monitorização de domínios para confirmar que os registos e renovações podem continuar normalmente.

## Configurações do conector de fornecedor de AI {#ai-provider-connector-settings}

As configurações do conector de fornecedor de AI agora expõem apenas os pools de Account OAuth suportados:

| Fornecedor | Fluxo de configuração |
|---|---|
| **Anthropic Max** | Ligue uma ou mais Account Anthropic Max com o botão OAuth. Use a alternativa manual de OAuth quando um browser em sandbox não conseguir concluir o redirecionamento automaticamente. |
| **OpenAI ChatGPT/Codex** | Ligue Account ChatGPT através do mesmo fluxo de trabalho de pool OAuth. As operações suportadas pelo conector podem usar chamadas de ferramenta ChatGPT Codex depois de a Account estar ligada. |
| **Google AI Pro** | Ligue Account Google AI Pro através de OAuth, depois atualize o conector se a lista de Account não for atualizada imediatamente. |

Cursor Pro já não é um fornecedor suportado. Remova capturas de ecrã internas antigas, runbooks ou passos de onboarding que mencionem campos de configuração do Cursor Pro ou caminhos do conector.

Ao adicionar ou remover Account de fornecedor, introduza um endereço de email válido para a Account a ser atualizada ou eliminada e guarde as configurações do fornecedor antes de testar operações apoiadas pelo conector.
