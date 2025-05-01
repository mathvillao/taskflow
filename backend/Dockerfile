FROM node:18                        
# Aqui ele pega a imagem do Node.js oficial e pega a versão 18
WORKDIR /app                        
# Aqui é o diretório que o container vai trabalhar

COPY packege*.json ./               
# Aqui ele vai copiar os arquivos de configuração e todas as dependências com install
RUN npm install                     
# Aqui ele vai instalar todas as dependências

COPY . .                            
# Aqui vai copiar todo projeto
EXPOSE 300                          
# Aqui vai expor a porta 300
CMD [ "node", "src/index.js" ]
# E por fim esse é o comando que roda a API
