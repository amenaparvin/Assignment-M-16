import * as path from "node:path";


export const MONGODB_CONNECTION="";

export const JWT_SECRET = "SEC44FA22RI22A2";
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const EMAIL_HOST = "";
export const EMAIL_PORT= "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15*60*1200;
export const REQUEST_LIMIT_NUMBER = 3000;

export const WEB_CACHE = false;
export const PORT=5000


// export function UPLOAD_FOLDER(fileName){
//     return path.resolve(process.cwd(),'storage', fileName);
// }