---
title: Site Builder Modusyny Alma Bildirjisi
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode Kaldyşyklygy Bildirisi {#site-builder-mode-removal-notice}

**Site Builder modu Superdav AI Agent v1.12.0-da kaldıryldy.** Eger siz Site Builder modunu ulanyp kursaňyz, tema döretmek we site goýmak üçin **Setup Assistant agentine** geçmeli bolarsyňyz.

## Näme Oldu? {#what-happened}

### Site Builder Modu (Eski) {#site-builder-mode-legacy}

Site Builder modu şu işler üçin wizard esaslanýan arxaliçdyr:

- Şablonlardan site döretmek
- Esasy dürli zatlary görkezmek
- Tema saýlamak
- Başlangyç maglumatlary goýmak

### Onu Näme Ornaşdy? {#what-replaced-it}

**Setup Assistant agenti** indi Site Builder funksionalynda ähli işleri şu bilen ýerine ýetirýär:

- Hasaplaýan has howa, agent tarapyndan hyzmatda duran goşantalar
- Tema özüni has gowy görkezmek üçin opsionalar
- Theme Builder-e giriş (onboarding) bilen baglanyşyk
- Geljekde ulanylmagy üçin site_brief hatdan çykaryp saklamak

## Eger Siz Site Builder Modunu Ulanyp Bolsaňyz {#if-you-were-using-site-builder-mode}

### Sizin Siteňiz Güniçdir {#your-sites-are-safe}

- Site Builder modu bilen döredilen barlar dowam edýär
- Maglumat ýitirilmeje ýa-da site bozulmagyna sebäp bolmaz
- Siz siteňizi normal görkezmekde dowam etip bilersiňiz

### Setup Assistant Agentine Geçiň {#migrate-to-setup-assistant-agent}

Iki we site goýmak üçin ýa-da tema üýtgetmek üçin Setup Assistant agentini ulanmagyň:

```
"Help me set up a new site"
```

ýa-da

```
"Start the Theme Builder onboarding"
```

Setup Assistant agenti has howa bilen aynı funksionallığı, ýöne has hasaplaýan görkezmekde berýär.

## Garaşdyrma: Site Builder we Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Özellik | Site Builder (Kaldyrylmagy) | Setup Assistant (New) |
|---|---|---|
| Goýmak usuly | Wizard formu | Agent söhbeti |
| Tema saýlamak | Önümçeli şablonlar | Özüni döretmek |
| Hasaplaýanlyk | Çäreli opsionalar | Dolu dizayn ulgamy |
| Site briefi | Saklanmadyr | Hatdan çykaryp saklamyşdyr |
| Geljekde sessiýalar | Tekrarlanan goýmak | Saklanmagy ýerine ýetirmekden peýdalanmak |
| Hasaplaýanlyk | Ýapyk iş akymy | Uýgunlaşan söhbet |

## Setup Assistant Agentine Geçmek {#migrating-to-setup-assistant-agent}

### Täze Siteolar Üçin {#for-new-sites}

Site Builder modunu kullanmak yerine:

1. İstek: "Yeni bir site kurmama yardım et"
2. Kurulum Asistanı ajanı size şunlar hakkında rehberlik edecektir:
   - Site amacı ve hedefleri
   - Hedef kitle
   - Marka kimliği
   - Tema oluşturma
   - İlk yapılandırma

### Mevcut Siteler İçin {#for-existing-sites}

Eğer Site Builder modundan bir siteniz varsa:

1. Onu olduğu gibi kullanmaya devam edebilirsiniz
2. Temayı güncellemek için şunu isteyin: "Sitemi yeniden tasarla"
3. Kurulum Asistanı ajanı size yeni bir tema oluşturmanıza yardımcı olacaktır
4. Sitenizin verileri değişmeden kalır

### Tema Değişiklikleri İçin {#for-theme-changes}

Site Builder modunun tema seçiminin yerine:

1. İstek: "Temamı değiştir"
2. Kurulum Asistanı ajanı şunları yapacaktır:
   - Tasarım tercihiniz hakkında soru sorar
   - Özel bir tema oluşturur
   - Onu sitenizde etkinleştirir

## Temel Farklar {#key-differences}

### Site Builder Modu {#site-builder-mode}

```
1. Şablon seçin
2. Bir tema seçin
3. Temel ayarları yapılandırın
4. Bitti
```

### Kurulum Asistanı Ajanı {#setup-assistant-agent}

```
1. Sitenizin amacını anlatın
2. Hedef kitlenizi tanımlayın
3. Tasarım tercihlerinizi seçin
4. Ajan özel tema oluşturur
5. Ajan temayı etkinleştirir
6. Gelecekteki oturumlar için site özeti saklanır
```

## Kurulum Asistanı Ajanının Avantajları {#benefits-of-setup-assistant-agent}

### Daha Esnek {#more-flexible}

- Sitenizi doğal dilde tanımlayın
- Özel öneriler alın
- Belirli ihtiyaçlarınıza uyum sağlayın

### Daha İyi Özelleştirme {#better-customization}

- Özel tema oluşturma
- Tasarım sistemi kararları
- Kalıcı tasarım belirteçleri (design tokens)

### Kalıcı Hafıza {#persistent-memory}

- Sitenizin özeti saklanır
- Gelecekteki ajanlar sitenizi anlar
- Kurulum bilgilerini tekrarlamaya gerek kalmaz

### Entegre İş Akışı {#integrated-workflow}

- Tema Oluşturucu (Theme Builder) başlangıç süreci
- Tasarım Sistemi Estetiği becerisi
- Görünürlük kontrollerine erişim yeteneği
- Tüm işler sorunsuz bir şekilde birlikte çalışır

## Sorun Giderme {#troubleshooting}

### Site Builder modunu bulamıyorum {#i-cant-find-site-builder-mode}

Site Builder modu kaldırılmıştır. Bunun yerine Kurulum Asistanı ajanını kullanın:

"Meni täze sayt kurmak üçin kömek edin"

### I want to recreate a site from Site Builder (Sayt Kurucysdan saytyňy täzeden döretmek isleýärin) {#i-want-to-recreate-a-site-from-site-builder}

Onu Setup Assistant agenti bilen täzeden döretip bilersiňiz:

1. Soz soramak: "Meni täze sayt kurmak üçin kömek edin"
2. Orijinal saytyňyz maksady we dizaynyny düşündiriň
3. Agent size meňzeş bir tema döredip biler
4. Siziň site_briefi gelejekde referat üçin saklanar

### My existing Site Builder site isn't working (Meniň bar olan Site Builder saytym işlemek bilmez) {#my-existing-site-builder-site-isnt-working}

Site Builder modu bilen döredilen bar saytlary dowam edip işleyýär. Eger sorunlaryňyz bolsa:

1. Temaňyz täze miwrakda-da bolup baýlandyrylyp olmadığını kontrol ediň
2. Pluginleriňiz işleýändigini barlap görüň
3. WordPress xatolyk loglaryny kontrol ediň
4. Sorunlar dowam etse, destek bilen habarlaşyň

### Can I still use my old Site Builder templates? (Meniň eski Site Builder şablonlarym barada ulanmak mümkinmi?) {#can-i-still-use-my-old-site-builder-templates}

Site Builder şablonlary ýokdur. Ýöne:

- Siziň bar olan saytlary dowam edip işläp biljekdir
- Setup Assistant agenti bilen meňzeş saytlary täzeden döretip bilersiňiz
- Setup Assistant agenti has köp özelleşdirmegi mümkin bolan opsionalar berýär

## Next Steps (Nöbatda geçirmek üçin ädimler) {#next-steps}

1. **Täze saytlar üçin**: Setup Assistant agentini ulanmagyň
2. **Bar olan saytlaryň üçin**: Olary şu ýagdaýda ulanmaga dowam ediň
3. **Tema üýtgetmek üçin**: Setup Assistant agentinden kömek soň
4. **Dizajy gowurmak üçin**: Design System Aesthetics skillyny ulanmagy

## Related Topics (Baglaply mowzuklar) {#related-topics}

- **Theme Builder Onboarding**: Özel temalar üçin üpjünli guramak
- **Setup Assistant Agent**: Agent bilen ýolbaşçylykda sayt kurmak
- **Site Specification Skill**: Saytyňyz maksatlaryny we okuwchylaryny kesgitlemek
- **Design System Aesthetics Skill**: Saytyňyz wizual identitetini gowurmak
