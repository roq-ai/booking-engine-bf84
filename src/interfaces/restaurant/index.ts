import { ReservationInterface } from 'interfaces/reservation';
import { TimeSlotInterface } from 'interfaces/time-slot';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  reservation?: ReservationInterface[];
  time_slot?: TimeSlotInterface[];
  user?: UserInterface;
  _count?: {
    reservation?: number;
    time_slot?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
