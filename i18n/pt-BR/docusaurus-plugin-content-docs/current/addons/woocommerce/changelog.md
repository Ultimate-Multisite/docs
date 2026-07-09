---
title: Registro de alterações da integração com WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Changelog da integração com WooCommerce

Versão 2.2.0 - Lançada em 2026-07-01
* Novo: Os valores de imposto do Ultimate Multisite agora aparecem como linhas de taxa separadas do WooCommerce no checkout, tornando os totais de impostos mais claros antes do pagamento.
* Novo: Adicionada uma configuração opcional "Suspender associações imediatamente em renovações com falha" e o filtro `wu_woo_suspend_on_payment_failure` para sites que desejam suspensão por renovação com falha durante a janela de novas tentativas do WooCommerce Subscriptions.
* Correção: Reconciliados status de WooCommerce Subscription que podiam permanecer fora de sincronia com associações do Ultimate Multisite após renovações com falha ou recuperadas.
* Correção: Adicionada a moeda da loja WooCommerce à lista de moedas do Ultimate Multisite quando ela estava ausente.
* Correção: Preservados os detalhes de cobrança do cliente ao redirecionar assinantes para o checkout do WooCommerce.
* Melhorado: Adicionada compatibilidade com Jetpack Autoloader 5.
* Melhorado: Limpa a geração do pacote de lançamento para que os zips do GitHub e do marketplace evitem diretórios de preparação aninhados e arquivos de desenvolvimento.

Versão 2.0.6 - Lançada em 2026-01-16
* Melhoria: Inclui assinaturas principais no complemento. Não exige mais a extensão Woocommerce Subscriptinos.

Versão 2.0.5 - Lançada em 2026-01-09
* Melhoria: Carrega traduções da API do glotpress.
* Correção: Erro fatal em alguns construtores de páginas.
* Correção: Redirecionamento infinito quando o cliente é membro do site principal.

Versão 2.0.4 - Lançada em 2025-11-14
* Adicionado: Traduções para muito mais idiomas.
* Alterado: Renomeado para Ultimate Multisite: Woocommerce Integration.
* Adicionado: Compatibilidade com Woocommerce 10.2.1.
* Adicionado: Compatibilidade com Woocommerce Subscriptions 7.7.0.
* Correção: Compatibilidade com PHP 8.4
* Correção: Redirecionamento, mas quando nenhuma página de conta do WC existe.

Versão 2.0.3 - Lançada em 2025-08-13
* Alterado: Atualizações automáticas habilitadas com novo marketplace.

Versão 2.0.2 - Lançada em 2025-07-05
* Alterado: Renomeado para Multisite Ultimate: Woocommerce Integration.
* Adicionado: Compatibilidade com Woocommerce 9.8.1.
* Adicionado: Compatibilidade com Woocommerce Subscriptions 7.3.0.
* Correção: Cancelamento de uma assinatura pelo cliente.
* Correção: Erro fatal ao usar bloco de checkout.
* Melhoria: Agora compatível com tabelas de pedidos personalizadas de alto desempenho do Woocommerce.
* Correção: Cancelar no checkout do WooCommerce ainda pode fazer upgrade de uma associação.

Versão 2.0.1 - Lançada em 2023-08-09

* Adicionado: Compatibilidade com Woocommerce 7.9.0.
* Adicionado: Compatibilidade com Woocommerce Subscriptions 5.3.0.
* Adicionado: Suporte para atualizações de associação.
* Adicionado: Avisos sobre períodos de teste e taxas de configuração no Woocommerce.
* Adicionado: Identificação de produtos Ultimate Multisite Woocommerce com um valor meta.
* Adicionado: Inserida uma correção única para marcar todos os produtos Woocommerce relacionados ao Ultimate Multisite.
* Adicionado: Removidos produtos criados pelo Ultimate Multisite da lista do Woocommerce.
* Melhoria: Criado um desconto Woocommerce não recorrente para aplicar ao carrinho.
* Melhoria: Restaurado o desconto recorrente para o produto Woocommerce.
* Melhoria: Adicionado um rótulo de desconto recorrente ao produto Woocommerce.
* Melhoria: Garantido o tipo de produto no checkout.
* Correção: Mantido o status da associação durante o processo de downgrade.
* Correção: Verificado se uma assinatura existe para evitar erros durante o processo de cancelamento.
* Correção: Adicionada a data de início da assinatura para usar em assinaturas Woocommerce.
* Interno: Implementado um novo processo de build PHP 8.1.

Versão 2.0.0 - Reescrita completa.

* Adicionado: Método de processamento de cancelamento para remover a assinatura woo ao alterar o gateway ou cancelar a associação;
* Adicionado: Manipulador para fazer downgrade e upgrade de associações;
* Melhoria: Carrega dependências do woocommerce no formulário de atualização do cliente em subsites para permitir atualização de conta;
* Melhoria: Corrige o carregamento do carrinho Woocommerce se não existir;
* Melhoria: Garante que estamos nas tabelas do site principal ao processar um checkout;
* Melhoria: Faz o pedido de renovação do Ultimo ser baseado no valor do pedido da assinatura Woocommerce e não no último pagamento;
* Correção: Link do botão Ir para WU Membership;
* Correção: Define o pedido do Ultimo como pago quando a renovação de assinaturas Woocommerce foi paga;
* Build: Adiciona MPB como construtor;

Versão 2.0.0-beta-5 - Lançada em 2022-01-21

* Interno: Adicionado gerador de hooks e filtros;
* Interno: Adicionados stubs do Ultimate Multisite para qualidade de vida do desenvolvedor;
* Corrigido: Impede a criação de múltiplos produtos quando não necessário;

Versão 2.0.0-beta.4 - 2021-09-23

* Correção: exige que o WooCommerce esteja ativo na rede em vez de apenas no site principal;
* Melhoria: adicionado filtro para permitir que o add-on seja usado como mu-plugin;

Versão 2.0.0-beta.3 - 2021-05-28

* Correção: o controle de acesso ao painel era agressivo demais;
* Melhoria: Adicionados links de ajuda do WooCommerce ao menu superior do Ultimate Multisite;

Versão 2.0.0-beta.2 - 2021-05-04

* Melhoria: cria pagamentos pendentes no Ultimo na criação de pedido de renovação do WCS;
* Melhoria: preenche previamente campos de cobrança com dados do cliente do Ultimate Multisite;
* Melhoria: adiciona de volta campos de cobrança para gateways;

Versão 2.0.0-beta.1 - 2021-05-04

* Lançamento beta inicial

-- Versões legadas --

Versão 1.2.6 - 26/03/2020

* Corrigido: Pequena incompatibilidade com versões mais novas do WooCommerce Subscriptions;

Versão 1.2.5 - 26/08/2019

* Corrigido: Erro no lançamento anterior;

Versão 1.2.4 - 22/08/2019

* Melhorado: Adicionada opção para redirecionar para a tela de checkout do WooCommerce imediatamente após a integração;

Versão 1.2.3 - 26/05/2019

* Corrigido: E-mail de pagamento do WooCommerce desaparecia em alguns casos extremos;

Versão 1.2.2 - 27/02/2019

* Adicionado: Suporte a taxas de configuração na integração com WooCommerce Subscription;

Versão 1.2.1 - 17/11/2018

* Corrigido: Problemas de compatibilidade com Ultimate Multisite versão 1.9.0;

Versão 1.2.0 - 10/09/2018

* Melhorado: Nova URL de atualizações para add-ons;
* Adicionado: Suporte beta a WooCommerce Subscription;

Versão 1.1.2 - 11/02/2018

* Corrigido: Link para pagar sendo gerado dinamicamente para responder a alterações nos endpoints do WooCommerce;
* Melhorado: Agora forçamos o status concluído para nossos pedidos quando payment_completed é chamado para garantir que nossos hooks de renovação sejam executados quando devem;

Versão 1.1.1 - 24/01/2018

* Corrigido: Agora também verifica se o WooCommerce acabou de ser ativado no site principal;
* Corrigido: Incluídas sobrecargas para permitir que a criação de pedidos inclua impostos;

Versão 1.1.0 - 04/11/2017

* Corrigido: Agora o rótulo do botão de integração realmente muda para refletir as configurações. Requer Ultimate Multisite 1.5.0;
* Corrigido: WooCommerce Integration agora funciona mesmo se o WooCommerce não estiver ativo na rede e estiver ativado apenas no site principal;

1.0.0 - Lançamento inicial
