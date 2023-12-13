```mermaid
sequenceDiagram

    Participant Browser
    Participant Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Note right of Server: Status Code: 200 OK
    Server-->>Browser: Loads HTML
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Note right of Server: Status Code: 200 OK
    Server-->>Browser: Loads CSS
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Note right of Server: Status code 200 OK
    Server-->>Browser: Javascript Executes
    deactivate Server

    Note left of Browser: Javascript executes, handles all note functions
    
    Browser-->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Note right of Server: Status code 200 OK
    Server-->>Browser: [{"content": "lalalal","date": "2023-12-08T17:57:22.499Z"}
    Deactivate Server

    Note left of Browser: Data used to create li for each note
```
