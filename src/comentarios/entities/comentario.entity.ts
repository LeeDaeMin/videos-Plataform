
export class Comentario {
  id: number;
  id_video: number;
}

export class UserComentario{
  id: number;
  id_user: number;
  comentario_id:number;
  comentario: string;
}
