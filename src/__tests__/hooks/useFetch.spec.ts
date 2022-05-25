import { act, renderHook } from '@testing-library/react';
import { END_POINT } from '../../constants/api.config';
import { useFetch } from '../../hooks/useFetch';
import { HttpMethods } from '../../interface/app.interface';
import { mockCharacterResponse } from '../../__mock__/mockCharacter';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useDataApi", () => {
  beforeAll(() => {


  });
  test('should', async () => {
    const response = {
      success: true,
      message: "",
      "statusCode": undefined,
      data: mockCharacterResponse,
    }
    await act(async () => {
      await mockedAxios.get.mockImplementation(() =>
        Promise.resolve(response)
      );
      const { result, rerender } = renderHook(() => useFetch(
        HttpMethods.GET,
        END_POINT.people
      ));
    });
    await expect(axios.get).toHaveBeenCalledWith(END_POINT.people);
  });

   test('should fails', async () => {
    const response = { "data": { "error": "Error" }, "message": "Error", "statusCode": "500", "success": false }

    await act(async () => {
      await mockedAxios.get.mockImplementation(() =>
        Promise.resolve(response)
      );
      const { result, rerender } = renderHook(() => useFetch(
        HttpMethods.GET,
        END_POINT.people
      ));
      console.log(result);
      // await expect(axios.get).toHaveBeenCalledWith(END_POINT.people);

    });
    
  });

});



