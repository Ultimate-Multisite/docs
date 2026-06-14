---
title: Isdhaafidda Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Iskuulka Closte-ka Laanshaha (Closte Integration)

## Guudbixitaanka (Overview)
Closte waa platform hosting WordPress oo la maamula ah oo lagu dhisay qaabka Google Cloud. Isku-dhafka (integration) kan wuxuu kuu oggolaanaya isku-dubbaridda domain-ka iyo maamulka shahaadada SSL-ka si toos ah u dhexeeya Ultimate Multisite iyo Closte.

## Wax-soo-saariyadaha (Features)
- Isku-dubbaridda automatic ee domain-ka
- Maamulka shahaadada SSL-ka
- Taageerada domain-ka wildcard (wildcard domain support)
- Haddii aad ku shaqaynayso Closte, ma baahan inaad wax cusub samaysid.

## Shuruudaha (Requirements)
Haddii aad isticmaalayso Closte, waa inuu isku dayga (constant) soo socda lagu qoraa faylkaaga `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'api-key-ada');
```

Inta badan haddii aad ku hosting tahay Closte, isku daygaas horeba waxaa loo qoray.

## Tallaabooyinka Qaab-dhismeedka (Setup Instructions)

### 1. Hubi Furaha API-gaaga Closte (Verify Your Closte API Key)
Haddii aad ku hosting tahay Closte, isku dayga `CLOSTE_CLIENT_API_KEY` waa inuu horeba lagu qoray faylkaaga `wp-config.php`. Waxaad hubin kartaa iyadoo aad eegayso faylkaas.

### 2. Fur Isku-dhafka (Enable the Integration)
1. Admin-ka WordPress-kaaga, tag Ultimate Multisite > Settings.
2. Tag tab-ka "Domain Mapping".
3. Hoos u soo saar ilaa aad gaarto "Host Integrations".
4. Fur isku-dhafka Closte (Enable the Closte integration).
5. Click "Save Changes" si aad waxyaabaha cusub u kaydsato.

## Sida Ay U Shaqeeyo (How It Works)

Marka domain-ka la isku-dubbaro Ultimate Multisite:

1. Isku-dhafka wuxuu u dirayaa codsi API-ga Closte si uu domain-ka ku daro barnaamiddiiaga.
2. Closte waxay si toos ah u maamaysaa in la bixiyo shahaadada SSL-ka (SSL certificate provisioning).
3. Marka la saaro isku-dubbaridda domain-ka, isku-dhafka wuxuu ka saarayaa domain-ka Closte-ka.

Isku-dhafkaasna wuxuu shaqeeyaa si la mid ah dejinta "DNS check interval" ee Ultimate Multisite, taasoo kuu oggolaanaysa inaad dejiso inta badan nidaamku uu hubiyo isbeddellada DNS iyo bixinta shahaadada SSL-ka.

## Abuurista Diyaarka Domain-ka (Domain Record Creation)

Tani isku-dhaafinta wuxuu hubinayaa in marka website la abuuro ama la duubayo, si toos ah loo sameeyo diiwaanka domain (domain record) oo si toos ah loogu abuuro. Tani waxay si gaar ah muhiim u ah isku-dhaafinta Closte, sababtoo ah abuurista diiwaanka domain ayaa keenaysa API-ga Closte inuu sameeyo domain-ka iyo shahaadada SSL (SSL certificate).

## Xallinta Dhibaatooyinka (Troubleshooting)

### Masalahaat Ku Saabsan Isku-xirka API (API Connection Issues)
- Hubi in furaha API-ga Closte (Closte API key) uu sax yahay.
- Hubi in koontada Closte-kaaga ay leedahay fursadaha (permissions) loo baahan yahay.

### Masalahaat Ku Saabsan Shahaadada SSL (SSL Certificate Issues)
- Closte waxay qaadan kartaa wakhti yar si ay bixiso shahaadada SSL (badankood 5 ilaa 10 daqiiqo).
- Hubi in domain-kaaga si sax ah ugu tilmaamayo IP address-ka server-ka Closte.
- Hubi diiwaanka DNS-ka ee domain-kaaga si aad u hubiso in ay si sax ah loo dejiyay.

### Domain-ka Ma La Diiwaan gelin (Domain Not Added)
- Hubi logs-ka Ultimate Multisite wax walba oo qalad ah ka soo baxay.
- Hubi in domain-kaagu weli aan la diiwaan gelin Closte.
- Hubi in diiwaanka DNS-ka ee domain-kaaga si sax ah loo dejiyay.

### Marinta Hubinta DNS (DNS Check Interval)
- Haddii shahaadada SSL-ku ay qaadanayaan wakhti badan, waxaad hagaajin kartaa marinta hubinta DNS-ka (DNS check interval) oo ku jirta settings-ka Domain Mapping.
- Marinta caadiga ah waa 300 ilbiriqsi (5 daqiiqo), laakiin waxaad u qaadi kartaa inta ay tahay 10 ilbiriqsi si aad si degdeg ah u hubiso inta lagu jiro testing-ka.
