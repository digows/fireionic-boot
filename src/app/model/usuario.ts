import {Entity} from './entity';

/**
 * 
 */
export class Usuario extends Entity {
    
    /**
     * 
     */
    public uid:string;
    /**
     * 
     */
    public nome:string;
    /**
     * 
     */
    public email:string;

    /**
     * 
     */
    public senha:string;
    /**
     * 
     */
    public photoURL:string;
}
