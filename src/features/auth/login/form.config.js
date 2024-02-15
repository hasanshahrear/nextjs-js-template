import * as yup from "yup";

export const LoginSchema = yup.object({
  email_or_phone: yup.string().label("Username").min(1).max(50).required(),
  password: yup.string().label("Password").min(8).required(),
});

export const InitialValue = {
  email_or_phone: "",
  password: "",
};
