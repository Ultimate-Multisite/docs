---
title: Registro de alterações do Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Changelog do Site Exporter

Versão: 1.0.6 - Lançada em 2026-05-11
* Novo: As exportações de site agora incluem um index.php com inicialização automática, para que o ZIP possa ser instalado em um host novo sem uma instalação separada de plugin
* Novo: A exportação de rede permite que administradores exportem todos os subsites em um único arquivo a partir da página de administração do Site Export

Versão: 1.0.5 - Lançada em 2026-05-05
* Correção: Adicionado __callStatic ao stub de polyfill WP_CLI para lidar com métodos não simulados como get_config, evitando falhas na inicialização dos testes

Versão: 1.0.4 - Lançada em 2025-11-25

* Corrigir compatibilidade com Ultimate Multisite 2.4.

Versão: 1.0.2 - Lançada em 2025-09-28

* Renomear prefixo para ultimate-multisite; atualizar domínio de texto; incremento de versão.

### Versão 1.0.1 - Lançada em 2023-08-09 {#version-101---released-on-2023-08-09}

* Melhorado: Agora garante que o caminho de arquivo correto do arquivo importador seja obtido.
* Corrigido: Cache de objetos desativado para evitar erros durante a importação.
* Corrigido: Corrigido o problema com o link de download do plugin importador que não funcionava.

### Versão 1.0.0 - Lançada em 2022-12-23 {#version-100---released-on-2022-12-23}

* Corrigido: Popup do formulário de exportação não carregando;
* Corrigido: Arquivos Javascript não carregando na página de exportação;
* Interno: Novo processo de build;

### Versão 1.0.0-beta.4 - Lançada em 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interno: Adicionado gerador de hooks e filtros;
* Interno: Adicionados stubs do WP Ultimo para qualidade de vida do desenvolvedor;
