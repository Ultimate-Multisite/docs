---
title: Integrace Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integrace Hostinger (hPanel)

## Přehled

Hostinger je populární poskytovatel webového hostingu s moderním ovládacím panelovým systémem nazvaným hPanel. Integrace Ultimate Multisite Hostinger umožňuje automatickou synchronizaci domén mezi Ultimate Multisite a hPanelu Hostingeru. Tím můžete automaticky spravovat mapování domén a poddomény přímo z administrace WordPressu.

## Funkce

- Automatické vytváření addon domén v hPanelu
- Automatické vytváření poddomén v hPanelu (pro instalace multisite s poddoménami)
- Odstranění domény při smazání mapování
- Bezproblémová integrace s API pro správu domén v hPanelu

## Požadavky

Pro použití integrace Hostingeru potřebujete:

1. Účet u Hostingeru s přístupem do hPanelu
2. API token od Hostingeru
3. Definování následujících konstant ve vašem souboru `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Volitelně můžete také definovat:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Výchozí endpoint API
```

## Instrukce pro nastavení

### 1. Vytvoření API tokenu Hostingeru

1. Přihlaste se do svého účtu Hostingeru a přistupte k hPanelu
2. Přejděte do **Account Settings** → **API Tokens**
3. Klikněte na **Create New Token**
4. Tokenu dejte popisné jméno (např. "Ultimate Multisite")
5. Vyberte potřebná oprávnění:
   - Správa domén
   - Správa poddomén
6. Zkopírujte vytvořený token a uchovejte ho v bezpečí

### 2. Najděte svůj ID účtu

1. V hPanelu se přihlaste do **Account Settings** → **Account Information**
2. Vaše ID účtu je zobrazeno na této stránce
3. Zkopírujte a uložte toto ID pro další krok

### 3. Přidání konstant do wp-config.php

Přidejte následující konstanty do vašeho souboru `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Pokud váš účet u Hostingeru používá jiný endpoint API, můžete ho přizpůsobit:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktivace integrace

1. V administraci WordPressu se přihlaste do **Ultimate Multisite > Settings**
2. Přejděte do záložky **Domain Mapping**
3. Posuvte se dolů k **Host Integrations**
4. Aktivujte integraci **Hostinger (hPanel)**
5. Klikněte na **Save Changes**

## Jak to funguje

### Addon domény

Když v Ultimate Multisite mapujete doménu:

1. Integrace odešle požadavek do API Hostingeru, aby přidala doménu jako addon doménu
2. Doména je nakonfigurována tak, aby ukazovala na váš kořenový adresář
3. Když je mapování domény odstraněno, integrace automaticky odstraní addon doménu z hPanelu

### Poddomény

U instalací multisite s poddoménami, když je vytvořena nová stránka:

1. Integrace extrahuje část poddomény z celé domény
2. Odešle požadavek do API Hostingeru, aby přidala poddoménu
3. Poddoména je nakonfigurována tak, aby ukazovala na váš kořenový adresář

## Důležité poznámky

- Integrace používá REST API Hostingeru k komunikaci se vaším účtem
- Váš API token musí mít potřebná oprávnění pro správu domén a poddomén
- Integrace neřeší konfiguraci DNS; domény musí být již směřovány na váš účet u Hostingeru
- Požadavky na API jsou odesílány bezpečně přes HTTPS
- Udržujte svůj API token v bezpečí a nikdy ho veřejně sdílejte

## Řešení problémů

### Problémy se spojení API

- Ověřte, že váš API token je správný a neuzpůsobilý
- Zkontrolujte, že je vaše ID účtu správné
- Ujistěte se, že váš API token má potřebná oprávnění pro správu domén
- Ověřte, že váš účet u Hostingeru je aktivní a v pořádném stavu

### Doména nebyla přidána

- Zkontrolujte logy Ultimate Multisite, zda nejsou viditelné žádné chybové hlášky
- Ověřte, že doména není již přidána do vašeho účtu u Hostingeru
- Ujistěte se, že váš účet u Hostingeru nedosáhl limitu pro addon domény
- Potvrďte, že doména je správně směřována na vaše nameservery Hostingeru

### Problémy se SSL certifikáty

- Integrace neřeší vydávání SSL certifikátů
- Hostinger obvykle poskytuje bezplatné SSL certifikáty prostřednictvím AutoSSL
- Spravovat SSL certifikáty můžete přímo v hPanelu pod položkou **SSL/TLS**
- Alternativně použijte Let's Encrypt s funkcí AutoSSL Hostingeru

## Podpora

Pokud potřebujete s integrací Hostingeru další pomoc, prosím, obraťte se na:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
