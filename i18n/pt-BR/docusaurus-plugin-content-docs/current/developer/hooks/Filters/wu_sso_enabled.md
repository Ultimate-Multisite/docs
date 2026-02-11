---
id: wu_sso_enabled
title: Filtro - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Ativar/desativar a capacidade de login único entre domínios.

Filtre este valor para desligar completamente o login único, ou habilitá-lo condicionalmente.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $enabled | `bool` | O SSO deve estar habilitado? Verdadeiro para ativado, falso (ou semelhante) para desativado. |

### Desde

- 2.0.11

### Fonte

Definido em [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) na linha 110

## Retorna

Se o SSO está habilitado ou não.
