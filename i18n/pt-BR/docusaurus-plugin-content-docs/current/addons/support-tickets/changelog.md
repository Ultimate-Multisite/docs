---
title: Registro de alterações dos Tickets de Suporte
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Changelog de Tickets de Suporte

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Melhorado: Removido o diretório vendor/ do rastreamento do Git (já coberto por .gitignore), reduzindo o tamanho do repositório
* Melhorado: Testado até WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Correção: Aceitar valores null em setters anuláveis do modelo de ticket
* Correção: Armazenar todos os tickets em tabelas globais de toda a rede para suporte multisite adequado
* Correção: Ocultar campos da equipe e corrigir redirecionamento de página em branco no formulário de novo ticket do cliente
* Correção: Substituir chamadas add_meta() indefinidas por update_meta() correto para armazenamento de metadados
* Correção: Substituir verificação de capacidade não registrada por wu_view_all_support_tickets correto
* Correção: Adicionar manipuladores AJAX ausentes para ações de status, atribuição e edição rápida de tickets
* Correção: Corrigir nome do método para detecção de resposta da equipe nas visualizações de ticket
* Correção: Consolidar manipuladores de resposta duplicados e alinhar nomes de ações nonce
* Correção: Adicionar visualização frontend ausente para o shortcode [wu_submit_ticket]
* Correção: Adicionar coluna user_id ausente e corrigir método Support_Ticket::get_user_id()
* Correção: Remover aspas duplas extras na tag de opção do filtro de prioridade
* Correção: Adicionar painel de gerenciamento de tickets no admin da rede para super administradores
* Melhorado: Consolidar CSS do admin em uma única folha de estilos externa
* Melhorado: Remover submenu de Configurações do menu de admin do subsite
* Melhorado: Carregar assets de frontend condicionalmente apenas nas páginas de tickets de suporte
* Melhorado: Ignorar o autoloader do plugin quando o autoloader da raiz do Bedrock já carregou as dependências

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Adicionado: Funcionalidade completa de visualização de tickets para admin e frontend
* Adicionado: Manipulador AJAX para envios de respostas a tickets
* Adicionado: Suporte à funcionalidade de resposta a tickets com tratamento adequado de formulário
* Adicionado: Exibição adequada de avisos para envios de tickets e respostas no admin
* Adicionado: Associação automática de tickets ao usuário atual para envios próprios de clientes
* Adicionado: Aprimoramento de segurança para impedir que clientes substituam a propriedade do ticket
* Adicionado: Funções auxiliares ausentes (wu_format_date, wu_user_can_view_ticket, etc.)
* Adicionado: Download e tratamento adequados de anexos de arquivo
* Adicionado: Sistema de notificações por e-mail para respostas a tickets e alterações de status
* Corrigido: O formulário de resposta ao ticket agora inclui o ID de ticket necessário
* Corrigido: Problemas de visibilidade de avisos nas visualizações de tickets do admin
* Corrigido: Erros de sintaxe nas funções de tickets de suporte
* Melhorado: Estrutura do banco de dados com classes adequadas de consulta e esquema para respostas e anexos
* Melhorado: Migração para propriedades reais em vez de atributos para modelos de ticket

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Atualizado: Prefixo renomeado para ultimate-multisite para consistência
* Atualizado: Padronização do domínio de texto
* Corrigido: Pequenas correções de bugs e melhorias

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Lançamento inicial
* Sistema completo de gerenciamento de tickets
* Controle de acesso em vários níveis
* Sistema de conversas encadeadas
* Suporte a anexos de arquivo
* Sistema de notificações por e-mail
* Interfaces de admin e cliente
* Estatísticas e relatórios
