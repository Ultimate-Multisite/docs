---
title: Registo de alterações do Exportador de Sites
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Registo de alterações do Site Exporter

Versão: 1.0.6 - Lançada em 2026-05-11
* Novo: As exportações de sites agora incluem um index.php de arranque automático, para que o ZIP possa ser instalado num host novo sem uma instalação separada de plugin
* Novo: A exportação de rede permite que os administradores exportem todos os subsites num único arquivo a partir da página de administração do Site Export

Versão: 1.0.5 - Lançada em 2026-05-05
* Correção: Adicionado __callStatic ao stub de polyfill WP_CLI para lidar com métodos não simulados como get_config, prevenindo falhas no arranque dos testes

Versão: 1.0.4 - Lançada em 2025-11-25

* Correção de compatibilidade com Ultimate Multisite 2.4.

Versão: 1.0.2 - Lançada em 2025-09-28

* Renomear o prefixo para ultimate-multisite; atualizar o domínio de texto; aumento de versão.

### Versão 1.0.1 - Lançada em 2023-08-09

* Melhorado: Agora garante que é obtido o caminho correto do ficheiro do importador.
* Corrigido: Cache de objetos desativada para prevenir erros durante a importação.
* Corrigido: Corrigido o problema em que a ligação de download do plugin do importador não funcionava.

### Versão 1.0.0 - Lançada em 2022-12-23

* Corrigido: Popup do formulário de exportação não carregava;
* Corrigido: Ficheiros Javascript não carregavam na página de exportação;
* Interno: Novo processo de build;

### Versão 1.0.0-beta.4 - Lançada em 2022-01-13

* Interno: Adicionado gerador de hooks e filtros;
* Interno: Adicionados stubs do WP Ultimo para melhorar a qualidade de vida do programador;
