---
title: Integración WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integración WPMU DEV

## Visión Geral {#overview}
WPMU DEV é unha plataforma completa de WordPress que ofrece hélices, plugins e servizos para sitios WordPress. Esta integración permite a sincronización automática de domínios e a gestión de certificados SSL entre Ultimate Multisite e o alojamiento WPMU DEV.

## Características {#features}
- Sincronización automática de dominios
- Gestión de certificados SSL
- Intentos ampliados de verificación de certificados SSL

## Requisitos {#requirements}
A integración detecta automáticamente se estás alojado en WPMU DEV e utiliza a API integrada. Non se necesita configuración adicional se estás alojado en WPMU DEV.

A integración verifica a presenza da constante `WPMUDEV_HOSTING_SITE_ID`, que se define automáticamente ao alojarse en WPMU DEV.

## Instrución de Configuración {#setup-instructions}

### 1. Verificar el Alojamento WPMU DEV {#1-verify-wpmu-dev-hosting}

Se estás alojado en WPMU DEV, as constantes necesarias ya deberían estar definidas. Verifica que:

1. A constante `WPMUDEV_HOSTING_SITE_ID` está definida no teu ambiente
2. Tens unha membresía activa de WPMU DEV con acceso a API

### 2. Habilitar a Integración {#2-enable-the-integration}

1. No o teu administrador de WordPress, ve a Ultimate Multisite > Settings (Configuración)
2. Navega á pestaña "Domain Mapping" (Mapeo de Dominios)
3. Desplázate hasta "Host Integrations" (Integracións de Alojamento)
4. Habilita a integración WPMU DEV
5. Clica en "Save Changes" (Guardar Cambios)

## Como Funciona {#how-it-works}

### Sincronización de Dominios {#domain-syncing}

Cando un dominio se mapea en Ultimate Multisite:

1. A integración utiliza a API de WPMU DEV para añadir o dominio á conta de alojamiento
2. Tamén añade automáticamente a versión www do dominio
3. WPMU DEV se encarga da configuración do dominio e da emisión do certificado SSL

### Gestión de Certificados SSL {#ssl-certificate-management}

A integración está configurada para aumentar o número de intentos de verificação do certificado SSL para a hospedagem WPMU DEV, pois pode levar algum tempo para que os certificados SSL sejam emitidos e instalados. Por padrão, tentará até 10 vezes para a verificação do certificado SSL, em comparação com as 5 tentativas padrão.

## Notas Importantes {#important-notes}

### Remoção de Domínio {#domain-removal}

Atualmente, a API WPMU DEV não oferece uma forma de remover domínios. Quando uma associação de domínio é removida no Ultimate Multisite, o domínio permanecerá na sua conta de hospedagem WPMU DEV. Você precisará removê-lo manualmente do painel de controle da hospedagem WPMU DEV, se necessário.

### Autenticação da API {#api-authentication}

A integração usa a chave de API WPMU DEV que está armazenada no seu banco de dados WordPress como a opção `wpmudev_apikey`. Isto é configurado automaticamente quando conecta o seu site à WPMU DEV.

## Solução de Problemas (Troubleshooting) {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se o seu site está corretamente conectado à WPMU DEV
- Confirme se a opção `wpmudev_apikey` está definida no seu banco de dados WordPress
- Certifique-se de que a sua associação/membership na WPMU DEV está ativa

### Problemas com o Certificado SSL {#ssl-certificate-issues}
- A WPMU DEV pode demorar algum tempo para emitir os certificados SSL (geralmente 5-15 minutos)
- A integração está configurada para verificar até 10 vezes os certificados SSL
- Se os certificados SSL ainda não estiverem a ser emitidos após várias tentativas, contacte o suporte da WPMU DEV

### Domínio Não Adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio já não está adicionado à WPMU DEV
- Certifique-se de que o seu plano de hospedagem WPMU DEV suporta o número de domínios que está a adicionar
