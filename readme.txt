Documentación del Proyecto AmbuAPI

1. Descripción del Proyecto
AmbuAPI es una API desarrollada en Node.js utilizando Express.js con el objetivo de gestionar la información relacionada con ambulancias y servicios de emergencia. Proporciona endpoints para administrar datos de vehículos, personal, rutas y servicios en tiempo real, facilitando la gestión eficiente de emergencias.

2. Relación con la Base de Datos
La API se conecta a una base de datos donde se almacenan los datos esenciales del sistema. La estructura de la base de datos incluye las siguientes entidades principales:

Ambulancias: Registra información sobre cada unidad, como número de identificación, tipo de vehículo, disponibilidad y ubicación.

Personal Médico: Contiene datos de paramédicos y conductores, incluyendo credenciales y horarios.

Servicios: Almacena registros de atenciones médicas realizadas, con detalles sobre ubicación, tiempo de respuesta y estado del servicio.

Usuarios: Gestiona la información de quienes solicitan el servicio, con datos básicos de contacto y ubicación.

3. Explicación de los Primeros Endpoints

Endpoint para listar ambulancias: Permite obtener un listado de todas las ambulancias registradas, mostrando su estado y ubicación actual.

Endpoint para registrar una nueva ambulancia: Recibe los datos de una unidad nueva y la almacena en la base de datos.

Endpoint para actualizar el estado de una ambulancia: Se utiliza para cambiar la disponibilidad de una ambulancia en función de su estado operativo.

Endpoint para obtener detalles de un servicio específico: Recupera la información de un servicio de emergencia en particular, incluyendo detalles del personal involucrado y tiempos de respuesta.

Este documento proporciona una visión general del proyecto y su estructura. A medida que se agreguen nuevas funcionalidades, se ampliará la documentación correspondiente.