---
title: Registo de Alterações dos Tickets de Suporte
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Registo de alterações dos Tickets de Suporte

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Melhorado: Removido o diretório vendor/ do rastreamento do Git (já coberto por .gitignore), reduzindo o tamanho do repositório
* Melhorado: Testado até WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Correção: Aceitar valores nulos em setters anuláveis do modelo de ticket
* Correção: Armazenar todos os tickets em tabelas globais de toda a rede para suporte multisite adequado
* Correção: Ocultar campos da equipa e corrigir redirecionamento para página em branco no formulário de novo ticket do cliente
* Correção: Substituir chamadas add_meta() indefinidas por update_meta() correto para armazenamento de metadados
* Correção: Substituir verificação de capacidade não registada por wu_view_all_support_tickets correto
* Correção: Adicionar handlers AJAX em falta para ações de estado do ticket, atribuição e edição rápida
* Correção: Corrigir nome do método para deteção de resposta da equipa nas vistas de tickets
* Correção: Consolidar handlers de resposta duplicados e alinhar nomes de ações nonce
* Correção: Adicionar vista frontend em falta para o shortcode [wu_submit_ticket]
* Correção: Adicionar coluna user_id em falta e corrigir método Support_Ticket::get_user_id()
* Correção: Remover aspas duplas extra na etiqueta de opção do filtro de prioridade
* Correção: Adicionar painel de gestão de tickets no administrador de rede para super administradores
* Melhorado: Consolidar CSS de administração numa única folha de estilos externa
* Melhorado: Remover submenu Settings do menu de administração do subsite
* Melhorado: Carregar condicionalmente os recursos frontend apenas nas páginas de tickets de suporte
* Melhorado: Ignorar autoloader do plugin quando o autoloader da raiz Bedrock já carregou dependências

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Adicionado: Funcionalidade completa de visualização de tickets para admin e frontend
* Adicionado: Handler AJAX para submissões de respostas a tickets
* Adicionado: Suporte para funcionalidade de resposta a tickets com tratamento adequado do formulário
* Adicionado: Apresentação adequada de avisos para submissões de tickets e respostas no admin
* Adicionado: Associação automática de tickets ao utilizador atual para submissões autónomas de clientes
* Adicionado: Melhoria de segurança para impedir que clientes substituam a propriedade do ticket
* Adicionado: Funções auxiliares em falta (wu_format_date, wu_user_can_view_ticket, etc.)
* Adicionado: Download e tratamento adequados de anexos de ficheiros
* Adicionado: Sistema de notificações por email para respostas a tickets e alterações de estado
* Corrigido: O formulário de resposta ao ticket agora inclui o ID de ticket necessário
* Corrigido: Problemas de visibilidade de avisos nas vistas de tickets no admin
* Corrigido: Erros de sintaxe nas funções de tickets de suporte
* Melhorado: Estrutura da base de dados com classes adequadas de consulta e esquema para respostas e anexos
* Melhorado: Migração para propriedades reais em vez de atributos para modelos de tickets

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Atualizado: Prefixo renomeado para ultimate-multisite para consistência
* Atualizado: Normalização do domínio de texto
* Corrigido: Pequenas correções de erros e melhorias

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Lançamento inicial
* Sistema completo de gestão de tickets
* Controlo de acesso multinível
* Sistema de conversas encadeadas
* Suporte para anexos de ficheiros
* Sistema de notificações por email
* Interfaces de admin e cliente
* Estatísticas e relatórios
