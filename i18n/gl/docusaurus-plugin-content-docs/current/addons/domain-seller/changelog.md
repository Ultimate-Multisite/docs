---
title: Rexistro de cambios de Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Rexistro de cambios de Domain Seller

Versión 1.3.0 - Publicada o 2026-06-02
- Novo: Engadiuse unha advertencia de administrador de rede cando o saldo de revendedor de HostAfrica baixa demasiado
- Novo: Engadiuse a asignación automática de dominios recentemente rexistrados ao sitio da rede
- Corrección: Aplicáronse os requisitos de campos do rexistrante só ao rexistrar un novo dominio
- Corrección: Fixéronse descartables os avisos de supervisión de saldo
- Corrección: Asegurouse que se conserven os detalles de facturación do rexistrante de WooCommerce
- Corrección: Impuxéronse os requisitos de contacto do rexistrante durante o rexistro
- Corrección: Evitouse que se creen produtos de rexistro de dominios cunha marxe do 0 %
- Corrección: Conserváronse as seleccións de dominio e os prezos ao longo do fluxo de sesión de pagamento
- Corrección: Mellorouse a visualización da moeda dos prezos de dominios de HostAfrica
- Corrección: Mellorouse o comportamento de form-action no pagamento para evitar desaxustes de query-var do núcleo de WP
- Mellorado: Ligouse a documentación de configuración de revendedor de HostAfrica na guía de configuración

Versión 1.2.0 - Publicada o 2026-05-25
- Novo: Engadiuse HostAfrica como integración de venda de dominios con soporte para pagamento, asistente de configuración, busca, TLD/prezos, rexistro, renovación, transferencia, nameserver, DNS, código EPP, bloqueo de rexistrador e protección de ID
- Novo: Engadiuse Openprovider como integración de venda de dominios con soporte para prezos de revendedor, rexistro, renovación, transferencia, nameserver, DNS, código EPP, bloqueo de rexistrador, privacidade WHOIS e sincronización de TLD
- Novo: Engadiuse Hostinger como integración de venda de dominios usando o token compartido da API de Hostinger desde a integración principal para comprobacións de dispoñibilidade, rexistro, actualizacións de nameserver, bloqueo de rexistrador e privacidade WHOIS
- Mellorado: Engadíronse docblocks de accións e filtros do ciclo de vida de dominios para a guía de integración para desenvolvedores
- Mellorado: Actualizouse a metadata de compatibilidade do plugin a WordPress 7.0 no readme do complemento
- Mellorado: Actualizáronse os modelos de planificación usados para a coordinación de próximas versións

Versión 1.1.0 - Publicada o 2026-05-08
- Novo: Creación de rexistros DNS (add_dns_record) implementada para os rexistradores ResellerClub, Enom e OpenSRS
- Corrección: O analizador predeterminado de rexistros DNS agora tolera os tokens {DOMAIN} e {SITE_URL}
- Corrección: Os slugs dos campos de pagamento de selección de dominio teñen namespace para evitar colisións con site_url

Versión 1.0.8 - Publicada o 2026-05-07
- Corrección: Os prezos de dominios de ResellerClub agora obteñen prezos de custo en directo desde o punto final correcto da API

Versión 1.0.7 - Publicada o 2026-05-06
* Corrección: ResellerClub test_connection envía o parámetro tlds requirido (#224)

Versión 1.0.6 - Publicada o 2026-05-05
* Corrección: O rexistro de dominios de ResellerClub agora funciona correctamente cun manexo mellorado da resposta da API e enrutamento de provedor dirixido polo rexistro
* Corrección: Melloras de UX na páxina de administración Register Domain
* Eliminado: Integración do rexistrador CyberPanel

Versión 1.0.5 - Publicada o 2026-04-02
* Novo: Integración do rexistrador GoDaddy para rexistro e xestión de dominios
* Novo: Integración do rexistrador NameSilo
* Novo: Integración do rexistrador ResellerClub
* Novo: Verificación automática do dominio de envío de SES ao mercar e asignar o dominio
* Corrección: Protexidas as constantes do plugin contra redefinición no contorno de probas
* Corrección: As marcas de MySQL sepáranse correctamente por palabras en install-wp-tests.sh

Versión 1.0.4 - Publicada o 2026-03-14
* **Corrección:** Algúns recursos css que faltaban
* **Corrección:** Erro relacionado con tlds non dispoñibles

Versión 1.0.3 - Publicada o 2026-03-09
* **Corrección:** Erros de propiedades reactivas de Vue (domain_option, selected_domain, domain_provider) ao usar o modelo de rexistro herdado co shortcode de pagamento
* **Corrección:** Desalineamento do campo de entrada de subdominio e texto demasiado grande no campo de pagamento de selección de dominio
* **Corrección:** Ocultar o bloque de vista previa "O teu URL será" cando estea presente o campo de selección de dominio

Versión 1.0.2 - Publicada o 2026-03-01
* **Mellorado:** Elimináronse os axustes globais de marxe da páxina de axustes — agora os prezos son exclusivamente por produto
* **Mellorado:** Engadiuse a ligazón "Xestionar produtos de dominio" na páxina de axustes para unha navegación rápida
* **Mellorado:** Descricións de campos e tooltips máis claros para os axustes de produtos de dominio (xenérico vs específico de TLD, tipos de marxe, prezos introdutorios)
* **Mellorado:** Mellores descricións en toda a páxina de axustes (buscar TLDs, renovacións, DNS, notificacións)

Versión 1.0.1 - Publicada o 2026-02-27

* **Novo:** Ferramenta de importación de TLD para a xestión masiva de prezos
* **Novo:** Compatibilidade con prezos introdutorios para produtos de dominio
* **Novo:** Suite de probas E2E con Cypress
* **Novo:** Modelos de email para notificacións do ciclo de vida do dominio
* **Novo:** Campos de enderezo do rexistrante no modal de rexistro de dominio de administración, preenchecidos desde a configuración
* **Novo:** Interface de xestión de DNS do cliente con compatibilidade para engadir, editar e eliminar rexistros
* **Novo:** Opción de checkout "Trae o teu propio dominio" con mapeo automático de dominio
* **Novo:** Xeración automática da URL do sitio a partir do nome de dominio durante o checkout
* **Novo:** Configuración de nameserver e rexistro DNS predeterminados na configuración
* **Novo:** Detalles de rexistro de dominio e xestión de DNS na páxina principal de edición de dominio
* **Novo:** O asistente de configuración crea automaticamente un produto de dominio predeterminado con valores predeterminados sensatos
* **Novo:** Sincronización automática diaria de TLD mediante cron en todos os provedores configurados
* **Novo:** Protección de privacidade WHOIS con configuración por produto (sempre activada, elección do cliente ou desactivada)
* **Novo:** Caixa de verificación de privacidade WHOIS no checkout con visualización de prezos e compatibilidade con modo escuro
* **Novo:** Páxina de administración Register Domain para rexistro manual de dominios
* **Novo:** Actualizacións automáticas do plugin mediante o servidor de actualizacións de Ultimate Multisite
* **Novo:** Pestaña de filtro de tipo de produto de dominio na táboa de lista de produtos con estilo de distintivo morado
* **Novo:** Campos de contacto do rexistrante (nome, enderezo, cidade, estado, código postal, país, teléfono) no formulario de checkout de dominio
* **Novo:** Validación dos campos do rexistrante antes de chamar á API do rexistrador con mensaxes de erro claras
* **Novo:** Canles de rexistro específicas do provedor para eventos de rexistro de dominio (p. ex. domain-seller-namecheap.log)
* **Novo:** Campos de contacto do rexistrante no formulario principal de rexistro/signup de checkout (amosados ao rexistrar un dominio)
* **Mellorado:** Substituíuse o campo de checkout Domain Search por un campo unificado de selección de dominio compatible con pestanas de subdominio, rexistro e dominio existente
* **Mellorado:** A configuración de produtos de dominio móstrase en liña na páxina de edición do produto mediante o sistema de widgets principal
* **Mellorado:** A información de dominio do cliente intégrase no widget principal de mapeo de dominios en lugar dunha metabox independente
* **Mellorado:** O asistente de importación de TLD simplificouse a unha sincronización cun clic desde todos os provedores
* **Mellorado:** A dispoñibilidade de dominios de Namecheap usa unha chamada API por lotes para buscas máis rápidas
* **Mellorado:** A API de prezos de Namecheap usa os parámetros correctos e a análise de resposta adecuada
* **Mellorado:** Almacenamento centralizado de TLD nunha única opción de rede
* **Mellorado:** Rexistro de actividade de dominios para cambios de DNS, transferencias e aplicación de configuración
* **Mellorado:** Sincronización completa de TLD para OpenSRS usando a lista mestra de IANA con validación por lotes
* **Mellorado:** Sincronización completa de TLD para Namecheap con solicitudes API paxinadas
* **Mellorado:** Substituíronse as clases de provedor herdadas polo patrón Integration Registry
* **Mellorado:** Panel de configuración con configuración de DNS e transferencia
* **Mellorado:** Os números de teléfono formátanse automaticamente ao formato de rexistrador +CC.NNN
* **Mellorado:** A validación do campo de teléfono elimina os caracteres de formato antes do envío
* **Mellorado:** O requisito de versión elevouse a Ultimate Multisite 2.4.12 cun aviso máis claro
* **Mellorado:** O fluxo de traballo de CI usa o checkout adecuado tanto para o complemento como para o plugin principal
* **Mellorado:** prepare_registrant_info() le desde a meta de usuario gardada no checkout con alternativa de enderezo de facturación
* **Corrixido:** A busca de dominio por AJAX fallaba para usuarios sen sesión iniciada durante o checkout
* **Corrixido:** Os prezos de dominio por AJAX fallaban para usuarios sen sesión iniciada durante o checkout
* **Corrixido:** Erro fatal de redeclaración da clase Spyc ao executar comandos WP-CLI
* **Corrixido:** Tempo de espera da API sandbox de Namecheap demasiado curto
* **Corrixido:** O texto do botón Select na busca de dominio non era visible sobre fondo verde
* **Corrixido:** O rexistro de dominio fallaba co erro "RegistrantFirstName is Missing" por falta de información de contacto
* **Corrixido:** Rexistro de dominio creado con blog_id=0 cando o sitio aínda non existía no momento do checkout
* **Corrixido:** A configuración de TLDs predeterminados devolvía unha cadea en lugar dunha matriz analizada
* **Eliminado:** Páxina de administración independente de xestión de dominios — agora xestiónase a través das páxinas principais de dominios

Versión 1.0.0 - Publicada o 2025-09-28

**Reescritura importante para Ultimate Multisite v2**

* **Novo:** Reescritura completa cunha arquitectura moderna de PHP 7.4+
* **Novo:** Integración sen fisuras co sistema de checkout de Ultimate Multisite v2
* **Novo:** Xestión de produtos de dominio con opcións de prezos flexibles
* **Novo:** Arquitectura de compatibilidade con múltiples provedores de dominio
* **Novo:** Integración de renovación automática e subscrición
* **Novo:** Interface de xestión de dominios do cliente
* **Novo:** Monitorización e rexistros de dominios para administración
* **Novo:** Compatibilidade con cupóns para produtos de dominio
* **Novo:** Xestión completa da configuración
* **Novo:** Base de código extensible e amigable para desenvolvedores
* **Mellorado:** Provedor OpenSRS actualizado con compatibilidade completa de funcionalidades
* **Mellorado:** UI moderna coherente con Ultimate Multisite v2
* **Corrixido:** Todo o código v1 obsoleto actualizado aos estándares v2
* **Eliminado:** Compatibilidade herdada con v1 (cambio incompatible)

### Versións anteriores (v1 herdada) {#previous-versions-v1-legacy}

### Versión 0.0.3 - 20/08/2019 {#version-003---20082019}

* Corrixido: Incompatibilidade con Groundhogg CRM
* Nota: Esta foi a última versión compatible con v1

### Versión 0.0.2 - 07/12/2018 {#version-002---07122018}

* Corrixido: Eliminouse o campo License Key
* Corrixido: Faltaban as pestanas de plan cando o plugin de funcionalidade está activo
* Mellorado: Engadiuse un botón de omitir no campo de rexistro

### Versión 0.0.1 - Versión inicial {#version-001---initial-release}

* Integración básica de OpenSRS para WP Ultimo v1
* Busca e rexistro de dominios sinxelos
* Permisos de dominio baseados no plan
