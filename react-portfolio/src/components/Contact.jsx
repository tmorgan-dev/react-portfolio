import React from 'react'
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
      const templateId = 'template_4tlpkcd';
      const userId = 'sCxpV-9Nj61D4BLq7';

      await emailjs.send('default_service', templateId, data, userId);

      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
        />
        <p>{errors.name?.message}</p>
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Message:</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
        />
        <p>{errors.message?.message}</p>
      </div>

      <button type="submit">Submit</button>
      
    </form>

  );
}

export default Contact