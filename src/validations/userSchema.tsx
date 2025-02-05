import * as yup from "yup";

const userSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(5, "Name must be at least 2 characters long")
        .max(50, "Name cannot be more than 50 characters long"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    phone: yup
        .string()
        .required("Phone number is required")
        .matches(
            /^(\+359\s?|\+359|0)(88|89|87|98)\d{1}(\s?\d{3}\s?\d{3}|\d{6})$/,
            "Enter a valid Bulgarian phone number Example:+359883123123 , 0883123123"
        ),
});

export default userSchema;
