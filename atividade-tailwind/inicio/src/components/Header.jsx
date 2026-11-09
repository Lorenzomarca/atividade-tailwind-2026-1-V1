const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="max-w-6x1 mx-auto px-4 py-4 flex justify-between items-center bg-stone-50">
        <a href="#" className="text-2xl font-bold amber-700">☕ Grão Dourado</a>
        <ul className="flex gap-6 md:flex font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a className=" hover:text-amber-700 transition-colors" href={link.href}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
