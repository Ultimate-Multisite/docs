---
title: Construtor de Plugins e Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

O Gratis AI Agent v1.5.0 introduce o **Plugin Builder & Sandbox System**, que permite ao asistente de IA crear, activar e gestionar plugins do WordPress na súa rede — todo a través dunha capa sandbox segura e aislada.

## Visión Geral {#overview}

O Plugin Builder permite que o asistente de IA escriba plugins personalizados do WordPress en resposta a solicitude natural. Os plugins generados son validados, almacenados e activados dentro dunha capa sandbox antes de afectar a toda a funcionalidade do sitio en vivo.

Os casos de uso incluín:

- Crear plugins utilitarios ligeros sen intervención de desenvolvedor.
- Prototipar características que requiran hooks do WordPress ou custom post types.
- Criar scripts de automatización de curta duración para operacións en lote.

## Generación dun Plugin mediante IA {#generating-a-plugin-via-ai}

Para generar un plugin, abre a interfaz de chat do Gratis AI Agent e describe o que necesitas. Por exemplo:

> "Crea un plugin que adicione unha notificación administrativa personalizada no dashboard."

A IA fará:

1. Produzir o código PHP do plugin utilizando generación de código estructurada.
2. Validar o resultado en busca de erros de sintaxe e patrones inseguros.
3. Salvar o plugin generado no almacén sandbox.
4. Devolver unha confirmación co slug do plugin e un botón **Activar no Sandbox**.

Podes refinar o resultado facendo seguimento na mesma conversación antes de activar.

## Activación no Sandbox {#sandbox-activation}

Activar un plugin generado no sandbox é distinto a activalo na rede en vivo. O sandbox:

- Executa o plugin nunha capa WordPress aislada (wp-env).
- Captura todos os erros, avisos ou conflitos de hooks PHP.
- Informa o resultado da activación de volta na interfaz de chat.

Para activar un plugin no sandbox, pulsa no botón **Activar no Sandbox** na resposta do chat da IA, ou utiliza o comando slash:

```
/activate-plugin <plugin-slug>
```

Unha mensaxe de estado confirma se a activación tivo sucesso ou falhou. En caso de falha, o log de erro é mostrado no hilo de chat.

## Gestionar Plugins Gerados {#managing-generated-plugins}

Os plugins gerados aparecen na sección **Gratis AI Agent → Plugin Builder → Manage Plugins**. Desta pantalla podes:

| Acción | Descripción |
|---|---|
| **View source** | Revisar o código PHP completo do plugin. |
| **Re-activate in sandbox** | Executar de novo a verificación de activación no sandbox. |
| **Install on network** | Desplegar o plugin na rede en vivo (requere confirmação manual). |
| **Update** | Proporcionar unha nova versión vía AI, substituíndo o código existente. |
| **Delete** | Remover o plugin do almacén do sandbox. Desactiva-o de todos os sitios primeiro. |

:::warning
**Install on network** despliega o plugin gerado na pulsa WordPress multisite en vivo. Revisa o código do plugin antes de continuar. O Gratis AI Agent pedirá confirmación antes de completar unha instalación en vivo.
:::

## Instalación de un Plugin Gerado na Rede {#installing-a-generated-plugin-on-the-network}

Cando esteas satisfeito co plugin no sandbox, podes instalalo na rede en vivo:

1. Ve a **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Clica en **Install on Network** ao lado do plugin que queres desplegar.
3. Confirma o diálogo. O plugin instalaráse en `wp-content/plugins/` e activará na rede.

Alternativamente, podes usar o comando de barra na interfaz de chat:

```
/install-plugin <plugin-slug>
```

## Actualización de Plugins {#plugin-updates}

Para actualizar un plugin gerado, describe a modificación ao asistente de AI nun novo conversation:

> "Actualiza o dashboard-notice plugin para que só mostre a notificación aos administradores."

A AI gera unha nova versión, que aparecerá no sandbox ao lado da versión actual. Revisas o diff e confirmas antes de aplicar a actualización.

## Integración HookScanner {#hookscanner-integration}

O Plugin Builder usa un **HookScanner** integrado para analizar os hooks e filtros que cada plugin generado registou. O resultado do HookScanner aparece na resposta do chat e inclui:

- Hooks de acción registados (`add_action` calls).
- Hooks de filtro registados (`add_filter` calls).
- Todos os hooks encontrados nas dependencias do plugin (ignora os directorios `vendor/` e `node_modules/`).

Isto ajuda ti a entender o comportamento dun plugin antes de activalo.

## Consideracións de Seguridade {#security-considerations}

- Os plugins generados son almacenados separadamente dos plugins instalados manualmente e non son accesibles vía screen de xestión de plugins estándar de WordPress ata que os instales explícitamente na rede.
- O sandbox usa validación de camiños para evitar a traversía de directorios ao escribir os arquivos do plugin.
- Os plugins con chamadas de función perigosas (por exemplo, `eval`, `exec`, `system`) son señalados durante a validación e non se activarán.
