import * as yup from "yup";

const validations = yup.object().shape({
    email: yup.string().email("Email girin").required("Zorunlu"),
    password: yup.string().min(5, "En az 5 karakter gir").required("zorunlu"),
})

export default validations;