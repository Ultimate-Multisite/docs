---
id: wu_captcha_error_message
title: Filtre - wu_captcha_error_message
sidebar_label: wu_captcha_error_message
_i18n_hash: 218bbe8831cb78babe17f698a72282ea
---
**Use the catalog views** – they give you a clean, reliable list of every user‑table in the current database.

```sql
-- All user tables (no system tables, no views)
SELECT  s.name  AS schema_name,
        t.name  AS table_name
FROM    sys.tables      AS t
JOIN    sys.schemas     AS s
          ON t.schema_id = s.schema_id
ORDER BY s.name, t.name;
```

If you just need the names:

```sql
SELECT name
FROM   sys.tables
ORDER BY name;
```

---

### Alternatives

| Method | What it returns | When to use |
|--------|-----------------|-------------|
| `INFORMATION_SCHEMA.TABLES` | All tables (user + system) in the current database | When you need a standard view that works across SQL Server versions |
| `sys.objects` (type = 'U') | Same as `sys.tables` | If you prefer a single view |
| `sp_tables` | System stored procedure that lists tables | Quick ad‑hoc queries, but less flexible |

Example with `INFORMATION_SCHEMA.TABLES`:

```sql
SELECT TABLE_SCHEMA, TABLE_NAME
FROM   INFORMATION_SCHEMA.TABLES
WHERE  TABLE_TYPE = 'BASE TABLE'
ORDER BY TABLE_SCHEMA, TABLE_NAME;
```

---

**Bottom line:**  
The most straightforward and reliable way is to query `sys.tables` (or `sys.objects` with `type='U'`). It returns only user tables, is fast, and works in all recent SQL Server versions.
