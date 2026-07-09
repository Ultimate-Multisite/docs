---
title: Sposobnosti Theme Buildera
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Sposobnosti Theme Buildera: Scaffoldovanje i Aktivacija Block Tema {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 uvodite dve moćnoj sposobnosti koje vam omogućavaju da direktno generišete i implementirate prilagođene block theme-ove iz chata interfejsa.

## Pregled {#overview}

Sposobnosti **scaffold-block-theme** i **activate-theme** omogućavaju agentima da:
- Generišu kompletnu, spremnu za produkciju block theme-ove na osnovu vaših specifikacija
- Automatski aktiviraju theme-ove na vašem sajtu bez ručnog intervencije
- Kreiraju koherentna vizuelna identiteta kroz usmerena odluka o dizajnu

## Scaffoldovanje Block Theme-a {#scaffold-block-theme}

Sposobnost **scaffold-block-theme** generiše novi WordPress block theme sa kompletnom strukturom, uključujući:

- `theme.json` konfiguraciju sa design tokenovima
- Template fajlove za blokove za uobičajene layoute
- Prilagođene stilove i varijacije blokova
- Metapodatke theme-a i deklaracije podrške

### Kako pozvati (Invoke) {#how-to-invoke}

U chatu sa Superdav AI Agentom, možete tražiti generisanje tema:

```
"Kreiraj block theme pod nazivom 'Modern Agency' sa plavim i belim paletom boja,
sans-serif tipografijom i profesionalnim layoutom"
```

Agent će:
1. Skupljati vaše dizajnerske preferencije kroz razgovor
2. Generisati kompletnu strukturu theme-a
3. Kreirati sve potrebne fajlove za theme
4. Pripremiti theme za aktivaciju

### Očekivani izlaz {#expected-output}

Kada se sposobnost uspešno izvrši, videćete:

- Potvrdu da je theme scafoldovan (scaffolded)
- Naziv i lokaciju theme-a
- Sažetak primenjenih design tokenova (boje, tipografija, razmak)
- Status spreman za aktivaciju

Primer izlaza:
```
✓ Theme "Modern Agency" uspešno scafoldovan
  Lokacija: /wp-content/themes/modern-agency/
  Boje: Primarna #0066CC, Sekundarna #FFFFFF
  Tipografija: Inter (sans-serif)
  Status: Spreman za aktivaciju
```

## Aktivacija Theme-a {#activate-theme}

Sposob na aktiviranje teme omogućava da prebacite svoj sajt na novu ili postojeću blok temu koju ste upravo kreirali.

### Kako pozvati (Aktivirati) {#how-to-invoke-1}

Nakon što ste skaffoldovali temu, možete odmah početi sa njom:

```
"Aktiviraj Modern Agency temu"
```

Ili aktivirajte bilo koju postojeću temu:

```
"Prebaci se na Twentytwentyfour temu"
```

### Očekivani izlaz {#expected-output-1}

Kada aktivacija uspešno završi:

- Potvrda o aktiviranoj temi
- Naziv prethodne teme (za referencu)
- URL sajta gde je tema sada aktiva
- Bilo kakve specifične napomene za podešavanje teme

Primer izlaza:
```
✓ Tema uspešno aktivirana
  Aktiva tema: Modern Agency
  Prethodna tema: Twentytwentyfour
  Online na: https://yoursite.com
  Napomena: Proverite početnu stranicu da biste potvrdili izgled
```

## Radni tok: Skaffolduj i Aktiviraj {#workflow-scaffold-and-activate}

Tipičan radni tok kombinuje obe mogućnosti:

1. **Zahtev za generisanje teme**: "Kreiraj blok temu za moju SaaS odredišnu stranicu"
2. **Agent skaffolduje temu**: Generiše fajlove i design tokenove
3. **Pregled i usavršavanje**: Razgovarajte o promenama u dizajnu ako je potrebno
4. **Aktivacija**: "Aktiviraj temu sada"
5. **Provera**: Posetite svoj sajt da biste potvrdili da je novi dizajn aktivan

## Design Tokeni i Prilagođavanje {#design-tokens-and-customization}

Skaudovane teme koriste WordPress design tokenove (preko `theme.json`) za:

- **Boje**: Primarna, sekundarna, akcentna, neutralna paleta
- **Tipografija**: Fontovi, veličine, težine, visine linije
- **Razmak**: Padding, margin, skaliranje razmaka (gap scales)
- **Okviri**: Tokeni za radijus i širinu
- **Sjene**: Nivoi podizanja

Ovi tokeni su centralizovani u `theme.json`, što olakšava podešavanje celog dizajnerskog sistema iz jednog fajla.

## Ograničenja i Napomene {#limitations-and-notes}

Теме се инсталира у директоријуму `/wp-content/themes/` и мора да прати стандарде именотвора WordPressа.
Активација захтева прихватљиве дозволе на вашем WordPress сајту.
Прилагођен PHP код у темама је минималачан; користите плагинове за сложене функционалности.
Теме на бロックу najbolje функционишу са WordPress верзијом 5.9 и новијим.

## Решавање проблема (Troubleshooting) {#troubleshooting}

**Тема се не појављује након инсталације (scaffolding)**
- Проверите да ли директоријум теме постоји и да има прави дозволе.
- Проверите да ли је `theme.json` валидан JSON.
- Уверите се да се име теме не сукобија са постојећим темама.

**Активација не успева**
- Потврдите да имате администраторске дозволе.
- Проверите да ли је директоријум теме читав WordPressом.
- Прогледајте WordPress лог ерера за детаље.

**Дизајн токени се не прилаже (not applying)**
- Проверите да ли синтаксиса `theme.json` правилна.
- Очистите било који плагинове за кеширање (caching plugins).
- Проверите да ли ваша верзија WordPressа подржава токени које користите.

## Следећи кораци (Next Steps) {#next-steps}

Након што активирате тему, можете:
- Користити вемешћу **Design System Aesthetics** уместо за финализацију типографије, боје и простора.
- Прилагодити стилове појединачних блокова кроз WordPress блок редар (block editor).
- Додацити прилагођен CSS у фајл теме `style.css`.
- Создати прилагођене шаблоне блокова за специфичне типове страница.
