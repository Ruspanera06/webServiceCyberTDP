# Sources
https://haveibeenpwned.com/  
GET https://haveibeenpwned.com/api/v3/breaches  
https://api.pwnedpasswords.com/range/{first 5 hash chars}



# Data Breaches 

Questa è la documentazione della api

## Breaches

`GET http://localhost:8080/aziende/`

L'endpoint azienda restituirà tutte le aziende che hanno ricevuto Data breach

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


Con la **query string** si possono filtrare i dati che si vogliono ottenere
- limit: ?limit=1, si possono limitare il numero di dati inviati
- Domain: ?Domain=adobe.com, si può cercare un determinato dominio

Si possono filtrare anche gli attributi cche si vogliono ricevere semplicemente mettendo l'attributo che vogliamo
- name
- title
- domain
- breachdate
- pwncount
- description
- logopath
- dataclasses

`GET http://localhost:8080/aziende/?name=true&title=true&limit=1`

```json
[
    {
        "Name": "AbuseWithUs",
        "Title": "AbuseWith.Us",
    }
]
```

Si può anche filtrare per dataclasses cercherà tutti i dati che hanno una le caratteristiche passate dentro la lista

`GET http://localhost:8080/aziende/?DataClasses=email&DataClasses="IP addresss"&title=true`

```json
[
    {
        "Title": "AbuseWith.Us",
    }
]
```

## Password Check

L'endpoint check permette richiede una pssword e controlla quali password che contengono dei caratteri uguali alla password mandata
e restituisce gli hash(sha-1) di quelle password e il numero di volte che sono state violate

`GET http://localhost:8080/check/?password=ciao`

```json
[
    {"0018A45C4D1DEF81644B54AB7F969B88D65":1},
    {"00D4F6E8FA6EECAD2A3AA415EEC418D38EC":2},
    {"011053FD0102E94D6AE2F8B83D76FAF94F6":1},
    {"012A7CA357541F0AC487871FEEC1891C49C":2},
    {"0136E006E24E7D152139815FB0FC6A50B15":2}
]
```

Anche quà si possono limitare il numero di dati

`GET http://localhost:8080/check/?password=ciao&limit=2`

```json
[
    {"0018A45C4D1DEF81644B54AB7F969B88D65":1},
    {"00D4F6E8FA6EECAD2A3AA415EEC418D38EC":2},
]
```
# Authors

- [@SimonFox](https://github.com/Simone-Lauro-itis-pr)
- [@Ruspanera06](https://github.com/Ruspanera06)