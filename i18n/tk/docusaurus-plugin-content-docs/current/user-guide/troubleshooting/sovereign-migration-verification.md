---
title: Hükümdarlary Geçirilmegi Barlagy
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0-da WP-CLI doğrulama komutlaryny bar. Bu komutlary, bir tenant migratsiyasynda, SSO (Single Sign-On) ziyaratında ýa-da izole tertipde kurmakda beklenen hasaplamalar nädip geçýändigini barlamak üçin ulanylýar.

## Ýerine ýetiriljek komutlar {#commands-to-run}

Şulhanet WordPress tertibinden doğrulama yürütün:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Migratsiya edýän tenant üçin site ID-ni ulanmagyň. Birinji komut, tenant-i eski ulgamlaryndan (legacy) hasaplamalara bağımlı däl diýip barlayar. Ikinji komut bolsa sovereign push işlerini işlemegi we boşaltmagy (drain) barlayar.

## Üýtgeş gelýän ýetmezçilikler {#common-failures}

### Database haklary host bilen sazlaşmadyk {#database-grants-do-not-match-the-host}

Eger doğrulama haklar (grant) ýa-da writer-user hasaplamalarynda ýetmezçilik görkezse, sozlawdan weşara ulgamyndaky database hosty barlap görüň. `localhost`, `127.0.0.1` we container servisi adlary MySQL haklar üçin dürli hostlary kesgitleýär. Tenant host bağlamasyny ýa-da database haklaryny täzelenip, soňra doğrulama komutyny ýeňip görüň.

### Bedrock ýa-da lokal tertipleri baglanyp bilmez {#bedrock-or-local-installs-cannot-connect}

Bedrock we lokal socket tertipleri database-i `localhost` diýip görkezse hem, iş owadan (runtime) normalleşdirilen adrestden baglanýar. Versiýa 1.2.0 birmeji makina host ýazgyrlaryny normalleşdirýär, ýöne özelleşdirilen host üstümleri database haklary bilen çakmalap biljekdigini görkezýär.

### Async push queue boşaltylmady {#async-push-queue-does-not-drain}

Eger `verify-sovereign-push` tamamlanmasa, Action Scheduler ýa-da sazlanmalydyr async runner-i barlap görüň. İşleri täsirli soňra redakt etmäge (retry) ýa-da ýok etmekden önce olary howpsuz bolup biljekdigini anyklaýarsyň.

### Tenant ulanyjysynyň sany ýalňyş {#tenant-user-count-is-wrong}

Migratsiya üçin sovereign tenant üçin ulanyjylar döredilmelidir. Bekleniji tertipde (install) hasaplanan ulanyjys bolsa ýok bolsa, SSO-ny täsirlemekden önce ulanyjylary döretmek aşamyny soňdan hem ýeňip görüň.

### SSO ziyaraty redd edilýär {#sso-visit-is-rejected}

Stateless tenant autologin üçin senary anyk bolmaly: tenant domaini, origin pinini, token maksadyny (token purpose), nonce-i we gyzyklygy (expiry) bir-birine türkmen dilinde eşidip barmaly. Tenant URL-i dogrydyrdyginden hem login agramyşdan soň bu işi gysga wagtynda edip görkezmeli.

## Tekrar etmeli wakaylar {#when-to-retry}

Her bir infrastruktura üýtgedikden sonra tekrar tassyklama (retry) ýaýyşyp görüň. Bütün tassyklama barlaglary geçip biljekdigi sebäpli, üretim trafikini üýtgetme, mannal maglumatlary silme ýa-da migrasiýa agramalaryny (migration credentials) almakdan önce hiç bir zatı alnyp bilmezlik.
