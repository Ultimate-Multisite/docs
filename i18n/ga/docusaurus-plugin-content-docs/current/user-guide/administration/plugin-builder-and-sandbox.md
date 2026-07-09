---
title: An Bhrochtú Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Tá an Gratis AI Agent v1.5.0 ag cur chuig an **Plugin Builder & Sandbox System**, a which leas an ábhair AI a chur ar fáil, a chuid an plugin WordPress a shonraithe, a chuid a chuid a bheith ar fáil agus a chuid a bhaint ar fáil ar do net — go léir tríd ardán sandbox atá caomhogta.

## Oibríochtaí {#overview}

Cén fáth a bhfuil an Plugin Builder ag ceada ar ábhair AI a chur ar fáil plugin WordPress a shonraithe ar fáil ar chuid rithrigh le curteacha luath. Tá na plugin a gnátha a chuid a chuid, a sholáir agus a bhaint ar fáil sa chuid ardán sandbox prima caomhogta go háirithe go dtí láthairt ar aon fhaointeacht ar an sinte.

Tá úsáidí ag cur chuig:

- Gnáth plugin utility (faoi-chuid) leatach gan curteacha deóirí.
- Déan prototíseacht fhaointeachta a tháinig leis na WordPress hooks nó custom post types.
- Creacht script automation (faoi-chuid) leatach ar chuid oibríochtaí.

## Gnáth Plugin tríd AI {#generating-a-plugin-via-ai}

Le chun plugin a gnáth, lán an chat interface de Gratis AI Agent agus díon an rud atá agat ag curteacha. Mar shampla:

> "Creacht plugin a shonraithe a chur ar fáil ar an dashboard."

Beidh an AI ag:

1. Gnáth code PHP an plugin trí ardán code gnátha.
2. A chuid an áit a bhaint ar fhaointeacha syntax agus pádraí an-safe.
3. A sholáir an plugin a gnátha sa store sandbox.
4. A roinnt féin le curteacha le an plugin slug agus nútinn **Activate in Sandbox**.

Is féidir leat an t-aithris a chuid ar fáil le curteacha leatag ag cur chuig iarracht a bhaineann leat ag curchuim ar fáil prima chun é a chuid.

## Actáir Sandbox {#sandbox-activation}

Tá an actáir plugin a shonraithe sa sandbox ag cur chuig a bheith ag actáir ar an net láthairt. Tá an sandbox:

- Ag cur an plugin ar fáil i ardán WordPress isolaithe (wp-env).
- A chuid aon éiríseanna PHP, warnings nó feadhcheana hooks.
- A roinnt an t-aithris a bhaineann leat ag cur chuig iarracht ar fáil sa chat interface.

Le chun plugin a bheith ag actáir sa sandbox, cliceáil ar nútinn **Activate in Sandbox** i d'aon curteach AI, nó úsáid an curteach:

```
/activate-plugin <plugin-slug>
```

Tá meán-a chomhlaiseán a thugann an t-amhasg féin má tharlaíonn an áitúctáil nó ní. Ar fhiachfaidh ghlosa an log éiríne ag cur chuir ar an t-chath.

## Cur na Pluginí a Chéadta {#managing-generated-plugins}

Tá pluginí a chéadta ag cur chuir i **Gratis AI Agent → Plugin Builder → Manage Plugins**. Ó seo thuas féidir leat:

| Árduint | Aonach |
|---|---|
| **View source** | Aileamh an code PHP de bhplugin go léir. |
| **Re-activate in sandbox** | A chreachtáil ar an t-amhasg áitúctála. |
| **Install on network** | A chur i bhfeidhm an plugin ar an ngrú laimhseáil (teastaíonn cur síos manual). |
| **Update** | A chur ar fáil cur nua trí AI, ag iarraidh a chur leat an code a bhaineann. |
| **Delete** | A gcurt an plugin ó chontail an t-amhasg. Bhaileannaíonn sé é ó chuiditeán an gcuiditeáin ar an gcurtaí go coma. |

:::warning
**Install on network** a chur i bhfeidhm an plugin a bheith curtha ar an WordPress multisite laimhseála. Déan ar an code an plugin ar an easpa go léir trí seo. Beidh Gratis AI Agent ag iarraidh cur síos chun cur leat an t-amhasg a dhéanamh primaí chun cur i bhfeidhm laimhseáil.
:::

## Cur Plugin a Chéadta ar an Ngrú {#installing-a-generated-plugin-on-the-network}

Nu déan tú leis an plugin áitúctála, leat é a chur i bhfeidhm an ngrú:

1. Déan cur isteach i **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Cliom ar **Install on Network** ag cur leat an plugin atá tú ag cur i bhfeidhm.
3. Cur síos an diallog. Tá an plugin curtha i `wp-content/plugins/` agus tá sé curtha ar an ngrú.

Ar chuid eile, usaigh an amras slash (slash command) i bhfíne an chat:

```
/install-plugin <plugin-slug>
```

## Cur Pluginí {#plugin-updates}

Chun cur plugin áitúctála a chur ar fáil, díon an tháthas ar an tharrab AI i gcomhrá nua:

> "Cur an plugin dashboard-notice a chur ar fáil ach é seo an notice do chuiditeáin."

Bíonn an AI ag cur cur nua, ag cur chuir i bhfeidhm an t-amhasg leat ag cur síos primaí chun cur i bhfeidhm a bheith curtha.

## Intégráid HookScanner {#hookscanner-integration}

Ní bhfeicneann an Plugin Builder ar chuid **HookScanner** a bheith ag iarraidh chun an hook-e agus na filter-e atá registered leat ag cadafadh each plugin a chur in áit. Tá cur chuimneán HookScanner ag tairiscint i bhfostáil an chat response agus is lonaidtear:

- Action hooks registered (`add_action` calls).
- Filter hooks registered (`add_filter` calls).
- Cúisí (hooks) a fháil leat i dteanntaí plugin (ní a bheith ag iarraidh an cur chuimneán `vendor/` agus `node_modules/`).

Is é seo a sholáir go bhfuil tú ag iarraidh an cur chuimneán de bhfinn an plugin ar chuid a fháil chun é a chruinneáil.

## Cúisí Sécurité (Security Considerations) {#security-considerations}

- Tá na plugin-e a chur in áit ag cur chuimneán seachas ó na plugin-e atá registered go díreach mar a bheith ag cur chuimneán ar an scáile WordPress sinintil, ach níl féidir iad fáil amach go léir nuair a chur in áit go díreach ar an nettwrík.
- Bainneann an sandbox chuid cur chuimneán stiúradh (path validation) chun cur chuimneán de bhfinn (directory traversal) a bheith ag cur chuimneán nuair a chur in áit na file-e plugin.
- Tá na plugin-e le cur chuimneáin fada (dangerous function calls) (is é sin, `eval`, `exec`, `system`) a chruinneáil go díreach ag cur chuimneán agus níl féidir iad a chur in áit.
