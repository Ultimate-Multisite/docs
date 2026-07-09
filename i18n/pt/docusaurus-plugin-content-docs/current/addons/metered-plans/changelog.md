---
title: Registo de alterações dos Planos medidos
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Registo de alterações dos planos medidos {#metered-plans-changelog}

Versão 1.1.0 - Lançada em 2026-05-05
- Novo: faturação de tokens de AI para subsites multisite — acompanhe e fature a utilização de tokens de AI em sites de clientes com tarifas por token configuráveis
- Novo: aplicação de conetores reconstruída com descoberta dinâmica de limites e escrita direta, garantindo precisão em tempo real em todos os conetores
- Correção: as atualizações de tabelas da base de dados agora estão corretamente alinhadas com as definições de esquema BerlinDB, evitando falhas de atualização em novas instalações
- Correção: callbacks de atualização da base de dados convertidos para o formato correto, resolvendo falhas de atualização silenciosas
- Correção: valores fracionários agora aceites no campo de entrada AI Usage Overage Markup
- Correção: resolvidos erros fatais e problemas de dupla inicialização no carregamento do plugin
- Melhorado: adicionado script npm check-env para que ambientes de desenvolvimento se autoconfigurem na primeira execução

### 1.0.3 {#103}
* Atualizado para Plugin Update Checker v5
* Adicionados cabeçalhos modernos de plugin WordPress
* Compatibilidade melhorada com as versões mais recentes do WordPress
* Desempenho do acompanhamento de utilização melhorado

### 1.0.2 {#102}
* Correções de erros e melhorias de desempenho
* Relatórios de utilização melhorados

### 1.0.0 {#100}
* Lançamento inicial
* Funcionalidade principal de faturação medida
* Acompanhamento de utilização e cálculo de excedentes
* Geração automática de faturas
