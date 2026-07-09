---
title: Registo de alterações do IVA
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Registo de alterações de IVA {#vat-changelog}

Versão 1.0.7 - Lançada em 2026-02-03

* Correção: números de IVA alemães (DE) falhavam na validação devido a erros MS_MAX_CONCURRENT_REQ do serviço VIES SOAP. Mudou-se da API SOAP legada para a API REST oficial VIES da UE, para uma validação mais fiável.
* Correção: os números de IVA são agora aceites quando o serviço VIES está temporariamente indisponível, em vez de serem rejeitados incorretamente. É criada uma entrada de registo para revisão posterior.
* Correção: o campo IVA/NIF está agora visível para todos os países, não apenas para membros da UE. NIFs fora da UE (por exemplo, números CHE suíços) são armazenados para apresentação na fatura sem validação VIES.
* Correção: a pesquisa de prefixos de IVA para a Grécia (GR), Mónaco (MC) e Ilha de Man (IM) estava quebrada devido a lógica incorreta de pesquisa no array.
* Melhoria: removida a dependência de desenvolvimento wp-cli-bundle desnecessária que podia causar erros fatais quando usada em conjunto com o complemento Site Exporter.
* Melhoria: adicionada uma suíte abrangente de testes unitários (53 testes).

Versão 1.0.6 - Lançada em 2026-01-25

* Correção: transações B2B domésticas agora cobram IVA corretamente. De acordo com as regras de IVA da UE, a autoliquidação aplica-se apenas a transações B2B transfronteiriças, não quando o país do cliente corresponde ao país da empresa.

Versão 1.0.5 - Lançada em 2026-01-22

* Correção: complemento não carregava ou não funcionava corretamente.
* Alteração: alterada a fonte de dados das taxas de IVA de euvatrates.com para o repositório ibericode/vat-rates, para dados mais fiáveis e mantidos ativamente.
* Correção: corrigido erro de digitação no valor da opção super_reduced_rates.
* Melhoria: adicionadas verificações de null para o tratamento do código do país, para evitar erros.
* Alteração: removidos os ficheiros de tradução incluídos em favor de atualizações automáticas via Traduttore.

Versão: 1.0.3 - Lançada em 2025-09-28

* Renomear prefixo para ultimate-multisite; atualizar domínio de texto; incremento de versão.

Versão 1.0.0-beta.4 - 2021-09-24

* Adicionado: filtro wp_ultimo_skip_network_active_check para configurações baseadas em mu-plugins;

Versão 1.0.0 - 05/08/2021 - Lançamento inicial
