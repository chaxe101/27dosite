import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, BikeIcon as Motorcycle, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Car className="h-6 w-6 text-blue-400" />
                <Motorcycle className="h-5 w-5 text-blue-400 -ml-1" />
              </div>
              <span className="font-bold text-xl text-white">VrumGo</span>
            </div>
            <p className="text-sm">
              Plataforma de aluguel de carros e motos entre pessoas. Conectamos proprietários e locatários de forma
              segura e prática.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/search?type=car" className="hover:text-white transition-colors">
                  Alugar Carro
                </Link>
              </li>
              <li>
                <Link href="/search?type=motorcycle" className="hover:text-white transition-colors">
                  Alugar Moto
                </Link>
              </li>
              <li>
                <Link href="/register?source=register" className="hover:text-white transition-colors">
                  Cadastrar Veículo
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Newsletter</h3>
            <p className="text-sm">Inscreva-se para receber novidades, dicas e promoções exclusivas.</p>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input type="email" placeholder="Seu e-mail" className="pl-10 bg-gray-800 border-gray-700 text-white" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Inscrever</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} VrumGo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

