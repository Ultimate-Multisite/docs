---
title: Umiejętność specyfikacji stron
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Umiejętność Specyfikacji Strony

**Umiejętność Specyfikacji Strony** to ustrukturyzowane podejście do zbierania informacji o celach, docelowej grupie odbiorców i tożsamości marki Twojej strony. Te informacje są zapisywane w Twojej pamięci **site_brief**, do której agentzy odwołują się w różnych sesjach, aby zapewnić spójną i kontekstową pomoc.

## Co to jest Specyfikacja Strony?

Specyfikacja Strony to proces dokumentowania:

- **Cel strony**: Co robi Twoja strona i dlaczego istnieje
- **Docelowa grupa odbiorców**: Kto odwiedza Twoją stronę i czego potrzebuje
- **Tożsamość marki**: Twoje kolory, ton i styl wizualny
- **Cele biznesowe**: Jak wygląda sukces dla Twojej strony
- **Struktura treści**: Jak zorganizowana jest Twoja strona

Ta specyfikacja staje się Twoim **site_brief**, czyli trwałym zapisem, którego agentzy używają do zrozumienia kontekstu Twojej strony.

## Dlaczego używać Specyfikacji Strony?

### Spójność między sesjami

Bez site_brief musiałbyś za każdym razem, gdy rozpoczynasz nową sesję, ponownie wyjaśniać cel swojej strony. Dzięki niemu agentzy natychmiast rozumieją:

- Cele i grupę docelową Twojej strony
- Kolory i ton Twojej marki
- Strukturę Twoich treści
- Twoje cele biznesowe

### Lepsze rekomendacje

Agentzy używają Twojego site_brief, aby:

- Sugerować funkcje zgodne z celem Twojej strony
- Polecać struktury treści pasujące do Twoich celów
- Proponować projekty spójne z Twoją marką
- Unikać sugerowania niekompatybilnych funkcji

### Szybsze wdrożenie

Nowi agentzy (lub agentzy w nowych sesjach) mogą szybko się uczyć, czytając Twój site_brief, zamiast zadawać pytania wyjaśniające.

## Inicjowanie Specyfikacji Strony

### Podczas wdrożenia Theme Builder
Umiejętność Specyfikacji Strony jest automatycznie uruchamiana podczas przepływu **onboarding Theme Builder**. Agent Setup Assistant zadaje pytania i tworzy Twój site_brief.

### Ręczne inicjowanie
Możesz rozpocząć Specyfikację Strony w dowolnym momencie:

```
"Chcę zdefiniować specyfikację mojej strony"
```

lub

```
"Pomóż mi stworzyć site brief"
```

## Proces Specyfikacji Strony

### Krok 1: Cel strony

Agent pyta:

```
Jaki jest główny cel Twojej strony?
- Sklep internetowy
- Blog lub strona z treściami
- Portfolio lub galeria
- Aplikacja SaaS
- Społeczność lub forum
- Inne: [opisz]
```

Możesz wybrać kategorię lub opisać własny cel.

### Krok 2: Docelowa grupa odbiorców

```
Kto jest Twoją główną grupą docelową?
- Konsumenci / ogół społeczeństwa
- Profesjonaliści biznesowi
- Programiści / użytkownicy techniczni
- Studenci / edukatorzy
- Inne: [opisz]

Jakie są ich główne potrzeby?
```

### Krok 3: Tożsamość marki

```
Jakie są kolory Twojej marki?
- Kolor główny: [wybór koloru lub kod HEX]
- Kolor dodatkowy: [wybór koloru lub kod HEX]
- Akcent: [opcjonalnie]

Jak byś opisał ton swojej marki?
- Profesjonalny / korporacyjny
- Kreatywny / artystyczny
- Zabawny / swobodny
- Minimalistyczny / nowoczesny
- Ciepły / przyjazny
```

### Krok 4: Cele biznesowe

```
Jak wygląda sukces dla Twojej strony?
- Generowanie leadów
- Sprzedaż produktów
- Budowanie społeczności
- Dzielenie się wiedzą
- Ustanowienie autorytetu
- Inne: [opisz]

Jaki jest Twój główny wskaźnik?
- Przychód
- Zaangażowanie użytkowników
- Zasięg treści
- Konwersje
- Inne
```

### Krok 5: Struktura treści

```
Jak zorganizowane są Twoje treści?
- Płaska (wszystkie treści na tym samym poziomie)
- Hierarchiczna (kategorie i podkategorie)
- Chronologiczna (styl bloga)
- Oparta na produktach (katalog)
- Inne: [opisz]

Jakie typy treści używasz?
- Posty blogowe
- Strony produktowe
- Studia przypadków
- Dokumentacja
- Filmy wideo
- Inne
```

## Twoja pamięć site_brief

Po zakończeniu Specyfikacji Strony, Twoje informacje są zapisywane jako **site_brief** w pamięci agenta. Jest to ustrukturyzowany zapis zawierający:

```json
{
  "site_purpose": "Sklep internetowy z biżuterią ręcznie robioną",
  "target_audience": "Kobiety w wieku 25-45 lat, zainteresowane modą zrównoważoną",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Ciepły, rzemieślniczy, zrównoważony",
  "business_goals": ["Generowanie sprzedaży", "Budowanie lojalności marki"],
  "primary_metric": "Przychód",
  "content_structure": "Katalog produktów z blogiem",
  "content_types": ["Strony produktowe", "Posty blogowe", "Historie klientów"]
}
```

## Wyświetlanie i aktualizacja site_brief

### Wyświetlanie site_brief
Poproś agenta:

```
"Pokaż mi mój site brief"
```

lub

```
"Co wiesz o mojej stronie?"
```

Agent wyświetli Twoją zapisaną specyfikację.

### Aktualizacja site_brief
Jeśli Twoja strona ewoluuje, możesz zaktualizować site_brief:

```
"Zaktualizuj mój site brief: teraz celujemy w klientów B2B"
```

lub

```
"Odśwież moją specyfikację strony"
```

To ponownie uruchomi umiejętność Specyfikacji Strony, używając Twoich istniejących informacji jako punktu wyjścia.

## Jak agentzy używają site_brief

### Rekomendacje projektowe
Kiedy prosisz o zmiany w projekcie, agentzy odwołują się do Twojego site_brief:

```
Ty: "Przeprojektuj moją stronę główną"
Agent: "Na podstawie Twojego site brief, celujesz w kobiety w wieku 25-45 lat
o ciepłym, rzemieślniczym tonie. Stworzę projekt, który podkreśli
Twoją biżuterię ręcznie robioną i wartości zrównoważonego rozwoju."
```

### Sugestie funkcji
Agentzy sugerują funkcje zgodne z Twoimi celami:

```
Ty: "Jakie funkcje powinienem dodać?"
Agent: "Dla sklepu internetowego skupiającego się na lojalności klientów,
poleciłbym: program lojalnościowy, recenzje klientów, newsletter e-mail
i rekomendacje produktów."
```

### Struktura treści
Agentzy proponują organizację treści na podstawie Twojej struktury:

```
Ty: "Jak powinienem zorganizować mój blog?"
Agent: "Skoro używasz katalogu produktów z blogiem, sugeruję
organizację postów według kategorii produktów i stworzenie 'przewodników stylizacji',
które prezentują wiele produktów razem."
```

## Najlepsze praktyki

### Bądź konkretny
Zamiast "ogólna grupa odbiorców," opisz swoją faktyczną grupę docelową:

- ✓ "Kobiety w wieku 25-45 lat, zainteresowane modą zrównoważoną"
- ✗ "Każdy"

### Aktualizuj regularnie
W miarę ewolucji Twojej strony, aktualizuj site_brief:

- Kiedy zmieniasz grupę docelową
- Kiedy dodajesz nowe linie produktów
- Kiedy zmienia się tożsamość Twojej marki
- Kiedy zmieniają się Twoje cele biznesowe

### Używaj spójnej terminologii
Używaj tych samych terminów w różnych sesjach:

- ✓ Zawsze mów "biżuteria zrównoważona" (a nie "ekologiczna biżuteria" i "zielone produkty")
- ✓ Konsekwentnie odwołuj się do swojej grupy docelowej w ten sam sposób

### Dodawaj kontekst
Podawaj informacje w tle, które pomogą agentom zrozumieć Twoje decyzje:

- "Celujemy w profesjonalistów, którzy cenią jakość ponad cenę"
- "Nasza grupa docelowa jest świadoma technologii i oczekuje nowoczesnego designu"
- "Jesteśmy startupem finansowanym z własnych środków, więc potrzebujemy rozwiązań kosztowo efektywnych"

## Związek ze wdrożeniem Theme Builder

Umiejętność Specyfikacji Strony jest zintegrowana z przepływem **onboarding Theme Builder**. Po zakończeniu wdrożenia, Twój site_brief jest automatycznie tworzony na podstawie podanych przez Ciebie informacji.

Możesz również uruchomić Specyfikację Strony niezależnie, jeśli chcesz:

- Dopracować specyfikację po początkowej konfiguracji
- Zaktualizować site brief wraz z rozwojem strony
- Stworzyć szczegółową specyfikację przed rozpoczęciem pracy w Theme Builder

## Rozwiązywanie problemów

**Mój site_brief nie jest używany**
- Upewnij się, że agent ma dostęp do pamięci
- Poproś agenta, aby "przypomniał mój site brief"
- Sprawdź, czy pamięć jest włączona w ustawieniach

**Chcę zacząć od nowa z nowym site_brief**
- Poproś agenta: "Wyczyść mój site brief i zacznij od nowa"
- Następnie uruchom Specyfikację Strony ponownie

**Agent sugeruje rekomendacje, które nie pasują do mojego site_brief**
- Poproś agenta, aby "przejrzał mój site brief"
- Zaktualizuj swój site_brief, jeśli jest przestarzały
- Podaj dodatkowy kontekst w swoich zapytaniach

## Następne kroki

Po zdefiniowaniu specyfikacji strony:

1. **Użyj Theme Builder**: Stwórz niestandardowy motyw na podstawie swojego site_brief
2. **Dopracuj projekt**: Użyj umiejętności Design System Aesthetics do szczegółowej pracy nad projektem
3. **Planuj treści**: Poproś agentów o rekomendacje dotyczące struktury treści
4. **Twórz funkcje**: Poproś o funkcje zgodne z Twoimi celami biznesowymi
