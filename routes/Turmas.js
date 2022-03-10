const express = require('express');
const router = express.Router();

const mysqlConnection = require('../mysqlConnection/mysqlConnection')

router.get('/turmas', (req,res) => {
    mysqlConnection.query('SELECT * FROM turmas',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    });
});

router.get('/turma/:id', (req, res, next)=>{
    let id = parseInt(req.params.id)
    mysqlConnection.query('SELECT * from turmas where id_turma = ?',[id], (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
  
});

router.post('/addturma', (req,res) => { 
    let id_turma = req.body.id_turma;
    let curso = req.body.curso;
    let nome_turma = req.body.nome_turma;
    let data_inicio = req.body.data_inicio;
    mysqlConnection.query('insert into turmas(id_turma,nome_turma,curso,data_inicio) values(?, ?, ?, ?)',[id_turma,nome_turma,curso,data_inicio],(resultado,error) => {
        (error)? res.send(error)
        : res.send(resultado);
    });
});


router.get('/alunos', (req, res, next)=>{
    mysqlConnection.query('SELECT * FROM alunos', 
    (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
});

router.get('/aluno/:id', (req, res, next)=>{
    let id = parseInt(req.params.id);
    mysqlConnection.query('SELECT * from alunos where id_aluno = ?',[id], (error, results, fields)=> {
       if (error) throw error;
       res.send(results);
    });
});

router.post('/addaluno', (req,res) => { 
    let id_aluno = req.body.id_aluno;
    let id_turma = req.body.id_turma;
    let nome_aluno = req.body.nome_aluno;
    let data_matricula = req.body.data_matricula;
    mysqlConnection.query('insert into alunos(id_aluno,id_turma,nome_aluno,data_matricula) values(?, ?, ?, ?)',[id_aluno,id_turma,nome_aluno,data_matricula], (resultado,error) => {
            (error)? res.send(error)
            : res.send(resultado);
    });
});

router.patch('/aluno/:id', (req,res) => { 
    let id_aluno = parseInt(req.params.id_aluno);
    let id_turma = req.body.id_turma;
    let nome_aluno = req.body.nome_aluno;
    let data_matricula = req.body.data_matricula;
    mysqlConnection.query('update alunos set id_aluno = ?, id_turma = ?, nome_aluno = ?, data_matricula = ?  where id_aluno = ?', [id_aluno,id_turma,nome_aluno,data_matricula, Description,id_aluno], (resultado,error) => {
        (error)? res.send(error)
        : res.send(resultado);
    });   
});

router.delete('/aluno/:id',(req,res) => { 
        let id = parseInt(req.params.id);
        mysqlConnection.query('delete from alunos where id_aluno = ?',[id], (resultado,error) => {
            (error)? res.send(error)
            : res.send(resultado);
        }) ; 
});


module.exports = router;