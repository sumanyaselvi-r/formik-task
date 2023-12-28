
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit, onCancel }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    publishedDate: Yup.string().required('Published Date is required'),
    description: Yup.string().required('Description is required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.errors.title && formik.touched.title && (
        <div>{formik.errors.title}</div>
      )}

      <label>Author:</label>
      <input
        type="text"
        name="author"
        value={formik.values.author}
        onChange={formik.handleChange}
      />
      {formik.errors.author && formik.touched.author && (
        <div>{formik.errors.author}</div>
      )}
      <label>ISBN:</label>
      <input
        type="text"
        name="isbn"
        value={formik.values.isbn}
        onChange={formik.handleChange}
      />
      {formik.errors.isbn && formik.touched.isbn && (
        <div>{formik.errors.isbn}</div>
      )}

      <label>Published Date:</label>
      <input
        type="date"
        name="publishedDate"
        value={formik.values.publishedDate}
        onChange={formik.handleChange}
      />
      {formik.errors.publishedDate && formik.touched.publishedDate && (
        <div>{formik.errors.publishedDate}</div>
      )}

     
      {formik.errors.description && formik.touched.description && (
        <div>{formik.errors.description}</div>
      )}

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default BookForm;
