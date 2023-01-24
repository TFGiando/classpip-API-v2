import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/server/imagenesPregunta`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {

    console.log("Nombre original imagen " +  file.originalname);
    cb(null, file.originalname);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;