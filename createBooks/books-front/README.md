Beskrivning
I den här övningen skall du skriva en applikation med express.
Nu skall du skapa ett API för ett biblitek. Via detta API skall det gå att se vilka böcker som finns på biblioteket, samt att låna dessa.

Det skall även gå att skapa nya böcker till biblioteket.

Låna en bok kan du göra via en get route. Att lägga till en bok skall göras med en post.

Böckerna kan du hantera med en global object array i books.js. Vi kommer nästa vecka lära oss hur du kan spara information till en lokal .json fil.

En global variabel “lever” på servern så länge servern inte startas om eller krachar pga av ett fel.
Globala variabler som innehåller data som är klient (knutet till besökaren) bör alldrig hanteras på detta sättet, eller viktig data som inte får förloras när servern startar om.
Men för övningens skull kan vi hantara biblioteket på detta sätt för nu. 

På root sidan för bok routern så skall alla böcker som finns på biblioteket visas. På den här sidan räcker det med att visa namn på boken samt om den är utlånad eller inte. Det skall även finnas en länk till sidan “lägg till en ny bok”.

På informationssidan för en bok så skall bokens namn, författare, antal sidor samt om den är utlånad eller inte visas. Här skall det även finnas en länk för att låna boken.

På sidan “lägg till en ny bok” så skall det finnas ett formulär via vilket du skall kunna lägga till nya böcker till biblioteket.