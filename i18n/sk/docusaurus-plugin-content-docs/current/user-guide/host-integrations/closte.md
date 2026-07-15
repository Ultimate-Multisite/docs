---
title: Integrácia Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrácia s Clostom

## Prehľad {#overview}
Closte je platforma pre hostovanie WordPressu postavená na infraštruktúre Google Cloud. Táto integrácia umožňuje automatické synchronizovanie domén a správu SSL certifikátov medzi Ultimate Multisite a Closte.

## Funkcionality {#features}
- Automatické synchronizovanie domén
- Správa SSL certifikátov
- Podpora wildcard domén
- Nie je potrebná žiadna konfigurácia, ak sa chạy na Closte

## Požiadavky {#requirements}
Ak používate Closte, musíte v súbore `wp-config.php` definovať nasledujúcu kon constantu:

```php
define('CLOSTE_CLIENT_API_KEY', 'vaša_api_kľúč');
```

Táto constanta je zvyčajne už definovaná, ak hostujete na Closte.

## Pokyny na konfiguráciu {#setup-instructions}

### 1. Overtečte si API kľúč Closte {#1-verify-your-closte-api-key}

Ak hostujete na Closte, constanta `CLOSTE_CLIENT_API_KEY` by mala byť už definovaná v súbore `wp-config.php`. Môžete to overiť pomocou prezerania vášho súboru `wp-config.php`.

### 2. Aktivujte integráciu {#2-enable-the-integration}

1. V administrácii WordPress ide do Ultimate Multisite > Settings
2. Prejdite na záložku "Domain Mapping" (Mapovanie domén)
3. Prejdite dole na sekciu "Host Integrations" (Integrácie hostov)
4. Aktivujte integráciu Closte
5. Kliknite na "Save Changes" (Uložiť zmeny)

## Ako to funguje {#how-it-works}

Keď je doména mapovaná v Ultimate Multisite:

1. Integrácia pošle požiadavku API Closte, aby domén prispôsobil vaše aplikácie
2. Closte automaticky spravuje poskytovanie SSL certifikátov
3. Keď odstráníte mapovanie domény, integrácia doménu odstráni z Closte

Integrácia tiež funguje s nastavením intervalu prečítania DNS v Ultimate Multisite, čo vám umožňuje nakonfigurovať, ako často systém skontroluje propagáciu DNS a vydávanie SSL certifikátov.

Vytvorenie záznamu domény

Táto integrácia zabezpečuje, že keď sa vytvorí alebo duplikuje web, automaticky sa vytvorí záznam domény. Toto je zvlášť dôležité pre integráciu Closte, pretože vytvorenie záznamu domény spustí API Closte na vytvorenie domény a SSL certifikátu.

## Riešenie problémov (Troubleshooting) {#domain-record-creation}

### Problémy s pripojením k API {#troubleshooting}
- Skontrolujte, či je váš API kľúč Closte správny
- Uistite sa, že váš účet Closte má potrebné povolenia

### Problémy so SSL certifikátom {#api-connection-issues}
- Closte môže trvať dlhšie na vydanie SSL certifikátov (obvykle 5–10 minút)
- Skontrolujte, či vaše domény správne ukážu IP adresu vášho servera Closte
- Prekontrolujte DNS záznamy pre vašu doménu a uistite sa, že sú správne nakonfigurované

### Doména nebola pridaná {#ssl-certificate-issues}
- Skontrolujte si logy Ultimate Multisite na akékoľvek chybové správy
- Uistite sa, že doména nie je už pridaná do Closte
- Uistite sa, že DNS záznamy vašej domény sú správne nakonfigurované

### Interval pre kontrolu DNS {#domain-not-added}
- Ak vydávanie SSL certifikátov trvá príliš dlho, môžete upraviť interval pre kontrolu DNS v nastaveniach mapovania domén (Domain Mapping settings)
- Predpokladaný interval je 300 sekúnd (5 minút), ale môžete ho nastaviť na čo najnižšie ako 10 sekúnd pre rýchlejšiu kontrolu počas testov
