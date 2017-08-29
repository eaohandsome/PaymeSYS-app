import { APIRequest } from '.';
import {
  createProfileSuccess,
  createProfileFailure,
  setLogoSuccess,
  fileEmployeeSuccess,
  fileEmployeeFailure,
  claimDataSuccess,
  claimDataFailure,
  getClaimDataSuccess,
  getClaimDataFailure,
  employeeDetailSuccess,
  employeeDetailFailure,
  setCompleteStepSuccess,
  setCompleteStepFailure,
  getCompleteStepSuccess,
  getCompleteStepFailure,
} from '../reducers/profile';

const PROFILE_URI = '/admin/registerCompany';
const LOGO_URI = '/admin/set-logo';
const FILEEMPLOYEE_URI = '/admin/upload-employee';
const CLAIMDATA_URI = '/admin/upload-claimdata';
const GETEMPLOYEEDETAIL_URI = '/admin/get-employee';
const GETCLAIMDATA_URI = '/admin/get-claim-data';
const SETCOMPLETESTEP_URI = '/admin/set-complete-step';
const GETCOMPLETESTEP_URI = '/admin/get-complete-step';

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
      })
      .catch(err => {
        dispatch(createProfileFailure(err.response.data));
      });
  };
}

export function setLogo(file) {
  const formData = new FormData();
  formData.append('file', file);
  return dispatch => {
    const options = {
      method: 'put',
      url: LOGO_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('logo', res.data.logo);
        dispatch(setLogoSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fileEmployee(file) {
  const formData = new FormData();
  formData.append('file', file);
  return dispatch => {
    const options = {
      method: 'put',
      url: FILEEMPLOYEE_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(fileEmployeeSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fileEmployeeFailure(err.response.data));
      });
  };
}

export function claimData(files) {
  const formData = new FormData();
  files.map((file, index) => (
    formData.append('file', files[index])
  ));
  return dispatch => {
    const options = {
      method: 'put',
      url: CLAIMDATA_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(claimDataSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(claimDataFailure(err.response.data));
      });
  };
}

export function getClaimData() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETCLAIMDATA_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getClaimDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(getClaimDataFailure(err.response.data));
      });
  };
}
export function employeeDetail() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETEMPLOYEEDETAIL_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(employeeDetailSuccess(res.data));
      })
      .catch(err => {
        dispatch(employeeDetailFailure(err.response.data));
      });
  };
}
export function setCompleteStep(passwordToConfirm, step) {
  return dispatch => {
    const options = {
      method: 'put',
      url: SETCOMPLETESTEP_URI,
      data: {
        passwordToConfirm,
        step,
      },
    };
    APIRequest(options, true)
      .then(res => {
        console.log('success');
        dispatch(setCompleteStepSuccess(res.data));
      })
      .catch(err => {
        dispatch(setCompleteStepFailure(err.response.data));
      });
  };
}
export function getCompleteStep() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETCOMPLETESTEP_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCompleteStepSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompleteStepFailure(err.response.data));
      });
  };
}
