---
title: Registro de alterações do Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Registro de alterações do Captcha {#captcha-changelog}

Versão: 1.5.0 - Lançada em 2026-05-22
* Novo: Limitador de taxa com bloqueio definitivo — conta cada GET e POST em superfícies protegidas por captcha (wp-login / cadastro / senha perdida / comentários, minha conta / checkout / pagar pedido do WooCommerce, checkout / inline-login do Ultimate Multisite) e responde com HTTP 429, um header `Retry-After` e uma suspensão tarpit aleatorizada (1–5s, com limite rígido de 15s).
* Novo: configurações `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` para ajustar a janela de tarpit.
* Novo: filtro `wu_cap_rate_limit_whitelist_ip` para isentar intervalos de IP confiáveis.
* Novo: ação `wu_cap_rate_limit_will_block` que dispara imediatamente antes de a resposta de bloqueio definitivo ser enviada.
* Novo: Detecção de IP do cliente resistente a falsificação. `Captcha_Core::get_client_ip()` (a fonte da verdade para chaves de buckets de limite de taxa, captcha siteverify `remoteip` e hashes de IP de estatísticas) agora impõe um modelo de confiança estrito: REMOTE_ADDR é a base, `CF-Connecting-IP` é respeitado somente quando o par imediato está dentro de um intervalo de IP atual da Cloudflare, e `X-Forwarded-For` é respeitado somente quando o par imediato está na lista de proxies confiáveis configurada pelo administrador, com uma varredura da direita para a esquerda que ignora saltos confiáveis/CF antes de definir o IP do visitante.
* Novo: configuração `cap_trust_cloudflare_headers` (padrão OFF) — opte por confiar em `CF-Connecting-IP` quando estiver atrás da Cloudflare. O plugin inclui um snapshot de CIDR da Cloudflare e o atualiza semanalmente via wp-cron, com fallback incluído se a atualização falhar.
* Novo: configuração `cap_trusted_proxies` — textarea de CIDRs ou IPs simples (um por linha, comentários com `#` permitidos) listando seus próprios proxies / balanceadores de carga de linha de frente. Sem isso, `X-Forwarded-For` é ignorado mesmo quando o limitador de taxa está ativado.
* Novo: Detecção automática na primeira ativação da provável postura de Cloudflare / proxy com um aviso administrativo de um clique "Aplicar configurações detectadas". O plugin nunca sobrescreve seus valores salvos; se o tráfego subsequente sugerir que sua configuração não corresponde mais à realidade (por exemplo, a Cloudflare alterou intervalos de CIDR e seu CIDR de proxy agora está obsoleto), um aviso de incompatibilidade não descartável exibe a atualização recomendada.
* Corrigido: O modo invisível não rebaixa mais silenciosamente `cap_security_level` para FAST — o nível configurado pelo administrador é respeitado. Um novo filtro `wu_cap_server_security_level` está disponível para sites que desejam lógica personalizada.
* Corrigido: O contador de estatísticas `rate_limits_triggered` agora incrementa a cada bloqueio, não apenas no raro caminho de backstop pós-sucesso.
* Corrigido: `Captcha_Core::get_client_ip()` agora é a única fonte da verdade para atribuição de IP de visitantes em todo o limitador de taxa, provedores de captcha (reCAPTCHA + hCaptcha `siteverify`) e estatísticas — fechando um vetor de falsificação em que solicitações diretas ao servidor de origem carregando um header `CF-Connecting-IP` forjado seriam agrupadas pelo IP falsificado em vez do par real.
* Corrigido: O gate de limite de taxa do checkout clássico do WooCommerce agora dispara em `template_redirect` (prioridade 1) em vez de `woocommerce_before_checkout_form`. O hook no nível do formulário nunca dispara quando o carrinho está vazio, então tráfego de flood que nunca adiciona um produto estava contornando o limitador totalmente.
* Corrigido: O gate de limite de taxa de pagar pedido do WooCommerce agora dispara em `template_redirect` em vez de `woocommerce_before_pay_action`. Este último só dispara depois que `wp_verify_nonce('woocommerce-pay')` é bem-sucedido, o que significa que atacantes não autenticados (o modelo real de ameaça) nunca acionavam o limitador.
* Corrigido: O gate de limite de taxa do checkout da WooCommerce Store API (blocks) agora dispara em `rest_pre_dispatch` em vez de `woocommerce_store_api_checkout_update_order_from_request`. Este último só dispara depois que a Store API valida o carrinho e os campos de cobrança, então bots não autenticados recebiam um 400 do validador e nunca acionavam o limitador.
* Corrigido: O gate de limite de taxa do inline-login do Ultimate Multisite agora dispara em `wu_ajax_nopriv_wu_inline_login` prioridade 1 (e o espelho para usuários logados) em vez de `wu_before_inline_login`. Este último só dispara depois que `check_ajax_referer('wu_checkout')` é bem-sucedido, então bots não autenticados sem um nonce wu_checkout válido recebiam um 403 e nunca acionavam o limitador.
* Corrigido: `Rate_Limiter::enforce()` agora aplica uma proteção uma vez por solicitação com chave por `surface|ip`, então hooks upstream que disparam duas vezes por renderização (notavelmente `wu_setup_checkout` no Ultimate Multisite) não reduzem mais pela metade o limite efetivo de taxa.
* Corrigido: Os gates de superfície de limite de taxa não consultam mais `Captcha_Core::is_whitelisted()` (filtro `wu_captcha_whitelisted`). Esse filtro sinaliza "captcha já tratado por outra superfície" e é ortogonal à proteção contra flood — a integração do WooCommerce o usava para ignorar o captcha de login do WordPress quando um nonce do Woo estava presente, o que vazava para a contagem de taxa e permitia que POSTs do Woo evitassem o limitador. O filtro específico de limite de taxa `wu_cap_rate_limit_whitelist_ip` é o único bypass que agora se aplica.

Versão: 1.3.2 - Lançada em 2026-01-27
* Corrigido: Widget Cap não renderizando em formulários de checkout usando Elementor ou outros construtores de página
* Corrigido: Elemento personalizado cap-widget sendo removido pela sanitização `wp_kses()`
* Melhorado: Uso de conteúdo chamável para o campo de captcha do checkout para contornar a filtragem de HTML
* Melhorado: JavaScript simplificado com fallback para casos extremos

Versão: 1.3.1 - Lançada em 2026-01-26
* Corrigido: Modo invisível do Cap Captcha não resolvendo automaticamente em formulários dinâmicos de checkout do Ultimate Multisite
* Melhorado: Script de checkout do Cap agora usa MutationObserver para detectar widgets carregados dinamicamente
* Melhorado: Adicionada interceptação do botão de checkout para aguardar o token antes do envio

Version: 1.3.0 - Lançado em 2026-01-27
* Novo: integração do checkout do WooCommerce Blocks com interceptação de fetch da Store API
* Novo: suporte a captcha invisível para checkout do WooCommerce (hCaptcha invisível, reCAPTCHA v2 invisível, v3)
* Novo: página de configurações independente para uso sem Ultimate Multisite
* Novo: Jetpack Autoloader para prevenção de conflitos de dependências
* Corrigido: hCaptcha não renderizava no checkout dinâmico do Ultimate Multisite (conteúdo carregado via AJAX)
* Corrigido: captcha não atualizava/redefinia quando ocorriam erros de validação do formulário
* Corrigido: hCaptcha não aparecia na página de checkout do WooCommerce
* Corrigido: erro de classe reCAPTCHA não encontrada (adicionada a biblioteca PHP google/recaptcha)
* Melhorado: detecção de erros via hooks do WordPress, MutationObserver e interceptação de AJAX
* Melhorado: descrições das configurações agora incluem URLs do dashboard para chaves de API

Version: 1.2.2 - Lançado em 2026-01-24
* Corrigido: captcha não era exibido no elemento de formulário de login do Ultimate Multisite (incompatibilidade no nome do filtro do formulário)
* Corrigido: HTML do widget Cap era removido pela sanitização wp_kses()
* Corrigido: seletores JavaScript não encontravam formulários com barras em IDs de elementos
* Adicionado: hook de filtro `wu_kses_allowed_html` para classaddons estenderem tags HTML permitidas
* Removido: arquivos JavaScript de código morto substituídos por scripts específicos do provedor

Version: 1.2.1 - Lançado em 2026-01-23

* Corrigido: validação do token do Cap Captcha falhava em ambientes multisite (agora usa transients em toda a rede)
* Corrigido: captcha agora renderiza consistentemente para todos os usuários, independentemente do status de login
* Corrigido: incompatibilidade entre renderização e validação do captcha que causava falhas no checkout

Version: 1.2.0 - Lançado em 2026-01-21

* Novo: Cap Captcha - captcha de prova de trabalho auto-hospedado, ativado por padrão na ativação
* Novo: proteção sem configuração - ative o addon e você estará protegido imediatamente
* Novo: arquitetura polimórfica de provedores de captcha para fácil extensibilidade
* Novo: proteção do checkout da WooCommerce Store API contra ataques de teste de cartão
* Novo: dashboard de acompanhamento de estatísticas mostrando desafios, verificações e ataques bloqueados
* Novo: predefinições de nível de segurança (Rápido, Médio, Máximo) para dificuldade do Cap Captcha
* Novo: classes base abstratas para provedores reCAPTCHA e hCaptcha
* Melhorado: base de código refatorada em classes modulares de provedores
* Melhorado: melhor separação de responsabilidades com classe gerenciadora dedicada
* Fixed: Security improvements for $_SERVER variable sanitization
* Corrigido: configuração de testes PHPUnit para convenções de nomenclatura do WordPress

Version: 1.0.1 - Lançado em 2025-09-28

* Renomeia prefixo para ultimate-multisite; atualiza domínio de texto; incremento de versão.
