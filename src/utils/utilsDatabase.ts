import * as fs  from "fs";


/**
 * Metodo que almacena los datos editados en DB 
 * @param DB es el fichero db.json, donde alamacenamos datos
 */
const saveToDatabase = (DB: any) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8"
    })
}

export {saveToDatabase}