import React, { useState } from 'react';
import { GetformProvider, useGetform } from '@getform/react-getform';

const formEndpoint = 'https://getform.io/f/d454ae62-76a9-4d1d-9356-ab1878f88873';

  const [selectedService, setSelectedService] = useState('Basic Detailing');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [makeModel, setMakeModel] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const selectService = (service) => {
    setSelectedService(service);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the Getform submit function from the hook
    const submitForm = useGetform();

    // Prepare the form data
    const formData = {
      name,
      email,
      phone,
      address,
      makeModel,
      date,
      time,
      'selected-service': selectedService,
    };

    // Submit the form data to Getform.io
    submitForm(formData)
      .then(() => {
        // Reset the form
        setSelectedService('Basic Detailing');
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMakeModel('');
        setDate('');
        setTime('');
      })
      .catch((error) => {
        // Handle the error
        console.error('Form submission failed:', error);
      });
  };

  return (
    <GetformProvider formEndpoint={formEndpoint}>
      <>
        <div className="banner"></div>
        <div className="logo-container">
          <img src="../src/" alt="Logo" />
        </div>
        <main>
          <div className="schedule-card">
            <h2>Schedule an Appointment</h2>
            <form id="appointment-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]+"
                required
                title="Numbers Only"
              />

              <label htmlFor="address">Address:</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

              <label htmlFor="make-model">Car Make and Model:</label>
              <input
                type="text"
                id="make-model"
                value={makeModel}
                onChange={(e) => setMakeModel(e.target.value)}
                required
              />

              <label htmlFor="date">Date:</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

              <label htmlFor="time">Time:</label>
              <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />

              <label htmlFor="service">Service:</label>
              <div className="service-buttons">
                <button
                  type="button"
                  className={`service-button${selectedService === 'Basic Detailing' ? ' selected' : ''}`}
                  onClick={() => selectService('Basic Detailing')}
                >
                  Basic Detailing<br />
                  <span className="service-price">$50</span>
                </button>
                <button
                  type="button"
                  className={`service-button${selectedService === 'Interior Detailing' ? ' selected' : ''}`}
                  onClick={() => selectService('Interior Detailing')}
                >
                  Interior Detailing<br />
                  <span className="service-price">$80</span>
                </button>
                <button
                  type="button"
                  className={`service-button${selectedService === 'Exterior Detailing' ? ' selected' : ''}`}
                  onClick={() => selectService('Exterior Detailing')}
                >
                  Exterior Detailing<br />
                  <span className="service-price">$70</span>
                </button>
                <button
                  type="button"
                  className={`service-button${selectedService === 'Full Detailing' ? ' selected' : ''}`}
                  onClick={() => selectService('Full Detailing')}
                >
                  Full Detailing<br />
                  <span className="service-price">$120</span>
                </button>
              </div>

              <input type="hidden" id="selected-service" value={selectedService} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </main>
        <footer>
          <p>&copy; 2023 CeraWorks. All rights reserved.</p>
        </footer>
      </>
    </GetformProvider>
  );

export default App;
