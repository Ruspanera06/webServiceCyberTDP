https://haveibeenpwned.com/
https://api.pwnedpasswords.com/range/{first 5 hash chars}



# Data Breaches 

Questa è la documentazione della api

## Breaches

`GET http://localhost:8080/aziende/`

L'endpoint azienda restituirà tutte le aziende che hanno ricevuto Data breach con la **query string** si possono filtrare i dati che si vogliono ottenere

```json
[
    {
        "Name": "AbuseWithUs",
        "Title": "AbuseWith.Us",
        "Domain": "abusewith.us",
        "BreachDate": "2016-07-01",
        "PwnCount": 1372550,
        "Description": "In 2016, the site dedicated to helping people hack email and online gaming accounts known as Abusewith.us suffered multiple data breaches. The site \u003Ca href=\"https://krebsonsecurity.com/2017/02/who-ran-leakedsource-com/\" target=\"_blank\" rel=\"noopener\"\u003Eallegedly had an administrator in common with the nefarious LeakedSource site\u003C/a\u003E, both of which have since been shut down. The exposed data included more than 1.3 million unique email addresses, often accompanied by usernames, IP addresses and plain text or hashed passwords retrieved from various sources and intended to be used to compromise the victims' accounts.",
        "LogoPath": "https://haveibeenpwned.com/Content/Images/PwnedLogos/AbuseWithUs.png",
        "DataClasses": [
        "Email addresses",
        "IP addresses",
        "Passwords",
        "Usernames"
        ]
    }
]
```

`GET http://localhost:8080/aziende/?name&title`

```json
[
    {
        "Name": "AbuseWithUs",
        "Title": "AbuseWith.Us",
    }
]
```

## Password Check

`GET http://localhost:8080/check/?password=ciao`

L'endpoint check permette di controllare se una password è possibilmente stata violata

```json
[
    {
        "Name": "AbuseWithUs",
        "Title": "AbuseWith.Us",
    }
]
```

## 

# Authors

- [@SimonFox](https://github.com/Simone-Lauro-itis-pr)
- [@Ruspanera06](https://github.com/Ruspanera06)