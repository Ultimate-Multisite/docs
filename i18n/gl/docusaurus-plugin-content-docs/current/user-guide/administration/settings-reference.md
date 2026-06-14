---
title: Referencia de configuración
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referencia de Configuración

Esta páxina dá conta as configuración que afetan a administración do día a día e as últimas moitas cambios no comportamento do Ultimate Multisite.

## Outras Opcións

A área **Outras Opcións** aparece debaixo de **Ultimate Multisite > Settings > Login & Registration**.

| Configuración | Descripción |
|---|---|
| **Enable Jumper** | Mostra a ferramenta de navegación rápida Jumper na área administrativa. Usa-a para saltar directamente para as pantallas do Ultimate Multisite, os objetos da rede e os destinos administrativos soportados. Desativa se non que que queres esta atalho visible. |

## Relatório de erros e telemetría

A configuración anterior de opt-in para relatório de erros foi removida da páxina de configuración. A telemetría anónima está desativada e non há un interruptor na interfaz para activala.

Se manténs runbooks internos ou capturas de pantalla para a páxina de configuración, remove referencias ao campo antigo de opt-in de relatório de erros para que os administradores non busquen unha configuración que ya non existe.

## Configuración de Importación/Exportación

A pestaña **Import/Export** describe que configuración controla e enlaza directamente co **Ultimate Multisite > Site Export** para archives de sitios e rede. Usa a pestaña de configuración para a configuración de importación/exportación, usa **Tools > Export & Import** para o flujo de traballo de exportación/importación de sitio único, e usa a ferramenta Site Export no momento en que precisas dunha archive completa de Exportación de Rede.

## Configuración dos conectores de proveedor de IA

As configuración dos conectores de proveedor de IA agora expoñen só as pools de conta OAuth soportadas:

| Proveitor | Fluxo de configuração |
|---|---|
| **Anthropic Max** | Conecte uma ou mais contas Anthropic Max com o botão OAuth. Use o fallback manual do OAuth quando um navegador sandbox não conseguir completar o redirecionamento automaticamente. |
| **OpenAI ChatGPT/Codex** | Conecte as contas do ChatGPT através do mesmo fluxo de trabalho de pool OAuth. Operações suportadas pelo conector podem usar chamadas de ferramenta do ChatGPT Codex depois que a conta for conectada. |
| **Google AI Pro** | Conecte as contas Google AI Pro através do OAuth, e depois atualize o conector se a lista de contas não for atualizada imediatamente. |

O Cursor Pro não é mais um provedor suportado. Remova capturas de tela internas antigas, runbooks ou passos de integração que mencionem campos de configuração ou caminhos de conector do Cursor Pro.

Ao adicionar ou remover contas de provedor, insira um endereço de e-mail válido para a conta que está sendo atualizada ou excluída e salve as configurações do provedor antes de testar operações com suporte de conector.
