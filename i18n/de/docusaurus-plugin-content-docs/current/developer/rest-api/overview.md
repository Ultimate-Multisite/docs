---
title: REST-API-Übersicht
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
**REST‑API‑Dokumentation – Kunden‑ und Adress‑Service**

---

## 1.  Basis‑URL

```
https://api.example.com/v1
```

Alle Endpunkte sind relativ zu dieser Basis‑URL zu verstehen.

---

## 2.  Authentifizierung

Die API verwendet **OAuth 2.0**.  
Für jede Anfrage muss ein gültiger Access‑Token im Header übergeben werden:

```
Authorization: Bearer <access_token>
```

---

## 3.  Fehler‑Antworten

| HTTP‑Status | Code | Beschreibung |
|-------------|------|--------------|
| 400 | `bad_request` | Ungültige Parameter oder fehlende Pflichtfelder |
| 401 | `unauthorized` | Kein oder abgelaufenes Token |
| 403 | `forbidden` | Unzureichende Berechtigung |
| 404 | `not_found` | Ressource nicht gefunden |
| 500 | `internal_error` | Server‑seitiger Fehler |

Antwortkörper (JSON):

```json
{
  "error": {
    "code": "bad_request",
    "message": "Invalid request payload",
    "details": [
      {
        "field": "email",
        "issue": "missing"
      }
    ]
  }
}
```

---

## 4.  Kunden‑Endpunkte

| Methode | Pfad | Zweck | Beispiel‑Request | Beispiel‑Response |
|---------|------|-------|------------------|-------------------|
| **GET** | `/customers` | Alle Kunden abrufen (mit Pagination) | `GET /customers?limit=20&page=2` | `200 OK` + JSON‑Array |
| **GET** | `/customers/{id}` | Einzelnen Kunden abrufen | `GET /customers/123` | `200 OK` + JSON‑Objekt |
| **POST** | `/customers` | Neuen Kunden anlegen | `POST /customers` + JSON‑Body | `201 Created` + JSON‑Objekt |
| **PUT** | `/customers/{id}` | Kunden vollständig aktualisieren | `PUT /customers/123` + JSON‑Body | `200 OK` + JSON‑Objekt |
| **PATCH** | `/customers/{id}` | Teilweise Aktualisierung | `PATCH /customers/123` + JSON‑Body | `200 OK` + JSON‑Objekt |
| **DELETE** | `/customers/{id}` | Kunden löschen | `DELETE /customers/123` | `204 No Content` |

### Beispiel‑Payload (Kunde)

```json
{
  "first_name": "Max",
  "last_name": "Mustermann",
  "email": "max.mustermann@example.com",
  "phone": "+49 123 4567890",
  "address_id": 42
}
```

### Beispiel‑Response (Kunde)

```json
{
  "id": 123,
  "first_name": "Max",
  "last_name": "Mustermann",
  "email": "max.mustermann@example.com",
  "phone": "+49 123 4567890",
  "address_id": 42,
  "created_at": "2024-01-01T12:34:56Z",
  "updated_at": "2024-01-01T12:34:56Z"
}
```

---

## 5.  Adress‑Endpunkte

| Methode | Pfad | Zweck | Beispiel‑Request | Beispiel‑Response |
|---------|------|-------|------------------|-------------------|
| **GET** | `/addresses` | Alle Adressen abrufen | `GET /addresses?limit=20&page=1` | `200 OK` + JSON‑Array |
| **GET** | `/addresses/{id}` | Einzelne Adresse abrufen | `GET /addresses/42` | `200 OK` + JSON‑Objekt |
| **POST** | `/addresses` | Neue Adresse anlegen | `POST /addresses` + JSON‑Body | `201 Created` + JSON‑Objekt |
| **PUT** | `/addresses/{id}` | Adresse vollständig aktualisieren | `PUT /addresses/42` + JSON‑Body | `200 OK` + JSON‑Objekt |
| **PATCH** | `/addresses/{id}` | Teilweise Aktualisierung | `PATCH /addresses/42` + JSON‑Body | `200 OK` + JSON‑Objekt |
| **DELETE** | `/addresses/{id}` | Adresse löschen | `DELETE /addresses/42` | `204 No Content` |

### Beispiel‑Payload (Adresse)

```json
{
  "street": "Musterstraße 1",
  "city": "Berlin",
  "postal_code": "10115",
  "country": "DE"
}
```

### Beispiel‑Response (Adresse)

```json
{
  "id": 42,
  "street": "Musterstraße 1",
  "city": "Berlin",
  "postal_code": "10115",
  "country": "DE",
  "created_at": "2024-01-01T12:34:56Z",
  "updated_at": "2024-01-01T12:34:56Z"
}
```

---

## 6.  Pagination

Alle Listen‑Endpunkte unterstützen die Parameter `limit` (Anzahl pro Seite) und `page` (Seitennummer).  
Antworten enthalten zusätzlich ein `meta`‑Objekt:

```json
{
  "data": [ ... ],
  "meta": {
    "total": 125,
    "limit": 20,
    "page": 2,
    "pages": 7
  }
}
```

---

## 7.  Filter‑ und Sortier‑Parameter

| Parameter | Typ | Beschreibung |
|-----------|-----|--------------|
| `search` | string | Freitextsuche (Name, Email, etc.) |
| `sort_by` | string | Feld, nach dem sortiert werden soll (z. B. `last_name`) |
| `sort_order` | string | `asc` oder `desc` (Standard: `asc`) |
| `created_after` | ISO‑8601‑Datum | Nur Kunden/Adressen ab diesem Datum |
| `created_before` | ISO‑8601‑Datum | Nur Kunden/Adressen bis zu diesem Datum |

Beispiel: `GET /customers?search=Max&sort_by=last_name&sort_order=desc`

---

## 8.  Beispiel‑Workflow

1. **Kundenliste abrufen**  
   `GET https://api.example.com/v1/customers?limit=10&page=1`

2. **Neuen Kunden anlegen**  
   ```http
   POST https://api.example.com/v1/customers
   Content-Type: application/json
   Authorization: Bearer <token>

   {
     "first_name": "Anna",
     "last_name": "Schmidt",
     "email": "anna.schmidt@example.com",
     "phone": "+49 987 6543210",
     "address_id": 56
   }
   ```

3. **Adresse aktualisieren**  
   ```http
   PATCH https://api.example.com/v1/addresses/56
   Content-Type: application/json
   Authorization: Bearer <token>

   {
     "city": "Hamburg"
   }
   ```

4. **Kunden löschen**  
   `DELETE https://api.example.com/v1/customers/123`

---

## 9.  Rate‑Limiting

- **Anzahl**: 1000 Anfragen pro Stunde pro Token
- **Header**: `X-RateLimit-Remaining`, `X-RateLimit-Reset`

---

## 10.  Kontakt

Bei Fragen oder Problemen wenden Sie sich bitte an den Support unter `support@example.com`.
