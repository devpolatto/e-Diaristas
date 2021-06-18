export const ValidationService = {
    cep(cep = ''): boolean {
        return cep.replace(/\D/g, '').length === 8;
    }
}

// D -> Busca qualquer coisa que não seja um Digitos
// g -> Busca em toda a string

// '' -> Subititui tudo o que não for digito por uma string vazia