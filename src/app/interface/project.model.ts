export interface Project{
     id:string;
     img:string;
     name:string;
     description:string;
     tech:Array<string>;
     fullDescription?:string;
     link?:string;
     videoLink?:string;
     frontend?:string;
     backend?:string;
     other?:string;
}

export interface Tech{
     name:string
}