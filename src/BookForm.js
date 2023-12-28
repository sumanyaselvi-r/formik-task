import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author: Yup.string().required('Author is required'),
      isbn: Yup.string().required('ISBN is required'),
      publicationDate: Yup.date().required('Publication date is required'),
    }),
    onSubmit: values => {
      // Handle form submission (add or edit book)
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
        />
        {formik.touched.author && formik.errors.author ? (
          <div className="error">{formik.errors.author}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isbn}
        />
        {formik.touched.isbn && formik.errors.isbn ? (
          <div className="error">{formik.errors.isbn}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="publicationDate">Publication Date:</label>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.publicationDate}
        />
        {formik.touched.publicationDate && formik.errors.publicationDate ? (
          <div className="error">{formik.errors.publicationDate}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
