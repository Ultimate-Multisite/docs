---
id: wu_page_added
title: Azzjoni - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Azzjoni: wu_page_added

Ħalli lill-iżviluppaturi tal-estensjonijiet iħaddmu affarijiet addizzjonali meta l-paġni jiġu rreġistrati.

B’differenza minn wu_page_load, li jaħdem biss meta tkun qed tidher paġna speċifika, dan il-hook jaħdem waqt ir-reġistrazzjoni għal kull paġna tal-amministratur li tkun qed tiżdied bl-użu tal-kodiċi ta’ Ultimate Multisite.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $page_id | `string` | L-ID ta’ din il-paġna. |
| $page_hook | `string` | L-isem tal-hook ta’ din il-paġna. |

### Minn

- 2.0.0
### Sors

Iddefinit f’[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) fil-linja 228
