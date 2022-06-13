// import React, { useState } from 'react'
// import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

// import IconeComContador from '../IconeComContador/IconeComContador'
// import SecaoComentario from '../SecaoComentario/SecaoComentario'

// import iconeCoracaoBranco from '../../img/favorite-white.svg'
// import iconeCoracaoPreto from '../../img/favorite.svg'
// import iconeComentario from '../../img/comment_icon.svg'

// const Post = (props) => {

// 	const [curtido, setCurtido] = useState(false)
//   const[numeroCurtidas , setNumeroCurtidas] = useState(false)
//   const[comentando , setComentando ] = useState(false)
//   const [numeroComentarios, setNumeroComentarios] = useState(false)
//   const[comentarios , setComentarios] = useState([
//     { id: 1 , texto: ""} ,
//     { id: 2 , texto: ""} ,
//     { id: 3 , texto: ""} ,

//   ]);

// 	// Dentro do array, primeiro, vem a variável curtido, que vai guardar
// 	// o valor do estado inicial. Depois, em segundo, vem a função que será 
// 	// usada para mudar o valor de curtido, quando quisermos. Ela equivale à
// 	// função this.setState para a propriedade curtido do estado. 
// 	// Além disso, o valor que é passado dentro do Hook useState (false) 
// 	// representa o valor do Estado Inicial. 

//    const onClickCurtida = ( curtida) => {
//     if (curtida === "+") {
//       setCurtido(curtido + 1)
//     } else if (curtido === "-") {
//       setCurtido( curtido - 1)
//     }
//   };

//   const onClickComentario = (event) => {
//     setComentando(event.target.value);
//   };

//   const enviarComentario = comentarios.map(( comentario) => {
//     return <li key = {comentario.id}>{comentario.texto}</li>

//   });

//   return (
//     <PostContainer>
//       <PostHeader>
//         <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
//         <p>{props.nomeUsuario}</p>
//       </PostHeader>

//       <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

//       <PostFooter>
//         <IconeComContador
//           // icone={iconeCurtida}
//           onClickIcone={onClickCurtida}
//           // valorContador={numeroCurtidas}
//         />

//         <IconeComContador
//           icone={iconeComentario}
//           onClickIcone={onClickComentario}
//           // valorContador={numeroComentarios}
//         />
//       </PostFooter>
//       {/* {caixaDeComentario} */}
//     </PostContainer>
//   )
// }

// export default Post

import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

/*   state = {
    curtido: false,
    numeroCurtidas: 0, 
    comentando: false,
    numeroComentarios: 0, 
    comentarios: []
    }
 */


  const [ curtido, setCurtido ] = useState(false)
  const [ comentarios, setComentarios ] = useState([])
  const [ ocultar, setOcultar ] = useState(false)
  const [ numeroCom, setNumerocom ] = useState(0)

  const onClickCurtida = () => {
    if(curtido) {
      return setCurtido(false)
    } else {
      return setCurtido(true)
    }
  };

  const onClickComentario = () => {
    if(ocultar) {
      return setOcultar(false)
    } else {
      return setOcultar(true)
    }
  };


  const enviarComentario = (comentario) => {

    const listaDeComentarios = [...comentarios, comentario]

    setComentarios(listaDeComentarios)
    setOcultar(false)
    setNumerocom(numeroCom + 1 )
  }

  const caixaDeComentario = ocultar ? (

    <SecaoComentario enviarComentario={enviarComentario} comentario={
      comentarios.map((comentario, x) => {
        return (
          <CommentContainer key={x}>
            <p >{comentario}</p>
          </CommentContainer>
        )
      })
    }/>

  ) : (
    comentarios.map((comentario, x) => {
      return (
        <CommentContainer key={x}>
          <p >{comentario}</p>
        </CommentContainer>
      )
    })
  )



  return (

    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={ curtido ? iconeCoracaoPreto : iconeCoracaoBranco   }
          onClickIcone={onClickCurtida}
          valorContador={ curtido ? 1 : 0 }
        />

         <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroCom}
        /> 
      </PostFooter>
      {caixaDeComentario}
      <div>{numeroCom === 0 ?  "Sem comentarios no momento" : ""}</div>
    </PostContainer>
  )
}

export default Post