---
id: wu_ses_verification_integration
title: Szűrő - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Szűrő: wu_ses_verification_integration

Szűrő: lehetővé teszi más kódrészletek számára, hogy biztosítsák az SES integrációs objektumot.

A visszaadott objektumnek kell implementálnia a következőket: - `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error` - `check_domain_verification(string $domain): array{verified: bool}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $integration | `object\|null` | Az SES integrációs objektuma, vagy null. |

### Since

- 2.2.0
### Source

Definíciója található [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) fájlban, 731-sorban.
