---
title: Ultimate AI Connector para Endpoints Compatíveis Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Registro de Alterações do Ultimate AI Connector para Endpoints Compatíveis {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## Versão 2.0.0 — Lançado em 2026-04-24 {#version-200--released-on-2026-04-24}

* Novo: Suporte multi-provedor — configure múltiplos endpoints de IA e roteie requisições com fallback automático entre os provedores.
* Correção: Integração do SDK multi-provedor com IDs de provedor, URLs de registro e escopo de filtro HTTP corretos para cada provedor.
* Correção: O novo cartão de provedor agora se expande automaticamente ao ser adicionado; quebra de cache de script na atualização do plugin.
* Correção: Namespace de classe de provedor dinâmico para `eval()` e comportamento de expansão automática para provedores recém-adicionados.
* Correção: Utiliza componentes estáveis Card/CardBody/CardHeader/CardDivider (não mais experimentais) para compatibilidade com WordPress 6.9+.
* Correção: Substituiu o DragHandle indefinido por um ícone de pega Unicode para reordenar provedores por arrastar.
* Correção: Eliminou requisição HTTP bloqueadora que era disparada em cada carregamento de página.
* Melhorado: Fluxos de trabalho do GitHub Actions atualizados para Node.js 24.

## Versão 1.0.0 — Lançamento Inicial {#version-100--initial-release}
