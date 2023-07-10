import * as yup from 'yup';

export const timeSlotValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  restaurant_id: yup.string().nullable(),
});
