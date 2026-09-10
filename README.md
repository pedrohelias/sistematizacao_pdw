# sistematizacao_pdw

API para visualização de horários de médicos e disponibilidade dos mesmos, criação de paciente, disponibilização de registros de pacientes, consultas e pacientes, e por fim a marcação de consultas.  

## Sobre a API

Com o uso da API é possível: 

- Listar todos os profissionais e suas especialidades; ✅
- Filtrar a busca de profissionais pelo nome; ✅
- Filtrar a busca por especialidade; ✅
- Listar disponibilidade específica por profissional; ✅
- Adição de Paciente; ✅
- Agendar um exame; ✅
- Listar os exames de cada paciente;✅

## Instalação

Em caso de uso local:

```bash
git clone https://github.com/pedrohelias/sistematizacao_pdw.git
cd sistematizacao_pdw
npm install
```

Junto a isso, adicionar a expressão abaixo para rodar a API em modo de desenvolvimento e utilizar o nodemon:

```bash
 "dev": "nodemon src/server.js",
```
## Configurando o .env

Para configurar o .env, é necessário adicionar as chaves do banco. Os segredos foram enviados para os usuários selecionados. A base do .env deve ser escrita como mostrado abaixo:

```bash

DATABASE_URL= *****
NODE_ENV = *****


```
## Preparando o Prisma

```bash

npx prisma generate # vai gerar ou sincronizar todo o schema 
npx prisma migrate deploy # vai realizar o migration, caso tenha algum
npm run seed:professional # vai alimentar a base de dados com exemplos reais - não necessário pois a base já está com dados aplicados


```


## Uso


```bash
npm start #para rodar sem o nodemon, tendo que reinicializar a cada alteração
npm run dev #rodar em modo de desenvolvimento, com o nodemon aplicado

```

## Para uso virtual

A API foi deployada no Render, com o seguinte link

```bash
https://sistematizacao-pdw.onrender.com
```

É possível realizar requisições a partir dessa URL. Alguns exemplos de requisição serão dispostos no repositório

## Contribuição

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
