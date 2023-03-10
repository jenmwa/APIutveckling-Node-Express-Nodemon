var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET users listing. */
router.get('/', function(request, respons, next) {

  fs.readFile('emaillist.json', function(error, data){
    if (error === true) {
        console.log(error)
    }

    const emaillist = JSON.parse(data);

    respons.send(emaillist);
    return;

  })
});

// router.post('/add', function(request, respons, next){

//   fs.readFile('emaillist.json', function(error, data) {
//     if(error) {
//       console.log(error)

//       if(error.code === 'ENOENT') {
//         console.log('the file doesn´t exist');

//         let emaillist = [{
//           name: request.body.name,
//           email: request.body.email
//         }];

//         fs.writeFile('emaillist.json', JSON.stringify(emaillist, null, 2), function(err) {
//           if (err) {
//             console.log(err)
//           }
//         })

//         respons.send('file created and new userinput is added');
//         return;
//       }

//       respons.send('Something went wrong')
//     }
//       const emaillist = JSON.parse(data);

//       let newInput = {
//         'name': request.body.name,
//         'email': request.body.email
//     };
    
//     emaillist.push(newInput);

//     fs.writeFile('emaillist.json', JSON.stringify(emaillist, null , 2), function(error) {
//       if (error) {
//         console.log(error);
//       }
//     })

//     respons.send(emaillist)
//     return;
//   })
  
// });


// router.get('/add', function(request, respons, next) {
//   fs.readFile('emaillist.json', function(error, data){
//     if (error === true) {
//         console.log(error)
//     }

//     const emaillist = JSON.parse(data);

//     respons.send(emaillist);
//     return;

//   });
// });

/*****************************************************
 *****************************************************
 ****************************************************/

router.post('/txt', function(request, respons, next) {

  fs.readFile('emaillist.txt', 'utf8', function(error, data){
    if (error === true) {
        console.log(error)

        if(error.code === 'ENOENT') {
          console.log('the file doesn´t exist');

          let emaillist = [{
            'name': request.body.name,
            'email': request.body.email
          }];

          fs.writeFile('emaillist.txt', JSON.stringify(emaillist, null, 2), function(err){
            if(err === true){
              console.log(err)
            }
          })

          respons.send('txtfile created and new user is added os list');
          return;
        }
      respons.send('Something went wrong');
    }

    const emaillist = JSON.parse(data);

    let newInput = {
      'name': request.body.name,
      'email': request.body.email
    };

    emaillist.push(newInput);

    fs.writeFile('emaillist.txt', JSON.stringify(emaillist, null, 2), function(error) {
      if(error === true) {
        console.log(error)
      }
    })

    respons.send(emaillist);
    return;

  })
});

router.get('/txt', function(request, response, next) {

  fs.readFile('emaillist.txt', 'utf8', function (erro, data) {
    if(erro) {
      console.log(erro)
    };

    const emaillist = JSON.parse(data);

    response.send(emaillist);
      return;
  });
});

module.exports = router;
