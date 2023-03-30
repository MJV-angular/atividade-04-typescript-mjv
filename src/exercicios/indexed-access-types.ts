// Melhore a tipagem dessa função para que limite o parametro 
// somente para os tipos de handlers disponíveis e que o retorno do handler 
// corresponda ao tipo que foi passado
// Remove também o cast forçado que atualmente está evitando o erro de compilação


export const handlers = {
    click: (target: HTMLElement) => { },
    scroll: (distance: number) => { },
} as const;

export type Handlers = typeof handlers;

export type HandlerTypes = keyof Handlers;


function getHandler(handlerType: HandlerTypes): Function {
    return handlers[handlerType];
}

