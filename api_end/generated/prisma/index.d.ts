
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model tb_history
 * 
 */
export type tb_history = $Result.DefaultSelection<Prisma.$tb_historyPayload>
/**
 * Model tb_collect
 * 
 */
export type tb_collect = $Result.DefaultSelection<Prisma.$tb_collectPayload>
/**
 * Model tb_account
 * 
 */
export type tb_account = $Result.DefaultSelection<Prisma.$tb_accountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_history`: Exposes CRUD operations for the **tb_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_histories
    * const tb_histories = await prisma.tb_history.findMany()
    * ```
    */
  get tb_history(): Prisma.tb_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_collect`: Exposes CRUD operations for the **tb_collect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_collects
    * const tb_collects = await prisma.tb_collect.findMany()
    * ```
    */
  get tb_collect(): Prisma.tb_collectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_account`: Exposes CRUD operations for the **tb_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_accounts
    * const tb_accounts = await prisma.tb_account.findMany()
    * ```
    */
  get tb_account(): Prisma.tb_accountDelegate<ExtArgs, ClientOptions>;
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
    user: 'user',
    tb_history: 'tb_history',
    tb_collect: 'tb_collect',
    tb_account: 'tb_account'
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
      modelProps: "user" | "tb_history" | "tb_collect" | "tb_account"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      tb_history: {
        payload: Prisma.$tb_historyPayload<ExtArgs>
        fields: Prisma.tb_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>
          }
          findFirst: {
            args: Prisma.tb_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>
          }
          findMany: {
            args: Prisma.tb_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>[]
          }
          create: {
            args: Prisma.tb_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>
          }
          createMany: {
            args: Prisma.tb_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>[]
          }
          delete: {
            args: Prisma.tb_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>
          }
          update: {
            args: Prisma.tb_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>
          }
          deleteMany: {
            args: Prisma.tb_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>[]
          }
          upsert: {
            args: Prisma.tb_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_historyPayload>
          }
          aggregate: {
            args: Prisma.Tb_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_history>
          }
          groupBy: {
            args: Prisma.tb_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_historyCountAggregateOutputType> | number
          }
        }
      }
      tb_collect: {
        payload: Prisma.$tb_collectPayload<ExtArgs>
        fields: Prisma.tb_collectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_collectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_collectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>
          }
          findFirst: {
            args: Prisma.tb_collectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_collectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>
          }
          findMany: {
            args: Prisma.tb_collectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>[]
          }
          create: {
            args: Prisma.tb_collectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>
          }
          createMany: {
            args: Prisma.tb_collectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_collectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>[]
          }
          delete: {
            args: Prisma.tb_collectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>
          }
          update: {
            args: Prisma.tb_collectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>
          }
          deleteMany: {
            args: Prisma.tb_collectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_collectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_collectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>[]
          }
          upsert: {
            args: Prisma.tb_collectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_collectPayload>
          }
          aggregate: {
            args: Prisma.Tb_collectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_collect>
          }
          groupBy: {
            args: Prisma.tb_collectGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_collectGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_collectCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_collectCountAggregateOutputType> | number
          }
        }
      }
      tb_account: {
        payload: Prisma.$tb_accountPayload<ExtArgs>
        fields: Prisma.tb_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>
          }
          findFirst: {
            args: Prisma.tb_accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>
          }
          findMany: {
            args: Prisma.tb_accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>[]
          }
          create: {
            args: Prisma.tb_accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>
          }
          createMany: {
            args: Prisma.tb_accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>[]
          }
          delete: {
            args: Prisma.tb_accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>
          }
          update: {
            args: Prisma.tb_accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>
          }
          deleteMany: {
            args: Prisma.tb_accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>[]
          }
          upsert: {
            args: Prisma.tb_accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_accountPayload>
          }
          aggregate: {
            args: Prisma.Tb_accountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_account>
          }
          groupBy: {
            args: Prisma.tb_accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_accountCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_accountCountAggregateOutputType> | number
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
    user?: userOmit
    tb_history?: tb_historyOmit
    tb_collect?: tb_collectOmit
    tb_account?: tb_accountOmit
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
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model tb_history
   */

  export type AggregateTb_history = {
    _count: Tb_historyCountAggregateOutputType | null
    _avg: Tb_historyAvgAggregateOutputType | null
    _sum: Tb_historySumAggregateOutputType | null
    _min: Tb_historyMinAggregateOutputType | null
    _max: Tb_historyMaxAggregateOutputType | null
  }

  export type Tb_historyAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_historySumAggregateOutputType = {
    id: number | null
  }

  export type Tb_historyMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    time1: string | null
  }

  export type Tb_historyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    time1: string | null
  }

  export type Tb_historyCountAggregateOutputType = {
    id: number
    name: number
    url: number
    time1: number
    _all: number
  }


  export type Tb_historyAvgAggregateInputType = {
    id?: true
  }

  export type Tb_historySumAggregateInputType = {
    id?: true
  }

  export type Tb_historyMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    time1?: true
  }

  export type Tb_historyMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    time1?: true
  }

  export type Tb_historyCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    time1?: true
    _all?: true
  }

  export type Tb_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_history to aggregate.
     */
    where?: tb_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_histories to fetch.
     */
    orderBy?: tb_historyOrderByWithRelationInput | tb_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_histories
    **/
    _count?: true | Tb_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_historyMaxAggregateInputType
  }

  export type GetTb_historyAggregateType<T extends Tb_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_history[P]>
      : GetScalarType<T[P], AggregateTb_history[P]>
  }




  export type tb_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_historyWhereInput
    orderBy?: tb_historyOrderByWithAggregationInput | tb_historyOrderByWithAggregationInput[]
    by: Tb_historyScalarFieldEnum[] | Tb_historyScalarFieldEnum
    having?: tb_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_historyCountAggregateInputType | true
    _avg?: Tb_historyAvgAggregateInputType
    _sum?: Tb_historySumAggregateInputType
    _min?: Tb_historyMinAggregateInputType
    _max?: Tb_historyMaxAggregateInputType
  }

  export type Tb_historyGroupByOutputType = {
    id: number
    name: string
    url: string
    time1: string
    _count: Tb_historyCountAggregateOutputType | null
    _avg: Tb_historyAvgAggregateOutputType | null
    _sum: Tb_historySumAggregateOutputType | null
    _min: Tb_historyMinAggregateOutputType | null
    _max: Tb_historyMaxAggregateOutputType | null
  }

  type GetTb_historyGroupByPayload<T extends tb_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_historyGroupByOutputType[P]>
        }
      >
    >


  export type tb_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    time1?: boolean
  }, ExtArgs["result"]["tb_history"]>

  export type tb_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    time1?: boolean
  }, ExtArgs["result"]["tb_history"]>

  export type tb_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    time1?: boolean
  }, ExtArgs["result"]["tb_history"]>

  export type tb_historySelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    time1?: boolean
  }

  export type tb_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "time1", ExtArgs["result"]["tb_history"]>

  export type $tb_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_history"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      time1: string
    }, ExtArgs["result"]["tb_history"]>
    composites: {}
  }

  type tb_historyGetPayload<S extends boolean | null | undefined | tb_historyDefaultArgs> = $Result.GetResult<Prisma.$tb_historyPayload, S>

  type tb_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_historyCountAggregateInputType | true
    }

  export interface tb_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_history'], meta: { name: 'tb_history' } }
    /**
     * Find zero or one Tb_history that matches the filter.
     * @param {tb_historyFindUniqueArgs} args - Arguments to find a Tb_history
     * @example
     * // Get one Tb_history
     * const tb_history = await prisma.tb_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_historyFindUniqueArgs>(args: SelectSubset<T, tb_historyFindUniqueArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_historyFindUniqueOrThrowArgs} args - Arguments to find a Tb_history
     * @example
     * // Get one Tb_history
     * const tb_history = await prisma.tb_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_historyFindFirstArgs} args - Arguments to find a Tb_history
     * @example
     * // Get one Tb_history
     * const tb_history = await prisma.tb_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_historyFindFirstArgs>(args?: SelectSubset<T, tb_historyFindFirstArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_historyFindFirstOrThrowArgs} args - Arguments to find a Tb_history
     * @example
     * // Get one Tb_history
     * const tb_history = await prisma.tb_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_histories
     * const tb_histories = await prisma.tb_history.findMany()
     * 
     * // Get first 10 Tb_histories
     * const tb_histories = await prisma.tb_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_historyWithIdOnly = await prisma.tb_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_historyFindManyArgs>(args?: SelectSubset<T, tb_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_history.
     * @param {tb_historyCreateArgs} args - Arguments to create a Tb_history.
     * @example
     * // Create one Tb_history
     * const Tb_history = await prisma.tb_history.create({
     *   data: {
     *     // ... data to create a Tb_history
     *   }
     * })
     * 
     */
    create<T extends tb_historyCreateArgs>(args: SelectSubset<T, tb_historyCreateArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_histories.
     * @param {tb_historyCreateManyArgs} args - Arguments to create many Tb_histories.
     * @example
     * // Create many Tb_histories
     * const tb_history = await prisma.tb_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_historyCreateManyArgs>(args?: SelectSubset<T, tb_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_histories and returns the data saved in the database.
     * @param {tb_historyCreateManyAndReturnArgs} args - Arguments to create many Tb_histories.
     * @example
     * // Create many Tb_histories
     * const tb_history = await prisma.tb_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_histories and only return the `id`
     * const tb_historyWithIdOnly = await prisma.tb_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_history.
     * @param {tb_historyDeleteArgs} args - Arguments to delete one Tb_history.
     * @example
     * // Delete one Tb_history
     * const Tb_history = await prisma.tb_history.delete({
     *   where: {
     *     // ... filter to delete one Tb_history
     *   }
     * })
     * 
     */
    delete<T extends tb_historyDeleteArgs>(args: SelectSubset<T, tb_historyDeleteArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_history.
     * @param {tb_historyUpdateArgs} args - Arguments to update one Tb_history.
     * @example
     * // Update one Tb_history
     * const tb_history = await prisma.tb_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_historyUpdateArgs>(args: SelectSubset<T, tb_historyUpdateArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_histories.
     * @param {tb_historyDeleteManyArgs} args - Arguments to filter Tb_histories to delete.
     * @example
     * // Delete a few Tb_histories
     * const { count } = await prisma.tb_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_historyDeleteManyArgs>(args?: SelectSubset<T, tb_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_histories
     * const tb_history = await prisma.tb_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_historyUpdateManyArgs>(args: SelectSubset<T, tb_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_histories and returns the data updated in the database.
     * @param {tb_historyUpdateManyAndReturnArgs} args - Arguments to update many Tb_histories.
     * @example
     * // Update many Tb_histories
     * const tb_history = await prisma.tb_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_histories and only return the `id`
     * const tb_historyWithIdOnly = await prisma.tb_history.updateManyAndReturn({
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
    updateManyAndReturn<T extends tb_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_history.
     * @param {tb_historyUpsertArgs} args - Arguments to update or create a Tb_history.
     * @example
     * // Update or create a Tb_history
     * const tb_history = await prisma.tb_history.upsert({
     *   create: {
     *     // ... data to create a Tb_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_history we want to update
     *   }
     * })
     */
    upsert<T extends tb_historyUpsertArgs>(args: SelectSubset<T, tb_historyUpsertArgs<ExtArgs>>): Prisma__tb_historyClient<$Result.GetResult<Prisma.$tb_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_historyCountArgs} args - Arguments to filter Tb_histories to count.
     * @example
     * // Count the number of Tb_histories
     * const count = await prisma.tb_history.count({
     *   where: {
     *     // ... the filter for the Tb_histories we want to count
     *   }
     * })
    **/
    count<T extends tb_historyCountArgs>(
      args?: Subset<T, tb_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_historyAggregateArgs>(args: Subset<T, Tb_historyAggregateArgs>): Prisma.PrismaPromise<GetTb_historyAggregateType<T>>

    /**
     * Group by Tb_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_historyGroupByArgs} args - Group by arguments.
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
      T extends tb_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_historyGroupByArgs['orderBy'] }
        : { orderBy?: tb_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_history model
   */
  readonly fields: tb_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_history model
   */
  interface tb_historyFieldRefs {
    readonly id: FieldRef<"tb_history", 'Int'>
    readonly name: FieldRef<"tb_history", 'String'>
    readonly url: FieldRef<"tb_history", 'String'>
    readonly time1: FieldRef<"tb_history", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_history findUnique
   */
  export type tb_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * Filter, which tb_history to fetch.
     */
    where: tb_historyWhereUniqueInput
  }

  /**
   * tb_history findUniqueOrThrow
   */
  export type tb_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * Filter, which tb_history to fetch.
     */
    where: tb_historyWhereUniqueInput
  }

  /**
   * tb_history findFirst
   */
  export type tb_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * Filter, which tb_history to fetch.
     */
    where?: tb_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_histories to fetch.
     */
    orderBy?: tb_historyOrderByWithRelationInput | tb_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_histories.
     */
    cursor?: tb_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_histories.
     */
    distinct?: Tb_historyScalarFieldEnum | Tb_historyScalarFieldEnum[]
  }

  /**
   * tb_history findFirstOrThrow
   */
  export type tb_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * Filter, which tb_history to fetch.
     */
    where?: tb_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_histories to fetch.
     */
    orderBy?: tb_historyOrderByWithRelationInput | tb_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_histories.
     */
    cursor?: tb_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_histories.
     */
    distinct?: Tb_historyScalarFieldEnum | Tb_historyScalarFieldEnum[]
  }

  /**
   * tb_history findMany
   */
  export type tb_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * Filter, which tb_histories to fetch.
     */
    where?: tb_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_histories to fetch.
     */
    orderBy?: tb_historyOrderByWithRelationInput | tb_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_histories.
     */
    cursor?: tb_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_histories.
     */
    skip?: number
    distinct?: Tb_historyScalarFieldEnum | Tb_historyScalarFieldEnum[]
  }

  /**
   * tb_history create
   */
  export type tb_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_history.
     */
    data: XOR<tb_historyCreateInput, tb_historyUncheckedCreateInput>
  }

  /**
   * tb_history createMany
   */
  export type tb_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_histories.
     */
    data: tb_historyCreateManyInput | tb_historyCreateManyInput[]
  }

  /**
   * tb_history createManyAndReturn
   */
  export type tb_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * The data used to create many tb_histories.
     */
    data: tb_historyCreateManyInput | tb_historyCreateManyInput[]
  }

  /**
   * tb_history update
   */
  export type tb_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_history.
     */
    data: XOR<tb_historyUpdateInput, tb_historyUncheckedUpdateInput>
    /**
     * Choose, which tb_history to update.
     */
    where: tb_historyWhereUniqueInput
  }

  /**
   * tb_history updateMany
   */
  export type tb_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_histories.
     */
    data: XOR<tb_historyUpdateManyMutationInput, tb_historyUncheckedUpdateManyInput>
    /**
     * Filter which tb_histories to update
     */
    where?: tb_historyWhereInput
    /**
     * Limit how many tb_histories to update.
     */
    limit?: number
  }

  /**
   * tb_history updateManyAndReturn
   */
  export type tb_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * The data used to update tb_histories.
     */
    data: XOR<tb_historyUpdateManyMutationInput, tb_historyUncheckedUpdateManyInput>
    /**
     * Filter which tb_histories to update
     */
    where?: tb_historyWhereInput
    /**
     * Limit how many tb_histories to update.
     */
    limit?: number
  }

  /**
   * tb_history upsert
   */
  export type tb_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_history to update in case it exists.
     */
    where: tb_historyWhereUniqueInput
    /**
     * In case the tb_history found by the `where` argument doesn't exist, create a new tb_history with this data.
     */
    create: XOR<tb_historyCreateInput, tb_historyUncheckedCreateInput>
    /**
     * In case the tb_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_historyUpdateInput, tb_historyUncheckedUpdateInput>
  }

  /**
   * tb_history delete
   */
  export type tb_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
    /**
     * Filter which tb_history to delete.
     */
    where: tb_historyWhereUniqueInput
  }

  /**
   * tb_history deleteMany
   */
  export type tb_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_histories to delete
     */
    where?: tb_historyWhereInput
    /**
     * Limit how many tb_histories to delete.
     */
    limit?: number
  }

  /**
   * tb_history without action
   */
  export type tb_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_history
     */
    select?: tb_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_history
     */
    omit?: tb_historyOmit<ExtArgs> | null
  }


  /**
   * Model tb_collect
   */

  export type AggregateTb_collect = {
    _count: Tb_collectCountAggregateOutputType | null
    _avg: Tb_collectAvgAggregateOutputType | null
    _sum: Tb_collectSumAggregateOutputType | null
    _min: Tb_collectMinAggregateOutputType | null
    _max: Tb_collectMaxAggregateOutputType | null
  }

  export type Tb_collectAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_collectSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_collectMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    label: string | null
    is_edit: boolean | null
  }

  export type Tb_collectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    label: string | null
    is_edit: boolean | null
  }

  export type Tb_collectCountAggregateOutputType = {
    id: number
    name: number
    url: number
    label: number
    is_edit: number
    _all: number
  }


  export type Tb_collectAvgAggregateInputType = {
    id?: true
  }

  export type Tb_collectSumAggregateInputType = {
    id?: true
  }

  export type Tb_collectMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    label?: true
    is_edit?: true
  }

  export type Tb_collectMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    label?: true
    is_edit?: true
  }

  export type Tb_collectCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    label?: true
    is_edit?: true
    _all?: true
  }

  export type Tb_collectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_collect to aggregate.
     */
    where?: tb_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_collects to fetch.
     */
    orderBy?: tb_collectOrderByWithRelationInput | tb_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_collects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_collects
    **/
    _count?: true | Tb_collectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_collectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_collectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_collectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_collectMaxAggregateInputType
  }

  export type GetTb_collectAggregateType<T extends Tb_collectAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_collect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_collect[P]>
      : GetScalarType<T[P], AggregateTb_collect[P]>
  }




  export type tb_collectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_collectWhereInput
    orderBy?: tb_collectOrderByWithAggregationInput | tb_collectOrderByWithAggregationInput[]
    by: Tb_collectScalarFieldEnum[] | Tb_collectScalarFieldEnum
    having?: tb_collectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_collectCountAggregateInputType | true
    _avg?: Tb_collectAvgAggregateInputType
    _sum?: Tb_collectSumAggregateInputType
    _min?: Tb_collectMinAggregateInputType
    _max?: Tb_collectMaxAggregateInputType
  }

  export type Tb_collectGroupByOutputType = {
    id: number
    name: string
    url: string
    label: string
    is_edit: boolean
    _count: Tb_collectCountAggregateOutputType | null
    _avg: Tb_collectAvgAggregateOutputType | null
    _sum: Tb_collectSumAggregateOutputType | null
    _min: Tb_collectMinAggregateOutputType | null
    _max: Tb_collectMaxAggregateOutputType | null
  }

  type GetTb_collectGroupByPayload<T extends tb_collectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_collectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_collectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_collectGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_collectGroupByOutputType[P]>
        }
      >
    >


  export type tb_collectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    label?: boolean
    is_edit?: boolean
  }, ExtArgs["result"]["tb_collect"]>

  export type tb_collectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    label?: boolean
    is_edit?: boolean
  }, ExtArgs["result"]["tb_collect"]>

  export type tb_collectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    label?: boolean
    is_edit?: boolean
  }, ExtArgs["result"]["tb_collect"]>

  export type tb_collectSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    label?: boolean
    is_edit?: boolean
  }

  export type tb_collectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "label" | "is_edit", ExtArgs["result"]["tb_collect"]>

  export type $tb_collectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_collect"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      label: string
      is_edit: boolean
    }, ExtArgs["result"]["tb_collect"]>
    composites: {}
  }

  type tb_collectGetPayload<S extends boolean | null | undefined | tb_collectDefaultArgs> = $Result.GetResult<Prisma.$tb_collectPayload, S>

  type tb_collectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_collectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_collectCountAggregateInputType | true
    }

  export interface tb_collectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_collect'], meta: { name: 'tb_collect' } }
    /**
     * Find zero or one Tb_collect that matches the filter.
     * @param {tb_collectFindUniqueArgs} args - Arguments to find a Tb_collect
     * @example
     * // Get one Tb_collect
     * const tb_collect = await prisma.tb_collect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_collectFindUniqueArgs>(args: SelectSubset<T, tb_collectFindUniqueArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_collect that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_collectFindUniqueOrThrowArgs} args - Arguments to find a Tb_collect
     * @example
     * // Get one Tb_collect
     * const tb_collect = await prisma.tb_collect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_collectFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_collectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_collect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_collectFindFirstArgs} args - Arguments to find a Tb_collect
     * @example
     * // Get one Tb_collect
     * const tb_collect = await prisma.tb_collect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_collectFindFirstArgs>(args?: SelectSubset<T, tb_collectFindFirstArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_collect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_collectFindFirstOrThrowArgs} args - Arguments to find a Tb_collect
     * @example
     * // Get one Tb_collect
     * const tb_collect = await prisma.tb_collect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_collectFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_collectFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_collects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_collectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_collects
     * const tb_collects = await prisma.tb_collect.findMany()
     * 
     * // Get first 10 Tb_collects
     * const tb_collects = await prisma.tb_collect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_collectWithIdOnly = await prisma.tb_collect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_collectFindManyArgs>(args?: SelectSubset<T, tb_collectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_collect.
     * @param {tb_collectCreateArgs} args - Arguments to create a Tb_collect.
     * @example
     * // Create one Tb_collect
     * const Tb_collect = await prisma.tb_collect.create({
     *   data: {
     *     // ... data to create a Tb_collect
     *   }
     * })
     * 
     */
    create<T extends tb_collectCreateArgs>(args: SelectSubset<T, tb_collectCreateArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_collects.
     * @param {tb_collectCreateManyArgs} args - Arguments to create many Tb_collects.
     * @example
     * // Create many Tb_collects
     * const tb_collect = await prisma.tb_collect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_collectCreateManyArgs>(args?: SelectSubset<T, tb_collectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_collects and returns the data saved in the database.
     * @param {tb_collectCreateManyAndReturnArgs} args - Arguments to create many Tb_collects.
     * @example
     * // Create many Tb_collects
     * const tb_collect = await prisma.tb_collect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_collects and only return the `id`
     * const tb_collectWithIdOnly = await prisma.tb_collect.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_collectCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_collectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_collect.
     * @param {tb_collectDeleteArgs} args - Arguments to delete one Tb_collect.
     * @example
     * // Delete one Tb_collect
     * const Tb_collect = await prisma.tb_collect.delete({
     *   where: {
     *     // ... filter to delete one Tb_collect
     *   }
     * })
     * 
     */
    delete<T extends tb_collectDeleteArgs>(args: SelectSubset<T, tb_collectDeleteArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_collect.
     * @param {tb_collectUpdateArgs} args - Arguments to update one Tb_collect.
     * @example
     * // Update one Tb_collect
     * const tb_collect = await prisma.tb_collect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_collectUpdateArgs>(args: SelectSubset<T, tb_collectUpdateArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_collects.
     * @param {tb_collectDeleteManyArgs} args - Arguments to filter Tb_collects to delete.
     * @example
     * // Delete a few Tb_collects
     * const { count } = await prisma.tb_collect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_collectDeleteManyArgs>(args?: SelectSubset<T, tb_collectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_collects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_collectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_collects
     * const tb_collect = await prisma.tb_collect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_collectUpdateManyArgs>(args: SelectSubset<T, tb_collectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_collects and returns the data updated in the database.
     * @param {tb_collectUpdateManyAndReturnArgs} args - Arguments to update many Tb_collects.
     * @example
     * // Update many Tb_collects
     * const tb_collect = await prisma.tb_collect.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_collects and only return the `id`
     * const tb_collectWithIdOnly = await prisma.tb_collect.updateManyAndReturn({
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
    updateManyAndReturn<T extends tb_collectUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_collectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_collect.
     * @param {tb_collectUpsertArgs} args - Arguments to update or create a Tb_collect.
     * @example
     * // Update or create a Tb_collect
     * const tb_collect = await prisma.tb_collect.upsert({
     *   create: {
     *     // ... data to create a Tb_collect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_collect we want to update
     *   }
     * })
     */
    upsert<T extends tb_collectUpsertArgs>(args: SelectSubset<T, tb_collectUpsertArgs<ExtArgs>>): Prisma__tb_collectClient<$Result.GetResult<Prisma.$tb_collectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_collects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_collectCountArgs} args - Arguments to filter Tb_collects to count.
     * @example
     * // Count the number of Tb_collects
     * const count = await prisma.tb_collect.count({
     *   where: {
     *     // ... the filter for the Tb_collects we want to count
     *   }
     * })
    **/
    count<T extends tb_collectCountArgs>(
      args?: Subset<T, tb_collectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_collectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_collect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_collectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_collectAggregateArgs>(args: Subset<T, Tb_collectAggregateArgs>): Prisma.PrismaPromise<GetTb_collectAggregateType<T>>

    /**
     * Group by Tb_collect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_collectGroupByArgs} args - Group by arguments.
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
      T extends tb_collectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_collectGroupByArgs['orderBy'] }
        : { orderBy?: tb_collectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_collectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_collectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_collect model
   */
  readonly fields: tb_collectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_collect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_collectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_collect model
   */
  interface tb_collectFieldRefs {
    readonly id: FieldRef<"tb_collect", 'Int'>
    readonly name: FieldRef<"tb_collect", 'String'>
    readonly url: FieldRef<"tb_collect", 'String'>
    readonly label: FieldRef<"tb_collect", 'String'>
    readonly is_edit: FieldRef<"tb_collect", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tb_collect findUnique
   */
  export type tb_collectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * Filter, which tb_collect to fetch.
     */
    where: tb_collectWhereUniqueInput
  }

  /**
   * tb_collect findUniqueOrThrow
   */
  export type tb_collectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * Filter, which tb_collect to fetch.
     */
    where: tb_collectWhereUniqueInput
  }

  /**
   * tb_collect findFirst
   */
  export type tb_collectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * Filter, which tb_collect to fetch.
     */
    where?: tb_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_collects to fetch.
     */
    orderBy?: tb_collectOrderByWithRelationInput | tb_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_collects.
     */
    cursor?: tb_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_collects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_collects.
     */
    distinct?: Tb_collectScalarFieldEnum | Tb_collectScalarFieldEnum[]
  }

  /**
   * tb_collect findFirstOrThrow
   */
  export type tb_collectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * Filter, which tb_collect to fetch.
     */
    where?: tb_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_collects to fetch.
     */
    orderBy?: tb_collectOrderByWithRelationInput | tb_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_collects.
     */
    cursor?: tb_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_collects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_collects.
     */
    distinct?: Tb_collectScalarFieldEnum | Tb_collectScalarFieldEnum[]
  }

  /**
   * tb_collect findMany
   */
  export type tb_collectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * Filter, which tb_collects to fetch.
     */
    where?: tb_collectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_collects to fetch.
     */
    orderBy?: tb_collectOrderByWithRelationInput | tb_collectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_collects.
     */
    cursor?: tb_collectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_collects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_collects.
     */
    skip?: number
    distinct?: Tb_collectScalarFieldEnum | Tb_collectScalarFieldEnum[]
  }

  /**
   * tb_collect create
   */
  export type tb_collectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_collect.
     */
    data: XOR<tb_collectCreateInput, tb_collectUncheckedCreateInput>
  }

  /**
   * tb_collect createMany
   */
  export type tb_collectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_collects.
     */
    data: tb_collectCreateManyInput | tb_collectCreateManyInput[]
  }

  /**
   * tb_collect createManyAndReturn
   */
  export type tb_collectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * The data used to create many tb_collects.
     */
    data: tb_collectCreateManyInput | tb_collectCreateManyInput[]
  }

  /**
   * tb_collect update
   */
  export type tb_collectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_collect.
     */
    data: XOR<tb_collectUpdateInput, tb_collectUncheckedUpdateInput>
    /**
     * Choose, which tb_collect to update.
     */
    where: tb_collectWhereUniqueInput
  }

  /**
   * tb_collect updateMany
   */
  export type tb_collectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_collects.
     */
    data: XOR<tb_collectUpdateManyMutationInput, tb_collectUncheckedUpdateManyInput>
    /**
     * Filter which tb_collects to update
     */
    where?: tb_collectWhereInput
    /**
     * Limit how many tb_collects to update.
     */
    limit?: number
  }

  /**
   * tb_collect updateManyAndReturn
   */
  export type tb_collectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * The data used to update tb_collects.
     */
    data: XOR<tb_collectUpdateManyMutationInput, tb_collectUncheckedUpdateManyInput>
    /**
     * Filter which tb_collects to update
     */
    where?: tb_collectWhereInput
    /**
     * Limit how many tb_collects to update.
     */
    limit?: number
  }

  /**
   * tb_collect upsert
   */
  export type tb_collectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_collect to update in case it exists.
     */
    where: tb_collectWhereUniqueInput
    /**
     * In case the tb_collect found by the `where` argument doesn't exist, create a new tb_collect with this data.
     */
    create: XOR<tb_collectCreateInput, tb_collectUncheckedCreateInput>
    /**
     * In case the tb_collect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_collectUpdateInput, tb_collectUncheckedUpdateInput>
  }

  /**
   * tb_collect delete
   */
  export type tb_collectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
    /**
     * Filter which tb_collect to delete.
     */
    where: tb_collectWhereUniqueInput
  }

  /**
   * tb_collect deleteMany
   */
  export type tb_collectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_collects to delete
     */
    where?: tb_collectWhereInput
    /**
     * Limit how many tb_collects to delete.
     */
    limit?: number
  }

  /**
   * tb_collect without action
   */
  export type tb_collectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_collect
     */
    select?: tb_collectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_collect
     */
    omit?: tb_collectOmit<ExtArgs> | null
  }


  /**
   * Model tb_account
   */

  export type AggregateTb_account = {
    _count: Tb_accountCountAggregateOutputType | null
    _avg: Tb_accountAvgAggregateOutputType | null
    _sum: Tb_accountSumAggregateOutputType | null
    _min: Tb_accountMinAggregateOutputType | null
    _max: Tb_accountMaxAggregateOutputType | null
  }

  export type Tb_accountAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type Tb_accountSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type Tb_accountMinAggregateOutputType = {
    id: number | null
    platform: string | null
    platform_name: string | null
    cookies_str: string | null
    partition: string | null
    nickname: string | null
    url: string | null
    user_id: string | null
    avatar: string | null
    group_title: string | null
    line: boolean | null
    order: number | null
  }

  export type Tb_accountMaxAggregateOutputType = {
    id: number | null
    platform: string | null
    platform_name: string | null
    cookies_str: string | null
    partition: string | null
    nickname: string | null
    url: string | null
    user_id: string | null
    avatar: string | null
    group_title: string | null
    line: boolean | null
    order: number | null
  }

  export type Tb_accountCountAggregateOutputType = {
    id: number
    platform: number
    platform_name: number
    cookies_str: number
    cookies: number
    local_storage: number
    partition: number
    nickname: number
    url: number
    user_id: number
    avatar: number
    group_title: number
    line: number
    order: number
    _all: number
  }


  export type Tb_accountAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type Tb_accountSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type Tb_accountMinAggregateInputType = {
    id?: true
    platform?: true
    platform_name?: true
    cookies_str?: true
    partition?: true
    nickname?: true
    url?: true
    user_id?: true
    avatar?: true
    group_title?: true
    line?: true
    order?: true
  }

  export type Tb_accountMaxAggregateInputType = {
    id?: true
    platform?: true
    platform_name?: true
    cookies_str?: true
    partition?: true
    nickname?: true
    url?: true
    user_id?: true
    avatar?: true
    group_title?: true
    line?: true
    order?: true
  }

  export type Tb_accountCountAggregateInputType = {
    id?: true
    platform?: true
    platform_name?: true
    cookies_str?: true
    cookies?: true
    local_storage?: true
    partition?: true
    nickname?: true
    url?: true
    user_id?: true
    avatar?: true
    group_title?: true
    line?: true
    order?: true
    _all?: true
  }

  export type Tb_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_account to aggregate.
     */
    where?: tb_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_accounts to fetch.
     */
    orderBy?: tb_accountOrderByWithRelationInput | tb_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_accounts
    **/
    _count?: true | Tb_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_accountMaxAggregateInputType
  }

  export type GetTb_accountAggregateType<T extends Tb_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_account[P]>
      : GetScalarType<T[P], AggregateTb_account[P]>
  }




  export type tb_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_accountWhereInput
    orderBy?: tb_accountOrderByWithAggregationInput | tb_accountOrderByWithAggregationInput[]
    by: Tb_accountScalarFieldEnum[] | Tb_accountScalarFieldEnum
    having?: tb_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_accountCountAggregateInputType | true
    _avg?: Tb_accountAvgAggregateInputType
    _sum?: Tb_accountSumAggregateInputType
    _min?: Tb_accountMinAggregateInputType
    _max?: Tb_accountMaxAggregateInputType
  }

  export type Tb_accountGroupByOutputType = {
    id: number
    platform: string
    platform_name: string
    cookies_str: string
    cookies: JsonValue
    local_storage: JsonValue
    partition: string
    nickname: string
    url: string
    user_id: string
    avatar: string
    group_title: string
    line: boolean
    order: number
    _count: Tb_accountCountAggregateOutputType | null
    _avg: Tb_accountAvgAggregateOutputType | null
    _sum: Tb_accountSumAggregateOutputType | null
    _min: Tb_accountMinAggregateOutputType | null
    _max: Tb_accountMaxAggregateOutputType | null
  }

  type GetTb_accountGroupByPayload<T extends tb_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_accountGroupByOutputType[P]>
        }
      >
    >


  export type tb_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    platform_name?: boolean
    cookies_str?: boolean
    cookies?: boolean
    local_storage?: boolean
    partition?: boolean
    nickname?: boolean
    url?: boolean
    user_id?: boolean
    avatar?: boolean
    group_title?: boolean
    line?: boolean
    order?: boolean
  }, ExtArgs["result"]["tb_account"]>

  export type tb_accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    platform_name?: boolean
    cookies_str?: boolean
    cookies?: boolean
    local_storage?: boolean
    partition?: boolean
    nickname?: boolean
    url?: boolean
    user_id?: boolean
    avatar?: boolean
    group_title?: boolean
    line?: boolean
    order?: boolean
  }, ExtArgs["result"]["tb_account"]>

  export type tb_accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    platform_name?: boolean
    cookies_str?: boolean
    cookies?: boolean
    local_storage?: boolean
    partition?: boolean
    nickname?: boolean
    url?: boolean
    user_id?: boolean
    avatar?: boolean
    group_title?: boolean
    line?: boolean
    order?: boolean
  }, ExtArgs["result"]["tb_account"]>

  export type tb_accountSelectScalar = {
    id?: boolean
    platform?: boolean
    platform_name?: boolean
    cookies_str?: boolean
    cookies?: boolean
    local_storage?: boolean
    partition?: boolean
    nickname?: boolean
    url?: boolean
    user_id?: boolean
    avatar?: boolean
    group_title?: boolean
    line?: boolean
    order?: boolean
  }

  export type tb_accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "platform_name" | "cookies_str" | "cookies" | "local_storage" | "partition" | "nickname" | "url" | "user_id" | "avatar" | "group_title" | "line" | "order", ExtArgs["result"]["tb_account"]>

  export type $tb_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_account"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform: string
      platform_name: string
      cookies_str: string
      cookies: Prisma.JsonValue
      local_storage: Prisma.JsonValue
      partition: string
      nickname: string
      url: string
      user_id: string
      avatar: string
      group_title: string
      line: boolean
      order: number
    }, ExtArgs["result"]["tb_account"]>
    composites: {}
  }

  type tb_accountGetPayload<S extends boolean | null | undefined | tb_accountDefaultArgs> = $Result.GetResult<Prisma.$tb_accountPayload, S>

  type tb_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_accountCountAggregateInputType | true
    }

  export interface tb_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_account'], meta: { name: 'tb_account' } }
    /**
     * Find zero or one Tb_account that matches the filter.
     * @param {tb_accountFindUniqueArgs} args - Arguments to find a Tb_account
     * @example
     * // Get one Tb_account
     * const tb_account = await prisma.tb_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_accountFindUniqueArgs>(args: SelectSubset<T, tb_accountFindUniqueArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_accountFindUniqueOrThrowArgs} args - Arguments to find a Tb_account
     * @example
     * // Get one Tb_account
     * const tb_account = await prisma.tb_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_accountFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_accountFindFirstArgs} args - Arguments to find a Tb_account
     * @example
     * // Get one Tb_account
     * const tb_account = await prisma.tb_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_accountFindFirstArgs>(args?: SelectSubset<T, tb_accountFindFirstArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_accountFindFirstOrThrowArgs} args - Arguments to find a Tb_account
     * @example
     * // Get one Tb_account
     * const tb_account = await prisma.tb_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_accountFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_accounts
     * const tb_accounts = await prisma.tb_account.findMany()
     * 
     * // Get first 10 Tb_accounts
     * const tb_accounts = await prisma.tb_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_accountWithIdOnly = await prisma.tb_account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_accountFindManyArgs>(args?: SelectSubset<T, tb_accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_account.
     * @param {tb_accountCreateArgs} args - Arguments to create a Tb_account.
     * @example
     * // Create one Tb_account
     * const Tb_account = await prisma.tb_account.create({
     *   data: {
     *     // ... data to create a Tb_account
     *   }
     * })
     * 
     */
    create<T extends tb_accountCreateArgs>(args: SelectSubset<T, tb_accountCreateArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_accounts.
     * @param {tb_accountCreateManyArgs} args - Arguments to create many Tb_accounts.
     * @example
     * // Create many Tb_accounts
     * const tb_account = await prisma.tb_account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_accountCreateManyArgs>(args?: SelectSubset<T, tb_accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_accounts and returns the data saved in the database.
     * @param {tb_accountCreateManyAndReturnArgs} args - Arguments to create many Tb_accounts.
     * @example
     * // Create many Tb_accounts
     * const tb_account = await prisma.tb_account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_accounts and only return the `id`
     * const tb_accountWithIdOnly = await prisma.tb_account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_accountCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_account.
     * @param {tb_accountDeleteArgs} args - Arguments to delete one Tb_account.
     * @example
     * // Delete one Tb_account
     * const Tb_account = await prisma.tb_account.delete({
     *   where: {
     *     // ... filter to delete one Tb_account
     *   }
     * })
     * 
     */
    delete<T extends tb_accountDeleteArgs>(args: SelectSubset<T, tb_accountDeleteArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_account.
     * @param {tb_accountUpdateArgs} args - Arguments to update one Tb_account.
     * @example
     * // Update one Tb_account
     * const tb_account = await prisma.tb_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_accountUpdateArgs>(args: SelectSubset<T, tb_accountUpdateArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_accounts.
     * @param {tb_accountDeleteManyArgs} args - Arguments to filter Tb_accounts to delete.
     * @example
     * // Delete a few Tb_accounts
     * const { count } = await prisma.tb_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_accountDeleteManyArgs>(args?: SelectSubset<T, tb_accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_accounts
     * const tb_account = await prisma.tb_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_accountUpdateManyArgs>(args: SelectSubset<T, tb_accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_accounts and returns the data updated in the database.
     * @param {tb_accountUpdateManyAndReturnArgs} args - Arguments to update many Tb_accounts.
     * @example
     * // Update many Tb_accounts
     * const tb_account = await prisma.tb_account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_accounts and only return the `id`
     * const tb_accountWithIdOnly = await prisma.tb_account.updateManyAndReturn({
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
    updateManyAndReturn<T extends tb_accountUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_account.
     * @param {tb_accountUpsertArgs} args - Arguments to update or create a Tb_account.
     * @example
     * // Update or create a Tb_account
     * const tb_account = await prisma.tb_account.upsert({
     *   create: {
     *     // ... data to create a Tb_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_account we want to update
     *   }
     * })
     */
    upsert<T extends tb_accountUpsertArgs>(args: SelectSubset<T, tb_accountUpsertArgs<ExtArgs>>): Prisma__tb_accountClient<$Result.GetResult<Prisma.$tb_accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_accountCountArgs} args - Arguments to filter Tb_accounts to count.
     * @example
     * // Count the number of Tb_accounts
     * const count = await prisma.tb_account.count({
     *   where: {
     *     // ... the filter for the Tb_accounts we want to count
     *   }
     * })
    **/
    count<T extends tb_accountCountArgs>(
      args?: Subset<T, tb_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_accountAggregateArgs>(args: Subset<T, Tb_accountAggregateArgs>): Prisma.PrismaPromise<GetTb_accountAggregateType<T>>

    /**
     * Group by Tb_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_accountGroupByArgs} args - Group by arguments.
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
      T extends tb_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_accountGroupByArgs['orderBy'] }
        : { orderBy?: tb_accountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_account model
   */
  readonly fields: tb_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_account model
   */
  interface tb_accountFieldRefs {
    readonly id: FieldRef<"tb_account", 'Int'>
    readonly platform: FieldRef<"tb_account", 'String'>
    readonly platform_name: FieldRef<"tb_account", 'String'>
    readonly cookies_str: FieldRef<"tb_account", 'String'>
    readonly cookies: FieldRef<"tb_account", 'Json'>
    readonly local_storage: FieldRef<"tb_account", 'Json'>
    readonly partition: FieldRef<"tb_account", 'String'>
    readonly nickname: FieldRef<"tb_account", 'String'>
    readonly url: FieldRef<"tb_account", 'String'>
    readonly user_id: FieldRef<"tb_account", 'String'>
    readonly avatar: FieldRef<"tb_account", 'String'>
    readonly group_title: FieldRef<"tb_account", 'String'>
    readonly line: FieldRef<"tb_account", 'Boolean'>
    readonly order: FieldRef<"tb_account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_account findUnique
   */
  export type tb_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * Filter, which tb_account to fetch.
     */
    where: tb_accountWhereUniqueInput
  }

  /**
   * tb_account findUniqueOrThrow
   */
  export type tb_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * Filter, which tb_account to fetch.
     */
    where: tb_accountWhereUniqueInput
  }

  /**
   * tb_account findFirst
   */
  export type tb_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * Filter, which tb_account to fetch.
     */
    where?: tb_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_accounts to fetch.
     */
    orderBy?: tb_accountOrderByWithRelationInput | tb_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_accounts.
     */
    cursor?: tb_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_accounts.
     */
    distinct?: Tb_accountScalarFieldEnum | Tb_accountScalarFieldEnum[]
  }

  /**
   * tb_account findFirstOrThrow
   */
  export type tb_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * Filter, which tb_account to fetch.
     */
    where?: tb_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_accounts to fetch.
     */
    orderBy?: tb_accountOrderByWithRelationInput | tb_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_accounts.
     */
    cursor?: tb_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_accounts.
     */
    distinct?: Tb_accountScalarFieldEnum | Tb_accountScalarFieldEnum[]
  }

  /**
   * tb_account findMany
   */
  export type tb_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * Filter, which tb_accounts to fetch.
     */
    where?: tb_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_accounts to fetch.
     */
    orderBy?: tb_accountOrderByWithRelationInput | tb_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_accounts.
     */
    cursor?: tb_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_accounts.
     */
    skip?: number
    distinct?: Tb_accountScalarFieldEnum | Tb_accountScalarFieldEnum[]
  }

  /**
   * tb_account create
   */
  export type tb_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_account.
     */
    data: XOR<tb_accountCreateInput, tb_accountUncheckedCreateInput>
  }

  /**
   * tb_account createMany
   */
  export type tb_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_accounts.
     */
    data: tb_accountCreateManyInput | tb_accountCreateManyInput[]
  }

  /**
   * tb_account createManyAndReturn
   */
  export type tb_accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * The data used to create many tb_accounts.
     */
    data: tb_accountCreateManyInput | tb_accountCreateManyInput[]
  }

  /**
   * tb_account update
   */
  export type tb_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_account.
     */
    data: XOR<tb_accountUpdateInput, tb_accountUncheckedUpdateInput>
    /**
     * Choose, which tb_account to update.
     */
    where: tb_accountWhereUniqueInput
  }

  /**
   * tb_account updateMany
   */
  export type tb_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_accounts.
     */
    data: XOR<tb_accountUpdateManyMutationInput, tb_accountUncheckedUpdateManyInput>
    /**
     * Filter which tb_accounts to update
     */
    where?: tb_accountWhereInput
    /**
     * Limit how many tb_accounts to update.
     */
    limit?: number
  }

  /**
   * tb_account updateManyAndReturn
   */
  export type tb_accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * The data used to update tb_accounts.
     */
    data: XOR<tb_accountUpdateManyMutationInput, tb_accountUncheckedUpdateManyInput>
    /**
     * Filter which tb_accounts to update
     */
    where?: tb_accountWhereInput
    /**
     * Limit how many tb_accounts to update.
     */
    limit?: number
  }

  /**
   * tb_account upsert
   */
  export type tb_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_account to update in case it exists.
     */
    where: tb_accountWhereUniqueInput
    /**
     * In case the tb_account found by the `where` argument doesn't exist, create a new tb_account with this data.
     */
    create: XOR<tb_accountCreateInput, tb_accountUncheckedCreateInput>
    /**
     * In case the tb_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_accountUpdateInput, tb_accountUncheckedUpdateInput>
  }

  /**
   * tb_account delete
   */
  export type tb_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
    /**
     * Filter which tb_account to delete.
     */
    where: tb_accountWhereUniqueInput
  }

  /**
   * tb_account deleteMany
   */
  export type tb_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_accounts to delete
     */
    where?: tb_accountWhereInput
    /**
     * Limit how many tb_accounts to delete.
     */
    limit?: number
  }

  /**
   * tb_account without action
   */
  export type tb_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_account
     */
    select?: tb_accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_account
     */
    omit?: tb_accountOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Tb_historyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    time1: 'time1'
  };

  export type Tb_historyScalarFieldEnum = (typeof Tb_historyScalarFieldEnum)[keyof typeof Tb_historyScalarFieldEnum]


  export const Tb_collectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    label: 'label',
    is_edit: 'is_edit'
  };

  export type Tb_collectScalarFieldEnum = (typeof Tb_collectScalarFieldEnum)[keyof typeof Tb_collectScalarFieldEnum]


  export const Tb_accountScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    platform_name: 'platform_name',
    cookies_str: 'cookies_str',
    cookies: 'cookies',
    local_storage: 'local_storage',
    partition: 'partition',
    nickname: 'nickname',
    url: 'url',
    user_id: 'user_id',
    avatar: 'avatar',
    group_title: 'group_title',
    line: 'line',
    order: 'order'
  };

  export type Tb_accountScalarFieldEnum = (typeof Tb_accountScalarFieldEnum)[keyof typeof Tb_accountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
  }

  export type tb_historyWhereInput = {
    AND?: tb_historyWhereInput | tb_historyWhereInput[]
    OR?: tb_historyWhereInput[]
    NOT?: tb_historyWhereInput | tb_historyWhereInput[]
    id?: IntFilter<"tb_history"> | number
    name?: StringFilter<"tb_history"> | string
    url?: StringFilter<"tb_history"> | string
    time1?: StringFilter<"tb_history"> | string
  }

  export type tb_historyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    time1?: SortOrder
  }

  export type tb_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_historyWhereInput | tb_historyWhereInput[]
    OR?: tb_historyWhereInput[]
    NOT?: tb_historyWhereInput | tb_historyWhereInput[]
    name?: StringFilter<"tb_history"> | string
    url?: StringFilter<"tb_history"> | string
    time1?: StringFilter<"tb_history"> | string
  }, "id">

  export type tb_historyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    time1?: SortOrder
    _count?: tb_historyCountOrderByAggregateInput
    _avg?: tb_historyAvgOrderByAggregateInput
    _max?: tb_historyMaxOrderByAggregateInput
    _min?: tb_historyMinOrderByAggregateInput
    _sum?: tb_historySumOrderByAggregateInput
  }

  export type tb_historyScalarWhereWithAggregatesInput = {
    AND?: tb_historyScalarWhereWithAggregatesInput | tb_historyScalarWhereWithAggregatesInput[]
    OR?: tb_historyScalarWhereWithAggregatesInput[]
    NOT?: tb_historyScalarWhereWithAggregatesInput | tb_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_history"> | number
    name?: StringWithAggregatesFilter<"tb_history"> | string
    url?: StringWithAggregatesFilter<"tb_history"> | string
    time1?: StringWithAggregatesFilter<"tb_history"> | string
  }

  export type tb_collectWhereInput = {
    AND?: tb_collectWhereInput | tb_collectWhereInput[]
    OR?: tb_collectWhereInput[]
    NOT?: tb_collectWhereInput | tb_collectWhereInput[]
    id?: IntFilter<"tb_collect"> | number
    name?: StringFilter<"tb_collect"> | string
    url?: StringFilter<"tb_collect"> | string
    label?: StringFilter<"tb_collect"> | string
    is_edit?: BoolFilter<"tb_collect"> | boolean
  }

  export type tb_collectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    label?: SortOrder
    is_edit?: SortOrder
  }

  export type tb_collectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_collectWhereInput | tb_collectWhereInput[]
    OR?: tb_collectWhereInput[]
    NOT?: tb_collectWhereInput | tb_collectWhereInput[]
    name?: StringFilter<"tb_collect"> | string
    url?: StringFilter<"tb_collect"> | string
    label?: StringFilter<"tb_collect"> | string
    is_edit?: BoolFilter<"tb_collect"> | boolean
  }, "id">

  export type tb_collectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    label?: SortOrder
    is_edit?: SortOrder
    _count?: tb_collectCountOrderByAggregateInput
    _avg?: tb_collectAvgOrderByAggregateInput
    _max?: tb_collectMaxOrderByAggregateInput
    _min?: tb_collectMinOrderByAggregateInput
    _sum?: tb_collectSumOrderByAggregateInput
  }

  export type tb_collectScalarWhereWithAggregatesInput = {
    AND?: tb_collectScalarWhereWithAggregatesInput | tb_collectScalarWhereWithAggregatesInput[]
    OR?: tb_collectScalarWhereWithAggregatesInput[]
    NOT?: tb_collectScalarWhereWithAggregatesInput | tb_collectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_collect"> | number
    name?: StringWithAggregatesFilter<"tb_collect"> | string
    url?: StringWithAggregatesFilter<"tb_collect"> | string
    label?: StringWithAggregatesFilter<"tb_collect"> | string
    is_edit?: BoolWithAggregatesFilter<"tb_collect"> | boolean
  }

  export type tb_accountWhereInput = {
    AND?: tb_accountWhereInput | tb_accountWhereInput[]
    OR?: tb_accountWhereInput[]
    NOT?: tb_accountWhereInput | tb_accountWhereInput[]
    id?: IntFilter<"tb_account"> | number
    platform?: StringFilter<"tb_account"> | string
    platform_name?: StringFilter<"tb_account"> | string
    cookies_str?: StringFilter<"tb_account"> | string
    cookies?: JsonFilter<"tb_account">
    local_storage?: JsonFilter<"tb_account">
    partition?: StringFilter<"tb_account"> | string
    nickname?: StringFilter<"tb_account"> | string
    url?: StringFilter<"tb_account"> | string
    user_id?: StringFilter<"tb_account"> | string
    avatar?: StringFilter<"tb_account"> | string
    group_title?: StringFilter<"tb_account"> | string
    line?: BoolFilter<"tb_account"> | boolean
    order?: IntFilter<"tb_account"> | number
  }

  export type tb_accountOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    platform_name?: SortOrder
    cookies_str?: SortOrder
    cookies?: SortOrder
    local_storage?: SortOrder
    partition?: SortOrder
    nickname?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    avatar?: SortOrder
    group_title?: SortOrder
    line?: SortOrder
    order?: SortOrder
  }

  export type tb_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    partition?: string
    AND?: tb_accountWhereInput | tb_accountWhereInput[]
    OR?: tb_accountWhereInput[]
    NOT?: tb_accountWhereInput | tb_accountWhereInput[]
    platform?: StringFilter<"tb_account"> | string
    platform_name?: StringFilter<"tb_account"> | string
    cookies_str?: StringFilter<"tb_account"> | string
    cookies?: JsonFilter<"tb_account">
    local_storage?: JsonFilter<"tb_account">
    nickname?: StringFilter<"tb_account"> | string
    url?: StringFilter<"tb_account"> | string
    user_id?: StringFilter<"tb_account"> | string
    avatar?: StringFilter<"tb_account"> | string
    group_title?: StringFilter<"tb_account"> | string
    line?: BoolFilter<"tb_account"> | boolean
    order?: IntFilter<"tb_account"> | number
  }, "id" | "partition">

  export type tb_accountOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    platform_name?: SortOrder
    cookies_str?: SortOrder
    cookies?: SortOrder
    local_storage?: SortOrder
    partition?: SortOrder
    nickname?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    avatar?: SortOrder
    group_title?: SortOrder
    line?: SortOrder
    order?: SortOrder
    _count?: tb_accountCountOrderByAggregateInput
    _avg?: tb_accountAvgOrderByAggregateInput
    _max?: tb_accountMaxOrderByAggregateInput
    _min?: tb_accountMinOrderByAggregateInput
    _sum?: tb_accountSumOrderByAggregateInput
  }

  export type tb_accountScalarWhereWithAggregatesInput = {
    AND?: tb_accountScalarWhereWithAggregatesInput | tb_accountScalarWhereWithAggregatesInput[]
    OR?: tb_accountScalarWhereWithAggregatesInput[]
    NOT?: tb_accountScalarWhereWithAggregatesInput | tb_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_account"> | number
    platform?: StringWithAggregatesFilter<"tb_account"> | string
    platform_name?: StringWithAggregatesFilter<"tb_account"> | string
    cookies_str?: StringWithAggregatesFilter<"tb_account"> | string
    cookies?: JsonWithAggregatesFilter<"tb_account">
    local_storage?: JsonWithAggregatesFilter<"tb_account">
    partition?: StringWithAggregatesFilter<"tb_account"> | string
    nickname?: StringWithAggregatesFilter<"tb_account"> | string
    url?: StringWithAggregatesFilter<"tb_account"> | string
    user_id?: StringWithAggregatesFilter<"tb_account"> | string
    avatar?: StringWithAggregatesFilter<"tb_account"> | string
    group_title?: StringWithAggregatesFilter<"tb_account"> | string
    line?: BoolWithAggregatesFilter<"tb_account"> | boolean
    order?: IntWithAggregatesFilter<"tb_account"> | number
  }

  export type userCreateInput = {
    name: string
    email: string
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type tb_historyCreateInput = {
    name: string
    url: string
    time1: string
  }

  export type tb_historyUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    time1: string
  }

  export type tb_historyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
  }

  export type tb_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
  }

  export type tb_historyCreateManyInput = {
    id?: number
    name: string
    url: string
    time1: string
  }

  export type tb_historyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
  }

  export type tb_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    time1?: StringFieldUpdateOperationsInput | string
  }

  export type tb_collectCreateInput = {
    name: string
    url: string
    label: string
    is_edit?: boolean
  }

  export type tb_collectUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    label: string
    is_edit?: boolean
  }

  export type tb_collectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    is_edit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tb_collectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    is_edit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tb_collectCreateManyInput = {
    id?: number
    name: string
    url: string
    label: string
    is_edit?: boolean
  }

  export type tb_collectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    is_edit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tb_collectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    is_edit?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tb_accountCreateInput = {
    platform: string
    platform_name: string
    cookies_str: string
    cookies: JsonNullValueInput | InputJsonValue
    local_storage: JsonNullValueInput | InputJsonValue
    partition: string
    nickname: string
    url: string
    user_id: string
    avatar: string
    group_title?: string
    line?: boolean
    order?: number
  }

  export type tb_accountUncheckedCreateInput = {
    id?: number
    platform: string
    platform_name: string
    cookies_str: string
    cookies: JsonNullValueInput | InputJsonValue
    local_storage: JsonNullValueInput | InputJsonValue
    partition: string
    nickname: string
    url: string
    user_id: string
    avatar: string
    group_title?: string
    line?: boolean
    order?: number
  }

  export type tb_accountUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    platform_name?: StringFieldUpdateOperationsInput | string
    cookies_str?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    local_storage?: JsonNullValueInput | InputJsonValue
    partition?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    group_title?: StringFieldUpdateOperationsInput | string
    line?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type tb_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    platform_name?: StringFieldUpdateOperationsInput | string
    cookies_str?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    local_storage?: JsonNullValueInput | InputJsonValue
    partition?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    group_title?: StringFieldUpdateOperationsInput | string
    line?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type tb_accountCreateManyInput = {
    id?: number
    platform: string
    platform_name: string
    cookies_str: string
    cookies: JsonNullValueInput | InputJsonValue
    local_storage: JsonNullValueInput | InputJsonValue
    partition: string
    nickname: string
    url: string
    user_id: string
    avatar: string
    group_title?: string
    line?: boolean
    order?: number
  }

  export type tb_accountUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    platform_name?: StringFieldUpdateOperationsInput | string
    cookies_str?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    local_storage?: JsonNullValueInput | InputJsonValue
    partition?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    group_title?: StringFieldUpdateOperationsInput | string
    line?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type tb_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    platform_name?: StringFieldUpdateOperationsInput | string
    cookies_str?: StringFieldUpdateOperationsInput | string
    cookies?: JsonNullValueInput | InputJsonValue
    local_storage?: JsonNullValueInput | InputJsonValue
    partition?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    group_title?: StringFieldUpdateOperationsInput | string
    line?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type tb_historyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    time1?: SortOrder
  }

  export type tb_historyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    time1?: SortOrder
  }

  export type tb_historyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    time1?: SortOrder
  }

  export type tb_historySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type tb_collectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    label?: SortOrder
    is_edit?: SortOrder
  }

  export type tb_collectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_collectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    label?: SortOrder
    is_edit?: SortOrder
  }

  export type tb_collectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    label?: SortOrder
    is_edit?: SortOrder
  }

  export type tb_collectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type tb_accountCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    platform_name?: SortOrder
    cookies_str?: SortOrder
    cookies?: SortOrder
    local_storage?: SortOrder
    partition?: SortOrder
    nickname?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    avatar?: SortOrder
    group_title?: SortOrder
    line?: SortOrder
    order?: SortOrder
  }

  export type tb_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type tb_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    platform_name?: SortOrder
    cookies_str?: SortOrder
    partition?: SortOrder
    nickname?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    avatar?: SortOrder
    group_title?: SortOrder
    line?: SortOrder
    order?: SortOrder
  }

  export type tb_accountMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    platform_name?: SortOrder
    cookies_str?: SortOrder
    partition?: SortOrder
    nickname?: SortOrder
    url?: SortOrder
    user_id?: SortOrder
    avatar?: SortOrder
    group_title?: SortOrder
    line?: SortOrder
    order?: SortOrder
  }

  export type tb_accountSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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