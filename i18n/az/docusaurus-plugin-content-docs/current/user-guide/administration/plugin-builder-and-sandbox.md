---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 ilə **Plugin Builder & Sandbox System** təqdim olunur. Bu sistem süni intellekt köməkçisinə şəbəkənizdə WordPress pluginlərini yaratmağa, aktivləşdirməyə və idarə etməyə imkan verir — və hamısı təhlükəsiz, izolyasiya edilmiş bir sandbox mühiti vasitəsilə həyata keçirilir.

## Overview {#overview}

Plugin Builder süni intellekt köməkçisinə təbii dil sorğularına cavab olaraq fərdiləşdirilmiş WordPress pluginləri yazmağa imkan verir. Yaradılan pluginlər, canlı sayt funksionallığına təsir etməzdən əvvəl, validasiya edilir, saxlanılır və bir sandbox qatında aktivləşdirilir.

İstifadə halları bunlardır:

- Developer müdaxiləsi olmadan yüngül faydalı pluginlər yaratmaq.
- WordPress hook-ları və ya custom post tipləri tələb edən funksionallıq prototipləri hazırlamaq.
- Toplu əməliyyatlar üçün qısa ömürlü avtomatlaşdırma skriptləri yaratmaq.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Bir plugin yaratmaq üçün Gratis AI Agent chat interfeysini açın və nəə ehtiyac duyduğunuzu təsvir edin. Məsələn:

> "Dashboard-da fərdiləşdirilmiş bir admin bildirişi əlavə edən bir plugin yarat."

AI aşağıdakıları edəcək:

1. Strukturlu kod generasiyası istifadə edərək plugin PHP kodunu istehsal edəcək.
2. Nəticəni sintaksis səhvləri və təhlükəsiz olmayan nümunələr baxımından validasiya edəcək.
3. Yaradılan pluginləri sandbox anbarında (store) saxlayacaq.
4. Plugin slug-u və bir **Activate in Sandbox** düyməsi ilə təsdiqləmə qaytaracaq.

Aktivləşdirməzdən əvvəl nəticəni eyni söhbət ipində davam etməklə təkmilləşdirə bilərsiniz.

## Sandbox Activation {#sandbox-activation}

Sandbox-da yaradılmış pluginin aktivləşdirilməsi, onu canlı şəbəkədə aktivləşdirməkdən fərqlidir. Sandbox:

- Pluginə izolyasiya edilmiş bir WordPress mühitində (wp-env) işləyir.
- Hər hansı bir PHP səhvlərini, xəbərdarlıqları və ya hook toqquşmalarını tutur.
- Aktivləşdirmə nəticəsini chat interfeysində geri bildirir.

Pluginləri sandbox-da aktivləşdirmək üçün AI chat cavabındakı **Activate in Sandbox** düyməsinə klikləyin və ya aşağıdakı slash komandasından istifadə edin:

```
/activate-plugin <plugin-slug>
```

Status mesajı aktivləşdirmənin uğurlu olub-olmadığını təsdiqləyir. Baş verilərsə, səhv logu chat ipində göstərilir.

## Managing Generated Plugins {#managing-generated-plugins}

Yaradılmış pluginlər **Gratis AI Agent → Plugin Builder → Manage Plugins** yerində siyahı halında göstərilir. Bu ekrandan aşağıdakıları edə bilərsiniz:

| Action | Description |
|---|---|
| **View source** | Tam plugin PHP kodunu nəzərdən keçirin. |
| **Re-activate in sandbox** | Sandbox aktivləşdirmə yoxlamasını yenidən işə salın. |
| **Install on network** | Pluginləri canlı şəbəkəyə yerləşdirin (əlavə əl ilə təsdiq tələb olunur). |
| **Update** | AI vasitəsilə yeni bir versiya təqdim edin, mövcud kodu əvəz edin. |
| **Delete** | Pluginləri sandbox anbarından silin. Əvvəlcə bütün saytlardan deaktivasiya edir. |

:::warning
**Install on network** komandası yaradılmış pluginləri canlı WordPress multisite-ınıza yerləşdirir. Davam etməzdən əvvəl plugin kodunu nəzərdən keçirin. Gratis AI Agent canlı quraşdırmanı tamamlamadan əvvəl təsdiq istəyəcək.
:::

## Installing a Generated Plugin on the Network {#installing-a-generated-plugin-on-the-network}

Sandbox-da yoxladığınız pluginlərdən razılaşdıqdan sonra, onu canlı şəbəkəyə quraşdıra bilərsiniz:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** yerinə keçin.
2. Yerləşdirmək istədiyiniz pluginin yanında **Install on Network** düyməsinə klikləyin.
3. Diaqoqu təsdiqləyin. Plugin `wp-content/plugins/` yerinə quraşdırılır və şəbəkə səviyyəsində aktivləşdirilir.

Alternativ olaraq, chat interfeysində slash komandasından istifadə edin:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

Yaradılmış bir pluginin versiyasını yeniləmək üçün, dəyişikliyi AI köməkçisinə yeni bir söhbətdə təsvir edin:

> "dashboard-notice pluginini yalnız administratorlara bildiriş göstəriləcəyi şəkildə yenilə."

AI yeni bir versiya yaradır və bu versiya mövcud versiyanın yanında sandbox-da görünür. Yeniləmə tətbiq edilməzdən əvvəl fərqi (diff) nəzərdən keçirir və təsdiq edirsiniz.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder, hər bir yaradılmış plugin tərəfindən qeyd olunan hook və filterləri analiz etmək üçün inteqrasiya edilmiş **HookScanner**-dan istifadə edir. HookScanner çıxışı chat cavabında göstərilir və aşağıdakıları əhatə edir:

- Qeyd olunan Action hook-ları (`add_action` çağırışları).
- Qeyd olunan Filter hook-ları (`add_filter` çağırışları).
- Plugin asılılıqlarında tapılan hər hansı hook ( `vendor/` və `node_modules/` kataloqları atlanır).

Bu, pluginin aktivləşdirilməzdən əvvəl davranışını anlamağa kömək edir.

## Security Considerations {#security-considerations}

- Yaradılmış pluginlər əl ilə quraşdırılmış pluginlərdən ayrı saxlanılır və siz onları şəbəkəyə açıq şəkildə quraşdırmadığınız təqdirdə standart WordPress plugin idarəetmə ekranı vasitəsilə əlçatan deyil.
- Sandbox, plugin faylları yazarkən kataloq keçidi (directory traversal) qarşısını almaq üçün yol validasiyası (path validation) istifadə edir.
- Tehlikəli funksiya çağırışları (məsələn, `eval`, `exec`, `system`) olan pluginlər validasiya zamanı işarələnir və aktivləşdirilməyəcəklər.
