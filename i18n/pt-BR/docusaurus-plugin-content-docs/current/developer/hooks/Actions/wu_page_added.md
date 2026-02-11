---
id: wu_page_added
title: ''
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Ação: wu_page_added

Permitir que desenvolvedores de plugins executem coisas adicionais quando páginas são registradas.

Ao contrário do wu_page_load, que só é executado quando uma página específica está sendo visualizada, este hook é executado no registro de cada página administrativa adicionada usando código do Ultimate Multisite.

## Parameters

| Nome | Tipo | Descrição |
|------|------|-----------|
| $page_id | `string` | O ID desta página. |
| $page_hook | `string` | O nome do hook desta página. |

### Desde

- 2.0.0

### Fonte

Definido em [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
