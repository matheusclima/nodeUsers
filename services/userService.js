const cliente = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}


exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        let { data } = await cliente.supabase.from('usuario').select('*').eq('id', id);
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}