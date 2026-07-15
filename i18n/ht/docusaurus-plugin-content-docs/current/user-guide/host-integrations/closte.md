---
title: Entegrasyon Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Entegrasyon Closte

## Aperçu {#overview}
Closte se pa platform d'hébergement WordPress ki bati sou infrastruktur Google Cloud. Entegrasyon sa a pèmèt sincronizasyon domèn otomatik ak jere sertifikat SSL ant Ultimate Multisite ak Closte.

## Fonctionnalite {#features}
- Sincronizasyon domèn otomatik
- Jere sertifikat SSL
- Sipò domèn wildcard (wildcard domain)
- Pa gen okenn konfigirasyon nesesè si ou ap itilize Closte

## Requis {#requirements}
Konstant sa a dwe define nan fichye `wp-config.php` ou si ou ap itilize Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Konstant sa a anjeneral deja define si ou ap héberge sou Closte.

## Enstriksyon Setup (Enstale) {#setup-instructions}

### 1. Verify API Key Closte Ou {#1-verify-your-closte-api-key}

Si ou ap héberge sou Closte, konstante `CLOSTE_CLIENT_API_KEY` ta dwe deja define nan fichye `wp-config.php` ou. Ou ka verifi sa lè ou tcheke fichye `wp-config.php` ou.

### 2. Active Entegrasyon an {#2-enable-the-integration}

1. Nan admin WordPress ou, ale nan Ultimate Multisite > Settings
2. Navige nan onglet "Domain Mapping" (Mape Domèn)
3. Desann pou "Host Integrations" (Entegrasyon Hébergement)
4. Active entegrasyon Closte la
5. Klike sou "Save Changes" (Sauveye Chanjman yo)

## Kijan Li Travay {#how-it-works}

Lè yon domèn ap map nan Ultimate Multisite:

1. Entegrasyon an voye yon demann bay API Closte pou ajoute domèn nan aplikasyon ou a
2. Closte ap jere otomatikman pwovizyon sertifikat SSL la
3. Lè yon map domèn retire, entegrasyon an ap retire domèn sa a nan Closte

Entegrasyon an tou travay ak konfigirasyon interval tcheke DNS nan Ultimate Multisite, ki pèmèt ou configure kijan sistèm nan ap tcheke sou frèfè pou propagasyon DNS ak emisyon sertifikat SSL la.

## Kreye Enskripsyon Domèn {#domain-record-creation}

Sa entegrasyon sa a deja sa garanti ke lè yon sit ki kreye oswa ki duplike, yon enregistre domèn ap kreye otomatikman. Sa enpòtan anpil pou entegrasyon Closte la, paske kreasyon enregistre domèn nan kòmanse API Closte la pou kreye domèn ak sertifikat SSL la.

## Rezoudè pwoblèm (Troubleshooting) {#troubleshooting}

###Pwoblèm koneksyon API
- Verifye ke kle API Closte ou a kòrèk
- Asire w ke kont Closte ou an gen pèmisyon ki nesesè yo

###Pwoblèm sertifikat SSL
- Closte ka pran kèk tan pou li bay sertifikat SSL (anjeneral 5-10 minit)
- Verifye ke domèn ou yo ap pointer kòrèkteman nan adrès IP sèvè Closte ou a
- Kontwane enregistre DNS pou domèn ou an pou asire w ke yo configure byen

###Domèn pa ajoute
- Kontwane log Ultimate Multisite pou nenpòt mesaj erè
- Verifye ke domèn ou a pa deja ajoute nan Closte la
- Asire w ke enregistre DNS domèn ou a ap configure kòrèkteman

### Interval verifikasyon DNS {#api-connection-issues}
- Si sertifikat SSL yo pran twò gwo tan pou yo bay, ou ka ajiste interval verifikasyon DNS nan rann map (Domain Mapping) settings la
- Interval default la se 300 segond (5 minit), men ou ka mete l tankou 10 segond pou fè li pi rapid pandan test
