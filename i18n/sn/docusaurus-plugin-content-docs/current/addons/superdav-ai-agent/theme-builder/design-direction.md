---
title: Nhungamiro yeDhizaini
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Gwaro reDhizaini {#design-direction}

Danho re**Gwaro reDhizaini** rinokubvumira kuongorora, kunatsa, uye kupedzisa dhizaini inoonekwa yetheme yako Theme Builder isati yagadzira theme yakazara.

## Pfupiso {#overview}

Mushure mekupedza Discovery Interview, Theme Builder inoratidza gwaro rako reDhizaini ne**kuratidzwa kwepreview yedesktop neyekunhare**. Izvi zvinokubvumira kuona chaizvo kuti dhizaini yako icharatidzika sei pamidziyo yakasiyana usati wazvipira kutheme.

## Zvikamu zveGwaro reDhizaini {#design-direction-components}

### 1. Palette yeMavara {#1-color-palette}

Chirongwa chemavara chetheme yako, chinosanganisira:

- **Ruvara rukuru** — ruvara rukuru rwebrand runoshandiswa kumabhatani, malink, uye zvinoratidza
- **Ruvara rwechipiri** — ruvara runotsigirana nerukuru kuitira kusiyana
- **Ruvara rwekusimbisa** — ruvara rwekuratidza zvinhu zvakakosha
- **Mavara asina kusimba** — magrey nechena zveshure uye mavara ezvinyorwa
- **Ruvara rwechinyorwa** — ruvara rukuru rwechinyorwa kuti zviverengeke zviri nyore

### 2. Mataipogirafi {#2-typography}

Sarudzo dzemafonti e:

- **Fonti yemisoro** — inoshandiswa kumazita emapeji nemisoro yezvikamu
- **Fonti yemuviri** — inoshandiswa kuzvinyorwa zvendima nezviri mukati
- **Saizi dzemafonti** — saizi inopindura kumasaizi esikirini akasiyana
- **Kureba kwemutsetse** — nzvimbo pakati pemitsara kuti zviverengeke zviri nyore
- **Huremu hwemafonti** — misiyano yakakora, yakajairika, uye yakareruka

### 3. Marongerwo neNzvimbo {#3-layout-and-spacing}

- **Upamhi hwecontainer** — upamhi hukuru hunobvumirwa hwezviri mukati
- **Padding nemamargins** — nzvimbo yakapoteredza zvinhu
- **Sisitimu yegrid** — marongerwo emakoramu edhizaini inopindura
- **Nzvimbo pakati pezvikamu** — chinhambwe pakati pezvinhu zveUI

### 4. Zvinhu Zvinoonekwa {#4-visual-elements}

- **Masitayera emabhatani** — madhizaini emabhatani makuru, echipiri, neechitatu
- **Madhizaini emakadhi** — marongerwo emablock ezviri mukati
- **Maikoni** — sitayera nesaizi yeikoni
- **Mabhodha nemimvuri** — kudzika kunooneka zvinyoro
- **Mhedzisiro yehover** — sitayera yemamiriro ekudyidzana

## Kuratidzwa kwePreview {#preview-rendering}

### Preview yeDesktop {#desktop-preview}

Preview ye desktop inoratidza dhizaini yako paupamhi hwakazara (kazhinji 1200px kana kupfuura):

- Menyu yekufamba yakazara
- Marongerwo akazara nemakoramu ese
- Typography yakakura nenzvimbo
- Zvinhu zvese zvinoonekwa pahukuru hwakazara

### Preview yeMobile {#mobile-preview}

Preview ye mobile inoratidza dhizaini yako paupamhi hwenhare (kazhinji 375px):

- Kufamba kunopindura (menyu yehamburger)
- Marongerwo ekoramu imwe chete
- Typography nenzvimbo zvakagadziridzwa
- Saizi dzemabhatani dziri nyore kubata

### Responsive Breakpoints {#responsive-breakpoints}

Theme Builder inoratidza mapreview pama breakpoints aya:

| Mudziyo | Upamhi | Preview |
|--------|-------|---------|
| **Mobile** | 375px | Runhare rweportrait |
| **Tablet** | 768px | Tablet ye landscape |
| **Desktop** | 1200px | Desktop ine upamhi hwakazara |
| **Large Desktop** | 1920px | Chiratidziro chakafara zvikuru |

## Kunatsa Dhizaini Yako {#refining-your-design}

### Kuita Kugadziridza {#making-adjustments}

Unogona kunatsa gwaro rako reDhizaini ne:

1. **Kugadzirisa mavara** — chinja chero ruvara mu palette
2. **Kuchinja mafonti** — sarudza typefaces dzakasiyana
3. **Kugadzirisa nzvimbo** — gadzirisa padding nemamargins
4. **Kuvandudza marongerwo** — chinja upamhi hwema container nemakoramu egrid
5. **Kugadzirisa zvinhu** — shandura masitayera emabhatani, madhizaini emakadhi, nezvimwe.

### Kugadziridzwa kwePreview {#preview-updates}

Shanduko dzinoonekwa panguva chaiyo:

- Preview ye desktop inogadziridzwa pakarepo
- Preview ye mobile inogadziridzwa pakarepo
- Ma breakpoints ese anopindura anogadziridzwa
- Unogona kuchinja pakati pemapreview kuti usimbise shanduko

### Maonero eKuenzanisa {#comparison-view}

Enzanisa gwaro rako reDhizaini ne:

- **Dhizaini yepakutanga** — ona zvakachinja
- **Madhizaini evakwikwidzi** — enzanisa nemasaiti ekufemerwa nawo
- **Shanduro dzakapfuura** — dzokera kumagwaro edhizaini ekare

## Kubvumidza Gwaro reDhizaini {#design-direction-approval}

Kana wagutsikana nedhizaini yako:

1. **Ongorora mapreview ese ari maviri** — simbisa kuti desktop ne mobile zvinotaridzika zvakanaka
2. **Tarisa mavara ese** — iva nechokwadi chekuti kusiyana kwemavara nekusvikika zvakakodzera
3. **Edza typography** — simbisa kuti zvinonzwisisika kuverenga pamasizi ese
4. **Simbisa marongerwo** — tarisa nzvimbo nekutarisana
5. **Bvumidza dhizaini** — enda kugadzirwa kwetheme

## Matanho Anotevera {#next-steps}

Mushure mekubvumidza gwaro rako reDhizaini:

1. Theme Builder inogadzira theme yako yakazara
2. Theme inoiswa paWordPress site yako
3. Unogona kuenderera mberi nekugadzirisa uchishandisa WordPress customizer
4. Enda ku[Hospitality Menus](./hospitality-menus.md) kana zvimwe zvinhu

## Maitiro Akanakisa {#best-practices}

- **Edza pamidziyo chaiyo** — shandisa mafoni nema tablet chaiwo kana zvichiita
- **Tarisa kuverengeka** — iva nechokwadi chekuti chinyorwa chinoverengeka pamasizi ese
- **Simbisa kusiyana kwemavara** — shandisa [Validate Palette Contrast](../abilities/validate-palette-contrast.md) kuti zvive nyore kusvikika
- **Funga nezvekushanda nekukurumidza** — gadzirisa mifananidzo nemafonti kuti zvimhanye
- **Rongera zviri mukati** — iva nechokwadi chekuti marongerwo anoshanda nezviri mukati zvako chaizvo

## Kugadzirisa Matambudziko {#troubleshooting}

### Preview Isiri Kugadziridzwa {#preview-not-updating}

- Refresh peji
- Bvisa cache yebrowser
- Edza browser yakasiyana
- Tarisa kubatana kweinternet

### Mavara Anoratidzika Akasiyana {#colors-look-different}

- Tarisa marongero emavara emonitor
- Edza pamidziyo yakasiyana
- Simbisa kusiyana kwemavara nematurusi ekusvikika
- Funga nezvemasimulator ecolor blindness

### Matambudziko eTypography {#typography-issues}

- Simbisa kuti mafonti files ari kurodha
- Tarisa saizi yefonti pama breakpoints akasiyana
- Edza nezviri mukati chaizvo
- Funga nezvekureba kwemutsetse kuti zviverengeke zviri nyore

## Zvinyorwa Zvine Chekuita {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — unganidza ruzivo rweDhizaini
- [Hospitality Menus](./hospitality-menus.md) — gadzira mapeji emenyu akarongwa
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — tarisa kusvikika kwemavara
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — gadzira malogo akasarudzika
