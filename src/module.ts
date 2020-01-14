export class ModuleA
{
    #_property: string = "private property";
    get property(): string { return this.#_property; }

    constructor()
    {
    }
}