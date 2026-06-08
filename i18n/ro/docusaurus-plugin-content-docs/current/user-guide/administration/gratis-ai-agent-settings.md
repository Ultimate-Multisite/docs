---
title: Setări AI Agent Gratuite
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Setările Gratis AI Agent

Ecranul **Setări → Avansat** din Gratis AI Agent oferă configurări de nivel administrator pentru integrările de backend introduse în v1.5.0. Această pagină documentează câmpurile **Feedback Endpoint** și formatul lor așteptat.

## Accesarea Setărilor

1. În panoul de administrare WordPress, accesați **Gratis AI Agent → Setări**.
2. Faceți clic pe tab-ul **Avansat**.

## Configurarea Feedback Endpoint-ului

Feedback endpoint-ul primește cereri POST de la agentul AI de fiecare dată când un utilizator trimite un feedback prin butonul de decontare (thumbs-down), banner-ul de auto-prompt sau comanda `/report-issue`.

| Câmp | Descriere |
|---|---|
| **Feedback Endpoint URL** | URL-ul care primește trimiterile de feedback ca cereri HTTP POST cu un corp JSON. |
| **Feedback API Key** | Un token bearer trimis în antetul `Authorization` pentru fiecare cerere de feedback. Lăsați câmpul gol dacă endpoint-ul dumneavoastră nu necesită autentificare. |

### Payload JSON Așteptat

Endpoint-ul dumneavoastră de feedback trebuie să accepte un corp JSON cu cel puțin următoarele câmpuri:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Răspunsul era incorect cu privire la prețuri.",
  "triage_category": "factual_error"
}
```

Pot fi prezente și alte câmpuri în payload, în funcție de contextul conversației.

### Valorile `triage_category`

Stratul de triaj AI atribuie una dintre următoarele valori câmpului `triage_category` înainte de a transmite payload-ul:

| Valoare | Semnificație |
|---|---|
| `factual_error` | Asistentul a furnizat informații factuale incorecte. |
| `unhelpful_answer` | Răspunsul a fost corect din punct de vedere tehnic, dar nu a fost util. |
| `inappropriate_content` | Răspunsul a conținut conținut care nu ar trebui arătat utilizatorilor. |
| `other` | Feedback-ul nu a corespunde unei categorii cunoscute. |

### Autentificare

Dacă endpoint-ul dumneavoastră necesită autentificare, setați câmpul **Feedback API Key** cu token-ul bearer. Agentul trimite:

```
Authorization: Bearer <your-api-key>
```

Dacă câmpul **Feedback API Key** este gol, nu se trimite niciun antet `Authorization`.

### Dezactivarea Colectării Feedback-ului

Lăsați câmpurile **Feedback Endpoint URL** și **Feedback API Key** goale. Butonul de decontare și interfața de feedback rămân vizibile utilizatorilor, dar trimiterile nu sunt redirecționate către niciun serviciu extern.

## Cheia API Brave Search

De asemenea, pe tab-ul **Avansat**, câmpul **Brave Search API Key** activează capacitatea de [Căutare pe Internet](../configuration/internet-search).

| Câmp | Descriere |
|---|---|
| **Brave Search API Key** | Cheia API dumneavoastră din dashboard-ul dezvoltator Brave Search. Este necesară pentru a activa căutarea pe internet în asistentul AI. |

Eticheta câmpului include un link clicabil către pagina de înscriere pentru Brave Search API. Lăsați câmpul gol pentru a dezactiva căutarea pe internet.

Vezi [Căutare pe Internet](../configuration/internet-search) pentru documentația pentru utilizatorii finali despre această funcționalitate.

## Feature Flags

De asemenea introduse în v1.9.0, tab-ul **Setări → Feature Flags** oferă comutatoare pentru funcționalități opționale. Fiecare flag este fie activat, fie dezactivat la nivel de rețea; în acest moment nu există o suprascriere la nivel de site.

### Accesarea Feature Flags

1. În panoul de administrare WordPress, accesați **Gratis AI Agent → Setări**.
2. Faceți clic pe tab-ul **Feature Flags**.

### Feature Flags de Control al Accesului

| Flag | Implicit | Descriere |
|---|---|---|
| **Restrict to Administrators** | Off | Când este activat, doar utilizatorii cu rolul `administrator` pot deschide panoul de chat al AI Agent. Toate celelalte roluri văd în schimb un mesaj de tip „Contactați administratorul”. |
| **Restrict to Network Admins** | Off | Când este activat pe o rețea multisite, doar Super Admin-ii pot folosi agentul. Administratorii de site individual sunt blocați. Are prioritate față de „Restrict to Administrators” dacă ambele sunt activate. |
| **Allow Subscriber Access** | Off | Când este activat, utilizatorii cu rolul `subscriber` pot folosi interfața de chat, dar sunt limitați la capacități de citire (fără crearea de postări sau modificări de setări). |
| **Disable for Non-Members** | Off | Se integrează cu statutul de membru Ultimate Multisite. Când este activat, chat-ul este ascuns pentru site-urile care nu au o adezizare activă. |

### Feature Flags de Branding

| Flag | Implicit | Descriere |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Elimină linia de atribuire a brandului afișată în partea de jos a widget-ului de chat. Recomandat pentru implementări white-label. |
| **Custom Agent Name** | *(blank)* | Înlocuiește eticheta implicită „Gratis AI Agent” din antetul chat-ului și din meniul de administrare cu numele propriu de produs. Lăsați gol pentru a folosi implicitul. |
| **Hide Agent Picker** | Off | Când este activat, utilizatorii nu pot comuta între cele cinci agenți încorporați. Agentul curent este fixat pe cel configurat ca implicit în Setări → General. |
| **Use Site Icon as Chat Avatar** | Off | Înlocuiește iconița AI implicită din antetul widget-ului de chat cu iconița site-ului WordPress (setată în Apariție → Personalizare → Identitatea Site-ului). |

### Aplicarea Modificărilor

Faceți clic pe **Save Settings** după ce ați modificat oricare flag. Modificările intră în vigoare imediat — nu este necesară ștergerea cache-ului sau reactivarea plugin-ului.
