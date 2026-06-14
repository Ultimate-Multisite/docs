---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introduċi l-**Plugin Builder & Sandbox System**, li jippermettix lil assistent IA li jagħmli, jaktiva u jidir b'opera WordPress fuq la rete tiegħek – kollha permezz tal-ambiente sandbox sicuru u isolat.

## Panoramika

Il-Plugin Builder jippermettix lil assistent IA li jiftrapja plugin WordPress kustomi b'risposta għall-istgħarijiet naturali (natural language requests). Il-pluginijiet li giċċetemu jiġu verifikati, jipprovvdi l-informazzjoni (stored) u jaktivate f'meħtieġ sandbox qabel ma jaffettwaw funksjonalità tal-site aktiva.

L-casu d'użu inklużi:

- Genera plugin utility legali b'mod minimu ta l-immanin (without developer involvement).
- Prototipja feature li għandhom hook WordPress jew custom post types.
- Tcrea skripti diġitali (automation scripts) bejn ħsieb qasir biex japplikaw operazzjonijiet batch.

## Genera Plugin permezz tal-AI

Biex tgħmli plugin, aħeles l-interface ta chat tal Gratis AI Agent u isaprabb x'għandek. Biex t-tqiegħed, għal ഉദാħ, it-tulis:

> "Ikreaw plugin li jiddejna notifika admin kustom fuq il-dashboard."

L-AI se:

1. Jagħmli l-kod PHP tal-plugin u jipproċessa b'mod strutturat (structured code generation).
2. Jverifika l-output għall-erriġidji sintattiku u pattern ma jkunx sicuri.
3. Jiftaq il-plugin li giċċetemu f'store tal-sandbox.
4. Irritji konfirmazzjoni mal-slug tal-plugin u bixogħlu buttan **Activate in Sandbox**.

Tista' t-tfine l-risultat biex t-tfine (refine) billi tgħmli follow-up flimma x-xem fil-thread ta konversazzjoni qabel ma taktiva.

## Attivazzjoni f'Sandbox

Attivazzjoni tal-plugin li giċċetemu f'sandbox hija diversa min l-attivazzjoni fuq la rete aktiva (live network). Il-sandbox:

- Jxem il-plugin f'ambiente WordPress isolat (wp-env).
- Jiftaq jiddejna (captures) quddi erriġidji PHP, warnings jew konflikti ta hook.
- Japporta l-risultatu tal-attivazzjoni mal-interface ta chat.

Biex taktiva plugin f'sandbox, issaqa buttan **Activate in Sandbox** f'irrisposta ta chat tal-AI, jew uż il-command slash:

/activate-plugin <plugin-slug>
```

Messa status ta jidifiki se l-attivazzjoni ssewqa jew ma qasla. Fu kassa, jekk tkun ma qasla, tista' tipprovdi l-log tal-ġustimm fil-thread tal-chat.

## Aġġustar il-Plugin Generat

Il-plugin generati jiddisponibili f **Gratis AI Agent → Plugin Builder → Manage Plugins**. Min staq screen, tista':

| Azjoni | Descripzjoni |
|---|---|
| **View source** | Tista' tipprovdi l-review tal-kull il-code PHP tal-plugin. |
| **Re-activate in sandbox** | Tista' tiġi ri-erun il-check tal-attivazzjoni fil-sandbox. |
| **Install on network** | Tista' tiddipoj il-plugin fuq l-network live (jettil konfirmazzjoni manuali). |
| **Update** | Tista' tipprovdi bizzjoni ġdid via l-AI, li jiddeħħol il-code esistenti. |
| **Delete** | Tista' tixla il-plugin mill-sandbox store. Jidattiva mn tutti i siti ewlenin ewda. |

:::warning
**Install on network** tippoj il-plugin generat fuq l-WordPress multisite live tiegħek. Review il-code tal-plugin qabel ma tcommen. Gratis AI Agent jiddeħħol b'proposta ta konfirmazzjoni qabel ma jkompli l-install live.
:::

## Installazzjoni tal-Plugin Generat fuq l-Network

Meta tkun salvi mal-plugin fil-sandbox, tista' tiinstallih fuq l-network live:

1. Irrivi għal **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klikka fuq **Install on Network** qabel il-plugin li tista' tippoj.
3. Konfirmali il-dialog. Il-plugin jinstall mill-directory `wp-content/plugins/` u jidattiva fil-network.

Alternativament, tista' tista' l-command slash fil-interface tal-chat:

```
/install-plugin <plugin-slug>
```

## Aggiornamenti tal-Plugin

Biex taggiorna plugin generat, isaprèd il-cambjiet l-AI assistant f konversazzjoni nuova:

> "Aggiorna il dashboard-notice plugin biex juri l-notifika għall-administrati kollha."

L-AI jgenera versjoni nuova, li tispari fil-sandbox flimħاqqa ma' l-versjoni esistenti. Tista' tiġi review il-diff u konfirmali qabel ma japplika l-aggiornamento.

## Integrà HookScanner

Il Plugin Builder u fa uso de **HookScanner** integrat per analizzare gli hook u i filtri registrati da ogni plugin generatu. L-output tal-HookScanner vien mostru fl-chat response u inklude:

- Gli action hooks registrati (`add_action` calls).
- Gli filter hooks registrati (`add_filter` calls).
- Quals awt hook juttu fil-plugin (skips directory `vendor/` u `node_modules/`).

Dan xi ja tfisser li comportamento tal-plugin qabel attivalu.

## Considerazzjonijiet di Sicurezza

- Gli plugin generati juttu stabbiliti separati mill-plugin li installati manualment u ma jkun żgħar għall-screen tal-management tal-plugin ta WordPress fin ma tinstallhom esplicitament fuq n-network.
- Il sandbox jista' l-validation tal-path biex jipprevjeni directory traversal meta qed jittrisaw il-file tal-plugin.
- Gli plugin li għandhom funqjuni perikolu (meta `eval`, `exec`, `system`) jinġiem durante il validazzjoni u ma jkun attivali.
