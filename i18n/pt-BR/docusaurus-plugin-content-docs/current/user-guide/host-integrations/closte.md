---
title: Integração Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integração Closte

## Visão geral
Closte é uma plataforma de hospedagem WordPress gerenciada construída sobre a infraestrutura do Google Cloud. Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e Closte.

## Funcionalidades
- Sincronização automática de domínios
- Gerenciamento de certificados SSL
- Suporte a domínios wildcard
- Nenhuma configuração necessária se estiver rodando no Closte

## Requisitos
A constante a seguir deve ser definida no seu arquivo `wp-config.php` se você estiver usando Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Esta constante normalmente já está definida se você estiver hospedando no Closte.

## Instruções de Configuração

### 1. Verifique sua chave de API Closte
Se você estiver hospedando no Closte, a constante `CLOSTE_CLIENT_API_KEY` já deve estar definida no seu arquivo `wp-config.php`. Você pode verificar isso conferindo seu arquivo `wp-config.php`.

### 2. Ative a Integração
1. No seu painel WordPress, vá para Ultimate Multisite > Configurações
2. Navegue até a aba "Mapeamento de Domínio"
3. Role para baixo até "Integrações de Host"
4. Ative a integração Closte
5. Clique em "Salvar Alterações"

## Como Funciona
Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma solicitação para a API do Closte para adicionar o domínio ao seu aplicativo
2. O Closte lida automaticamente com a provisão de certificados SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio do Closte

A integração também funciona com a configuração de intervalo de verificação DNS no Ultimate Multisite, permitindo que você configure com que frequência o sistema verifica a propagação DNS e a emissão de certificados SSL.

## Criação de Registro de Domínio
Esta integração garante que, quando um site é criado ou duplicado, um registro de domínio é criado automaticamente. Isso é particularmente importante para a integração Closte, pois a criação do registro de domínio aciona a API do Closte para criar o domínio e o certificado SSL.

## Solução de Problemas

### Problemas de Conexão com a API
- Verifique se sua chave de API Closte está correta
- Certifique-se de que sua conta Closte tem as permissões necessárias

### Problemas com Certificados SSL
- O Closte pode levar algum tempo para emitir certificados SSL (geralmente 5-10 minutos)
- Verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor Closte
- Verifique os registros DNS do seu domínio para garantir que estão configurados corretamente

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o domínio ainda não foi adicionado ao Closte
- Certifique-se de que os registros DNS do seu domínio estão configurados corretamente

### Intervalo de Verificação DNS
- Se os certificados SSL estão demorando muito para serem emitidos, você pode ajustar o intervalo de verificação DNS nas configurações de Mapeamento de Domínio
- O intervalo padrão é de 300 segundos (5 minutos), mas você pode defini-lo tão baixo quanto 10 segundos para verificações mais rápidas durante testes
