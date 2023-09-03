import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
//    number: Yup.number()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
 });

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
        validationSchema={SignupSchema}
            onSubmit={values => {
                onAdd(values);
        }}
      >
            <Form>
                <label>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />
                </label>
                <label>
                    Number
                    <Field name="number" type="tel" />
                    <ErrorMessage name="number" />
                </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    )
}