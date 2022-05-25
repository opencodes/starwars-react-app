import { get, post } from "../../service/http.service";
import axios from 'axios';
import { mockCharacterResponse } from "../../__mock__/mockCharacter";
jest.mock('axios');


describe('HttpService', () => {
  test('should  get api success with resolved value', async () => {
    const response = {
      success: true,
      message: "",
      "statusCode": undefined,
      data: mockCharacterResponse,
    }
    axios.get = jest.fn().mockResolvedValue(response);
    await expect(get('/')).resolves.toEqual(response);
  });

  test('should  get api failed with resolved value', async () => {
    const response = { "data": { "error": "Error" }, "message": "Error", "statusCode": "500", "success": false }
    axios.get = jest.fn().mockRejectedValue({
      response: {
        status: '500',
        data: { error: "Error" },
      }
    });
    await expect(get('/')).resolves.toEqual(response);
  });

  test('should  post api success with resolved value', async () => {
    const response = {
      success: true,
      message: "",
      "statusCode": undefined,
      data: mockCharacterResponse,
    }
    axios.post = jest.fn().mockResolvedValue(response);
    await expect(post('/', {})).resolves.toEqual(response);
  });

  test('should  post api failed with resolved value', async () => {
    const response = { "data": { "error": "Error" }, "message": "Error", "statusCode": "500", "success": false }
    axios.post = jest.fn().mockRejectedValue({
      response: {
        status: '500',
        data: { error: "Error" },
      }
    });
    await expect(post('/', {})).resolves.toEqual(response);
  });
});