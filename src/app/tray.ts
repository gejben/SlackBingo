import { Option } from './option';

export class Tray{
    public options: Option[];
    public lastGenerated:Date;

    constructor()
    {
    }

    public generateNew(optionList:string[]){
        optionList.forEach(element => {
            this.options.push({
                text:element,
                checked:false
            })
        });
        this.lastGenerated = new Date(Date.now());
    }
}