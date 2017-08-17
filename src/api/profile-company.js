import { APIRequest } from '.';
import {
  createProfileSuccess,
  createProfileFailure,
} from '../reducers/profile';

const PROFILE_URI = '/admin/registerCompany';
const LOGO_URI = '/admin/set-logo';

export function createProfile(profile) {
  return dispatch => {
    const options = {
      method: 'post',
      url: PROFILE_URI,
      data: profile,
    };

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('companyName', res.data.profile.companyName);
        dispatch(createProfileSuccess(res.data));
        // window.location.href = '/confirm_identity';
      })
      .catch(err => {
        dispatch(createProfileFailure(err.response.data));
      });
  };
}

export function setLogo(file) {
  const formData = new FormData();
  formData.append('file', file);
  return () => {
    const options = {
      method: 'put',
      url: LOGO_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('logo', res.data.logo);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default {
  createProfile,
};
