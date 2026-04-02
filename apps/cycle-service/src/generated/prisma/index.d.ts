
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
 * Model CfgBusinessUnit
 * 
 */
export type CfgBusinessUnit = $Result.DefaultSelection<Prisma.$CfgBusinessUnitPayload>
/**
 * Model Cycle
 * 
 */
export type Cycle = $Result.DefaultSelection<Prisma.$CyclePayload>
/**
 * Model CycleStatusHistory
 * 
 */
export type CycleStatusHistory = $Result.DefaultSelection<Prisma.$CycleStatusHistoryPayload>
/**
 * Model CycleDealConfig
 * 
 */
export type CycleDealConfig = $Result.DefaultSelection<Prisma.$CycleDealConfigPayload>
/**
 * Model DealConfigTariffBasket
 * 
 */
export type DealConfigTariffBasket = $Result.DefaultSelection<Prisma.$DealConfigTariffBasketPayload>
/**
 * Model DealConfigDeviceBasket
 * 
 */
export type DealConfigDeviceBasket = $Result.DefaultSelection<Prisma.$DealConfigDeviceBasketPayload>
/**
 * Model DealConfigVas
 * 
 */
export type DealConfigVas = $Result.DefaultSelection<Prisma.$DealConfigVasPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CfgBusinessUnits
 * const cfgBusinessUnits = await prisma.cfgBusinessUnit.findMany()
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
   * // Fetch zero or more CfgBusinessUnits
   * const cfgBusinessUnits = await prisma.cfgBusinessUnit.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cfgBusinessUnit`: Exposes CRUD operations for the **CfgBusinessUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CfgBusinessUnits
    * const cfgBusinessUnits = await prisma.cfgBusinessUnit.findMany()
    * ```
    */
  get cfgBusinessUnit(): Prisma.CfgBusinessUnitDelegate<ExtArgs>;

  /**
   * `prisma.cycle`: Exposes CRUD operations for the **Cycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cycles
    * const cycles = await prisma.cycle.findMany()
    * ```
    */
  get cycle(): Prisma.CycleDelegate<ExtArgs>;

  /**
   * `prisma.cycleStatusHistory`: Exposes CRUD operations for the **CycleStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CycleStatusHistories
    * const cycleStatusHistories = await prisma.cycleStatusHistory.findMany()
    * ```
    */
  get cycleStatusHistory(): Prisma.CycleStatusHistoryDelegate<ExtArgs>;

  /**
   * `prisma.cycleDealConfig`: Exposes CRUD operations for the **CycleDealConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CycleDealConfigs
    * const cycleDealConfigs = await prisma.cycleDealConfig.findMany()
    * ```
    */
  get cycleDealConfig(): Prisma.CycleDealConfigDelegate<ExtArgs>;

  /**
   * `prisma.dealConfigTariffBasket`: Exposes CRUD operations for the **DealConfigTariffBasket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealConfigTariffBaskets
    * const dealConfigTariffBaskets = await prisma.dealConfigTariffBasket.findMany()
    * ```
    */
  get dealConfigTariffBasket(): Prisma.DealConfigTariffBasketDelegate<ExtArgs>;

  /**
   * `prisma.dealConfigDeviceBasket`: Exposes CRUD operations for the **DealConfigDeviceBasket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealConfigDeviceBaskets
    * const dealConfigDeviceBaskets = await prisma.dealConfigDeviceBasket.findMany()
    * ```
    */
  get dealConfigDeviceBasket(): Prisma.DealConfigDeviceBasketDelegate<ExtArgs>;

  /**
   * `prisma.dealConfigVas`: Exposes CRUD operations for the **DealConfigVas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealConfigVas
    * const dealConfigVas = await prisma.dealConfigVas.findMany()
    * ```
    */
  get dealConfigVas(): Prisma.DealConfigVasDelegate<ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    CfgBusinessUnit: 'CfgBusinessUnit',
    Cycle: 'Cycle',
    CycleStatusHistory: 'CycleStatusHistory',
    CycleDealConfig: 'CycleDealConfig',
    DealConfigTariffBasket: 'DealConfigTariffBasket',
    DealConfigDeviceBasket: 'DealConfigDeviceBasket',
    DealConfigVas: 'DealConfigVas',
    Campaign: 'Campaign'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cfgBusinessUnit" | "cycle" | "cycleStatusHistory" | "cycleDealConfig" | "dealConfigTariffBasket" | "dealConfigDeviceBasket" | "dealConfigVas" | "campaign"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CfgBusinessUnit: {
        payload: Prisma.$CfgBusinessUnitPayload<ExtArgs>
        fields: Prisma.CfgBusinessUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CfgBusinessUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CfgBusinessUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>
          }
          findFirst: {
            args: Prisma.CfgBusinessUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CfgBusinessUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>
          }
          findMany: {
            args: Prisma.CfgBusinessUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>[]
          }
          create: {
            args: Prisma.CfgBusinessUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>
          }
          createMany: {
            args: Prisma.CfgBusinessUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CfgBusinessUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>[]
          }
          delete: {
            args: Prisma.CfgBusinessUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>
          }
          update: {
            args: Prisma.CfgBusinessUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>
          }
          deleteMany: {
            args: Prisma.CfgBusinessUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CfgBusinessUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CfgBusinessUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CfgBusinessUnitPayload>
          }
          aggregate: {
            args: Prisma.CfgBusinessUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCfgBusinessUnit>
          }
          groupBy: {
            args: Prisma.CfgBusinessUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CfgBusinessUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CfgBusinessUnitCountArgs<ExtArgs>
            result: $Utils.Optional<CfgBusinessUnitCountAggregateOutputType> | number
          }
        }
      }
      Cycle: {
        payload: Prisma.$CyclePayload<ExtArgs>
        fields: Prisma.CycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          findFirst: {
            args: Prisma.CycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          findMany: {
            args: Prisma.CycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          create: {
            args: Prisma.CycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          createMany: {
            args: Prisma.CycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>[]
          }
          delete: {
            args: Prisma.CycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          update: {
            args: Prisma.CycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          deleteMany: {
            args: Prisma.CycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyclePayload>
          }
          aggregate: {
            args: Prisma.CycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycle>
          }
          groupBy: {
            args: Prisma.CycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleCountArgs<ExtArgs>
            result: $Utils.Optional<CycleCountAggregateOutputType> | number
          }
        }
      }
      CycleStatusHistory: {
        payload: Prisma.$CycleStatusHistoryPayload<ExtArgs>
        fields: Prisma.CycleStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.CycleStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.CycleStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.CycleStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.CycleStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.CycleStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>
          }
          update: {
            args: Prisma.CycleStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CycleStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CycleStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.CycleStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycleStatusHistory>
          }
          groupBy: {
            args: Prisma.CycleStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CycleStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      CycleDealConfig: {
        payload: Prisma.$CycleDealConfigPayload<ExtArgs>
        fields: Prisma.CycleDealConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleDealConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleDealConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>
          }
          findFirst: {
            args: Prisma.CycleDealConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleDealConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>
          }
          findMany: {
            args: Prisma.CycleDealConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>[]
          }
          create: {
            args: Prisma.CycleDealConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>
          }
          createMany: {
            args: Prisma.CycleDealConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleDealConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>[]
          }
          delete: {
            args: Prisma.CycleDealConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>
          }
          update: {
            args: Prisma.CycleDealConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>
          }
          deleteMany: {
            args: Prisma.CycleDealConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleDealConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CycleDealConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleDealConfigPayload>
          }
          aggregate: {
            args: Prisma.CycleDealConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycleDealConfig>
          }
          groupBy: {
            args: Prisma.CycleDealConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleDealConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleDealConfigCountArgs<ExtArgs>
            result: $Utils.Optional<CycleDealConfigCountAggregateOutputType> | number
          }
        }
      }
      DealConfigTariffBasket: {
        payload: Prisma.$DealConfigTariffBasketPayload<ExtArgs>
        fields: Prisma.DealConfigTariffBasketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealConfigTariffBasketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealConfigTariffBasketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>
          }
          findFirst: {
            args: Prisma.DealConfigTariffBasketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealConfigTariffBasketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>
          }
          findMany: {
            args: Prisma.DealConfigTariffBasketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>[]
          }
          create: {
            args: Prisma.DealConfigTariffBasketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>
          }
          createMany: {
            args: Prisma.DealConfigTariffBasketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealConfigTariffBasketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>[]
          }
          delete: {
            args: Prisma.DealConfigTariffBasketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>
          }
          update: {
            args: Prisma.DealConfigTariffBasketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>
          }
          deleteMany: {
            args: Prisma.DealConfigTariffBasketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealConfigTariffBasketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DealConfigTariffBasketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigTariffBasketPayload>
          }
          aggregate: {
            args: Prisma.DealConfigTariffBasketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealConfigTariffBasket>
          }
          groupBy: {
            args: Prisma.DealConfigTariffBasketGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealConfigTariffBasketGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealConfigTariffBasketCountArgs<ExtArgs>
            result: $Utils.Optional<DealConfigTariffBasketCountAggregateOutputType> | number
          }
        }
      }
      DealConfigDeviceBasket: {
        payload: Prisma.$DealConfigDeviceBasketPayload<ExtArgs>
        fields: Prisma.DealConfigDeviceBasketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealConfigDeviceBasketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealConfigDeviceBasketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>
          }
          findFirst: {
            args: Prisma.DealConfigDeviceBasketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealConfigDeviceBasketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>
          }
          findMany: {
            args: Prisma.DealConfigDeviceBasketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>[]
          }
          create: {
            args: Prisma.DealConfigDeviceBasketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>
          }
          createMany: {
            args: Prisma.DealConfigDeviceBasketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealConfigDeviceBasketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>[]
          }
          delete: {
            args: Prisma.DealConfigDeviceBasketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>
          }
          update: {
            args: Prisma.DealConfigDeviceBasketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>
          }
          deleteMany: {
            args: Prisma.DealConfigDeviceBasketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealConfigDeviceBasketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DealConfigDeviceBasketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigDeviceBasketPayload>
          }
          aggregate: {
            args: Prisma.DealConfigDeviceBasketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealConfigDeviceBasket>
          }
          groupBy: {
            args: Prisma.DealConfigDeviceBasketGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealConfigDeviceBasketGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealConfigDeviceBasketCountArgs<ExtArgs>
            result: $Utils.Optional<DealConfigDeviceBasketCountAggregateOutputType> | number
          }
        }
      }
      DealConfigVas: {
        payload: Prisma.$DealConfigVasPayload<ExtArgs>
        fields: Prisma.DealConfigVasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealConfigVasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealConfigVasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>
          }
          findFirst: {
            args: Prisma.DealConfigVasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealConfigVasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>
          }
          findMany: {
            args: Prisma.DealConfigVasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>[]
          }
          create: {
            args: Prisma.DealConfigVasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>
          }
          createMany: {
            args: Prisma.DealConfigVasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealConfigVasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>[]
          }
          delete: {
            args: Prisma.DealConfigVasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>
          }
          update: {
            args: Prisma.DealConfigVasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>
          }
          deleteMany: {
            args: Prisma.DealConfigVasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealConfigVasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DealConfigVasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealConfigVasPayload>
          }
          aggregate: {
            args: Prisma.DealConfigVasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealConfigVas>
          }
          groupBy: {
            args: Prisma.DealConfigVasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealConfigVasGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealConfigVasCountArgs<ExtArgs>
            result: $Utils.Optional<DealConfigVasCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
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
   * Count Type CfgBusinessUnitCountOutputType
   */

  export type CfgBusinessUnitCountOutputType = {
    cycles: number
  }

  export type CfgBusinessUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycles?: boolean | CfgBusinessUnitCountOutputTypeCountCyclesArgs
  }

  // Custom InputTypes
  /**
   * CfgBusinessUnitCountOutputType without action
   */
  export type CfgBusinessUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnitCountOutputType
     */
    select?: CfgBusinessUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CfgBusinessUnitCountOutputType without action
   */
  export type CfgBusinessUnitCountOutputTypeCountCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleWhereInput
  }


  /**
   * Count Type CycleCountOutputType
   */

  export type CycleCountOutputType = {
    statusHistory: number
    campaigns: number
  }

  export type CycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistory?: boolean | CycleCountOutputTypeCountStatusHistoryArgs
    campaigns?: boolean | CycleCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleCountOutputType
     */
    select?: CycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleStatusHistoryWhereInput
  }

  /**
   * CycleCountOutputType without action
   */
  export type CycleCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type CycleDealConfigCountOutputType
   */

  export type CycleDealConfigCountOutputType = {
    tariffBaskets: number
    deviceBaskets: number
    vasItems: number
  }

  export type CycleDealConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffBaskets?: boolean | CycleDealConfigCountOutputTypeCountTariffBasketsArgs
    deviceBaskets?: boolean | CycleDealConfigCountOutputTypeCountDeviceBasketsArgs
    vasItems?: boolean | CycleDealConfigCountOutputTypeCountVasItemsArgs
  }

  // Custom InputTypes
  /**
   * CycleDealConfigCountOutputType without action
   */
  export type CycleDealConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfigCountOutputType
     */
    select?: CycleDealConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CycleDealConfigCountOutputType without action
   */
  export type CycleDealConfigCountOutputTypeCountTariffBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealConfigTariffBasketWhereInput
  }

  /**
   * CycleDealConfigCountOutputType without action
   */
  export type CycleDealConfigCountOutputTypeCountDeviceBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealConfigDeviceBasketWhereInput
  }

  /**
   * CycleDealConfigCountOutputType without action
   */
  export type CycleDealConfigCountOutputTypeCountVasItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealConfigVasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CfgBusinessUnit
   */

  export type AggregateCfgBusinessUnit = {
    _count: CfgBusinessUnitCountAggregateOutputType | null
    _min: CfgBusinessUnitMinAggregateOutputType | null
    _max: CfgBusinessUnitMaxAggregateOutputType | null
  }

  export type CfgBusinessUnitMinAggregateOutputType = {
    id: string | null
    code: string | null
    displayName: string | null
    createdAt: Date | null
  }

  export type CfgBusinessUnitMaxAggregateOutputType = {
    id: string | null
    code: string | null
    displayName: string | null
    createdAt: Date | null
  }

  export type CfgBusinessUnitCountAggregateOutputType = {
    id: number
    code: number
    displayName: number
    createdAt: number
    _all: number
  }


  export type CfgBusinessUnitMinAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    createdAt?: true
  }

  export type CfgBusinessUnitMaxAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    createdAt?: true
  }

  export type CfgBusinessUnitCountAggregateInputType = {
    id?: true
    code?: true
    displayName?: true
    createdAt?: true
    _all?: true
  }

  export type CfgBusinessUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CfgBusinessUnit to aggregate.
     */
    where?: CfgBusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CfgBusinessUnits to fetch.
     */
    orderBy?: CfgBusinessUnitOrderByWithRelationInput | CfgBusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CfgBusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CfgBusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CfgBusinessUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CfgBusinessUnits
    **/
    _count?: true | CfgBusinessUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CfgBusinessUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CfgBusinessUnitMaxAggregateInputType
  }

  export type GetCfgBusinessUnitAggregateType<T extends CfgBusinessUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateCfgBusinessUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCfgBusinessUnit[P]>
      : GetScalarType<T[P], AggregateCfgBusinessUnit[P]>
  }




  export type CfgBusinessUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CfgBusinessUnitWhereInput
    orderBy?: CfgBusinessUnitOrderByWithAggregationInput | CfgBusinessUnitOrderByWithAggregationInput[]
    by: CfgBusinessUnitScalarFieldEnum[] | CfgBusinessUnitScalarFieldEnum
    having?: CfgBusinessUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CfgBusinessUnitCountAggregateInputType | true
    _min?: CfgBusinessUnitMinAggregateInputType
    _max?: CfgBusinessUnitMaxAggregateInputType
  }

  export type CfgBusinessUnitGroupByOutputType = {
    id: string
    code: string
    displayName: string
    createdAt: Date
    _count: CfgBusinessUnitCountAggregateOutputType | null
    _min: CfgBusinessUnitMinAggregateOutputType | null
    _max: CfgBusinessUnitMaxAggregateOutputType | null
  }

  type GetCfgBusinessUnitGroupByPayload<T extends CfgBusinessUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CfgBusinessUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CfgBusinessUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CfgBusinessUnitGroupByOutputType[P]>
            : GetScalarType<T[P], CfgBusinessUnitGroupByOutputType[P]>
        }
      >
    >


  export type CfgBusinessUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    createdAt?: boolean
    cycles?: boolean | CfgBusinessUnit$cyclesArgs<ExtArgs>
    _count?: boolean | CfgBusinessUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cfgBusinessUnit"]>

  export type CfgBusinessUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    displayName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cfgBusinessUnit"]>

  export type CfgBusinessUnitSelectScalar = {
    id?: boolean
    code?: boolean
    displayName?: boolean
    createdAt?: boolean
  }

  export type CfgBusinessUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycles?: boolean | CfgBusinessUnit$cyclesArgs<ExtArgs>
    _count?: boolean | CfgBusinessUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CfgBusinessUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CfgBusinessUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CfgBusinessUnit"
    objects: {
      cycles: Prisma.$CyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      displayName: string
      createdAt: Date
    }, ExtArgs["result"]["cfgBusinessUnit"]>
    composites: {}
  }

  type CfgBusinessUnitGetPayload<S extends boolean | null | undefined | CfgBusinessUnitDefaultArgs> = $Result.GetResult<Prisma.$CfgBusinessUnitPayload, S>

  type CfgBusinessUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CfgBusinessUnitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CfgBusinessUnitCountAggregateInputType | true
    }

  export interface CfgBusinessUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CfgBusinessUnit'], meta: { name: 'CfgBusinessUnit' } }
    /**
     * Find zero or one CfgBusinessUnit that matches the filter.
     * @param {CfgBusinessUnitFindUniqueArgs} args - Arguments to find a CfgBusinessUnit
     * @example
     * // Get one CfgBusinessUnit
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CfgBusinessUnitFindUniqueArgs>(args: SelectSubset<T, CfgBusinessUnitFindUniqueArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CfgBusinessUnit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CfgBusinessUnitFindUniqueOrThrowArgs} args - Arguments to find a CfgBusinessUnit
     * @example
     * // Get one CfgBusinessUnit
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CfgBusinessUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, CfgBusinessUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CfgBusinessUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitFindFirstArgs} args - Arguments to find a CfgBusinessUnit
     * @example
     * // Get one CfgBusinessUnit
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CfgBusinessUnitFindFirstArgs>(args?: SelectSubset<T, CfgBusinessUnitFindFirstArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CfgBusinessUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitFindFirstOrThrowArgs} args - Arguments to find a CfgBusinessUnit
     * @example
     * // Get one CfgBusinessUnit
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CfgBusinessUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, CfgBusinessUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CfgBusinessUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CfgBusinessUnits
     * const cfgBusinessUnits = await prisma.cfgBusinessUnit.findMany()
     * 
     * // Get first 10 CfgBusinessUnits
     * const cfgBusinessUnits = await prisma.cfgBusinessUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cfgBusinessUnitWithIdOnly = await prisma.cfgBusinessUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CfgBusinessUnitFindManyArgs>(args?: SelectSubset<T, CfgBusinessUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CfgBusinessUnit.
     * @param {CfgBusinessUnitCreateArgs} args - Arguments to create a CfgBusinessUnit.
     * @example
     * // Create one CfgBusinessUnit
     * const CfgBusinessUnit = await prisma.cfgBusinessUnit.create({
     *   data: {
     *     // ... data to create a CfgBusinessUnit
     *   }
     * })
     * 
     */
    create<T extends CfgBusinessUnitCreateArgs>(args: SelectSubset<T, CfgBusinessUnitCreateArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CfgBusinessUnits.
     * @param {CfgBusinessUnitCreateManyArgs} args - Arguments to create many CfgBusinessUnits.
     * @example
     * // Create many CfgBusinessUnits
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CfgBusinessUnitCreateManyArgs>(args?: SelectSubset<T, CfgBusinessUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CfgBusinessUnits and returns the data saved in the database.
     * @param {CfgBusinessUnitCreateManyAndReturnArgs} args - Arguments to create many CfgBusinessUnits.
     * @example
     * // Create many CfgBusinessUnits
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CfgBusinessUnits and only return the `id`
     * const cfgBusinessUnitWithIdOnly = await prisma.cfgBusinessUnit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CfgBusinessUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, CfgBusinessUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CfgBusinessUnit.
     * @param {CfgBusinessUnitDeleteArgs} args - Arguments to delete one CfgBusinessUnit.
     * @example
     * // Delete one CfgBusinessUnit
     * const CfgBusinessUnit = await prisma.cfgBusinessUnit.delete({
     *   where: {
     *     // ... filter to delete one CfgBusinessUnit
     *   }
     * })
     * 
     */
    delete<T extends CfgBusinessUnitDeleteArgs>(args: SelectSubset<T, CfgBusinessUnitDeleteArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CfgBusinessUnit.
     * @param {CfgBusinessUnitUpdateArgs} args - Arguments to update one CfgBusinessUnit.
     * @example
     * // Update one CfgBusinessUnit
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CfgBusinessUnitUpdateArgs>(args: SelectSubset<T, CfgBusinessUnitUpdateArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CfgBusinessUnits.
     * @param {CfgBusinessUnitDeleteManyArgs} args - Arguments to filter CfgBusinessUnits to delete.
     * @example
     * // Delete a few CfgBusinessUnits
     * const { count } = await prisma.cfgBusinessUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CfgBusinessUnitDeleteManyArgs>(args?: SelectSubset<T, CfgBusinessUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CfgBusinessUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CfgBusinessUnits
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CfgBusinessUnitUpdateManyArgs>(args: SelectSubset<T, CfgBusinessUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CfgBusinessUnit.
     * @param {CfgBusinessUnitUpsertArgs} args - Arguments to update or create a CfgBusinessUnit.
     * @example
     * // Update or create a CfgBusinessUnit
     * const cfgBusinessUnit = await prisma.cfgBusinessUnit.upsert({
     *   create: {
     *     // ... data to create a CfgBusinessUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CfgBusinessUnit we want to update
     *   }
     * })
     */
    upsert<T extends CfgBusinessUnitUpsertArgs>(args: SelectSubset<T, CfgBusinessUnitUpsertArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CfgBusinessUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitCountArgs} args - Arguments to filter CfgBusinessUnits to count.
     * @example
     * // Count the number of CfgBusinessUnits
     * const count = await prisma.cfgBusinessUnit.count({
     *   where: {
     *     // ... the filter for the CfgBusinessUnits we want to count
     *   }
     * })
    **/
    count<T extends CfgBusinessUnitCountArgs>(
      args?: Subset<T, CfgBusinessUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CfgBusinessUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CfgBusinessUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CfgBusinessUnitAggregateArgs>(args: Subset<T, CfgBusinessUnitAggregateArgs>): Prisma.PrismaPromise<GetCfgBusinessUnitAggregateType<T>>

    /**
     * Group by CfgBusinessUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CfgBusinessUnitGroupByArgs} args - Group by arguments.
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
      T extends CfgBusinessUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CfgBusinessUnitGroupByArgs['orderBy'] }
        : { orderBy?: CfgBusinessUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CfgBusinessUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCfgBusinessUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CfgBusinessUnit model
   */
  readonly fields: CfgBusinessUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CfgBusinessUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CfgBusinessUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycles<T extends CfgBusinessUnit$cyclesArgs<ExtArgs> = {}>(args?: Subset<T, CfgBusinessUnit$cyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CfgBusinessUnit model
   */ 
  interface CfgBusinessUnitFieldRefs {
    readonly id: FieldRef<"CfgBusinessUnit", 'String'>
    readonly code: FieldRef<"CfgBusinessUnit", 'String'>
    readonly displayName: FieldRef<"CfgBusinessUnit", 'String'>
    readonly createdAt: FieldRef<"CfgBusinessUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CfgBusinessUnit findUnique
   */
  export type CfgBusinessUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which CfgBusinessUnit to fetch.
     */
    where: CfgBusinessUnitWhereUniqueInput
  }

  /**
   * CfgBusinessUnit findUniqueOrThrow
   */
  export type CfgBusinessUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which CfgBusinessUnit to fetch.
     */
    where: CfgBusinessUnitWhereUniqueInput
  }

  /**
   * CfgBusinessUnit findFirst
   */
  export type CfgBusinessUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which CfgBusinessUnit to fetch.
     */
    where?: CfgBusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CfgBusinessUnits to fetch.
     */
    orderBy?: CfgBusinessUnitOrderByWithRelationInput | CfgBusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CfgBusinessUnits.
     */
    cursor?: CfgBusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CfgBusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CfgBusinessUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CfgBusinessUnits.
     */
    distinct?: CfgBusinessUnitScalarFieldEnum | CfgBusinessUnitScalarFieldEnum[]
  }

  /**
   * CfgBusinessUnit findFirstOrThrow
   */
  export type CfgBusinessUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which CfgBusinessUnit to fetch.
     */
    where?: CfgBusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CfgBusinessUnits to fetch.
     */
    orderBy?: CfgBusinessUnitOrderByWithRelationInput | CfgBusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CfgBusinessUnits.
     */
    cursor?: CfgBusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CfgBusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CfgBusinessUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CfgBusinessUnits.
     */
    distinct?: CfgBusinessUnitScalarFieldEnum | CfgBusinessUnitScalarFieldEnum[]
  }

  /**
   * CfgBusinessUnit findMany
   */
  export type CfgBusinessUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * Filter, which CfgBusinessUnits to fetch.
     */
    where?: CfgBusinessUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CfgBusinessUnits to fetch.
     */
    orderBy?: CfgBusinessUnitOrderByWithRelationInput | CfgBusinessUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CfgBusinessUnits.
     */
    cursor?: CfgBusinessUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CfgBusinessUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CfgBusinessUnits.
     */
    skip?: number
    distinct?: CfgBusinessUnitScalarFieldEnum | CfgBusinessUnitScalarFieldEnum[]
  }

  /**
   * CfgBusinessUnit create
   */
  export type CfgBusinessUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a CfgBusinessUnit.
     */
    data: XOR<CfgBusinessUnitCreateInput, CfgBusinessUnitUncheckedCreateInput>
  }

  /**
   * CfgBusinessUnit createMany
   */
  export type CfgBusinessUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CfgBusinessUnits.
     */
    data: CfgBusinessUnitCreateManyInput | CfgBusinessUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CfgBusinessUnit createManyAndReturn
   */
  export type CfgBusinessUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CfgBusinessUnits.
     */
    data: CfgBusinessUnitCreateManyInput | CfgBusinessUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CfgBusinessUnit update
   */
  export type CfgBusinessUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a CfgBusinessUnit.
     */
    data: XOR<CfgBusinessUnitUpdateInput, CfgBusinessUnitUncheckedUpdateInput>
    /**
     * Choose, which CfgBusinessUnit to update.
     */
    where: CfgBusinessUnitWhereUniqueInput
  }

  /**
   * CfgBusinessUnit updateMany
   */
  export type CfgBusinessUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CfgBusinessUnits.
     */
    data: XOR<CfgBusinessUnitUpdateManyMutationInput, CfgBusinessUnitUncheckedUpdateManyInput>
    /**
     * Filter which CfgBusinessUnits to update
     */
    where?: CfgBusinessUnitWhereInput
  }

  /**
   * CfgBusinessUnit upsert
   */
  export type CfgBusinessUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the CfgBusinessUnit to update in case it exists.
     */
    where: CfgBusinessUnitWhereUniqueInput
    /**
     * In case the CfgBusinessUnit found by the `where` argument doesn't exist, create a new CfgBusinessUnit with this data.
     */
    create: XOR<CfgBusinessUnitCreateInput, CfgBusinessUnitUncheckedCreateInput>
    /**
     * In case the CfgBusinessUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CfgBusinessUnitUpdateInput, CfgBusinessUnitUncheckedUpdateInput>
  }

  /**
   * CfgBusinessUnit delete
   */
  export type CfgBusinessUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
    /**
     * Filter which CfgBusinessUnit to delete.
     */
    where: CfgBusinessUnitWhereUniqueInput
  }

  /**
   * CfgBusinessUnit deleteMany
   */
  export type CfgBusinessUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CfgBusinessUnits to delete
     */
    where?: CfgBusinessUnitWhereInput
  }

  /**
   * CfgBusinessUnit.cycles
   */
  export type CfgBusinessUnit$cyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    where?: CycleWhereInput
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    cursor?: CycleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * CfgBusinessUnit without action
   */
  export type CfgBusinessUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CfgBusinessUnit
     */
    select?: CfgBusinessUnitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CfgBusinessUnitInclude<ExtArgs> | null
  }


  /**
   * Model Cycle
   */

  export type AggregateCycle = {
    _count: CycleCountAggregateOutputType | null
    _avg: CycleAvgAggregateOutputType | null
    _sum: CycleSumAggregateOutputType | null
    _min: CycleMinAggregateOutputType | null
    _max: CycleMaxAggregateOutputType | null
  }

  export type CycleAvgAggregateOutputType = {
    version: number | null
  }

  export type CycleSumAggregateOutputType = {
    version: number | null
  }

  export type CycleMinAggregateOutputType = {
    id: string | null
    name: string | null
    businessUnitId: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    description: string | null
    createdBy: string | null
    updatedBy: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CycleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    businessUnitId: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    description: string | null
    createdBy: string | null
    updatedBy: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CycleCountAggregateOutputType = {
    id: number
    name: number
    businessUnitId: number
    startDate: number
    endDate: number
    status: number
    description: number
    createdBy: number
    updatedBy: number
    version: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CycleAvgAggregateInputType = {
    version?: true
  }

  export type CycleSumAggregateInputType = {
    version?: true
  }

  export type CycleMinAggregateInputType = {
    id?: true
    name?: true
    businessUnitId?: true
    startDate?: true
    endDate?: true
    status?: true
    description?: true
    createdBy?: true
    updatedBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CycleMaxAggregateInputType = {
    id?: true
    name?: true
    businessUnitId?: true
    startDate?: true
    endDate?: true
    status?: true
    description?: true
    createdBy?: true
    updatedBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CycleCountAggregateInputType = {
    id?: true
    name?: true
    businessUnitId?: true
    startDate?: true
    endDate?: true
    status?: true
    description?: true
    createdBy?: true
    updatedBy?: true
    version?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cycle to aggregate.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cycles
    **/
    _count?: true | CycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleMaxAggregateInputType
  }

  export type GetCycleAggregateType<T extends CycleAggregateArgs> = {
        [P in keyof T & keyof AggregateCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycle[P]>
      : GetScalarType<T[P], AggregateCycle[P]>
  }




  export type CycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleWhereInput
    orderBy?: CycleOrderByWithAggregationInput | CycleOrderByWithAggregationInput[]
    by: CycleScalarFieldEnum[] | CycleScalarFieldEnum
    having?: CycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleCountAggregateInputType | true
    _avg?: CycleAvgAggregateInputType
    _sum?: CycleSumAggregateInputType
    _min?: CycleMinAggregateInputType
    _max?: CycleMaxAggregateInputType
  }

  export type CycleGroupByOutputType = {
    id: string
    name: string
    businessUnitId: string
    startDate: Date
    endDate: Date
    status: string
    description: string | null
    createdBy: string
    updatedBy: string | null
    version: number
    createdAt: Date
    updatedAt: Date
    _count: CycleCountAggregateOutputType | null
    _avg: CycleAvgAggregateOutputType | null
    _sum: CycleSumAggregateOutputType | null
    _min: CycleMinAggregateOutputType | null
    _max: CycleMaxAggregateOutputType | null
  }

  type GetCycleGroupByPayload<T extends CycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleGroupByOutputType[P]>
            : GetScalarType<T[P], CycleGroupByOutputType[P]>
        }
      >
    >


  export type CycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    businessUnitId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessUnit?: boolean | CfgBusinessUnitDefaultArgs<ExtArgs>
    statusHistory?: boolean | Cycle$statusHistoryArgs<ExtArgs>
    dealConfig?: boolean | Cycle$dealConfigArgs<ExtArgs>
    campaigns?: boolean | Cycle$campaignsArgs<ExtArgs>
    _count?: boolean | CycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    businessUnitId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessUnit?: boolean | CfgBusinessUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycle"]>

  export type CycleSelectScalar = {
    id?: boolean
    name?: boolean
    businessUnitId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    description?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    version?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessUnit?: boolean | CfgBusinessUnitDefaultArgs<ExtArgs>
    statusHistory?: boolean | Cycle$statusHistoryArgs<ExtArgs>
    dealConfig?: boolean | Cycle$dealConfigArgs<ExtArgs>
    campaigns?: boolean | Cycle$campaignsArgs<ExtArgs>
    _count?: boolean | CycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businessUnit?: boolean | CfgBusinessUnitDefaultArgs<ExtArgs>
  }

  export type $CyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cycle"
    objects: {
      businessUnit: Prisma.$CfgBusinessUnitPayload<ExtArgs>
      statusHistory: Prisma.$CycleStatusHistoryPayload<ExtArgs>[]
      dealConfig: Prisma.$CycleDealConfigPayload<ExtArgs> | null
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      businessUnitId: string
      startDate: Date
      endDate: Date
      status: string
      description: string | null
      createdBy: string
      updatedBy: string | null
      version: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cycle"]>
    composites: {}
  }

  type CycleGetPayload<S extends boolean | null | undefined | CycleDefaultArgs> = $Result.GetResult<Prisma.$CyclePayload, S>

  type CycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CycleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CycleCountAggregateInputType | true
    }

  export interface CycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cycle'], meta: { name: 'Cycle' } }
    /**
     * Find zero or one Cycle that matches the filter.
     * @param {CycleFindUniqueArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleFindUniqueArgs>(args: SelectSubset<T, CycleFindUniqueArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cycle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CycleFindUniqueOrThrowArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindFirstArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleFindFirstArgs>(args?: SelectSubset<T, CycleFindFirstArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindFirstOrThrowArgs} args - Arguments to find a Cycle
     * @example
     * // Get one Cycle
     * const cycle = await prisma.cycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cycles
     * const cycles = await prisma.cycle.findMany()
     * 
     * // Get first 10 Cycles
     * const cycles = await prisma.cycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleWithIdOnly = await prisma.cycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleFindManyArgs>(args?: SelectSubset<T, CycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cycle.
     * @param {CycleCreateArgs} args - Arguments to create a Cycle.
     * @example
     * // Create one Cycle
     * const Cycle = await prisma.cycle.create({
     *   data: {
     *     // ... data to create a Cycle
     *   }
     * })
     * 
     */
    create<T extends CycleCreateArgs>(args: SelectSubset<T, CycleCreateArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cycles.
     * @param {CycleCreateManyArgs} args - Arguments to create many Cycles.
     * @example
     * // Create many Cycles
     * const cycle = await prisma.cycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleCreateManyArgs>(args?: SelectSubset<T, CycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cycles and returns the data saved in the database.
     * @param {CycleCreateManyAndReturnArgs} args - Arguments to create many Cycles.
     * @example
     * // Create many Cycles
     * const cycle = await prisma.cycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cycles and only return the `id`
     * const cycleWithIdOnly = await prisma.cycle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cycle.
     * @param {CycleDeleteArgs} args - Arguments to delete one Cycle.
     * @example
     * // Delete one Cycle
     * const Cycle = await prisma.cycle.delete({
     *   where: {
     *     // ... filter to delete one Cycle
     *   }
     * })
     * 
     */
    delete<T extends CycleDeleteArgs>(args: SelectSubset<T, CycleDeleteArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cycle.
     * @param {CycleUpdateArgs} args - Arguments to update one Cycle.
     * @example
     * // Update one Cycle
     * const cycle = await prisma.cycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleUpdateArgs>(args: SelectSubset<T, CycleUpdateArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cycles.
     * @param {CycleDeleteManyArgs} args - Arguments to filter Cycles to delete.
     * @example
     * // Delete a few Cycles
     * const { count } = await prisma.cycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleDeleteManyArgs>(args?: SelectSubset<T, CycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cycles
     * const cycle = await prisma.cycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleUpdateManyArgs>(args: SelectSubset<T, CycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cycle.
     * @param {CycleUpsertArgs} args - Arguments to update or create a Cycle.
     * @example
     * // Update or create a Cycle
     * const cycle = await prisma.cycle.upsert({
     *   create: {
     *     // ... data to create a Cycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cycle we want to update
     *   }
     * })
     */
    upsert<T extends CycleUpsertArgs>(args: SelectSubset<T, CycleUpsertArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleCountArgs} args - Arguments to filter Cycles to count.
     * @example
     * // Count the number of Cycles
     * const count = await prisma.cycle.count({
     *   where: {
     *     // ... the filter for the Cycles we want to count
     *   }
     * })
    **/
    count<T extends CycleCountArgs>(
      args?: Subset<T, CycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CycleAggregateArgs>(args: Subset<T, CycleAggregateArgs>): Prisma.PrismaPromise<GetCycleAggregateType<T>>

    /**
     * Group by Cycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleGroupByArgs} args - Group by arguments.
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
      T extends CycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleGroupByArgs['orderBy'] }
        : { orderBy?: CycleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cycle model
   */
  readonly fields: CycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businessUnit<T extends CfgBusinessUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CfgBusinessUnitDefaultArgs<ExtArgs>>): Prisma__CfgBusinessUnitClient<$Result.GetResult<Prisma.$CfgBusinessUnitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    statusHistory<T extends Cycle$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Cycle$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    dealConfig<T extends Cycle$dealConfigArgs<ExtArgs> = {}>(args?: Subset<T, Cycle$dealConfigArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    campaigns<T extends Cycle$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Cycle$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Cycle model
   */ 
  interface CycleFieldRefs {
    readonly id: FieldRef<"Cycle", 'String'>
    readonly name: FieldRef<"Cycle", 'String'>
    readonly businessUnitId: FieldRef<"Cycle", 'String'>
    readonly startDate: FieldRef<"Cycle", 'DateTime'>
    readonly endDate: FieldRef<"Cycle", 'DateTime'>
    readonly status: FieldRef<"Cycle", 'String'>
    readonly description: FieldRef<"Cycle", 'String'>
    readonly createdBy: FieldRef<"Cycle", 'String'>
    readonly updatedBy: FieldRef<"Cycle", 'String'>
    readonly version: FieldRef<"Cycle", 'Int'>
    readonly createdAt: FieldRef<"Cycle", 'DateTime'>
    readonly updatedAt: FieldRef<"Cycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cycle findUnique
   */
  export type CycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle findUniqueOrThrow
   */
  export type CycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle findFirst
   */
  export type CycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cycles.
     */
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle findFirstOrThrow
   */
  export type CycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycle to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cycles.
     */
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle findMany
   */
  export type CycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter, which Cycles to fetch.
     */
    where?: CycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cycles to fetch.
     */
    orderBy?: CycleOrderByWithRelationInput | CycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cycles.
     */
    cursor?: CycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cycles.
     */
    skip?: number
    distinct?: CycleScalarFieldEnum | CycleScalarFieldEnum[]
  }

  /**
   * Cycle create
   */
  export type CycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The data needed to create a Cycle.
     */
    data: XOR<CycleCreateInput, CycleUncheckedCreateInput>
  }

  /**
   * Cycle createMany
   */
  export type CycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cycles.
     */
    data: CycleCreateManyInput | CycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cycle createManyAndReturn
   */
  export type CycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cycles.
     */
    data: CycleCreateManyInput | CycleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cycle update
   */
  export type CycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The data needed to update a Cycle.
     */
    data: XOR<CycleUpdateInput, CycleUncheckedUpdateInput>
    /**
     * Choose, which Cycle to update.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle updateMany
   */
  export type CycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cycles.
     */
    data: XOR<CycleUpdateManyMutationInput, CycleUncheckedUpdateManyInput>
    /**
     * Filter which Cycles to update
     */
    where?: CycleWhereInput
  }

  /**
   * Cycle upsert
   */
  export type CycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * The filter to search for the Cycle to update in case it exists.
     */
    where: CycleWhereUniqueInput
    /**
     * In case the Cycle found by the `where` argument doesn't exist, create a new Cycle with this data.
     */
    create: XOR<CycleCreateInput, CycleUncheckedCreateInput>
    /**
     * In case the Cycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleUpdateInput, CycleUncheckedUpdateInput>
  }

  /**
   * Cycle delete
   */
  export type CycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
    /**
     * Filter which Cycle to delete.
     */
    where: CycleWhereUniqueInput
  }

  /**
   * Cycle deleteMany
   */
  export type CycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cycles to delete
     */
    where?: CycleWhereInput
  }

  /**
   * Cycle.statusHistory
   */
  export type Cycle$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    where?: CycleStatusHistoryWhereInput
    orderBy?: CycleStatusHistoryOrderByWithRelationInput | CycleStatusHistoryOrderByWithRelationInput[]
    cursor?: CycleStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CycleStatusHistoryScalarFieldEnum | CycleStatusHistoryScalarFieldEnum[]
  }

  /**
   * Cycle.dealConfig
   */
  export type Cycle$dealConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    where?: CycleDealConfigWhereInput
  }

  /**
   * Cycle.campaigns
   */
  export type Cycle$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Cycle without action
   */
  export type CycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cycle
     */
    select?: CycleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleInclude<ExtArgs> | null
  }


  /**
   * Model CycleStatusHistory
   */

  export type AggregateCycleStatusHistory = {
    _count: CycleStatusHistoryCountAggregateOutputType | null
    _min: CycleStatusHistoryMinAggregateOutputType | null
    _max: CycleStatusHistoryMaxAggregateOutputType | null
  }

  export type CycleStatusHistoryMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    fromStatus: string | null
    toStatus: string | null
    changedBy: string | null
    reason: string | null
    correlationId: string | null
    createdAt: Date | null
  }

  export type CycleStatusHistoryMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    fromStatus: string | null
    toStatus: string | null
    changedBy: string | null
    reason: string | null
    correlationId: string | null
    createdAt: Date | null
  }

  export type CycleStatusHistoryCountAggregateOutputType = {
    id: number
    cycleId: number
    fromStatus: number
    toStatus: number
    changedBy: number
    reason: number
    correlationId: number
    createdAt: number
    _all: number
  }


  export type CycleStatusHistoryMinAggregateInputType = {
    id?: true
    cycleId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    reason?: true
    correlationId?: true
    createdAt?: true
  }

  export type CycleStatusHistoryMaxAggregateInputType = {
    id?: true
    cycleId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    reason?: true
    correlationId?: true
    createdAt?: true
  }

  export type CycleStatusHistoryCountAggregateInputType = {
    id?: true
    cycleId?: true
    fromStatus?: true
    toStatus?: true
    changedBy?: true
    reason?: true
    correlationId?: true
    createdAt?: true
    _all?: true
  }

  export type CycleStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleStatusHistory to aggregate.
     */
    where?: CycleStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleStatusHistories to fetch.
     */
    orderBy?: CycleStatusHistoryOrderByWithRelationInput | CycleStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CycleStatusHistories
    **/
    _count?: true | CycleStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleStatusHistoryMaxAggregateInputType
  }

  export type GetCycleStatusHistoryAggregateType<T extends CycleStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCycleStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycleStatusHistory[P]>
      : GetScalarType<T[P], AggregateCycleStatusHistory[P]>
  }




  export type CycleStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleStatusHistoryWhereInput
    orderBy?: CycleStatusHistoryOrderByWithAggregationInput | CycleStatusHistoryOrderByWithAggregationInput[]
    by: CycleStatusHistoryScalarFieldEnum[] | CycleStatusHistoryScalarFieldEnum
    having?: CycleStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleStatusHistoryCountAggregateInputType | true
    _min?: CycleStatusHistoryMinAggregateInputType
    _max?: CycleStatusHistoryMaxAggregateInputType
  }

  export type CycleStatusHistoryGroupByOutputType = {
    id: string
    cycleId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason: string | null
    correlationId: string | null
    createdAt: Date
    _count: CycleStatusHistoryCountAggregateOutputType | null
    _min: CycleStatusHistoryMinAggregateOutputType | null
    _max: CycleStatusHistoryMaxAggregateOutputType | null
  }

  type GetCycleStatusHistoryGroupByPayload<T extends CycleStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CycleStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CycleStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    reason?: boolean
    correlationId?: boolean
    createdAt?: boolean
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleStatusHistory"]>

  export type CycleStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    reason?: boolean
    correlationId?: boolean
    createdAt?: boolean
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleStatusHistory"]>

  export type CycleStatusHistorySelectScalar = {
    id?: boolean
    cycleId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedBy?: boolean
    reason?: boolean
    correlationId?: boolean
    createdAt?: boolean
  }

  export type CycleStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }
  export type CycleStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }

  export type $CycleStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CycleStatusHistory"
    objects: {
      cycle: Prisma.$CyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string
      fromStatus: string
      toStatus: string
      changedBy: string
      reason: string | null
      correlationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["cycleStatusHistory"]>
    composites: {}
  }

  type CycleStatusHistoryGetPayload<S extends boolean | null | undefined | CycleStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$CycleStatusHistoryPayload, S>

  type CycleStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CycleStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CycleStatusHistoryCountAggregateInputType | true
    }

  export interface CycleStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CycleStatusHistory'], meta: { name: 'CycleStatusHistory' } }
    /**
     * Find zero or one CycleStatusHistory that matches the filter.
     * @param {CycleStatusHistoryFindUniqueArgs} args - Arguments to find a CycleStatusHistory
     * @example
     * // Get one CycleStatusHistory
     * const cycleStatusHistory = await prisma.cycleStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleStatusHistoryFindUniqueArgs>(args: SelectSubset<T, CycleStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CycleStatusHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CycleStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a CycleStatusHistory
     * @example
     * // Get one CycleStatusHistory
     * const cycleStatusHistory = await prisma.cycleStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CycleStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryFindFirstArgs} args - Arguments to find a CycleStatusHistory
     * @example
     * // Get one CycleStatusHistory
     * const cycleStatusHistory = await prisma.cycleStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleStatusHistoryFindFirstArgs>(args?: SelectSubset<T, CycleStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CycleStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a CycleStatusHistory
     * @example
     * // Get one CycleStatusHistory
     * const cycleStatusHistory = await prisma.cycleStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CycleStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CycleStatusHistories
     * const cycleStatusHistories = await prisma.cycleStatusHistory.findMany()
     * 
     * // Get first 10 CycleStatusHistories
     * const cycleStatusHistories = await prisma.cycleStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleStatusHistoryWithIdOnly = await prisma.cycleStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleStatusHistoryFindManyArgs>(args?: SelectSubset<T, CycleStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CycleStatusHistory.
     * @param {CycleStatusHistoryCreateArgs} args - Arguments to create a CycleStatusHistory.
     * @example
     * // Create one CycleStatusHistory
     * const CycleStatusHistory = await prisma.cycleStatusHistory.create({
     *   data: {
     *     // ... data to create a CycleStatusHistory
     *   }
     * })
     * 
     */
    create<T extends CycleStatusHistoryCreateArgs>(args: SelectSubset<T, CycleStatusHistoryCreateArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CycleStatusHistories.
     * @param {CycleStatusHistoryCreateManyArgs} args - Arguments to create many CycleStatusHistories.
     * @example
     * // Create many CycleStatusHistories
     * const cycleStatusHistory = await prisma.cycleStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleStatusHistoryCreateManyArgs>(args?: SelectSubset<T, CycleStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CycleStatusHistories and returns the data saved in the database.
     * @param {CycleStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many CycleStatusHistories.
     * @example
     * // Create many CycleStatusHistories
     * const cycleStatusHistory = await prisma.cycleStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CycleStatusHistories and only return the `id`
     * const cycleStatusHistoryWithIdOnly = await prisma.cycleStatusHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CycleStatusHistory.
     * @param {CycleStatusHistoryDeleteArgs} args - Arguments to delete one CycleStatusHistory.
     * @example
     * // Delete one CycleStatusHistory
     * const CycleStatusHistory = await prisma.cycleStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one CycleStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends CycleStatusHistoryDeleteArgs>(args: SelectSubset<T, CycleStatusHistoryDeleteArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CycleStatusHistory.
     * @param {CycleStatusHistoryUpdateArgs} args - Arguments to update one CycleStatusHistory.
     * @example
     * // Update one CycleStatusHistory
     * const cycleStatusHistory = await prisma.cycleStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleStatusHistoryUpdateArgs>(args: SelectSubset<T, CycleStatusHistoryUpdateArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CycleStatusHistories.
     * @param {CycleStatusHistoryDeleteManyArgs} args - Arguments to filter CycleStatusHistories to delete.
     * @example
     * // Delete a few CycleStatusHistories
     * const { count } = await prisma.cycleStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, CycleStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CycleStatusHistories
     * const cycleStatusHistory = await prisma.cycleStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleStatusHistoryUpdateManyArgs>(args: SelectSubset<T, CycleStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CycleStatusHistory.
     * @param {CycleStatusHistoryUpsertArgs} args - Arguments to update or create a CycleStatusHistory.
     * @example
     * // Update or create a CycleStatusHistory
     * const cycleStatusHistory = await prisma.cycleStatusHistory.upsert({
     *   create: {
     *     // ... data to create a CycleStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CycleStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends CycleStatusHistoryUpsertArgs>(args: SelectSubset<T, CycleStatusHistoryUpsertArgs<ExtArgs>>): Prisma__CycleStatusHistoryClient<$Result.GetResult<Prisma.$CycleStatusHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CycleStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryCountArgs} args - Arguments to filter CycleStatusHistories to count.
     * @example
     * // Count the number of CycleStatusHistories
     * const count = await prisma.cycleStatusHistory.count({
     *   where: {
     *     // ... the filter for the CycleStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends CycleStatusHistoryCountArgs>(
      args?: Subset<T, CycleStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CycleStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CycleStatusHistoryAggregateArgs>(args: Subset<T, CycleStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetCycleStatusHistoryAggregateType<T>>

    /**
     * Group by CycleStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleStatusHistoryGroupByArgs} args - Group by arguments.
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
      T extends CycleStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CycleStatusHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CycleStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CycleStatusHistory model
   */
  readonly fields: CycleStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CycleStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycle<T extends CycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDefaultArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CycleStatusHistory model
   */ 
  interface CycleStatusHistoryFieldRefs {
    readonly id: FieldRef<"CycleStatusHistory", 'String'>
    readonly cycleId: FieldRef<"CycleStatusHistory", 'String'>
    readonly fromStatus: FieldRef<"CycleStatusHistory", 'String'>
    readonly toStatus: FieldRef<"CycleStatusHistory", 'String'>
    readonly changedBy: FieldRef<"CycleStatusHistory", 'String'>
    readonly reason: FieldRef<"CycleStatusHistory", 'String'>
    readonly correlationId: FieldRef<"CycleStatusHistory", 'String'>
    readonly createdAt: FieldRef<"CycleStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CycleStatusHistory findUnique
   */
  export type CycleStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CycleStatusHistory to fetch.
     */
    where: CycleStatusHistoryWhereUniqueInput
  }

  /**
   * CycleStatusHistory findUniqueOrThrow
   */
  export type CycleStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CycleStatusHistory to fetch.
     */
    where: CycleStatusHistoryWhereUniqueInput
  }

  /**
   * CycleStatusHistory findFirst
   */
  export type CycleStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CycleStatusHistory to fetch.
     */
    where?: CycleStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleStatusHistories to fetch.
     */
    orderBy?: CycleStatusHistoryOrderByWithRelationInput | CycleStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleStatusHistories.
     */
    cursor?: CycleStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleStatusHistories.
     */
    distinct?: CycleStatusHistoryScalarFieldEnum | CycleStatusHistoryScalarFieldEnum[]
  }

  /**
   * CycleStatusHistory findFirstOrThrow
   */
  export type CycleStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CycleStatusHistory to fetch.
     */
    where?: CycleStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleStatusHistories to fetch.
     */
    orderBy?: CycleStatusHistoryOrderByWithRelationInput | CycleStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleStatusHistories.
     */
    cursor?: CycleStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleStatusHistories.
     */
    distinct?: CycleStatusHistoryScalarFieldEnum | CycleStatusHistoryScalarFieldEnum[]
  }

  /**
   * CycleStatusHistory findMany
   */
  export type CycleStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CycleStatusHistories to fetch.
     */
    where?: CycleStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleStatusHistories to fetch.
     */
    orderBy?: CycleStatusHistoryOrderByWithRelationInput | CycleStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CycleStatusHistories.
     */
    cursor?: CycleStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleStatusHistories.
     */
    skip?: number
    distinct?: CycleStatusHistoryScalarFieldEnum | CycleStatusHistoryScalarFieldEnum[]
  }

  /**
   * CycleStatusHistory create
   */
  export type CycleStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CycleStatusHistory.
     */
    data: XOR<CycleStatusHistoryCreateInput, CycleStatusHistoryUncheckedCreateInput>
  }

  /**
   * CycleStatusHistory createMany
   */
  export type CycleStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CycleStatusHistories.
     */
    data: CycleStatusHistoryCreateManyInput | CycleStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CycleStatusHistory createManyAndReturn
   */
  export type CycleStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CycleStatusHistories.
     */
    data: CycleStatusHistoryCreateManyInput | CycleStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CycleStatusHistory update
   */
  export type CycleStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CycleStatusHistory.
     */
    data: XOR<CycleStatusHistoryUpdateInput, CycleStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which CycleStatusHistory to update.
     */
    where: CycleStatusHistoryWhereUniqueInput
  }

  /**
   * CycleStatusHistory updateMany
   */
  export type CycleStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CycleStatusHistories.
     */
    data: XOR<CycleStatusHistoryUpdateManyMutationInput, CycleStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CycleStatusHistories to update
     */
    where?: CycleStatusHistoryWhereInput
  }

  /**
   * CycleStatusHistory upsert
   */
  export type CycleStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CycleStatusHistory to update in case it exists.
     */
    where: CycleStatusHistoryWhereUniqueInput
    /**
     * In case the CycleStatusHistory found by the `where` argument doesn't exist, create a new CycleStatusHistory with this data.
     */
    create: XOR<CycleStatusHistoryCreateInput, CycleStatusHistoryUncheckedCreateInput>
    /**
     * In case the CycleStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleStatusHistoryUpdateInput, CycleStatusHistoryUncheckedUpdateInput>
  }

  /**
   * CycleStatusHistory delete
   */
  export type CycleStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which CycleStatusHistory to delete.
     */
    where: CycleStatusHistoryWhereUniqueInput
  }

  /**
   * CycleStatusHistory deleteMany
   */
  export type CycleStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleStatusHistories to delete
     */
    where?: CycleStatusHistoryWhereInput
  }

  /**
   * CycleStatusHistory without action
   */
  export type CycleStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleStatusHistory
     */
    select?: CycleStatusHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model CycleDealConfig
   */

  export type AggregateCycleDealConfig = {
    _count: CycleDealConfigCountAggregateOutputType | null
    _avg: CycleDealConfigAvgAggregateOutputType | null
    _sum: CycleDealConfigSumAggregateOutputType | null
    _min: CycleDealConfigMinAggregateOutputType | null
    _max: CycleDealConfigMaxAggregateOutputType | null
  }

  export type CycleDealConfigAvgAggregateOutputType = {
    ctcCeiling: Decimal | null
    ctdCeiling: Decimal | null
  }

  export type CycleDealConfigSumAggregateOutputType = {
    ctcCeiling: Decimal | null
    ctdCeiling: Decimal | null
  }

  export type CycleDealConfigMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    ctcCeiling: Decimal | null
    ctdCeiling: Decimal | null
    notes: string | null
    submittedBy: string | null
    submittedAt: Date | null
  }

  export type CycleDealConfigMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    ctcCeiling: Decimal | null
    ctdCeiling: Decimal | null
    notes: string | null
    submittedBy: string | null
    submittedAt: Date | null
  }

  export type CycleDealConfigCountAggregateOutputType = {
    id: number
    cycleId: number
    selectedTerms: number
    ctcCeiling: number
    ctdCeiling: number
    notes: number
    submittedBy: number
    submittedAt: number
    _all: number
  }


  export type CycleDealConfigAvgAggregateInputType = {
    ctcCeiling?: true
    ctdCeiling?: true
  }

  export type CycleDealConfigSumAggregateInputType = {
    ctcCeiling?: true
    ctdCeiling?: true
  }

  export type CycleDealConfigMinAggregateInputType = {
    id?: true
    cycleId?: true
    ctcCeiling?: true
    ctdCeiling?: true
    notes?: true
    submittedBy?: true
    submittedAt?: true
  }

  export type CycleDealConfigMaxAggregateInputType = {
    id?: true
    cycleId?: true
    ctcCeiling?: true
    ctdCeiling?: true
    notes?: true
    submittedBy?: true
    submittedAt?: true
  }

  export type CycleDealConfigCountAggregateInputType = {
    id?: true
    cycleId?: true
    selectedTerms?: true
    ctcCeiling?: true
    ctdCeiling?: true
    notes?: true
    submittedBy?: true
    submittedAt?: true
    _all?: true
  }

  export type CycleDealConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleDealConfig to aggregate.
     */
    where?: CycleDealConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleDealConfigs to fetch.
     */
    orderBy?: CycleDealConfigOrderByWithRelationInput | CycleDealConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleDealConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleDealConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleDealConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CycleDealConfigs
    **/
    _count?: true | CycleDealConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CycleDealConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CycleDealConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleDealConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleDealConfigMaxAggregateInputType
  }

  export type GetCycleDealConfigAggregateType<T extends CycleDealConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateCycleDealConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycleDealConfig[P]>
      : GetScalarType<T[P], AggregateCycleDealConfig[P]>
  }




  export type CycleDealConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleDealConfigWhereInput
    orderBy?: CycleDealConfigOrderByWithAggregationInput | CycleDealConfigOrderByWithAggregationInput[]
    by: CycleDealConfigScalarFieldEnum[] | CycleDealConfigScalarFieldEnum
    having?: CycleDealConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleDealConfigCountAggregateInputType | true
    _avg?: CycleDealConfigAvgAggregateInputType
    _sum?: CycleDealConfigSumAggregateInputType
    _min?: CycleDealConfigMinAggregateInputType
    _max?: CycleDealConfigMaxAggregateInputType
  }

  export type CycleDealConfigGroupByOutputType = {
    id: string
    cycleId: string
    selectedTerms: string[]
    ctcCeiling: Decimal
    ctdCeiling: Decimal
    notes: string | null
    submittedBy: string
    submittedAt: Date
    _count: CycleDealConfigCountAggregateOutputType | null
    _avg: CycleDealConfigAvgAggregateOutputType | null
    _sum: CycleDealConfigSumAggregateOutputType | null
    _min: CycleDealConfigMinAggregateOutputType | null
    _max: CycleDealConfigMaxAggregateOutputType | null
  }

  type GetCycleDealConfigGroupByPayload<T extends CycleDealConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleDealConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleDealConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleDealConfigGroupByOutputType[P]>
            : GetScalarType<T[P], CycleDealConfigGroupByOutputType[P]>
        }
      >
    >


  export type CycleDealConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    selectedTerms?: boolean
    ctcCeiling?: boolean
    ctdCeiling?: boolean
    notes?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    tariffBaskets?: boolean | CycleDealConfig$tariffBasketsArgs<ExtArgs>
    deviceBaskets?: boolean | CycleDealConfig$deviceBasketsArgs<ExtArgs>
    vasItems?: boolean | CycleDealConfig$vasItemsArgs<ExtArgs>
    _count?: boolean | CycleDealConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleDealConfig"]>

  export type CycleDealConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    selectedTerms?: boolean
    ctcCeiling?: boolean
    ctdCeiling?: boolean
    notes?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleDealConfig"]>

  export type CycleDealConfigSelectScalar = {
    id?: boolean
    cycleId?: boolean
    selectedTerms?: boolean
    ctcCeiling?: boolean
    ctdCeiling?: boolean
    notes?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
  }

  export type CycleDealConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
    tariffBaskets?: boolean | CycleDealConfig$tariffBasketsArgs<ExtArgs>
    deviceBaskets?: boolean | CycleDealConfig$deviceBasketsArgs<ExtArgs>
    vasItems?: boolean | CycleDealConfig$vasItemsArgs<ExtArgs>
    _count?: boolean | CycleDealConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CycleDealConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }

  export type $CycleDealConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CycleDealConfig"
    objects: {
      cycle: Prisma.$CyclePayload<ExtArgs>
      tariffBaskets: Prisma.$DealConfigTariffBasketPayload<ExtArgs>[]
      deviceBaskets: Prisma.$DealConfigDeviceBasketPayload<ExtArgs>[]
      vasItems: Prisma.$DealConfigVasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string
      selectedTerms: string[]
      ctcCeiling: Prisma.Decimal
      ctdCeiling: Prisma.Decimal
      notes: string | null
      submittedBy: string
      submittedAt: Date
    }, ExtArgs["result"]["cycleDealConfig"]>
    composites: {}
  }

  type CycleDealConfigGetPayload<S extends boolean | null | undefined | CycleDealConfigDefaultArgs> = $Result.GetResult<Prisma.$CycleDealConfigPayload, S>

  type CycleDealConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CycleDealConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CycleDealConfigCountAggregateInputType | true
    }

  export interface CycleDealConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CycleDealConfig'], meta: { name: 'CycleDealConfig' } }
    /**
     * Find zero or one CycleDealConfig that matches the filter.
     * @param {CycleDealConfigFindUniqueArgs} args - Arguments to find a CycleDealConfig
     * @example
     * // Get one CycleDealConfig
     * const cycleDealConfig = await prisma.cycleDealConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleDealConfigFindUniqueArgs>(args: SelectSubset<T, CycleDealConfigFindUniqueArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CycleDealConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CycleDealConfigFindUniqueOrThrowArgs} args - Arguments to find a CycleDealConfig
     * @example
     * // Get one CycleDealConfig
     * const cycleDealConfig = await prisma.cycleDealConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleDealConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleDealConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CycleDealConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigFindFirstArgs} args - Arguments to find a CycleDealConfig
     * @example
     * // Get one CycleDealConfig
     * const cycleDealConfig = await prisma.cycleDealConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleDealConfigFindFirstArgs>(args?: SelectSubset<T, CycleDealConfigFindFirstArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CycleDealConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigFindFirstOrThrowArgs} args - Arguments to find a CycleDealConfig
     * @example
     * // Get one CycleDealConfig
     * const cycleDealConfig = await prisma.cycleDealConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleDealConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleDealConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CycleDealConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CycleDealConfigs
     * const cycleDealConfigs = await prisma.cycleDealConfig.findMany()
     * 
     * // Get first 10 CycleDealConfigs
     * const cycleDealConfigs = await prisma.cycleDealConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleDealConfigWithIdOnly = await prisma.cycleDealConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleDealConfigFindManyArgs>(args?: SelectSubset<T, CycleDealConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CycleDealConfig.
     * @param {CycleDealConfigCreateArgs} args - Arguments to create a CycleDealConfig.
     * @example
     * // Create one CycleDealConfig
     * const CycleDealConfig = await prisma.cycleDealConfig.create({
     *   data: {
     *     // ... data to create a CycleDealConfig
     *   }
     * })
     * 
     */
    create<T extends CycleDealConfigCreateArgs>(args: SelectSubset<T, CycleDealConfigCreateArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CycleDealConfigs.
     * @param {CycleDealConfigCreateManyArgs} args - Arguments to create many CycleDealConfigs.
     * @example
     * // Create many CycleDealConfigs
     * const cycleDealConfig = await prisma.cycleDealConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleDealConfigCreateManyArgs>(args?: SelectSubset<T, CycleDealConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CycleDealConfigs and returns the data saved in the database.
     * @param {CycleDealConfigCreateManyAndReturnArgs} args - Arguments to create many CycleDealConfigs.
     * @example
     * // Create many CycleDealConfigs
     * const cycleDealConfig = await prisma.cycleDealConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CycleDealConfigs and only return the `id`
     * const cycleDealConfigWithIdOnly = await prisma.cycleDealConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleDealConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleDealConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CycleDealConfig.
     * @param {CycleDealConfigDeleteArgs} args - Arguments to delete one CycleDealConfig.
     * @example
     * // Delete one CycleDealConfig
     * const CycleDealConfig = await prisma.cycleDealConfig.delete({
     *   where: {
     *     // ... filter to delete one CycleDealConfig
     *   }
     * })
     * 
     */
    delete<T extends CycleDealConfigDeleteArgs>(args: SelectSubset<T, CycleDealConfigDeleteArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CycleDealConfig.
     * @param {CycleDealConfigUpdateArgs} args - Arguments to update one CycleDealConfig.
     * @example
     * // Update one CycleDealConfig
     * const cycleDealConfig = await prisma.cycleDealConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleDealConfigUpdateArgs>(args: SelectSubset<T, CycleDealConfigUpdateArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CycleDealConfigs.
     * @param {CycleDealConfigDeleteManyArgs} args - Arguments to filter CycleDealConfigs to delete.
     * @example
     * // Delete a few CycleDealConfigs
     * const { count } = await prisma.cycleDealConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleDealConfigDeleteManyArgs>(args?: SelectSubset<T, CycleDealConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleDealConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CycleDealConfigs
     * const cycleDealConfig = await prisma.cycleDealConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleDealConfigUpdateManyArgs>(args: SelectSubset<T, CycleDealConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CycleDealConfig.
     * @param {CycleDealConfigUpsertArgs} args - Arguments to update or create a CycleDealConfig.
     * @example
     * // Update or create a CycleDealConfig
     * const cycleDealConfig = await prisma.cycleDealConfig.upsert({
     *   create: {
     *     // ... data to create a CycleDealConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CycleDealConfig we want to update
     *   }
     * })
     */
    upsert<T extends CycleDealConfigUpsertArgs>(args: SelectSubset<T, CycleDealConfigUpsertArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CycleDealConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigCountArgs} args - Arguments to filter CycleDealConfigs to count.
     * @example
     * // Count the number of CycleDealConfigs
     * const count = await prisma.cycleDealConfig.count({
     *   where: {
     *     // ... the filter for the CycleDealConfigs we want to count
     *   }
     * })
    **/
    count<T extends CycleDealConfigCountArgs>(
      args?: Subset<T, CycleDealConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleDealConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CycleDealConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CycleDealConfigAggregateArgs>(args: Subset<T, CycleDealConfigAggregateArgs>): Prisma.PrismaPromise<GetCycleDealConfigAggregateType<T>>

    /**
     * Group by CycleDealConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleDealConfigGroupByArgs} args - Group by arguments.
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
      T extends CycleDealConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleDealConfigGroupByArgs['orderBy'] }
        : { orderBy?: CycleDealConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CycleDealConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleDealConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CycleDealConfig model
   */
  readonly fields: CycleDealConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CycleDealConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleDealConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycle<T extends CycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDefaultArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tariffBaskets<T extends CycleDealConfig$tariffBasketsArgs<ExtArgs> = {}>(args?: Subset<T, CycleDealConfig$tariffBasketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "findMany"> | Null>
    deviceBaskets<T extends CycleDealConfig$deviceBasketsArgs<ExtArgs> = {}>(args?: Subset<T, CycleDealConfig$deviceBasketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "findMany"> | Null>
    vasItems<T extends CycleDealConfig$vasItemsArgs<ExtArgs> = {}>(args?: Subset<T, CycleDealConfig$vasItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CycleDealConfig model
   */ 
  interface CycleDealConfigFieldRefs {
    readonly id: FieldRef<"CycleDealConfig", 'String'>
    readonly cycleId: FieldRef<"CycleDealConfig", 'String'>
    readonly selectedTerms: FieldRef<"CycleDealConfig", 'String[]'>
    readonly ctcCeiling: FieldRef<"CycleDealConfig", 'Decimal'>
    readonly ctdCeiling: FieldRef<"CycleDealConfig", 'Decimal'>
    readonly notes: FieldRef<"CycleDealConfig", 'String'>
    readonly submittedBy: FieldRef<"CycleDealConfig", 'String'>
    readonly submittedAt: FieldRef<"CycleDealConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CycleDealConfig findUnique
   */
  export type CycleDealConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * Filter, which CycleDealConfig to fetch.
     */
    where: CycleDealConfigWhereUniqueInput
  }

  /**
   * CycleDealConfig findUniqueOrThrow
   */
  export type CycleDealConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * Filter, which CycleDealConfig to fetch.
     */
    where: CycleDealConfigWhereUniqueInput
  }

  /**
   * CycleDealConfig findFirst
   */
  export type CycleDealConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * Filter, which CycleDealConfig to fetch.
     */
    where?: CycleDealConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleDealConfigs to fetch.
     */
    orderBy?: CycleDealConfigOrderByWithRelationInput | CycleDealConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleDealConfigs.
     */
    cursor?: CycleDealConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleDealConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleDealConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleDealConfigs.
     */
    distinct?: CycleDealConfigScalarFieldEnum | CycleDealConfigScalarFieldEnum[]
  }

  /**
   * CycleDealConfig findFirstOrThrow
   */
  export type CycleDealConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * Filter, which CycleDealConfig to fetch.
     */
    where?: CycleDealConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleDealConfigs to fetch.
     */
    orderBy?: CycleDealConfigOrderByWithRelationInput | CycleDealConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleDealConfigs.
     */
    cursor?: CycleDealConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleDealConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleDealConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleDealConfigs.
     */
    distinct?: CycleDealConfigScalarFieldEnum | CycleDealConfigScalarFieldEnum[]
  }

  /**
   * CycleDealConfig findMany
   */
  export type CycleDealConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * Filter, which CycleDealConfigs to fetch.
     */
    where?: CycleDealConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleDealConfigs to fetch.
     */
    orderBy?: CycleDealConfigOrderByWithRelationInput | CycleDealConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CycleDealConfigs.
     */
    cursor?: CycleDealConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleDealConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleDealConfigs.
     */
    skip?: number
    distinct?: CycleDealConfigScalarFieldEnum | CycleDealConfigScalarFieldEnum[]
  }

  /**
   * CycleDealConfig create
   */
  export type CycleDealConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a CycleDealConfig.
     */
    data: XOR<CycleDealConfigCreateInput, CycleDealConfigUncheckedCreateInput>
  }

  /**
   * CycleDealConfig createMany
   */
  export type CycleDealConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CycleDealConfigs.
     */
    data: CycleDealConfigCreateManyInput | CycleDealConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CycleDealConfig createManyAndReturn
   */
  export type CycleDealConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CycleDealConfigs.
     */
    data: CycleDealConfigCreateManyInput | CycleDealConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CycleDealConfig update
   */
  export type CycleDealConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a CycleDealConfig.
     */
    data: XOR<CycleDealConfigUpdateInput, CycleDealConfigUncheckedUpdateInput>
    /**
     * Choose, which CycleDealConfig to update.
     */
    where: CycleDealConfigWhereUniqueInput
  }

  /**
   * CycleDealConfig updateMany
   */
  export type CycleDealConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CycleDealConfigs.
     */
    data: XOR<CycleDealConfigUpdateManyMutationInput, CycleDealConfigUncheckedUpdateManyInput>
    /**
     * Filter which CycleDealConfigs to update
     */
    where?: CycleDealConfigWhereInput
  }

  /**
   * CycleDealConfig upsert
   */
  export type CycleDealConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the CycleDealConfig to update in case it exists.
     */
    where: CycleDealConfigWhereUniqueInput
    /**
     * In case the CycleDealConfig found by the `where` argument doesn't exist, create a new CycleDealConfig with this data.
     */
    create: XOR<CycleDealConfigCreateInput, CycleDealConfigUncheckedCreateInput>
    /**
     * In case the CycleDealConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleDealConfigUpdateInput, CycleDealConfigUncheckedUpdateInput>
  }

  /**
   * CycleDealConfig delete
   */
  export type CycleDealConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
    /**
     * Filter which CycleDealConfig to delete.
     */
    where: CycleDealConfigWhereUniqueInput
  }

  /**
   * CycleDealConfig deleteMany
   */
  export type CycleDealConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleDealConfigs to delete
     */
    where?: CycleDealConfigWhereInput
  }

  /**
   * CycleDealConfig.tariffBaskets
   */
  export type CycleDealConfig$tariffBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    where?: DealConfigTariffBasketWhereInput
    orderBy?: DealConfigTariffBasketOrderByWithRelationInput | DealConfigTariffBasketOrderByWithRelationInput[]
    cursor?: DealConfigTariffBasketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealConfigTariffBasketScalarFieldEnum | DealConfigTariffBasketScalarFieldEnum[]
  }

  /**
   * CycleDealConfig.deviceBaskets
   */
  export type CycleDealConfig$deviceBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    where?: DealConfigDeviceBasketWhereInput
    orderBy?: DealConfigDeviceBasketOrderByWithRelationInput | DealConfigDeviceBasketOrderByWithRelationInput[]
    cursor?: DealConfigDeviceBasketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealConfigDeviceBasketScalarFieldEnum | DealConfigDeviceBasketScalarFieldEnum[]
  }

  /**
   * CycleDealConfig.vasItems
   */
  export type CycleDealConfig$vasItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    where?: DealConfigVasWhereInput
    orderBy?: DealConfigVasOrderByWithRelationInput | DealConfigVasOrderByWithRelationInput[]
    cursor?: DealConfigVasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealConfigVasScalarFieldEnum | DealConfigVasScalarFieldEnum[]
  }

  /**
   * CycleDealConfig without action
   */
  export type CycleDealConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleDealConfig
     */
    select?: CycleDealConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleDealConfigInclude<ExtArgs> | null
  }


  /**
   * Model DealConfigTariffBasket
   */

  export type AggregateDealConfigTariffBasket = {
    _count: DealConfigTariffBasketCountAggregateOutputType | null
    _avg: DealConfigTariffBasketAvgAggregateOutputType | null
    _sum: DealConfigTariffBasketSumAggregateOutputType | null
    _min: DealConfigTariffBasketMinAggregateOutputType | null
    _max: DealConfigTariffBasketMaxAggregateOutputType | null
  }

  export type DealConfigTariffBasketAvgAggregateOutputType = {
    monthlyFee: Decimal | null
    term: number | null
  }

  export type DealConfigTariffBasketSumAggregateOutputType = {
    monthlyFee: Decimal | null
    term: number | null
  }

  export type DealConfigTariffBasketMinAggregateOutputType = {
    id: string | null
    dealConfigId: string | null
    tariffId: string | null
    tariffCode: string | null
    monthlyFee: Decimal | null
    term: number | null
  }

  export type DealConfigTariffBasketMaxAggregateOutputType = {
    id: string | null
    dealConfigId: string | null
    tariffId: string | null
    tariffCode: string | null
    monthlyFee: Decimal | null
    term: number | null
  }

  export type DealConfigTariffBasketCountAggregateOutputType = {
    id: number
    dealConfigId: number
    tariffId: number
    tariffCode: number
    monthlyFee: number
    term: number
    _all: number
  }


  export type DealConfigTariffBasketAvgAggregateInputType = {
    monthlyFee?: true
    term?: true
  }

  export type DealConfigTariffBasketSumAggregateInputType = {
    monthlyFee?: true
    term?: true
  }

  export type DealConfigTariffBasketMinAggregateInputType = {
    id?: true
    dealConfigId?: true
    tariffId?: true
    tariffCode?: true
    monthlyFee?: true
    term?: true
  }

  export type DealConfigTariffBasketMaxAggregateInputType = {
    id?: true
    dealConfigId?: true
    tariffId?: true
    tariffCode?: true
    monthlyFee?: true
    term?: true
  }

  export type DealConfigTariffBasketCountAggregateInputType = {
    id?: true
    dealConfigId?: true
    tariffId?: true
    tariffCode?: true
    monthlyFee?: true
    term?: true
    _all?: true
  }

  export type DealConfigTariffBasketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealConfigTariffBasket to aggregate.
     */
    where?: DealConfigTariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigTariffBaskets to fetch.
     */
    orderBy?: DealConfigTariffBasketOrderByWithRelationInput | DealConfigTariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealConfigTariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigTariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigTariffBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealConfigTariffBaskets
    **/
    _count?: true | DealConfigTariffBasketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealConfigTariffBasketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealConfigTariffBasketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealConfigTariffBasketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealConfigTariffBasketMaxAggregateInputType
  }

  export type GetDealConfigTariffBasketAggregateType<T extends DealConfigTariffBasketAggregateArgs> = {
        [P in keyof T & keyof AggregateDealConfigTariffBasket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealConfigTariffBasket[P]>
      : GetScalarType<T[P], AggregateDealConfigTariffBasket[P]>
  }




  export type DealConfigTariffBasketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealConfigTariffBasketWhereInput
    orderBy?: DealConfigTariffBasketOrderByWithAggregationInput | DealConfigTariffBasketOrderByWithAggregationInput[]
    by: DealConfigTariffBasketScalarFieldEnum[] | DealConfigTariffBasketScalarFieldEnum
    having?: DealConfigTariffBasketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealConfigTariffBasketCountAggregateInputType | true
    _avg?: DealConfigTariffBasketAvgAggregateInputType
    _sum?: DealConfigTariffBasketSumAggregateInputType
    _min?: DealConfigTariffBasketMinAggregateInputType
    _max?: DealConfigTariffBasketMaxAggregateInputType
  }

  export type DealConfigTariffBasketGroupByOutputType = {
    id: string
    dealConfigId: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal
    term: number
    _count: DealConfigTariffBasketCountAggregateOutputType | null
    _avg: DealConfigTariffBasketAvgAggregateOutputType | null
    _sum: DealConfigTariffBasketSumAggregateOutputType | null
    _min: DealConfigTariffBasketMinAggregateOutputType | null
    _max: DealConfigTariffBasketMaxAggregateOutputType | null
  }

  type GetDealConfigTariffBasketGroupByPayload<T extends DealConfigTariffBasketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealConfigTariffBasketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealConfigTariffBasketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealConfigTariffBasketGroupByOutputType[P]>
            : GetScalarType<T[P], DealConfigTariffBasketGroupByOutputType[P]>
        }
      >
    >


  export type DealConfigTariffBasketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealConfigId?: boolean
    tariffId?: boolean
    tariffCode?: boolean
    monthlyFee?: boolean
    term?: boolean
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealConfigTariffBasket"]>

  export type DealConfigTariffBasketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealConfigId?: boolean
    tariffId?: boolean
    tariffCode?: boolean
    monthlyFee?: boolean
    term?: boolean
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealConfigTariffBasket"]>

  export type DealConfigTariffBasketSelectScalar = {
    id?: boolean
    dealConfigId?: boolean
    tariffId?: boolean
    tariffCode?: boolean
    monthlyFee?: boolean
    term?: boolean
  }

  export type DealConfigTariffBasketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }
  export type DealConfigTariffBasketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }

  export type $DealConfigTariffBasketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealConfigTariffBasket"
    objects: {
      dealConfig: Prisma.$CycleDealConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealConfigId: string
      tariffId: string
      tariffCode: string
      monthlyFee: Prisma.Decimal
      term: number
    }, ExtArgs["result"]["dealConfigTariffBasket"]>
    composites: {}
  }

  type DealConfigTariffBasketGetPayload<S extends boolean | null | undefined | DealConfigTariffBasketDefaultArgs> = $Result.GetResult<Prisma.$DealConfigTariffBasketPayload, S>

  type DealConfigTariffBasketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DealConfigTariffBasketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DealConfigTariffBasketCountAggregateInputType | true
    }

  export interface DealConfigTariffBasketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealConfigTariffBasket'], meta: { name: 'DealConfigTariffBasket' } }
    /**
     * Find zero or one DealConfigTariffBasket that matches the filter.
     * @param {DealConfigTariffBasketFindUniqueArgs} args - Arguments to find a DealConfigTariffBasket
     * @example
     * // Get one DealConfigTariffBasket
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealConfigTariffBasketFindUniqueArgs>(args: SelectSubset<T, DealConfigTariffBasketFindUniqueArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DealConfigTariffBasket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DealConfigTariffBasketFindUniqueOrThrowArgs} args - Arguments to find a DealConfigTariffBasket
     * @example
     * // Get one DealConfigTariffBasket
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealConfigTariffBasketFindUniqueOrThrowArgs>(args: SelectSubset<T, DealConfigTariffBasketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DealConfigTariffBasket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketFindFirstArgs} args - Arguments to find a DealConfigTariffBasket
     * @example
     * // Get one DealConfigTariffBasket
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealConfigTariffBasketFindFirstArgs>(args?: SelectSubset<T, DealConfigTariffBasketFindFirstArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DealConfigTariffBasket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketFindFirstOrThrowArgs} args - Arguments to find a DealConfigTariffBasket
     * @example
     * // Get one DealConfigTariffBasket
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealConfigTariffBasketFindFirstOrThrowArgs>(args?: SelectSubset<T, DealConfigTariffBasketFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DealConfigTariffBaskets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealConfigTariffBaskets
     * const dealConfigTariffBaskets = await prisma.dealConfigTariffBasket.findMany()
     * 
     * // Get first 10 DealConfigTariffBaskets
     * const dealConfigTariffBaskets = await prisma.dealConfigTariffBasket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealConfigTariffBasketWithIdOnly = await prisma.dealConfigTariffBasket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealConfigTariffBasketFindManyArgs>(args?: SelectSubset<T, DealConfigTariffBasketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DealConfigTariffBasket.
     * @param {DealConfigTariffBasketCreateArgs} args - Arguments to create a DealConfigTariffBasket.
     * @example
     * // Create one DealConfigTariffBasket
     * const DealConfigTariffBasket = await prisma.dealConfigTariffBasket.create({
     *   data: {
     *     // ... data to create a DealConfigTariffBasket
     *   }
     * })
     * 
     */
    create<T extends DealConfigTariffBasketCreateArgs>(args: SelectSubset<T, DealConfigTariffBasketCreateArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DealConfigTariffBaskets.
     * @param {DealConfigTariffBasketCreateManyArgs} args - Arguments to create many DealConfigTariffBaskets.
     * @example
     * // Create many DealConfigTariffBaskets
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealConfigTariffBasketCreateManyArgs>(args?: SelectSubset<T, DealConfigTariffBasketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealConfigTariffBaskets and returns the data saved in the database.
     * @param {DealConfigTariffBasketCreateManyAndReturnArgs} args - Arguments to create many DealConfigTariffBaskets.
     * @example
     * // Create many DealConfigTariffBaskets
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealConfigTariffBaskets and only return the `id`
     * const dealConfigTariffBasketWithIdOnly = await prisma.dealConfigTariffBasket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealConfigTariffBasketCreateManyAndReturnArgs>(args?: SelectSubset<T, DealConfigTariffBasketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DealConfigTariffBasket.
     * @param {DealConfigTariffBasketDeleteArgs} args - Arguments to delete one DealConfigTariffBasket.
     * @example
     * // Delete one DealConfigTariffBasket
     * const DealConfigTariffBasket = await prisma.dealConfigTariffBasket.delete({
     *   where: {
     *     // ... filter to delete one DealConfigTariffBasket
     *   }
     * })
     * 
     */
    delete<T extends DealConfigTariffBasketDeleteArgs>(args: SelectSubset<T, DealConfigTariffBasketDeleteArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DealConfigTariffBasket.
     * @param {DealConfigTariffBasketUpdateArgs} args - Arguments to update one DealConfigTariffBasket.
     * @example
     * // Update one DealConfigTariffBasket
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealConfigTariffBasketUpdateArgs>(args: SelectSubset<T, DealConfigTariffBasketUpdateArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DealConfigTariffBaskets.
     * @param {DealConfigTariffBasketDeleteManyArgs} args - Arguments to filter DealConfigTariffBaskets to delete.
     * @example
     * // Delete a few DealConfigTariffBaskets
     * const { count } = await prisma.dealConfigTariffBasket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealConfigTariffBasketDeleteManyArgs>(args?: SelectSubset<T, DealConfigTariffBasketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealConfigTariffBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealConfigTariffBaskets
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealConfigTariffBasketUpdateManyArgs>(args: SelectSubset<T, DealConfigTariffBasketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DealConfigTariffBasket.
     * @param {DealConfigTariffBasketUpsertArgs} args - Arguments to update or create a DealConfigTariffBasket.
     * @example
     * // Update or create a DealConfigTariffBasket
     * const dealConfigTariffBasket = await prisma.dealConfigTariffBasket.upsert({
     *   create: {
     *     // ... data to create a DealConfigTariffBasket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealConfigTariffBasket we want to update
     *   }
     * })
     */
    upsert<T extends DealConfigTariffBasketUpsertArgs>(args: SelectSubset<T, DealConfigTariffBasketUpsertArgs<ExtArgs>>): Prisma__DealConfigTariffBasketClient<$Result.GetResult<Prisma.$DealConfigTariffBasketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DealConfigTariffBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketCountArgs} args - Arguments to filter DealConfigTariffBaskets to count.
     * @example
     * // Count the number of DealConfigTariffBaskets
     * const count = await prisma.dealConfigTariffBasket.count({
     *   where: {
     *     // ... the filter for the DealConfigTariffBaskets we want to count
     *   }
     * })
    **/
    count<T extends DealConfigTariffBasketCountArgs>(
      args?: Subset<T, DealConfigTariffBasketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealConfigTariffBasketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealConfigTariffBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealConfigTariffBasketAggregateArgs>(args: Subset<T, DealConfigTariffBasketAggregateArgs>): Prisma.PrismaPromise<GetDealConfigTariffBasketAggregateType<T>>

    /**
     * Group by DealConfigTariffBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigTariffBasketGroupByArgs} args - Group by arguments.
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
      T extends DealConfigTariffBasketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealConfigTariffBasketGroupByArgs['orderBy'] }
        : { orderBy?: DealConfigTariffBasketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DealConfigTariffBasketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealConfigTariffBasketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealConfigTariffBasket model
   */
  readonly fields: DealConfigTariffBasketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealConfigTariffBasket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealConfigTariffBasketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealConfig<T extends CycleDealConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDealConfigDefaultArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DealConfigTariffBasket model
   */ 
  interface DealConfigTariffBasketFieldRefs {
    readonly id: FieldRef<"DealConfigTariffBasket", 'String'>
    readonly dealConfigId: FieldRef<"DealConfigTariffBasket", 'String'>
    readonly tariffId: FieldRef<"DealConfigTariffBasket", 'String'>
    readonly tariffCode: FieldRef<"DealConfigTariffBasket", 'String'>
    readonly monthlyFee: FieldRef<"DealConfigTariffBasket", 'Decimal'>
    readonly term: FieldRef<"DealConfigTariffBasket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DealConfigTariffBasket findUnique
   */
  export type DealConfigTariffBasketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigTariffBasket to fetch.
     */
    where: DealConfigTariffBasketWhereUniqueInput
  }

  /**
   * DealConfigTariffBasket findUniqueOrThrow
   */
  export type DealConfigTariffBasketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigTariffBasket to fetch.
     */
    where: DealConfigTariffBasketWhereUniqueInput
  }

  /**
   * DealConfigTariffBasket findFirst
   */
  export type DealConfigTariffBasketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigTariffBasket to fetch.
     */
    where?: DealConfigTariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigTariffBaskets to fetch.
     */
    orderBy?: DealConfigTariffBasketOrderByWithRelationInput | DealConfigTariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealConfigTariffBaskets.
     */
    cursor?: DealConfigTariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigTariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigTariffBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealConfigTariffBaskets.
     */
    distinct?: DealConfigTariffBasketScalarFieldEnum | DealConfigTariffBasketScalarFieldEnum[]
  }

  /**
   * DealConfigTariffBasket findFirstOrThrow
   */
  export type DealConfigTariffBasketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigTariffBasket to fetch.
     */
    where?: DealConfigTariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigTariffBaskets to fetch.
     */
    orderBy?: DealConfigTariffBasketOrderByWithRelationInput | DealConfigTariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealConfigTariffBaskets.
     */
    cursor?: DealConfigTariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigTariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigTariffBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealConfigTariffBaskets.
     */
    distinct?: DealConfigTariffBasketScalarFieldEnum | DealConfigTariffBasketScalarFieldEnum[]
  }

  /**
   * DealConfigTariffBasket findMany
   */
  export type DealConfigTariffBasketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigTariffBaskets to fetch.
     */
    where?: DealConfigTariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigTariffBaskets to fetch.
     */
    orderBy?: DealConfigTariffBasketOrderByWithRelationInput | DealConfigTariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealConfigTariffBaskets.
     */
    cursor?: DealConfigTariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigTariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigTariffBaskets.
     */
    skip?: number
    distinct?: DealConfigTariffBasketScalarFieldEnum | DealConfigTariffBasketScalarFieldEnum[]
  }

  /**
   * DealConfigTariffBasket create
   */
  export type DealConfigTariffBasketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * The data needed to create a DealConfigTariffBasket.
     */
    data: XOR<DealConfigTariffBasketCreateInput, DealConfigTariffBasketUncheckedCreateInput>
  }

  /**
   * DealConfigTariffBasket createMany
   */
  export type DealConfigTariffBasketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealConfigTariffBaskets.
     */
    data: DealConfigTariffBasketCreateManyInput | DealConfigTariffBasketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealConfigTariffBasket createManyAndReturn
   */
  export type DealConfigTariffBasketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DealConfigTariffBaskets.
     */
    data: DealConfigTariffBasketCreateManyInput | DealConfigTariffBasketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealConfigTariffBasket update
   */
  export type DealConfigTariffBasketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * The data needed to update a DealConfigTariffBasket.
     */
    data: XOR<DealConfigTariffBasketUpdateInput, DealConfigTariffBasketUncheckedUpdateInput>
    /**
     * Choose, which DealConfigTariffBasket to update.
     */
    where: DealConfigTariffBasketWhereUniqueInput
  }

  /**
   * DealConfigTariffBasket updateMany
   */
  export type DealConfigTariffBasketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealConfigTariffBaskets.
     */
    data: XOR<DealConfigTariffBasketUpdateManyMutationInput, DealConfigTariffBasketUncheckedUpdateManyInput>
    /**
     * Filter which DealConfigTariffBaskets to update
     */
    where?: DealConfigTariffBasketWhereInput
  }

  /**
   * DealConfigTariffBasket upsert
   */
  export type DealConfigTariffBasketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * The filter to search for the DealConfigTariffBasket to update in case it exists.
     */
    where: DealConfigTariffBasketWhereUniqueInput
    /**
     * In case the DealConfigTariffBasket found by the `where` argument doesn't exist, create a new DealConfigTariffBasket with this data.
     */
    create: XOR<DealConfigTariffBasketCreateInput, DealConfigTariffBasketUncheckedCreateInput>
    /**
     * In case the DealConfigTariffBasket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealConfigTariffBasketUpdateInput, DealConfigTariffBasketUncheckedUpdateInput>
  }

  /**
   * DealConfigTariffBasket delete
   */
  export type DealConfigTariffBasketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
    /**
     * Filter which DealConfigTariffBasket to delete.
     */
    where: DealConfigTariffBasketWhereUniqueInput
  }

  /**
   * DealConfigTariffBasket deleteMany
   */
  export type DealConfigTariffBasketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealConfigTariffBaskets to delete
     */
    where?: DealConfigTariffBasketWhereInput
  }

  /**
   * DealConfigTariffBasket without action
   */
  export type DealConfigTariffBasketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigTariffBasket
     */
    select?: DealConfigTariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigTariffBasketInclude<ExtArgs> | null
  }


  /**
   * Model DealConfigDeviceBasket
   */

  export type AggregateDealConfigDeviceBasket = {
    _count: DealConfigDeviceBasketCountAggregateOutputType | null
    _avg: DealConfigDeviceBasketAvgAggregateOutputType | null
    _sum: DealConfigDeviceBasketSumAggregateOutputType | null
    _min: DealConfigDeviceBasketMinAggregateOutputType | null
    _max: DealConfigDeviceBasketMaxAggregateOutputType | null
  }

  export type DealConfigDeviceBasketAvgAggregateOutputType = {
    handsetCost: Decimal | null
    retailPrice: Decimal | null
  }

  export type DealConfigDeviceBasketSumAggregateOutputType = {
    handsetCost: Decimal | null
    retailPrice: Decimal | null
  }

  export type DealConfigDeviceBasketMinAggregateOutputType = {
    id: string | null
    dealConfigId: string | null
    deviceId: string | null
    deviceModel: string | null
    handsetCost: Decimal | null
    retailPrice: Decimal | null
  }

  export type DealConfigDeviceBasketMaxAggregateOutputType = {
    id: string | null
    dealConfigId: string | null
    deviceId: string | null
    deviceModel: string | null
    handsetCost: Decimal | null
    retailPrice: Decimal | null
  }

  export type DealConfigDeviceBasketCountAggregateOutputType = {
    id: number
    dealConfigId: number
    deviceId: number
    deviceModel: number
    handsetCost: number
    retailPrice: number
    _all: number
  }


  export type DealConfigDeviceBasketAvgAggregateInputType = {
    handsetCost?: true
    retailPrice?: true
  }

  export type DealConfigDeviceBasketSumAggregateInputType = {
    handsetCost?: true
    retailPrice?: true
  }

  export type DealConfigDeviceBasketMinAggregateInputType = {
    id?: true
    dealConfigId?: true
    deviceId?: true
    deviceModel?: true
    handsetCost?: true
    retailPrice?: true
  }

  export type DealConfigDeviceBasketMaxAggregateInputType = {
    id?: true
    dealConfigId?: true
    deviceId?: true
    deviceModel?: true
    handsetCost?: true
    retailPrice?: true
  }

  export type DealConfigDeviceBasketCountAggregateInputType = {
    id?: true
    dealConfigId?: true
    deviceId?: true
    deviceModel?: true
    handsetCost?: true
    retailPrice?: true
    _all?: true
  }

  export type DealConfigDeviceBasketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealConfigDeviceBasket to aggregate.
     */
    where?: DealConfigDeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigDeviceBaskets to fetch.
     */
    orderBy?: DealConfigDeviceBasketOrderByWithRelationInput | DealConfigDeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealConfigDeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigDeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigDeviceBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealConfigDeviceBaskets
    **/
    _count?: true | DealConfigDeviceBasketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealConfigDeviceBasketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealConfigDeviceBasketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealConfigDeviceBasketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealConfigDeviceBasketMaxAggregateInputType
  }

  export type GetDealConfigDeviceBasketAggregateType<T extends DealConfigDeviceBasketAggregateArgs> = {
        [P in keyof T & keyof AggregateDealConfigDeviceBasket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealConfigDeviceBasket[P]>
      : GetScalarType<T[P], AggregateDealConfigDeviceBasket[P]>
  }




  export type DealConfigDeviceBasketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealConfigDeviceBasketWhereInput
    orderBy?: DealConfigDeviceBasketOrderByWithAggregationInput | DealConfigDeviceBasketOrderByWithAggregationInput[]
    by: DealConfigDeviceBasketScalarFieldEnum[] | DealConfigDeviceBasketScalarFieldEnum
    having?: DealConfigDeviceBasketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealConfigDeviceBasketCountAggregateInputType | true
    _avg?: DealConfigDeviceBasketAvgAggregateInputType
    _sum?: DealConfigDeviceBasketSumAggregateInputType
    _min?: DealConfigDeviceBasketMinAggregateInputType
    _max?: DealConfigDeviceBasketMaxAggregateInputType
  }

  export type DealConfigDeviceBasketGroupByOutputType = {
    id: string
    dealConfigId: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal
    retailPrice: Decimal
    _count: DealConfigDeviceBasketCountAggregateOutputType | null
    _avg: DealConfigDeviceBasketAvgAggregateOutputType | null
    _sum: DealConfigDeviceBasketSumAggregateOutputType | null
    _min: DealConfigDeviceBasketMinAggregateOutputType | null
    _max: DealConfigDeviceBasketMaxAggregateOutputType | null
  }

  type GetDealConfigDeviceBasketGroupByPayload<T extends DealConfigDeviceBasketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealConfigDeviceBasketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealConfigDeviceBasketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealConfigDeviceBasketGroupByOutputType[P]>
            : GetScalarType<T[P], DealConfigDeviceBasketGroupByOutputType[P]>
        }
      >
    >


  export type DealConfigDeviceBasketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealConfigId?: boolean
    deviceId?: boolean
    deviceModel?: boolean
    handsetCost?: boolean
    retailPrice?: boolean
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealConfigDeviceBasket"]>

  export type DealConfigDeviceBasketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealConfigId?: boolean
    deviceId?: boolean
    deviceModel?: boolean
    handsetCost?: boolean
    retailPrice?: boolean
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealConfigDeviceBasket"]>

  export type DealConfigDeviceBasketSelectScalar = {
    id?: boolean
    dealConfigId?: boolean
    deviceId?: boolean
    deviceModel?: boolean
    handsetCost?: boolean
    retailPrice?: boolean
  }

  export type DealConfigDeviceBasketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }
  export type DealConfigDeviceBasketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }

  export type $DealConfigDeviceBasketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealConfigDeviceBasket"
    objects: {
      dealConfig: Prisma.$CycleDealConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealConfigId: string
      deviceId: string
      deviceModel: string
      handsetCost: Prisma.Decimal
      retailPrice: Prisma.Decimal
    }, ExtArgs["result"]["dealConfigDeviceBasket"]>
    composites: {}
  }

  type DealConfigDeviceBasketGetPayload<S extends boolean | null | undefined | DealConfigDeviceBasketDefaultArgs> = $Result.GetResult<Prisma.$DealConfigDeviceBasketPayload, S>

  type DealConfigDeviceBasketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DealConfigDeviceBasketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DealConfigDeviceBasketCountAggregateInputType | true
    }

  export interface DealConfigDeviceBasketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealConfigDeviceBasket'], meta: { name: 'DealConfigDeviceBasket' } }
    /**
     * Find zero or one DealConfigDeviceBasket that matches the filter.
     * @param {DealConfigDeviceBasketFindUniqueArgs} args - Arguments to find a DealConfigDeviceBasket
     * @example
     * // Get one DealConfigDeviceBasket
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealConfigDeviceBasketFindUniqueArgs>(args: SelectSubset<T, DealConfigDeviceBasketFindUniqueArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DealConfigDeviceBasket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DealConfigDeviceBasketFindUniqueOrThrowArgs} args - Arguments to find a DealConfigDeviceBasket
     * @example
     * // Get one DealConfigDeviceBasket
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealConfigDeviceBasketFindUniqueOrThrowArgs>(args: SelectSubset<T, DealConfigDeviceBasketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DealConfigDeviceBasket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketFindFirstArgs} args - Arguments to find a DealConfigDeviceBasket
     * @example
     * // Get one DealConfigDeviceBasket
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealConfigDeviceBasketFindFirstArgs>(args?: SelectSubset<T, DealConfigDeviceBasketFindFirstArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DealConfigDeviceBasket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketFindFirstOrThrowArgs} args - Arguments to find a DealConfigDeviceBasket
     * @example
     * // Get one DealConfigDeviceBasket
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealConfigDeviceBasketFindFirstOrThrowArgs>(args?: SelectSubset<T, DealConfigDeviceBasketFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DealConfigDeviceBaskets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealConfigDeviceBaskets
     * const dealConfigDeviceBaskets = await prisma.dealConfigDeviceBasket.findMany()
     * 
     * // Get first 10 DealConfigDeviceBaskets
     * const dealConfigDeviceBaskets = await prisma.dealConfigDeviceBasket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealConfigDeviceBasketWithIdOnly = await prisma.dealConfigDeviceBasket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealConfigDeviceBasketFindManyArgs>(args?: SelectSubset<T, DealConfigDeviceBasketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DealConfigDeviceBasket.
     * @param {DealConfigDeviceBasketCreateArgs} args - Arguments to create a DealConfigDeviceBasket.
     * @example
     * // Create one DealConfigDeviceBasket
     * const DealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.create({
     *   data: {
     *     // ... data to create a DealConfigDeviceBasket
     *   }
     * })
     * 
     */
    create<T extends DealConfigDeviceBasketCreateArgs>(args: SelectSubset<T, DealConfigDeviceBasketCreateArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DealConfigDeviceBaskets.
     * @param {DealConfigDeviceBasketCreateManyArgs} args - Arguments to create many DealConfigDeviceBaskets.
     * @example
     * // Create many DealConfigDeviceBaskets
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealConfigDeviceBasketCreateManyArgs>(args?: SelectSubset<T, DealConfigDeviceBasketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealConfigDeviceBaskets and returns the data saved in the database.
     * @param {DealConfigDeviceBasketCreateManyAndReturnArgs} args - Arguments to create many DealConfigDeviceBaskets.
     * @example
     * // Create many DealConfigDeviceBaskets
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealConfigDeviceBaskets and only return the `id`
     * const dealConfigDeviceBasketWithIdOnly = await prisma.dealConfigDeviceBasket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealConfigDeviceBasketCreateManyAndReturnArgs>(args?: SelectSubset<T, DealConfigDeviceBasketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DealConfigDeviceBasket.
     * @param {DealConfigDeviceBasketDeleteArgs} args - Arguments to delete one DealConfigDeviceBasket.
     * @example
     * // Delete one DealConfigDeviceBasket
     * const DealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.delete({
     *   where: {
     *     // ... filter to delete one DealConfigDeviceBasket
     *   }
     * })
     * 
     */
    delete<T extends DealConfigDeviceBasketDeleteArgs>(args: SelectSubset<T, DealConfigDeviceBasketDeleteArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DealConfigDeviceBasket.
     * @param {DealConfigDeviceBasketUpdateArgs} args - Arguments to update one DealConfigDeviceBasket.
     * @example
     * // Update one DealConfigDeviceBasket
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealConfigDeviceBasketUpdateArgs>(args: SelectSubset<T, DealConfigDeviceBasketUpdateArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DealConfigDeviceBaskets.
     * @param {DealConfigDeviceBasketDeleteManyArgs} args - Arguments to filter DealConfigDeviceBaskets to delete.
     * @example
     * // Delete a few DealConfigDeviceBaskets
     * const { count } = await prisma.dealConfigDeviceBasket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealConfigDeviceBasketDeleteManyArgs>(args?: SelectSubset<T, DealConfigDeviceBasketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealConfigDeviceBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealConfigDeviceBaskets
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealConfigDeviceBasketUpdateManyArgs>(args: SelectSubset<T, DealConfigDeviceBasketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DealConfigDeviceBasket.
     * @param {DealConfigDeviceBasketUpsertArgs} args - Arguments to update or create a DealConfigDeviceBasket.
     * @example
     * // Update or create a DealConfigDeviceBasket
     * const dealConfigDeviceBasket = await prisma.dealConfigDeviceBasket.upsert({
     *   create: {
     *     // ... data to create a DealConfigDeviceBasket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealConfigDeviceBasket we want to update
     *   }
     * })
     */
    upsert<T extends DealConfigDeviceBasketUpsertArgs>(args: SelectSubset<T, DealConfigDeviceBasketUpsertArgs<ExtArgs>>): Prisma__DealConfigDeviceBasketClient<$Result.GetResult<Prisma.$DealConfigDeviceBasketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DealConfigDeviceBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketCountArgs} args - Arguments to filter DealConfigDeviceBaskets to count.
     * @example
     * // Count the number of DealConfigDeviceBaskets
     * const count = await prisma.dealConfigDeviceBasket.count({
     *   where: {
     *     // ... the filter for the DealConfigDeviceBaskets we want to count
     *   }
     * })
    **/
    count<T extends DealConfigDeviceBasketCountArgs>(
      args?: Subset<T, DealConfigDeviceBasketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealConfigDeviceBasketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealConfigDeviceBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealConfigDeviceBasketAggregateArgs>(args: Subset<T, DealConfigDeviceBasketAggregateArgs>): Prisma.PrismaPromise<GetDealConfigDeviceBasketAggregateType<T>>

    /**
     * Group by DealConfigDeviceBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigDeviceBasketGroupByArgs} args - Group by arguments.
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
      T extends DealConfigDeviceBasketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealConfigDeviceBasketGroupByArgs['orderBy'] }
        : { orderBy?: DealConfigDeviceBasketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DealConfigDeviceBasketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealConfigDeviceBasketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealConfigDeviceBasket model
   */
  readonly fields: DealConfigDeviceBasketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealConfigDeviceBasket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealConfigDeviceBasketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealConfig<T extends CycleDealConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDealConfigDefaultArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DealConfigDeviceBasket model
   */ 
  interface DealConfigDeviceBasketFieldRefs {
    readonly id: FieldRef<"DealConfigDeviceBasket", 'String'>
    readonly dealConfigId: FieldRef<"DealConfigDeviceBasket", 'String'>
    readonly deviceId: FieldRef<"DealConfigDeviceBasket", 'String'>
    readonly deviceModel: FieldRef<"DealConfigDeviceBasket", 'String'>
    readonly handsetCost: FieldRef<"DealConfigDeviceBasket", 'Decimal'>
    readonly retailPrice: FieldRef<"DealConfigDeviceBasket", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DealConfigDeviceBasket findUnique
   */
  export type DealConfigDeviceBasketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigDeviceBasket to fetch.
     */
    where: DealConfigDeviceBasketWhereUniqueInput
  }

  /**
   * DealConfigDeviceBasket findUniqueOrThrow
   */
  export type DealConfigDeviceBasketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigDeviceBasket to fetch.
     */
    where: DealConfigDeviceBasketWhereUniqueInput
  }

  /**
   * DealConfigDeviceBasket findFirst
   */
  export type DealConfigDeviceBasketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigDeviceBasket to fetch.
     */
    where?: DealConfigDeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigDeviceBaskets to fetch.
     */
    orderBy?: DealConfigDeviceBasketOrderByWithRelationInput | DealConfigDeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealConfigDeviceBaskets.
     */
    cursor?: DealConfigDeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigDeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigDeviceBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealConfigDeviceBaskets.
     */
    distinct?: DealConfigDeviceBasketScalarFieldEnum | DealConfigDeviceBasketScalarFieldEnum[]
  }

  /**
   * DealConfigDeviceBasket findFirstOrThrow
   */
  export type DealConfigDeviceBasketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigDeviceBasket to fetch.
     */
    where?: DealConfigDeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigDeviceBaskets to fetch.
     */
    orderBy?: DealConfigDeviceBasketOrderByWithRelationInput | DealConfigDeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealConfigDeviceBaskets.
     */
    cursor?: DealConfigDeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigDeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigDeviceBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealConfigDeviceBaskets.
     */
    distinct?: DealConfigDeviceBasketScalarFieldEnum | DealConfigDeviceBasketScalarFieldEnum[]
  }

  /**
   * DealConfigDeviceBasket findMany
   */
  export type DealConfigDeviceBasketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigDeviceBaskets to fetch.
     */
    where?: DealConfigDeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigDeviceBaskets to fetch.
     */
    orderBy?: DealConfigDeviceBasketOrderByWithRelationInput | DealConfigDeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealConfigDeviceBaskets.
     */
    cursor?: DealConfigDeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigDeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigDeviceBaskets.
     */
    skip?: number
    distinct?: DealConfigDeviceBasketScalarFieldEnum | DealConfigDeviceBasketScalarFieldEnum[]
  }

  /**
   * DealConfigDeviceBasket create
   */
  export type DealConfigDeviceBasketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * The data needed to create a DealConfigDeviceBasket.
     */
    data: XOR<DealConfigDeviceBasketCreateInput, DealConfigDeviceBasketUncheckedCreateInput>
  }

  /**
   * DealConfigDeviceBasket createMany
   */
  export type DealConfigDeviceBasketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealConfigDeviceBaskets.
     */
    data: DealConfigDeviceBasketCreateManyInput | DealConfigDeviceBasketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealConfigDeviceBasket createManyAndReturn
   */
  export type DealConfigDeviceBasketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DealConfigDeviceBaskets.
     */
    data: DealConfigDeviceBasketCreateManyInput | DealConfigDeviceBasketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealConfigDeviceBasket update
   */
  export type DealConfigDeviceBasketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * The data needed to update a DealConfigDeviceBasket.
     */
    data: XOR<DealConfigDeviceBasketUpdateInput, DealConfigDeviceBasketUncheckedUpdateInput>
    /**
     * Choose, which DealConfigDeviceBasket to update.
     */
    where: DealConfigDeviceBasketWhereUniqueInput
  }

  /**
   * DealConfigDeviceBasket updateMany
   */
  export type DealConfigDeviceBasketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealConfigDeviceBaskets.
     */
    data: XOR<DealConfigDeviceBasketUpdateManyMutationInput, DealConfigDeviceBasketUncheckedUpdateManyInput>
    /**
     * Filter which DealConfigDeviceBaskets to update
     */
    where?: DealConfigDeviceBasketWhereInput
  }

  /**
   * DealConfigDeviceBasket upsert
   */
  export type DealConfigDeviceBasketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * The filter to search for the DealConfigDeviceBasket to update in case it exists.
     */
    where: DealConfigDeviceBasketWhereUniqueInput
    /**
     * In case the DealConfigDeviceBasket found by the `where` argument doesn't exist, create a new DealConfigDeviceBasket with this data.
     */
    create: XOR<DealConfigDeviceBasketCreateInput, DealConfigDeviceBasketUncheckedCreateInput>
    /**
     * In case the DealConfigDeviceBasket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealConfigDeviceBasketUpdateInput, DealConfigDeviceBasketUncheckedUpdateInput>
  }

  /**
   * DealConfigDeviceBasket delete
   */
  export type DealConfigDeviceBasketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
    /**
     * Filter which DealConfigDeviceBasket to delete.
     */
    where: DealConfigDeviceBasketWhereUniqueInput
  }

  /**
   * DealConfigDeviceBasket deleteMany
   */
  export type DealConfigDeviceBasketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealConfigDeviceBaskets to delete
     */
    where?: DealConfigDeviceBasketWhereInput
  }

  /**
   * DealConfigDeviceBasket without action
   */
  export type DealConfigDeviceBasketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigDeviceBasket
     */
    select?: DealConfigDeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigDeviceBasketInclude<ExtArgs> | null
  }


  /**
   * Model DealConfigVas
   */

  export type AggregateDealConfigVas = {
    _count: DealConfigVasCountAggregateOutputType | null
    _avg: DealConfigVasAvgAggregateOutputType | null
    _sum: DealConfigVasSumAggregateOutputType | null
    _min: DealConfigVasMinAggregateOutputType | null
    _max: DealConfigVasMaxAggregateOutputType | null
  }

  export type DealConfigVasAvgAggregateOutputType = {
    monthlyCost: Decimal | null
  }

  export type DealConfigVasSumAggregateOutputType = {
    monthlyCost: Decimal | null
  }

  export type DealConfigVasMinAggregateOutputType = {
    id: string | null
    dealConfigId: string | null
    vasId: string | null
    vasName: string | null
    monthlyCost: Decimal | null
  }

  export type DealConfigVasMaxAggregateOutputType = {
    id: string | null
    dealConfigId: string | null
    vasId: string | null
    vasName: string | null
    monthlyCost: Decimal | null
  }

  export type DealConfigVasCountAggregateOutputType = {
    id: number
    dealConfigId: number
    vasId: number
    vasName: number
    monthlyCost: number
    _all: number
  }


  export type DealConfigVasAvgAggregateInputType = {
    monthlyCost?: true
  }

  export type DealConfigVasSumAggregateInputType = {
    monthlyCost?: true
  }

  export type DealConfigVasMinAggregateInputType = {
    id?: true
    dealConfigId?: true
    vasId?: true
    vasName?: true
    monthlyCost?: true
  }

  export type DealConfigVasMaxAggregateInputType = {
    id?: true
    dealConfigId?: true
    vasId?: true
    vasName?: true
    monthlyCost?: true
  }

  export type DealConfigVasCountAggregateInputType = {
    id?: true
    dealConfigId?: true
    vasId?: true
    vasName?: true
    monthlyCost?: true
    _all?: true
  }

  export type DealConfigVasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealConfigVas to aggregate.
     */
    where?: DealConfigVasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigVas to fetch.
     */
    orderBy?: DealConfigVasOrderByWithRelationInput | DealConfigVasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealConfigVasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigVas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigVas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealConfigVas
    **/
    _count?: true | DealConfigVasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealConfigVasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealConfigVasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealConfigVasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealConfigVasMaxAggregateInputType
  }

  export type GetDealConfigVasAggregateType<T extends DealConfigVasAggregateArgs> = {
        [P in keyof T & keyof AggregateDealConfigVas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealConfigVas[P]>
      : GetScalarType<T[P], AggregateDealConfigVas[P]>
  }




  export type DealConfigVasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealConfigVasWhereInput
    orderBy?: DealConfigVasOrderByWithAggregationInput | DealConfigVasOrderByWithAggregationInput[]
    by: DealConfigVasScalarFieldEnum[] | DealConfigVasScalarFieldEnum
    having?: DealConfigVasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealConfigVasCountAggregateInputType | true
    _avg?: DealConfigVasAvgAggregateInputType
    _sum?: DealConfigVasSumAggregateInputType
    _min?: DealConfigVasMinAggregateInputType
    _max?: DealConfigVasMaxAggregateInputType
  }

  export type DealConfigVasGroupByOutputType = {
    id: string
    dealConfigId: string
    vasId: string
    vasName: string
    monthlyCost: Decimal
    _count: DealConfigVasCountAggregateOutputType | null
    _avg: DealConfigVasAvgAggregateOutputType | null
    _sum: DealConfigVasSumAggregateOutputType | null
    _min: DealConfigVasMinAggregateOutputType | null
    _max: DealConfigVasMaxAggregateOutputType | null
  }

  type GetDealConfigVasGroupByPayload<T extends DealConfigVasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealConfigVasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealConfigVasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealConfigVasGroupByOutputType[P]>
            : GetScalarType<T[P], DealConfigVasGroupByOutputType[P]>
        }
      >
    >


  export type DealConfigVasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealConfigId?: boolean
    vasId?: boolean
    vasName?: boolean
    monthlyCost?: boolean
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealConfigVas"]>

  export type DealConfigVasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealConfigId?: boolean
    vasId?: boolean
    vasName?: boolean
    monthlyCost?: boolean
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealConfigVas"]>

  export type DealConfigVasSelectScalar = {
    id?: boolean
    dealConfigId?: boolean
    vasId?: boolean
    vasName?: boolean
    monthlyCost?: boolean
  }

  export type DealConfigVasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }
  export type DealConfigVasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealConfig?: boolean | CycleDealConfigDefaultArgs<ExtArgs>
  }

  export type $DealConfigVasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealConfigVas"
    objects: {
      dealConfig: Prisma.$CycleDealConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealConfigId: string
      vasId: string
      vasName: string
      monthlyCost: Prisma.Decimal
    }, ExtArgs["result"]["dealConfigVas"]>
    composites: {}
  }

  type DealConfigVasGetPayload<S extends boolean | null | undefined | DealConfigVasDefaultArgs> = $Result.GetResult<Prisma.$DealConfigVasPayload, S>

  type DealConfigVasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DealConfigVasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DealConfigVasCountAggregateInputType | true
    }

  export interface DealConfigVasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealConfigVas'], meta: { name: 'DealConfigVas' } }
    /**
     * Find zero or one DealConfigVas that matches the filter.
     * @param {DealConfigVasFindUniqueArgs} args - Arguments to find a DealConfigVas
     * @example
     * // Get one DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealConfigVasFindUniqueArgs>(args: SelectSubset<T, DealConfigVasFindUniqueArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DealConfigVas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DealConfigVasFindUniqueOrThrowArgs} args - Arguments to find a DealConfigVas
     * @example
     * // Get one DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealConfigVasFindUniqueOrThrowArgs>(args: SelectSubset<T, DealConfigVasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DealConfigVas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasFindFirstArgs} args - Arguments to find a DealConfigVas
     * @example
     * // Get one DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealConfigVasFindFirstArgs>(args?: SelectSubset<T, DealConfigVasFindFirstArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DealConfigVas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasFindFirstOrThrowArgs} args - Arguments to find a DealConfigVas
     * @example
     * // Get one DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealConfigVasFindFirstOrThrowArgs>(args?: SelectSubset<T, DealConfigVasFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DealConfigVas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.findMany()
     * 
     * // Get first 10 DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealConfigVasWithIdOnly = await prisma.dealConfigVas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealConfigVasFindManyArgs>(args?: SelectSubset<T, DealConfigVasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DealConfigVas.
     * @param {DealConfigVasCreateArgs} args - Arguments to create a DealConfigVas.
     * @example
     * // Create one DealConfigVas
     * const DealConfigVas = await prisma.dealConfigVas.create({
     *   data: {
     *     // ... data to create a DealConfigVas
     *   }
     * })
     * 
     */
    create<T extends DealConfigVasCreateArgs>(args: SelectSubset<T, DealConfigVasCreateArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DealConfigVas.
     * @param {DealConfigVasCreateManyArgs} args - Arguments to create many DealConfigVas.
     * @example
     * // Create many DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealConfigVasCreateManyArgs>(args?: SelectSubset<T, DealConfigVasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealConfigVas and returns the data saved in the database.
     * @param {DealConfigVasCreateManyAndReturnArgs} args - Arguments to create many DealConfigVas.
     * @example
     * // Create many DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealConfigVas and only return the `id`
     * const dealConfigVasWithIdOnly = await prisma.dealConfigVas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealConfigVasCreateManyAndReturnArgs>(args?: SelectSubset<T, DealConfigVasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DealConfigVas.
     * @param {DealConfigVasDeleteArgs} args - Arguments to delete one DealConfigVas.
     * @example
     * // Delete one DealConfigVas
     * const DealConfigVas = await prisma.dealConfigVas.delete({
     *   where: {
     *     // ... filter to delete one DealConfigVas
     *   }
     * })
     * 
     */
    delete<T extends DealConfigVasDeleteArgs>(args: SelectSubset<T, DealConfigVasDeleteArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DealConfigVas.
     * @param {DealConfigVasUpdateArgs} args - Arguments to update one DealConfigVas.
     * @example
     * // Update one DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealConfigVasUpdateArgs>(args: SelectSubset<T, DealConfigVasUpdateArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DealConfigVas.
     * @param {DealConfigVasDeleteManyArgs} args - Arguments to filter DealConfigVas to delete.
     * @example
     * // Delete a few DealConfigVas
     * const { count } = await prisma.dealConfigVas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealConfigVasDeleteManyArgs>(args?: SelectSubset<T, DealConfigVasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealConfigVas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealConfigVasUpdateManyArgs>(args: SelectSubset<T, DealConfigVasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DealConfigVas.
     * @param {DealConfigVasUpsertArgs} args - Arguments to update or create a DealConfigVas.
     * @example
     * // Update or create a DealConfigVas
     * const dealConfigVas = await prisma.dealConfigVas.upsert({
     *   create: {
     *     // ... data to create a DealConfigVas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealConfigVas we want to update
     *   }
     * })
     */
    upsert<T extends DealConfigVasUpsertArgs>(args: SelectSubset<T, DealConfigVasUpsertArgs<ExtArgs>>): Prisma__DealConfigVasClient<$Result.GetResult<Prisma.$DealConfigVasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DealConfigVas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasCountArgs} args - Arguments to filter DealConfigVas to count.
     * @example
     * // Count the number of DealConfigVas
     * const count = await prisma.dealConfigVas.count({
     *   where: {
     *     // ... the filter for the DealConfigVas we want to count
     *   }
     * })
    **/
    count<T extends DealConfigVasCountArgs>(
      args?: Subset<T, DealConfigVasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealConfigVasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealConfigVas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealConfigVasAggregateArgs>(args: Subset<T, DealConfigVasAggregateArgs>): Prisma.PrismaPromise<GetDealConfigVasAggregateType<T>>

    /**
     * Group by DealConfigVas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealConfigVasGroupByArgs} args - Group by arguments.
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
      T extends DealConfigVasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealConfigVasGroupByArgs['orderBy'] }
        : { orderBy?: DealConfigVasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DealConfigVasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealConfigVasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealConfigVas model
   */
  readonly fields: DealConfigVasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealConfigVas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealConfigVasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealConfig<T extends CycleDealConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDealConfigDefaultArgs<ExtArgs>>): Prisma__CycleDealConfigClient<$Result.GetResult<Prisma.$CycleDealConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DealConfigVas model
   */ 
  interface DealConfigVasFieldRefs {
    readonly id: FieldRef<"DealConfigVas", 'String'>
    readonly dealConfigId: FieldRef<"DealConfigVas", 'String'>
    readonly vasId: FieldRef<"DealConfigVas", 'String'>
    readonly vasName: FieldRef<"DealConfigVas", 'String'>
    readonly monthlyCost: FieldRef<"DealConfigVas", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DealConfigVas findUnique
   */
  export type DealConfigVasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigVas to fetch.
     */
    where: DealConfigVasWhereUniqueInput
  }

  /**
   * DealConfigVas findUniqueOrThrow
   */
  export type DealConfigVasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigVas to fetch.
     */
    where: DealConfigVasWhereUniqueInput
  }

  /**
   * DealConfigVas findFirst
   */
  export type DealConfigVasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigVas to fetch.
     */
    where?: DealConfigVasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigVas to fetch.
     */
    orderBy?: DealConfigVasOrderByWithRelationInput | DealConfigVasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealConfigVas.
     */
    cursor?: DealConfigVasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigVas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigVas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealConfigVas.
     */
    distinct?: DealConfigVasScalarFieldEnum | DealConfigVasScalarFieldEnum[]
  }

  /**
   * DealConfigVas findFirstOrThrow
   */
  export type DealConfigVasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigVas to fetch.
     */
    where?: DealConfigVasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigVas to fetch.
     */
    orderBy?: DealConfigVasOrderByWithRelationInput | DealConfigVasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealConfigVas.
     */
    cursor?: DealConfigVasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigVas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigVas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealConfigVas.
     */
    distinct?: DealConfigVasScalarFieldEnum | DealConfigVasScalarFieldEnum[]
  }

  /**
   * DealConfigVas findMany
   */
  export type DealConfigVasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * Filter, which DealConfigVas to fetch.
     */
    where?: DealConfigVasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealConfigVas to fetch.
     */
    orderBy?: DealConfigVasOrderByWithRelationInput | DealConfigVasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealConfigVas.
     */
    cursor?: DealConfigVasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealConfigVas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealConfigVas.
     */
    skip?: number
    distinct?: DealConfigVasScalarFieldEnum | DealConfigVasScalarFieldEnum[]
  }

  /**
   * DealConfigVas create
   */
  export type DealConfigVasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * The data needed to create a DealConfigVas.
     */
    data: XOR<DealConfigVasCreateInput, DealConfigVasUncheckedCreateInput>
  }

  /**
   * DealConfigVas createMany
   */
  export type DealConfigVasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealConfigVas.
     */
    data: DealConfigVasCreateManyInput | DealConfigVasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealConfigVas createManyAndReturn
   */
  export type DealConfigVasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DealConfigVas.
     */
    data: DealConfigVasCreateManyInput | DealConfigVasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealConfigVas update
   */
  export type DealConfigVasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * The data needed to update a DealConfigVas.
     */
    data: XOR<DealConfigVasUpdateInput, DealConfigVasUncheckedUpdateInput>
    /**
     * Choose, which DealConfigVas to update.
     */
    where: DealConfigVasWhereUniqueInput
  }

  /**
   * DealConfigVas updateMany
   */
  export type DealConfigVasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealConfigVas.
     */
    data: XOR<DealConfigVasUpdateManyMutationInput, DealConfigVasUncheckedUpdateManyInput>
    /**
     * Filter which DealConfigVas to update
     */
    where?: DealConfigVasWhereInput
  }

  /**
   * DealConfigVas upsert
   */
  export type DealConfigVasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * The filter to search for the DealConfigVas to update in case it exists.
     */
    where: DealConfigVasWhereUniqueInput
    /**
     * In case the DealConfigVas found by the `where` argument doesn't exist, create a new DealConfigVas with this data.
     */
    create: XOR<DealConfigVasCreateInput, DealConfigVasUncheckedCreateInput>
    /**
     * In case the DealConfigVas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealConfigVasUpdateInput, DealConfigVasUncheckedUpdateInput>
  }

  /**
   * DealConfigVas delete
   */
  export type DealConfigVasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
    /**
     * Filter which DealConfigVas to delete.
     */
    where: DealConfigVasWhereUniqueInput
  }

  /**
   * DealConfigVas deleteMany
   */
  export type DealConfigVasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealConfigVas to delete
     */
    where?: DealConfigVasWhereInput
  }

  /**
   * DealConfigVas without action
   */
  export type DealConfigVasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealConfigVas
     */
    select?: DealConfigVasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealConfigVasInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    name: string | null
    description: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    name: string | null
    description: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    cycleId: number
    name: number
    description: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    cycleId?: true
    name?: true
    description?: true
    createdBy?: true
    createdAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    cycleId?: true
    name?: true
    description?: true
    createdBy?: true
    createdAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    cycleId?: true
    name?: true
    description?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    cycleId: string
    name: string
    description: string | null
    createdBy: string
    createdAt: Date
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    cycleId?: boolean
    name?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cycle?: boolean | CycleDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      cycle: Prisma.$CyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string
      name: string
      description: string | null
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cycle<T extends CycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CycleDefaultArgs<ExtArgs>>): Prisma__CycleClient<$Result.GetResult<Prisma.$CyclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly cycleId: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly createdBy: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
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


  export const CfgBusinessUnitScalarFieldEnum: {
    id: 'id',
    code: 'code',
    displayName: 'displayName',
    createdAt: 'createdAt'
  };

  export type CfgBusinessUnitScalarFieldEnum = (typeof CfgBusinessUnitScalarFieldEnum)[keyof typeof CfgBusinessUnitScalarFieldEnum]


  export const CycleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    businessUnitId: 'businessUnitId',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    description: 'description',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    version: 'version',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CycleScalarFieldEnum = (typeof CycleScalarFieldEnum)[keyof typeof CycleScalarFieldEnum]


  export const CycleStatusHistoryScalarFieldEnum: {
    id: 'id',
    cycleId: 'cycleId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    changedBy: 'changedBy',
    reason: 'reason',
    correlationId: 'correlationId',
    createdAt: 'createdAt'
  };

  export type CycleStatusHistoryScalarFieldEnum = (typeof CycleStatusHistoryScalarFieldEnum)[keyof typeof CycleStatusHistoryScalarFieldEnum]


  export const CycleDealConfigScalarFieldEnum: {
    id: 'id',
    cycleId: 'cycleId',
    selectedTerms: 'selectedTerms',
    ctcCeiling: 'ctcCeiling',
    ctdCeiling: 'ctdCeiling',
    notes: 'notes',
    submittedBy: 'submittedBy',
    submittedAt: 'submittedAt'
  };

  export type CycleDealConfigScalarFieldEnum = (typeof CycleDealConfigScalarFieldEnum)[keyof typeof CycleDealConfigScalarFieldEnum]


  export const DealConfigTariffBasketScalarFieldEnum: {
    id: 'id',
    dealConfigId: 'dealConfigId',
    tariffId: 'tariffId',
    tariffCode: 'tariffCode',
    monthlyFee: 'monthlyFee',
    term: 'term'
  };

  export type DealConfigTariffBasketScalarFieldEnum = (typeof DealConfigTariffBasketScalarFieldEnum)[keyof typeof DealConfigTariffBasketScalarFieldEnum]


  export const DealConfigDeviceBasketScalarFieldEnum: {
    id: 'id',
    dealConfigId: 'dealConfigId',
    deviceId: 'deviceId',
    deviceModel: 'deviceModel',
    handsetCost: 'handsetCost',
    retailPrice: 'retailPrice'
  };

  export type DealConfigDeviceBasketScalarFieldEnum = (typeof DealConfigDeviceBasketScalarFieldEnum)[keyof typeof DealConfigDeviceBasketScalarFieldEnum]


  export const DealConfigVasScalarFieldEnum: {
    id: 'id',
    dealConfigId: 'dealConfigId',
    vasId: 'vasId',
    vasName: 'vasName',
    monthlyCost: 'monthlyCost'
  };

  export type DealConfigVasScalarFieldEnum = (typeof DealConfigVasScalarFieldEnum)[keyof typeof DealConfigVasScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    cycleId: 'cycleId',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type CfgBusinessUnitWhereInput = {
    AND?: CfgBusinessUnitWhereInput | CfgBusinessUnitWhereInput[]
    OR?: CfgBusinessUnitWhereInput[]
    NOT?: CfgBusinessUnitWhereInput | CfgBusinessUnitWhereInput[]
    id?: StringFilter<"CfgBusinessUnit"> | string
    code?: StringFilter<"CfgBusinessUnit"> | string
    displayName?: StringFilter<"CfgBusinessUnit"> | string
    createdAt?: DateTimeFilter<"CfgBusinessUnit"> | Date | string
    cycles?: CycleListRelationFilter
  }

  export type CfgBusinessUnitOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    cycles?: CycleOrderByRelationAggregateInput
  }

  export type CfgBusinessUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CfgBusinessUnitWhereInput | CfgBusinessUnitWhereInput[]
    OR?: CfgBusinessUnitWhereInput[]
    NOT?: CfgBusinessUnitWhereInput | CfgBusinessUnitWhereInput[]
    displayName?: StringFilter<"CfgBusinessUnit"> | string
    createdAt?: DateTimeFilter<"CfgBusinessUnit"> | Date | string
    cycles?: CycleListRelationFilter
  }, "id" | "code">

  export type CfgBusinessUnitOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    _count?: CfgBusinessUnitCountOrderByAggregateInput
    _max?: CfgBusinessUnitMaxOrderByAggregateInput
    _min?: CfgBusinessUnitMinOrderByAggregateInput
  }

  export type CfgBusinessUnitScalarWhereWithAggregatesInput = {
    AND?: CfgBusinessUnitScalarWhereWithAggregatesInput | CfgBusinessUnitScalarWhereWithAggregatesInput[]
    OR?: CfgBusinessUnitScalarWhereWithAggregatesInput[]
    NOT?: CfgBusinessUnitScalarWhereWithAggregatesInput | CfgBusinessUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CfgBusinessUnit"> | string
    code?: StringWithAggregatesFilter<"CfgBusinessUnit"> | string
    displayName?: StringWithAggregatesFilter<"CfgBusinessUnit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CfgBusinessUnit"> | Date | string
  }

  export type CycleWhereInput = {
    AND?: CycleWhereInput | CycleWhereInput[]
    OR?: CycleWhereInput[]
    NOT?: CycleWhereInput | CycleWhereInput[]
    id?: StringFilter<"Cycle"> | string
    name?: StringFilter<"Cycle"> | string
    businessUnitId?: StringFilter<"Cycle"> | string
    startDate?: DateTimeFilter<"Cycle"> | Date | string
    endDate?: DateTimeFilter<"Cycle"> | Date | string
    status?: StringFilter<"Cycle"> | string
    description?: StringNullableFilter<"Cycle"> | string | null
    createdBy?: StringFilter<"Cycle"> | string
    updatedBy?: StringNullableFilter<"Cycle"> | string | null
    version?: IntFilter<"Cycle"> | number
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
    businessUnit?: XOR<CfgBusinessUnitRelationFilter, CfgBusinessUnitWhereInput>
    statusHistory?: CycleStatusHistoryListRelationFilter
    dealConfig?: XOR<CycleDealConfigNullableRelationFilter, CycleDealConfigWhereInput> | null
    campaigns?: CampaignListRelationFilter
  }

  export type CycleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    businessUnitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessUnit?: CfgBusinessUnitOrderByWithRelationInput
    statusHistory?: CycleStatusHistoryOrderByRelationAggregateInput
    dealConfig?: CycleDealConfigOrderByWithRelationInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type CycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CycleWhereInput | CycleWhereInput[]
    OR?: CycleWhereInput[]
    NOT?: CycleWhereInput | CycleWhereInput[]
    name?: StringFilter<"Cycle"> | string
    businessUnitId?: StringFilter<"Cycle"> | string
    startDate?: DateTimeFilter<"Cycle"> | Date | string
    endDate?: DateTimeFilter<"Cycle"> | Date | string
    status?: StringFilter<"Cycle"> | string
    description?: StringNullableFilter<"Cycle"> | string | null
    createdBy?: StringFilter<"Cycle"> | string
    updatedBy?: StringNullableFilter<"Cycle"> | string | null
    version?: IntFilter<"Cycle"> | number
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
    businessUnit?: XOR<CfgBusinessUnitRelationFilter, CfgBusinessUnitWhereInput>
    statusHistory?: CycleStatusHistoryListRelationFilter
    dealConfig?: XOR<CycleDealConfigNullableRelationFilter, CycleDealConfigWhereInput> | null
    campaigns?: CampaignListRelationFilter
  }, "id">

  export type CycleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    businessUnitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CycleCountOrderByAggregateInput
    _avg?: CycleAvgOrderByAggregateInput
    _max?: CycleMaxOrderByAggregateInput
    _min?: CycleMinOrderByAggregateInput
    _sum?: CycleSumOrderByAggregateInput
  }

  export type CycleScalarWhereWithAggregatesInput = {
    AND?: CycleScalarWhereWithAggregatesInput | CycleScalarWhereWithAggregatesInput[]
    OR?: CycleScalarWhereWithAggregatesInput[]
    NOT?: CycleScalarWhereWithAggregatesInput | CycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cycle"> | string
    name?: StringWithAggregatesFilter<"Cycle"> | string
    businessUnitId?: StringWithAggregatesFilter<"Cycle"> | string
    startDate?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    status?: StringWithAggregatesFilter<"Cycle"> | string
    description?: StringNullableWithAggregatesFilter<"Cycle"> | string | null
    createdBy?: StringWithAggregatesFilter<"Cycle"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"Cycle"> | string | null
    version?: IntWithAggregatesFilter<"Cycle"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cycle"> | Date | string
  }

  export type CycleStatusHistoryWhereInput = {
    AND?: CycleStatusHistoryWhereInput | CycleStatusHistoryWhereInput[]
    OR?: CycleStatusHistoryWhereInput[]
    NOT?: CycleStatusHistoryWhereInput | CycleStatusHistoryWhereInput[]
    id?: StringFilter<"CycleStatusHistory"> | string
    cycleId?: StringFilter<"CycleStatusHistory"> | string
    fromStatus?: StringFilter<"CycleStatusHistory"> | string
    toStatus?: StringFilter<"CycleStatusHistory"> | string
    changedBy?: StringFilter<"CycleStatusHistory"> | string
    reason?: StringNullableFilter<"CycleStatusHistory"> | string | null
    correlationId?: StringNullableFilter<"CycleStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"CycleStatusHistory"> | Date | string
    cycle?: XOR<CycleRelationFilter, CycleWhereInput>
  }

  export type CycleStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cycle?: CycleOrderByWithRelationInput
  }

  export type CycleStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CycleStatusHistoryWhereInput | CycleStatusHistoryWhereInput[]
    OR?: CycleStatusHistoryWhereInput[]
    NOT?: CycleStatusHistoryWhereInput | CycleStatusHistoryWhereInput[]
    cycleId?: StringFilter<"CycleStatusHistory"> | string
    fromStatus?: StringFilter<"CycleStatusHistory"> | string
    toStatus?: StringFilter<"CycleStatusHistory"> | string
    changedBy?: StringFilter<"CycleStatusHistory"> | string
    reason?: StringNullableFilter<"CycleStatusHistory"> | string | null
    correlationId?: StringNullableFilter<"CycleStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"CycleStatusHistory"> | Date | string
    cycle?: XOR<CycleRelationFilter, CycleWhereInput>
  }, "id">

  export type CycleStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CycleStatusHistoryCountOrderByAggregateInput
    _max?: CycleStatusHistoryMaxOrderByAggregateInput
    _min?: CycleStatusHistoryMinOrderByAggregateInput
  }

  export type CycleStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: CycleStatusHistoryScalarWhereWithAggregatesInput | CycleStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: CycleStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: CycleStatusHistoryScalarWhereWithAggregatesInput | CycleStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CycleStatusHistory"> | string
    cycleId?: StringWithAggregatesFilter<"CycleStatusHistory"> | string
    fromStatus?: StringWithAggregatesFilter<"CycleStatusHistory"> | string
    toStatus?: StringWithAggregatesFilter<"CycleStatusHistory"> | string
    changedBy?: StringWithAggregatesFilter<"CycleStatusHistory"> | string
    reason?: StringNullableWithAggregatesFilter<"CycleStatusHistory"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"CycleStatusHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CycleStatusHistory"> | Date | string
  }

  export type CycleDealConfigWhereInput = {
    AND?: CycleDealConfigWhereInput | CycleDealConfigWhereInput[]
    OR?: CycleDealConfigWhereInput[]
    NOT?: CycleDealConfigWhereInput | CycleDealConfigWhereInput[]
    id?: StringFilter<"CycleDealConfig"> | string
    cycleId?: StringFilter<"CycleDealConfig"> | string
    selectedTerms?: StringNullableListFilter<"CycleDealConfig">
    ctcCeiling?: DecimalFilter<"CycleDealConfig"> | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFilter<"CycleDealConfig"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"CycleDealConfig"> | string | null
    submittedBy?: StringFilter<"CycleDealConfig"> | string
    submittedAt?: DateTimeFilter<"CycleDealConfig"> | Date | string
    cycle?: XOR<CycleRelationFilter, CycleWhereInput>
    tariffBaskets?: DealConfigTariffBasketListRelationFilter
    deviceBaskets?: DealConfigDeviceBasketListRelationFilter
    vasItems?: DealConfigVasListRelationFilter
  }

  export type CycleDealConfigOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    selectedTerms?: SortOrder
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    cycle?: CycleOrderByWithRelationInput
    tariffBaskets?: DealConfigTariffBasketOrderByRelationAggregateInput
    deviceBaskets?: DealConfigDeviceBasketOrderByRelationAggregateInput
    vasItems?: DealConfigVasOrderByRelationAggregateInput
  }

  export type CycleDealConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cycleId?: string
    AND?: CycleDealConfigWhereInput | CycleDealConfigWhereInput[]
    OR?: CycleDealConfigWhereInput[]
    NOT?: CycleDealConfigWhereInput | CycleDealConfigWhereInput[]
    selectedTerms?: StringNullableListFilter<"CycleDealConfig">
    ctcCeiling?: DecimalFilter<"CycleDealConfig"> | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFilter<"CycleDealConfig"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"CycleDealConfig"> | string | null
    submittedBy?: StringFilter<"CycleDealConfig"> | string
    submittedAt?: DateTimeFilter<"CycleDealConfig"> | Date | string
    cycle?: XOR<CycleRelationFilter, CycleWhereInput>
    tariffBaskets?: DealConfigTariffBasketListRelationFilter
    deviceBaskets?: DealConfigDeviceBasketListRelationFilter
    vasItems?: DealConfigVasListRelationFilter
  }, "id" | "cycleId">

  export type CycleDealConfigOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    selectedTerms?: SortOrder
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    _count?: CycleDealConfigCountOrderByAggregateInput
    _avg?: CycleDealConfigAvgOrderByAggregateInput
    _max?: CycleDealConfigMaxOrderByAggregateInput
    _min?: CycleDealConfigMinOrderByAggregateInput
    _sum?: CycleDealConfigSumOrderByAggregateInput
  }

  export type CycleDealConfigScalarWhereWithAggregatesInput = {
    AND?: CycleDealConfigScalarWhereWithAggregatesInput | CycleDealConfigScalarWhereWithAggregatesInput[]
    OR?: CycleDealConfigScalarWhereWithAggregatesInput[]
    NOT?: CycleDealConfigScalarWhereWithAggregatesInput | CycleDealConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CycleDealConfig"> | string
    cycleId?: StringWithAggregatesFilter<"CycleDealConfig"> | string
    selectedTerms?: StringNullableListFilter<"CycleDealConfig">
    ctcCeiling?: DecimalWithAggregatesFilter<"CycleDealConfig"> | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalWithAggregatesFilter<"CycleDealConfig"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"CycleDealConfig"> | string | null
    submittedBy?: StringWithAggregatesFilter<"CycleDealConfig"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"CycleDealConfig"> | Date | string
  }

  export type DealConfigTariffBasketWhereInput = {
    AND?: DealConfigTariffBasketWhereInput | DealConfigTariffBasketWhereInput[]
    OR?: DealConfigTariffBasketWhereInput[]
    NOT?: DealConfigTariffBasketWhereInput | DealConfigTariffBasketWhereInput[]
    id?: StringFilter<"DealConfigTariffBasket"> | string
    dealConfigId?: StringFilter<"DealConfigTariffBasket"> | string
    tariffId?: StringFilter<"DealConfigTariffBasket"> | string
    tariffCode?: StringFilter<"DealConfigTariffBasket"> | string
    monthlyFee?: DecimalFilter<"DealConfigTariffBasket"> | Decimal | DecimalJsLike | number | string
    term?: IntFilter<"DealConfigTariffBasket"> | number
    dealConfig?: XOR<CycleDealConfigRelationFilter, CycleDealConfigWhereInput>
  }

  export type DealConfigTariffBasketOrderByWithRelationInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    tariffId?: SortOrder
    tariffCode?: SortOrder
    monthlyFee?: SortOrder
    term?: SortOrder
    dealConfig?: CycleDealConfigOrderByWithRelationInput
  }

  export type DealConfigTariffBasketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealConfigTariffBasketWhereInput | DealConfigTariffBasketWhereInput[]
    OR?: DealConfigTariffBasketWhereInput[]
    NOT?: DealConfigTariffBasketWhereInput | DealConfigTariffBasketWhereInput[]
    dealConfigId?: StringFilter<"DealConfigTariffBasket"> | string
    tariffId?: StringFilter<"DealConfigTariffBasket"> | string
    tariffCode?: StringFilter<"DealConfigTariffBasket"> | string
    monthlyFee?: DecimalFilter<"DealConfigTariffBasket"> | Decimal | DecimalJsLike | number | string
    term?: IntFilter<"DealConfigTariffBasket"> | number
    dealConfig?: XOR<CycleDealConfigRelationFilter, CycleDealConfigWhereInput>
  }, "id">

  export type DealConfigTariffBasketOrderByWithAggregationInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    tariffId?: SortOrder
    tariffCode?: SortOrder
    monthlyFee?: SortOrder
    term?: SortOrder
    _count?: DealConfigTariffBasketCountOrderByAggregateInput
    _avg?: DealConfigTariffBasketAvgOrderByAggregateInput
    _max?: DealConfigTariffBasketMaxOrderByAggregateInput
    _min?: DealConfigTariffBasketMinOrderByAggregateInput
    _sum?: DealConfigTariffBasketSumOrderByAggregateInput
  }

  export type DealConfigTariffBasketScalarWhereWithAggregatesInput = {
    AND?: DealConfigTariffBasketScalarWhereWithAggregatesInput | DealConfigTariffBasketScalarWhereWithAggregatesInput[]
    OR?: DealConfigTariffBasketScalarWhereWithAggregatesInput[]
    NOT?: DealConfigTariffBasketScalarWhereWithAggregatesInput | DealConfigTariffBasketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DealConfigTariffBasket"> | string
    dealConfigId?: StringWithAggregatesFilter<"DealConfigTariffBasket"> | string
    tariffId?: StringWithAggregatesFilter<"DealConfigTariffBasket"> | string
    tariffCode?: StringWithAggregatesFilter<"DealConfigTariffBasket"> | string
    monthlyFee?: DecimalWithAggregatesFilter<"DealConfigTariffBasket"> | Decimal | DecimalJsLike | number | string
    term?: IntWithAggregatesFilter<"DealConfigTariffBasket"> | number
  }

  export type DealConfigDeviceBasketWhereInput = {
    AND?: DealConfigDeviceBasketWhereInput | DealConfigDeviceBasketWhereInput[]
    OR?: DealConfigDeviceBasketWhereInput[]
    NOT?: DealConfigDeviceBasketWhereInput | DealConfigDeviceBasketWhereInput[]
    id?: StringFilter<"DealConfigDeviceBasket"> | string
    dealConfigId?: StringFilter<"DealConfigDeviceBasket"> | string
    deviceId?: StringFilter<"DealConfigDeviceBasket"> | string
    deviceModel?: StringFilter<"DealConfigDeviceBasket"> | string
    handsetCost?: DecimalFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
    dealConfig?: XOR<CycleDealConfigRelationFilter, CycleDealConfigWhereInput>
  }

  export type DealConfigDeviceBasketOrderByWithRelationInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    deviceId?: SortOrder
    deviceModel?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    dealConfig?: CycleDealConfigOrderByWithRelationInput
  }

  export type DealConfigDeviceBasketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealConfigDeviceBasketWhereInput | DealConfigDeviceBasketWhereInput[]
    OR?: DealConfigDeviceBasketWhereInput[]
    NOT?: DealConfigDeviceBasketWhereInput | DealConfigDeviceBasketWhereInput[]
    dealConfigId?: StringFilter<"DealConfigDeviceBasket"> | string
    deviceId?: StringFilter<"DealConfigDeviceBasket"> | string
    deviceModel?: StringFilter<"DealConfigDeviceBasket"> | string
    handsetCost?: DecimalFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
    dealConfig?: XOR<CycleDealConfigRelationFilter, CycleDealConfigWhereInput>
  }, "id">

  export type DealConfigDeviceBasketOrderByWithAggregationInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    deviceId?: SortOrder
    deviceModel?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    _count?: DealConfigDeviceBasketCountOrderByAggregateInput
    _avg?: DealConfigDeviceBasketAvgOrderByAggregateInput
    _max?: DealConfigDeviceBasketMaxOrderByAggregateInput
    _min?: DealConfigDeviceBasketMinOrderByAggregateInput
    _sum?: DealConfigDeviceBasketSumOrderByAggregateInput
  }

  export type DealConfigDeviceBasketScalarWhereWithAggregatesInput = {
    AND?: DealConfigDeviceBasketScalarWhereWithAggregatesInput | DealConfigDeviceBasketScalarWhereWithAggregatesInput[]
    OR?: DealConfigDeviceBasketScalarWhereWithAggregatesInput[]
    NOT?: DealConfigDeviceBasketScalarWhereWithAggregatesInput | DealConfigDeviceBasketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DealConfigDeviceBasket"> | string
    dealConfigId?: StringWithAggregatesFilter<"DealConfigDeviceBasket"> | string
    deviceId?: StringWithAggregatesFilter<"DealConfigDeviceBasket"> | string
    deviceModel?: StringWithAggregatesFilter<"DealConfigDeviceBasket"> | string
    handsetCost?: DecimalWithAggregatesFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalWithAggregatesFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasWhereInput = {
    AND?: DealConfigVasWhereInput | DealConfigVasWhereInput[]
    OR?: DealConfigVasWhereInput[]
    NOT?: DealConfigVasWhereInput | DealConfigVasWhereInput[]
    id?: StringFilter<"DealConfigVas"> | string
    dealConfigId?: StringFilter<"DealConfigVas"> | string
    vasId?: StringFilter<"DealConfigVas"> | string
    vasName?: StringFilter<"DealConfigVas"> | string
    monthlyCost?: DecimalFilter<"DealConfigVas"> | Decimal | DecimalJsLike | number | string
    dealConfig?: XOR<CycleDealConfigRelationFilter, CycleDealConfigWhereInput>
  }

  export type DealConfigVasOrderByWithRelationInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    vasId?: SortOrder
    vasName?: SortOrder
    monthlyCost?: SortOrder
    dealConfig?: CycleDealConfigOrderByWithRelationInput
  }

  export type DealConfigVasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealConfigVasWhereInput | DealConfigVasWhereInput[]
    OR?: DealConfigVasWhereInput[]
    NOT?: DealConfigVasWhereInput | DealConfigVasWhereInput[]
    dealConfigId?: StringFilter<"DealConfigVas"> | string
    vasId?: StringFilter<"DealConfigVas"> | string
    vasName?: StringFilter<"DealConfigVas"> | string
    monthlyCost?: DecimalFilter<"DealConfigVas"> | Decimal | DecimalJsLike | number | string
    dealConfig?: XOR<CycleDealConfigRelationFilter, CycleDealConfigWhereInput>
  }, "id">

  export type DealConfigVasOrderByWithAggregationInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    vasId?: SortOrder
    vasName?: SortOrder
    monthlyCost?: SortOrder
    _count?: DealConfigVasCountOrderByAggregateInput
    _avg?: DealConfigVasAvgOrderByAggregateInput
    _max?: DealConfigVasMaxOrderByAggregateInput
    _min?: DealConfigVasMinOrderByAggregateInput
    _sum?: DealConfigVasSumOrderByAggregateInput
  }

  export type DealConfigVasScalarWhereWithAggregatesInput = {
    AND?: DealConfigVasScalarWhereWithAggregatesInput | DealConfigVasScalarWhereWithAggregatesInput[]
    OR?: DealConfigVasScalarWhereWithAggregatesInput[]
    NOT?: DealConfigVasScalarWhereWithAggregatesInput | DealConfigVasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DealConfigVas"> | string
    dealConfigId?: StringWithAggregatesFilter<"DealConfigVas"> | string
    vasId?: StringWithAggregatesFilter<"DealConfigVas"> | string
    vasName?: StringWithAggregatesFilter<"DealConfigVas"> | string
    monthlyCost?: DecimalWithAggregatesFilter<"DealConfigVas"> | Decimal | DecimalJsLike | number | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    cycleId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    createdBy?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    cycle?: XOR<CycleRelationFilter, CycleWhereInput>
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    cycle?: CycleOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    cycleId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    createdBy?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    cycle?: XOR<CycleRelationFilter, CycleWhereInput>
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    cycleId?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdBy?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type CfgBusinessUnitCreateInput = {
    id?: string
    code: string
    displayName: string
    createdAt?: Date | string
    cycles?: CycleCreateNestedManyWithoutBusinessUnitInput
  }

  export type CfgBusinessUnitUncheckedCreateInput = {
    id?: string
    code: string
    displayName: string
    createdAt?: Date | string
    cycles?: CycleUncheckedCreateNestedManyWithoutBusinessUnitInput
  }

  export type CfgBusinessUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycles?: CycleUpdateManyWithoutBusinessUnitNestedInput
  }

  export type CfgBusinessUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycles?: CycleUncheckedUpdateManyWithoutBusinessUnitNestedInput
  }

  export type CfgBusinessUnitCreateManyInput = {
    id?: string
    code: string
    displayName: string
    createdAt?: Date | string
  }

  export type CfgBusinessUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CfgBusinessUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessUnit: CfgBusinessUnitCreateNestedOneWithoutCyclesInput
    statusHistory?: CycleStatusHistoryCreateNestedManyWithoutCycleInput
    dealConfig?: CycleDealConfigCreateNestedOneWithoutCycleInput
    campaigns?: CampaignCreateNestedManyWithoutCycleInput
  }

  export type CycleUncheckedCreateInput = {
    id?: string
    name: string
    businessUnitId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: CycleStatusHistoryUncheckedCreateNestedManyWithoutCycleInput
    dealConfig?: CycleDealConfigUncheckedCreateNestedOneWithoutCycleInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnit?: CfgBusinessUnitUpdateOneRequiredWithoutCyclesNestedInput
    statusHistory?: CycleStatusHistoryUpdateManyWithoutCycleNestedInput
    dealConfig?: CycleDealConfigUpdateOneWithoutCycleNestedInput
    campaigns?: CampaignUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessUnitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: CycleStatusHistoryUncheckedUpdateManyWithoutCycleNestedInput
    dealConfig?: CycleDealConfigUncheckedUpdateOneWithoutCycleNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CycleCreateManyInput = {
    id?: string
    name: string
    businessUnitId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessUnitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryCreateInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    cycle: CycleCreateNestedOneWithoutStatusHistoryInput
  }

  export type CycleStatusHistoryUncheckedCreateInput = {
    id?: string
    cycleId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type CycleStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type CycleStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryCreateManyInput = {
    id?: string
    cycleId: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type CycleStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleDealConfigCreateInput = {
    id?: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    cycle: CycleCreateNestedOneWithoutDealConfigInput
    tariffBaskets?: DealConfigTariffBasketCreateNestedManyWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigUncheckedCreateInput = {
    id?: string
    cycleId: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedCreateNestedManyWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketUncheckedCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasUncheckedCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutDealConfigNestedInput
    tariffBaskets?: DealConfigTariffBasketUpdateManyWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUncheckedUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigCreateManyInput = {
    id?: string
    cycleId: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
  }

  export type CycleDealConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleDealConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealConfigTariffBasketCreateInput = {
    id?: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal | DecimalJsLike | number | string
    term: number
    dealConfig: CycleDealConfigCreateNestedOneWithoutTariffBasketsInput
  }

  export type DealConfigTariffBasketUncheckedCreateInput = {
    id?: string
    dealConfigId: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal | DecimalJsLike | number | string
    term: number
  }

  export type DealConfigTariffBasketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
    dealConfig?: CycleDealConfigUpdateOneRequiredWithoutTariffBasketsNestedInput
  }

  export type DealConfigTariffBasketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealConfigId?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
  }

  export type DealConfigTariffBasketCreateManyInput = {
    id?: string
    dealConfigId: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal | DecimalJsLike | number | string
    term: number
  }

  export type DealConfigTariffBasketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
  }

  export type DealConfigTariffBasketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealConfigId?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
  }

  export type DealConfigDeviceBasketCreateInput = {
    id?: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
    dealConfig: CycleDealConfigCreateNestedOneWithoutDeviceBasketsInput
  }

  export type DealConfigDeviceBasketUncheckedCreateInput = {
    id?: string
    dealConfigId: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealConfig?: CycleDealConfigUpdateOneRequiredWithoutDeviceBasketsNestedInput
  }

  export type DealConfigDeviceBasketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealConfigId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketCreateManyInput = {
    id?: string
    dealConfigId: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealConfigId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasCreateInput = {
    id?: string
    vasId: string
    vasName: string
    monthlyCost: Decimal | DecimalJsLike | number | string
    dealConfig: CycleDealConfigCreateNestedOneWithoutVasItemsInput
  }

  export type DealConfigVasUncheckedCreateInput = {
    id?: string
    dealConfigId: string
    vasId: string
    vasName: string
    monthlyCost: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dealConfig?: CycleDealConfigUpdateOneRequiredWithoutVasItemsNestedInput
  }

  export type DealConfigVasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealConfigId?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasCreateManyInput = {
    id?: string
    dealConfigId: string
    vasId: string
    vasName: string
    monthlyCost: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealConfigId?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdBy: string
    createdAt?: Date | string
    cycle: CycleCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    cycleId: string
    name: string
    description?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    cycleId: string
    name: string
    description?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CycleListRelationFilter = {
    every?: CycleWhereInput
    some?: CycleWhereInput
    none?: CycleWhereInput
  }

  export type CycleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CfgBusinessUnitCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type CfgBusinessUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
  }

  export type CfgBusinessUnitMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type CfgBusinessUnitRelationFilter = {
    is?: CfgBusinessUnitWhereInput
    isNot?: CfgBusinessUnitWhereInput
  }

  export type CycleStatusHistoryListRelationFilter = {
    every?: CycleStatusHistoryWhereInput
    some?: CycleStatusHistoryWhereInput
    none?: CycleStatusHistoryWhereInput
  }

  export type CycleDealConfigNullableRelationFilter = {
    is?: CycleDealConfigWhereInput | null
    isNot?: CycleDealConfigWhereInput | null
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CycleStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CycleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    businessUnitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type CycleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    businessUnitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    businessUnitId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CycleSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type CycleRelationFilter = {
    is?: CycleWhereInput
    isNot?: CycleWhereInput
  }

  export type CycleStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type CycleStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type CycleStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedBy?: SortOrder
    reason?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigTariffBasketListRelationFilter = {
    every?: DealConfigTariffBasketWhereInput
    some?: DealConfigTariffBasketWhereInput
    none?: DealConfigTariffBasketWhereInput
  }

  export type DealConfigDeviceBasketListRelationFilter = {
    every?: DealConfigDeviceBasketWhereInput
    some?: DealConfigDeviceBasketWhereInput
    none?: DealConfigDeviceBasketWhereInput
  }

  export type DealConfigVasListRelationFilter = {
    every?: DealConfigVasWhereInput
    some?: DealConfigVasWhereInput
    none?: DealConfigVasWhereInput
  }

  export type DealConfigTariffBasketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealConfigDeviceBasketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealConfigVasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CycleDealConfigCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    selectedTerms?: SortOrder
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
    notes?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
  }

  export type CycleDealConfigAvgOrderByAggregateInput = {
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
  }

  export type CycleDealConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
    notes?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
  }

  export type CycleDealConfigMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
    notes?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
  }

  export type CycleDealConfigSumOrderByAggregateInput = {
    ctcCeiling?: SortOrder
    ctdCeiling?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CycleDealConfigRelationFilter = {
    is?: CycleDealConfigWhereInput
    isNot?: CycleDealConfigWhereInput
  }

  export type DealConfigTariffBasketCountOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    tariffId?: SortOrder
    tariffCode?: SortOrder
    monthlyFee?: SortOrder
    term?: SortOrder
  }

  export type DealConfigTariffBasketAvgOrderByAggregateInput = {
    monthlyFee?: SortOrder
    term?: SortOrder
  }

  export type DealConfigTariffBasketMaxOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    tariffId?: SortOrder
    tariffCode?: SortOrder
    monthlyFee?: SortOrder
    term?: SortOrder
  }

  export type DealConfigTariffBasketMinOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    tariffId?: SortOrder
    tariffCode?: SortOrder
    monthlyFee?: SortOrder
    term?: SortOrder
  }

  export type DealConfigTariffBasketSumOrderByAggregateInput = {
    monthlyFee?: SortOrder
    term?: SortOrder
  }

  export type DealConfigDeviceBasketCountOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    deviceId?: SortOrder
    deviceModel?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
  }

  export type DealConfigDeviceBasketAvgOrderByAggregateInput = {
    handsetCost?: SortOrder
    retailPrice?: SortOrder
  }

  export type DealConfigDeviceBasketMaxOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    deviceId?: SortOrder
    deviceModel?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
  }

  export type DealConfigDeviceBasketMinOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    deviceId?: SortOrder
    deviceModel?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
  }

  export type DealConfigDeviceBasketSumOrderByAggregateInput = {
    handsetCost?: SortOrder
    retailPrice?: SortOrder
  }

  export type DealConfigVasCountOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    vasId?: SortOrder
    vasName?: SortOrder
    monthlyCost?: SortOrder
  }

  export type DealConfigVasAvgOrderByAggregateInput = {
    monthlyCost?: SortOrder
  }

  export type DealConfigVasMaxOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    vasId?: SortOrder
    vasName?: SortOrder
    monthlyCost?: SortOrder
  }

  export type DealConfigVasMinOrderByAggregateInput = {
    id?: SortOrder
    dealConfigId?: SortOrder
    vasId?: SortOrder
    vasName?: SortOrder
    monthlyCost?: SortOrder
  }

  export type DealConfigVasSumOrderByAggregateInput = {
    monthlyCost?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type CycleCreateNestedManyWithoutBusinessUnitInput = {
    create?: XOR<CycleCreateWithoutBusinessUnitInput, CycleUncheckedCreateWithoutBusinessUnitInput> | CycleCreateWithoutBusinessUnitInput[] | CycleUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: CycleCreateOrConnectWithoutBusinessUnitInput | CycleCreateOrConnectWithoutBusinessUnitInput[]
    createMany?: CycleCreateManyBusinessUnitInputEnvelope
    connect?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
  }

  export type CycleUncheckedCreateNestedManyWithoutBusinessUnitInput = {
    create?: XOR<CycleCreateWithoutBusinessUnitInput, CycleUncheckedCreateWithoutBusinessUnitInput> | CycleCreateWithoutBusinessUnitInput[] | CycleUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: CycleCreateOrConnectWithoutBusinessUnitInput | CycleCreateOrConnectWithoutBusinessUnitInput[]
    createMany?: CycleCreateManyBusinessUnitInputEnvelope
    connect?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CycleUpdateManyWithoutBusinessUnitNestedInput = {
    create?: XOR<CycleCreateWithoutBusinessUnitInput, CycleUncheckedCreateWithoutBusinessUnitInput> | CycleCreateWithoutBusinessUnitInput[] | CycleUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: CycleCreateOrConnectWithoutBusinessUnitInput | CycleCreateOrConnectWithoutBusinessUnitInput[]
    upsert?: CycleUpsertWithWhereUniqueWithoutBusinessUnitInput | CycleUpsertWithWhereUniqueWithoutBusinessUnitInput[]
    createMany?: CycleCreateManyBusinessUnitInputEnvelope
    set?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    disconnect?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    delete?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    connect?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    update?: CycleUpdateWithWhereUniqueWithoutBusinessUnitInput | CycleUpdateWithWhereUniqueWithoutBusinessUnitInput[]
    updateMany?: CycleUpdateManyWithWhereWithoutBusinessUnitInput | CycleUpdateManyWithWhereWithoutBusinessUnitInput[]
    deleteMany?: CycleScalarWhereInput | CycleScalarWhereInput[]
  }

  export type CycleUncheckedUpdateManyWithoutBusinessUnitNestedInput = {
    create?: XOR<CycleCreateWithoutBusinessUnitInput, CycleUncheckedCreateWithoutBusinessUnitInput> | CycleCreateWithoutBusinessUnitInput[] | CycleUncheckedCreateWithoutBusinessUnitInput[]
    connectOrCreate?: CycleCreateOrConnectWithoutBusinessUnitInput | CycleCreateOrConnectWithoutBusinessUnitInput[]
    upsert?: CycleUpsertWithWhereUniqueWithoutBusinessUnitInput | CycleUpsertWithWhereUniqueWithoutBusinessUnitInput[]
    createMany?: CycleCreateManyBusinessUnitInputEnvelope
    set?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    disconnect?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    delete?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    connect?: CycleWhereUniqueInput | CycleWhereUniqueInput[]
    update?: CycleUpdateWithWhereUniqueWithoutBusinessUnitInput | CycleUpdateWithWhereUniqueWithoutBusinessUnitInput[]
    updateMany?: CycleUpdateManyWithWhereWithoutBusinessUnitInput | CycleUpdateManyWithWhereWithoutBusinessUnitInput[]
    deleteMany?: CycleScalarWhereInput | CycleScalarWhereInput[]
  }

  export type CfgBusinessUnitCreateNestedOneWithoutCyclesInput = {
    create?: XOR<CfgBusinessUnitCreateWithoutCyclesInput, CfgBusinessUnitUncheckedCreateWithoutCyclesInput>
    connectOrCreate?: CfgBusinessUnitCreateOrConnectWithoutCyclesInput
    connect?: CfgBusinessUnitWhereUniqueInput
  }

  export type CycleStatusHistoryCreateNestedManyWithoutCycleInput = {
    create?: XOR<CycleStatusHistoryCreateWithoutCycleInput, CycleStatusHistoryUncheckedCreateWithoutCycleInput> | CycleStatusHistoryCreateWithoutCycleInput[] | CycleStatusHistoryUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CycleStatusHistoryCreateOrConnectWithoutCycleInput | CycleStatusHistoryCreateOrConnectWithoutCycleInput[]
    createMany?: CycleStatusHistoryCreateManyCycleInputEnvelope
    connect?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
  }

  export type CycleDealConfigCreateNestedOneWithoutCycleInput = {
    create?: XOR<CycleDealConfigCreateWithoutCycleInput, CycleDealConfigUncheckedCreateWithoutCycleInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutCycleInput
    connect?: CycleDealConfigWhereUniqueInput
  }

  export type CampaignCreateNestedManyWithoutCycleInput = {
    create?: XOR<CampaignCreateWithoutCycleInput, CampaignUncheckedCreateWithoutCycleInput> | CampaignCreateWithoutCycleInput[] | CampaignUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCycleInput | CampaignCreateOrConnectWithoutCycleInput[]
    createMany?: CampaignCreateManyCycleInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CycleStatusHistoryUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<CycleStatusHistoryCreateWithoutCycleInput, CycleStatusHistoryUncheckedCreateWithoutCycleInput> | CycleStatusHistoryCreateWithoutCycleInput[] | CycleStatusHistoryUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CycleStatusHistoryCreateOrConnectWithoutCycleInput | CycleStatusHistoryCreateOrConnectWithoutCycleInput[]
    createMany?: CycleStatusHistoryCreateManyCycleInputEnvelope
    connect?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
  }

  export type CycleDealConfigUncheckedCreateNestedOneWithoutCycleInput = {
    create?: XOR<CycleDealConfigCreateWithoutCycleInput, CycleDealConfigUncheckedCreateWithoutCycleInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutCycleInput
    connect?: CycleDealConfigWhereUniqueInput
  }

  export type CampaignUncheckedCreateNestedManyWithoutCycleInput = {
    create?: XOR<CampaignCreateWithoutCycleInput, CampaignUncheckedCreateWithoutCycleInput> | CampaignCreateWithoutCycleInput[] | CampaignUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCycleInput | CampaignCreateOrConnectWithoutCycleInput[]
    createMany?: CampaignCreateManyCycleInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CfgBusinessUnitUpdateOneRequiredWithoutCyclesNestedInput = {
    create?: XOR<CfgBusinessUnitCreateWithoutCyclesInput, CfgBusinessUnitUncheckedCreateWithoutCyclesInput>
    connectOrCreate?: CfgBusinessUnitCreateOrConnectWithoutCyclesInput
    upsert?: CfgBusinessUnitUpsertWithoutCyclesInput
    connect?: CfgBusinessUnitWhereUniqueInput
    update?: XOR<XOR<CfgBusinessUnitUpdateToOneWithWhereWithoutCyclesInput, CfgBusinessUnitUpdateWithoutCyclesInput>, CfgBusinessUnitUncheckedUpdateWithoutCyclesInput>
  }

  export type CycleStatusHistoryUpdateManyWithoutCycleNestedInput = {
    create?: XOR<CycleStatusHistoryCreateWithoutCycleInput, CycleStatusHistoryUncheckedCreateWithoutCycleInput> | CycleStatusHistoryCreateWithoutCycleInput[] | CycleStatusHistoryUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CycleStatusHistoryCreateOrConnectWithoutCycleInput | CycleStatusHistoryCreateOrConnectWithoutCycleInput[]
    upsert?: CycleStatusHistoryUpsertWithWhereUniqueWithoutCycleInput | CycleStatusHistoryUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: CycleStatusHistoryCreateManyCycleInputEnvelope
    set?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    disconnect?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    delete?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    connect?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    update?: CycleStatusHistoryUpdateWithWhereUniqueWithoutCycleInput | CycleStatusHistoryUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: CycleStatusHistoryUpdateManyWithWhereWithoutCycleInput | CycleStatusHistoryUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: CycleStatusHistoryScalarWhereInput | CycleStatusHistoryScalarWhereInput[]
  }

  export type CycleDealConfigUpdateOneWithoutCycleNestedInput = {
    create?: XOR<CycleDealConfigCreateWithoutCycleInput, CycleDealConfigUncheckedCreateWithoutCycleInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutCycleInput
    upsert?: CycleDealConfigUpsertWithoutCycleInput
    disconnect?: CycleDealConfigWhereInput | boolean
    delete?: CycleDealConfigWhereInput | boolean
    connect?: CycleDealConfigWhereUniqueInput
    update?: XOR<XOR<CycleDealConfigUpdateToOneWithWhereWithoutCycleInput, CycleDealConfigUpdateWithoutCycleInput>, CycleDealConfigUncheckedUpdateWithoutCycleInput>
  }

  export type CampaignUpdateManyWithoutCycleNestedInput = {
    create?: XOR<CampaignCreateWithoutCycleInput, CampaignUncheckedCreateWithoutCycleInput> | CampaignCreateWithoutCycleInput[] | CampaignUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCycleInput | CampaignCreateOrConnectWithoutCycleInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCycleInput | CampaignUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: CampaignCreateManyCycleInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCycleInput | CampaignUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCycleInput | CampaignUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CycleStatusHistoryUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<CycleStatusHistoryCreateWithoutCycleInput, CycleStatusHistoryUncheckedCreateWithoutCycleInput> | CycleStatusHistoryCreateWithoutCycleInput[] | CycleStatusHistoryUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CycleStatusHistoryCreateOrConnectWithoutCycleInput | CycleStatusHistoryCreateOrConnectWithoutCycleInput[]
    upsert?: CycleStatusHistoryUpsertWithWhereUniqueWithoutCycleInput | CycleStatusHistoryUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: CycleStatusHistoryCreateManyCycleInputEnvelope
    set?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    disconnect?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    delete?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    connect?: CycleStatusHistoryWhereUniqueInput | CycleStatusHistoryWhereUniqueInput[]
    update?: CycleStatusHistoryUpdateWithWhereUniqueWithoutCycleInput | CycleStatusHistoryUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: CycleStatusHistoryUpdateManyWithWhereWithoutCycleInput | CycleStatusHistoryUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: CycleStatusHistoryScalarWhereInput | CycleStatusHistoryScalarWhereInput[]
  }

  export type CycleDealConfigUncheckedUpdateOneWithoutCycleNestedInput = {
    create?: XOR<CycleDealConfigCreateWithoutCycleInput, CycleDealConfigUncheckedCreateWithoutCycleInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutCycleInput
    upsert?: CycleDealConfigUpsertWithoutCycleInput
    disconnect?: CycleDealConfigWhereInput | boolean
    delete?: CycleDealConfigWhereInput | boolean
    connect?: CycleDealConfigWhereUniqueInput
    update?: XOR<XOR<CycleDealConfigUpdateToOneWithWhereWithoutCycleInput, CycleDealConfigUpdateWithoutCycleInput>, CycleDealConfigUncheckedUpdateWithoutCycleInput>
  }

  export type CampaignUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: XOR<CampaignCreateWithoutCycleInput, CampaignUncheckedCreateWithoutCycleInput> | CampaignCreateWithoutCycleInput[] | CampaignUncheckedCreateWithoutCycleInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCycleInput | CampaignCreateOrConnectWithoutCycleInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCycleInput | CampaignUpsertWithWhereUniqueWithoutCycleInput[]
    createMany?: CampaignCreateManyCycleInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCycleInput | CampaignUpdateWithWhereUniqueWithoutCycleInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCycleInput | CampaignUpdateManyWithWhereWithoutCycleInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CycleCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<CycleCreateWithoutStatusHistoryInput, CycleUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: CycleCreateOrConnectWithoutStatusHistoryInput
    connect?: CycleWhereUniqueInput
  }

  export type CycleUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<CycleCreateWithoutStatusHistoryInput, CycleUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: CycleCreateOrConnectWithoutStatusHistoryInput
    upsert?: CycleUpsertWithoutStatusHistoryInput
    connect?: CycleWhereUniqueInput
    update?: XOR<XOR<CycleUpdateToOneWithWhereWithoutStatusHistoryInput, CycleUpdateWithoutStatusHistoryInput>, CycleUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type CycleDealConfigCreateselectedTermsInput = {
    set: string[]
  }

  export type CycleCreateNestedOneWithoutDealConfigInput = {
    create?: XOR<CycleCreateWithoutDealConfigInput, CycleUncheckedCreateWithoutDealConfigInput>
    connectOrCreate?: CycleCreateOrConnectWithoutDealConfigInput
    connect?: CycleWhereUniqueInput
  }

  export type DealConfigTariffBasketCreateNestedManyWithoutDealConfigInput = {
    create?: XOR<DealConfigTariffBasketCreateWithoutDealConfigInput, DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput> | DealConfigTariffBasketCreateWithoutDealConfigInput[] | DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput | DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput[]
    createMany?: DealConfigTariffBasketCreateManyDealConfigInputEnvelope
    connect?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
  }

  export type DealConfigDeviceBasketCreateNestedManyWithoutDealConfigInput = {
    create?: XOR<DealConfigDeviceBasketCreateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput> | DealConfigDeviceBasketCreateWithoutDealConfigInput[] | DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput | DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput[]
    createMany?: DealConfigDeviceBasketCreateManyDealConfigInputEnvelope
    connect?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
  }

  export type DealConfigVasCreateNestedManyWithoutDealConfigInput = {
    create?: XOR<DealConfigVasCreateWithoutDealConfigInput, DealConfigVasUncheckedCreateWithoutDealConfigInput> | DealConfigVasCreateWithoutDealConfigInput[] | DealConfigVasUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigVasCreateOrConnectWithoutDealConfigInput | DealConfigVasCreateOrConnectWithoutDealConfigInput[]
    createMany?: DealConfigVasCreateManyDealConfigInputEnvelope
    connect?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
  }

  export type DealConfigTariffBasketUncheckedCreateNestedManyWithoutDealConfigInput = {
    create?: XOR<DealConfigTariffBasketCreateWithoutDealConfigInput, DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput> | DealConfigTariffBasketCreateWithoutDealConfigInput[] | DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput | DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput[]
    createMany?: DealConfigTariffBasketCreateManyDealConfigInputEnvelope
    connect?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
  }

  export type DealConfigDeviceBasketUncheckedCreateNestedManyWithoutDealConfigInput = {
    create?: XOR<DealConfigDeviceBasketCreateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput> | DealConfigDeviceBasketCreateWithoutDealConfigInput[] | DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput | DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput[]
    createMany?: DealConfigDeviceBasketCreateManyDealConfigInputEnvelope
    connect?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
  }

  export type DealConfigVasUncheckedCreateNestedManyWithoutDealConfigInput = {
    create?: XOR<DealConfigVasCreateWithoutDealConfigInput, DealConfigVasUncheckedCreateWithoutDealConfigInput> | DealConfigVasCreateWithoutDealConfigInput[] | DealConfigVasUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigVasCreateOrConnectWithoutDealConfigInput | DealConfigVasCreateOrConnectWithoutDealConfigInput[]
    createMany?: DealConfigVasCreateManyDealConfigInputEnvelope
    connect?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
  }

  export type CycleDealConfigUpdateselectedTermsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CycleUpdateOneRequiredWithoutDealConfigNestedInput = {
    create?: XOR<CycleCreateWithoutDealConfigInput, CycleUncheckedCreateWithoutDealConfigInput>
    connectOrCreate?: CycleCreateOrConnectWithoutDealConfigInput
    upsert?: CycleUpsertWithoutDealConfigInput
    connect?: CycleWhereUniqueInput
    update?: XOR<XOR<CycleUpdateToOneWithWhereWithoutDealConfigInput, CycleUpdateWithoutDealConfigInput>, CycleUncheckedUpdateWithoutDealConfigInput>
  }

  export type DealConfigTariffBasketUpdateManyWithoutDealConfigNestedInput = {
    create?: XOR<DealConfigTariffBasketCreateWithoutDealConfigInput, DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput> | DealConfigTariffBasketCreateWithoutDealConfigInput[] | DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput | DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput[]
    upsert?: DealConfigTariffBasketUpsertWithWhereUniqueWithoutDealConfigInput | DealConfigTariffBasketUpsertWithWhereUniqueWithoutDealConfigInput[]
    createMany?: DealConfigTariffBasketCreateManyDealConfigInputEnvelope
    set?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    disconnect?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    delete?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    connect?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    update?: DealConfigTariffBasketUpdateWithWhereUniqueWithoutDealConfigInput | DealConfigTariffBasketUpdateWithWhereUniqueWithoutDealConfigInput[]
    updateMany?: DealConfigTariffBasketUpdateManyWithWhereWithoutDealConfigInput | DealConfigTariffBasketUpdateManyWithWhereWithoutDealConfigInput[]
    deleteMany?: DealConfigTariffBasketScalarWhereInput | DealConfigTariffBasketScalarWhereInput[]
  }

  export type DealConfigDeviceBasketUpdateManyWithoutDealConfigNestedInput = {
    create?: XOR<DealConfigDeviceBasketCreateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput> | DealConfigDeviceBasketCreateWithoutDealConfigInput[] | DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput | DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput[]
    upsert?: DealConfigDeviceBasketUpsertWithWhereUniqueWithoutDealConfigInput | DealConfigDeviceBasketUpsertWithWhereUniqueWithoutDealConfigInput[]
    createMany?: DealConfigDeviceBasketCreateManyDealConfigInputEnvelope
    set?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    disconnect?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    delete?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    connect?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    update?: DealConfigDeviceBasketUpdateWithWhereUniqueWithoutDealConfigInput | DealConfigDeviceBasketUpdateWithWhereUniqueWithoutDealConfigInput[]
    updateMany?: DealConfigDeviceBasketUpdateManyWithWhereWithoutDealConfigInput | DealConfigDeviceBasketUpdateManyWithWhereWithoutDealConfigInput[]
    deleteMany?: DealConfigDeviceBasketScalarWhereInput | DealConfigDeviceBasketScalarWhereInput[]
  }

  export type DealConfigVasUpdateManyWithoutDealConfigNestedInput = {
    create?: XOR<DealConfigVasCreateWithoutDealConfigInput, DealConfigVasUncheckedCreateWithoutDealConfigInput> | DealConfigVasCreateWithoutDealConfigInput[] | DealConfigVasUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigVasCreateOrConnectWithoutDealConfigInput | DealConfigVasCreateOrConnectWithoutDealConfigInput[]
    upsert?: DealConfigVasUpsertWithWhereUniqueWithoutDealConfigInput | DealConfigVasUpsertWithWhereUniqueWithoutDealConfigInput[]
    createMany?: DealConfigVasCreateManyDealConfigInputEnvelope
    set?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    disconnect?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    delete?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    connect?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    update?: DealConfigVasUpdateWithWhereUniqueWithoutDealConfigInput | DealConfigVasUpdateWithWhereUniqueWithoutDealConfigInput[]
    updateMany?: DealConfigVasUpdateManyWithWhereWithoutDealConfigInput | DealConfigVasUpdateManyWithWhereWithoutDealConfigInput[]
    deleteMany?: DealConfigVasScalarWhereInput | DealConfigVasScalarWhereInput[]
  }

  export type DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigNestedInput = {
    create?: XOR<DealConfigTariffBasketCreateWithoutDealConfigInput, DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput> | DealConfigTariffBasketCreateWithoutDealConfigInput[] | DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput | DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput[]
    upsert?: DealConfigTariffBasketUpsertWithWhereUniqueWithoutDealConfigInput | DealConfigTariffBasketUpsertWithWhereUniqueWithoutDealConfigInput[]
    createMany?: DealConfigTariffBasketCreateManyDealConfigInputEnvelope
    set?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    disconnect?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    delete?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    connect?: DealConfigTariffBasketWhereUniqueInput | DealConfigTariffBasketWhereUniqueInput[]
    update?: DealConfigTariffBasketUpdateWithWhereUniqueWithoutDealConfigInput | DealConfigTariffBasketUpdateWithWhereUniqueWithoutDealConfigInput[]
    updateMany?: DealConfigTariffBasketUpdateManyWithWhereWithoutDealConfigInput | DealConfigTariffBasketUpdateManyWithWhereWithoutDealConfigInput[]
    deleteMany?: DealConfigTariffBasketScalarWhereInput | DealConfigTariffBasketScalarWhereInput[]
  }

  export type DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigNestedInput = {
    create?: XOR<DealConfigDeviceBasketCreateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput> | DealConfigDeviceBasketCreateWithoutDealConfigInput[] | DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput | DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput[]
    upsert?: DealConfigDeviceBasketUpsertWithWhereUniqueWithoutDealConfigInput | DealConfigDeviceBasketUpsertWithWhereUniqueWithoutDealConfigInput[]
    createMany?: DealConfigDeviceBasketCreateManyDealConfigInputEnvelope
    set?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    disconnect?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    delete?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    connect?: DealConfigDeviceBasketWhereUniqueInput | DealConfigDeviceBasketWhereUniqueInput[]
    update?: DealConfigDeviceBasketUpdateWithWhereUniqueWithoutDealConfigInput | DealConfigDeviceBasketUpdateWithWhereUniqueWithoutDealConfigInput[]
    updateMany?: DealConfigDeviceBasketUpdateManyWithWhereWithoutDealConfigInput | DealConfigDeviceBasketUpdateManyWithWhereWithoutDealConfigInput[]
    deleteMany?: DealConfigDeviceBasketScalarWhereInput | DealConfigDeviceBasketScalarWhereInput[]
  }

  export type DealConfigVasUncheckedUpdateManyWithoutDealConfigNestedInput = {
    create?: XOR<DealConfigVasCreateWithoutDealConfigInput, DealConfigVasUncheckedCreateWithoutDealConfigInput> | DealConfigVasCreateWithoutDealConfigInput[] | DealConfigVasUncheckedCreateWithoutDealConfigInput[]
    connectOrCreate?: DealConfigVasCreateOrConnectWithoutDealConfigInput | DealConfigVasCreateOrConnectWithoutDealConfigInput[]
    upsert?: DealConfigVasUpsertWithWhereUniqueWithoutDealConfigInput | DealConfigVasUpsertWithWhereUniqueWithoutDealConfigInput[]
    createMany?: DealConfigVasCreateManyDealConfigInputEnvelope
    set?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    disconnect?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    delete?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    connect?: DealConfigVasWhereUniqueInput | DealConfigVasWhereUniqueInput[]
    update?: DealConfigVasUpdateWithWhereUniqueWithoutDealConfigInput | DealConfigVasUpdateWithWhereUniqueWithoutDealConfigInput[]
    updateMany?: DealConfigVasUpdateManyWithWhereWithoutDealConfigInput | DealConfigVasUpdateManyWithWhereWithoutDealConfigInput[]
    deleteMany?: DealConfigVasScalarWhereInput | DealConfigVasScalarWhereInput[]
  }

  export type CycleDealConfigCreateNestedOneWithoutTariffBasketsInput = {
    create?: XOR<CycleDealConfigCreateWithoutTariffBasketsInput, CycleDealConfigUncheckedCreateWithoutTariffBasketsInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutTariffBasketsInput
    connect?: CycleDealConfigWhereUniqueInput
  }

  export type CycleDealConfigUpdateOneRequiredWithoutTariffBasketsNestedInput = {
    create?: XOR<CycleDealConfigCreateWithoutTariffBasketsInput, CycleDealConfigUncheckedCreateWithoutTariffBasketsInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutTariffBasketsInput
    upsert?: CycleDealConfigUpsertWithoutTariffBasketsInput
    connect?: CycleDealConfigWhereUniqueInput
    update?: XOR<XOR<CycleDealConfigUpdateToOneWithWhereWithoutTariffBasketsInput, CycleDealConfigUpdateWithoutTariffBasketsInput>, CycleDealConfigUncheckedUpdateWithoutTariffBasketsInput>
  }

  export type CycleDealConfigCreateNestedOneWithoutDeviceBasketsInput = {
    create?: XOR<CycleDealConfigCreateWithoutDeviceBasketsInput, CycleDealConfigUncheckedCreateWithoutDeviceBasketsInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutDeviceBasketsInput
    connect?: CycleDealConfigWhereUniqueInput
  }

  export type CycleDealConfigUpdateOneRequiredWithoutDeviceBasketsNestedInput = {
    create?: XOR<CycleDealConfigCreateWithoutDeviceBasketsInput, CycleDealConfigUncheckedCreateWithoutDeviceBasketsInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutDeviceBasketsInput
    upsert?: CycleDealConfigUpsertWithoutDeviceBasketsInput
    connect?: CycleDealConfigWhereUniqueInput
    update?: XOR<XOR<CycleDealConfigUpdateToOneWithWhereWithoutDeviceBasketsInput, CycleDealConfigUpdateWithoutDeviceBasketsInput>, CycleDealConfigUncheckedUpdateWithoutDeviceBasketsInput>
  }

  export type CycleDealConfigCreateNestedOneWithoutVasItemsInput = {
    create?: XOR<CycleDealConfigCreateWithoutVasItemsInput, CycleDealConfigUncheckedCreateWithoutVasItemsInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutVasItemsInput
    connect?: CycleDealConfigWhereUniqueInput
  }

  export type CycleDealConfigUpdateOneRequiredWithoutVasItemsNestedInput = {
    create?: XOR<CycleDealConfigCreateWithoutVasItemsInput, CycleDealConfigUncheckedCreateWithoutVasItemsInput>
    connectOrCreate?: CycleDealConfigCreateOrConnectWithoutVasItemsInput
    upsert?: CycleDealConfigUpsertWithoutVasItemsInput
    connect?: CycleDealConfigWhereUniqueInput
    update?: XOR<XOR<CycleDealConfigUpdateToOneWithWhereWithoutVasItemsInput, CycleDealConfigUpdateWithoutVasItemsInput>, CycleDealConfigUncheckedUpdateWithoutVasItemsInput>
  }

  export type CycleCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<CycleCreateWithoutCampaignsInput, CycleUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CycleCreateOrConnectWithoutCampaignsInput
    connect?: CycleWhereUniqueInput
  }

  export type CycleUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<CycleCreateWithoutCampaignsInput, CycleUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CycleCreateOrConnectWithoutCampaignsInput
    upsert?: CycleUpsertWithoutCampaignsInput
    connect?: CycleWhereUniqueInput
    update?: XOR<XOR<CycleUpdateToOneWithWhereWithoutCampaignsInput, CycleUpdateWithoutCampaignsInput>, CycleUncheckedUpdateWithoutCampaignsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CycleCreateWithoutBusinessUnitInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: CycleStatusHistoryCreateNestedManyWithoutCycleInput
    dealConfig?: CycleDealConfigCreateNestedOneWithoutCycleInput
    campaigns?: CampaignCreateNestedManyWithoutCycleInput
  }

  export type CycleUncheckedCreateWithoutBusinessUnitInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: CycleStatusHistoryUncheckedCreateNestedManyWithoutCycleInput
    dealConfig?: CycleDealConfigUncheckedCreateNestedOneWithoutCycleInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CycleCreateOrConnectWithoutBusinessUnitInput = {
    where: CycleWhereUniqueInput
    create: XOR<CycleCreateWithoutBusinessUnitInput, CycleUncheckedCreateWithoutBusinessUnitInput>
  }

  export type CycleCreateManyBusinessUnitInputEnvelope = {
    data: CycleCreateManyBusinessUnitInput | CycleCreateManyBusinessUnitInput[]
    skipDuplicates?: boolean
  }

  export type CycleUpsertWithWhereUniqueWithoutBusinessUnitInput = {
    where: CycleWhereUniqueInput
    update: XOR<CycleUpdateWithoutBusinessUnitInput, CycleUncheckedUpdateWithoutBusinessUnitInput>
    create: XOR<CycleCreateWithoutBusinessUnitInput, CycleUncheckedCreateWithoutBusinessUnitInput>
  }

  export type CycleUpdateWithWhereUniqueWithoutBusinessUnitInput = {
    where: CycleWhereUniqueInput
    data: XOR<CycleUpdateWithoutBusinessUnitInput, CycleUncheckedUpdateWithoutBusinessUnitInput>
  }

  export type CycleUpdateManyWithWhereWithoutBusinessUnitInput = {
    where: CycleScalarWhereInput
    data: XOR<CycleUpdateManyMutationInput, CycleUncheckedUpdateManyWithoutBusinessUnitInput>
  }

  export type CycleScalarWhereInput = {
    AND?: CycleScalarWhereInput | CycleScalarWhereInput[]
    OR?: CycleScalarWhereInput[]
    NOT?: CycleScalarWhereInput | CycleScalarWhereInput[]
    id?: StringFilter<"Cycle"> | string
    name?: StringFilter<"Cycle"> | string
    businessUnitId?: StringFilter<"Cycle"> | string
    startDate?: DateTimeFilter<"Cycle"> | Date | string
    endDate?: DateTimeFilter<"Cycle"> | Date | string
    status?: StringFilter<"Cycle"> | string
    description?: StringNullableFilter<"Cycle"> | string | null
    createdBy?: StringFilter<"Cycle"> | string
    updatedBy?: StringNullableFilter<"Cycle"> | string | null
    version?: IntFilter<"Cycle"> | number
    createdAt?: DateTimeFilter<"Cycle"> | Date | string
    updatedAt?: DateTimeFilter<"Cycle"> | Date | string
  }

  export type CfgBusinessUnitCreateWithoutCyclesInput = {
    id?: string
    code: string
    displayName: string
    createdAt?: Date | string
  }

  export type CfgBusinessUnitUncheckedCreateWithoutCyclesInput = {
    id?: string
    code: string
    displayName: string
    createdAt?: Date | string
  }

  export type CfgBusinessUnitCreateOrConnectWithoutCyclesInput = {
    where: CfgBusinessUnitWhereUniqueInput
    create: XOR<CfgBusinessUnitCreateWithoutCyclesInput, CfgBusinessUnitUncheckedCreateWithoutCyclesInput>
  }

  export type CycleStatusHistoryCreateWithoutCycleInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type CycleStatusHistoryUncheckedCreateWithoutCycleInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type CycleStatusHistoryCreateOrConnectWithoutCycleInput = {
    where: CycleStatusHistoryWhereUniqueInput
    create: XOR<CycleStatusHistoryCreateWithoutCycleInput, CycleStatusHistoryUncheckedCreateWithoutCycleInput>
  }

  export type CycleStatusHistoryCreateManyCycleInputEnvelope = {
    data: CycleStatusHistoryCreateManyCycleInput | CycleStatusHistoryCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type CycleDealConfigCreateWithoutCycleInput = {
    id?: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    tariffBaskets?: DealConfigTariffBasketCreateNestedManyWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigUncheckedCreateWithoutCycleInput = {
    id?: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedCreateNestedManyWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketUncheckedCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasUncheckedCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigCreateOrConnectWithoutCycleInput = {
    where: CycleDealConfigWhereUniqueInput
    create: XOR<CycleDealConfigCreateWithoutCycleInput, CycleDealConfigUncheckedCreateWithoutCycleInput>
  }

  export type CampaignCreateWithoutCycleInput = {
    id?: string
    name: string
    description?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type CampaignUncheckedCreateWithoutCycleInput = {
    id?: string
    name: string
    description?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutCycleInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCycleInput, CampaignUncheckedCreateWithoutCycleInput>
  }

  export type CampaignCreateManyCycleInputEnvelope = {
    data: CampaignCreateManyCycleInput | CampaignCreateManyCycleInput[]
    skipDuplicates?: boolean
  }

  export type CfgBusinessUnitUpsertWithoutCyclesInput = {
    update: XOR<CfgBusinessUnitUpdateWithoutCyclesInput, CfgBusinessUnitUncheckedUpdateWithoutCyclesInput>
    create: XOR<CfgBusinessUnitCreateWithoutCyclesInput, CfgBusinessUnitUncheckedCreateWithoutCyclesInput>
    where?: CfgBusinessUnitWhereInput
  }

  export type CfgBusinessUnitUpdateToOneWithWhereWithoutCyclesInput = {
    where?: CfgBusinessUnitWhereInput
    data: XOR<CfgBusinessUnitUpdateWithoutCyclesInput, CfgBusinessUnitUncheckedUpdateWithoutCyclesInput>
  }

  export type CfgBusinessUnitUpdateWithoutCyclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CfgBusinessUnitUncheckedUpdateWithoutCyclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryUpsertWithWhereUniqueWithoutCycleInput = {
    where: CycleStatusHistoryWhereUniqueInput
    update: XOR<CycleStatusHistoryUpdateWithoutCycleInput, CycleStatusHistoryUncheckedUpdateWithoutCycleInput>
    create: XOR<CycleStatusHistoryCreateWithoutCycleInput, CycleStatusHistoryUncheckedCreateWithoutCycleInput>
  }

  export type CycleStatusHistoryUpdateWithWhereUniqueWithoutCycleInput = {
    where: CycleStatusHistoryWhereUniqueInput
    data: XOR<CycleStatusHistoryUpdateWithoutCycleInput, CycleStatusHistoryUncheckedUpdateWithoutCycleInput>
  }

  export type CycleStatusHistoryUpdateManyWithWhereWithoutCycleInput = {
    where: CycleStatusHistoryScalarWhereInput
    data: XOR<CycleStatusHistoryUpdateManyMutationInput, CycleStatusHistoryUncheckedUpdateManyWithoutCycleInput>
  }

  export type CycleStatusHistoryScalarWhereInput = {
    AND?: CycleStatusHistoryScalarWhereInput | CycleStatusHistoryScalarWhereInput[]
    OR?: CycleStatusHistoryScalarWhereInput[]
    NOT?: CycleStatusHistoryScalarWhereInput | CycleStatusHistoryScalarWhereInput[]
    id?: StringFilter<"CycleStatusHistory"> | string
    cycleId?: StringFilter<"CycleStatusHistory"> | string
    fromStatus?: StringFilter<"CycleStatusHistory"> | string
    toStatus?: StringFilter<"CycleStatusHistory"> | string
    changedBy?: StringFilter<"CycleStatusHistory"> | string
    reason?: StringNullableFilter<"CycleStatusHistory"> | string | null
    correlationId?: StringNullableFilter<"CycleStatusHistory"> | string | null
    createdAt?: DateTimeFilter<"CycleStatusHistory"> | Date | string
  }

  export type CycleDealConfigUpsertWithoutCycleInput = {
    update: XOR<CycleDealConfigUpdateWithoutCycleInput, CycleDealConfigUncheckedUpdateWithoutCycleInput>
    create: XOR<CycleDealConfigCreateWithoutCycleInput, CycleDealConfigUncheckedCreateWithoutCycleInput>
    where?: CycleDealConfigWhereInput
  }

  export type CycleDealConfigUpdateToOneWithWhereWithoutCycleInput = {
    where?: CycleDealConfigWhereInput
    data: XOR<CycleDealConfigUpdateWithoutCycleInput, CycleDealConfigUncheckedUpdateWithoutCycleInput>
  }

  export type CycleDealConfigUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: DealConfigTariffBasketUpdateManyWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUncheckedUpdateManyWithoutDealConfigNestedInput
  }

  export type CampaignUpsertWithWhereUniqueWithoutCycleInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCycleInput, CampaignUncheckedUpdateWithoutCycleInput>
    create: XOR<CampaignCreateWithoutCycleInput, CampaignUncheckedCreateWithoutCycleInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCycleInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCycleInput, CampaignUncheckedUpdateWithoutCycleInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCycleInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCycleInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    cycleId?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    createdBy?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type CycleCreateWithoutStatusHistoryInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessUnit: CfgBusinessUnitCreateNestedOneWithoutCyclesInput
    dealConfig?: CycleDealConfigCreateNestedOneWithoutCycleInput
    campaigns?: CampaignCreateNestedManyWithoutCycleInput
  }

  export type CycleUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    name: string
    businessUnitId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    dealConfig?: CycleDealConfigUncheckedCreateNestedOneWithoutCycleInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CycleCreateOrConnectWithoutStatusHistoryInput = {
    where: CycleWhereUniqueInput
    create: XOR<CycleCreateWithoutStatusHistoryInput, CycleUncheckedCreateWithoutStatusHistoryInput>
  }

  export type CycleUpsertWithoutStatusHistoryInput = {
    update: XOR<CycleUpdateWithoutStatusHistoryInput, CycleUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<CycleCreateWithoutStatusHistoryInput, CycleUncheckedCreateWithoutStatusHistoryInput>
    where?: CycleWhereInput
  }

  export type CycleUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: CycleWhereInput
    data: XOR<CycleUpdateWithoutStatusHistoryInput, CycleUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type CycleUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnit?: CfgBusinessUnitUpdateOneRequiredWithoutCyclesNestedInput
    dealConfig?: CycleDealConfigUpdateOneWithoutCycleNestedInput
    campaigns?: CampaignUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessUnitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealConfig?: CycleDealConfigUncheckedUpdateOneWithoutCycleNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CycleCreateWithoutDealConfigInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessUnit: CfgBusinessUnitCreateNestedOneWithoutCyclesInput
    statusHistory?: CycleStatusHistoryCreateNestedManyWithoutCycleInput
    campaigns?: CampaignCreateNestedManyWithoutCycleInput
  }

  export type CycleUncheckedCreateWithoutDealConfigInput = {
    id?: string
    name: string
    businessUnitId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: CycleStatusHistoryUncheckedCreateNestedManyWithoutCycleInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCycleInput
  }

  export type CycleCreateOrConnectWithoutDealConfigInput = {
    where: CycleWhereUniqueInput
    create: XOR<CycleCreateWithoutDealConfigInput, CycleUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigTariffBasketCreateWithoutDealConfigInput = {
    id?: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal | DecimalJsLike | number | string
    term: number
  }

  export type DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput = {
    id?: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal | DecimalJsLike | number | string
    term: number
  }

  export type DealConfigTariffBasketCreateOrConnectWithoutDealConfigInput = {
    where: DealConfigTariffBasketWhereUniqueInput
    create: XOR<DealConfigTariffBasketCreateWithoutDealConfigInput, DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigTariffBasketCreateManyDealConfigInputEnvelope = {
    data: DealConfigTariffBasketCreateManyDealConfigInput | DealConfigTariffBasketCreateManyDealConfigInput[]
    skipDuplicates?: boolean
  }

  export type DealConfigDeviceBasketCreateWithoutDealConfigInput = {
    id?: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput = {
    id?: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketCreateOrConnectWithoutDealConfigInput = {
    where: DealConfigDeviceBasketWhereUniqueInput
    create: XOR<DealConfigDeviceBasketCreateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigDeviceBasketCreateManyDealConfigInputEnvelope = {
    data: DealConfigDeviceBasketCreateManyDealConfigInput | DealConfigDeviceBasketCreateManyDealConfigInput[]
    skipDuplicates?: boolean
  }

  export type DealConfigVasCreateWithoutDealConfigInput = {
    id?: string
    vasId: string
    vasName: string
    monthlyCost: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUncheckedCreateWithoutDealConfigInput = {
    id?: string
    vasId: string
    vasName: string
    monthlyCost: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasCreateOrConnectWithoutDealConfigInput = {
    where: DealConfigVasWhereUniqueInput
    create: XOR<DealConfigVasCreateWithoutDealConfigInput, DealConfigVasUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigVasCreateManyDealConfigInputEnvelope = {
    data: DealConfigVasCreateManyDealConfigInput | DealConfigVasCreateManyDealConfigInput[]
    skipDuplicates?: boolean
  }

  export type CycleUpsertWithoutDealConfigInput = {
    update: XOR<CycleUpdateWithoutDealConfigInput, CycleUncheckedUpdateWithoutDealConfigInput>
    create: XOR<CycleCreateWithoutDealConfigInput, CycleUncheckedCreateWithoutDealConfigInput>
    where?: CycleWhereInput
  }

  export type CycleUpdateToOneWithWhereWithoutDealConfigInput = {
    where?: CycleWhereInput
    data: XOR<CycleUpdateWithoutDealConfigInput, CycleUncheckedUpdateWithoutDealConfigInput>
  }

  export type CycleUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnit?: CfgBusinessUnitUpdateOneRequiredWithoutCyclesNestedInput
    statusHistory?: CycleStatusHistoryUpdateManyWithoutCycleNestedInput
    campaigns?: CampaignUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessUnitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: CycleStatusHistoryUncheckedUpdateManyWithoutCycleNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type DealConfigTariffBasketUpsertWithWhereUniqueWithoutDealConfigInput = {
    where: DealConfigTariffBasketWhereUniqueInput
    update: XOR<DealConfigTariffBasketUpdateWithoutDealConfigInput, DealConfigTariffBasketUncheckedUpdateWithoutDealConfigInput>
    create: XOR<DealConfigTariffBasketCreateWithoutDealConfigInput, DealConfigTariffBasketUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigTariffBasketUpdateWithWhereUniqueWithoutDealConfigInput = {
    where: DealConfigTariffBasketWhereUniqueInput
    data: XOR<DealConfigTariffBasketUpdateWithoutDealConfigInput, DealConfigTariffBasketUncheckedUpdateWithoutDealConfigInput>
  }

  export type DealConfigTariffBasketUpdateManyWithWhereWithoutDealConfigInput = {
    where: DealConfigTariffBasketScalarWhereInput
    data: XOR<DealConfigTariffBasketUpdateManyMutationInput, DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigInput>
  }

  export type DealConfigTariffBasketScalarWhereInput = {
    AND?: DealConfigTariffBasketScalarWhereInput | DealConfigTariffBasketScalarWhereInput[]
    OR?: DealConfigTariffBasketScalarWhereInput[]
    NOT?: DealConfigTariffBasketScalarWhereInput | DealConfigTariffBasketScalarWhereInput[]
    id?: StringFilter<"DealConfigTariffBasket"> | string
    dealConfigId?: StringFilter<"DealConfigTariffBasket"> | string
    tariffId?: StringFilter<"DealConfigTariffBasket"> | string
    tariffCode?: StringFilter<"DealConfigTariffBasket"> | string
    monthlyFee?: DecimalFilter<"DealConfigTariffBasket"> | Decimal | DecimalJsLike | number | string
    term?: IntFilter<"DealConfigTariffBasket"> | number
  }

  export type DealConfigDeviceBasketUpsertWithWhereUniqueWithoutDealConfigInput = {
    where: DealConfigDeviceBasketWhereUniqueInput
    update: XOR<DealConfigDeviceBasketUpdateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedUpdateWithoutDealConfigInput>
    create: XOR<DealConfigDeviceBasketCreateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigDeviceBasketUpdateWithWhereUniqueWithoutDealConfigInput = {
    where: DealConfigDeviceBasketWhereUniqueInput
    data: XOR<DealConfigDeviceBasketUpdateWithoutDealConfigInput, DealConfigDeviceBasketUncheckedUpdateWithoutDealConfigInput>
  }

  export type DealConfigDeviceBasketUpdateManyWithWhereWithoutDealConfigInput = {
    where: DealConfigDeviceBasketScalarWhereInput
    data: XOR<DealConfigDeviceBasketUpdateManyMutationInput, DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigInput>
  }

  export type DealConfigDeviceBasketScalarWhereInput = {
    AND?: DealConfigDeviceBasketScalarWhereInput | DealConfigDeviceBasketScalarWhereInput[]
    OR?: DealConfigDeviceBasketScalarWhereInput[]
    NOT?: DealConfigDeviceBasketScalarWhereInput | DealConfigDeviceBasketScalarWhereInput[]
    id?: StringFilter<"DealConfigDeviceBasket"> | string
    dealConfigId?: StringFilter<"DealConfigDeviceBasket"> | string
    deviceId?: StringFilter<"DealConfigDeviceBasket"> | string
    deviceModel?: StringFilter<"DealConfigDeviceBasket"> | string
    handsetCost?: DecimalFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFilter<"DealConfigDeviceBasket"> | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUpsertWithWhereUniqueWithoutDealConfigInput = {
    where: DealConfigVasWhereUniqueInput
    update: XOR<DealConfigVasUpdateWithoutDealConfigInput, DealConfigVasUncheckedUpdateWithoutDealConfigInput>
    create: XOR<DealConfigVasCreateWithoutDealConfigInput, DealConfigVasUncheckedCreateWithoutDealConfigInput>
  }

  export type DealConfigVasUpdateWithWhereUniqueWithoutDealConfigInput = {
    where: DealConfigVasWhereUniqueInput
    data: XOR<DealConfigVasUpdateWithoutDealConfigInput, DealConfigVasUncheckedUpdateWithoutDealConfigInput>
  }

  export type DealConfigVasUpdateManyWithWhereWithoutDealConfigInput = {
    where: DealConfigVasScalarWhereInput
    data: XOR<DealConfigVasUpdateManyMutationInput, DealConfigVasUncheckedUpdateManyWithoutDealConfigInput>
  }

  export type DealConfigVasScalarWhereInput = {
    AND?: DealConfigVasScalarWhereInput | DealConfigVasScalarWhereInput[]
    OR?: DealConfigVasScalarWhereInput[]
    NOT?: DealConfigVasScalarWhereInput | DealConfigVasScalarWhereInput[]
    id?: StringFilter<"DealConfigVas"> | string
    dealConfigId?: StringFilter<"DealConfigVas"> | string
    vasId?: StringFilter<"DealConfigVas"> | string
    vasName?: StringFilter<"DealConfigVas"> | string
    monthlyCost?: DecimalFilter<"DealConfigVas"> | Decimal | DecimalJsLike | number | string
  }

  export type CycleDealConfigCreateWithoutTariffBasketsInput = {
    id?: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    cycle: CycleCreateNestedOneWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigUncheckedCreateWithoutTariffBasketsInput = {
    id?: string
    cycleId: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    deviceBaskets?: DealConfigDeviceBasketUncheckedCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasUncheckedCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigCreateOrConnectWithoutTariffBasketsInput = {
    where: CycleDealConfigWhereUniqueInput
    create: XOR<CycleDealConfigCreateWithoutTariffBasketsInput, CycleDealConfigUncheckedCreateWithoutTariffBasketsInput>
  }

  export type CycleDealConfigUpsertWithoutTariffBasketsInput = {
    update: XOR<CycleDealConfigUpdateWithoutTariffBasketsInput, CycleDealConfigUncheckedUpdateWithoutTariffBasketsInput>
    create: XOR<CycleDealConfigCreateWithoutTariffBasketsInput, CycleDealConfigUncheckedCreateWithoutTariffBasketsInput>
    where?: CycleDealConfigWhereInput
  }

  export type CycleDealConfigUpdateToOneWithWhereWithoutTariffBasketsInput = {
    where?: CycleDealConfigWhereInput
    data: XOR<CycleDealConfigUpdateWithoutTariffBasketsInput, CycleDealConfigUncheckedUpdateWithoutTariffBasketsInput>
  }

  export type CycleDealConfigUpdateWithoutTariffBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigUncheckedUpdateWithoutTariffBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceBaskets?: DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUncheckedUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigCreateWithoutDeviceBasketsInput = {
    id?: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    cycle: CycleCreateNestedOneWithoutDealConfigInput
    tariffBaskets?: DealConfigTariffBasketCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigUncheckedCreateWithoutDeviceBasketsInput = {
    id?: string
    cycleId: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedCreateNestedManyWithoutDealConfigInput
    vasItems?: DealConfigVasUncheckedCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigCreateOrConnectWithoutDeviceBasketsInput = {
    where: CycleDealConfigWhereUniqueInput
    create: XOR<CycleDealConfigCreateWithoutDeviceBasketsInput, CycleDealConfigUncheckedCreateWithoutDeviceBasketsInput>
  }

  export type CycleDealConfigUpsertWithoutDeviceBasketsInput = {
    update: XOR<CycleDealConfigUpdateWithoutDeviceBasketsInput, CycleDealConfigUncheckedUpdateWithoutDeviceBasketsInput>
    create: XOR<CycleDealConfigCreateWithoutDeviceBasketsInput, CycleDealConfigUncheckedCreateWithoutDeviceBasketsInput>
    where?: CycleDealConfigWhereInput
  }

  export type CycleDealConfigUpdateToOneWithWhereWithoutDeviceBasketsInput = {
    where?: CycleDealConfigWhereInput
    data: XOR<CycleDealConfigUpdateWithoutDeviceBasketsInput, CycleDealConfigUncheckedUpdateWithoutDeviceBasketsInput>
  }

  export type CycleDealConfigUpdateWithoutDeviceBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutDealConfigNestedInput
    tariffBaskets?: DealConfigTariffBasketUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigUncheckedUpdateWithoutDeviceBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    vasItems?: DealConfigVasUncheckedUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigCreateWithoutVasItemsInput = {
    id?: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    cycle: CycleCreateNestedOneWithoutDealConfigInput
    tariffBaskets?: DealConfigTariffBasketCreateNestedManyWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigUncheckedCreateWithoutVasItemsInput = {
    id?: string
    cycleId: string
    selectedTerms?: CycleDealConfigCreateselectedTermsInput | string[]
    ctcCeiling: Decimal | DecimalJsLike | number | string
    ctdCeiling: Decimal | DecimalJsLike | number | string
    notes?: string | null
    submittedBy: string
    submittedAt?: Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedCreateNestedManyWithoutDealConfigInput
    deviceBaskets?: DealConfigDeviceBasketUncheckedCreateNestedManyWithoutDealConfigInput
  }

  export type CycleDealConfigCreateOrConnectWithoutVasItemsInput = {
    where: CycleDealConfigWhereUniqueInput
    create: XOR<CycleDealConfigCreateWithoutVasItemsInput, CycleDealConfigUncheckedCreateWithoutVasItemsInput>
  }

  export type CycleDealConfigUpsertWithoutVasItemsInput = {
    update: XOR<CycleDealConfigUpdateWithoutVasItemsInput, CycleDealConfigUncheckedUpdateWithoutVasItemsInput>
    create: XOR<CycleDealConfigCreateWithoutVasItemsInput, CycleDealConfigUncheckedCreateWithoutVasItemsInput>
    where?: CycleDealConfigWhereInput
  }

  export type CycleDealConfigUpdateToOneWithWhereWithoutVasItemsInput = {
    where?: CycleDealConfigWhereInput
    data: XOR<CycleDealConfigUpdateWithoutVasItemsInput, CycleDealConfigUncheckedUpdateWithoutVasItemsInput>
  }

  export type CycleDealConfigUpdateWithoutVasItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cycle?: CycleUpdateOneRequiredWithoutDealConfigNestedInput
    tariffBaskets?: DealConfigTariffBasketUpdateManyWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleDealConfigUncheckedUpdateWithoutVasItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    selectedTerms?: CycleDealConfigUpdateselectedTermsInput | string[]
    ctcCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ctdCeiling?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigNestedInput
    deviceBaskets?: DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigNestedInput
  }

  export type CycleCreateWithoutCampaignsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    businessUnit: CfgBusinessUnitCreateNestedOneWithoutCyclesInput
    statusHistory?: CycleStatusHistoryCreateNestedManyWithoutCycleInput
    dealConfig?: CycleDealConfigCreateNestedOneWithoutCycleInput
  }

  export type CycleUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    businessUnitId: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    statusHistory?: CycleStatusHistoryUncheckedCreateNestedManyWithoutCycleInput
    dealConfig?: CycleDealConfigUncheckedCreateNestedOneWithoutCycleInput
  }

  export type CycleCreateOrConnectWithoutCampaignsInput = {
    where: CycleWhereUniqueInput
    create: XOR<CycleCreateWithoutCampaignsInput, CycleUncheckedCreateWithoutCampaignsInput>
  }

  export type CycleUpsertWithoutCampaignsInput = {
    update: XOR<CycleUpdateWithoutCampaignsInput, CycleUncheckedUpdateWithoutCampaignsInput>
    create: XOR<CycleCreateWithoutCampaignsInput, CycleUncheckedCreateWithoutCampaignsInput>
    where?: CycleWhereInput
  }

  export type CycleUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: CycleWhereInput
    data: XOR<CycleUpdateWithoutCampaignsInput, CycleUncheckedUpdateWithoutCampaignsInput>
  }

  export type CycleUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessUnit?: CfgBusinessUnitUpdateOneRequiredWithoutCyclesNestedInput
    statusHistory?: CycleStatusHistoryUpdateManyWithoutCycleNestedInput
    dealConfig?: CycleDealConfigUpdateOneWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    businessUnitId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: CycleStatusHistoryUncheckedUpdateManyWithoutCycleNestedInput
    dealConfig?: CycleDealConfigUncheckedUpdateOneWithoutCycleNestedInput
  }

  export type CycleCreateManyBusinessUnitInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status?: string
    description?: string | null
    createdBy: string
    updatedBy?: string | null
    version?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CycleUpdateWithoutBusinessUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: CycleStatusHistoryUpdateManyWithoutCycleNestedInput
    dealConfig?: CycleDealConfigUpdateOneWithoutCycleNestedInput
    campaigns?: CampaignUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateWithoutBusinessUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusHistory?: CycleStatusHistoryUncheckedUpdateManyWithoutCycleNestedInput
    dealConfig?: CycleDealConfigUncheckedUpdateOneWithoutCycleNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutCycleNestedInput
  }

  export type CycleUncheckedUpdateManyWithoutBusinessUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryCreateManyCycleInput = {
    id?: string
    fromStatus: string
    toStatus: string
    changedBy: string
    reason?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type CampaignCreateManyCycleInput = {
    id?: string
    name: string
    description?: string | null
    createdBy: string
    createdAt?: Date | string
  }

  export type CycleStatusHistoryUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleStatusHistoryUncheckedUpdateManyWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyWithoutCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealConfigTariffBasketCreateManyDealConfigInput = {
    id?: string
    tariffId: string
    tariffCode: string
    monthlyFee: Decimal | DecimalJsLike | number | string
    term: number
  }

  export type DealConfigDeviceBasketCreateManyDealConfigInput = {
    id?: string
    deviceId: string
    deviceModel: string
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasCreateManyDealConfigInput = {
    id?: string
    vasId: string
    vasName: string
    monthlyCost: Decimal | DecimalJsLike | number | string
  }

  export type DealConfigTariffBasketUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
  }

  export type DealConfigTariffBasketUncheckedUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
  }

  export type DealConfigTariffBasketUncheckedUpdateManyWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    tariffCode?: StringFieldUpdateOperationsInput | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    term?: IntFieldUpdateOperationsInput | number
  }

  export type DealConfigDeviceBasketUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketUncheckedUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigDeviceBasketUncheckedUpdateManyWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceModel?: StringFieldUpdateOperationsInput | string
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUncheckedUpdateWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DealConfigVasUncheckedUpdateManyWithoutDealConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    vasId?: StringFieldUpdateOperationsInput | string
    vasName?: StringFieldUpdateOperationsInput | string
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CfgBusinessUnitCountOutputTypeDefaultArgs instead
     */
    export type CfgBusinessUnitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CfgBusinessUnitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CycleCountOutputTypeDefaultArgs instead
     */
    export type CycleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CycleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CycleDealConfigCountOutputTypeDefaultArgs instead
     */
    export type CycleDealConfigCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CycleDealConfigCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CfgBusinessUnitDefaultArgs instead
     */
    export type CfgBusinessUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CfgBusinessUnitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CycleDefaultArgs instead
     */
    export type CycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CycleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CycleStatusHistoryDefaultArgs instead
     */
    export type CycleStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CycleStatusHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CycleDealConfigDefaultArgs instead
     */
    export type CycleDealConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CycleDealConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealConfigTariffBasketDefaultArgs instead
     */
    export type DealConfigTariffBasketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealConfigTariffBasketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealConfigDeviceBasketDefaultArgs instead
     */
    export type DealConfigDeviceBasketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealConfigDeviceBasketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealConfigVasDefaultArgs instead
     */
    export type DealConfigVasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealConfigVasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>

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