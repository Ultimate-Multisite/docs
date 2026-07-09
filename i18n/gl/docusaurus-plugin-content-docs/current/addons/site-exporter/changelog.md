---
title: Rexistro de cambios do Exportador de sitios
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Rexistro de cambios de Site Exporter {#site-exporter-changelog}

Versión: 1.0.6 - Publicada o 2026-05-11
* Novo: As exportacións de sitio agora inclúen un index.php de arranque autónomo para que o ZIP poida instalarse nun host novo sen unha instalación separada de plugin
* Novo: A exportación de rede permite aos administradores exportar todos os subsitios nun único arquivo desde a páxina de administración de Site Export

Versión: 1.0.5 - Publicada o 2026-05-05
* Corrección: Engadiuse __callStatic ao stub polyfill de WP_CLI para xestionar métodos sen mock como get_config, evitando fallos no arranque das probas

Versión: 1.0.4 - Publicada o 2025-11-25

* Corrixida a compatibilidade con Ultimate Multisite 2.4.

Versión: 1.0.2 - Publicada o 2025-09-28

* Renomear prefixo a ultimate-multisite; actualizar dominio de texto; incremento de versión.

### Versión 1.0.1 - Publicada o 2023-08-09 {#version-101---released-on-2023-08-09}

* Mellorado: Agora garante que se obteña a ruta de ficheiro correcta do ficheiro importador.
* Corrixido: Desactivouse a caché de obxectos para evitar erros durante a importación.
* Corrixido: Corrixiuse o problema polo que a ligazón de descarga do plugin importador non funcionaba.

### Versión 1.0.0 - Publicada o 2022-12-23 {#version-100---released-on-2022-12-23}

* Corrixido: A xanela emerxente do formulario de exportación non cargaba;
* Corrixido: Os ficheiros Javascript non cargaban na páxina de exportación;
* Interno: Novo proceso de compilación;

### Versión 1.0.0-beta.4 - Publicada o 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interno: Engadido xerador de hooks e filtros;
* Interno: Engadidos stubs de WP Ultimo para mellorar a calidade de vida do desenvolvedor;
