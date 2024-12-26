import { InputField } from '../types/input';

export const inputFields: InputField[] = [
  {
    id: 'yourName',
    type: 'text',
    label: 'Your Name',
    placeholder: 'Charlene Reed',
    required: true,
  },
  {
    id: 'userName',
    type: 'text',
    label: 'User Name',
    placeholder: 'Charleen Reed',
    required: true,
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'charlenereed@gmail.com',
    required: true,
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'password',
    required: true,
  },
  {
    id: 'dateOfBirth',
    type: 'picker',
    label: 'Password',
    placeholder: '25 January 1990',
    required: true,
  },
  {
    id: 'presentAddress',
    type: 'text',
    label: 'Present Address',
    placeholder: 'San Jose, California, USA',
    required: true,
  },
  {
    id: 'permanentAddress',
    type: 'text',
    label: 'Permanent Address',
    placeholder: 'San Jose, California, USA',
    required: true,
  },
  {
    id: 'city',
    type: 'text',
    label: 'City',
    placeholder: 'San Jose',
    required: true,
  },
  {
    id: 'postalCode',
    type: 'text',
    label: 'Postal Code',
    placeholder: '45962',
    required: true,
  },
  {
    id: 'country',
    type: 'text',
    label: 'Country',
    placeholder: 'USA',
    required: true,
  },
];
