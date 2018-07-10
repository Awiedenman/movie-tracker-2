import { movieFetch } from '../helpers/apiCalls';

describe('HELPERS', () => {
  test('should call fetch when movieFetch is called', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      }));
    await movieFetch();
    expect(window.fetch).toHaveBeenCalled();
  });
});
