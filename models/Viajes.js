import Sequelize from "sequelize";
import db from '../config/db.js';


export const Viaje = db.define('viajes',{

    titulo:{ type: Sequelize.STRING},
    descripcion:{type: Sequelize.STRING},
    precio:{type: Sequelize.STRING},
    fecha_ida:{type: Sequelize.DATE},
    fecha_vuelta:{type: Sequelize.DATE},
    imagen_url:{type: Sequelize.STRING},
    disponibles:{type: Sequelize.INTEGER},
    slug:{type: Sequelize.STRING}
    
});