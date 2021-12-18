title Exercises 0.4.-0.6

# 0.4: NEW NOTE

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new-note
server->browser: 302 Found -> redirect /notes
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: JSON data

note over browser:
browser parses JSON string to JSON object and appends the data
to a ul element as li elements
end note


# 0.5: SINGLE PAGE APP

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->browser: JSON data


# 0.6: NEW NOTE

note over browser:
The browser adds the form data to the list instead of reloading the page.
The form data is sent to the server as a http post request so others can
see it as well.
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server->browser: {"message":"note created"}