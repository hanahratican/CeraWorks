import React, { useState } from 'react';
// import { GetformProvider, useGetform } from '@getform/react-getform';
import { useForm } from 'react-hook-form';

const formEndpoint = 'https://getform.io/f/d454ae62-76a9-4d1d-9356-ab1878f88873';

const initialFormState = {
  selectedService: 'Basic Detailing',
  name: '',
  email: '',
  phone: '',
  address: '',
  makeModel: '',
  date: '',
  time: '',
};

const serviceOptions = [
  { label: 'Basic Detailing', price: '$50' },
  { label: 'Interior Detailing', price: '$80' },
  { label: 'Exterior Detailing', price: '$70' },
  { label: 'Full Detailing', price: '$120' },
];

const App = () => {
  const { handleSubmit, register, reset } = useForm({ defaultValues: initialFormState });

  const [form, setForm] = useState(initialFormState);
  const { selectedService, name, email, phone, address, makeModel, date, time } = form;

  const selectService = (service) => {
    setForm((prevState) => ({ ...prevState, selectedService: service }));
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleFormSubmit = (event) => {
    // event.preventDefault();
    // const submitForm = useGetform();
    // submitForm(form)
    //   .then(() => setForm(initialFormState))
    //   .catch((error) => console.error('Form submission failed:', error));
    fetch(formEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submission successful');
          setForm(initialFormState);
        } else {
          console.error('Form submission failed');
        }
      })
      .catch((error) => {
        console.error('Form submission failed:', error);
      });
  };

  return (
    <GetformProvider formEndpoint={formEndpoint}>
      <div className="banner"></div>
      <div className="logo-container">
        <img src="../src/" alt="Logo" />
      </div>
      <main>
        <div className="schedule-card">
          <h2>Schedule an Appointment</h2>
          <form id="appointment-form" onSubmit={handleSubmit(handleFormSubmit)}>
            {Object.entries(initialFormState).map(([key, value]) => (
              <label htmlFor={key} key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
                <input
                  type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                  id={key}
                  value={value}
                  onChange={handleChange}
                  required
                  pattern={key === 'phone' ? '[0-9]+' : undefined}
                  title={key === 'phone' ? 'Numbers Only' : undefined}
                />
              </label>
            ))}
            <label htmlFor="selected-service">Service:</label>
            <div className="service-buttons">
              {serviceOptions.map(({ label, price }) => (
                <button
                  type="button"
                  className={`service-button${selectedService === label ? ' selected' : ''}`}
                  onClick={() => selectService(label)}
                  key={label}
                >
                  {label}<br />
                  <span className="service-price">{price}</span>
                </button>
              ))}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 CeraWorks. All rights reserved.</p>
      </footer>
    </GetformProvider>
  );
};

export default Schedule;
