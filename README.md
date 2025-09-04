# Backend to-do-list

## Instalação sem Docker

Abra o terminal nessa pasta e digite

```bash
npm run install
```

Após concluir a instalação ainda no terminal digite

```bash
npm run start
```

Após isso o backend estará rodando

## Instalação com Docker

Abra o terminal nessa pasta e digite

```bash
docker build -t <nome da imagem> .
```

Após concluir a construção da imagem ainda no terminal digite

```bash
docker run -it -p 3000:3000 <nome da imagem>
```

Obs: Essa aplicação é somente o backend para ter acesso a uma interface e tornar o trabalho de criar uma task algo mais facil é recomendado executar a aplicação que esta no repositorio https://github.com/iagoaquino/simple-to-do-list-frontend, se irá executar com docker ou normal fica a seu criterio, ambos os casos devem funcionar.

Caso queira uma maneira mais rapida para executar o programa por completo acesse o repositorio https://github.com/iagoaquino/simple-to-do-list-assembler nele é obrigatorio o uso do docker mas com apenas 2 comandos você consegue ter o frontend e backend rodando.
