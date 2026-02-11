---
id: wu_minimum_password_strength
title: Filtro - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtro: wu_minimum_password_strength

Filtrar a força mínima de senha exigida (pontuação zxcvbn).

Níveis de força:
- 0, 1: Muito fraca
- 2: Fraca
- 3: Média
- 4: Forte (padrão)

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $min_strength | `int` | O nível mínimo de força exigido. |
| $strength_setting | `string` | O valor da configuração de administrador (medium, strong, super_strong). |

### Desde

- 2.4.0

### Fonte

Definido em [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) na linha 516
