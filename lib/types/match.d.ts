/**
 * Finds an array type from the passed model type. This is required as we also infer restricted
 * array types from tuples, intersection and union types.
 *
 * @param {typedocModels.Type=} type
 * @return {{
 *   min?: number,
 *   max?: number,
 *   elementType: typedocModels.Type,
 * }=}
 */
export function matchArrayType(type?: typedocModels.Type | undefined): {
    min?: number;
    max?: number;
    elementType: typedocModels.Type;
} | undefined;
/**
 * Finds a type literal, possibly intersected with another initial root type.
 *
 * This is found inside {@link chrome.storage} as some type instances also have properties applied
 * to them.
 *
 * @param {typedocModels.Type=} type
 * @return {{
 *   root?: typedocModels.Type,
 *   properties?: {[name: string]: {type: typedocModels.Type, optional?: boolean}},
 * }=}
 */
export function matchTypeLiteral(type?: typedocModels.Type | undefined): {
    root?: typedocModels.Type;
    properties?: {
        [name: string]: {
            type: typedocModels.Type;
            optional?: boolean;
        };
    };
};
/**
 * Finds an enum made up of literal values (e.g., specific numbers, strings and so on).
 *
 * This accepts a reflection, not a type, as we must be able to infer that this is a TypeAlias.
 *
 * @param {typedocModels.Reflection=} reflection
 * @return {symbol.LiteralTypeOption[]|undefined}
 */
export function matchEnum(reflection?: typedocModels.Reflection | undefined): symbol.LiteralTypeOption[] | undefined;
/**
 * Finds a single function definition based on many possible signatures. This is entirely to deal
 * with Chrome's middle-optional arguments. For two signatures like:
 *
 * func(number, string, string?)
 * func(string, string?)
 *
 * This will return three arguments: [number?, string, string?].
 *
 * This will not match if the types are incompatible.
 *
 * TODO(samthor): When we include the Promise<> return type, this will fail.
 *
 * @param {typedocModels.Reflection=} reflection
 * @return {{
 *   returnType: typedocModels.Type,
 *   parameters: {
 *     name: string,
 *     type: typedocModels.Type,
 *     optional: boolean,
 *     reflection: typedocModels.ParameterReflection,
 *   }[],
 *   signature: typedocModels.SignatureReflection,
 * }=}
 */
export function matchUnifiedFunction(reflection?: typedocModels.Reflection | undefined): {
    returnType: typedocModels.Type;
    parameters: {
        name: string;
        type: typedocModels.Type;
        optional: boolean;
        reflection: typedocModels.ParameterReflection;
    }[];
    signature: typedocModels.SignatureReflection;
};
import * as typedocModels from "typedoc/dist/lib/models";
import * as symbol from "../../types/symbol.js";
