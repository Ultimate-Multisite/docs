---
title: Registro de Alterações dos Tickets de Suporte
sidebar_position: 99
_i18n_hash: 91c4823bf40d597f272f50b6de5d3c98
---
# Support Tickets Changelog

### 1.0.2 - 2025-12-11
* Adicionado: Funcionalidade completa de visualização de tickets para admin e frontend
* Adicionado: Manipulador AJAX para submissões de respostas de ticket
* Adicionado: Suporte à funcionalidade de resposta de ticket com tratamento adequado de formulário
* Adicionado: Exibição adequada de avisos para submissões e respostas de ticket no admin
* Adicionado: Associação automática de ticket com o usuário atual para submissões próprias de clientes
* Adicionado: Aperfeiçoamento de segurança para impedir que clientes sobrescrevam a propriedade do ticket
* Adicionado: Funções auxiliares ausentes (wu_format_date, wu_user_can_view_ticket, etc.)
* Adicionado: Download e tratamento adequados de anexos de arquivo
* Adicionado: Sistema de notificação por e-mail para respostas de ticket e alterações de status
* Corrigido: O formulário de resposta de ticket agora inclui o ID necessário do ticket
* Corrigido: Problemas de visibilidade de avisos nas visualizações de ticket no admin
* Corrigido: Erros de sintaxe nas funções de ticket de suporte
* Melhorado: Estrutura de banco de dados com classes de consulta e esquema adequadas para respostas e anexos
* Melhorado: Migração para propriedades reais em vez de atributos para modelos de ticket

### 1.0.1 - 2025-09-28
* Atualizado: Prefixo renomeado para ultimate-multisite para consistência
* Atualizado: Padronização do domínio de texto
* Corrigido: Correções de bugs menores e melhorias

### 1.0.0 - 2025-09-01
* Lançamento inicial
* Sistema completo de gerenciamento de tickets
* Controle de acesso em múltiplos níveis
* Sistema de conversa em threads
* Suporte a anexos de arquivo
* Sistema de notificação por e-mail
* Interfaces de admin e cliente
* Estatísticas e relatórios
