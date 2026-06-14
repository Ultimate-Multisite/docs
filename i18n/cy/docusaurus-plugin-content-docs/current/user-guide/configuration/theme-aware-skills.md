---
title: Gwirioneddolau y Gymuned
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skillau Gwyrddol i'r Theim

Mae Superdav AI Agent v1.10.0 yn cyflwyno pedair newydd o thau gwrddol i'r theim sy mae'n gweithredol gyda'ch WordPress. Mae’r thau hyn yn ychwanegu gynnig a fyddu wedi'u cyfathoghio i'r argyngorthol, gan ei ddefnyddio'r argyllun a phatrwyddau'r theim.

## Beth yw Thau Gwyrddol i'r Theim?

Mae thau gwrddol i'r theim yn cyfathoghau gwybodaeth a set o weithgareddau wedi'u cyflwyno ar gyfer y AI assistant, gan ei ddefnyddio'r theim WordPress sy mae'n gweithredol ar eich safle. Pan gwahanwch theimau, mae'r thau a ddefnyddirol yn cyfathoghio'n awtomatig — nid oes angen i chi roi unrhyw gyfathogi manwl.

Mae pob thau yn cynnwys:

- **Ddefnyddiau penodol o'r theim** — gynnig ar gyfer ddefnyddio a chysylltu'r theim
- **Cyfeiriadau Block a Pattern** — blockau, patternau, a opsiyn dylun a ddefnyddirol
- **Enwystau Cyfathogi** — cyfathrebu cod a pethau gyfathogi ar gyfer gweithgareddau cyffredinol
- **Practysgol Cynhwysol** — cadarnhau argyngllun a ffordd gweithredol y theim

## Thau Gwyrddol Aelodol

### Theimau Block

**Mae'n cyflwyno i:** Theimau sy'n defnyddio argyllun block-based (Full Site Editing) o WordPress.

Mae'r thau Theim yn rhoi gynnig ar gyfer:

- Creu a redig templateau gan ddefnyddio'r block editor
- Gweithio gyda block patterns a blockau ddefnyddirol
- Cyfathogi stylau cyffredinol a setau theme.json
- Defnyddio blockau theim a newidiadau
- Creu block patterns penodol ar gyfer eich safle

**Mae'n gweithredol yn cael ei chynllunio pan:** Mae'r theim sy mae'n gweithredol yn thau block (cynllunio `block-templates`).

### Theimau Clasig

**Mae'n cyflwyno i:** Theimau WordPress clasig sy'n defnyddio PHP templates a'r editor clasig.

Mae'r thau Theim Clasig yn rhoi gynnig ar gyfer:

Gweithio gyda fyliau PHP a hooks
Gwylio'r ffurfiau template PHP a hookau

Cysylltu'r llwybr y thymau drwy'r Customizer
Cyflwyno'r ymddangos y ffurf ar gyfer y thwm

Defnyddio arfaethau widget a siwbau (sidebars)

Modyfi'r CSS a ddatblygiad thwm bach (child theme development)

Gwrthod y cyfyngedig o'r thwm a'r tagau template

**Mae'n cael ei gweithredu'n awtomatig pan:** Mae'r thwm eich gweithredol yn thwm clasic (non-block).

### Kadence Blocks

**Mae'n cyflwyno i:** Safio sydd yn defnyddio'r plugin Kadence Blocks ar gyfer dylunio adeiladu-based a chyfathrebu.

Mae'r gallu Kadence Blocks yn rhoi gwirioneddol ar y cyfarwyddiadau ar:

- Defnyddio'r llyfrgell block advanced o Kadence (Hero, Testimonials, Pricing, etc.)
- Cyflwyno'r setau a opsiynau responsif o Kadence blocks
- Aeiladu llwybrau custom gyda'r grid a container blocks o Kadence
- Cyfathrebu Kadence blocks gyda'r thwm eich

**Mae'n cael ei gweithredu'n awtomatig pan:** Mae'r plugin Kadence Blocks yn weithredol ar eich safle.

### Kadence Theme

**Mae'n cyflwyno i:** Safio sydd yn defnyddio'r thwm Kadence ar gyfer dylunio adeiladu-based a chyfathrebu.

Mae'r gallu Kadence Theme yn rhoi gwirioneddol ar y cyfarwyddiadau ar:

- Ymddangos y thwm Kadence drwy stylau cyffredinol (global styles) a theme.json
- Defnyddio'r patternau a template blocks sydd yn ei gynnwys o Kadence
- Cyflwyno'r setau a opsiynau o'r thwm Kadence
- Aeiladu dyluniau custom gyda'r system dylunio o Kadence
- Cyfathrebu Kadence gyda pluginau a toolau cyffredinol

**Mae'n cael ei gweithredu'n awtomatig pan:** Mae'r thwm Kadence yn eich thwm gweithredol.

## Sut mae gallu'r Gallau wedi'i debyddu?

Mae'r asiantteur yn gweld eich thwm gweithredol a'r pluginau sydd yn ei weithredu ar y message hwnnw. Os oes gennych chi gallu skill sydd yn cyflwyno i, mae'n cael ei chwarae yn awtomatig i'r context o'r asiantteur. Nid oes angen Rhinau i gweithredu neu gwahaniaethu'r skillau manwl.

### Gallau amlwr

Os yr holl ddynion sy'n cyflwyno ar eich safle (er enw, os oes gennych both Kadence Blocks a Kadence Theme yn gweithredol), mae'r asiant yn cael ei cyffredinol â'r holl ddyfynion sy'n cyflwyno ac gallai ei cyfeiriadwy gyda chyfarwyddiadau o'r un.

### Gwylio Thymau (Switching Themes)

Pan gwahaniawch eich thymau weithredol, mae'r ddyfynion sy'n cael eu cyffredinol i'r asiant yn cyfathogh yn awt ar y message nesaf. Er enw:

1. Mae'n cael ei defnyddio thymau bloc gyda'r ddyfyn **Block Themes** yn cael ei gweithredol.
2. Gwahaniawch i thymau clasic.
3. Ar eich message nesaf, mae'r ddyfyn **Classic Themes** yn cael ei chwarae yn awt, ac nid yw'r ddyfyn **Block Themes** yn cael ei gael.

## Defnyddio Ddyfynion Sylltiad Thymau (Using Theme-Aware Skills)

I gefnogi ddyfyn sy'n cael ei gyflwyno ar y thymau, gwneudwch eithaf i ddisgrif beth byddwch yn ei wneud mewn cyfnod chat. Bydd y asiant yn cyfeiriadwy'r chyfarwyddiadau o'r ddyfyn cywir yn awt.

### Prifau Prif (Example Prompts)

**Ar gyfer Block Themes:**
> "Creu sefyn hero gyda chymorth llun canlynol a text wedi'i cynllunio gan ddefnyddio modelau bloc."

**Ar gyfer Classic Themes:**
> "Ymddangos argyfwng widget newydd i'r llawr seiliedig (sidebar) gan ddefyn bach."

**Ar gyfer Kadence Blocks:**
> "Bynllhauch sefyn testunion gan ddefyn Testimonials o Kadence."

**Ar gyfer Kadence Theme:**
> "Gwahaniawch y llwybr y header a'r styl menu cyflwyniad."

Bydd y asiant yn rhoi chyfarwyddiadau a enw cod sy'n cysylltiedig â'r thymau weithredol ac mewn pluginau sy'n cael eu gweithredu.

:::note
Mae ddyfynion sy'n cael eu gyflwyno ar y thymau yn cael eu cael eu cyffredinol i Superdav AI Agent v1.10.0 a oerau. Nid oes angen unrhyw setffryd neu adeiladu ychwanegol.
:::
