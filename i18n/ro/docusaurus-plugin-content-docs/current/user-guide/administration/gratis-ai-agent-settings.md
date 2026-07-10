---
title: Setări Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Setări Gratis AI Agent {#gratis-ai-agent-settings}

Ecranul **Setări → Avansat** din Gratis AI Agent oferă configurare la nivel de administrator pentru integrări backend. Această pagină documentează redirecționarea feedbackului, cheile furnizorilor de căutare, configurarea serviciului Superdav gestionat, controalele Google Calendar, setările SMS TextBee și indicatorii de funcționalități la nivel de rețea.

## Accesarea setărilor {#accessing-settings}

1. În administrarea WordPress, mergi la **Gratis AI Agent → Setări**.
2. Fă clic pe fila **Avansat**.

## Configurarea endpointului de feedback {#feedback-endpoint-configuration}

Endpointul de feedback primește cereri POST de la agentul AI ori de câte ori un utilizator trimite feedback prin butonul cu degetul în jos, bannerul de solicitare automată sau comanda `/report-issue`.

| Câmp | Descriere |
|---|---|
| **URL endpoint feedback** | URL-ul care primește trimiterile de feedback ca cereri HTTP POST cu un corp JSON. |
| **Feedback API Key** | Un bearer token trimis în `Authorization` header al fiecărei cereri de feedback. Lasă necompletat dacă endpointul tău nu necesită autentificare. |

### Payload JSON așteptat {#expected-json-payload}

Endpointul tău de feedback trebuie să accepte un corp JSON cu cel puțin următoarele câmpuri:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Pot fi prezente câmpuri suplimentare în payload, în funcție de contextul conversației.

### Valorile `triage_category` {#triagecategory-values}

Stratul de triaj AI atribuie una dintre următoarele valori pentru `triage_category` înainte de a redirecționa payloadul:

| Valoare | Semnificație |
|---|---|
| `factual_error` | Asistentul a furnizat informații factuale incorecte. |
| `unhelpful_answer` | Răspunsul a fost corect din punct de vedere tehnic, dar nu a fost util. |
| `inappropriate_content` | Răspunsul a conținut conținut care nu ar trebui afișat utilizatorilor. |
| `other` | Feedbackul nu s-a potrivit cu o categorie cunoscută. |

### Autentificare {#authentication}

Dacă endpointul tău necesită autentificare, setează câmpul **Feedback API Key** la bearer token-ul tău. Agentul trimite:

```
Authorization: Bearer <your-api-key>
```

Dacă câmpul **Feedback API Key** este gol, nu este trimis niciun `Authorization` header.

### Dezactivarea colectării feedbackului {#disabling-feedback-collection}

Lasă goale atât câmpul **URL endpoint feedback**, cât și câmpul **Feedback API Key**. Butonul cu degetul în jos și interfața de feedback rămân vizibile pentru utilizatori, dar trimiterile nu sunt redirecționate către niciun serviciu extern.

## Brave Search API Key {#brave-search-api-key}

Tot în fila **Avansat**, câmpul **Brave Search API Key** activează capacitatea [Căutare pe internet](../configuration/internet-search).

| Câmp | Descriere |
|---|---|
| **Brave Search API Key** | Cheia ta API din dashboardul pentru dezvoltatori Brave Search. Necesară pentru a activa căutarea pe internet în asistentul AI. |

Eticheta câmpului include un link pe care se poate face clic către pagina de înscriere Brave Search API. Lasă necompletat pentru a dezactiva căutarea pe internet.

Vezi [Căutare pe internet](../configuration/internet-search) pentru documentația destinată utilizatorilor finali despre această funcționalitate.

## Serviciu Superdav gestionat {#managed-superdav-service}

Superdav AI Agent v1.18.0 adaugă endpointuri pentru serviciul Superdav gestionat și provizionarea automată a conexiunii pentru site-uri acceptate. Folosește aceste controale când site-ul tău trebuie să se conecteze la furnizorul găzduit în locul unui endpoint de serviciu configurat manual.

| Câmp | Descriere |
|---|---|
| **Serviciu Superdav gestionat** | Activează conexiunea la serviciul Superdav găzduit pentru site-uri acceptate. |
| **Provizionează conexiunea** | Pornește provizionarea automată a endpointului și a acreditărilor. Folosește acest lucru după ce confirmi că site-ul ar trebui să folosească furnizorul gestionat. |
| **Endpoint serviciu / Stare conexiune** | Afișează endpointul curent sau starea conexiunii după provizionare. |

După provizionare, salvează setările și verifică starea conexiunii înainte de a te baza pe fluxuri de lucru cu serviciu gestionat. Dacă provizionarea eșuează, consultă recomandările de reîncercare afișate și confirmă că site-ul are permisiunea de a folosi furnizorul găzduit.

## Configurarea Google Calendar {#google-calendar-configuration}

Când funcționalitățile de calendar Superdav AI Agent v1.18.0 sunt activate, agentul poate citi calendarele configurate și detaliile evenimentelor. Instrumentele de calendar sunt orientate spre citire și sunt utile pentru mementouri conștiente de program, urmărirea participanților și potrivirea contactelor.

| Câmp | Descriere |
|---|---|
| **Acreditări Google Calendar** | Stochează acreditările sau conexiunea prin token necesare pentru a citi datele calendarului. |
| **Selecție calendar** | Limitează calendarele configurate pe care agentul le poate inspecta. |
| **Stare conexiune calendar** | Confirmă dacă acreditările curente pot citi calendare și evenimente. |

Păstrează acreditările calendarului limitate la calendarele de care agentul are nevoie. Reconectează sau rotește acreditările dacă starea indică un token expirat.

## Notificări SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 adaugă TextBee ca furnizor SMS pentru fluxurile de lucru de notificare configurate. Notificările SMS ar trebui asociate cu porți de aprobare umană pentru mesajele sensibile sau adresate utilizatorilor.

| Câmp | Descriere |
|---|---|
| **Cheie API TextBee** | Autentifică cererile către furnizorul SMS TextBee. |
| **Dispozitiv / expeditor TextBee** | Selectează expeditorul sau dispozitivul TextBee folosit pentru mesajele trimise, când este cerut de furnizor. |
| **Notificări SMS activate** | Permite fluxurilor de lucru aprobate să trimită notificări prin mesaje text. Lasă dezactivat pentru a preveni trimiterile SMS. |

Trimite un mesaj de test doar către un număr deținut de administrator, apoi confirmă comportamentul porții de aprobare înainte de a activa mementouri programate sau adresate participanților.

## Indicatori de funcționalități {#feature-flags}

Introdusă tot în v1.9.0, fila **Setări → Indicatori de funcționalități** oferă comutatoare pentru funcționalitate opțională. Fiecare indicator este fie activat, fie dezactivat la nivel de rețea; în acest moment nu există suprascriere per site.

### Accesarea indicatorilor de funcționalități {#accessing-feature-flags}

1. În administrarea WordPress, mergi la **Gratis AI Agent → Setări**.
2. Fă clic pe fila **Indicatori de funcționalități**.

### Indicatori de control al accesului {#access-control-flags}

| Indicator | Implicit | Descriere |
|---|---|---|
| **Restricționează la Administratori** | Dezactivat | Când este activat, doar utilizatorii cu rolul `administrator` pot deschide panoul de chat al AI Agent. Toate celelalte roluri văd în schimb un mesaj „Contactează-ți administratorul”. |
| **Restricționează la Network Admins** | Dezactivat | Când este activat într-o rețea multisite, doar Super Admins pot folosi agentul. Administratorii site-urilor individuale sunt blocați. Are prioritate față de „Restricționează la Administratori” dacă ambele sunt activate. |
| **Permite accesul Subscriber** | Dezactivat | Când este activat, utilizatorii cu rolul `subscriber` pot folosi interfața de chat, dar sunt limitați la capacități doar în citire (fără creare de articole sau modificări ale setărilor). |
| **Dezactivează pentru non-membri** | Dezactivat | Se integrează cu starea abonamentului Ultimate Multisite. Când este activat, chatul este ascuns pentru site-urile care nu au un abonament activ. |

### Indicatori de branding {#branding-flags}

| Indicator | Implicit | Descriere |
|---|---|---|
| **Ascunde subsolul „Powered by Gratis AI Agent”** | Dezactivat | Elimină linia de atribuire a brandingului afișată în partea de jos a widgetului de chat. Recomandat pentru implementări white-label. |
| **Nume personalizat al agentului** | *(gol)* | Înlocuiește eticheta implicită „Gratis AI Agent” din antetul chatului și meniul de administrare cu propriul tău nume de produs. Lasă gol pentru a folosi valoarea implicită. |
| **Ascunde selectorul de agent** | Dezactivat | Când este activat, utilizatorii nu pot comuta între cei cinci agenți încorporați. Agentul curent este fixat la ceea ce este configurat ca implicit în Setări → General. |
| **Folosește pictograma site-ului ca avatar de chat** | Dezactivat | Înlocuiește pictograma AI implicită din antetul widgetului de chat cu pictograma site-ului WordPress (setată în Aspect → Personalizează → Identitate site). |

### Indicatori de siguranță pentru automatizare {#automation-safety-flags}

Superdav AI Agent v1.18.0 introduce porți de aprobare umană și înregistrări de mementouri pentru rulări de automatizare mai sigure. Aceste controale pot apărea în indicatorii de funcționalități sau în setările avansate de automatizare, în funcție de pachetul instalat.

| Indicator | Implicit | Descriere |
|---|---|---|
| **Necesită aprobare umană** | Recomandat activat | Pune pe pauză automatizările sensibile până când un utilizator autorizat revizuiește și confirmă acțiunea propusă. |
| **Deduplicarea mementourilor** | Activat | Înregistrează mementourile trimise, astfel încât reîncercările sau rulările programate să nu trimită notificări duplicate. |
| **Activează instrumentele de calendar** | Dezactivat până la configurare | Permite agentului să citească calendarele și evenimentele Google configurate. |
| **Activează notificările SMS** | Dezactivat până la configurare | Permite fluxurilor de lucru aprobate să trimită notificări SMS TextBee după salvarea acreditărilor. |

### Aplicarea modificărilor {#applying-changes}

Fă clic pe **Salvează setările** după comutarea oricărui indicator. Modificările intră în vigoare imediat — nu este necesară golirea cache-ului sau reactivarea pluginului.
