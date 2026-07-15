---
title: Integração do Painel de Controle Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integração com o Painel de Controle Hestia

Este guia explica como configurar a integração do Ultimate Multisite Hestia para que os domínios mapeados na sua rede sejam automaticamente adicionados (e removidos) como Aliases de Domínio Web no Hestia.

- Referência da CLI do Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Documentação oficial da REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## O que ela faz {#what-it-does}
- Quando um domínio é mapeado no Ultimate Multisite, a integração chama a API do Hestia para executar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Quando um mapeamento de domínio é removido, ela executa:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Adiciona/remove opcionalmente o alias `www.` dependendo da sua configuração "Auto-create www subdomain" nas configurações de Mapeamento de Domínio.

## Pré-requisitos {#prerequisites}
- Um Web Domain Hestia existente que já aponta para a sua instalação do WordPress. A integração anexará aliases a este domínio base.
- Acesso à API do Hestia habilitado. Você pode se autenticar usando uma senha ou um hash/token de API.

Consulte a documentação da REST API do Hestia para ativar o acesso à API e obter detalhes de autenticação:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuração (Assistente → Integrações → Hestia) {#configuration-wizard--integrations--hestia}
Forneça os seguintes valores:

- `WU_HESTIA_API_URL` (obrigatório)
  - O endpoint base da API, tipicamente `https://seu-host-hestia:8083/api/`.
- `WU_HESTIA_API_USER` (obrigatório)
  - Usuário Hestia usado para comandos de API (frequentemente `admin`).
- `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH` (pelo menos um)
  - Escolha um método de autenticação: senha ou hash/token da API.
- `WU_HESTIA_ACCOUNT` (obrigatório)
  - A conta (proprietário) do Domínio Web na Hestia; este é o primeiro argumento para a CLI.
- `WU_HESTIA_WEB_DOMAIN` (obrigatório)
  - O Domínio Web existente na Hestia que hospeda seu WordPress (os aliases serão anexados aqui).
- `WU_HESTIA_RESTART` (opcional; padrão `yes`)
  - Se deseja reiniciar/recarregar os serviços após as alterações de alias.

Você pode deixar o wizard injetar essas constantes no `wp-config.php`, ou defini-las manualmente.

## Verificando a Configuração {#verifying-setup}
- Na etapa do wizard "Testando", o plugin chama `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via API. Uma resposta de sucesso confirma a conectividade e a autenticação.
- Após mapear um domínio, verifique na Hestia: Web > o domínio base > Aliases. Você deverá ver o novo alias adicionado.

## Observações e Dicas {#notes--tips}
- Certifique-se de que `WU_HESTIA_WEB_DOMAIN` já exista e seja de propriedade de `WU_HESTIA_ACCOUNT`.
- Se for necessário SSL, gerencie os certificados na Hestia. Esta integração atualmente lida apenas com aliases.
- O plugin também pode adicionar/remover `www.<domain>` dependendo da sua configuração de Mapeamento de Domínio "subdomínio www".

## Exemplo de Chamada de API (cURL) {#example-api-call-curl}
Abaixo está um exemplo conceitual (ajuste ao seu ambiente). Consulte a documentação oficial para os parâmetros exatos.

```
POST https://seu-host-hestia:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=SUA_SENHA_API  (ou &hash=SUA_HASH_API)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=dominio-cliente.com    (alias a ser adicionado)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Para deletar, use `cmd=v-delete-web-domain-alias` e os mesmos argumentos.

## Solução de Problemas {#troubleshooting}
- Erro HTTP da API: verifique se o `WU_HESTIA_API_URL` está acessível e inclui `/api`.
- Erros de autenticação: confirme se `WU_HESTIA_API_USER` e, consequentemente, `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH` estão corretos.
- "Missing account/base domain" (Conta/domínio base ausente) nos logs: certifique-se de que `WU_HESTIA_ACCOUNT` e `WU_HESTIA_WEB_DOMAIN` estejam definidos e válidos no Hestia.

## Referências {#references}
- API REST do Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Referência da CLI do Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
