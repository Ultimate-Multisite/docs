---
title: Registo de alterações da integração com WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Changelog da Integração WooCommerce {#woocommerce-integration-changelog}

Versão 2.2.0 - Lançada em 2026-07-01
* Novo: Os valores de imposto do Ultimate Multisite agora aparecem como linhas separadas de taxas do WooCommerce no checkout, tornando os totais de imposto mais claros antes do pagamento.
* Novo: Adicionada uma configuração opcional "Suspender Memberships Imediatamente em Renovações Falhadas" e o filtro `wu_woo_suspend_on_payment_failure` para sites que querem suspensão por renovação falhada durante a janela de nova tentativa do WooCommerce Subscriptions.
* Correção: Reconciliados os estados de WooCommerce Subscription que podiam ficar dessincronizados com as memberships do Ultimate Multisite após renovações falhadas ou recuperadas.
* Correção: Adicionada a moeda da loja WooCommerce à lista de moedas do Ultimate Multisite quando estava ausente.
* Correção: Preservados os detalhes de faturação do cliente ao redirecionar subscritores para o checkout do WooCommerce.
* Melhorado: Adicionada compatibilidade com Jetpack Autoloader 5.
* Melhorado: Limpa a geração do pacote de lançamento para que os zips do GitHub e do marketplace evitem diretórios de preparação aninhados e ficheiros de desenvolvimento.

Versão 2.0.6 - Lançada em 2026-01-16
* Melhoria: Inclui subscrições core no addon. Já não requer a extensão Woocommerce Subscriptinos.

Versão 2.0.5 - Lançada em 2026-01-09
* Melhoria: Carrega traduções a partir da API do glotpress.
* Correção: Erro fatal em alguns construtores de páginas.
* correção: Redirecionamento infinito quando o cliente é membro do site principal.

Versão 2.0.4 - Lançada em 2025-11-14
* Adicionado: Traduções para muitos mais idiomas.
* Alterado: Renomeado para Ultimate Multisite: Woocommerce Integration.
* Adicionado: Compatibilidade com Woocommerce 10.2.1.
* Adicionado: Compatibilidade com Woocommerce Subscriptions 7.7.0.
* Correção: Compatibilidade com PHP 8.4
* Correção: Redirecionamento quando não existe página de Account do WC.

Versão 2.0.3 - Lançada em 2025-08-13
* Alterado: Ativadas atualizações automáticas com novo marketplace.

Versão 2.0.2 - Lançada em 2025-07-05
* Alterado: Renomeado para Multisite Ultimate: Woocommerce Integration.
* Adicionado: Compatibilidade com Woocommerce 9.8.1.
* Adicionado: Compatibilidade com Woocommerce Subscriptions 7.3.0.
* Correção: Cancelamento de uma subscrição pelo cliente.
* Correção: Erro fatal ao usar bloco de checkout.
* Melhoria: Agora compatível com tabelas de encomendas personalizadas de alto desempenho do Woocommerce.
* Correção: Cancelar no checkout do WooCommerce ainda pode atualizar uma membership.

Versão 2.0.1 - Lançada em 2023-08-09

* Adicionado: Compatibilidade com Woocommerce 7.9.0.
* Adicionado: Compatibilidade com Woocommerce Subscriptions 5.3.0.
* Adicionado: Suporte para atualizações de membership.
* Adicionado: Avisos sobre períodos de teste e taxas de configuração no Woocommerce.
* Adicionado: Identificação de produtos Ultimate Multisite Woocommerce com um meta valor.
* Adicionado: Inserida uma correção única para marcar todos os produtos Woocommerce relacionados com Ultimate Multisite.
* Adicionado: Removidos os produtos criados pelo Ultimate Multisite da lista do Woocommerce.
* Melhoria: Criado um desconto Woocommerce não recorrente para aplicar ao carrinho.
* Melhoria: Restaurado o desconto recorrente ao produto Woocommerce.
* Melhoria: Adicionado um rótulo de desconto recorrente ao produto Woocommerce.
* Melhoria: Garantido o tipo de produto no checkout.
* Correção: Mantido o estado da membership durante o processo de downgrade.
* Correção: Verificado se existe uma subscrição para evitar erros durante o processo de cancelamento.
* Correção: Adicionada a data de início da subscrição para usar em subscrições Woocommerce.
* Interno: Implementado um novo processo de build PHP 8.1.

Versão 2.0.0 - Reescrita completa.

* Adicionado: Método de processamento de cancelamento para remover a subscrição woo ao alterar o gateway ou cancelar a membership;
* Adicionado: Handler para fazer downgrade e upgrade de memberships;
* Melhoria: Carrega dependências do woocommerce no formulário de atualização do cliente em subsites para permitir atualização da Account;
* Melhoria: Corrige o carregamento do carrinho Woocommerce se não existir;
* Melhoria: Garante que estamos nas tabelas do site principal ao processar um checkout;
* Melhoria: Faz a encomenda de renovação do Ultimo com base no valor da encomenda da subscrição Woocommerce e não no último pagamento;
* Correção: Link do botão Ir para WU Membership;
* Correção: Define a encomenda Ultimo como paga quando a renovação das subscrições Woocommerce foi paga;
* Build: Adiciona MPB como construtor;

Versão 2.0.0-beta-5 - Lançada em 2022-01-21

* Interno: Adicionado gerador de hooks e filtros;
* Interno: Adicionados stubs Ultimate Multisite para qualidade de vida do developer;
* Corrigido: Impede a criação de múltiplos produtos quando não necessário;

Versão 2.0.0-beta.4 - 2021-09-23

* Correção: exige que WooCommerce esteja ativo na rede em vez de apenas no site principal;
* Melhoria: adicionado filtro para permitir que o add-on seja usado como um mu-plugin;

Versão 2.0.0-beta.3 - 2021-05-28

* Correção: o controlo de acesso ao Dashboard era demasiado agressivo;
* Melhoria: Adicionados links de ajuda do WooCommerce ao menu superior do Ultimate Multisite;

Versão 2.0.0-beta.2 - 2021-05-04

* Melhoria: cria pagamentos pendentes no Ultimo na criação de encomenda de renovação WCS;
* Melhoria: preenche previamente campos de faturação com dados de cliente do Ultimate Multisite;
* Melhoria: adiciona novamente campos de faturação para gateways;

Versão 2.0.0-beta.1 - 2021-05-04

* Lançamento beta inicial

-- Versões Legadas --

Versão 1.2.6 - 26/03/2020

* Corrigido: Pequena incompatibilidade com versões mais recentes do WooCommerce Subscriptions;

Versão 1.2.5 - 26/08/2019

* Corrigido: Erro no lançamento anterior;

Versão 1.2.4 - 22/08/2019

* Melhorado: Adicionada opção para redirecionar para o ecrã de checkout do WooCommerce imediatamente após a integração;

Versão 1.2.3 - 26/05/2019

* Corrigido: Email de pagamento para WooCommerce desapareceu em alguns casos extremos;

Versão 1.2.2 - 27/02/2019

* Adicionado: Suporte para taxas de configuração na integração WooCommerce Subscription;

Versão 1.2.1 - 17/11/2018

* Corrigido: Problemas de compatibilidade com Ultimate Multisite versão 1.9.0;

Versão 1.2.0 - 10/09/2018

* Melhorado: Novo URL de atualizações para add-ons;
* Adicionado: Suporte beta para WooCommerce Subscription;

Versão 1.1.2 - 11/02/2018

* Corrigido: Link para Pagar gerado dinamicamente para responder a alterações nos endpoints do WooCommerce;
* Melhorado: Agora forçamos o estado concluído para as nossas encomendas quando payment_completed é chamado, para garantir que os nossos hooks de renovação correm quando devem;

Versão 1.1.1 - 24/01/2018

* Corrigido: Agora também verifica se o WooCommerce acabou de ser ativado no site principal;
* Corrigido: Incluídas sobrecargas para permitir que a criação de pedidos inclua impostos;

Versão 1.1.0 - 04/11/2017

* Corrigido: Agora o rótulo do botão de integração muda de facto para refletir as configurações. Requer Ultimate Multisite 1.5.0;
* Corrigido: A Integração WooCommerce agora funciona mesmo se o WooCommerce não estiver ativo na rede e estiver ativado apenas no site principal;

1.0.0 - Lançamento inicial
