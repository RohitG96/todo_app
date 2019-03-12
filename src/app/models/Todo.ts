export class Todo{
    id:number;
    created_at:Date;
    completed_at?:Date;
    completed?:boolean
    updated_at:Date;
    desc:string;
    title:string;
    deleted?:false;
    due_date:Date
}