---
id: wu_sso_url
title: Filtè - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtè: wu_sso_url {#filter-wussourl}

Li filtre URL SSO yo ki jenere anvan yo retounen pou aksyon kliyan ant domèn.

Sèvi ak filtè sa a lè yon entegrasyon bezwen ajoute kontèks ou fè konfyans nan yon lyen SSO pou lokatè souveren oswa ranplase URL broker a pandan li konsève validasyon token Ultimate Multisite la.

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $sso_url | `string` | URL SSO ki jenere. |
| $user | `WP_User` | Itilizatè ki pral otantifye pa vizit SSO a. |
| $site_id | `int` | ID sit sib la pou vizit la. |
| $redirect_to | `string` | URL destinasyon apre validasyon SSO reyisi. |

### Depi {#since}

- 2.13.0

### Sous {#source}

Defini nan `inc/sso/class-sso.php`.


## Retounen {#returns}

URL SSO ki filtre.
