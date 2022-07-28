import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  username: Yup.string().email('Invalid email').required('Required'),
});

//validate email
export const isValidEmail = stringEmail => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};

//validate password
export const isValidPassword = stringPassword => {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(stringPassword);
};
