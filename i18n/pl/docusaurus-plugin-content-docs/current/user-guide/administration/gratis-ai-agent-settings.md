---
title: Ustawienia Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Ustawienia Gratis AI Agent {#gratis-ai-agent-settings}

Ekran **Settings → Advanced** w Gratis AI Agent udostępnia konfigurację na poziomie administratora dla integracji backendowych. Ta strona dokumentuje przekazywanie opinii, klucze dostawców wyszukiwania, konfigurację zarządzanej usługi Superdav, kontrolki Google Calendar, ustawienia SMS TextBee oraz flagi funkcji w całej sieci.

## Dostęp do ustawień {#accessing-settings}

1. W panelu administracyjnym WordPress przejdź do **Gratis AI Agent → Settings**.
2. Kliknij kartę **Advanced**.

## Konfiguracja endpointu opinii {#feedback-endpoint-configuration}

Endpoint opinii odbiera żądania POST od agenta AI za każdym razem, gdy użytkownik przesyła opinię za pomocą przycisku kciuka w dół, banera automatycznego monitu lub polecenia `/report-issue`.

| Pole | Opis |
|---|---|
| **Feedback Endpoint URL** | URL, który odbiera zgłoszenia opinii jako żądania HTTP POST z treścią JSON. |
| **Feedback API Key** | bearer token wysyłany w `Authorization` header każdego żądania opinii. Pozostaw puste, jeśli Twój endpoint nie wymaga uwierzytelniania. |

### Oczekiwany ładunek JSON {#expected-json-payload}

Twój endpoint opinii musi akceptować treść JSON zawierającą co najmniej następujące pola:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

W ładunku mogą znajdować się dodatkowe pola w zależności od kontekstu rozmowy.

### Wartości `triage_category` {#triagecategory-values}

Warstwa klasyfikacji AI przypisuje jedną z poniższych wartości do `triage_category` przed przekazaniem ładunku:

| Wartość | Znaczenie |
|---|---|
| `factual_error` | Asystent podał nieprawidłowe informacje faktograficzne. |
| `unhelpful_answer` | Odpowiedź była technicznie poprawna, ale nieprzydatna. |
| `inappropriate_content` | Odpowiedź zawierała treść, która nie powinna być pokazywana użytkownikom. |
| `other` | Opinia nie pasowała do znanej kategorii. |

### Uwierzytelnianie {#authentication}

Jeśli Twój endpoint wymaga uwierzytelniania, ustaw pole **Feedback API Key** na swój bearer token. Agent wysyła:

```
Authorization: Bearer <your-api-key>
```

Jeśli pole **Feedback API Key** jest puste, żaden `Authorization` header nie jest wysyłany.

### Wyłączanie zbierania opinii {#disabling-feedback-collection}

Pozostaw pola **Feedback Endpoint URL** i **Feedback API Key** puste. Przycisk kciuka w dół i interfejs opinii pozostają widoczne dla użytkowników, ale zgłoszenia nie są przekazywane do żadnej usługi zewnętrznej.

## Brave Search API Key {#brave-search-api-key}

Również na karcie **Advanced** pole **Brave Search API Key** włącza funkcję [wyszukiwania w internecie](../configuration/internet-search).

| Pole | Opis |
|---|---|
| **Brave Search API Key** | Twój klucz API z panelu deweloperskiego Brave Search. Wymagany do włączenia wyszukiwania w internecie w asystencie AI. |

Etykieta pola zawiera klikalny link do strony rejestracji Brave Search API. Pozostaw puste, aby wyłączyć wyszukiwanie w internecie.

Zobacz [wyszukiwanie w internecie](../configuration/internet-search), aby zapoznać się z dokumentacją tej funkcji dla użytkowników końcowych.

## Zarządzana usługa Superdav {#managed-superdav-service}

Superdav AI Agent v1.18.0 dodaje zarządzane endpointy usługi Superdav oraz automatyczne provisionowanie połączeń dla obsługiwanych witryn. Użyj tych kontrolek, gdy Twoja witryna powinna łączyć się z hostowanym dostawcą zamiast ręcznie skonfigurowanego endpointu usługi.

| Pole | Opis |
|---|---|
| **Managed Superdav Service** | Włącza połączenie z hostowaną usługą Superdav dla obsługiwanych witryn. |
| **Provision Connection** | Uruchamia automatyczne provisionowanie endpointu i danych logowania. Użyj tego po potwierdzeniu, że witryna powinna używać zarządzanego dostawcy. |
| **Service Endpoint / Connection Status** | Pokazuje bieżący endpoint lub stan połączenia po provisionowaniu. |

Po provisionowaniu zapisz ustawienia i zweryfikuj stan połączenia, zanim zaczniesz polegać na przepływach pracy usługi zarządzanej. Jeśli provisionowanie się nie powiedzie, przejrzyj wyświetlone wskazówki dotyczące ponowienia próby i potwierdź, że witryna ma uprawnienie do korzystania z hostowanego dostawcy.

## Konfiguracja Google Calendar {#google-calendar-configuration}

Gdy funkcje kalendarza Superdav AI Agent v1.18.0 są włączone, agent może odczytywać skonfigurowane kalendarze i szczegóły wydarzeń. Narzędzia kalendarza są zorientowane na odczyt i przydatne do przypomnień uwzględniających harmonogram, kontaktu z uczestnikami oraz dopasowywania kontaktów.

| Pole | Opis |
|---|---|
| **Google Calendar Credentials** | Przechowuje dane logowania lub połączenie tokenem wymagane do odczytu danych kalendarza. |
| **Calendar Selection** | Ogranicza, które skonfigurowane kalendarze agent może sprawdzać. |
| **Calendar Connection Status** | Potwierdza, czy bieżące dane logowania mogą odczytywać kalendarze i wydarzenia. |

Ogranicz dane logowania kalendarza do kalendarzy, których agent potrzebuje. Połącz ponownie lub rotuj dane logowania, jeśli stan wskazuje na wygasły token.

## Powiadomienia SMS TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 dodaje TextBee jako dostawcę SMS dla skonfigurowanych przepływów pracy powiadomień. Powiadomienia SMS powinny być połączone z bramkami zatwierdzania przez człowieka w przypadku wrażliwych lub skierowanych do użytkownika wiadomości.

| Pole | Opis |
|---|---|
| **TextBee API Key** | Uwierzytelnia żądania do dostawcy SMS TextBee. |
| **TextBee Device / Sender** | Wybiera nadawcę lub urządzenie TextBee używane do wiadomości wychodzących, gdy jest to wymagane przez dostawcę. |
| **SMS Notifications Enabled** | Pozwala zatwierdzonym przepływom pracy wysyłać powiadomienia SMS. Pozostaw wyłączone, aby zapobiec wysyłaniu SMS. |

Wyślij wiadomość testową tylko na numer należący do administratora, a następnie potwierdź działanie bramki zatwierdzania przed włączeniem zaplanowanych przypomnień lub przypomnień skierowanych do uczestników.

## Flagi funkcji {#feature-flags}

Również wprowadzone w v1.9.0, karta **Settings → Feature Flags** udostępnia przełączniki dla opcjonalnej funkcjonalności. Każda flaga jest włączona albo wyłączona w całej sieci; obecnie nie ma nadpisania dla poszczególnych witryn.

### Dostęp do flag funkcji {#accessing-feature-flags}

1. W panelu administracyjnym WordPress przejdź do **Gratis AI Agent → Settings**.
2. Kliknij kartę **Feature Flags**.

### Flagi kontroli dostępu {#access-control-flags}

| Flaga | Domyślnie | Opis |
|---|---|---|
| **Ogranicz do administratorów** | Wyłączone | Gdy włączone, tylko użytkownicy z rolą `administrator` mogą otworzyć panel czatu AI Agent. Wszystkie pozostałe role widzą zamiast tego komunikat „Skontaktuj się z administratorem”. |
| **Ogranicz do Network Admins** | Wyłączone | Gdy włączone w sieci multisite, tylko Super Admins mogą używać agenta. Administratorzy pojedynczych witryn są blokowani. Ma pierwszeństwo przed „Ogranicz do administratorów”, jeśli oba są włączone. |
| **Zezwól na dostęp subskrybentom** | Wyłączone | Gdy włączone, użytkownicy z rolą `subscriber` mogą używać interfejsu czatu, ale są ograniczeni do możliwości tylko do odczytu (bez tworzenia wpisów ani zmian ustawień). |
| **Wyłącz dla osób bez członkostwa** | Wyłączone | Integruje się ze statusem członkostwa Ultimate Multisite. Gdy włączone, czat jest ukryty dla witryn, które nie mają aktywnego członkostwa. |

### Flagi brandingu {#branding-flags}

| Flaga | Domyślnie | Opis |
|---|---|---|
| **Ukryj stopkę „Powered by Gratis AI Agent”** | Wyłączone | Usuwa wiersz atrybucji brandingowej wyświetlany na dole widżetu czatu. Zalecane dla wdrożeń white-label. |
| **Niestandardowa nazwa agenta** | *(puste)* | Zastępuje domyślną etykietę „Gratis AI Agent” w nagłówku czatu i menu administracyjnym własną nazwą produktu. Pozostaw puste, aby użyć wartości domyślnej. |
| **Ukryj wybór agenta** | Wyłączone | Gdy włączone, użytkownicy nie mogą przełączać się między pięcioma wbudowanymi agentami. Bieżący agent jest ustawiony na stałe zgodnie z tym, co skonfigurowano jako domyślne w Settings → General. |
| **Użyj ikony witryny jako awatara czatu** | Wyłączone | Zastępuje domyślną ikonę AI w nagłówku widżetu czatu ikoną witryny WordPress (ustawianą w Appearance → Customize → Site Identity). |

### Flagi bezpieczeństwa automatyzacji {#automation-safety-flags}

Superdav AI Agent v1.18.0 wprowadza bramki zatwierdzania przez człowieka oraz rekordy przypomnień dla bezpieczniejszych uruchomień automatyzacji. Te kontrolki mogą pojawiać się we flagach funkcji lub zaawansowanych ustawieniach automatyzacji, w zależności od zainstalowanego pakietu.

| Flaga | Domyślnie | Opis |
|---|---|---|
| **Wymagaj zatwierdzenia przez człowieka** | Zalecane włączone | Wstrzymuje wrażliwe automatyzacje, dopóki upoważniony użytkownik nie przejrzy i nie potwierdzi proponowanego działania. |
| **Deduplikacja przypomnień** | Włączone | Rejestruje wysłane przypomnienia, aby ponowne próby lub zaplanowane uruchomienia nie wysyłały zduplikowanych powiadomień. |
| **Włącz narzędzia kalendarza** | Wyłączone do czasu skonfigurowania | Pozwala agentowi odczytywać skonfigurowane kalendarze i wydarzenia Google. |
| **Włącz powiadomienia SMS** | Wyłączone do czasu skonfigurowania | Pozwala zatwierdzonym przepływom pracy wysyłać powiadomienia SMS TextBee po zapisaniu poświadczeń. |

### Stosowanie zmian {#applying-changes}

Kliknij **Zapisz ustawienia** po przełączeniu dowolnej flagi. Zmiany zaczynają obowiązywać natychmiast — czyszczenie cache ani ponowna aktywacja pluginu nie są wymagane.
