import { enhancedCharacterObject, getId, toObject } from "../../service/util.service";
import { mockCharacter, mockRowCharacter } from "../../__mock__/mockCharacter";

describe('UtilService', () => {
    test('should getId extract id from url string', () => {
        expect(getId(mockCharacter.url)).toEqual("10");
    });
    test('should enhancedCharacterObject id and imgUrl added to character object', () => {
        let enhancedCharacters = enhancedCharacterObject([mockRowCharacter]);
        expect(enhancedCharacters[0].id).toEqual("10");
        expect(enhancedCharacters[0].imgURL).toBeDefined()
    });
    test('should convert array to map by id', () => {
        let map = toObject([mockRowCharacter])
        expect(map['10']).toEqual(mockRowCharacter);
    });
});