---
title: Rexistro de cambios de Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Rexistro de cambios de Captcha

Versión: 1.5.0 - Publicada o 2026-05-22
* Novo: Limitador de taxa con parada dura — conta cada GET e POST nas superficies protexidas por captcha (wp-login / rexistro / contrasinal perdido / comentarios, WooCommerce my-account / checkout / pay-for-order, checkout / inline-login de Ultimate Multisite) e responde con HTTP 429, un `Retry-After` header e unha pausa tarpit aleatorizada (1–5 s, cun límite duro de 15 s).
* Novo: axustes `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` para axustar a xanela tarpit.
* Novo: filtro `wu_cap_rate_limit_whitelist_ip` para eximir rangos de IP de confianza.
* Novo: acción `wu_cap_rate_limit_will_block` que se dispara inmediatamente antes de enviar a resposta de parada dura.
* Novo: detección de IP de cliente resistente á suplantación. `Captcha_Core::get_client_ip()` (a fonte de verdade para as claves de bucket de límite de taxa, `remoteip` de siteverify de captcha e hashes de IP de estatísticas) agora aplica un modelo de confianza estrito: REMOTE_ADDR é a base, `CF-Connecting-IP` só se respecta cando o par inmediato está dentro dun rango de IP actual de Cloudflare, e `X-Forwarded-For` só se respecta cando o par inmediato está na lista de proxies de confianza configurada polo administrador, cun percorrido de dereita a esquerda que omite saltos de confianza/CF antes de fixar a IP do visitante.
* Novo: axuste `cap_trust_cloudflare_headers` (desactivado por defecto) — activa a confianza en `CF-Connecting-IP` cando esteas detrás de Cloudflare. O plugin inclúe unha instantánea agrupada de CIDR de Cloudflare e actualízaa semanalmente vía wp-cron cunha alternativa agrupada se falla a actualización.
* Novo: axuste `cap_trusted_proxies` — área de texto de CIDR ou IP simples (unha por liña, comentarios con `#` permitidos) que lista os teus propios proxies / balanceadores de carga de primeira liña. Sen isto, `X-Forwarded-For` ignórase mesmo cando o limitador de taxa está activado.
* Novo: autodetección ao activar por primeira vez dunha probable postura de Cloudflare / proxy cun aviso de administrador "Aplicar axustes detectados" dun só clic. O plugin nunca sobrescribe os teus valores gardados; se o tráfico posterior suxire que a túa configuración xa non coincide coa realidade (por exemplo, Cloudflare cambiou rangos CIDR e o teu CIDR de proxy quedou obsoleto), móstrase un aviso de discrepancia non descartable coa actualización recomendada.
* Corrixido: o modo invisible xa non degrada silenciosamente `cap_security_level` a FAST — respéctase o nivel configurado polo administrador. Hai un novo filtro `wu_cap_server_security_level` dispoñible para sitios que queiran lóxica personalizada.
* Corrixido: o contador de estatísticas `rate_limits_triggered` agora increméntase en cada bloqueo, non só na rara ruta de respaldo posterior ao éxito.
* Corrixido: `Captcha_Core::get_client_ip()` agora é a única fonte de verdade para a atribución da IP do visitante en todo o limitador de taxa, provedores de captcha (reCAPTCHA + hCaptcha `siteverify`) e estatísticas — pechando un vector de suplantación no que solicitudes directas ao servidor de orixe que levaban un `CF-Connecting-IP` header falsificado serían agrupadas pola IP suplantada en vez de polo par real.
* Corrixido: a porta de límite de taxa do checkout clásico de WooCommerce agora dispárase en `template_redirect` (prioridade 1) en vez de en `woocommerce_before_checkout_form`. O hook a nivel de formulario nunca se dispara cando o carro está baleiro, polo que o tráfico de inundación que nunca engade un produto estaba eludindo por completo o limitador.
* Corrixido: a porta de límite de taxa de pay-for-order de WooCommerce agora dispárase en `template_redirect` en vez de en `woocommerce_before_pay_action`. Este último só se dispara despois de que `wp_verify_nonce('woocommerce-pay')` teña éxito, o que significa que atacantes non autenticados (o modelo de ameaza real) nunca activaban o limitador.
* Corrixido: a porta de límite de taxa do checkout de WooCommerce Store API (bloques) agora dispárase en `rest_pre_dispatch` en vez de en `woocommerce_store_api_checkout_update_order_from_request`. Este último só se dispara despois de que Store API valide o carro e os campos de facturación, polo que os bots non autenticados recibían un 400 do validador e nunca facían saltar o limitador.
* Corrixido: a porta de límite de taxa do inline-login de Ultimate Multisite agora dispárase en `wu_ajax_nopriv_wu_inline_login` prioridade 1 (e o espello para usuarios conectados) en vez de en `wu_before_inline_login`. Este último só se dispara despois de que `check_ajax_referer('wu_checkout')` teña éxito, polo que os bots non autenticados sen un nonce wu_checkout válido recibían un 403 e nunca facían saltar o limitador.
* Corrixido: `Rate_Limiter::enforce()` agora aplica unha garda dunha vez por solicitude baseada en `surface|ip`, polo que os hooks ascendentes que se disparan dúas veces por renderización (en particular `wu_setup_checkout` en Ultimate Multisite) xa non reducen á metade o limiar efectivo do límite de taxa.
* Corrixido: as portas de superficie de límite de taxa xa non consultan `Captcha_Core::is_whitelisted()` (filtro `wu_captcha_whitelisted`). Ese filtro indica "captcha xa xestionado por outra superficie" e é ortogonal á protección contra inundacións — a integración de WooCommerce enganchábao para omitir o captcha de inicio de sesión de WordPress cando había un nonce de Woo presente, o que se filtraba ao reconto de taxa e permitía que os POST de Woo evitasen o limitador. O filtro específico de límite de taxa `wu_cap_rate_limit_whitelist_ip` é a única omisión que agora se aplica.

Versión: 1.3.2 - Publicada o 2026-01-27
* Corrixido: o widget de Cap non se renderizaba nos formularios de checkout que usaban Elementor ou outros construtores de páxinas
* Corrixido: o elemento personalizado cap-widget era eliminado pola sanitización de wp_kses()
* Mellorado: uso de contido invocable para o campo de captcha de checkout para evitar o filtrado HTML
* Mellorado: JavaScript simplificado con alternativa para casos límite

Versión: 1.3.1 - Publicada o 2026-01-26
* Corrixido: o modo invisible de Cap Captcha non se resolvía automaticamente nos formularios dinámicos de checkout de Ultimate Multisite
* Mellorado: o script de checkout de Cap agora usa MutationObserver para detectar widgets cargados dinamicamente
* Mellorado: engadida interceptación do botón de checkout para agardar polo token antes do envío

Version: 1.3.0 - Publicada o 2026-01-27
* Novo: integración do checkout de WooCommerce Blocks con interceptación de fetch da Store API
* Novo: compatibilidade con captcha invisible para o checkout de WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Novo: páxina de axustes independente para usar sen Ultimate Multisite
* Novo: Jetpack Autoloader para previr conflitos de dependencias
* Corrixido: hCaptcha non se renderizaba no checkout dinámico de Ultimate Multisite (contido cargado por AJAX)
* Corrixido: o Captcha non se actualizaba/restablecía cando se producían erros de validación do formulario
* Corrixido: hCaptcha non se mostraba na páxina de checkout de WooCommerce
* Corrixido: erro de clase reCAPTCHA non atopada (engadida a biblioteca PHP google/recaptcha)
* Mellorado: detección de erros mediante hooks de WordPress, MutationObserver e interceptación AJAX
* Mellorado: as descricións dos axustes agora inclúen URLs do dashboard para claves API

Version: 1.2.2 - Publicada o 2026-01-24
* Corrixido: o Captcha non se amosaba no Ultimate Multisite Login Form Element (discordancia no nome do filtro do formulario)
* Corrixido: o HTML do widget Cap era eliminado pola sanitización de wp_kses()
* Corrixido: os selectores de JavaScript non atopaban formularios con barras nos ID dos elementos
* Engadido: hook de filtro `wu_kses_allowed_html` para que os classaddons amplíen as etiquetas HTML permitidas
* Eliminado: ficheiros JavaScript de código morto substituídos por scripts específicos do provedor

Version: 1.2.1 - Publicada o 2026-01-23

* Corrixido: a validación do token de Cap Captcha fallaba en contornas multisite (agora usa transients a nivel de rede)
* Corrixido: o Captcha agora renderízase de maneira consistente para todos os usuarios independentemente do estado de inicio de sesión
* Corrixido: discordancia entre a renderización e a validación do captcha que provocaba fallos no checkout

Version: 1.2.0 - Publicada o 2026-01-21

* Novo: Cap Captcha - captcha de proba de traballo autoaloxado, activado por defecto na activación
* Novo: protección sen configuración - activa o addon e quedas protexido inmediatamente
* Novo: arquitectura polimórfica de provedores de captcha para unha extensibilidade doada
* Novo: protección do checkout da WooCommerce Store API contra ataques de probas de tarxetas
* Novo: dashboard de seguimento de estatísticas que mostra desafíos, verificacións e ataques bloqueados
* Novo: predefinicións de nivel de seguridade (Rápido, Medio, Máximo) para a dificultade de Cap Captcha
* Novo: clases base abstractas para provedores de reCAPTCHA e hCaptcha
* Mellorado: base de código refactorizada en clases modulares de provedores
* Mellorado: mellor separación de responsabilidades cunha clase de xestor dedicada
* Fixed: Security improvements for $_SERVER variable sanitization
* Corrixido: configuración de probas PHPUnit para as convencións de nomes de WordPress

Version: 1.0.1 - Publicada o 2025-09-28

* Renomear o prefixo a ultimate-multisite; actualizar o dominio de texto; incremento de versión.
