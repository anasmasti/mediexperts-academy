export interface Formation {
   id?: number;
   name: string;
   url_img: string;
   global_event: boolean;
   mysystheme_id: number;
   description: string;
   certif: boolean;
   programme: string;
   professeur: string;
   prerequisite: string;
   category: string;
   duration: string;
   objectif: string;
   avantage: string;
   prix: number;
   prix_off: number;
   created_at: Date;
   updated_at: Date;
}
