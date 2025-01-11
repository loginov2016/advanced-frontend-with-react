export type Mods = Record<string, boolean | string>;

export function classNames(
    className: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        className,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ].join(' ');
}

//classNames('remove-btn', {hovered: false, selectable: true, red: true}, ['pdg']);
/* 
 Object.entries({hovered: false, selectable: true, red: true}) 
 === [ [hovered, false], [selectable, true], [red, true] ]
 .filter( ([_, value]) => value ) === [ [selectable, true], [red, true] ]
 .map( ([className]) => className ) === [selectable, red]
*/
