---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 añade unha capacidade de multi-tenencia de Hostinger para que os dominios albergados poidan participar na aprovisionación de inquilinos soberanos ao lado da integración existente de mapeo de dominios de Hostinger.

Utiliza esta capacidad cuando os dominios dos inquilinos e a infraestrutura do inquilino isolado se gestionan a través de hPanel de Hostinger.

## Notas de configuración {#setup-notes}

1. Configura a integración principal de Hostinger en **Ultimate Multisite > Settings > Host Integrations**.
2. Confirma que o token API de Hostinger pode gestionar o dominio ou subdominio destinado.
3. Activa o addon de Multi-Tenancy.
4. Configura a estrategia de aislamiento do inquilino antes de publicar o inquilino.
5. Executa o flujo de verificación de migración antes de enviar tráfico de produción ao inquilino.

A capacidade de Hostinger utiliza a conexión compartida de Hostinger para operacións no lado do host. O DNS deberá seguir apuntando á conta correcta de Hostinger, e os límites da conta de hPanel siguen aplicándose.

## Modificación específica da capacidad {#capability-specific-changes}

- Os inquilinos soberanos poden ser creados con operacións de dominio conscientes do host.
- As cadenas de host de base de datos na mesma máquina son normalizadas antes da verificación de permiso.
- Os inquilinos gestionados por Hostinger deberán utilizar o valor do host da base de datos que se mostra en hPanel, a menos que o runtime de WordPress requira un sobrescrito local.
- As visitas SSO dependén da resolución do dominio do inquilino ao inquilino albergado por Hostinger.

## Solución de problemas dos inquilinos de Hostinger {#troubleshooting-hostinger-tenants}

- Se a instalación dun inquilino falla, verifica que o dominio ya está anexado á conta de Hostinger.
- Se a verificación da base de datos falla, compara o nome de utilizador da DB do inquilino, o nome da base de datos e o vinculación do host co hPanel.
- Se falla **Visit (SSO)**, confirma que el DNS e o SSL están activos para o dominio do inquilino.
- Se a desinstalación deixa recursos do host para trás, remove todas as bases de datos, usuarios ou expedidores restantes de hPanel después de confirmar os respaldos.
