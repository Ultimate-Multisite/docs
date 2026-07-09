---
title: Integración do painel de controlo Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integración con el Panel de Control Hestia {#hestia-control-panel-integration}

Este guía explica cómo configurar la integración de Ultimate Multisite Hestia para que los dominios mapeados en tu red se añadan (y se quiten) automáticamente como Alias de Dominio Web en Hestia.

- Referencia CLI de Hestia: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Documentación oficial de la API REST: https://hestiacp.com/docs/server-administration/rest-api.html

## Qué Hace {#what-it-does}
- Cuando se mapea un dominio en Ultimate Multisite, la integración llama a la API de Hestia para ejecutar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Cuando se elimina el mapeo del dominio, ejecuta:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalmente añade/quita el alias `www.` dependiendo de tu configuración de "Auto-create www subdomain" en la configuración de Mapeo de Dominios.

## Requisitos Previos {#prerequisites}
- Un Dominio Web de Hestia existente que ya apunte a tu instalación de WordPress. La integración adjuntará alias a este dominio base.
- Acceso habilitado a la API de Hestia. Puedes autenticarte usando una contraseña o un hash/token de API.

Consulta la documentación de la API REST de Hestia para habilitar el acceso a la API y los detalles de autenticación:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuración (Asistente → Integraciones → Hestia) {#configuration-wizard--integrations--hestia}
Proporciona los siguientes valores:

- `WU_HESTIA_API_URL` (obrigatório)
  - O endpoint base da API, tipicamente `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obrigatório)
  - O utilizador Hestia usado para comandos de API (muitas vezes `admin`).
- `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH` (pelo menos um)
  - Escolha um método de autenticação: palavra-passe ou hash/token da API.
- `WU_HESTIA_ACCOUNT` (obrigatório)
  - A conta (proprietário) do Domínio Web na Hestia; este é o primeiro argumento para a CLI.
- `WU_HESTIA_WEB_DOMAIN` (obrigatório)
  - O Domínio Web existente na Hestia que serve o seu WordPress (os aliases serão anexados aqui).
- `WU_HESTIA_RESTART` (opcional; padrão `yes`)
  - Se deve reiniciar/recarregar os serviços após as alterações de alias.

Pode deixar que o wizard injete estas constantes no `wp-config.php`, ou defini-las manualmente.

## Verificar a Configuração {#verifying-setup}
- No passo do wizard "Testing" (Testar), o plugin chama `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via API. Uma resposta de sucesso confirma a conectividade e a autenticação.
- Depois de mapear um domínio, verifique na Hestia: Web > o domínio base > Aliases (Apelidos). Deve ver o novo alias adicionado.

## Notas e Dicas {#notes--tips}
- Certifique-se de que `WU_HESTIA_WEB_DOMAIN` já existe e é propriedade de `WU_HESTIA_ACCOUNT`.
- Se for necessário SSL, gerencie os certificados na Hestia. Esta integração atualmente lida apenas com aliases.
- O plugin também pode adicionar/remover `www.<domain>` dependendo da sua configuração de Mapeamento de Domínio "www subdomain" (subdomínio www).

## Exemplo de Chamada API (cURL) {#example-api-call-curl}
Abaixo está um exemplo conceitual (ajuste ao seu ambiente). Consulte a documentação oficial para os parâmetros exatos.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ou &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias para adicionar)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Para deletar, usa `cmd=v-delete-web-domain-alias` e os mesmos argumentos.

## Solución de problemas {#troubleshooting}
- Errores HTTP da API: verifica que `WU_HESTIA_API_URL` este acessível e inclua `/api`.
- Erros de autenticação: confirma se `WU_HESTIA_API_USER` e o `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH` estão corretos.
- "Missing account/base domain" nos logs: garante que `WU_HESTIA_ACCOUNT` e `WU_HESTIA_WEB_DOMAIN` estejam definidos e válidos na Hestia.

## Referências {#references}
- API REST da Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Referência CLI da Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
