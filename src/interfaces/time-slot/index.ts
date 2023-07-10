import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TimeSlotInterface {
  id?: string;
  start_time: any;
  end_time: any;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TimeSlotGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
}
