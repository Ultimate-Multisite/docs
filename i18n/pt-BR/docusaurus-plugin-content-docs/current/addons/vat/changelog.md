---
title: Changelog do VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Registro de alterações do IVA

Versão 1.0.7 - Lançada em 2026-02-03

* Correção: números de IVA alemães (DE) falhando na validação devido a erros MS_MAX_CONCURRENT_REQ do serviço VIES SOAP. Alterado da API SOAP legada para a API REST oficial do VIES da UE para uma validação mais confiável.
* Correção: números de IVA agora são aceitos quando o serviço VIES está temporariamente indisponível, em vez de serem rejeitados incorretamente. Uma entrada de log é criada para revisão posterior.
* Correção: o campo IVA/ID fiscal agora fica visível para todos os países, não apenas para membros da UE. IDs fiscais de fora da UE (por exemplo, números CHE suíços) são armazenados para exibição na fatura sem validação VIES.
* Correção: a busca de prefixo de IVA para Grécia (GR), Mônaco (MC) e Ilha de Man (IM) estava quebrada devido a uma lógica incorreta de busca em array.
* Melhoria: removida dependência de desenvolvimento wp-cli-bundle desnecessária que podia causar erros fatais quando usada junto com o complemento Site Exporter.
* Melhoria: adicionada uma suíte abrangente de testes unitários (53 testes).

Versão 1.0.6 - Lançada em 2026-01-25

* Correção: transações B2B domésticas agora cobram IVA corretamente. De acordo com as regras de IVA da UE, a cobrança reversa se aplica apenas a transações B2B transfronteiriças, não quando o país do cliente corresponde ao país da empresa.

Versão 1.0.5 - Lançada em 2026-01-22

* Correção: complemento não carregando ou não funcionando corretamente.
* Alteração: fonte de dados de alíquotas de IVA alterada de euvatrates.com para o repositório ibericode/vat-rates, para dados mais confiáveis e mantidos ativamente.
* Correção: erro de digitação corrigido no valor da opção super_reduced_rates.
* Melhoria: adicionadas verificações de null para o tratamento de código de país para evitar erros.
* Alteração: removidos arquivos de tradução incluídos em favor de atualizações automáticas via Traduttore.

Versão: 1.0.3 - Lançada em 2025-09-28

* Renomear prefixo para ultimate-multisite; atualizar domínio de texto; incremento de versão.

Versão 1.0.0-beta.4 - 2021-09-24

* Adicionado: filtro wp_ultimo_skip_network_active_check para configurações baseadas em mu-plugins;

Versão 1.0.0 - 05/08/2021 - Lançamento inicial
