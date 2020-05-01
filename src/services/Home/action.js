import {DISPLAY_DATA,DISPLAY_PICTURE} from './constant';
import config from '../../config/env';

export const dataApi = () => dispatch => {
  let apiConfig = config.apiURl;
  fetch(apiConfig, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
      dispatch({
        type: DISPLAY_DATA,
        data: responseJson,
      });
    });
};

// export const pictureApi = () => dispatch => {
//   let baseConfig = config.baseURL;
//   fetch(baseConfig+, {
//     method: 'GET',
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(responseJson => {
//       console.log(responseJson);
//       dispatch({
//         type: DISPLAY_PICTURE,
//         data: responseJson,
//       });
//     });
// };
