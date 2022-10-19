import * as yup from "yup";

const editScheme=yup.object().shape({
    productName:yup.string().required(),
    productPrice:yup.number().required(),
    productStock:yup.number().required(),
});

export default editScheme;