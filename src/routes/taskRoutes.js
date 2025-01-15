// Importa as funções do controlador que lidam com as requisições
import { addTask, listTasks, getTask, modifyTask, removeTask } from '../controller/taskController.js';  // Caminho correto!


// Função para definir as rotas relacionadas às tarefas
export default function taskRoutes(app) {
    // Rota para adicionar uma nova tarefa
    app.post("/Task", addTask);

    // Rota para listar todas as tarefas
    app.get("/Task", listTasks);

    // Rota para obter uma tarefa específica por ID
    app.get("/Task/:id", getTask);

    // Rota para atualizar uma tarefa por ID
    app.put("/Task/:id", modifyTask);

    // Rota para deletar uma tarefa por ID
    app.post("/Task/:id", (req, res) => {
        if (req.body._method === "DELETE") {
            return removeTask(req, res);
        } else {
            return addTask(req, res);
        }
    });
}
