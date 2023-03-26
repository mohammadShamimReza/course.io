import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import MainBlog from './blog'


export default function Home() {
  const router= useRouter()
  const path = router.pathname
  console.log(router)
  if(path === '/') {

  }else if(path === '/blog'){
    <MainBlog />
  }
  return (
    <>

      
    </>
  )
}
