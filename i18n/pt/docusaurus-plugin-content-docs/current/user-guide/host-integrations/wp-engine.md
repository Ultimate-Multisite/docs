---
title: Integração WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integração com o WP Engine

## Visão Geral
O WP Engine é uma plataforma de hospedagem WordPress gerenciada premium que oferece desempenho otimizado, segurança e escalabilidade para sites WordPress. Esta integração permite a sincronização automática de domínio entre Ultimate Multisite e WP Engine.

## Recursos
- Sincronização automática de domínio
- Suporte a subdomínios para instalações multisite
- Integração perfeita com os sistemas existentes do WP Engine

## Requisitos
A integração detecta automaticamente se você está hospedando no WP Engine e usa a API integrada do WP Engine. Não é necessária nenhuma configuração adicional se o plugin WP Engine estiver ativo e configurado corretamente.

No entanto, se precisar configurar a integração manualmente, você pode definir uma das seguintes constantes no seu arquivo `wp-config.php`:

```php
define('WPE_APIKEY', 'sua_api_key'); // Método preferido
// OU
define('WPE_API', 'sua_api_key'); // Método alternativo
```

## Instruções de Configuração

### 1. Verifique o Plugin WP Engine

Se você está hospedando no WP Engine, o plugin WP Engine já deve estar instalado e ativado. Verifique se:

1. O plugin WP Engine está ativo
2. O arquivo `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existe

### 2. Habilite a Integração

1. No seu painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração WP Engine
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona

### Sincronização de Domínio

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração usa a API do WP Engine para adicionar o domínio à sua instalação do WP Engine
2. O WP Engine cuida da configuração do domínio e da emissão do certificado SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio do WP Engine

### Suporte a Subdomínios

Para instalações de multisite com subdomínios:

1. A integração adiciona cada subdomínio ao WP Engine quando um novo site é criado.
2. O WP Engine cuida da configuração do subdomínio.
3. Quando um site é excluído, a integração removerá o subdomínio do WP Engine.

## Observações Importantes

### Domínios curinga (Wildcard Domains)

Para instalações de multisite com subdomínios, recomendamos entrar em contato com o suporte da WP Engine para solicitar uma configuração de domínio curinga. Isso permite que todos os subdomínios funcionem automaticamente sem a necessidade de adicionar cada um individualmente.

### Certificados SSL

O WP Engine cuida automaticamente da emissão e renovação dos certificados SSL para todos os domínios adicionados através desta integração. Não é necessária nenhuma configuração adicional.

## Solução de Problemas (Troubleshooting)

### Problemas de Conexão da API
- Verifique se o plugin do WP Engine está ativo e configurado corretamente.
- Se você definiu a chave de API manualmente, verifique se ela está correta.
- Entre em contato com o suporte da WP Engine se estiver tendo problemas com a API.

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro.
- Confirme se o domínio não foi adicionado ao WP Engine anteriormente.
- Certifique-se de que seu plano do WP Engine suporta o número de domínios que você está adicionando.

### Problemas com Subdomínios
- Se os subdomínios não estiverem funcionando, entre em contato com o suporte da WP Engine para solicitar uma configuração de domínio curinga.
- Verifique se suas configurações de DNS estão configuradas corretamente para o domínio principal e os subdomínios.
