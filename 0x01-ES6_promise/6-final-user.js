import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  const signUpUserPromise = signUpUser(firstName, lastName);
  return Promise.allSettled([signUpUserPromise, uploadPhoto(fileName)]).then((response) => {
    response.forEach((res) => {
      result.push({ status: res.status, value: res.status === 'rejected' ? res.reason : res.value });
    });
    return result;
  });
}
