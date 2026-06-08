---
title: 'Lehena-lekurua: Niche Template-ak gaurkatu'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lehen 4: Niche Template-ak sortzea

Templates hauek da irudiari (value proposition) garrantzian parte dira. Fitness studio bat dueñoa bere web-sailan iruditzen duen, eta hori fitness websteilan biltzen du -- klaseko edukiak, entrenador pertsonalak, eta irudiak ondo jakin dituz -- baino, ez du horrek erabiliziek aurrera egiteko.

## Zer da dagoen jakin dugu

FitSite network bat dagoen, Ultimate Multisite instalatuta eta konfiguratuta. Arriba, FitSite-ak fitness negozioak dira bere irudiari biltzen dituz.

## Niche Templates-ek zer eskatzen dute

Template-ak umumatuak (generic) daude, horrek irudiziek ez duendu bere klientzak zorra egiteko: zer eskatzen dituz behar dituzten lapuak, zein estruktura kontentua ondo egiten du eta zein irudiak bere industria-ren edozein bidean ondo jakin dituz. Niche templates hauek hori ez duendu horrek.

FitSite-ra iscaintzeko studio bat dueñoa beharko luke:

- Fitness studio websteilan iruditzen homepage bat
- Klaseak, edukiak, entrenador eta prezio lapuak lehiak
- Bere industria-re ondo jakin dituzten irudiak eta kontentua eragileak
- Profesional eta fitness-era ondo jakin dituzten disenio bat

Horrek bere detallak hori ematen dute. Ez hasi egiten du guztiz.

## Template-ak planpeatu

Biltzea baino lehen, zer templateak emateko da erabakiu. FitSite-ra, hiru sortu dugu:

### Template 1: Studio Essential

Mundia txiki studio eta entrenador pertsonalak dira.

- **Homepage** hero imagen, class destacados, y llamada a la acción
- **About** estuna historia del estudio y misión
- **Classes** página con diseño de horario
- **Trainers** página con tarjetas de perfil
- **Contact** página con mapa de ubicación y formulario
- **Diseño limpio y moderno** con esquema de colores apropiado para el fitness

### Plantilla 2: Gym Pro

Para gimnasios ya establecidos con más servicios.

- Todo lo de Studio Essential, más:
- **Membership** página con tabla de precios
- **Gallery** página para fotos de las instalaciones
- Sección de **Blog** con consejos de fitness y noticias
- Sección de **Testimonials** en la página de inicio
- Opciones de **branding** más destacadas

### Plantilla 3: Fitness Chain

Para operaciones con múltiples ubicaciones.

- Todo lo de Gym Pro, más:
- Página de **Locations** con listados de varias instalaciones
- Plantilla de subpágina para **Franchise/location**
- **Branding centralizado** con detalles específicos de la ubicación
- **Staff directory** en todas las ubicaciones

## Construyendo un Sitio con una Plantilla

En Ultimate Multisite, una plantilla es simplemente un sitio de WordPress configurado de la manera que quieres que se vean los sitios nuevos de los clientes. Así es como puedes crear una:

### Paso 1: Crear el Sitio con Plantilla

1. Ve a **Sites > Add New** en tu administrador de red
2. Crea un sitio llamado `template-studio-essential`
3. Este sitio se convierte en tu lienzo de trabajo

### Paso 2: Instalar y Configurar el Tema

Cambia al panel de control del sitio con plantilla y:

1. Fitness negozioak erabiliziek temak aktibatu (Activate a theme suitable for fitness businesses)
2. Temaren konfiguratuta, kolorazioa eta tipografia batzuk (Configure the theme settings, colors, and typography)
3. Header eta footer-rak fitness-ko apainditutako navigazioarekin eskaintu (Set up the header and footer with fitness-appropriate navigation)

:::tip Tema Irudi (Theme Selection)
Fitness-eko irudia duela baina klienteak ez jakin nahi du ondore, erabiliziek temak bat ematen. Astra, GeneratePress edo Kadence gurean onartzen da, gehiago lezioak, eskaintzeko modala eta onartzea da.
:::

### Irudi 3: Paguak (Pages) Jartzea

Indarra jakin dituzteko paguak hauek hartu behar dugu:

- **Placeholder kontentua** fitness-eko naturalki irizten ("\[Studio Nomenklatura] honetan barriletzen" ez "Lorem ipsum")
- **Placeholder idazleak** fitness-eko jarduerak erakusten duen libre stock foto portailetik (free stock photo sites)
- **Funktionalki diseinatutako layout-ek** page builder edo block editora erabilizik

Placeholder kontentua irudial izango da, posible jakin dituzteko. Generiko testu batzuk ez duzu, baita: "Hau hau sizkiolaren deskribapena eta hori zer espezial dagoela barne hartu." Training filosofianak, urte-larriaren esperientzia edo klienteak zer eskatzen dituzteko iragatik.

### Irudi 4: Plugin-ek Konfiguratu (Configure Plugins)

Fitness studioei beharrezko plugin-ek instalatu eta aktibatu duzu:

- **Booking edo scheduling plugin** (planaren lehen osuntzeko)
- **Contact form plugin**
- **SEO plugin** (fitness-eko erakundeak duen default-ekinpenarekin konfiguratutako)

### Irudi 5: Template-ek Markatu (Mark as Template)

1. **Ultimate Multisite > Sites** funtziokoan jarraitu
2. Template sitea editatu
3. **Site Template** toggia aktibatu

Ezinbesteko prozesua hau zehatzeko template guztietatik errepikatu behar duzu.

## Template Kalitatea Kontrola Lista

Template bat erabilizatu daitezake baino, jartzen dituzte:

- [ ] All pages load correctly and look professional (Diru guztiek lehen dauden eta profesional iraketa dute)
- [ ] Placeholder content is helpful and niche-specific (Placeholder kontentua laguntzen eta ezagutza-spazioa-besteko dauden)
- [ ] Images are appropriate and properly licensed (Idazleak ondo dira eta jaurtzeko autorizazioa duena)
- [ ] Mobile responsiveness works on all pages (Mobile iraketa guztietan funtzionatzen du)
- [ ] Navigation is logical and complete (Navegazioa logikoa da eta oso garrantzitsu da)
- [ ] Contact forms work (Kontakt formak funtzionatzen dute)
- [ ] No broken links or missing assets (Ez dago link ezdu edo artealeak agertzen)
- [ ] Page load speed is acceptable (Pagina lauden handia ondo da)

## FitSite Networka Zer da Datu

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfiguratu)
├── Hosting with wildcard SSL (wildcard SSLdazteko hosting)
├── Domain mapping configured (Domainak emateko mapa konfiguratu)
├── Site Templates
│   ├── Studio Essential (studio txikiak, entrenadorak)
│   ├── Gym Pro (gymak etab. dauden)
│   └── Fitness Chain (lokazio-ezdian dagoenak)
└── Ready for plan configuration (next lesson) (plan konfigurazioa erantzuna du - lehen eskoldea)
```

## Zer Ezdu Zure Lessonaren

- **Tres template ezagutza-spazio-besteko** diseinatuta fitness biznesses nagusiari
- **Fitness-bazteko kontentua eta idazleak** zehazki emateko platforma daudenak
- **Instruksional placeholder kontentua** erabiltzaileak personalizazioa erantzuten laguntzen duena
- **Kalitatea kontrola lista bat** templateak egindera prest dagoela seguratu

---

**Hitzera:** [Lesson 5: Designing Your Plans](lesson-5-plans) -- fitness biznesses bere operatzen duen moduan ondoan emateko produkzio-nivelak (tiers) ez duena.
