---
id: wu_use_domain_mapping
title: פילטר - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

קבע אם יש להשתמש במתאמת דומיין

בדרך כלל, תרצה לאפשר להשתמש רק במתאמות פעילות. עם זאת, אם אתה רוצה להשתמש בלוגיקה מתקדמת יותר, או לאפשר גם מיפוי של דומיינים שאינם פעילים, פשוט בצע סינון (filter) כאן.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $is_active | `bool` | האם יש להתייחס למתאמה כפעילה? |
| $mapping | `\Domain` | המיפוי שאנו בוחנים |
| $domain | `string` | |

### מקור {#source}

מוגדר ב-[inc/class-domain-mapping.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) בשורה 391
