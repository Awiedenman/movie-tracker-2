import { API_KEY } from '../api-key';
import { movieFetch, userLoginRequest, userSignUpRequest, postUserFavorites } from '../helpers/apiCalls';

describe('HELPERS', () => {
  describe('Movie Fetch', () => {
    test('should call fetch when movieFetch is called', async () => {
      const url = `https://api.themoviedb.org/3/list/1?api_key=${API_KEY}`;
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve()
        }));

      await movieFetch();

      expect(window.fetch).toHaveBeenCalled();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    test('should throw and error if fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.reject()
        }));

      await expect(movieFetch()).rejects.toEqual(Error('failed fetch request'));
    });
  });

  describe('UserLoginRequest', () => {
    test('should call fetch', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            email: "tman2272@aol.com",
            id: 1,
            name: "Taylor",
            password: "password"
          })
        })
      );
      userLoginRequest('email', 'password');
      expect(window.fetch).toHaveBeenCalled();
    });

    test('should throw an error if Login fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.reject()
        }));

      await expect(userLoginRequest('email', 'password')).rejects.toEqual(Error('Email and Password do not match'));
    }); 
  });

  describe('userSignUpRequest', () => {
    test('shold call fetch', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            id : 56,
            message: "New user created",
            status: "success"
          })
        }));
        
      await userSignUpRequest('Austin', 'austin@aol.com', 'password');
      expect(window.fetch).toHaveBeenCalled();
    });

    test('should throw and error if signUp fetch fails', async () => {
      
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.reject()
        }));

      await expect(userSignUpRequest()).rejects.toEqual(Error('Sorry, email has already been used'));
    });
  });

  describe('postUserFavorites', () => {
    test('should call fetch', async () => {
      const mockUrl = "http://localhost:3000/api/users/favorites/new";
      const mockOptionsObject = 
        {
          method: 'POST',
          body: JSON.stringify({
            movie_id: 11111,
            user_id: 30,
            title: 'Thor',
            poster_path: 'thor.png',
            release_date: 202020202,
            vote_average: 7.5,
            overview: 'what a movie!'
          }),
          headers: {
            'Content-Type': 'application/json'
          } 
        };

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          "status": "success",
          "message": "Movie was added to favorites",
          "id": 8
        })
      }));

      await postUserFavorites(mockUrl, mockOptionsObject);

      expect(window.fetch).toHaveBeenCalled();
    });

    test('should throw an error if favorites POST fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: ()=> Promise.reject()
      }));

      await expect(postUserFavorites({movie: 'Thor', id: 32323})).rejects.toEqual(Error('Sorry, there was problem saving you favorite. Please try again later.'));
    });
  });
});
