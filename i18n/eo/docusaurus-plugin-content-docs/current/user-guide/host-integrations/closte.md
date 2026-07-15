---
title: Integrado Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrado Closte

## Ĝenerala Informoj {#overview}
Closte estas administrita WordPress-hosta platformo, konstruita sur Google Cloud infrastrukturo. Ĉi tiu integracio permesas aŭtomatan domen sincronigon kaj SSL-sertifikatoj laĉon inter Ultimate Multisite kaj Closte.

## Funkcioj {#features}
- Aŭtomata domeno sincronigo
- SSL-sertifikatoj laĉo
- Wildcard domeno subteno
- Sen konfiguracio necesas, se vi funkcias sur Closte

## Requisitoj {#requirements}
La seguenti konstanto devas esti definita en via `wp-config.php` fakte se vi uzas Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'via_api_clue');
```

Ĉi tiu konstanto tipikajtempe estas déjà definita, se vi hostas sur Closte.

## Instalado Instrukoj {#setup-instructions}

### 1. Verifi Kontan Closte API-Clue {#1-verify-your-closte-api-key}

Se vi hostas sur Closte, la konstanto `CLOSTE_CLIENT_API_KEY` devas esti déjà definita en via `wp-config.php` fakte se vi kontrolas vian `wp-config.php` filon.

### 2. Aktivado de la Integrado {#2-enable-the-integration}

1. En via WordPress admin, diru Ultimate Multisite > Settings
2. Navigu al la tabelo "Domain Mapping" (Domeno Mapado)
3. Scrollu nedan al "Host Integrations" (Host Integradoj)
4. Aktivu la Closte integradon
5. Kliku sur "Save Changes" (Salvi ŝanĝojn)

## Kiel Ĝi Funkcias {#how-it-works}

Kiam domeno estas mapita en Ultimate Multisite:

1. La integrado sendas peton al API de Closte por aĉi la domen al via aplikeco
2. Closte aŭtomate maneĝas SSL-sertifikatojn
3. Kiam una domeno mapado estas forigita, la integrado forigas la domen de Closte

La integrado ankaŭ funkcias kun la ŝanĝo de DNS-kontrolaj intervaloj en Ultimate Multisite, permesante vi konfigurigi, kiam sistemo kontrolas propagadon de DNS kaj emitigon de SSL-sertifikatoj.

## Kreo de Domeno Rekordo {#domain-record-creation}

Ĉi tiu integriĝo certigas, ke kiam sitaĵo estas kreita aŭ duplikita, domeno-registraĵo estas aŭtomate kreita. Tio estas partikole grava por la Closte integriĝo, ĉar la kreo de la domeno-registraĵo provokas la Closte API krei la domeno kaj SSL-sertifikon.

## Problemoj kun solucionado {#troubleshooting}

### Problemoj per konekto al API {#api-connection-issues}
- Verifuji, ke via Closte API-chiavo estas ĝusta
- Assuringu, ke via Closte konto havas necesajn permesojn

### Problemoj per SSL-sertifikon {#ssl-certificate-issues}
- Closte povas bezoni tempon por eliri SSL-sertifikojn (normalaj 5-10 min$.)
- Verifuji, ke via domeno estas ĝuste indikiita al la IP-adreso de via Closte-servero
- Kontroli la DNS-registrojn por via domeno por certigi, ke ili estas ĝuste konfiguritaj

### Domeno Ne Adata {#domain-not-added}
- Kontroli la logojn de Ultimate Multisite por ĉirkaŭaj eraro mesaĝoj
- Verifuji, ke la domeno ne estas déjà data al Closte
- Assuringu, ke via domeno-DNS-registroj estas ĝuste konfiguritaj

### Intervallo de DNS-kontrolado {#dns-check-interval}
- Se SSL-sertifikoj bezonas tro da tempon por eliriĝi, vi povas ajusti la intervallon de DNS-kontrolado en la ŝanĝoj de Mappado de Domeno (Domain Mapping settings)
- La defaultintervallo estas 300 sekvendoj (5 min.), sed vi povas fari ĝin al la plej malaj 10 sekundoj por pli rapida kontrolado dum testoj
