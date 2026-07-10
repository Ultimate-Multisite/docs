---
title: Integración multiinquilino
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integración de multiarrendamento {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 cambia varios puntos de integración para arrendatarios soberanos, verificación de migración e automatización do ciclo de vida dos arrendatarios.

## Fluxo de arranque do arrendatario {#tenant-bootstrap-flow}

As integracións que crean ou modifican arrendatarios deben seguir esta orde:

1. Resolver o rexistro do arrendatario e o modelo de illamento.
2. Crear ou verificar o escritor da base de datos do arrendatario.
3. Arrancar o esquema do arrendatario.
4. Aprovisionar usuarios do arrendatario.
5. Rexistrar o enrutamento do arrendatario e as rutas do sistema de ficheiros.
6. Executar a verificación de migración antes de expoñer o arrendatario.

Non asumas que un arrendatario soberano pode reutilizar a conexión á base de datos da rede. Usa o rexistro de arrendatarios e as abstraccións de escritor proporcionadas polo addon.

## SSO e ganchos REST {#sso-and-rest-hooks}

O autologin de arrendatarios sen estado usa tokens de curta duración cunha declaración de propósito, protección contra repetición JTI, un límite de caducidade e fixación de orixe. As integracións que engaden botóns de inicio de sesión ou ligazóns de xestión remota deben xerar visitas ao arrendatario mediante o fluxo SSO compatible en lugar de construír directamente URLs de inicio de sesión do arrendatario.

Os eventos de auditoría da API do lado da rede e os resumos diarios están dispoñibles para pasarelas de arrendatarios soberanos. Usa eses rexistros ao depurar sistemas externos que chaman endpoints do ciclo de vida do arrendatario.

## URLs de accións de clientes soberanos {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 encamiña as accións de clientes de arrendatarios soberanos de volta ao sitio principal para fluxos de Account, checkout, facturación, factura, sitio, cambio de modelo e mapeamento de dominio. As integracións que renderizan ligazóns de xestión do lado do arrendatario deben apuntar esas accións ao panel de cliente do sitio principal e incluír un destino de retorno validado cando o usuario deba poder navegar de volta ao arrendatario despois de completar a acción.

Usa o envoltorio SSO principal para ligazóns de xestión entre dominios:

```php
$url = wu_with_sso($main_site_customer_url);
```

A URL xerada segue sendo filtrable mediante `wu_sso_url`, que recibe a URL SSO, o usuario actual, o ID do sitio de destino e o contexto de redirección. Os add-ons poden usar ese filtro para engadir contexto específico do provedor ou para substituír a URL do broker mantendo a validación de tokens de Ultimate Multisite.

Non dupliques o estado de membership, factura, enderezo de facturación, modelo nin xestión de dominios dentro do arrendatario soberano. Trata o panel do arrendatario como o lanzador e o panel de cliente do sitio principal como o sistema de rexistro para as accións xestionadas.

## Verificación de migración {#migration-verification}

Despois de que unha migración ou integración de ciclo de vida cambie datos do arrendatario, executa as portas de verificación:

- `wp tenant verify-no-legacy --site=<site-id>` confirma que o arrendatario xa non depende de rutas herdadas do lado da rede.
- `wp tenant verify-sovereign-push --site=<site-id>` confirma que os traballos de envío soberano poden procesarse e baleirarse.

As integracións deben tratar unha verificación fallada como un bloqueador de despregamento e evitar marcar un arrendatario como activo ata que se resolva o fallo.

## Eliminación do arrendatario {#tenant-deletion}

Os fluxos de eliminación deben chamar á ruta de desmontaxe do addon para que se limpen as credenciais da base de datos do arrendatario. As integracións externas poden eliminar recursos do provedor despois de que a desmontaxe teña éxito, pero non deben eliminar bases de datos nin cartafoles do host mentres a verificación ou os traballos de envío asíncrono aínda se están executando.

## Enrutador de base de datos obsoleto {#deprecated-database-router}

O `Database_Router` herdado foi substituído por un stub de obsolescencia. As novas integracións deben resolver arrendatarios mediante o enrutador de sitio actual e as APIs do rexistro de arrendatarios en lugar de depender da antiga clase de enrutador.
