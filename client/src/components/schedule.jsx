import React, { useState } from 'react';
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

const App = () => {
  const { handleSubmit } = useForm({ defaultValues: initialFormState });

  const [form, setForm] = useState(initialFormState);
  const { name, email, phone, address, makeModel, date, time } = form;

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleFormSubmit = () => {
    // Use fetch to send the form data to the endpoint
    fetch(formEndpoint, {
      method: 'POST',
      body: JSON.stringify(form),
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        className="schedule-card"
        style={{
          position: 'relative',
          width: '350px',
          height: '650px',
          padding: '20px',
          backgroundColor: '#303030',
          borderRadius: '4px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#F38442', fontSize: '24px' }}>Schedule an Appointment</h2>
        <form id="appointment-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="name" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            required
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <label htmlFor="email" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <label htmlFor="phone" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handleChange}
            required
            pattern="[0-9]+"
            title="Numbers Only"
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <label htmlFor="address" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleChange}
            required
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <label htmlFor="makeModel" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Car Make and Model:
          </label>
          <input
            type="text"
            id="makeModel"
            value={makeModel}
            onChange={handleChange}
            required
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <label htmlFor="date" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleChange}
            required
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <label htmlFor="time" style={{ display: 'block', marginTop: '10px', color: '#fff', fontSize: '14px' }}>
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={handleChange}
            required
            style={{
              marginTop: '5px',
              padding: '8px',
              width: '100%',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: '10px',
              cursor: 'pointer',
              backgroundColor: '#F38442',
              color: '#fff',
              transition: 'background-color 0.3s ease',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
