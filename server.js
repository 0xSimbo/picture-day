const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(cors());


app.get('/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id)

    const data = fs.readFileSync(`json/${id}.json`)
    const json_object = JSON.parse(data,null,4);

    res.json(json_object);
    return;


})


const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`listening on port ${port}..`));
