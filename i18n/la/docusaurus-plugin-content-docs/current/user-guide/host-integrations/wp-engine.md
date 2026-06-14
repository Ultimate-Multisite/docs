---
title: Integratio WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integratio cum WP Engine

## Visio
WP Engine est plataforma dota WordPress gestionata premium quae optimam performance, securitatem et scalabilitatem pro locis WordPress praebet. Ha integratio permittit synchronisation automaticam domini inter Ultimate Multisite et WP Engine.

## Caracteres
- Synchronizatio automatica dominii
- Supportus subdomini ad installationes multisite
- Integratio fluida cum systemibus existentes WP Engine

## Requisitos
Integratio automatico detingit si tu hostis in WP Engine et usus facit API integratum WP Engine. Nulla configuration additiva est necessaria si plugin WP Engine activus et proprius modo configuratus est.

Sed, si integration manualiter configurare necesse tibi est, possuris einen constantem in file `wp-config.php` definire:

```php
define('WPE_APIKEY', 'tua_api_key'); // Method preferentia
// AUT
define('WPE_API', 'tua_api_key'); // Method alternativa
```

## Instructiones Configurandi

### 1. Verificatio Plugin WP Engine

Si hostis in WP Engine, plugin WP Engine iam debet installatus et activus esse. Verifica quod:

1. Plugin WP Engine activus est
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existeret

### 2. Activatio Integrationis

1. In admin WordPress tuo, ad Ultimate Multisite > Settings adde
2. Ad tabulam "Domain Mapping" (Mappatio Dominii) naviga
3. Ad "Host Integrations" (Integrationes Hostorum) descende
4. Integrationem WP Engine activa
5. "Save Changes" (Salva Cambia) clica

## Quommodo Opera Est

### Synchronizatio Dominii

Cum dominium in Ultimate Multisite mappatur:

1. Integratio API WP Engine usus facit ut dominium ad installationem tuam WP Engine addat
2. WP Engine configuration dominii et emissio certificatiss SSL gestionet
3. Cum mappatio dominii removetur, integratio dominium a WP Engine removeret

### Supportus Subdomini

Ad installation multisite subdomain:

1. Integrare cada subdomain in WP Engine quando se cria um novo site.
2. O WP Engine cuida da configuração do subdomain.
3. Quando um site é excluído, a integração removerá o subdomain do WP Engine.

## Observações Importantes

### Domínios curinga (Wildcard Domains)

Para instalações multisite de subdomain, recomenda-se entrar em contato com o suporte da WP Engine para solicitar uma configuração de domínio curinga. Isso permite que todos os subdomínios funcionem automaticamente sem a necessidade de adicionar cada um individualmente.

### Certificados SSL

O WP Engine cuida automaticamente da emissão e renovação dos certificados SSL para todos os domínios adicionados através desta integração. Nenhuma configuração adicional é necessária.

## Solução de Problemas (Troubleshooting)

### Problemas de Conexão da API
- Verifique se o plugin do WP Engine está ativo e configurado corretamente.
- Se você definiu a chave de API manualmente, verifique se ela está correta.
- Entre em contato com o suporte da WP Engine se estiver tendo problemas com a API.

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite para quaisquer mensagens de erro.
- Verifique se o domínio não foi adicionado ao WP Engine anteriormente.
- Certifique-se de que seu plano do WP Engine suporta o número de domínios que você está adicionando.

### Problemas de Subdomínio
- Se os subdomínios não estiverem funcionando, entre em contato com o suporte da WP Engine para solicitar uma configuração de domínio curinga.
- Verifique se suas configurações de DNS estão configuradas corretamente para o domínio principal e os subdomínios.
