---
title: Carregador de ficheiros Sunrise do complemento
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Carregador de ficheiros Sunrise de addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 adiciona um carregador de extensões sunrise para add-ons e integrações personalizadas de MU-plugin que precisam de ser executadas durante o arranque sunrise do WordPress sem editar o ficheiro gerado `wp-content/sunrise.php`.

## Quando usá-lo {#when-to-use-it}

Use uma extensão sunrise quando a sua integração tiver de ser executada antes de os plugins regulares serem carregados, como encaminhamento de domínios personalizado, tratamento de pedidos específico do anfitrião ou ajustes iniciais ao arranque da rede.

Para integrações normais, prefira plugins WordPress regulares, MU-plugins e os hooks Ultimate Multisite documentados. O código sunrise é executado muito cedo e deve permanecer pequeno, defensivo e sem dependências.

## Convenção de nomes de ficheiros {#file-naming-convention}

Crie um ficheiro PHP chamado `sunrise.php` num diretório de addon cujo nome comece com `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

O carregador analisa o diretório de plugins à procura deste padrão:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Os ficheiros correspondentes são carregados por ordem alfabética do caminho do addon.

## Onde colocar o ficheiro {#where-to-place-the-file}

Coloque o ficheiro no diretório raiz do addon que detém o comportamento sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

A análise é resolvida relativamente a `WP_CONTENT_DIR`, não ao valor atual de `WP_PLUGIN_DIR`. Isto mantém a descoberta estável quando multi-inquilino ou outro código de arranque inicial altera constantes de diretório de plugins durante o sunrise.

Não edite diretamente o ficheiro gerado `wp-content/sunrise.php`. O carregador permite que código personalizado estenda o comportamento sunrise sem fazer fork do ficheiro sunrise principal que Ultimate Multisite instala e atualiza.

## Hooks e filtros disponíveis {#hooks-and-filters-available}

Os ficheiros sunrise de addon são executados depois de o mapeamento de domínios do Ultimate Multisite ter carregado e antes de o WordPress disparar `ms_loaded`. Neste ponto, um ficheiro sunrise pode:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- definir constantes de tempo sunrise como `BLOG_ID_CURRENT_SITE` quando necessário;
- ler o estado dos auxiliares sunrise do Ultimate Multisite, incluindo o estado de encaminhamento usado por integrações multi-inquilino.

Ultimate Multisite dispara `wu_sunrise_loaded` depois de o seu carregador sunrise terminar. Use essa ação para código que deva ser executado após o arranque sunrise estar concluído, mas que ainda pertença ao ciclo de vida sunrise.

Chame apenas funções que já estejam carregadas na fase sunrise. Evite trabalho intensivo na base de dados, renderização de templates, pedidos HTTP e código que pressuponha que a ordem normal de carregamento de plugins já foi concluída.

## Exemplo mínimo {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Depois de implementar o ficheiro, carregue um domínio mapeado e um URL do site principal não mapeado para confirmar que ambos os caminhos continuam a arrancar corretamente.
