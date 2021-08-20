import * as yup from 'yup';

const pizzaSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name Required')
        .min(2, 'name must be at least 2 characters'),

})

export default pizzaSchema