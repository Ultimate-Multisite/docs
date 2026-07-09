---
title: Referencia de axustes
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referencia de configuración

Esta páxina rexistra a configuración que afecta á administración diaria e aos cambios recentes de comportamento en Ultimate Multisite.

## Outras opcións

A área **Outras opcións** aparece en **Ultimate Multisite > Settings > Login & Registration**.

| Configuración | Descrición |
|---|---|
| **Activar Jumper** | Mostra a ferramenta de navegación rápida Jumper na área de administración. Úsaa para saltar directamente ás pantallas de Ultimate Multisite, obxectos de rede e destinos de administración compatibles. Desactívaa se non queres que este atallo estea visible. |

## Informes de erros e telemetría

A configuración anterior de consentimento para informes de erros foi eliminada da páxina de configuración. A telemetría anónima está desactivada e non hai ningún conmutador de UI para activala.

Se mantés manuais internos ou capturas de pantalla para a páxina de configuración, elimina as referencias ao antigo campo de consentimento para informes de erros para que os administradores non busquen unha configuración que xa non está presente.

## Configuración de importación/exportación

A lapela de configuración **Import/Export** describe que configuración controla e enlaza directamente con **Ultimate Multisite > Site Export** para arquivos de sitio e rede. Usa a lapela de configuración para a configuración de importación/exportación, usa **Tools > Export & Import** para o fluxo de traballo de exportación/importación dun só sitio, e usa a ferramenta Site Export cando necesites un arquivo completo de Network Export.

## Aviso de saldo de Domain Seller HostAfrica

Cando o addon Domain Seller está conectado a HostAfrica, os administradores de rede agora ven un aviso descartable de saldo baixo cando o saldo da conta de revendedor é demasiado baixo para un procesamento fiable de rexistros ou renovacións de dominios.

Trata este aviso como unha advertencia operativa: recarga o saldo de revendedor de HostAfrica antes de aceptar máis rexistros de dominios de pago, e logo volve á configuración de Domain Seller ou á pantalla de monitorización de dominios para confirmar que os rexistros e as renovacións poden continuar con normalidade.

## Configuración dos conectores de provedores de AI

A configuración dos conectores de provedores de AI agora mostra só os conxuntos de contas OAuth compatibles:

| Provedor | Fluxo de configuración |
|---|---|
| **Anthropic Max** | Conecta unha ou máis contas de Anthropic Max co botón OAuth. Usa a alternativa manual de OAuth cando un navegador illado non poida completar a redirección automaticamente. |
| **OpenAI ChatGPT/Codex** | Conecta contas de ChatGPT mediante o mesmo fluxo de traballo de conxunto OAuth. As operacións compatibles co conector poden usar chamadas de ferramenta de ChatGPT Codex despois de conectar a conta. |
| **Google AI Pro** | Conecta contas de Google AI Pro mediante OAuth e despois actualiza o conector se a lista de contas non se actualiza inmediatamente. |

Cursor Pro xa non é un provedor compatible. Elimina capturas de pantalla internas antigas, manuais ou pasos de incorporación que mencionen campos de configuración de Cursor Pro ou rutas de conector.

Ao engadir ou eliminar contas de provedor, introduce un enderezo de correo electrónico válido para a conta que se está actualizando ou eliminando e garda a configuración do provedor antes de probar operacións respaldadas polo conector.
