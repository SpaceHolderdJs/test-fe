import { format } from 'date-fns';
import * as Yup from 'yup';

export const validationSchema = Yup.object({
  notificationInterval: Yup.string().required(
    'Notification Interval is required'
  ),
  notificationDay: Yup.string().required('Weekly Notification Day is required'),
  notificationTime: Yup.string().required('Time is required'),
  emailList: Yup.string()
    .required('Emails are required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email address'
    ),
  search: Yup.string().required('Search is required'),
  score: Yup.number()
    .typeError('Relevancy Score must be a number')
    .required('Relevancy Score is required'),
});

export type InitialValuesType = {
  notificationInterval: '1h' | '2h' | '3h' | '4h' | '5h' | '12h' | '24h';
  notificationDay:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';
  notificationTime: string;
  emailList: string;
  search: string;
  score: string;
};

export const notificatonIntervals = [
  '1h',
  '2h',
  '3h',
  '4h',
  '5h',
  '12h',
  '24h',
];

export const notificationDays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const initialValues: InitialValuesType = {
  notificationInterval: '1h',
  notificationDay: 'monday',
  notificationTime: format(new Date(), 'HH:mm aa'),
  emailList: '',
  search: '',
  score: '',
};
