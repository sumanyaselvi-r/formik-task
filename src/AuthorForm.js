import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Author name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      
    >
      <Form>
        <div>
          <label htmlFor="name">Author Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <Field type="date" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="biography">Biography:</label>
          <Field as="textarea" id="biography" name="biography" />
          <ErrorMessage name="biography" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
