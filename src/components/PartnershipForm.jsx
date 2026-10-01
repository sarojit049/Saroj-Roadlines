import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, FileText, Building2, Truck } from 'lucide-react';
import { COMPANY } from '../config/company';

export default function PartnershipForm({ selectedVehicle }) {
  const initialFormState = {
    companyName: '',
    contactPerson: '',
    phone: '',
    whatsappNumber: '',
    email: '',
    pickupLocation: '',
    destination: '',
    vehicleType: '19 MT Open Body',
    vehicleCapacity: '',
    vehiclesRequired: '1',
    frequency: 'One Time',
    cargoType: '',
    expectedStartDate: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '', title: '' });
  const formRef = useRef(null);

  // Update vehicleType if selected from Fleet card
  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicleType: selectedVehicle }));
    }
  }, [selectedVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (submitting) return;

    // Validate mandatory required fields
    if (
      !formData.companyName.trim() ||
      !formData.contactPerson.trim() ||
      !formData.phone.trim() ||
      !formData.pickupLocation.trim() ||
      !formData.destination.trim()
    ) {
      setStatus({
        type: 'error',
        title: 'Required Fields Missing',
        message: 'Please fill in all mandatory fields (*)',
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: '', title: '' });

    const payload = {
      companyName: formData.companyName.trim(),
      contactPerson: formData.contactPerson.trim(),
      phone: formData.phone.trim(),
      phoneNumber: formData.phone.trim(),
      whatsappNumber: (formData.whatsappNumber || formData.phone).trim(),
      email: formData.email.trim(),
      pickupLocation: formData.pickupLocation.trim(),
      destination: formData.destination.trim(),
      vehicleType: formData.vehicleType,
      vehicleCapacity: formData.vehicleCapacity.trim(),
      vehiclesRequired: formData.vehiclesRequired,
      numberOfVehicles: formData.vehiclesRequired,
      frequency: formData.frequency,
      cargoType: formData.cargoType.trim(),
      expectedStartDate: formData.expectedStartDate,
      message: formData.message.trim(),
    };

    try {
      const params = new URLSearchParams();
      Object.keys(payload).forEach((key) => {
        params.append(key, payload[key] || '');
      });

      // Use mode: 'no-cors' to avoid browser hanging on Google Apps Script redirect
      await fetch(COMPANY.googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      // Google Apps Script request dispatched successfully
      setStatus({
        type: 'success',
        title: 'Enquiry Submitted Successfully',
        message: 'Thank you! Your truck enquiry has been submitted successfully. Saroj Roadlines will contact you shortly.',
      });
      setFormData(initialFormState);
    } catch (error) {
      console.error('Truck enquiry submission error:', error);
      setStatus({
        type: 'error',
        title: 'Submission Error',
        message: 'Your enquiry could not be submitted. Please try again or contact us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="partnership-form" className="section-padding bg-light">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <div className="section-label" style={{ margin: '0 auto 0.875rem auto' }}>
            <FileText size={14} />
            <span>BUSINESS ENQUIRY FORM</span>
          </div>

          <h2 className="section-title">
            Partner With Saroj Roadlines
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Fill in your transport requirements below. Our logistics dispatch team will review your details and respond with vehicle availability and coordination details.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div className="form-card">
            {/* Status Alert Banner */}
            {status.type === 'success' && (
              <div className="alert alert-success" role="alert">
                <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                    {status.title}
                  </strong>
                  <span>{status.message}</span>
                </div>
              </div>
            )}

            {status.type === 'error' && (
              <div className="alert alert-error" role="alert">
                <AlertCircle size={24} style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                    {status.title}
                  </strong>
                  <span>{status.message}</span>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Section 1: Company Information */}
              <div className="form-section-subtitle">
                <Building2 size={20} style={{ color: '#f59e0b' }} />
                <span>Company Information</span>
              </div>

              <div className="form-group-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">
                    Company Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. ABC Steel & Logistics Ltd"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactPerson">
                    Contact Person <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98300XXXXX"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="whatsappNumber">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="e.g. 98300XXXXX (optional)"
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Section 2: Transportation Requirement */}
              <div className="form-section-subtitle" style={{ marginTop: '2rem' }}>
                <Truck size={20} style={{ color: '#f59e0b' }} />
                <span>Transportation Requirement</span>
              </div>

              <div className="form-group-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="pickupLocation">
                    Pickup Location <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="City / Industrial Area / Warehouse"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="destination">
                    Destination <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Delivery Location / City"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="vehicleType">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="19 MT Open Body">19 MT Open Body</option>
                    <option value="25 MT Open Body">25 MT Open Body</option>
                    <option value="10-Wheeler">10-Wheeler</option>
                    <option value="12-Wheeler">12-Wheeler</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="vehicleCapacity">
                    Vehicle Capacity
                  </label>
                  <input
                    type="text"
                    id="vehicleCapacity"
                    name="vehicleCapacity"
                    value={formData.vehicleCapacity}
                    onChange={handleChange}
                    placeholder="e.g. 19 Ton"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="vehiclesRequired">
                    Number of Vehicles Required
                  </label>
                  <input
                    type="number"
                    min="1"
                    id="vehiclesRequired"
                    name="vehiclesRequired"
                    value={formData.vehiclesRequired}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="frequency">
                    Frequency
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="One Time">One Time</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Regular Requirement">Regular Requirement</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="cargoType">
                    Cargo / Material Type
                  </label>
                  <input
                    type="text"
                    id="cargoType"
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleChange}
                    placeholder="e.g. TMT, Steel Coils, Machinery"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="expectedStartDate">
                    Expected Start Date
                  </label>
                  <input
                    type="date"
                    id="expectedStartDate"
                    name="expectedStartDate"
                    value={formData.expectedStartDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="message">
                    Message / Requirement
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide any additional specifications, special loading instructions, or routing preferences..."
                    className="form-textarea"
                  ></textarea>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '1rem', padding: '1rem' }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Partnership Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
