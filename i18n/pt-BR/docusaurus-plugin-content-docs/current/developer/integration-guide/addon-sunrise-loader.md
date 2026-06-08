---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Carregador de Arquivos Addon Sunrise

O Ultimate Multisite 2.8.0 adiciona um carregador de extensão sunrise para add-ons e integrações customizadas de MU-plugin que precisam rodar durante o *bootstrapping* sunrise do WordPress sem editar o arquivo `wp-content/sunrise.php` gerado.

## Quando usar

Use uma extensão sunrise quando sua integração precisar rodar antes que os plugins regulares sejam carregados, como roteamento de domínio customizado, tratamento de requisições específicas do host ou ajustes antecipados no *network bootstrap*.

Para integrações normais, prefira os plugins regulares do WordPress, os MU-plugins e os hooks documentados do Ultimate Multisite. O código sunrise roda muito cedo e deve permanecer pequeno, defensivo e sem dependências.

## Convenção de nomenclatura de arquivos

Crie um arquivo PHP chamado `sunrise.php` em um diretório de addon cujo nome comece com `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

O carregador escaneia o diretório de plugins em busca deste padrão:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Os arquivos correspondentes são carregados em ordem alfabética pelo caminho do addon.

## Onde colocar o arquivo

Coloque o arquivo no diretório raiz do addon que possui o comportamento sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

O escaneamento é resolvido em relação a `WP_CONTENT_DIR`, e não ao valor atual de `WP_PLUGIN_DIR`. Isso mantém a descoberta estável quando a multilocação ou outro código de *bootstrap* antecipado altera as constantes de diretório de plugins durante o sunrise.

Não edite o arquivo `wp-content/sunrise.php` gerado diretamente. O carregador permite que o código customizado estenda o comportamento sunrise sem forkar o arquivo core sunrise que o Ultimate Multisite instala e atualiza.

## Hooks e filtros disponíveis

Os arquivos sunrise de addon rodam depois que o mapeamento de domínio do Ultimate Multisite é carregado e antes que o WordPress dispare `ms_loaded`. Neste ponto, um arquivo sunrise pode:

- ler ou sobrescrever `$current_site` e `$current_blog`;
- acessar `$wpdb` depois que a configuração do banco de dados for carregada;
- definir constantes de tempo sunrise, como `BLOG_ID_CURRENT_SITE`, quando necessário;
- ler o estado do helper sunrise do Ultimate Multisite, incluindo o estado de roteamento usado por integrações multi-tenancy.

O Ultimate Multisite dispara `wu_sunrise_loaded` depois que seu carregador sunrise termina. Use este action para código que deve rodar depois que o *bootstrap* sunrise estiver completo, mas que ainda pertence ao ciclo de vida sunrise.

Chame apenas funções que já foram carregadas na fase sunrise. Evite trabalhos pesados com banco de dados, renderização de templates, requisições HTTP e código que assume que a ordem normal de carregamento de plugins foi concluída.

## Exemplo mínimo

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

Após implantar o arquivo, carregue um domínio mapeado e um URL de site principal não mapeado para confirmar que ambos os caminhos ainda fazem o *bootstrap* corretamente.
