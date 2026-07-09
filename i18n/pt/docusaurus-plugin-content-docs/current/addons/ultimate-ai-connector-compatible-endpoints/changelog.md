---
title: Registo de alterações do Ultimate AI Connector para endpoints compatíveis
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Changelog do Ultimate AI Connector for Compatible Endpoints

## Versão 2.0.0 — Lançada em 2026-04-24

* Novo: Suporte a múltiplos fornecedores — configure vários endpoints de AI e encaminhe pedidos com fallback automático entre fornecedores.
* Correção: Integração do SDK de múltiplos fornecedores com IDs de fornecedor corretos, URLs de registo e âmbito do filtro HTTP por fornecedor.
* Correção: O novo cartão de fornecedor agora expande automaticamente ao adicionar; invalidação da cache de scripts na atualização do plugin.
* Correção: Namespace dinâmico da classe de fornecedor para eval() e comportamento de expansão automática para fornecedores recém-adicionados.
* Correção: Usa componentes estáveis Card/CardBody/CardHeader/CardDivider (já não experimentais) para compatibilidade com WordPress 6.9+.
* Correção: Substituído DragHandle indefinido por ícone unicode de pega para arrastar e reordenar fornecedores.
* Correção: Eliminado o pedido HTTP bloqueante que era executado em cada carregamento de página.
* Melhorado: Workflows do GitHub Actions atualizados para Node.js 24.

## Versão 1.0.0 — Lançamento inicial
