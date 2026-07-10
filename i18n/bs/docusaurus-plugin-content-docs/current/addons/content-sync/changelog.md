---
title: Ček-log za sinhronizaciju sadržaja
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Dnevnik promjena za Content Sync {#content-sync-changelog}

### Verzija 1.1.0 - Obraćeno 2025-12-31 {#version-110---released-on-2025-12-31}
* Novo: Podrška za sinkronizaciju svih tipova postova (postovi, stranice, prilagođeni tipovi postova)
* Novo: Filtriranje tipova postova u koraku odabira sadržaja
* Novo: Korak odabira izvornog sajta - sinkronizacija sa bilo kojeg sajta, a ne samo sa glavnim sajtom
* Novo: Pre-odabir pod-sajta za sajtove sa šablonima
* Novo: Ekstrakcija medija iz post_content za sve tipove postova
* Novo: Sinkronizacija taksonomija (kategorije, tagovi, prilagođene taksonomije)
* Promijenjeno: Preimenovano sa "Elementor Template Sync" na "Content Sync"
* Promijenjeno: Korak "Select Templates" preimenovan u "Select Data"
* Poboljšano: Elementor-specifični kod sada se izvršava samo za post tip `elementor_library`

### Verzija 1.0.0 - Obraćeno 2025-12-19 {#version-100---released-on-2025-12-19}
* Prva verzija
* Višestepeni vodič za odabir šablona i sajta
* Grupna obrada sa povratnom informacijom o napretku u realnom vremenu
* Potpuna sinkronizacija medija sa automatskim ponovnim mapiranjem ID-a
* Integracija postavki sa Ultimate Multisite
* Podrška za isključivanje sajtova putem postavki mreže
* Čišćenje Elementor keša nakon sinkronizacije
* Čuvanje taksonomije šablona
