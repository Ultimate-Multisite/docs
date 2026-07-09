---
title: Registo de alterações do Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Registro de alterações do Captcha {#captcha-changelog}

Versão: 1.5.0 - Lançada em 2026-05-22
* Novo: Limitador de taxa com bloqueio rígido — conta cada GET e POST em superfícies protegidas por captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, finalização de compra do Ultimate Multisite / inline-login) e responde com HTTP 429, um header `Retry-After` e uma espera tarpit aleatória (1–5s, limitada rigidamente a 15s).
* Novo: definições `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` para ajustar a janela do tarpit.
* Novo: filtro `wu_cap_rate_limit_whitelist_ip` para isentar intervalos de IP confiáveis.
* Novo: ação `wu_cap_rate_limit_will_block` que dispara imediatamente antes de a resposta de bloqueio rígido ser enviada.
* Novo: Deteção de IP de cliente resistente a falsificação. `Captcha_Core::get_client_ip()` (a fonte da verdade para chaves de buckets de limite de taxa, `remoteip` de siteverify de captcha e hashes de IP de estatísticas) agora aplica um modelo de confiança estrito: REMOTE_ADDR é a base, `CF-Connecting-IP` é respeitado apenas quando o par imediato está dentro de um intervalo de IP atual da Cloudflare, e `X-Forwarded-For` é respeitado apenas quando o par imediato está na lista de proxies confiáveis configurada pelo administrador, com uma varredura da direita para a esquerda que ignora saltos confiáveis/CF antes de se fixar no IP do visitante.
* Novo: definição `cap_trust_cloudflare_headers` (predefinição OFF) — opte por confiar em `CF-Connecting-IP` quando estiver atrás da Cloudflare. O plugin inclui um instantâneo de CIDR da Cloudflare e atualiza-o semanalmente via wp-cron, com fallback incluído se a atualização falhar.
* Novo: definição `cap_trusted_proxies` — área de texto de CIDRs ou IPs simples (um por linha, comentários `#` permitidos) que lista os seus próprios proxies de linha da frente / balanceadores de carga. Sem isto, `X-Forwarded-For` é ignorado mesmo quando o limitador de taxa está ativado.
* Novo: Deteção automática, na primeira ativação, de provável postura Cloudflare / proxy com um aviso de administrador "Aplicar definições detetadas" com um clique. O plugin nunca substitui os seus valores guardados; se tráfego subsequente sugerir que a sua configuração já não corresponde à realidade (por exemplo, a Cloudflare alterou intervalos CIDR e o CIDR do seu proxy está agora desatualizado), um aviso de incompatibilidade não descartável apresenta a atualização recomendada.
* Corrigido: O modo invisível já não rebaixa silenciosamente `cap_security_level` para FAST — o nível configurado pelo administrador é respeitado. Um novo filtro `wu_cap_server_security_level` está disponível para sites que queiram lógica personalizada.
* Corrigido: O contador de estatísticas `rate_limits_triggered` agora incrementa em cada bloqueio, não apenas no raro caminho de proteção após sucesso.
* Corrigido: `Captcha_Core::get_client_ip()` é agora a única fonte da verdade para atribuição de IP de visitante em todo o limitador de taxa, fornecedores de captcha (reCAPTCHA + hCaptcha `siteverify`) e estatísticas — fechando um vetor de falsificação em que pedidos diretos ao servidor de origem com um header `CF-Connecting-IP` forjado teriam sido agrupados pelo IP falsificado em vez do par real.
* Corrigido: A barreira de limite de taxa da finalização de compra clássica do WooCommerce agora dispara em `template_redirect` (prioridade 1) em vez de `woocommerce_before_checkout_form`. O hook ao nível do formulário nunca dispara quando o carrinho está vazio, por isso o tráfego de inundação que nunca adiciona um produto contornava totalmente o limitador.
* Corrigido: A barreira de limite de taxa de pagamento de encomenda do WooCommerce agora dispara em `template_redirect` em vez de `woocommerce_before_pay_action`. Este último só dispara depois de `wp_verify_nonce('woocommerce-pay')` ter êxito, o que significa que atacantes não autenticados (o modelo de ameaça real) nunca acionavam o limitador.
* Corrigido: A barreira de limite de taxa da finalização de compra da WooCommerce Store API (blocos) agora dispara em `rest_pre_dispatch` em vez de `woocommerce_store_api_checkout_update_order_from_request`. Este último só dispara depois de a Store API validar o carrinho e os campos de faturação, por isso bots não autenticados recebiam um 400 do validador e nunca acionavam o limitador.
* Corrigido: A barreira de limite de taxa do inline-login do Ultimate Multisite agora dispara em `wu_ajax_nopriv_wu_inline_login` prioridade 1 (e o espelho para utilizadores autenticados) em vez de `wu_before_inline_login`. Este último só dispara depois de `check_ajax_referer('wu_checkout')` ter êxito, por isso bots não autenticados sem um nonce wu_checkout válido recebiam um 403 e nunca acionavam o limitador.
* Corrigido: `Rate_Limiter::enforce()` agora aplica uma proteção uma vez por pedido, indexada por `surface|ip`, para que hooks a montante que disparam duas vezes por renderização (notavelmente `wu_setup_checkout` no Ultimate Multisite) já não reduzam para metade o limiar efetivo do limite de taxa.
* Corrigido: As barreiras de superfície de limite de taxa já não consultam `Captcha_Core::is_whitelisted()` (filtro `wu_captcha_whitelisted`). Esse filtro sinaliza "captcha já tratado por outra superfície" e é ortogonal à proteção contra inundação — a integração do WooCommerce estava a usá-lo para ignorar o captcha de início de sessão do WordPress quando um nonce Woo estava presente, o que contaminava a contagem de taxa e permitia que POSTs Woo evitassem o limitador. O filtro específico de limite de taxa `wu_cap_rate_limit_whitelist_ip` é a única exceção que agora se aplica.

Versão: 1.3.2 - Lançada em 2026-01-27
* Corrigido: Widget Cap não renderizava em formulários de finalização de compra que usam Elementor ou outros construtores de páginas
* Corrigido: Elemento personalizado cap-widget era removido pela sanitização wp_kses()
* Melhorado: Usar conteúdo chamável para o campo de captcha da finalização de compra para contornar a filtragem de HTML
* Melhorado: JavaScript simplificado com fallback para casos extremos

Versão: 1.3.1 - Lançada em 2026-01-26
* Corrigido: Modo invisível do Cap Captcha não resolvia automaticamente em formulários dinâmicos de finalização de compra do Ultimate Multisite
* Melhorado: Script de finalização de compra do Cap agora usa MutationObserver para detetar widgets carregados dinamicamente
* Melhorado: Adicionada interceção do botão de finalização de compra para aguardar pelo token antes do envio

Version: 1.3.0 - Lançado em 2026-01-27
* Novo: integração do checkout WooCommerce Blocks com interceção de fetch da Store API
* Novo: suporte a captcha invisível para checkout WooCommerce (hCaptcha invisível, reCAPTCHA v2 invisível, v3)
* Novo: página de definições autónoma para utilização sem Ultimate Multisite
* Novo: Jetpack Autoloader para prevenção de conflitos de dependências
* Corrigido: hCaptcha não renderizava no checkout dinâmico do Ultimate Multisite (conteúdo carregado por AJAX)
* Corrigido: Captcha não era atualizado/reposto quando ocorriam erros de validação do formulário
* Corrigido: hCaptcha não aparecia na página de checkout WooCommerce
* Corrigido: erro de classe reCAPTCHA não encontrada (adicionada a biblioteca PHP google/recaptcha)
* Melhorado: deteção de erros via hooks WordPress, MutationObserver e interceção AJAX
* Melhorado: as descrições das definições agora incluem URLs do dashboard para chaves de API

Version: 1.2.2 - Lançado em 2026-01-24
* Corrigido: Captcha não era apresentado no Ultimate Multisite Login Form Element (incompatibilidade no nome do filtro do formulário)
* Corrigido: HTML do widget Cap era removido pela sanitização wp_kses()
* Corrigido: seletores JavaScript não encontravam formulários com barras nos IDs de elementos
* Adicionado: hook de filtro `wu_kses_allowed_html` para classaddons expandirem as tags HTML permitidas
* Removido: ficheiros JavaScript de código morto substituídos por scripts específicos por fornecedor

Version: 1.2.1 - Lançado em 2026-01-23

* Corrigido: validação do token Cap Captcha falhava em ambientes multisite (agora usa transients em toda a rede)
* Corrigido: Captcha agora é renderizado de forma consistente para todos os utilizadores, independentemente do estado de login
* Corrigido: incompatibilidade entre a renderização e a validação do captcha que causava falhas no checkout

Version: 1.2.0 - Lançado em 2026-01-21

* Novo: Cap Captcha - captcha proof-of-work autoalojado, ativado por predefinição na ativação
* Novo: proteção sem configuração - ative o addon e fica protegido imediatamente
* Novo: arquitetura polimórfica de fornecedor de captcha para extensibilidade fácil
* Novo: proteção do checkout WooCommerce Store API contra ataques de teste de cartões
* Novo: dashboard de acompanhamento de estatísticas que mostra desafios, verificações e ataques bloqueados
* Novo: predefinições de nível de segurança (Rápido, Médio, Máximo) para dificuldade do Cap Captcha
* Novo: classes base abstratas para fornecedores reCAPTCHA e hCaptcha
* Melhorado: base de código refatorizada em classes de fornecedores modulares
* Melhorado: melhor separação de responsabilidades com classe de gestor dedicada
* Fixed: Security improvements for $_SERVER variable sanitization
* Corrigido: configuração de testes PHPUnit para convenções de nomes WordPress

Version: 1.0.1 - Lançado em 2025-09-28

* Renomear prefixo para ultimate-multisite; atualizar domínio de texto; incremento de versão.
