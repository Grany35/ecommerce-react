import * as yup from "yup";

const validations=yup.object().shape({
    email:yup.string().email("Geçerli bir email giriniz").required("zorunludur"),
    password:yup.string().min(5,"5karakter gir").required("zorunlu alan"),
});

export default validations;