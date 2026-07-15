---
title: İşləmə Görünürlüyü
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Qabiliyyət Görünürlüyü

Superdav AI Agent v1.12.0, hansı qabiliyyətlərin hansı interfeyslərdə görünəcəyini tənzimləyən **Qabiliyyət Görünürlüyü** (Ability Visibility) kontrollerlərini təqdim edir. Bu, administratorlara hansı agent funksionallıqlarının REST API-lər, MCP serverləri, WooCommerce inteqrasiyaları və digər interfeyslər vasitəsilə mövcud olacağını dəqiqləşdirməyə imkan verir.

## Qabiliyyət Görünürlüyü Nədir? {#what-is-ability-visibility}

Qabiliyyət Görünürlüyü, aşağıdakıları tənzimləyən bir icazə sistemidir:

- **Hansı qabiliyyətlər** agentlər üçün mövcuddur
- **Haralarda görünürlər** (REST API, MCP, WooCommerce və s.)
- **Kimlər istifadə edə bilər** (tərəfdaşların icazə siyahıları vasitəsilə)
- **Necə təsnif edirlər** (tanınmış və ya tanınmamış)

Hər bir qabiliyyət, müxtəlif interfeyslərdə mövcudluğunu müəyyən edən bir görünürlüyü səviyyəsi daşıyır.

## Görünürlüyü Səviyyələri {#visibility-levels}

### Public (Ümumi) {#public}

**Public qabiliyyətlər** hər yerdə mövcuddur:

- REST API uç nöqtələri (endpoints)
- MCP serverləri
- WooCommerce inteqrasiyaları
- Chat interfeysləri
- Bütün istifadəçi rolları (müvafiq icazələrlə)

Nümunə: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Daxili) {#internal}

**Internal qabiliyyətlər** yalnız WordPress quraşdırmanız daxilində mövcuddur:

- Chat interfeysləri
- Admin panelləri
- Yalnız daxil olub istifadə edən istifadəçilər
- REST API və ya xarici inteqrasiyalar vasitəsilə görünmür

Nümunə: `manage-settings`, `view-analytics`, `export-data`

### Partner (Tərəfdaş) {#partner}

**Partner qabiliyyətlər** yalnız siyahıya alınmış tərəfdaşlar üçün mövcuddur:

- Açıq şəkildə tərəfdaş icazə siyahısına daxil olma tələb edir
- Tərəfdaş təsdiqlənməsi ilə REST API vasitəsilə mövcuddur
- Tərəfdaş autentifikasiyası ilə MCP vasitəsilə mövcuddur
- Adi istifadəçilər üçün mövcud deyil

Nümunə: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Dəqiqləşdirilmiş/İstifadə edilməyən) {#disabled}

**Disabled qabiliyyətlər** heç yerdə mövcud deyil:

- Heç bir interfeys vasitəsilə görünmür
- Chat-də mövcud deyil
- Admin panellərində mövcud deyil
- Köhnəlmiş və ya eksperimental qabiliyyətlər üçün faydalıdır

## Qabiliyyət Görünürlüyünü İdarə Etmək {#managing-ability-visibility}

### Qabiliyyət Görünürlüyü Ayarlantılarına Daxil Olmaq {#accessing-ability-visibility-settings}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** yolunu izləyin
2. **Abilities** tabına klikləyin
3. Quraşdırılmış bütün qabiliyyətlərin siyahısını və onların görünürlüyü səviyyələrini görəcəksiniz.

### Qabiliyyət Detallarını Görmək {#viewing-ability-details}

Hansı qabiliyyətə klikləsəniz, aşağıdakıları görəcəksiniz:

- **Name**: Qabiliyyətin identifikatoru
- **Description**: Qabiliyyətin nə etdiyi
- **Current visibility**: Public, Internal, Partner və ya Disabled
- **Partner allow-list**: Hansı tərəfdaşlar daxil ola bilər (Partner görünürlüyü üçün)
- **Last updated**: Görünürlüyün son dəfə nə vaxt dəyişdirildiyi
- **Status**: Recognized (Tanınmış) və ya Unclassified (Tanınmamış)

### Görünürlüyü Səviyyələrini Dəyişmək {#changing-visibility-levels}

Bir qabiliyyətin görünürlüyünü dəyişmək üçün:

1. Siyahıdakı qabiliyyətə klikləyin
2. Açılan menyudan yeni bir görünürlüyü səviyyəsi seçin
3. Əgər "Partner" seçirsinizsə, tərəfdaş identifikatorlarını icazə siyahısına əlavə edin
4. **Save** düyməsinə klikləyin

Nümunə:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Toplu Əməliyyatlar {#bulk-operations}

Bir neçə qabiliyyətin görünürlüyünü dəyişmək üçün:

1. Qabiliyyətlərin yanındakı kvadratçığıqları işarələyin
2. Toplu əməliyyatlar açılan menyudan yeni bir görünürlüyü səviyyəsi seçin
3. **Apply** düyməsinə klikləyin

## Partner Allow-List (Tərəfdaş İcazə Siyahısı) {#partner-allow-list}

**Partner allow-list**, hansı xarici tərəfdaşların Partner səviyyəli qabiliyyətlərə daxil ola biləcəyini tənzimləyir.

### Tərəfdaş Əlavə Etmək {#adding-partners}

1. **Superdav AI Agent** → **Settings** → **Partners** yolunu izləyin
2. **Add Partner** düyməsinə klikləyin
3. Tərəfdaş identifikatorunu (adətən bir API açarı və ya təşkilat ID-si) daxil edin
4. İxtiyari olaraq tərəfdaş adı və təsvirini əlavə edin
5. **Save** düyməsinə klikləyin

### Qabiliyyətləri Tərəfdaşlara Təyin Etmək {#assigning-abilities-to-partners}

Bir tərəfdaş əlavə etdikdən sonra:

1. **Abilities** tabına keçin
2. Partner görünürlüyü olan bir qabiliyyət tapın
3. Redaktə etmək üçün klikləyin
4. "Partner allow-list" bölməsində, daxil olmasını istədiyiniz tərəfdaşlar üçün kvadratçığıqları işarələyin
5. **Save** düyməsinə klikləyin

### Tərəfdaş Girişini Ləğv Etmək {#revoking-partner-access}

Bir tərəfdaşın girişini ləğv etmək üçün:

1. Qabiliyyəti redaktə edin
2. İcazə siyahısındakı tərəfdaşın kvadratçığığını işarələməkdən çıxarın
3. **Save** düyməsinə klikləyin

Tərəfdaş dərhal həmin qabiliyyətə girişini itirəcək.

## Unclassified Abilities (Tanınmamış Qabiliyyətlər) {#unclassified-abilities}

Superdav AI Agent-in tanımadığı bir üçüncü tərəf qabiliyyəti quraşdırdığınız zaman, o **Unclassified** (Tanınmamış) kimi işarələnir.

### Unclassified Abilities üçün Admin Bildirişi {#admin-notice-for-unclassified-abilities}

Aşağıdakı admin bildirişini görəcəksiniz:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities-i Nəzərdən Keçirmək {#reviewing-unclassified-abilities}

1. Bildirişdə **Review Abilities** düyməsinə klikləyin
2. Hər bir tanınmamış qabiliyyət üçün aşağıdakıları görəcəksiniz:
   - Qabiliyyət adı və təsviri
   - Mənbə (hansı plugin/addon quraşdırdığı)
   - Təklif olunan görünürlüyü səviyyəsi
   - Təhlükəsizlik qiymətləndirilməsi

3. Bir görünürlüyü səviyyəsi seçin:
   - **Public**: Qabiliyyətə güvənin; hər yerdə görünür edin
   - **Internal**: Yalnız daxili istifadə ilə məhdudlaşdırın
   - **Partner**: Müəyyən tərəfdaşlarla məhdudlaşdırın
   - **Disabled**: Bu qabiliyyətdən istifadə etməyin

4. Qərarınızı saxlamaq üçün **Classify** düyməsinə klikləyin

### Unclassified Abilities-i Nəzərdən Keçirmək Niyə Lazımdır? {#why-classify-unclassified-abilities}

Qabiliyyətləri təsnif etmək:

- **Təhlükəsizliyi artırır**: Nəyin görünür olduğunu açıq şəkildə təsdiqləyirsiniz
- **Qəza riskini azaldır**: Tanınmamış qabiliyyətlər default olaraq deaktiv edilir
- **Funksionallığı mümkün edir**: Təsnif edildikdən sonra qabiliyyət mövcud olur
- **Qərarları sənədləşdirir**: Seçimləriniz audit məqsədləri üçün qeyd edilir

## Müxtəlif Interfeyslərdə Görünürlük {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public qabiliyyətlər** REST uç nöqtələri vasitəsilə mövcuddur:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal və Partner qabiliyyətlər** REST API vasitəsilə mövcud deyil.

### MCP Serverlər {#mcp-servers}

**Public qabiliyyətlər** MCP vasitəsilə mövcuddur:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal qabiliyyətlər** MCP vasitəsilə görünmür.

**Partner qabiliyyətlər** yalnız tərəfdaş təsdiqlənməsi ilə mövcuddur.

### WooCommerce İntegrasiyası {#woocommerce-integration}

WooCommerce ilə bağlı **Public qabiliyyətlər** mövcuddur:

- Məhsul idarəetməsi
- Sifariş emalı
- Müştəri ilə əlaqə

**Internal qabiliyyətlər** WooCommerce-ə görünmür.

### Chat Interfeysi {#chat-interface}

**Bütün qabiliyyətlər** (Public, Internal, Partner) istifadəçi icazələrinə bağlı olaraq chat-də mövcuddur:

- Administratorlar bütün qabiliyyətləri görür
- Adi istifadəçilər yalnız Public qabiliyyətlərini görür
- Tərəfdaşlar Public + Partner qabiliyyətlərini görür (əgər siyahıya alınmışsa)

## Təhlükəsizlik Ən Yaxşı Praktikaları {#security-best-practices}

### Ən Az İmtiyaz Prinsipi (Principle of Least Privilege) {#principle-of-least-privilege}

- Qabiliyyətləri, istifadəsinə imkan verən ən məhdud görünürlüyü səviyyəsinə təyin edin
- Həssas əməliyyatlar üçün Partner görünürlüyündən istifadə edin
- İstifadə etmədiyiniz qabiliyyətləri deaktiv edin

### Müntəzəm Auditlər {#regular-audits}

- Qabiliyyət görünürlüyünü aylıq nəzərdən keçirin
- Tanınmamış qabiliyyətlər üçün yoxlama aparın
- İstifadə edilməyən tərəfdaşlar üçün girişi ləğv edin

### Loglama və Monitorinq {#logging-and-monitoring}

- Hansı qabiliyyətlərin ən çox istifadə edildiyini izləyin
- Tərəfdaşların giriş nümunələrini izləyin
- Qeyri-adi qabiliyyət istifadəsi haqqında xəbərdarlıq edin

### Üçüncü Tərəf Qabiliyyətləri {#third-party-abilities}

- Aktivləşdirməzdən əvvəl üçüncü tərəf qabiliyyətlərini nəzərdən keçirin
- Onları açıq şəkildə təsnif edin
- Internal və ya Partner görünürlüyü ilə başlayın
- Yalnız yoxlama keçdikdən sonra Public səviyyəsinə yüksəltməyin

## Problemlərin Həlli (Troubleshooting) {#troubleshooting}

**Siyahıda bir qabiliyyət görünmür**
- Qabiliyyətin quraşdırılıb və aktiv olduğundan əmin olun
- Plugin/addon-un aktivləşdirildiyini yoxlayın
- Səhifəni yeniləyin

**Qabiliyyətin görünürlüyünü dəyişdirə bilmirəm**
- Administrator icazələriniz olduğundan əmin olun
- Qabiliyyətin bir plugin tərəfindən kilidlənmədiyini yoxlayın
- Qarşıdurma yaradan pluginləri deaktiv etməyi sınayın

**Bir tərəfdaş qabiliyyətə daxil ola bilmir**
- Tərəfdaşın icazə siyahısında olduğundan əmin olun
- Qabiliyyətin görünürlüyünün Partner olaraq təyin edildiyini yoxlayın
- Tərəfdaşın təsdiqlənmə məlumatlarının düzgün olduğundan əmin olun
- Autentifikasiya səhvləri üçün API loglarını yoxlayın

**Tanınmamış qabiliyyətlər görünməyə davam edir**
- Onları admin bildirişində nəzərdən keçirib təsnif edin
- Təsnifinizin yadda saxlandığından əmin olun
- Qabiliyyəti təmin edən pluginin yenilənməyə hazır olduğundan əmin olun

## Legacy Rejimdən Köçürmə {#migration-from-legacy-mode}

Əgər Superdav AI Agent-in köhnə bir versiyasından yüksəltmə aparırsınızsa:

- Mövcud bütün qabiliyyətlər avtomatik olaraq Public kimi təsnif edilir
- Zərurət gördükcə görünürlüyü tənzimləyin
- Girişi məhdudlaşdırmaq istədiyiniz halda başqa hərəkət tələb olunmur

Daha ətraflı məlumat üçün **Third-Party Mode Migration**-a baxın.

## Növbəti Addımlar {#next-steps}

Qabiliyyət görünürlüyünü konfiqurasiya etdikdən sonra:

1. **Qabiliyyətlərinizi nəzərdən keçirin**: Quraşdırılmış bütün qabiliyyətləri audit edin
2. **Tanınmamış qabiliyyətləri təsnif edin**: Admin bildirişlərinə cavab verin
3. **Tərəfdaşları qurun**: Partner görünürlüyü istifadə edirsinizsə, tərəfdaşları əlavə edin
4. **İstifadəni monitorinq edin**: Hansı qabiliyyətlərin ən çox istifadə edildiyini izləyin
5. **Qərarları sənədləşdirin**: Hər bir görünürlüyü səviyyəsi üçün niyə seçdiyiniz barədə qeydlər saxlayın
