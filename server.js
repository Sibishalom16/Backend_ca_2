const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());

let users=[];

app.get('/',(req, res) => {
    res.send('User Success');
});


app.put ('/:id',(req, res) => {
    const { email,password } = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if(userIndex !== -1){
        users[userIndex] = {...users[userIndex], password};
        res.status(200).send('User password updated successfully');
    }
    else{
        res.status(404).send("Email not found");
    }

});

app.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id === req.params.id);
    if(userIndex!== -1){
        users.splice(userIndex, 1);
        res.status(200).send('User deleted successfully');
    }
    else{
        res.status(404).send("Email not found");
    }
})

app.listen(port, () => console.log(`Server running on port https://localhost:${port}`));