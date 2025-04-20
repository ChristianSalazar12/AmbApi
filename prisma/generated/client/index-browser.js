
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.IpsScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  direccion: 'direccion'
};

exports.Prisma.AmbulanciaScalarFieldEnum = {
  id: 'id',
  modelo: 'modelo',
  placa: 'placa',
  tipo: 'tipo',
  ipsId: 'ipsId'
};

exports.Prisma.ServicioScalarFieldEnum = {
  id: 'id',
  date: 'date',
  status: 'status',
  time_arrived: 'time_arrived',
  time_finish: 'time_finish',
  code_start: 'code_start',
  code_end: 'code_end',
  place_accident: 'place_accident',
  nro_informe: 'nro_informe',
  id_turno: 'id_turno',
  id_paciente: 'id_paciente',
  id_descripcion: 'id_descripcion'
};

exports.Prisma.ComplicacionScalarFieldEnum = {
  id: 'id',
  type: 'type',
  description: 'description',
  id_servicio: 'id_servicio'
};

exports.Prisma.PacientesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  last_name: 'last_name',
  document: 'document',
  entidad_salud: 'entidad_salud'
};

exports.Prisma.DescripcionScalarFieldEnum = {
  id: 'id',
  description: 'description',
  type_context: 'type_context',
  implicados: 'implicados'
};

exports.Prisma.TurnosScalarFieldEnum = {
  id: 'id',
  time_start: 'time_start',
  time_end: 'time_end',
  paramedicId: 'paramedicId',
  auxiliarId: 'auxiliarId',
  conductorId: 'conductorId',
  ambulanciaId: 'ambulanciaId'
};

exports.Prisma.ConductorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  last_name: 'last_name',
  document: 'document',
  no_licencia: 'no_licencia',
  no_fast_driver: 'no_fast_driver'
};

exports.Prisma.ParamedicoScalarFieldEnum = {
  id: 'id',
  name: 'name',
  last_name: 'last_name',
  document: 'document',
  tipo_medic: 'tipo_medic',
  no_ci_medic: 'no_ci_medic',
  id_capacitation: 'id_capacitation',
  password: 'password',
  role: 'role'
};

exports.Prisma.AuxiliarScalarFieldEnum = {
  id: 'id',
  name: 'name',
  last_name: 'last_name',
  document: 'document',
  no_ci_auxiliar: 'no_ci_auxiliar',
  no_ci_soporte_vital: 'no_ci_soporte_vital',
  password: 'password',
  role: 'role'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Status = exports.$Enums.Status = {
  PENDIENTE: 'PENDIENTE',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO'
};

exports.Typecomplicacion = exports.$Enums.Typecomplicacion = {
  RESPIRATORIA: 'RESPIRATORIA',
  CARDIOVASCULAR: 'CARDIOVASCULAR',
  TRAUMATISMO: 'TRAUMATISMO',
  NEUROLOGICO: 'NEUROLOGICO',
  TRAUMATICO: 'TRAUMATICO',
  INFECCIOSO: 'INFECCIOSO',
  OTRO: 'OTRO',
  NO_APLICA: 'NO_APLICA'
};

exports.TypeContext = exports.$Enums.TypeContext = {
  CLINICO: 'CLINICO',
  OPERATIVO: 'OPERATIVO'
};

exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.Prisma.ModelName = {
  Ips: 'Ips',
  Ambulancia: 'Ambulancia',
  Servicio: 'Servicio',
  Complicacion: 'Complicacion',
  Pacientes: 'Pacientes',
  Descripcion: 'Descripcion',
  Turnos: 'Turnos',
  Conductor: 'Conductor',
  Paramedico: 'Paramedico',
  Auxiliar: 'Auxiliar'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
