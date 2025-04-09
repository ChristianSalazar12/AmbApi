/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión y obtiene un token JWT.
 *     description: Permite a un usuario iniciar sesión con sus credenciales.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión iniciada con éxito.
 *       400:
 *         description: Credenciales inválidas.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /db-users:
 *   get:
 *     summary: Obtiene todos los usuarios registrados.
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios.
 *       500:
 *         description: Error al comunicarse con la base de datos.
 */

/**
 * @swagger
 * /protectedRoute:
 *   get:
 *     summary: Ruta protegida.
 *     description: Solo accesible con un token JWT válido.
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso concedido.
 *       401:
 *         description: Token inválido o ausente.
 */

/**
 * @swagger
 * /ambulancias:
 *   get:
 *     summary: Lista todas las ambulancias.
 *     tags: [Ambulancias]
 *     responses:
 *       200:
 *         description: Lista de ambulancias.
 *       500:
 *         description: Error de servidor.
 */

/**
 * @swagger
 * /ambulancias/add:
 *   post:
 *     summary: Agrega una nueva ambulancia.
 *     tags: [Ambulancias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [modelo, placa, tipo, ipsId]
 *             properties:
 *               modelo:
 *                 type: string
 *               placa:
 *                 type: string
 *               tipo:
 *                 type: string
 *               ipsId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ambulancia registrada con éxito.
 *       400:
 *         description: Error de validación.
 *       409:
 *         description: Placa ya registrada.
 *       500:
 *         description: Error interno.
 */

/**
 * @swagger
 * /drivers:
 *   get:
 *     summary: Lista todos los conductores.
 *     tags: [Conductores]
 *     responses:
 *       200:
 *         description: Lista de conductores.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /drivers/add:
 *   post:
 *     summary: Crea un nuevo conductor.
 *     tags: [Conductores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, last_name, document, no_licencia, no_fast_driver]
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               document:
 *                 type: string
 *               no_licencia:
 *                 type: string
 *               no_fast_driver:
 *                 type: string
 *     responses:
 *       201:
 *         description: Conductor agregado con éxito.
 *       400:
 *         description: Error de validación.
 *       500:
 *         description: Error interno.
 */

/**
 * @swagger
 * /drivers/{id}:
 *   delete:
 *     summary: Elimina un conductor por su ID.
 *     tags: [Conductores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del conductor
 *     responses:
 *       200:
 *         description: Conductor eliminado correctamente.
 *       404:
 *         description: Conductor no encontrado.
 *       500:
 *         description: Error interno.
 */

/**
 * @swagger
 * /paramedics:
 *   get:
 *     summary: Lista todos los paramédicos.
 *     tags: [Paramédicos]
 *     responses:
 *       200:
 *         description: Lista de paramédicos.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /paramedics/add:
 *   post:
 *     summary: Registra un nuevo paramédico.
 *     tags: [Paramédicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, last_name, document, tipo_medic, no_ci_medic, id_capacitation, password, role]
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               document:
 *                 type: string
 *               tipo_medic:
 *                 type: string
 *               no_ci_medic:
 *                 type: string
 *               id_capacitation:
 *                 type: integer
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Paramédico registrado exitosamente.
 *       400:
 *         description: Error de validación.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /paramedics/{id}:
 *   delete:
 *     summary: Elimina un paramédico por su ID.
 *     tags: [Paramédicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del paramédico
 *     responses:
 *       200:
 *         description: Paramédico eliminado correctamente.
 *       404:
 *         description: Paramédico no encontrado.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /paramedics/{id}:
 *   delete:
 *     summary: Elimina un paramédico por su ID.
 *     tags: [Paramédicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del paramédico
 *     responses:
 *       200:
 *         description: Paramédico eliminado correctamente.
 *       404:
 *         description: Paramédico no encontrado.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /assistant:
 *   get:
 *     summary: Lista todos los auxiliares.
 *     tags: [Auxiliares]
 *     responses:
 *       200:
 *         description: Lista de auxiliares.
 *       500:
 *         description: Error del servidor.
 */

/**
 * @swagger
 * /assistant/add:
 *   post:
 *     summary: Agrega un nuevo auxiliar.
 *     tags: [Auxiliares]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, last_name, document, no_ci_auxiliar, no_ci_soporte_vital, password, role]
 *             properties:
 *               name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               document:
 *                 type: string
 *               no_ci_auxiliar:
 *                 type: string
 *               no_ci_soporte_vital:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Auxiliar registrado con éxito.
 *       400:
 *         description: Error de validación.
 *       500:
 *         description: Error del servidor.
 */
// src/swagger/swaggerDocs.js
const swaggerUi = require("swagger-ui-express");

const swaggerDocs = (app, swaggerSpec) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger disponible en http://localhost:3005/api-docs`);
};

module.exports = swaggerDocs;
