---
id: wu_page_added
title: Kitendo - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Inaruhusu wapangaji wa plugin kutekeleza vitu vingine wakati kurasa (pages) zinapoandikishwa.

Tofauti na `wu_page_load`, ambayo inatendeka tu wakati ukurasa maalum unapoonekana, hook hii inatendeka wakati wa kuandikishwa kwa kila ukurasa wa admin unaoongezwa kwa kutumia Ultimate Multisite code.

## Viparametrika {#parameters}

| Jina | Aina | Maelezo |
|------|------|-------------|
| $page_id | `string` | ID ya ukurasa huu. |
| $page_hook | `string` | Jina la hook la ukurasa huu. |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) kwenye mstari wa 228
