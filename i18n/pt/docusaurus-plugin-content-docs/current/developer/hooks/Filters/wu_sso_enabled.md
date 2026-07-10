---
id: wu_sso_enabled
title: Filtro - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filtro: wu_sso_enabled {#filter-wussoenabled}

Ative/desative a capacidade de single-sign-on entre domínios.

Filtre este valor para desligar completamente o single-sign-on, ou para o ativar condicionalmente.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $enabled | `bool` | O SSO deve estar ativado? True para ligado, false-ish para desligado. |

### Desde {#since}

- 2.0.11
### Fonte {#source}

Definido em [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) na linha 110


## Retorna {#returns}
Se o SSO está ativado ou não.
