---
title: Registro de alterações do Domain Seller
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Changelog do Domain Seller

Versão 1.3.0 - Lançada em 2026-06-02
- Novo: Adicionado um aviso no network-admin quando o saldo de revendedor da HostAfrica fica muito baixo
- Novo: Adicionado mapeamento automático de domínios recém-registrados para o site da rede
- Correção: Aplicados os requisitos de campos do registrante apenas ao registrar um novo domínio
- Correção: Tornados dispensáveis os avisos de monitoramento de saldo
- Correção: Garantido que os detalhes de cobrança do registrante no WooCommerce sejam preservados
- Correção: Aplicados os requisitos de contato do registrante durante o registro
- Correção: Impedida a criação de produtos de registro de domínio com markup de 0%
- Correção: Preservadas as seleções de domínio e os preços durante o fluxo da sessão de checkout
- Correção: Melhorada a exibição da moeda dos preços de domínio da HostAfrica
- Correção: Melhorado o comportamento do form-action do checkout para evitar incompatibilidades de query-var do WP-core
- Melhorado: Vinculada a documentação de configuração de revendedor da HostAfrica nas orientações de configuração

Versão 1.2.0 - Lançada em 2026-05-25
- Novo: Adicionado HostAfrica como uma integração de venda de domínios com suporte a checkout, assistente de configuração, consulta, TLD/preços, registro, renovação, transferência, nameserver, DNS, código EPP, bloqueio de registrar e proteção de ID
- Novo: Adicionado Openprovider como uma integração de venda de domínios com suporte a preços de reseller, registro, renovação, transferência, nameserver, DNS, código EPP, bloqueio de registrar, privacidade WHOIS e sincronização de TLD
- Novo: Adicionado Hostinger como uma integração de venda de domínios usando o token compartilhado da API Hostinger da integração principal para verificações de disponibilidade, registro, atualizações de nameserver, bloqueio de registrar e privacidade WHOIS
- Melhorado: Adicionados docblocks de ações e filtros do ciclo de vida de domínio para orientação de integração de desenvolvedores
- Melhorado: Metadados de compatibilidade do plugin atualizados para WordPress 7.0 no readme do addon
- Melhorado: Modelos de planejamento usados para coordenação de lançamentos futuros atualizados

Versão 1.1.0 - Lançada em 2026-05-08
- Novo: Criação de registros DNS (add_dns_record) implementada para os registrars ResellerClub, Enom e OpenSRS
- Correção: O parser padrão de registros DNS agora tolera tokens {DOMAIN} e {SITE_URL}
- Correção: Slugs dos campos de checkout de seleção de domínio receberam namespace para evitar colisão com site_url

Versão 1.0.8 - Lançada em 2026-05-07
- Correção: A precificação de domínios da ResellerClub agora busca preços de custo em tempo real no endpoint correto da API

Versão 1.0.7 - Lançada em 2026-05-06
* Correção: ResellerClub test_connection envia o parâmetro tlds obrigatório (#224)

Version 1.0.6 - Lançada em 2026-05-05
* Correção: O registro de domínios da ResellerClub agora funciona corretamente com tratamento aprimorado de respostas da API e roteamento de provedores orientado pelo registro
* Correção: Melhorias de UX na página administrativa Register Domain
* Removido: Integração com registrador CyberPanel

Version 1.0.5 - Lançada em 2026-04-02
* Novo: Integração com registrador GoDaddy para registro e gerenciamento de domínios
* Novo: Integração com registrador NameSilo
* Novo: Integração com registrador ResellerClub
* Novo: Verificação automática do domínio de envio do SES na compra e no mapeamento de domínio
* Correção: Proteger constantes do plugin contra redefinição em ambiente de teste
* Correção: Flags do MySQL agora fazem word-split corretamente em install-wp-tests.sh

Version 1.0.4 - Lançada em 2026-03-14
* **Correção:** Alguns assets de CSS ausentes
* **Correção:** Erro relacionado a TLDs indisponíveis

Version 1.0.3 - Lançada em 2026-03-09
* **Correção:** Erros de propriedade reativa do Vue (domain_option, selected_domain, domain_provider) ao usar o template de signup legado com o shortcode de checkout
* **Correção:** Desalinhamento do campo de entrada de subdomínio e texto grande demais no campo de checkout de seleção de domínio
* **Correção:** Ocultar o bloco de pré-visualização "Your URL will be" quando o campo de seleção de domínio estiver presente

Versão 1.0.2 - Lançada em 2026-03-01
* **Melhorado:** Removidas as configurações globais de markup da página de configurações — os preços agora são exclusivamente por produto
* **Melhorado:** Adicionado o link "Gerenciar produtos de domínio" na página de configurações para navegação rápida
* **Melhorado:** Descrições de campos e tooltips mais claros para configurações de produtos de domínio (catch-all vs específico por TLD, tipos de markup, preços introdutórios)
* **Melhorado:** Descrições melhores em toda a página de configurações (pesquisar TLDs, renovações, DNS, notificações)

Versão 1.0.1 - Lançada em 2026-02-27

* **Novo:** Ferramenta de importação de TLD para gerenciamento de preços em massa
* **Novo:** Suporte a preços introdutórios para produtos de domínio
* **Novo:** Suíte de testes E2E com Cypress
* **Novo:** Modelos de e-mail para notificações do ciclo de vida de domínios
* **Novo:** Campos de endereço do registrante no modal administrativo de registro de domínio, pré-preenchidos a partir das configurações
* **Novo:** Interface de gerenciamento de DNS do cliente com suporte para adicionar, editar e excluir registros
* **Novo:** Opção de checkout "traga seu próprio domínio" com mapeamento automático de domínio
* **Novo:** Gerar automaticamente a URL do site a partir do nome de domínio durante o checkout
* **Novo:** Configuração de nameservers padrão e registros DNS nas configurações
* **Novo:** Detalhes de registro de domínio e gerenciamento de DNS na página principal de edição de domínio
* **Novo:** Assistente de configuração cria automaticamente um produto de domínio padrão com valores padrão sensatos
* **Novo:** Sincronização automática diária de TLD via cron em todos os provedores configurados
* **Novo:** Proteção de privacidade WHOIS com configuração por produto (sempre ativada, escolha do cliente ou desativada)
* **Novo:** Caixa de seleção de privacidade WHOIS no checkout com exibição de preço e suporte a modo escuro
* **Novo:** Página administrativa Registrar Domínio para registro manual de domínios
* **Novo:** Atualizações automáticas de plugin via servidor de atualizações Ultimate Multisite
* **Novo:** Aba de filtro de tipo de produto de domínio na tabela de lista de produtos com estilo de selo roxo
* **Novo:** Campos de contato do registrante (nome, endereço, cidade, estado, código postal, país, telefone) no formulário de checkout de domínio

* **Novo:** Validação de campos do registrante antes de chamar a API do registrador, com mensagens de erro claras
* **Novo:** Canais de log específicos por provedor para eventos de registro de domínio (ex.: domain-seller-namecheap.log)
* **Novo:** Campos de contato do registrante no formulário principal de registro/cadastro de finalização de compra (exibidos ao registrar um domínio)
* **Melhorado:** Campo de finalização de compra de busca de domínio substituído por um campo unificado de seleção de domínio com suporte a abas de subdomínio, registro e domínio existente
* **Melhorado:** Configurações de produto de domínio renderizadas inline na página de edição do produto via sistema central de widgets
* **Melhorado:** Informações de domínio do cliente integradas ao widget central de mapeamento de domínio em vez de uma metabox independente
* **Melhorado:** Assistente de importação de TLD simplificado para sincronização com um clique a partir de todos os provedores
* **Melhorado:** Disponibilidade de domínio da Namecheap usa chamada de API em lote para busca mais rápida
* **Melhorado:** API de preços da Namecheap usa parâmetros e análise de resposta corretos
* **Melhorado:** Armazenamento centralizado de TLD em uma única opção de rede
* **Melhorado:** Registro de atividades de domínio para alterações de DNS, transferências e aplicação de configuração
* **Melhorado:** Sincronização completa de TLD para OpenSRS usando lista mestra da IANA com validação em lote
* **Melhorado:** Sincronização completa de TLD para Namecheap com solicitações de API paginadas
* **Melhorado:** Classes legadas de provedores substituídas pelo padrão Integration Registry
* **Melhorado:** Painel de configurações com configuração de DNS e transferência
* **Melhorado:** Números de telefone formatados automaticamente para o formato de registrador +CC.NNN

* **Melhorado:** A validação do campo de telefone remove caracteres de formatação antes do envio
* **Melhorado:** Requisito de versão elevado para Ultimate Multisite 2.4.12 com aviso mais claro
* **Melhorado:** O fluxo de trabalho de CI usa o checkout adequado tanto para o addon quanto para o plugin principal
* **Melhorado:** prepare_registrant_info() lê os metadados de usuário salvos no checkout com fallback para endereço de cobrança
* **Corrigido:** AJAX de busca de domínios falhava para usuários não logados durante o checkout
* **Corrigido:** AJAX de preços de domínios falhava para usuários não logados durante o checkout
* **Corrigido:** Erro fatal de redeclaração da classe Spyc ao executar comandos WP-CLI
* **Corrigido:** Timeout da API sandbox da Namecheap muito curto
* **Corrigido:** Texto do botão Select na busca de domínios não ficava visível em fundo verde
* **Corrigido:** Registro de domínio falhava com o erro "RegistrantFirstName is Missing" devido a informações de contato ausentes
* **Corrigido:** Registro de domínio criado com blog_id=0 quando o site ainda não existia no momento do checkout
* **Corrigido:** Configuração de TLDs padrão retornada como string em vez de array analisado
* **Removido:** Página administrativa independente de Gerenciamento de Domínios — agora gerenciada por meio das páginas principais de domínios

Versão 1.0.0 - Lançada em 2025-09-28

**Grande reescrita para Ultimate Multisite v2**

* **Novo:** Reescrita completa com arquitetura moderna em PHP 7.4+
* **Novo:** Integração perfeita com o sistema de checkout do Ultimate Multisite v2
* **Novo:** Gerenciamento de produtos de domínio com opções de preços flexíveis
* **Novo:** Arquitetura de suporte a múltiplos provedores de domínio
* **Novo:** Integração de renovação automática e assinatura
* **Novo:** Interface de gerenciamento de domínios do cliente
* **Novo:** Monitoramento e logs de domínios para admin
* **Novo:** Suporte a cupons para produtos de domínio
* **Novo:** Gerenciamento abrangente de configurações
* **Novo:** Base de código extensível e amigável para desenvolvedores
* **Melhorado:** Provedor OpenSRS atualizado com suporte completo a recursos
* **Melhorado:** UI moderna consistente com Ultimate Multisite v2
* **Corrigido:** Todo o código v1 obsoleto atualizado para os padrões v2
* **Removido:** Compatibilidade legada com v1 (breaking change)

### Versões anteriores (v1 legado)

### Versão 0.0.3 - 20/08/2019

* Corrigido: Incompatibilidade com Groundhogg CRM
* Observação: Esta foi a última versão compatível com v1

### Versão 0.0.2 - 07/12/2018

* Corrigido: Removido o campo License Key
* Corrigido: Abas de planos ausentes quando o plugin de recurso está ativo
* Melhorado: Adicionado um botão de pular no campo de registro

### Versão 0.0.1 - Lançamento inicial

* Integração básica com OpenSRS para WP Ultimo v1
* Pesquisa e registro simples de domínios
* Permissões de domínio baseadas em planos
