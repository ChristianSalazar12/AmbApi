                                             📄 AmbuAPI Project Documentation

                                    📝 1. Project Description | Descripción del Proyecto

AmbuAPI is a RESTful API developed in Node.js using the Express.js framework. Its main goal is to manage emergency medical services, including real-time coordination of ambulances, medical staff, service requests, and incident records. It is designed for high reliability and data consistency in emergency operations.

AmbuAPI es una API RESTful desarrollada en Node.js utilizando el framework Express.js. Su principal objetivo es gestionar servicios médicos de emergencia, incluyendo la coordinación en tiempo real de ambulancias, personal médico, solicitudes de atención y registros de incidentes. Está diseñada para garantizar alta confiabilidad y consistencia de datos en operaciones de emergencia.

                                    🧩 2. Database Relationship | Relación con la Base de Datos

La estructura actual incluye las siguientes entidades principales:

IPS: Instituciones Prestadoras de Salud registradas.

Ambulancias: Vehículos disponibles con tipo, estado, y ubicación.

Personal Médico:

paramédicos
conductores
auxiliares

Turnos (Shifts): Registro de asignaciones de personal y ambulancias por jornada.

Pacientes: Datos personales y documento de identidad.

Descripciones: Información contextual del incidente o atención.

Servicios (Atenciones): Registro completo del evento médico, incluyendo lugar, tiempos y estado.

                                      📦 3. Tech Stack | Tecnologías Utilizadas

 Node.js (Backend)

 Express.js (API Routing)

Sequelize ORM (con PostgreSQL)

JWT (Autenticación)

Swagger (OpenAPI) para documentación interactiva

Postman para pruebas de endpoints

<img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> javasCript 
