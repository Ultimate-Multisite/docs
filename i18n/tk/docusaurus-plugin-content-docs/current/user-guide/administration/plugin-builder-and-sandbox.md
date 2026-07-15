---
title: Plugin Builder we Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 sizde **Plugin Builder & Sandbox Systemini** tanit eder. Bu sistem arkalyk (sandbox) muhiti arkalykda WordPress pluginlerini döretmek, işlemek we dolandyr etmek üçin yapay zeka asistanyny ulanmaga imkan berýär — ähli bu howpsuz, izole ortama görä.

## Umumylyk {#overview}

Plugin Builder AI asystantyň özüden gelip-gelip soraglaryňyz bilen gatnaşyp, size mysal üçin, natural dil bilen ýazylan WordPress pluginlerini döretmegi, işje etmek we dolandyrmagy mümkinleşdirýär. Döredilen pluginler hiç wakaýda hakyky sayt funksionalyga täsir etmeden öň, arkalyk katman (sandbox layer) içinde tassyklanýar, saklanýar we işje edilýär.

Ulanmak üçin mysallar:

- Däýipçi gatnaşmagyň ýok bolmagy bilen agramly (lightweight) üýtgeşlik pluginlerini döretmek.
- WordPress hooklaryndan ýa-da özgertilipdirilen post türleri (custom post types) talap edýän funksiýalary prototiplemek.
- Toplu işler üçin gysga wagty wekili awtomatlaşdyrmak skriptlerini döretmek.

## AI arkaly Plugin Döretmek {#generating-a-plugin-via-ai}

Plugin döretmek üçin, Gratis AI Agent chat interfeýsini açyň we näme gerekdigini düşündiriň. Mysal üçin:

> "Dashboardda täsirli bir custom admin habary dörediji plugin döredip bilersiň."

AI şu işleri eder:

1. Strukturany düzgünleşdirilen kod döretmek arkaly plugin PHP kodyny hasaplaýar.
2. Çykyşy sintaks hatalary we howpsuz ulgamlar barada tassyklap biler.
3. Döredilen pluginini sandbox depozitariyine saklaýar.
4. Pluginin slug-i bilen we **Activate in Sandbox** düwmesi bilen hasaplamany hasaplaýan habary berip çykaryr.

Hasaplamaňdan öň, aynı söhbet sarynda soňra sorag bermegi arkaly netijäni gowusmaga mümkinçilik bar.

## Sandbox İşje Etmek {#sandbox-activation}

Sandboxda döredilen plugin hasaplamak bilen hakyky ulgamy işje etmek aragatnaşyklydyr. Sandbox:

- Pluginini izolelen WordPress ortamynda (wp-env) işje edýär.
- Her türlü PHP hatalary, ýazgylary we hook çakmalaryny saklaýar.
- İşje etmegiň netijesini chat interfeýsinde hasaplaýan habary berip çykaryr.

Pluginini sandboxda işje etmek üçin, AI chat jogabynyňdaky **Activate in Sandbox** düwmenine basyň ýa-da slash kommandyny ulanmagy mümkin:

/activate-plugin <plugin-slug>
```

Durum status mesajı aktivasiýa näme tapdyr ýa ýokdyr diýip anyklaşdyrýar. Ýok bolsa, hata logy chat taryhynda görkezilýär.

## Döredilen Pluginleri Dolandyrmak

Döredilen pluginler **Gratis AI Agent → Plugin Builder → Manage Plugins** boýunça sanawda görkezilir. Bu ekran arkaly siz şulara bolarsyň:

| Hili | Barlag |
|---|---|
| **View source** | Pluginin doly PHP kodyny gözden geçiriň. |
| **Re-activate in sandbox** | Sandbox aktivasiýa barlagyny täze ýerine ýetiriň. |
| **Install on network** | Plugini durmuş ulgamynda (live network) ýerleşdirip bilersiňiz (manly tasdiqlama talap etýär). |
| **Update** | AI arkaly täze versiany teklip ediň we mövcud kodu üýtgediň. |
| **Delete** | Pluginini sandbox depozitarindan ýok edip bilersiňiz. Öňden ähli sitlerde deaktiv edýär. |

:::warning
**Install on network** döredilen pluginini durmuş WordPress multisite-aňyza ýerleşdirýär. Dawlamany geçirmäge çäkde plugin kodyny gözden geçiriň. Gratis AI Agent durmuş täze ýerleşdirmekden öň tasdiqlama soraýar.
:::

## Döredilen Pluginini Ulga Ýerleşdirmek

Sandbox-da memnan bolan bir plugin bilen, ony durmuş ulgamynda (live network) ýerleşdirip bilersiňiz:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** bölümini geçiň.
2. Daşdary ýerleşdirmek isleýän pluginin ýagnyşynda **Install on Network**-e basyň.
3. Dialoga tasdiq beriji bolmaly. Plugin `wp-content/plugins/` dälinde we ulgamynda aktivdedir.

Alternatiwy, chat aratyndaky slash komandasyny ulanyp bilersiňiz:

```
/install-plugin <plugin-slug>
```

## Plugin Täzelenmeleri (Updates)

Döredilen pluginini täzelenmek üçin, täzeldegi üýtgeşmäni täze gürrüňde AI asystentine düşündiriň:

> "dashboard-notice pluginini diňe administratorlara habar bermek üçin görkezmek üçin täzelen."

AI täze versiany döredip, onu mövcud versiýa bilen sandboxda görkezýär. Siz diff (farklar) bilen gözden geçiriş edip, täzelenme ulanylmeden öň tasdiq etmeli.

## HookScanner Entegrasi

Plugin Builder, her bir oluşturulan eklentinin kaydettiği hook'ları we filter'ları analiz etmek üçin entegre **HookScanner**-yndan istertimat eder. HookScanner netijesi chat yanıtında görkezir we şunları içerir:

- Eylem hook'ları ( `add_action` çağrıları).
- Filter hook'ları ( `add_filter` çağrıları).
- Eklenti bağımlılıklarındakydan tapylanan her türlü hook. (`vendor/` we `node_modules/` dizinleri atlanýar).

Bu, eklentini aktivlemegiňizden öň onuň nädip işläp biljekdigini düşürmäge kömek eder.

## Güvenlik Gözlegleri

- Oluşturulan eklentler manual ýüklenipdirilen eklentlerden aýrylykda saklanýar we siz olary ulgamda özünüz aktivleşdirmek üçin açıkça kurmazdan çykaryňsa standart WordPress eklenti dolandyryş ekranyna girip bilmezsiňiz.
- Sandbox, eklenti fayllaryny ýazmak wagtydan tapylanan dizin geçişini öňüzi almak üçin yol barlagyndan (path validation) sagatlanýar.
- Tehdidi bolan funksiýalary (meselem, `eval`, `exec`, `system`) öz içine alýan eklentler barlagda işaretlenýär we aktivleşdirilmez.
