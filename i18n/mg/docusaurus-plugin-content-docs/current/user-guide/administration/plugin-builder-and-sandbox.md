---
title: Boafy Fandaharam-potoana sy Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Ny Gratis AI Agent v1.5.0 dia mitondra ny **Plugin Builder & Sandbox System**, izay ahafahanao mamorona, manao activata ary mitantana WordPress plugins ao amin'ny tambajotra anao — izany rehetra izany dia ataon'ny tontolo sandbox azo antoka sy misaraka.

## Fandaharam-beo (Overview)

Ny Plugin Builder dia ahafahan'ny asistantra AI manoratra plugin WordPress manokana mifanaraka amin'ny fangatahana an-teny mahazatra. Ireo plugin namboarina dia voamarina, voatahiry ary natao activata ao anatin'ny layer sandbox alohan'ny hampahazoana fiantraikany amin'ny fiasan'ny tranokala tena izy.

Ireto ny ohatra fampiasana azy:

- Famoronana plugin utility (fanampiana kely) tsy mitaky fandraisan'ny mpandrindra (developer).
- Fandefasana (prototyping) ireo singa izay mila WordPress hooks na custom post types.
- Famoronana script automation fohy ho an'ny asa maro (batch operations).

## Famoronana Plugin amin'ny alalan'ny AI

Mba hanamboarana plugin, afaka manokatra ny interface chat an'ny Gratis AI Agent ianao ary manoratra izay ilainao. Ohatra:

> "Ataovy plugin izay manampy fampahafantarana (notice) manokana eo amin'ny dashboard."

Ny AI dia hatao ireto:

1. Hanamboatra ny code PHP an'ilay plugin mampiasa structured code generation.
2. Ho voamarina ny vokatra mba hisian'ny fahadisoana amin'ny syntax sy ireo fomba tsy azo antoka (unsafe patterns).
3. Ho voatahiry ny plugin namboarina ao amin'ny sandbox store.
4. Hamerina fanamafisana miaraka amin'ny slug an'ilay plugin ary bokotra **Activate in Sandbox**.

Afaka manatsara ny vokatra ianao amin'ny alalan'ny fanazavana bebe kokoa ao anatin'ny resaka mitovy taloha alohan'ny hanaovana activata.

## Fanatanterahana ao anatin'ny Sandbox (Sandbox Activation)

Ny fanatanterahana plugin namboarina ao anatin'ny sandbox dia hafa noho ny fanatanterahany eo amin'ny tambajotra tena izy. Ny sandbox:

- Ho miandraikitra ny plugin ao amin'ny tontolo WordPress misaraka (wp-env).
- Hanangona ireo fahadisoana PHP, famantarana (warnings), na fifanolanana hook rehetra.
- Hamerina ny vokatra fanatanterahana ao anatin'ny interface chat.

Mba hanatanterahana plugin ao anatin'ny sandbox, tsindrio ny bokotra **Activate in Sandbox** ao amin'ny valin'ny AI chat, na ampiasao ny slash command:

/activate-plugin <plugin-slug>
```

Fampitana ny hafatra momba ny fampandrosoana raha nahomby na tsy nahomby ny fanatanterahana azy. Raha tsy nahomby, dia haseho ao anatin'ny chat thread ny log fahadisoana.

## Fitantanana Plugins Vita (Generated Plugins)

Ny plugins vita dia hita ao amin'ny **Gratis AI Agent → Plugin Builder → Manage Plugins**. Amin'ity écran ity ianao afaka:

| Action | Famaritana |
|---|---|
| **View source** | Jereo ny code PHP manontolo an'ilay plugin. |
| **Re-activate in sandbox** | Atao indray ny fanamarinana fampandrosoana ao amin'ny sandbox. |
| **Install on network** | Apetraka ny plugin eo amin'ny tambajotra (network) tena izy (mitaky fanamafisana manokana). |
| **Update** | Manome dikan-teny vaovao amin'ny AI, izay manolo ny code efa misy. |
| **Delete** | Esory ny plugin avy ao amin'ny sandbox store. Atao tsy mandeha (deactivate) ho an'ny toerana rehetra aloha izany. |

:::warning
Ny **Install on network** dia mametraka ny plugin vita eo amin'ny WordPress multisite tena izy anao. Jereo tsara ny code an'ilay plugin alohan'ny hanatanterahana azy. Ny Gratis AI Agent dia hiteny ianao mba hanamafisana alohan'ny hanaovana fametrahana mivantana.
:::

## Fametrahana Plugin Vita eo amin'ny Tambajotra (Network)

Rehefa faly ianao amin'ny plugin vita ao anaty sandbox, dia afaka mametraka azy eo amin'ny tambajotra tena izy ianao:

1. Mandehana any amin'ny **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Tsindrio ny **Install on Network** eo akaikin'ilay plugin tianao apetraka.
3. Manamafisina ny dialog. Apetraka ny plugin ao amin'ny `wp-content/plugins/` ary mandeha ho an'ny tambajotra (network).

Na dia azo atao aza, ampiasao ny slash command ao amin'ny interface chat:

```
/install-plugin <plugin-slug>
```

## Fanavaozana Plugins

Mba hanavaozana plugin vita, manorata ny fanovana tianao ho an'ny ason'ny AI assistant amin'ny adidy vaovao:

> "Fanavao ny dashboard-notice plugin mba hanehoina fotsiny ny fampahafantarana ho an'ny administrator."

Ny AI dia mamorona dikan-teny vaovao, izay miseho ao anaty sandbox miaraka amin'ilay dikan-teny efa misy. Jereo ny diff (famaritana ny fiovana) ary manamafisina alohan'ny hanatanterahana ny fanavaozana.

## Integrasyon HookScanner

Plugin Builder, her bir oluşturulan eklentinin kaydettiği hook'ları ve filtreleri analiz etmek için entegre bir **HookScanner** kullanır. HookScanner çıktısı sohbet yanıtında gösterilir ve şunları içerir:

- Kaydedilmiş Eylem hook'ları (`add_action` çağrıları).
- Kaydedilmiş Filtre hook'ları (`add_filter` çağrıları).
- Eklenti bağımlılıklarında bulunan herhangi bir hook ( `vendor/` ve `node_modules/` dizinleri atlanır).

Bu, bir eklentiyi etkinleştirmeden önce onun davranışını anlamanı sağlar.

## Güvenlik Hususları

- Oluşturulan eklentiler, manuel olarak kurulan eklentilerden ayrı tutulur ve bunları ağda açıkça kurmadığınız sürece standart WordPress eklenti yönetim ekranından erişilemezler.
- Sandbox, eklenti dosyaları yazılırken dizin gezinmesini önlemek için yol doğrulaması kullanır.
- Tehlikeli fonksiyon çağrılarına (örneğin, `eval`, `exec`, `system`) sahip eklentiler doğrulama sırasında işaretlenir ve etkinleştirilmezler.
