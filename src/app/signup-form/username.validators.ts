import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static canNotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0) 
           return { canNotContainSpace : true }
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : ValidationErrors | null {
        console.log("control.value : "+control.value);
        if(control.value === "Alok") 
            return { shouldBeUnique: true };
        
        return null;
       
        
      
    }

    // static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout( () => {
    //             if(control.value === "Alok") 
    //                 return { shouldBeUnique: true };
        
    //             return null;
    //         }, 1000);
    //     }) ;
      
    // }

    
} 