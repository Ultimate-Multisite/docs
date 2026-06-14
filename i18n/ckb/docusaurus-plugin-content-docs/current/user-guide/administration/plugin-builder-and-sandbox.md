---
title: سۆفتوير بۆ دروستکردنی پلاتفۆرم و ساندبوکس
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introduces **Plugin Builder & Sandbox System**, ku li le AI assistant yiwê pluginên WordPressê ji bo rastkirin, aktife kirin û zaravkirin (manage) wan li ser rêxşeya we — bi hemûti ji ber hevkarî, li nav tevahiya mîmarê sandbox.

## Overijê

Plugin Builder dikare AI assistant ji bo nivîsandinên pluginên WordPressê custom li jawba xwestên gelekî (natural language requests) bike. Pluginên hatine derdikeşandin têne pirandina, hatin ştevan kirin û aktife dikirin di nav qotayeke sandbox de pê veqetirin, pênase ku hewceyan wan bi karê siteya jiyana ne hene.

Kullanî wan ji bo:

- Derdikeşandin pluginên girmenî (utility plugins) bi şêweca developer ne hene.
- Prototipkirina taybetxwediyên ku hewce dikin hookên WordPress an custom post types.
- Çêkirina scriptên automatik ji bo operasyonên çenddar (batch operations) ku demên kurt in.

## Derdikeşandin Plugin bi AI

Ji bo derdikeşandin pluginê, interfaceyê chatê Gratis AI Agent werinî, û li ser wê ji berê xwe ji bo vê yekê biaxivin ku hewce dikin. Li vir, wekî nêmin:

> "Derikeşîne pluginek ku nûçeyek custom adminê li dashboardê bişewe."

AI:

1. Koda PHP-ya pluginê bi ji aliyê derdikeşandinên kod (structured code generation) ve hatine derdikeşandin.
2. Çavbandirina derdikeşandina ji bo pirgirtinên sintaksîk û pîvên nehuşî.
3. Kayfê pluginê derdikeşandin di dema sandbox storeê.
4. Raxesandina hatine pêşkêşkirin bi slug-a pluginê û butonê **Activate in Sandbox**.

Tu dikarin natireya ji aliyê vê yekê ve pirandina bike berî ku aktife dikin.

## Aktifkirina Sandbox

Aktifkirina pluginê derdikeşandin di sandbox de ji aktife kirina wê li ser rêxşeya jiyana cîhê ne hene. Sandbox:

- Pluginê di tevahiya mîmarê WordPressê (wp-env) de bi karê ve dike.
- Pirandina pirgirtinên PHP, hatayî (warnings), an hewceyan (hook conflicts) ji bo derdikeşandinê.
- Natiyek aktife kirina wê di interfaceyê chatê pê ve rapora dike.

Ji bo aktife kirina pluginê di sandbox de, butonê **Activate in Sandbox** di jawba derdikeşandina AI de klik bike, an ji aliyê lệnhê slash (/) ve benivîsin:

```
/activate-plugin <plugin-slug>
```

Pêşnava yek mesaj confirme dikea activashni guushitî an nebaşwariyek ye. Ger nebaşwariyek e, loga greyare bi chat thread derê dikare derxistin.

## Rêbkirina Pluginên Derxistin

Pluginên derxistin li **Gratis AI Agent → Plugin Builder → Manage Plugins** de li listê nehinint. Ji vê ekranê, tu dikarin:

| Eylem | Pêşnava |
|---|---|
| **View source** | Koda PHP-a biştî ya pluginê lê derxistin bixwazin. |
| **Re-activate in sandbox** | Pêşnava activashni sandboxê pêşîn bike. |
| **Install on network** | Pluginê ji neteweyê (network) derxistin (bi taybetî taybetî bi taybetîyên taybetî). |
| **Update** | Versionek nû ji aliyê AI ve hatine pêşkêş kirin, ku koda wergera ve hatine hewcekirin. |
| **Delete** | Pluginê ji mağaza sandboxê hatine hatîrê. Pêşîn li hemû sitên de neaktivate wê dike. |

:::warning
**Install on network** pluginê derxistin derxistin a derxistin derxistin a WordPress multisite ya wekî. Piştira koda pluginê lê ji bo pêşve xistin bi taybetîya taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybetîyên taybet

## Integration HookScanner

Plugin Builder دۆخی **HookScanner** یەکگرتوو بەکاردەهێنێت بۆ شیکردنەوەی ئەو hooks و filtersانەی کە لەلایەن هەر پلاتینی گەشەی پێدراوەکان تۆمار کراون. ئەنجامی HookScanner لەوەڵاردا دەردەکەوێت لەوودایە و لەخۆدەگرێت:

- Action hooks تۆمارکراون (کالەکانی `add_action`).
- Filter hooks تۆمارکراون (کالەکانی `add_filter`).
- هەر hookێک کە لە پلاتینی وابەستنەکانی جێگیرداوە (دۆسیەی `vendor/` و `node_modules/` هەڵدەگرێت).

ئەمە یارمەتیت دەدات تێبگەیت چۆنیەتی کارکردنی پلاتینەکە پێش ئەوەی لەسەر ئامێرەکەت چالاک بکەیت.

## بیرۆکەکانی پاراستراوکردن (Security Considerations)

- پلاتینی گەشەی پێدراوەکان بەج بە جیاواز لە پلاتینی خۆت تۆمارکراوە و تا ئەو کاتەی کە بە شێوەیەکی ڕوون لەسەر تۆڕەکەت دامەزرێنیت، ناتوانرێت بە ئاسانەوە لە ڕێگەی شاشەی بەڕێوەبردنی پلاتینەکانی WordPress دەستکارییان بکەیت.
- Sandbox یەکێک لەو کارە دۆسیەی ڕێگەپێدان بە ڕێگای دۆسیەیە بۆ ڕێگرتن لە گەڕانەوەی دۆسیەکان کاتێک فایلەکانی پلاتینەکە دەنووسێت.
- پلاتینی کە کارکردنێکی مەترسیدار هەیە (وەک `eval`, `exec`, `system`) لە کاتی شیکردنەوەدا نیشاندراو دەبێت و چالاک ناکرێت.
