import Fastify from "fastify";
import path from 'path'; 
import registerDb from "./src/config/DbConfig.js";
import taskRoutes from "./src/routes/taskRoutes.js";
import fastifyStatic from "@fastify/static";
import fastifyFormbody from "@fastify/formbody";

const app = Fastify();

// register do fastify formbody
app.register(fastifyFormbody);

// register do fastify static
app.register(fastifyStatic, {
    root: path.join(process.cwd()), // Serve a partir da raiz do projeto
    prefix: '/', // Caminho base para acessar os arquivos estáticos
  });
  
  // Rota para servir a página inicial (index.html)
  app.get('/', (req, res) => {
    res.sendFile('index.html');  // Serve o arquivo index.html
  });


// Registra a configuração do banco de dados e as rotas
registerDb(app);
taskRoutes(app);

// Inicia o servidor na porta 3000
app.listen({ port: 3000 }).then(() => {
  console.log("Servidor rodando na porta 3000");
});
