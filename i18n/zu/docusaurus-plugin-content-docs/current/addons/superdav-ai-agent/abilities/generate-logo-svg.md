---
title: Khiqiza i-Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Khiqiza i-Logo SVG {#generate-logo-svg}

Ikhono elithi **Khiqiza i-Logo SVG** livumela Theme Builder ukuthi yakhe futhi ifake ama-logo SVG enziwe ngokwezifiso ngqo kusayithi yakho ye-WordPress ngokuhlanzwa okuzenzakalelayo okuphephile kwe-namespace.

## Uhlolojikelele {#overview}

Leli khono likhiqiza ama-logo ezithombe ze-vector ezikhuliswa kalula (SVG) ngokusekelwe ekuqondeni komkhiqizo wesayithi yakho nasezintandokazini zedizayini. Ama-SVG akhiqiziwe ahlanzwa ngokuzenzakalelayo ukuze kuqinisekiswe ukuthi aphephile ukusetshenziswa ku-WordPress kuyilapho kugcinwa ubuqotho bokubukeka.

## Amapharamitha {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yebo | Igama lesayithi okumele kukhiqizelwe yona i-logo |
| `style` | string | Yebo | Isitayela sedizayini (isb., "modern", "classic", "minimalist", "playful") |
| `colors` | array | Cha | Uhlu lwamakhodi emibala ye-hex azosetshenziswa ku-logo (isb., `["#678233", "#ffffff"]`) |
| `width` | number | Cha | Ububanzi be-SVG ngamaphikseli (okuzenzakalelayo: 200) |
| `height` | number | Cha | Ukuphakama kwe-SVG ngamaphikseli (okuzenzakalelayo: 200) |
| `include_text` | boolean | Cha | Ukuthi kufakwe yini igama lesayithi njengombhalo ku-logo (okuzenzakalelayo: true) |

## Ifomethi Yokuphumayo {#output-format}

Leli khono libuyisa uchungechunge lwe-SVG olunalesi sakhiwo esilandelayo:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Ukuziphatha Kokuhlanzwa kwe-SVG {#svg-sanitisation-behaviour}

Ama-SVG akhiqiziwe adlula ekuhlanzweni okuzenzakalelayo okuphephile kwe-namespace ukuze:

- **Kususwe ama-athribhyuthi angaphephile** — kususa izibambi zemicimbi, ama-script, nama-athribhyuthi angaba yingozi
- **Kugcinwe ama-namespace** — kugcina ama-namespace e-SVG (xmlns, xlink) ukuze kuboniswe kahle
- **Kuqinisekiswe isakhiwo** — kuqinisekisa ukuthi i-SVG ihambisana namazinga e-W3C
- **Kufakwe ikhodi kuma-entities** — kubalekisa kahle izinhlamvu ezikhethekile kokuqukethwe kombhalo
- **Kususwe izinkomba zangaphandle** — kususa ama-stylesheet angaphandle nezinkomba zezithombe

Lokhu kuqinisekisa ukuthi i-SVG iphephile ukuyifaka ngqo ku-WordPress ngaphandle kokudinga ukuhlanzwa okwengeziwe.

## Isibonelo Sokusetshenziswa {#usage-example}

**Umyalelo:**
```
Khiqiza i-logo yesimanje ye-tech startup yami ebizwa ngokuthi "CloudSync" usebenzisa imibala eluhlaza okwesibhakabhaka nomhlophe.
```

**Umphumela:**
Leli khono lakha i-logo ye-SVG ethi:
- Ifake igama lesayithi "CloudSync"
- Isebenzise uhlelo lwemibala olucacisiwe oluhlaza okwesibhakabhaka nomhlophe
- Ilandele imigomo yedizayini yesimanje
- Ihlanzwe ngokuzenzakalelayo futhi isilungele ukusetshenziswa

## Ukuhlanganiswa ne-Theme Builder {#integration-with-theme-builder}

Lapho usebenzisa ukukhetha kokuqondisa kwedizayini kwe-Theme Builder, ikhono elithi Khiqiza i-Logo SVG:

1. Lihlaziya ukuqondisa kwakho kwedizayini kanye nephalethi yemibala
2. Likhiqiza i-logo ye-SVG eyenziwe ngokwezifiso ehambisana nezintandokazi zakho
3. Lifaka ngokuzenzakalelayo i-logo endaweni ye-header/branding yesayithi yakho
4. Ligcina i-SVG njenge-logo eyenziwe ngokwezifiso kumidiya ye-WordPress

## Imikhuba Engcono Kakhulu {#best-practices}

- **Nikeza izintandokazi zesitayela ezicacile** — chaza isitayela sedizayini osifunayo (modern, classic, playful, njll.)
- **Cacisa imibala** — faka imibala yomkhiqizo wakho ukuze kube nokufana
- **Hlola ukuboniswa** — qinisekisa ukuthi i-logo ibonakala kahle kumasayizi esikrini ahlukene
- **Yenza ngokwezifiso ngokwengeziwe** — sebenzisa amathuluzi e-WordPress okwenza i-logo ngokwezifiso ukuze ulungise usayizi nendawo

## Imikhawulo {#limitations}

- Ama-logo e-SVG akhiqizwa njengezithombe ezimile (azinyakaziswa)
- Ama-logo ayinkimbinkimbi anezinto eziningi angase adinge ukucwengwa ngesandla
- Amafonti enziwe ngokwezifiso awasekelwa; umbhalo usebenzisa amafonti esistimu
- Ubukhulu obukhulu kakhulu noma obuncane kakhulu bungase buthinte ikhwalithi

## Amakhono Ahlobene {#related-abilities}

- [Qinisekisa Ukuhluka Kwephalethi](./validate-palette-contrast.md) — hlola ukuhluka kombala ukuze kufinyeleleke
- [Dala Imenyu](./create-menu.md) — dala amamenyu okuzulazula esayithi yakho
