# IU_Emission📄 1. Einleitung & Setup der Entwicklungsumgebung

Für dieses Projekt wurden ein Python-basiertes Backend (FastAPI) und ein React-Frontend eingerichtet. Ziel war es, eine moderne, performante und klar strukturierte Entwicklungsumgebung zu schaffen, die sowohl lokale Entwicklung als auch spätere Erweiterungen erleichtert.

📦 2. Einrichtung des Backends (FastAPI)

Das Backend wurde mit FastAPI umgesetzt.
Die Installation und Verwaltung der Python-Abhängigkeiten erfolgen über das Tool uv, das eine schnelle und isolierte Arbeitsumgebung bereitstellt.

Die Schritte zur Einrichtung waren:

Erstellen eines Projektordners backend/

Initialisieren eines neuen Python-Projekts mit uv
(inkl. automatischer Erstellung eines lokalen virtuellen Environments .venv/ sowie einer pyproject.toml für Abhängigkeiten)

Installation des Webframeworks FastAPI über uv

Einrichten der notwendigen Middleware, damit das React-Frontend später problemlos über HTTP auf die API zugreifen kann

Implementieren eines ersten API-Endpunkts, der fiktive CO₂-Emissionsdaten zurückgibt

Das Backend wird im Entwicklungsmodus über uv und uvicorn gestartet.

Startbefehl:

uv run uvicorn main:app --reload


Nach dem Start ist die API erreichbar unter:

http://127.0.0.1:8000/api/emissions

http://127.0.0.1:8000/docs (automatisch generierte API-Dokumentation)

⚛️ 3. Einrichtung des Frontends (React + TypeScript + Vite)

Das Frontend wurde mit dem modernen Build-Tool Vite erstellt, kombiniert mit React und TypeScript.
Diese Kombination sorgt für schnelle Entwicklungszyklen, Hot Reloading und eine klare Komponentenstruktur.

Die Einrichtung umfasste:

Erstellen des Ordners frontend/

Initialisieren eines Vite-Projekts mit dem Template „React + TypeScript“

Installation der JavaScript-Abhängigkeiten über npm

Anpassen der Projektstruktur (App-Komponente, CSS-Dateien)

Implementieren eines ersten Datenabrufs vom FastAPI-Backend und Darstellung der Ergebnisse in einer Tabelle

Das Frontend wird mit npm gestartet:

npm run dev


Danach ist es unter folgender Adresse erreichbar:

http://localhost:5173/

Die App lädt beim Start automatisch die Daten des Backends und zeigt diese in tabellarischer Form an.

▶️ 4. Start der gesamten Anwendung

Damit das Projekt vollständig funktioniert, müssen Backend und Frontend jeweils in eigenen Terminals gestartet werden:

Backend starten:

uv run uvicorn main:app --reload


Frontend starten:

npm run dev


Sobald beide Prozesse laufen, kommuniziert das React-Frontend über HTTP direkt mit dem FastAPI-Backend.

Frontendentwicklung – Projektstruktur

Für das Frontend wurde mittels Vite ein React-Projekt mit TypeScript erstellt. Um eine klare Struktur und gute Erweiterbarkeit zu gewährleisten, wurde eine komponentenbasierte Ordnerstruktur aufgebaut. Alle UI-Elemente (Header, Menü, Tabelle, Footer) wurden in einen separaten Ordner src/components/ ausgelagert.
Die zentrale Logik zum Laden der Daten sowie das Seitenlayout befinden sich in App.tsx.

4. Gestaltung und Layout der Webanwendung
4.1 Grundlegendes Layoutkonzept

Das Layout der Anwendung orientiert sich an einem klassischen, klar strukturierten Seitenaufbau mit:

einem Header im oberen Bereich,

einem zweispaltigen Hauptbereich mit lokalem Menü und Inhaltsbereich,

einem Footer am unteren Rand der Seite.

Die Inhalte werden zentriert in einem begrenzten Inhaltsbereich dargestellt, um die Lesbarkeit auf größeren Bildschirmen zu verbessern. Der Hintergrund der Seite ist dezent grau gehalten, während die eigentlichen Inhaltsbereiche (Header, Menü, Content, Footer) auf weißen Flächen liegen. Dadurch entsteht eine klare visuelle Trennung zwischen „Seitenhintergrund“ und „Inhalt“.

Als Schriftart kommt eine serifenlose Systemschrift (z. B. Segoe UI, system-ui) zum Einsatz, um eine moderne, gut lesbare Darstellung auf verschiedenen Betriebssystemen zu gewährleisten.

4.2 Header und globale Navigation

Der Header dient als globaler Einstiegspunkt in die Seite und enthält:

ein kleines, kreisförmiges Logo mit der Beschriftung „CO₂“,

den Titel der Seite (Name der fiktiven Organisation),

eine Unterzeile mit einer kurzen Beschreibung,

sowie eine einfache globale Navigation mit mehreren Links (z. B. Übersicht, Daten, Rechtliches).

Gestalterisch ist der Header bewusst minimalistisch gehalten: weiße Hintergrundfläche, feine untere Rahmenlinie und reduzierte Typografie. Das Logo ist bewusst zurückhaltend gestaltet (kleiner dunkler Kreis mit heller Schrift), um Professionalität zu vermitteln, ohne zu verspielt zu wirken. Die Navigationslinks sind schlicht typografisch hervorgehoben und ändern lediglich die Farbe bei Hover, um eine dezente, aber wahrnehmbare Interaktion zu bieten.

4.3 Lokales Menü (Sidebar)

Links neben dem Inhaltsbereich befindet sich ein lokales Menü in Form einer Sidebar. Dieses Menü bietet interne Links zu relevanten Abschnitten der Seite (z. B. Übersicht, Emissionstabelle, rechtliche Hinweise).

Gestaltung:

Das Menü ist in einem eigenen, weißen Kasten untergebracht.

Der Kasten besitzt einen leichten Rahmen und abgerundete Ecken.

Die einzelnen Menüeinträge sind als Liste untereinander angeordnet.

Zwischen den Einträgen befinden sich dünne Trennlinien.

Beim Überfahren mit der Maus (Hover) wird der Hintergrund des jeweils aktiven Eintrags leicht hervorgehoben.

Ziel dieses Designs ist es, die Navigation klar erkennbar, aber optisch unaufdringlich zu gestalten. Das lokale Menü unterstützt die Orientierung innerhalb der Seite und bereitet gleichzeitig die spätere Anforderung vor, die Menüposition je nach „Schriftkultur“ nach links oder rechts zu verschieben.

4.4 Inhaltsbereich und Tabelle

Der eigentliche Content-Bereich wird als „Karte“ dargestellt:

weißer Hintergrund,

abgerundete Ecken,

leichtes Schatten- bzw. Rahmenlayout,

ausreichend Innenabstände (Padding).

Dies soll den Eindruck einer in sich geschlossenen Inhaltseinheit vermitteln und die Lesbarkeit auf unterschiedlichen Bildschirmgrößen erhöhen.

Die CO₂-Emissionsdaten werden in einer Tabelle dargestellt. Diese ist so aufgebaut, dass sie in einer Spalte im Content-Bereich eingebettet ist. Gestalterisch wurde auf folgende Punkte geachtet:

Kopfzeile der Tabelle mit leicht abgesetztem Hintergrund, um Spaltenüberschriften zu betonen.

Gleichmäßige Abstände in Zeilen und Spalten.

Dezente untere Rahmenlinien zwischen den Zeilen zur besseren visuellen Führung.

Hervorhebung einer Tabellenzeile bei Hover, um die Orientierung bei breiten Tabellen zu erleichtern.

Die Tabelle wirkt bewusst sachlich und „neutral“, um den Datencharakter zu unterstreichen und nicht von den Emissionswerten abzulenken.

4.5 Footer

Der Footer befindet sich am unteren Rand der Seite und enthält Hinweise zur Fiktionalität der dargestellten Daten sowie rechtliche bzw. organisatorische Informationen (z. B. Hinweis, dass alle Daten nur zu Demonstrationszwecken dienen).

Gestaltung:

weißer Hintergrund, passend zu Header und Content,

dezente obere Trennlinie,

kleinere Schriftgröße,

zentrierte Ausrichtung.

Damit wird der Footer klar von den Hauptinhalten abgegrenzt, bleibt aber gut lesbar und einheitlich im Gesamtbild der Seite.

4.6 Responsives Design

Das Layout wurde so umgesetzt, dass es sich an unterschiedliche Bildschirmbreiten anpasst:

Auf größeren Bildschirmen (z. B. Desktop) werden das lokale Menü und der Inhaltsbereich nebeneinander in zwei Spalten angezeigt.

Auf kleineren Bildschirmen (z. B. Tablet oder Smartphone) wird das Layout automatisch auf eine einspaltige Darstellung umgestellt:

Der Header wird kompakter dargestellt.

Das lokale Menü wird über dem Content-Bereich angezeigt.

Die Spalten werden untereinander gestapelt.

Die Tabelle ist in einen Container eingebettet, der bei sehr schmalen Bildschirmen horizontales Scrollen erlaubt. So bleiben alle Spalten sichtbar, ohne den Text zu klein zu machen.

Dieses responsive Verhalten stellt sicher, dass die Seite sowohl auf einem breiten Desktop-Monitor als auch auf Tablets und Smartphones gut lesbar bleibt und erfüllt damit die entsprechenden Anforderungen der Aufgabenstellung.

4.7 Begründung der Designentscheidungen

Die Gestaltung folgt bewusst einem minimalistischen Ansatz:

Fokus auf Lesbarkeit statt auf dekorative Elemente.

Einsatz von wenigen, zurückhaltenden Farben (Grautöne, Weiß, dezente dunkle Akzente).

Konsistente Abstände und klare Struktur, um die Orientierung zu erleichtern.

Dies passt zum Kontext einer Non-Profit-Organisation, die Transparenz und Seriosität rund um das Thema Klimawandel vermitteln möchte. Die visuelle Gestaltung unterstützt diese Zielsetzung, indem sie die Inhalte in den Vordergrund stellt und Ablenkungen reduziert.
📄 4.8 Anpassung der Basis-CSS-Dateien und Zentrierung des Layouts

Während der Entwicklung zeigte sich, dass das initial von Vite generierte Standard-CSS (insbesondere die Datei index.css) unerwartet Einfluss auf das Layout der Anwendung hatte. Insbesondere enthielt die generierte Datei eine globale Layoutdefinition auf dem <body>-Element, die wie folgt wirkte:

Der gesamte Seiteninhalt wurde durch display: flex und place-items: center künstlich zentriert.

Dadurch wurde das eigentliche Layout, das in App.css definiert ist, überschrieben oder verfälscht.

Das führte dazu, dass Sidebar und Hauptinhalt optisch „links klebten“ oder falsch ausgerichtet waren.

Um eine klare und konsistente Layoutstruktur zu gewährleisten, wurde die Basis-CSS-Datei komplett überarbeitet. Ziel war es, dass alle Layoutentscheidungen ausschließlich innerhalb der eigenen Komponenten-Styles (z. B. App.css) gesteuert werden, statt durch Voreinstellungen des Build-Tools beeinflusst zu werden.

Die vorgenommenen Schritte waren:

Entfernen der flexbasierten Zentrierung des Seiteninhalts aus index.css.

Vereinfachung der globalen Styles auf reine Reset-/Baseline-Eigenschaften (z. B. Margin-Reset, Schriftdefinition, Hintergrundfarbe).

Sicherstellen, dass keine globalen Styles mehr das Verhalten von Layout-Containern wie Header, Sidebar oder Hauptbereich beeinflussen.

Übergabe der vollständigen Layoutkontrolle an App.css, wodurch eine präzise Zentrierung und responsives Verhalten erreicht wurden.

Nach der Anpassung verhält sich die Anwendung wie vorgesehen:

Der gesamte Seitenaufbau wird nun korrekt durch die eigenen Komponenten-Styles gesteuert.

Sidebar und Hauptinhalt bilden eine zentrierte, visuell ausgewogene Einheit.

Die Anwendung reagiert sauber auf unterschiedliche Bildschirmgrößen.

Diese Überarbeitung war notwendig, um ein reproduzierbares und intuitiv erweiterbares Layout zu erhalten, und legt die Grundlage für die weitere Gestaltung der Benutzeroberfläche.

5.1 Sortierfunktion für die Emissionstabelle

Um die Nutzbarkeit der Emissionsübersicht zu verbessern, wurde die Tabelle um eine interaktive Sortierfunktion erweitert. Durch Anklicken einer Spaltenüberschrift (z. B. Land, Unternehmen, Sektor, Emissionen) werden die dargestellten Daten dynamisch sortiert.

Technisch wird der aktuelle Sortierstatus als Kombination aus Sortierspalte und Sortierrichtung gespeichert. Beim erneuten Anklicken derselben Spalte wird die Sortierreihenfolge umgekehrt (aufsteigend/absteigend). Die Sortierung erfolgt vollständig clientseitig und wird sowohl für numerische als auch für textbasierte Daten korrekt angewendet.

Ein visuelles Symbol (▲ / ▼) gibt zusätzlich an, welche Spalte aktuell aktiv sortiert wird und in welcher Richtung. Diese Funktion erhöht die Transparenz und Übersichtlichkeit der Daten und erfüllt damit die entsprechende Anforderung der Aufgabenstellung.

5.2 Erweiterung der Beispieldaten

Um die Sortier- und Filterfunktionen sinnvoll demonstrieren zu können, wurde die ursprünglich sehr kleine Beispieltabelle des Backends deutlich erweitert. Die neue Datenbasis umfasst mehrere Länder (u. a. Deutschland, USA, China, Indien, Japan) und realistisch wirkende Unternehmen unterschiedlicher Branchen wie Energie, Automobil, Chemie, Industrie oder Digitalwirtschaft.

Jeder Eintrag enthält weiterhin die Attribute Land, Unternehmen, Sektor und Emissionen. Durch die größere Vielfalt an Daten können die später implementierten Funktionen (Sortierung, Filterung, Responsivität) anschaulich getestet und bewertet werden. Gleichzeitig bleibt die Datengrundlage vollständig fiktiv, wie es für eine Demonstrationsanwendung vorgesehen ist.

5.3 Filterfunktion für die Emissionstabelle

Zusätzlich zur Sortierung wurde die Tabelle um eine flexible Filterfunktion erweitert. Oberhalb der Tabelle stehen ein Freitext-Suchfeld sowie zwei Dropdown-Felder zur Verfügung. Über das Suchfeld können beispielsweise Unternehmensnamen oder Teile davon eingegeben werden. Die Dropdowns erlauben eine Einschränkung der Daten nach Land bzw. Sektor.

Die Filter wirken kombinierbar: Es ist möglich, gleichzeitig ein bestimmtes Land, einen bestimmten Sektor und einen Suchbegriff auszuwählen. Die Filterung erfolgt vollständig im Frontend auf Basis der vom Backend gelieferten Daten. Anschließend werden die gefilterten Daten weiterhin nach der gewählten Sortierspalte sortiert. Dadurch bleibt die Benutzeroberfläche konsistent und die Anforderung einer sortier- und filterbaren Tabelle wird erfüllt.

5.5 Anpassung der Menüposition an die Schriftkultur

Um der Anforderung gerecht zu werden, dass das lokale Menü je nach Schriftkultur links oder rechts angezeigt werden soll, wurde in der Anwendung eine Umschaltmöglichkeit integriert. Über ein Auswahlfeld „Schriftkultur“ kann zwischen einer links-nach-rechts-orientierten Darstellung und einer rechts-nach-links-orientierten Darstellung gewechselt werden.

Technisch wird die gewählte Ausrichtung als Zustand in der zentralen App-Komponente gespeichert. Abhängig von dieser Auswahl erhält das Wurzelelement der Anwendung eine entsprechende CSS-Klasse. Über diese Klasse wird die Anordnung des Hauptbereichs (Sidebar und Inhalt) gesteuert, indem die Flex-Richtung des Layout-Containers dynamisch zwischen normaler und umgekehrter Reihenfolge gewechselt wird. Auf diese Weise kann das lokale Menü wahlweise links oder rechts angezeigt werden, ohne die zugrunde liegende Struktur der Seite zu verändern.

5.6 Anpassung des Browser-Titels und Integration eines eigenen Logos

Um der Anwendung ein eigenständiges und professionelles Erscheinungsbild zu verleihen, wurde der standardmäßige Projekttitel des Vite-Templates im HTML-Header angepasst. Statt des generischen Namens „frontend“ wird nun ein aussagekräftiger Titel angezeigt, der den Zweck der Webseite widerspiegelt. Der neue Tab-Titel lautet beispielsweise „CO₂ Transparency Dashboard“ und erleichtert die Wiedererkennung der Anwendung im Browser.

Zusätzlich wurde ein eigenes Logo in Form einer SVG-Grafik erstellt und integriert. Das Logo besteht aus einem schlichten dunklen Kreis mit der weißen Beschriftung „CO₂“ und orientiert sich visuell am minimalistischen Stil des Seitenlayouts. Die Verwendung eines SVG ermöglicht eine verlustfreie Darstellung auf allen Bildschirmgrößen und eignet sich sowohl für die Verwendung im Header der Webseite als auch als Favicon im Browser-Tab.

Die SVG-Datei wurde in den öffentlichen Ordner des Frontend-Projekts eingebunden, sodass sie sowohl im Tab als auch in der Kopfzeile der Seite angezeigt werden kann. Durch diese Anpassungen erhält die Anwendung einen klaren Wiedererkennungswert und wirkt im Gesamteindruck deutlich professioneller.