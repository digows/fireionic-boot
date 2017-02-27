import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * 
 */
export abstract class Entity {
    
    public $key:any; 
    public $value:any;
    protected $entityName:string;
    
    protected static firebase:AngularFire;
    
    /**
     * 
     */
    constructor() {
        Entity.firebase = window["angularFire"];
        this.$entityName = this.constructor.name;
    }
    
    /**
     * 
     */
    public insert():firebase.Promise<void> {
        const entities = Entity.firebase.database.list(this.$entityName);
        return entities.push(this);
    }
    
    /**
     * 
     */
    public update():firebase.Promise<void> {
        const entities = Entity.firebase.database.list(this.$entityName);
        return entities.update(this.$key, this);
    }
    
    /**
     * 
     */
    public remove():firebase.Promise<void> {
        const entities = Entity.firebase.database.list(this.$entityName);
        return entities.remove(this.$key);
    }
    
    public static list( query:{[key: string]: any;
                            orderByKey?: boolean,
                            orderByPriority?: boolean,
                            orderByChild?: string,
                            orderByValue?: boolean,
                            equalTo?: any,
                            startAt?: any,
                            endAt?: any,
                            limitToFirst?: number,
                            limitToLast?: number
                         } ):FirebaseListObservable<any[]> {

        return Entity.firebase.database.list(this.name, query);
    }
}
