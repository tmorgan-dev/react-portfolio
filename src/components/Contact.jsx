import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // TODO: Move these to a .ENV file
      const templateId = 'template_4tlpkcd';
      const userId = 'sCxpV-9Nj61D4BLq7';

      await emailjs.send('default_service', templateId, data, userId);

      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-black text-md">
      <div className="mb-4">
        <label className="block">Name:</label>
        <input
          {...register('name', {
            required: 'Name is required',
            onBlur: () => trigger('name'), // Trigger validation on blur
          })}
          type="text"
          className="w-1/4 h-[2rem] px-3 py-2 border rounded"
        />
        <p className="text-red-500">{errors.name?.message}</p>
      </div>

      <div className="mb-4">
        <label className="block">Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
            onBlur: () => trigger('email'), // Trigger validation on blur
          })}
          type="email"
          className="w-1/4 h-[2rem] px-3 py-2 border rounded"
        />
        <p className="text-red-500">{errors.email?.message}</p>
      </div>

      <div className="mb-8">
        <label className="block">Message:</label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            onBlur: () => trigger('message'), // Trigger validation on blur
          })}
          className="w-full lg:w-1/2 h-[8rem] px-3 py-2 border rounded" // Adjusted width using responsive classes
        />
        <p className="text-red-500">{errors.message?.message}</p>
      </div>


      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;