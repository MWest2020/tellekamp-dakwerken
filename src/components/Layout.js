// import React, { useState, useRef } from 'react'

// import styled from 'styled-components'
// import Nav from './Nav'
// import Burger from './Burger'
// import Menu from './Menu'
// import Jumbo from './Jumbo'
// import Footer from './Footer'

// import { useOnClickOutside } from '../utils/hook'

// import 'normalize.css'
// import GlobalStyles from '../styles/GlobalStyles'
// import Typography from '../styles/Typography'

// const SiteBorderStyles = styled.div`
//   max-width: 1100px;
//   margin: 1rem auto 4rem auto;
//   margin-top: clamp(20rem, 150vw, 12rem);
//   background: var(--red);
//   padding: 5px;
//   padding: 5px, 1vw, 25px;
//   box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
//   @media (max-width: 1100px) {
//     margin-left: 1.5rem;
//     margin-right: 1.5rem;
//   }
// `

// const ContentStyles = styled.div`
//   background: white;
//   padding: 2rem;
// `

// export default function Layout({ children }) {
//   const [open, setOpen] = useState(false)

//   const node = useRef()
//   useOnClickOutside(node, () => setOpen(false))

//   return (
//     <>
//       <GlobalStyles />
//       <Typography />
//       <Nav />
//       <div ref={node}>
//         <Burger open={open} setOpen={setOpen} />
//         <Menu open={open} setOpen={setOpen} />
//       </div>

//       <SiteBorderStyles>
//         <ContentStyles>{children}</ContentStyles>
//       </SiteBorderStyles>
//       <Footer />
//     </>
//   )
// }
