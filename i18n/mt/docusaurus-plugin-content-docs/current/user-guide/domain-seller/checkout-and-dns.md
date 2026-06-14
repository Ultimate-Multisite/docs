---
title: Field tal-checkout u DNS tal-klijenti
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field u Gestjoni DNS tal il Klijenti

## Il campo di Selezione Domini checkout

Il campo **Domain Selection** huwa element checkout li jgħid il-klijenti għal opzjoni kif jgħandu dominu tal-site tagħhom. Aggiethu flim form checkout b'mod li tivveghaw l-vendita tal-domini.

### Aggiunga il campo flim form checkout

1. Irridi għal **Network Admin › Ultimate Multisite › Checkout Forms**
2. Iftah o għinniex form checkout
3. F'editor checkout, issaqaq **Add Field** (Aggiungi Campo)
4. Iżżel għal **Domain Selection** mill-lista tal-campi
5. Configura l-opzjonijiet tal-campo (ara ondfo)
6. Save il-form

### Opzjonijiet tal-campo

**Domain modes** — Iżżel li quali tabs jara il-klijenti. Kulle mod jista' jkun attivat jew inattivat b'mod indipendenti:

| Mod | X'jaġix |
|---|---|
| **Subdomain** | Il-klijent jgħandu subdomain free fuq la-network tagħkom (e.g., `mysite.yournetwork.com`). Mammiddirx l-pagamenti. |
| **Register New Domain** | Il-klijent jfitta għal dominu جديد u jiddispożizzih b'attra tal-provider li għandhom konfigurat. Jista' jgħandu il-product ta dominu li jgħatiha b'prezz. |
| **Existing Domain** | Il-klijent jmap dominu li jkun giàmma possied. Mammiddirx feeġa tal-registrazzjoni. Il-dominu jipprovvdi awtomatik għall-site tagħhom. |

**Default mode** — Meta kull ttal-mod attivat, qabel qualiex jiftħaq? Iżżel għal **Subdomain** biex tixleb il-registrazzjoni tal-dominu opzjonali, jew **Register New Domain** biex tgħanni l-komprodi.

**Domain product** — Possibilment, pinja dan il-campo għal product ta dominu speċifiku. Jekk ma jkun sett, l-addon jixgħel awtomatik il-product li jgħatiha b'basa fuq il-TLD li jfitta il-klijent.

### Campi tal-kontatt tal-registrant

Meta il-klijent jżżel il tab **Register New Domain**, il-form checkout jiddejna campi ta kontatt tal-registrant inline:

- Primu Nomi / Iswert
- Indirizz Email
- Indirizz (line 1, città, stato/provincia, codice postale, pajar)
- Numero telefoni

אלו נדרשים על ידי כל הרשמים ומוסמכים לפני ביצוע קריאת ה-API של ההרשמה. מספרי טלפון מתעצבים אוטומטית לפורמט הבינלאומי `+CC.NNN` שההרשמים מצפים לו.

### כתובת אתר שנוצרה אוטומטית

כאשר לקוח מתורגם או ממפה דומיין, השדה כתובת האתר (site URL) מתמלא אוטומטית מהדומיין שנבחר. ללקוחות אין צורך למלא שדה URL נפרד.

### התנהגות חיפוש

- זמינות הדומיין נבדקת בזמן אמת באמצעות AJAX כשהמשתמש מקליד
- מוצגים הצעות TLD חלופיות כאשר הדומיין המועדף אינו זמין
- המחירים נשלפים בחיים (live) ומצוינים בבירור (מחיר הרשמה, מחיר חידוש, דמי פרטי WHOIS אופציונלי)
- קודי קופון חלים על מוצרי דומיין באותם תנאים כמו כל מוצר אחר

**כיול תגובת החיפוש:**

```php
// הגדל את זמן ההשהיה של ה-debounce (מילישניות) כדי להפחית קריאות API בחיבורים איטיים
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // ברירת מחדל: 500
});
```

**הוספת שדות מותאמים אישית לטופס חיפוש הדומיין:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'הערות נוספות',
    ];
    return $fields;
});
```

---

## ניהול DNS של לקוחות

לקוחות יכולים לנהל רשומות DNS עבור הדומיינים הרשומים שלהם מהדף **My Account**, תחת הכניסה של הדומיין.

### סוגי רשומות נתמכים

| סוג | שימוש |
|---|---|
| **A** | ממפה שם מארח לכתובת IPv4 |
| **AAAA** | ממפה שם מארח לכתובת IPv6 |
| **CNAME** | יוצר כינוי המצביע על שם מארח אחר |
| **MX** | מגדיר שרת חילופי דואר |
| **TXT** | מוסיף רשומות טקסט כמו SPF, DMARC, אימות או רשומות טקסט אחרות |

### אילו ספקים תומכים בניהול DNS?

Id-DNS management (aggiungere, modifichi, elimini record) huwa disponibile con **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** e **Openprovider**. I domini di **Hostinger** possono aggiornare i nameserver tramite il Domain Seller; i record DNS per i domini ospitati vengono gestiti dalla core Hostinger domain-mapping integration. I domini Namecheap, GoDaddy e NameSilo mostrano lo stato e le informazioni sulla scadenza, ma il DNS deve essere gestito direttamente nel pannello di controllo del registrar.

### Record DNS predefiniti

Puoi configurare record DNS predefiniti che vengono applicati automaticamente quando un dominio viene registrato. Vai a **Settings › Domain Seller › Default DNS Records**.

I valori dei record predefiniti supportano due token:

| Token | Sostituito con |
|---|---|
| `{DOMAIN}` | Il nome del dominio registrato (es. `example.com`) |
| `{SITE_URL}` | L'URL del sito WordPress per il sito del cliente |

**Esempio — puntare l'apex domain e www al tuo IP del server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visualizzare e modificare il DNS

Gli amministratori di rete possono visualizzare e modificare i record DNS per qualsiasi dominio cliente dalla pagina di modifica del dominio in **Network Admin › Ultimate Multisite › Domains**.
