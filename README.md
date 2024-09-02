# Weather App

## Opis projektu

Weather App to prosta aplikacja internetowa, która wykorzystuje API OpenWeatherMap do wyświetlania aktualnej pogody dla bieżącej lokalizacji użytkownika. Aplikacja pokazuje podstawowe informacje o pogodzie, takie jak temperatura, wilgotność, ciśnienie, zachmurzenie, prędkość wiatru oraz godziny wschodu i zachodu słońca.

## Technologie

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- OpenWeatherMap API

## Funkcje

- **Automatyczne wykrywanie lokalizacji**: Aplikacja korzysta z funkcji geolokalizacji w przeglądarce, aby automatycznie pobrać współrzędne użytkownika.
- **Wyświetlanie aktualnej pogody**: Po pobraniu lokalizacji aplikacja wysyła żądanie do API OpenWeatherMap i wyświetla następujące informacje:
  - Aktualna temperatura
  - Wilgotność
  - Ciśnienie atmosferyczne
  - Zachmurzenie
  - Prędkość wiatru
  - Godziny wschodu i zachodu słońca
  - Lokalizacja użytkownika z linkiem do OpenStreetMap
  - Ikona przedstawiająca aktualne warunki pogodowe

## Jak uruchomić aplikację lokalnie

1. **Sklonuj repozytorium**:

   ```git clone https://github.com/TwojeRepozytorium/weather-app.git```

2. **Przejdź do katalogu projektu**:

```cd weather-app```

3. **Otwórz plik weather.html w przeglądarce**:

- **Możesz uruchomić lokalny serwer lub po prostu otworzyć plik weather.html w przeglądarce.**

## API

**Aplikacja korzysta z API OpenWeatherMap do pobierania danych pogodowych. Aby móc korzystać z aplikacji, potrzebujesz własnego klucza API. Klucz API można uzyskać, rejestrując się na stronie OpenWeatherMap**.

**Klucz API jest przechowywany w zmiennej apiKey w pliku code.js:**

```const apiKey = "TWÓJ_KLUCZ_API";```

## Struktura projektu

- **`index.html`**: Główny plik HTML zawierający strukturę strony.
- **`style.css`**: Plik CSS zawierający stylizacje strony.
- **`code.js`**: Plik JavaScript zawierający logikę aplikacji (pobieranie danych z API, aktualizacja interfejsu użytkownika).
- **`fonts/`**: Katalog zawierający niestandardowe czcionki używane w aplikacji.

## Stylizacje

Aplikacja korzysta z frameworka Bootstrap 5 do podstawowej stylizacji, co umożliwia responsywne i estetyczne wyświetlanie treści. Dodatkowe stylizacje zostały dodane w pliku `style.css`, aby nadać aplikacji unikalny wygląd.

## Dalszy rozwój

Możliwe kierunki rozwoju aplikacji:

- Dodanie prognozy pogody na kilka dni do przodu.
- Wprowadzenie obsługi wielu lokalizacji.
- Dodanie opcji wyboru jednostek (Celsiusz/Fahrenheit).

## Autor

**Krystian Borys** - [cristianwolff33](https://github.com/cristianwolff33)
