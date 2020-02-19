const express = require('express')
const app = express()
const port = 3000
var user = []
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello World!')
})


app.post('/user', function(request,response){
    user.push(request.body);
        response.status(200).json({
            user
        });
        user = [{id:0}]
})

app.get('/users', function(request, response){
    response.send(user)
  })


app.get('/user/:id', function (request, response){
    const users = user.find(us => us.id == request.params.id);
    response.json(
        {id: 0}
    );
  });

app.delete('/user/:id', function(request,response){
    const users = user.find(us => us.id == request.params.id);
  if (users){
    response.status(202).json({
      success: true,
      message: 'User Exist',
      users
    });
    user.pop();
  }else{
    response.status(204).json({
        success:false,
        message: 'User not Exist',
    });

    }
});



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})