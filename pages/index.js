import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link href="/about"> 
        Página About
      </Link>

      <Link href="/category/products"> 
        Página Produtos
      </Link>
    </div>
  )
}

export default Index