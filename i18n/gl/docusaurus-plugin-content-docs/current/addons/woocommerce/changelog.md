---
title: Rexistro de cambios da integración de WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Rexistro de cambios da integración con WooCommerce {#woocommerce-integration-changelog}

Versión 2.2.0 - Lanzada o 2026-07-01
* Novo: Os importes de impostos de Ultimate Multisite agora aparecen como liñas de taxas separadas de WooCommerce no pagamento, facendo que os totais de impostos sexan máis claros antes do pago.
* Novo: Engadiuse unha opción voluntaria "Suspender as adhesións inmediatamente en renovacións fallidas" e o filtro `wu_woo_suspend_on_payment_failure` para sitios que queren a suspensión por renovación fallida durante a xanela de reintentos de WooCommerce Subscriptions.
* Corrección: Reconciliáronse os estados das subscricións de WooCommerce que podían quedar fóra de sincronización coas adhesións de Ultimate Multisite tras renovacións fallidas ou recuperadas.
* Corrección: Engadiuse a moeda da tenda WooCommerce á lista de moedas de Ultimate Multisite cando faltaba.
* Corrección: Conserváronse os datos de facturación do cliente ao redirixir os subscritores ao pagamento de WooCommerce.
* Mellorado: Engadiuse compatibilidade con Jetpack Autoloader 5.
* Mellorado: Limpouse a xeración do paquete de lanzamento para que os zips de GitHub e do mercado eviten directorios de preparación aniñados e ficheiros de desenvolvemento.

Versión 2.0.6 - Lanzada o 2026-01-16
* Mellora: Incluír subscricións do núcleo no complemento. Xa non require a extensión Woocommerce Subscriptinos.

Versión 2.0.5 - Lanzada o 2026-01-09
* Mellora: Cargar traducións desde a API de glotpress.
* Corrección: Erro fatal nalgúns construtores de páxinas.
* Corrección: Redirección infinita cando o cliente é membro do sitio principal.

Versión 2.0.4 - Lanzada o 2025-11-14
* Engadido: Traducións para moitas máis linguas.
* Cambiado: Renomeado a Ultimate Multisite: Woocommerce Integration.
* Engadido: Compatibilidade con Woocommerce 10.2.1.
* Engadido: Compatibilidade con Woocommerce Subscriptions 7.7.0.
* Corrección: Compatibilidade con PHP 8.4
* Corrección: Redirección cando non existe ningunha páxina de Account de WC.

Versión 2.0.3 - Lanzada o 2025-08-13
* Cambiado: Activáronse actualizacións automáticas co novo mercado.

Versión 2.0.2 - Lanzada o 2025-07-05
* Cambiado: Renomeado a Multisite Ultimate: Woocommerce Integration.
* Engadido: Compatibilidade con Woocommerce 9.8.1.
* Engadido: Compatibilidade con Woocommerce Subscriptions 7.3.0.
* Corrección: Cancelación dunha subscrición polo cliente.
* Corrección: Erro fatal ao usar o bloque de pagamento.
* Mellora: Agora compatible coas táboas de pedidos personalizadas de alto rendemento de Woocommerce.
* Corrección: Cancelar no pagamento de WooCommerce aínda pode actualizar unha adhesión.

Versión 2.0.1 - Lanzada o 2023-08-09

* Engadido: Compatibilidade con Woocommerce 7.9.0.
* Engadido: Compatibilidade con Woocommerce Subscriptions 5.3.0.
* Engadido: Soporte para actualizacións de adhesión.
* Engadido: Avisos sobre probas e taxas de configuración en Woocommerce.
* Engadido: Identificación dos produtos de Ultimate Multisite Woocommerce cun valor meta.
* Engadido: Inserida unha corrección única para marcar todos os produtos de Woocommerce relacionados con Ultimate Multisite.
* Engadido: Eliminados da lista de Woocommerce os produtos creados por Ultimate Multisite.
* Mellora: Creouse un desconto non recorrente de Woocommerce para aplicar ao carriño.
* Mellora: Restaurouse o desconto recorrente no produto de Woocommerce.
* Mellora: Engadiuse unha etiqueta de desconto recorrente ao produto de Woocommerce.
* Mellora: Asegurouse o tipo de produto no pagamento.
* Corrección: Mantívose o estado da adhesión durante o proceso de baixada de plan.
* Corrección: Comprobouse se existe unha subscrición para evitar erros durante o proceso de cancelación.
* Corrección: Engadiuse a data de inicio da subscrición para usar nas subscricións de Woocommerce.
* Interno: Implementouse un novo proceso de compilación de PHP 8.1.

Versión 2.0.0 - Reescritura completa.

* Engadido: Método de procesamento de cancelación para eliminar a subscrición woo ao cambiar a pasarela ou cancelar a adhesión;
* Engadido: Xestor para baixar e subir adhesións;
* Mellora: Cargar dependencias de woocommerce no formulario de actualización do cliente en subsitios para permitir a actualización da conta;
* Mellora: Carga correcta do carriño de Woocommerce se non existe;
* Mellora: Asegurar que estamos nas táboas do sitio principal ao procesar un pagamento;
* Mellora: Facer que a orde de renovación de Ultimo se basee no valor da orde da subscrición de Woocommerce e non no último pago;
* Corrección: Ligazón do botón Ir á adhesión de WU;
* Corrección: Marcar a orde de Ultimo como pagada cando a renovación de subscricións de Woocommerce foi pagada;
* Compilación: Engadir MPB como construtor;

Versión 2.0.0-beta-5 - Lanzada o 2022-01-21

* Interno: Engadido xerador de hooks e filtros;
* Interno: Engadidos stubs de Ultimate Multisite para mellorar a calidade de vida dos desenvolvedores;
* Corrixido: Evitar a creación de múltiples produtos cando non é necesario;

Versión 2.0.0-beta.4 - 2021-09-23

* Corrección: requirir que WooCommerce estea activo na rede en vez de só no sitio principal;
* Mellora: engadido filtro para permitir que o add-on se use como mu-plugin;

Versión 2.0.0-beta.3 - 2021-05-28

* Corrección: o control de acceso ao Dashboard era demasiado agresivo;
* Mellora: Engadidas ligazóns de axuda de WooCommerce ao menú superior de Ultimate Multisite;

Versión 2.0.0-beta.2 - 2021-05-04

* Mellora: crea pagos pendentes en Ultimo ao crear a orde de renovación de WCS;
* Mellora: enche previamente os campos de facturación con datos de cliente de Ultimate Multisite;
* Mellora: volve engadir campos de facturación para pasarelas;

Versión 2.0.0-beta.1 - 2021-05-04

* Lanzamento beta inicial

-- Versións antigas --

Versión 1.2.6 - 26/03/2020

* Corrixido: Pequena incompatibilidade con versións máis recentes de WooCommerce Subscriptions;

Versión 1.2.5 - 26/08/2019

* Corrixido: Erro na versión anterior;

Versión 1.2.4 - 22/08/2019

* Mellorado: Engadida opción para redirixir á pantalla de pagamento de WooCommerce inmediatamente despois da integración;

Versión 1.2.3 - 26/05/2019

* Corrixido: O correo electrónico de pago de WooCommerce desaparecía nalgúns casos límite;

Versión 1.2.2 - 27/02/2019

* Engadido: Soporte para taxas de configuración na integración con WooCommerce Subscription;

Versión 1.2.1 - 17/11/2018

* Corrixido: Problemas de compatibilidade coa versión 1.9.0 de Ultimate Multisite;

Versión 1.2.0 - 10/09/2018

* Mellorado: Novo URL de actualizacións para add-ons;
* Engadido: Soporte beta para WooCommerce Subscription;

Versión 1.1.2 - 11/02/2018

* Corrixido: A ligazón para pagar xerábase dinamicamente para responder a cambios nos endpoints de WooCommerce;
* Mellorado: Agora forzamos o estado completado para as nosas ordes cando se chama a payment_completed para asegurarnos de que os nosos hooks de renovación se executen cando deben;

Versión 1.1.1 - 24/01/2018

* Corrixido: Agora tamén comproba se WooCommerce acaba de activarse no sitio principal;
* Corrixido: Incluíronse sobrecargas para permitir que a creación de pedidos inclúa impostos;

Versión 1.1.0 - 04/11/2017

* Corrixido: Agora a etiqueta do botón de integración cambia realmente para reflectir os axustes. Require Ultimate Multisite 1.5.0;
* Corrixido: WooCommerce Integration agora funciona mesmo se WooCommerce non está activo na rede e só está activado no sitio principal;

1.0.0 - Lanzamento inicial
