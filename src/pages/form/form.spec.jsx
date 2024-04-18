import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './form';

describe('Form', () => {
  it('renders the form correctly', () => {
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText('First Name:')).toBeInTheDocument();
    expect(getByLabelText('Last Name:')).toBeInTheDocument();
  });

  it('updates the form state when input changes', () => {
    const { getByLabelText } = render(<Form />);
    const firstNameInput = getByLabelText('First Name:');
    const lastNameInput = getByLabelText('Last Name:');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
  });
});