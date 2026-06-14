---
title: Integración WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integración con WP Engine

## Visión Geral
WP Engine é unha plataforma de alojamiento WordPress premium que proporciona rendemento optimizado, seguridade e escalabilidade para sitios WordPress. Esta integración permite a sincronización automática de domínios entre Ultimate Multisite e WP Engine.

## Características
- Sincronización automática de dominios
- Soporte para subdomínios en instalacións multisite
- Integración fluida con os sistemas existentes de WP Engine

## Requisitos
A integración detecta automáticamente se estás alojado en WP Engine e utiliza a API integrada de WP Engine. Non se necesita configuración adicional se o plugin de WP Engine está activo e configurado correctamente.

No obstante, se necesitas configurar manualmente a integración, podes definir unha destas constantes no teu ficheiro `wp-config.php`:

```php
define('WPE_APIKEY', 'tu_api_key'); // Método preferido
// OU
define('WPE_API', 'tu_api_key'); // Método alternativo
```

## Instrución de Configuración

### 1. Verificar o Plugin WP Engine

Se estás alojado en WP Engine, o plugin de WP Engine ya debería estar instalado e activado. Verifica que:

1. O plugin de WP Engine está activo
2. O ficheiro `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existe

### 2. Activar a Integración

1. No o teu administrador de WordPress, ve a Ultimate Multisite > Settings (Configuración)
2. Navega á pestaña "Domain Mapping" (Mapeo de Dominios)
3. Desplázate hasta "Host Integrations" (Integracións de Alojamento)
4. Activa a integración de WP Engine
5. Clica en "Save Changes" (Guardar Cambios)

## Como Funciona

### Sincronización de Domínios

Cando un dominio se mapea en Ultimate Multisite:

1. A integración utiliza a API de WP Engine para añadir o dominio á túa instalación de WP Engine
2. WP Engine maneña a configuración do dominio e a emisión do certificado SSL
3. Cando se remove un mapeo de dominio, a integración removerá o dominio de WP Engine

### Soporte para Subdomínios

Para instalações de multisite com subdomínios:

1. A integração adiciona cada subdomínio ao WP Engine quando um novo site é criado.
2. O WP Engine gerencia a configuração do subdomínio.
3. Quando um site é excluído, a integração removerá o subdomínio do WP Engine.

## Notas Importantes

### Domínios curinga (Wildcard Domains)

Para instalações de multisite com subdomínios, recomendamos contactar o suporte da WP Engine para solicitar uma configuração de domínio curinga. Isso permite que todos os subdomínios funcionem automaticamente sem a necessidade de adicionar cada um individualmente.

### Certificados SSL

A WP Engine gerencia automaticamente a emissão e renovação dos certificados SSL para todos os domínios adicionados através desta integração. Não é necessária nenhuma configuração adicional.

## Solução de Problemas (Troubleshooting)

### Problemas de Conexão da API
- Verifique se o plugin do WP Engine está ativo e configurado corretamente.
- Se definiu a chave de API manualmente, verifique se ela está correta.
- Contacte o suporte da WP Engine se estiver com problemas com a API.

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro.
- Verifique se o domínio não foi adicionado ao WP Engine anteriormente.
- Certifique-se de que o seu plano do WP Engine suporta o número de domínios que você está adicionando.

### Problemas com Subdomínios
- Se os subdomínios não estiverem funcionando, contacte o suporte da WP Engine para solicitar uma configuração de domínio curinga.
- Verifique se as suas configurações de DNS estão configuradas corretamente para o domínio principal e os subdomínios.
