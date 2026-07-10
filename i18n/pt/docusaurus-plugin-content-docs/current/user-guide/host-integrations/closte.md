---
title: Integração Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integração com o Closte {#closte-integration}

## Visão Geral {#overview}
O Closte é uma plataforma de hospedagem WordPress gerenciada construída em infraestrutura Google Cloud. Esta integração permite a sincronização automática de domínios e o gerenciamento de certificados SSL entre Ultimate Multisite e Closte.

## Recursos {#features}
- Sincronização automática de domínio
- Gerenciamento de certificado SSL
- Suporte a domínios curinga (wildcard)
- Não é necessária nenhuma configuração se estiver rodando no Closte

## Requisitos {#requirements}
A seguinte constante deve ser definida no seu arquivo `wp-config.php` se você estiver usando o Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'sua_api_key');
```

Esta constante geralmente já está definida se você estiver hospedando no Closte.

## Instruções de Configuração {#setup-instructions}

### 1. Verifique sua Chave de API do Closte {#1-verify-your-closte-api-key}

Se você estiver hospedando no Closte, a constante `CLOSTE_CLIENT_API_KEY` já deve estar definida no seu arquivo `wp-config.php`. Você pode verificar isso consultando o seu arquivo `wp-config.php`.

### 2. Habilite a Integração {#2-enable-the-integration}

1. No painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role a tela até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração Closte
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona {#how-it-works}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma requisição para a API do Closte para adicionar o domínio à sua aplicação
2. O Closte cuida automaticamente da provisionamento do certificado SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio do Closte

A integração também funciona com a configuração de intervalo de verificação DNS no Ultimate Multisite, permitindo que você configure com que frequência o sistema verifica a propagação do DNS e a emissão de certificados SSL.

## Criação de Registro de Domínio {#domain-record-creation}

Esta integração garante que, quando um site é criado ou duplicado, um registro de domínio seja criado automaticamente. Isso é particularmente importante para a integração Closte, pois a criação do registro de domínio aciona a API da Closte para criar o domínio e o certificado SSL.

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se sua chave de API Closte está correta
- Certifique-se de que sua conta Closte tenha as permissões necessárias

### Problemas com o Certificado SSL {#ssl-certificate-issues}
- A Closte pode levar algum tempo para emitir os certificados SSL (geralmente 5-10 minutos)
- Verifique se seus domínios estão apontando corretamente para o endereço IP do servidor da Closte
- Verifique os registros DNS do seu domínio para garantir que estejam configurados corretamente

### Domínio Não Adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio ainda não foi adicionado à Closte
- Certifique-se de que os registros DNS do seu domínio estão configurados corretamente

### Intervalo de Verificação DNS {#dns-check-interval}
- Se a emissão dos certificados SSL estiver demorando muito, você pode ajustar o intervalo de verificação DNS nas configurações de Mapeamento de Domínio (Domain Mapping)
- O intervalo padrão é de 300 segundos (5 minutos), mas você pode configurá-lo para tão baixo quanto 10 segundos para verificações mais rápidas durante testes
