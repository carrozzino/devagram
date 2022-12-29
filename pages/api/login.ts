import type {NextApiRequest, NextApiResponse} from 'next';

export default (
    req : NextApiRequest,
    res : NextApiResponse
) => {
    if(req.method === 'POST'){
        const {login, senha} = req.body;

        if (login === "teste" && senha === "teste") {
            res.status(200).json({msg : 'Usúario autenticado com sucesso'});
        }
        return res.status(400).json({erro : 'Usuário ou senha não são válidos'});
    }
    return res.status(405).json({erro : 'Metodo informado nao e valido'});
}