---
title: Yenza i-Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Yenza i-Logo SVG

Isakhono se-**Generate Logo SVG** sivumela i-Theme Builder ukuba yenze kwaye ifake ii-logo SVG ezenzelwe wena ngqo kwi-WordPress site yakho ngokucocwa okuzenzekelayo okukhuselekileyo kwi-namespace.

## Isishwankathelo

Esi sakhono senza ii-logo ze-scalable vector graphics (SVG) ezisekelwe kwicala le-branding le-site yakho nakwizinto ozikhethayo kuyilo. Ii-SVG ezenziweyo zicocwa ngokuzenzekelayo ukuqinisekisa ukuba zikhuselekile ukusetyenziswa kwi-WordPress ngelixa zigcina umgangatho wembonakalo.

## Iiparamitha

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Igama le-site ekufuneka yenzelwe i-logo |
| `style` | string | Yes | Isimbo soyilo (umz., "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Uluhlu lweekhowudi zemibala ye-hex eziza kusetyenziswa kwi-logo (umz., `["#678233", "#ffffff"]`) |
| `width` | number | No | Ububanzi be-SVG ngeepikseli (okusisiseko: 200) |
| `height` | number | No | Ubude be-SVG ngeepikseli (okusisiseko: 200) |
| `include_text` | boolean | No | Nokuba kufakwe igama le-site njengombhalo kwi-logo (okusisiseko: true) |

## Ifomathi Yesiphumo

Esi sakhono sibuyisa umtya we-SVG onesakhiwo esilandelayo:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Ukuziphatha Kokucoca i-SVG

Ii-SVG ezenziweyo zidlula ekucocweni okuzenzekelayo okukhuselekileyo kwi-namespace ukuze:

- **Kususwe iimpawu ezingakhuselekanga** — kususa ii-event handlers, ii-scripts, kunye neempawu ezinokuba yingozi
- **Kugcinwe ii-namespaces** — kugcina ii-namespaces ze-SVG (xmlns, xlink) ukuze kuboniswe ngokufanelekileyo
- **Kuqinisekiswe isakhiwo** — kuqinisekisa ukuba i-SVG ihambelana nemigangatho ye-W3C
- **Kukhowudwe ii-entities** — kukhusela ngokufanelekileyo oonobumba abakhethekileyo kumxholo wombhalo
- **Kususwe izikhombisi zangaphandle** — kususa ii-stylesheets zangaphandle kunye nezikhombisi zemifanekiso

Oku kuqinisekisa ukuba i-SVG ikhuselekile ukuyifaka ngqo kwi-WordPress ngaphandle kokufuna ukucocwa okongezelelweyo.

## Umzekelo Wokusetyenziswa

**Prompt:**
```
Yenza i-logo yanamhlanje ye-tech startup yam ebizwa ngokuba yi-"CloudSync" usebenzisa imibala eluhlaza okwesibhakabhaka nomhlophe.
```

**Isiphumo:**
Esi sakhono senza i-logo ye-SVG ethi:
- Ibandakanye igama le-site "CloudSync"
- Isebenzise iskimu semibala eluhlaza okwesibhakabhaka nomhlophe echaziweyo
- Ilandele imigaqo yoyilo lwangoku
- Icocwe ngokuzenzekelayo kwaye ilungele ukusetyenziswa

## Ukudityaniswa ne-Theme Builder

Xa usebenzisa ukhetho lwecala loyilo lwe-Theme Builder, isakhono se-Generate Logo SVG:

1. Sihlalutya icala lakho loyilo kunye nephalethi yemibala
2. Senza i-logo ye-SVG eyenzelwe wena ehambelana nezinto ozikhethayo
3. Sifaka ngokuzenzekelayo i-logo kwindawo ye-header/branding ye-site yakho
4. Sigcina i-SVG njenge-logo eyenzelwe wena kwi-WordPress media

## Ezona Ndlela Zilungileyo

- **Nika izinto ozikhethayo zesimbo ezicacileyo** — chaza isimbo soyilo olufunayo (modern, classic, playful, njl.)
- **Chaza imibala** — faka imibala ye-brand yakho ukuze kubekho ukuhambelana
- **Vavanya ukuboniswa** — qinisekisa ukuba i-logo ibonakala ngokuchanekileyo kubungakanani obahlukeneyo besikrini
- **Yenze ngakumbi ngokwezifiso** — sebenzisa izixhobo ze-WordPress zokwenza i-logo ngokwezifiso ukuze uhlengahlengise ubungakanani nendawo

## Imida

- Ii-logo ze-SVG zenziwa njengemizobo engashukumiyo (engengomfanekiso oshukumayo)
- Ii-logo ezintsonkothileyo ezinezinto ezininzi zingafuna ukulungiswa ngesandla
- Iifonti ezenzelwe wena azixhaswa; umbhalo usebenzisa iifonti zenkqubo
- Imilinganiselo emikhulu kakhulu okanye emincinci kakhulu inokuchaphazela umgangatho

## Izakhono Ezihambelanayo

- [Qinisekisa Umahluko Wephalethi](./validate-palette-contrast.md) — jonga umahluko wemibala ukuze kufikeleleke
- [Yenza iMenyu](./create-menu.md) — yenza iimenyu zokuhamba ze-site yakho
