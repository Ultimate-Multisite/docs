---
title: Amakhono e-Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Amakhono e-Theme Builder: Yakha Uhlaka Futhi Usebenzise Ama-Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 yethula amakhono amabili anamandla akuvumela ukuthi ukhiqize futhi uthumele ama-block themes enziwe ngokwezifiso ngqo kusuka kusixhumi sengxoxo.

## Ukubuka konke {#overview}

Amakhono e-**scaffold-block-theme** kanye ne-**activate-theme** avumela ama-agent ukuthi:
- Akhiqize ama-block themes aphelele, alungele ukukhiqiza, asekelwe ezicacisweni zakho
- Asebenzise ngokuzenzakalela amatimu kusayithi lakho ngaphandle kokungenelela ngesandla
- Adale ubuwena bokubukeka obuhambisanayo ngezinqumo zokuklama eziqondisiwe

## Yakha Uhlaka lwe-Block Theme {#scaffold-block-theme}

Ikhono le-**scaffold-block-theme** likhiqiza itimu entsha ye-WordPress block enesakhiwo setimu esiphelele, okuhlanganisa:

- Ukucushwa kwe-`theme.json` okunama-design tokens
- Amafayela e-block template ezakhiwo ezivamile
- Izitayela ze-block ezenziwe ngokwezifiso nokwahlukahluka
- Imethadatha yetimu nezimemezelo zokusekela

### Indlela Yokukubiza {#how-to-invoke}

Engxoxweni yakho ne-Superdav AI Agent, ungacela ukukhiqizwa kwetimu:

```
"Dala i-block theme ebizwa ngokuthi 'Modern Agency' enohlelo lwemibala oluhlaza okwesibhakabhaka nomhlophe,
i-typography ye-sans-serif, kanye nesakhiwo sobungcweti"
```

I-agent izo:
1. Qoqa izintandokazi zakho zokuklama ngengxoxo
2. Ikhiqize isakhiwo setimu esiphelele
3. Idale wonke amafayela etimu adingekayo
4. Ilungiselele itimu ukuthi isetshenziswe

### Okulindelekile Ekuphumeni {#expected-output}

Lapho ikhono lisebenza ngempumelelo, uzobona:

- Isiqinisekiso sokuthi itimu yakhelwe uhlaka
- Igama letimu nendawo yayo
- Isifinyezo sama-design tokens asetshenzisiwe (imibala, i-typography, izikhala)
- Isimo sokuthi isilungele ukusetshenziswa

Isibonelo sokuphumayo:
```
✓ Itimu "Modern Agency" yakhelwe uhlaka ngempumelelo
  Indawo: /wp-content/themes/modern-agency/
  Imibala: Primary #0066CC, Secondary #FFFFFF
  I-typography: Inter (sans-serif)
  Isimo: Ilungele ukusetshenziswa
```

## Sebenzisa Itimu {#activate-theme}

Ikhono le-**activate-theme** lishintsha isayithi lakho liye ku-block theme esanda kwakhelwa uhlaka noma ekhona kakade.

### Indlela Yokukubiza {#how-to-invoke-1}

Ngemva kokwakha uhlaka lwetimu, ungayisebenzisa ngokushesha:

```
"Sebenzisa itimu ye-Modern Agency"
```

Noma sebenzisa noma iyiphi itimu ekhona kakade:

```
"Shintshela kutimu ye-Twentytwentyfour"
```

### Okulindelekile Ekuphumeni {#expected-output-1}

Lapho ukusetshenziswa kuphumelela:

- Isiqinisekiso setimu esebenzayo
- Igama letimu yangaphambilini (njengereferensi)
- I-URL yesayithi lapho itimu isisebenza khona manje
- Noma yimaphi amanothi okusetha aqondene netimu

Isibonelo sokuphumayo:
```
✓ Itimu isetshenziswe ngempumelelo
  Itimu esebenzayo: Modern Agency
  Itimu yangaphambilini: Twentytwentyfour
  Isebenza ku: https://yoursite.com
  Inothi: Hlola ikhasi lakho lasekhaya ukuze uqinisekise isakhiwo
```

## Ukugeleza komsebenzi: Yakha Uhlaka Futhi Usebenzise {#workflow-scaffold-and-activate}

Ukugeleza komsebenzi okuvamile kuhlanganisa womabili amakhono:

1. **Cela ukukhiqizwa kwetimu**: "Dala i-block theme yekhasi lami lokufika le-SaaS"
2. **I-agent yakha uhlaka lwetimu**: Ikhiqiza amafayela nama-design tokens
3. **Buyekeza futhi uthuthukise**: Xoxa ngezinguquko zokuklama uma kudingeka
4. **Sebenzisa**: "Sebenzisa itimu manje"
5. **Qinisekisa**: Vakashela isayithi lakho ukuze uqinisekise ukuthi umklamo omusha uyasebenza

## Ama-Design Tokens Nokwenza Ngokwezifiso {#design-tokens-and-customization}

Amatimu akhelwe uhlaka asebenzisa ama-design tokens e-WordPress (nge-`theme.json`) ukuze:

- **Imibala**: Iphalethi eyinhloko, eyesibili, egqamile, engathathi hlangothi
- **I-typography**: Imindeni yamafonti, osayizi, izisindo, ukuphakama kwemigqa
- **Izikhala**: Izilinganiso ze-padding, margin, gap
- **Imingcele**: Ama-tokens eradius nobubanzi
- **Izithunzi**: Amazinga okuphakama

Lawa ma-tokens agcinwe endaweni eyodwa ku-`theme.json`, okwenza kube lula ukulungisa lonke uhlelo lwakho lokuklama kusuka efayeleni elilodwa.

## Imikhawulo Namanothi {#limitations-and-notes}

- Amatimu akhelwa uhlaka ku-`/wp-content/themes/` futhi kufanele alandele imithetho yokuqamba ye-WordPress
- Ukusetshenziswa kudinga izimvume ezifanele kusayithi lakho le-WordPress
- Ikhodi ye-PHP eyenziwe ngokwezifiso kumatimu incane; sebenzisa ama-plugin emisebenzi eyinkimbinkimbi
- Ama-block themes asebenza kangcono nge-WordPress 5.9 nangemva kwayo

## Ukuxazulula Izinkinga {#troubleshooting}

**Itimu ayiveli ngemva kokwakha uhlaka**
- Qinisekisa ukuthi ifolda yetimu ikhona futhi inezimvume ezifanele
- Hlola ukuthi `theme.json` iyi-JSON evumelekile
- Qinisekisa ukuthi igama letimu alingqubuzani namatimu akhona

**Ukusetshenziswa kwehluleka**
- Qinisekisa ukuthi unezimvume zomlawuli
- Hlola ukuthi ifolda yetimu iyafundeka yi-WordPress
- Buyekeza amalogi amaphutha e-WordPress ukuze uthole imininingwane

**Ama-design tokens awasebenzi**
- Qinisekisa ukuthi i-syntax ye-`theme.json` ilungile
- Sula noma yimaphi ama-caching plugins
- Hlola ukuthi inguqulo yakho ye-WordPress isekela ama-tokens owasebenzisayo

## Izinyathelo Ezilandelayo {#next-steps}

Ngemva kokusebenzisa itimu yakho, unga:
- Sebenzisa ikhono le-**Design System Aesthetics skill** ukuze uthuthukise i-typography, imibala, nezikhala
- Yenza ngokwezifiso izitayela zama-block ngamanye nge-WordPress block editor
- Engeza i-CSS eyenziwe ngokwezifiso efayeleni le-`style.css` letimu
- Dala ama-block templates enziwe ngokwezifiso ezinhlobo ezithile zamakhasi
