
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ips
 * 
 */
export type Ips = $Result.DefaultSelection<Prisma.$IpsPayload>
/**
 * Model Ambulancia
 * 
 */
export type Ambulancia = $Result.DefaultSelection<Prisma.$AmbulanciaPayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model Complicacion
 * 
 */
export type Complicacion = $Result.DefaultSelection<Prisma.$ComplicacionPayload>
/**
 * Model Pacientes
 * 
 */
export type Pacientes = $Result.DefaultSelection<Prisma.$PacientesPayload>
/**
 * Model Descripcion
 * 
 */
export type Descripcion = $Result.DefaultSelection<Prisma.$DescripcionPayload>
/**
 * Model Turnos
 * 
 */
export type Turnos = $Result.DefaultSelection<Prisma.$TurnosPayload>
/**
 * Model Conductor
 * 
 */
export type Conductor = $Result.DefaultSelection<Prisma.$ConductorPayload>
/**
 * Model Paramedico
 * 
 */
export type Paramedico = $Result.DefaultSelection<Prisma.$ParamedicoPayload>
/**
 * Model Auxiliar
 * 
 */
export type Auxiliar = $Result.DefaultSelection<Prisma.$AuxiliarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDIENTE: 'PENDIENTE',
  COMPLETADO: 'COMPLETADO',
  CANCELADO: 'CANCELADO'
};

export type Status = (typeof Status)[keyof typeof Status]


export const TypeServicio: {
  URGENCIA: 'URGENCIA',
  EMERGENCIA: 'EMERGENCIA',
  PROGRAMADO: 'PROGRAMADO'
};

export type TypeServicio = (typeof TypeServicio)[keyof typeof TypeServicio]


export const Typecomplicacion: {
  RESPIRATORIA: 'RESPIRATORIA',
  CARDIOVASCULAR: 'CARDIOVASCULAR',
  TRAUMATISMO: 'TRAUMATISMO',
  NEUROLOGICO: 'NEUROLOGICO',
  TRAUMATICO: 'TRAUMATICO',
  INFECCIOSO: 'INFECCIOSO',
  OTRO: 'OTRO',
  NO_APLICA: 'NO_APLICA'
};

export type Typecomplicacion = (typeof Typecomplicacion)[keyof typeof Typecomplicacion]


export const TypeContext: {
  CLINICO: 'CLINICO',
  OPERATIVO: 'OPERATIVO'
};

export type TypeContext = (typeof TypeContext)[keyof typeof TypeContext]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type TypeServicio = $Enums.TypeServicio

export const TypeServicio: typeof $Enums.TypeServicio

export type Typecomplicacion = $Enums.Typecomplicacion

export const Typecomplicacion: typeof $Enums.Typecomplicacion

export type TypeContext = $Enums.TypeContext

export const TypeContext: typeof $Enums.TypeContext

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ips
 * const ips = await prisma.ips.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ips
   * const ips = await prisma.ips.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ips`: Exposes CRUD operations for the **Ips** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ips
    * const ips = await prisma.ips.findMany()
    * ```
    */
  get ips(): Prisma.IpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ambulancia`: Exposes CRUD operations for the **Ambulancia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ambulancias
    * const ambulancias = await prisma.ambulancia.findMany()
    * ```
    */
  get ambulancia(): Prisma.AmbulanciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complicacion`: Exposes CRUD operations for the **Complicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complicacions
    * const complicacions = await prisma.complicacion.findMany()
    * ```
    */
  get complicacion(): Prisma.ComplicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **Pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.PacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.descripcion`: Exposes CRUD operations for the **Descripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Descripcions
    * const descripcions = await prisma.descripcion.findMany()
    * ```
    */
  get descripcion(): Prisma.DescripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turnos`: Exposes CRUD operations for the **Turnos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turnos.findMany()
    * ```
    */
  get turnos(): Prisma.TurnosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conductor`: Exposes CRUD operations for the **Conductor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conductors
    * const conductors = await prisma.conductor.findMany()
    * ```
    */
  get conductor(): Prisma.ConductorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paramedico`: Exposes CRUD operations for the **Paramedico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paramedicos
    * const paramedicos = await prisma.paramedico.findMany()
    * ```
    */
  get paramedico(): Prisma.ParamedicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auxiliar`: Exposes CRUD operations for the **Auxiliar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auxiliars
    * const auxiliars = await prisma.auxiliar.findMany()
    * ```
    */
  get auxiliar(): Prisma.AuxiliarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ips" | "ambulancia" | "servicio" | "complicacion" | "pacientes" | "descripcion" | "turnos" | "conductor" | "paramedico" | "auxiliar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ips: {
        payload: Prisma.$IpsPayload<ExtArgs>
        fields: Prisma.IpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>
          }
          findFirst: {
            args: Prisma.IpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>
          }
          findMany: {
            args: Prisma.IpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>[]
          }
          create: {
            args: Prisma.IpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>
          }
          createMany: {
            args: Prisma.IpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>[]
          }
          delete: {
            args: Prisma.IpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>
          }
          update: {
            args: Prisma.IpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>
          }
          deleteMany: {
            args: Prisma.IpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>[]
          }
          upsert: {
            args: Prisma.IpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpsPayload>
          }
          aggregate: {
            args: Prisma.IpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIps>
          }
          groupBy: {
            args: Prisma.IpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IpsCountArgs<ExtArgs>
            result: $Utils.Optional<IpsCountAggregateOutputType> | number
          }
        }
      }
      Ambulancia: {
        payload: Prisma.$AmbulanciaPayload<ExtArgs>
        fields: Prisma.AmbulanciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmbulanciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmbulanciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>
          }
          findFirst: {
            args: Prisma.AmbulanciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmbulanciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>
          }
          findMany: {
            args: Prisma.AmbulanciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>[]
          }
          create: {
            args: Prisma.AmbulanciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>
          }
          createMany: {
            args: Prisma.AmbulanciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmbulanciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>[]
          }
          delete: {
            args: Prisma.AmbulanciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>
          }
          update: {
            args: Prisma.AmbulanciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>
          }
          deleteMany: {
            args: Prisma.AmbulanciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmbulanciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmbulanciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>[]
          }
          upsert: {
            args: Prisma.AmbulanciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmbulanciaPayload>
          }
          aggregate: {
            args: Prisma.AmbulanciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmbulancia>
          }
          groupBy: {
            args: Prisma.AmbulanciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmbulanciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmbulanciaCountArgs<ExtArgs>
            result: $Utils.Optional<AmbulanciaCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      Complicacion: {
        payload: Prisma.$ComplicacionPayload<ExtArgs>
        fields: Prisma.ComplicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          findFirst: {
            args: Prisma.ComplicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          findMany: {
            args: Prisma.ComplicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>[]
          }
          create: {
            args: Prisma.ComplicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          createMany: {
            args: Prisma.ComplicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>[]
          }
          delete: {
            args: Prisma.ComplicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          update: {
            args: Prisma.ComplicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          deleteMany: {
            args: Prisma.ComplicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>[]
          }
          upsert: {
            args: Prisma.ComplicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplicacionPayload>
          }
          aggregate: {
            args: Prisma.ComplicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplicacion>
          }
          groupBy: {
            args: Prisma.ComplicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplicacionCountArgs<ExtArgs>
            result: $Utils.Optional<ComplicacionCountAggregateOutputType> | number
          }
        }
      }
      Pacientes: {
        payload: Prisma.$PacientesPayload<ExtArgs>
        fields: Prisma.PacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>
          }
          findFirst: {
            args: Prisma.PacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>
          }
          findMany: {
            args: Prisma.PacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>[]
          }
          create: {
            args: Prisma.PacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>
          }
          createMany: {
            args: Prisma.PacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>[]
          }
          delete: {
            args: Prisma.PacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>
          }
          update: {
            args: Prisma.PacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>
          }
          deleteMany: {
            args: Prisma.PacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>[]
          }
          upsert: {
            args: Prisma.PacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.PacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      Descripcion: {
        payload: Prisma.$DescripcionPayload<ExtArgs>
        fields: Prisma.DescripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DescripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DescripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          findFirst: {
            args: Prisma.DescripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DescripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          findMany: {
            args: Prisma.DescripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>[]
          }
          create: {
            args: Prisma.DescripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          createMany: {
            args: Prisma.DescripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DescripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>[]
          }
          delete: {
            args: Prisma.DescripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          update: {
            args: Prisma.DescripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          deleteMany: {
            args: Prisma.DescripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DescripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DescripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>[]
          }
          upsert: {
            args: Prisma.DescripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DescripcionPayload>
          }
          aggregate: {
            args: Prisma.DescripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDescripcion>
          }
          groupBy: {
            args: Prisma.DescripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DescripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DescripcionCountArgs<ExtArgs>
            result: $Utils.Optional<DescripcionCountAggregateOutputType> | number
          }
        }
      }
      Turnos: {
        payload: Prisma.$TurnosPayload<ExtArgs>
        fields: Prisma.TurnosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          findFirst: {
            args: Prisma.TurnosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          findMany: {
            args: Prisma.TurnosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>[]
          }
          create: {
            args: Prisma.TurnosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          createMany: {
            args: Prisma.TurnosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>[]
          }
          delete: {
            args: Prisma.TurnosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          update: {
            args: Prisma.TurnosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          deleteMany: {
            args: Prisma.TurnosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurnosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>[]
          }
          upsert: {
            args: Prisma.TurnosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          aggregate: {
            args: Prisma.TurnosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurnos>
          }
          groupBy: {
            args: Prisma.TurnosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnosGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnosCountArgs<ExtArgs>
            result: $Utils.Optional<TurnosCountAggregateOutputType> | number
          }
        }
      }
      Conductor: {
        payload: Prisma.$ConductorPayload<ExtArgs>
        fields: Prisma.ConductorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConductorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConductorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findFirst: {
            args: Prisma.ConductorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConductorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          findMany: {
            args: Prisma.ConductorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          create: {
            args: Prisma.ConductorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          createMany: {
            args: Prisma.ConductorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConductorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          delete: {
            args: Prisma.ConductorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          update: {
            args: Prisma.ConductorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          deleteMany: {
            args: Prisma.ConductorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConductorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConductorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>[]
          }
          upsert: {
            args: Prisma.ConductorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConductorPayload>
          }
          aggregate: {
            args: Prisma.ConductorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConductor>
          }
          groupBy: {
            args: Prisma.ConductorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConductorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConductorCountArgs<ExtArgs>
            result: $Utils.Optional<ConductorCountAggregateOutputType> | number
          }
        }
      }
      Paramedico: {
        payload: Prisma.$ParamedicoPayload<ExtArgs>
        fields: Prisma.ParamedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParamedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParamedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>
          }
          findFirst: {
            args: Prisma.ParamedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParamedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>
          }
          findMany: {
            args: Prisma.ParamedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>[]
          }
          create: {
            args: Prisma.ParamedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>
          }
          createMany: {
            args: Prisma.ParamedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParamedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>[]
          }
          delete: {
            args: Prisma.ParamedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>
          }
          update: {
            args: Prisma.ParamedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>
          }
          deleteMany: {
            args: Prisma.ParamedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParamedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParamedicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>[]
          }
          upsert: {
            args: Prisma.ParamedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParamedicoPayload>
          }
          aggregate: {
            args: Prisma.ParamedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParamedico>
          }
          groupBy: {
            args: Prisma.ParamedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParamedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParamedicoCountArgs<ExtArgs>
            result: $Utils.Optional<ParamedicoCountAggregateOutputType> | number
          }
        }
      }
      Auxiliar: {
        payload: Prisma.$AuxiliarPayload<ExtArgs>
        fields: Prisma.AuxiliarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuxiliarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuxiliarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>
          }
          findFirst: {
            args: Prisma.AuxiliarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuxiliarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>
          }
          findMany: {
            args: Prisma.AuxiliarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>[]
          }
          create: {
            args: Prisma.AuxiliarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>
          }
          createMany: {
            args: Prisma.AuxiliarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuxiliarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>[]
          }
          delete: {
            args: Prisma.AuxiliarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>
          }
          update: {
            args: Prisma.AuxiliarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>
          }
          deleteMany: {
            args: Prisma.AuxiliarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuxiliarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuxiliarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>[]
          }
          upsert: {
            args: Prisma.AuxiliarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuxiliarPayload>
          }
          aggregate: {
            args: Prisma.AuxiliarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuxiliar>
          }
          groupBy: {
            args: Prisma.AuxiliarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuxiliarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuxiliarCountArgs<ExtArgs>
            result: $Utils.Optional<AuxiliarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ips?: IpsOmit
    ambulancia?: AmbulanciaOmit
    servicio?: ServicioOmit
    complicacion?: ComplicacionOmit
    pacientes?: PacientesOmit
    descripcion?: DescripcionOmit
    turnos?: TurnosOmit
    conductor?: ConductorOmit
    paramedico?: ParamedicoOmit
    auxiliar?: AuxiliarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IpsCountOutputType
   */

  export type IpsCountOutputType = {
    ambulancias: number
  }

  export type IpsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambulancias?: boolean | IpsCountOutputTypeCountAmbulanciasArgs
  }

  // Custom InputTypes
  /**
   * IpsCountOutputType without action
   */
  export type IpsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpsCountOutputType
     */
    select?: IpsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IpsCountOutputType without action
   */
  export type IpsCountOutputTypeCountAmbulanciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbulanciaWhereInput
  }


  /**
   * Count Type AmbulanciaCountOutputType
   */

  export type AmbulanciaCountOutputType = {
    turnos: number
  }

  export type AmbulanciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | AmbulanciaCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * AmbulanciaCountOutputType without action
   */
  export type AmbulanciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanciaCountOutputType
     */
    select?: AmbulanciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmbulanciaCountOutputType without action
   */
  export type AmbulanciaCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnosWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    complicacion: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complicacion?: boolean | ServicioCountOutputTypeCountComplicacionArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountComplicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplicacionWhereInput
  }


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    servicios: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicios?: boolean | PacientesCountOutputTypeCountServiciosArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
  }


  /**
   * Count Type DescripcionCountOutputType
   */

  export type DescripcionCountOutputType = {
    servicio: number
  }

  export type DescripcionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | DescripcionCountOutputTypeCountServicioArgs
  }

  // Custom InputTypes
  /**
   * DescripcionCountOutputType without action
   */
  export type DescripcionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DescripcionCountOutputType
     */
    select?: DescripcionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DescripcionCountOutputType without action
   */
  export type DescripcionCountOutputTypeCountServicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
  }


  /**
   * Count Type TurnosCountOutputType
   */

  export type TurnosCountOutputType = {
    servicios: number
  }

  export type TurnosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicios?: boolean | TurnosCountOutputTypeCountServiciosArgs
  }

  // Custom InputTypes
  /**
   * TurnosCountOutputType without action
   */
  export type TurnosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnosCountOutputType
     */
    select?: TurnosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurnosCountOutputType without action
   */
  export type TurnosCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
  }


  /**
   * Count Type ConductorCountOutputType
   */

  export type ConductorCountOutputType = {
    turnos: number
  }

  export type ConductorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | ConductorCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConductorCountOutputType
     */
    select?: ConductorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConductorCountOutputType without action
   */
  export type ConductorCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnosWhereInput
  }


  /**
   * Count Type ParamedicoCountOutputType
   */

  export type ParamedicoCountOutputType = {
    turnos: number
  }

  export type ParamedicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | ParamedicoCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * ParamedicoCountOutputType without action
   */
  export type ParamedicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParamedicoCountOutputType
     */
    select?: ParamedicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParamedicoCountOutputType without action
   */
  export type ParamedicoCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnosWhereInput
  }


  /**
   * Count Type AuxiliarCountOutputType
   */

  export type AuxiliarCountOutputType = {
    turnos: number
  }

  export type AuxiliarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | AuxiliarCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * AuxiliarCountOutputType without action
   */
  export type AuxiliarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuxiliarCountOutputType
     */
    select?: AuxiliarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuxiliarCountOutputType without action
   */
  export type AuxiliarCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ips
   */

  export type AggregateIps = {
    _count: IpsCountAggregateOutputType | null
    _avg: IpsAvgAggregateOutputType | null
    _sum: IpsSumAggregateOutputType | null
    _min: IpsMinAggregateOutputType | null
    _max: IpsMaxAggregateOutputType | null
  }

  export type IpsAvgAggregateOutputType = {
    id: number | null
  }

  export type IpsSumAggregateOutputType = {
    id: number | null
  }

  export type IpsMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
  }

  export type IpsMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
  }

  export type IpsCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    _all: number
  }


  export type IpsAvgAggregateInputType = {
    id?: true
  }

  export type IpsSumAggregateInputType = {
    id?: true
  }

  export type IpsMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
  }

  export type IpsMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
  }

  export type IpsCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    _all?: true
  }

  export type IpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ips to aggregate.
     */
    where?: IpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     */
    orderBy?: IpsOrderByWithRelationInput | IpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ips
    **/
    _count?: true | IpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IpsMaxAggregateInputType
  }

  export type GetIpsAggregateType<T extends IpsAggregateArgs> = {
        [P in keyof T & keyof AggregateIps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIps[P]>
      : GetScalarType<T[P], AggregateIps[P]>
  }




  export type IpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IpsWhereInput
    orderBy?: IpsOrderByWithAggregationInput | IpsOrderByWithAggregationInput[]
    by: IpsScalarFieldEnum[] | IpsScalarFieldEnum
    having?: IpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IpsCountAggregateInputType | true
    _avg?: IpsAvgAggregateInputType
    _sum?: IpsSumAggregateInputType
    _min?: IpsMinAggregateInputType
    _max?: IpsMaxAggregateInputType
  }

  export type IpsGroupByOutputType = {
    id: number
    nombre: string
    direccion: string
    _count: IpsCountAggregateOutputType | null
    _avg: IpsAvgAggregateOutputType | null
    _sum: IpsSumAggregateOutputType | null
    _min: IpsMinAggregateOutputType | null
    _max: IpsMaxAggregateOutputType | null
  }

  type GetIpsGroupByPayload<T extends IpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IpsGroupByOutputType[P]>
            : GetScalarType<T[P], IpsGroupByOutputType[P]>
        }
      >
    >


  export type IpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    ambulancias?: boolean | Ips$ambulanciasArgs<ExtArgs>
    _count?: boolean | IpsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ips"]>

  export type IpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["ips"]>

  export type IpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }, ExtArgs["result"]["ips"]>

  export type IpsSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
  }

  export type IpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion", ExtArgs["result"]["ips"]>
  export type IpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ambulancias?: boolean | Ips$ambulanciasArgs<ExtArgs>
    _count?: boolean | IpsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IpsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IpsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ips"
    objects: {
      ambulancias: Prisma.$AmbulanciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string
    }, ExtArgs["result"]["ips"]>
    composites: {}
  }

  type IpsGetPayload<S extends boolean | null | undefined | IpsDefaultArgs> = $Result.GetResult<Prisma.$IpsPayload, S>

  type IpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IpsCountAggregateInputType | true
    }

  export interface IpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ips'], meta: { name: 'Ips' } }
    /**
     * Find zero or one Ips that matches the filter.
     * @param {IpsFindUniqueArgs} args - Arguments to find a Ips
     * @example
     * // Get one Ips
     * const ips = await prisma.ips.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IpsFindUniqueArgs>(args: SelectSubset<T, IpsFindUniqueArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ips that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IpsFindUniqueOrThrowArgs} args - Arguments to find a Ips
     * @example
     * // Get one Ips
     * const ips = await prisma.ips.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IpsFindUniqueOrThrowArgs>(args: SelectSubset<T, IpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsFindFirstArgs} args - Arguments to find a Ips
     * @example
     * // Get one Ips
     * const ips = await prisma.ips.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IpsFindFirstArgs>(args?: SelectSubset<T, IpsFindFirstArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ips that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsFindFirstOrThrowArgs} args - Arguments to find a Ips
     * @example
     * // Get one Ips
     * const ips = await prisma.ips.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IpsFindFirstOrThrowArgs>(args?: SelectSubset<T, IpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ips
     * const ips = await prisma.ips.findMany()
     * 
     * // Get first 10 Ips
     * const ips = await prisma.ips.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ipsWithIdOnly = await prisma.ips.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IpsFindManyArgs>(args?: SelectSubset<T, IpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ips.
     * @param {IpsCreateArgs} args - Arguments to create a Ips.
     * @example
     * // Create one Ips
     * const Ips = await prisma.ips.create({
     *   data: {
     *     // ... data to create a Ips
     *   }
     * })
     * 
     */
    create<T extends IpsCreateArgs>(args: SelectSubset<T, IpsCreateArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ips.
     * @param {IpsCreateManyArgs} args - Arguments to create many Ips.
     * @example
     * // Create many Ips
     * const ips = await prisma.ips.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IpsCreateManyArgs>(args?: SelectSubset<T, IpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ips and returns the data saved in the database.
     * @param {IpsCreateManyAndReturnArgs} args - Arguments to create many Ips.
     * @example
     * // Create many Ips
     * const ips = await prisma.ips.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ips and only return the `id`
     * const ipsWithIdOnly = await prisma.ips.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IpsCreateManyAndReturnArgs>(args?: SelectSubset<T, IpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ips.
     * @param {IpsDeleteArgs} args - Arguments to delete one Ips.
     * @example
     * // Delete one Ips
     * const Ips = await prisma.ips.delete({
     *   where: {
     *     // ... filter to delete one Ips
     *   }
     * })
     * 
     */
    delete<T extends IpsDeleteArgs>(args: SelectSubset<T, IpsDeleteArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ips.
     * @param {IpsUpdateArgs} args - Arguments to update one Ips.
     * @example
     * // Update one Ips
     * const ips = await prisma.ips.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IpsUpdateArgs>(args: SelectSubset<T, IpsUpdateArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ips.
     * @param {IpsDeleteManyArgs} args - Arguments to filter Ips to delete.
     * @example
     * // Delete a few Ips
     * const { count } = await prisma.ips.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IpsDeleteManyArgs>(args?: SelectSubset<T, IpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ips
     * const ips = await prisma.ips.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IpsUpdateManyArgs>(args: SelectSubset<T, IpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ips and returns the data updated in the database.
     * @param {IpsUpdateManyAndReturnArgs} args - Arguments to update many Ips.
     * @example
     * // Update many Ips
     * const ips = await prisma.ips.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ips and only return the `id`
     * const ipsWithIdOnly = await prisma.ips.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IpsUpdateManyAndReturnArgs>(args: SelectSubset<T, IpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ips.
     * @param {IpsUpsertArgs} args - Arguments to update or create a Ips.
     * @example
     * // Update or create a Ips
     * const ips = await prisma.ips.upsert({
     *   create: {
     *     // ... data to create a Ips
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ips we want to update
     *   }
     * })
     */
    upsert<T extends IpsUpsertArgs>(args: SelectSubset<T, IpsUpsertArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsCountArgs} args - Arguments to filter Ips to count.
     * @example
     * // Count the number of Ips
     * const count = await prisma.ips.count({
     *   where: {
     *     // ... the filter for the Ips we want to count
     *   }
     * })
    **/
    count<T extends IpsCountArgs>(
      args?: Subset<T, IpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IpsAggregateArgs>(args: Subset<T, IpsAggregateArgs>): Prisma.PrismaPromise<GetIpsAggregateType<T>>

    /**
     * Group by Ips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IpsGroupByArgs['orderBy'] }
        : { orderBy?: IpsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ips model
   */
  readonly fields: IpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ips.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ambulancias<T extends Ips$ambulanciasArgs<ExtArgs> = {}>(args?: Subset<T, Ips$ambulanciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ips model
   */
  interface IpsFieldRefs {
    readonly id: FieldRef<"Ips", 'Int'>
    readonly nombre: FieldRef<"Ips", 'String'>
    readonly direccion: FieldRef<"Ips", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ips findUnique
   */
  export type IpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * Filter, which Ips to fetch.
     */
    where: IpsWhereUniqueInput
  }

  /**
   * Ips findUniqueOrThrow
   */
  export type IpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * Filter, which Ips to fetch.
     */
    where: IpsWhereUniqueInput
  }

  /**
   * Ips findFirst
   */
  export type IpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * Filter, which Ips to fetch.
     */
    where?: IpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     */
    orderBy?: IpsOrderByWithRelationInput | IpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ips.
     */
    cursor?: IpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ips.
     */
    distinct?: IpsScalarFieldEnum | IpsScalarFieldEnum[]
  }

  /**
   * Ips findFirstOrThrow
   */
  export type IpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * Filter, which Ips to fetch.
     */
    where?: IpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     */
    orderBy?: IpsOrderByWithRelationInput | IpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ips.
     */
    cursor?: IpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ips.
     */
    distinct?: IpsScalarFieldEnum | IpsScalarFieldEnum[]
  }

  /**
   * Ips findMany
   */
  export type IpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * Filter, which Ips to fetch.
     */
    where?: IpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ips to fetch.
     */
    orderBy?: IpsOrderByWithRelationInput | IpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ips.
     */
    cursor?: IpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ips.
     */
    skip?: number
    distinct?: IpsScalarFieldEnum | IpsScalarFieldEnum[]
  }

  /**
   * Ips create
   */
  export type IpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ips.
     */
    data: XOR<IpsCreateInput, IpsUncheckedCreateInput>
  }

  /**
   * Ips createMany
   */
  export type IpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ips.
     */
    data: IpsCreateManyInput | IpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ips createManyAndReturn
   */
  export type IpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * The data used to create many Ips.
     */
    data: IpsCreateManyInput | IpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ips update
   */
  export type IpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ips.
     */
    data: XOR<IpsUpdateInput, IpsUncheckedUpdateInput>
    /**
     * Choose, which Ips to update.
     */
    where: IpsWhereUniqueInput
  }

  /**
   * Ips updateMany
   */
  export type IpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ips.
     */
    data: XOR<IpsUpdateManyMutationInput, IpsUncheckedUpdateManyInput>
    /**
     * Filter which Ips to update
     */
    where?: IpsWhereInput
    /**
     * Limit how many Ips to update.
     */
    limit?: number
  }

  /**
   * Ips updateManyAndReturn
   */
  export type IpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * The data used to update Ips.
     */
    data: XOR<IpsUpdateManyMutationInput, IpsUncheckedUpdateManyInput>
    /**
     * Filter which Ips to update
     */
    where?: IpsWhereInput
    /**
     * Limit how many Ips to update.
     */
    limit?: number
  }

  /**
   * Ips upsert
   */
  export type IpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ips to update in case it exists.
     */
    where: IpsWhereUniqueInput
    /**
     * In case the Ips found by the `where` argument doesn't exist, create a new Ips with this data.
     */
    create: XOR<IpsCreateInput, IpsUncheckedCreateInput>
    /**
     * In case the Ips was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IpsUpdateInput, IpsUncheckedUpdateInput>
  }

  /**
   * Ips delete
   */
  export type IpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
    /**
     * Filter which Ips to delete.
     */
    where: IpsWhereUniqueInput
  }

  /**
   * Ips deleteMany
   */
  export type IpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ips to delete
     */
    where?: IpsWhereInput
    /**
     * Limit how many Ips to delete.
     */
    limit?: number
  }

  /**
   * Ips.ambulancias
   */
  export type Ips$ambulanciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    where?: AmbulanciaWhereInput
    orderBy?: AmbulanciaOrderByWithRelationInput | AmbulanciaOrderByWithRelationInput[]
    cursor?: AmbulanciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmbulanciaScalarFieldEnum | AmbulanciaScalarFieldEnum[]
  }

  /**
   * Ips without action
   */
  export type IpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ips
     */
    select?: IpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ips
     */
    omit?: IpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IpsInclude<ExtArgs> | null
  }


  /**
   * Model Ambulancia
   */

  export type AggregateAmbulancia = {
    _count: AmbulanciaCountAggregateOutputType | null
    _avg: AmbulanciaAvgAggregateOutputType | null
    _sum: AmbulanciaSumAggregateOutputType | null
    _min: AmbulanciaMinAggregateOutputType | null
    _max: AmbulanciaMaxAggregateOutputType | null
  }

  export type AmbulanciaAvgAggregateOutputType = {
    id: number | null
    ipsId: number | null
  }

  export type AmbulanciaSumAggregateOutputType = {
    id: number | null
    ipsId: number | null
  }

  export type AmbulanciaMinAggregateOutputType = {
    id: number | null
    modelo: string | null
    placa: string | null
    tipo: string | null
    ipsId: number | null
  }

  export type AmbulanciaMaxAggregateOutputType = {
    id: number | null
    modelo: string | null
    placa: string | null
    tipo: string | null
    ipsId: number | null
  }

  export type AmbulanciaCountAggregateOutputType = {
    id: number
    modelo: number
    placa: number
    tipo: number
    ipsId: number
    _all: number
  }


  export type AmbulanciaAvgAggregateInputType = {
    id?: true
    ipsId?: true
  }

  export type AmbulanciaSumAggregateInputType = {
    id?: true
    ipsId?: true
  }

  export type AmbulanciaMinAggregateInputType = {
    id?: true
    modelo?: true
    placa?: true
    tipo?: true
    ipsId?: true
  }

  export type AmbulanciaMaxAggregateInputType = {
    id?: true
    modelo?: true
    placa?: true
    tipo?: true
    ipsId?: true
  }

  export type AmbulanciaCountAggregateInputType = {
    id?: true
    modelo?: true
    placa?: true
    tipo?: true
    ipsId?: true
    _all?: true
  }

  export type AmbulanciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ambulancia to aggregate.
     */
    where?: AmbulanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambulancias to fetch.
     */
    orderBy?: AmbulanciaOrderByWithRelationInput | AmbulanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmbulanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambulancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambulancias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ambulancias
    **/
    _count?: true | AmbulanciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmbulanciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmbulanciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmbulanciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmbulanciaMaxAggregateInputType
  }

  export type GetAmbulanciaAggregateType<T extends AmbulanciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAmbulancia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmbulancia[P]>
      : GetScalarType<T[P], AggregateAmbulancia[P]>
  }




  export type AmbulanciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmbulanciaWhereInput
    orderBy?: AmbulanciaOrderByWithAggregationInput | AmbulanciaOrderByWithAggregationInput[]
    by: AmbulanciaScalarFieldEnum[] | AmbulanciaScalarFieldEnum
    having?: AmbulanciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmbulanciaCountAggregateInputType | true
    _avg?: AmbulanciaAvgAggregateInputType
    _sum?: AmbulanciaSumAggregateInputType
    _min?: AmbulanciaMinAggregateInputType
    _max?: AmbulanciaMaxAggregateInputType
  }

  export type AmbulanciaGroupByOutputType = {
    id: number
    modelo: string
    placa: string
    tipo: string
    ipsId: number
    _count: AmbulanciaCountAggregateOutputType | null
    _avg: AmbulanciaAvgAggregateOutputType | null
    _sum: AmbulanciaSumAggregateOutputType | null
    _min: AmbulanciaMinAggregateOutputType | null
    _max: AmbulanciaMaxAggregateOutputType | null
  }

  type GetAmbulanciaGroupByPayload<T extends AmbulanciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmbulanciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmbulanciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmbulanciaGroupByOutputType[P]>
            : GetScalarType<T[P], AmbulanciaGroupByOutputType[P]>
        }
      >
    >


  export type AmbulanciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    placa?: boolean
    tipo?: boolean
    ipsId?: boolean
    ips?: boolean | IpsDefaultArgs<ExtArgs>
    turnos?: boolean | Ambulancia$turnosArgs<ExtArgs>
    _count?: boolean | AmbulanciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambulancia"]>

  export type AmbulanciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    placa?: boolean
    tipo?: boolean
    ipsId?: boolean
    ips?: boolean | IpsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambulancia"]>

  export type AmbulanciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    placa?: boolean
    tipo?: boolean
    ipsId?: boolean
    ips?: boolean | IpsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ambulancia"]>

  export type AmbulanciaSelectScalar = {
    id?: boolean
    modelo?: boolean
    placa?: boolean
    tipo?: boolean
    ipsId?: boolean
  }

  export type AmbulanciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelo" | "placa" | "tipo" | "ipsId", ExtArgs["result"]["ambulancia"]>
  export type AmbulanciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ips?: boolean | IpsDefaultArgs<ExtArgs>
    turnos?: boolean | Ambulancia$turnosArgs<ExtArgs>
    _count?: boolean | AmbulanciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmbulanciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ips?: boolean | IpsDefaultArgs<ExtArgs>
  }
  export type AmbulanciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ips?: boolean | IpsDefaultArgs<ExtArgs>
  }

  export type $AmbulanciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ambulancia"
    objects: {
      ips: Prisma.$IpsPayload<ExtArgs>
      turnos: Prisma.$TurnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelo: string
      placa: string
      tipo: string
      ipsId: number
    }, ExtArgs["result"]["ambulancia"]>
    composites: {}
  }

  type AmbulanciaGetPayload<S extends boolean | null | undefined | AmbulanciaDefaultArgs> = $Result.GetResult<Prisma.$AmbulanciaPayload, S>

  type AmbulanciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmbulanciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmbulanciaCountAggregateInputType | true
    }

  export interface AmbulanciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ambulancia'], meta: { name: 'Ambulancia' } }
    /**
     * Find zero or one Ambulancia that matches the filter.
     * @param {AmbulanciaFindUniqueArgs} args - Arguments to find a Ambulancia
     * @example
     * // Get one Ambulancia
     * const ambulancia = await prisma.ambulancia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbulanciaFindUniqueArgs>(args: SelectSubset<T, AmbulanciaFindUniqueArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ambulancia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbulanciaFindUniqueOrThrowArgs} args - Arguments to find a Ambulancia
     * @example
     * // Get one Ambulancia
     * const ambulancia = await prisma.ambulancia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbulanciaFindUniqueOrThrowArgs>(args: SelectSubset<T, AmbulanciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ambulancia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaFindFirstArgs} args - Arguments to find a Ambulancia
     * @example
     * // Get one Ambulancia
     * const ambulancia = await prisma.ambulancia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbulanciaFindFirstArgs>(args?: SelectSubset<T, AmbulanciaFindFirstArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ambulancia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaFindFirstOrThrowArgs} args - Arguments to find a Ambulancia
     * @example
     * // Get one Ambulancia
     * const ambulancia = await prisma.ambulancia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbulanciaFindFirstOrThrowArgs>(args?: SelectSubset<T, AmbulanciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ambulancias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ambulancias
     * const ambulancias = await prisma.ambulancia.findMany()
     * 
     * // Get first 10 Ambulancias
     * const ambulancias = await prisma.ambulancia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ambulanciaWithIdOnly = await prisma.ambulancia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmbulanciaFindManyArgs>(args?: SelectSubset<T, AmbulanciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ambulancia.
     * @param {AmbulanciaCreateArgs} args - Arguments to create a Ambulancia.
     * @example
     * // Create one Ambulancia
     * const Ambulancia = await prisma.ambulancia.create({
     *   data: {
     *     // ... data to create a Ambulancia
     *   }
     * })
     * 
     */
    create<T extends AmbulanciaCreateArgs>(args: SelectSubset<T, AmbulanciaCreateArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ambulancias.
     * @param {AmbulanciaCreateManyArgs} args - Arguments to create many Ambulancias.
     * @example
     * // Create many Ambulancias
     * const ambulancia = await prisma.ambulancia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmbulanciaCreateManyArgs>(args?: SelectSubset<T, AmbulanciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ambulancias and returns the data saved in the database.
     * @param {AmbulanciaCreateManyAndReturnArgs} args - Arguments to create many Ambulancias.
     * @example
     * // Create many Ambulancias
     * const ambulancia = await prisma.ambulancia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ambulancias and only return the `id`
     * const ambulanciaWithIdOnly = await prisma.ambulancia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmbulanciaCreateManyAndReturnArgs>(args?: SelectSubset<T, AmbulanciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ambulancia.
     * @param {AmbulanciaDeleteArgs} args - Arguments to delete one Ambulancia.
     * @example
     * // Delete one Ambulancia
     * const Ambulancia = await prisma.ambulancia.delete({
     *   where: {
     *     // ... filter to delete one Ambulancia
     *   }
     * })
     * 
     */
    delete<T extends AmbulanciaDeleteArgs>(args: SelectSubset<T, AmbulanciaDeleteArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ambulancia.
     * @param {AmbulanciaUpdateArgs} args - Arguments to update one Ambulancia.
     * @example
     * // Update one Ambulancia
     * const ambulancia = await prisma.ambulancia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmbulanciaUpdateArgs>(args: SelectSubset<T, AmbulanciaUpdateArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ambulancias.
     * @param {AmbulanciaDeleteManyArgs} args - Arguments to filter Ambulancias to delete.
     * @example
     * // Delete a few Ambulancias
     * const { count } = await prisma.ambulancia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmbulanciaDeleteManyArgs>(args?: SelectSubset<T, AmbulanciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ambulancias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ambulancias
     * const ambulancia = await prisma.ambulancia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmbulanciaUpdateManyArgs>(args: SelectSubset<T, AmbulanciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ambulancias and returns the data updated in the database.
     * @param {AmbulanciaUpdateManyAndReturnArgs} args - Arguments to update many Ambulancias.
     * @example
     * // Update many Ambulancias
     * const ambulancia = await prisma.ambulancia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ambulancias and only return the `id`
     * const ambulanciaWithIdOnly = await prisma.ambulancia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmbulanciaUpdateManyAndReturnArgs>(args: SelectSubset<T, AmbulanciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ambulancia.
     * @param {AmbulanciaUpsertArgs} args - Arguments to update or create a Ambulancia.
     * @example
     * // Update or create a Ambulancia
     * const ambulancia = await prisma.ambulancia.upsert({
     *   create: {
     *     // ... data to create a Ambulancia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ambulancia we want to update
     *   }
     * })
     */
    upsert<T extends AmbulanciaUpsertArgs>(args: SelectSubset<T, AmbulanciaUpsertArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ambulancias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaCountArgs} args - Arguments to filter Ambulancias to count.
     * @example
     * // Count the number of Ambulancias
     * const count = await prisma.ambulancia.count({
     *   where: {
     *     // ... the filter for the Ambulancias we want to count
     *   }
     * })
    **/
    count<T extends AmbulanciaCountArgs>(
      args?: Subset<T, AmbulanciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmbulanciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ambulancia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmbulanciaAggregateArgs>(args: Subset<T, AmbulanciaAggregateArgs>): Prisma.PrismaPromise<GetAmbulanciaAggregateType<T>>

    /**
     * Group by Ambulancia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmbulanciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmbulanciaGroupByArgs['orderBy'] }
        : { orderBy?: AmbulanciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmbulanciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbulanciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ambulancia model
   */
  readonly fields: AmbulanciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ambulancia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmbulanciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ips<T extends IpsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IpsDefaultArgs<ExtArgs>>): Prisma__IpsClient<$Result.GetResult<Prisma.$IpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turnos<T extends Ambulancia$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Ambulancia$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ambulancia model
   */
  interface AmbulanciaFieldRefs {
    readonly id: FieldRef<"Ambulancia", 'Int'>
    readonly modelo: FieldRef<"Ambulancia", 'String'>
    readonly placa: FieldRef<"Ambulancia", 'String'>
    readonly tipo: FieldRef<"Ambulancia", 'String'>
    readonly ipsId: FieldRef<"Ambulancia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ambulancia findUnique
   */
  export type AmbulanciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * Filter, which Ambulancia to fetch.
     */
    where: AmbulanciaWhereUniqueInput
  }

  /**
   * Ambulancia findUniqueOrThrow
   */
  export type AmbulanciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * Filter, which Ambulancia to fetch.
     */
    where: AmbulanciaWhereUniqueInput
  }

  /**
   * Ambulancia findFirst
   */
  export type AmbulanciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * Filter, which Ambulancia to fetch.
     */
    where?: AmbulanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambulancias to fetch.
     */
    orderBy?: AmbulanciaOrderByWithRelationInput | AmbulanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ambulancias.
     */
    cursor?: AmbulanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambulancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambulancias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ambulancias.
     */
    distinct?: AmbulanciaScalarFieldEnum | AmbulanciaScalarFieldEnum[]
  }

  /**
   * Ambulancia findFirstOrThrow
   */
  export type AmbulanciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * Filter, which Ambulancia to fetch.
     */
    where?: AmbulanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambulancias to fetch.
     */
    orderBy?: AmbulanciaOrderByWithRelationInput | AmbulanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ambulancias.
     */
    cursor?: AmbulanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambulancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambulancias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ambulancias.
     */
    distinct?: AmbulanciaScalarFieldEnum | AmbulanciaScalarFieldEnum[]
  }

  /**
   * Ambulancia findMany
   */
  export type AmbulanciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * Filter, which Ambulancias to fetch.
     */
    where?: AmbulanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ambulancias to fetch.
     */
    orderBy?: AmbulanciaOrderByWithRelationInput | AmbulanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ambulancias.
     */
    cursor?: AmbulanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ambulancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ambulancias.
     */
    skip?: number
    distinct?: AmbulanciaScalarFieldEnum | AmbulanciaScalarFieldEnum[]
  }

  /**
   * Ambulancia create
   */
  export type AmbulanciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Ambulancia.
     */
    data: XOR<AmbulanciaCreateInput, AmbulanciaUncheckedCreateInput>
  }

  /**
   * Ambulancia createMany
   */
  export type AmbulanciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ambulancias.
     */
    data: AmbulanciaCreateManyInput | AmbulanciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ambulancia createManyAndReturn
   */
  export type AmbulanciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * The data used to create many Ambulancias.
     */
    data: AmbulanciaCreateManyInput | AmbulanciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ambulancia update
   */
  export type AmbulanciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Ambulancia.
     */
    data: XOR<AmbulanciaUpdateInput, AmbulanciaUncheckedUpdateInput>
    /**
     * Choose, which Ambulancia to update.
     */
    where: AmbulanciaWhereUniqueInput
  }

  /**
   * Ambulancia updateMany
   */
  export type AmbulanciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ambulancias.
     */
    data: XOR<AmbulanciaUpdateManyMutationInput, AmbulanciaUncheckedUpdateManyInput>
    /**
     * Filter which Ambulancias to update
     */
    where?: AmbulanciaWhereInput
    /**
     * Limit how many Ambulancias to update.
     */
    limit?: number
  }

  /**
   * Ambulancia updateManyAndReturn
   */
  export type AmbulanciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * The data used to update Ambulancias.
     */
    data: XOR<AmbulanciaUpdateManyMutationInput, AmbulanciaUncheckedUpdateManyInput>
    /**
     * Filter which Ambulancias to update
     */
    where?: AmbulanciaWhereInput
    /**
     * Limit how many Ambulancias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ambulancia upsert
   */
  export type AmbulanciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Ambulancia to update in case it exists.
     */
    where: AmbulanciaWhereUniqueInput
    /**
     * In case the Ambulancia found by the `where` argument doesn't exist, create a new Ambulancia with this data.
     */
    create: XOR<AmbulanciaCreateInput, AmbulanciaUncheckedCreateInput>
    /**
     * In case the Ambulancia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmbulanciaUpdateInput, AmbulanciaUncheckedUpdateInput>
  }

  /**
   * Ambulancia delete
   */
  export type AmbulanciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
    /**
     * Filter which Ambulancia to delete.
     */
    where: AmbulanciaWhereUniqueInput
  }

  /**
   * Ambulancia deleteMany
   */
  export type AmbulanciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ambulancias to delete
     */
    where?: AmbulanciaWhereInput
    /**
     * Limit how many Ambulancias to delete.
     */
    limit?: number
  }

  /**
   * Ambulancia.turnos
   */
  export type Ambulancia$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    where?: TurnosWhereInput
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    cursor?: TurnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Ambulancia without action
   */
  export type AmbulanciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulancia
     */
    select?: AmbulanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ambulancia
     */
    omit?: AmbulanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmbulanciaInclude<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id: number | null
    id_turno: number | null
    id_paciente: number | null
    id_descripcion: number | null
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
    id_turno: number | null
    id_paciente: number | null
    id_descripcion: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    date: Date | null
    status: $Enums.Status | null
    time_arrived: Date | null
    time_finish: Date | null
    code_start: string | null
    code_end: string | null
    place_accident: string | null
    nro_informe: string | null
    id_turno: number | null
    id_paciente: number | null
    id_descripcion: number | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    status: $Enums.Status | null
    time_arrived: Date | null
    time_finish: Date | null
    code_start: string | null
    code_end: string | null
    place_accident: string | null
    nro_informe: string | null
    id_turno: number | null
    id_paciente: number | null
    id_descripcion: number | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    date: number
    status: number
    time_arrived: number
    time_finish: number
    code_start: number
    code_end: number
    place_accident: number
    nro_informe: number
    id_turno: number
    id_paciente: number
    id_descripcion: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
    id_turno?: true
    id_paciente?: true
    id_descripcion?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
    id_turno?: true
    id_paciente?: true
    id_descripcion?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    time_arrived?: true
    time_finish?: true
    code_start?: true
    code_end?: true
    place_accident?: true
    nro_informe?: true
    id_turno?: true
    id_paciente?: true
    id_descripcion?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    time_arrived?: true
    time_finish?: true
    code_start?: true
    code_end?: true
    place_accident?: true
    nro_informe?: true
    id_turno?: true
    id_paciente?: true
    id_descripcion?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    time_arrived?: true
    time_finish?: true
    code_start?: true
    code_end?: true
    place_accident?: true
    nro_informe?: true
    id_turno?: true
    id_paciente?: true
    id_descripcion?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: number
    date: Date
    status: $Enums.Status
    time_arrived: Date
    time_finish: Date
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_paciente: number
    id_descripcion: number
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_turno?: boolean
    id_paciente?: boolean
    id_descripcion?: boolean
    complicacion?: boolean | Servicio$complicacionArgs<ExtArgs>
    turno?: boolean | TurnosDefaultArgs<ExtArgs>
    paciente?: boolean | PacientesDefaultArgs<ExtArgs>
    descripcion?: boolean | DescripcionDefaultArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_turno?: boolean
    id_paciente?: boolean
    id_descripcion?: boolean
    turno?: boolean | TurnosDefaultArgs<ExtArgs>
    paciente?: boolean | PacientesDefaultArgs<ExtArgs>
    descripcion?: boolean | DescripcionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_turno?: boolean
    id_paciente?: boolean
    id_descripcion?: boolean
    turno?: boolean | TurnosDefaultArgs<ExtArgs>
    paciente?: boolean | PacientesDefaultArgs<ExtArgs>
    descripcion?: boolean | DescripcionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    time_arrived?: boolean
    time_finish?: boolean
    code_start?: boolean
    code_end?: boolean
    place_accident?: boolean
    nro_informe?: boolean
    id_turno?: boolean
    id_paciente?: boolean
    id_descripcion?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "time_arrived" | "time_finish" | "code_start" | "code_end" | "place_accident" | "nro_informe" | "id_turno" | "id_paciente" | "id_descripcion", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complicacion?: boolean | Servicio$complicacionArgs<ExtArgs>
    turno?: boolean | TurnosDefaultArgs<ExtArgs>
    paciente?: boolean | PacientesDefaultArgs<ExtArgs>
    descripcion?: boolean | DescripcionDefaultArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnosDefaultArgs<ExtArgs>
    paciente?: boolean | PacientesDefaultArgs<ExtArgs>
    descripcion?: boolean | DescripcionDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnosDefaultArgs<ExtArgs>
    paciente?: boolean | PacientesDefaultArgs<ExtArgs>
    descripcion?: boolean | DescripcionDefaultArgs<ExtArgs>
  }

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      complicacion: Prisma.$ComplicacionPayload<ExtArgs>[]
      turno: Prisma.$TurnosPayload<ExtArgs>
      paciente: Prisma.$PacientesPayload<ExtArgs>
      descripcion: Prisma.$DescripcionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      status: $Enums.Status
      time_arrived: Date
      time_finish: Date
      code_start: string
      code_end: string
      place_accident: string
      nro_informe: string
      id_turno: number
      id_paciente: number
      id_descripcion: number
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {ServicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {ServicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complicacion<T extends Servicio$complicacionArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$complicacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turno<T extends TurnosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurnosDefaultArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacientesDefaultArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    descripcion<T extends DescripcionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DescripcionDefaultArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'Int'>
    readonly date: FieldRef<"Servicio", 'DateTime'>
    readonly status: FieldRef<"Servicio", 'Status'>
    readonly time_arrived: FieldRef<"Servicio", 'DateTime'>
    readonly time_finish: FieldRef<"Servicio", 'DateTime'>
    readonly code_start: FieldRef<"Servicio", 'String'>
    readonly code_end: FieldRef<"Servicio", 'String'>
    readonly place_accident: FieldRef<"Servicio", 'String'>
    readonly nro_informe: FieldRef<"Servicio", 'String'>
    readonly id_turno: FieldRef<"Servicio", 'Int'>
    readonly id_paciente: FieldRef<"Servicio", 'Int'>
    readonly id_descripcion: FieldRef<"Servicio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio createManyAndReturn
   */
  export type ServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio updateManyAndReturn
   */
  export type ServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.complicacion
   */
  export type Servicio$complicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    where?: ComplicacionWhereInput
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    cursor?: ComplicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model Complicacion
   */

  export type AggregateComplicacion = {
    _count: ComplicacionCountAggregateOutputType | null
    _avg: ComplicacionAvgAggregateOutputType | null
    _sum: ComplicacionSumAggregateOutputType | null
    _min: ComplicacionMinAggregateOutputType | null
    _max: ComplicacionMaxAggregateOutputType | null
  }

  export type ComplicacionAvgAggregateOutputType = {
    id: number | null
    id_servicio: number | null
  }

  export type ComplicacionSumAggregateOutputType = {
    id: number | null
    id_servicio: number | null
  }

  export type ComplicacionMinAggregateOutputType = {
    id: number | null
    type: $Enums.Typecomplicacion | null
    description: string | null
    id_servicio: number | null
  }

  export type ComplicacionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.Typecomplicacion | null
    description: string | null
    id_servicio: number | null
  }

  export type ComplicacionCountAggregateOutputType = {
    id: number
    type: number
    description: number
    id_servicio: number
    _all: number
  }


  export type ComplicacionAvgAggregateInputType = {
    id?: true
    id_servicio?: true
  }

  export type ComplicacionSumAggregateInputType = {
    id?: true
    id_servicio?: true
  }

  export type ComplicacionMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    id_servicio?: true
  }

  export type ComplicacionMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    id_servicio?: true
  }

  export type ComplicacionCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    id_servicio?: true
    _all?: true
  }

  export type ComplicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complicacion to aggregate.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complicacions
    **/
    _count?: true | ComplicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplicacionMaxAggregateInputType
  }

  export type GetComplicacionAggregateType<T extends ComplicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateComplicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplicacion[P]>
      : GetScalarType<T[P], AggregateComplicacion[P]>
  }




  export type ComplicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplicacionWhereInput
    orderBy?: ComplicacionOrderByWithAggregationInput | ComplicacionOrderByWithAggregationInput[]
    by: ComplicacionScalarFieldEnum[] | ComplicacionScalarFieldEnum
    having?: ComplicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplicacionCountAggregateInputType | true
    _avg?: ComplicacionAvgAggregateInputType
    _sum?: ComplicacionSumAggregateInputType
    _min?: ComplicacionMinAggregateInputType
    _max?: ComplicacionMaxAggregateInputType
  }

  export type ComplicacionGroupByOutputType = {
    id: number
    type: $Enums.Typecomplicacion
    description: string
    id_servicio: number
    _count: ComplicacionCountAggregateOutputType | null
    _avg: ComplicacionAvgAggregateOutputType | null
    _sum: ComplicacionSumAggregateOutputType | null
    _min: ComplicacionMinAggregateOutputType | null
    _max: ComplicacionMaxAggregateOutputType | null
  }

  type GetComplicacionGroupByPayload<T extends ComplicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplicacionGroupByOutputType[P]>
            : GetScalarType<T[P], ComplicacionGroupByOutputType[P]>
        }
      >
    >


  export type ComplicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complicacion"]>

  export type ComplicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complicacion"]>

  export type ComplicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complicacion"]>

  export type ComplicacionSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    id_servicio?: boolean
  }

  export type ComplicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "id_servicio", ExtArgs["result"]["complicacion"]>
  export type ComplicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ComplicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ComplicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $ComplicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complicacion"
    objects: {
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.Typecomplicacion
      description: string
      id_servicio: number
    }, ExtArgs["result"]["complicacion"]>
    composites: {}
  }

  type ComplicacionGetPayload<S extends boolean | null | undefined | ComplicacionDefaultArgs> = $Result.GetResult<Prisma.$ComplicacionPayload, S>

  type ComplicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplicacionCountAggregateInputType | true
    }

  export interface ComplicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complicacion'], meta: { name: 'Complicacion' } }
    /**
     * Find zero or one Complicacion that matches the filter.
     * @param {ComplicacionFindUniqueArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplicacionFindUniqueArgs>(args: SelectSubset<T, ComplicacionFindUniqueArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplicacionFindUniqueOrThrowArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionFindFirstArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplicacionFindFirstArgs>(args?: SelectSubset<T, ComplicacionFindFirstArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionFindFirstOrThrowArgs} args - Arguments to find a Complicacion
     * @example
     * // Get one Complicacion
     * const complicacion = await prisma.complicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complicacions
     * const complicacions = await prisma.complicacion.findMany()
     * 
     * // Get first 10 Complicacions
     * const complicacions = await prisma.complicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complicacionWithIdOnly = await prisma.complicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplicacionFindManyArgs>(args?: SelectSubset<T, ComplicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complicacion.
     * @param {ComplicacionCreateArgs} args - Arguments to create a Complicacion.
     * @example
     * // Create one Complicacion
     * const Complicacion = await prisma.complicacion.create({
     *   data: {
     *     // ... data to create a Complicacion
     *   }
     * })
     * 
     */
    create<T extends ComplicacionCreateArgs>(args: SelectSubset<T, ComplicacionCreateArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complicacions.
     * @param {ComplicacionCreateManyArgs} args - Arguments to create many Complicacions.
     * @example
     * // Create many Complicacions
     * const complicacion = await prisma.complicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplicacionCreateManyArgs>(args?: SelectSubset<T, ComplicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complicacions and returns the data saved in the database.
     * @param {ComplicacionCreateManyAndReturnArgs} args - Arguments to create many Complicacions.
     * @example
     * // Create many Complicacions
     * const complicacion = await prisma.complicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complicacions and only return the `id`
     * const complicacionWithIdOnly = await prisma.complicacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complicacion.
     * @param {ComplicacionDeleteArgs} args - Arguments to delete one Complicacion.
     * @example
     * // Delete one Complicacion
     * const Complicacion = await prisma.complicacion.delete({
     *   where: {
     *     // ... filter to delete one Complicacion
     *   }
     * })
     * 
     */
    delete<T extends ComplicacionDeleteArgs>(args: SelectSubset<T, ComplicacionDeleteArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complicacion.
     * @param {ComplicacionUpdateArgs} args - Arguments to update one Complicacion.
     * @example
     * // Update one Complicacion
     * const complicacion = await prisma.complicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplicacionUpdateArgs>(args: SelectSubset<T, ComplicacionUpdateArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complicacions.
     * @param {ComplicacionDeleteManyArgs} args - Arguments to filter Complicacions to delete.
     * @example
     * // Delete a few Complicacions
     * const { count } = await prisma.complicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplicacionDeleteManyArgs>(args?: SelectSubset<T, ComplicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complicacions
     * const complicacion = await prisma.complicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplicacionUpdateManyArgs>(args: SelectSubset<T, ComplicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complicacions and returns the data updated in the database.
     * @param {ComplicacionUpdateManyAndReturnArgs} args - Arguments to update many Complicacions.
     * @example
     * // Update many Complicacions
     * const complicacion = await prisma.complicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complicacions and only return the `id`
     * const complicacionWithIdOnly = await prisma.complicacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComplicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complicacion.
     * @param {ComplicacionUpsertArgs} args - Arguments to update or create a Complicacion.
     * @example
     * // Update or create a Complicacion
     * const complicacion = await prisma.complicacion.upsert({
     *   create: {
     *     // ... data to create a Complicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complicacion we want to update
     *   }
     * })
     */
    upsert<T extends ComplicacionUpsertArgs>(args: SelectSubset<T, ComplicacionUpsertArgs<ExtArgs>>): Prisma__ComplicacionClient<$Result.GetResult<Prisma.$ComplicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionCountArgs} args - Arguments to filter Complicacions to count.
     * @example
     * // Count the number of Complicacions
     * const count = await prisma.complicacion.count({
     *   where: {
     *     // ... the filter for the Complicacions we want to count
     *   }
     * })
    **/
    count<T extends ComplicacionCountArgs>(
      args?: Subset<T, ComplicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComplicacionAggregateArgs>(args: Subset<T, ComplicacionAggregateArgs>): Prisma.PrismaPromise<GetComplicacionAggregateType<T>>

    /**
     * Group by Complicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplicacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComplicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplicacionGroupByArgs['orderBy'] }
        : { orderBy?: ComplicacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComplicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complicacion model
   */
  readonly fields: ComplicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Complicacion model
   */
  interface ComplicacionFieldRefs {
    readonly id: FieldRef<"Complicacion", 'Int'>
    readonly type: FieldRef<"Complicacion", 'Typecomplicacion'>
    readonly description: FieldRef<"Complicacion", 'String'>
    readonly id_servicio: FieldRef<"Complicacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Complicacion findUnique
   */
  export type ComplicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion findUniqueOrThrow
   */
  export type ComplicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion findFirst
   */
  export type ComplicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complicacions.
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complicacions.
     */
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Complicacion findFirstOrThrow
   */
  export type ComplicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacion to fetch.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complicacions.
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complicacions.
     */
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Complicacion findMany
   */
  export type ComplicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter, which Complicacions to fetch.
     */
    where?: ComplicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complicacions to fetch.
     */
    orderBy?: ComplicacionOrderByWithRelationInput | ComplicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complicacions.
     */
    cursor?: ComplicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complicacions.
     */
    skip?: number
    distinct?: ComplicacionScalarFieldEnum | ComplicacionScalarFieldEnum[]
  }

  /**
   * Complicacion create
   */
  export type ComplicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Complicacion.
     */
    data: XOR<ComplicacionCreateInput, ComplicacionUncheckedCreateInput>
  }

  /**
   * Complicacion createMany
   */
  export type ComplicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complicacions.
     */
    data: ComplicacionCreateManyInput | ComplicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complicacion createManyAndReturn
   */
  export type ComplicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * The data used to create many Complicacions.
     */
    data: ComplicacionCreateManyInput | ComplicacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complicacion update
   */
  export type ComplicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Complicacion.
     */
    data: XOR<ComplicacionUpdateInput, ComplicacionUncheckedUpdateInput>
    /**
     * Choose, which Complicacion to update.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion updateMany
   */
  export type ComplicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complicacions.
     */
    data: XOR<ComplicacionUpdateManyMutationInput, ComplicacionUncheckedUpdateManyInput>
    /**
     * Filter which Complicacions to update
     */
    where?: ComplicacionWhereInput
    /**
     * Limit how many Complicacions to update.
     */
    limit?: number
  }

  /**
   * Complicacion updateManyAndReturn
   */
  export type ComplicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * The data used to update Complicacions.
     */
    data: XOR<ComplicacionUpdateManyMutationInput, ComplicacionUncheckedUpdateManyInput>
    /**
     * Filter which Complicacions to update
     */
    where?: ComplicacionWhereInput
    /**
     * Limit how many Complicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complicacion upsert
   */
  export type ComplicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Complicacion to update in case it exists.
     */
    where: ComplicacionWhereUniqueInput
    /**
     * In case the Complicacion found by the `where` argument doesn't exist, create a new Complicacion with this data.
     */
    create: XOR<ComplicacionCreateInput, ComplicacionUncheckedCreateInput>
    /**
     * In case the Complicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplicacionUpdateInput, ComplicacionUncheckedUpdateInput>
  }

  /**
   * Complicacion delete
   */
  export type ComplicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
    /**
     * Filter which Complicacion to delete.
     */
    where: ComplicacionWhereUniqueInput
  }

  /**
   * Complicacion deleteMany
   */
  export type ComplicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complicacions to delete
     */
    where?: ComplicacionWhereInput
    /**
     * Limit how many Complicacions to delete.
     */
    limit?: number
  }

  /**
   * Complicacion without action
   */
  export type ComplicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complicacion
     */
    select?: ComplicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complicacion
     */
    omit?: ComplicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplicacionInclude<ExtArgs> | null
  }


  /**
   * Model Pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    id: number | null
  }

  export type PacientesSumAggregateOutputType = {
    id: number | null
  }

  export type PacientesMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    entidad_salud: string | null
  }

  export type PacientesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    entidad_salud: string | null
  }

  export type PacientesCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    document: number
    entidad_salud: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    id?: true
  }

  export type PacientesSumAggregateInputType = {
    id?: true
  }

  export type PacientesMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    entidad_salud?: true
  }

  export type PacientesMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    entidad_salud?: true
  }

  export type PacientesCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    entidad_salud?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to aggregate.
     */
    where?: PacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacientesOrderByWithRelationInput | PacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type PacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacientesWhereInput
    orderBy?: PacientesOrderByWithAggregationInput | PacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: PacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    id: number
    name: string
    last_name: string
    document: string
    entidad_salud: string
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends PacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type PacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    entidad_salud?: boolean
    servicios?: boolean | Pacientes$serviciosArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>

  export type PacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    entidad_salud?: boolean
  }, ExtArgs["result"]["pacientes"]>

  export type PacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    entidad_salud?: boolean
  }, ExtArgs["result"]["pacientes"]>

  export type PacientesSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    entidad_salud?: boolean
  }

  export type PacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "last_name" | "document" | "entidad_salud", ExtArgs["result"]["pacientes"]>
  export type PacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicios?: boolean | Pacientes$serviciosArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PacientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pacientes"
    objects: {
      servicios: Prisma.$ServicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      last_name: string
      document: string
      entidad_salud: string
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type PacientesGetPayload<S extends boolean | null | undefined | PacientesDefaultArgs> = $Result.GetResult<Prisma.$PacientesPayload, S>

  type PacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface PacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pacientes'], meta: { name: 'Pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {PacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacientesFindUniqueArgs>(args: SelectSubset<T, PacientesFindUniqueArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, PacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacientesFindFirstArgs>(args?: SelectSubset<T, PacientesFindFirstArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, PacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacientesFindManyArgs>(args?: SelectSubset<T, PacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pacientes.
     * @param {PacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends PacientesCreateArgs>(args: SelectSubset<T, PacientesCreateArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacientesCreateManyArgs>(args?: SelectSubset<T, PacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacientesCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, PacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pacientes.
     * @param {PacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends PacientesDeleteArgs>(args: SelectSubset<T, PacientesDeleteArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pacientes.
     * @param {PacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacientesUpdateArgs>(args: SelectSubset<T, PacientesUpdateArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacientesDeleteManyArgs>(args?: SelectSubset<T, PacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacientesUpdateManyArgs>(args: SelectSubset<T, PacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacientesUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacientesWithIdOnly = await prisma.pacientes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, PacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pacientes.
     * @param {PacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends PacientesUpsertArgs>(args: SelectSubset<T, PacientesUpsertArgs<ExtArgs>>): Prisma__PacientesClient<$Result.GetResult<Prisma.$PacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacientesCountArgs>(
      args?: Subset<T, PacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacientesGroupByArgs['orderBy'] }
        : { orderBy?: PacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pacientes model
   */
  readonly fields: PacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicios<T extends Pacientes$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Pacientes$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pacientes model
   */
  interface PacientesFieldRefs {
    readonly id: FieldRef<"Pacientes", 'Int'>
    readonly name: FieldRef<"Pacientes", 'String'>
    readonly last_name: FieldRef<"Pacientes", 'String'>
    readonly document: FieldRef<"Pacientes", 'String'>
    readonly entidad_salud: FieldRef<"Pacientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pacientes findUnique
   */
  export type PacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where: PacientesWhereUniqueInput
  }

  /**
   * Pacientes findUniqueOrThrow
   */
  export type PacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where: PacientesWhereUniqueInput
  }

  /**
   * Pacientes findFirst
   */
  export type PacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacientesOrderByWithRelationInput | PacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * Pacientes findFirstOrThrow
   */
  export type PacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacientesOrderByWithRelationInput | PacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * Pacientes findMany
   */
  export type PacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacientesOrderByWithRelationInput | PacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * Pacientes create
   */
  export type PacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Pacientes.
     */
    data: XOR<PacientesCreateInput, PacientesUncheckedCreateInput>
  }

  /**
   * Pacientes createMany
   */
  export type PacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacientesCreateManyInput | PacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pacientes createManyAndReturn
   */
  export type PacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacientesCreateManyInput | PacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pacientes update
   */
  export type PacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Pacientes.
     */
    data: XOR<PacientesUpdateInput, PacientesUncheckedUpdateInput>
    /**
     * Choose, which Pacientes to update.
     */
    where: PacientesWhereUniqueInput
  }

  /**
   * Pacientes updateMany
   */
  export type PacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacientesUpdateManyMutationInput, PacientesUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacientesWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Pacientes updateManyAndReturn
   */
  export type PacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacientesUpdateManyMutationInput, PacientesUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacientesWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Pacientes upsert
   */
  export type PacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Pacientes to update in case it exists.
     */
    where: PacientesWhereUniqueInput
    /**
     * In case the Pacientes found by the `where` argument doesn't exist, create a new Pacientes with this data.
     */
    create: XOR<PacientesCreateInput, PacientesUncheckedCreateInput>
    /**
     * In case the Pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacientesUpdateInput, PacientesUncheckedUpdateInput>
  }

  /**
   * Pacientes delete
   */
  export type PacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
    /**
     * Filter which Pacientes to delete.
     */
    where: PacientesWhereUniqueInput
  }

  /**
   * Pacientes deleteMany
   */
  export type PacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacientesWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Pacientes.servicios
   */
  export type Pacientes$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    cursor?: ServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Pacientes without action
   */
  export type PacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pacientes
     */
    select?: PacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pacientes
     */
    omit?: PacientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacientesInclude<ExtArgs> | null
  }


  /**
   * Model Descripcion
   */

  export type AggregateDescripcion = {
    _count: DescripcionCountAggregateOutputType | null
    _avg: DescripcionAvgAggregateOutputType | null
    _sum: DescripcionSumAggregateOutputType | null
    _min: DescripcionMinAggregateOutputType | null
    _max: DescripcionMaxAggregateOutputType | null
  }

  export type DescripcionAvgAggregateOutputType = {
    id: number | null
  }

  export type DescripcionSumAggregateOutputType = {
    id: number | null
  }

  export type DescripcionMinAggregateOutputType = {
    id: number | null
    description: string | null
    type_context: $Enums.TypeContext | null
    implicados: string | null
  }

  export type DescripcionMaxAggregateOutputType = {
    id: number | null
    description: string | null
    type_context: $Enums.TypeContext | null
    implicados: string | null
  }

  export type DescripcionCountAggregateOutputType = {
    id: number
    description: number
    type_context: number
    implicados: number
    _all: number
  }


  export type DescripcionAvgAggregateInputType = {
    id?: true
  }

  export type DescripcionSumAggregateInputType = {
    id?: true
  }

  export type DescripcionMinAggregateInputType = {
    id?: true
    description?: true
    type_context?: true
    implicados?: true
  }

  export type DescripcionMaxAggregateInputType = {
    id?: true
    description?: true
    type_context?: true
    implicados?: true
  }

  export type DescripcionCountAggregateInputType = {
    id?: true
    description?: true
    type_context?: true
    implicados?: true
    _all?: true
  }

  export type DescripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Descripcion to aggregate.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Descripcions
    **/
    _count?: true | DescripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DescripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DescripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DescripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DescripcionMaxAggregateInputType
  }

  export type GetDescripcionAggregateType<T extends DescripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateDescripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDescripcion[P]>
      : GetScalarType<T[P], AggregateDescripcion[P]>
  }




  export type DescripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DescripcionWhereInput
    orderBy?: DescripcionOrderByWithAggregationInput | DescripcionOrderByWithAggregationInput[]
    by: DescripcionScalarFieldEnum[] | DescripcionScalarFieldEnum
    having?: DescripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DescripcionCountAggregateInputType | true
    _avg?: DescripcionAvgAggregateInputType
    _sum?: DescripcionSumAggregateInputType
    _min?: DescripcionMinAggregateInputType
    _max?: DescripcionMaxAggregateInputType
  }

  export type DescripcionGroupByOutputType = {
    id: number
    description: string
    type_context: $Enums.TypeContext
    implicados: string
    _count: DescripcionCountAggregateOutputType | null
    _avg: DescripcionAvgAggregateOutputType | null
    _sum: DescripcionSumAggregateOutputType | null
    _min: DescripcionMinAggregateOutputType | null
    _max: DescripcionMaxAggregateOutputType | null
  }

  type GetDescripcionGroupByPayload<T extends DescripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DescripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DescripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DescripcionGroupByOutputType[P]>
            : GetScalarType<T[P], DescripcionGroupByOutputType[P]>
        }
      >
    >


  export type DescripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    type_context?: boolean
    implicados?: boolean
    servicio?: boolean | Descripcion$servicioArgs<ExtArgs>
    _count?: boolean | DescripcionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["descripcion"]>

  export type DescripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    type_context?: boolean
    implicados?: boolean
  }, ExtArgs["result"]["descripcion"]>

  export type DescripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    type_context?: boolean
    implicados?: boolean
  }, ExtArgs["result"]["descripcion"]>

  export type DescripcionSelectScalar = {
    id?: boolean
    description?: boolean
    type_context?: boolean
    implicados?: boolean
  }

  export type DescripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "type_context" | "implicados", ExtArgs["result"]["descripcion"]>
  export type DescripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | Descripcion$servicioArgs<ExtArgs>
    _count?: boolean | DescripcionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DescripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DescripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DescripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Descripcion"
    objects: {
      servicio: Prisma.$ServicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      type_context: $Enums.TypeContext
      implicados: string
    }, ExtArgs["result"]["descripcion"]>
    composites: {}
  }

  type DescripcionGetPayload<S extends boolean | null | undefined | DescripcionDefaultArgs> = $Result.GetResult<Prisma.$DescripcionPayload, S>

  type DescripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DescripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DescripcionCountAggregateInputType | true
    }

  export interface DescripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Descripcion'], meta: { name: 'Descripcion' } }
    /**
     * Find zero or one Descripcion that matches the filter.
     * @param {DescripcionFindUniqueArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DescripcionFindUniqueArgs>(args: SelectSubset<T, DescripcionFindUniqueArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Descripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DescripcionFindUniqueOrThrowArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DescripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, DescripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Descripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionFindFirstArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DescripcionFindFirstArgs>(args?: SelectSubset<T, DescripcionFindFirstArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Descripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionFindFirstOrThrowArgs} args - Arguments to find a Descripcion
     * @example
     * // Get one Descripcion
     * const descripcion = await prisma.descripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DescripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, DescripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Descripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Descripcions
     * const descripcions = await prisma.descripcion.findMany()
     * 
     * // Get first 10 Descripcions
     * const descripcions = await prisma.descripcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const descripcionWithIdOnly = await prisma.descripcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DescripcionFindManyArgs>(args?: SelectSubset<T, DescripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Descripcion.
     * @param {DescripcionCreateArgs} args - Arguments to create a Descripcion.
     * @example
     * // Create one Descripcion
     * const Descripcion = await prisma.descripcion.create({
     *   data: {
     *     // ... data to create a Descripcion
     *   }
     * })
     * 
     */
    create<T extends DescripcionCreateArgs>(args: SelectSubset<T, DescripcionCreateArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Descripcions.
     * @param {DescripcionCreateManyArgs} args - Arguments to create many Descripcions.
     * @example
     * // Create many Descripcions
     * const descripcion = await prisma.descripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DescripcionCreateManyArgs>(args?: SelectSubset<T, DescripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Descripcions and returns the data saved in the database.
     * @param {DescripcionCreateManyAndReturnArgs} args - Arguments to create many Descripcions.
     * @example
     * // Create many Descripcions
     * const descripcion = await prisma.descripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Descripcions and only return the `id`
     * const descripcionWithIdOnly = await prisma.descripcion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DescripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, DescripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Descripcion.
     * @param {DescripcionDeleteArgs} args - Arguments to delete one Descripcion.
     * @example
     * // Delete one Descripcion
     * const Descripcion = await prisma.descripcion.delete({
     *   where: {
     *     // ... filter to delete one Descripcion
     *   }
     * })
     * 
     */
    delete<T extends DescripcionDeleteArgs>(args: SelectSubset<T, DescripcionDeleteArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Descripcion.
     * @param {DescripcionUpdateArgs} args - Arguments to update one Descripcion.
     * @example
     * // Update one Descripcion
     * const descripcion = await prisma.descripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DescripcionUpdateArgs>(args: SelectSubset<T, DescripcionUpdateArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Descripcions.
     * @param {DescripcionDeleteManyArgs} args - Arguments to filter Descripcions to delete.
     * @example
     * // Delete a few Descripcions
     * const { count } = await prisma.descripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DescripcionDeleteManyArgs>(args?: SelectSubset<T, DescripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Descripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Descripcions
     * const descripcion = await prisma.descripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DescripcionUpdateManyArgs>(args: SelectSubset<T, DescripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Descripcions and returns the data updated in the database.
     * @param {DescripcionUpdateManyAndReturnArgs} args - Arguments to update many Descripcions.
     * @example
     * // Update many Descripcions
     * const descripcion = await prisma.descripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Descripcions and only return the `id`
     * const descripcionWithIdOnly = await prisma.descripcion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DescripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, DescripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Descripcion.
     * @param {DescripcionUpsertArgs} args - Arguments to update or create a Descripcion.
     * @example
     * // Update or create a Descripcion
     * const descripcion = await prisma.descripcion.upsert({
     *   create: {
     *     // ... data to create a Descripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Descripcion we want to update
     *   }
     * })
     */
    upsert<T extends DescripcionUpsertArgs>(args: SelectSubset<T, DescripcionUpsertArgs<ExtArgs>>): Prisma__DescripcionClient<$Result.GetResult<Prisma.$DescripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Descripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionCountArgs} args - Arguments to filter Descripcions to count.
     * @example
     * // Count the number of Descripcions
     * const count = await prisma.descripcion.count({
     *   where: {
     *     // ... the filter for the Descripcions we want to count
     *   }
     * })
    **/
    count<T extends DescripcionCountArgs>(
      args?: Subset<T, DescripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DescripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Descripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DescripcionAggregateArgs>(args: Subset<T, DescripcionAggregateArgs>): Prisma.PrismaPromise<GetDescripcionAggregateType<T>>

    /**
     * Group by Descripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescripcionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DescripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DescripcionGroupByArgs['orderBy'] }
        : { orderBy?: DescripcionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DescripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDescripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Descripcion model
   */
  readonly fields: DescripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Descripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DescripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio<T extends Descripcion$servicioArgs<ExtArgs> = {}>(args?: Subset<T, Descripcion$servicioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Descripcion model
   */
  interface DescripcionFieldRefs {
    readonly id: FieldRef<"Descripcion", 'Int'>
    readonly description: FieldRef<"Descripcion", 'String'>
    readonly type_context: FieldRef<"Descripcion", 'TypeContext'>
    readonly implicados: FieldRef<"Descripcion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Descripcion findUnique
   */
  export type DescripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion findUniqueOrThrow
   */
  export type DescripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion findFirst
   */
  export type DescripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Descripcions.
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Descripcions.
     */
    distinct?: DescripcionScalarFieldEnum | DescripcionScalarFieldEnum[]
  }

  /**
   * Descripcion findFirstOrThrow
   */
  export type DescripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcion to fetch.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Descripcions.
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Descripcions.
     */
    distinct?: DescripcionScalarFieldEnum | DescripcionScalarFieldEnum[]
  }

  /**
   * Descripcion findMany
   */
  export type DescripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter, which Descripcions to fetch.
     */
    where?: DescripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Descripcions to fetch.
     */
    orderBy?: DescripcionOrderByWithRelationInput | DescripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Descripcions.
     */
    cursor?: DescripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Descripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Descripcions.
     */
    skip?: number
    distinct?: DescripcionScalarFieldEnum | DescripcionScalarFieldEnum[]
  }

  /**
   * Descripcion create
   */
  export type DescripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Descripcion.
     */
    data: XOR<DescripcionCreateInput, DescripcionUncheckedCreateInput>
  }

  /**
   * Descripcion createMany
   */
  export type DescripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Descripcions.
     */
    data: DescripcionCreateManyInput | DescripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Descripcion createManyAndReturn
   */
  export type DescripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Descripcions.
     */
    data: DescripcionCreateManyInput | DescripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Descripcion update
   */
  export type DescripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Descripcion.
     */
    data: XOR<DescripcionUpdateInput, DescripcionUncheckedUpdateInput>
    /**
     * Choose, which Descripcion to update.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion updateMany
   */
  export type DescripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Descripcions.
     */
    data: XOR<DescripcionUpdateManyMutationInput, DescripcionUncheckedUpdateManyInput>
    /**
     * Filter which Descripcions to update
     */
    where?: DescripcionWhereInput
    /**
     * Limit how many Descripcions to update.
     */
    limit?: number
  }

  /**
   * Descripcion updateManyAndReturn
   */
  export type DescripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * The data used to update Descripcions.
     */
    data: XOR<DescripcionUpdateManyMutationInput, DescripcionUncheckedUpdateManyInput>
    /**
     * Filter which Descripcions to update
     */
    where?: DescripcionWhereInput
    /**
     * Limit how many Descripcions to update.
     */
    limit?: number
  }

  /**
   * Descripcion upsert
   */
  export type DescripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Descripcion to update in case it exists.
     */
    where: DescripcionWhereUniqueInput
    /**
     * In case the Descripcion found by the `where` argument doesn't exist, create a new Descripcion with this data.
     */
    create: XOR<DescripcionCreateInput, DescripcionUncheckedCreateInput>
    /**
     * In case the Descripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DescripcionUpdateInput, DescripcionUncheckedUpdateInput>
  }

  /**
   * Descripcion delete
   */
  export type DescripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
    /**
     * Filter which Descripcion to delete.
     */
    where: DescripcionWhereUniqueInput
  }

  /**
   * Descripcion deleteMany
   */
  export type DescripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Descripcions to delete
     */
    where?: DescripcionWhereInput
    /**
     * Limit how many Descripcions to delete.
     */
    limit?: number
  }

  /**
   * Descripcion.servicio
   */
  export type Descripcion$servicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    cursor?: ServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Descripcion without action
   */
  export type DescripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Descripcion
     */
    select?: DescripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Descripcion
     */
    omit?: DescripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescripcionInclude<ExtArgs> | null
  }


  /**
   * Model Turnos
   */

  export type AggregateTurnos = {
    _count: TurnosCountAggregateOutputType | null
    _avg: TurnosAvgAggregateOutputType | null
    _sum: TurnosSumAggregateOutputType | null
    _min: TurnosMinAggregateOutputType | null
    _max: TurnosMaxAggregateOutputType | null
  }

  export type TurnosAvgAggregateOutputType = {
    id: number | null
    paramedicId: number | null
    auxiliarId: number | null
    conductorId: number | null
    ambulanciaId: number | null
  }

  export type TurnosSumAggregateOutputType = {
    id: number | null
    paramedicId: number | null
    auxiliarId: number | null
    conductorId: number | null
    ambulanciaId: number | null
  }

  export type TurnosMinAggregateOutputType = {
    id: number | null
    time_start: Date | null
    time_end: Date | null
    paramedicId: number | null
    auxiliarId: number | null
    conductorId: number | null
    ambulanciaId: number | null
  }

  export type TurnosMaxAggregateOutputType = {
    id: number | null
    time_start: Date | null
    time_end: Date | null
    paramedicId: number | null
    auxiliarId: number | null
    conductorId: number | null
    ambulanciaId: number | null
  }

  export type TurnosCountAggregateOutputType = {
    id: number
    time_start: number
    time_end: number
    paramedicId: number
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
    _all: number
  }


  export type TurnosAvgAggregateInputType = {
    id?: true
    paramedicId?: true
    auxiliarId?: true
    conductorId?: true
    ambulanciaId?: true
  }

  export type TurnosSumAggregateInputType = {
    id?: true
    paramedicId?: true
    auxiliarId?: true
    conductorId?: true
    ambulanciaId?: true
  }

  export type TurnosMinAggregateInputType = {
    id?: true
    time_start?: true
    time_end?: true
    paramedicId?: true
    auxiliarId?: true
    conductorId?: true
    ambulanciaId?: true
  }

  export type TurnosMaxAggregateInputType = {
    id?: true
    time_start?: true
    time_end?: true
    paramedicId?: true
    auxiliarId?: true
    conductorId?: true
    ambulanciaId?: true
  }

  export type TurnosCountAggregateInputType = {
    id?: true
    time_start?: true
    time_end?: true
    paramedicId?: true
    auxiliarId?: true
    conductorId?: true
    ambulanciaId?: true
    _all?: true
  }

  export type TurnosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to aggregate.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnosMaxAggregateInputType
  }

  export type GetTurnosAggregateType<T extends TurnosAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnos[P]>
      : GetScalarType<T[P], AggregateTurnos[P]>
  }




  export type TurnosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnosWhereInput
    orderBy?: TurnosOrderByWithAggregationInput | TurnosOrderByWithAggregationInput[]
    by: TurnosScalarFieldEnum[] | TurnosScalarFieldEnum
    having?: TurnosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnosCountAggregateInputType | true
    _avg?: TurnosAvgAggregateInputType
    _sum?: TurnosSumAggregateInputType
    _min?: TurnosMinAggregateInputType
    _max?: TurnosMaxAggregateInputType
  }

  export type TurnosGroupByOutputType = {
    id: number
    time_start: Date
    time_end: Date
    paramedicId: number
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
    _count: TurnosCountAggregateOutputType | null
    _avg: TurnosAvgAggregateOutputType | null
    _sum: TurnosSumAggregateOutputType | null
    _min: TurnosMinAggregateOutputType | null
    _max: TurnosMaxAggregateOutputType | null
  }

  type GetTurnosGroupByPayload<T extends TurnosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnosGroupByOutputType[P]>
            : GetScalarType<T[P], TurnosGroupByOutputType[P]>
        }
      >
    >


  export type TurnosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time_start?: boolean
    time_end?: boolean
    paramedicId?: boolean
    auxiliarId?: boolean
    conductorId?: boolean
    ambulanciaId?: boolean
    paramedico?: boolean | ParamedicoDefaultArgs<ExtArgs>
    auxiliar?: boolean | AuxiliarDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    ambulancia?: boolean | AmbulanciaDefaultArgs<ExtArgs>
    servicios?: boolean | Turnos$serviciosArgs<ExtArgs>
    _count?: boolean | TurnosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnos"]>

  export type TurnosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time_start?: boolean
    time_end?: boolean
    paramedicId?: boolean
    auxiliarId?: boolean
    conductorId?: boolean
    ambulanciaId?: boolean
    paramedico?: boolean | ParamedicoDefaultArgs<ExtArgs>
    auxiliar?: boolean | AuxiliarDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    ambulancia?: boolean | AmbulanciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnos"]>

  export type TurnosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time_start?: boolean
    time_end?: boolean
    paramedicId?: boolean
    auxiliarId?: boolean
    conductorId?: boolean
    ambulanciaId?: boolean
    paramedico?: boolean | ParamedicoDefaultArgs<ExtArgs>
    auxiliar?: boolean | AuxiliarDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    ambulancia?: boolean | AmbulanciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnos"]>

  export type TurnosSelectScalar = {
    id?: boolean
    time_start?: boolean
    time_end?: boolean
    paramedicId?: boolean
    auxiliarId?: boolean
    conductorId?: boolean
    ambulanciaId?: boolean
  }

  export type TurnosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time_start" | "time_end" | "paramedicId" | "auxiliarId" | "conductorId" | "ambulanciaId", ExtArgs["result"]["turnos"]>
  export type TurnosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paramedico?: boolean | ParamedicoDefaultArgs<ExtArgs>
    auxiliar?: boolean | AuxiliarDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    ambulancia?: boolean | AmbulanciaDefaultArgs<ExtArgs>
    servicios?: boolean | Turnos$serviciosArgs<ExtArgs>
    _count?: boolean | TurnosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurnosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paramedico?: boolean | ParamedicoDefaultArgs<ExtArgs>
    auxiliar?: boolean | AuxiliarDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    ambulancia?: boolean | AmbulanciaDefaultArgs<ExtArgs>
  }
  export type TurnosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paramedico?: boolean | ParamedicoDefaultArgs<ExtArgs>
    auxiliar?: boolean | AuxiliarDefaultArgs<ExtArgs>
    conductor?: boolean | ConductorDefaultArgs<ExtArgs>
    ambulancia?: boolean | AmbulanciaDefaultArgs<ExtArgs>
  }

  export type $TurnosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turnos"
    objects: {
      paramedico: Prisma.$ParamedicoPayload<ExtArgs>
      auxiliar: Prisma.$AuxiliarPayload<ExtArgs>
      conductor: Prisma.$ConductorPayload<ExtArgs>
      ambulancia: Prisma.$AmbulanciaPayload<ExtArgs>
      servicios: Prisma.$ServicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      time_start: Date
      time_end: Date
      paramedicId: number
      auxiliarId: number
      conductorId: number
      ambulanciaId: number
    }, ExtArgs["result"]["turnos"]>
    composites: {}
  }

  type TurnosGetPayload<S extends boolean | null | undefined | TurnosDefaultArgs> = $Result.GetResult<Prisma.$TurnosPayload, S>

  type TurnosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnosCountAggregateInputType | true
    }

  export interface TurnosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turnos'], meta: { name: 'Turnos' } }
    /**
     * Find zero or one Turnos that matches the filter.
     * @param {TurnosFindUniqueArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnosFindUniqueArgs>(args: SelectSubset<T, TurnosFindUniqueArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turnos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnosFindUniqueOrThrowArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnosFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosFindFirstArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnosFindFirstArgs>(args?: SelectSubset<T, TurnosFindFirstArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turnos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosFindFirstOrThrowArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnosFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnosFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turnos.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turnos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnosWithIdOnly = await prisma.turnos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnosFindManyArgs>(args?: SelectSubset<T, TurnosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turnos.
     * @param {TurnosCreateArgs} args - Arguments to create a Turnos.
     * @example
     * // Create one Turnos
     * const Turnos = await prisma.turnos.create({
     *   data: {
     *     // ... data to create a Turnos
     *   }
     * })
     * 
     */
    create<T extends TurnosCreateArgs>(args: SelectSubset<T, TurnosCreateArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turnos.
     * @param {TurnosCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turnos = await prisma.turnos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnosCreateManyArgs>(args?: SelectSubset<T, TurnosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnos and returns the data saved in the database.
     * @param {TurnosCreateManyAndReturnArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turnos = await prisma.turnos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnos and only return the `id`
     * const turnosWithIdOnly = await prisma.turnos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnosCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turnos.
     * @param {TurnosDeleteArgs} args - Arguments to delete one Turnos.
     * @example
     * // Delete one Turnos
     * const Turnos = await prisma.turnos.delete({
     *   where: {
     *     // ... filter to delete one Turnos
     *   }
     * })
     * 
     */
    delete<T extends TurnosDeleteArgs>(args: SelectSubset<T, TurnosDeleteArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turnos.
     * @param {TurnosUpdateArgs} args - Arguments to update one Turnos.
     * @example
     * // Update one Turnos
     * const turnos = await prisma.turnos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnosUpdateArgs>(args: SelectSubset<T, TurnosUpdateArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turnos.
     * @param {TurnosDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turnos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnosDeleteManyArgs>(args?: SelectSubset<T, TurnosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turnos = await prisma.turnos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnosUpdateManyArgs>(args: SelectSubset<T, TurnosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos and returns the data updated in the database.
     * @param {TurnosUpdateManyAndReturnArgs} args - Arguments to update many Turnos.
     * @example
     * // Update many Turnos
     * const turnos = await prisma.turnos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turnos and only return the `id`
     * const turnosWithIdOnly = await prisma.turnos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TurnosUpdateManyAndReturnArgs>(args: SelectSubset<T, TurnosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turnos.
     * @param {TurnosUpsertArgs} args - Arguments to update or create a Turnos.
     * @example
     * // Update or create a Turnos
     * const turnos = await prisma.turnos.upsert({
     *   create: {
     *     // ... data to create a Turnos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turnos we want to update
     *   }
     * })
     */
    upsert<T extends TurnosUpsertArgs>(args: SelectSubset<T, TurnosUpsertArgs<ExtArgs>>): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turnos.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnosCountArgs>(
      args?: Subset<T, TurnosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnosAggregateArgs>(args: Subset<T, TurnosAggregateArgs>): Prisma.PrismaPromise<GetTurnosAggregateType<T>>

    /**
     * Group by Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnosGroupByArgs['orderBy'] }
        : { orderBy?: TurnosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turnos model
   */
  readonly fields: TurnosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turnos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paramedico<T extends ParamedicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParamedicoDefaultArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    auxiliar<T extends AuxiliarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuxiliarDefaultArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends ConductorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConductorDefaultArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ambulancia<T extends AmbulanciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmbulanciaDefaultArgs<ExtArgs>>): Prisma__AmbulanciaClient<$Result.GetResult<Prisma.$AmbulanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicios<T extends Turnos$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Turnos$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turnos model
   */
  interface TurnosFieldRefs {
    readonly id: FieldRef<"Turnos", 'Int'>
    readonly time_start: FieldRef<"Turnos", 'DateTime'>
    readonly time_end: FieldRef<"Turnos", 'DateTime'>
    readonly paramedicId: FieldRef<"Turnos", 'Int'>
    readonly auxiliarId: FieldRef<"Turnos", 'Int'>
    readonly conductorId: FieldRef<"Turnos", 'Int'>
    readonly ambulanciaId: FieldRef<"Turnos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Turnos findUnique
   */
  export type TurnosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos findUniqueOrThrow
   */
  export type TurnosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos findFirst
   */
  export type TurnosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Turnos findFirstOrThrow
   */
  export type TurnosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Turnos findMany
   */
  export type TurnosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Turnos create
   */
  export type TurnosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * The data needed to create a Turnos.
     */
    data: XOR<TurnosCreateInput, TurnosUncheckedCreateInput>
  }

  /**
   * Turnos createMany
   */
  export type TurnosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnosCreateManyInput | TurnosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turnos createManyAndReturn
   */
  export type TurnosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * The data used to create many Turnos.
     */
    data: TurnosCreateManyInput | TurnosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turnos update
   */
  export type TurnosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * The data needed to update a Turnos.
     */
    data: XOR<TurnosUpdateInput, TurnosUncheckedUpdateInput>
    /**
     * Choose, which Turnos to update.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos updateMany
   */
  export type TurnosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnosWhereInput
    /**
     * Limit how many Turnos to update.
     */
    limit?: number
  }

  /**
   * Turnos updateManyAndReturn
   */
  export type TurnosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnosWhereInput
    /**
     * Limit how many Turnos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turnos upsert
   */
  export type TurnosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * The filter to search for the Turnos to update in case it exists.
     */
    where: TurnosWhereUniqueInput
    /**
     * In case the Turnos found by the `where` argument doesn't exist, create a new Turnos with this data.
     */
    create: XOR<TurnosCreateInput, TurnosUncheckedCreateInput>
    /**
     * In case the Turnos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnosUpdateInput, TurnosUncheckedUpdateInput>
  }

  /**
   * Turnos delete
   */
  export type TurnosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    /**
     * Filter which Turnos to delete.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos deleteMany
   */
  export type TurnosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnosWhereInput
    /**
     * Limit how many Turnos to delete.
     */
    limit?: number
  }

  /**
   * Turnos.servicios
   */
  export type Turnos$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    cursor?: ServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Turnos without action
   */
  export type TurnosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
  }


  /**
   * Model Conductor
   */

  export type AggregateConductor = {
    _count: ConductorCountAggregateOutputType | null
    _avg: ConductorAvgAggregateOutputType | null
    _sum: ConductorSumAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  export type ConductorAvgAggregateOutputType = {
    id: number | null
  }

  export type ConductorSumAggregateOutputType = {
    id: number | null
  }

  export type ConductorMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    no_licencia: string | null
    no_fast_driver: string | null
  }

  export type ConductorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    no_licencia: string | null
    no_fast_driver: string | null
  }

  export type ConductorCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    document: number
    no_licencia: number
    no_fast_driver: number
    _all: number
  }


  export type ConductorAvgAggregateInputType = {
    id?: true
  }

  export type ConductorSumAggregateInputType = {
    id?: true
  }

  export type ConductorMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    no_licencia?: true
    no_fast_driver?: true
  }

  export type ConductorMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    no_licencia?: true
    no_fast_driver?: true
  }

  export type ConductorCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    no_licencia?: true
    no_fast_driver?: true
    _all?: true
  }

  export type ConductorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductor to aggregate.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conductors
    **/
    _count?: true | ConductorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConductorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConductorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConductorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConductorMaxAggregateInputType
  }

  export type GetConductorAggregateType<T extends ConductorAggregateArgs> = {
        [P in keyof T & keyof AggregateConductor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConductor[P]>
      : GetScalarType<T[P], AggregateConductor[P]>
  }




  export type ConductorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConductorWhereInput
    orderBy?: ConductorOrderByWithAggregationInput | ConductorOrderByWithAggregationInput[]
    by: ConductorScalarFieldEnum[] | ConductorScalarFieldEnum
    having?: ConductorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConductorCountAggregateInputType | true
    _avg?: ConductorAvgAggregateInputType
    _sum?: ConductorSumAggregateInputType
    _min?: ConductorMinAggregateInputType
    _max?: ConductorMaxAggregateInputType
  }

  export type ConductorGroupByOutputType = {
    id: number
    name: string
    last_name: string
    document: string
    no_licencia: string
    no_fast_driver: string
    _count: ConductorCountAggregateOutputType | null
    _avg: ConductorAvgAggregateOutputType | null
    _sum: ConductorSumAggregateOutputType | null
    _min: ConductorMinAggregateOutputType | null
    _max: ConductorMaxAggregateOutputType | null
  }

  type GetConductorGroupByPayload<T extends ConductorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConductorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConductorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConductorGroupByOutputType[P]>
            : GetScalarType<T[P], ConductorGroupByOutputType[P]>
        }
      >
    >


  export type ConductorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_licencia?: boolean
    no_fast_driver?: boolean
    turnos?: boolean | Conductor$turnosArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_licencia?: boolean
    no_fast_driver?: boolean
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_licencia?: boolean
    no_fast_driver?: boolean
  }, ExtArgs["result"]["conductor"]>

  export type ConductorSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_licencia?: boolean
    no_fast_driver?: boolean
  }

  export type ConductorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "last_name" | "document" | "no_licencia" | "no_fast_driver", ExtArgs["result"]["conductor"]>
  export type ConductorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | Conductor$turnosArgs<ExtArgs>
    _count?: boolean | ConductorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConductorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConductorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConductorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conductor"
    objects: {
      turnos: Prisma.$TurnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      last_name: string
      document: string
      no_licencia: string
      no_fast_driver: string
    }, ExtArgs["result"]["conductor"]>
    composites: {}
  }

  type ConductorGetPayload<S extends boolean | null | undefined | ConductorDefaultArgs> = $Result.GetResult<Prisma.$ConductorPayload, S>

  type ConductorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConductorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConductorCountAggregateInputType | true
    }

  export interface ConductorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conductor'], meta: { name: 'Conductor' } }
    /**
     * Find zero or one Conductor that matches the filter.
     * @param {ConductorFindUniqueArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConductorFindUniqueArgs>(args: SelectSubset<T, ConductorFindUniqueArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conductor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConductorFindUniqueOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConductorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConductorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConductorFindFirstArgs>(args?: SelectSubset<T, ConductorFindFirstArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conductor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindFirstOrThrowArgs} args - Arguments to find a Conductor
     * @example
     * // Get one Conductor
     * const conductor = await prisma.conductor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConductorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConductorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conductors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conductors
     * const conductors = await prisma.conductor.findMany()
     * 
     * // Get first 10 Conductors
     * const conductors = await prisma.conductor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conductorWithIdOnly = await prisma.conductor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConductorFindManyArgs>(args?: SelectSubset<T, ConductorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conductor.
     * @param {ConductorCreateArgs} args - Arguments to create a Conductor.
     * @example
     * // Create one Conductor
     * const Conductor = await prisma.conductor.create({
     *   data: {
     *     // ... data to create a Conductor
     *   }
     * })
     * 
     */
    create<T extends ConductorCreateArgs>(args: SelectSubset<T, ConductorCreateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conductors.
     * @param {ConductorCreateManyArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConductorCreateManyArgs>(args?: SelectSubset<T, ConductorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conductors and returns the data saved in the database.
     * @param {ConductorCreateManyAndReturnArgs} args - Arguments to create many Conductors.
     * @example
     * // Create many Conductors
     * const conductor = await prisma.conductor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conductors and only return the `id`
     * const conductorWithIdOnly = await prisma.conductor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConductorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConductorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conductor.
     * @param {ConductorDeleteArgs} args - Arguments to delete one Conductor.
     * @example
     * // Delete one Conductor
     * const Conductor = await prisma.conductor.delete({
     *   where: {
     *     // ... filter to delete one Conductor
     *   }
     * })
     * 
     */
    delete<T extends ConductorDeleteArgs>(args: SelectSubset<T, ConductorDeleteArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conductor.
     * @param {ConductorUpdateArgs} args - Arguments to update one Conductor.
     * @example
     * // Update one Conductor
     * const conductor = await prisma.conductor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConductorUpdateArgs>(args: SelectSubset<T, ConductorUpdateArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conductors.
     * @param {ConductorDeleteManyArgs} args - Arguments to filter Conductors to delete.
     * @example
     * // Delete a few Conductors
     * const { count } = await prisma.conductor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConductorDeleteManyArgs>(args?: SelectSubset<T, ConductorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConductorUpdateManyArgs>(args: SelectSubset<T, ConductorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conductors and returns the data updated in the database.
     * @param {ConductorUpdateManyAndReturnArgs} args - Arguments to update many Conductors.
     * @example
     * // Update many Conductors
     * const conductor = await prisma.conductor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conductors and only return the `id`
     * const conductorWithIdOnly = await prisma.conductor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConductorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConductorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conductor.
     * @param {ConductorUpsertArgs} args - Arguments to update or create a Conductor.
     * @example
     * // Update or create a Conductor
     * const conductor = await prisma.conductor.upsert({
     *   create: {
     *     // ... data to create a Conductor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conductor we want to update
     *   }
     * })
     */
    upsert<T extends ConductorUpsertArgs>(args: SelectSubset<T, ConductorUpsertArgs<ExtArgs>>): Prisma__ConductorClient<$Result.GetResult<Prisma.$ConductorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conductors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorCountArgs} args - Arguments to filter Conductors to count.
     * @example
     * // Count the number of Conductors
     * const count = await prisma.conductor.count({
     *   where: {
     *     // ... the filter for the Conductors we want to count
     *   }
     * })
    **/
    count<T extends ConductorCountArgs>(
      args?: Subset<T, ConductorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConductorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConductorAggregateArgs>(args: Subset<T, ConductorAggregateArgs>): Prisma.PrismaPromise<GetConductorAggregateType<T>>

    /**
     * Group by Conductor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConductorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConductorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConductorGroupByArgs['orderBy'] }
        : { orderBy?: ConductorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConductorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConductorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conductor model
   */
  readonly fields: ConductorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conductor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConductorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turnos<T extends Conductor$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Conductor$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conductor model
   */
  interface ConductorFieldRefs {
    readonly id: FieldRef<"Conductor", 'Int'>
    readonly name: FieldRef<"Conductor", 'String'>
    readonly last_name: FieldRef<"Conductor", 'String'>
    readonly document: FieldRef<"Conductor", 'String'>
    readonly no_licencia: FieldRef<"Conductor", 'String'>
    readonly no_fast_driver: FieldRef<"Conductor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conductor findUnique
   */
  export type ConductorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findUniqueOrThrow
   */
  export type ConductorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor findFirst
   */
  export type ConductorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findFirstOrThrow
   */
  export type ConductorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductor to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conductors.
     */
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor findMany
   */
  export type ConductorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter, which Conductors to fetch.
     */
    where?: ConductorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conductors to fetch.
     */
    orderBy?: ConductorOrderByWithRelationInput | ConductorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conductors.
     */
    cursor?: ConductorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conductors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conductors.
     */
    skip?: number
    distinct?: ConductorScalarFieldEnum | ConductorScalarFieldEnum[]
  }

  /**
   * Conductor create
   */
  export type ConductorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to create a Conductor.
     */
    data: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
  }

  /**
   * Conductor createMany
   */
  export type ConductorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor createManyAndReturn
   */
  export type ConductorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to create many Conductors.
     */
    data: ConductorCreateManyInput | ConductorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conductor update
   */
  export type ConductorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The data needed to update a Conductor.
     */
    data: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
    /**
     * Choose, which Conductor to update.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor updateMany
   */
  export type ConductorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor updateManyAndReturn
   */
  export type ConductorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * The data used to update Conductors.
     */
    data: XOR<ConductorUpdateManyMutationInput, ConductorUncheckedUpdateManyInput>
    /**
     * Filter which Conductors to update
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to update.
     */
    limit?: number
  }

  /**
   * Conductor upsert
   */
  export type ConductorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * The filter to search for the Conductor to update in case it exists.
     */
    where: ConductorWhereUniqueInput
    /**
     * In case the Conductor found by the `where` argument doesn't exist, create a new Conductor with this data.
     */
    create: XOR<ConductorCreateInput, ConductorUncheckedCreateInput>
    /**
     * In case the Conductor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConductorUpdateInput, ConductorUncheckedUpdateInput>
  }

  /**
   * Conductor delete
   */
  export type ConductorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
    /**
     * Filter which Conductor to delete.
     */
    where: ConductorWhereUniqueInput
  }

  /**
   * Conductor deleteMany
   */
  export type ConductorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conductors to delete
     */
    where?: ConductorWhereInput
    /**
     * Limit how many Conductors to delete.
     */
    limit?: number
  }

  /**
   * Conductor.turnos
   */
  export type Conductor$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    where?: TurnosWhereInput
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    cursor?: TurnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Conductor without action
   */
  export type ConductorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conductor
     */
    select?: ConductorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conductor
     */
    omit?: ConductorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConductorInclude<ExtArgs> | null
  }


  /**
   * Model Paramedico
   */

  export type AggregateParamedico = {
    _count: ParamedicoCountAggregateOutputType | null
    _avg: ParamedicoAvgAggregateOutputType | null
    _sum: ParamedicoSumAggregateOutputType | null
    _min: ParamedicoMinAggregateOutputType | null
    _max: ParamedicoMaxAggregateOutputType | null
  }

  export type ParamedicoAvgAggregateOutputType = {
    id: number | null
  }

  export type ParamedicoSumAggregateOutputType = {
    id: number | null
  }

  export type ParamedicoMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    tipo_medic: string | null
    no_ci_medic: string | null
    id_capacitation: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type ParamedicoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    tipo_medic: string | null
    no_ci_medic: string | null
    id_capacitation: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type ParamedicoCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    document: number
    tipo_medic: number
    no_ci_medic: number
    id_capacitation: number
    password: number
    role: number
    _all: number
  }


  export type ParamedicoAvgAggregateInputType = {
    id?: true
  }

  export type ParamedicoSumAggregateInputType = {
    id?: true
  }

  export type ParamedicoMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    tipo_medic?: true
    no_ci_medic?: true
    id_capacitation?: true
    password?: true
    role?: true
  }

  export type ParamedicoMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    tipo_medic?: true
    no_ci_medic?: true
    id_capacitation?: true
    password?: true
    role?: true
  }

  export type ParamedicoCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    tipo_medic?: true
    no_ci_medic?: true
    id_capacitation?: true
    password?: true
    role?: true
    _all?: true
  }

  export type ParamedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paramedico to aggregate.
     */
    where?: ParamedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paramedicos to fetch.
     */
    orderBy?: ParamedicoOrderByWithRelationInput | ParamedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParamedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paramedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paramedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paramedicos
    **/
    _count?: true | ParamedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParamedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParamedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParamedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParamedicoMaxAggregateInputType
  }

  export type GetParamedicoAggregateType<T extends ParamedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateParamedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParamedico[P]>
      : GetScalarType<T[P], AggregateParamedico[P]>
  }




  export type ParamedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParamedicoWhereInput
    orderBy?: ParamedicoOrderByWithAggregationInput | ParamedicoOrderByWithAggregationInput[]
    by: ParamedicoScalarFieldEnum[] | ParamedicoScalarFieldEnum
    having?: ParamedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParamedicoCountAggregateInputType | true
    _avg?: ParamedicoAvgAggregateInputType
    _sum?: ParamedicoSumAggregateInputType
    _min?: ParamedicoMinAggregateInputType
    _max?: ParamedicoMaxAggregateInputType
  }

  export type ParamedicoGroupByOutputType = {
    id: number
    name: string
    last_name: string
    document: string
    tipo_medic: string
    no_ci_medic: string
    id_capacitation: string
    password: string
    role: $Enums.Role
    _count: ParamedicoCountAggregateOutputType | null
    _avg: ParamedicoAvgAggregateOutputType | null
    _sum: ParamedicoSumAggregateOutputType | null
    _min: ParamedicoMinAggregateOutputType | null
    _max: ParamedicoMaxAggregateOutputType | null
  }

  type GetParamedicoGroupByPayload<T extends ParamedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParamedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParamedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParamedicoGroupByOutputType[P]>
            : GetScalarType<T[P], ParamedicoGroupByOutputType[P]>
        }
      >
    >


  export type ParamedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    tipo_medic?: boolean
    no_ci_medic?: boolean
    id_capacitation?: boolean
    password?: boolean
    role?: boolean
    turnos?: boolean | Paramedico$turnosArgs<ExtArgs>
    _count?: boolean | ParamedicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paramedico"]>

  export type ParamedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    tipo_medic?: boolean
    no_ci_medic?: boolean
    id_capacitation?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["paramedico"]>

  export type ParamedicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    tipo_medic?: boolean
    no_ci_medic?: boolean
    id_capacitation?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["paramedico"]>

  export type ParamedicoSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    tipo_medic?: boolean
    no_ci_medic?: boolean
    id_capacitation?: boolean
    password?: boolean
    role?: boolean
  }

  export type ParamedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "last_name" | "document" | "tipo_medic" | "no_ci_medic" | "id_capacitation" | "password" | "role", ExtArgs["result"]["paramedico"]>
  export type ParamedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | Paramedico$turnosArgs<ExtArgs>
    _count?: boolean | ParamedicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParamedicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParamedicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParamedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paramedico"
    objects: {
      turnos: Prisma.$TurnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      last_name: string
      document: string
      tipo_medic: string
      no_ci_medic: string
      id_capacitation: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["paramedico"]>
    composites: {}
  }

  type ParamedicoGetPayload<S extends boolean | null | undefined | ParamedicoDefaultArgs> = $Result.GetResult<Prisma.$ParamedicoPayload, S>

  type ParamedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParamedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParamedicoCountAggregateInputType | true
    }

  export interface ParamedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paramedico'], meta: { name: 'Paramedico' } }
    /**
     * Find zero or one Paramedico that matches the filter.
     * @param {ParamedicoFindUniqueArgs} args - Arguments to find a Paramedico
     * @example
     * // Get one Paramedico
     * const paramedico = await prisma.paramedico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParamedicoFindUniqueArgs>(args: SelectSubset<T, ParamedicoFindUniqueArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paramedico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParamedicoFindUniqueOrThrowArgs} args - Arguments to find a Paramedico
     * @example
     * // Get one Paramedico
     * const paramedico = await prisma.paramedico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParamedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParamedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paramedico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoFindFirstArgs} args - Arguments to find a Paramedico
     * @example
     * // Get one Paramedico
     * const paramedico = await prisma.paramedico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParamedicoFindFirstArgs>(args?: SelectSubset<T, ParamedicoFindFirstArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paramedico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoFindFirstOrThrowArgs} args - Arguments to find a Paramedico
     * @example
     * // Get one Paramedico
     * const paramedico = await prisma.paramedico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParamedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParamedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paramedicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paramedicos
     * const paramedicos = await prisma.paramedico.findMany()
     * 
     * // Get first 10 Paramedicos
     * const paramedicos = await prisma.paramedico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paramedicoWithIdOnly = await prisma.paramedico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParamedicoFindManyArgs>(args?: SelectSubset<T, ParamedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paramedico.
     * @param {ParamedicoCreateArgs} args - Arguments to create a Paramedico.
     * @example
     * // Create one Paramedico
     * const Paramedico = await prisma.paramedico.create({
     *   data: {
     *     // ... data to create a Paramedico
     *   }
     * })
     * 
     */
    create<T extends ParamedicoCreateArgs>(args: SelectSubset<T, ParamedicoCreateArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paramedicos.
     * @param {ParamedicoCreateManyArgs} args - Arguments to create many Paramedicos.
     * @example
     * // Create many Paramedicos
     * const paramedico = await prisma.paramedico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParamedicoCreateManyArgs>(args?: SelectSubset<T, ParamedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paramedicos and returns the data saved in the database.
     * @param {ParamedicoCreateManyAndReturnArgs} args - Arguments to create many Paramedicos.
     * @example
     * // Create many Paramedicos
     * const paramedico = await prisma.paramedico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paramedicos and only return the `id`
     * const paramedicoWithIdOnly = await prisma.paramedico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParamedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ParamedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paramedico.
     * @param {ParamedicoDeleteArgs} args - Arguments to delete one Paramedico.
     * @example
     * // Delete one Paramedico
     * const Paramedico = await prisma.paramedico.delete({
     *   where: {
     *     // ... filter to delete one Paramedico
     *   }
     * })
     * 
     */
    delete<T extends ParamedicoDeleteArgs>(args: SelectSubset<T, ParamedicoDeleteArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paramedico.
     * @param {ParamedicoUpdateArgs} args - Arguments to update one Paramedico.
     * @example
     * // Update one Paramedico
     * const paramedico = await prisma.paramedico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParamedicoUpdateArgs>(args: SelectSubset<T, ParamedicoUpdateArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paramedicos.
     * @param {ParamedicoDeleteManyArgs} args - Arguments to filter Paramedicos to delete.
     * @example
     * // Delete a few Paramedicos
     * const { count } = await prisma.paramedico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParamedicoDeleteManyArgs>(args?: SelectSubset<T, ParamedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paramedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paramedicos
     * const paramedico = await prisma.paramedico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParamedicoUpdateManyArgs>(args: SelectSubset<T, ParamedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paramedicos and returns the data updated in the database.
     * @param {ParamedicoUpdateManyAndReturnArgs} args - Arguments to update many Paramedicos.
     * @example
     * // Update many Paramedicos
     * const paramedico = await prisma.paramedico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paramedicos and only return the `id`
     * const paramedicoWithIdOnly = await prisma.paramedico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParamedicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ParamedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paramedico.
     * @param {ParamedicoUpsertArgs} args - Arguments to update or create a Paramedico.
     * @example
     * // Update or create a Paramedico
     * const paramedico = await prisma.paramedico.upsert({
     *   create: {
     *     // ... data to create a Paramedico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paramedico we want to update
     *   }
     * })
     */
    upsert<T extends ParamedicoUpsertArgs>(args: SelectSubset<T, ParamedicoUpsertArgs<ExtArgs>>): Prisma__ParamedicoClient<$Result.GetResult<Prisma.$ParamedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paramedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoCountArgs} args - Arguments to filter Paramedicos to count.
     * @example
     * // Count the number of Paramedicos
     * const count = await prisma.paramedico.count({
     *   where: {
     *     // ... the filter for the Paramedicos we want to count
     *   }
     * })
    **/
    count<T extends ParamedicoCountArgs>(
      args?: Subset<T, ParamedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParamedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paramedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParamedicoAggregateArgs>(args: Subset<T, ParamedicoAggregateArgs>): Prisma.PrismaPromise<GetParamedicoAggregateType<T>>

    /**
     * Group by Paramedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParamedicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParamedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParamedicoGroupByArgs['orderBy'] }
        : { orderBy?: ParamedicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParamedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParamedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paramedico model
   */
  readonly fields: ParamedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paramedico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParamedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turnos<T extends Paramedico$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Paramedico$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paramedico model
   */
  interface ParamedicoFieldRefs {
    readonly id: FieldRef<"Paramedico", 'Int'>
    readonly name: FieldRef<"Paramedico", 'String'>
    readonly last_name: FieldRef<"Paramedico", 'String'>
    readonly document: FieldRef<"Paramedico", 'String'>
    readonly tipo_medic: FieldRef<"Paramedico", 'String'>
    readonly no_ci_medic: FieldRef<"Paramedico", 'String'>
    readonly id_capacitation: FieldRef<"Paramedico", 'String'>
    readonly password: FieldRef<"Paramedico", 'String'>
    readonly role: FieldRef<"Paramedico", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Paramedico findUnique
   */
  export type ParamedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * Filter, which Paramedico to fetch.
     */
    where: ParamedicoWhereUniqueInput
  }

  /**
   * Paramedico findUniqueOrThrow
   */
  export type ParamedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * Filter, which Paramedico to fetch.
     */
    where: ParamedicoWhereUniqueInput
  }

  /**
   * Paramedico findFirst
   */
  export type ParamedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * Filter, which Paramedico to fetch.
     */
    where?: ParamedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paramedicos to fetch.
     */
    orderBy?: ParamedicoOrderByWithRelationInput | ParamedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paramedicos.
     */
    cursor?: ParamedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paramedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paramedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paramedicos.
     */
    distinct?: ParamedicoScalarFieldEnum | ParamedicoScalarFieldEnum[]
  }

  /**
   * Paramedico findFirstOrThrow
   */
  export type ParamedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * Filter, which Paramedico to fetch.
     */
    where?: ParamedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paramedicos to fetch.
     */
    orderBy?: ParamedicoOrderByWithRelationInput | ParamedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paramedicos.
     */
    cursor?: ParamedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paramedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paramedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paramedicos.
     */
    distinct?: ParamedicoScalarFieldEnum | ParamedicoScalarFieldEnum[]
  }

  /**
   * Paramedico findMany
   */
  export type ParamedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * Filter, which Paramedicos to fetch.
     */
    where?: ParamedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paramedicos to fetch.
     */
    orderBy?: ParamedicoOrderByWithRelationInput | ParamedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paramedicos.
     */
    cursor?: ParamedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paramedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paramedicos.
     */
    skip?: number
    distinct?: ParamedicoScalarFieldEnum | ParamedicoScalarFieldEnum[]
  }

  /**
   * Paramedico create
   */
  export type ParamedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Paramedico.
     */
    data: XOR<ParamedicoCreateInput, ParamedicoUncheckedCreateInput>
  }

  /**
   * Paramedico createMany
   */
  export type ParamedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paramedicos.
     */
    data: ParamedicoCreateManyInput | ParamedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paramedico createManyAndReturn
   */
  export type ParamedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * The data used to create many Paramedicos.
     */
    data: ParamedicoCreateManyInput | ParamedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paramedico update
   */
  export type ParamedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Paramedico.
     */
    data: XOR<ParamedicoUpdateInput, ParamedicoUncheckedUpdateInput>
    /**
     * Choose, which Paramedico to update.
     */
    where: ParamedicoWhereUniqueInput
  }

  /**
   * Paramedico updateMany
   */
  export type ParamedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paramedicos.
     */
    data: XOR<ParamedicoUpdateManyMutationInput, ParamedicoUncheckedUpdateManyInput>
    /**
     * Filter which Paramedicos to update
     */
    where?: ParamedicoWhereInput
    /**
     * Limit how many Paramedicos to update.
     */
    limit?: number
  }

  /**
   * Paramedico updateManyAndReturn
   */
  export type ParamedicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * The data used to update Paramedicos.
     */
    data: XOR<ParamedicoUpdateManyMutationInput, ParamedicoUncheckedUpdateManyInput>
    /**
     * Filter which Paramedicos to update
     */
    where?: ParamedicoWhereInput
    /**
     * Limit how many Paramedicos to update.
     */
    limit?: number
  }

  /**
   * Paramedico upsert
   */
  export type ParamedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Paramedico to update in case it exists.
     */
    where: ParamedicoWhereUniqueInput
    /**
     * In case the Paramedico found by the `where` argument doesn't exist, create a new Paramedico with this data.
     */
    create: XOR<ParamedicoCreateInput, ParamedicoUncheckedCreateInput>
    /**
     * In case the Paramedico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParamedicoUpdateInput, ParamedicoUncheckedUpdateInput>
  }

  /**
   * Paramedico delete
   */
  export type ParamedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
    /**
     * Filter which Paramedico to delete.
     */
    where: ParamedicoWhereUniqueInput
  }

  /**
   * Paramedico deleteMany
   */
  export type ParamedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paramedicos to delete
     */
    where?: ParamedicoWhereInput
    /**
     * Limit how many Paramedicos to delete.
     */
    limit?: number
  }

  /**
   * Paramedico.turnos
   */
  export type Paramedico$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    where?: TurnosWhereInput
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    cursor?: TurnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Paramedico without action
   */
  export type ParamedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paramedico
     */
    select?: ParamedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paramedico
     */
    omit?: ParamedicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParamedicoInclude<ExtArgs> | null
  }


  /**
   * Model Auxiliar
   */

  export type AggregateAuxiliar = {
    _count: AuxiliarCountAggregateOutputType | null
    _avg: AuxiliarAvgAggregateOutputType | null
    _sum: AuxiliarSumAggregateOutputType | null
    _min: AuxiliarMinAggregateOutputType | null
    _max: AuxiliarMaxAggregateOutputType | null
  }

  export type AuxiliarAvgAggregateOutputType = {
    id: number | null
  }

  export type AuxiliarSumAggregateOutputType = {
    id: number | null
  }

  export type AuxiliarMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    no_ci_auxiliar: string | null
    no_ci_soporte_vital: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type AuxiliarMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    document: string | null
    no_ci_auxiliar: string | null
    no_ci_soporte_vital: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type AuxiliarCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    document: number
    no_ci_auxiliar: number
    no_ci_soporte_vital: number
    password: number
    role: number
    _all: number
  }


  export type AuxiliarAvgAggregateInputType = {
    id?: true
  }

  export type AuxiliarSumAggregateInputType = {
    id?: true
  }

  export type AuxiliarMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    no_ci_auxiliar?: true
    no_ci_soporte_vital?: true
    password?: true
    role?: true
  }

  export type AuxiliarMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    no_ci_auxiliar?: true
    no_ci_soporte_vital?: true
    password?: true
    role?: true
  }

  export type AuxiliarCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    document?: true
    no_ci_auxiliar?: true
    no_ci_soporte_vital?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AuxiliarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auxiliar to aggregate.
     */
    where?: AuxiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auxiliars to fetch.
     */
    orderBy?: AuxiliarOrderByWithRelationInput | AuxiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuxiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auxiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auxiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auxiliars
    **/
    _count?: true | AuxiliarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuxiliarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuxiliarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuxiliarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuxiliarMaxAggregateInputType
  }

  export type GetAuxiliarAggregateType<T extends AuxiliarAggregateArgs> = {
        [P in keyof T & keyof AggregateAuxiliar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuxiliar[P]>
      : GetScalarType<T[P], AggregateAuxiliar[P]>
  }




  export type AuxiliarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuxiliarWhereInput
    orderBy?: AuxiliarOrderByWithAggregationInput | AuxiliarOrderByWithAggregationInput[]
    by: AuxiliarScalarFieldEnum[] | AuxiliarScalarFieldEnum
    having?: AuxiliarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuxiliarCountAggregateInputType | true
    _avg?: AuxiliarAvgAggregateInputType
    _sum?: AuxiliarSumAggregateInputType
    _min?: AuxiliarMinAggregateInputType
    _max?: AuxiliarMaxAggregateInputType
  }

  export type AuxiliarGroupByOutputType = {
    id: number
    name: string
    last_name: string
    document: string
    no_ci_auxiliar: string
    no_ci_soporte_vital: string
    password: string
    role: $Enums.Role
    _count: AuxiliarCountAggregateOutputType | null
    _avg: AuxiliarAvgAggregateOutputType | null
    _sum: AuxiliarSumAggregateOutputType | null
    _min: AuxiliarMinAggregateOutputType | null
    _max: AuxiliarMaxAggregateOutputType | null
  }

  type GetAuxiliarGroupByPayload<T extends AuxiliarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuxiliarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuxiliarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuxiliarGroupByOutputType[P]>
            : GetScalarType<T[P], AuxiliarGroupByOutputType[P]>
        }
      >
    >


  export type AuxiliarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_ci_auxiliar?: boolean
    no_ci_soporte_vital?: boolean
    password?: boolean
    role?: boolean
    turnos?: boolean | Auxiliar$turnosArgs<ExtArgs>
    _count?: boolean | AuxiliarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auxiliar"]>

  export type AuxiliarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_ci_auxiliar?: boolean
    no_ci_soporte_vital?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["auxiliar"]>

  export type AuxiliarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_ci_auxiliar?: boolean
    no_ci_soporte_vital?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["auxiliar"]>

  export type AuxiliarSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    document?: boolean
    no_ci_auxiliar?: boolean
    no_ci_soporte_vital?: boolean
    password?: boolean
    role?: boolean
  }

  export type AuxiliarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "last_name" | "document" | "no_ci_auxiliar" | "no_ci_soporte_vital" | "password" | "role", ExtArgs["result"]["auxiliar"]>
  export type AuxiliarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | Auxiliar$turnosArgs<ExtArgs>
    _count?: boolean | AuxiliarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuxiliarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuxiliarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuxiliarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auxiliar"
    objects: {
      turnos: Prisma.$TurnosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      last_name: string
      document: string
      no_ci_auxiliar: string
      no_ci_soporte_vital: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["auxiliar"]>
    composites: {}
  }

  type AuxiliarGetPayload<S extends boolean | null | undefined | AuxiliarDefaultArgs> = $Result.GetResult<Prisma.$AuxiliarPayload, S>

  type AuxiliarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuxiliarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuxiliarCountAggregateInputType | true
    }

  export interface AuxiliarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auxiliar'], meta: { name: 'Auxiliar' } }
    /**
     * Find zero or one Auxiliar that matches the filter.
     * @param {AuxiliarFindUniqueArgs} args - Arguments to find a Auxiliar
     * @example
     * // Get one Auxiliar
     * const auxiliar = await prisma.auxiliar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuxiliarFindUniqueArgs>(args: SelectSubset<T, AuxiliarFindUniqueArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auxiliar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuxiliarFindUniqueOrThrowArgs} args - Arguments to find a Auxiliar
     * @example
     * // Get one Auxiliar
     * const auxiliar = await prisma.auxiliar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuxiliarFindUniqueOrThrowArgs>(args: SelectSubset<T, AuxiliarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auxiliar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarFindFirstArgs} args - Arguments to find a Auxiliar
     * @example
     * // Get one Auxiliar
     * const auxiliar = await prisma.auxiliar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuxiliarFindFirstArgs>(args?: SelectSubset<T, AuxiliarFindFirstArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auxiliar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarFindFirstOrThrowArgs} args - Arguments to find a Auxiliar
     * @example
     * // Get one Auxiliar
     * const auxiliar = await prisma.auxiliar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuxiliarFindFirstOrThrowArgs>(args?: SelectSubset<T, AuxiliarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auxiliars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auxiliars
     * const auxiliars = await prisma.auxiliar.findMany()
     * 
     * // Get first 10 Auxiliars
     * const auxiliars = await prisma.auxiliar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auxiliarWithIdOnly = await prisma.auxiliar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuxiliarFindManyArgs>(args?: SelectSubset<T, AuxiliarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auxiliar.
     * @param {AuxiliarCreateArgs} args - Arguments to create a Auxiliar.
     * @example
     * // Create one Auxiliar
     * const Auxiliar = await prisma.auxiliar.create({
     *   data: {
     *     // ... data to create a Auxiliar
     *   }
     * })
     * 
     */
    create<T extends AuxiliarCreateArgs>(args: SelectSubset<T, AuxiliarCreateArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auxiliars.
     * @param {AuxiliarCreateManyArgs} args - Arguments to create many Auxiliars.
     * @example
     * // Create many Auxiliars
     * const auxiliar = await prisma.auxiliar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuxiliarCreateManyArgs>(args?: SelectSubset<T, AuxiliarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auxiliars and returns the data saved in the database.
     * @param {AuxiliarCreateManyAndReturnArgs} args - Arguments to create many Auxiliars.
     * @example
     * // Create many Auxiliars
     * const auxiliar = await prisma.auxiliar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auxiliars and only return the `id`
     * const auxiliarWithIdOnly = await prisma.auxiliar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuxiliarCreateManyAndReturnArgs>(args?: SelectSubset<T, AuxiliarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auxiliar.
     * @param {AuxiliarDeleteArgs} args - Arguments to delete one Auxiliar.
     * @example
     * // Delete one Auxiliar
     * const Auxiliar = await prisma.auxiliar.delete({
     *   where: {
     *     // ... filter to delete one Auxiliar
     *   }
     * })
     * 
     */
    delete<T extends AuxiliarDeleteArgs>(args: SelectSubset<T, AuxiliarDeleteArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auxiliar.
     * @param {AuxiliarUpdateArgs} args - Arguments to update one Auxiliar.
     * @example
     * // Update one Auxiliar
     * const auxiliar = await prisma.auxiliar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuxiliarUpdateArgs>(args: SelectSubset<T, AuxiliarUpdateArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auxiliars.
     * @param {AuxiliarDeleteManyArgs} args - Arguments to filter Auxiliars to delete.
     * @example
     * // Delete a few Auxiliars
     * const { count } = await prisma.auxiliar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuxiliarDeleteManyArgs>(args?: SelectSubset<T, AuxiliarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auxiliars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auxiliars
     * const auxiliar = await prisma.auxiliar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuxiliarUpdateManyArgs>(args: SelectSubset<T, AuxiliarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auxiliars and returns the data updated in the database.
     * @param {AuxiliarUpdateManyAndReturnArgs} args - Arguments to update many Auxiliars.
     * @example
     * // Update many Auxiliars
     * const auxiliar = await prisma.auxiliar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auxiliars and only return the `id`
     * const auxiliarWithIdOnly = await prisma.auxiliar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuxiliarUpdateManyAndReturnArgs>(args: SelectSubset<T, AuxiliarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auxiliar.
     * @param {AuxiliarUpsertArgs} args - Arguments to update or create a Auxiliar.
     * @example
     * // Update or create a Auxiliar
     * const auxiliar = await prisma.auxiliar.upsert({
     *   create: {
     *     // ... data to create a Auxiliar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auxiliar we want to update
     *   }
     * })
     */
    upsert<T extends AuxiliarUpsertArgs>(args: SelectSubset<T, AuxiliarUpsertArgs<ExtArgs>>): Prisma__AuxiliarClient<$Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auxiliars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarCountArgs} args - Arguments to filter Auxiliars to count.
     * @example
     * // Count the number of Auxiliars
     * const count = await prisma.auxiliar.count({
     *   where: {
     *     // ... the filter for the Auxiliars we want to count
     *   }
     * })
    **/
    count<T extends AuxiliarCountArgs>(
      args?: Subset<T, AuxiliarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuxiliarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auxiliar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuxiliarAggregateArgs>(args: Subset<T, AuxiliarAggregateArgs>): Prisma.PrismaPromise<GetAuxiliarAggregateType<T>>

    /**
     * Group by Auxiliar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuxiliarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuxiliarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuxiliarGroupByArgs['orderBy'] }
        : { orderBy?: AuxiliarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuxiliarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuxiliarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auxiliar model
   */
  readonly fields: AuxiliarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auxiliar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuxiliarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turnos<T extends Auxiliar$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Auxiliar$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auxiliar model
   */
  interface AuxiliarFieldRefs {
    readonly id: FieldRef<"Auxiliar", 'Int'>
    readonly name: FieldRef<"Auxiliar", 'String'>
    readonly last_name: FieldRef<"Auxiliar", 'String'>
    readonly document: FieldRef<"Auxiliar", 'String'>
    readonly no_ci_auxiliar: FieldRef<"Auxiliar", 'String'>
    readonly no_ci_soporte_vital: FieldRef<"Auxiliar", 'String'>
    readonly password: FieldRef<"Auxiliar", 'String'>
    readonly role: FieldRef<"Auxiliar", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Auxiliar findUnique
   */
  export type AuxiliarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * Filter, which Auxiliar to fetch.
     */
    where: AuxiliarWhereUniqueInput
  }

  /**
   * Auxiliar findUniqueOrThrow
   */
  export type AuxiliarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * Filter, which Auxiliar to fetch.
     */
    where: AuxiliarWhereUniqueInput
  }

  /**
   * Auxiliar findFirst
   */
  export type AuxiliarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * Filter, which Auxiliar to fetch.
     */
    where?: AuxiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auxiliars to fetch.
     */
    orderBy?: AuxiliarOrderByWithRelationInput | AuxiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auxiliars.
     */
    cursor?: AuxiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auxiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auxiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auxiliars.
     */
    distinct?: AuxiliarScalarFieldEnum | AuxiliarScalarFieldEnum[]
  }

  /**
   * Auxiliar findFirstOrThrow
   */
  export type AuxiliarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * Filter, which Auxiliar to fetch.
     */
    where?: AuxiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auxiliars to fetch.
     */
    orderBy?: AuxiliarOrderByWithRelationInput | AuxiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auxiliars.
     */
    cursor?: AuxiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auxiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auxiliars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auxiliars.
     */
    distinct?: AuxiliarScalarFieldEnum | AuxiliarScalarFieldEnum[]
  }

  /**
   * Auxiliar findMany
   */
  export type AuxiliarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * Filter, which Auxiliars to fetch.
     */
    where?: AuxiliarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auxiliars to fetch.
     */
    orderBy?: AuxiliarOrderByWithRelationInput | AuxiliarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auxiliars.
     */
    cursor?: AuxiliarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auxiliars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auxiliars.
     */
    skip?: number
    distinct?: AuxiliarScalarFieldEnum | AuxiliarScalarFieldEnum[]
  }

  /**
   * Auxiliar create
   */
  export type AuxiliarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * The data needed to create a Auxiliar.
     */
    data: XOR<AuxiliarCreateInput, AuxiliarUncheckedCreateInput>
  }

  /**
   * Auxiliar createMany
   */
  export type AuxiliarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auxiliars.
     */
    data: AuxiliarCreateManyInput | AuxiliarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auxiliar createManyAndReturn
   */
  export type AuxiliarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * The data used to create many Auxiliars.
     */
    data: AuxiliarCreateManyInput | AuxiliarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auxiliar update
   */
  export type AuxiliarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * The data needed to update a Auxiliar.
     */
    data: XOR<AuxiliarUpdateInput, AuxiliarUncheckedUpdateInput>
    /**
     * Choose, which Auxiliar to update.
     */
    where: AuxiliarWhereUniqueInput
  }

  /**
   * Auxiliar updateMany
   */
  export type AuxiliarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auxiliars.
     */
    data: XOR<AuxiliarUpdateManyMutationInput, AuxiliarUncheckedUpdateManyInput>
    /**
     * Filter which Auxiliars to update
     */
    where?: AuxiliarWhereInput
    /**
     * Limit how many Auxiliars to update.
     */
    limit?: number
  }

  /**
   * Auxiliar updateManyAndReturn
   */
  export type AuxiliarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * The data used to update Auxiliars.
     */
    data: XOR<AuxiliarUpdateManyMutationInput, AuxiliarUncheckedUpdateManyInput>
    /**
     * Filter which Auxiliars to update
     */
    where?: AuxiliarWhereInput
    /**
     * Limit how many Auxiliars to update.
     */
    limit?: number
  }

  /**
   * Auxiliar upsert
   */
  export type AuxiliarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * The filter to search for the Auxiliar to update in case it exists.
     */
    where: AuxiliarWhereUniqueInput
    /**
     * In case the Auxiliar found by the `where` argument doesn't exist, create a new Auxiliar with this data.
     */
    create: XOR<AuxiliarCreateInput, AuxiliarUncheckedCreateInput>
    /**
     * In case the Auxiliar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuxiliarUpdateInput, AuxiliarUncheckedUpdateInput>
  }

  /**
   * Auxiliar delete
   */
  export type AuxiliarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
    /**
     * Filter which Auxiliar to delete.
     */
    where: AuxiliarWhereUniqueInput
  }

  /**
   * Auxiliar deleteMany
   */
  export type AuxiliarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auxiliars to delete
     */
    where?: AuxiliarWhereInput
    /**
     * Limit how many Auxiliars to delete.
     */
    limit?: number
  }

  /**
   * Auxiliar.turnos
   */
  export type Auxiliar$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turnos
     */
    omit?: TurnosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnosInclude<ExtArgs> | null
    where?: TurnosWhereInput
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    cursor?: TurnosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Auxiliar without action
   */
  export type AuxiliarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auxiliar
     */
    select?: AuxiliarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auxiliar
     */
    omit?: AuxiliarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuxiliarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IpsScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion'
  };

  export type IpsScalarFieldEnum = (typeof IpsScalarFieldEnum)[keyof typeof IpsScalarFieldEnum]


  export const AmbulanciaScalarFieldEnum: {
    id: 'id',
    modelo: 'modelo',
    placa: 'placa',
    tipo: 'tipo',
    ipsId: 'ipsId'
  };

  export type AmbulanciaScalarFieldEnum = (typeof AmbulanciaScalarFieldEnum)[keyof typeof AmbulanciaScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
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

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const ComplicacionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    id_servicio: 'id_servicio'
  };

  export type ComplicacionScalarFieldEnum = (typeof ComplicacionScalarFieldEnum)[keyof typeof ComplicacionScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    last_name: 'last_name',
    document: 'document',
    entidad_salud: 'entidad_salud'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const DescripcionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    type_context: 'type_context',
    implicados: 'implicados'
  };

  export type DescripcionScalarFieldEnum = (typeof DescripcionScalarFieldEnum)[keyof typeof DescripcionScalarFieldEnum]


  export const TurnosScalarFieldEnum: {
    id: 'id',
    time_start: 'time_start',
    time_end: 'time_end',
    paramedicId: 'paramedicId',
    auxiliarId: 'auxiliarId',
    conductorId: 'conductorId',
    ambulanciaId: 'ambulanciaId'
  };

  export type TurnosScalarFieldEnum = (typeof TurnosScalarFieldEnum)[keyof typeof TurnosScalarFieldEnum]


  export const ConductorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    last_name: 'last_name',
    document: 'document',
    no_licencia: 'no_licencia',
    no_fast_driver: 'no_fast_driver'
  };

  export type ConductorScalarFieldEnum = (typeof ConductorScalarFieldEnum)[keyof typeof ConductorScalarFieldEnum]


  export const ParamedicoScalarFieldEnum: {
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

  export type ParamedicoScalarFieldEnum = (typeof ParamedicoScalarFieldEnum)[keyof typeof ParamedicoScalarFieldEnum]


  export const AuxiliarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    last_name: 'last_name',
    document: 'document',
    no_ci_auxiliar: 'no_ci_auxiliar',
    no_ci_soporte_vital: 'no_ci_soporte_vital',
    password: 'password',
    role: 'role'
  };

  export type AuxiliarScalarFieldEnum = (typeof AuxiliarScalarFieldEnum)[keyof typeof AuxiliarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Typecomplicacion'
   */
  export type EnumTypecomplicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Typecomplicacion'>
    


  /**
   * Reference to a field of type 'Typecomplicacion[]'
   */
  export type ListEnumTypecomplicacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Typecomplicacion[]'>
    


  /**
   * Reference to a field of type 'TypeContext'
   */
  export type EnumTypeContextFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeContext'>
    


  /**
   * Reference to a field of type 'TypeContext[]'
   */
  export type ListEnumTypeContextFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeContext[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type IpsWhereInput = {
    AND?: IpsWhereInput | IpsWhereInput[]
    OR?: IpsWhereInput[]
    NOT?: IpsWhereInput | IpsWhereInput[]
    id?: IntFilter<"Ips"> | number
    nombre?: StringFilter<"Ips"> | string
    direccion?: StringFilter<"Ips"> | string
    ambulancias?: AmbulanciaListRelationFilter
  }

  export type IpsOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    ambulancias?: AmbulanciaOrderByRelationAggregateInput
  }

  export type IpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IpsWhereInput | IpsWhereInput[]
    OR?: IpsWhereInput[]
    NOT?: IpsWhereInput | IpsWhereInput[]
    nombre?: StringFilter<"Ips"> | string
    direccion?: StringFilter<"Ips"> | string
    ambulancias?: AmbulanciaListRelationFilter
  }, "id">

  export type IpsOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    _count?: IpsCountOrderByAggregateInput
    _avg?: IpsAvgOrderByAggregateInput
    _max?: IpsMaxOrderByAggregateInput
    _min?: IpsMinOrderByAggregateInput
    _sum?: IpsSumOrderByAggregateInput
  }

  export type IpsScalarWhereWithAggregatesInput = {
    AND?: IpsScalarWhereWithAggregatesInput | IpsScalarWhereWithAggregatesInput[]
    OR?: IpsScalarWhereWithAggregatesInput[]
    NOT?: IpsScalarWhereWithAggregatesInput | IpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ips"> | number
    nombre?: StringWithAggregatesFilter<"Ips"> | string
    direccion?: StringWithAggregatesFilter<"Ips"> | string
  }

  export type AmbulanciaWhereInput = {
    AND?: AmbulanciaWhereInput | AmbulanciaWhereInput[]
    OR?: AmbulanciaWhereInput[]
    NOT?: AmbulanciaWhereInput | AmbulanciaWhereInput[]
    id?: IntFilter<"Ambulancia"> | number
    modelo?: StringFilter<"Ambulancia"> | string
    placa?: StringFilter<"Ambulancia"> | string
    tipo?: StringFilter<"Ambulancia"> | string
    ipsId?: IntFilter<"Ambulancia"> | number
    ips?: XOR<IpsScalarRelationFilter, IpsWhereInput>
    turnos?: TurnosListRelationFilter
  }

  export type AmbulanciaOrderByWithRelationInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    ipsId?: SortOrder
    ips?: IpsOrderByWithRelationInput
    turnos?: TurnosOrderByRelationAggregateInput
  }

  export type AmbulanciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placa?: string
    AND?: AmbulanciaWhereInput | AmbulanciaWhereInput[]
    OR?: AmbulanciaWhereInput[]
    NOT?: AmbulanciaWhereInput | AmbulanciaWhereInput[]
    modelo?: StringFilter<"Ambulancia"> | string
    tipo?: StringFilter<"Ambulancia"> | string
    ipsId?: IntFilter<"Ambulancia"> | number
    ips?: XOR<IpsScalarRelationFilter, IpsWhereInput>
    turnos?: TurnosListRelationFilter
  }, "id" | "placa">

  export type AmbulanciaOrderByWithAggregationInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    ipsId?: SortOrder
    _count?: AmbulanciaCountOrderByAggregateInput
    _avg?: AmbulanciaAvgOrderByAggregateInput
    _max?: AmbulanciaMaxOrderByAggregateInput
    _min?: AmbulanciaMinOrderByAggregateInput
    _sum?: AmbulanciaSumOrderByAggregateInput
  }

  export type AmbulanciaScalarWhereWithAggregatesInput = {
    AND?: AmbulanciaScalarWhereWithAggregatesInput | AmbulanciaScalarWhereWithAggregatesInput[]
    OR?: AmbulanciaScalarWhereWithAggregatesInput[]
    NOT?: AmbulanciaScalarWhereWithAggregatesInput | AmbulanciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ambulancia"> | number
    modelo?: StringWithAggregatesFilter<"Ambulancia"> | string
    placa?: StringWithAggregatesFilter<"Ambulancia"> | string
    tipo?: StringWithAggregatesFilter<"Ambulancia"> | string
    ipsId?: IntWithAggregatesFilter<"Ambulancia"> | number
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: IntFilter<"Servicio"> | number
    date?: DateTimeFilter<"Servicio"> | Date | string
    status?: EnumStatusFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeFilter<"Servicio"> | Date | string
    time_finish?: DateTimeFilter<"Servicio"> | Date | string
    code_start?: StringFilter<"Servicio"> | string
    code_end?: StringFilter<"Servicio"> | string
    place_accident?: StringFilter<"Servicio"> | string
    nro_informe?: StringFilter<"Servicio"> | string
    id_turno?: IntFilter<"Servicio"> | number
    id_paciente?: IntFilter<"Servicio"> | number
    id_descripcion?: IntFilter<"Servicio"> | number
    complicacion?: ComplicacionListRelationFilter
    turno?: XOR<TurnosScalarRelationFilter, TurnosWhereInput>
    paciente?: XOR<PacientesScalarRelationFilter, PacientesWhereInput>
    descripcion?: XOR<DescripcionScalarRelationFilter, DescripcionWhereInput>
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
    complicacion?: ComplicacionOrderByRelationAggregateInput
    turno?: TurnosOrderByWithRelationInput
    paciente?: PacientesOrderByWithRelationInput
    descripcion?: DescripcionOrderByWithRelationInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    date?: DateTimeFilter<"Servicio"> | Date | string
    status?: EnumStatusFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeFilter<"Servicio"> | Date | string
    time_finish?: DateTimeFilter<"Servicio"> | Date | string
    code_start?: StringFilter<"Servicio"> | string
    code_end?: StringFilter<"Servicio"> | string
    place_accident?: StringFilter<"Servicio"> | string
    nro_informe?: StringFilter<"Servicio"> | string
    id_turno?: IntFilter<"Servicio"> | number
    id_paciente?: IntFilter<"Servicio"> | number
    id_descripcion?: IntFilter<"Servicio"> | number
    complicacion?: ComplicacionListRelationFilter
    turno?: XOR<TurnosScalarRelationFilter, TurnosWhereInput>
    paciente?: XOR<PacientesScalarRelationFilter, PacientesWhereInput>
    descripcion?: XOR<DescripcionScalarRelationFilter, DescripcionWhereInput>
  }, "id">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicio"> | number
    date?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    time_finish?: DateTimeWithAggregatesFilter<"Servicio"> | Date | string
    code_start?: StringWithAggregatesFilter<"Servicio"> | string
    code_end?: StringWithAggregatesFilter<"Servicio"> | string
    place_accident?: StringWithAggregatesFilter<"Servicio"> | string
    nro_informe?: StringWithAggregatesFilter<"Servicio"> | string
    id_turno?: IntWithAggregatesFilter<"Servicio"> | number
    id_paciente?: IntWithAggregatesFilter<"Servicio"> | number
    id_descripcion?: IntWithAggregatesFilter<"Servicio"> | number
  }

  export type ComplicacionWhereInput = {
    AND?: ComplicacionWhereInput | ComplicacionWhereInput[]
    OR?: ComplicacionWhereInput[]
    NOT?: ComplicacionWhereInput | ComplicacionWhereInput[]
    id?: IntFilter<"Complicacion"> | number
    type?: EnumTypecomplicacionFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringFilter<"Complicacion"> | string
    id_servicio?: IntFilter<"Complicacion"> | number
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }

  export type ComplicacionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
    servicio?: ServicioOrderByWithRelationInput
  }

  export type ComplicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComplicacionWhereInput | ComplicacionWhereInput[]
    OR?: ComplicacionWhereInput[]
    NOT?: ComplicacionWhereInput | ComplicacionWhereInput[]
    type?: EnumTypecomplicacionFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringFilter<"Complicacion"> | string
    id_servicio?: IntFilter<"Complicacion"> | number
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }, "id">

  export type ComplicacionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
    _count?: ComplicacionCountOrderByAggregateInput
    _avg?: ComplicacionAvgOrderByAggregateInput
    _max?: ComplicacionMaxOrderByAggregateInput
    _min?: ComplicacionMinOrderByAggregateInput
    _sum?: ComplicacionSumOrderByAggregateInput
  }

  export type ComplicacionScalarWhereWithAggregatesInput = {
    AND?: ComplicacionScalarWhereWithAggregatesInput | ComplicacionScalarWhereWithAggregatesInput[]
    OR?: ComplicacionScalarWhereWithAggregatesInput[]
    NOT?: ComplicacionScalarWhereWithAggregatesInput | ComplicacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Complicacion"> | number
    type?: EnumTypecomplicacionWithAggregatesFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringWithAggregatesFilter<"Complicacion"> | string
    id_servicio?: IntWithAggregatesFilter<"Complicacion"> | number
  }

  export type PacientesWhereInput = {
    AND?: PacientesWhereInput | PacientesWhereInput[]
    OR?: PacientesWhereInput[]
    NOT?: PacientesWhereInput | PacientesWhereInput[]
    id?: IntFilter<"Pacientes"> | number
    name?: StringFilter<"Pacientes"> | string
    last_name?: StringFilter<"Pacientes"> | string
    document?: StringFilter<"Pacientes"> | string
    entidad_salud?: StringFilter<"Pacientes"> | string
    servicios?: ServicioListRelationFilter
  }

  export type PacientesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    entidad_salud?: SortOrder
    servicios?: ServicioOrderByRelationAggregateInput
  }

  export type PacientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document?: string
    AND?: PacientesWhereInput | PacientesWhereInput[]
    OR?: PacientesWhereInput[]
    NOT?: PacientesWhereInput | PacientesWhereInput[]
    name?: StringFilter<"Pacientes"> | string
    last_name?: StringFilter<"Pacientes"> | string
    entidad_salud?: StringFilter<"Pacientes"> | string
    servicios?: ServicioListRelationFilter
  }, "id" | "document">

  export type PacientesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    entidad_salud?: SortOrder
    _count?: PacientesCountOrderByAggregateInput
    _avg?: PacientesAvgOrderByAggregateInput
    _max?: PacientesMaxOrderByAggregateInput
    _min?: PacientesMinOrderByAggregateInput
    _sum?: PacientesSumOrderByAggregateInput
  }

  export type PacientesScalarWhereWithAggregatesInput = {
    AND?: PacientesScalarWhereWithAggregatesInput | PacientesScalarWhereWithAggregatesInput[]
    OR?: PacientesScalarWhereWithAggregatesInput[]
    NOT?: PacientesScalarWhereWithAggregatesInput | PacientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pacientes"> | number
    name?: StringWithAggregatesFilter<"Pacientes"> | string
    last_name?: StringWithAggregatesFilter<"Pacientes"> | string
    document?: StringWithAggregatesFilter<"Pacientes"> | string
    entidad_salud?: StringWithAggregatesFilter<"Pacientes"> | string
  }

  export type DescripcionWhereInput = {
    AND?: DescripcionWhereInput | DescripcionWhereInput[]
    OR?: DescripcionWhereInput[]
    NOT?: DescripcionWhereInput | DescripcionWhereInput[]
    id?: IntFilter<"Descripcion"> | number
    description?: StringFilter<"Descripcion"> | string
    type_context?: EnumTypeContextFilter<"Descripcion"> | $Enums.TypeContext
    implicados?: StringFilter<"Descripcion"> | string
    servicio?: ServicioListRelationFilter
  }

  export type DescripcionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    type_context?: SortOrder
    implicados?: SortOrder
    servicio?: ServicioOrderByRelationAggregateInput
  }

  export type DescripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DescripcionWhereInput | DescripcionWhereInput[]
    OR?: DescripcionWhereInput[]
    NOT?: DescripcionWhereInput | DescripcionWhereInput[]
    description?: StringFilter<"Descripcion"> | string
    type_context?: EnumTypeContextFilter<"Descripcion"> | $Enums.TypeContext
    implicados?: StringFilter<"Descripcion"> | string
    servicio?: ServicioListRelationFilter
  }, "id">

  export type DescripcionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    type_context?: SortOrder
    implicados?: SortOrder
    _count?: DescripcionCountOrderByAggregateInput
    _avg?: DescripcionAvgOrderByAggregateInput
    _max?: DescripcionMaxOrderByAggregateInput
    _min?: DescripcionMinOrderByAggregateInput
    _sum?: DescripcionSumOrderByAggregateInput
  }

  export type DescripcionScalarWhereWithAggregatesInput = {
    AND?: DescripcionScalarWhereWithAggregatesInput | DescripcionScalarWhereWithAggregatesInput[]
    OR?: DescripcionScalarWhereWithAggregatesInput[]
    NOT?: DescripcionScalarWhereWithAggregatesInput | DescripcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Descripcion"> | number
    description?: StringWithAggregatesFilter<"Descripcion"> | string
    type_context?: EnumTypeContextWithAggregatesFilter<"Descripcion"> | $Enums.TypeContext
    implicados?: StringWithAggregatesFilter<"Descripcion"> | string
  }

  export type TurnosWhereInput = {
    AND?: TurnosWhereInput | TurnosWhereInput[]
    OR?: TurnosWhereInput[]
    NOT?: TurnosWhereInput | TurnosWhereInput[]
    id?: IntFilter<"Turnos"> | number
    time_start?: DateTimeFilter<"Turnos"> | Date | string
    time_end?: DateTimeFilter<"Turnos"> | Date | string
    paramedicId?: IntFilter<"Turnos"> | number
    auxiliarId?: IntFilter<"Turnos"> | number
    conductorId?: IntFilter<"Turnos"> | number
    ambulanciaId?: IntFilter<"Turnos"> | number
    paramedico?: XOR<ParamedicoScalarRelationFilter, ParamedicoWhereInput>
    auxiliar?: XOR<AuxiliarScalarRelationFilter, AuxiliarWhereInput>
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
    ambulancia?: XOR<AmbulanciaScalarRelationFilter, AmbulanciaWhereInput>
    servicios?: ServicioListRelationFilter
  }

  export type TurnosOrderByWithRelationInput = {
    id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
    paramedico?: ParamedicoOrderByWithRelationInput
    auxiliar?: AuxiliarOrderByWithRelationInput
    conductor?: ConductorOrderByWithRelationInput
    ambulancia?: AmbulanciaOrderByWithRelationInput
    servicios?: ServicioOrderByRelationAggregateInput
  }

  export type TurnosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurnosWhereInput | TurnosWhereInput[]
    OR?: TurnosWhereInput[]
    NOT?: TurnosWhereInput | TurnosWhereInput[]
    time_start?: DateTimeFilter<"Turnos"> | Date | string
    time_end?: DateTimeFilter<"Turnos"> | Date | string
    paramedicId?: IntFilter<"Turnos"> | number
    auxiliarId?: IntFilter<"Turnos"> | number
    conductorId?: IntFilter<"Turnos"> | number
    ambulanciaId?: IntFilter<"Turnos"> | number
    paramedico?: XOR<ParamedicoScalarRelationFilter, ParamedicoWhereInput>
    auxiliar?: XOR<AuxiliarScalarRelationFilter, AuxiliarWhereInput>
    conductor?: XOR<ConductorScalarRelationFilter, ConductorWhereInput>
    ambulancia?: XOR<AmbulanciaScalarRelationFilter, AmbulanciaWhereInput>
    servicios?: ServicioListRelationFilter
  }, "id">

  export type TurnosOrderByWithAggregationInput = {
    id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
    _count?: TurnosCountOrderByAggregateInput
    _avg?: TurnosAvgOrderByAggregateInput
    _max?: TurnosMaxOrderByAggregateInput
    _min?: TurnosMinOrderByAggregateInput
    _sum?: TurnosSumOrderByAggregateInput
  }

  export type TurnosScalarWhereWithAggregatesInput = {
    AND?: TurnosScalarWhereWithAggregatesInput | TurnosScalarWhereWithAggregatesInput[]
    OR?: TurnosScalarWhereWithAggregatesInput[]
    NOT?: TurnosScalarWhereWithAggregatesInput | TurnosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turnos"> | number
    time_start?: DateTimeWithAggregatesFilter<"Turnos"> | Date | string
    time_end?: DateTimeWithAggregatesFilter<"Turnos"> | Date | string
    paramedicId?: IntWithAggregatesFilter<"Turnos"> | number
    auxiliarId?: IntWithAggregatesFilter<"Turnos"> | number
    conductorId?: IntWithAggregatesFilter<"Turnos"> | number
    ambulanciaId?: IntWithAggregatesFilter<"Turnos"> | number
  }

  export type ConductorWhereInput = {
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    id?: IntFilter<"Conductor"> | number
    name?: StringFilter<"Conductor"> | string
    last_name?: StringFilter<"Conductor"> | string
    document?: StringFilter<"Conductor"> | string
    no_licencia?: StringFilter<"Conductor"> | string
    no_fast_driver?: StringFilter<"Conductor"> | string
    turnos?: TurnosListRelationFilter
  }

  export type ConductorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_licencia?: SortOrder
    no_fast_driver?: SortOrder
    turnos?: TurnosOrderByRelationAggregateInput
  }

  export type ConductorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document?: string
    AND?: ConductorWhereInput | ConductorWhereInput[]
    OR?: ConductorWhereInput[]
    NOT?: ConductorWhereInput | ConductorWhereInput[]
    name?: StringFilter<"Conductor"> | string
    last_name?: StringFilter<"Conductor"> | string
    no_licencia?: StringFilter<"Conductor"> | string
    no_fast_driver?: StringFilter<"Conductor"> | string
    turnos?: TurnosListRelationFilter
  }, "id" | "document">

  export type ConductorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_licencia?: SortOrder
    no_fast_driver?: SortOrder
    _count?: ConductorCountOrderByAggregateInput
    _avg?: ConductorAvgOrderByAggregateInput
    _max?: ConductorMaxOrderByAggregateInput
    _min?: ConductorMinOrderByAggregateInput
    _sum?: ConductorSumOrderByAggregateInput
  }

  export type ConductorScalarWhereWithAggregatesInput = {
    AND?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    OR?: ConductorScalarWhereWithAggregatesInput[]
    NOT?: ConductorScalarWhereWithAggregatesInput | ConductorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conductor"> | number
    name?: StringWithAggregatesFilter<"Conductor"> | string
    last_name?: StringWithAggregatesFilter<"Conductor"> | string
    document?: StringWithAggregatesFilter<"Conductor"> | string
    no_licencia?: StringWithAggregatesFilter<"Conductor"> | string
    no_fast_driver?: StringWithAggregatesFilter<"Conductor"> | string
  }

  export type ParamedicoWhereInput = {
    AND?: ParamedicoWhereInput | ParamedicoWhereInput[]
    OR?: ParamedicoWhereInput[]
    NOT?: ParamedicoWhereInput | ParamedicoWhereInput[]
    id?: IntFilter<"Paramedico"> | number
    name?: StringFilter<"Paramedico"> | string
    last_name?: StringFilter<"Paramedico"> | string
    document?: StringFilter<"Paramedico"> | string
    tipo_medic?: StringFilter<"Paramedico"> | string
    no_ci_medic?: StringFilter<"Paramedico"> | string
    id_capacitation?: StringFilter<"Paramedico"> | string
    password?: StringFilter<"Paramedico"> | string
    role?: EnumRoleFilter<"Paramedico"> | $Enums.Role
    turnos?: TurnosListRelationFilter
  }

  export type ParamedicoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    tipo_medic?: SortOrder
    no_ci_medic?: SortOrder
    id_capacitation?: SortOrder
    password?: SortOrder
    role?: SortOrder
    turnos?: TurnosOrderByRelationAggregateInput
  }

  export type ParamedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document?: string
    AND?: ParamedicoWhereInput | ParamedicoWhereInput[]
    OR?: ParamedicoWhereInput[]
    NOT?: ParamedicoWhereInput | ParamedicoWhereInput[]
    name?: StringFilter<"Paramedico"> | string
    last_name?: StringFilter<"Paramedico"> | string
    tipo_medic?: StringFilter<"Paramedico"> | string
    no_ci_medic?: StringFilter<"Paramedico"> | string
    id_capacitation?: StringFilter<"Paramedico"> | string
    password?: StringFilter<"Paramedico"> | string
    role?: EnumRoleFilter<"Paramedico"> | $Enums.Role
    turnos?: TurnosListRelationFilter
  }, "id" | "document">

  export type ParamedicoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    tipo_medic?: SortOrder
    no_ci_medic?: SortOrder
    id_capacitation?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: ParamedicoCountOrderByAggregateInput
    _avg?: ParamedicoAvgOrderByAggregateInput
    _max?: ParamedicoMaxOrderByAggregateInput
    _min?: ParamedicoMinOrderByAggregateInput
    _sum?: ParamedicoSumOrderByAggregateInput
  }

  export type ParamedicoScalarWhereWithAggregatesInput = {
    AND?: ParamedicoScalarWhereWithAggregatesInput | ParamedicoScalarWhereWithAggregatesInput[]
    OR?: ParamedicoScalarWhereWithAggregatesInput[]
    NOT?: ParamedicoScalarWhereWithAggregatesInput | ParamedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paramedico"> | number
    name?: StringWithAggregatesFilter<"Paramedico"> | string
    last_name?: StringWithAggregatesFilter<"Paramedico"> | string
    document?: StringWithAggregatesFilter<"Paramedico"> | string
    tipo_medic?: StringWithAggregatesFilter<"Paramedico"> | string
    no_ci_medic?: StringWithAggregatesFilter<"Paramedico"> | string
    id_capacitation?: StringWithAggregatesFilter<"Paramedico"> | string
    password?: StringWithAggregatesFilter<"Paramedico"> | string
    role?: EnumRoleWithAggregatesFilter<"Paramedico"> | $Enums.Role
  }

  export type AuxiliarWhereInput = {
    AND?: AuxiliarWhereInput | AuxiliarWhereInput[]
    OR?: AuxiliarWhereInput[]
    NOT?: AuxiliarWhereInput | AuxiliarWhereInput[]
    id?: IntFilter<"Auxiliar"> | number
    name?: StringFilter<"Auxiliar"> | string
    last_name?: StringFilter<"Auxiliar"> | string
    document?: StringFilter<"Auxiliar"> | string
    no_ci_auxiliar?: StringFilter<"Auxiliar"> | string
    no_ci_soporte_vital?: StringFilter<"Auxiliar"> | string
    password?: StringFilter<"Auxiliar"> | string
    role?: EnumRoleFilter<"Auxiliar"> | $Enums.Role
    turnos?: TurnosListRelationFilter
  }

  export type AuxiliarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_ci_auxiliar?: SortOrder
    no_ci_soporte_vital?: SortOrder
    password?: SortOrder
    role?: SortOrder
    turnos?: TurnosOrderByRelationAggregateInput
  }

  export type AuxiliarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document?: string
    AND?: AuxiliarWhereInput | AuxiliarWhereInput[]
    OR?: AuxiliarWhereInput[]
    NOT?: AuxiliarWhereInput | AuxiliarWhereInput[]
    name?: StringFilter<"Auxiliar"> | string
    last_name?: StringFilter<"Auxiliar"> | string
    no_ci_auxiliar?: StringFilter<"Auxiliar"> | string
    no_ci_soporte_vital?: StringFilter<"Auxiliar"> | string
    password?: StringFilter<"Auxiliar"> | string
    role?: EnumRoleFilter<"Auxiliar"> | $Enums.Role
    turnos?: TurnosListRelationFilter
  }, "id" | "document">

  export type AuxiliarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_ci_auxiliar?: SortOrder
    no_ci_soporte_vital?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: AuxiliarCountOrderByAggregateInput
    _avg?: AuxiliarAvgOrderByAggregateInput
    _max?: AuxiliarMaxOrderByAggregateInput
    _min?: AuxiliarMinOrderByAggregateInput
    _sum?: AuxiliarSumOrderByAggregateInput
  }

  export type AuxiliarScalarWhereWithAggregatesInput = {
    AND?: AuxiliarScalarWhereWithAggregatesInput | AuxiliarScalarWhereWithAggregatesInput[]
    OR?: AuxiliarScalarWhereWithAggregatesInput[]
    NOT?: AuxiliarScalarWhereWithAggregatesInput | AuxiliarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auxiliar"> | number
    name?: StringWithAggregatesFilter<"Auxiliar"> | string
    last_name?: StringWithAggregatesFilter<"Auxiliar"> | string
    document?: StringWithAggregatesFilter<"Auxiliar"> | string
    no_ci_auxiliar?: StringWithAggregatesFilter<"Auxiliar"> | string
    no_ci_soporte_vital?: StringWithAggregatesFilter<"Auxiliar"> | string
    password?: StringWithAggregatesFilter<"Auxiliar"> | string
    role?: EnumRoleWithAggregatesFilter<"Auxiliar"> | $Enums.Role
  }

  export type IpsCreateInput = {
    nombre: string
    direccion: string
    ambulancias?: AmbulanciaCreateNestedManyWithoutIpsInput
  }

  export type IpsUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion: string
    ambulancias?: AmbulanciaUncheckedCreateNestedManyWithoutIpsInput
  }

  export type IpsUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ambulancias?: AmbulanciaUpdateManyWithoutIpsNestedInput
  }

  export type IpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    ambulancias?: AmbulanciaUncheckedUpdateManyWithoutIpsNestedInput
  }

  export type IpsCreateManyInput = {
    id?: number
    nombre: string
    direccion: string
  }

  export type IpsUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type IpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type AmbulanciaCreateInput = {
    modelo: string
    placa: string
    tipo: string
    ips: IpsCreateNestedOneWithoutAmbulanciasInput
    turnos?: TurnosCreateNestedManyWithoutAmbulanciaInput
  }

  export type AmbulanciaUncheckedCreateInput = {
    id?: number
    modelo: string
    placa: string
    tipo: string
    ipsId: number
    turnos?: TurnosUncheckedCreateNestedManyWithoutAmbulanciaInput
  }

  export type AmbulanciaUpdateInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    ips?: IpsUpdateOneRequiredWithoutAmbulanciasNestedInput
    turnos?: TurnosUpdateManyWithoutAmbulanciaNestedInput
  }

  export type AmbulanciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    ipsId?: IntFieldUpdateOperationsInput | number
    turnos?: TurnosUncheckedUpdateManyWithoutAmbulanciaNestedInput
  }

  export type AmbulanciaCreateManyInput = {
    id?: number
    modelo: string
    placa: string
    tipo: string
    ipsId: number
  }

  export type AmbulanciaUpdateManyMutationInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type AmbulanciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    ipsId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioCreateInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    complicacion?: ComplicacionCreateNestedManyWithoutServicioInput
    turno: TurnosCreateNestedOneWithoutServiciosInput
    paciente: PacientesCreateNestedOneWithoutServiciosInput
    descripcion: DescripcionCreateNestedOneWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_paciente: number
    id_descripcion: number
    complicacion?: ComplicacionUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    complicacion?: ComplicacionUpdateManyWithoutServicioNestedInput
    turno?: TurnosUpdateOneRequiredWithoutServiciosNestedInput
    paciente?: PacientesUpdateOneRequiredWithoutServiciosNestedInput
    descripcion?: DescripcionUpdateOneRequiredWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
    complicacion?: ComplicacionUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_paciente: number
    id_descripcion: number
  }

  export type ServicioUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
  }

  export type ComplicacionCreateInput = {
    type: $Enums.Typecomplicacion
    description: string
    servicio: ServicioCreateNestedOneWithoutComplicacionInput
  }

  export type ComplicacionUncheckedCreateInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
    id_servicio: number
  }

  export type ComplicacionUpdateInput = {
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
    servicio?: ServicioUpdateOneRequiredWithoutComplicacionNestedInput
  }

  export type ComplicacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
    id_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type ComplicacionCreateManyInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
    id_servicio: number
  }

  export type ComplicacionUpdateManyMutationInput = {
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ComplicacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
    id_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type PacientesCreateInput = {
    name: string
    last_name: string
    document: string
    entidad_salud: string
    servicios?: ServicioCreateNestedManyWithoutPacienteInput
  }

  export type PacientesUncheckedCreateInput = {
    id?: number
    name: string
    last_name: string
    document: string
    entidad_salud: string
    servicios?: ServicioUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacientesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    entidad_salud?: StringFieldUpdateOperationsInput | string
    servicios?: ServicioUpdateManyWithoutPacienteNestedInput
  }

  export type PacientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    entidad_salud?: StringFieldUpdateOperationsInput | string
    servicios?: ServicioUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacientesCreateManyInput = {
    id?: number
    name: string
    last_name: string
    document: string
    entidad_salud: string
  }

  export type PacientesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    entidad_salud?: StringFieldUpdateOperationsInput | string
  }

  export type PacientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    entidad_salud?: StringFieldUpdateOperationsInput | string
  }

  export type DescripcionCreateInput = {
    description: string
    type_context: $Enums.TypeContext
    implicados: string
    servicio?: ServicioCreateNestedManyWithoutDescripcionInput
  }

  export type DescripcionUncheckedCreateInput = {
    id?: number
    description: string
    type_context: $Enums.TypeContext
    implicados: string
    servicio?: ServicioUncheckedCreateNestedManyWithoutDescripcionInput
  }

  export type DescripcionUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    type_context?: EnumTypeContextFieldUpdateOperationsInput | $Enums.TypeContext
    implicados?: StringFieldUpdateOperationsInput | string
    servicio?: ServicioUpdateManyWithoutDescripcionNestedInput
  }

  export type DescripcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    type_context?: EnumTypeContextFieldUpdateOperationsInput | $Enums.TypeContext
    implicados?: StringFieldUpdateOperationsInput | string
    servicio?: ServicioUncheckedUpdateManyWithoutDescripcionNestedInput
  }

  export type DescripcionCreateManyInput = {
    id?: number
    description: string
    type_context: $Enums.TypeContext
    implicados: string
  }

  export type DescripcionUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    type_context?: EnumTypeContextFieldUpdateOperationsInput | $Enums.TypeContext
    implicados?: StringFieldUpdateOperationsInput | string
  }

  export type DescripcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    type_context?: EnumTypeContextFieldUpdateOperationsInput | $Enums.TypeContext
    implicados?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosCreateInput = {
    time_start: Date | string
    time_end: Date | string
    paramedico: ParamedicoCreateNestedOneWithoutTurnosInput
    auxiliar: AuxiliarCreateNestedOneWithoutTurnosInput
    conductor: ConductorCreateNestedOneWithoutTurnosInput
    ambulancia: AmbulanciaCreateNestedOneWithoutTurnosInput
    servicios?: ServicioCreateNestedManyWithoutTurnoInput
  }

  export type TurnosUncheckedCreateInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
    servicios?: ServicioUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnosUpdateInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedico?: ParamedicoUpdateOneRequiredWithoutTurnosNestedInput
    auxiliar?: AuxiliarUpdateOneRequiredWithoutTurnosNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutTurnosNestedInput
    ambulancia?: AmbulanciaUpdateOneRequiredWithoutTurnosNestedInput
    servicios?: ServicioUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
    servicios?: ServicioUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosCreateManyInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
  }

  export type TurnosUpdateManyMutationInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
  }

  export type ConductorCreateInput = {
    name: string
    last_name: string
    document: string
    no_licencia: string
    no_fast_driver: string
    turnos?: TurnosCreateNestedManyWithoutConductorInput
  }

  export type ConductorUncheckedCreateInput = {
    id?: number
    name: string
    last_name: string
    document: string
    no_licencia: string
    no_fast_driver: string
    turnos?: TurnosUncheckedCreateNestedManyWithoutConductorInput
  }

  export type ConductorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_licencia?: StringFieldUpdateOperationsInput | string
    no_fast_driver?: StringFieldUpdateOperationsInput | string
    turnos?: TurnosUpdateManyWithoutConductorNestedInput
  }

  export type ConductorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_licencia?: StringFieldUpdateOperationsInput | string
    no_fast_driver?: StringFieldUpdateOperationsInput | string
    turnos?: TurnosUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type ConductorCreateManyInput = {
    id?: number
    name: string
    last_name: string
    document: string
    no_licencia: string
    no_fast_driver: string
  }

  export type ConductorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_licencia?: StringFieldUpdateOperationsInput | string
    no_fast_driver?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_licencia?: StringFieldUpdateOperationsInput | string
    no_fast_driver?: StringFieldUpdateOperationsInput | string
  }

  export type ParamedicoCreateInput = {
    name: string
    last_name: string
    document: string
    tipo_medic: string
    no_ci_medic: string
    id_capacitation: string
    password: string
    role: $Enums.Role
    turnos?: TurnosCreateNestedManyWithoutParamedicoInput
  }

  export type ParamedicoUncheckedCreateInput = {
    id?: number
    name: string
    last_name: string
    document: string
    tipo_medic: string
    no_ci_medic: string
    id_capacitation: string
    password: string
    role: $Enums.Role
    turnos?: TurnosUncheckedCreateNestedManyWithoutParamedicoInput
  }

  export type ParamedicoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    tipo_medic?: StringFieldUpdateOperationsInput | string
    no_ci_medic?: StringFieldUpdateOperationsInput | string
    id_capacitation?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    turnos?: TurnosUpdateManyWithoutParamedicoNestedInput
  }

  export type ParamedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    tipo_medic?: StringFieldUpdateOperationsInput | string
    no_ci_medic?: StringFieldUpdateOperationsInput | string
    id_capacitation?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    turnos?: TurnosUncheckedUpdateManyWithoutParamedicoNestedInput
  }

  export type ParamedicoCreateManyInput = {
    id?: number
    name: string
    last_name: string
    document: string
    tipo_medic: string
    no_ci_medic: string
    id_capacitation: string
    password: string
    role: $Enums.Role
  }

  export type ParamedicoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    tipo_medic?: StringFieldUpdateOperationsInput | string
    no_ci_medic?: StringFieldUpdateOperationsInput | string
    id_capacitation?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ParamedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    tipo_medic?: StringFieldUpdateOperationsInput | string
    no_ci_medic?: StringFieldUpdateOperationsInput | string
    id_capacitation?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AuxiliarCreateInput = {
    name: string
    last_name: string
    document: string
    no_ci_auxiliar: string
    no_ci_soporte_vital: string
    password: string
    role: $Enums.Role
    turnos?: TurnosCreateNestedManyWithoutAuxiliarInput
  }

  export type AuxiliarUncheckedCreateInput = {
    id?: number
    name: string
    last_name: string
    document: string
    no_ci_auxiliar: string
    no_ci_soporte_vital: string
    password: string
    role: $Enums.Role
    turnos?: TurnosUncheckedCreateNestedManyWithoutAuxiliarInput
  }

  export type AuxiliarUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_ci_auxiliar?: StringFieldUpdateOperationsInput | string
    no_ci_soporte_vital?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    turnos?: TurnosUpdateManyWithoutAuxiliarNestedInput
  }

  export type AuxiliarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_ci_auxiliar?: StringFieldUpdateOperationsInput | string
    no_ci_soporte_vital?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    turnos?: TurnosUncheckedUpdateManyWithoutAuxiliarNestedInput
  }

  export type AuxiliarCreateManyInput = {
    id?: number
    name: string
    last_name: string
    document: string
    no_ci_auxiliar: string
    no_ci_soporte_vital: string
    password: string
    role: $Enums.Role
  }

  export type AuxiliarUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_ci_auxiliar?: StringFieldUpdateOperationsInput | string
    no_ci_soporte_vital?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AuxiliarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_ci_auxiliar?: StringFieldUpdateOperationsInput | string
    no_ci_soporte_vital?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AmbulanciaListRelationFilter = {
    every?: AmbulanciaWhereInput
    some?: AmbulanciaWhereInput
    none?: AmbulanciaWhereInput
  }

  export type AmbulanciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IpsCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type IpsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IpsMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type IpsMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
  }

  export type IpsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IpsScalarRelationFilter = {
    is?: IpsWhereInput
    isNot?: IpsWhereInput
  }

  export type TurnosListRelationFilter = {
    every?: TurnosWhereInput
    some?: TurnosWhereInput
    none?: TurnosWhereInput
  }

  export type TurnosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmbulanciaCountOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    ipsId?: SortOrder
  }

  export type AmbulanciaAvgOrderByAggregateInput = {
    id?: SortOrder
    ipsId?: SortOrder
  }

  export type AmbulanciaMaxOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    ipsId?: SortOrder
  }

  export type AmbulanciaMinOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    ipsId?: SortOrder
  }

  export type AmbulanciaSumOrderByAggregateInput = {
    id?: SortOrder
    ipsId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ComplicacionListRelationFilter = {
    every?: ComplicacionWhereInput
    some?: ComplicacionWhereInput
    none?: ComplicacionWhereInput
  }

  export type TurnosScalarRelationFilter = {
    is?: TurnosWhereInput
    isNot?: TurnosWhereInput
  }

  export type PacientesScalarRelationFilter = {
    is?: PacientesWhereInput
    isNot?: PacientesWhereInput
  }

  export type DescripcionScalarRelationFilter = {
    is?: DescripcionWhereInput
    isNot?: DescripcionWhereInput
  }

  export type ComplicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    time_arrived?: SortOrder
    time_finish?: SortOrder
    code_start?: SortOrder
    code_end?: SortOrder
    place_accident?: SortOrder
    nro_informe?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    id?: SortOrder
    id_turno?: SortOrder
    id_paciente?: SortOrder
    id_descripcion?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumTypecomplicacionFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionFilter<$PrismaModel> | $Enums.Typecomplicacion
  }

  export type ServicioScalarRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type ComplicacionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionAvgOrderByAggregateInput = {
    id?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    id_servicio?: SortOrder
  }

  export type ComplicacionSumOrderByAggregateInput = {
    id?: SortOrder
    id_servicio?: SortOrder
  }

  export type EnumTypecomplicacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionWithAggregatesFilter<$PrismaModel> | $Enums.Typecomplicacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypecomplicacionFilter<$PrismaModel>
    _max?: NestedEnumTypecomplicacionFilter<$PrismaModel>
  }

  export type ServicioListRelationFilter = {
    every?: ServicioWhereInput
    some?: ServicioWhereInput
    none?: ServicioWhereInput
  }

  export type ServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacientesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    entidad_salud?: SortOrder
  }

  export type PacientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacientesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    entidad_salud?: SortOrder
  }

  export type PacientesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    entidad_salud?: SortOrder
  }

  export type PacientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTypeContextFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContext | EnumTypeContextFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeContextFilter<$PrismaModel> | $Enums.TypeContext
  }

  export type DescripcionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    type_context?: SortOrder
    implicados?: SortOrder
  }

  export type DescripcionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DescripcionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    type_context?: SortOrder
    implicados?: SortOrder
  }

  export type DescripcionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    type_context?: SortOrder
    implicados?: SortOrder
  }

  export type DescripcionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTypeContextWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContext | EnumTypeContextFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeContextWithAggregatesFilter<$PrismaModel> | $Enums.TypeContext
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeContextFilter<$PrismaModel>
    _max?: NestedEnumTypeContextFilter<$PrismaModel>
  }

  export type ParamedicoScalarRelationFilter = {
    is?: ParamedicoWhereInput
    isNot?: ParamedicoWhereInput
  }

  export type AuxiliarScalarRelationFilter = {
    is?: AuxiliarWhereInput
    isNot?: AuxiliarWhereInput
  }

  export type ConductorScalarRelationFilter = {
    is?: ConductorWhereInput
    isNot?: ConductorWhereInput
  }

  export type AmbulanciaScalarRelationFilter = {
    is?: AmbulanciaWhereInput
    isNot?: AmbulanciaWhereInput
  }

  export type TurnosCountOrderByAggregateInput = {
    id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
  }

  export type TurnosAvgOrderByAggregateInput = {
    id?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
  }

  export type TurnosMaxOrderByAggregateInput = {
    id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
  }

  export type TurnosMinOrderByAggregateInput = {
    id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
  }

  export type TurnosSumOrderByAggregateInput = {
    id?: SortOrder
    paramedicId?: SortOrder
    auxiliarId?: SortOrder
    conductorId?: SortOrder
    ambulanciaId?: SortOrder
  }

  export type ConductorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_licencia?: SortOrder
    no_fast_driver?: SortOrder
  }

  export type ConductorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConductorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_licencia?: SortOrder
    no_fast_driver?: SortOrder
  }

  export type ConductorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_licencia?: SortOrder
    no_fast_driver?: SortOrder
  }

  export type ConductorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ParamedicoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    tipo_medic?: SortOrder
    no_ci_medic?: SortOrder
    id_capacitation?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type ParamedicoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParamedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    tipo_medic?: SortOrder
    no_ci_medic?: SortOrder
    id_capacitation?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type ParamedicoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    tipo_medic?: SortOrder
    no_ci_medic?: SortOrder
    id_capacitation?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type ParamedicoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type AuxiliarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_ci_auxiliar?: SortOrder
    no_ci_soporte_vital?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AuxiliarAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuxiliarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_ci_auxiliar?: SortOrder
    no_ci_soporte_vital?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AuxiliarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    document?: SortOrder
    no_ci_auxiliar?: SortOrder
    no_ci_soporte_vital?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AuxiliarSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmbulanciaCreateNestedManyWithoutIpsInput = {
    create?: XOR<AmbulanciaCreateWithoutIpsInput, AmbulanciaUncheckedCreateWithoutIpsInput> | AmbulanciaCreateWithoutIpsInput[] | AmbulanciaUncheckedCreateWithoutIpsInput[]
    connectOrCreate?: AmbulanciaCreateOrConnectWithoutIpsInput | AmbulanciaCreateOrConnectWithoutIpsInput[]
    createMany?: AmbulanciaCreateManyIpsInputEnvelope
    connect?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
  }

  export type AmbulanciaUncheckedCreateNestedManyWithoutIpsInput = {
    create?: XOR<AmbulanciaCreateWithoutIpsInput, AmbulanciaUncheckedCreateWithoutIpsInput> | AmbulanciaCreateWithoutIpsInput[] | AmbulanciaUncheckedCreateWithoutIpsInput[]
    connectOrCreate?: AmbulanciaCreateOrConnectWithoutIpsInput | AmbulanciaCreateOrConnectWithoutIpsInput[]
    createMany?: AmbulanciaCreateManyIpsInputEnvelope
    connect?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AmbulanciaUpdateManyWithoutIpsNestedInput = {
    create?: XOR<AmbulanciaCreateWithoutIpsInput, AmbulanciaUncheckedCreateWithoutIpsInput> | AmbulanciaCreateWithoutIpsInput[] | AmbulanciaUncheckedCreateWithoutIpsInput[]
    connectOrCreate?: AmbulanciaCreateOrConnectWithoutIpsInput | AmbulanciaCreateOrConnectWithoutIpsInput[]
    upsert?: AmbulanciaUpsertWithWhereUniqueWithoutIpsInput | AmbulanciaUpsertWithWhereUniqueWithoutIpsInput[]
    createMany?: AmbulanciaCreateManyIpsInputEnvelope
    set?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    disconnect?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    delete?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    connect?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    update?: AmbulanciaUpdateWithWhereUniqueWithoutIpsInput | AmbulanciaUpdateWithWhereUniqueWithoutIpsInput[]
    updateMany?: AmbulanciaUpdateManyWithWhereWithoutIpsInput | AmbulanciaUpdateManyWithWhereWithoutIpsInput[]
    deleteMany?: AmbulanciaScalarWhereInput | AmbulanciaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AmbulanciaUncheckedUpdateManyWithoutIpsNestedInput = {
    create?: XOR<AmbulanciaCreateWithoutIpsInput, AmbulanciaUncheckedCreateWithoutIpsInput> | AmbulanciaCreateWithoutIpsInput[] | AmbulanciaUncheckedCreateWithoutIpsInput[]
    connectOrCreate?: AmbulanciaCreateOrConnectWithoutIpsInput | AmbulanciaCreateOrConnectWithoutIpsInput[]
    upsert?: AmbulanciaUpsertWithWhereUniqueWithoutIpsInput | AmbulanciaUpsertWithWhereUniqueWithoutIpsInput[]
    createMany?: AmbulanciaCreateManyIpsInputEnvelope
    set?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    disconnect?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    delete?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    connect?: AmbulanciaWhereUniqueInput | AmbulanciaWhereUniqueInput[]
    update?: AmbulanciaUpdateWithWhereUniqueWithoutIpsInput | AmbulanciaUpdateWithWhereUniqueWithoutIpsInput[]
    updateMany?: AmbulanciaUpdateManyWithWhereWithoutIpsInput | AmbulanciaUpdateManyWithWhereWithoutIpsInput[]
    deleteMany?: AmbulanciaScalarWhereInput | AmbulanciaScalarWhereInput[]
  }

  export type IpsCreateNestedOneWithoutAmbulanciasInput = {
    create?: XOR<IpsCreateWithoutAmbulanciasInput, IpsUncheckedCreateWithoutAmbulanciasInput>
    connectOrCreate?: IpsCreateOrConnectWithoutAmbulanciasInput
    connect?: IpsWhereUniqueInput
  }

  export type TurnosCreateNestedManyWithoutAmbulanciaInput = {
    create?: XOR<TurnosCreateWithoutAmbulanciaInput, TurnosUncheckedCreateWithoutAmbulanciaInput> | TurnosCreateWithoutAmbulanciaInput[] | TurnosUncheckedCreateWithoutAmbulanciaInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAmbulanciaInput | TurnosCreateOrConnectWithoutAmbulanciaInput[]
    createMany?: TurnosCreateManyAmbulanciaInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type TurnosUncheckedCreateNestedManyWithoutAmbulanciaInput = {
    create?: XOR<TurnosCreateWithoutAmbulanciaInput, TurnosUncheckedCreateWithoutAmbulanciaInput> | TurnosCreateWithoutAmbulanciaInput[] | TurnosUncheckedCreateWithoutAmbulanciaInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAmbulanciaInput | TurnosCreateOrConnectWithoutAmbulanciaInput[]
    createMany?: TurnosCreateManyAmbulanciaInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type IpsUpdateOneRequiredWithoutAmbulanciasNestedInput = {
    create?: XOR<IpsCreateWithoutAmbulanciasInput, IpsUncheckedCreateWithoutAmbulanciasInput>
    connectOrCreate?: IpsCreateOrConnectWithoutAmbulanciasInput
    upsert?: IpsUpsertWithoutAmbulanciasInput
    connect?: IpsWhereUniqueInput
    update?: XOR<XOR<IpsUpdateToOneWithWhereWithoutAmbulanciasInput, IpsUpdateWithoutAmbulanciasInput>, IpsUncheckedUpdateWithoutAmbulanciasInput>
  }

  export type TurnosUpdateManyWithoutAmbulanciaNestedInput = {
    create?: XOR<TurnosCreateWithoutAmbulanciaInput, TurnosUncheckedCreateWithoutAmbulanciaInput> | TurnosCreateWithoutAmbulanciaInput[] | TurnosUncheckedCreateWithoutAmbulanciaInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAmbulanciaInput | TurnosCreateOrConnectWithoutAmbulanciaInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutAmbulanciaInput | TurnosUpsertWithWhereUniqueWithoutAmbulanciaInput[]
    createMany?: TurnosCreateManyAmbulanciaInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutAmbulanciaInput | TurnosUpdateWithWhereUniqueWithoutAmbulanciaInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutAmbulanciaInput | TurnosUpdateManyWithWhereWithoutAmbulanciaInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type TurnosUncheckedUpdateManyWithoutAmbulanciaNestedInput = {
    create?: XOR<TurnosCreateWithoutAmbulanciaInput, TurnosUncheckedCreateWithoutAmbulanciaInput> | TurnosCreateWithoutAmbulanciaInput[] | TurnosUncheckedCreateWithoutAmbulanciaInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAmbulanciaInput | TurnosCreateOrConnectWithoutAmbulanciaInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutAmbulanciaInput | TurnosUpsertWithWhereUniqueWithoutAmbulanciaInput[]
    createMany?: TurnosCreateManyAmbulanciaInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutAmbulanciaInput | TurnosUpdateWithWhereUniqueWithoutAmbulanciaInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutAmbulanciaInput | TurnosUpdateManyWithWhereWithoutAmbulanciaInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type ComplicacionCreateNestedManyWithoutServicioInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
  }

  export type TurnosCreateNestedOneWithoutServiciosInput = {
    create?: XOR<TurnosCreateWithoutServiciosInput, TurnosUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: TurnosCreateOrConnectWithoutServiciosInput
    connect?: TurnosWhereUniqueInput
  }

  export type PacientesCreateNestedOneWithoutServiciosInput = {
    create?: XOR<PacientesCreateWithoutServiciosInput, PacientesUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: PacientesCreateOrConnectWithoutServiciosInput
    connect?: PacientesWhereUniqueInput
  }

  export type DescripcionCreateNestedOneWithoutServicioInput = {
    create?: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    connectOrCreate?: DescripcionCreateOrConnectWithoutServicioInput
    connect?: DescripcionWhereUniqueInput
  }

  export type ComplicacionUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ComplicacionUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    upsert?: ComplicacionUpsertWithWhereUniqueWithoutServicioInput | ComplicacionUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    set?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    disconnect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    delete?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    update?: ComplicacionUpdateWithWhereUniqueWithoutServicioInput | ComplicacionUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ComplicacionUpdateManyWithWhereWithoutServicioInput | ComplicacionUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
  }

  export type TurnosUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<TurnosCreateWithoutServiciosInput, TurnosUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: TurnosCreateOrConnectWithoutServiciosInput
    upsert?: TurnosUpsertWithoutServiciosInput
    connect?: TurnosWhereUniqueInput
    update?: XOR<XOR<TurnosUpdateToOneWithWhereWithoutServiciosInput, TurnosUpdateWithoutServiciosInput>, TurnosUncheckedUpdateWithoutServiciosInput>
  }

  export type PacientesUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<PacientesCreateWithoutServiciosInput, PacientesUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: PacientesCreateOrConnectWithoutServiciosInput
    upsert?: PacientesUpsertWithoutServiciosInput
    connect?: PacientesWhereUniqueInput
    update?: XOR<XOR<PacientesUpdateToOneWithWhereWithoutServiciosInput, PacientesUpdateWithoutServiciosInput>, PacientesUncheckedUpdateWithoutServiciosInput>
  }

  export type DescripcionUpdateOneRequiredWithoutServicioNestedInput = {
    create?: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    connectOrCreate?: DescripcionCreateOrConnectWithoutServicioInput
    upsert?: DescripcionUpsertWithoutServicioInput
    connect?: DescripcionWhereUniqueInput
    update?: XOR<XOR<DescripcionUpdateToOneWithWhereWithoutServicioInput, DescripcionUpdateWithoutServicioInput>, DescripcionUncheckedUpdateWithoutServicioInput>
  }

  export type ComplicacionUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput> | ComplicacionCreateWithoutServicioInput[] | ComplicacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ComplicacionCreateOrConnectWithoutServicioInput | ComplicacionCreateOrConnectWithoutServicioInput[]
    upsert?: ComplicacionUpsertWithWhereUniqueWithoutServicioInput | ComplicacionUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ComplicacionCreateManyServicioInputEnvelope
    set?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    disconnect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    delete?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    connect?: ComplicacionWhereUniqueInput | ComplicacionWhereUniqueInput[]
    update?: ComplicacionUpdateWithWhereUniqueWithoutServicioInput | ComplicacionUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ComplicacionUpdateManyWithWhereWithoutServicioInput | ComplicacionUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
  }

  export type ServicioCreateNestedOneWithoutComplicacionInput = {
    create?: XOR<ServicioCreateWithoutComplicacionInput, ServicioUncheckedCreateWithoutComplicacionInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutComplicacionInput
    connect?: ServicioWhereUniqueInput
  }

  export type EnumTypecomplicacionFieldUpdateOperationsInput = {
    set?: $Enums.Typecomplicacion
  }

  export type ServicioUpdateOneRequiredWithoutComplicacionNestedInput = {
    create?: XOR<ServicioCreateWithoutComplicacionInput, ServicioUncheckedCreateWithoutComplicacionInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutComplicacionInput
    upsert?: ServicioUpsertWithoutComplicacionInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutComplicacionInput, ServicioUpdateWithoutComplicacionInput>, ServicioUncheckedUpdateWithoutComplicacionInput>
  }

  export type ServicioCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ServicioCreateWithoutPacienteInput, ServicioUncheckedCreateWithoutPacienteInput> | ServicioCreateWithoutPacienteInput[] | ServicioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutPacienteInput | ServicioCreateOrConnectWithoutPacienteInput[]
    createMany?: ServicioCreateManyPacienteInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type ServicioUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ServicioCreateWithoutPacienteInput, ServicioUncheckedCreateWithoutPacienteInput> | ServicioCreateWithoutPacienteInput[] | ServicioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutPacienteInput | ServicioCreateOrConnectWithoutPacienteInput[]
    createMany?: ServicioCreateManyPacienteInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type ServicioUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ServicioCreateWithoutPacienteInput, ServicioUncheckedCreateWithoutPacienteInput> | ServicioCreateWithoutPacienteInput[] | ServicioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutPacienteInput | ServicioCreateOrConnectWithoutPacienteInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutPacienteInput | ServicioUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ServicioCreateManyPacienteInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutPacienteInput | ServicioUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutPacienteInput | ServicioUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type ServicioUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ServicioCreateWithoutPacienteInput, ServicioUncheckedCreateWithoutPacienteInput> | ServicioCreateWithoutPacienteInput[] | ServicioUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutPacienteInput | ServicioCreateOrConnectWithoutPacienteInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutPacienteInput | ServicioUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ServicioCreateManyPacienteInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutPacienteInput | ServicioUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutPacienteInput | ServicioUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type ServicioCreateNestedManyWithoutDescripcionInput = {
    create?: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput> | ServicioCreateWithoutDescripcionInput[] | ServicioUncheckedCreateWithoutDescripcionInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutDescripcionInput | ServicioCreateOrConnectWithoutDescripcionInput[]
    createMany?: ServicioCreateManyDescripcionInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type ServicioUncheckedCreateNestedManyWithoutDescripcionInput = {
    create?: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput> | ServicioCreateWithoutDescripcionInput[] | ServicioUncheckedCreateWithoutDescripcionInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutDescripcionInput | ServicioCreateOrConnectWithoutDescripcionInput[]
    createMany?: ServicioCreateManyDescripcionInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type EnumTypeContextFieldUpdateOperationsInput = {
    set?: $Enums.TypeContext
  }

  export type ServicioUpdateManyWithoutDescripcionNestedInput = {
    create?: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput> | ServicioCreateWithoutDescripcionInput[] | ServicioUncheckedCreateWithoutDescripcionInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutDescripcionInput | ServicioCreateOrConnectWithoutDescripcionInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutDescripcionInput | ServicioUpsertWithWhereUniqueWithoutDescripcionInput[]
    createMany?: ServicioCreateManyDescripcionInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutDescripcionInput | ServicioUpdateWithWhereUniqueWithoutDescripcionInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutDescripcionInput | ServicioUpdateManyWithWhereWithoutDescripcionInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type ServicioUncheckedUpdateManyWithoutDescripcionNestedInput = {
    create?: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput> | ServicioCreateWithoutDescripcionInput[] | ServicioUncheckedCreateWithoutDescripcionInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutDescripcionInput | ServicioCreateOrConnectWithoutDescripcionInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutDescripcionInput | ServicioUpsertWithWhereUniqueWithoutDescripcionInput[]
    createMany?: ServicioCreateManyDescripcionInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutDescripcionInput | ServicioUpdateWithWhereUniqueWithoutDescripcionInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutDescripcionInput | ServicioUpdateManyWithWhereWithoutDescripcionInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type ParamedicoCreateNestedOneWithoutTurnosInput = {
    create?: XOR<ParamedicoCreateWithoutTurnosInput, ParamedicoUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ParamedicoCreateOrConnectWithoutTurnosInput
    connect?: ParamedicoWhereUniqueInput
  }

  export type AuxiliarCreateNestedOneWithoutTurnosInput = {
    create?: XOR<AuxiliarCreateWithoutTurnosInput, AuxiliarUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AuxiliarCreateOrConnectWithoutTurnosInput
    connect?: AuxiliarWhereUniqueInput
  }

  export type ConductorCreateNestedOneWithoutTurnosInput = {
    create?: XOR<ConductorCreateWithoutTurnosInput, ConductorUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutTurnosInput
    connect?: ConductorWhereUniqueInput
  }

  export type AmbulanciaCreateNestedOneWithoutTurnosInput = {
    create?: XOR<AmbulanciaCreateWithoutTurnosInput, AmbulanciaUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AmbulanciaCreateOrConnectWithoutTurnosInput
    connect?: AmbulanciaWhereUniqueInput
  }

  export type ServicioCreateNestedManyWithoutTurnoInput = {
    create?: XOR<ServicioCreateWithoutTurnoInput, ServicioUncheckedCreateWithoutTurnoInput> | ServicioCreateWithoutTurnoInput[] | ServicioUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutTurnoInput | ServicioCreateOrConnectWithoutTurnoInput[]
    createMany?: ServicioCreateManyTurnoInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type ServicioUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: XOR<ServicioCreateWithoutTurnoInput, ServicioUncheckedCreateWithoutTurnoInput> | ServicioCreateWithoutTurnoInput[] | ServicioUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutTurnoInput | ServicioCreateOrConnectWithoutTurnoInput[]
    createMany?: ServicioCreateManyTurnoInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type ParamedicoUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<ParamedicoCreateWithoutTurnosInput, ParamedicoUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ParamedicoCreateOrConnectWithoutTurnosInput
    upsert?: ParamedicoUpsertWithoutTurnosInput
    connect?: ParamedicoWhereUniqueInput
    update?: XOR<XOR<ParamedicoUpdateToOneWithWhereWithoutTurnosInput, ParamedicoUpdateWithoutTurnosInput>, ParamedicoUncheckedUpdateWithoutTurnosInput>
  }

  export type AuxiliarUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<AuxiliarCreateWithoutTurnosInput, AuxiliarUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AuxiliarCreateOrConnectWithoutTurnosInput
    upsert?: AuxiliarUpsertWithoutTurnosInput
    connect?: AuxiliarWhereUniqueInput
    update?: XOR<XOR<AuxiliarUpdateToOneWithWhereWithoutTurnosInput, AuxiliarUpdateWithoutTurnosInput>, AuxiliarUncheckedUpdateWithoutTurnosInput>
  }

  export type ConductorUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<ConductorCreateWithoutTurnosInput, ConductorUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ConductorCreateOrConnectWithoutTurnosInput
    upsert?: ConductorUpsertWithoutTurnosInput
    connect?: ConductorWhereUniqueInput
    update?: XOR<XOR<ConductorUpdateToOneWithWhereWithoutTurnosInput, ConductorUpdateWithoutTurnosInput>, ConductorUncheckedUpdateWithoutTurnosInput>
  }

  export type AmbulanciaUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<AmbulanciaCreateWithoutTurnosInput, AmbulanciaUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: AmbulanciaCreateOrConnectWithoutTurnosInput
    upsert?: AmbulanciaUpsertWithoutTurnosInput
    connect?: AmbulanciaWhereUniqueInput
    update?: XOR<XOR<AmbulanciaUpdateToOneWithWhereWithoutTurnosInput, AmbulanciaUpdateWithoutTurnosInput>, AmbulanciaUncheckedUpdateWithoutTurnosInput>
  }

  export type ServicioUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<ServicioCreateWithoutTurnoInput, ServicioUncheckedCreateWithoutTurnoInput> | ServicioCreateWithoutTurnoInput[] | ServicioUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutTurnoInput | ServicioCreateOrConnectWithoutTurnoInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutTurnoInput | ServicioUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: ServicioCreateManyTurnoInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutTurnoInput | ServicioUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutTurnoInput | ServicioUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type ServicioUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<ServicioCreateWithoutTurnoInput, ServicioUncheckedCreateWithoutTurnoInput> | ServicioCreateWithoutTurnoInput[] | ServicioUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutTurnoInput | ServicioCreateOrConnectWithoutTurnoInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutTurnoInput | ServicioUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: ServicioCreateManyTurnoInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutTurnoInput | ServicioUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutTurnoInput | ServicioUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type TurnosCreateNestedManyWithoutConductorInput = {
    create?: XOR<TurnosCreateWithoutConductorInput, TurnosUncheckedCreateWithoutConductorInput> | TurnosCreateWithoutConductorInput[] | TurnosUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutConductorInput | TurnosCreateOrConnectWithoutConductorInput[]
    createMany?: TurnosCreateManyConductorInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type TurnosUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<TurnosCreateWithoutConductorInput, TurnosUncheckedCreateWithoutConductorInput> | TurnosCreateWithoutConductorInput[] | TurnosUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutConductorInput | TurnosCreateOrConnectWithoutConductorInput[]
    createMany?: TurnosCreateManyConductorInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type TurnosUpdateManyWithoutConductorNestedInput = {
    create?: XOR<TurnosCreateWithoutConductorInput, TurnosUncheckedCreateWithoutConductorInput> | TurnosCreateWithoutConductorInput[] | TurnosUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutConductorInput | TurnosCreateOrConnectWithoutConductorInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutConductorInput | TurnosUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: TurnosCreateManyConductorInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutConductorInput | TurnosUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutConductorInput | TurnosUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type TurnosUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<TurnosCreateWithoutConductorInput, TurnosUncheckedCreateWithoutConductorInput> | TurnosCreateWithoutConductorInput[] | TurnosUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutConductorInput | TurnosCreateOrConnectWithoutConductorInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutConductorInput | TurnosUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: TurnosCreateManyConductorInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutConductorInput | TurnosUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutConductorInput | TurnosUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type TurnosCreateNestedManyWithoutParamedicoInput = {
    create?: XOR<TurnosCreateWithoutParamedicoInput, TurnosUncheckedCreateWithoutParamedicoInput> | TurnosCreateWithoutParamedicoInput[] | TurnosUncheckedCreateWithoutParamedicoInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutParamedicoInput | TurnosCreateOrConnectWithoutParamedicoInput[]
    createMany?: TurnosCreateManyParamedicoInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type TurnosUncheckedCreateNestedManyWithoutParamedicoInput = {
    create?: XOR<TurnosCreateWithoutParamedicoInput, TurnosUncheckedCreateWithoutParamedicoInput> | TurnosCreateWithoutParamedicoInput[] | TurnosUncheckedCreateWithoutParamedicoInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutParamedicoInput | TurnosCreateOrConnectWithoutParamedicoInput[]
    createMany?: TurnosCreateManyParamedicoInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TurnosUpdateManyWithoutParamedicoNestedInput = {
    create?: XOR<TurnosCreateWithoutParamedicoInput, TurnosUncheckedCreateWithoutParamedicoInput> | TurnosCreateWithoutParamedicoInput[] | TurnosUncheckedCreateWithoutParamedicoInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutParamedicoInput | TurnosCreateOrConnectWithoutParamedicoInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutParamedicoInput | TurnosUpsertWithWhereUniqueWithoutParamedicoInput[]
    createMany?: TurnosCreateManyParamedicoInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutParamedicoInput | TurnosUpdateWithWhereUniqueWithoutParamedicoInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutParamedicoInput | TurnosUpdateManyWithWhereWithoutParamedicoInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type TurnosUncheckedUpdateManyWithoutParamedicoNestedInput = {
    create?: XOR<TurnosCreateWithoutParamedicoInput, TurnosUncheckedCreateWithoutParamedicoInput> | TurnosCreateWithoutParamedicoInput[] | TurnosUncheckedCreateWithoutParamedicoInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutParamedicoInput | TurnosCreateOrConnectWithoutParamedicoInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutParamedicoInput | TurnosUpsertWithWhereUniqueWithoutParamedicoInput[]
    createMany?: TurnosCreateManyParamedicoInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutParamedicoInput | TurnosUpdateWithWhereUniqueWithoutParamedicoInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutParamedicoInput | TurnosUpdateManyWithWhereWithoutParamedicoInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type TurnosCreateNestedManyWithoutAuxiliarInput = {
    create?: XOR<TurnosCreateWithoutAuxiliarInput, TurnosUncheckedCreateWithoutAuxiliarInput> | TurnosCreateWithoutAuxiliarInput[] | TurnosUncheckedCreateWithoutAuxiliarInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAuxiliarInput | TurnosCreateOrConnectWithoutAuxiliarInput[]
    createMany?: TurnosCreateManyAuxiliarInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type TurnosUncheckedCreateNestedManyWithoutAuxiliarInput = {
    create?: XOR<TurnosCreateWithoutAuxiliarInput, TurnosUncheckedCreateWithoutAuxiliarInput> | TurnosCreateWithoutAuxiliarInput[] | TurnosUncheckedCreateWithoutAuxiliarInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAuxiliarInput | TurnosCreateOrConnectWithoutAuxiliarInput[]
    createMany?: TurnosCreateManyAuxiliarInputEnvelope
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
  }

  export type TurnosUpdateManyWithoutAuxiliarNestedInput = {
    create?: XOR<TurnosCreateWithoutAuxiliarInput, TurnosUncheckedCreateWithoutAuxiliarInput> | TurnosCreateWithoutAuxiliarInput[] | TurnosUncheckedCreateWithoutAuxiliarInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAuxiliarInput | TurnosCreateOrConnectWithoutAuxiliarInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutAuxiliarInput | TurnosUpsertWithWhereUniqueWithoutAuxiliarInput[]
    createMany?: TurnosCreateManyAuxiliarInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutAuxiliarInput | TurnosUpdateWithWhereUniqueWithoutAuxiliarInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutAuxiliarInput | TurnosUpdateManyWithWhereWithoutAuxiliarInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type TurnosUncheckedUpdateManyWithoutAuxiliarNestedInput = {
    create?: XOR<TurnosCreateWithoutAuxiliarInput, TurnosUncheckedCreateWithoutAuxiliarInput> | TurnosCreateWithoutAuxiliarInput[] | TurnosUncheckedCreateWithoutAuxiliarInput[]
    connectOrCreate?: TurnosCreateOrConnectWithoutAuxiliarInput | TurnosCreateOrConnectWithoutAuxiliarInput[]
    upsert?: TurnosUpsertWithWhereUniqueWithoutAuxiliarInput | TurnosUpsertWithWhereUniqueWithoutAuxiliarInput[]
    createMany?: TurnosCreateManyAuxiliarInputEnvelope
    set?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    disconnect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    delete?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    connect?: TurnosWhereUniqueInput | TurnosWhereUniqueInput[]
    update?: TurnosUpdateWithWhereUniqueWithoutAuxiliarInput | TurnosUpdateWithWhereUniqueWithoutAuxiliarInput[]
    updateMany?: TurnosUpdateManyWithWhereWithoutAuxiliarInput | TurnosUpdateManyWithWhereWithoutAuxiliarInput[]
    deleteMany?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTypecomplicacionFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionFilter<$PrismaModel> | $Enums.Typecomplicacion
  }

  export type NestedEnumTypecomplicacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Typecomplicacion | EnumTypecomplicacionFieldRefInput<$PrismaModel>
    in?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Typecomplicacion[] | ListEnumTypecomplicacionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypecomplicacionWithAggregatesFilter<$PrismaModel> | $Enums.Typecomplicacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypecomplicacionFilter<$PrismaModel>
    _max?: NestedEnumTypecomplicacionFilter<$PrismaModel>
  }

  export type NestedEnumTypeContextFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContext | EnumTypeContextFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeContextFilter<$PrismaModel> | $Enums.TypeContext
  }

  export type NestedEnumTypeContextWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeContext | EnumTypeContextFieldRefInput<$PrismaModel>
    in?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeContext[] | ListEnumTypeContextFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeContextWithAggregatesFilter<$PrismaModel> | $Enums.TypeContext
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeContextFilter<$PrismaModel>
    _max?: NestedEnumTypeContextFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type AmbulanciaCreateWithoutIpsInput = {
    modelo: string
    placa: string
    tipo: string
    turnos?: TurnosCreateNestedManyWithoutAmbulanciaInput
  }

  export type AmbulanciaUncheckedCreateWithoutIpsInput = {
    id?: number
    modelo: string
    placa: string
    tipo: string
    turnos?: TurnosUncheckedCreateNestedManyWithoutAmbulanciaInput
  }

  export type AmbulanciaCreateOrConnectWithoutIpsInput = {
    where: AmbulanciaWhereUniqueInput
    create: XOR<AmbulanciaCreateWithoutIpsInput, AmbulanciaUncheckedCreateWithoutIpsInput>
  }

  export type AmbulanciaCreateManyIpsInputEnvelope = {
    data: AmbulanciaCreateManyIpsInput | AmbulanciaCreateManyIpsInput[]
    skipDuplicates?: boolean
  }

  export type AmbulanciaUpsertWithWhereUniqueWithoutIpsInput = {
    where: AmbulanciaWhereUniqueInput
    update: XOR<AmbulanciaUpdateWithoutIpsInput, AmbulanciaUncheckedUpdateWithoutIpsInput>
    create: XOR<AmbulanciaCreateWithoutIpsInput, AmbulanciaUncheckedCreateWithoutIpsInput>
  }

  export type AmbulanciaUpdateWithWhereUniqueWithoutIpsInput = {
    where: AmbulanciaWhereUniqueInput
    data: XOR<AmbulanciaUpdateWithoutIpsInput, AmbulanciaUncheckedUpdateWithoutIpsInput>
  }

  export type AmbulanciaUpdateManyWithWhereWithoutIpsInput = {
    where: AmbulanciaScalarWhereInput
    data: XOR<AmbulanciaUpdateManyMutationInput, AmbulanciaUncheckedUpdateManyWithoutIpsInput>
  }

  export type AmbulanciaScalarWhereInput = {
    AND?: AmbulanciaScalarWhereInput | AmbulanciaScalarWhereInput[]
    OR?: AmbulanciaScalarWhereInput[]
    NOT?: AmbulanciaScalarWhereInput | AmbulanciaScalarWhereInput[]
    id?: IntFilter<"Ambulancia"> | number
    modelo?: StringFilter<"Ambulancia"> | string
    placa?: StringFilter<"Ambulancia"> | string
    tipo?: StringFilter<"Ambulancia"> | string
    ipsId?: IntFilter<"Ambulancia"> | number
  }

  export type IpsCreateWithoutAmbulanciasInput = {
    nombre: string
    direccion: string
  }

  export type IpsUncheckedCreateWithoutAmbulanciasInput = {
    id?: number
    nombre: string
    direccion: string
  }

  export type IpsCreateOrConnectWithoutAmbulanciasInput = {
    where: IpsWhereUniqueInput
    create: XOR<IpsCreateWithoutAmbulanciasInput, IpsUncheckedCreateWithoutAmbulanciasInput>
  }

  export type TurnosCreateWithoutAmbulanciaInput = {
    time_start: Date | string
    time_end: Date | string
    paramedico: ParamedicoCreateNestedOneWithoutTurnosInput
    auxiliar: AuxiliarCreateNestedOneWithoutTurnosInput
    conductor: ConductorCreateNestedOneWithoutTurnosInput
    servicios?: ServicioCreateNestedManyWithoutTurnoInput
  }

  export type TurnosUncheckedCreateWithoutAmbulanciaInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    conductorId: number
    servicios?: ServicioUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnosCreateOrConnectWithoutAmbulanciaInput = {
    where: TurnosWhereUniqueInput
    create: XOR<TurnosCreateWithoutAmbulanciaInput, TurnosUncheckedCreateWithoutAmbulanciaInput>
  }

  export type TurnosCreateManyAmbulanciaInputEnvelope = {
    data: TurnosCreateManyAmbulanciaInput | TurnosCreateManyAmbulanciaInput[]
    skipDuplicates?: boolean
  }

  export type IpsUpsertWithoutAmbulanciasInput = {
    update: XOR<IpsUpdateWithoutAmbulanciasInput, IpsUncheckedUpdateWithoutAmbulanciasInput>
    create: XOR<IpsCreateWithoutAmbulanciasInput, IpsUncheckedCreateWithoutAmbulanciasInput>
    where?: IpsWhereInput
  }

  export type IpsUpdateToOneWithWhereWithoutAmbulanciasInput = {
    where?: IpsWhereInput
    data: XOR<IpsUpdateWithoutAmbulanciasInput, IpsUncheckedUpdateWithoutAmbulanciasInput>
  }

  export type IpsUpdateWithoutAmbulanciasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type IpsUncheckedUpdateWithoutAmbulanciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosUpsertWithWhereUniqueWithoutAmbulanciaInput = {
    where: TurnosWhereUniqueInput
    update: XOR<TurnosUpdateWithoutAmbulanciaInput, TurnosUncheckedUpdateWithoutAmbulanciaInput>
    create: XOR<TurnosCreateWithoutAmbulanciaInput, TurnosUncheckedCreateWithoutAmbulanciaInput>
  }

  export type TurnosUpdateWithWhereUniqueWithoutAmbulanciaInput = {
    where: TurnosWhereUniqueInput
    data: XOR<TurnosUpdateWithoutAmbulanciaInput, TurnosUncheckedUpdateWithoutAmbulanciaInput>
  }

  export type TurnosUpdateManyWithWhereWithoutAmbulanciaInput = {
    where: TurnosScalarWhereInput
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyWithoutAmbulanciaInput>
  }

  export type TurnosScalarWhereInput = {
    AND?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
    OR?: TurnosScalarWhereInput[]
    NOT?: TurnosScalarWhereInput | TurnosScalarWhereInput[]
    id?: IntFilter<"Turnos"> | number
    time_start?: DateTimeFilter<"Turnos"> | Date | string
    time_end?: DateTimeFilter<"Turnos"> | Date | string
    paramedicId?: IntFilter<"Turnos"> | number
    auxiliarId?: IntFilter<"Turnos"> | number
    conductorId?: IntFilter<"Turnos"> | number
    ambulanciaId?: IntFilter<"Turnos"> | number
  }

  export type ComplicacionCreateWithoutServicioInput = {
    type: $Enums.Typecomplicacion
    description: string
  }

  export type ComplicacionUncheckedCreateWithoutServicioInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
  }

  export type ComplicacionCreateOrConnectWithoutServicioInput = {
    where: ComplicacionWhereUniqueInput
    create: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput>
  }

  export type ComplicacionCreateManyServicioInputEnvelope = {
    data: ComplicacionCreateManyServicioInput | ComplicacionCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type TurnosCreateWithoutServiciosInput = {
    time_start: Date | string
    time_end: Date | string
    paramedico: ParamedicoCreateNestedOneWithoutTurnosInput
    auxiliar: AuxiliarCreateNestedOneWithoutTurnosInput
    conductor: ConductorCreateNestedOneWithoutTurnosInput
    ambulancia: AmbulanciaCreateNestedOneWithoutTurnosInput
  }

  export type TurnosUncheckedCreateWithoutServiciosInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
  }

  export type TurnosCreateOrConnectWithoutServiciosInput = {
    where: TurnosWhereUniqueInput
    create: XOR<TurnosCreateWithoutServiciosInput, TurnosUncheckedCreateWithoutServiciosInput>
  }

  export type PacientesCreateWithoutServiciosInput = {
    name: string
    last_name: string
    document: string
    entidad_salud: string
  }

  export type PacientesUncheckedCreateWithoutServiciosInput = {
    id?: number
    name: string
    last_name: string
    document: string
    entidad_salud: string
  }

  export type PacientesCreateOrConnectWithoutServiciosInput = {
    where: PacientesWhereUniqueInput
    create: XOR<PacientesCreateWithoutServiciosInput, PacientesUncheckedCreateWithoutServiciosInput>
  }

  export type DescripcionCreateWithoutServicioInput = {
    description: string
    type_context: $Enums.TypeContext
    implicados: string
  }

  export type DescripcionUncheckedCreateWithoutServicioInput = {
    id?: number
    description: string
    type_context: $Enums.TypeContext
    implicados: string
  }

  export type DescripcionCreateOrConnectWithoutServicioInput = {
    where: DescripcionWhereUniqueInput
    create: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
  }

  export type ComplicacionUpsertWithWhereUniqueWithoutServicioInput = {
    where: ComplicacionWhereUniqueInput
    update: XOR<ComplicacionUpdateWithoutServicioInput, ComplicacionUncheckedUpdateWithoutServicioInput>
    create: XOR<ComplicacionCreateWithoutServicioInput, ComplicacionUncheckedCreateWithoutServicioInput>
  }

  export type ComplicacionUpdateWithWhereUniqueWithoutServicioInput = {
    where: ComplicacionWhereUniqueInput
    data: XOR<ComplicacionUpdateWithoutServicioInput, ComplicacionUncheckedUpdateWithoutServicioInput>
  }

  export type ComplicacionUpdateManyWithWhereWithoutServicioInput = {
    where: ComplicacionScalarWhereInput
    data: XOR<ComplicacionUpdateManyMutationInput, ComplicacionUncheckedUpdateManyWithoutServicioInput>
  }

  export type ComplicacionScalarWhereInput = {
    AND?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
    OR?: ComplicacionScalarWhereInput[]
    NOT?: ComplicacionScalarWhereInput | ComplicacionScalarWhereInput[]
    id?: IntFilter<"Complicacion"> | number
    type?: EnumTypecomplicacionFilter<"Complicacion"> | $Enums.Typecomplicacion
    description?: StringFilter<"Complicacion"> | string
    id_servicio?: IntFilter<"Complicacion"> | number
  }

  export type TurnosUpsertWithoutServiciosInput = {
    update: XOR<TurnosUpdateWithoutServiciosInput, TurnosUncheckedUpdateWithoutServiciosInput>
    create: XOR<TurnosCreateWithoutServiciosInput, TurnosUncheckedCreateWithoutServiciosInput>
    where?: TurnosWhereInput
  }

  export type TurnosUpdateToOneWithWhereWithoutServiciosInput = {
    where?: TurnosWhereInput
    data: XOR<TurnosUpdateWithoutServiciosInput, TurnosUncheckedUpdateWithoutServiciosInput>
  }

  export type TurnosUpdateWithoutServiciosInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedico?: ParamedicoUpdateOneRequiredWithoutTurnosNestedInput
    auxiliar?: AuxiliarUpdateOneRequiredWithoutTurnosNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutTurnosNestedInput
    ambulancia?: AmbulanciaUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type TurnosUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
  }

  export type PacientesUpsertWithoutServiciosInput = {
    update: XOR<PacientesUpdateWithoutServiciosInput, PacientesUncheckedUpdateWithoutServiciosInput>
    create: XOR<PacientesCreateWithoutServiciosInput, PacientesUncheckedCreateWithoutServiciosInput>
    where?: PacientesWhereInput
  }

  export type PacientesUpdateToOneWithWhereWithoutServiciosInput = {
    where?: PacientesWhereInput
    data: XOR<PacientesUpdateWithoutServiciosInput, PacientesUncheckedUpdateWithoutServiciosInput>
  }

  export type PacientesUpdateWithoutServiciosInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    entidad_salud?: StringFieldUpdateOperationsInput | string
  }

  export type PacientesUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    entidad_salud?: StringFieldUpdateOperationsInput | string
  }

  export type DescripcionUpsertWithoutServicioInput = {
    update: XOR<DescripcionUpdateWithoutServicioInput, DescripcionUncheckedUpdateWithoutServicioInput>
    create: XOR<DescripcionCreateWithoutServicioInput, DescripcionUncheckedCreateWithoutServicioInput>
    where?: DescripcionWhereInput
  }

  export type DescripcionUpdateToOneWithWhereWithoutServicioInput = {
    where?: DescripcionWhereInput
    data: XOR<DescripcionUpdateWithoutServicioInput, DescripcionUncheckedUpdateWithoutServicioInput>
  }

  export type DescripcionUpdateWithoutServicioInput = {
    description?: StringFieldUpdateOperationsInput | string
    type_context?: EnumTypeContextFieldUpdateOperationsInput | $Enums.TypeContext
    implicados?: StringFieldUpdateOperationsInput | string
  }

  export type DescripcionUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    type_context?: EnumTypeContextFieldUpdateOperationsInput | $Enums.TypeContext
    implicados?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioCreateWithoutComplicacionInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    turno: TurnosCreateNestedOneWithoutServiciosInput
    paciente: PacientesCreateNestedOneWithoutServiciosInput
    descripcion: DescripcionCreateNestedOneWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutComplicacionInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_paciente: number
    id_descripcion: number
  }

  export type ServicioCreateOrConnectWithoutComplicacionInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutComplicacionInput, ServicioUncheckedCreateWithoutComplicacionInput>
  }

  export type ServicioUpsertWithoutComplicacionInput = {
    update: XOR<ServicioUpdateWithoutComplicacionInput, ServicioUncheckedUpdateWithoutComplicacionInput>
    create: XOR<ServicioCreateWithoutComplicacionInput, ServicioUncheckedCreateWithoutComplicacionInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutComplicacionInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutComplicacionInput, ServicioUncheckedUpdateWithoutComplicacionInput>
  }

  export type ServicioUpdateWithoutComplicacionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    turno?: TurnosUpdateOneRequiredWithoutServiciosNestedInput
    paciente?: PacientesUpdateOneRequiredWithoutServiciosNestedInput
    descripcion?: DescripcionUpdateOneRequiredWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutComplicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioCreateWithoutPacienteInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    complicacion?: ComplicacionCreateNestedManyWithoutServicioInput
    turno: TurnosCreateNestedOneWithoutServiciosInput
    descripcion: DescripcionCreateNestedOneWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutPacienteInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_descripcion: number
    complicacion?: ComplicacionUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutPacienteInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutPacienteInput, ServicioUncheckedCreateWithoutPacienteInput>
  }

  export type ServicioCreateManyPacienteInputEnvelope = {
    data: ServicioCreateManyPacienteInput | ServicioCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ServicioUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ServicioWhereUniqueInput
    update: XOR<ServicioUpdateWithoutPacienteInput, ServicioUncheckedUpdateWithoutPacienteInput>
    create: XOR<ServicioCreateWithoutPacienteInput, ServicioUncheckedCreateWithoutPacienteInput>
  }

  export type ServicioUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ServicioWhereUniqueInput
    data: XOR<ServicioUpdateWithoutPacienteInput, ServicioUncheckedUpdateWithoutPacienteInput>
  }

  export type ServicioUpdateManyWithWhereWithoutPacienteInput = {
    where: ServicioScalarWhereInput
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ServicioScalarWhereInput = {
    AND?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
    OR?: ServicioScalarWhereInput[]
    NOT?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
    id?: IntFilter<"Servicio"> | number
    date?: DateTimeFilter<"Servicio"> | Date | string
    status?: EnumStatusFilter<"Servicio"> | $Enums.Status
    time_arrived?: DateTimeFilter<"Servicio"> | Date | string
    time_finish?: DateTimeFilter<"Servicio"> | Date | string
    code_start?: StringFilter<"Servicio"> | string
    code_end?: StringFilter<"Servicio"> | string
    place_accident?: StringFilter<"Servicio"> | string
    nro_informe?: StringFilter<"Servicio"> | string
    id_turno?: IntFilter<"Servicio"> | number
    id_paciente?: IntFilter<"Servicio"> | number
    id_descripcion?: IntFilter<"Servicio"> | number
  }

  export type ServicioCreateWithoutDescripcionInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    complicacion?: ComplicacionCreateNestedManyWithoutServicioInput
    turno: TurnosCreateNestedOneWithoutServiciosInput
    paciente: PacientesCreateNestedOneWithoutServiciosInput
  }

  export type ServicioUncheckedCreateWithoutDescripcionInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_paciente: number
    complicacion?: ComplicacionUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutDescripcionInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput>
  }

  export type ServicioCreateManyDescripcionInputEnvelope = {
    data: ServicioCreateManyDescripcionInput | ServicioCreateManyDescripcionInput[]
    skipDuplicates?: boolean
  }

  export type ServicioUpsertWithWhereUniqueWithoutDescripcionInput = {
    where: ServicioWhereUniqueInput
    update: XOR<ServicioUpdateWithoutDescripcionInput, ServicioUncheckedUpdateWithoutDescripcionInput>
    create: XOR<ServicioCreateWithoutDescripcionInput, ServicioUncheckedCreateWithoutDescripcionInput>
  }

  export type ServicioUpdateWithWhereUniqueWithoutDescripcionInput = {
    where: ServicioWhereUniqueInput
    data: XOR<ServicioUpdateWithoutDescripcionInput, ServicioUncheckedUpdateWithoutDescripcionInput>
  }

  export type ServicioUpdateManyWithWhereWithoutDescripcionInput = {
    where: ServicioScalarWhereInput
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyWithoutDescripcionInput>
  }

  export type ParamedicoCreateWithoutTurnosInput = {
    name: string
    last_name: string
    document: string
    tipo_medic: string
    no_ci_medic: string
    id_capacitation: string
    password: string
    role: $Enums.Role
  }

  export type ParamedicoUncheckedCreateWithoutTurnosInput = {
    id?: number
    name: string
    last_name: string
    document: string
    tipo_medic: string
    no_ci_medic: string
    id_capacitation: string
    password: string
    role: $Enums.Role
  }

  export type ParamedicoCreateOrConnectWithoutTurnosInput = {
    where: ParamedicoWhereUniqueInput
    create: XOR<ParamedicoCreateWithoutTurnosInput, ParamedicoUncheckedCreateWithoutTurnosInput>
  }

  export type AuxiliarCreateWithoutTurnosInput = {
    name: string
    last_name: string
    document: string
    no_ci_auxiliar: string
    no_ci_soporte_vital: string
    password: string
    role: $Enums.Role
  }

  export type AuxiliarUncheckedCreateWithoutTurnosInput = {
    id?: number
    name: string
    last_name: string
    document: string
    no_ci_auxiliar: string
    no_ci_soporte_vital: string
    password: string
    role: $Enums.Role
  }

  export type AuxiliarCreateOrConnectWithoutTurnosInput = {
    where: AuxiliarWhereUniqueInput
    create: XOR<AuxiliarCreateWithoutTurnosInput, AuxiliarUncheckedCreateWithoutTurnosInput>
  }

  export type ConductorCreateWithoutTurnosInput = {
    name: string
    last_name: string
    document: string
    no_licencia: string
    no_fast_driver: string
  }

  export type ConductorUncheckedCreateWithoutTurnosInput = {
    id?: number
    name: string
    last_name: string
    document: string
    no_licencia: string
    no_fast_driver: string
  }

  export type ConductorCreateOrConnectWithoutTurnosInput = {
    where: ConductorWhereUniqueInput
    create: XOR<ConductorCreateWithoutTurnosInput, ConductorUncheckedCreateWithoutTurnosInput>
  }

  export type AmbulanciaCreateWithoutTurnosInput = {
    modelo: string
    placa: string
    tipo: string
    ips: IpsCreateNestedOneWithoutAmbulanciasInput
  }

  export type AmbulanciaUncheckedCreateWithoutTurnosInput = {
    id?: number
    modelo: string
    placa: string
    tipo: string
    ipsId: number
  }

  export type AmbulanciaCreateOrConnectWithoutTurnosInput = {
    where: AmbulanciaWhereUniqueInput
    create: XOR<AmbulanciaCreateWithoutTurnosInput, AmbulanciaUncheckedCreateWithoutTurnosInput>
  }

  export type ServicioCreateWithoutTurnoInput = {
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    complicacion?: ComplicacionCreateNestedManyWithoutServicioInput
    paciente: PacientesCreateNestedOneWithoutServiciosInput
    descripcion: DescripcionCreateNestedOneWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutTurnoInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_descripcion: number
    complicacion?: ComplicacionUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutTurnoInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutTurnoInput, ServicioUncheckedCreateWithoutTurnoInput>
  }

  export type ServicioCreateManyTurnoInputEnvelope = {
    data: ServicioCreateManyTurnoInput | ServicioCreateManyTurnoInput[]
    skipDuplicates?: boolean
  }

  export type ParamedicoUpsertWithoutTurnosInput = {
    update: XOR<ParamedicoUpdateWithoutTurnosInput, ParamedicoUncheckedUpdateWithoutTurnosInput>
    create: XOR<ParamedicoCreateWithoutTurnosInput, ParamedicoUncheckedCreateWithoutTurnosInput>
    where?: ParamedicoWhereInput
  }

  export type ParamedicoUpdateToOneWithWhereWithoutTurnosInput = {
    where?: ParamedicoWhereInput
    data: XOR<ParamedicoUpdateWithoutTurnosInput, ParamedicoUncheckedUpdateWithoutTurnosInput>
  }

  export type ParamedicoUpdateWithoutTurnosInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    tipo_medic?: StringFieldUpdateOperationsInput | string
    no_ci_medic?: StringFieldUpdateOperationsInput | string
    id_capacitation?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ParamedicoUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    tipo_medic?: StringFieldUpdateOperationsInput | string
    no_ci_medic?: StringFieldUpdateOperationsInput | string
    id_capacitation?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AuxiliarUpsertWithoutTurnosInput = {
    update: XOR<AuxiliarUpdateWithoutTurnosInput, AuxiliarUncheckedUpdateWithoutTurnosInput>
    create: XOR<AuxiliarCreateWithoutTurnosInput, AuxiliarUncheckedCreateWithoutTurnosInput>
    where?: AuxiliarWhereInput
  }

  export type AuxiliarUpdateToOneWithWhereWithoutTurnosInput = {
    where?: AuxiliarWhereInput
    data: XOR<AuxiliarUpdateWithoutTurnosInput, AuxiliarUncheckedUpdateWithoutTurnosInput>
  }

  export type AuxiliarUpdateWithoutTurnosInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_ci_auxiliar?: StringFieldUpdateOperationsInput | string
    no_ci_soporte_vital?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AuxiliarUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_ci_auxiliar?: StringFieldUpdateOperationsInput | string
    no_ci_soporte_vital?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ConductorUpsertWithoutTurnosInput = {
    update: XOR<ConductorUpdateWithoutTurnosInput, ConductorUncheckedUpdateWithoutTurnosInput>
    create: XOR<ConductorCreateWithoutTurnosInput, ConductorUncheckedCreateWithoutTurnosInput>
    where?: ConductorWhereInput
  }

  export type ConductorUpdateToOneWithWhereWithoutTurnosInput = {
    where?: ConductorWhereInput
    data: XOR<ConductorUpdateWithoutTurnosInput, ConductorUncheckedUpdateWithoutTurnosInput>
  }

  export type ConductorUpdateWithoutTurnosInput = {
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_licencia?: StringFieldUpdateOperationsInput | string
    no_fast_driver?: StringFieldUpdateOperationsInput | string
  }

  export type ConductorUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    no_licencia?: StringFieldUpdateOperationsInput | string
    no_fast_driver?: StringFieldUpdateOperationsInput | string
  }

  export type AmbulanciaUpsertWithoutTurnosInput = {
    update: XOR<AmbulanciaUpdateWithoutTurnosInput, AmbulanciaUncheckedUpdateWithoutTurnosInput>
    create: XOR<AmbulanciaCreateWithoutTurnosInput, AmbulanciaUncheckedCreateWithoutTurnosInput>
    where?: AmbulanciaWhereInput
  }

  export type AmbulanciaUpdateToOneWithWhereWithoutTurnosInput = {
    where?: AmbulanciaWhereInput
    data: XOR<AmbulanciaUpdateWithoutTurnosInput, AmbulanciaUncheckedUpdateWithoutTurnosInput>
  }

  export type AmbulanciaUpdateWithoutTurnosInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    ips?: IpsUpdateOneRequiredWithoutAmbulanciasNestedInput
  }

  export type AmbulanciaUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    ipsId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioUpsertWithWhereUniqueWithoutTurnoInput = {
    where: ServicioWhereUniqueInput
    update: XOR<ServicioUpdateWithoutTurnoInput, ServicioUncheckedUpdateWithoutTurnoInput>
    create: XOR<ServicioCreateWithoutTurnoInput, ServicioUncheckedCreateWithoutTurnoInput>
  }

  export type ServicioUpdateWithWhereUniqueWithoutTurnoInput = {
    where: ServicioWhereUniqueInput
    data: XOR<ServicioUpdateWithoutTurnoInput, ServicioUncheckedUpdateWithoutTurnoInput>
  }

  export type ServicioUpdateManyWithWhereWithoutTurnoInput = {
    where: ServicioScalarWhereInput
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyWithoutTurnoInput>
  }

  export type TurnosCreateWithoutConductorInput = {
    time_start: Date | string
    time_end: Date | string
    paramedico: ParamedicoCreateNestedOneWithoutTurnosInput
    auxiliar: AuxiliarCreateNestedOneWithoutTurnosInput
    ambulancia: AmbulanciaCreateNestedOneWithoutTurnosInput
    servicios?: ServicioCreateNestedManyWithoutTurnoInput
  }

  export type TurnosUncheckedCreateWithoutConductorInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    ambulanciaId: number
    servicios?: ServicioUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnosCreateOrConnectWithoutConductorInput = {
    where: TurnosWhereUniqueInput
    create: XOR<TurnosCreateWithoutConductorInput, TurnosUncheckedCreateWithoutConductorInput>
  }

  export type TurnosCreateManyConductorInputEnvelope = {
    data: TurnosCreateManyConductorInput | TurnosCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type TurnosUpsertWithWhereUniqueWithoutConductorInput = {
    where: TurnosWhereUniqueInput
    update: XOR<TurnosUpdateWithoutConductorInput, TurnosUncheckedUpdateWithoutConductorInput>
    create: XOR<TurnosCreateWithoutConductorInput, TurnosUncheckedCreateWithoutConductorInput>
  }

  export type TurnosUpdateWithWhereUniqueWithoutConductorInput = {
    where: TurnosWhereUniqueInput
    data: XOR<TurnosUpdateWithoutConductorInput, TurnosUncheckedUpdateWithoutConductorInput>
  }

  export type TurnosUpdateManyWithWhereWithoutConductorInput = {
    where: TurnosScalarWhereInput
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyWithoutConductorInput>
  }

  export type TurnosCreateWithoutParamedicoInput = {
    time_start: Date | string
    time_end: Date | string
    auxiliar: AuxiliarCreateNestedOneWithoutTurnosInput
    conductor: ConductorCreateNestedOneWithoutTurnosInput
    ambulancia: AmbulanciaCreateNestedOneWithoutTurnosInput
    servicios?: ServicioCreateNestedManyWithoutTurnoInput
  }

  export type TurnosUncheckedCreateWithoutParamedicoInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
    servicios?: ServicioUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnosCreateOrConnectWithoutParamedicoInput = {
    where: TurnosWhereUniqueInput
    create: XOR<TurnosCreateWithoutParamedicoInput, TurnosUncheckedCreateWithoutParamedicoInput>
  }

  export type TurnosCreateManyParamedicoInputEnvelope = {
    data: TurnosCreateManyParamedicoInput | TurnosCreateManyParamedicoInput[]
    skipDuplicates?: boolean
  }

  export type TurnosUpsertWithWhereUniqueWithoutParamedicoInput = {
    where: TurnosWhereUniqueInput
    update: XOR<TurnosUpdateWithoutParamedicoInput, TurnosUncheckedUpdateWithoutParamedicoInput>
    create: XOR<TurnosCreateWithoutParamedicoInput, TurnosUncheckedCreateWithoutParamedicoInput>
  }

  export type TurnosUpdateWithWhereUniqueWithoutParamedicoInput = {
    where: TurnosWhereUniqueInput
    data: XOR<TurnosUpdateWithoutParamedicoInput, TurnosUncheckedUpdateWithoutParamedicoInput>
  }

  export type TurnosUpdateManyWithWhereWithoutParamedicoInput = {
    where: TurnosScalarWhereInput
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyWithoutParamedicoInput>
  }

  export type TurnosCreateWithoutAuxiliarInput = {
    time_start: Date | string
    time_end: Date | string
    paramedico: ParamedicoCreateNestedOneWithoutTurnosInput
    conductor: ConductorCreateNestedOneWithoutTurnosInput
    ambulancia: AmbulanciaCreateNestedOneWithoutTurnosInput
    servicios?: ServicioCreateNestedManyWithoutTurnoInput
  }

  export type TurnosUncheckedCreateWithoutAuxiliarInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    conductorId: number
    ambulanciaId: number
    servicios?: ServicioUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnosCreateOrConnectWithoutAuxiliarInput = {
    where: TurnosWhereUniqueInput
    create: XOR<TurnosCreateWithoutAuxiliarInput, TurnosUncheckedCreateWithoutAuxiliarInput>
  }

  export type TurnosCreateManyAuxiliarInputEnvelope = {
    data: TurnosCreateManyAuxiliarInput | TurnosCreateManyAuxiliarInput[]
    skipDuplicates?: boolean
  }

  export type TurnosUpsertWithWhereUniqueWithoutAuxiliarInput = {
    where: TurnosWhereUniqueInput
    update: XOR<TurnosUpdateWithoutAuxiliarInput, TurnosUncheckedUpdateWithoutAuxiliarInput>
    create: XOR<TurnosCreateWithoutAuxiliarInput, TurnosUncheckedCreateWithoutAuxiliarInput>
  }

  export type TurnosUpdateWithWhereUniqueWithoutAuxiliarInput = {
    where: TurnosWhereUniqueInput
    data: XOR<TurnosUpdateWithoutAuxiliarInput, TurnosUncheckedUpdateWithoutAuxiliarInput>
  }

  export type TurnosUpdateManyWithWhereWithoutAuxiliarInput = {
    where: TurnosScalarWhereInput
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyWithoutAuxiliarInput>
  }

  export type AmbulanciaCreateManyIpsInput = {
    id?: number
    modelo: string
    placa: string
    tipo: string
  }

  export type AmbulanciaUpdateWithoutIpsInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    turnos?: TurnosUpdateManyWithoutAmbulanciaNestedInput
  }

  export type AmbulanciaUncheckedUpdateWithoutIpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    turnos?: TurnosUncheckedUpdateManyWithoutAmbulanciaNestedInput
  }

  export type AmbulanciaUncheckedUpdateManyWithoutIpsInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosCreateManyAmbulanciaInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    conductorId: number
  }

  export type TurnosUpdateWithoutAmbulanciaInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedico?: ParamedicoUpdateOneRequiredWithoutTurnosNestedInput
    auxiliar?: AuxiliarUpdateOneRequiredWithoutTurnosNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutTurnosNestedInput
    servicios?: ServicioUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateWithoutAmbulanciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    servicios?: ServicioUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateManyWithoutAmbulanciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
  }

  export type ComplicacionCreateManyServicioInput = {
    id?: number
    type: $Enums.Typecomplicacion
    description: string
  }

  export type ComplicacionUpdateWithoutServicioInput = {
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ComplicacionUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ComplicacionUncheckedUpdateManyWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTypecomplicacionFieldUpdateOperationsInput | $Enums.Typecomplicacion
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioCreateManyPacienteInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_descripcion: number
  }

  export type ServicioUpdateWithoutPacienteInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    complicacion?: ComplicacionUpdateManyWithoutServicioNestedInput
    turno?: TurnosUpdateOneRequiredWithoutServiciosNestedInput
    descripcion?: DescripcionUpdateOneRequiredWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
    complicacion?: ComplicacionUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioCreateManyDescripcionInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_turno: number
    id_paciente: number
  }

  export type ServicioUpdateWithoutDescripcionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    complicacion?: ComplicacionUpdateManyWithoutServicioNestedInput
    turno?: TurnosUpdateOneRequiredWithoutServiciosNestedInput
    paciente?: PacientesUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type ServicioUncheckedUpdateWithoutDescripcionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_paciente?: IntFieldUpdateOperationsInput | number
    complicacion?: ComplicacionUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateManyWithoutDescripcionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_turno?: IntFieldUpdateOperationsInput | number
    id_paciente?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioCreateManyTurnoInput = {
    id?: number
    date: Date | string
    status: $Enums.Status
    time_arrived: Date | string
    time_finish: Date | string
    code_start: string
    code_end: string
    place_accident: string
    nro_informe: string
    id_paciente: number
    id_descripcion: number
  }

  export type ServicioUpdateWithoutTurnoInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    complicacion?: ComplicacionUpdateManyWithoutServicioNestedInput
    paciente?: PacientesUpdateOneRequiredWithoutServiciosNestedInput
    descripcion?: DescripcionUpdateOneRequiredWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
    complicacion?: ComplicacionUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateManyWithoutTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    time_arrived?: DateTimeFieldUpdateOperationsInput | Date | string
    time_finish?: DateTimeFieldUpdateOperationsInput | Date | string
    code_start?: StringFieldUpdateOperationsInput | string
    code_end?: StringFieldUpdateOperationsInput | string
    place_accident?: StringFieldUpdateOperationsInput | string
    nro_informe?: StringFieldUpdateOperationsInput | string
    id_paciente?: IntFieldUpdateOperationsInput | number
    id_descripcion?: IntFieldUpdateOperationsInput | number
  }

  export type TurnosCreateManyConductorInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    auxiliarId: number
    ambulanciaId: number
  }

  export type TurnosUpdateWithoutConductorInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedico?: ParamedicoUpdateOneRequiredWithoutTurnosNestedInput
    auxiliar?: AuxiliarUpdateOneRequiredWithoutTurnosNestedInput
    ambulancia?: AmbulanciaUpdateOneRequiredWithoutTurnosNestedInput
    servicios?: ServicioUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
    servicios?: ServicioUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateManyWithoutConductorInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    auxiliarId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
  }

  export type TurnosCreateManyParamedicoInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    auxiliarId: number
    conductorId: number
    ambulanciaId: number
  }

  export type TurnosUpdateWithoutParamedicoInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliar?: AuxiliarUpdateOneRequiredWithoutTurnosNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutTurnosNestedInput
    ambulancia?: AmbulanciaUpdateOneRequiredWithoutTurnosNestedInput
    servicios?: ServicioUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateWithoutParamedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
    servicios?: ServicioUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateManyWithoutParamedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    auxiliarId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
  }

  export type TurnosCreateManyAuxiliarInput = {
    id?: number
    time_start: Date | string
    time_end: Date | string
    paramedicId: number
    conductorId: number
    ambulanciaId: number
  }

  export type TurnosUpdateWithoutAuxiliarInput = {
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedico?: ParamedicoUpdateOneRequiredWithoutTurnosNestedInput
    conductor?: ConductorUpdateOneRequiredWithoutTurnosNestedInput
    ambulancia?: AmbulanciaUpdateOneRequiredWithoutTurnosNestedInput
    servicios?: ServicioUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateWithoutAuxiliarInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
    servicios?: ServicioUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnosUncheckedUpdateManyWithoutAuxiliarInput = {
    id?: IntFieldUpdateOperationsInput | number
    time_start?: DateTimeFieldUpdateOperationsInput | Date | string
    time_end?: DateTimeFieldUpdateOperationsInput | Date | string
    paramedicId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    ambulanciaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}