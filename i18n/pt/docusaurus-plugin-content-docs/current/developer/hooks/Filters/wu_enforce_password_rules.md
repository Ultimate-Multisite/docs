---
id: wu_enforce_password_rules
title: Filtro - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtro: wu_enforce_password_rules

Filtra se devem ser aplicadas regras adicionais de password.

Quando verdadeiro, aplica requisitos de comprimento mínimo e de caracteres. Ativado automaticamente para a definição "Super Strong" ou quando a funcionalidade Strong Password do Defender Pro está ativa.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $enforce_rules | `bool` | Se devem ser aplicadas regras adicionais. |
| $strength_setting | `string` | O valor da definição de admin. |
| $defender_active | `bool` | Se o Strong Password do Defender Pro está ativo. |

### Desde

- 2.4.0
### Fonte

Definido em [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) na linha 531
