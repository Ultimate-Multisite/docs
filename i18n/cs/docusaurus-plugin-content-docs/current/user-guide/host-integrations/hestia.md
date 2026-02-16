---
title: Integrace s ovládacím panelem Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrace s Hestia Control Panel

Tento průvodce vysvětluje, jak nakonfigurovat integraci Ultimate Multisite s Hestia, aby se mapované domény ve vaší síti automaticky přidávaly (a odebíraly) jako aliasy webových domén v Hestia.

- Referenční příkazy Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Oficiální dokumentace REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Co integrace dělá
- Když se v Ultimate Multisite namapuje doména, integrace zavolá Hestia API a spustí:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Když se mapování domény odstraní, spustí se:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Volitelně přidává/odebírá alias `www.` podle vašeho nastavení „Automaticky vytvořit www subdoménu" v nastavení mapování domén.

## Předpoklady
- Existující webová doména v Hestia, která již směřuje na vaši WordPress instalaci. Integrace bude k této základní doméně připojovat aliasy.
- Povolený přístup k Hestia API. Autentizovat se můžete buď heslem, nebo API hashem/tokenem.

Podrobnosti o povolení API přístupu a autentizaci najdete v dokumentaci Hestia REST API:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurace (Průvodce → Integrace → Hestia)
Zadejte následující hodnoty:

- `WU_HESTIA_API_URL` (povinné)
  - Základní API endpoint, obvykle `https://vas-hestia-server:8083/api/`.
- `WU_HESTIA_API_USER` (povinné)
  - Uživatel Hestia používaný pro API příkazy (často `admin`).
- `WU_HESTIA_API_PASSWORD` nebo `WU_HESTIA_API_HASH` (alespoň jedno)
  - Vyberte jednu metodu autentizace: heslo nebo API hash/token.
- `WU_HESTIA_ACCOUNT` (povinné)
  - Účet (vlastník) webové domény v Hestia; toto je první argument pro CLI.
- `WU_HESTIA_WEB_DOMAIN` (povinné)
  - Existující webová doména v Hestia, která obsluhuje váš WordPress (aliasy se budou připojovat sem).
- `WU_HESTIA_RESTART` (volitelné; výchozí `yes`)
  - Zda restartovat/načíst znovu služby po změnách aliasů.

Můžete nechat průvodce vložit tyto konstanty do `wp-config.php`, nebo je definovat ručně.

## Ověření nastavení
- V kroku „Testování" průvodce plugin zavolá `v-list-web-domains <WU_HESTIA_ACCOUNT> json` přes API. Úspěšná odpověď potvrdí připojení a autentizaci.
- Po namapování domény zkontrolujte v Hestia: Web > základní doména > Aliasy. Měli byste vidět nově přidaný alias.

## Poznámky a tipy
- Ujistěte se, že `WU_HESTIA_WEB_DOMAIN` již existuje a je vlastněna účtem `WU_HESTIA_ACCOUNT`.
- Pokud potřebujete SSL, spravujte certifikáty v Hestia. Tato integrace aktuálně řeší pouze aliasy.
- Plugin může také přidávat/odebírat `www.<doména>` v závislosti na vašem nastavení „www subdoména" v mapování domén.

## Příklad API volání (cURL)
Níže je koncepční příklad (upravte podle vašeho prostředí). Přesné parametry najdete v oficiální dokumentaci.

```
POST https://vas-hestia-server:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=VASE_API_HESLO  (nebo &hash=VAS_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=sit.priklad.cz         (WU_HESTIA_WEB_DOMAIN)
&arg3=zakaznik-domena.cz     (alias k přidání)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Pro smazání použijte `cmd=v-delete-web-domain-alias` se stejnými argumenty.

## Řešení problémů
- HTTP chyba z API: ověřte, že `WU_HESTIA_API_URL` je dostupná a obsahuje `/api`.
- Chyby autentizace: zkontrolujte `WU_HESTIA_API_USER` a buď `WU_HESTIA_API_PASSWORD`, nebo `WU_HESTIA_API_HASH`.
- „Chybí účet/základní doména" v logách: ujistěte se, že `WU_HESTIA_ACCOUNT` a `WU_HESTIA_WEB_DOMAIN` jsou nastaveny a platné v Hestia.

## Reference
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Reference Hestia CLI (Aliasy): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
