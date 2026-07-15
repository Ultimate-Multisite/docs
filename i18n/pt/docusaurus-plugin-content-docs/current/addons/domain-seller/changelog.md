---
title: Registo de alterações do Vendedor de domínios
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Registo de alterações do Vendedor de Domínios

Versão 1.3.0 - Lançada em 2026-06-02
- Novo: Adicionado um aviso no administrador da rede quando o saldo de revendedor da HostAfrica fica demasiado baixo
- Novo: Adicionado mapeamento automático de domínios recém-registados para o site da rede
- Correção: Aplicados os requisitos dos campos do registante apenas ao registar um novo domínio
- Correção: Tornadas dispensáveis as notificações de monitorização de saldo
- Correção: Garantido que os detalhes de faturação do registante no WooCommerce são preservados
- Correção: Impostos os requisitos de contacto do registante durante o registo
- Correção: Impedido que produtos de registo de domínios sejam criados com 0% de margem
- Correção: Preservadas as seleções de domínio e os preços ao longo do fluxo da sessão de finalização da compra
- Correção: Melhorada a apresentação da moeda dos preços de domínios da HostAfrica
- Correção: Melhorado o comportamento da ação do formulário de finalização da compra para evitar incompatibilidades de variáveis de consulta do núcleo do WP
- Melhorado: Ligada a documentação de configuração de revendedor da HostAfrica na orientação de configuração

Versão 1.2.0 - Lançada em 2026-05-25
- Novo: Adicionada a HostAfrica como uma integração de venda de domínios com suporte para finalização da compra, assistente de configuração, pesquisa, TLD/preços, registo, renovação, transferência, nameserver, DNS, código EPP, bloqueio do registador e proteção de ID
- Novo: Adicionado o Openprovider como uma integração de venda de domínios com suporte para preços de revendedor, registo, renovação, transferência, nameserver, DNS, código EPP, bloqueio do registador, privacidade WHOIS e sincronização de TLD
- Novo: Adicionado o Hostinger como uma integração de venda de domínios usando o token partilhado da API do Hostinger da integração principal para verificações de disponibilidade, registo, atualizações de nameserver, bloqueio do registador e privacidade WHOIS
- Melhorado: Adicionados docblocks de ações e filtros do ciclo de vida de domínios para orientação de integração de programadores
- Melhorado: Atualizados os metadados de compatibilidade do plugin para WordPress 7.0 no readme do addon
- Melhorado: Atualizados os modelos de planeamento usados para a coordenação de próximos lançamentos

Versão 1.1.0 - Lançada em 2026-05-08
- Novo: Criação de registos DNS (add_dns_record) implementada para os registadores ResellerClub, Enom e OpenSRS
- Correção: O analisador de Registos DNS predefinidos agora tolera os tokens {DOMAIN} e {SITE_URL}
- Correção: Slugs dos campos de seleção de domínio na finalização da compra com namespace para evitar colisão com site_url

Versão 1.0.8 - Lançada em 2026-05-07
- Correção: Os preços de domínios da ResellerClub agora obtêm preços de custo em direto a partir do endpoint de API correto

Versão 1.0.7 - Lançada em 2026-05-06
* Correção: ResellerClub test_connection envia o parâmetro tlds obrigatório (#224)

Versão 1.0.6 - Lançada em 2026-05-05
* Correção: O registo de domínios da ResellerClub agora funciona corretamente com melhor tratamento de respostas da API e encaminhamento de fornecedor orientado pelo registo
* Correção: Melhorias de UX na página de administração Registar Domínio
* Removido: Integração do registador CyberPanel

Versão 1.0.5 - Lançada em 2026-04-02
* Novo: Integração do registador GoDaddy para registo e gestão de domínios
* Novo: Integração do registador NameSilo
* Novo: Integração do registador ResellerClub
* Novo: Verificação automática do domínio de envio SES na compra e mapeamento de domínio
* Correção: Protegidas as constantes do plugin contra redefinição no ambiente de teste
* Correção: Flags de MySQL separadas corretamente por palavra em install-wp-tests.sh

Versão 1.0.4 - Lançada em 2026-03-14
* **Correção:** Alguns assets css em falta
* **Correção:** Erro relacionado com tlds indisponíveis

Versão 1.0.3 - Lançada em 2026-03-09
* **Correção:** Erros de propriedades reativas do Vue (domain_option, selected_domain, domain_provider) ao usar o modelo de inscrição legado com o shortcode de finalização da compra
* **Correção:** Desalinhamento do campo de entrada de subdomínio e texto sobredimensionado no campo de seleção de domínio da finalização da compra
* **Correção:** Ocultar o bloco de pré-visualização "O seu URL será" quando o campo de seleção de domínio está presente

Versão 1.0.2 - Lançada em 2026-03-01
* **Melhorado:** Removidas as definições globais de margem da página de definições — os preços agora são exclusivamente por produto
* **Melhorado:** Adicionado o link "Gerir Produtos de Domínio" na página de definições para navegação rápida
* **Melhorado:** Descrições de campos e dicas mais claras para definições de produtos de domínio (catch-all vs específicas de TLD, tipos de margem, preços introdutórios)
* **Melhorado:** Melhores descrições em toda a página de definições (pesquisar TLDs, renovações, DNS, notificações)

Versão 1.0.1 - Lançada em 2026-02-27

* **Novo:** Ferramenta de importação de TLD para gestão de preços em massa
* **Novo:** Suporte a preços introdutórios para produtos de domínio
* **Novo:** Conjunto de testes E2E com Cypress
* **Novo:** Templates de email para notificações do ciclo de vida de domínios
* **Novo:** Campos de morada do titular no modal de registo de domínio do administrador, pré-preenchidos a partir das definições
* **Novo:** Interface de gestão de DNS do cliente com suporte para adicionar, editar e eliminar registos
* **Novo:** Opção de checkout "traga o seu próprio domínio" com mapeamento automático de domínio
* **Novo:** Gerar automaticamente o URL do site a partir do nome de domínio durante o checkout
* **Novo:** Configuração de nameserver e registo DNS predefinidos nas definições
* **Novo:** Detalhes de registo de domínio e gestão de DNS na página principal de edição de domínio
* **Novo:** Assistente de configuração cria automaticamente um produto de domínio predefinido com valores padrão sensatos
* **Novo:** Sincronização diária automática de TLD via cron em todos os fornecedores configurados
* **Novo:** Proteção de privacidade WHOIS com configuração por produto (sempre ativa, escolha do cliente ou desativada)
* **Novo:** Caixa de seleção de privacidade WHOIS no checkout com apresentação de preço e suporte a modo escuro
* **Novo:** Página de administração Registar Domínio para registo manual de domínio
* **Novo:** Atualizações automáticas de plugin através do servidor de atualizações Ultimate Multisite
* **Novo:** Separador de filtro de tipo de produto de domínio na tabela de lista de produtos com estilo de emblema roxo
* **Novo:** Campos de contacto do titular (nome, morada, cidade, distrito, código postal, país, telefone) no formulário de checkout de domínio
* **Novo:** Validação dos campos do titular antes de chamar a API do registador, com mensagens de erro claras
* **Novo:** Canais de log específicos do fornecedor para eventos de registo de domínio (por exemplo, domain-seller-namecheap.log)
* **Novo:** Campos de contacto do titular no formulário principal de registo/signup de checkout (mostrados ao registar um domínio)
* **Melhorado:** Substituído o campo de checkout Pesquisa de Domínio por um campo unificado de Seleção de Domínio com suporte a separadores de subdomínio, registo e domínio existente
* **Melhorado:** As definições de produto de domínio são renderizadas inline na página de edição de produto através do sistema principal de widgets
* **Melhorado:** As informações de domínio do cliente ligam-se ao widget principal de mapeamento de domínio em vez de uma metabox independente
* **Melhorado:** Assistente de importação de TLD simplificado para sincronização com um clique a partir de todos os fornecedores
* **Melhorado:** A disponibilidade de domínio Namecheap usa chamada API em lote para pesquisa mais rápida
* **Melhorado:** A API de preços Namecheap usa os parâmetros corretos e análise de resposta correta
* **Melhorado:** Armazenamento centralizado de TLD numa única opção de rede
* **Melhorado:** Registo de atividade de domínio para alterações de DNS, transferências e aplicação de configuração
* **Melhorado:** Sincronização completa de TLD para OpenSRS usando a lista mestre da IANA com validação em lote
* **Melhorado:** Sincronização completa de TLD para Namecheap com pedidos API paginados
* **Melhorado:** Substituídas as classes de fornecedor legadas pelo padrão Integration Registry
* **Melhorado:** Painel de definições com configuração de DNS e transferência
* **Melhorado:** Números de telefone formatados automaticamente para o formato de registador +CC.NNN
* **Melhorado:** Validação do campo de telefone remove caracteres de formatação antes do envio
* **Melhorado:** Requisito de versão aumentado para Ultimate Multisite 2.4.12 com aviso mais claro
* **Melhorado:** Fluxo de trabalho de CI usa checkout adequado tanto para o addon como para o plugin principal
* **Melhorado:** prepare_registrant_info() lê dos metadados de utilizador guardados no checkout, com recurso ao endereço de faturação
* **Corrigido:** AJAX de pesquisa de domínio falhava para utilizadores sem sessão iniciada durante o checkout
* **Corrigido:** AJAX de preços de domínio falhava para utilizadores sem sessão iniciada durante o checkout
* **Corrigido:** Erro fatal de redeclaração da classe Spyc ao executar comandos WP-CLI
* **Corrigido:** Timeout da API sandbox Namecheap demasiado curto
* **Corrigido:** Texto do botão Selecionar na pesquisa de domínio não visível em fundo verde
* **Corrigido:** Registo de domínio falhava com erro "RegistrantFirstName is Missing" devido a informações de contacto em falta
* **Corrigido:** Registo de domínio criado com blog_id=0 quando o site ainda não existia no momento do checkout
* **Corrigido:** Definição de TLDs predefinidos devolvida como string em vez de array analisado
* **Removido:** Página de administração Gestão de Domínios independente — agora tratada através das páginas principais de domínio

Versão 1.0.0 - Lançada em 2025-09-28

**Reescrita importante para Ultimate Multisite v2**

* **Novo:** Reescrita completa com arquitetura moderna PHP 7.4+
* **Novo:** Integração perfeita com o sistema de checkout Ultimate Multisite v2
* **Novo:** Gestão de produtos de domínio com opções de preços flexíveis
* **Novo:** Arquitetura de suporte a múltiplos fornecedores de domínio
* **Novo:** Integração de renovação automática e subscrição
* **Novo:** Interface de gestão de domínios do cliente
* **Novo:** Monitorização e logs de domínio para administrador
* **Novo:** Suporte a cupões para produtos de domínio
* **Novo:** Gestão abrangente de definições
* **Novo:** Base de código extensível e amigável para programadores
* **Melhorado:** Fornecedor OpenSRS atualizado com suporte completo a funcionalidades
* **Melhorado:** UI moderna consistente com Ultimate Multisite v2
* **Corrigido:** Todo o código v1 obsoleto atualizado para padrões v2
* **Removido:** Compatibilidade legada v1 (alteração incompatível)

### Versões Anteriores (v1 Legado) {#previous-versions-v1-legacy}

### Versão 0.0.3 - 20/08/2019 {#version-003---20082019}

* Corrigido: Incompatibilidade com Groundhogg CRM
* Nota: Esta foi a última versão compatível com v1

### Versão 0.0.2 - 07/12/2018 {#version-002---07122018}

* Corrigido: Removido o campo License Key
* Corrigido: Separadores de plano em falta quando o plugin de funcionalidade está ativo
* Melhorado: Adicionado um botão para ignorar no campo de registo

### Versão 0.0.1 - Lançamento Inicial {#version-001---initial-release}

* Integração básica OpenSRS para WP Ultimo v1
* Pesquisa e registo simples de domínio
* Permissões de domínio baseadas em plano
