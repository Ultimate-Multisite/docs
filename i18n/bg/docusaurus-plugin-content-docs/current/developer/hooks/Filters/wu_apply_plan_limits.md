---
id: wu_apply_plan_limits
title: Филтър - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Филтър: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Позволява на разработчиците на плагини да прескачат ограниченията.

Можете да използвате този филтър, за да изпълните произволен код преди да бъдат инициирани каквито и да било ограничения. Ако филтърът върне стойност, която е истинска (truthy), процесът ще продължи, а ако върне стойност, която е неистинна (falsy), кодът ще се върне и нито един от хуковете по-долу няма да се изпълни.

### От {#since}

- 1.7.0
### Източник {#source}

- Дефиниран в [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) на линия 52
- Дефиниран в [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) на линия 98
## Връща {#returns}
