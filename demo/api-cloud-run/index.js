const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/get-command/:commandId", (request, response) => {

    let responseCommand = {
        commandStatus: 'in-preparation',
    }

    // random between 1 to 2
    const random = Math.random() + 1;


    if(random > 1.5) {
        responseCommand = {
            commandStatus: 'ready',
        }
    }

    console.log('id command ' + request.params.commandId + ' responseCommand.commandStatus ' + responseCommand.commandStatus);

    response.status(200).json(responseCommand);
});


app.post("/order-command", (request, response) => {
    console.log('request.body ' + request.body);

    response.status(200).json({
        commandStatus: 'success',
        commandId: uuidv4()
    });
});

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
})


