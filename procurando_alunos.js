const alunos = ["João", "Juliana", "Ana", "Carla"]
const medias = [10, 8, 7.5, 9]

const listaAlunosMedia = [alunos, medias]

function exibeNome(aluno){
  if (listaAlunosMedia[0].includes(aluno)){
    const [alunos, medias] = listaAlunosMedia
    
    const indice = alunos.indexOf(aluno)

    const mediaAluno = medias[indice]
    console.log(`${aluno} tem a média ${mediaAluno}`)
  } else {
    console.log('Aluno não encontrado!')
  } 
}

exibeNome('Carla')