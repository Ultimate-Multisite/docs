---
title: Integração com o Painel de Controle Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integração do Painel de Controle Hestia

Este guia explica como configurar a integração Hestia do Ultimate Multisite para que os domínios mapeados na sua rede sejam adicionados automaticamente (e removidos) como Aliases de Domínio Web no Hestia.

- Referência da CLI do Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Documento oficial da REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## O que Ele Faz

- Quando um domínio é mapeado no Ultimate Multisite, a integração chama a API do Hestia para executar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Quando um mapeamento de domínio é removido, ele executa:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opcionalmente adiciona/remover o alias `www.` dependendo da sua configuração de “Auto-criar subdomínio www” nas configurações de Mapeamento de Domínio.

## Pré-requisitos

- Um Domínio Web do Hestia existente que já aponta para a sua instalação WordPress. A integração anexará aliases a este domínio base.
- Acesso à API do Hestia habilitado. Você pode autenticar usando uma senha ou um hash/token da API.
- Veja os documentos da REST API do Hestia para habilitar o acesso à API e detalhes de autenticação:
  https://hestiacp.com/docs/server-administration/rest-api.html

## Configuração (Assistente → Integrações → Hestia)

Forneça os seguintes valores:

- `WU_HESTIA_API_URL` (obrigatório)
  - O endpoint base da API, normalmente `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obrigatório)
  - Usuário do Hestia usado para comandos da API (geralmente `admin`).
- `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH` (pelo menos um)
  - Escolha um método de autenticação: senha ou hash/token da API.
- `WU_HESTIA_ACCOUNT` (obrigatório)
  - A conta (proprietário) do Domínio Web no Hestia; este é o primeiro argumento da CLI.
- `WU_HESTIA_WEB_DOMAIN` (obrigatório)
  - O Domínio Web do Hestia existente que serve seu WordPress (os aliases serão anexados aqui).
- `WU_HESTIA_RESTART` (opcional; padrão `yes`)
  - Se deve reiniciar/recarregar serviços após alterações de alias.

Você pode deixar o assistente injetar essas constantes em `wp-config.php`, ou defini-las manualmente.

## Verificando a Configuração

- No passo “Testando” do assistente, o plugin chama `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via a API. Uma resposta de sucesso confirma a conectividade e autenticação.
- Após mapear um domínio, verifique no Hestia: Web > o domínio base > Aliases. Você deve ver o novo alias adicionado.

## Observações & Dicas

- Certifique-se de que `WU_HESTIA_WEB_DOMAIN` já exista e seja de propriedade de `WU_HESTIA_ACCOUNT`.
- Se SSL for necessário, gerencie certificados no Hestia. Esta integração atualmente lida apenas com aliases.
- O plugin também pode adicionar/remover `www.<domain>` dependendo da sua configuração de “subdomínio www” no Mapeamento de Domínio.

## Exemplo de Chamada API (cURL)

Abaixo está um exemplo conceitual (ajuste para o seu ambiente). Consulte o documento oficial para parâmetros exatos.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Para deletar, use `cmd=v-delete-web-domain-alias` e os mesmos argumentos.

## Solução de Problemas

- Erro HTTP da API: verifique se `WU_HESTIA_API_URL` é acessível e inclui `/api`.
- Erros de autenticação: confirme `WU_HESTIA_API_USER` e `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH`.
- “Conta/domínio base ausente” nos logs: certifique-se de que `WU_HESTIA_ACCOUNT` e `WU_HESTIA_WEB_DOMAIN` estejam definidos e válidos no Hestia.

## Referências

- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
