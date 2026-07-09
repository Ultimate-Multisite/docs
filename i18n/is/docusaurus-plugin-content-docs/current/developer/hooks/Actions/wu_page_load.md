---
id: wu_page_load
title: Aðgerð - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Aðgerð: wu_page_load

Leyfir plugin-hönnuðum að bæta við viðbótar hooks á síðurnar okkar.

## Færibreytur

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $id | `string` | ID þessarar síðu. |
| $page_hook | `string` | Page hook þessarar síðu. |
| $admin_page | `self` | Síðu-tilvikið. |

### Frá útgáfu

- 1.8.2
- 2.0.4: Bætt við þriðju færibreytu: síðu-tilvikinu.
### Uppruni

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) í línu 318
