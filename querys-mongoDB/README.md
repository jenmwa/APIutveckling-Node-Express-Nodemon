## Express with MongoDB, Postman & mockdata from mockaroo

#### examples:

.limit(20) - visar de 20 första<br>
.skip(20).limit(20) - tar bara 20 resultat, men hoppas över de 20 första<br>
.find({'carMake': 'Ford'}) - skicka in object med key och value för att få fram specifik data (här key carmake med value Ford)<br>
.find({'carMake': 'Ford', 'carModel': 'Focus'}) - få ut flera keys.<br>
.find().sort().toArray() - sortera <br>
.sort({'modelYear': 1}) - sortera , value 1(ascending) eller -1(descending)<br>
.sort({'carMake': 1}) - ex sortera bokstavsordning<br>

med .find() kan vi även skicka in:


```bash
$gt - greater than
$lt - less than
$gte - greater than or equal to
£lte - less than or equal to
```
exempel: 

.find({'modelYear': {$gt: 2000}}).sort().toArray()

###

ändrar en specifik bils färg
```bash
    req.app.locals.db.collection('cars').updateMany({'carMake': 'WBAHN03537D025387'}, {$set: {'color': 'black'}})
    .then(results => {
        console.log(results)
    })
```

ändrar om alla Ford till Fjord:
```bash
    req.app.locals.db.collection('cars').updateMany({'carMake': 'Ford'}, {$set: {'carMake': 'Fjord'}})
    .then(results => {
        console.log(results)
    })
```

ta bort en, radera:
```bash
    req.app.locals.db.collection('cars').deleteOne({'carMVin': 'For3C3CFFCR8DT348831d'})
    .then(results => {
        console.log(results)
    })
```

ta bort all FORD 
```bash
    req.app.locals.db.collection('cars').deleteMany({'carMake': 'Ford'})
    .then(results => {
        console.log(results)
    })
```

kolla därefter, totala antalet bilar har minskat pga borttagningen
```bash
    req.app.locals.db.collection('cars').countDocuments()
    .then(results => {
        console.log(results)
    })
```


insertOne, insertMany, i en post, kan vi ta emot 1 object, eler insertMany skulle kunna skicka in en samling av flera object.
Användbart som här skicka in bilar/mock via postman för att testa!