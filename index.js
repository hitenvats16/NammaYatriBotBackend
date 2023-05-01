import Express from "express";
import { config } from "dotenv";
import cors from "cors"
import appConfig from "./config/index.js";
import appRouter from "./routes/index.js";

config()
const PORT = process.env.PORT || 8080
const app = Express();

app.use(cors());
app.use(appConfig);

app.get('/',(req,res)=>{
    const date = new Date()
    res.json({
        "message": "Server Running",
        "time": date.toISOString()
    })
})

app.use(appRouter)


app.listen(PORT,(err)=>{
    if(err){
        console.error(err)
    } else {
        console.info(`Server started at http://localhost:${PORT}`)
    }
});
