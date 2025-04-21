const cliente = require('../config/db');

exports.getAllTasks = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tarefas').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.getTaskById = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tarefas').select('*').eq('id', req.params.id);
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.createTask = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tarefas').insert(req.body);
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.deleteTask = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('tarefas').delete().eq('id', req.params.id);
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}