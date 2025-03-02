// utils.ts หรือ models.ts

export interface Equipment {
  equipment_id: string;
  name: string;
  years: { years: number };
  qty? : number,
  model? : string,
  status? : string
  room? : string
}

export interface EquipmentResponse{
  data: Equipment[];
}
