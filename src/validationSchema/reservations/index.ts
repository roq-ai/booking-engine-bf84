import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  time_slot: yup.date().required(),
  status: yup.string().required(),
  guest_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});
