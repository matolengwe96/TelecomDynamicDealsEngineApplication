
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
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model SubChannel
 * 
 */
export type SubChannel = $Result.DefaultSelection<Prisma.$SubChannelPayload>
/**
 * Model Term
 * 
 */
export type Term = $Result.DefaultSelection<Prisma.$TermPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceBasket
 * 
 */
export type DeviceBasket = $Result.DefaultSelection<Prisma.$DeviceBasketPayload>
/**
 * Model Tariff
 * 
 */
export type Tariff = $Result.DefaultSelection<Prisma.$TariffPayload>
/**
 * Model TariffRange
 * 
 */
export type TariffRange = $Result.DefaultSelection<Prisma.$TariffRangePayload>
/**
 * Model TariffBasket
 * 
 */
export type TariffBasket = $Result.DefaultSelection<Prisma.$TariffBasketPayload>
/**
 * Model Vas
 * 
 */
export type Vas = $Result.DefaultSelection<Prisma.$VasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Channels
 * const channels = await prisma.channel.findMany()
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
   * // Fetch zero or more Channels
   * const channels = await prisma.channel.findMany()
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
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs>;

  /**
   * `prisma.subChannel`: Exposes CRUD operations for the **SubChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubChannels
    * const subChannels = await prisma.subChannel.findMany()
    * ```
    */
  get subChannel(): Prisma.SubChannelDelegate<ExtArgs>;

  /**
   * `prisma.term`: Exposes CRUD operations for the **Term** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Terms
    * const terms = await prisma.term.findMany()
    * ```
    */
  get term(): Prisma.TermDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;

  /**
   * `prisma.deviceBasket`: Exposes CRUD operations for the **DeviceBasket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceBaskets
    * const deviceBaskets = await prisma.deviceBasket.findMany()
    * ```
    */
  get deviceBasket(): Prisma.DeviceBasketDelegate<ExtArgs>;

  /**
   * `prisma.tariff`: Exposes CRUD operations for the **Tariff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tariffs
    * const tariffs = await prisma.tariff.findMany()
    * ```
    */
  get tariff(): Prisma.TariffDelegate<ExtArgs>;

  /**
   * `prisma.tariffRange`: Exposes CRUD operations for the **TariffRange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TariffRanges
    * const tariffRanges = await prisma.tariffRange.findMany()
    * ```
    */
  get tariffRange(): Prisma.TariffRangeDelegate<ExtArgs>;

  /**
   * `prisma.tariffBasket`: Exposes CRUD operations for the **TariffBasket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TariffBaskets
    * const tariffBaskets = await prisma.tariffBasket.findMany()
    * ```
    */
  get tariffBasket(): Prisma.TariffBasketDelegate<ExtArgs>;

  /**
   * `prisma.vas`: Exposes CRUD operations for the **Vas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vas
    * const vas = await prisma.vas.findMany()
    * ```
    */
  get vas(): Prisma.VasDelegate<ExtArgs>;
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
    Channel: 'Channel',
    SubChannel: 'SubChannel',
    Term: 'Term',
    Device: 'Device',
    DeviceBasket: 'DeviceBasket',
    Tariff: 'Tariff',
    TariffRange: 'TariffRange',
    TariffBasket: 'TariffBasket',
    Vas: 'Vas'
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
      modelProps: "channel" | "subChannel" | "term" | "device" | "deviceBasket" | "tariff" | "tariffRange" | "tariffBasket" | "vas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      SubChannel: {
        payload: Prisma.$SubChannelPayload<ExtArgs>
        fields: Prisma.SubChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>
          }
          findFirst: {
            args: Prisma.SubChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>
          }
          findMany: {
            args: Prisma.SubChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>[]
          }
          create: {
            args: Prisma.SubChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>
          }
          createMany: {
            args: Prisma.SubChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>[]
          }
          delete: {
            args: Prisma.SubChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>
          }
          update: {
            args: Prisma.SubChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>
          }
          deleteMany: {
            args: Prisma.SubChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubChannelPayload>
          }
          aggregate: {
            args: Prisma.SubChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubChannel>
          }
          groupBy: {
            args: Prisma.SubChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubChannelCountArgs<ExtArgs>
            result: $Utils.Optional<SubChannelCountAggregateOutputType> | number
          }
        }
      }
      Term: {
        payload: Prisma.$TermPayload<ExtArgs>
        fields: Prisma.TermFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findFirst: {
            args: Prisma.TermFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          findMany: {
            args: Prisma.TermFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          create: {
            args: Prisma.TermCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          createMany: {
            args: Prisma.TermCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>[]
          }
          delete: {
            args: Prisma.TermDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          update: {
            args: Prisma.TermUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          deleteMany: {
            args: Prisma.TermDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TermUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermPayload>
          }
          aggregate: {
            args: Prisma.TermAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerm>
          }
          groupBy: {
            args: Prisma.TermGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermCountArgs<ExtArgs>
            result: $Utils.Optional<TermCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceBasket: {
        payload: Prisma.$DeviceBasketPayload<ExtArgs>
        fields: Prisma.DeviceBasketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceBasketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceBasketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>
          }
          findFirst: {
            args: Prisma.DeviceBasketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceBasketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>
          }
          findMany: {
            args: Prisma.DeviceBasketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>[]
          }
          create: {
            args: Prisma.DeviceBasketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>
          }
          createMany: {
            args: Prisma.DeviceBasketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceBasketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>[]
          }
          delete: {
            args: Prisma.DeviceBasketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>
          }
          update: {
            args: Prisma.DeviceBasketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>
          }
          deleteMany: {
            args: Prisma.DeviceBasketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceBasketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceBasketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceBasketPayload>
          }
          aggregate: {
            args: Prisma.DeviceBasketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceBasket>
          }
          groupBy: {
            args: Prisma.DeviceBasketGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceBasketGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceBasketCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceBasketCountAggregateOutputType> | number
          }
        }
      }
      Tariff: {
        payload: Prisma.$TariffPayload<ExtArgs>
        fields: Prisma.TariffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          findFirst: {
            args: Prisma.TariffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          findMany: {
            args: Prisma.TariffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>[]
          }
          create: {
            args: Prisma.TariffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          createMany: {
            args: Prisma.TariffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TariffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>[]
          }
          delete: {
            args: Prisma.TariffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          update: {
            args: Prisma.TariffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          deleteMany: {
            args: Prisma.TariffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TariffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffPayload>
          }
          aggregate: {
            args: Prisma.TariffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariff>
          }
          groupBy: {
            args: Prisma.TariffGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffCountArgs<ExtArgs>
            result: $Utils.Optional<TariffCountAggregateOutputType> | number
          }
        }
      }
      TariffRange: {
        payload: Prisma.$TariffRangePayload<ExtArgs>
        fields: Prisma.TariffRangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffRangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffRangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>
          }
          findFirst: {
            args: Prisma.TariffRangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffRangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>
          }
          findMany: {
            args: Prisma.TariffRangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>[]
          }
          create: {
            args: Prisma.TariffRangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>
          }
          createMany: {
            args: Prisma.TariffRangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TariffRangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>[]
          }
          delete: {
            args: Prisma.TariffRangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>
          }
          update: {
            args: Prisma.TariffRangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>
          }
          deleteMany: {
            args: Prisma.TariffRangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffRangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TariffRangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffRangePayload>
          }
          aggregate: {
            args: Prisma.TariffRangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariffRange>
          }
          groupBy: {
            args: Prisma.TariffRangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffRangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffRangeCountArgs<ExtArgs>
            result: $Utils.Optional<TariffRangeCountAggregateOutputType> | number
          }
        }
      }
      TariffBasket: {
        payload: Prisma.$TariffBasketPayload<ExtArgs>
        fields: Prisma.TariffBasketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffBasketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffBasketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>
          }
          findFirst: {
            args: Prisma.TariffBasketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffBasketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>
          }
          findMany: {
            args: Prisma.TariffBasketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>[]
          }
          create: {
            args: Prisma.TariffBasketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>
          }
          createMany: {
            args: Prisma.TariffBasketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TariffBasketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>[]
          }
          delete: {
            args: Prisma.TariffBasketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>
          }
          update: {
            args: Prisma.TariffBasketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>
          }
          deleteMany: {
            args: Prisma.TariffBasketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffBasketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TariffBasketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffBasketPayload>
          }
          aggregate: {
            args: Prisma.TariffBasketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariffBasket>
          }
          groupBy: {
            args: Prisma.TariffBasketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffBasketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffBasketCountArgs<ExtArgs>
            result: $Utils.Optional<TariffBasketCountAggregateOutputType> | number
          }
        }
      }
      Vas: {
        payload: Prisma.$VasPayload<ExtArgs>
        fields: Prisma.VasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>
          }
          findFirst: {
            args: Prisma.VasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>
          }
          findMany: {
            args: Prisma.VasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>[]
          }
          create: {
            args: Prisma.VasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>
          }
          createMany: {
            args: Prisma.VasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>[]
          }
          delete: {
            args: Prisma.VasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>
          }
          update: {
            args: Prisma.VasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>
          }
          deleteMany: {
            args: Prisma.VasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VasPayload>
          }
          aggregate: {
            args: Prisma.VasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVas>
          }
          groupBy: {
            args: Prisma.VasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VasGroupByOutputType>[]
          }
          count: {
            args: Prisma.VasCountArgs<ExtArgs>
            result: $Utils.Optional<VasCountAggregateOutputType> | number
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
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    subChannels: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subChannels?: boolean | ChannelCountOutputTypeCountSubChannelsArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountSubChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubChannelWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    deviceBaskets: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceBaskets?: boolean | DeviceCountOutputTypeCountDeviceBasketsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDeviceBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceBasketWhereInput
  }


  /**
   * Count Type TariffCountOutputType
   */

  export type TariffCountOutputType = {
    tariffRanges: number
    tariffBaskets: number
  }

  export type TariffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffRanges?: boolean | TariffCountOutputTypeCountTariffRangesArgs
    tariffBaskets?: boolean | TariffCountOutputTypeCountTariffBasketsArgs
  }

  // Custom InputTypes
  /**
   * TariffCountOutputType without action
   */
  export type TariffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffCountOutputType
     */
    select?: TariffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TariffCountOutputType without action
   */
  export type TariffCountOutputTypeCountTariffRangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffRangeWhereInput
  }

  /**
   * TariffCountOutputType without action
   */
  export type TariffCountOutputTypeCountTariffBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffBasketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    code: number | null
  }

  export type ChannelSumAggregateOutputType = {
    code: number | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    code: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    code: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    code: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    code?: true
  }

  export type ChannelSumAggregateInputType = {
    code?: true
  }

  export type ChannelMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    code: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subChannels?: boolean | Channel$subChannelsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["channel"]>

  export type ChannelSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subChannels?: boolean | Channel$subChannelsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      subChannels: Prisma.$SubChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {ChannelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, ChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subChannels<T extends Channel$subChannelsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$subChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Channel model
   */ 
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly code: FieldRef<"Channel", 'Int'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly isActive: FieldRef<"Channel", 'Boolean'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel createManyAndReturn
   */
  export type ChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
  }

  /**
   * Channel.subChannels
   */
  export type Channel$subChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    where?: SubChannelWhereInput
    orderBy?: SubChannelOrderByWithRelationInput | SubChannelOrderByWithRelationInput[]
    cursor?: SubChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubChannelScalarFieldEnum | SubChannelScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model SubChannel
   */

  export type AggregateSubChannel = {
    _count: SubChannelCountAggregateOutputType | null
    _min: SubChannelMinAggregateOutputType | null
    _max: SubChannelMaxAggregateOutputType | null
  }

  export type SubChannelMinAggregateOutputType = {
    id: string | null
    channelId: string | null
    name: string | null
    code: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SubChannelMaxAggregateOutputType = {
    id: string | null
    channelId: string | null
    name: string | null
    code: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SubChannelCountAggregateOutputType = {
    id: number
    channelId: number
    name: number
    code: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SubChannelMinAggregateInputType = {
    id?: true
    channelId?: true
    name?: true
    code?: true
    isActive?: true
    createdAt?: true
  }

  export type SubChannelMaxAggregateInputType = {
    id?: true
    channelId?: true
    name?: true
    code?: true
    isActive?: true
    createdAt?: true
  }

  export type SubChannelCountAggregateInputType = {
    id?: true
    channelId?: true
    name?: true
    code?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SubChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubChannel to aggregate.
     */
    where?: SubChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChannels to fetch.
     */
    orderBy?: SubChannelOrderByWithRelationInput | SubChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubChannels
    **/
    _count?: true | SubChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubChannelMaxAggregateInputType
  }

  export type GetSubChannelAggregateType<T extends SubChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateSubChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubChannel[P]>
      : GetScalarType<T[P], AggregateSubChannel[P]>
  }




  export type SubChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubChannelWhereInput
    orderBy?: SubChannelOrderByWithAggregationInput | SubChannelOrderByWithAggregationInput[]
    by: SubChannelScalarFieldEnum[] | SubChannelScalarFieldEnum
    having?: SubChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubChannelCountAggregateInputType | true
    _min?: SubChannelMinAggregateInputType
    _max?: SubChannelMaxAggregateInputType
  }

  export type SubChannelGroupByOutputType = {
    id: string
    channelId: string
    name: string
    code: string
    isActive: boolean
    createdAt: Date
    _count: SubChannelCountAggregateOutputType | null
    _min: SubChannelMinAggregateOutputType | null
    _max: SubChannelMaxAggregateOutputType | null
  }

  type GetSubChannelGroupByPayload<T extends SubChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubChannelGroupByOutputType[P]>
            : GetScalarType<T[P], SubChannelGroupByOutputType[P]>
        }
      >
    >


  export type SubChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subChannel"]>

  export type SubChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    channelId?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subChannel"]>

  export type SubChannelSelectScalar = {
    id?: boolean
    channelId?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SubChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }
  export type SubChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $SubChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubChannel"
    objects: {
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      channelId: string
      name: string
      code: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["subChannel"]>
    composites: {}
  }

  type SubChannelGetPayload<S extends boolean | null | undefined | SubChannelDefaultArgs> = $Result.GetResult<Prisma.$SubChannelPayload, S>

  type SubChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubChannelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubChannelCountAggregateInputType | true
    }

  export interface SubChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubChannel'], meta: { name: 'SubChannel' } }
    /**
     * Find zero or one SubChannel that matches the filter.
     * @param {SubChannelFindUniqueArgs} args - Arguments to find a SubChannel
     * @example
     * // Get one SubChannel
     * const subChannel = await prisma.subChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubChannelFindUniqueArgs>(args: SelectSubset<T, SubChannelFindUniqueArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubChannel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubChannelFindUniqueOrThrowArgs} args - Arguments to find a SubChannel
     * @example
     * // Get one SubChannel
     * const subChannel = await prisma.subChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, SubChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelFindFirstArgs} args - Arguments to find a SubChannel
     * @example
     * // Get one SubChannel
     * const subChannel = await prisma.subChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubChannelFindFirstArgs>(args?: SelectSubset<T, SubChannelFindFirstArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelFindFirstOrThrowArgs} args - Arguments to find a SubChannel
     * @example
     * // Get one SubChannel
     * const subChannel = await prisma.subChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, SubChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubChannels
     * const subChannels = await prisma.subChannel.findMany()
     * 
     * // Get first 10 SubChannels
     * const subChannels = await prisma.subChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subChannelWithIdOnly = await prisma.subChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubChannelFindManyArgs>(args?: SelectSubset<T, SubChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubChannel.
     * @param {SubChannelCreateArgs} args - Arguments to create a SubChannel.
     * @example
     * // Create one SubChannel
     * const SubChannel = await prisma.subChannel.create({
     *   data: {
     *     // ... data to create a SubChannel
     *   }
     * })
     * 
     */
    create<T extends SubChannelCreateArgs>(args: SelectSubset<T, SubChannelCreateArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubChannels.
     * @param {SubChannelCreateManyArgs} args - Arguments to create many SubChannels.
     * @example
     * // Create many SubChannels
     * const subChannel = await prisma.subChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubChannelCreateManyArgs>(args?: SelectSubset<T, SubChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubChannels and returns the data saved in the database.
     * @param {SubChannelCreateManyAndReturnArgs} args - Arguments to create many SubChannels.
     * @example
     * // Create many SubChannels
     * const subChannel = await prisma.subChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubChannels and only return the `id`
     * const subChannelWithIdOnly = await prisma.subChannel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, SubChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubChannel.
     * @param {SubChannelDeleteArgs} args - Arguments to delete one SubChannel.
     * @example
     * // Delete one SubChannel
     * const SubChannel = await prisma.subChannel.delete({
     *   where: {
     *     // ... filter to delete one SubChannel
     *   }
     * })
     * 
     */
    delete<T extends SubChannelDeleteArgs>(args: SelectSubset<T, SubChannelDeleteArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubChannel.
     * @param {SubChannelUpdateArgs} args - Arguments to update one SubChannel.
     * @example
     * // Update one SubChannel
     * const subChannel = await prisma.subChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubChannelUpdateArgs>(args: SelectSubset<T, SubChannelUpdateArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubChannels.
     * @param {SubChannelDeleteManyArgs} args - Arguments to filter SubChannels to delete.
     * @example
     * // Delete a few SubChannels
     * const { count } = await prisma.subChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubChannelDeleteManyArgs>(args?: SelectSubset<T, SubChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubChannels
     * const subChannel = await prisma.subChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubChannelUpdateManyArgs>(args: SelectSubset<T, SubChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubChannel.
     * @param {SubChannelUpsertArgs} args - Arguments to update or create a SubChannel.
     * @example
     * // Update or create a SubChannel
     * const subChannel = await prisma.subChannel.upsert({
     *   create: {
     *     // ... data to create a SubChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubChannel we want to update
     *   }
     * })
     */
    upsert<T extends SubChannelUpsertArgs>(args: SelectSubset<T, SubChannelUpsertArgs<ExtArgs>>): Prisma__SubChannelClient<$Result.GetResult<Prisma.$SubChannelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelCountArgs} args - Arguments to filter SubChannels to count.
     * @example
     * // Count the number of SubChannels
     * const count = await prisma.subChannel.count({
     *   where: {
     *     // ... the filter for the SubChannels we want to count
     *   }
     * })
    **/
    count<T extends SubChannelCountArgs>(
      args?: Subset<T, SubChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubChannelAggregateArgs>(args: Subset<T, SubChannelAggregateArgs>): Prisma.PrismaPromise<GetSubChannelAggregateType<T>>

    /**
     * Group by SubChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubChannelGroupByArgs} args - Group by arguments.
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
      T extends SubChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubChannelGroupByArgs['orderBy'] }
        : { orderBy?: SubChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubChannel model
   */
  readonly fields: SubChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SubChannel model
   */ 
  interface SubChannelFieldRefs {
    readonly id: FieldRef<"SubChannel", 'String'>
    readonly channelId: FieldRef<"SubChannel", 'String'>
    readonly name: FieldRef<"SubChannel", 'String'>
    readonly code: FieldRef<"SubChannel", 'String'>
    readonly isActive: FieldRef<"SubChannel", 'Boolean'>
    readonly createdAt: FieldRef<"SubChannel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubChannel findUnique
   */
  export type SubChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * Filter, which SubChannel to fetch.
     */
    where: SubChannelWhereUniqueInput
  }

  /**
   * SubChannel findUniqueOrThrow
   */
  export type SubChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * Filter, which SubChannel to fetch.
     */
    where: SubChannelWhereUniqueInput
  }

  /**
   * SubChannel findFirst
   */
  export type SubChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * Filter, which SubChannel to fetch.
     */
    where?: SubChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChannels to fetch.
     */
    orderBy?: SubChannelOrderByWithRelationInput | SubChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubChannels.
     */
    cursor?: SubChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubChannels.
     */
    distinct?: SubChannelScalarFieldEnum | SubChannelScalarFieldEnum[]
  }

  /**
   * SubChannel findFirstOrThrow
   */
  export type SubChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * Filter, which SubChannel to fetch.
     */
    where?: SubChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChannels to fetch.
     */
    orderBy?: SubChannelOrderByWithRelationInput | SubChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubChannels.
     */
    cursor?: SubChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubChannels.
     */
    distinct?: SubChannelScalarFieldEnum | SubChannelScalarFieldEnum[]
  }

  /**
   * SubChannel findMany
   */
  export type SubChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * Filter, which SubChannels to fetch.
     */
    where?: SubChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubChannels to fetch.
     */
    orderBy?: SubChannelOrderByWithRelationInput | SubChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubChannels.
     */
    cursor?: SubChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubChannels.
     */
    skip?: number
    distinct?: SubChannelScalarFieldEnum | SubChannelScalarFieldEnum[]
  }

  /**
   * SubChannel create
   */
  export type SubChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a SubChannel.
     */
    data: XOR<SubChannelCreateInput, SubChannelUncheckedCreateInput>
  }

  /**
   * SubChannel createMany
   */
  export type SubChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubChannels.
     */
    data: SubChannelCreateManyInput | SubChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubChannel createManyAndReturn
   */
  export type SubChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubChannels.
     */
    data: SubChannelCreateManyInput | SubChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubChannel update
   */
  export type SubChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a SubChannel.
     */
    data: XOR<SubChannelUpdateInput, SubChannelUncheckedUpdateInput>
    /**
     * Choose, which SubChannel to update.
     */
    where: SubChannelWhereUniqueInput
  }

  /**
   * SubChannel updateMany
   */
  export type SubChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubChannels.
     */
    data: XOR<SubChannelUpdateManyMutationInput, SubChannelUncheckedUpdateManyInput>
    /**
     * Filter which SubChannels to update
     */
    where?: SubChannelWhereInput
  }

  /**
   * SubChannel upsert
   */
  export type SubChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the SubChannel to update in case it exists.
     */
    where: SubChannelWhereUniqueInput
    /**
     * In case the SubChannel found by the `where` argument doesn't exist, create a new SubChannel with this data.
     */
    create: XOR<SubChannelCreateInput, SubChannelUncheckedCreateInput>
    /**
     * In case the SubChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubChannelUpdateInput, SubChannelUncheckedUpdateInput>
  }

  /**
   * SubChannel delete
   */
  export type SubChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
    /**
     * Filter which SubChannel to delete.
     */
    where: SubChannelWhereUniqueInput
  }

  /**
   * SubChannel deleteMany
   */
  export type SubChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubChannels to delete
     */
    where?: SubChannelWhereInput
  }

  /**
   * SubChannel without action
   */
  export type SubChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubChannel
     */
    select?: SubChannelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubChannelInclude<ExtArgs> | null
  }


  /**
   * Model Term
   */

  export type AggregateTerm = {
    _count: TermCountAggregateOutputType | null
    _avg: TermAvgAggregateOutputType | null
    _sum: TermSumAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  export type TermAvgAggregateOutputType = {
    months: number | null
  }

  export type TermSumAggregateOutputType = {
    months: number | null
  }

  export type TermMinAggregateOutputType = {
    id: string | null
    months: number | null
    displayName: string | null
    isActive: boolean | null
  }

  export type TermMaxAggregateOutputType = {
    id: string | null
    months: number | null
    displayName: string | null
    isActive: boolean | null
  }

  export type TermCountAggregateOutputType = {
    id: number
    months: number
    displayName: number
    isActive: number
    _all: number
  }


  export type TermAvgAggregateInputType = {
    months?: true
  }

  export type TermSumAggregateInputType = {
    months?: true
  }

  export type TermMinAggregateInputType = {
    id?: true
    months?: true
    displayName?: true
    isActive?: true
  }

  export type TermMaxAggregateInputType = {
    id?: true
    months?: true
    displayName?: true
    isActive?: true
  }

  export type TermCountAggregateInputType = {
    id?: true
    months?: true
    displayName?: true
    isActive?: true
    _all?: true
  }

  export type TermAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Term to aggregate.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Terms
    **/
    _count?: true | TermCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermMaxAggregateInputType
  }

  export type GetTermAggregateType<T extends TermAggregateArgs> = {
        [P in keyof T & keyof AggregateTerm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerm[P]>
      : GetScalarType<T[P], AggregateTerm[P]>
  }




  export type TermGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermWhereInput
    orderBy?: TermOrderByWithAggregationInput | TermOrderByWithAggregationInput[]
    by: TermScalarFieldEnum[] | TermScalarFieldEnum
    having?: TermScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermCountAggregateInputType | true
    _avg?: TermAvgAggregateInputType
    _sum?: TermSumAggregateInputType
    _min?: TermMinAggregateInputType
    _max?: TermMaxAggregateInputType
  }

  export type TermGroupByOutputType = {
    id: string
    months: number
    displayName: string
    isActive: boolean
    _count: TermCountAggregateOutputType | null
    _avg: TermAvgAggregateOutputType | null
    _sum: TermSumAggregateOutputType | null
    _min: TermMinAggregateOutputType | null
    _max: TermMaxAggregateOutputType | null
  }

  type GetTermGroupByPayload<T extends TermGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermGroupByOutputType[P]>
            : GetScalarType<T[P], TermGroupByOutputType[P]>
        }
      >
    >


  export type TermSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    months?: boolean
    displayName?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["term"]>

  export type TermSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    months?: boolean
    displayName?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["term"]>

  export type TermSelectScalar = {
    id?: boolean
    months?: boolean
    displayName?: boolean
    isActive?: boolean
  }


  export type $TermPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Term"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      months: number
      displayName: string
      isActive: boolean
    }, ExtArgs["result"]["term"]>
    composites: {}
  }

  type TermGetPayload<S extends boolean | null | undefined | TermDefaultArgs> = $Result.GetResult<Prisma.$TermPayload, S>

  type TermCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TermFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TermCountAggregateInputType | true
    }

  export interface TermDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Term'], meta: { name: 'Term' } }
    /**
     * Find zero or one Term that matches the filter.
     * @param {TermFindUniqueArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermFindUniqueArgs>(args: SelectSubset<T, TermFindUniqueArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Term that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TermFindUniqueOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermFindUniqueOrThrowArgs>(args: SelectSubset<T, TermFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Term that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermFindFirstArgs>(args?: SelectSubset<T, TermFindFirstArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Term that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindFirstOrThrowArgs} args - Arguments to find a Term
     * @example
     * // Get one Term
     * const term = await prisma.term.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermFindFirstOrThrowArgs>(args?: SelectSubset<T, TermFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Terms
     * const terms = await prisma.term.findMany()
     * 
     * // Get first 10 Terms
     * const terms = await prisma.term.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termWithIdOnly = await prisma.term.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermFindManyArgs>(args?: SelectSubset<T, TermFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Term.
     * @param {TermCreateArgs} args - Arguments to create a Term.
     * @example
     * // Create one Term
     * const Term = await prisma.term.create({
     *   data: {
     *     // ... data to create a Term
     *   }
     * })
     * 
     */
    create<T extends TermCreateArgs>(args: SelectSubset<T, TermCreateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Terms.
     * @param {TermCreateManyArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermCreateManyArgs>(args?: SelectSubset<T, TermCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Terms and returns the data saved in the database.
     * @param {TermCreateManyAndReturnArgs} args - Arguments to create many Terms.
     * @example
     * // Create many Terms
     * const term = await prisma.term.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Terms and only return the `id`
     * const termWithIdOnly = await prisma.term.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermCreateManyAndReturnArgs>(args?: SelectSubset<T, TermCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Term.
     * @param {TermDeleteArgs} args - Arguments to delete one Term.
     * @example
     * // Delete one Term
     * const Term = await prisma.term.delete({
     *   where: {
     *     // ... filter to delete one Term
     *   }
     * })
     * 
     */
    delete<T extends TermDeleteArgs>(args: SelectSubset<T, TermDeleteArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Term.
     * @param {TermUpdateArgs} args - Arguments to update one Term.
     * @example
     * // Update one Term
     * const term = await prisma.term.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermUpdateArgs>(args: SelectSubset<T, TermUpdateArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Terms.
     * @param {TermDeleteManyArgs} args - Arguments to filter Terms to delete.
     * @example
     * // Delete a few Terms
     * const { count } = await prisma.term.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermDeleteManyArgs>(args?: SelectSubset<T, TermDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Terms
     * const term = await prisma.term.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermUpdateManyArgs>(args: SelectSubset<T, TermUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Term.
     * @param {TermUpsertArgs} args - Arguments to update or create a Term.
     * @example
     * // Update or create a Term
     * const term = await prisma.term.upsert({
     *   create: {
     *     // ... data to create a Term
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Term we want to update
     *   }
     * })
     */
    upsert<T extends TermUpsertArgs>(args: SelectSubset<T, TermUpsertArgs<ExtArgs>>): Prisma__TermClient<$Result.GetResult<Prisma.$TermPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermCountArgs} args - Arguments to filter Terms to count.
     * @example
     * // Count the number of Terms
     * const count = await prisma.term.count({
     *   where: {
     *     // ... the filter for the Terms we want to count
     *   }
     * })
    **/
    count<T extends TermCountArgs>(
      args?: Subset<T, TermCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TermAggregateArgs>(args: Subset<T, TermAggregateArgs>): Prisma.PrismaPromise<GetTermAggregateType<T>>

    /**
     * Group by Term.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermGroupByArgs} args - Group by arguments.
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
      T extends TermGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermGroupByArgs['orderBy'] }
        : { orderBy?: TermGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TermGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Term model
   */
  readonly fields: TermFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Term.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Term model
   */ 
  interface TermFieldRefs {
    readonly id: FieldRef<"Term", 'String'>
    readonly months: FieldRef<"Term", 'Int'>
    readonly displayName: FieldRef<"Term", 'String'>
    readonly isActive: FieldRef<"Term", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Term findUnique
   */
  export type TermFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findUniqueOrThrow
   */
  export type TermFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term findFirst
   */
  export type TermFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findFirstOrThrow
   */
  export type TermFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Filter, which Term to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Terms.
     */
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term findMany
   */
  export type TermFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Filter, which Terms to fetch.
     */
    where?: TermWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Terms to fetch.
     */
    orderBy?: TermOrderByWithRelationInput | TermOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Terms.
     */
    cursor?: TermWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Terms.
     */
    skip?: number
    distinct?: TermScalarFieldEnum | TermScalarFieldEnum[]
  }

  /**
   * Term create
   */
  export type TermCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * The data needed to create a Term.
     */
    data: XOR<TermCreateInput, TermUncheckedCreateInput>
  }

  /**
   * Term createMany
   */
  export type TermCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Term createManyAndReturn
   */
  export type TermCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Terms.
     */
    data: TermCreateManyInput | TermCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Term update
   */
  export type TermUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * The data needed to update a Term.
     */
    data: XOR<TermUpdateInput, TermUncheckedUpdateInput>
    /**
     * Choose, which Term to update.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term updateMany
   */
  export type TermUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Terms.
     */
    data: XOR<TermUpdateManyMutationInput, TermUncheckedUpdateManyInput>
    /**
     * Filter which Terms to update
     */
    where?: TermWhereInput
  }

  /**
   * Term upsert
   */
  export type TermUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * The filter to search for the Term to update in case it exists.
     */
    where: TermWhereUniqueInput
    /**
     * In case the Term found by the `where` argument doesn't exist, create a new Term with this data.
     */
    create: XOR<TermCreateInput, TermUncheckedCreateInput>
    /**
     * In case the Term was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermUpdateInput, TermUncheckedUpdateInput>
  }

  /**
   * Term delete
   */
  export type TermDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
    /**
     * Filter which Term to delete.
     */
    where: TermWhereUniqueInput
  }

  /**
   * Term deleteMany
   */
  export type TermDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Terms to delete
     */
    where?: TermWhereInput
  }

  /**
   * Term without action
   */
  export type TermDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Term
     */
    select?: TermSelect<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    storageGb: number | null
    handsetCost: Decimal | null
    retailPrice: Decimal | null
  }

  export type DeviceSumAggregateOutputType = {
    storageGb: number | null
    handsetCost: Decimal | null
    retailPrice: Decimal | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    oemCode: string | null
    model: string | null
    colour: string | null
    storageGb: number | null
    category: string | null
    handsetCost: Decimal | null
    retailPrice: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    oemCode: string | null
    model: string | null
    colour: string | null
    storageGb: number | null
    category: string | null
    handsetCost: Decimal | null
    retailPrice: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    oemCode: number
    model: number
    colour: number
    storageGb: number
    category: number
    handsetCost: number
    retailPrice: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    storageGb?: true
    handsetCost?: true
    retailPrice?: true
  }

  export type DeviceSumAggregateInputType = {
    storageGb?: true
    handsetCost?: true
    retailPrice?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    oemCode?: true
    model?: true
    colour?: true
    storageGb?: true
    category?: true
    handsetCost?: true
    retailPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    oemCode?: true
    model?: true
    colour?: true
    storageGb?: true
    category?: true
    handsetCost?: true
    retailPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    oemCode?: true
    model?: true
    colour?: true
    storageGb?: true
    category?: true
    handsetCost?: true
    retailPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    oemCode: string
    model: string
    colour: string | null
    storageGb: number | null
    category: string | null
    handsetCost: Decimal
    retailPrice: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oemCode?: boolean
    model?: boolean
    colour?: boolean
    storageGb?: boolean
    category?: boolean
    handsetCost?: boolean
    retailPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deviceBaskets?: boolean | Device$deviceBasketsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oemCode?: boolean
    model?: boolean
    colour?: boolean
    storageGb?: boolean
    category?: boolean
    handsetCost?: boolean
    retailPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    oemCode?: boolean
    model?: boolean
    colour?: boolean
    storageGb?: boolean
    category?: boolean
    handsetCost?: boolean
    retailPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceBaskets?: boolean | Device$deviceBasketsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      deviceBaskets: Prisma.$DeviceBasketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      oemCode: string
      model: string
      colour: string | null
      storageGb: number | null
      category: string | null
      handsetCost: Prisma.Decimal
      retailPrice: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deviceBaskets<T extends Device$deviceBasketsArgs<ExtArgs> = {}>(args?: Subset<T, Device$deviceBasketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly oemCode: FieldRef<"Device", 'String'>
    readonly model: FieldRef<"Device", 'String'>
    readonly colour: FieldRef<"Device", 'String'>
    readonly storageGb: FieldRef<"Device", 'Int'>
    readonly category: FieldRef<"Device", 'String'>
    readonly handsetCost: FieldRef<"Device", 'Decimal'>
    readonly retailPrice: FieldRef<"Device", 'Decimal'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }

  /**
   * Device.deviceBaskets
   */
  export type Device$deviceBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    where?: DeviceBasketWhereInput
    orderBy?: DeviceBasketOrderByWithRelationInput | DeviceBasketOrderByWithRelationInput[]
    cursor?: DeviceBasketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceBasketScalarFieldEnum | DeviceBasketScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceBasket
   */

  export type AggregateDeviceBasket = {
    _count: DeviceBasketCountAggregateOutputType | null
    _min: DeviceBasketMinAggregateOutputType | null
    _max: DeviceBasketMaxAggregateOutputType | null
  }

  export type DeviceBasketMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    deviceId: string | null
    createdAt: Date | null
  }

  export type DeviceBasketMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    deviceId: string | null
    createdAt: Date | null
  }

  export type DeviceBasketCountAggregateOutputType = {
    id: number
    cycleId: number
    deviceId: number
    createdAt: number
    _all: number
  }


  export type DeviceBasketMinAggregateInputType = {
    id?: true
    cycleId?: true
    deviceId?: true
    createdAt?: true
  }

  export type DeviceBasketMaxAggregateInputType = {
    id?: true
    cycleId?: true
    deviceId?: true
    createdAt?: true
  }

  export type DeviceBasketCountAggregateInputType = {
    id?: true
    cycleId?: true
    deviceId?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceBasketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceBasket to aggregate.
     */
    where?: DeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceBaskets to fetch.
     */
    orderBy?: DeviceBasketOrderByWithRelationInput | DeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceBaskets
    **/
    _count?: true | DeviceBasketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceBasketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceBasketMaxAggregateInputType
  }

  export type GetDeviceBasketAggregateType<T extends DeviceBasketAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceBasket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceBasket[P]>
      : GetScalarType<T[P], AggregateDeviceBasket[P]>
  }




  export type DeviceBasketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceBasketWhereInput
    orderBy?: DeviceBasketOrderByWithAggregationInput | DeviceBasketOrderByWithAggregationInput[]
    by: DeviceBasketScalarFieldEnum[] | DeviceBasketScalarFieldEnum
    having?: DeviceBasketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceBasketCountAggregateInputType | true
    _min?: DeviceBasketMinAggregateInputType
    _max?: DeviceBasketMaxAggregateInputType
  }

  export type DeviceBasketGroupByOutputType = {
    id: string
    cycleId: string
    deviceId: string
    createdAt: Date
    _count: DeviceBasketCountAggregateOutputType | null
    _min: DeviceBasketMinAggregateOutputType | null
    _max: DeviceBasketMaxAggregateOutputType | null
  }

  type GetDeviceBasketGroupByPayload<T extends DeviceBasketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceBasketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceBasketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceBasketGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceBasketGroupByOutputType[P]>
        }
      >
    >


  export type DeviceBasketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    deviceId?: boolean
    createdAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceBasket"]>

  export type DeviceBasketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    deviceId?: boolean
    createdAt?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceBasket"]>

  export type DeviceBasketSelectScalar = {
    id?: boolean
    cycleId?: boolean
    deviceId?: boolean
    createdAt?: boolean
  }

  export type DeviceBasketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceBasketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceBasketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceBasket"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string
      deviceId: string
      createdAt: Date
    }, ExtArgs["result"]["deviceBasket"]>
    composites: {}
  }

  type DeviceBasketGetPayload<S extends boolean | null | undefined | DeviceBasketDefaultArgs> = $Result.GetResult<Prisma.$DeviceBasketPayload, S>

  type DeviceBasketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceBasketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceBasketCountAggregateInputType | true
    }

  export interface DeviceBasketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceBasket'], meta: { name: 'DeviceBasket' } }
    /**
     * Find zero or one DeviceBasket that matches the filter.
     * @param {DeviceBasketFindUniqueArgs} args - Arguments to find a DeviceBasket
     * @example
     * // Get one DeviceBasket
     * const deviceBasket = await prisma.deviceBasket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceBasketFindUniqueArgs>(args: SelectSubset<T, DeviceBasketFindUniqueArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeviceBasket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceBasketFindUniqueOrThrowArgs} args - Arguments to find a DeviceBasket
     * @example
     * // Get one DeviceBasket
     * const deviceBasket = await prisma.deviceBasket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceBasketFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceBasketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeviceBasket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketFindFirstArgs} args - Arguments to find a DeviceBasket
     * @example
     * // Get one DeviceBasket
     * const deviceBasket = await prisma.deviceBasket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceBasketFindFirstArgs>(args?: SelectSubset<T, DeviceBasketFindFirstArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeviceBasket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketFindFirstOrThrowArgs} args - Arguments to find a DeviceBasket
     * @example
     * // Get one DeviceBasket
     * const deviceBasket = await prisma.deviceBasket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceBasketFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceBasketFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeviceBaskets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceBaskets
     * const deviceBaskets = await prisma.deviceBasket.findMany()
     * 
     * // Get first 10 DeviceBaskets
     * const deviceBaskets = await prisma.deviceBasket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceBasketWithIdOnly = await prisma.deviceBasket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceBasketFindManyArgs>(args?: SelectSubset<T, DeviceBasketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeviceBasket.
     * @param {DeviceBasketCreateArgs} args - Arguments to create a DeviceBasket.
     * @example
     * // Create one DeviceBasket
     * const DeviceBasket = await prisma.deviceBasket.create({
     *   data: {
     *     // ... data to create a DeviceBasket
     *   }
     * })
     * 
     */
    create<T extends DeviceBasketCreateArgs>(args: SelectSubset<T, DeviceBasketCreateArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeviceBaskets.
     * @param {DeviceBasketCreateManyArgs} args - Arguments to create many DeviceBaskets.
     * @example
     * // Create many DeviceBaskets
     * const deviceBasket = await prisma.deviceBasket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceBasketCreateManyArgs>(args?: SelectSubset<T, DeviceBasketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceBaskets and returns the data saved in the database.
     * @param {DeviceBasketCreateManyAndReturnArgs} args - Arguments to create many DeviceBaskets.
     * @example
     * // Create many DeviceBaskets
     * const deviceBasket = await prisma.deviceBasket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceBaskets and only return the `id`
     * const deviceBasketWithIdOnly = await prisma.deviceBasket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceBasketCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceBasketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeviceBasket.
     * @param {DeviceBasketDeleteArgs} args - Arguments to delete one DeviceBasket.
     * @example
     * // Delete one DeviceBasket
     * const DeviceBasket = await prisma.deviceBasket.delete({
     *   where: {
     *     // ... filter to delete one DeviceBasket
     *   }
     * })
     * 
     */
    delete<T extends DeviceBasketDeleteArgs>(args: SelectSubset<T, DeviceBasketDeleteArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeviceBasket.
     * @param {DeviceBasketUpdateArgs} args - Arguments to update one DeviceBasket.
     * @example
     * // Update one DeviceBasket
     * const deviceBasket = await prisma.deviceBasket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceBasketUpdateArgs>(args: SelectSubset<T, DeviceBasketUpdateArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeviceBaskets.
     * @param {DeviceBasketDeleteManyArgs} args - Arguments to filter DeviceBaskets to delete.
     * @example
     * // Delete a few DeviceBaskets
     * const { count } = await prisma.deviceBasket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceBasketDeleteManyArgs>(args?: SelectSubset<T, DeviceBasketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceBaskets
     * const deviceBasket = await prisma.deviceBasket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceBasketUpdateManyArgs>(args: SelectSubset<T, DeviceBasketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceBasket.
     * @param {DeviceBasketUpsertArgs} args - Arguments to update or create a DeviceBasket.
     * @example
     * // Update or create a DeviceBasket
     * const deviceBasket = await prisma.deviceBasket.upsert({
     *   create: {
     *     // ... data to create a DeviceBasket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceBasket we want to update
     *   }
     * })
     */
    upsert<T extends DeviceBasketUpsertArgs>(args: SelectSubset<T, DeviceBasketUpsertArgs<ExtArgs>>): Prisma__DeviceBasketClient<$Result.GetResult<Prisma.$DeviceBasketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeviceBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketCountArgs} args - Arguments to filter DeviceBaskets to count.
     * @example
     * // Count the number of DeviceBaskets
     * const count = await prisma.deviceBasket.count({
     *   where: {
     *     // ... the filter for the DeviceBaskets we want to count
     *   }
     * })
    **/
    count<T extends DeviceBasketCountArgs>(
      args?: Subset<T, DeviceBasketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceBasketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceBasketAggregateArgs>(args: Subset<T, DeviceBasketAggregateArgs>): Prisma.PrismaPromise<GetDeviceBasketAggregateType<T>>

    /**
     * Group by DeviceBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceBasketGroupByArgs} args - Group by arguments.
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
      T extends DeviceBasketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceBasketGroupByArgs['orderBy'] }
        : { orderBy?: DeviceBasketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceBasketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceBasketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceBasket model
   */
  readonly fields: DeviceBasketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceBasket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceBasketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DeviceBasket model
   */ 
  interface DeviceBasketFieldRefs {
    readonly id: FieldRef<"DeviceBasket", 'String'>
    readonly cycleId: FieldRef<"DeviceBasket", 'String'>
    readonly deviceId: FieldRef<"DeviceBasket", 'String'>
    readonly createdAt: FieldRef<"DeviceBasket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceBasket findUnique
   */
  export type DeviceBasketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DeviceBasket to fetch.
     */
    where: DeviceBasketWhereUniqueInput
  }

  /**
   * DeviceBasket findUniqueOrThrow
   */
  export type DeviceBasketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DeviceBasket to fetch.
     */
    where: DeviceBasketWhereUniqueInput
  }

  /**
   * DeviceBasket findFirst
   */
  export type DeviceBasketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DeviceBasket to fetch.
     */
    where?: DeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceBaskets to fetch.
     */
    orderBy?: DeviceBasketOrderByWithRelationInput | DeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceBaskets.
     */
    cursor?: DeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceBaskets.
     */
    distinct?: DeviceBasketScalarFieldEnum | DeviceBasketScalarFieldEnum[]
  }

  /**
   * DeviceBasket findFirstOrThrow
   */
  export type DeviceBasketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DeviceBasket to fetch.
     */
    where?: DeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceBaskets to fetch.
     */
    orderBy?: DeviceBasketOrderByWithRelationInput | DeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceBaskets.
     */
    cursor?: DeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceBaskets.
     */
    distinct?: DeviceBasketScalarFieldEnum | DeviceBasketScalarFieldEnum[]
  }

  /**
   * DeviceBasket findMany
   */
  export type DeviceBasketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * Filter, which DeviceBaskets to fetch.
     */
    where?: DeviceBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceBaskets to fetch.
     */
    orderBy?: DeviceBasketOrderByWithRelationInput | DeviceBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceBaskets.
     */
    cursor?: DeviceBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceBaskets.
     */
    skip?: number
    distinct?: DeviceBasketScalarFieldEnum | DeviceBasketScalarFieldEnum[]
  }

  /**
   * DeviceBasket create
   */
  export type DeviceBasketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceBasket.
     */
    data: XOR<DeviceBasketCreateInput, DeviceBasketUncheckedCreateInput>
  }

  /**
   * DeviceBasket createMany
   */
  export type DeviceBasketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceBaskets.
     */
    data: DeviceBasketCreateManyInput | DeviceBasketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceBasket createManyAndReturn
   */
  export type DeviceBasketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeviceBaskets.
     */
    data: DeviceBasketCreateManyInput | DeviceBasketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceBasket update
   */
  export type DeviceBasketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceBasket.
     */
    data: XOR<DeviceBasketUpdateInput, DeviceBasketUncheckedUpdateInput>
    /**
     * Choose, which DeviceBasket to update.
     */
    where: DeviceBasketWhereUniqueInput
  }

  /**
   * DeviceBasket updateMany
   */
  export type DeviceBasketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceBaskets.
     */
    data: XOR<DeviceBasketUpdateManyMutationInput, DeviceBasketUncheckedUpdateManyInput>
    /**
     * Filter which DeviceBaskets to update
     */
    where?: DeviceBasketWhereInput
  }

  /**
   * DeviceBasket upsert
   */
  export type DeviceBasketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceBasket to update in case it exists.
     */
    where: DeviceBasketWhereUniqueInput
    /**
     * In case the DeviceBasket found by the `where` argument doesn't exist, create a new DeviceBasket with this data.
     */
    create: XOR<DeviceBasketCreateInput, DeviceBasketUncheckedCreateInput>
    /**
     * In case the DeviceBasket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceBasketUpdateInput, DeviceBasketUncheckedUpdateInput>
  }

  /**
   * DeviceBasket delete
   */
  export type DeviceBasketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
    /**
     * Filter which DeviceBasket to delete.
     */
    where: DeviceBasketWhereUniqueInput
  }

  /**
   * DeviceBasket deleteMany
   */
  export type DeviceBasketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceBaskets to delete
     */
    where?: DeviceBasketWhereInput
  }

  /**
   * DeviceBasket without action
   */
  export type DeviceBasketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceBasket
     */
    select?: DeviceBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceBasketInclude<ExtArgs> | null
  }


  /**
   * Model Tariff
   */

  export type AggregateTariff = {
    _count: TariffCountAggregateOutputType | null
    _avg: TariffAvgAggregateOutputType | null
    _sum: TariffSumAggregateOutputType | null
    _min: TariffMinAggregateOutputType | null
    _max: TariffMaxAggregateOutputType | null
  }

  export type TariffAvgAggregateOutputType = {
    monthlyFee: Decimal | null
    dataMb: number | null
    minutesPerMonth: number | null
    smsPerMonth: number | null
  }

  export type TariffSumAggregateOutputType = {
    monthlyFee: Decimal | null
    dataMb: number | null
    minutesPerMonth: number | null
    smsPerMonth: number | null
  }

  export type TariffMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    type: string | null
    subType: string | null
    monthlyFee: Decimal | null
    dataMb: number | null
    isUnlimitedData: boolean | null
    minutesPerMonth: number | null
    smsPerMonth: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    type: string | null
    subType: string | null
    monthlyFee: Decimal | null
    dataMb: number | null
    isUnlimitedData: boolean | null
    minutesPerMonth: number | null
    smsPerMonth: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffCountAggregateOutputType = {
    id: number
    code: number
    name: number
    type: number
    subType: number
    monthlyFee: number
    dataMb: number
    isUnlimitedData: number
    minutesPerMonth: number
    smsPerMonth: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TariffAvgAggregateInputType = {
    monthlyFee?: true
    dataMb?: true
    minutesPerMonth?: true
    smsPerMonth?: true
  }

  export type TariffSumAggregateInputType = {
    monthlyFee?: true
    dataMb?: true
    minutesPerMonth?: true
    smsPerMonth?: true
  }

  export type TariffMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    subType?: true
    monthlyFee?: true
    dataMb?: true
    isUnlimitedData?: true
    minutesPerMonth?: true
    smsPerMonth?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    subType?: true
    monthlyFee?: true
    dataMb?: true
    isUnlimitedData?: true
    minutesPerMonth?: true
    smsPerMonth?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    subType?: true
    monthlyFee?: true
    dataMb?: true
    isUnlimitedData?: true
    minutesPerMonth?: true
    smsPerMonth?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TariffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tariff to aggregate.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tariffs
    **/
    _count?: true | TariffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffMaxAggregateInputType
  }

  export type GetTariffAggregateType<T extends TariffAggregateArgs> = {
        [P in keyof T & keyof AggregateTariff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariff[P]>
      : GetScalarType<T[P], AggregateTariff[P]>
  }




  export type TariffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffWhereInput
    orderBy?: TariffOrderByWithAggregationInput | TariffOrderByWithAggregationInput[]
    by: TariffScalarFieldEnum[] | TariffScalarFieldEnum
    having?: TariffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffCountAggregateInputType | true
    _avg?: TariffAvgAggregateInputType
    _sum?: TariffSumAggregateInputType
    _min?: TariffMinAggregateInputType
    _max?: TariffMaxAggregateInputType
  }

  export type TariffGroupByOutputType = {
    id: string
    code: string
    name: string
    type: string
    subType: string | null
    monthlyFee: Decimal
    dataMb: number | null
    isUnlimitedData: boolean
    minutesPerMonth: number | null
    smsPerMonth: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TariffCountAggregateOutputType | null
    _avg: TariffAvgAggregateOutputType | null
    _sum: TariffSumAggregateOutputType | null
    _min: TariffMinAggregateOutputType | null
    _max: TariffMaxAggregateOutputType | null
  }

  type GetTariffGroupByPayload<T extends TariffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffGroupByOutputType[P]>
            : GetScalarType<T[P], TariffGroupByOutputType[P]>
        }
      >
    >


  export type TariffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    subType?: boolean
    monthlyFee?: boolean
    dataMb?: boolean
    isUnlimitedData?: boolean
    minutesPerMonth?: boolean
    smsPerMonth?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tariffRanges?: boolean | Tariff$tariffRangesArgs<ExtArgs>
    tariffBaskets?: boolean | Tariff$tariffBasketsArgs<ExtArgs>
    _count?: boolean | TariffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariff"]>

  export type TariffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    subType?: boolean
    monthlyFee?: boolean
    dataMb?: boolean
    isUnlimitedData?: boolean
    minutesPerMonth?: boolean
    smsPerMonth?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tariff"]>

  export type TariffSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    subType?: boolean
    monthlyFee?: boolean
    dataMb?: boolean
    isUnlimitedData?: boolean
    minutesPerMonth?: boolean
    smsPerMonth?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TariffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariffRanges?: boolean | Tariff$tariffRangesArgs<ExtArgs>
    tariffBaskets?: boolean | Tariff$tariffBasketsArgs<ExtArgs>
    _count?: boolean | TariffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TariffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TariffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tariff"
    objects: {
      tariffRanges: Prisma.$TariffRangePayload<ExtArgs>[]
      tariffBaskets: Prisma.$TariffBasketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      type: string
      subType: string | null
      monthlyFee: Prisma.Decimal
      dataMb: number | null
      isUnlimitedData: boolean
      minutesPerMonth: number | null
      smsPerMonth: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tariff"]>
    composites: {}
  }

  type TariffGetPayload<S extends boolean | null | undefined | TariffDefaultArgs> = $Result.GetResult<Prisma.$TariffPayload, S>

  type TariffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TariffFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TariffCountAggregateInputType | true
    }

  export interface TariffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tariff'], meta: { name: 'Tariff' } }
    /**
     * Find zero or one Tariff that matches the filter.
     * @param {TariffFindUniqueArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffFindUniqueArgs>(args: SelectSubset<T, TariffFindUniqueArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tariff that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TariffFindUniqueOrThrowArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tariff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindFirstArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffFindFirstArgs>(args?: SelectSubset<T, TariffFindFirstArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tariff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindFirstOrThrowArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tariffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tariffs
     * const tariffs = await prisma.tariff.findMany()
     * 
     * // Get first 10 Tariffs
     * const tariffs = await prisma.tariff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffWithIdOnly = await prisma.tariff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TariffFindManyArgs>(args?: SelectSubset<T, TariffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tariff.
     * @param {TariffCreateArgs} args - Arguments to create a Tariff.
     * @example
     * // Create one Tariff
     * const Tariff = await prisma.tariff.create({
     *   data: {
     *     // ... data to create a Tariff
     *   }
     * })
     * 
     */
    create<T extends TariffCreateArgs>(args: SelectSubset<T, TariffCreateArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tariffs.
     * @param {TariffCreateManyArgs} args - Arguments to create many Tariffs.
     * @example
     * // Create many Tariffs
     * const tariff = await prisma.tariff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffCreateManyArgs>(args?: SelectSubset<T, TariffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tariffs and returns the data saved in the database.
     * @param {TariffCreateManyAndReturnArgs} args - Arguments to create many Tariffs.
     * @example
     * // Create many Tariffs
     * const tariff = await prisma.tariff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tariffs and only return the `id`
     * const tariffWithIdOnly = await prisma.tariff.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TariffCreateManyAndReturnArgs>(args?: SelectSubset<T, TariffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tariff.
     * @param {TariffDeleteArgs} args - Arguments to delete one Tariff.
     * @example
     * // Delete one Tariff
     * const Tariff = await prisma.tariff.delete({
     *   where: {
     *     // ... filter to delete one Tariff
     *   }
     * })
     * 
     */
    delete<T extends TariffDeleteArgs>(args: SelectSubset<T, TariffDeleteArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tariff.
     * @param {TariffUpdateArgs} args - Arguments to update one Tariff.
     * @example
     * // Update one Tariff
     * const tariff = await prisma.tariff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffUpdateArgs>(args: SelectSubset<T, TariffUpdateArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tariffs.
     * @param {TariffDeleteManyArgs} args - Arguments to filter Tariffs to delete.
     * @example
     * // Delete a few Tariffs
     * const { count } = await prisma.tariff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffDeleteManyArgs>(args?: SelectSubset<T, TariffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tariffs
     * const tariff = await prisma.tariff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffUpdateManyArgs>(args: SelectSubset<T, TariffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tariff.
     * @param {TariffUpsertArgs} args - Arguments to update or create a Tariff.
     * @example
     * // Update or create a Tariff
     * const tariff = await prisma.tariff.upsert({
     *   create: {
     *     // ... data to create a Tariff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tariff we want to update
     *   }
     * })
     */
    upsert<T extends TariffUpsertArgs>(args: SelectSubset<T, TariffUpsertArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffCountArgs} args - Arguments to filter Tariffs to count.
     * @example
     * // Count the number of Tariffs
     * const count = await prisma.tariff.count({
     *   where: {
     *     // ... the filter for the Tariffs we want to count
     *   }
     * })
    **/
    count<T extends TariffCountArgs>(
      args?: Subset<T, TariffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TariffAggregateArgs>(args: Subset<T, TariffAggregateArgs>): Prisma.PrismaPromise<GetTariffAggregateType<T>>

    /**
     * Group by Tariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffGroupByArgs} args - Group by arguments.
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
      T extends TariffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffGroupByArgs['orderBy'] }
        : { orderBy?: TariffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TariffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tariff model
   */
  readonly fields: TariffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tariff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tariffRanges<T extends Tariff$tariffRangesArgs<ExtArgs> = {}>(args?: Subset<T, Tariff$tariffRangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "findMany"> | Null>
    tariffBaskets<T extends Tariff$tariffBasketsArgs<ExtArgs> = {}>(args?: Subset<T, Tariff$tariffBasketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Tariff model
   */ 
  interface TariffFieldRefs {
    readonly id: FieldRef<"Tariff", 'String'>
    readonly code: FieldRef<"Tariff", 'String'>
    readonly name: FieldRef<"Tariff", 'String'>
    readonly type: FieldRef<"Tariff", 'String'>
    readonly subType: FieldRef<"Tariff", 'String'>
    readonly monthlyFee: FieldRef<"Tariff", 'Decimal'>
    readonly dataMb: FieldRef<"Tariff", 'Int'>
    readonly isUnlimitedData: FieldRef<"Tariff", 'Boolean'>
    readonly minutesPerMonth: FieldRef<"Tariff", 'Int'>
    readonly smsPerMonth: FieldRef<"Tariff", 'Int'>
    readonly isActive: FieldRef<"Tariff", 'Boolean'>
    readonly createdAt: FieldRef<"Tariff", 'DateTime'>
    readonly updatedAt: FieldRef<"Tariff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tariff findUnique
   */
  export type TariffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff findUniqueOrThrow
   */
  export type TariffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff findFirst
   */
  export type TariffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Tariff findFirstOrThrow
   */
  export type TariffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariff to fetch.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Tariff findMany
   */
  export type TariffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffOrderByWithRelationInput | TariffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tariffs.
     */
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    distinct?: TariffScalarFieldEnum | TariffScalarFieldEnum[]
  }

  /**
   * Tariff create
   */
  export type TariffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * The data needed to create a Tariff.
     */
    data: XOR<TariffCreateInput, TariffUncheckedCreateInput>
  }

  /**
   * Tariff createMany
   */
  export type TariffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tariffs.
     */
    data: TariffCreateManyInput | TariffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tariff createManyAndReturn
   */
  export type TariffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tariffs.
     */
    data: TariffCreateManyInput | TariffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tariff update
   */
  export type TariffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * The data needed to update a Tariff.
     */
    data: XOR<TariffUpdateInput, TariffUncheckedUpdateInput>
    /**
     * Choose, which Tariff to update.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff updateMany
   */
  export type TariffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tariffs.
     */
    data: XOR<TariffUpdateManyMutationInput, TariffUncheckedUpdateManyInput>
    /**
     * Filter which Tariffs to update
     */
    where?: TariffWhereInput
  }

  /**
   * Tariff upsert
   */
  export type TariffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * The filter to search for the Tariff to update in case it exists.
     */
    where: TariffWhereUniqueInput
    /**
     * In case the Tariff found by the `where` argument doesn't exist, create a new Tariff with this data.
     */
    create: XOR<TariffCreateInput, TariffUncheckedCreateInput>
    /**
     * In case the Tariff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffUpdateInput, TariffUncheckedUpdateInput>
  }

  /**
   * Tariff delete
   */
  export type TariffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
    /**
     * Filter which Tariff to delete.
     */
    where: TariffWhereUniqueInput
  }

  /**
   * Tariff deleteMany
   */
  export type TariffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tariffs to delete
     */
    where?: TariffWhereInput
  }

  /**
   * Tariff.tariffRanges
   */
  export type Tariff$tariffRangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    where?: TariffRangeWhereInput
    orderBy?: TariffRangeOrderByWithRelationInput | TariffRangeOrderByWithRelationInput[]
    cursor?: TariffRangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffRangeScalarFieldEnum | TariffRangeScalarFieldEnum[]
  }

  /**
   * Tariff.tariffBaskets
   */
  export type Tariff$tariffBasketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    where?: TariffBasketWhereInput
    orderBy?: TariffBasketOrderByWithRelationInput | TariffBasketOrderByWithRelationInput[]
    cursor?: TariffBasketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffBasketScalarFieldEnum | TariffBasketScalarFieldEnum[]
  }

  /**
   * Tariff without action
   */
  export type TariffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariff
     */
    select?: TariffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffInclude<ExtArgs> | null
  }


  /**
   * Model TariffRange
   */

  export type AggregateTariffRange = {
    _count: TariffRangeCountAggregateOutputType | null
    _avg: TariffRangeAvgAggregateOutputType | null
    _sum: TariffRangeSumAggregateOutputType | null
    _min: TariffRangeMinAggregateOutputType | null
    _max: TariffRangeMaxAggregateOutputType | null
  }

  export type TariffRangeAvgAggregateOutputType = {
    channelCode: number | null
    termMonths: number | null
    minPrice: Decimal | null
    maxPrice: Decimal | null
  }

  export type TariffRangeSumAggregateOutputType = {
    channelCode: number | null
    termMonths: number | null
    minPrice: Decimal | null
    maxPrice: Decimal | null
  }

  export type TariffRangeMinAggregateOutputType = {
    id: string | null
    tariffId: string | null
    channelCode: number | null
    termMonths: number | null
    minPrice: Decimal | null
    maxPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffRangeMaxAggregateOutputType = {
    id: string | null
    tariffId: string | null
    channelCode: number | null
    termMonths: number | null
    minPrice: Decimal | null
    maxPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffRangeCountAggregateOutputType = {
    id: number
    tariffId: number
    channelCode: number
    termMonths: number
    minPrice: number
    maxPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TariffRangeAvgAggregateInputType = {
    channelCode?: true
    termMonths?: true
    minPrice?: true
    maxPrice?: true
  }

  export type TariffRangeSumAggregateInputType = {
    channelCode?: true
    termMonths?: true
    minPrice?: true
    maxPrice?: true
  }

  export type TariffRangeMinAggregateInputType = {
    id?: true
    tariffId?: true
    channelCode?: true
    termMonths?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffRangeMaxAggregateInputType = {
    id?: true
    tariffId?: true
    channelCode?: true
    termMonths?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffRangeCountAggregateInputType = {
    id?: true
    tariffId?: true
    channelCode?: true
    termMonths?: true
    minPrice?: true
    maxPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TariffRangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffRange to aggregate.
     */
    where?: TariffRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffRanges to fetch.
     */
    orderBy?: TariffRangeOrderByWithRelationInput | TariffRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TariffRanges
    **/
    _count?: true | TariffRangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffRangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffRangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffRangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffRangeMaxAggregateInputType
  }

  export type GetTariffRangeAggregateType<T extends TariffRangeAggregateArgs> = {
        [P in keyof T & keyof AggregateTariffRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariffRange[P]>
      : GetScalarType<T[P], AggregateTariffRange[P]>
  }




  export type TariffRangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffRangeWhereInput
    orderBy?: TariffRangeOrderByWithAggregationInput | TariffRangeOrderByWithAggregationInput[]
    by: TariffRangeScalarFieldEnum[] | TariffRangeScalarFieldEnum
    having?: TariffRangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffRangeCountAggregateInputType | true
    _avg?: TariffRangeAvgAggregateInputType
    _sum?: TariffRangeSumAggregateInputType
    _min?: TariffRangeMinAggregateInputType
    _max?: TariffRangeMaxAggregateInputType
  }

  export type TariffRangeGroupByOutputType = {
    id: string
    tariffId: string
    channelCode: number
    termMonths: number
    minPrice: Decimal
    maxPrice: Decimal
    createdAt: Date
    updatedAt: Date
    _count: TariffRangeCountAggregateOutputType | null
    _avg: TariffRangeAvgAggregateOutputType | null
    _sum: TariffRangeSumAggregateOutputType | null
    _min: TariffRangeMinAggregateOutputType | null
    _max: TariffRangeMaxAggregateOutputType | null
  }

  type GetTariffRangeGroupByPayload<T extends TariffRangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffRangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffRangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffRangeGroupByOutputType[P]>
            : GetScalarType<T[P], TariffRangeGroupByOutputType[P]>
        }
      >
    >


  export type TariffRangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tariffId?: boolean
    channelCode?: boolean
    termMonths?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffRange"]>

  export type TariffRangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tariffId?: boolean
    channelCode?: boolean
    termMonths?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffRange"]>

  export type TariffRangeSelectScalar = {
    id?: boolean
    tariffId?: boolean
    channelCode?: boolean
    termMonths?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TariffRangeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }
  export type TariffRangeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }

  export type $TariffRangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TariffRange"
    objects: {
      tariff: Prisma.$TariffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tariffId: string
      channelCode: number
      termMonths: number
      minPrice: Prisma.Decimal
      maxPrice: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tariffRange"]>
    composites: {}
  }

  type TariffRangeGetPayload<S extends boolean | null | undefined | TariffRangeDefaultArgs> = $Result.GetResult<Prisma.$TariffRangePayload, S>

  type TariffRangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TariffRangeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TariffRangeCountAggregateInputType | true
    }

  export interface TariffRangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TariffRange'], meta: { name: 'TariffRange' } }
    /**
     * Find zero or one TariffRange that matches the filter.
     * @param {TariffRangeFindUniqueArgs} args - Arguments to find a TariffRange
     * @example
     * // Get one TariffRange
     * const tariffRange = await prisma.tariffRange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffRangeFindUniqueArgs>(args: SelectSubset<T, TariffRangeFindUniqueArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TariffRange that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TariffRangeFindUniqueOrThrowArgs} args - Arguments to find a TariffRange
     * @example
     * // Get one TariffRange
     * const tariffRange = await prisma.tariffRange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffRangeFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffRangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TariffRange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeFindFirstArgs} args - Arguments to find a TariffRange
     * @example
     * // Get one TariffRange
     * const tariffRange = await prisma.tariffRange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffRangeFindFirstArgs>(args?: SelectSubset<T, TariffRangeFindFirstArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TariffRange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeFindFirstOrThrowArgs} args - Arguments to find a TariffRange
     * @example
     * // Get one TariffRange
     * const tariffRange = await prisma.tariffRange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffRangeFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffRangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TariffRanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TariffRanges
     * const tariffRanges = await prisma.tariffRange.findMany()
     * 
     * // Get first 10 TariffRanges
     * const tariffRanges = await prisma.tariffRange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffRangeWithIdOnly = await prisma.tariffRange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TariffRangeFindManyArgs>(args?: SelectSubset<T, TariffRangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TariffRange.
     * @param {TariffRangeCreateArgs} args - Arguments to create a TariffRange.
     * @example
     * // Create one TariffRange
     * const TariffRange = await prisma.tariffRange.create({
     *   data: {
     *     // ... data to create a TariffRange
     *   }
     * })
     * 
     */
    create<T extends TariffRangeCreateArgs>(args: SelectSubset<T, TariffRangeCreateArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TariffRanges.
     * @param {TariffRangeCreateManyArgs} args - Arguments to create many TariffRanges.
     * @example
     * // Create many TariffRanges
     * const tariffRange = await prisma.tariffRange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffRangeCreateManyArgs>(args?: SelectSubset<T, TariffRangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TariffRanges and returns the data saved in the database.
     * @param {TariffRangeCreateManyAndReturnArgs} args - Arguments to create many TariffRanges.
     * @example
     * // Create many TariffRanges
     * const tariffRange = await prisma.tariffRange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TariffRanges and only return the `id`
     * const tariffRangeWithIdOnly = await prisma.tariffRange.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TariffRangeCreateManyAndReturnArgs>(args?: SelectSubset<T, TariffRangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TariffRange.
     * @param {TariffRangeDeleteArgs} args - Arguments to delete one TariffRange.
     * @example
     * // Delete one TariffRange
     * const TariffRange = await prisma.tariffRange.delete({
     *   where: {
     *     // ... filter to delete one TariffRange
     *   }
     * })
     * 
     */
    delete<T extends TariffRangeDeleteArgs>(args: SelectSubset<T, TariffRangeDeleteArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TariffRange.
     * @param {TariffRangeUpdateArgs} args - Arguments to update one TariffRange.
     * @example
     * // Update one TariffRange
     * const tariffRange = await prisma.tariffRange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffRangeUpdateArgs>(args: SelectSubset<T, TariffRangeUpdateArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TariffRanges.
     * @param {TariffRangeDeleteManyArgs} args - Arguments to filter TariffRanges to delete.
     * @example
     * // Delete a few TariffRanges
     * const { count } = await prisma.tariffRange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffRangeDeleteManyArgs>(args?: SelectSubset<T, TariffRangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TariffRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TariffRanges
     * const tariffRange = await prisma.tariffRange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffRangeUpdateManyArgs>(args: SelectSubset<T, TariffRangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TariffRange.
     * @param {TariffRangeUpsertArgs} args - Arguments to update or create a TariffRange.
     * @example
     * // Update or create a TariffRange
     * const tariffRange = await prisma.tariffRange.upsert({
     *   create: {
     *     // ... data to create a TariffRange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TariffRange we want to update
     *   }
     * })
     */
    upsert<T extends TariffRangeUpsertArgs>(args: SelectSubset<T, TariffRangeUpsertArgs<ExtArgs>>): Prisma__TariffRangeClient<$Result.GetResult<Prisma.$TariffRangePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TariffRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeCountArgs} args - Arguments to filter TariffRanges to count.
     * @example
     * // Count the number of TariffRanges
     * const count = await prisma.tariffRange.count({
     *   where: {
     *     // ... the filter for the TariffRanges we want to count
     *   }
     * })
    **/
    count<T extends TariffRangeCountArgs>(
      args?: Subset<T, TariffRangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffRangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TariffRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TariffRangeAggregateArgs>(args: Subset<T, TariffRangeAggregateArgs>): Prisma.PrismaPromise<GetTariffRangeAggregateType<T>>

    /**
     * Group by TariffRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffRangeGroupByArgs} args - Group by arguments.
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
      T extends TariffRangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffRangeGroupByArgs['orderBy'] }
        : { orderBy?: TariffRangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TariffRangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TariffRange model
   */
  readonly fields: TariffRangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TariffRange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffRangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tariff<T extends TariffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TariffDefaultArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TariffRange model
   */ 
  interface TariffRangeFieldRefs {
    readonly id: FieldRef<"TariffRange", 'String'>
    readonly tariffId: FieldRef<"TariffRange", 'String'>
    readonly channelCode: FieldRef<"TariffRange", 'Int'>
    readonly termMonths: FieldRef<"TariffRange", 'Int'>
    readonly minPrice: FieldRef<"TariffRange", 'Decimal'>
    readonly maxPrice: FieldRef<"TariffRange", 'Decimal'>
    readonly createdAt: FieldRef<"TariffRange", 'DateTime'>
    readonly updatedAt: FieldRef<"TariffRange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TariffRange findUnique
   */
  export type TariffRangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * Filter, which TariffRange to fetch.
     */
    where: TariffRangeWhereUniqueInput
  }

  /**
   * TariffRange findUniqueOrThrow
   */
  export type TariffRangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * Filter, which TariffRange to fetch.
     */
    where: TariffRangeWhereUniqueInput
  }

  /**
   * TariffRange findFirst
   */
  export type TariffRangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * Filter, which TariffRange to fetch.
     */
    where?: TariffRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffRanges to fetch.
     */
    orderBy?: TariffRangeOrderByWithRelationInput | TariffRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffRanges.
     */
    cursor?: TariffRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffRanges.
     */
    distinct?: TariffRangeScalarFieldEnum | TariffRangeScalarFieldEnum[]
  }

  /**
   * TariffRange findFirstOrThrow
   */
  export type TariffRangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * Filter, which TariffRange to fetch.
     */
    where?: TariffRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffRanges to fetch.
     */
    orderBy?: TariffRangeOrderByWithRelationInput | TariffRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffRanges.
     */
    cursor?: TariffRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffRanges.
     */
    distinct?: TariffRangeScalarFieldEnum | TariffRangeScalarFieldEnum[]
  }

  /**
   * TariffRange findMany
   */
  export type TariffRangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * Filter, which TariffRanges to fetch.
     */
    where?: TariffRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffRanges to fetch.
     */
    orderBy?: TariffRangeOrderByWithRelationInput | TariffRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TariffRanges.
     */
    cursor?: TariffRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffRanges.
     */
    skip?: number
    distinct?: TariffRangeScalarFieldEnum | TariffRangeScalarFieldEnum[]
  }

  /**
   * TariffRange create
   */
  export type TariffRangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * The data needed to create a TariffRange.
     */
    data: XOR<TariffRangeCreateInput, TariffRangeUncheckedCreateInput>
  }

  /**
   * TariffRange createMany
   */
  export type TariffRangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TariffRanges.
     */
    data: TariffRangeCreateManyInput | TariffRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TariffRange createManyAndReturn
   */
  export type TariffRangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TariffRanges.
     */
    data: TariffRangeCreateManyInput | TariffRangeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TariffRange update
   */
  export type TariffRangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * The data needed to update a TariffRange.
     */
    data: XOR<TariffRangeUpdateInput, TariffRangeUncheckedUpdateInput>
    /**
     * Choose, which TariffRange to update.
     */
    where: TariffRangeWhereUniqueInput
  }

  /**
   * TariffRange updateMany
   */
  export type TariffRangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TariffRanges.
     */
    data: XOR<TariffRangeUpdateManyMutationInput, TariffRangeUncheckedUpdateManyInput>
    /**
     * Filter which TariffRanges to update
     */
    where?: TariffRangeWhereInput
  }

  /**
   * TariffRange upsert
   */
  export type TariffRangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * The filter to search for the TariffRange to update in case it exists.
     */
    where: TariffRangeWhereUniqueInput
    /**
     * In case the TariffRange found by the `where` argument doesn't exist, create a new TariffRange with this data.
     */
    create: XOR<TariffRangeCreateInput, TariffRangeUncheckedCreateInput>
    /**
     * In case the TariffRange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffRangeUpdateInput, TariffRangeUncheckedUpdateInput>
  }

  /**
   * TariffRange delete
   */
  export type TariffRangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
    /**
     * Filter which TariffRange to delete.
     */
    where: TariffRangeWhereUniqueInput
  }

  /**
   * TariffRange deleteMany
   */
  export type TariffRangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffRanges to delete
     */
    where?: TariffRangeWhereInput
  }

  /**
   * TariffRange without action
   */
  export type TariffRangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffRange
     */
    select?: TariffRangeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffRangeInclude<ExtArgs> | null
  }


  /**
   * Model TariffBasket
   */

  export type AggregateTariffBasket = {
    _count: TariffBasketCountAggregateOutputType | null
    _min: TariffBasketMinAggregateOutputType | null
    _max: TariffBasketMaxAggregateOutputType | null
  }

  export type TariffBasketMinAggregateOutputType = {
    id: string | null
    cycleId: string | null
    tariffId: string | null
    createdAt: Date | null
  }

  export type TariffBasketMaxAggregateOutputType = {
    id: string | null
    cycleId: string | null
    tariffId: string | null
    createdAt: Date | null
  }

  export type TariffBasketCountAggregateOutputType = {
    id: number
    cycleId: number
    tariffId: number
    createdAt: number
    _all: number
  }


  export type TariffBasketMinAggregateInputType = {
    id?: true
    cycleId?: true
    tariffId?: true
    createdAt?: true
  }

  export type TariffBasketMaxAggregateInputType = {
    id?: true
    cycleId?: true
    tariffId?: true
    createdAt?: true
  }

  export type TariffBasketCountAggregateInputType = {
    id?: true
    cycleId?: true
    tariffId?: true
    createdAt?: true
    _all?: true
  }

  export type TariffBasketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffBasket to aggregate.
     */
    where?: TariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffBaskets to fetch.
     */
    orderBy?: TariffBasketOrderByWithRelationInput | TariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TariffBaskets
    **/
    _count?: true | TariffBasketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffBasketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffBasketMaxAggregateInputType
  }

  export type GetTariffBasketAggregateType<T extends TariffBasketAggregateArgs> = {
        [P in keyof T & keyof AggregateTariffBasket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariffBasket[P]>
      : GetScalarType<T[P], AggregateTariffBasket[P]>
  }




  export type TariffBasketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffBasketWhereInput
    orderBy?: TariffBasketOrderByWithAggregationInput | TariffBasketOrderByWithAggregationInput[]
    by: TariffBasketScalarFieldEnum[] | TariffBasketScalarFieldEnum
    having?: TariffBasketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffBasketCountAggregateInputType | true
    _min?: TariffBasketMinAggregateInputType
    _max?: TariffBasketMaxAggregateInputType
  }

  export type TariffBasketGroupByOutputType = {
    id: string
    cycleId: string
    tariffId: string
    createdAt: Date
    _count: TariffBasketCountAggregateOutputType | null
    _min: TariffBasketMinAggregateOutputType | null
    _max: TariffBasketMaxAggregateOutputType | null
  }

  type GetTariffBasketGroupByPayload<T extends TariffBasketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffBasketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffBasketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffBasketGroupByOutputType[P]>
            : GetScalarType<T[P], TariffBasketGroupByOutputType[P]>
        }
      >
    >


  export type TariffBasketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    tariffId?: boolean
    createdAt?: boolean
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffBasket"]>

  export type TariffBasketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cycleId?: boolean
    tariffId?: boolean
    createdAt?: boolean
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffBasket"]>

  export type TariffBasketSelectScalar = {
    id?: boolean
    cycleId?: boolean
    tariffId?: boolean
    createdAt?: boolean
  }

  export type TariffBasketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }
  export type TariffBasketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tariff?: boolean | TariffDefaultArgs<ExtArgs>
  }

  export type $TariffBasketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TariffBasket"
    objects: {
      tariff: Prisma.$TariffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cycleId: string
      tariffId: string
      createdAt: Date
    }, ExtArgs["result"]["tariffBasket"]>
    composites: {}
  }

  type TariffBasketGetPayload<S extends boolean | null | undefined | TariffBasketDefaultArgs> = $Result.GetResult<Prisma.$TariffBasketPayload, S>

  type TariffBasketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TariffBasketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TariffBasketCountAggregateInputType | true
    }

  export interface TariffBasketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TariffBasket'], meta: { name: 'TariffBasket' } }
    /**
     * Find zero or one TariffBasket that matches the filter.
     * @param {TariffBasketFindUniqueArgs} args - Arguments to find a TariffBasket
     * @example
     * // Get one TariffBasket
     * const tariffBasket = await prisma.tariffBasket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffBasketFindUniqueArgs>(args: SelectSubset<T, TariffBasketFindUniqueArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TariffBasket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TariffBasketFindUniqueOrThrowArgs} args - Arguments to find a TariffBasket
     * @example
     * // Get one TariffBasket
     * const tariffBasket = await prisma.tariffBasket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffBasketFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffBasketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TariffBasket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketFindFirstArgs} args - Arguments to find a TariffBasket
     * @example
     * // Get one TariffBasket
     * const tariffBasket = await prisma.tariffBasket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffBasketFindFirstArgs>(args?: SelectSubset<T, TariffBasketFindFirstArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TariffBasket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketFindFirstOrThrowArgs} args - Arguments to find a TariffBasket
     * @example
     * // Get one TariffBasket
     * const tariffBasket = await prisma.tariffBasket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffBasketFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffBasketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TariffBaskets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TariffBaskets
     * const tariffBaskets = await prisma.tariffBasket.findMany()
     * 
     * // Get first 10 TariffBaskets
     * const tariffBaskets = await prisma.tariffBasket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffBasketWithIdOnly = await prisma.tariffBasket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TariffBasketFindManyArgs>(args?: SelectSubset<T, TariffBasketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TariffBasket.
     * @param {TariffBasketCreateArgs} args - Arguments to create a TariffBasket.
     * @example
     * // Create one TariffBasket
     * const TariffBasket = await prisma.tariffBasket.create({
     *   data: {
     *     // ... data to create a TariffBasket
     *   }
     * })
     * 
     */
    create<T extends TariffBasketCreateArgs>(args: SelectSubset<T, TariffBasketCreateArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TariffBaskets.
     * @param {TariffBasketCreateManyArgs} args - Arguments to create many TariffBaskets.
     * @example
     * // Create many TariffBaskets
     * const tariffBasket = await prisma.tariffBasket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffBasketCreateManyArgs>(args?: SelectSubset<T, TariffBasketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TariffBaskets and returns the data saved in the database.
     * @param {TariffBasketCreateManyAndReturnArgs} args - Arguments to create many TariffBaskets.
     * @example
     * // Create many TariffBaskets
     * const tariffBasket = await prisma.tariffBasket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TariffBaskets and only return the `id`
     * const tariffBasketWithIdOnly = await prisma.tariffBasket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TariffBasketCreateManyAndReturnArgs>(args?: SelectSubset<T, TariffBasketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TariffBasket.
     * @param {TariffBasketDeleteArgs} args - Arguments to delete one TariffBasket.
     * @example
     * // Delete one TariffBasket
     * const TariffBasket = await prisma.tariffBasket.delete({
     *   where: {
     *     // ... filter to delete one TariffBasket
     *   }
     * })
     * 
     */
    delete<T extends TariffBasketDeleteArgs>(args: SelectSubset<T, TariffBasketDeleteArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TariffBasket.
     * @param {TariffBasketUpdateArgs} args - Arguments to update one TariffBasket.
     * @example
     * // Update one TariffBasket
     * const tariffBasket = await prisma.tariffBasket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffBasketUpdateArgs>(args: SelectSubset<T, TariffBasketUpdateArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TariffBaskets.
     * @param {TariffBasketDeleteManyArgs} args - Arguments to filter TariffBaskets to delete.
     * @example
     * // Delete a few TariffBaskets
     * const { count } = await prisma.tariffBasket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffBasketDeleteManyArgs>(args?: SelectSubset<T, TariffBasketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TariffBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TariffBaskets
     * const tariffBasket = await prisma.tariffBasket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffBasketUpdateManyArgs>(args: SelectSubset<T, TariffBasketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TariffBasket.
     * @param {TariffBasketUpsertArgs} args - Arguments to update or create a TariffBasket.
     * @example
     * // Update or create a TariffBasket
     * const tariffBasket = await prisma.tariffBasket.upsert({
     *   create: {
     *     // ... data to create a TariffBasket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TariffBasket we want to update
     *   }
     * })
     */
    upsert<T extends TariffBasketUpsertArgs>(args: SelectSubset<T, TariffBasketUpsertArgs<ExtArgs>>): Prisma__TariffBasketClient<$Result.GetResult<Prisma.$TariffBasketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TariffBaskets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketCountArgs} args - Arguments to filter TariffBaskets to count.
     * @example
     * // Count the number of TariffBaskets
     * const count = await prisma.tariffBasket.count({
     *   where: {
     *     // ... the filter for the TariffBaskets we want to count
     *   }
     * })
    **/
    count<T extends TariffBasketCountArgs>(
      args?: Subset<T, TariffBasketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffBasketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TariffBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TariffBasketAggregateArgs>(args: Subset<T, TariffBasketAggregateArgs>): Prisma.PrismaPromise<GetTariffBasketAggregateType<T>>

    /**
     * Group by TariffBasket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffBasketGroupByArgs} args - Group by arguments.
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
      T extends TariffBasketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffBasketGroupByArgs['orderBy'] }
        : { orderBy?: TariffBasketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TariffBasketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffBasketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TariffBasket model
   */
  readonly fields: TariffBasketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TariffBasket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffBasketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tariff<T extends TariffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TariffDefaultArgs<ExtArgs>>): Prisma__TariffClient<$Result.GetResult<Prisma.$TariffPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TariffBasket model
   */ 
  interface TariffBasketFieldRefs {
    readonly id: FieldRef<"TariffBasket", 'String'>
    readonly cycleId: FieldRef<"TariffBasket", 'String'>
    readonly tariffId: FieldRef<"TariffBasket", 'String'>
    readonly createdAt: FieldRef<"TariffBasket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TariffBasket findUnique
   */
  export type TariffBasketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which TariffBasket to fetch.
     */
    where: TariffBasketWhereUniqueInput
  }

  /**
   * TariffBasket findUniqueOrThrow
   */
  export type TariffBasketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which TariffBasket to fetch.
     */
    where: TariffBasketWhereUniqueInput
  }

  /**
   * TariffBasket findFirst
   */
  export type TariffBasketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which TariffBasket to fetch.
     */
    where?: TariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffBaskets to fetch.
     */
    orderBy?: TariffBasketOrderByWithRelationInput | TariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffBaskets.
     */
    cursor?: TariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffBaskets.
     */
    distinct?: TariffBasketScalarFieldEnum | TariffBasketScalarFieldEnum[]
  }

  /**
   * TariffBasket findFirstOrThrow
   */
  export type TariffBasketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which TariffBasket to fetch.
     */
    where?: TariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffBaskets to fetch.
     */
    orderBy?: TariffBasketOrderByWithRelationInput | TariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TariffBaskets.
     */
    cursor?: TariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffBaskets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TariffBaskets.
     */
    distinct?: TariffBasketScalarFieldEnum | TariffBasketScalarFieldEnum[]
  }

  /**
   * TariffBasket findMany
   */
  export type TariffBasketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * Filter, which TariffBaskets to fetch.
     */
    where?: TariffBasketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TariffBaskets to fetch.
     */
    orderBy?: TariffBasketOrderByWithRelationInput | TariffBasketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TariffBaskets.
     */
    cursor?: TariffBasketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TariffBaskets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TariffBaskets.
     */
    skip?: number
    distinct?: TariffBasketScalarFieldEnum | TariffBasketScalarFieldEnum[]
  }

  /**
   * TariffBasket create
   */
  export type TariffBasketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * The data needed to create a TariffBasket.
     */
    data: XOR<TariffBasketCreateInput, TariffBasketUncheckedCreateInput>
  }

  /**
   * TariffBasket createMany
   */
  export type TariffBasketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TariffBaskets.
     */
    data: TariffBasketCreateManyInput | TariffBasketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TariffBasket createManyAndReturn
   */
  export type TariffBasketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TariffBaskets.
     */
    data: TariffBasketCreateManyInput | TariffBasketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TariffBasket update
   */
  export type TariffBasketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * The data needed to update a TariffBasket.
     */
    data: XOR<TariffBasketUpdateInput, TariffBasketUncheckedUpdateInput>
    /**
     * Choose, which TariffBasket to update.
     */
    where: TariffBasketWhereUniqueInput
  }

  /**
   * TariffBasket updateMany
   */
  export type TariffBasketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TariffBaskets.
     */
    data: XOR<TariffBasketUpdateManyMutationInput, TariffBasketUncheckedUpdateManyInput>
    /**
     * Filter which TariffBaskets to update
     */
    where?: TariffBasketWhereInput
  }

  /**
   * TariffBasket upsert
   */
  export type TariffBasketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * The filter to search for the TariffBasket to update in case it exists.
     */
    where: TariffBasketWhereUniqueInput
    /**
     * In case the TariffBasket found by the `where` argument doesn't exist, create a new TariffBasket with this data.
     */
    create: XOR<TariffBasketCreateInput, TariffBasketUncheckedCreateInput>
    /**
     * In case the TariffBasket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffBasketUpdateInput, TariffBasketUncheckedUpdateInput>
  }

  /**
   * TariffBasket delete
   */
  export type TariffBasketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
    /**
     * Filter which TariffBasket to delete.
     */
    where: TariffBasketWhereUniqueInput
  }

  /**
   * TariffBasket deleteMany
   */
  export type TariffBasketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TariffBaskets to delete
     */
    where?: TariffBasketWhereInput
  }

  /**
   * TariffBasket without action
   */
  export type TariffBasketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffBasket
     */
    select?: TariffBasketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffBasketInclude<ExtArgs> | null
  }


  /**
   * Model Vas
   */

  export type AggregateVas = {
    _count: VasCountAggregateOutputType | null
    _avg: VasAvgAggregateOutputType | null
    _sum: VasSumAggregateOutputType | null
    _min: VasMinAggregateOutputType | null
    _max: VasMaxAggregateOutputType | null
  }

  export type VasAvgAggregateOutputType = {
    monthlyCost: Decimal | null
  }

  export type VasSumAggregateOutputType = {
    monthlyCost: Decimal | null
  }

  export type VasMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    monthlyCost: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VasMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    monthlyCost: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VasCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    monthlyCost: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VasAvgAggregateInputType = {
    monthlyCost?: true
  }

  export type VasSumAggregateInputType = {
    monthlyCost?: true
  }

  export type VasMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    monthlyCost?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VasMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    monthlyCost?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VasCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    monthlyCost?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vas to aggregate.
     */
    where?: VasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vas to fetch.
     */
    orderBy?: VasOrderByWithRelationInput | VasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vas
    **/
    _count?: true | VasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VasMaxAggregateInputType
  }

  export type GetVasAggregateType<T extends VasAggregateArgs> = {
        [P in keyof T & keyof AggregateVas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVas[P]>
      : GetScalarType<T[P], AggregateVas[P]>
  }




  export type VasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VasWhereInput
    orderBy?: VasOrderByWithAggregationInput | VasOrderByWithAggregationInput[]
    by: VasScalarFieldEnum[] | VasScalarFieldEnum
    having?: VasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VasCountAggregateInputType | true
    _avg?: VasAvgAggregateInputType
    _sum?: VasSumAggregateInputType
    _min?: VasMinAggregateInputType
    _max?: VasMaxAggregateInputType
  }

  export type VasGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    monthlyCost: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: VasCountAggregateOutputType | null
    _avg: VasAvgAggregateOutputType | null
    _sum: VasSumAggregateOutputType | null
    _min: VasMinAggregateOutputType | null
    _max: VasMaxAggregateOutputType | null
  }

  type GetVasGroupByPayload<T extends VasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VasGroupByOutputType[P]>
            : GetScalarType<T[P], VasGroupByOutputType[P]>
        }
      >
    >


  export type VasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    monthlyCost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vas"]>

  export type VasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    monthlyCost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vas"]>

  export type VasSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    monthlyCost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      monthlyCost: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vas"]>
    composites: {}
  }

  type VasGetPayload<S extends boolean | null | undefined | VasDefaultArgs> = $Result.GetResult<Prisma.$VasPayload, S>

  type VasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VasCountAggregateInputType | true
    }

  export interface VasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vas'], meta: { name: 'Vas' } }
    /**
     * Find zero or one Vas that matches the filter.
     * @param {VasFindUniqueArgs} args - Arguments to find a Vas
     * @example
     * // Get one Vas
     * const vas = await prisma.vas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VasFindUniqueArgs>(args: SelectSubset<T, VasFindUniqueArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VasFindUniqueOrThrowArgs} args - Arguments to find a Vas
     * @example
     * // Get one Vas
     * const vas = await prisma.vas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VasFindUniqueOrThrowArgs>(args: SelectSubset<T, VasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasFindFirstArgs} args - Arguments to find a Vas
     * @example
     * // Get one Vas
     * const vas = await prisma.vas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VasFindFirstArgs>(args?: SelectSubset<T, VasFindFirstArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasFindFirstOrThrowArgs} args - Arguments to find a Vas
     * @example
     * // Get one Vas
     * const vas = await prisma.vas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VasFindFirstOrThrowArgs>(args?: SelectSubset<T, VasFindFirstOrThrowArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vas
     * const vas = await prisma.vas.findMany()
     * 
     * // Get first 10 Vas
     * const vas = await prisma.vas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vasWithIdOnly = await prisma.vas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VasFindManyArgs>(args?: SelectSubset<T, VasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vas.
     * @param {VasCreateArgs} args - Arguments to create a Vas.
     * @example
     * // Create one Vas
     * const Vas = await prisma.vas.create({
     *   data: {
     *     // ... data to create a Vas
     *   }
     * })
     * 
     */
    create<T extends VasCreateArgs>(args: SelectSubset<T, VasCreateArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vas.
     * @param {VasCreateManyArgs} args - Arguments to create many Vas.
     * @example
     * // Create many Vas
     * const vas = await prisma.vas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VasCreateManyArgs>(args?: SelectSubset<T, VasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vas and returns the data saved in the database.
     * @param {VasCreateManyAndReturnArgs} args - Arguments to create many Vas.
     * @example
     * // Create many Vas
     * const vas = await prisma.vas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vas and only return the `id`
     * const vasWithIdOnly = await prisma.vas.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VasCreateManyAndReturnArgs>(args?: SelectSubset<T, VasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vas.
     * @param {VasDeleteArgs} args - Arguments to delete one Vas.
     * @example
     * // Delete one Vas
     * const Vas = await prisma.vas.delete({
     *   where: {
     *     // ... filter to delete one Vas
     *   }
     * })
     * 
     */
    delete<T extends VasDeleteArgs>(args: SelectSubset<T, VasDeleteArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vas.
     * @param {VasUpdateArgs} args - Arguments to update one Vas.
     * @example
     * // Update one Vas
     * const vas = await prisma.vas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VasUpdateArgs>(args: SelectSubset<T, VasUpdateArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vas.
     * @param {VasDeleteManyArgs} args - Arguments to filter Vas to delete.
     * @example
     * // Delete a few Vas
     * const { count } = await prisma.vas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VasDeleteManyArgs>(args?: SelectSubset<T, VasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vas
     * const vas = await prisma.vas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VasUpdateManyArgs>(args: SelectSubset<T, VasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vas.
     * @param {VasUpsertArgs} args - Arguments to update or create a Vas.
     * @example
     * // Update or create a Vas
     * const vas = await prisma.vas.upsert({
     *   create: {
     *     // ... data to create a Vas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vas we want to update
     *   }
     * })
     */
    upsert<T extends VasUpsertArgs>(args: SelectSubset<T, VasUpsertArgs<ExtArgs>>): Prisma__VasClient<$Result.GetResult<Prisma.$VasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasCountArgs} args - Arguments to filter Vas to count.
     * @example
     * // Count the number of Vas
     * const count = await prisma.vas.count({
     *   where: {
     *     // ... the filter for the Vas we want to count
     *   }
     * })
    **/
    count<T extends VasCountArgs>(
      args?: Subset<T, VasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VasAggregateArgs>(args: Subset<T, VasAggregateArgs>): Prisma.PrismaPromise<GetVasAggregateType<T>>

    /**
     * Group by Vas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VasGroupByArgs} args - Group by arguments.
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
      T extends VasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VasGroupByArgs['orderBy'] }
        : { orderBy?: VasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vas model
   */
  readonly fields: VasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Vas model
   */ 
  interface VasFieldRefs {
    readonly id: FieldRef<"Vas", 'String'>
    readonly code: FieldRef<"Vas", 'String'>
    readonly name: FieldRef<"Vas", 'String'>
    readonly description: FieldRef<"Vas", 'String'>
    readonly monthlyCost: FieldRef<"Vas", 'Decimal'>
    readonly isActive: FieldRef<"Vas", 'Boolean'>
    readonly createdAt: FieldRef<"Vas", 'DateTime'>
    readonly updatedAt: FieldRef<"Vas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vas findUnique
   */
  export type VasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * Filter, which Vas to fetch.
     */
    where: VasWhereUniqueInput
  }

  /**
   * Vas findUniqueOrThrow
   */
  export type VasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * Filter, which Vas to fetch.
     */
    where: VasWhereUniqueInput
  }

  /**
   * Vas findFirst
   */
  export type VasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * Filter, which Vas to fetch.
     */
    where?: VasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vas to fetch.
     */
    orderBy?: VasOrderByWithRelationInput | VasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vas.
     */
    cursor?: VasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vas.
     */
    distinct?: VasScalarFieldEnum | VasScalarFieldEnum[]
  }

  /**
   * Vas findFirstOrThrow
   */
  export type VasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * Filter, which Vas to fetch.
     */
    where?: VasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vas to fetch.
     */
    orderBy?: VasOrderByWithRelationInput | VasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vas.
     */
    cursor?: VasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vas.
     */
    distinct?: VasScalarFieldEnum | VasScalarFieldEnum[]
  }

  /**
   * Vas findMany
   */
  export type VasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * Filter, which Vas to fetch.
     */
    where?: VasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vas to fetch.
     */
    orderBy?: VasOrderByWithRelationInput | VasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vas.
     */
    cursor?: VasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vas.
     */
    skip?: number
    distinct?: VasScalarFieldEnum | VasScalarFieldEnum[]
  }

  /**
   * Vas create
   */
  export type VasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * The data needed to create a Vas.
     */
    data: XOR<VasCreateInput, VasUncheckedCreateInput>
  }

  /**
   * Vas createMany
   */
  export type VasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vas.
     */
    data: VasCreateManyInput | VasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vas createManyAndReturn
   */
  export type VasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vas.
     */
    data: VasCreateManyInput | VasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vas update
   */
  export type VasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * The data needed to update a Vas.
     */
    data: XOR<VasUpdateInput, VasUncheckedUpdateInput>
    /**
     * Choose, which Vas to update.
     */
    where: VasWhereUniqueInput
  }

  /**
   * Vas updateMany
   */
  export type VasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vas.
     */
    data: XOR<VasUpdateManyMutationInput, VasUncheckedUpdateManyInput>
    /**
     * Filter which Vas to update
     */
    where?: VasWhereInput
  }

  /**
   * Vas upsert
   */
  export type VasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * The filter to search for the Vas to update in case it exists.
     */
    where: VasWhereUniqueInput
    /**
     * In case the Vas found by the `where` argument doesn't exist, create a new Vas with this data.
     */
    create: XOR<VasCreateInput, VasUncheckedCreateInput>
    /**
     * In case the Vas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VasUpdateInput, VasUncheckedUpdateInput>
  }

  /**
   * Vas delete
   */
  export type VasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
    /**
     * Filter which Vas to delete.
     */
    where: VasWhereUniqueInput
  }

  /**
   * Vas deleteMany
   */
  export type VasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vas to delete
     */
    where?: VasWhereInput
  }

  /**
   * Vas without action
   */
  export type VasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vas
     */
    select?: VasSelect<ExtArgs> | null
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


  export const ChannelScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const SubChannelScalarFieldEnum: {
    id: 'id',
    channelId: 'channelId',
    name: 'name',
    code: 'code',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SubChannelScalarFieldEnum = (typeof SubChannelScalarFieldEnum)[keyof typeof SubChannelScalarFieldEnum]


  export const TermScalarFieldEnum: {
    id: 'id',
    months: 'months',
    displayName: 'displayName',
    isActive: 'isActive'
  };

  export type TermScalarFieldEnum = (typeof TermScalarFieldEnum)[keyof typeof TermScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    oemCode: 'oemCode',
    model: 'model',
    colour: 'colour',
    storageGb: 'storageGb',
    category: 'category',
    handsetCost: 'handsetCost',
    retailPrice: 'retailPrice',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceBasketScalarFieldEnum: {
    id: 'id',
    cycleId: 'cycleId',
    deviceId: 'deviceId',
    createdAt: 'createdAt'
  };

  export type DeviceBasketScalarFieldEnum = (typeof DeviceBasketScalarFieldEnum)[keyof typeof DeviceBasketScalarFieldEnum]


  export const TariffScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    subType: 'subType',
    monthlyFee: 'monthlyFee',
    dataMb: 'dataMb',
    isUnlimitedData: 'isUnlimitedData',
    minutesPerMonth: 'minutesPerMonth',
    smsPerMonth: 'smsPerMonth',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TariffScalarFieldEnum = (typeof TariffScalarFieldEnum)[keyof typeof TariffScalarFieldEnum]


  export const TariffRangeScalarFieldEnum: {
    id: 'id',
    tariffId: 'tariffId',
    channelCode: 'channelCode',
    termMonths: 'termMonths',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TariffRangeScalarFieldEnum = (typeof TariffRangeScalarFieldEnum)[keyof typeof TariffRangeScalarFieldEnum]


  export const TariffBasketScalarFieldEnum: {
    id: 'id',
    cycleId: 'cycleId',
    tariffId: 'tariffId',
    createdAt: 'createdAt'
  };

  export type TariffBasketScalarFieldEnum = (typeof TariffBasketScalarFieldEnum)[keyof typeof TariffBasketScalarFieldEnum]


  export const VasScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    monthlyCost: 'monthlyCost',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VasScalarFieldEnum = (typeof VasScalarFieldEnum)[keyof typeof VasScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    code?: IntFilter<"Channel"> | number
    name?: StringFilter<"Channel"> | string
    isActive?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    subChannels?: SubChannelListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subChannels?: SubChannelOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: number
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    name?: StringFilter<"Channel"> | string
    isActive?: BoolFilter<"Channel"> | boolean
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    subChannels?: SubChannelListRelationFilter
  }, "id" | "code">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _avg?: ChannelAvgOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
    _sum?: ChannelSumOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    code?: IntWithAggregatesFilter<"Channel"> | number
    name?: StringWithAggregatesFilter<"Channel"> | string
    isActive?: BoolWithAggregatesFilter<"Channel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type SubChannelWhereInput = {
    AND?: SubChannelWhereInput | SubChannelWhereInput[]
    OR?: SubChannelWhereInput[]
    NOT?: SubChannelWhereInput | SubChannelWhereInput[]
    id?: StringFilter<"SubChannel"> | string
    channelId?: StringFilter<"SubChannel"> | string
    name?: StringFilter<"SubChannel"> | string
    code?: StringFilter<"SubChannel"> | string
    isActive?: BoolFilter<"SubChannel"> | boolean
    createdAt?: DateTimeFilter<"SubChannel"> | Date | string
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>
  }

  export type SubChannelOrderByWithRelationInput = {
    id?: SortOrder
    channelId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    channel?: ChannelOrderByWithRelationInput
  }

  export type SubChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SubChannelWhereInput | SubChannelWhereInput[]
    OR?: SubChannelWhereInput[]
    NOT?: SubChannelWhereInput | SubChannelWhereInput[]
    channelId?: StringFilter<"SubChannel"> | string
    name?: StringFilter<"SubChannel"> | string
    isActive?: BoolFilter<"SubChannel"> | boolean
    createdAt?: DateTimeFilter<"SubChannel"> | Date | string
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>
  }, "id" | "code">

  export type SubChannelOrderByWithAggregationInput = {
    id?: SortOrder
    channelId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SubChannelCountOrderByAggregateInput
    _max?: SubChannelMaxOrderByAggregateInput
    _min?: SubChannelMinOrderByAggregateInput
  }

  export type SubChannelScalarWhereWithAggregatesInput = {
    AND?: SubChannelScalarWhereWithAggregatesInput | SubChannelScalarWhereWithAggregatesInput[]
    OR?: SubChannelScalarWhereWithAggregatesInput[]
    NOT?: SubChannelScalarWhereWithAggregatesInput | SubChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubChannel"> | string
    channelId?: StringWithAggregatesFilter<"SubChannel"> | string
    name?: StringWithAggregatesFilter<"SubChannel"> | string
    code?: StringWithAggregatesFilter<"SubChannel"> | string
    isActive?: BoolWithAggregatesFilter<"SubChannel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubChannel"> | Date | string
  }

  export type TermWhereInput = {
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    id?: StringFilter<"Term"> | string
    months?: IntFilter<"Term"> | number
    displayName?: StringFilter<"Term"> | string
    isActive?: BoolFilter<"Term"> | boolean
  }

  export type TermOrderByWithRelationInput = {
    id?: SortOrder
    months?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type TermWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    months?: number
    AND?: TermWhereInput | TermWhereInput[]
    OR?: TermWhereInput[]
    NOT?: TermWhereInput | TermWhereInput[]
    displayName?: StringFilter<"Term"> | string
    isActive?: BoolFilter<"Term"> | boolean
  }, "id" | "months">

  export type TermOrderByWithAggregationInput = {
    id?: SortOrder
    months?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    _count?: TermCountOrderByAggregateInput
    _avg?: TermAvgOrderByAggregateInput
    _max?: TermMaxOrderByAggregateInput
    _min?: TermMinOrderByAggregateInput
    _sum?: TermSumOrderByAggregateInput
  }

  export type TermScalarWhereWithAggregatesInput = {
    AND?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    OR?: TermScalarWhereWithAggregatesInput[]
    NOT?: TermScalarWhereWithAggregatesInput | TermScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Term"> | string
    months?: IntWithAggregatesFilter<"Term"> | number
    displayName?: StringWithAggregatesFilter<"Term"> | string
    isActive?: BoolWithAggregatesFilter<"Term"> | boolean
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    oemCode?: StringFilter<"Device"> | string
    model?: StringFilter<"Device"> | string
    colour?: StringNullableFilter<"Device"> | string | null
    storageGb?: IntNullableFilter<"Device"> | number | null
    category?: StringNullableFilter<"Device"> | string | null
    handsetCost?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    deviceBaskets?: DeviceBasketListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    oemCode?: SortOrder
    model?: SortOrder
    colour?: SortOrderInput | SortOrder
    storageGb?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deviceBaskets?: DeviceBasketOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    oemCode?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    model?: StringFilter<"Device"> | string
    colour?: StringNullableFilter<"Device"> | string | null
    storageGb?: IntNullableFilter<"Device"> | number | null
    category?: StringNullableFilter<"Device"> | string | null
    handsetCost?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFilter<"Device"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Device"> | boolean
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    deviceBaskets?: DeviceBasketListRelationFilter
  }, "id" | "oemCode">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    oemCode?: SortOrder
    model?: SortOrder
    colour?: SortOrderInput | SortOrder
    storageGb?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    oemCode?: StringWithAggregatesFilter<"Device"> | string
    model?: StringWithAggregatesFilter<"Device"> | string
    colour?: StringNullableWithAggregatesFilter<"Device"> | string | null
    storageGb?: IntNullableWithAggregatesFilter<"Device"> | number | null
    category?: StringNullableWithAggregatesFilter<"Device"> | string | null
    handsetCost?: DecimalWithAggregatesFilter<"Device"> | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalWithAggregatesFilter<"Device"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type DeviceBasketWhereInput = {
    AND?: DeviceBasketWhereInput | DeviceBasketWhereInput[]
    OR?: DeviceBasketWhereInput[]
    NOT?: DeviceBasketWhereInput | DeviceBasketWhereInput[]
    id?: StringFilter<"DeviceBasket"> | string
    cycleId?: StringFilter<"DeviceBasket"> | string
    deviceId?: StringFilter<"DeviceBasket"> | string
    createdAt?: DateTimeFilter<"DeviceBasket"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type DeviceBasketOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    deviceId?: SortOrder
    createdAt?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceBasketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cycleId_deviceId?: DeviceBasketCycleIdDeviceIdCompoundUniqueInput
    AND?: DeviceBasketWhereInput | DeviceBasketWhereInput[]
    OR?: DeviceBasketWhereInput[]
    NOT?: DeviceBasketWhereInput | DeviceBasketWhereInput[]
    cycleId?: StringFilter<"DeviceBasket"> | string
    deviceId?: StringFilter<"DeviceBasket"> | string
    createdAt?: DateTimeFilter<"DeviceBasket"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "id" | "cycleId_deviceId">

  export type DeviceBasketOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    deviceId?: SortOrder
    createdAt?: SortOrder
    _count?: DeviceBasketCountOrderByAggregateInput
    _max?: DeviceBasketMaxOrderByAggregateInput
    _min?: DeviceBasketMinOrderByAggregateInput
  }

  export type DeviceBasketScalarWhereWithAggregatesInput = {
    AND?: DeviceBasketScalarWhereWithAggregatesInput | DeviceBasketScalarWhereWithAggregatesInput[]
    OR?: DeviceBasketScalarWhereWithAggregatesInput[]
    NOT?: DeviceBasketScalarWhereWithAggregatesInput | DeviceBasketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceBasket"> | string
    cycleId?: StringWithAggregatesFilter<"DeviceBasket"> | string
    deviceId?: StringWithAggregatesFilter<"DeviceBasket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeviceBasket"> | Date | string
  }

  export type TariffWhereInput = {
    AND?: TariffWhereInput | TariffWhereInput[]
    OR?: TariffWhereInput[]
    NOT?: TariffWhereInput | TariffWhereInput[]
    id?: StringFilter<"Tariff"> | string
    code?: StringFilter<"Tariff"> | string
    name?: StringFilter<"Tariff"> | string
    type?: StringFilter<"Tariff"> | string
    subType?: StringNullableFilter<"Tariff"> | string | null
    monthlyFee?: DecimalFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    dataMb?: IntNullableFilter<"Tariff"> | number | null
    isUnlimitedData?: BoolFilter<"Tariff"> | boolean
    minutesPerMonth?: IntNullableFilter<"Tariff"> | number | null
    smsPerMonth?: IntNullableFilter<"Tariff"> | number | null
    isActive?: BoolFilter<"Tariff"> | boolean
    createdAt?: DateTimeFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeFilter<"Tariff"> | Date | string
    tariffRanges?: TariffRangeListRelationFilter
    tariffBaskets?: TariffBasketListRelationFilter
  }

  export type TariffOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subType?: SortOrderInput | SortOrder
    monthlyFee?: SortOrder
    dataMb?: SortOrderInput | SortOrder
    isUnlimitedData?: SortOrder
    minutesPerMonth?: SortOrderInput | SortOrder
    smsPerMonth?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tariffRanges?: TariffRangeOrderByRelationAggregateInput
    tariffBaskets?: TariffBasketOrderByRelationAggregateInput
  }

  export type TariffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: TariffWhereInput | TariffWhereInput[]
    OR?: TariffWhereInput[]
    NOT?: TariffWhereInput | TariffWhereInput[]
    name?: StringFilter<"Tariff"> | string
    type?: StringFilter<"Tariff"> | string
    subType?: StringNullableFilter<"Tariff"> | string | null
    monthlyFee?: DecimalFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    dataMb?: IntNullableFilter<"Tariff"> | number | null
    isUnlimitedData?: BoolFilter<"Tariff"> | boolean
    minutesPerMonth?: IntNullableFilter<"Tariff"> | number | null
    smsPerMonth?: IntNullableFilter<"Tariff"> | number | null
    isActive?: BoolFilter<"Tariff"> | boolean
    createdAt?: DateTimeFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeFilter<"Tariff"> | Date | string
    tariffRanges?: TariffRangeListRelationFilter
    tariffBaskets?: TariffBasketListRelationFilter
  }, "id" | "code">

  export type TariffOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subType?: SortOrderInput | SortOrder
    monthlyFee?: SortOrder
    dataMb?: SortOrderInput | SortOrder
    isUnlimitedData?: SortOrder
    minutesPerMonth?: SortOrderInput | SortOrder
    smsPerMonth?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TariffCountOrderByAggregateInput
    _avg?: TariffAvgOrderByAggregateInput
    _max?: TariffMaxOrderByAggregateInput
    _min?: TariffMinOrderByAggregateInput
    _sum?: TariffSumOrderByAggregateInput
  }

  export type TariffScalarWhereWithAggregatesInput = {
    AND?: TariffScalarWhereWithAggregatesInput | TariffScalarWhereWithAggregatesInput[]
    OR?: TariffScalarWhereWithAggregatesInput[]
    NOT?: TariffScalarWhereWithAggregatesInput | TariffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tariff"> | string
    code?: StringWithAggregatesFilter<"Tariff"> | string
    name?: StringWithAggregatesFilter<"Tariff"> | string
    type?: StringWithAggregatesFilter<"Tariff"> | string
    subType?: StringNullableWithAggregatesFilter<"Tariff"> | string | null
    monthlyFee?: DecimalWithAggregatesFilter<"Tariff"> | Decimal | DecimalJsLike | number | string
    dataMb?: IntNullableWithAggregatesFilter<"Tariff"> | number | null
    isUnlimitedData?: BoolWithAggregatesFilter<"Tariff"> | boolean
    minutesPerMonth?: IntNullableWithAggregatesFilter<"Tariff"> | number | null
    smsPerMonth?: IntNullableWithAggregatesFilter<"Tariff"> | number | null
    isActive?: BoolWithAggregatesFilter<"Tariff"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Tariff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tariff"> | Date | string
  }

  export type TariffRangeWhereInput = {
    AND?: TariffRangeWhereInput | TariffRangeWhereInput[]
    OR?: TariffRangeWhereInput[]
    NOT?: TariffRangeWhereInput | TariffRangeWhereInput[]
    id?: StringFilter<"TariffRange"> | string
    tariffId?: StringFilter<"TariffRange"> | string
    channelCode?: IntFilter<"TariffRange"> | number
    termMonths?: IntFilter<"TariffRange"> | number
    minPrice?: DecimalFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"TariffRange"> | Date | string
    updatedAt?: DateTimeFilter<"TariffRange"> | Date | string
    tariff?: XOR<TariffRelationFilter, TariffWhereInput>
  }

  export type TariffRangeOrderByWithRelationInput = {
    id?: SortOrder
    tariffId?: SortOrder
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tariff?: TariffOrderByWithRelationInput
  }

  export type TariffRangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tariffId_channelCode_termMonths?: TariffRangeTariffIdChannelCodeTermMonthsCompoundUniqueInput
    AND?: TariffRangeWhereInput | TariffRangeWhereInput[]
    OR?: TariffRangeWhereInput[]
    NOT?: TariffRangeWhereInput | TariffRangeWhereInput[]
    tariffId?: StringFilter<"TariffRange"> | string
    channelCode?: IntFilter<"TariffRange"> | number
    termMonths?: IntFilter<"TariffRange"> | number
    minPrice?: DecimalFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"TariffRange"> | Date | string
    updatedAt?: DateTimeFilter<"TariffRange"> | Date | string
    tariff?: XOR<TariffRelationFilter, TariffWhereInput>
  }, "id" | "tariffId_channelCode_termMonths">

  export type TariffRangeOrderByWithAggregationInput = {
    id?: SortOrder
    tariffId?: SortOrder
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TariffRangeCountOrderByAggregateInput
    _avg?: TariffRangeAvgOrderByAggregateInput
    _max?: TariffRangeMaxOrderByAggregateInput
    _min?: TariffRangeMinOrderByAggregateInput
    _sum?: TariffRangeSumOrderByAggregateInput
  }

  export type TariffRangeScalarWhereWithAggregatesInput = {
    AND?: TariffRangeScalarWhereWithAggregatesInput | TariffRangeScalarWhereWithAggregatesInput[]
    OR?: TariffRangeScalarWhereWithAggregatesInput[]
    NOT?: TariffRangeScalarWhereWithAggregatesInput | TariffRangeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TariffRange"> | string
    tariffId?: StringWithAggregatesFilter<"TariffRange"> | string
    channelCode?: IntWithAggregatesFilter<"TariffRange"> | number
    termMonths?: IntWithAggregatesFilter<"TariffRange"> | number
    minPrice?: DecimalWithAggregatesFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalWithAggregatesFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"TariffRange"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TariffRange"> | Date | string
  }

  export type TariffBasketWhereInput = {
    AND?: TariffBasketWhereInput | TariffBasketWhereInput[]
    OR?: TariffBasketWhereInput[]
    NOT?: TariffBasketWhereInput | TariffBasketWhereInput[]
    id?: StringFilter<"TariffBasket"> | string
    cycleId?: StringFilter<"TariffBasket"> | string
    tariffId?: StringFilter<"TariffBasket"> | string
    createdAt?: DateTimeFilter<"TariffBasket"> | Date | string
    tariff?: XOR<TariffRelationFilter, TariffWhereInput>
  }

  export type TariffBasketOrderByWithRelationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
    tariff?: TariffOrderByWithRelationInput
  }

  export type TariffBasketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cycleId_tariffId?: TariffBasketCycleIdTariffIdCompoundUniqueInput
    AND?: TariffBasketWhereInput | TariffBasketWhereInput[]
    OR?: TariffBasketWhereInput[]
    NOT?: TariffBasketWhereInput | TariffBasketWhereInput[]
    cycleId?: StringFilter<"TariffBasket"> | string
    tariffId?: StringFilter<"TariffBasket"> | string
    createdAt?: DateTimeFilter<"TariffBasket"> | Date | string
    tariff?: XOR<TariffRelationFilter, TariffWhereInput>
  }, "id" | "cycleId_tariffId">

  export type TariffBasketOrderByWithAggregationInput = {
    id?: SortOrder
    cycleId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
    _count?: TariffBasketCountOrderByAggregateInput
    _max?: TariffBasketMaxOrderByAggregateInput
    _min?: TariffBasketMinOrderByAggregateInput
  }

  export type TariffBasketScalarWhereWithAggregatesInput = {
    AND?: TariffBasketScalarWhereWithAggregatesInput | TariffBasketScalarWhereWithAggregatesInput[]
    OR?: TariffBasketScalarWhereWithAggregatesInput[]
    NOT?: TariffBasketScalarWhereWithAggregatesInput | TariffBasketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TariffBasket"> | string
    cycleId?: StringWithAggregatesFilter<"TariffBasket"> | string
    tariffId?: StringWithAggregatesFilter<"TariffBasket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TariffBasket"> | Date | string
  }

  export type VasWhereInput = {
    AND?: VasWhereInput | VasWhereInput[]
    OR?: VasWhereInput[]
    NOT?: VasWhereInput | VasWhereInput[]
    id?: StringFilter<"Vas"> | string
    code?: StringFilter<"Vas"> | string
    name?: StringFilter<"Vas"> | string
    description?: StringNullableFilter<"Vas"> | string | null
    monthlyCost?: DecimalFilter<"Vas"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Vas"> | boolean
    createdAt?: DateTimeFilter<"Vas"> | Date | string
    updatedAt?: DateTimeFilter<"Vas"> | Date | string
  }

  export type VasOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    monthlyCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: VasWhereInput | VasWhereInput[]
    OR?: VasWhereInput[]
    NOT?: VasWhereInput | VasWhereInput[]
    name?: StringFilter<"Vas"> | string
    description?: StringNullableFilter<"Vas"> | string | null
    monthlyCost?: DecimalFilter<"Vas"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Vas"> | boolean
    createdAt?: DateTimeFilter<"Vas"> | Date | string
    updatedAt?: DateTimeFilter<"Vas"> | Date | string
  }, "id" | "code">

  export type VasOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    monthlyCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VasCountOrderByAggregateInput
    _avg?: VasAvgOrderByAggregateInput
    _max?: VasMaxOrderByAggregateInput
    _min?: VasMinOrderByAggregateInput
    _sum?: VasSumOrderByAggregateInput
  }

  export type VasScalarWhereWithAggregatesInput = {
    AND?: VasScalarWhereWithAggregatesInput | VasScalarWhereWithAggregatesInput[]
    OR?: VasScalarWhereWithAggregatesInput[]
    NOT?: VasScalarWhereWithAggregatesInput | VasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vas"> | string
    code?: StringWithAggregatesFilter<"Vas"> | string
    name?: StringWithAggregatesFilter<"Vas"> | string
    description?: StringNullableWithAggregatesFilter<"Vas"> | string | null
    monthlyCost?: DecimalWithAggregatesFilter<"Vas"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Vas"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vas"> | Date | string
  }

  export type ChannelCreateInput = {
    id?: string
    code: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subChannels?: SubChannelCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    code: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subChannels?: SubChannelUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subChannels?: SubChannelUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subChannels?: SubChannelUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    code: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChannelCreateInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
    channel: ChannelCreateNestedOneWithoutSubChannelsInput
  }

  export type SubChannelUncheckedCreateInput = {
    id?: string
    channelId: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubChannelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutSubChannelsNestedInput
  }

  export type SubChannelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChannelCreateManyInput = {
    id?: string
    channelId: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubChannelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChannelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermCreateInput = {
    id?: string
    months: number
    displayName: string
    isActive?: boolean
  }

  export type TermUncheckedCreateInput = {
    id?: string
    months: number
    displayName: string
    isActive?: boolean
  }

  export type TermUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    months?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TermUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    months?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TermCreateManyInput = {
    id?: string
    months: number
    displayName: string
    isActive?: boolean
  }

  export type TermUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    months?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TermUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    months?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DeviceCreateInput = {
    id?: string
    oemCode: string
    model: string
    colour?: string | null
    storageGb?: number | null
    category?: string | null
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceBaskets?: DeviceBasketCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    oemCode: string
    model: string
    colour?: string | null
    storageGb?: number | null
    category?: string | null
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceBaskets?: DeviceBasketUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oemCode?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    storageGb?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceBaskets?: DeviceBasketUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oemCode?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    storageGb?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceBaskets?: DeviceBasketUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    oemCode: string
    model: string
    colour?: string | null
    storageGb?: number | null
    category?: string | null
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oemCode?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    storageGb?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    oemCode?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    storageGb?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketCreateInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
    device: DeviceCreateNestedOneWithoutDeviceBasketsInput
  }

  export type DeviceBasketUncheckedCreateInput = {
    id?: string
    cycleId: string
    deviceId: string
    createdAt?: Date | string
  }

  export type DeviceBasketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutDeviceBasketsNestedInput
  }

  export type DeviceBasketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketCreateManyInput = {
    id?: string
    cycleId: string
    deviceId: string
    createdAt?: Date | string
  }

  export type DeviceBasketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffCreateInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tariffRanges?: TariffRangeCreateNestedManyWithoutTariffInput
    tariffBaskets?: TariffBasketCreateNestedManyWithoutTariffInput
  }

  export type TariffUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tariffRanges?: TariffRangeUncheckedCreateNestedManyWithoutTariffInput
    tariffBaskets?: TariffBasketUncheckedCreateNestedManyWithoutTariffInput
  }

  export type TariffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffRanges?: TariffRangeUpdateManyWithoutTariffNestedInput
    tariffBaskets?: TariffBasketUpdateManyWithoutTariffNestedInput
  }

  export type TariffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffRanges?: TariffRangeUncheckedUpdateManyWithoutTariffNestedInput
    tariffBaskets?: TariffBasketUncheckedUpdateManyWithoutTariffNestedInput
  }

  export type TariffCreateManyInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeCreateInput = {
    id?: string
    channelCode: number
    termMonths: number
    minPrice: Decimal | DecimalJsLike | number | string
    maxPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    tariff: TariffCreateNestedOneWithoutTariffRangesInput
  }

  export type TariffRangeUncheckedCreateInput = {
    id?: string
    tariffId: string
    channelCode: number
    termMonths: number
    minPrice: Decimal | DecimalJsLike | number | string
    maxPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffRangeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariff?: TariffUpdateOneRequiredWithoutTariffRangesNestedInput
  }

  export type TariffRangeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeCreateManyInput = {
    id?: string
    tariffId: string
    channelCode: number
    termMonths: number
    minPrice: Decimal | DecimalJsLike | number | string
    maxPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffRangeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffBasketCreateInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
    tariff: TariffCreateNestedOneWithoutTariffBasketsInput
  }

  export type TariffBasketUncheckedCreateInput = {
    id?: string
    cycleId: string
    tariffId: string
    createdAt?: Date | string
  }

  export type TariffBasketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariff?: TariffUpdateOneRequiredWithoutTariffBasketsNestedInput
  }

  export type TariffBasketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffBasketCreateManyInput = {
    id?: string
    cycleId: string
    tariffId: string
    createdAt?: Date | string
  }

  export type TariffBasketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffBasketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    tariffId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VasCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    monthlyCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VasUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    monthlyCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VasCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    monthlyCost: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SubChannelListRelationFilter = {
    every?: SubChannelWhereInput
    some?: SubChannelWhereInput
    none?: SubChannelWhereInput
  }

  export type SubChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelSumOrderByAggregateInput = {
    code?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ChannelRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type SubChannelCountOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SubChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SubChannelMinOrderByAggregateInput = {
    id?: SortOrder
    channelId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TermCountOrderByAggregateInput = {
    id?: SortOrder
    months?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type TermAvgOrderByAggregateInput = {
    months?: SortOrder
  }

  export type TermMaxOrderByAggregateInput = {
    id?: SortOrder
    months?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type TermMinOrderByAggregateInput = {
    id?: SortOrder
    months?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type TermSumOrderByAggregateInput = {
    months?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type DeviceBasketListRelationFilter = {
    every?: DeviceBasketWhereInput
    some?: DeviceBasketWhereInput
    none?: DeviceBasketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceBasketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    oemCode?: SortOrder
    model?: SortOrder
    colour?: SortOrder
    storageGb?: SortOrder
    category?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    storageGb?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    oemCode?: SortOrder
    model?: SortOrder
    colour?: SortOrder
    storageGb?: SortOrder
    category?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    oemCode?: SortOrder
    model?: SortOrder
    colour?: SortOrder
    storageGb?: SortOrder
    category?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    storageGb?: SortOrder
    handsetCost?: SortOrder
    retailPrice?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DeviceRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type DeviceBasketCycleIdDeviceIdCompoundUniqueInput = {
    cycleId: string
    deviceId: string
  }

  export type DeviceBasketCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    deviceId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceBasketMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    deviceId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceBasketMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    deviceId?: SortOrder
    createdAt?: SortOrder
  }

  export type TariffRangeListRelationFilter = {
    every?: TariffRangeWhereInput
    some?: TariffRangeWhereInput
    none?: TariffRangeWhereInput
  }

  export type TariffBasketListRelationFilter = {
    every?: TariffBasketWhereInput
    some?: TariffBasketWhereInput
    none?: TariffBasketWhereInput
  }

  export type TariffRangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffBasketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subType?: SortOrder
    monthlyFee?: SortOrder
    dataMb?: SortOrder
    isUnlimitedData?: SortOrder
    minutesPerMonth?: SortOrder
    smsPerMonth?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffAvgOrderByAggregateInput = {
    monthlyFee?: SortOrder
    dataMb?: SortOrder
    minutesPerMonth?: SortOrder
    smsPerMonth?: SortOrder
  }

  export type TariffMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subType?: SortOrder
    monthlyFee?: SortOrder
    dataMb?: SortOrder
    isUnlimitedData?: SortOrder
    minutesPerMonth?: SortOrder
    smsPerMonth?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    subType?: SortOrder
    monthlyFee?: SortOrder
    dataMb?: SortOrder
    isUnlimitedData?: SortOrder
    minutesPerMonth?: SortOrder
    smsPerMonth?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffSumOrderByAggregateInput = {
    monthlyFee?: SortOrder
    dataMb?: SortOrder
    minutesPerMonth?: SortOrder
    smsPerMonth?: SortOrder
  }

  export type TariffRelationFilter = {
    is?: TariffWhereInput
    isNot?: TariffWhereInput
  }

  export type TariffRangeTariffIdChannelCodeTermMonthsCompoundUniqueInput = {
    tariffId: string
    channelCode: number
    termMonths: number
  }

  export type TariffRangeCountOrderByAggregateInput = {
    id?: SortOrder
    tariffId?: SortOrder
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffRangeAvgOrderByAggregateInput = {
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type TariffRangeMaxOrderByAggregateInput = {
    id?: SortOrder
    tariffId?: SortOrder
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffRangeMinOrderByAggregateInput = {
    id?: SortOrder
    tariffId?: SortOrder
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffRangeSumOrderByAggregateInput = {
    channelCode?: SortOrder
    termMonths?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type TariffBasketCycleIdTariffIdCompoundUniqueInput = {
    cycleId: string
    tariffId: string
  }

  export type TariffBasketCountOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
  }

  export type TariffBasketMaxOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
  }

  export type TariffBasketMinOrderByAggregateInput = {
    id?: SortOrder
    cycleId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
  }

  export type VasCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VasAvgOrderByAggregateInput = {
    monthlyCost?: SortOrder
  }

  export type VasMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VasMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    monthlyCost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VasSumOrderByAggregateInput = {
    monthlyCost?: SortOrder
  }

  export type SubChannelCreateNestedManyWithoutChannelInput = {
    create?: XOR<SubChannelCreateWithoutChannelInput, SubChannelUncheckedCreateWithoutChannelInput> | SubChannelCreateWithoutChannelInput[] | SubChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubChannelCreateOrConnectWithoutChannelInput | SubChannelCreateOrConnectWithoutChannelInput[]
    createMany?: SubChannelCreateManyChannelInputEnvelope
    connect?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
  }

  export type SubChannelUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<SubChannelCreateWithoutChannelInput, SubChannelUncheckedCreateWithoutChannelInput> | SubChannelCreateWithoutChannelInput[] | SubChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubChannelCreateOrConnectWithoutChannelInput | SubChannelCreateOrConnectWithoutChannelInput[]
    createMany?: SubChannelCreateManyChannelInputEnvelope
    connect?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubChannelUpdateManyWithoutChannelNestedInput = {
    create?: XOR<SubChannelCreateWithoutChannelInput, SubChannelUncheckedCreateWithoutChannelInput> | SubChannelCreateWithoutChannelInput[] | SubChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubChannelCreateOrConnectWithoutChannelInput | SubChannelCreateOrConnectWithoutChannelInput[]
    upsert?: SubChannelUpsertWithWhereUniqueWithoutChannelInput | SubChannelUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: SubChannelCreateManyChannelInputEnvelope
    set?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    disconnect?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    delete?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    connect?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    update?: SubChannelUpdateWithWhereUniqueWithoutChannelInput | SubChannelUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: SubChannelUpdateManyWithWhereWithoutChannelInput | SubChannelUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: SubChannelScalarWhereInput | SubChannelScalarWhereInput[]
  }

  export type SubChannelUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<SubChannelCreateWithoutChannelInput, SubChannelUncheckedCreateWithoutChannelInput> | SubChannelCreateWithoutChannelInput[] | SubChannelUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: SubChannelCreateOrConnectWithoutChannelInput | SubChannelCreateOrConnectWithoutChannelInput[]
    upsert?: SubChannelUpsertWithWhereUniqueWithoutChannelInput | SubChannelUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: SubChannelCreateManyChannelInputEnvelope
    set?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    disconnect?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    delete?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    connect?: SubChannelWhereUniqueInput | SubChannelWhereUniqueInput[]
    update?: SubChannelUpdateWithWhereUniqueWithoutChannelInput | SubChannelUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: SubChannelUpdateManyWithWhereWithoutChannelInput | SubChannelUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: SubChannelScalarWhereInput | SubChannelScalarWhereInput[]
  }

  export type ChannelCreateNestedOneWithoutSubChannelsInput = {
    create?: XOR<ChannelCreateWithoutSubChannelsInput, ChannelUncheckedCreateWithoutSubChannelsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutSubChannelsInput
    connect?: ChannelWhereUniqueInput
  }

  export type ChannelUpdateOneRequiredWithoutSubChannelsNestedInput = {
    create?: XOR<ChannelCreateWithoutSubChannelsInput, ChannelUncheckedCreateWithoutSubChannelsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutSubChannelsInput
    upsert?: ChannelUpsertWithoutSubChannelsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutSubChannelsInput, ChannelUpdateWithoutSubChannelsInput>, ChannelUncheckedUpdateWithoutSubChannelsInput>
  }

  export type DeviceBasketCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceBasketCreateWithoutDeviceInput, DeviceBasketUncheckedCreateWithoutDeviceInput> | DeviceBasketCreateWithoutDeviceInput[] | DeviceBasketUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceBasketCreateOrConnectWithoutDeviceInput | DeviceBasketCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceBasketCreateManyDeviceInputEnvelope
    connect?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
  }

  export type DeviceBasketUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceBasketCreateWithoutDeviceInput, DeviceBasketUncheckedCreateWithoutDeviceInput> | DeviceBasketCreateWithoutDeviceInput[] | DeviceBasketUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceBasketCreateOrConnectWithoutDeviceInput | DeviceBasketCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceBasketCreateManyDeviceInputEnvelope
    connect?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DeviceBasketUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceBasketCreateWithoutDeviceInput, DeviceBasketUncheckedCreateWithoutDeviceInput> | DeviceBasketCreateWithoutDeviceInput[] | DeviceBasketUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceBasketCreateOrConnectWithoutDeviceInput | DeviceBasketCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceBasketUpsertWithWhereUniqueWithoutDeviceInput | DeviceBasketUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceBasketCreateManyDeviceInputEnvelope
    set?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    disconnect?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    delete?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    connect?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    update?: DeviceBasketUpdateWithWhereUniqueWithoutDeviceInput | DeviceBasketUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceBasketUpdateManyWithWhereWithoutDeviceInput | DeviceBasketUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceBasketScalarWhereInput | DeviceBasketScalarWhereInput[]
  }

  export type DeviceBasketUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceBasketCreateWithoutDeviceInput, DeviceBasketUncheckedCreateWithoutDeviceInput> | DeviceBasketCreateWithoutDeviceInput[] | DeviceBasketUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceBasketCreateOrConnectWithoutDeviceInput | DeviceBasketCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceBasketUpsertWithWhereUniqueWithoutDeviceInput | DeviceBasketUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceBasketCreateManyDeviceInputEnvelope
    set?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    disconnect?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    delete?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    connect?: DeviceBasketWhereUniqueInput | DeviceBasketWhereUniqueInput[]
    update?: DeviceBasketUpdateWithWhereUniqueWithoutDeviceInput | DeviceBasketUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceBasketUpdateManyWithWhereWithoutDeviceInput | DeviceBasketUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceBasketScalarWhereInput | DeviceBasketScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutDeviceBasketsInput = {
    create?: XOR<DeviceCreateWithoutDeviceBasketsInput, DeviceUncheckedCreateWithoutDeviceBasketsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceBasketsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutDeviceBasketsNestedInput = {
    create?: XOR<DeviceCreateWithoutDeviceBasketsInput, DeviceUncheckedCreateWithoutDeviceBasketsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceBasketsInput
    upsert?: DeviceUpsertWithoutDeviceBasketsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDeviceBasketsInput, DeviceUpdateWithoutDeviceBasketsInput>, DeviceUncheckedUpdateWithoutDeviceBasketsInput>
  }

  export type TariffRangeCreateNestedManyWithoutTariffInput = {
    create?: XOR<TariffRangeCreateWithoutTariffInput, TariffRangeUncheckedCreateWithoutTariffInput> | TariffRangeCreateWithoutTariffInput[] | TariffRangeUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffRangeCreateOrConnectWithoutTariffInput | TariffRangeCreateOrConnectWithoutTariffInput[]
    createMany?: TariffRangeCreateManyTariffInputEnvelope
    connect?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
  }

  export type TariffBasketCreateNestedManyWithoutTariffInput = {
    create?: XOR<TariffBasketCreateWithoutTariffInput, TariffBasketUncheckedCreateWithoutTariffInput> | TariffBasketCreateWithoutTariffInput[] | TariffBasketUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffBasketCreateOrConnectWithoutTariffInput | TariffBasketCreateOrConnectWithoutTariffInput[]
    createMany?: TariffBasketCreateManyTariffInputEnvelope
    connect?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
  }

  export type TariffRangeUncheckedCreateNestedManyWithoutTariffInput = {
    create?: XOR<TariffRangeCreateWithoutTariffInput, TariffRangeUncheckedCreateWithoutTariffInput> | TariffRangeCreateWithoutTariffInput[] | TariffRangeUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffRangeCreateOrConnectWithoutTariffInput | TariffRangeCreateOrConnectWithoutTariffInput[]
    createMany?: TariffRangeCreateManyTariffInputEnvelope
    connect?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
  }

  export type TariffBasketUncheckedCreateNestedManyWithoutTariffInput = {
    create?: XOR<TariffBasketCreateWithoutTariffInput, TariffBasketUncheckedCreateWithoutTariffInput> | TariffBasketCreateWithoutTariffInput[] | TariffBasketUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffBasketCreateOrConnectWithoutTariffInput | TariffBasketCreateOrConnectWithoutTariffInput[]
    createMany?: TariffBasketCreateManyTariffInputEnvelope
    connect?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
  }

  export type TariffRangeUpdateManyWithoutTariffNestedInput = {
    create?: XOR<TariffRangeCreateWithoutTariffInput, TariffRangeUncheckedCreateWithoutTariffInput> | TariffRangeCreateWithoutTariffInput[] | TariffRangeUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffRangeCreateOrConnectWithoutTariffInput | TariffRangeCreateOrConnectWithoutTariffInput[]
    upsert?: TariffRangeUpsertWithWhereUniqueWithoutTariffInput | TariffRangeUpsertWithWhereUniqueWithoutTariffInput[]
    createMany?: TariffRangeCreateManyTariffInputEnvelope
    set?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    disconnect?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    delete?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    connect?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    update?: TariffRangeUpdateWithWhereUniqueWithoutTariffInput | TariffRangeUpdateWithWhereUniqueWithoutTariffInput[]
    updateMany?: TariffRangeUpdateManyWithWhereWithoutTariffInput | TariffRangeUpdateManyWithWhereWithoutTariffInput[]
    deleteMany?: TariffRangeScalarWhereInput | TariffRangeScalarWhereInput[]
  }

  export type TariffBasketUpdateManyWithoutTariffNestedInput = {
    create?: XOR<TariffBasketCreateWithoutTariffInput, TariffBasketUncheckedCreateWithoutTariffInput> | TariffBasketCreateWithoutTariffInput[] | TariffBasketUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffBasketCreateOrConnectWithoutTariffInput | TariffBasketCreateOrConnectWithoutTariffInput[]
    upsert?: TariffBasketUpsertWithWhereUniqueWithoutTariffInput | TariffBasketUpsertWithWhereUniqueWithoutTariffInput[]
    createMany?: TariffBasketCreateManyTariffInputEnvelope
    set?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    disconnect?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    delete?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    connect?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    update?: TariffBasketUpdateWithWhereUniqueWithoutTariffInput | TariffBasketUpdateWithWhereUniqueWithoutTariffInput[]
    updateMany?: TariffBasketUpdateManyWithWhereWithoutTariffInput | TariffBasketUpdateManyWithWhereWithoutTariffInput[]
    deleteMany?: TariffBasketScalarWhereInput | TariffBasketScalarWhereInput[]
  }

  export type TariffRangeUncheckedUpdateManyWithoutTariffNestedInput = {
    create?: XOR<TariffRangeCreateWithoutTariffInput, TariffRangeUncheckedCreateWithoutTariffInput> | TariffRangeCreateWithoutTariffInput[] | TariffRangeUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffRangeCreateOrConnectWithoutTariffInput | TariffRangeCreateOrConnectWithoutTariffInput[]
    upsert?: TariffRangeUpsertWithWhereUniqueWithoutTariffInput | TariffRangeUpsertWithWhereUniqueWithoutTariffInput[]
    createMany?: TariffRangeCreateManyTariffInputEnvelope
    set?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    disconnect?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    delete?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    connect?: TariffRangeWhereUniqueInput | TariffRangeWhereUniqueInput[]
    update?: TariffRangeUpdateWithWhereUniqueWithoutTariffInput | TariffRangeUpdateWithWhereUniqueWithoutTariffInput[]
    updateMany?: TariffRangeUpdateManyWithWhereWithoutTariffInput | TariffRangeUpdateManyWithWhereWithoutTariffInput[]
    deleteMany?: TariffRangeScalarWhereInput | TariffRangeScalarWhereInput[]
  }

  export type TariffBasketUncheckedUpdateManyWithoutTariffNestedInput = {
    create?: XOR<TariffBasketCreateWithoutTariffInput, TariffBasketUncheckedCreateWithoutTariffInput> | TariffBasketCreateWithoutTariffInput[] | TariffBasketUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: TariffBasketCreateOrConnectWithoutTariffInput | TariffBasketCreateOrConnectWithoutTariffInput[]
    upsert?: TariffBasketUpsertWithWhereUniqueWithoutTariffInput | TariffBasketUpsertWithWhereUniqueWithoutTariffInput[]
    createMany?: TariffBasketCreateManyTariffInputEnvelope
    set?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    disconnect?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    delete?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    connect?: TariffBasketWhereUniqueInput | TariffBasketWhereUniqueInput[]
    update?: TariffBasketUpdateWithWhereUniqueWithoutTariffInput | TariffBasketUpdateWithWhereUniqueWithoutTariffInput[]
    updateMany?: TariffBasketUpdateManyWithWhereWithoutTariffInput | TariffBasketUpdateManyWithWhereWithoutTariffInput[]
    deleteMany?: TariffBasketScalarWhereInput | TariffBasketScalarWhereInput[]
  }

  export type TariffCreateNestedOneWithoutTariffRangesInput = {
    create?: XOR<TariffCreateWithoutTariffRangesInput, TariffUncheckedCreateWithoutTariffRangesInput>
    connectOrCreate?: TariffCreateOrConnectWithoutTariffRangesInput
    connect?: TariffWhereUniqueInput
  }

  export type TariffUpdateOneRequiredWithoutTariffRangesNestedInput = {
    create?: XOR<TariffCreateWithoutTariffRangesInput, TariffUncheckedCreateWithoutTariffRangesInput>
    connectOrCreate?: TariffCreateOrConnectWithoutTariffRangesInput
    upsert?: TariffUpsertWithoutTariffRangesInput
    connect?: TariffWhereUniqueInput
    update?: XOR<XOR<TariffUpdateToOneWithWhereWithoutTariffRangesInput, TariffUpdateWithoutTariffRangesInput>, TariffUncheckedUpdateWithoutTariffRangesInput>
  }

  export type TariffCreateNestedOneWithoutTariffBasketsInput = {
    create?: XOR<TariffCreateWithoutTariffBasketsInput, TariffUncheckedCreateWithoutTariffBasketsInput>
    connectOrCreate?: TariffCreateOrConnectWithoutTariffBasketsInput
    connect?: TariffWhereUniqueInput
  }

  export type TariffUpdateOneRequiredWithoutTariffBasketsNestedInput = {
    create?: XOR<TariffCreateWithoutTariffBasketsInput, TariffUncheckedCreateWithoutTariffBasketsInput>
    connectOrCreate?: TariffCreateOrConnectWithoutTariffBasketsInput
    upsert?: TariffUpsertWithoutTariffBasketsInput
    connect?: TariffWhereUniqueInput
    update?: XOR<XOR<TariffUpdateToOneWithWhereWithoutTariffBasketsInput, TariffUpdateWithoutTariffBasketsInput>, TariffUncheckedUpdateWithoutTariffBasketsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type SubChannelCreateWithoutChannelInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubChannelUncheckedCreateWithoutChannelInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubChannelCreateOrConnectWithoutChannelInput = {
    where: SubChannelWhereUniqueInput
    create: XOR<SubChannelCreateWithoutChannelInput, SubChannelUncheckedCreateWithoutChannelInput>
  }

  export type SubChannelCreateManyChannelInputEnvelope = {
    data: SubChannelCreateManyChannelInput | SubChannelCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type SubChannelUpsertWithWhereUniqueWithoutChannelInput = {
    where: SubChannelWhereUniqueInput
    update: XOR<SubChannelUpdateWithoutChannelInput, SubChannelUncheckedUpdateWithoutChannelInput>
    create: XOR<SubChannelCreateWithoutChannelInput, SubChannelUncheckedCreateWithoutChannelInput>
  }

  export type SubChannelUpdateWithWhereUniqueWithoutChannelInput = {
    where: SubChannelWhereUniqueInput
    data: XOR<SubChannelUpdateWithoutChannelInput, SubChannelUncheckedUpdateWithoutChannelInput>
  }

  export type SubChannelUpdateManyWithWhereWithoutChannelInput = {
    where: SubChannelScalarWhereInput
    data: XOR<SubChannelUpdateManyMutationInput, SubChannelUncheckedUpdateManyWithoutChannelInput>
  }

  export type SubChannelScalarWhereInput = {
    AND?: SubChannelScalarWhereInput | SubChannelScalarWhereInput[]
    OR?: SubChannelScalarWhereInput[]
    NOT?: SubChannelScalarWhereInput | SubChannelScalarWhereInput[]
    id?: StringFilter<"SubChannel"> | string
    channelId?: StringFilter<"SubChannel"> | string
    name?: StringFilter<"SubChannel"> | string
    code?: StringFilter<"SubChannel"> | string
    isActive?: BoolFilter<"SubChannel"> | boolean
    createdAt?: DateTimeFilter<"SubChannel"> | Date | string
  }

  export type ChannelCreateWithoutSubChannelsInput = {
    id?: string
    code: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUncheckedCreateWithoutSubChannelsInput = {
    id?: string
    code: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateOrConnectWithoutSubChannelsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutSubChannelsInput, ChannelUncheckedCreateWithoutSubChannelsInput>
  }

  export type ChannelUpsertWithoutSubChannelsInput = {
    update: XOR<ChannelUpdateWithoutSubChannelsInput, ChannelUncheckedUpdateWithoutSubChannelsInput>
    create: XOR<ChannelCreateWithoutSubChannelsInput, ChannelUncheckedCreateWithoutSubChannelsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutSubChannelsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutSubChannelsInput, ChannelUncheckedUpdateWithoutSubChannelsInput>
  }

  export type ChannelUpdateWithoutSubChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateWithoutSubChannelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketCreateWithoutDeviceInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
  }

  export type DeviceBasketUncheckedCreateWithoutDeviceInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
  }

  export type DeviceBasketCreateOrConnectWithoutDeviceInput = {
    where: DeviceBasketWhereUniqueInput
    create: XOR<DeviceBasketCreateWithoutDeviceInput, DeviceBasketUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceBasketCreateManyDeviceInputEnvelope = {
    data: DeviceBasketCreateManyDeviceInput | DeviceBasketCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceBasketUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceBasketWhereUniqueInput
    update: XOR<DeviceBasketUpdateWithoutDeviceInput, DeviceBasketUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceBasketCreateWithoutDeviceInput, DeviceBasketUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceBasketUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceBasketWhereUniqueInput
    data: XOR<DeviceBasketUpdateWithoutDeviceInput, DeviceBasketUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceBasketUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceBasketScalarWhereInput
    data: XOR<DeviceBasketUpdateManyMutationInput, DeviceBasketUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceBasketScalarWhereInput = {
    AND?: DeviceBasketScalarWhereInput | DeviceBasketScalarWhereInput[]
    OR?: DeviceBasketScalarWhereInput[]
    NOT?: DeviceBasketScalarWhereInput | DeviceBasketScalarWhereInput[]
    id?: StringFilter<"DeviceBasket"> | string
    cycleId?: StringFilter<"DeviceBasket"> | string
    deviceId?: StringFilter<"DeviceBasket"> | string
    createdAt?: DateTimeFilter<"DeviceBasket"> | Date | string
  }

  export type DeviceCreateWithoutDeviceBasketsInput = {
    id?: string
    oemCode: string
    model: string
    colour?: string | null
    storageGb?: number | null
    category?: string | null
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUncheckedCreateWithoutDeviceBasketsInput = {
    id?: string
    oemCode: string
    model: string
    colour?: string | null
    storageGb?: number | null
    category?: string | null
    handsetCost: Decimal | DecimalJsLike | number | string
    retailPrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutDeviceBasketsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDeviceBasketsInput, DeviceUncheckedCreateWithoutDeviceBasketsInput>
  }

  export type DeviceUpsertWithoutDeviceBasketsInput = {
    update: XOR<DeviceUpdateWithoutDeviceBasketsInput, DeviceUncheckedUpdateWithoutDeviceBasketsInput>
    create: XOR<DeviceCreateWithoutDeviceBasketsInput, DeviceUncheckedCreateWithoutDeviceBasketsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDeviceBasketsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDeviceBasketsInput, DeviceUncheckedUpdateWithoutDeviceBasketsInput>
  }

  export type DeviceUpdateWithoutDeviceBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oemCode?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    storageGb?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateWithoutDeviceBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    oemCode?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    colour?: NullableStringFieldUpdateOperationsInput | string | null
    storageGb?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    handsetCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retailPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeCreateWithoutTariffInput = {
    id?: string
    channelCode: number
    termMonths: number
    minPrice: Decimal | DecimalJsLike | number | string
    maxPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffRangeUncheckedCreateWithoutTariffInput = {
    id?: string
    channelCode: number
    termMonths: number
    minPrice: Decimal | DecimalJsLike | number | string
    maxPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffRangeCreateOrConnectWithoutTariffInput = {
    where: TariffRangeWhereUniqueInput
    create: XOR<TariffRangeCreateWithoutTariffInput, TariffRangeUncheckedCreateWithoutTariffInput>
  }

  export type TariffRangeCreateManyTariffInputEnvelope = {
    data: TariffRangeCreateManyTariffInput | TariffRangeCreateManyTariffInput[]
    skipDuplicates?: boolean
  }

  export type TariffBasketCreateWithoutTariffInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
  }

  export type TariffBasketUncheckedCreateWithoutTariffInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
  }

  export type TariffBasketCreateOrConnectWithoutTariffInput = {
    where: TariffBasketWhereUniqueInput
    create: XOR<TariffBasketCreateWithoutTariffInput, TariffBasketUncheckedCreateWithoutTariffInput>
  }

  export type TariffBasketCreateManyTariffInputEnvelope = {
    data: TariffBasketCreateManyTariffInput | TariffBasketCreateManyTariffInput[]
    skipDuplicates?: boolean
  }

  export type TariffRangeUpsertWithWhereUniqueWithoutTariffInput = {
    where: TariffRangeWhereUniqueInput
    update: XOR<TariffRangeUpdateWithoutTariffInput, TariffRangeUncheckedUpdateWithoutTariffInput>
    create: XOR<TariffRangeCreateWithoutTariffInput, TariffRangeUncheckedCreateWithoutTariffInput>
  }

  export type TariffRangeUpdateWithWhereUniqueWithoutTariffInput = {
    where: TariffRangeWhereUniqueInput
    data: XOR<TariffRangeUpdateWithoutTariffInput, TariffRangeUncheckedUpdateWithoutTariffInput>
  }

  export type TariffRangeUpdateManyWithWhereWithoutTariffInput = {
    where: TariffRangeScalarWhereInput
    data: XOR<TariffRangeUpdateManyMutationInput, TariffRangeUncheckedUpdateManyWithoutTariffInput>
  }

  export type TariffRangeScalarWhereInput = {
    AND?: TariffRangeScalarWhereInput | TariffRangeScalarWhereInput[]
    OR?: TariffRangeScalarWhereInput[]
    NOT?: TariffRangeScalarWhereInput | TariffRangeScalarWhereInput[]
    id?: StringFilter<"TariffRange"> | string
    tariffId?: StringFilter<"TariffRange"> | string
    channelCode?: IntFilter<"TariffRange"> | number
    termMonths?: IntFilter<"TariffRange"> | number
    minPrice?: DecimalFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFilter<"TariffRange"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"TariffRange"> | Date | string
    updatedAt?: DateTimeFilter<"TariffRange"> | Date | string
  }

  export type TariffBasketUpsertWithWhereUniqueWithoutTariffInput = {
    where: TariffBasketWhereUniqueInput
    update: XOR<TariffBasketUpdateWithoutTariffInput, TariffBasketUncheckedUpdateWithoutTariffInput>
    create: XOR<TariffBasketCreateWithoutTariffInput, TariffBasketUncheckedCreateWithoutTariffInput>
  }

  export type TariffBasketUpdateWithWhereUniqueWithoutTariffInput = {
    where: TariffBasketWhereUniqueInput
    data: XOR<TariffBasketUpdateWithoutTariffInput, TariffBasketUncheckedUpdateWithoutTariffInput>
  }

  export type TariffBasketUpdateManyWithWhereWithoutTariffInput = {
    where: TariffBasketScalarWhereInput
    data: XOR<TariffBasketUpdateManyMutationInput, TariffBasketUncheckedUpdateManyWithoutTariffInput>
  }

  export type TariffBasketScalarWhereInput = {
    AND?: TariffBasketScalarWhereInput | TariffBasketScalarWhereInput[]
    OR?: TariffBasketScalarWhereInput[]
    NOT?: TariffBasketScalarWhereInput | TariffBasketScalarWhereInput[]
    id?: StringFilter<"TariffBasket"> | string
    cycleId?: StringFilter<"TariffBasket"> | string
    tariffId?: StringFilter<"TariffBasket"> | string
    createdAt?: DateTimeFilter<"TariffBasket"> | Date | string
  }

  export type TariffCreateWithoutTariffRangesInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tariffBaskets?: TariffBasketCreateNestedManyWithoutTariffInput
  }

  export type TariffUncheckedCreateWithoutTariffRangesInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tariffBaskets?: TariffBasketUncheckedCreateNestedManyWithoutTariffInput
  }

  export type TariffCreateOrConnectWithoutTariffRangesInput = {
    where: TariffWhereUniqueInput
    create: XOR<TariffCreateWithoutTariffRangesInput, TariffUncheckedCreateWithoutTariffRangesInput>
  }

  export type TariffUpsertWithoutTariffRangesInput = {
    update: XOR<TariffUpdateWithoutTariffRangesInput, TariffUncheckedUpdateWithoutTariffRangesInput>
    create: XOR<TariffCreateWithoutTariffRangesInput, TariffUncheckedCreateWithoutTariffRangesInput>
    where?: TariffWhereInput
  }

  export type TariffUpdateToOneWithWhereWithoutTariffRangesInput = {
    where?: TariffWhereInput
    data: XOR<TariffUpdateWithoutTariffRangesInput, TariffUncheckedUpdateWithoutTariffRangesInput>
  }

  export type TariffUpdateWithoutTariffRangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: TariffBasketUpdateManyWithoutTariffNestedInput
  }

  export type TariffUncheckedUpdateWithoutTariffRangesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffBaskets?: TariffBasketUncheckedUpdateManyWithoutTariffNestedInput
  }

  export type TariffCreateWithoutTariffBasketsInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tariffRanges?: TariffRangeCreateNestedManyWithoutTariffInput
  }

  export type TariffUncheckedCreateWithoutTariffBasketsInput = {
    id?: string
    code: string
    name: string
    type: string
    subType?: string | null
    monthlyFee: Decimal | DecimalJsLike | number | string
    dataMb?: number | null
    isUnlimitedData?: boolean
    minutesPerMonth?: number | null
    smsPerMonth?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tariffRanges?: TariffRangeUncheckedCreateNestedManyWithoutTariffInput
  }

  export type TariffCreateOrConnectWithoutTariffBasketsInput = {
    where: TariffWhereUniqueInput
    create: XOR<TariffCreateWithoutTariffBasketsInput, TariffUncheckedCreateWithoutTariffBasketsInput>
  }

  export type TariffUpsertWithoutTariffBasketsInput = {
    update: XOR<TariffUpdateWithoutTariffBasketsInput, TariffUncheckedUpdateWithoutTariffBasketsInput>
    create: XOR<TariffCreateWithoutTariffBasketsInput, TariffUncheckedCreateWithoutTariffBasketsInput>
    where?: TariffWhereInput
  }

  export type TariffUpdateToOneWithWhereWithoutTariffBasketsInput = {
    where?: TariffWhereInput
    data: XOR<TariffUpdateWithoutTariffBasketsInput, TariffUncheckedUpdateWithoutTariffBasketsInput>
  }

  export type TariffUpdateWithoutTariffBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffRanges?: TariffRangeUpdateManyWithoutTariffNestedInput
  }

  export type TariffUncheckedUpdateWithoutTariffBasketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    subType?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dataMb?: NullableIntFieldUpdateOperationsInput | number | null
    isUnlimitedData?: BoolFieldUpdateOperationsInput | boolean
    minutesPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    smsPerMonth?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffRanges?: TariffRangeUncheckedUpdateManyWithoutTariffNestedInput
  }

  export type SubChannelCreateManyChannelInput = {
    id?: string
    name: string
    code: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubChannelUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChannelUncheckedUpdateWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubChannelUncheckedUpdateManyWithoutChannelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketCreateManyDeviceInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
  }

  export type DeviceBasketUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceBasketUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeCreateManyTariffInput = {
    id?: string
    channelCode: number
    termMonths: number
    minPrice: Decimal | DecimalJsLike | number | string
    maxPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffBasketCreateManyTariffInput = {
    id?: string
    cycleId: string
    createdAt?: Date | string
  }

  export type TariffRangeUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeUncheckedUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffRangeUncheckedUpdateManyWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelCode?: IntFieldUpdateOperationsInput | number
    termMonths?: IntFieldUpdateOperationsInput | number
    minPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffBasketUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffBasketUncheckedUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffBasketUncheckedUpdateManyWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ChannelCountOutputTypeDefaultArgs instead
     */
    export type ChannelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
     */
    export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TariffCountOutputTypeDefaultArgs instead
     */
    export type TariffCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TariffCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChannelDefaultArgs instead
     */
    export type ChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChannelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubChannelDefaultArgs instead
     */
    export type SubChannelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubChannelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TermDefaultArgs instead
     */
    export type TermArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TermDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceBasketDefaultArgs instead
     */
    export type DeviceBasketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceBasketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TariffDefaultArgs instead
     */
    export type TariffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TariffDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TariffRangeDefaultArgs instead
     */
    export type TariffRangeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TariffRangeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TariffBasketDefaultArgs instead
     */
    export type TariffBasketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TariffBasketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VasDefaultArgs instead
     */
    export type VasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VasDefaultArgs<ExtArgs>

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