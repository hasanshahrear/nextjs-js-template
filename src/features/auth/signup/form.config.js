import * as yup from "yup";

export const SignUpSchema = yup.object({
  email_or_phone: yup.string().label("Username").min(1).max(50).required(),
  firstName: yup.string().label("Full Name").min(1).max(50).required(),
  gender: yup.string().label("Gender").nullable(),
  password: yup.string().label("Password").min(8).required(),
  dateOfBirth: yup.date().required("Date of Birth"),
});

export const InitialValue = {
  email_or_phone: "",
  password: "",
  firstName: "",
  gender: "",
  dateOfBirth: new Date(),
};
