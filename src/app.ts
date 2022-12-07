import express from "express"
import cors from "cors"
import {router} from './routes/index'

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());//Habilitar envio de json
app.use(cors());
app.use(router);


app.listen(PORT, () => {
    console.log(`Escuchando por el puerto: ${PORT}`)
})