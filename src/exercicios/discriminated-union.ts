// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos

// export type User = {
//     name: string;
//     email?: string;
//     registered: boolean;
// }


export type UserRegister = {
    name: string;
    email: string;
    registered: true;
  }
  
  export type UserNotRegister = {
    name: string;
    registered: false;
  }
  
  export type User = UserRegister | UserNotRegister;