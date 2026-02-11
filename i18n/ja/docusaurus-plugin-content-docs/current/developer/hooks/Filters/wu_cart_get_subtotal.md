---
id: wu_cart_get_subtotal
title: フィルタ - wu_cart_get_subtotal
sidebar_label: wu_cart_get_subtotal
_i18n_hash: b4c83b261d6009edfbb17c6f27f6ae60
---
Here’s a ready‑to‑run `CREATE TABLE` statement that will create the table only if it doesn’t already exist.  
I’ve included two versions—one for **MySQL** and one for **PostgreSQL**—so you can pick the one that matches your database.

---

### MySQL

```sql
CREATE TABLE IF NOT EXISTS contacts (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    phone       VARCHAR(50),
    address     VARCHAR(255),
    city        VARCHAR(100),
    state       VARCHAR(100),
    zip         VARCHAR(20),
    country     VARCHAR(100),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### PostgreSQL

```sql
CREATE TABLE IF NOT EXISTS contacts (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    phone       VARCHAR(50),
    address     VARCHAR(255),
    city        VARCHAR(100),
    state       VARCHAR(100),
    zip         VARCHAR(20),
    country     VARCHAR(100),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#### Quick notes

| Column | Type | Notes |
|--------|------|-------|
| `id` | `INT AUTO_INCREMENT` (MySQL) / `SERIAL` (PostgreSQL) | Auto‑incrementing primary key |
| `name`, `email` | `VARCHAR(255)` | `NOT NULL` – adjust if you want them optional |
| `phone`, `address`, `city`, `state`, `zip`, `country` | `VARCHAR` | Lengths are suggestions; tweak as needed |
| `created_at` | `TIMESTAMP` | Defaults to the current timestamp when a row is inserted |

Feel free to adjust column lengths or add constraints (e.g., `UNIQUE(email)`) as your application requires.
